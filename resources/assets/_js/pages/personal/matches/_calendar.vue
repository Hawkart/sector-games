<template>
    <div>                             
        <h5 class="mb-10">Calendar</h5>
        <calendar-fights :schedule="events" :team="team"></calendar-fights>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    metaInfo: {
        title: 'Calendar matches',
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })
    },
    data() {
        return {
            events: [],
            team: []
        }
    },
    mounted() {
        if(this.user.team_id!=null)
        {
            this.getCalendarFights(this.user.team_id);
            this.getTeam(this.user.team_id);
        }
    },
    methods: 
    {
        getCalendarFights(team_id)
        {
            axios.get('/api/teams/'+team_id + '/fights/calendar').then((response) => {
                var events = response.data;
                //Convert from UTC to local time
                events = this.datesConvertUTC(events, -1);
                this.$set(this, 'events', events);
            });
        },
        getTeam(team_id)
        {
            axios.get('/api/teams/'+team_id).then((response) => {
                this.$set(this, 'team', response.data);
            });
        },
    }
}
</script>