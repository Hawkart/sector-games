<template>
<div> 
    <card v-if="tournament!==null">
        <div class="row">
            <div class="col-md-4 col-xs-12">
				<dl>
                  <dt class="mb-5">Start time:</dt>
				  <dd class="mb-15 txt-dark font-13 weight-500">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do, h:mma')}}</dd> 
				  <dt class="mb-5">Check-in until:</dt>
				  <dd class="mb-10 txt-dark font-13 weight-500">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").subtract(1, 'hours').format('MMMM Do, h:mma')}}</dd>
				</dl>
            </div>
            <div class="col-md-4 col-xs-12">
                <dl>
                    <dt class="mb-5">Prize Pool:</dt>
                    <dd class="mb-15 txt-dark font-13 weight-500">{{tournament.prize_pool}} SPA</dd>
                    <dt class="mb-5">Entry:</dt>
                    <dd class="mb-10 txt-dark font-13 weight-500"><span v-if="tournament.buy_in>0">{{parseInt(tournament.buy_in)}} SPA</span><span v-else>Free Registration</span></dd>
                </dl>
            </div>
            <div class="col-md-4 col-xs-12">
				<dl>
                  <dt class="mb-5">Minimum teams:</dt>
				  <dd class="mb-15 txt-dark font-13 weight-500">{{tournament.min_teams}}</dd>
				  <dt class="mb-5">Registered teams:</dt>
				  <dd class="mb-10 txt-dark font-13 weight-500">{{tournament.teams.length}} / {{ tournament.count_teams}}</dd>
				</dl>
            </div>
        </div>
        
        <div class="row mt-15">
            <div class="fl-l ml-15 mr-20 txt-dark">
                Prizes:
            </div>
            <div class="fl-l mr-20" v-for="(prize, key) in tournament.prizes">
                {{key+1}} Place - <span class="txt-dark">{{prize}} SPA</span>
            </div>
        </div>
    </card>
    

    <card title="Registered teams">
        <div class="row" v-if="tournament!==null && tournament.teams.length>0">
            <div class="col-md-3 col-xs-12" v-for="team in tournament.teams">
			   <router-link  :to="{ name: 'team.detail', params: { slug: team.slug }}" class="vm-title bordered pa-15 mb-20 w-100p">
                    <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image w-45" :alt="team.title" />
                    <span>{{ team.title}}</span>
                </router-link>	
            </div>
        </div>
        <div v-else>
            <p class="txt-danger">No registered teams yet.</p>
        </div>
    </card>
   
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
    },
    methods: {       
        
    },
}
</script>