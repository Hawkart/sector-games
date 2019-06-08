<?php namespace Acme\Filters;
use Illuminate\Routing\Route;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;

class CacheFilter{

    public function fetch(Route $route, Request $request)
    {
        $key = $this->makeCacheKey($request->url());

        if(Cache::has($key)) return Cache::get($key);
    }

    public function put(Route $route, Request $request, Response $response)
    {
        $key = $this->makeCacheKey($request->url());

        if(!Cache::has($key)) Cache::put($key, $response->getContent(), 60);
    }

    protected function makeCacheKey($url)
    {
        return 'route_'.Str::slug($url);
    }
}