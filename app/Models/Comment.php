<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
   	protected $fillable = ['comment','active','reply_id','url','user_id'];
 
   	protected $dates = ['created_at', 'updated_at'];
 
  	public function replies()
   	{
        return $this->hasMany('App\Models\Comment', 'id', 'reply_id');
   	}
    
    public function user()
   	{
        return $this->belongsTo('App\User');
   	}
}