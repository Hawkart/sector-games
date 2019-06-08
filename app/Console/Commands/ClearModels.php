<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Team;
use App\Models\FightTeam;
use App\Models\TeamUser;
use App\Models\Game;
use App\Models\Fight;
use App\Models\UserSocialAccount;
use App\User;
use App\Acme\Helpers\ScheduleHelper;
use DB;

use Carbon\Carbon;

class ClearModels extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'models:clear';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear data from models.';

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
        
        DB::statement("SET foreign_key_checks=0");
        /*User::where('id', '<>', 1)->delete();
        UserSocialAccount::truncate();
        */
        //Team::truncate();
        //TeamUser::truncate();
        Fight::truncate();
        FightTeam::truncate();
        DB::statement("SET foreign_key_checks=1");
        
        $bar->finish();
    }
}