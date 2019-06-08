<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FightTeam;
use App\Acme\Helpers\ApiHelper;
use Carbon\Carbon;

class FightTeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $fight_teams = new FightTeam();      
        return ApiHelper::parseMultiple($fight_teams, [''], $request->all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $FightTeam = FightTeam::findOrFail($id);
        $team = $FightTeam->team()->first();
        $fight = $FightTeam->fight()->first();
        $user = $request->user();
        
        if($user->id==$fight['created_id'])
        {
            $diff = strtotime(Carbon::now('UTC')->toDateTimeString()) - strtotime($fight->created_at);
            
            if($diff<30*60)
            {
                return response()->json([
                    "error" => "Only after 30 minutes you can make some changes!"
                ], 422);
            }
        }
        else if($user->id!=$team['capt_id'])
        {
            return response()->json([
                "error" => "Only captain can change status of invite to the match!"
            ], 422);
        }
        
        $message = "Status has not changed";
        
        if($FightTeam->status!=$request->get('status'))
        {
            $FightTeam->update([
                'status' => (int) $request->get('status')
            ]);
            
            if($request->get('status')==1)
            {
                //email to captain another team
                $fight->update([
                    "status" => 1
                ]);
                $message = "Invite to the battle confirmed successfully!";
            }
            if($request->get('status')==2)
            {
                //decline the battle
                $fight->update([
                    "status" => 2,
                    "cancel_text" => "Invite to the match was canceled.",
                    "cancel_user_id" => $user->id
                ]);
                
                $message = "Invite to the match canceled successfully!";
            }
        }
        
        return response()->json([
            "message" => $message
        ], 200); 
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
