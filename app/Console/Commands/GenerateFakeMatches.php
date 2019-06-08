<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Team;
use App\Models\TeamUser;
use App\Models\Fight;
use App\Models\FightTeam;
use App\User;
use App\Acme\Helpers\ScheduleHelper;
use Faker\Factory as Faker;

class GenerateFakeMatches extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fights:generate_fake';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate fake fights for teams.';

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
        
        $teams = Team::active();
        $chunk = 2;
        
        foreach($teams->get()->shuffle()->chunk($chunk) as $teams_chunked)
        {
            if($teams_chunked->count()==$chunk)
            {
                $canceled = $faker->boolean;
                $ended_flag = $faker->boolean;
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
                            'game_id' => 5,
                            'count_parts' => 2
                        ];
                        
                        if($ended_flag && !$canceled)
                        {
                            $data['end_at'] = $endt_at;
                            $data['winner_id'] = $team->id;
                            $data['status'] = 3;
                        }
                        else if($canceled)
                        {   
                            $texts = [
                                "Not all invitation are confirmed 15 minutes before the start of the match.",
                                "Not enough streams for match."
                            ];
                            $data['status'] = 2;
                            $data["cancel_text"] = $texts[array_rand($texts)];
                            //$data["cancel_user_id"] = 0;
                            
                        }else{     
                            $data['status'] = $faker->numberBetween(0,1);  
                        }
 
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
        
        $bar->finish();
    }
}