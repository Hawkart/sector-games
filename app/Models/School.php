<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Requests;

/**
* Class School.
*/
class School extends \Bigperson\VkGeo\Models\AbstractModel
{
    public $timestamps = false;

    /**
    * @var array
    */
    protected $fillable = ['id', 'title', 'region_id', 'country_id', 'city_id', 'emails'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'emails' => 'array'
    ];

    /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function region()
    {
        return $this->belongsTo(\Bigperson\VkGeo\Models\Region::class);
    }

    /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function country()
    {
        return $this->belongsTo(\Bigperson\VkGeo\Models\Country::class);
    }

    /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function city()
    {
        return $this->belongsTo(\Bigperson\VkGeo\Models\City::class);
    }
}