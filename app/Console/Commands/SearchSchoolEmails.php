<?php

namespace App\Console\Commands;

use ATehnix\VkClient\Requests\Request;
use Bigperson\VkGeo\Models\City;
use Bigperson\VkGeo\Models\Country;
use Bigperson\VkGeo\Models\Region;
use App\Models\School;
use App\Models\Team;
use Bigperson\VkGeo\Commands\AbstractCommand;
use App\Acme\Helpers\VkHelper;

class SearchSchoolEmails extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'vk:search-schools-emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Search schools emails on oficial websites.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $schools = School::with(['country', 'region'])->get();

        $schools->each(function ($school) {
            $this->info('Start search emails schools country'.$school->country->title." region". $school->region->title." school $school->title");
            $this->makeRequest($school);
            die();
        });
    }

    /**
     * @param Region $region
     * @param int    $offset
     * @param int    $count
     */
    private function makeRequest(School $school, $offset = 0, $count = 1000)
    {
        VkHelper::searchUsers(School);

        dd($response);
    }
}