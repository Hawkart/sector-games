<template>
<div> 
     <div class="row" v-if="tournament!==null">
    	<div class="col-lg-12 col-md-12 col-xs-12">
            <card>
                <span v-html="tournament.rules"></span>
            </card>
        </div>
    </div>
</div>    
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'

export default {
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })     
    },
    ready() {
        Event.listen('tournamentEditLoad', event => {
            this.tournament = event.tournament;
        });
    },
    data() {
        return {
            success: false,
            error: false,
            tournament: null,
            response: null
        }
    },
    mounted() {
        Event.listen('tournamentEditLoad', event => {
            this.tournament = event.tournament;
        });
        
        this.tournament = this.$parent.tournament;
    }
}
</script>