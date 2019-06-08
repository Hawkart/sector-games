<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Acme\Helpers\SteamHelper;

class SteamUsersImport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'steam:users_import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import users from sream by friends connections';

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
        SteamHelper::importUsersFromFriends();
        /*for($i=0; $i<100; $i++)
        {
            sleep(1);
            $bar->advance();
        }*/
        $bar->finish();
    }
}
