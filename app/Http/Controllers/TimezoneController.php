<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cache;
use Timezone;

class TimezoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   
        $timezone = new \Camroncade\Timezone\Timezone();
        $timezones = $timezone->timezoneList;
        
        return response()->json($timezones, 200);
    }
    
    public static function convertFromUTC($timestamp, $timezone, $format)
    {
        return Timezone::convertFromUTC($timestamp, $timezone, $format);
    }
    
    public static function convertToUTC($timestamp, $timezone, $format)
    {
        return Timezone::convertToUTC($timestamp, $timezone, $format);
    }
}