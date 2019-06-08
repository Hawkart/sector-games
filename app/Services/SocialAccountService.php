<?php

namespace App\Services;

use App\Models\UserSocialAccount;
use App\Models\InstitutionUser;
use App\Models\Institution;
use App\User;
use JWTAuth;
use Auth;
use Illuminate\Http\Request;
use App\Acme\Helpers\TwitchHelper;
use Google_Client;
use Google_Service_People;

class SocialAccountService
{
    public function createOrGetUser($providerObj, $providerName, Request $request)
    {
        $providerUser = $providerObj->user();
        $account = UserSocialAccount::whereProvider($providerName)
            ->whereProviderUserId($providerUser->getId())
            ->first();

        if ($account)
        {
            //If user is authorized check by token
            if(!empty(\Session::get('auth_token')))
            {
                $token = \Session::get('auth_token');
                $user = JWTAuth::setToken($token)->authenticate();

                if($user->id!=$account->user->id)
                    return [];
            }

            return $account->user;
        }
        else
        {
            $user = [];
            $providerUser->contacts = [];

            //Add social account to auth user
            if(!empty(\Session::get('auth_token')))
            {
                $token = \Session::get('auth_token');
                $user = JWTAuth::setToken($token)->authenticate();
            }

            if (!$user)
                $user = User::createBySocialProvider($providerUser);

            //Action by provider
            switch($providerName)
            {
                case "twitch":
                    $streams = [];
                    $nickname = $providerUser->getNickname();
                    $data = TwitchHelper::getVideosByUsername($nickname);
                    foreach($data as $stream)
                    {
                        $streams[] = $stream['url'];
                    }

                    $user->update([
                        'nickname'=> $nickname,
                        'streams' => $streams
                    ]);
                    break;
                case "google":
                    // Установим токен в  Google API PHP Client
                    $google_client_token = [
                        'access_token' => $providerUser->token
                    ];

                    $client = new Google_Client();
                    $client->setApplicationName(env("GOOGLE_APP_NAME"));
                    $client->setDeveloperKey(env('GOOGLE_SERVER_KEY'));
                    $client->setAccessToken(json_encode($google_client_token));
                    // Запросим контакты пользователя
                    $service = new Google_Service_People($client);

                    $optParams = array('requestMask.includeField' => 'person.phone_numbers,person.names,person.email_addresses');
                    $results = $service->people_connections->listPeopleConnections('people/me',$optParams);

                    $contacts = [];
                    foreach($results->connections as $connection)
                    {
                        $contact = [];
                        if(isset($connection->names))
                        {
                            $contact['name'] = $connection->names[0]->displayName;
                        }

                        if(isset($connection->phoneNumbers))
                        {
                            $contact['phone'] = $connection->phoneNumbers[0]->canonicalForm;
                        }

                        if(isset($connection->emailAddresses))
                        {
                            $contact['email'] = $connection->emailAddresses[0]->value;
                        }

                        $contacts[] = $contact;
                    }
                    if(count($contacts)>0)
                    {
                        $user->update([
                            'contacts' => $contacts
                        ]);
                    }
                    break;
                case "vkontakte":
                    $schools = $providerUser->user['schools'];
                    /*if(count($schools)>0)
                    {
                        $school = $schools[0];
                        $institutions = Institution::where("vk_id", $school['id'])->get();
                        if($institutions->count()>0)
                        {
                            $institution = $institutions->first();
                        }

                        if($school['year_graduated']<date('Y') || ($school['year_graduated']==date('Y') && intval(date('m'))<9))
                        {
                            $years = 11-$school['year_graduated']+date('Y');
                            if(intval(date('m'))>7)
                            {
                                $years++;
                            }

                            if($years>=8 && $years<=11)
                            {
                                $iu = new InstitutionUser([
                                    'institution_id' => $institution->id,
                                    'user_id' => $user->id,
                                    'class' => $school['class'],
                                    'number' => $years
                                ]);
                                $iu->save();
                            }

                        }
                    }*/
                    break;
            }

            //Create social-user connection
            $account = new UserSocialAccount([
                'provider_user_id' => $providerUser->getId(),
                'provider' => $providerName
            ]);
            $account->user()->associate($user);
            $account->save();

            return $user;
        }
    }
}