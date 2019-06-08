<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StreamStoreRequest;
use App\Http\Requests\StreamUpdateRequest;
use App\Models\Stream;
use App\Models\Team;
use App\Models\Fight;
use App\User;
use App\Acme\Helpers\ApiHelper;
use Validator;


class StreamController extends Controller
{    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StreamStoreRequest $request)
    {
        $input = $request->all();
        
        $user = User::where('nickname', $input['nickname'])->first();
        
        $userTeam = $user->team()->first();
        $currentFight = $userTeam->fights()->last();
        
        unset($input['nickname']);
        
        $input['user_id'] = $user->id;
        $input['team_id'] = $userTeam->id;
        $input['fight_id'] = $currentFight->id;
        
        $result = Stream::create($input);
        
        return response()->json($result);     
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($param, Request  $request)
    {      
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id = false)
    {
        $input = $request->all();
        if(isset($input['gcore_id']))
        {
            $stream = Stream::where('gcore_id', $input['gcore_id'])->first();
        }else{
            if($id)
            {
                $stream = Stream::findOrFail($id);
            }else{
                return response()->json([
                    'id' => ['id of stream is required']
                ], 422);
            }
        }
        
        $validator = Validator::make($request->all(), [
            'gcore_id' => 'required|unique:streams,gcore_id,'.$stream->id,
            'stream record' => 'required',
            'stream_end' => 'required'
        ]);

        if ($validator->fails()) 
        {
            return response()->json(['error' => $validator], 422);
        }else{
            unset($input['nickname']);
            $stream->update($input);
            return response()->json($stream);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}