<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],
    
    'vkontakte' => [
        'client_id' => env('VKONTAKTE_KEY'),
        'client_secret' => env('VKONTAKTE_SECRET'),
        'redirect' => env('VKONTAKTE_REDIRECT_URI'),  
    ],
    
    'google' => [
    	'client_id' => env('GOOGLE_KEY'),
        'client_secret' => env('GOOGLE_SECRET'),
        'redirect' => env('GOOGLE_REDIRECT_URI'),
    ],
    
    'facebook' => [
        'client_id' => env('FB_KEY'),
        'client_secret' => env('FB_SECRET'),
        'redirect' => env('FB_REDIRECT_URI'),  
    ],
    
    /*'twitter' => [
        'client_id' => env('TWITTER_KEY'),
        'client_secret' => env('TWITTER_SECRET'),
        'redirect' => env('TWITTER_REDIRECT_URI'),  
    ],*/
    
    'steam' => [
        // the client_id key is required, even though it isn't utilised by the Steam provider
        'client_id' => null,
        'client_secret' => env('STEAM_KEY'),
        'redirect' => env('STEAM_REDIRECT_URI'),  
    ],
    
    'twitch' => [
        'client_id' => env('TWITCH_KEY'),
        'client_secret' => env('TWITCH_SECRET'),
        'redirect' => env('TWITCH_REDIRECT_URI'),  
    ],

    'github' => [
        'client_id' => env('GITHUB_CLIENT_ID'),
        'client_secret' => env('GITHUB_CLIENT_SECRET'),
    ],

];
