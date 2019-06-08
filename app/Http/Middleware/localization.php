<?php

namespace App\Http\Middleware;
use Illuminate\Foundation\Application;

use Closure;

class localization
{
    /**
     * Localization constructor.
     *
     * @param \Illuminate\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Check header request and determine localizaton
        $locale = ($request->hasHeader('Accept-Language')) ? $request->header('Accept-Language') : $this->app->config->get('app.locale');

        // set laravel localization
        $this->app->setLocale($locale);

        // get the response after the request is done
        $response = $next($request);

        // set Content Languages header in the response
        $response->headers->set('Accept-Language', $locale);

        // return the response
        return $response;
    }
}