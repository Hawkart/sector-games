<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvestorTeam extends Model
{
    public $timestamps = true;
    protected $fillable = ['user_id', 'team_id', 'invest_price', 'owner'];
    
    /**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'investor_team';
    
    /**
     * @Relation
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
    
    /**
     * @Relation
     */
    public function team()
    {
        return $this->belongsTo('App\Models\Team', 'team_id');
    }
}