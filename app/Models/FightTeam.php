<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FightTeam extends Model
{
    public $timestamps = false;
    protected $fillable = ['team_id', 'fight_id', 'status'];
    
    /**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'fight_team';
    
    /**
     * Connection with fight
     * @Relation
     */
    public function fight()
    {
        return $this->belongsTo('App\Models\Fight', 'fight_id');
    }
    
    /**
     * Connection with team
     * @Relation
     */
    public function team()
    {
        return $this->belongsTo('App\Models\Team', 'team_id');
    }
}