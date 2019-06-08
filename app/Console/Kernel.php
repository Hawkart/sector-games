<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Carbon\Carbon;
use App\Models\FightTeam;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\SteamUsersImport::class,
        Commands\UsersExternStatisticImport::class,
        Commands\GenerateFakeTeams::class,
        Commands\ClearModels::class,
        Commands\GenerateFakeMatches::class,
        Commands\MatchesExternStatisticResultImport::class,
        Commands\GenerateFakeInvestors::class,
        Commands\FakeUpdateAcceleratorBefore::class,
        Commands\SchoolsImport::class,
        Commands\SearchSchoolEmails::class,
        Commands\GenerateGeoTable::class,
        Commands\EduSchoolsImport::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () 
        {
            \App\Acme\Helpers\ExternStatisticHelper::import();
        })->everyThirtyMinutes();
        
        $schedule->call(function () 
        {
            \App\Http\Controllers\FightController::getMatchesExternResults();
        })->everyThirtyMinutes();
        
        
        $schedule->call(function () 
        {
            \App\Http\Controllers\TournamentController::generateMatchesOfTournaments();
        })->everyFiveMinutes();
        
        $schedule->call(function () 
        {
            $time = Carbon::now('UTC')->subMinutes(15)->toDateTimeString();
            
            $fight_teams = FightTeam::where('status', 0)->
                whereHas('fight', function($fightQuery) use ($time){
                    $fightQuery->where('start_at', '<=', $time);
                    $fightQuery->where('status', 0);
                })->with(['fight']);
                
            if($fight_teams->count()>0)
            {
                foreach($fight_teams->get() as $fightTeam)
                {
                    $fightTeam->update([
                        'status' => 2
                    ]);
                    
                    $fightTeam->fight()->first()->update([
                        'status' => 2,
                        "cancel_text" => "Not all invitation are confirmed 15 minutes before the start of the match.",
                        "cancel_user_id" => 0
                    ]);
                }
            }
        })->everyFiveMinutes();
        
        
        $schedule->call(function () 
        {
            $time = Carbon::now('UTC')->subMinutes(5)->toDateTimeString();
            
            $fight_teams = FightTeam::where('status', 1)->
                whereHas('fight', function($fightQuery) use ($time){
                    $fightQuery->where('start_at', '<=', $time);
                    $fightQuery->where('status', 1);
                })->with(['fight']);
                
            if($fight_teams->count()>0)
            {
                foreach($fight_teams->get() as $fightTeam)
                {
                    if($fightTeam->fight()->first()->streams()->count()<2)
                    {
                        $fightTeam->fight->first()->update([
                            'status' => 2,
                            "cancel_text" => "Not enough streams for match.",
                            "cancel_user_id" => 0
                        ]);
                    }
                }
            }
        })->everyFiveMinutes();
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
