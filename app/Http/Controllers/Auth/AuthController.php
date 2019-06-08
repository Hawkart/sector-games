<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterFormRequest;
use App\Http\Requests\LoginFormRequest;
use Carbon\Carbon;
use JWTAuth;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Cache;
use App\Mail\EmailVerify;
use Mail;
use jdavidbakr\MailTracker\Model\SentEmail;

class AuthController extends Controller
{
    protected $username = 'email';
    
    /**
     * Verify email by confirmation_code from message
     * 
     * @param string $confirmation_code
     */
    public function verify($confirmation_code)
    {
        if( ! $confirmation_code)
        {
            return response()->json([
                'error' => 'No confirmation code',
            ], 500);
        }

        $user = User::where('confirmation_code', $confirmation_code)->first();

        if ( ! $user)
        {
            return response()->json([
                'error' => 'Wrong confirmation code'.$confirmation_code,
            ], 500);
        }

        $user->confirmed = 1;
        
        if(!empty($user->type))
            $user->active = 1;
        
        $user->confirmation_code = null;
        $user->save();
        
        return response()->json([
            'message' => 'Your account is now verified!'
        ], 200);
    }
    
    /**
     * Verify code resend
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function verifyResend(Request $request)
    {
        $user = $request->user();
		return $this->verifySend($user, $request, $request->getHost());
    }
	
	/**
     * Verify code resend
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function verifySend($user, $request, $host)
    {
        $confirmation_code = str_random(100);
        
        $data = [
            'confirmation_code' => $confirmation_code
        ];
		
		if($request->has('email'))
            $email = $request->get('email');
        else
            $email = $user->email;
        
        if($user->email != $email && !empty($email))
            $data['email'] = $email;

        $user->update($data);
		
        $time = Carbon::now('UTC')->subMinutes(15)->toDateTimeString();

        if(SentEmail::where("recipient", $email)
            ->where('created_at', '>=', $time)->count()==0)
        {
			if(strpos(env('APP_URL', $host))===false)
				$host = "http://".$host;

            $content = [
                'url' => $host."/email/verify/".$confirmation_code,//url(config('app.url')."/email/verify/".$confirmation_code),
                'title' => 'Verify your email address',
                'button' => 'Click Here'
            ];

            Mail::to($email)->send(new EmailVerify($content));
        }

        return response()->json([
            'message' => 'Check your E-Mail box and activate your account by click to "Click Here" button in received e-mail from Sparta.Games.'
        ], 200);
    }
    
    /**
     * Register user by params
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(RegisterFormRequest $request)
    {
        $data = $request->all();
        if($request->get('type')=='coach')
        {
            $data['crowd_allow'] = false;
        }else{
            $data['balance'] = 10;
        }
		
		//$refer = $request->server('HTTP_REFERER');
		//$host = parse_url($refer, PHP_URL_SCHEME)."://".parse_url($refer,PHP_URL_HOST);
		
		//if((in_array($host, config('cors.allowedOrigins')) || config('cors.allowedOrigins')==['*']) && $request->has('institution_id'))
		if(hostReferAllowed($request) && $request->has('institution_id'))
		{
			$errors = [];
			if(empty($data['institution_id']))
				$errors['institution_id'] = 'You need choose the institution';
			
			if(empty($data['class']))
				$errors['class'] = 'You need choose the class';
			
			if(empty($data['char']))
				$errors['char'] = 'You need choose the char';
			
			if(count($errors)>0)
			{
				return response()->json(errors, 500);
			}
			
			unset($data['class']);
			unset($data['char']);
		}
		
        $user = User::create($data);
		
        if($request->get('type')!='coach')
        {
            \App\Models\Transaction::create([
                "user_id" => $user->id,
                "description" => "Registration bonus.",
                "data" => '',
                "external_id" => '',
                "amount" => 10
            ]);
        }
		
		if(hostReferAllowed($request) && $request->has('institution_id'))
		{
			\App\Models\InstitutionUser::create([
                'user_id' => $user->id,
				'institution_id' => $request->get('institution_id'),
				'number' => $request->get('class'),
				'char' => $request->get('char')
            ]);
			
			return $this->verifySend($user, $request, $request->getHost());
		}

        return response()->json([], 200);
    }
    
    /**
     * Login user by params
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(LoginFormRequest $request)
    {
        $credentials = $request->only('email', 'password');
        $expiration = Carbon::now()->addWeek()->timestamp;
        try {
            if(! $token = JWTAuth::attempt($credentials, [
                'exp' => $expiration,
            ])){
                return response()->json([
                    'message' => 'Invalid credentials.'
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'message' => 'Could not create token',
            ], 500);
        }
        
        $user = $request->user();
        
        /*if(!$user->confirmed)
        {
            $confirmation_code = str_random(100);
            $user->confirmation_code = $confirmation_code;
            $user->update();
            
            if(!empty($user->email))
            {
                $content = [
            		'url' => url(config('app.url')."/email/verify/".$confirmation_code),
                    'title' => 'Verify your email address',
            		'button' => 'Click Here'
          		];
            }
    
        	Mail::to($user->email)->send(new EmailVerify($content));
            
            return response()->json([
                'error' => 'You didn\'t confirm email. Check your email box, you\'ll recieve email with confirmation link.',
                //'user' => $request->user()
            ], 401);
        }*/
        
        $payload = JWTAuth::getPayload($token);
        $expiration = $payload['exp'];
        
        return response()->json([
            "token_type" => "Bearer",
            'token' => $token,
            'expires_in' => $expiration
        ], 200);
    }
    
    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        //$request->user()->pullCache();  //clear UserOnline cache
        $token = JWTAuth::getToken();
        JWTAuth::setToken($token)->invalidate();
        return response()->json([
             "message" => "Token revoked successfully."
        ], 202);
    }
    
    
    /**
     * Get token with refreshing
     */
    public function token()
    {
        $token = JWTAuth::getToken();

        if (! $token) {
            throw new BadRequestHttpException('Token not provided');
        }

        try {
            $token = JWTAuth::refresh($token);
        } catch (TokenInvalidException $e) {
            throw new AccessDeniedHttpException('The token is invalid');
        }
        
        $payload = JWTAuth::parseToken()->getPayload();
        $expiration = $payload->getExp();
        return response()->json([
            "token_type" => "Bearer",
            'token' => $token,
            'expires_in' => $expiration
        ], 200);
    }
}