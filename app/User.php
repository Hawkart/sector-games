<?php namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Cmgmyr\Messenger\Traits\Messagable;
use Hootlex\Friendships\Traits\Friendable;
use \HighIdeas\UsersOnline\Traits\UsersOnlineTrait;
use App\Models\Game;
use Cache;
use Sofa\Eloquence\Eloquence;
use File;
use Image;
use JWTAuth;
use GeoIP;
use App\Acme\Helpers\ScheduleHelper;
use TCG\Voyager\Models\User as VoyagerUser;
  
class User extends VoyagerUser implements AuthenticatableContract, CanResetPasswordContract 
{
	use Notifiable, Authenticatable, CanResetPassword, Messagable, Friendable, Eloquence;//, UsersOnlineTrait;

    /**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'nickname', 'phone', 'last_name', 'second_name', 'avatar', 'overlay', 'description',
        'type', 'country_id', 'tax_country_id', 'confirmation_code', 'team_id', 'game_id', 'streams', 'free_player', 'schedule',
        'confirmed', 'active', 'timezone', 'ip', 'city', 'geo', 'contacts', 'extern_statistic', 'game_roles', 'balance',
        'crowd_allow', 'revenue', 'salary', 'date_birth', 'institution_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_token', 'confirmation_code', 'ip', 'geo', 'contacts'
    ];
    
    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'streams' => 'array',
        'schedule' => 'array',
        'geo' => 'array',
        'contacts' => 'array',
        'extern_statistic' => 'array',
        'game_roles' => 'array'
    ];
    
    protected $searchableColumns = [
        'nickname' => 20,
        //'email' => 10,
        'name' => 10,
        'last_name' => 5
    ];
    
    /*public function getScheduleAttribute($json)
    {
        $object = json_decode($json, true);
        $user = JWTAuth::parseToken()->authenticate();
        
        $timezone = null;
        
        if($user!=null)
        {
            $timezone = $user->timezone;
        }else{
            $geo = geoip()->getLocation()->toArray();
            $timezone = $geo['timezone'];
        }
        
        if($timezone!=null)
        {
            ScheduleHelper::transformDateStringsToArrays()
        }
        
        return $object;
    }*/
    
    /**
     * Boot the model.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();
        static::creating(function ($user) 
        {
            if(empty($user->nickname))
                $user->nickname = $user->email;
                
            if(empty($user->api_token))
                $user->api_token = str_random(100);
        });
    }
    
    /**
     * Set the password attribute.
     *
     * @param string $password
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @Relation
     */
    public function country()
    {
        return $this->belongsTo('\Webpatser\Countries\Countries');
    }
    
    /**
     * User's team.
     * @Relation
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function team()
    {
        return $this->belongsTo('App\Models\Team');
    }
    
    /**
     * User's team history.
     * @Relation
     */
    /*public function teams()
    {
        return $this->belongsToMany('App\Models\Team');
    }*/
    
    /**
     * User's game
     * @Relation
     */
    public function game()
    {
        return $this->belongsTo('App\Models\Game');
    }

    /**
     * @Relation
     */
    public function transactions()
    {
        return $this->hasMany('App\Models\Transaction');
    }
	
	/**
     * @Relation
     */
    public function institutions()
    {
        return $this->belongsToMany('App\Models\Institution');
		//->withPivot('class', 'char')
    	//->withTimestamps();
    }
	
	/**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @Relation
     */
    public function institution()
    {
        return $this->belongsTo('\Webpatser\Countries\Institution');
    }
    
    /**
     * Бои, к которым принадлежит пользователь.
     * @Relation
     */
    /*public function fights()
    {
        return $this->belongsToMany('App\Models\Fight');
    }*/
    
    /**
     * Fights which are created by user
     * @Relation
     */
    public function createdFights()
    {
        return $this->hasMany('App\Models\Fight', 'created_id');
    }
    
    /**
     * User is judge of fights
     * @Relation
     */
    public function judgeOfFights()
    {
        return $this->hasMany('App\Models\Fight', 'judge_id');
    }
    
    /**
     * User is commentator of fights
     * @Relation
     */
    public function commentatorOfFights()
    {
        return $this->hasMany('App\Models\Fight', 'commentator_id');
    }
    
    /**
     * Figths canceled by user
     * @Relation
     */
    public function canceledFights()
    {
        return $this->hasMany('App\Models\Fight', 'cancel_user_id');
    }
    
    /**
     * SocialAccounts
     * @Relation
     */
    public function socialAccounts()
    {
        return $this->hasMany('App\Models\UserSocialAccount', 'user_id');
    }

    /**
     * Accounts
     * @Relation
     */
    public function accounts()
    {
        return $this->hasMany('App\Models\Account', 'user_id');
    }
    
    /**
     * Scope a query to only active scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('active', '=', 1);
    }
    
    /**
     * Scope a query to only player scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePlayer($query)
    {
        return $query->where('type', '=', 'player');
    }
    
    /**
     * Scope a query to only investor scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeInvestor($query)
    {
        return $query->where('type', '=', 'investor');
    }
    
    /**
     * Scope a query to only judge scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeJudge($query)
    {
        return $query->where('type', '=', 'judge');
    }
    
    /**
     * Scope a query to only commentator scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCommentator($query)
    {
        return $query->where('type', '=', 'commentator');
    } 
    
    /**
     * Scope a query to only coach scopes.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCoach($query)
    {
        return $query->where('type', '=', 'coach');
    }
    
    /**
     * Create user from social account
     */
    public static function createBySocialProvider($providerUser)
    {
        $email = $providerUser->getEmail();

        if(empty($email) && isset($providerUser->user['email']) && !empty($providerUser->user['email']))
        {
            $email = $providerUser->user['email'];
        }

        if(empty($email))
        {
            if(filter_var($providerUser->getNickname(), FILTER_VALIDATE_EMAIL))
            {
                $email = $providerUser->getNickname();
                $confirmed = 1;
                $active = 1;
            }else{
                $email = self::generateEmail($providerUser);
                $confirmed = 1;//0;
                $active = 1;//0;
            }

        }else{
            $confirmed = 1;
            $active = 1;
        }

        $avatar = null;
        /*$avatar = $providerUser->getAvatar();
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
        }*/

        $game = Game::where('title', 'Dota 2')->first();

        $data = [
            'email' => $email,
            'nickname' => $providerUser->getNickname(),
            'name' => $providerUser->getName() ? $providerUser->getName() : $providerUser->getNickname(),
            'password' => str_random(10),
            'avatar' => $avatar,
            'confirmed' => $confirmed,
            'active' => $active,
            'type' => 'player',
            'game_id' => $game->id
        ];

        $user = User::where('email', $email)->where("confirmed", 1)->first();

        if($user)
            return $user;

        return self::create($data);
    }

    public static function generateEmail($providerUser)
    {
        $site = env('APP_URL', "youthleague.ru");
        $site = str_replace(["http://", "https://"], "", $site);
        $email = str_slug($providerUser->getNickname())."@".$site;
        return $email;
    }
    
    /**
     * @Relation
     */
    public function fightStreams()
    {
        return $this->hasMany('App\Models\Stream', 'user_id');
    }
    
    /**
     * Search by params
     */
    public function scopeFilter($query, $request)
    {
        if(!empty($request['type']))
        {
            $query->whereType($request['type']);
        }
        return $query;
    }
}
