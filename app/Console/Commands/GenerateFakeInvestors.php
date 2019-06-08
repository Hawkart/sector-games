<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;
use \Webpatser\Countries\Countries;
use Faker\Factory as Faker;

class GenerateFakeInvestors extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:generate_fake_investors';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate fake investors.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $bar = $this->output->createProgressBar(100);
        $faker = Faker::create('en_US');

        $cids = Countries::pluck('id')->toArray();

        foreach (range(1, 99) as $index)
        {
            $data = [
                'active'            => true,
                'confirmed'         => true,
                'confirmation_code' => str_random(60),
                'name'              => $faker->firstName,
                'last_name'         => $faker->lastName,
                'nickname'          => $faker->unique()->userName,
                'email'             => $faker->unique()->email,
                'password'          => 'secret123',
                'remember_token'    => str_random(60),
                'role_id'           => 2,
                'type'              => 'investor',
                'phone'             => $faker->phoneNumber,
                'team_wins'         => 0,
                'person_wins'       => 0,
                'min_sponsor_fee'   => null,
                'notify'            => $faker->randomElement(['y', 'n']),
                'avatar'            => $faker->imageUrl(300, 300, 'people', true, 'Faker'),
                'country_id'        => $faker->randomElement($cids),
                'crowd_allow'       => $faker->boolean,
                'tax_country_id'    => $faker->randomElement($cids),
                'api_token'         => str_random(100)
            ];

            User::create($data);
        }

        $bar->finish();
    }
}