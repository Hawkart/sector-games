<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Acme\Helpers\ExternStatisticHelper;

class UsersExternStatisticImport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:import_extern_statistic';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import statistic from extern resource';

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
        ExternStatisticHelper::import();        
        $bar->finish();
    }
}
