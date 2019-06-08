<?php

namespace App\Acme\Helpers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use ApiHandler;
use ATehnix\VkClient\Client;
use App\Models\School;

class VkHelper{

    function send($id , $message)
    {
        $url = 'https://api.vk.com/method/messages.send';
        $params = array(
            'domain' => $id,
            'message' => $message,
            'access_token' => env('VKONTAKTE_TOKEN_SEND', ''),
            'v' => '5.53',
        );

        // В $result вернется id отправленного сообщения
        $result = file_get_contents($url, false, stream_context_create([
            'http' => [
                'method'  => 'POST',
                'header'  => 'Content-type: application/x-www-form-urlencoded',
                'content' => http_build_query($params)
            ]
        ]));

        //dd($result);

        return $result;
    }

    static function searchUsers(School $school)
    {
        $request = new Request(
            'users.search',
            [
                'age_from' => 14,
                'age_to' => 18,
                'school' => $school->id,
                'offset' => $offset,
                'count'  => $count,
            ],
            env('VKONTAKTE_TOKEN_SEND', '')
        );

        $client = new Client('5.53');
        //$client->setDefaultToken(config('vk-geo.token', 'some-token'));
        $response = $client->send($request);

        //dd($response);

        return $response;
    }
}