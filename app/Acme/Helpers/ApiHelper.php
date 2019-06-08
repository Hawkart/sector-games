<?php

namespace App\Acme\Helpers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use ApiHandler;

class ApiHelper{
    
    public static function parseSingle($queryBuilder, $identification, $queryParams)
    {
        $path = Route::getFacadeRoot()->current()->uri();
        $path = str_replace("api/", "", $path);
        $methods = Route::getFacadeRoot()->current()->methods();

        //make cache
        if(in_array("GET", $methods))
        {
            $tags = explode("/", $path);
            //return response()->json(Route::getFacadeRoot()->current(), 200);
            /*$cacheTags = Cache::tags('twitch', 'searchStreamsByGames');
        
            if ($cacheTags->get($game_id)){
                return $cacheTags->get($game_id);
            } else {
                
                $cacheTags->put($game_id, $streams, 60);
                return $streams;
            }*/
        }
        //return response()->json(, 200);

        return ApiHandler::parseSingle($queryBuilder, $identification, $queryParams)->cleanup(true)->getResponse();
    }
    
    public static function parseMultiple($queryBuilder, $fullTextSearchColumns, $queryParams)
    {
        $path = Route::getFacadeRoot()->current()->uri();
        $path = str_replace("api/", "", $path);
        
        if(isset($queryParams["page"]) && intval($queryParams["page"])>0 || (isset($queryParams["_limit"]) && intval($queryParams["_limit"])>0))
        {
            unset($queryParams["page"]);
            if(isset($queryParams["_limit"]) && intval($queryParams["_limit"])>0)
            {
                $limit = intval($queryParams["_limit"]);
            }else{
                $limit = 10;
            }
            return ApiHandler::parseMultiple($queryBuilder, $fullTextSearchColumns, $queryParams)->getBuilder()->paginate($limit);//->getBuilder()->toSql();
        }else{
            return ApiHandler::parseMultiple($queryBuilder, $fullTextSearchColumns, $queryParams)->cleanup(true)->getResponse();
        }
    }
}