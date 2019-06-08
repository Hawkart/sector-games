<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Team;
use App\Models\TeamUser;
use App\User;
use App\Acme\Helpers\ScheduleHelper;
use Faker\Factory as Faker;

class GenerateFakeTeams extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'teams:generate_fake';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate fake teams and team-user connection.';

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
        
        foreach(User::active()->get() as $user)
        {
            $user->update(['team_id' => null]);
        }

        $users = User::active()->where("id", '<>', 1)->whereNull('team_id');
        foreach($users->get()->chunk(5) as $team_users)
        {
            //echo $team_users->count()."\r\n";
            if($team_users->count()==5)
            {
                $k = 0;
                $team_id = false;
                $capt_id = false;
                $avatar = '';
                foreach($team_users as $team_user)
                {
                    //Create team
                    if($k==0)
                    {
                        $capt_id = $team_user->id;
                        $avatar = $team_user->avatar;
                        
                        $data = [
                            'title' => $faker->company,
                            'slug' => str_slug($faker->company),
                            'game_id' => 5,
                            'quantity' => 5,
                            'created_at' => \Carbon\Carbon::now()->timestamp,
                            'capt_id' => $capt_id,
                            'status' => 1,
                            "image" => $avatar,
                            'balance' => $faker->numberBetween(2000, 5000)
                        ];
                        
                        //dd($data);
                        
                        $arSchedules = $team_user->schedule;
                        $blockSchedules = ScheduleHelper::getCrossingBlocks($arSchedules, 3);
                        $data['schedule'] = $blockSchedules;
                        $result = Team::create($data);
                        $team_id = $result->id;
                        $k++;
                    }
                    
                    //Create team connections
                    if($team_id>0)
                    {
                        TeamUser::create([
                            "user_id" => $team_user->id,
                            "team_id" => $team_id,
                            "sender_id" => $capt_id,
                            "status" => TeamUser::ACCEPTED,
                            "start_at" => \Carbon\Carbon::now()->timestamp
                        ]);
                        
                        $team_user->update(['team_id' => $team_id]);
                    }
                }
            }
        }
        
        $bar->finish();
    }
}