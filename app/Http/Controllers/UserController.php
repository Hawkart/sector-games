<?php
namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use App\Http\Controllers\TeamController;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Requests\UserPasswordUpdateRequest;
use Illuminate\Support\Facades\Storage;
use Image;
use App\Models\Team;
use App\Models\TeamUser;
use App\Models\Fight;
use App\Models\FightTeam;
use App\Models\Transaction;
use App\Models\TeamTournament;
use App\Models\Tournament;
use App\Models\InstitutionUser;
use ApiHandler;
use App\Acme\Helpers\ApiHelper;
use Hootlex\Friendships\Models\Friendship;
use Hootlex\Friendships\Status;
use App\Acme\Helpers\ScheduleHelper;
use Carbon\Carbon;
use App\Mail\EmailVerify;
use Mail;
use GeoIP;
use \Webpatser\Countries\Countries;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */     
    public function index(Request $request)
    {
        $users = new User();
        return ApiHelper::parseMultiple($users, ['name', 'nickname'], $request->all());
    }
    
    public function show($id, Request $request)
    {
        $user = new User();
        return ApiHelper::parseSingle($user, $id, $request->all());
    }
    
    /**
     * Me with meta token
     */
    public function me(Request $request)
    {
        $user = $request->user();
        
        if(empty($user->timezone))
        {      
            $geo = geoip()->getLocation($request->ip())->toArray();
            $data = [
                'timezone' => $geo['timezone'],
                'ip' => $geo['ip'],
                'city' => $geo['city'],
                'geo' => $geo
            ];

            if(intval($user->country_id)==0)
            {
                $arCountries = Countries::all()->pluck('id', 'iso_3166_2');
                $data['country_id'] = (int)$arCountries[$geo['iso_code']];
            }

            $user->update($data);
        }
        
        /*if($user->avatar)
            $user->avatar = asset('storage/'.$user->avatar);
        if($user->overlay)
            $user->overlay = asset('storage/'.$user->overlay);*/
        
        return response()->json($user, 200);
    }
    
	
	/**
	 * Update user's passsword.
     * 
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return Response
	 */
	public function updatePassword(UserPasswordUpdateRequest $request)
	{
		$user = $request->user();
		
		if($result = $user->update($request->all()))
        {
            return response()->json([
                'data' => $user,
                'message' => $message
            ]);
        }
		
		return response()->json([
            'error' => 'Something wrong'
        ], 422);
	}
	
	
    /**
	 * Update the specified resource in storage.
     * 
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id = false, UserUpdateRequest $request)
	{
	    $message = "Profile data is updated.";
        $data = [];
        $input = $request->except(['avatar', 'overlay']);        
        $user = $request->user();
		
		if($request->has("game_id"))
		{
			$game_id = $input['game_id'];
		}else{
			$game_id = '';
		}
		
		if($request->has("type"))
		{
			$type = $input['type'];
		}else{
			$type = $user->type;
		}
        
        //Game needs for player
        if(($type=='player' || $user->type=='player') && intval($user->game_id)==0 && empty($game_id ))
        {
            return response()->json([
                'game_id' => ['Choose the game.']
            ], 422);
        }
        
        if($user->team_id>0 && $user->game_id!=$game_id)
        {
            return response()->json([
                'game_id' => ['Game couldn\'t be changed, you are connected to the team.']
            ], 422);
        }
        
        if ($request->has('password')) 
            $user->password = bcrypt($request->password);
        
        //If confirmed -> active 
        if($user->confirmed && $user->type)
            $user->active = 1;
        
        //If team exist & active Player cannot change streams
        if($user->team_id>0 && $request->user()->team()->first()->status==Team::ACCEPTED)
        {
            unset($input['streams']);
        }
        elseif($request->has("streams") && $input['streams'])
        {
            $streams = [];
            foreach($input['streams'] as $arStream)
            {
                if(!empty($arStream["value"]))
                {
                    $streams[] = ['value' => trim($arStream["value"])];
                }
            }
            $input['streams'] = $streams;
        }
        
        //need for sort schedule
        if($request->has("schedule") && !empty($input['schedule']) && $input['schedule']!=null)
        {
            $input['schedule'] = ScheduleHelper::transformDateStringsToArrays($input['schedule']);
            $input['schedule'] = ScheduleHelper::transformDateArraysToStrings($input['schedule']);
        }
        
        if(!$user->confirmed && $request->has("email") && $user->email!=$input['email'] && !empty($input['email']))
        {
            $confirmation_code = str_random(50);
            $input['confirmation_code'] = $confirmation_code;
            
            $content = [
        		'url' => url(config('app.url')."/email/verify/".$confirmation_code),
                'title' => 'Verify your email address',
        		'button' => 'Click Here'
      		];
    
        	Mail::to($input['email'])->send(new EmailVerify($content));
            
            $message = "Check your E-Mail box and activate your account by click to 'Click Here' button in received e-mail from Sparta.Games.";
        }
        
        if($result = $user->update($input))
        {
            if(intval($user->team_id)>0)
                TeamController::updateSchedule($user->team_id);
            
            return response()->json([
                'data' => $user,
                'message' => $message
            ]);
        }
        
        return response()->json([
            'error' => 'Something wrong'
        ], 422);
	}
    
    /**
	 * Update avatar.
     * 
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return Response
	 */
	public function avatar(Request $request)
	{
        $params = $request->all();
        $user = $request->user();
        
        if($user->avatar)
        {
            $path = public_path() . '/storage/' . $user->avatar;
            
            if(file_exists($path) && !in_array($user->avatar, ['default/avatar_team.jpg', 'default/avatar_user.jpg', 'users/default.png']))
            {
                unlink($path);
            }
        }

        $path = Storage::disk('public')->putFile(
            'avatars', $request->file('files')
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
        
        $user->avatar = $path;
        $user->update();
        
        return response()->json($user, 200);
	}
    
    /**
	 * Update overlay.
     * 
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return Response
	 */
	public function overlay(Request $request)
	{
        //$user = JWTAuth::parseToken()->authenticate();
        $user = $request->user();
        if($user->overlay)
        {
            $path = public_path() . '/storage/' . $user->overlay;
            if(file_exists($path) && !in_array($user->overlay, ['default/overlay_game.jpg', 'default/overlay_team.jpg', 'default/overlay_user.jpg']))
            {
                unlink($path);
            }
        }
            
        $path = Storage::disk('public')->putFile(
            'avatars', $request->file('files')
        );
        $user->overlay = $path;
        $user->update();
        
        return response()->json($user, 200);
	}

    public function fights($id, Request $request)
    {
        $user = User::findOrFail($id);
        $fights = FightTeam::where('team_id', '=', $user->team_id)->select(['fight_id'])->get();
        $fights = Fight::whereIn('id', $fights);  
        return ApiHelper::parseMultiple($fights, [''], $request->all());
    }

    /**
     * Get user's tournaments.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function tournaments($id, Request $request)
    {
        $user = User::findOrFail($id);
        $tids = TeamTournament::where('team_id', '=', $user->team_id)->select(['tournament_id'])->get();
        $tournaments = Tournament::whereIn('id', $tids)->whereIn('status', [1, 3]);
        return ApiHelper::parseMultiple($tournaments, [''], $request->all());
    }
	
	/**
     * Get user's institutions.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function institutions($id, Request $request)
    {
        $user = User::findOrFail($id);
        return ApiHelper::parseMultiple($user->institutions(), [''], $request->all());
    }

    /**
     * Add institution to user
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function institutionAdd($id, Request $request)
    {
        $user = $request->user();
		$result = [];

        if($id!=$user->id)
        {
            return response()->json([
                'user_id' => ['Вы можете изменить только свои данные.']
            ], 422);
        }

        $connections = InstitutionUser::where('user_id', $user->id)
            ->where("institution_id", $request->get("institution_id"))
            ->where("number", $request->get('class'))
            ->where("char", $request->get('char'));

        if($connections->count()>0)
        {
            return response()->json([
                'institution_id' => ['Такая привязка уже есть.']
            ], 422);
        }else{
            $result = InstitutionUser::create([
                'user_id' => $user->id,
                'institution_id' => $request->get("institution_id"),
                'number' => $request->get('class'),
                'char' => $request->get('char')
            ]);
			
			$user->update([
				"institution_id" => $result->id
			]);
        }

        return response()->json($result, 200);
    }

    /**
	 * Get user's team.
     * 
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return Response
	 */
    public function team($id, Request $request)
    {
        $team = User::findOrFail($id)->team()->first();
		return ApiHelper::parseSingle($team, $team->id, $request->all());
        //return response()->json($team, 200);
    }

    /**
     * Get user's transactions.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function transactions($id, Request $request)
    {
        if($request->user()->id!=$id)
        {
            return response()->json([
                'message' => "You couldn't view transactions of another user!"
            ], 422);
        }

        $data = $request->user()->transactions;
        return response()->json($data, 200);
    }

    /**
     * Get user's accounts.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Response
     */
    public function accounts($id, Request $request)
    {
        if($request->user()->id!=$id)
        {
            return response()->json([
                'message' => "You couldn't view accounts of another user!"
            ], 422);
        }

        $data = $request->user()->accounts()->with(['currency'])->get();
        return response()->json($data, 200);
    }

    /**
	 * Get user's friends.
     * 
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return Response
	 */
    public function friends($id, Request $request)
    {
        $user = User::findOrFail($id); //$request->user();
                
        $friendships = $user->getAcceptedFriendships();
        $recipients  = $friendships->pluck('recipient_id')->all();
        $senders     = $friendships->pluck('sender_id')->all();

        $users = $user->where('id', '!=', $user->getKey())
            ->whereIn('id', array_merge($recipients, $senders))
            ->where('type', $user->type)
            ->active();

        return ApiHelper::parseMultiple($users, ['name', 'last_name', 'nickname'], $request->all());
    }

    public function getTeamTitleByInstitution($id, Request $request)
    {
        //$user = $request->user();
        $user = User::findOrFail($id);
        $institution = $user->institutions->first();
		if($institution!=null)
		{
			$count = $institution->teams()->count()+1;
			$title = $institution->title.". Команда #".$count; 
			return response()->json($title , 200);
		}else{
			return response()->json([
				'error' => 'No institutions'
			], 422);
		}
    }
}