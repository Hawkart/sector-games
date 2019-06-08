<template>
<div>
    <div class="row">
    	<div class="col-lg-12 col-md-12 col-xs-12 mb-10">
            <div class="table-wrap">
    			<div class="table-responsive" data-toggle="table">                                
                    <table class="table table-bordered mb-0 schedule-list">
    					<thead>
                            <tr>
                                <th>D/H</th>
                                <th v-for="i in engHours" v-html="i" class="text-center"></th>
                            </tr>
    					</thead>
    					<tbody>
                            <tr v-for="date in fdates">
                                <th draggable="false" class="noselect">{{date}}</th>
                                <td v-for="(i, index) in hours" :data-date="date+' '+i+':00:00'" class="text-center" draggable="false" @click = "selectDate(date+' '+i+':00:00', schedule[date+' '+i+':00:00'])">
                                    <i v-if="schedule[date+' '+i+':00:00']!=null" class="fa fa-check text-success" draggable="false"> {{schedule[date+' '+i+':00:00'].length}}</i>
                                </td>
                            </tr>
    					</tbody>
    				</table>
                    
    			</div>
    		</div>      
         </div>
    </div>
    
    <potential-battles-modal :date="date" :potentialBattles="potentialBattles" :userTeam="team"></potential-battles-modal>
</div>
</template>

<script>
    export default {
        name: 'calendar-fights',
        props: ['schedule', 'team'],
        computed:{
            fdates: function()
            {
                var dates = [];
                for (var key in this.schedule) 
                {
                    dates.push(key.substr(0,10));
                }
                
                dates = Array.from(new Set(dates));
                
                return dates;
            },
            hours: function () 
            {
                var ahours = Array.apply(null, {length: 24}).map(Number.call, Number);
                
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
            dates: function()
            {
                var dates = [];
                for (var key in this.schedule) 
                {
                    var date = key.substr(0,10);
                    dates.push(key.substr(0,10));
                }
                
                dates = Array.from(new Set(dates));
                
                return dates;
            }
        },
        data() {
            return {
                date: null,
                potentialBattles: [],
            }
        },
        methods:{
            selectDate: function(date, rows)
            {
                this.date = date;
                this.potentialBattles = rows;
                this.$modal.show('potential-battles');
            }
        }
    }
</script>

<style>    
    .schedule-list thead tr th, .schedule-list tbody tr td, .schedule-list tbody tr th
    {
        padding: 10px;
    }
    
    .schedule-list tbody tr td i{
        cursor: pointer;
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