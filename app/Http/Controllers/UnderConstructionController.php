<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UnderConstructionController extends Controller
{
    public function index()
    {
        return view('under_construction');
    }
    public function authenticate(Request $request)
    {
        $key = trim($request->input('key'));
        $key_str = env('UNDER_CONSTRUCTION_LOGIN_KEY');
        $keys = explode(",", $key_str);
        if(in_array($key, $keys))
        {
            $request->session()->put('DO_NOT_REDIRECT_TO_UNDER_CONSTRUCTION', true);
            return redirect('/');
        }
        else
        {
            $request->session()->flash('status', 'Invalid login key');
        }
        return redirect('/under-construction');
    }
    
    public function logout(Request $request)
    {
        $request->session()->forget('DO_NOT_REDIRECT_TO_UNDER_CONSTRUCTION');
        $request->session()->flush();
        return redirect('/');
    }
}
