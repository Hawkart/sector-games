<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\Fight;
use App\Models\Team;
use App\Models\FightTeam;
use App\Models\FightUser;
use App\Models\Tournament;
use App\Models\TeamTournament;
use App\Models\Game;
use App\User;
use Illuminate\Http\Request;
use Cache;
use Validator;
use App\Acme\Helpers\ApiHelper;
use App\Acme\Helpers\OpenDotaHelper;
use App\Acme\Helpers\SteamHelper;
use Carbon\Carbon;

class FightController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $figths = new Fight();      
        return ApiHelper::parseMultiple($figths, ['title', 'game_id'], $request->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {        
        $rules = [
            'title' => 'required|max:255',
            'start_at' => 'required|date_format:Y-m-d H:i:s',
            'bet'   => 'required|integer'
        ];
        $input = $request->all();  
        $start = $input["start_at"];
        $team_against_id = $input['team_id'];
        $input['title'] = $request['title'] = "Team #".$request->user()->team_id." vs Team #".$team_against_id;
              
        $currentFights = FightTeam::where('team_id', '=', $request->user()->team_id)->
            whereHas('fight', function($fightQuery) use ($start){
                $fightQuery->where('start_at', $start);
                $fightQuery->where('status', '<>', 2);
            });
                  
        $diff = 0;
        if($currentFights->count()>0)
        {
            $diff = strtotime(Carbon::now('UTC')->toDateTimeString()) - strtotime($currentFights->first()->created_at);
            
            if($diff<30*60)
            {
                return response()->json([
                    'error' => 'Team has fight on this time!'
                ], 422);
            }
        }
        
        $validator = Validator::make($request->all(), $rules);
        
        if ($validator->fails()) 
        {
            return response()->json($validator->messages(), 422);
        }else{
            
            //Delete last battle on this time
            if($currentFights->count()>0 && $diff>30*60)
            {
                $currentFights->first()->update([
                    "status" => 2,
                    "cancel_text" => "Match is rejected. New match created on this time!",
                    "cancel_user_id" => $request->user()->id
                ]);
            }

            unset($input["team_id"]);
            $userTeam = $request->user()->team()->first();
            $arGame = $request->user()->game()->first();
            
            if($userTeam->capt_id!=$request->user()->id)
            {
                return response()->json([
                    'created_id' => ['Only captain can create the match.']
                ], 422);
            }
            
            $input['created_id'] = $request->user()->id;
            $input['created_team_id'] = $request->user()->team_id;
            $input['game_id'] = $arGame->id;
            $input['count_parts'] = 2;  //In future we can change it!
            
            $result = Fight::create($input);
            
            FightTeam::create([
                'team_id' => $request->user()->team_id,
                'fight_id' => $result->id,
                'status' => 1
            ]);
            
            FightTeam::create([
                'team_id' => $team_against_id,
                'fight_id' => $result->id,
                'status' => 0
            ]);
            
            //TODO: Add email to captain of team against
            
            return response()->json($result, 200); 
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request  $request)
    {
        $fight = new Fight();
        return ApiHelper::parseSingle($fight, $id, $request->all());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $fight = Fight::findOrFail($id);
        $user = $request->user();
        $team = $user->team()->first();
        
        $team_ids = Fight::find($id)
            ->invitations()
            ->select(['team_id'])
            ->pluck('team_id')
            ->all();
            
        if($team['capt_id']!=$user->id)
        {
            return response()->json([
                'error' => 'You are not a captain of the team!'
            ], 422);
        }
            
        if(!in_array($user->team_id, $team_ids))
        {
            return response()->json([
                'error' => 'The team is not connected to the match.'
            ], 422);
        }
        
        $message = "Data has not changed";
        
        if($fight->status==1 && $request->get('status')==2)
        {
            $fight->update([
                "status" => 2,
                "cancel_text" => "The match was rejected.",
                "cancel_user_id" => $user->id
            ]);
            
            $message = "The match canceled successfully!";
        }
        
        if($request->has('extern_match_id'))
        {
            $fight->update([
                "extern_match_id" => $request->get('extern_match_id')
            ]);
            $message = "The match extern id is saved successfully!";
        }
        
        return response()->json([
            'message' => $message
        ], 200); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    
    /**
     * Get all teams of fight
     */
    public function teams($id, Request $request)
    {
        $team_ids = Fight::find($id)
            ->invitations()
            ->select(['team_id'])
            ->pluck('team_id')
            ->all();
            
        $teams = Team::whereIn("id", $team_ids);
              
        return ApiHelper::parseMultiple($teams, ['title'], $request->all());
    }
    
    
    /**
     * Get users of fight through the teams
     */
    public function users($id, Request $request)
    {
        $team_ids = Fight::find($id)
            ->invitations()
            ->select(['team_id'])
            ->pluck('team_id')
            ->all();
            
        $users = User::whereIn("team_id", $team_ids);
              
        return ApiHelper::parseMultiple($users, [], $request->all());
    }
    
    /**
     * Get results for dota2's matches by extern_match_id
     */
    public static function getMatchesExternResults()
    {
        $fights = Fight::where('winner_id', 0)
            ->orWhereNull('winner_id')
            ->whereNotNull('extern_match_id')
            ->whereHas('game', function($query){
                $query->where('title', 'Dota 2');
            })
            ->get();
  
        foreach($fights as $fight)
        { 
            $match_id = $fight->extern_match_id;
            $fightTeams = $fight->invitations()->get();
            
            $teams = [];
            foreach($fightTeams as $fightTeam)
            {
                if($fightTeam->status==1)
                {
                    $team = $fightTeam->team()->first();
                    $players = $team->users()->get();
                    
                    $team['players'] = $players;
                    $teams[] = $team;
                }
            }
            
            $openDota = new OpenDotaHelper(['returnJson' => false], []);
            $match = $openDota->getMatch($match_id);
            
            if(!isset($match['players']))
                continue;
            
            $winner = false;
            foreach($match['players'] as $matchPlayer)
            {
                $account_id = $matchPlayer['account_id'];
                $win = $matchPlayer['win'];
                
                if(!empty($account_id) && $win)
                {
                    $steam_id = SteamHelper::convertSteamid32ToSteamid64($account_id);
                    
                    foreach($teams as $team)
                    {
                        foreach($team['players'] as $player)
                        {
                            $socialAccounts = $player->socialAccounts();
                            if($socialAccounts->count()>0)
                            {
                                foreach($socialAccounts->get() as $socialAccount)
                                {
                                    if($socialAccount['provider']=='steam' && $socialAccount['provider_user_id'] == $steam_id)
                                    {
                                        $winner = $team['id'];
                                    }
                                }
                            }
                        }
                        
                        if($winner)
                            break;
                    }
                }
                
                if($winner)
                    break;
            }
            
            if($winner)
            {
                $tournament_id = intval($fight->tournament_id);
                $is_end = false;
                if($tournament_id>0)
                {
                    $tournament = Tournament::findOrFail($tournament_id);
                    $tournament_teams = $tournament->teams;
                    $tournament_fights = $tournament->fights;
                    
                    $last_place = $tournament_teams->count()+1;
                    foreach($tournament_teams as $tournament_team)
                    {
                        if(intval($tournament_team->place)>0 && intval($tournament_team->place)<$last_place)
                        {
                            $last_place = $tournament_team->place;
                        }
                    }
                    
                    //Check tournament end and final
                    if($fight->tournament_step==intval(log($tournament->count_teams, 2)))
                    {
                        //count winners for final matches
                        $winners_ids = [$winner];
                        foreach($tournament_fights as $tournament_fight)
                        {
                            if($tournament_fight->tournament_step==$fight->tournament_step && intval($tournament_fight->winner_id)>0)
                            {
                                $winners_ids[] = $tournament_fight->winner_id;
                            }  
                        }
                        $arWinners = array_count_values($winners_ids);
                        
                        if(array_search(intval($tournament->count_wins), $arWinners))
                        {
                            $is_end = true;
                        }
                    }
                }
                
                foreach($teams as $team)
                {
                    if($winner==$team['id'])
                    {
                        //set place in tournament's final match
                        if($is_end)
                        {
                            $TeamTournament = TeamTournament::where('tournament_id', $tournament_id)
                                ->where('team_id', $team->id)
                                ->get();
                                
                            $TeamTournament->update([
                                'place' => $place--
                            ]);
                            
                            $tournament->update([
                                'end_at' => Carbon::now('UTC')
                            ]);
                        }
                        
                        $team->update( [
                            'count_wins' => $team['count_wins'] + 1,
                            'count_fights' => $team['count_fights'] + 1
                        ]);
                        
                        foreach($team['players'] as $player)
                        {
                            $player->update([
                                'team_wins' => $player['team_wins'] + 1
                            ]);
                        }
                        
                    }else{
                        
                        //set place in tournament's match
                        if($tournament_id>0)
                        {
                            $TeamTournament = TeamTournament::where('tournament_id', $tournament_id)
                                ->where('team_id', $team->id)
                                ->get();
                                
                            $TeamTournament->update([
                                'place' => $last_place--
                            ]);
                        }
                        
                        $team->update([
                            'count_losses' => $team['count_losses'] + 1,
                            'count_fights' => $team['count_fights'] + 1
                        ]);
                    }
                }
                
                
                //TODO: add money transactions

                $fight->update([
                    "winner_id" => $winner,
                    "extern_statistic" => [
                        "dire_score" => $match["dire_score"],
                        "radiant_score" => $match["radiant_score"],
                        "duration" => $match["duration"],
                        "start_time" => (int) $match["start_time"]
                    ] 
                ]);
            }            
        }
    }
}
