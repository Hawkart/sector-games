<?php

namespace App\Acme\Helpers;

use App\Models\Game;
use Illuminate\Support\Str;
use Cache;
use Illuminate\Http\Request;

class TwitchHelper{
    
    /**
     * Get channel streams
     *
     * @return mixed
     */
    static public function searchStreamsByGame($game_id)
    {
        $cacheTags = Cache::tags(['twitch', 'searchStreamsByGames']);
        
        if ($cacheTags->get($game_id)){
            return $cacheTags->get($game_id);
        } else {
        
            $game = Game::findOrFail($game_id);
        
            $twitchClient = new \TwitchApi\TwitchApi([
                'client_id' => env('TWITCH_API_CLIENT_ID')
            ]);            
            $channels = [];
            $limit = 10;
            $offset = 0;
            $responseTwitch = $twitchClient->searchStreams(urlencode($game['title']), $limit, $offset, true);
            $total = intval($responseTwitch['_total']);
            $streams = $responseTwitch["streams"];
            
            $cacheTags->put($game_id, $streams, 60);
            return $streams;
        }
    }
    
    public function channelShow($channel)
    {
        $cache_key = Str::slug($channel);
        $cacheTags = Cache::tags(['twitch', 'twitchChannelShow']);
        
        if ($cacheTags->get($cache_key)){
            $channel = $cacheTags->get($cache_key);
        } else {

            $twitchClient = new \TwitchApi\TwitchApi([
                'client_id' => env('TWITCH_API_CLIENT_ID')
            ]);
            $twitchClient->setApiVersion(4);
            $channel = $twitchClient->getChannel($channel);
            
            $cacheTags->put($cache_key, $channel, 60);
        }
        
        return $channel;
    }
    
    public function getFeaturedStreams(Request $request)
    {
        $cache_key = 'getFeaturedStreams';
        
        $cacheTags = Cache::tags('twitch');
        
        if ($cacheTags->get($cache_key)){
            $streamsFiltered = $cacheTags->get($cache_key);
        } else {
            
            $games = Game::select(['title'])->pluck('title')->toArray();
            
            $twitchClient = new \TwitchApi\TwitchApi([
                'client_id' => env('TWITCH_API_CLIENT_ID')
            ]); 
            
            $limit = 100;
            $offset = 0;
            if($request->has('limit')) 
            {
                $limit = intval($request->get('limit'));
            } 
            if($request->has('offset')) 
            {
                $offset = intval($request->get('offset'));
            }
    
            $responseTwitch = $twitchClient->getFeaturedStreams($limit, $offset);
            $streams = $responseTwitch["featured"];
            
            $streamsFiltered = [];
            foreach($streams as $stream)
            {
                if(in_array($stream['stream']['game'], $games))
                {
                    $streamsFiltered[] = $stream;
                }
            }
            unset($streams);
            
            $cacheTags->put($cache_key, $streamsFiltered, 10);
        }

        return $streamsFiltered;
    }
    
    public static function getVideosByUsername($channel)
    {
        $twitchClient = new \TwitchApi\TwitchApi([
            'client_id' => env('TWITCH_API_CLIENT_ID')
        ]);
        $twitchClient->setApiVersion(4);
        
        $limit = 50;
        $offset = 0;
        $responseTwitch = $twitchClient->getChannelVideos($channel, $limit, $offset);
        
        return $responseTwitch['videos'];
    }
}