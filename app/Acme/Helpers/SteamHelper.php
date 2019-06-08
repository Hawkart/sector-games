<?php

namespace App\Acme\Helpers;

use App\Models\Game;
use App\Models\UserSocialAccount;
use App\User;
use Illuminate\Support\Str;
use Cache;
use File;
use Image;
use App\Acme\Helpers\OpenDotaHelper;

class SteamHelper{
    
    /**
     * Get channel streams
     *
     * @return mixed
     */
    static public function searchUserSummary($steam_ids)
    {
        $client = new \Zyberspace\SteamWebApi\Client(env('STEAM_KEY'));
        $steamUser = new \Zyberspace\SteamWebApi\Interfaces\ISteamUser($client);
        
        $response = $steamUser->GetPlayerSummariesV2(implode(',', $steam_ids));
        
        return $response;
    }
    
    /**
     * Get channel streams
     *
     * @return mixed
     */
    static public function getFriends($steam_id)
    {        
        $result = [];
        $client = new \Zyberspace\SteamWebApi\Client(env('STEAM_KEY'));
        $steamUser = new \Zyberspace\SteamWebApi\Interfaces\ISteamUser($client);
        $response = $steamUser->GetFriendListV1($steam_id, 'friend');

        $steam_ids = [];
        if(count($response->friendslist->friends)>0)
        {
            foreach($response->friendslist->friends as $arFriend)
            {
                $steam_ids[] = $arFriend->steamid;
            }
        }
        
        $data = [];
        if(count($steam_ids)>0)
        {
            foreach(array_chunk($steam_ids, 50) as $ids)
            {
                $data = self::searchUserSummary($ids);
                
                //remove private profiles
                $dataModified = [];
                foreach($data->response->players as $player)
                {
                    if(in_array($player->communityvisibilitystate, [3,4,5]))
                    {
                        $dataModified[] = $player;
                    }
                }
                
                $result = array_merge($result, $dataModified);
            }
        }
        
        return $result;
    }
    
    /**
     * Import friends from steam.
     */
    static public function importUsersFromFriends()
    {
        $limit = 200;
        $data = [];
        
        $socialAccounts = UserSocialAccount::where("provider", "steam");
        $provider_ids = $socialAccounts->get()->pluck("provider_user_id")->toArray();
        
        //$steam_id = self::convertSteamid32ToSteamid64('67725127');
        //$provider_ids = [$steam_id];
        //$player = self::searchUserSummary($provider_ids); 
        //$data[] = $player->response->players[0];
        
        self::krakenGetUsers($provider_ids, $limit, $data);

        foreach($data as $steamAccount)
        {
            if(!in_array($steamAccount->steamid, $provider_ids))
            {
                $account = new UserSocialAccount([
                    'provider_user_id' => $steamAccount->steamid,
                    'provider' => 'steam'
                ]);
                $user = self::createUser($steamAccount);
                $account->user()->associate($user);
                $account->save();
                $provider_ids[] = $steamAccount->steamid;
            }
        }
    }
    
    static public function krakenGetUsers($steam_ids, $limit, &$data)
    {
        if(count($data)>=$limit)   //exit from recursion
        {
            return;
        }
        
        foreach($steam_ids as $steam_id)
        {
            $steams = self::getFriends((string)$steam_id);
            $data = array_merge($data, $steams);

            $steam_ids_added = [];
            foreach($steams as $steam)
            {
                $steam_ids_added[] = $steam->steamid;
            }
            
            self::krakenGetUsers($steam_ids_added, $limit, $data);
        }
    }
    
    static function createUser($steamAccount)
    {
        $nickname = $steamAccount->personaname;
        $site = env('APP_URL', "sparta.games");
        $site = str_replace(["http://", "https://"], "", $site);
        $email = str_slug($nickname)."@".$site;
        $confirmed = 1;
        $active = 1;
            
        $avatar = $steamAccount->avatarfull;
        if(!empty($avatar))
        {
            $extension = strtolower(File::extension(basename($avatar)));
            if(in_array($extension, ["jpg", "jpeg", "png"]) && !empty($avatar) && @getimagesize($avatar))
            {
                $image = 'avatars/'.basename($avatar);
                $image = str_replace(array("%", "+", ":"), "", $image);
                Image::make($avatar)->save(public_path("storage/".$image));
                $avatar = $image;
            }
        }else{
            $avatar = null;
        }
        
        $schedule = [];
        for($d=0; $d<7; $d++)
        {
            for($h=0; $h<=23; $h++)
            {
                if($h<10)
                {
                    $hh = "0".$h;
                }else{
                    $hh = (string)$h;
                }
                
                $schedule[] = $d.",".$hh;
            }
        }
        $password = '1234567';
                              
        $data = [
            'email' => $email,
            'nickname' => $nickname."_".$steamAccount->steamid,
            'name' => isset($steamAccount->realname) ? $steamAccount->realname : $nickname,
            'password' => $password,
            'avatar' => $avatar,
            'confirmed' => $confirmed,
            'active' => $active,
            'type' => 'player',
            'game_id' => 5, //
            'schedule' => $schedule,
            'free_player' => 0,
            'balance' => 1000,
            'country_id' => 643          
        ];                               
        
        return User::create($data);
    }
    
    public static function convertSteamid64ToSteamid32($id)
    {
        $result = substr($id, 3) - 61197960265728;
        return (string) $result;
    }
    
    public static function convertSteamid32ToSteamid64($id)
    {
        if(strlen($id) < 16)
            $result = bcadd($id, '76561197960265728');
        else
            $result = $id;
            
        return (string) $result;
    }
    
    public static function getDota2Player($steam_id32)
    {
        if(strlen((string)$steam_id32)>=16)
            $steam_id32 = self::convertSteamid64ToSteamid32($steam_id32);
        
        $openDota = new OpenDotaHelper(['returnJson' => true], []);
        return $openDota->getPlayer($steam_id32);
    }
    
    public static function getDota2PlayerWinLoss($steam_id32)
    {
        if(strlen((string)$steam_id32)>=16)
            $steam_id32 = self::convertSteamid64ToSteamid32($steam_id32);
        
        $openDota = new OpenDotaHelper(['returnJson' => true], []);
        return $openDota->getPlayerWinLoss($steam_id32);
    } 
    
    public static function getDota2PlayerTotal($steam_id32)
    {
        if(strlen((string)$steam_id32)>=16)
            $steam_id32 = self::convertSteamid64ToSteamid32($steam_id32);
        
        $openDota = new OpenDotaHelper(['returnJson' => true], []);
        return $openDota->getPlayerTotal($steam_id32);
    } 
    
    public static function getDota2PlayerMatches($steam_id32)
    {
        if(strlen((string)$steam_id32)>=16)
            $steam_id32 = self::convertSteamid64ToSteamid32($steam_id32);
        
        $openDota = new OpenDotaHelper(['returnJson' => true], []);
        return $openDota->getPlayerMatches($steam_id32);
    } 
    
    public static function getDota2Match($match_id)
    {
        $openDota = new OpenDotaHelper(['returnJson' => true], []);
        return $openDota->getMatch($match_id);
    }  
    
    
}