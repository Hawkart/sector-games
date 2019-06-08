<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Bigperson\VkGeo\Models\City;
use Bigperson\VkGeo\Models\Country;
use Bigperson\VkGeo\Models\Region;
use App\Models\Institution;
use App\Models\School;
use App\Models\Location;

class GenerateGeoTable extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'locations:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate geo locations table from countries, regions, cities + institutions connections';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $countries = Country::all();
        $regions = Region::with(['country'])->get();

        \DB::statement("SET foreign_key_checks=0");
        Location::truncate();
        Institution::truncate();
        \DB::statement("SET foreign_key_checks=1");

        $parents = [];
        foreach($countries as $country)
        {
            $geo = $this->addGeo($country->title, 0);
            $parents['countries'][$country->id] = $geo->id;
        }

        foreach($regions as $region)
        {
            $geo = $this->addGeo($region->title, $parents['countries'][$region->country->id]);
            $parents['regions'][$region->id] = $geo->id;
        }

        unset($parents['countries']);

        City::chunk(100, function ($cities) use (&$parents) {
            foreach ($cities as $city) {
                $geo = $this->addGeo($city->title, $parents['regions'][$city->region->id]);
                $parents['cities'][$city->id] = $geo->id;
            }
        });

        unset($parents['regions']);

        School::chunk(100, function ($schools) use ($parents) {
            foreach ($schools as $school) {
                $this->addInstitution($school->title, $parents['cities'][$school->city->id]);
            }
        });

    }

    private function addGeo($title, $parent_id)
    {
        return \DB::transaction(function () use ($title, $parent_id) {

            $data = [
                'title' => $title
            ];

            if($parent_id>0)
                $data['parent_id'] = $parent_id;

            $geo = Location::create($data);

            if (!$geo) {
                $this->error($title.' not created!');

                return false;
            } else {
                $this->line($title.' created');

                return $geo;
            }
        });
    }

    private function addInstitution($title, $city_id)
    {
        return \DB::transaction(function () use ($title, $city_id) {

            $data = [
                'title' => $title,
                'location_id' => $city_id
            ];

            $institution = Institution::create($data);

            if (!$institution) {
                $this->error($title.' not created!');

                return false;
            } else {
                $this->line($title.' created');

                return $institution;
            }
        });
    }
}