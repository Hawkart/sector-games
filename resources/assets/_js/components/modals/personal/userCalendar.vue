<template>
    <modal name="user-calendar" :adaptive="true" width="60%" :minWidth="minWidth" height="auto" :scrollable="true" :pivotY="pivotY" @before-close="beforeClose">
        <div class="row heading-bg">
        	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <button type="button" class="close pull-right txt-dark" aria-label="Close" @click="close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h5 class="txt-dark">Ready to play at.</h5>
        	</div>
        </div>
        <div class="row" v-if="user!==null">
        	<div class="col-lg-12 col-md-12 col-xs-12">
                <card>
                    <div class="form-actions mt-10">
                        <button type="submit" class="btn btn-primary mr-10" @click="save">
                            <span>Save</span>
                        </button>
                    </div>
                </card>
            </div>
        </div>
    </modal>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    name: 'user-calendar-modal',
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })
    },
    data() {
        return {
            pivotY: 0.1,
            minWidth: 600,
            title: null,
            success: false,
            error: false,
            response: null,
            events:[],
            calConfig:{
                slotDuration:'00:60:00',
                slotLabelInterval:'00:60:00',
                slotEventOverlap:false,
                allDaySlot: false,
                height: 400
            },
            calHeader:{
                left:   '',
                center: 'title',
                right:  'today prev,next'
            }
        }
    },
    mounted() 
    {
        if(this.events.length==0)
        {
            this.events = this.user.schedule!==null ? this.user.schedule : [];
        }
        
        console.log(this.events);       
    },
    methods: {
        save(event) {
            event.preventDefault()
            this.user.schedule = this.events;
            
            axios.post('/api/users', {
                'schedule' : this.user.schedule
            }).then(response => {
                this.error = false;
                this.success = true;
                
            }).catch(error => {
                this.response = error.response.data
                this.error = true
                this.success = false;                
            });
        },
        eventSelected(event, jsEvent, view)
        {
            var event = event;
            var events = this.events;
            this.events = events.filter(function(el) { 
                return el.start != event.start.format() && el.end!=event.end.format(); 
            });
        },
        eventCreate(event)
        {
            if(this.events==null)
            {
                this.events  = [];
            }
            
            this.events.push({
                start: event.start.format(),
                end: event.end.format()
            });
        },
        beforeClose (event) {
            this.error = false;
            this.success = false;
            this.response = null;
            //this.events = [];
            //this.$refs.calendar.$emit('reload-events');
            
            console.log(this.events);
        },
        close()
        {
            this.events = [];
            console.log(this.events);
            this.$modal.hide('user-calendar');   
        }
    },
}
</script>

<style>
    @import '~fullcalendar/dist/fullcalendar.css';
    .fc-time-grid .fc-slats td{
        height: 40px;
    }
    .fc th.fc-day-header{
        height: 40px;
        vertical-align: middle;
    }
    .fc-unthemed td.fc-today {
        background: transparent;
        border-left: 2px solid #469408;
        border-right: 2px solid #469408; 
    }
    .fc button{
        padding: 5px 10px;
    }
    .fc-event .fc-bg{
        background: #177ec1;
        opacity: 1;
    }
    .fc-time-grid-event .fc-time{
        text-align: center;
        vertical-align: middle;
        line-height: 40px;
        cursor: pointer;
    }
</style>