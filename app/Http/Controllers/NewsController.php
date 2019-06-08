<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use App\Acme\Helpers\ApiHelper;
use App\User;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
	public function index(Request $request)
	{
        $news = News::active();      
        return ApiHelper::parseMultiple($news, ['title'], $request->all());
   	}
 
    /**
     * Display the specified resource.
     *
     * @param  mixed  $param
     * @return \Illuminate\Http\Response
     */
    public function show($param, Request $request)
    {
        if ( is_numeric($param) ) 
        {
            $filterBy = ['id' => $param];
        }else{
            $filterBy = ['slug' => $param];
        }
        
        $news = new News();
        return ApiHelper::parseSingle($news, $filterBy, $request->all());
    }
}