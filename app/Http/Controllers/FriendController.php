<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Cache;
use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Hootlex\Friendships\Models\Friendship;
use Hootlex\Friendships\Status;

class FriendController extends Controller
{
    /**
     * Send a Friend Request
     *
     * @return \Illuminate\Http\Response
     */
    public function befriend(Request $request)
    {
        if($request->has('id'))
        {
            $user = $request->user();
            $recipient = User::findOrFail((int)$request->get('id'));
            if($result = $user->befriend($recipient))
            {
                return response()->json([
                    'success' => true,
                    '_id'=> $result->id
                ], 200);
            }else{
                return response()->json([
                    'error' => 'You have already submitted a request'
                ], 200);
            }
        }
        
        return response()->json([
            'error' => 'Need recipient user id'
        ], 200);
    }
    
    /**
     * Accept a Friend Request
     *
     * @return \Illuminate\Http\Response
     */
    public function acceptFriendRequest(Request $request)
    {
        if($request->has('id'))
        {
            $user = $request->user();
            $sender = User::findOrFail((int)$request->get('id'));
            if($result = $user->acceptFriendRequest($sender))
            {
                return response()->json([
                    'success' => true
                ], 200);
            }else{
                return response()->json([
                    'error' => 'Error of system. Try to make it later'
                ], 200);
            }
        }
        
        return response()->json([
            'error' => 'Need sender user id'
        ], 200);
    }
    
    /**
     * Deny a Friend Request
     *
     * @return \Illuminate\Http\Response
     */
    public function denyFriendRequest(Request $request)
    {
        if($request->has('id'))
        {
            $user = $request->user();
            $sender = User::findOrFail((int)$request->get('id'));
            if($result = $user->denyFriendRequest($sender))
            {
                return response()->json([
                    'success' => true
                ], 200);
            }else{
                return response()->json([
                    'error' => 'Error of system. Try to make it later'
                ], 200);
            }
        }
        
        return response()->json([
            'error' => 'Need sender user id'
        ], 200);
    }
    
    /**
     * Get a list of pending Friendships
     *
     * @return \Illuminate\Http\Response
     */
    public function getPendingOutFriends(Request $request)
    {
        $user = $request->user();
        $friendships = $user->getPendingFriendships()->where("sender_id", $user->id);
        $recipients  = $friendships->pluck('recipient_id')->all();
        $result = User::whereIn('id', $recipients)
            ->where('type', $user->type)
            ->active()
            ->select(['id', 'avatar', 'nickname'])
            ->get();
            
        return response()->json($result, 200);
    }
    
    /**
     * Get a list of pending Friendships
     *
     * @return \Illuminate\Http\Response
     */
    public function getPendingInFriends(Request $request)
    {
        $user = $request->user();
        $friendships = $user->getPendingFriendships()->where("recipient_id", $user->id);
        $senders  = $friendships->pluck('sender_id')->all();
        $result = User::whereIn('id', $senders)
            ->where('type', $user->type)
            //->active()
            ->select(['id', 'avatar', 'nickname'])
            ->get();
            
        return response()->json($result, 200);
    }

    /**
     * Get a list of potential friends
     *
     * @return \Illuminate\Http\Response
     */
    public function searchPotentialFriends(Request $request)
    {
        $user = $request->user(); 
        $error = ['error' => 'No results found, please try with different keywords.'];
        
        $friendships = $user->getAllFriendships();
        $recipients  = $friendships->pluck('recipient_id')->all();
        $senders     = $friendships->pluck('sender_id')->all();
        
        if($request->has('q') && !empty($request->has('q') )) 
        {
            $items = User::search($request->get('q'))
                        ->where('id', '!=', $user->getKey());
        }else{
            $items = User::where('id', '!=', $user->getKey());
        }
        
        $items = $items->whereNotIn('id', array_merge($recipients, $senders))
                ->where('type', $user->type)
                ->active()
                ->select(['id', 'name', 'last_name', 'avatar', 'nickname', 'type'])
                ->paginate(12);
            
        if($items->count()==0)
            return response()->json($error);

        return response()->json($items);
    }
    
    /**
     * Get a list of potential friends
     *
     * @return \Illuminate\Http\Response
     */
    public function unfriend(Request $request)
    {
        if($request->has('id'))
        {
            $user = $request->user();
            $recipient = User::findOrFail((int)$request->get('id'));
            if($result = $user->unfriend($recipient))
            {
                return response()->json([
                    'success' => true
                ], 200);
            }else{
                return response()->json([
                    'error' => 'You are not a friends'
                ], 200);
            }
        }
        
        return response()->json([
            'error' => 'Need recipient user id'
        ], 200);
    }     
}