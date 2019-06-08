<template>
    <div>
        <div class="row" v-if="user!==null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <card title="Calendar">
                    <calendar-shedule :schedule="events" :blockSize="blockSize" editable="true"></calendar-shedule>

                    <div class="form-actions mt-10">
                        <button type="submit" class="btn btn-primary mr-10" @click="save">
                            <span>Save</span>
                        </button>

                        <button type="submit" class="btn btn-primary mr-10" @click="clear">
                            <span>Clear all</span>
                        </button>
                    </div>

                    <div class="alert alert-success alert-dismissable mt-20" v-if="success">
                        <p>Calendar data is updated.</p>
                    </div>
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
        title: 'Calendar'
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })
    },
    data() {
        return {
            success: false,
            error: false,
            response: null,
            blockSize: 2,
            game:null,
            events:[]
        }
    },
    mounted() 
    {
        //Convert from UTC
        this.events = this.user.schedule!==null ? this.eventsConvertUTC(this.user.schedule, -1) : [];

        if(this.user.game_id!=null)
        {
            this.getGame(this.user.game_id);
        }       
    },
    methods: {
        save(event) {
            event.preventDefault()
            this.user.schedule = this.events;
            
            //Convert Back to UTC
            this.user.schedule = this.eventsConvertUTC(this.user.schedule, 1);
            
            axios.post('/api/users', this.user).then(response => {
                this.error = false;
                this.success = true;
                
            }).catch(error => {
                this.response = error.response.data
                this.error = true
                this.success = false;                
            });
        },
        clear(event){
            event.preventDefault();
            this.events = [];
        },
        getGame: function(id)
        {
            axios.get('/api/games/' + id).then((response) => {
                var game = response.data;
                this.blockSize = game.cross_block;
            });
        }
    },
}
</script>