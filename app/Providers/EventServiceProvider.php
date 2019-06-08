<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\Event' => [
            'App\Listeners\EventListener',
        ],
        \SocialiteProviders\Manager\SocialiteWasCalled::class => [
            // Прописываем здесь обработку события провайдерами от SocialiteProviders
			'SocialiteProviders\VKontakte\VKontakteExtendSocialite@handle',
            'SocialiteProviders\Steam\SteamExtendSocialite@handle',
            'SocialiteProviders\Twitch\TwitchExtendSocialite@handle',
            'SocialiteProviders\YouTube\YouTubeExtendSocialite@handle',
        ],
        'jdavidbakr\MailTracker\Events\ViewEmailEvent' => [
            'App\Listeners\EmailViewed',
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
