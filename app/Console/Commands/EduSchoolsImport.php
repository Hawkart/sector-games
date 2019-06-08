<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\EduSchool;
use Carbon\Carbon;
use Goutte\Client;

class EduSchoolsImport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'edu:import-schools';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import Edu Schools';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $base_url = 'http://www.edu.ru';

        $client = new Client();
        $crawler = $client->request('GET', $base_url.'/schools/catalog/');

        EduSchool::truncate();  //delete all data from table
        $this->info("Get list of Subjects");

        $subjects = [];
        $subjects = $crawler->filter('.tdcont table a')->each(function ($node)
        {
            return [
                'title' => $node->text(),
                'link' => $node->attr('href')
            ];
        });

        //Get all schools from subjects from all pages
        foreach($subjects as $subject)
        {
            $this->info("Get schools of ".$subject['title']);

            $page_adding = '';
            $crawler = $client->request('GET', $base_url.$subject['link'].$page_adding);

            //Get pgination pages
            $pagination = $crawler->filter('.tdcont div a')->each(function ($node) use ($subject)
            {
                $link = $node->attr('href');

                if( substr_count($link, $subject['link'])>0)
                {
                    $link = str_replace([$subject['link'], '_page/', '/'], '', $link);
                    return intval($link);
                }

                return 0;
            });

            //Get max page in pagination
            if(count($pagination)>0)
            {
                $max_page = max($pagination);
            }else{
                $max_page = 1;
            }

            $k = 1;
            while($k<=$max_page)
            {
                if($k>1)
                {
                    $page_adding = "_page/".$k."/";
                }else{
                    $page_adding = "";
                }

                $crawler = $client->request('GET', $base_url.$subject['link'].$page_adding);

                $this->info($base_url.$subject['link'].$page_adding);

                $schoolsOfSsubject = $crawler->filter('.tdcont table tr.place1 a')->each(function ($node)
                {
                    return [
                        'title' => $node->text(),
                        'link' => $node->attr('href')
                    ];
                });

                usleep(500);

                $this->info("Import schools of ".$subject['title']." page #".$k);
                $this->addSchools($schoolsOfSsubject);
                $k++;
            }
        }
    }

    private function addSchools($schools)
    {
        $base_url = 'http://www.edu.ru';
        $client = new Client();

        //Parse Schools pages and add to DB
        if(count($schools)>0)
        {
            foreach ($schools as $schoolPage)
            {
                try{
                    $crawler = $client->request('GET', $base_url . $schoolPage['link']);

                    if($crawler===null || $crawler->filter('.tdcont h1')->count()==0 || empty($schoolPage['link']))
                        continue;

                    $title = $crawler->filter('.tdcont h1')->first()->text();
                    $website = $address = $director = $phone = '';
                    $emails = [];

                    $props = $crawler->filter('.tdcont div b')->each(function ($node)
                    {
                        $parent = $node->parents()->first();
                        $b = $parent->filter('b')->first();
                        $value = str_replace([$b->text(), '<b></b>', "\n", "'+'"], '', $parent->html());

                        if ($b->text() == 'Интернет сайт') {
                            preg_match('~<a.*?href="([^"]+)".*?>(.*?)~s', $value, $matches);
                            $value = $matches[1];
                        }

                        if ($b->text() == 'E-mail:') {
                            preg_match('~<a.*?href="([^"]+)".*?>(.*?)</a>~s', $value, $matches);
                            $value = $matches[2];
                        }

                        return [
                            'title' => str_replace([':'], '', $b->text()),
                            'value' => trim($value)
                        ];
                    });

                    foreach ($props as $prop)
                    {
                        switch ($prop['title'])
                        {
                            case 'Интернет сайт':
                                $website = $prop['value'];
                                break;
                            case 'Адрес':
                                $address = $prop['value'];
                                break;
                            case 'E-mail':
                                $emails[] = $prop['value'];
                                break;
                            case 'Телефон':
                                $phone = $prop['value'];
                                break;
                            case 'Директор':
                                $director = $prop['value'];
                                break;
                        }
                    }

                    EduSchool::create([
                        "title" => $title,
                        "emails" => $emails,
                        "address" => $address,
                        "director" => $director,
                        "website" => $website,
                        "phone" => $phone,
                        "props" => $props
                    ]);

                    //$this->line($title . 'imported');
                    usleep(1000);
                } catch (Exception $e) {
                    echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
                    usleep(3000);
                }

            }
        }
    }
}