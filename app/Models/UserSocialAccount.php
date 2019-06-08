<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;

class UserSocialAccount extends Model
{
    protected $table = 'user_social_account';   
    protected $fillable = ['user_id', 'provider_user_id', 'provider'];

    /**
     * @Relation
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}