<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use TCG\Voyager\Models\Role;
use TCG\Voyager\Models\DataRow;
use TCG\Voyager\Models\DataType;
use TCG\Voyager\Models\Menu;
use TCG\Voyager\Models\MenuItem;
use TCG\Voyager\Models\Permission;

use App\User;
use App\Models\Genre;
use App\Models\Game;
use App\Models\UserSocialAccount;
use App\Models\Team;
use App\Models\TeamUser;
use App\Models\Fight;
use App\Models\FightTeam;
use App\Models\FightClaim;
use App\Models\FightFee;
use App\Models\FightUser;

use App\Acme\Helpers\TwitchHelper;

use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        
        //Seed the countries
        $this->call('CountriesSeeder');
        $this->command->info('Seeded the countries!');
        
        $this->call('RoleTableSeeder');
		$this->call('UserTableSeeder');
        $this->call('UserSocialAccountTableSeeder');
        
        $this->call('GenreTableSeeder');
        $this->call('GameTableSeeder');
        
        $this->call('TeamUserTableSeeder'); //Team and TeamUser
        $this->call('FightTableSeeder');
        /*$this->call('FightTeamTableSeeder');
        $this->call('FightUserTableSeeder');
        $this->call('FightFeeTableSeeder');
        $this->call('FightClaimTableSeeder');*/
        
        $this->call('DataTypeTableSeeder');
        $this->call('DataRowTableSeeder');
        $this->call('MenuTableSeeder');
        $this->call('MenuItemTableSeeder');
        $this->call('PermissionTableSeeder');
        $this->call('PermissionsRoleTableSeeder');
    }
}

class RoleTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     */
    public function run()
    {
        $role = Role::firstOrNew(['name' => 'admin']);
        if (!$role->exists) 
        {
            $role->fill([
                    'display_name' => 'Administrator',
                ])->save();
        }

        $role = Role::firstOrNew(['name' => 'user']);
        if (!$role->exists) 
        {
            $role->fill([
                    'display_name' => 'User',
                ])->save();
        }
    }
}

class UserTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        $faker = Faker::create('ru_RU');
        
        if (User::count() == 0) 
        {
            $role = Role::where('name', 'admin')->firstOrFail();

            User::create([
                'name'           => 'Admin',
                'email'          => 'admin@admin.com',
                'nickname'       => 'admin',
                'password'       => 'password',
                'remember_token' => str_random(60),
                'role_id'        => $role->id,
                'avatar'         => $faker->imageUrl($width = 300, $height = 300),
                'country_id'     => 1,
                'api_token'         => str_random(100)
            ]);
        }
        
    	foreach (range(1, 99) as $index) 
        {
            $data = [
                'active'            => $faker->boolean,
                'confirmed'         => $faker->boolean,
                'confirmation_code' => str_random(60),
	            'name'              => $faker->firstName,
                'last_name'         => $faker->lastName,
                'nickname'          => $faker->unique()->userName,
	            'email'             => $faker->unique()->email,
	            'password'          => 'secret',
                'remember_token'    => str_random(60),
                'role_id'           => 2, //$faker->randomElement([1, 2]),
                'type'              => $faker->randomElement(['player', 'investor']),
                'phone'             => $faker->phoneNumber,
                'rating'            => $faker->randomFloat(2, 0, 1000),
                'team_wins'         => $faker->randomDigit,
                'person_wins'       => $faker->randomDigit,
                'min_sponsor_fee'   => null,
                'credit_rating'     => $faker->randomFloat(2, 0, 1000),
                'notify'            => $faker->randomElement(['y', 'n']),
                'avatar'            => $faker->imageUrl($width = 300, $height = 300),
                'country_id'        => 1,
                'api_token'         => str_random(100)
	        ];
            
	        User::create($data);
        }
    }
}

class UserSocialAccountTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_social_account')->delete();
        
        $faker = Faker::create();
        
    	foreach (range(1, 10) as $index) 
        {
	        UserSocialAccount::create([
                'user_id'            => $faker->randomElement(range(1, 99)),
                'provider_user_id'   => $faker->randomDigit,
                'provider'           => $faker->randomElement(['google', 'vkontakte', 'facebook', 'steam', 'twitter']),
	        ]);
        }
    }
}

class GenreTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        DB::table('genres')->delete();
        /*$faker = Faker::create();
        
    	foreach (range(1, 20) as $index) 
        {
	        Genre::create([
                'active'            => $faker->boolean,
                'title'             => $faker->unique()->company,
                'image'             => $faker->imageUrl($width = 300, $height = 300),
	        ]);
        }*/
        
        $Genres = new App\Http\Controllers\GenreController();
        $Genres->importByGiantbomb();
    }
}

class GameTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        DB::table('games')->delete();
        /*$faker = Faker::create();
        
    	foreach (range(1, 20) as $index) 
        {
            $images = [];
            foreach(range(1,5) as $image)
            {
                $images[] = $faker->imageUrl($width = 300, $height = 300);
            }
            
	        Game::create([
                'active'      => $faker->boolean,
                'title'       => $faker->unique()->company,
                'genre_id'    => $faker->numberBetween(1, 20),
                'images'      => json_encode($images),
                'logo'        => $faker->imageUrl($width = 300, $height = 300),
                'body'        => $faker->paragraph(4),
                'site_url'    => $faker->unique()->url,
                'rules'       => $faker->paragraph(4),
                'online'      => $faker->boolean,
	        ]);
        }*/
        
        $Games = new App\Http\Controllers\GameController();
        $Games->importByTwitchGiantbomb();
    }
}


class TeamUserTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        DB::table('teams')->delete();
        DB::table('team_user')->delete();
        
        $arUsers = User::active()->player()->pluck('id')->all();
        
        $faker = Faker::create();
        
    	foreach (range(1, 20) as $index) 
        {
            $user_key = array_rand($arUsers, 1);
            $capt_id = $arUsers[$user_key];
            
	        $Team = Team::create([
                'title'      => $faker->unique()->company,
                'capt_id'    => $capt_id,
                'image'      => $faker->imageUrl($width = 300, $height = 300),
	        ])->toArray();
            
            if(intval($Team['id'])>0)
            {
                $user_keys = array_rand($arUsers, rand(3, 4));
                $user_keys[] = $user_key;
                $user_keys = array_unique($user_keys);
                
                foreach($user_keys as $user_key)
                {
                    $user_id = $arUsers[$user_key];
                    TeamUser::create([
                        'team_id'    => $Team['id'],
                        'user_id'    => $user_id,
        	        ]);
                }
            }
        }
    }
}

class FightTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        DB::table('fights')->delete();

        //Get info from other models
        $arPlayers = User::active()->player()->pluck('id')->all();
        $arCommentators = User::active()->pluck('id')->all();
        $arGames = Game::active()->pluck('title', 'id')->all();
        $arTeams = Team::pluck('id')->all();
        
        $faker = Faker::create();
        
    	foreach (range(1, 20) as $index) 
        {
            $created_key = array_rand($arPlayers, 1);
            $created_id = $arPlayers[$created_key];
            
            $user_key = array_rand($arCommentators, 1);
            $commentator_id = $arCommentators[$user_key];
            
            $game_id = array_rand($arGames, 1);
            $type = $faker->randomElement(['personal', 'team']);
            $countParts = rand(2, 4);
            
            $countTeamUsers = 0;
            if($type=='team')
            {
                $countTeamUsers = rand(2, 3); 
            }
            
            $minFeeTotal = $faker->randomFloat(2, 2000, 10000);
            
            $fightData = [
                'active'            => $faker->boolean,
                'game_id'           => $game_id,
                'title'             => "Fight by the game: ". $arGames[$game_id],
                'created_id'        => $created_id,
                'type'              => $type,
                'count_parts'       => $countParts,
                'count_team_users'  => $countTeamUsers,
                'min_fee_total'     => $minFeeTotal,
                'changed_fee'       => $faker->boolean,
                'commentator_id'    => $commentator_id,
                'changed_time'      => $faker->boolean,
                //'min_fee'           => 1, 
                //'judge_id'          => null,
                //'winner_id'         => winner_id
                //'result'
            ];
            
            //Generate ended fight or not
            $ended_flag = $faker->boolean;
            if($ended_flag)
            {
                $fightData['start_at'] = $start_at = $faker->dateTimeInInterval('- 2 days', '- 1 days')->format('Y-m-d H:i:s');
                $fightData['end_at'] = $endt_at = $faker->dateTimeInInterval('- 20 hours', '- 2 hours')->format('Y-m-d H:i:s');
            }else{
                $fightData['start_at'] = $start_at = $faker->dateTimeInInterval('+ 1 days', '+ 5 days')->format('Y-m-d H:i:s');
            }
            
            //Generate canceled fight or not
            $fightData['canceled'] = $canceled_flag = $faker->boolean;
            if($canceled_flag)
            {
                $fightData['cancel_user_id'] = $faker->randomElement([1, $created_id]);
                $fightData['cancel_text'] = $faker->paragraph(1);
            }
            
	        $Fight = Fight::create($fightData)->toArray();
            
            if($type=='team')
            {
                $team_keys = array_rand($arTeams, $countParts);
                
                foreach($team_keys as $team_key)
                {
                    $FightTeam = FightTeam::create([
                        'fight_id'    => $Fight['id'],
                        'team_id'     => $arTeams[$team_key],
        	        ])->toArray();
                }
                
                //TODO: Get users for every team
            }else{
                
                //If personal
                $arPlayersExceptCreated = $arPlayers;
                unset($arPlayersExceptCreated[$created_key]);
                $player_keys = array_rand($arPlayersExceptCreated, $countParts);
                $player_keys[] = $created_key;
                
                $arBroadcasts = [];
                $arStreams = TwitchHelper::searchStreamsByGame($arGames[$game_id]);
                foreach($arStreams as $arStream)
                {
                    if(!empty($arStream))
                        $arBroadcasts[] = $arStream['channel']['display_name'];
                }
                
                foreach($player_keys as $player_key)
                {
                    $fightUserData = [
                        'fight_id'  => $Fight['id'],
                        'user_id'   => $arPlayers[$player_key] 
        	        ];
                    
                    if(count($arBroadcasts)>0)
                    {
                        $broadcast_key = array_rand($arBroadcasts, 1);
                        $fightUserData['broadcast_url'] = 'http://player.twitch.tv/?channel='.$arBroadcasts[$broadcast_key];
                    }
                    
                    if($ended_flag)
                    {
                        $fightUserData['confirm_end'] = true;
                        $fightUserData['end_at'] = $faker->dateTimeInInterval('- 22 hours', '- 21 hours')->format('Y-m-d H:i:s');
                    }

                    $FightUser = FightUser::create($fightUserData)->toArray();
                }
            }
            
            //TODO: Get judge from users
            //Set winners
            //Add boolean winner to FightUser
            
            
            //print_r($Fight); die();
         }
    }
}

class DataTypeTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     */
    public function run()
    {
        $dataType = $this->dataType('slug', 'posts');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'posts',
                'display_name_singular' => 'Post',
                'display_name_plural'   => 'Posts',
                'icon'                  => 'voyager-news',
                'model_name'            => 'TCG\\Voyager\\Models\\Post',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'genres');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'genres',
                'display_name_singular' => 'Genre',
                'display_name_plural'   => 'Genres',
                'icon'                  => '',
                'model_name'            => 'App\\Models\\Genre',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'games');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'games',
                'display_name_singular' => 'Game',
                'display_name_plural'   => 'Games',
                'icon'                  => '',
                'model_name'            => 'App\\Models\\Game',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'pages');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'pages',
                'display_name_singular' => 'Page',
                'display_name_plural'   => 'Pages',
                'icon'                  => 'voyager-file-text',
                'model_name'            => 'TCG\\Voyager\\Models\\Page',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'users');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'users',
                'display_name_singular' => 'User',
                'display_name_plural'   => 'Users',
                'icon'                  => 'voyager-person',
                'model_name'            => 'TCG\\Voyager\\Models\\User',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'teams');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'teams',
                'display_name_singular' => 'Team',
                'display_name_plural'   => 'Teams',
                'icon'                  => '',
                'model_name'            => 'App\\Models\\Team',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'team-user');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'team_user',
                'display_name_singular' => 'Team and user',
                'display_name_plural'   => 'Teams and users',
                'icon'                  => '',
                'model_name'            => 'App\\Models\\TeamUser',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'fights');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'fights',
                'display_name_singular' => 'Fight',
                'display_name_plural'   => 'Fights',
                'icon'                  => '',
                'model_name'            => 'App\\Models\\Fight',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'fight-team');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'fight_team',
                'display_name_singular' => 'Team of fight',
                'display_name_plural'   => 'Teams of fight',
                'icon'                  => '',
                'model_name'            => 'App\\Models\\FightTeam',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'fight-user');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'fight_user',
                'display_name_singular' => 'Fight\'s user',
                'display_name_plural'   => 'Fight\'s users',
                'icon'                  => '',
                'model_name'            => 'App\\Models\\FightUser',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'fight-fee');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'fight_fee',
                'display_name_singular' => 'Fight\'s fee',
                'display_name_plural'   => 'Fight\'s fees',
                'icon'                  => '',
                'model_name'            => 'App\\Models\\FightFee',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'fight-claim');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'fight_claim',
                'display_name_singular' => 'Fight\'s claim',
                'display_name_plural'   => 'Fight\'s claims',
                'icon'                  => '',
                'model_name'            => 'App\\Models\\FightClaim',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('name', 'categories');
        if (!$dataType->exists) {
            $dataType->fill([
                'slug'                  => 'categories',
                'display_name_singular' => 'Category',
                'display_name_plural'   => 'Categories',
                'icon'                  => 'voyager-categories',
                'model_name'            => 'TCG\\Voyager\\Models\\Category',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
        
        $dataType = $this->dataType('slug', 'menus');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'menus',
                'display_name_singular' => 'Menu',
                'display_name_plural'   => 'Menu',
                'icon'                  => 'voyager-list',
                'model_name'            => 'TCG\\Voyager\\Models\\Menu',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }

        $dataType = $this->dataType('slug', 'roles');
        if (!$dataType->exists) {
            $dataType->fill([
                'name'                  => 'roles',
                'display_name_singular' => 'Role',
                'display_name_plural'   => 'Roles',
                'icon'                  => 'voyager-lock',
                'model_name'            => 'TCG\\Voyager\\Models\\Role',
                'controller'            => '',
                'generate_permissions'  => 1,
                'description'           => '',
            ])->save();
        }
    }

    /**
     * [dataType description].
     *
     * @param [type] $field [description]
     * @param [type] $for   [description]
     *
     * @return [type] [description]
     */
    protected function dataType($field, $for)
    {
        return DataType::firstOrNew([$field => $for]);
    }
}

class DataRowTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     */
    public function run()
    {
        $pageDataType = DataType::where('slug', 'pages')->firstOrFail();
        $userDataType = DataType::where('slug', 'users')->firstOrFail();
        $menuDataType = DataType::where('slug', 'menus')->firstOrFail();
        $roleDataType = DataType::where('slug', 'roles')->firstOrFail();
        $genreDataType = DataType::where('slug', 'genres')->firstOrFail();
        $gameDataType = DataType::where('slug', 'games')->firstOrFail();
        $teamDataType = DataType::where('slug', 'teams')->firstOrFail();
        $fightDataType = DataType::where('slug', 'fights')->firstOrFail();
        
        $fightUserDataType = DataType::where('slug', 'fight-user')->firstOrFail();
        $fightTeamDataType = DataType::where('slug', 'fight-team')->firstOrFail();
        $fightFeeDataType = DataType::where('slug', 'fight-fee')->firstOrFail();
        $fightClaimDataType = DataType::where('slug', 'fight-claim')->firstOrFail();

        $dataRow = $this->dataRow($pageDataType, 'id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'id',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'author_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'author_id',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'title');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'title',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'excerpt');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text_area',
                'display_name' => 'excerpt',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'body');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'rich_text_box',
                'display_name' => 'body',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'slug');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'slug',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => json_encode([
                    'slugify' => [
                        'origin' => 'title',
                    ],
                ]),
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'meta_description');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'meta_description',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'meta_keywords');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'meta_keywords',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'status');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'select_dropdown',
                'display_name' => 'status',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => json_encode([
                    'default' => 'INACTIVE',
                    'options' => [
                        'INACTIVE' => 'INACTIVE',
                        'ACTIVE'   => 'ACTIVE',
                    ],
                ]),
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'created_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'created_at',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'updated_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'updated_at',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($pageDataType, 'image');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'image',
                'display_name' => 'image',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($userDataType, 'id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'id',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($userDataType, 'name');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'name',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($userDataType, 'email');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'email',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($userDataType, 'password');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'password',
                'display_name' => 'password',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($userDataType, 'remember_token');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'remember_token',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($userDataType, 'created_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'created_at',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($userDataType, 'updated_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'updated_at',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($userDataType, 'avatar');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'image',
                'display_name' => 'avatar',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($menuDataType, 'id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'id',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($menuDataType, 'name');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'name',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($menuDataType, 'created_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'created_at',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($menuDataType, 'updated_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'updated_at',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }
        
        
        /**
         * Role
         **/
        $dataRow = $this->dataRow($roleDataType, 'id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'id',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($roleDataType, 'name');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'Name',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($roleDataType, 'created_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'created_at',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($roleDataType, 'updated_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'updated_at',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($roleDataType, 'display_name');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'Display Name',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($userDataType, 'role_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'role_id',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        
        
        /**
         * Genre
         */
        $dataRow = $this->dataRow($genreDataType, 'id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'id',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($genreDataType, 'active');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'checkbox',
                'display_name' => 'Active',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($genreDataType, 'title');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'Title',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($genreDataType, 'image');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'image',
                'display_name' => 'Image',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($genreDataType, 'desc');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'Description',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($genreDataType, 'video_count');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Broadcasts number',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        
        /**
         * Game
         */
        $dataRow = $this->dataRow($gameDataType, 'id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'id',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($gameDataType, 'active');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'checkbox',
                'display_name' => 'Active',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($gameDataType, 'genre_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Genre id',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        /*$dataRow = $this->dataRow($gameDataType, 'genre');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'select_dropdown',
                'display_name' => 'Genre',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => json_encode([
                    'relationship' => [
                        'key' => 'id',
                        'label'   => 'title',
                    ],
                ]),
            ])->save();
        }*/

        $dataRow = $this->dataRow($gameDataType, 'title');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'Title',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($gameDataType, 'images');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'multiple_images',
                'display_name' => 'Images',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($gameDataType, 'logo');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'image',
                'display_name' => 'Logo',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($gameDataType, 'body');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'rich_text_box',
                'display_name' => 'Description',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($gameDataType, 'site_url');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'Site url',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($gameDataType, 'rules');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'rich_text_box',
                'display_name' => 'Rules',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($gameDataType, 'video_count');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Broadcasts number',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($gameDataType, 'online');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'checkbox',
                'display_name' => 'Online',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        
        /**
         * Team
         */
        $dataRow = $this->dataRow($teamDataType, 'id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'id',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($teamDataType, 'capt_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Captain id',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($teamDataType, 'title');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'Title',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($teamDataType, 'image');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'image',
                'display_name' => 'Logo',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        /**
         * Fight
         */
        $dataRow = $this->dataRow($fightDataType, 'id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'id',
                'required'     => 1,
                'browse'       => 0,
                'read'         => 0,
                'edit'         => 0,
                'add'          => 0,
                'delete'       => 0,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'active');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'checkbox',
                'display_name' => 'Active',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'game_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Game id',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }

        $dataRow = $this->dataRow($fightDataType, 'title');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'Title',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'created_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Created id',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }        
        
        $dataRow = $this->dataRow($fightDataType, 'type');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'select_dropdown',
                'display_name' => 'Type',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '
                {
                    "default": "personal",
                    "options": {
                        "personal": "personal",
                        "team": "team"
                    }
                }',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'count_parts');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Count parts',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        } 
        
        $dataRow = $this->dataRow($fightDataType, 'count_team_users');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Count user in the team',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'start_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'Datetime start',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'end_at');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'timestamp',
                'display_name' => 'Datetime end',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'min_fee_total');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Min total fee',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'min_fee');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Min fee',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'changed_fee');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'checkbox',
                'display_name' => 'Changed fee',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'judge_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Judge',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'commentator_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Commentator',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'winner_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Winner',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'result');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text_area',
                'display_name' => 'Result',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'changed_time');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'checkbox',
                'display_name' => 'Changed time',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'canceled');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'checkbox',
                'display_name' => 'Canceled',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'cancel_text');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text_area',
                'display_name' => 'Cancel text',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightDataType, 'cancel_user_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'User canceled',
                'required'     => 0,
                'browse'       => 0,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        /**
         * FightUser
         */       
        $dataRow = $this->dataRow($fightUserDataType, 'fight_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Fight id',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightUserDataType, 'user_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'User id',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        } 
        
        $dataRow = $this->dataRow($fightUserDataType, 'broadcast_url');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'text',
                'display_name' => 'Broadcasts url',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        } 
        
        $dataRow = $this->dataRow($fightUserDataType, 'confirm_end');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'checkbox',
                'display_name' => 'Confirm end',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        } 
        
        $dataRow = $this->dataRow($fightUserDataType, 'winner');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'checkbox',
                'display_name' => 'Is winner',
                'required'     => 0,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        
        /**
         * FightTeam
         */       
        $dataRow = $this->dataRow($fightTeamDataType, 'fight_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Fight id',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
        $dataRow = $this->dataRow($fightTeamDataType, 'team_id');
        if (!$dataRow->exists) {
            $dataRow->fill([
                'type'         => 'number',
                'display_name' => 'Team id',
                'required'     => 1,
                'browse'       => 1,
                'read'         => 1,
                'edit'         => 1,
                'add'          => 1,
                'delete'       => 1,
                'details'      => '',
            ])->save();
        }
        
                 
        //$fightFeeDataType = DataType::where('slug', 'fight-fee')->firstOrFail();
        //$fightClaimDataType = DataType::where('slug', 'fight-claim')->firstOrFail(); 

    }

    /**
     * [dataRow description].
     *
     * @param [type] $type  [description]
     * @param [type] $field [description]
     *
     * @return [type] [description]
     */
    protected function dataRow($type, $field)
    {
        return DataRow::firstOrNew([
                'data_type_id' => $type->id,
                'field'        => $field,
            ]);
    }
}

class MenuTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        Menu::firstOrCreate([
            'name' => 'admin',
        ]);
    }
}

class MenuItemTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        if (file_exists(base_path('routes/web.php'))) {
            require base_path('routes/web.php');

            $menu = Menu::where('name', 'admin')->firstOrFail();

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Dashboard',
                'url'        => route('voyager.dashboard', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-boat',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 1,
                ])->save();
            }
            
            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Genres',
                'url'        => '/admin/genres',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-puzzle',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 3,
                ])->save();
            }
            
            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Games',
                'url'        => '/admin/games',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-controller',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 3,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Media',
                'url'        => route('voyager.media.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-images',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 5,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Roles',
                'url'        => route('voyager.roles.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-lock',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 2,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Users',
                'url'        => route('voyager.users.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-person',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 2,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Teams',
                'url'        => '/admin/teams',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-group',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 3,
                ])->save();
            }
            
            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Fights',
                'url'        => '/admin/fights',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-pirate-swords',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 3,
                ])->save();
            }
            
            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Fight\'s users',
                'url'        => '/admin/fight-user',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => '',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 3,
                ])->save();
            }
            
            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Fight\'s teams',
                'url'        => '/admin/fight-team',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => '',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 3,
                ])->save();
            }
            
            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Fight\'s fees',
                'url'        => '/admin/fight-fee',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => '',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 3,
                ])->save();
            }
            
            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Fight\'s claims',
                'url'        => '/admin/fight-claim',
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => '',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 3,
                ])->save();
            }
            
            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Pages',
                'url'        => route('voyager.pages.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-file-text',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 7,
                ])->save();
            }

            $toolsMenuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Tools',
                'url'        => '',
            ]);
            if (!$toolsMenuItem->exists) {
                $toolsMenuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-tools',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 9,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Menu builder',
                'url'        => route('voyager.menus.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-list',
                    'color'      => null,
                    'parent_id'  => $toolsMenuItem->id,
                    'order'      => 10,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Database',
                'url'        => route('voyager.database.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-data',
                    'color'      => null,
                    'parent_id'  => $toolsMenuItem->id,
                    'order'      => 11,
                ])->save();
            }

            $menuItem = MenuItem::firstOrNew([
                'menu_id'    => $menu->id,
                'title'      => 'Settings',
                'url'        => route('voyager.settings.index', [], false),
            ]);
            if (!$menuItem->exists) {
                $menuItem->fill([
                    'target'     => '_self',
                    'icon_class' => 'voyager-settings',
                    'color'      => null,
                    'parent_id'  => null,
                    'order'      => 12,
                ])->save();
            }
        }
    }
}

class PermissionTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     */
    public function run()
    {
        $keys = [
            'browse_admin',
            'browse_database',
            'browse_media',
            'browse_settings',
        ];

        foreach ($keys as $key) {
            Permission::firstOrCreate([
                'key'        => $key,
                'table_name' => null,
            ]);
        }

        Permission::generateFor('menus');
        Permission::generateFor('pages');
        Permission::generateFor('roles');
        Permission::generateFor('users');
        Permission::generateFor('posts');
        Permission::generateFor('categories');
        Permission::generateFor('genres');
        Permission::generateFor('games');
        Permission::generateFor('teams');
        Permission::generateFor('team_user');
        Permission::generateFor('fights');
        
        Permission::generateFor('fight-user');
        Permission::generateFor('fight-team');
        Permission::generateFor('fight-fee');
        Permission::generateFor('fight-claim');
    }
}

class PermissionsRoleTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::where('name', 'admin')->firstOrFail();

        $permissions = Permission::all();

        $role->permissions()->sync(
            $permissions->pluck('id')->all()
        );
    }
}