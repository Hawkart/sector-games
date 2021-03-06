define({ "api": [
  {
    "type": "get",
    "url": "/countries",
    "title": "Get list all",
    "name": "index",
    "group": "Country",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/countries/:id",
    "title": "Get detail",
    "name": "show",
    "group": "Country",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Country unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 4,\n  \"capital\": \"Kabul\",\n  \"citizenship\": \"Afghan\",\n  \"country_code\": \"004\",\n  \"currency\": \"afghani\",\n  \"currency_code\": \"AFN\",\n  \"currency_sub_unit\": \"pul\",\n  \"currency_symbol\": \"؋\",\n  \"currency_decimals\": 2,\n  \"full_name\": \"Islamic Republic of Afghanistan\",\n  \"iso_3166_2\": \"AF\",\n  \"iso_3166_3\": \"AFG\",\n  \"name\": \"Afghanistan\",\n  \"region_code\": \"142\",\n  \"sub_region_code\": \"034\",\n  \"eea\": 0,\n  \"calling_code\": \"93\",\n  \"flag\": \"AF.png\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/dota2/:steam_id32/getPlayer",
    "title": "Get player",
    "name": "player",
    "group": "Dota2",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "steam_id32",
            "description": "<p>id (32), use converting from steam_id64!</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Dota2"
  },
  {
    "type": "get",
    "url": "/dota2/:steam_id32/getPlayerTotal",
    "title": "Get total player",
    "name": "player_total",
    "group": "Dota2",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "steam_id32",
            "description": "<p>id (32), use converting from steam_id64!</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Dota2"
  },
  {
    "type": "get",
    "url": "/dota2/:steam_id32/getPlayerWinLoss",
    "title": "Get winloss player info",
    "name": "player_winloss",
    "group": "Dota2",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "steam_id32",
            "description": "<p>id (32), use converting from steam_id64!</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Dota2"
  },
  {
    "type": "get",
    "url": "/fight_team",
    "title": "All figths and teams connections.",
    "name": "index",
    "group": "FightTeam",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>List of fights figths and teams connections.</p>",
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "FightTeam"
  },
  {
    "type": "put",
    "url": "/fight_team/:id",
    "title": "Update team and fight connection.",
    "name": "update",
    "group": "FightTeam",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "param",
            "description": "<p>Fight and team connection unique id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "FightTeam"
  },
  {
    "type": "get",
    "url": "/games/import",
    "title": "Import games",
    "name": "import",
    "group": "Game",
    "permission": [
      {
        "name": "Authenticated User Admin"
      }
    ],
    "description": "<p>Import games from twtich &amp; giantbomb.</p>",
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games",
    "title": "Get list all",
    "name": "index",
    "group": "Game",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get  list of all games.</p>",
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games/:id",
    "title": "Get detail",
    "name": "show",
    "group": "Game",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get data of game.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Game unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"active\": 1,\n  \"giantbomb_id\": 24024,\n  \"twitch_id\": 21779,\n  \"genre_id\": 50,\n  \"title\": \"League of Legends\",\n  \"alias\": \"LoL\",\n  \"images\": \"[\\\"games\\\\/2847560-dsc01166.jpg\\\",\\\"games\\\\/2847559-dsc00543.jpg\\\",\\\"games\\\\/2847489-dsc01164.jpg\\\",\\\"games\\\\/2847476-dsc00925.jpg\\\",\\\"games\\\\/2847475-dsc00924.jpg\\\",\\\"games\\\\/2847474-dsc00923.jpg\\\"]\",\n  \"logo\": \"games/League20of20Legends-272x380.jpg\",\n  \"body\": \"A free-to-play competitive MOBA game with a large following in eSports. From the original developers of DotA: Allstars, the game expands the gameplay found in DotA by adding persistent Summoner profiles and a variety of original champions who fight for you on the battlefield against bots or one another.\",\n  \"site_url\": null,\n  \"rules\": null,\n  \"video_count\": 0,\n  \"online\": 1,\n  \"min_players\": 2,\n  \"overlay\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/news",
    "title": "Get list all",
    "name": "index",
    "group": "News",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get  list of all news.</p>",
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/news/:param",
    "title": "Get detail",
    "name": "show",
    "group": "News",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get data of news.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "param",
            "description": "<p>News unique slug.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "News"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login (Client Credentials)",
    "name": "login",
    "group": "OAuth2",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Login Users using their nickname and password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>user nickname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token_type\": \"Bearer\",\n  \"expires_in\": 315360000,\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbG...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "OAuth2"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "Logout",
    "name": "logout",
    "group": "OAuth2",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>User Logout. (Revoking Access Token)</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 Accepted\n{\n  \"message\": \"Token revoked successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "OAuth2"
  },
  {
    "type": "post",
    "url": "/password/email",
    "title": "Reset password link",
    "name": "password_email",
    "group": "OAuth2",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Link for reseting of password sends to email.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"We have e-mailed your password reset link!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"email\": \"We can't find a user with that e-mail address.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "OAuth2"
  },
  {
    "type": "post",
    "url": "/password/reset",
    "title": "Reset password",
    "name": "password_reset",
    "group": "OAuth2",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Reset password using token from email.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>new user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>new user password repeat</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token from email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Your password has been reset!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"password\": [\n        \"The password confirmation does not match.\",\n        \"The password must be at least 6 characters.\",\n        \"We can't find a user with that e-mail address.\",\n        \"This password reset token is invalid.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "OAuth2"
  },
  {
    "type": "post",
    "url": "/refresh",
    "title": "Refresh",
    "name": "refresh",
    "group": "OAuth2",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Refresh access token based on refreshToken http cookie.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token_type\": \"Bearer\",\n  \"expires_in\": 315360000,\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbG...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "OAuth2"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register",
    "name": "register",
    "group": "OAuth2",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Register Users using their email, password, nickname. After user'll recieve email with confirmation link to verify the email.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>user nickname</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "OAuth2"
  },
  {
    "type": "get",
    "url": "/email/verify/:confirmationCode",
    "title": "Email verify",
    "name": "verify_email",
    "group": "OAuth2",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Verifing email by confirmation code.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmationCode",
            "description": "<p>confirmation code from email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "OAuth2"
  },
  {
    "type": "get",
    "url": "/email/verify_code/resend",
    "title": "Email verify resend",
    "name": "verify_email_resend",
    "group": "OAuth2",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Resend verifing email by confirmation code.</p>",
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "OAuth2"
  },
  {
    "type": "get",
    "url": "/social/:provider",
    "title": "Login",
    "name": "login",
    "group": "SocialAuth",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Login &amp; register using social accounts. Redirect to social site.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>social provider: vkontakte|google|facebook|twitter|steam|twitch</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "SocialAuth"
  },
  {
    "type": "get",
    "url": "/social/:provider/callback",
    "title": "Login callback",
    "name": "login_callback",
    "group": "SocialAuth",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Callback from social site. Create user from social account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>social provider: vkontakte|google|facebook|twitter|steam|twitch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token_type\": \"Bearer\",\n  \"expires_in\": 315360000,\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbG...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "SocialAuth"
  },
  {
    "type": "get",
    "url": "/steam/:steam_id/convertToId32",
    "title": "Convert id64 to id 32",
    "name": "convert_to_id32",
    "group": "Steam",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Need for search info in Dota2.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "steam_id",
            "description": "<p>id (64)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Steam"
  },
  {
    "type": "get",
    "url": "/steam/:steam_id/friends",
    "title": "Get steam users by steam_id",
    "name": "friends",
    "group": "Steam",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "steam_id",
            "description": "<p>id (64)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Steam"
  },
  {
    "type": "post",
    "url": "/streams",
    "title": "Save stream",
    "name": "store",
    "group": "Stream",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Save stream of user from xsplit for the fight.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gcore_id",
            "description": "<p>Unique id of stream.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>User's nickname on the site and xsplit. Must be the same.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stream_url",
            "description": "<p>Link to the stream</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stream_start",
            "description": "<p>Timestamp start of stream</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Stream"
  },
  {
    "type": "put",
    "url": "/streams",
    "title": "Update stream",
    "name": "update",
    "group": "Stream",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Update stream of user from xsplit for the fight.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gcore_id",
            "description": "<p>Unique id of stream.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Not required. User's nickname on the site and xsplit. Must be the same.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stream_record",
            "description": "<p>Link to the stream video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stream_end",
            "description": "<p>Timestamp end of stream</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Stream"
  },
  {
    "type": "get",
    "url": "/team_user",
    "title": "Get all users & teams connections",
    "name": "index",
    "group": "TeamUser",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get all users &amp; teams connections with statuses. Uses for team's &amp; user's history.  _With: user,sender,team</p>",
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "TeamUser"
  },
  {
    "type": "get",
    "url": "/teams/:id/fights/calendar",
    "title": "Calendar of possible matches.",
    "name": "calendar",
    "group": "Team",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Calendar of team. List of possible matches with other teams.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "param",
            "description": "<p>Team unique id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/teams/:id/fights",
    "title": "Team's fights",
    "name": "fights",
    "group": "Team",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get data of team's fights id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "param",
            "description": "<p>Team unique id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/teams/{id}/fights/invitations/in",
    "title": "Invitatios to matches (IN)",
    "name": "fights_invitations_in",
    "group": "Team",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>List of invitations to matches from other teams.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "param",
            "description": "<p>Team unique id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/teams/{id}/fights/invitations/out",
    "title": "Invitatios to matches (OUT)",
    "name": "fights_invitations_out",
    "group": "Team",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>List of invitations to matches to other teams.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "param",
            "description": "<p>Team unique id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/teams",
    "title": "Get list all",
    "name": "index",
    "group": "Team",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get list of teams.</p>",
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/teams/:id/invitations",
    "title": "Invitations to team",
    "name": "invitations",
    "group": "Team",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get invitations to the team by id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "param",
            "description": "<p>Team unique id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/teams/:param",
    "title": "Team's data",
    "name": "show",
    "group": "Team",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get data of team by slug or id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "param",
            "description": "<p>Team unique slug or id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "/timezones",
    "title": "Get list all",
    "name": "index",
    "group": "Timezone",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get list of timezones.</p>",
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Timezone"
  },
  {
    "type": "get",
    "url": "/twitch",
    "title": "Featured streams",
    "name": "featured",
    "group": "Twitch",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get list of featured streams.</p>",
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Twitch"
  },
  {
    "type": "get",
    "url": "/twitch/search/:game",
    "title": "Search by the game",
    "name": "search",
    "group": "Twitch",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Search streams by the name of the game</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Name of the game</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Twitch"
  },
  {
    "type": "get",
    "url": "/userSocialAccounts",
    "title": "List all user social accounts",
    "name": "all",
    "group": "UserSocialAccount",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "UserSocialAccount"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List all users",
    "name": "all",
    "group": "User",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/fights",
    "title": "User's fights",
    "name": "fights",
    "group": "User",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get data of user's fights.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/friends",
    "title": "User's friends",
    "name": "friends",
    "group": "User",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get data of user's friends.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Get own User",
    "name": "own",
    "group": "User",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Read data of a User",
    "name": "show",
    "group": "User",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Realations: country, team, game, teams, fights, createdFights, judgeOfFights, commentatorOfFights, canceledFights</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 512,\n  \"role_id\": 2,\n  \"name\": \"VLADISLAV\",\n  \"email\": \"v-ilchenko@yandex.ru\",\n  \"avatar\": \"avatars/Z4t3tYoGt4vHi7kID7t72SXrrkiQpsezebFd4FpX.png\",\n  \"created_at\": \"2017-06-21 11:40:52\",\n  \"updated_at\": \"2017-06-21 11:51:11\",\n  \"type\": \"player\",\n  \"second_name\": null,\n  \"last_name\": null,\n  \"nickname\": \"v-ilchenko@yandex.ru\",\n  \"phone\": null,\n  \"active\": 1,\n  \"confirmed\": 1,\n  \"rating\": null,\n  \"team_wins\": null,\n  \"person_wins\": null,\n  \"min_sponsor_fee\": null,\n  \"credit_rating\": null,\n  \"notify\": \"y\",\n  \"overlay\": null,\n  \"description\": null,\n  \"country_id\": 643,\n  \"balance\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/team",
    "title": "User's team data",
    "name": "team",
    "group": "User",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get data of user's team.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/teams",
    "title": "User's teams from history",
    "name": "teams",
    "group": "User",
    "permission": [
      {
        "name": "guest:api"
      }
    ],
    "description": "<p>Get data of user's teams.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User"
  }
] });
