<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Models\Tournament;
use App\Models\TeamTournament;
use App\Models\Team;
use App\Models\Fight;
use App\Models\FightTeam;
use App\User;
use Illuminate\Http\Request;
use Cache;
use Validator;
use App\Acme\Helpers\ApiHelper;
use Carbon\Carbon;
use Faker\Factory as Faker;

class TournamentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $tournaments = Tournament::where("is_multiple", "!=", 1)
            ->where('status', 1);      
        return ApiHelper::parseMultiple($tournaments, ['title', 'start_at'], $request->all());
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request  $request)
    {
        $tournament = new Tournament();
        return ApiHelper::parseSingle($tournament, $id, $request->all());
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
     * Get all teams of tournament
     */
    public function teams($id, Request $request)
    {
        $team_ids = TeamTournament::where('tournament_id', $id)
            ->select(['team_id'])
            ->pluck('team_id')
            ->all();
            
        $teams = Team::whereIn("id", $team_ids);
              
        return ApiHelper::parseMultiple($teams, ['title'], $request->all());
    }
    
    /**
     * Register team on tournament
     *
     * @param  int  $tournament_id
     * @param  int  $team_id
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register($tournament_id, $team_id, Request $request)
    {
        $tournament = Tournament::findOrFail($tournament_id);
        $team = Team::findOrFail($team_id);
        $user = $request->user();
        $errors = [];
        
        if($team->capt_id!=$user->id)
        {
            $errors[] = "Only captain can register team on tournament.";
        }
        
        if(intval($user->team_id)==0)
        {
            $errors[] = "You need to be in the team.";
        }
        
        if($tournament->game_id!=$user->game_id)
        {
            $errors[] = "The game of the user and the tournament must be the same!";
        }
        
        $TeamTournament = TeamTournament::where("tournament_id", $tournament_id)->where("team_id", $team_id)->first();
        if($TeamTournament)
        {
            $errors[] = "Your team is already registered.";
        }
        
        $now = Carbon::now('UTC')->toDateTimeString();
        $register_end = Carbon::parse($tournament->start_at)->subMinutes(60)->toDateTimeString();
        if(strtotime($tournament->register_start)>strtotime($now))
        {
            $errors[] = "Registration will start at ".$tournament->register_start->format('l jS \\of F Y h:i A');
        }
        else if(strtotime($now)>strtotime($register_end))
        {
            $errors[] = "Registration is closed.";
        }
    
        if(count($errors)>0)
        {
            return response()->json([
                "error" => implode("\r\n", $errors)
            ], 422);
        }else{
            
            $result = TeamTournament::create([
                "tournament_id" => $tournament_id,
                "team_id" => $team_id
            ]);
            
            return response()->json([
                'success' => true,
                '_id'=> $result->id
            ], 200);
        }
    }
    
    /**
     * Count dates for copies of multi tournament
     */
    public static function countMultipleData($tournament)
    {
        $copies = [];
        $contract_start = $tournament->contract_start_at;
        $contract_end = $tournament->contract_end_at;
        $period = $tournament->period;
        $period_start_at = explode(",", $tournament->period_start_at);
        $period_final_at = explode(",", $tournament->period_final_at); 
        $dayOfWeekStartAt = intval($period_start_at[0]);
        $arTimeStartAt = explode(":", trim($period_start_at[1]));
        
        $dayOfWeekFinalAt = intval($period_final_at[0]);
        $arTimeFinalAt = explode(":", trim($period_final_at[1]));        
        
        $next_register_at = Carbon::now('UTC');
        $date = $contract_start;
        while(strtotime($date->format('Y-m-d H:i:s'))<strtotime($contract_end->format('Y-m-d H:i:s')))
        {
            $start_at = Carbon::parse($date);
            $final_at = Carbon::parse($date);
            $register_at = $next_register_at;
            
            if($date->dayOfWeek!=$dayOfWeekStartAt)
            {
                $start_at = $start_at->next($dayOfWeekStartAt);
            }
            
            if($date->dayOfWeek!=$dayOfWeekFinalAt)
            {
                $final_at = $final_at->next($dayOfWeekFinalAt);
            }
            
            if($period=="w")
            {
                $date = $date->addDays(7);
            }
            else if($period=="m")
            {
                $date = $date->addMonth();
            }
            
            $start_at = $start_at->setTime(intval($arTimeStartAt[0]), intval($arTimeStartAt[1]), 0);
            $final_at = $final_at->setTime(intval($arTimeFinalAt[0]), intval($arTimeFinalAt[1]), 0);
            
            //Copy tournaments
            $copy = [];
            $copy['start_at'] = $start_at;
            $copy['final_at'] = $final_at; 
            $copy['parent_id'] = $tournament->id;
            $copy['register_start'] = $register_at;
            $copies[] = $copy;
            
            $next_register_at = Carbon::parse($final_at)->addHours(4);
        }
            
        return $copies;
    }
    
    /**
     * Generate of multiple tournaments.
     */
    public static function generateMultiple($id)
    {
        $tournament = Tournament::findOrFail($id);
        $copies = self::countMultipleData($tournament);

        foreach($copies as $t)
        {
            //Copy tournaments
            $copy = $tournament->replicate();
            $copy->start_at = $t['start_at'];
            $copy->final_at = $t['final_at']; 
            $copy->parent_id = $id;
            $copy->is_multiple = false;
            $copy->register_start = $t['register_start'];
                        
            $copy->save();            
        }
    } 
    
    /**
     * Modify childs of multiple tournament.
     */
    public static function modifyMultiple($id)
    {
        $tournament = Tournament::findOrFail($id);
        $childs = Tournament::orderBy('id', 'asc')
            ->where("parent_id", $id)
            ->where('start_at', '>=', Carbon::now('UTC'))
            ->select(['id']);
            
        if($childs->count()>0)
        {
            $copies = self::countMultipleData($tournament);
            $diff = count($copies) - $childs->count();
            
            if($diff>0)
                $copies = array_slice($copies, $diff);
            
            $k = 0;
            foreach($childs->get() as $child)
            {
                $copy = $tournament->replicate();
                $copy->start_at = $copies[$k]['start_at'];
                $copy->final_at = $copies[$k]['final_at'];
                $copy->parent_id = $id; 
                $copy->register_start = $copies[$k]['register_start'];
                $copy->is_multiple = false;
                
                $child->update($copy->toArray());
                
                $k++;
            }
            
        }
    }
    
    /**
     * Generate matches for tournaments
     */
    public static function generateMatchesOfTournaments()
    {
        $now = Carbon::now('UTC');
        $tournaments = Tournament::where('start_at','<',Carbon::parse($now)->subHour())
            ->where('end_at','>',Carbon::parse($now))
            ->where();
        
        /*$tournaments = Tournament::where('end_at','>',Carbon::parse($now))
            ->orWhereNull('end_at');//->whereId(15094);*/
            
        if($tournaments->count()>0)
        {
            foreach($tournaments->get() as $tournament)
            {
                $cellSize = intval(log($tournament->count_teams, 2));
                $final_wins = intval($tournament->count_wins);
                $teams = $tournament->teams;
                $fights = $tournament->fights;
                
                if($teams->count() < ($cellSize/2+1))
                {
                    //turn off tournament
                    $tournament->update([
                        'status' => 2,  //canceled
                        'end_at' => $now
                    ]);
                    continue;
                }
                
                if($fights->count()>0)
                {
                    $roundFights = [];  //figths of last round
                    
                    $round = 0; //last round
                    foreach($fights as $fight)
                    {
                        $roundFights[] = $fight;
                        
                        if($round<$fight->tournament_step)
                        {
                            $round = $fight->tournament_step;
                            $roundFights = [$fight];
                        }   
                    }
                    
                    //check all matches of round is finished
                    $winners = [];
                    $roundFinished = true;
                    foreach($roundFights as $fight)
                    {
                        if(intval($fight->winner_id)==0)
                        {
                            $roundFinished = false;
                            break;
                        }else{
                            $winners_ids[] = intval($fight->winner_id);
                        }
                    }
                    
                    if($roundFinished)
                    {
                        //set place in matche winner function
                        //check final wins
                        if($round==$cellSize)
                        {
                            $arWinners = array_count_values($winners_ids);
                            
                            if(!array_search($final_wins, $arWinners))
                            {
                                $teams_ids = [];
                                if(count($roundFights[0])>0)
                                {
                                    foreach($roundFights[0]->invitations as $team)
                                    {
                                        $teams_ids[] = (int)$team->team_id;
                                    }
                                }
                                
                                self::generateRound($round, $tournament, $teams_ids);
                            }
                        }
                        else if(($round+1)<=$cellSize)
                        {
                            self::generateRound($round+1, $tournament, $winners_ids);
                        }
                    }

                }else{
                    self::generateRound(1, $tournament);
                }
            }
        }
    }
    
    public static function generateRound($round, $tournament, $teams_ids = false)
    {
        $teams = $tournament->teams;
        if(!$teams_ids)
        {
            foreach($teams as $team)
            {
                $teams_ids[] = (int)$team->team_id;
            }   
        }
        
        if($round==1)
        {
            $countOnes = ($tournament->count_teams)/$round-count($teams_ids);
            $countDoubles = (count($teams_ids)-$countOnes)/2;
        }else{
            $countDoubles = $tournament->count_teams/2/$round;
        }
        
        //Filled cells from teams which not fought at 1 round
        if($round==2 && $countDoubles!=count($teams_ids)/2)
        {
            $diff = ($countDoubles-count($teams_ids)/2)*2;
            for($k = count($teams)-$diff; $k<count($teams); $k++)
            {
                $teams_ids[] = $teams[$k]->team_id;
            }
        }
        
        //generate 1 round
        $participants = 2;
        $double = 1;
        foreach(array_chunk($teams_ids, $participants) as $teams_chunked)
        {
            if($round==intval(log($tournament->count_teams, 2)))
            {
                $now = Carbon::now('UTC');
                $start_at = $tournament->final_at;
                
                if(strtotime($now->format('Y-m-d H:i:s'))>strtotime($start_at->format('Y-m-d H:i:s')))
                {
                    $start_at = Carbon::parse($now)->addMinutes(5);
                }

            }else{
                $start_at = $tournament->start_at;
            }
            
            $result = Fight::create([
                'title' => $tournament->title." Round#".$round,
                'game_id' => $tournament->game_id,
                'start_at' => $start_at,
                'tournament_id' => $tournament->id,
                'tournament_step' => $round,
                'count_parts' => $participants,
                'status' => 1,
                'created_id' => 1
            ]); 
            
            foreach($teams_chunked as $team_id)
            {
                FightTeam::create([
                    'team_id' => $team_id,
                    'fight_id' => $result->id,
                    'status' => 1
                ]);
            }

            if($double==$countDoubles && $round==1)
                break;
                
            $double++;
        }
    }
    
    /**
     * Get brackets of tournament
     */
    public static function brackets($id)
    {
        $tournament = Tournament::findOrFail($id);
        $rounds = intval(log($tournament->count_teams, 2));
        $final_wins = intval($tournament->count_wins);
        $teams = $tournament->teams;
        $fights = $tournament->fights;
        
        $brackets = [];
        $last_round = false;
        if($fights->count()>0)
        {           
            $k = 0;
            foreach($fights as $fight)
            {
                $invitations = $fight->invitations;
                $fight_teams = [];
                
                foreach($invitations as $invitation)
                {
                    if($invitation->status==1)
                    {
                        $fight_teams[] = $invitation->team;
                    }
                }
                
                if(count($fight_teams)>0)
                {
                    if($fight->tournament_step==$rounds)
                    {
                        if(!$last_round)
                        {
                            if(isset($fight_teams[0]) && $fight->winner_id==$fight_teams[0]->id)
                            {
                                $score = [1,0];
                            }
                            else if(isset($fight_teams[1]) && $fight->winner_id==$fight_teams[1]->id)
                            {
                                $score = [0,1];
                            }
                        }else{
                            if(isset($fight_teams[0]) && $fight->winner_id==$fight_teams[0]->id)
                            {
                                $score[0]++;
                            }
                            else if(isset($fight_teams[1]) && $fight->winner_id==$fight_teams[1]->id)
                            {
                                $score[1]++;
                            }
                        }
                        $last_round = true;
                        
                        $k++;
                        
                        if($k!=$fights->count())
                            continue;
                    }else{
                        $score = [0,0];
                        if(isset($fight_teams[0]) && $fight->winner_id==$fight_teams[0]->id)
                        {
                            $score = [1,0];
                        }
                        else if(isset($fight_teams[1]) && $fight->winner_id==$fight_teams[1]->id)
                        {
                            $score = [0,1];
                        }
                        $k++;
                    }
                    
                    $brackets[!empty($fight->tournament_step)?$fight->tournament_step:1][] = [
                        "team_1" => $fight_teams[0],
                        "team_2" => isset($fight_teams[1]) ? $fight_teams[1] : null,
                        "score" => $score,
                        "winner_id" => $fight->winner_id
                    ]; 
                }
            }
        }
        
        for($i=1; $i<=$rounds; $i++)
        {
            if(isset($brackets[$i]) && count($brackets[$i])>0)
            {
                $s = count($brackets[$i]);                  
            }else{
                $s = 0;
            }
            
            if($s!=pow(2, $rounds-$i))
            {
                $diff = 0;
                if($i==1)
                {
                    $diff = pow(2, $rounds-$i)-$s;
                    $s = $s*2;
                } 
                
                for($k=$s; $k<pow(2, $rounds-$i)+$diff; $k++)
                {
                    //get not filled cells from teams
                    $brackets[$i][] = 
                    [
                        "team_1" => ($i==1 && isset($teams[$k])) ? $teams[$k]->team : [],
                        "team_2" => [],
                        "score" => [0,0]
                    ];
                }
            }            
        }
        
        /*$faker = Faker::create('ru_RU');
        $brackets = [];
        $rounds = intval(log($tournament->count_teams, 2));
        for($i=1; $i<=$rounds; $i++)
        {
            for($k=1; $k<=pow(2, $rounds-$i); $k++)
            {
                $brackets[$i][] = 
                [
                    "team_1" => [
                        'title' => $faker->lastName,
                        'id' => $faker->randomDigit,
                        'image' => $faker->imageUrl($width = 300, $height = 300)
                    ],
                    "team_2" => [
                        'title' => $faker->lastName,
                        'id' => $faker->randomDigit,
                        'image' => $faker->imageUrl($width = 300, $height = 300)
                    ],
                    "score" => [$faker->randomDigit, $faker->randomDigit]
                ];
            }
        }*/
        
        return response()->json($brackets, 200);
    }
}