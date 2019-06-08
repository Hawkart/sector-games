<template>
<div class="row">
	<div class="col-lg-12 col-md-12 col-xs-12 mb-10">
        <div class="table-wrap">
			<div class="table-responsive" data-toggle="table">
            
                <div class="alert alert-warning alert-dismissable" v-if="blockHours.length==0">
					<i class="zmdi zmdi-info-outline pr-15 pull-left"></i>
                    <p class="pull-left" v-if="editable!='false'">Please fill {{blockSize}}-hours blocks!</p>
                    <p class="pull-left" v-else>The team doesn't have crossed blocks! The team will not be able to participate in the battles!</p>
					<div class="clearfix"></div>
				</div>
                <div class="alert alert-success alert-dismissable" v-else>
					<i class="zmdi zmdi-check pr-15 pull-left"></i>
                    <p class="pull-left" v-if="editable!='false'">Great! You have {{blockHours.length}} '{{blockSize}}-hours' blocks!</p>
                    <p class="pull-left" v-else>Player has {{blockHours.length}} blocks!</p>
					<div class="clearfix"></div>
				</div>
                
                <table class="table table-bordered mb-0 schedule-list" v-bind:class="{ 'table-event-editable': editable!='false'}">
					<thead>
                        <tr>
                            <th>D/H</th>
                            <th v-for="i in engHours" v-html="i" class="text-center"></th>
                        </tr>
					</thead>
					<tbody>
                        <tr v-for="(day, dayNumber) in daysOfWeek">
                            <th draggable="false" class="noselect">{{day}}</th>
                            <td v-for="i in hours" :data-date="dayNumber+','+i+':00:00'" class="text-center" :title="day+' '+i+':00:00'" @click="selectSchedule(dayNumber+','+i)" @mousedown="mouseDown(dayNumber+','+i)" @mouseover="mouseOver(dayNumber+','+i)" @mouseup="mouseUp(dayNumber+','+i)"  v-bind:class="{ 'active-event': checkIn(blockHours, dayNumber+','+i), 'lighted-event': checkIn(lighted, dayNumber+','+i)}" draggable="false">
                                <i v-if="checkIn(schedule, dayNumber+','+i)" class="fa fa-check text-success" draggable="false"></i>
                            </td>
                        </tr>
					</tbody>
				</table>
                
			</div>
		</div>      
     </div>
</div>
</template>

<script>

    function compare(a,b) 
    {
        if (a.d < b.d)
        {
            return -1
        }else if (a.d > b.d){
            return 1;
        }else{
            if(a.h<b.h)
            {
                return -1
            }else{
                return 1;
            }
        }
        
        return 0;
    }

    export default {
        name: 'calendar-shedule',
        props: ['schedule', 'blockSize', 'editable'],
        computed:{
            hours: function () 
            {
                var ahours = Array.apply(null, {length: 24}).map(Number.call, Number);//range 0-23
                
                ahours = ahours.map(function(hour) 
                {
                    if(parseInt(hour)<10)
                        hour = '0'+hour;
                    
                    return hour;
                });
                
                return ahours;
            },
            engHours: function()
            {
                var hours = this.hours;
                
                hours = hours.map(function(hour) 
                {
                    if(parseInt(hour)<12)
                    {
                        if(hour==0)
                        {
                            hour = 12;
                        }
                        hour = parseInt(hour)+"<br />am";
                    }else{
                        if(parseInt(hour)>12)
                        {
                            hour = parseInt(hour)-12;
                        }
                        
                        hour = hour+"<br />pm";
                    }
                    
                    return hour;
                });
                
                return hours;
            },
            blockHours: function()
            {
                var blockSize = this.blockSize;
                if(blockSize==1)
                    return this.schedule;
                
                var bHours = [];
                this.schedule.forEach(function(event)
                {
                    var arr = event.split(',');
                    bHours.push({
                        'd' : parseInt(arr[0]),
                        'h' : parseInt(arr[1])
                    });
                });
                
                bHours.sort(compare);
                
                var last_event = false;
                var blockSchedules = [];
                var blocks = [];
                var i = 0;
                
                //Add 3 first hours to the end to check crossing going to next week
                var startHours = Array.apply(null, {length: blockSize}).map(Number.call, Number);   //need for next week start
                bHours.forEach(function(event)
                {
                    if(event.d==0 && startHours.indexOf(event.h)>-1)
                    {
                        bHours.push(event);
                    }
                });
                
                //console.log(bHours);
                
                bHours.forEach(function(event)
                {
                    if(!last_event)
                    {
                        last_event = event;
                        blocks.push(event);
                        i++;
                    }else{
                        
                        if( ((event.d-last_event.d==1 || event.d==0 && last_event.d==6) && last_event.h==23 && event.h==0) || (event.d==last_event.d && (event.h-last_event.h==1)) )
                        {
                            last_event = event;
                            blocks.push(event);
                            i++;   
                        }else{
                            var countCrosses = i - blockSize+1;

                            if(countCrosses>0)
                            {
                                var crossingBlocks = blocks.slice(0, countCrosses);
 
                                crossingBlocks.forEach(function(event2){
                                    blockSchedules.push(event2);
                                });
                            }

                            last_event = event;
                            blocks = [];
                            blocks.push(event);
                            i = 1;                        
                        }
                        
                    }                    
                });
                
                var countCrosses = i - blockSize+1;            
                if(countCrosses>0)
                {
                    var crossingBlocks = blocks.slice(0, countCrosses);
                    crossingBlocks.forEach(function(event2){
                        blockSchedules.push(event2);
                    });
                }
                
                blockSchedules = blockSchedules.map(function(event) 
                {
                    var hour = event.h;
                    if(parseInt(hour)<10)
                        hour = '0'+hour;
                    
                    return event.d+","+hour;
                });
                
                blockSchedules = Array.from(new Set(blockSchedules));//array_unique
                                
                return blockSchedules;
            }
        },
        data() {
            return {
                daysOfWeek: {
                    0: 'Sun',
                    1: 'Mon',
                    2: 'Tue',
                    3: 'Wed',
                    4: 'Thu',
                    5: 'Fri',
                    6: 'Sat'
                },
                isMouseDown: false,
                startMouseDownValue:false,
                selected:[],
                lighted:[]
            }
        },
        methods:{
            selectSchedule(value)
            {
                return false;
                
                if(this.editable=='false')
                    return false;
                
                var ind = this.schedule.indexOf(value);
                
                if(ind>-1)
                {
                    this.schedule.splice(ind, 1);
                }else{
                    this.schedule.push(value);
                }
            },
            checkIn: function (values, value) 
            {
                return values.indexOf(value) > -1 ? true : false;
            },
            mouseDown(value)
            {
                if(this.editable=='false')
                    return false;
                    
                this.startMouseDownValue = value;
                this.isMouseDown = true;
                this.lightTo(value);
            },
            mouseOver(value)
            {
                if(this.editable=='false')
                    return false;
                    
                if (!this.isMouseDown) return;
                this.lightTo(value);
            },
            mouseUp(value)
            {
                if(this.editable=='false')
                    return false;
                    
                this.isMouseDown = false;
                this.selectTo(value);
            },
            lightTo(value)
            {
                var startEvent = this.startMouseDownValue.split(',');
                var lastEvent = value.split(',');
                var selected = [];

                startEvent = {
                    'd' : parseInt(startEvent[0]),
                    'h' : parseInt(startEvent[1])
                };
                
                lastEvent = {
                    'd' : parseInt(lastEvent[0]),
                    'h' : parseInt(lastEvent[1])
                };
                
                if(startEvent['d']<lastEvent['d'] || startEvent['d']==lastEvent['d'] && startEvent['h']<lastEvent['h'])
                {
                    var started = false;
                    var finished = false;
                    for(var days = startEvent['d']; days<=lastEvent['d']; days++)
                    {    
                        for(var h=0; h<=23; h++)
                        {
                            if(startEvent['d']==days && startEvent['h']==h && !started)
                            {
                                started = true;
                                selected.push(startEvent);
                            }
                            
                            if(started)
                            {
                                selected.push({
                                    'd' : days,
                                    'h' : h
                                });
                                
                                if(lastEvent['d']==days && lastEvent['h']==h)
                                {
                                    finished = true;
                                    break;
                                }
                            }
                        }
                    }
                    
                }else{
                    var started = false;
                    var finished = false;
                    for(var days = lastEvent['d']; days<=startEvent['d']; days++)
                    {    
                        for(var h=0; h<=23; h++)
                        {
                            if(lastEvent['d']==days && lastEvent['h']==h && !started)
                            {
                                started = true;
                                selected.push(lastEvent);
                            }
                            
                            if(started)
                            {
                                selected.push({
                                    'd' : days,
                                    'h' : h
                                });
                                
                                if(startEvent['d']==days && startEvent['h']==h)
                                {
                                    finished = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                
                selected = selected.map(function(event) 
                {
                    var hour = event.h;
                    if(parseInt(hour)<10)
                        hour = '0'+hour;
                    
                    return event.d+","+hour;
                });
                
                this.lighted = selected;
            },
            selectTo(value)
            {
                var startEvent = this.startMouseDownValue.split(',');
                var lastEvent = value.split(',');
                var selected = [];
                
                startEvent = {
                    'd' : parseInt(startEvent[0]),
                    'h' : parseInt(startEvent[1])
                };
                
                lastEvent = {
                    'd' : parseInt(lastEvent[0]),
                    'h' : parseInt(lastEvent[1])
                };
                
                if(startEvent['d']<lastEvent['d'] || startEvent['d']==lastEvent['d'] && startEvent['h']<lastEvent['h'])
                {
                    var started = false;
                    var finished = false;
                    for(var days = startEvent['d']; days<=lastEvent['d']; days++)
                    {    
                        for(var h=0; h<=23; h++)
                        {
                            if(startEvent['d']==days && startEvent['h']==h && !started)
                            {
                                started = true;
                                selected.push(startEvent);
                            }
                            
                            if(started)
                            {
                                selected.push({
                                    'd' : days,
                                    'h' : h
                                });
                                
                                if(lastEvent['d']==days && lastEvent['h']==h)
                                {
                                    finished = true;
                                    break;
                                }
                            }
                        }
                    }
                    
                }else{
                    var started = false;
                    var finished = false;
                    for(var days = lastEvent['d']; days<=startEvent['d']; days++)
                    {    
                        for(var h=0; h<=23; h++)
                        {
                            if(lastEvent['d']==days && lastEvent['h']==h && !started)
                            {
                                started = true;
                                selected.push(lastEvent);
                            }
                            
                            if(started)
                            {
                                selected.push({
                                    'd' : days,
                                    'h' : h
                                });
                                
                                if(startEvent['d']==days && startEvent['h']==h)
                                {
                                    finished = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                
                selected = selected.map(function(event) 
                {
                    var hour = event.h;
                    if(parseInt(hour)<10)
                        hour = '0'+hour;
                    
                    return event.d+","+hour;
                });
                
                selected = Array.from(new Set(selected));
                  
                
                var schedule = this.schedule;
                selected.forEach(function(value)
                {
                    var ind = schedule.indexOf(value);
                
                    if(ind>-1)
                    {
                        schedule.splice(ind, 1);
                    }else{
                        schedule.push(value);
                    }
                })
                  
                this.schedule = schedule;
                this.lighted = [];
            }
        }
    }
</script>

<style>
    .schedule-list.table-event-editable tbody tr td:hover{
        cursor: pointer;
        border: 2px solid #469408 !important;
    }
    
    .schedule-list thead tr th, .schedule-list tbody tr td, .schedule-list tbody tr th
    {
        padding: 10px;
    }
    
    .schedule-list thead tr th
    {
        border-bottom: 1px solid #fff !important;
        text-transform: none;
    }
    .schedule-list tbody tr th, .schedule-list thead tr th:first-child{
        color: #fff;
        border-right: 1px solid #fff !important;
    }
    .schedule-list tbody tr td.active-event{
        background-color: #3a87ad;
    }
    .schedule-list tbody tr td.active-event i{
        color: #fff !important;
    }
    .schedule-list tbody tr td.lighted-event{
        background-color: rgba(230, 154, 42, 0.5) !important;
    }
    .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none; /* Konqueror HTML */
           -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome and Opera */
    }
</style>