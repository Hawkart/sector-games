<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\User;

class CommentController extends Controller
{
	public function index($pageId)
	{
        if(empty($pageId))
        {
            $pageId = 'main';
        }
        
		return $comments = Comment::where('url', $pageId)->where('reply_id', 0)->where("active", 1)
            ->with(['user', 'replies'])
            ->orderBy('created_at', 'desc')
            ->paginate(3);
   	}
 
	protected function replies($commentId)
   	{
       	$comments = Comment::where('reply_id', $commentId)->get();
       	$replies = [];
       	foreach ($comments as $key) 
        {
           	$user = User::find($key->user_id);
            
           	array_push($replies,[
                "user" => $user,
               	"id" => $key->id,
               	"comment" => $key->comment,
               	"date" => $key->created_at->toDateTimeString()
           	]);
        }
            
       	$collection = collect($replies);
       	return $collection->sortBy('created_at');
   	}

	public function store(Request $request)
   	{
       	$this->validate($request, [
       		'comment' => 'required',
       		'reply_id' => 'filled',
       		'url' => 'filled'
       	]);
        
        $request['user_id'] = $request->user()->id;
 
        if(empty($request['url']))
        {
            $request['url'] = 'main';
        }
 
       	$comment = Comment::create($request->all());
 
        if($comment)
            return response()->json(["status" => "true", "_id" => $comment->id]);
   	}
}