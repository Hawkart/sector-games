<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\FightController;

class MatchesExternStatisticResultImport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fights:import_extern_statistic';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import results and statistic from extern resource';

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
        FightController::getMatchesExternResults();      
        $bar->finish();
    }
}
