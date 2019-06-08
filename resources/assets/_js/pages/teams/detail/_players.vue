<template>
    <div>                             
        <div class="row" v-if="team!==null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <card title="Players in team">
                    <div class="table-wrap" v-if="team.users!==null">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered mb-5">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Country</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
							    <tbody>
                                    <tr v-for="player in team.users">
                                        <td>
                                            <router-link  :to="{ name: 'player', params: { id: player.id }}"  class="vm-title">
                                                <img :src="getImageLink(player.avatar)" class="img-responsive team-image" />
                                                <span>{{ player.nickname}}</span>
                                            </router-link>
                                        </td>
                                        <td class="text-center"><span v-if="player.country_id>0 && player.country!==null"><img :src="'/images/flags/'+player.country.flag" :title="player.country.full_name" /></span><span v-else> - </span></td>
                                        <td class="text-center">
                                            <span v-if="player.free_player"><span class="label label-default capitalize-font inline-block">Free</span></span>
                                            <span v-else-if="player.team_id>0 && player.id==team.capt_id"><span class="label label-primary capitalize-font inline-block">Captain</span></span>
                                            <span v-else><span class="label label-success capitalize-font inline-block">In team</span></span>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </card>	
    		</div>
        </div>
        
        <div class="row" v-if="invitations!==null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <card title="Waiting for an answer">
                    <div class="table-wrap" v-if="invitations!=null && invitations.length>0">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered mb-5">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Captain</th>
                                    </tr>
                                </thead>
							    <tbody>
                                    <tr v-for="invitation in invitations">
                                        <td>
                                            <router-link  :to="{ name: 'player', params: { id: invitation.user.id }}"  class="vm-title">
                                                <img :src="getImageLink(invitation.user.avatar)" class="img-responsive team-image" />
                                                <span>{{ invitation.user.nickname}}</span>
                                            </router-link>
                                        </td>
                                        <td class="text-center">{{ invitation.user.email}}</td>
                                        <td class="text-center"><i class="fa fa-check text-danger" v-if="invitation.user.id==team.capt_id"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div v-else>
                        <p class="txt-danger mb-10">No data found.</p>
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
    data() {
        return {
            success: false,
            error: false,
            team: null,
            response: null,
            invitations: null
        }
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })
    },
    mounted() {
        Event.listen('teamEditLoad', event => {
            this.team = event.team;
        });
        
        this.team = this.$parent.team;
        
        var self = this;
        setTimeout(function(){
            self.getInvitations(self.team.id);
        }, 1000);
    },
    methods: 
    {
        getInvitations(team_id)
        {
            var query = this.ArrayToUrl({
                'team_id' : team_id,
                'status' : 0,
                "_with" : 'user,team'
            });
            
            axios.get('/api/team_user?'+query).then((response) => {
                this.$set(this, 'invitations', response.data);
            });               
        }
    },
}
</script>