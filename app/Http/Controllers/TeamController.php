<?php

namespace App\Http\Controllers;

use App\Models\InvestorTeam;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Requests\TeamUpdateRequest;
use App\Models\Team;
use App\Models\FightTeam;
use App\Models\TeamUser;
use App\Models\Game;
use App\Models\Fight;
use App\Models\Tournament;
use App\Models\TeamTournament;
use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Storage;
use Image;
use Mail;
use ApiHandler;
use App\Acme\Helpers\ApiHelper;
use App\Mail\EmailVerify;
use App\Mail\InvitationToTeam;
use App\Mail\TeamLinkToInvestor;
use App\Http\Requests\TeamStoreRequest;
use App\Acme\Helpers\ScheduleHelper;
use Carbon\Carbon;

class TeamController extends Controller
{    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $teams = new Team();      
        
        if($request->has('users_country_id'))
        {
            $country_id = $request->get('users_country_id');
            //$teams_id = User::where('country_id', $country_id)->where('team_id', '>', 0)->distinct()->pluck('team_id');
            $teams = $teams::whereHas('users', function($query) use ($country_id){
                $query->where('country_id', $country_id);
            });
            
            $request->request->remove('users_country_id');
        }
        
        return ApiHelper::parseMultiple($teams, ['title'], $request->all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TeamStoreRequest $request)
    {
        $input = $request->all();
        $user = $request->user();

        //Validation min game's players count
        if(!$user->game_id)
        {
            return response()->json([
                'title' => ['Before create a team You must set the in profile']
            ], 422);
        }
        $arGame = Game::findOrFail($user->game_id);
        $input['game_id'] = $arGame["id"];
        $input["quantity"] = $arGame["min_players"];
        $input["created_at"] = \Carbon\Carbon::now()->timestamp;

        if($user->type=='player')
        {
            //Check if exist team
            if($user->team_id>0/* && $request->user()->team()->first()->status==Team::ACCEPTED*/)
            {
                return response()->json([
                    'title' => ['You are already have the team! If you want to create new team delete all users from your current team and then delete the team!']
                ], 422);
            }

            $input['capt_id'] = $user->id;
            //Check schedule
			if(hostReferAllowed($request))
			{
				$arSchedules = ScheduleHelper::getFullFilled();
			}else{
				$arSchedules = $user->schedule;
			}
            $blockSchedules = ScheduleHelper::getCrossingBlocks($arSchedules, $arGame['cross_block']);

            if(count($blockSchedules)==0)
            {
                return response()->json([
                    'schedule' => ['Your schedule has to consist of mininmum 1 three hours block!']
                ], 422);
            }

            $input['schedule'] = $blockSchedules;
        }
		
		if(intval($user->institution_id)>0)
		{
			$input['institution_id'] = $user->institution_id;
		}
		
        $result = Team::create($input);

        if($user->type=='player')
        {
            /**
             * Add player to team
             */
            TeamUser::create([
                "user_id" => $user->id,
                "team_id" => $result->id,
                "sender_id" => $user->id,
                "status" => TeamUser::ACCEPTED,
                "start_at" => \Carbon\Carbon::now()->timestamp
            ]);

            $user->update(['team_id' => $result->id]);
        }
        
        return response()->json($result);        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($param, Request  $request)
    {      
        if ( is_numeric($param) ) 
        {
            $filterBy = ['id' => $param];
        }else{
            $filterBy = ['slug' => $param];
        }
        
        $team = new Team();
        return ApiHelper::parseSingle($team, $filterBy, $request->all());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id, Request  $request)
    {
        $user = $request->user();
    
        $team = new Team();
        $response = ApiHelper::parseSingle($team, ['id' => $id], $request->all());
        $team = json_decode($response->content(), true);
        
        if($team['capt_id']!=$user->id)
        {
            return response()->json(["error" => "Only captain can edit data."], 404);
        }
            
        return response()->json($team);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id, TeamUpdateRequest $request)
    {
        $input = $request->all();
        $team = Team::findOrFail($id);
        unset($input['users']);
        $team->update($input);
        
        return response()->json($team);
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
     * Get invitations to team
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public static function invitations($id, Request  $request)
    {
        $team_users = TeamUser::where("team_id", $id);      
        return ApiHelper::parseMultiple($team_users, [''], $request->all());
    }

    /**
     * Get fights of team
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public static function investors($id, Request  $request)
    {
        $user_ids = InvetorTeam::where('team_id', '=', $id)->select(['user_id'])->get();
        $investors = User::whereIn('id', $user_ids);
        return ApiHelper::parseMultiple($investors, [''], $request->all());
    }
    
    /**
     * Get fights of team
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public static function fights($id, Request  $request)
    {
        $fights = FightTeam::where('team_id', '=', $id)->select(['fight_id'])->get();
        $fights = Fight::whereIn('id', $fights);  
        return ApiHelper::parseMultiple($fights, [''], $request->all());
    }

    /**
     * Get tournaments of team
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public static function tournaments($id, Request  $request)
    {
        $tids = TeamTournament::where('team_id', '=', $id)->select(['tournament_id'])->get();
        $tournaments = Tournament::whereIn('id', $tids)->whereIn('status', [1,3]);
        return ApiHelper::parseMultiple($tournaments, [''], $request->all());
    }
    
    /**
     * Get invitations IN of team to the fights
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public static function fightInvitationsIn($id, Request  $request)
    {
        $fight_teams = FightTeam::where('team_id', '=', $id)->
            whereHas('fight', function($fightQuery) use ($id){
                $fightQuery->where('created_team_id', '<>', $id);
            });
             
        return ApiHelper::parseMultiple($fight_teams, [''], $request->all());
    }
    
    /**
     * Get invitations OUT of team to the fights
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public static function fightInvitationsOut($id, Request  $request)
    {
        $fight_teams = FightTeam::where('team_id', '<>', $id)->
            whereHas('fight', function($fightQuery) use ($id){
                $fightQuery->where('created_team_id', $id);
            });
             
        return ApiHelper::parseMultiple($fight_teams, [''], $request->all());
    }
    
    /**
	 * Update avatar.
     * 
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return Response
	 */
	public function logo(Request $request)
	{
        $params = $request->all();
        $user = JWTAuth::parseToken()->authenticate();
        
        $team = Team::findOrFail($params["id"]);
        
        if($team->image)
        {
            $path = public_path() . '/storage/' . $team->image;
            if(file_exists($path)) 
            {
                unlink($path);
            }
        }
            
        $path = Storage::disk('public')->putFile(
            'teams', $request->file('files')
        );
        
        /**
         * Crop & resize using client crop data
         */
		 
		if($request->has('toCropImgH'))
		{
			$crop = [
				'h' => (int)$params["toCropImgH"],
				'w' => (int)$params["toCropImgW"],
				'x' => (int)$params["toCropImgX"],
				'y' => (int)$params["toCropImgY"]
			];
		}else{
			$crop = [
				'h' => (int)$params["h"],
				'w' => (int)$params["w"],
				'x' => (int)$params["x"],
				'y' => (int)$params["y"]
			];
		}
        $img = Image::make('storage/'.$path);
        $img->crop($crop['h'], $crop['w'], $crop['x'], $crop['y']);
        $img->resize(150, 150);
        $img->save('storage/'.$path);
        $img->destroy();
        
        $team->image = $path;
        $team->update();
        
        return response()->json($team);
	}
    
    /**
	 * Update overlay.
     * 
	 * @param  \Illuminate\Http\Request  $request
	 * @return Response
	 */
	public function overlay(Request $request)
	{
        $user = JWTAuth::parseToken()->authenticate();
        $params = $request->all();
        $team = Team::findOrFail($params["id"]);
        
        if($team->overlay)
        {
            $path = public_path() . '/storage/' . $team->overlay;
            if(file_exists($path)) 
            {
                unlink($path);
            }
        }
            
        $path = Storage::disk('public')->putFile(
            'teams', $request->file('files')
        );
        $team->overlay = $path;
        $team->update();
        
        return response()->json($team);
	}
    
    /**
     * Send invite user to the team
     *
     * @param  int  $teamId
     * @param  int  $userId
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function inviteUser($teamId, $userId, Request $request)
    {
        $user = User::findOrFail($userId);
        $userTeam = $user->team()->first();
        if($userTeam && $userTeam->id>0 && !$user->free_player)
        {
            return response()->json([
                "error" => "The user is already in another team"
            ], 422);
        }
        
        //Check user in team
        $TeamUser = TeamUser::where("user_id", $userId)->where("team_id", $teamId)->first();
    
        if($TeamUser)
        {
            $input = $request->all();
            if(isset($input['status']) && $input['status']==1)
            {
                $blockSchedules = self::checkCrossingScheduleTeamUser($teamId, $userId);
                if(count($blockSchedules)==0)
                {
                    return response()->json([
                        "error" => "User don't have 3-hours blocks crossing with team schedule. Edit schedule before connect to the team."
                    ], 422);
                }
            }
            
            //update TeamUser
            $TeamUser->update($input);
            
            //delete team_id from user field
            if($TeamUser->status==2 && $user['team_id']==$teamId)
            {
                $user->update(['team_id' => 0]);
            }
            
            //update User team_id
            if(isset($input['status']) && $input['status']==1)
            {                
                //Change team & and delete
                if($user->team_id>0 && $user->team_id!=$teamId)
                {
                    if($userTeam->capt_id==$user->id)
                    {
                        TeamUser::where("team_id", $user->team_id)->delete();
                        Team::find($user->team_id)->delete();
                    }else{
                        TeamUser::where("user_id", $user->id)->where("team_id", $user->team_id)->delete();
                    }
                }
                
                $user->update([
                    'team_id' => $teamId
                ]);
            }
            
            //If count users in team more 1 update Team status
            $team = Team::findOrFail($teamId);
            $countUsers = $team->users()->count();
            if($countUsers>1)
            {
                $team->update([
                    'status' => Team::ACCEPTED
                ]);
                
                //update User free_player
                foreach($team->users()->get() as $player)
                {
                    $player->update([
                        'free_player' => false
                    ]);
                    
                    $TeamUser = TeamUser::where("user_id", $player->id)->where("team_id", $teamId)->first();
                    $TeamUser->update([
                        'start_at' => \Carbon\Carbon::now()
                    ]);
                }
            }
            
            self::updateSchedule($teamId);
            
            return response()->json($TeamUser);
        }else{
    
            $team = Team::findOrFail($teamId);
            
            //Check if current user is captain
            if($team->capt_id!=$request->user()->id)
            {
                //check user add himself to the team. User sends request to the captain of the team.
                if($userId!=$request->user()->id)
                {
                    return response()->json([
                        "error" => "Only captain can send invitation to user to team."
                    ], 422);
                }
                
                $blockSchedules = self::checkCrossingScheduleTeamUser($teamId, $userId);
                if(count($blockSchedules)==0)
                {
                    return response()->json([
                        "error" => "You don't have 3-hours blocks crossing with team schedule. Edit you schedule before connect to the team.",
                        "schedule" => $blockSchedules
                    ], 422);
                }
                
                if(!$user->game_id)
                {
                    $user->update([
                        'game_id' => $team->game_id
                    ]);
                }
            }
                      
            $result = TeamUser::create([
                "user_id" => $userId,
                "team_id" => $team->id,
                "sender_id" => $request->user()->id,
                "status" => TeamUser::PENDING
            ]);
            
            if($request->user()->id==$team->capt_id && $user->email)
            {
                $content = [
            		'url' => url(config('app.url')."/teams/".$team->slug),
                    'title' => $request->user()->name.' invites you to the team '.$team->title,
            		'button' => 'Click Here'
          		];
        
            	Mail::to($user->email)->send(new InvitationToTeam($content));
            }else{
                
                $captain = $team->captain()->first();

                if(!empty($captain['email']))
                {
                    $content = [
                		'url' => url(config('app.url')."/players/".$user->id),
                        'title' => $user->name.' wants to be a part of team '.$team->title,
                		'button' => 'Watch the player'
              		];
            
                	Mail::to($captain['email'])->send(new InvitationToTeam($content));
                }
            }
        }
        
        return response()->json([
            'success' => true,
            '_id'=> $result->id
        ], 200);
    }

    /**
     * Invest to the team
     *
     * @param  int  $userId
     * @param  int  $teamId
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function invest($userId, $teamId, Request $request)
    {
        $user = User::findOrFail($userId);
        $team = Team::findOrFail($teamId);

        //check user add himself to the team. User sends request to the captain of the team.
        if($userId!=$request->user()->id)
        {
            return response()->json([
                "error" => "You are not the user you're trying to invest by."
            ], 422);
        }

        if(!$user->type=='investor')
        {
            return response()->json([
                "message" => "Only investors could invest to the teams."
            ], 422);
        }

        //Check user invested in team
        $InvestorTeam = InvestorTeam::where("user_id", $userId)->where("team_id", $teamId)->first();

        if($InvestorTeam)
        {
            return response()->json([
                "message" => "You are already invested to the team."
            ], 422);
        }else{

            $data = [
                "user_id" => $userId,
                "team_id" => $teamId,
                'invest_price' => $request->get('invest_price')
            ];

            if(intval($request->get('invest_price'))>intval($team->price/4) && $request->get('invest_price')>0)
            {
                return response()->json([
                    "message" => "Invest price needs to be not more than fourth part of team's price."
                ], 422);
            }

            if($user->balance<$request->get('invest_price'))
            {
                return response()->json([
                    "message" => "Not enough money on the account."
                ], 422);
            }

            if(intval($team->price/4)==intval($request->get('invest_price')))
            {
                $data['owner'] = true;
            }

            $result = InvestorTeam::create($data);
            $user->update([
                "balance" => $user->balance-$request->get('invest_price')
            ]);

            \App\Models\Transaction::create([
                "user_id" => $user->id,
                "description" => "Investing to ".$team->title,
                "data" => [],
                "external_id" => '',
                "amount" => (-1) * $request->get('invest_price')
            ]);
        }

        return response()->json([
            'success' => true,
            '_id'=> $result->id
        ], 200);
    }

    /**
     * Get users of the team
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function users($id, Request $request)
    {
        $users = Team::findOrFail($id)->users();
        return ApiHelper::parseMultiple($users, ['name', 'last_name'], $request->all());
    }
    
    public function getRequestsOut($id, Request $request)
    {
        $user = $request->user();
        
        $query = TeamUser::where("sender_id", $user->id)
            ->where("team_id", $id);
        
        if($request->has('status'))
        {
            $query = $query->where("status", (int)$request->get('status'));
        }
        
        $result = $query->get();
            
        if($result)
        {
            return response()->json([
                'success' => true
            ], 200);
        }else{
            return response()->json([
                'error' => 'Error of system. Try to make it later'
            ], 422);
        }
    }    
    
    /**
     * Get a list of potential team players
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchPotentialUsers($id, Request $request)
    {
        $user = $request->user(); 
        $error = ['error' => 'No results found, please try with different keywords.'];
        $teamUsers = TeamUser::where('team_id', $id)->select(['user_id'])->get();

        if($request->has('q'))
        {
            $items = User::search($request->get('q'))
                ->whereNotIn('id', $teamUsers)
                ->where('type', $user->type)->active()
                ->select(['id', 'name', 'last_name', 'avatar', 'nickname', 'type'])->paginate(12);
            
            if($items->count()==0)
                return response()->json($error);

            return response()->json($items);
        }
        
        return response()->json($error);
    }
    
    public function linkToInvestor($id, Request $request)
    {
        $user = $request->user();
        $team = Team::findOrFail($id);
        
        $content = [
    		'url' => url(config('app.url')."/teams/".$team->slug),
            'title' => '<a href="'.url(config('app.url')."/players/".$user->id).'">'.$user->name.'</a> sended you link to the team you can invest. Look at this!',
    		'button' => 'Click Here'
  		];

    	Mail::to($request->get('email'))->send(new TeamLinkToInvestor($content));
        
        return response()->json(null, 200);
    }
    
    /**
     * Check crossing schedule of team and new user
     * @param  int  $teamId
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public static function checkCrossingScheduleTeamUser($teamId, $userId)
    {
        $team = Team::findOrFail($teamId);
        $users = $team->users();
        $player = User::findOrFail($userId);
        $game = $team->game()->first();
        
        $arSchedules = ScheduleHelper::getCrossingSchedule($users->get(), $player);
        $blockSchedules = ScheduleHelper::getCrossingBlocks($arSchedules, $game->cross_block);
        return $blockSchedules;
    }
    
    /**
     * Update schedule of team when user update his schedule
     */
    public static function updateSchedule($id)
    {
        $team = Team::findOrFail($id);
        $users = $team->users();
        $game = $team->game()->first();
        
        $arSchedules = ScheduleHelper::getCrossingSchedule($users->get());
        $blockSchedules = ScheduleHelper::getCrossingBlocks($arSchedules, $game->cross_block);

        //send notify captain none crossing schedule
        if(count($blockSchedules)==0)
        {
            
        }
        
        $team->update([
            'schedule' => $blockSchedules
        ]);
    }
    
    /**
     * To find teams to play against.
     * @param  int  $teamId
     * @param  int  $userId
     * @return \Illuminate\Http\Response
     */
    public static function findTeamsAgainst($id)
    {
        $data = [];
        $team = Team::findOrFail($id);
        
        $cats = [];
        $category = $team->category;
        $balance = ceil($team->balance);
        $game_id = intval($team->game_id);
        $schedule = $team->schedule;
        
        $percent_range = 30;
        $from = ceil($balance*(100-$percent_range)/100);
        $to = ceil($balance*(100+$percent_range)/100);
        
        switch($category)
        {
            case "0":
                $cats = [0];
            break;
            case "1":
                $cats = [0, 1];
            break;
            case "2":
                $cats = [2, 1];
            break;
        }
        
        $teams = Team::whereIn('category', $cats)
            ->where('id', '!=', $id)
            ->where('status', 1)
            ->where('balance', '>=', $from)
            ->where('balance', '<=', $to)
            ->where("game_id", $game_id);
        
        $start = Carbon::now('UTC')->toDateTimeString();
        
        if(count($schedule)>0)
        {
            if($teams->count()>0)
            {
                //Find all battles with against teams
                $fight_ids = FightTeam::where('team_id', '=', $team->id)->
                    whereHas('fight', function($fightQuery) use ($start){
                        $fightQuery->where('start_at', '>', $start);
                    })->select(['fight_id'])->get();
                
                $teamFights = FightTeam::whereIn('fight_id', $fight_ids)
                    ->where('team_id', '<>', $team->id)
                    ->get();
                    
                //$data = $teams->get();// [$teams->get(), $team, $teamFights];
                $data = ScheduleHelper::getCalendarFights($teams->get(), $team, $teamFights);
            }
            
            return response()->json($data, 200);
        }else{
            return response()->json(null, 200);
        }
    }
}