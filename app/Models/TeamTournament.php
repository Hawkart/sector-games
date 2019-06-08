<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamTournament extends Model
{
    public $timestamps = false;
    protected $fillable = ['tournament_id', 'team_id', 'place'];
    
    /**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'team_tournament';
    
    /**
     * @Relation
     */
    public function tournament()
    {
        return $this->belongsTo('App\Models\Tournament', 'tournament_id');
    }
    
    /**
     * @Relation
     */
    public function team()
    {
        return $this->belongsTo('App\Models\Team', 'team_id');
    }
}