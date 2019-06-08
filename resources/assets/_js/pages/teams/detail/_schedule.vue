<template>
    <div>
        <div class="row" v-if="team!==null && team.schedule!=null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <card title="Calendar">
                    <calendar-shedule :schedule="events" blockSize="1" editable="false"></calendar-shedule>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    metaInfo: {
        title: 'Schedule'
    },
    data() {
        return {
            success: false,
            error: false,
            response: null,
            team: null,
            events:[]
        }
    },
    mounted() 
    {
        Event.listen('teamEditLoad', event => {
            this.team = event.team;
            this.events = this.eventsConvertUTC(this.team.schedule, -1);
        });
        this.team = this.$parent.team;
  
        if(this.team!=null)
            this.events = this.eventsConvertUTC(this.team.schedule, -1);   
    }
}
</script>