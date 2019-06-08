<?php
/**
 * Game roles
 */
/**
 * @api {get} /game_roles Get list all
 * @apiName index
 * @apiGroup Game roles
 * @apiPermission guest:api
 */

/**
 * Countries
 */
/**
 * @api {get} /countries Get list all
 * @apiName index
 * @apiGroup Country
 * @apiPermission guest:api
 */
 
/**
 * @api {get} /countries/:id Get detail
 * @apiName show
 * @apiGroup Country
 * @apiPermission guest:api
 * @apiParam {Number} id Country unique ID.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
  "id": 4,
  "capital": "Kabul",
  "citizenship": "Afghan",
  "country_code": "004",
  "currency": "afghani",
  "currency_code": "AFN",
  "currency_sub_unit": "pul",
  "currency_symbol": "؋",
  "currency_decimals": 2,
  "full_name": "Islamic Republic of Afghanistan",
  "iso_3166_2": "AF",
  "iso_3166_3": "AFG",
  "name": "Afghanistan",
  "region_code": "142",
  "sub_region_code": "034",
  "eea": 0,
  "calling_code": "93",
  "flag": "AF.png"
}
*/

/*************************************************************************************************************************/

/**
 * Users
 */
/**
 * @api {get} /users/me Get own User
 * @apiName own
 * @apiGroup User
 * @apiPermission Authenticated User
 */

/**
 * @api {get} /users List all users
 * @apiName all
 * @apiGroup User
 * @apiPermission guest:api
 */

/**
 * @api {get} /users/:id Read data of a User
 * @apiName show
 * @apiGroup User
 * @apiPermission guest:api
 * @apiDescription Realations: country, team, game, teams, fights, createdFights, judgeOfFights, commentatorOfFights, canceledFights
 * 
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
  "id": 512,
  "role_id": 2,
  "name": "VLADISLAV",
  "email": "v-ilchenko@yandex.ru",
  "avatar": "avatars/Z4t3tYoGt4vHi7kID7t72SXrrkiQpsezebFd4FpX.png",
  "created_at": "2017-06-21 11:40:52",
  "updated_at": "2017-06-21 11:51:11",
  "type": "player",
  "second_name": null,
  "last_name": null,
  "nickname": "v-ilchenko@yandex.ru",
  "phone": null,
  "active": 1,
  "confirmed": 1,
  "rating": null,
  "team_wins": null,
  "person_wins": null,
  "min_sponsor_fee": null,
  "credit_rating": null,
  "notify": "y",
  "overlay": null,
  "description": null,
  "country_id": 643,
  "balance": 0
}
 */

/**
 * @api {get} /users/:id/team User's team data
 * @apiName team
 * @apiGroup User
 * @apiPermission guest:api
 * @apiDescription Get data of user's team.
 * 
 * @apiParam {Number} id User unique ID.
 */

/**
 * @api {get} /users/:id/friends User's friends
 * @apiName friends
 * @apiGroup User
 * @apiPermission guest:api
 * @apiDescription Get data of user's friends.
 * 
 * @apiParam {Number} id User unique ID.
 */
/**
 * @api {get} /users/:id/teams User's teams from history
 * @apiName teams
 * @apiGroup User
 * @apiPermission guest:api
 * @apiDescription Get data of user's teams.
 * 
 * @apiParam {Number} id User unique ID.
 */


/**
 * @api {get} /users/:id/fights User's fights
 * @apiName fights
 * @apiGroup User
 * @apiPermission guest:api
 * @apiDescription Get data of user's fights.
 * 
 * @apiParam {Number} id User unique ID.
 */
/*************************************************************************************************************************/


/**
 *Genres
 */

/*************************************************************************************************************************/
/**
 * Games
 */
/**
 * @api {get} /games/import Import games
 * @apiName import
 * @apiGroup Game
 * @apiPermission Authenticated User Admin
 * @apiDescription Import games from twtich & giantbomb.
 */

/**
 * @api {get} /games Get list all
 * @apiName index
 * @apiGroup Game
 * @apiPermission guest:api
 * @apiDescription Get  list of all games.
 */
/**
 * @api {get} /games/:id Get detail
 * @apiName show
 * @apiGroup Game
 * @apiPermission guest:api
 * @apiDescription Get data of game.
 * 
 * @apiParam {Number} id Game unique ID.
 * 
  * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
  "id": 1,
  "active": 1,
  "giantbomb_id": 24024,
  "twitch_id": 21779,
  "genre_id": 50,
  "title": "League of Legends",
  "alias": "LoL",
  "images": "[\"games\\/2847560-dsc01166.jpg\",\"games\\/2847559-dsc00543.jpg\",\"games\\/2847489-dsc01164.jpg\",\"games\\/2847476-dsc00925.jpg\",\"games\\/2847475-dsc00924.jpg\",\"games\\/2847474-dsc00923.jpg\"]",
  "logo": "games/League20of20Legends-272x380.jpg",
  "body": "A free-to-play competitive MOBA game with a large following in eSports. From the original developers of DotA: Allstars, the game expands the gameplay found in DotA by adding persistent Summoner profiles and a variety of original champions who fight for you on the battlefield against bots or one another.",
  "site_url": null,
  "rules": null,
  "video_count": 0,
  "online": 1,
  "min_players": 2,
  "overlay": null
}
 */
/*************************************************************************************************************************/

/**
 * @api {get} /timezones Get list all
 * @apiName index
 * @apiGroup Timezone
 * @apiPermission guest:api
 * @apiDescription Get list of timezones.
 */

/*************************************************************************************************************************/

/**
 * News
 */
/**
 * @api {get} /news Get list all
 * @apiName index
 * @apiGroup News
 * @apiPermission guest:api
 * @apiDescription Get  list of all news.
 */
/**
 * @api {get} /news/:param Get detail
 * @apiName show
 * @apiGroup News
 * @apiPermission guest:api
 * @apiDescription Get data of news.
 * 
 * @apiParam {Number} param News unique slug.
 */

/*************************************************************************************************************************/

/**
 * Teams
 */
/**
 * @api {get} /teams/:param Team's data
 * @apiName show
 * @apiGroup Team
 * 
 * @apiPermission guest:api
 * @apiDescription Get data of team by slug or id.
 * 
 * @apiParam {String} param Team unique slug or id.
 */

/**
 * @api {get} /teams Get list all
 * @apiName index
 * @apiGroup Team
 * @apiPermission guest:api
 * @apiDescription Get list of teams.
 */

/**
 * @api {get} /teams/:id/invitations Invitations to team
 * @apiName invitations
 * @apiGroup Team
 * @apiPermission guest:api
 * @apiDescription Get invitations to the team by id.
 * 
 * @apiParam {Number} param Team unique id.
 */

/**
 * @api {get} /teams/:id/fights Team's fights
 * @apiName fights
 * @apiGroup Team
 * 
 * @apiPermission guest:api
 * @apiDescription Get data of team's fights id.
 * 
 * @apiParam {Number} param Team unique id.
 */

/**
 * @api {get} /teams/:id/fights/calendar Calendar of possible matches.
 * @apiName calendar
 * @apiGroup Team
 * 
 * @apiPermission guest:api
 * @apiDescription Calendar of team. List of possible matches with other teams.
 * 
 * @apiParam {Number} param Team unique id.
 */


/**
 * @api {get} /teams/{id}/fights/invitations/in Invitatios to matches (IN)
 * @apiName fights-invitations-in
 * @apiGroup Team
 * 
 * @apiPermission guest:api
 * @apiDescription List of invitations to matches from other teams.
 * 
 * @apiParam {Number} param Team unique id.
 */

/**
 * @api {get} /teams/{id}/fights/invitations/out Invitatios to matches (OUT)
 * @apiName fights-invitations-out
 * @apiGroup Team
 * 
 * @apiPermission guest:api
 * @apiDescription List of invitations to matches to other teams.
 * 
 * @apiParam {Number} param Team unique id.
 */

/*************************************************************************************************************************/


/**
 * FightTeam
 */
/**
 * @api {get} /fight_team All figths and teams connections.
 * @apiName index
 * @apiGroup FightTeam
 * 
 * @apiPermission guest:api
 * @apiDescription List of fights figths and teams connections.
 */

/**
 * @api {put} /fight_team/:id Update team and fight connection.
 * @apiName update
 * @apiGroup FightTeam
 * 
 * @apiPermission Authenticated User
 * 
 * @apiParam {Number} param Fight and team connection unique id.
 */

/*************************************************************************************************************************/


/**
 * TeamUsers (Invitations)
 */
/**
 * @api {get} /team_user Get all users & teams connections
 * @apiName index
 * @apiGroup TeamUser
 * @apiPermission guest:api
 * @apiDescription Get all users & teams connections with statuses. Uses for team's & user's history.  _With: user,sender,team
 */
/*************************************************************************************************************************/


/**
 * Twitch & streams
 */
/**
 * @api {post} /streams Save stream
 * @apiName store
 * @apiGroup Stream
 * @apiPermission guest:api
 * @apiDescription Save stream of user from xsplit for the fight.
 * 
 * @apiParam {String} gcore_id Unique id of stream.
 * @apiParam {String} nickname User's nickname on the site and xsplit. Must be the same.
 * @apiParam {String} stream_url Link to the stream
 * @apiParam {String} stream_start Timestamp start of stream
 */

/**
 * @api {put} /streams Update stream
 * @apiName update
 * @apiGroup Stream
 * @apiPermission guest:api
 * @apiDescription Update stream of user from xsplit for the fight.
 * 
 * @apiParam {String} gcore_id Unique id of stream.
 * @apiParam {String} nickname Not required. User's nickname on the site and xsplit. Must be the same.
 * @apiParam {String} stream_record Link to the stream video
 * @apiParam {String} stream_end Timestamp end of stream
 */


/**
 * @api {get} /twitch Featured streams
 * @apiName featured
 * @apiGroup Twitch
 * @apiPermission guest:api
 * @apiDescription Get list of featured streams.
 * 
 */

/**
 * @api {get} /twitch/search/:game Search by the game
 * @apiName search
 * @apiGroup Twitch
 * @apiPermission guest:api
 * @apiDescription Search streams by the name of the game
 * 
 * @apiParam {String} game Name of the game
 */
/*************************************************************************************************************************/

/**
 * Matches
 */

/**
 * @api {get} /email/verify_code/resend Email verify resend
 * @apiName verify-email-resend
 * @apiGroup OAuth2
 * @apiPermission guest:api
 * @apiDescription Resend verifing email by confirmation code.
 */

/**
 * Login & register
 */
   
    /**
     * @api {post} /register Register
     * @apiName register
     * @apiGroup OAuth2
     * @apiPermission guest:api
     * @apiDescription Register Users using their email, password, nickname. After user'll recieve email with confirmation link to verify the email.
     * 
     * @apiParam {String} email user email
     * @apiParam {String} password user password
     * @apiParam {String} nickname user nickname
     */

    /**
     * @api {post} /login Login (Client Credentials)
     * @apiName login
     * @apiGroup OAuth2
     * @apiPermission guest:api
     * @apiDescription Login Users using their nickname and password.
     * 
     * @apiParam {String} nickname user nickname
     * @apiParam {String} password user password
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
{
  "token_type": "Bearer",
  "expires_in": 315360000,
  "token": "eyJ0eXAiOiJKV1QiLCJhbG..."
}
     */

    /**
     * @api {post} /password/email Reset password link
     * @apiName password-email
     * @apiGroup OAuth2
     * @apiPermission guest:api
     * @apiDescription Link for reseting of password sends to email.
     * 
     * @apiParam {String} email user email
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
{
    "message": "We have e-mailed your password reset link!"
}
     *
     * @apiErrorExample {json} Error-Response:
     * HTTP/1.1 422 Unprocessable Entity
{
    "email": "We can't find a user with that e-mail address."
}
     */

    /**
     * @api {post} /password/reset Reset password
     * @apiName password-reset
     * @apiGroup OAuth2
     * @apiPermission guest:api
     * @apiDescription Reset password using token from email.
     * 
     * @apiParam {String} email user email
     * @apiParam {String} password new user password
     * @apiParam {String} password_confirmation new user password repeat
     * @apiParam {String} token token from email
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
{
    "message": "Your password has been reset!"
}
     *
     * @apiErrorExample {json} Error-Response:
     * HTTP/1.1 422 Unprocessable Entity
{
    "password": [
        "The password confirmation does not match.",
        "The password must be at least 6 characters.",
        "We can't find a user with that e-mail address.",
        "This password reset token is invalid."
    ]
}
     */

    /**
     * @api {get} /email/verify/:confirmationCode Email verify
     * @apiName verify-email
     * @apiGroup OAuth2
     * @apiPermission guest:api
     * @apiDescription Verifing email by confirmation code.
     * 
     * @apiParam {String} confirmationCode confirmation code from email
     */

    /**
     * @api {get} /social/:provider Login
     * @apiName login
     * @apiGroup SocialAuth
     * @apiPermission guest:api
     * @apiDescription Login & register using social accounts. Redirect to social site.
     * 
     * @apiParam {String} provider social provider: vkontakte|google|facebook|twitter|steam|twitch
     */
    
    /**
     * @api {get} /social/:provider/callback Login callback
     * @apiName login-callback
     * @apiGroup SocialAuth
     * @apiPermission guest:api
     * @apiDescription Callback from social site. Create user from social account.
     * 
     * @apiParam {String} provider social provider: vkontakte|google|facebook|twitter|steam|twitch
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
{
  "token_type": "Bearer",
  "expires_in": 315360000,
  "token": "eyJ0eXAiOiJKV1QiLCJhbG..."
}
     */

    /**
     * Users & auth
     */    
        
    /**
     * @api {post} /refresh Refresh
     * @apiName refresh
     * @apiGroup OAuth2
     * @apiPermission Authenticated User
     * @apiDescription Refresh access token based on refreshToken http cookie.
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
{
  "token_type": "Bearer",
  "expires_in": 315360000,
  "token": "eyJ0eXAiOiJKV1QiLCJhbG..."
}

    
    /**
     * @api {post} /logout Logout
     * @apiName logout
     * @apiGroup OAuth2
     * @apiPermission Authenticated User
     * @apiDescription User Logout. (Revoking Access Token)
     * 
     * @apiSuccessExample {json} Success-Response:
     *HTTP/1.1 202 Accepted
{
  "message": "Token revoked successfully."
}
     */

    
    /**
     * Teams
     */

    
});


/*************************************************************************************************************************/


/**
 * Steam
 */
/**
 * @api {get} /steam/:steam_id/friends Get steam users by steam_id
 * @apiName friends
 * @apiGroup Steam
 * 
 * @apiPermission guest:api
 * 
 * @apiParam {Number} steam_id id (64)
 */

/**
 * @api {get} /steam/player/:steam_id/convertToId32 Convert id64 to id 32
 * @apiName convert-to-id32
 * @apiGroup Steam
 * 
 * @apiPermission guest:api
 * @apiDescription Need for search info in Dota2.
 * 
 * @apiParam {Number} steam_id id (64)
 */

/**
 * @api {get} /dota2/player/:steam_id32/getPlayer Get player
 * @apiName player
 * @apiGroup Dota2
 * 
 * @apiPermission guest:api
 * 
 * @apiParam {Number} steam_id32 id (32), use converting from steam_id64!
 */
/**
 * @api {get} /dota2/:steam_id32/getPlayerWinLoss  Get winloss player info
 * @apiName player-winloss
 * @apiGroup Dota2
 * 
 * @apiPermission guest:api
 * 
 * @apiParam {Number} steam_id32 id (32), use converting from steam_id64!
 */

/**
 * @api {get} /dota2/player/:steam_id32/getPlayerTotal  Get total player
 * @apiName player-total
 * @apiGroup Dota2
 * 
 * @apiPermission guest:api
 * 
 * @apiParam {Number} steam_id32 id (32), use converting from steam_id64!
 */

/*************************************************************************************************************************/


/**
 * @api {get} /user_social_accounts List all user social accounts
 * @apiName all
 * @apiGroup UserSocialAccount
 * @apiPermission guest:api
 */