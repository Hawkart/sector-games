<?php

namespace App\Console\Commands;

use ATehnix\VkClient\Requests\Request;
use Bigperson\VkGeo\Models\City;
use Bigperson\VkGeo\Models\Country;
use Bigperson\VkGeo\Models\Region;
use App\Models\School;
use Bigperson\VkGeo\Commands\AbstractCommand;

class SchoolsImport extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'vk:import-schools
                            {--countryId=* : Ids countries for import, required in not region Id} 
                            {--regionId=* : Ids region for import, required in not country Id}
                            {--cityId=* : Ids cities for import}
                            ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import Schools from vk.com api';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $countryIds = $this->option('countryId');
        $cityIds = $this->option('cityId');

        //$this->clearTable('schools');

        if (count($countryIds)) {
            $cities = City::whereIn('country_id', $countryIds)
                ->with(['country', 'region'])
                ->get();
        }else if (count($cityIds)) {
            $cities = City::whereIn('id', $cityIds)
                ->with(['country', 'region'])
                ->get();
        } else {
            $cities = City::all();
        }

        $cities->each(function ($city) {
            $this->info('Start import schools for country '.$city->country->title." region $city->region->title"." city $city->title");
            $this->makeRequest($city);
        });
    }

    /**
     * @param array $items
     * @param int   $countryId
     * @param int   $regionId
     * @param int   $cityId
     */
    private function addSchools(array $items, int $countryId, int $regionId, int $cityId)
    {
        foreach ($items as $item) {

            \DB::transaction(function () use ($item, $countryId, $regionId, $cityId) {
                $school = School::create([
                    'id'         => $item['id'],
                    'title'      => $item['title'],
                    'country_id' => $countryId,
                    'region_id'  => $regionId,
                    'city_id'       => $cityId,
                ]);

                if (!$school) {
                    $this->error('School '.$school->title.' not imported!');
                } else {
                    $this->line($school->title.'imported');
                }
            });
        }
    }

    /**
     * @param Region $region
     * @param int    $offset
     * @param int    $count
     */
    private function makeRequest(City $city, $offset = 0, $count = 1000)
    {
        $request = new Request(
            'database.getSchools',
            [
                'city_id'  => $city->id,
                'offset'     => $offset,
                'count'      => $count,
            ]
        );

        $response = $this->client->send($request);

        usleep(config('vk-geo.delay', 1000));

        if (isset($response['response']['items']) && count($response['response']['items']) > 0) {
            $this->addSchools($response['response']['items'], $city->country->id, $city->region->id, $city->id);
            $this->makeRequest($city, $offset + $count, $count);
        } else {
            $this->info('Import schools successfully completed for '.$city->title.' '.$city->country->title);
        }
    }
}