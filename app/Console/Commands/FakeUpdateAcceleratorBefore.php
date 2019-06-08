<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;
use App\Models\Team;
use App\Models\Fight;
use App\Models\FightTeam;
use App\Models\Game;
use \Webpatser\Countries\Countries;
use Faker\Factory as Faker;

class FakeUpdateAcceleratorBefore extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'accelerator:fake';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Change data before accelerator.';

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

        self::usersUpdate($faker);
        /*self::teamsUpdate($faker);
        self::generateMatches($faker);*/
        //self::teamUsersUpdate($faker);

        $bar->finish();
    }

    public static function teamsUpdate($faker)
    {
        $teams = Team::all();

        if($teams->count()>0)
        {
            foreach($teams as $team)
            {
                $team->update([
                    'price' => rand(2200, 8800)
                ]);
            }
        }
    }

    public static function usersUpdate($faker)
    {
        $users = User::where('id', '<>', 1);

        if($users->count()>0)
        {
            foreach($users->get() as $user)
            {
                $user->update([
                    /*'name'  => $faker->firstName,
                    'last_name' => $faker->lastName,
                    'nickname' => $faker->unique()->userName,*/
                    'password' => 'secret123'
                    //'email' => $faker->unique()->email
                ]);
            }
        }
    }

    public static function generateMatches($faker)
    {
        $teams = Team::active();
        $chunk = 2;

        $game = Game::where('title', 'Dota 2')->first();
        $game_id = $game->id;

        foreach($teams->get()->shuffle()->chunk($chunk) as $teams_chunked)
        {
            if($teams_chunked->count()==$chunk)
            {
                $canceled = false;
                $ended_flag = true;
                if($ended_flag && !$canceled)
                {
                    $date = $faker->dateTimeInInterval('- 2 days', '-1 days')->format('Y-m-d H:i:s');
                    $endt_at = $faker->dateTimeInInterval('- 20 hours', '- 2 hours')->format('Y-m-d H:i:s');
                }else{
                    $date = $faker->dateTimeInInterval('+ 1 days', '+ 5 days')->format('Y-m-d H:i:s');
                }

                $k = 0;
                $result = false;
                foreach($teams_chunked as $team)
                {
                    if($k==0)
                    {
                        $captain_1 = $team->captain()->first();
                        $bet = $faker->numberBetween(50, 200);

                        $data = [
                            'title' => "Match #",
                            'start_at' => $date,
                            'bet'   => $bet,
                            'created_id' => $captain_1->id,
                            'created_team_id' => $team->id,
                            'game_id' => $game_id,
                            'count_parts' => 2,
                            "extern_statistic" => [
                                "dire_score" => $faker->numberBetween(100, 200),
                                "radiant_score" => $faker->numberBetween(50, 99),
                                "duration" => $faker->numberBetween(800, 10000),
                                "start_time" => (int) strtotime($date)
                            ],
                            'extern_match_id' => $faker->numberBetween(10000, 9999999)
                        ];

                        $data['end_at'] = $endt_at;
                        $data['winner_id'] = $team->id;
                        $data['status'] = 3;

                        $result = Fight::create($data);

                        if($result->id>0)
                        {
                            FightTeam::create([
                                'team_id' => $team->id,
                                'fight_id' => $result->id,
                                'status' => 1
                            ]);

                            if($data['status']==3)
                            {
                                $team->update([
                                    'count_wins' => $team->count_wins + 1,
                                    'count_fights' => $team->count_fights + 1,
                                    'balance' => $team->balance + $bet
                                ]);
                            }
                        }
                    }else{
                        if($result->id>0)
                        {
                            FightTeam::create([
                                'team_id' => $team->id,
                                'fight_id' => $result->id,
                                'status' => $canceled ? 0 : 1
                            ]);

                            if($data['status']==3)
                            {
                                $team->update([
                                    'count_losses' => $team->count_losses + 1,
                                    'count_fights' => $team->count_fights + 1,
                                    'balance' => $team->balance - $bet
                                ]);
                            }
                        }
                    }
                    $k++;
                }

            }

        }
    }

    public static function teamUsersUpdate($faker)
    {
        $cids = Countries::pluck('id')->toArray();
        $teams = Team::active();
        foreach($teams->get() as $team)
        {
            $cid = $faker->randomElement($cids);
            $users = $team->users;
            foreach($users as $user)
            {
                $user->update([
                   'country_id' => $cid,
                   'tax_country_id' => $cid
                ]);
            }
        }
    }

    public static function generateTournaments($faker)
    {
        $teams = Team::active();
        $game = Game::where('title', 'Dota 2')->first();
        $game_id = $game->id;

        for($i=1; $i<=10; $i++)
        {
            $status = '';

            $data = [
                'title' => '',
                'start_at' => '',
                'end_at' => '',
                'final_at'=> '',
                'buy_in'=> '',
                'prize_pool' => $faker->numberBetween(500, 1500),
                'count_teams' => 8,
                'status' => $status,
                'min_teams' => 6,
                'count_wins' => $faker->numberBetween(1, 2),
                'description' => '',
                'rules' => '',
                'image' => '',
                'is_multiple' => false,
                'game_id' => $game_id

            ];
        }
    }
}