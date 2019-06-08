<?php

use Illuminate\Http\Request;

// CORS
header('Access-Control-Allow-Origin: '.env('CORS_ORIGIN', ''));
header('Access-Control-Allow-Credentials: true');

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


/**
 * Game roles
 */
Route::resource('game_roles', 'GameRoleController', ['only' => [
    'index', 'show'
]]);//apiHandler


/**
 * Countries
 */
Route::resource('countries', 'CountryController', ['only' => [
    'index', 'show'
]]);//apiHandler

/*************************************************************************************************************************/

/**
 * Users
 */
Route::get('/users/me', 'UserController@me')->middleware('jwt.auth');
Route::get('/users', 'UserController@index');//apiHandler
Route::get('/users/{id}', 'UserController@show');//apiHandler
Route::get('/users/{id}/team', 'UserController@team');
Route::get('/users/{id}/friends', 'UserController@friends');
Route::get('/users/{id}/tournaments', 'UserController@tournaments');
Route::get('/users/{id}/teams', 'UserController@teams');//apiHandler
Route::get('/users/{id}/fights', 'UserController@fights');//apiHandler
/*************************************************************************************************************************/


/**
 *Genres
 */
Route::resource('genres', 'GenreController', ['only' => [
    'index', 'show'
]]);

/*************************************************************************************************************************/


/**
 * Games
 */
//Route::get('/games/filter', 'GameController@filterList');//->middleware('jwt.auth');
//Route::get('/games/import', 'GameController@importByTwitchGiantbomb')->middleware('jwt.auth');
Route::resource('games', 'GameController', ['only' => [
    'index', 'show'
]]);//apiHandler

/*************************************************************************************************************************/

Route::get('/timezones', 'TimezoneController@index');

/*************************************************************************************************************************/

/**
 * News
 */
Route::resource('news', 'NewsController', ['only' => [
    'index', 'show'
]]);//apiHandler

/*************************************************************************************************************************/


/**
 * Schools
 */
Route::resource('schools', 'SchoolController', ['only' => [
    'index', 'show'
]]);//apiHandler

/*************************************************************************************************************************/

/**
 * Teams
 */
Route::get('/teams/{param}', 'TeamController@show');//apiHandler
Route::get('/teams', 'TeamController@index');//apiHandler
Route::get('/teams/{id}/investors', 'TeamController@investors');
Route::get('/teams/{id}/invitations', 'TeamController@invitations');
Route::get('/teams/{id}/tournaments', 'TeamController@tournaments');
Route::get('/teams/{id}/fights', 'TeamController@fights');
Route::get('/teams/{id}/fights/calendar', 'TeamController@findTeamsAgainst');
Route::get('/teams/{id}/fights/invitations/in', 'TeamController@fightInvitationsIn');
Route::get('/teams/{id}/fights/invitations/out', 'TeamController@fightInvitationsOut');

/*************************************************************************************************************************/


/**
 * FightTeam
 */
Route::get('/fight_team', 'FightTeamController@index');//apiHandler
Route::put('/fight_team/{id}', 'FightTeamController@update')->middleware('jwt.auth');

/*************************************************************************************************************************/


/**
 * TeamUsers (Invitations)
 */
Route::get('/team_user', 'TeamUserController@index');//apiHandler
/*************************************************************************************************************************/

/**
 * InvestorTeams
 */
Route::get('/investor_team', 'InvestorTeamController@index');//apiHandler
/*************************************************************************************************************************/


/**
 * Twitch & streams
 */
Route::post('/streams', 'StreamController@store');
Route::put('/streams', 'StreamController@update');

Route::get('/twitch/', '\App\Acme\Helpers\TwitchHelper@getFeaturedStreams');
Route::get('/twitch/search/{game}', '\App\Acme\Helpers\TwitchHelper@searchStreamsByGame');
Route::get('/twitch/{channel}', '\App\Acme\Helpers\TwitchHelper@channelShow');
/*************************************************************************************************************************/

/**
 * Matches
 */
Route::resource('fights', 'FightController', ['only' => [
    'index', 'show'
]]);
/*************************************************************************************************************************/

/**
 * Tournaments
 */
Route::resource('tournaments', 'TournamentController', ['only' => [
    'index', 'show'
]]);//apiHandler
Route::get('/tournaments/{id}/teams', 'TournamentController@teams');
Route::get('/tournaments/{id}/brackets', 'TournamentController@brackets');
/*************************************************************************************************************************/


/**
 * TeamUsers (Invitations)
 */
Route::get('/team_tournament', 'TeamTournamentController@index');//apiHandler
/*************************************************************************************************************************/

/**
 * Login & register
 */
Route::group(['middleware' => 'guest:api'], function () 
{
    Route::post('/register', 'Auth\AuthController@register');
    Route::post('/login', 'Auth\AuthController@login');
    Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('/password/reset', 'Auth\ResetPasswordController@postReset');//->name('password.reset');
    Route::get('/email/verify/{confirmationCode}', [
        'as' => 'confirmation_path',
        'uses' => 'Auth\AuthController@verify'
    ]);
    
    Route::get('/social/{provider}', 'SocialController@login')->name('social.auth');
    Route::get('/social/{provider}/callback', 'SocialController@callback');
});


//Route::get('/comments/{pageId}', 'CommentController@index');

Route::group(['middleware' => 'jwt.auth'], function () 
{
    
    // Route for store comment
    //Route::post('/comments', 'CommentController@store');
    // Route for update comment
    //Route::post('/comments/{commentId}/{type}', 'CommentController@update');

    /**
     * Users & auth
     */    
    Route::post('/refresh', 'Auth\AuthController@refresh');
    Route::post('/logout', 'Auth\AuthController@logout');
    Route::post('/email/verify_code/resend', 'Auth\AuthController@verifyResend');
    
    Route::post('/users', 'UserController@update');
    Route::post('/users/avatar', 'UserController@avatar');
    Route::post('/users/overlay', 'UserController@overlay');
    Route::get('/users/{id}/teams/invites', 'UserController@invitesToTeam');
    Route::get('/users/{userId}/teams/{teamId}', 'UserController@getTeamById');
    Route::get('/users/{id}/teams/invites', 'UserController@invitesToTeam');
    Route::get('/users/{id}/transactions', 'UserController@transactions');
    
    /**
     * Teams
     */
    Route::get('/teams/{id}/users', 'TeamController@users');
    Route::get('/teams/{teamId}/users/{userId}', 'TeamController@userById');
    Route::put('/teams/{teamId}/users/{userId}', 'TeamController@inviteUser');
    Route::post('/teams/{id}/toInvestor', 'TeamController@linkToInvestor');
    Route::post('/investors/{userId}/teams/{teamId}', 'TeamController@invest');

    Route::resource('teams', 'TeamController', ['only' => [
        'store', 'update', 'destroy', 'edit'
    ]]);//apiHandler
    Route::post('/teams/logo', 'TeamController@logo');
    Route::post('/teams/overlay', 'TeamController@overlay');
    Route::post('/teams/{id}', 'TeamController@update');    
    
    /**
     * Fights
     */
    Route::resource('fights', 'FightController', ['only' => [
        'store', 'update', 'destroy', 'edit'
    ]]);
    
    /**
     * Tournaments
     */
     Route::post('/tournaments/{tournament_id}/teams/{team_id}', 'TournamentController@register');
    
    /**
     * Friends
     */
    Route::post('/friends/befriend', 'FriendController@befriend');
    Route::post('/friends/unfriend', 'FriendController@unfriend');
    Route::post('/friends/acceptFriendRequest', 'FriendController@acceptFriendRequest');
    Route::post('/friends/denyFriendRequest', 'FriendController@denyFriendRequest');
    Route::get('/friends/getPendingOutFriends', 'FriendController@getPendingOutFriends');
    Route::get('/friends/getPendingInFriends', 'FriendController@getPendingInFriends');    
    Route::get('/friends/searchPotential', 'FriendController@searchPotentialFriends');
});


/*************************************************************************************************************************/


/**
 * Steam
 */
//Route::get('/steam/friends/import', '\App\Acme\Helpers\SteamHelper@importUsersFromFriends');
Route::get('/steam/{steam_id}/friends', '\App\Acme\Helpers\SteamHelper@getFriends');
Route::get('/steam/{steam_id}/convertToId32', '\App\Acme\Helpers\SteamHelper@convertSteamid64ToSteamid32');
Route::get('/dota2/player/{steam_id32}/getPlayer', '\App\Acme\Helpers\SteamHelper@getDota2Player');
Route::get('/dota2/player/{steam_id32}/getPlayerWinLoss', '\App\Acme\Helpers\SteamHelper@getDota2PlayerWinLoss');
Route::get('/dota2/player/{steam_id32}/getPlayerTotal', '\App\Acme\Helpers\SteamHelper@getDota2PlayerTotal');
Route::get('/dota2/player/{steam_id32}/matches', '\App\Acme\Helpers\SteamHelper@getDota2PlayerMatches');
Route::get('/dota2/matches/{match_id}', '\App\Acme\Helpers\SteamHelper@getDota2Match');

Route::get('/user_social_accounts', 'UserSocialAccountController@index');//apiHandler

/**
 * Paypal
 */
Route::post('/paypal/create', array('uses' => 'PayPalController@getCheckout'));
Route::post('/paypal/execute', array('uses' => 'PayPalController@getDone'));
Route::get('/paypal/cancel', array('uses' => 'PayPalController@getCancel'));

Route::get('/vk/{id}/{message}', '\App\Acme\Helpers\VkHelper@send');
Route::get('/edu_schools', function(){

    $count = 0;
    $sites = 0;
    $sites_minus_emails = 0;
    foreach(\App\Models\EduSchool::all() as $school)
    {
        if(count($school->emails)>0)
        {
            $count++;
        }else{
            if(!empty($school->website))
                $sites_minus_emails++;
        }


        if(!empty($school->website))
            $sites++;
    }

    echo "emails=".$count."<br/>";
    echo "websites=".$sites."<br/>";
    echo "websites without emails=".$sites_minus_emails;
    //echo \App\Models\EduSchool::whereNotNull("emails")->count();
});