<template>
    <div  v-if="user!==null && invitations.length>0">
        <h5 class="mb-10">Invites to training (sent)</h5>
                       
        <div class="table-wrap">
            <div class="table-responsive">
                <table class="table table-hover table-bordered mb-5">
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>Datetime</th>
                            <!--<th>Bet</th>-->
                            <th>Training's status</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
				    <tbody>
                        <tr v-for="invitation in invitations">
                            
                            <td>
                                <router-link  :to="{ name: 'team.detail', params: { slug: invitation.team.slug }}" class="vm-title">
                                    <img :src="getImageLink(invitation.team.image, 'avatar_team')" class="img-responsive team-image" /> 
                                    <span>{{ invitation.team.title}}</span>
                                </router-link>
                            </td>
                            <td class="text-center">{{ moment(invitation.fight.start_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do, h:mma') }}</td>
                            <!--<td class="text-center">{{invitation.fight.bet}}</td>-->
                            <td class="text-center">
                                <span v-if="invitation.fight.status==0" class="text-muted">
                                    waiting for invites answers
                                </span>
                                <span v-if="invitation.fight.status==2" class="text-danger">
                                    canceled, {{invitation.fight.cancel_text}}
                                </span>
                                <span v-if="invitation.fight.status==1" class="text-success">
                                    active
                                </span>                     
                            </td>
                            <td class="text-center">
                                <span v-if="invitation.status==0" class="text-muted">
                                    waiting for answers
                                </span>
                                <span v-if="invitation.status==2" class="text-danger">
                                    canceled
                                </span>
                                <span v-if="invitation.status==1" class="text-success">
                                    confirmed
                                </span> 
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)" @click="cancelInvitation(invitation.id)" title="reject" v-if="user.id==invitation.fight.created_id && invitation.status==0"><i class="fa fa-times text-danger"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <pagination :pagination="pagination"></pagination>
    
     </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'

export default {
    data() {
        return {
            invitations: [],
            pagination: []
        }
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })
    },
    mounted() {
        if(this.user.team_id!=null)
        {
            this.getInvitations(this.user.team_id);
        }
    },
    methods: 
    {
        getInvitations(team_id)
        {
            var query = this.ArrayToUrl({
                'page' : 1,
                '_limit' : 12,
                "_sort" : '-id',
                "_with" : 'fight,team,fight.createdByTeam'
            });
            
            axios.get('/api/teams/'+team_id + '/fights/invitations/out?'+query).then((response) => {
                
                var invitations = response.data.data;
                var _self = this;
                
                invitations.forEach(function(invitation)
                {
                    invitation.fight.start_at = _self.dateConvertUTC(invitation.fight.start_at, -1);
                });
                
                this.$set(this, 'invitations', invitations);
                
                delete response.data.data;
                this.pagination = response.data;
            });
        },
        cancelInvitation(id)
        {
            swal({
                title: 'Are you sure you want to cancel the invitation?',
                text: "You also cancel the battle!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
            }).then(function () {
                
                axios.put('/api/fight_team/'+id, {
                    status: 2
                }).then((response) => {
    
                    swal({
                        type: 'success',
                        html: response.data.message
                    });
                    
                }).catch(error => {
                
                    swal({
                        type: 'error',
                        title: 'Error!',
                        html: error.response.data.error
                    });              
                });
                
            });
            
        }
    },
    watch: {
        '$route.query'(newPage, oldPage) {
            this.getVueItems();
        }
    }
}
</script>