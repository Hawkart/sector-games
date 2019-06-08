<?php

namespace App\Acme\Helpers;

use Illuminate\Support\Str;
use GuzzleHttp;
use Illuminate\Http\Request;
use App\Models\UserSocialAccount;
use App\User;

class ExternStatisticHelper{

    public static function import()
    {
        $socialAccounts = UserSocialAccount::all();
        foreach($socialAccounts as $socialAccount)
        {
            if($socialAccount->user_id>0)
            {
                $user = $socialAccount->user();
                $user = $socialAccount->user()->first();
                $game_title = '';
                if($user['game_id']>0)
                {
                    $game = $user->game()->first();
                    $game_title = $game['title'];
                }
                
                if(empty($user['extern_statistic']))
                {
                    $statistic = self::getStatistic($socialAccount, $game_title);
                
                    if(count($statistic)>0)
                    {
                        $user = $socialAccount->user()->first();
                        $user->update([
                            'extern_statistic' => $statistic
                        ]);
                        
                        usleep(250000); // sleeps for 0.25 seconds
                    }
                }
                
            }
        }
    }

    public static function getStatistic(UserSocialAccount $socialAccount, $game = false)
    {        
        $provider = $socialAccount->provider;
        $statistic = [];
        
        if($provider=='steam' && $game=="Dota 2")
        {
            $steam_id = SteamHelper::convertSteamid64ToSteamid32($socialAccount->provider_user_id); 
            $openDota = new OpenDotaHelper(['returnJson' => false], []);

            $winLoss = $openDota->getPlayerWinLoss($steam_id);
            if($winLoss['win']==0)
            {
                $winrate = 0;
            }else{
                $winrate = round($winLoss['win']/($winLoss['lose']+$winLoss['win'])*100, 2);
            }
            
            $playerTotalStat = [];
            $player = $openDota->getPlayer($steam_id);
            $playerTotal = $openDota->getPlayerTotal($steam_id);
            //dd($playerTotal);
            $fields = ["kills", "death", "assist", "gold_per_min", "xp_per_min", "last_hits", "hero_damage", "tower_damage", "duration", "hero_healing"];
            if(count($playerTotal)>0)
            {
                foreach($playerTotal as $field)
                {
                    if(!in_array($field['field'], $fields)) continue;
                    
                    if($field['field']=="duration")
                    {
                        $dtF = new \DateTime('@0');
                        $dtT = new \DateTime("@".$field['sum']);
                        $result = $dtF->diff($dtT)->format('%a D, %h H, %i m');
                    }else{
                        if ($field['sum'] > 999 && $field['sum'] <= 999999) {
                            $result = floor($field['sum'] / 1000) . ' K';
                        } elseif ($field['sum'] > 999999) {
                            $result = floor($field['sum'] / 1000000) . ' M';
                        } else {
                            $result = $field['sum'];
                        }
                    }
                    
                    $playerTotalStat[] = [
                        'title' => str_replace('_', ' ', $field['field']),
                        'value' => $result
                    ];
                }
            }

            $statistic = [
                "win" => $winLoss['win'],
                "loss" => $winLoss['lose'],
                "winrate" => $winrate,
                "important" => [
                    [
                        'title' => 'Estimated MMR',
                        'value' => isset($player['mmr_estimate']['estimate']) ? $player['mmr_estimate']['estimate'] : 0
                    ]
                ],  
                "other" => $playerTotalStat
            ];
            
            //dd($statistic);
        }

        return $statistic;
    }
}