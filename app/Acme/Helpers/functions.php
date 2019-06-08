<?php

function date_sort($a, $b) {
    return strtotime($a) - strtotime($b);
}

function getCrossingSchedule($array1, $array2)
{
    $result = [];
    foreach($array1 as $v1)
    {
        foreach($array2 as $v2)
        {
            if($v1['start']==$v2['start'])
            {
                $result[] = $v1; 
            }
        }
    }
    
    return $result;
}

function sortSchedule($a, $b)
{
    return strtotime($a['start'])-strtotime($b['start']);
}

function sortPseudoArrayDates($a, $b)
{
    if ($a['d'] < $b['d'])
    {
        return -1;
    }else if ($a['d'] > $b['d']){
        return 1;
    }else{
        if($a['h'] < $b['h'])
        {
            return -1;
        }else{
            return 1;
        }
    }
        
    return 0;
}

function diffSchedules($v1, $v2)
{
    if ($v1['start']==$v2['start'] && $v1['end']==$v2['end'])
    {
        return 1;
    }

    return -1;
}

function in_arrayi($needle, $haystack) {
    return in_array(strtolower($needle), array_map('strtolower', $haystack));
}

function hostReferAllowed($request)
{
	$refer = $request->server('HTTP_REFERER');
	$host = parse_url($refer, PHP_URL_SCHEME)."://".parse_url($refer,PHP_URL_HOST);
	
	if(in_array($host, config('cors.allowedOrigins')) || config('cors.allowedOrigins')==['*'])
	{
		return true;
	}
	
	return false;
}