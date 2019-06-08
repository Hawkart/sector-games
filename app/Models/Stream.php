<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Stream extends Model
{
    public $timestamps = false;
    protected $fillable = ['fight_id', 'team_id', 'user_id', 'url'];
    
    /**
     * @Relation
     */
    public function team()
    {
        return $this->belongsTo('App\Models\Team', 'team_id');
    }
    
    /**
     * @Relation
     */
    public function fight()
    {
        return $this->belongsTo('App\Models\Fight', 'fight_id');
    }
       
    /**
     * @Relation
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}