<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Fight extends Model
{
    protected $dates = ['start_at'];
    protected $fillable = ['start_at', 'title', 'game_id', 'created_id', 'count_parts', 'status', 'bet', 'created_team_id', 
        'cancel_text', 'cancel_user_id', 'extern_match_id', 'winner_id', 'extern_statistic', 'tournament_id', 'tournament_step'];
    
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'extern_statistic' => 'array'
    ];
    
    /**
     * Invitations
     * @Relation
     */
    public function invitations()
    {
        return $this->hasMany('App\Models\FightTeam', 'fight_id');
        //return $this->hasManyThrough("App\Models\Team", "App\Models\FightTeam", 'fight_id', 'id');
    }
    
    /**
     * Игра, в которую будут играть в бою.
     * @Relation
     */
    public function game()
    {
        return $this->belongsTo('App\Models\Game', 'game_id');
    }
    
    /**
     * Team which won the match
     * @Relation
     */
    public function winner()
    {
        return $this->belongsTo('App\Models\Team', 'winner_id');
    }
       
    /**
     * Пользователь, создавший бой
     * @Relation
     */
    public function createdBy()
    {
        return $this->belongsTo('App\User', 'created_id');
    }
    
    /**
     * Team, создавший бой
     * @Relation
     */
    public function createdByTeam()
    {
        return $this->belongsTo('App\Models\Team', 'created_team_id');
    }
    
    /**
     * Судья
     * @Relation
     */
    public function judge()
    {
        return $this->belongsTo('App\User', 'judge_id');
    }
    
    /**
     * Комментатор
     * @Relation
     */
    public function commentator()
    {
        return $this->belongsTo('App\User', 'commentator_id');
    }
    
    /**
     * Пользователь, отменивший бой
     * @Relation
     */
    public function canceledBy()
    {
        return $this->belongsTo('App\User', 'cancel_user_id');
    }
    
    /**
     * Tournament
     * @Relation
     */
    public function tournament()
    {
        return $this->belongsTo('App\Models\Tournament', 'tournament_id');
    }
    
    /**
     * @Relation
     */
    public function streams()
    {
        return $this->hasMany('App\Models\Stream', 'fight_id');
    }
    
    public function scopePublished($query)
    {
        $query->where('start_at', '>=', Carbon::now())->where('status', 1);
    }
    
    public function setStartAtAttribute($date)
    {
        $this->attributes['start_at'] = Carbon::createFromFormat('Y-m-d H:i:s', $date);
    }
}