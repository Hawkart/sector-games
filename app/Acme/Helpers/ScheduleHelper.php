<?php

namespace App\Acme\Helpers;

use Illuminate\Support\Str;
use Cache;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ScheduleHelper{
    
    
    /**
     * [ ['1,03'], ['2, 12'], ..] -> [ ['d'=>1, 'h'=>3], ['d'=>2, 'h'=>12], ..]
     */
    public static function transformDateStringsToArrays($arSchedules, $sort = true)
    {
        $arDates = [];
		if(count($arSchedules)>0)
		{
			foreach($arSchedules as $value)
			{
				$arr = explode(",", $value);
				$arDates[] = [
					'd' => intval($arr[0]),
					'h' => intval($arr[1])
				];
			}
		}
        
        if($sort)
            usort($arDates, 'sortPseudoArrayDates');
        
        return $arDates;
    }
    
    /**
     * [ ['d'=>1, 'h'=>3], ['d'=>2, 'h'=>12], ..] -> [ ['1,03'], ['2, 12'], ..]
     */
    public static function transformDateArraysToStrings($blockSchedules, $sort = true)
    {
        $result = [];
        
        if($sort)
            usort($blockSchedules, 'sortPseudoArrayDates');
        
        foreach($blockSchedules as $blockSchedule)
        {
            if(intval($blockSchedule['h'])<10)
                $blockSchedule['h'] = '0'.$blockSchedule['h'];
            
            $result[] = $blockSchedule['d'].",".$blockSchedule['h'];      
        }
        
        return $result;
    }
    
    public static function getCalendarFights($teams, $currentTeam, $teamFights = [])
    {
        $start = Carbon::today('UTC');
        $afterTime = Carbon::now('UTC')->subMinutes(15)->toDateTimeString();
        
        $daysOfWeekDates = []; 
        for($i = 1; $i<=7; $i++)
        {
            $dayOfWeek = $start->dayOfWeek;
            $daysOfWeekDates[$dayOfWeek] = $start->toDateString();
            $start = $start->addDays(1);
        }
        
        $exclude = [];
        if(count($teamFights)>0)
        {
            foreach($teamFights as $teamFight)
            {
                $date = $teamFight->fight()->first()->start_at->format('Y-m-d H:i:s');
                $exclude[$date][] = $teamFight->team()->first()->id;
            }
        }
        
        $data = [];
        $dates = [];
        
        foreach($teams as $team)
        {
            $schedule = $team->schedule!=null ? $team->schedule : [];
            $scheduleTeam = $currentTeam->schedule!=null ? $currentTeam->schedule : [];
            
            $arCrossingSchedules = array_intersect($scheduleTeam, $schedule);
            if(count($arCrossingSchedules)>0)
            {
                foreach($arCrossingSchedules as $value)
                {
                    $arr = explode(",", $value);
                    $dayOfWeek = intval($arr[0]);
                    $hour = $arr[1];
                    $date = $daysOfWeekDates[$dayOfWeek]." ".$hour.":00:00";
                    
                    if(strtotime($afterTime)>strtotime($date))
                        continue;
                    
                    //exclude current battles with teams
                    if(isset($exclude[$date]) && in_array($team->id, $exclude[$date]))
                        continue;
                         
                    $data[$date][] = $team;
                    $dates[] = $date;
                }
            }
        }
        
        usort($dates, "date_sort");
        
        $dataSorted = [];
        foreach($dates as $date)
        {
            $dataSorted[$date] = &$data[$date];
        }
        
        return $dataSorted;
    }
    
    public static function modifyForTwoWeeks($schedule)
    {
        usort($schedule, 'sortSchedule');
        
        //$startWeek = Carbon::now()->startOfWeek()->timestamp;
        //$endWeek = Carbon::now()->endOfWeek()->timestamp;
        
        //$startWeek = Carbon::parse('this sunday');
        //$endWeek = Carbon::parse('this sunday')->addDays(7);
        
        $startWeek = Carbon::now()->startOfWeek()->addDays(-1);
        $endWeek = Carbon::now()->startOfWeek()->addDays(6);
        
        if(Carbon::today()->dayOfWeek==0)
        {
            $startWeek = Carbon::today();
            $endWeek = Carbon::today()->addDays(7);
        }
        
        $scheduleOnTwoWeeks = [];
        foreach($schedule as $event)
        {
            if(strtotime($event['start'])>=strtotime($startWeek) && strtotime($event['end'])<=strtotime($endWeek))
            {
                $scheduleOnTwoWeeks[] = $event;
                $scheduleOnTwoWeeks[] = [
                    'start' => str_replace(" ", "T", Carbon::parse($event['start'])->addWeek()),
                    'end' => str_replace(" ", "T", Carbon::parse($event['end'])->addWeek())
                ];
            }
        }
        
        usort($scheduleOnTwoWeeks, 'sortSchedule');

        return $scheduleOnTwoWeeks;
    }
    
    /**
     * Get crossing schedules with sorting by time
     */
    public static function getCrossingSchedule($collection, $obj = false)
    {
        $arCrossingSchedules = false;
        
        foreach($collection as $object)
        {
            if(!$arCrossingSchedules)
            {
                $arCrossingSchedules = $object->schedule;
            }else{
                if($object->schedule)
                    $arCrossingSchedules = array_intersect($arCrossingSchedules, $object->schedule);
                else
                    return [];
            }
        }
        
        if($obj)
        {
            $arCrossingSchedules = array_intersect($arCrossingSchedules, $obj->schedule);
        }
        
        return $arCrossingSchedules;
    }
    
    /**
     * Get $blockSize crossing blocks of schedules during 7 days
     */
    public static function getCrossingBlocks($arSchedules, $blockSize = 3)
    {
        $arDates = self::transformDateStringsToArrays($arSchedules);
        
        $startHours = range(0, $blockSize-1);
        foreach($arDates as $event)
        {
            if($event['d']==0 && in_array($event['h'], $startHours))
            {
                $arDates[] = $event;
            }
        }

        $countInBlock = 0;
        $arBlock = [];
        $blockSchedules = [];
        $lastSchedule = false;
        
        foreach($arDates as $arSchedule)
        {            
            if(!$lastSchedule)
            {
                $lastSchedule = $arSchedule;
                $arBlock[] = $lastSchedule; 
                $countInBlock++;
            }else{
                
                if( (($arSchedule['d']-$lastSchedule['d']==1 || $arSchedule['d']==0 && $lastSchedule['d']==6) && $lastSchedule['h']==23 && $arSchedule['h']==0)
                 || ($arSchedule['d']==$lastSchedule['d'] && ($arSchedule['h']-$lastSchedule['h']==1)) )
                {
                    
                    $lastSchedule = $arSchedule;
                    $arBlock[] = $lastSchedule;
                    $countInBlock++;
                }else{
                    
                    $countCrosses = $countInBlock-$blockSize+1;
                    if($countCrosses>0)
                    {
                        $hourCrossingBlocks = array_slice($arBlock, 0, $countCrosses);
                        $blockSchedules = array_merge($blockSchedules, $hourCrossingBlocks);
                    }
                    
                    $countInBlock = 1;
                    $lastSchedule = $arSchedule;
                    $arBlock = [];
                    $arBlock[] = $lastSchedule;
                }
            }
        }
        
        $countCrosses = $countInBlock-$blockSize+1;
        if($countCrosses>0)
        {
            $hourCrossingBlocks = array_slice($arBlock, 0, $countCrosses);
            $blockSchedules = array_merge($blockSchedules, $hourCrossingBlocks);
        }
        
        $result = self::transformDateArraysToStrings($blockSchedules);
        $result = array_unique($result);
        
        $result = array_merge($result, []);
        //array_values($result);
        
        //print_r($result); die();
        
        return $result;
    }
	
	public static function getFullFilled()
	{
		$data = [];
		for($d=1; $d<=7; $d++)
		{
			for($h=0; $h<=23; $h++)
			{
				$data[] = [
					'd' => $d,
					'h' => $h
				];
			}
		}
		
		return self::transformDateArraysToStrings($data);
	}
}