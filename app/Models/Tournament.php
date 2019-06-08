<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Tournament extends Model
{
    protected $dates = ['start_at', 'end_at', 'contract_start_at', 'contract_end_at', 'register_start', 'final_at'];
    protected $fillable = [
        'parent_id', 'title', 'start_at', 'end_at', 'buy_in', 'prize_pool', 'count_teams', 'status', 'min_teams', 'count_wins', 
        'description', 'rules', 'image', 'is_multiple', 'game_id', 'contract_start_at', 'contract_end_at', 'register_start', 'final_at'
    ];
    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [

    ];
    
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'promocode'
    ];
    
    /**
     * Game of tournament.
     * @Relation
     */
    public function game()
    {
        return $this->belongsTo('App\Models\Game', 'game_id');
    }
    
    /**
     * Parent tournament if it is muliple. Need for creating copy.
     * @Relation
     */
    public function parent()
    {
        return $this->belongsTo('App\Models\Tournament', 'parent_id');
    }
    
    /**
     * @Relation
     */
    public function fights()
    {
        return $this->hasMany('App\Models\Fight', 'tournament_id');
    }
    
    /**
     * Invitations
     * @Relation
     */
    public function teams()
    {
        return $this->hasMany('App\Models\TeamTournament', 'tournament_id');
    }
}