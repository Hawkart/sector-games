<template>
<div>
    <card title="Teams">
        <div class="table-wrap" v-if="player!==null && team!==null && player.team_id>0">
            <div class="table-responsive">
                <table class="table table-hover table-bordered mb-5">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Total fights</th>
                            <th>Count wins</th>
                            <th>Victory rate</th>
                            <th>Earned</th>
                            <th>Amount paid to investors</th>
                            <th>Status</th>
                        </tr>
                    </thead>
				    <tbody>
                        <tr>
                            <td>
                                <router-link  :to="{ name: 'team.detail', params: { slug: team.slug }}" class="vm-title">
                                    <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image" :alt="team.title" />
                                    <span>{{ team.title}}</span>
                                </router-link>
                            </td>
                            <td class="text-center">{{team.count_fights}}</td>
                            <td class="text-center">{{team.count_wins}}</td>

                            <td class="text-center" v-if="team.count_fights>0">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</td>
                            <td class="text-center" v-else>0%</td>

                            <td class="text-center">{{team.total_sum}}</td>
                            <td class="text-center">{{team.payed_dividents}}</td>

                            <td class="text-center">
                                <span v-if="team.status==0"><span class="text-warning">pending</span></span>
                                <span v-if="team.status==1"><span class="text-success">accepted</span></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else>
            <p class="txt-danger">Does not belong to any team yet.</p>
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
        Event.listen('playerDetailLoad', event => {
            this.player = event.team;
        });
    },
    data() {
        return {
            success: false,
            error: false,
            player: null,
            response: null,
            team: null
        }
    },
    mounted() {
        
        if(this.player===null)
        {
            Event.listen('playerDetailLoad', event => {
                this.player = event.player;
            });
            
            this.player = this.$parent.player;
        }
    
        this.getTeams();
    },
    methods: {       
        getTeams: function(){
            axios.get('/api/users/'+this.$route.params.id+'/team').then((response) => {
                this.$set(this, 'team', response.data);
            });
        },
    },
}
</script>