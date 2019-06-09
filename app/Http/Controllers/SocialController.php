<?php

namespace App\Http\Controllers;

//use App\Http\Requests;
use App\Services\SocialAccountService;
use Socialite;
use Carbon\Carbon;
use JWTAuth;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use Google_Client;
use Google_Service_People;
use Cookie;

class SocialController extends Controller
{
    /**
     * Redirect the user to the provider authentication page.
     *
     * @param  string $provider
     * @return \Illuminate\Http\RedirectResponse
     */
    public function redirectToProvider($provider, Request $request)
    {
        if($request->has('token') && $request->get('token'))
        {
            \Session::put('auth_token', $request->get('token'));
        }else{
            \Session::put('auth_token', '');
        }

        if($provider=="google")
        {
            $url = Socialite::with($provider)
                ->scopes(['openid', 'profile', 'email', Google_Service_People::CONTACTS_READONLY])
                ->stateless()->redirect()->getTargetUrl();

        }else{
            $url = Socialite::with($provider)
                ->stateless()->redirect()->getTargetUrl();
        }

        return response(['url' => $url]);
    }

    public function login($provider, Request $request)
    {
        if($request->has('token') && $request->get('token'))
        {
            \Session::put('auth_token', $request->get('token'));
        }else{
            \Session::put('auth_token', '');
        }

        if($provider=="google")
        {
            return Socialite::with($provider)
                ->scopes(['openid', 'profile', 'email', Google_Service_People::CONTACTS_READONLY])
                ->redirect();

        }else{
            return Socialite::with($provider)->redirect();
        }
    }

    public function callback(SocialAccountService $service, $provider, Request $request)
    {
        $driver = Socialite::driver($provider);
        $user = $service->createOrGetUser($driver, $provider, $request);

        if(!$user)
        {
            return response()->json([
                'error' => 'Could not create user',
            ], 500);
        }else{
            if(!$token = JWTAuth::fromUser($user))
            {
                $token = str_random(256);
                JWTAuth::setToken($token);
            }

            $payload = JWTAuth::getPayload($token);
            $expiration = $payload['exp'];
        }

        return view('social_callback', [
            "token_type" => "Bearer",
            'token' => $token,
            'expires_in' => $expiration
        ]);
    }

}