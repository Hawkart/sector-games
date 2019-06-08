<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Game;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('_partials.left_sidebar', function($view){
            $view->with('popularGames', Game::orderBy('id', 'asc')->limit(5)->get());
        });
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}