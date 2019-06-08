<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;;
use \Webpatser\Countries\Countries;
use App\Acme\Helpers\ApiHelper;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $countries = new Countries();      
        return ApiHelper::parseMultiple($countries, ['name'], $request->all());
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        $country = new Countries();
        return ApiHelper::parseSingle($country, $id, $request->all());
    }
}