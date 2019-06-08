<template>
    <div>
    
        <div class="row" v-if="invitations!==undefined && invitations.length">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    			<card title="Invitations">
                    <div class="alert alert-success alert-dismissable mt-20" v-if="inviteAnswerSuccess">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        <p>Your response to the invitation has been saved.</p>
                    </div>
                    <div class="table-wrap">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered mb-5">
                                <thead>
                                    <tr>
                                        <th>Logo</th>
                                        <th>Name</th>
                                        <th>Need players</th>
                                        <th>Balance, <i aria-hidden="true" class="fa fa-btc"></i></th>
                                        <th class="text-nowrap">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="invitation in invitations">
                                        <td>
                                            <router-link  :to="{ name: 'team.detail', params: { slug: invitation.team.slug }}">
                                                <img :src="getImageLink(invitation.team.image)" class="img-responsive team-image" :alt="invitation.team.title" />
                                            </router-link>
                                        </td>
                                        <td>
                                            <router-link  :to="{ name: 'team.detail', params: { slug: team.slug }}">
                                                {{ invitation.team.title}}
                                            </router-link>
                                        </td>
                                        <td class="text-center">{{ invitation.team.quantity}}</td>
                                        <td class="text-center">{{ invitation.team.balance}}</td>
                                        <td class="text-nowrap text-center">
                                            <select @change="answerToInvite(invitation.team.id, $event)" class='form-control' data-style="form-control btn-default btn-outline">
                                                <option v-for="status in statuses" v-bind:value="status.id">
                                                    {{ status.title }}
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </card>
    		</div>
        </div>
    
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <card title="Current team">
                    <div class="table-wrap" v-if="team!==null && user.team_id>0">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered mb-5">
                                <thead>
                                    <tr>
                                        <th>Logo</th>
                                        <th>Name</th>
                                        <th>Need players</th>
                                        <th>Balance, <i aria-hidden="true" class="fa fa-btc"></i></th>
                                        <th class="text-nowrap">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <router-link  :to="{ name: 'team.detail', params: { slug: team.slug }}">
                                                <img :src="getImageLink(team.image)" class="img-responsive team-image" :alt="team.title" />
                                            </router-link>
                                        </td>
                                        <td>
                                            <router-link  :to="{ name: 'team.detail', params: { slug: team.slug }}">
                                                {{ team.title}}
                                            </router-link>
                                        </td>
                                        <td class="text-center">{{ team.quantity}}</td>
                                        <td class="text-center">{{ team.balance}}</td>
                                        <td class="text-nowrap text-center">
                                            <router-link  :to="{ name: 'teams.edit', params: { id: team.id }}" class="mr-25" v-if="team.capt_id==user.id">
                                                <i class="fa fa-pencil text-inverse mr-10"></i>
                                            </router-link>

                                            <a href="#" @click="leaveTeam(team.id, $event)" title="Leave the team">
                                                <i class="fa fa-trash text-inverse mr-10"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="cus-sat-stat weight-500 txt-warning mt-5" v-else>
                        <span class="counter-anim">You haven't team yet!</span>
                    </div>
                </card>
    		</div>
        </div>
        
        <!--
        <div class="row" v-if="teams!==null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    			<div class="panel panel-default card-view">
    				<div class="panel-wrapper collapse in">
    					<div class="panel-body">
                            <h4 class="mb-10">Teams history</h4>
                            <div class="table-wrap">
                                <div class="table-responsive">
                                    <table class="table table-hover table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th>Logo</th>
                                                <th>Name</th>
                                                <th>Players in team</th>
                                                <th>Need players</th>
                                                <th>Game</th>
                                                <th>Balance, <i aria-hidden="true" class="fa fa-btc"></i></th>
                                                <th class="text-nowrap">Action</th>
                                            </tr>
                                        </thead>
    								    <tbody>
                                            <tr v-for="team in teams">
                                                <td>
                                                    <router-link  :to="{ name: 'team.detail', params: { slug: team.slug }}">
                                                        <img :src="getImageLink(team.image)" class="img-responsive team-image" :alt="team.title" />
                                                    </router-link>
                                                </td>
                                                <td>
                                                    <router-link  :to="{ name: 'team.detail', params: { slug: team.slug }}">
                                                        {{ team.title}}
                                                    </router-link>
                                                </td>
                                                <td class="text-center">{{ team.users.length}}</td>
                                                <td class="text-center">{{ team.quantity}}</td>
                                                <td class="text-center">{{ team.game.title}}</td>
                                                <td class="text-center">{{ team.balance}}</td>
                                                <td class="text-nowrap text-center">
                                                    <router-link  :to="{ name: 'teams.edit', params: { id: team.id }}" class="mr-25" v-if="team.capt_id==user.id">
                                                        <i class="fa fa-pencil text-inverse m-r-10"></i>
                                                    </router-link>
                                                    
                                                    <a href="#" @click="leaveTeam(team.id, $event)" title="Leave the team">
                                                        <i class="fa fa-trash text-inverse m-r-10"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
    				</div>	
    			</div>	
    		</div>
        </div>
        
        <pagination :pagination="pagination"></pagination>
        -->
    </div>    
</template>

<script> 
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'
       
    export default {
        metaInfo: {
            title: 'Personal teams',
            titleTemplate: null
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },
        mounted() {
            this.getUserTeam();
            this.getInvitations();
            //this.getVueItems();
        },
        data : function() {
            return {
                team: null,
                teams: [],
                invitations: [],
                inviteAnswerSuccess: false,
                statuses: [
                    {id:0, title: 'pending'},
                    {id:1, title: 'accept'},
                    {id:2, title: 'denied'}
                ],
                queryString: '',
                pagination: []
            }
        },
        methods : {
            getUserTeam()
            {
                axios.get('/api/users/'+this.user.id+"/team").then((response) => {
                    this.$set(this, 'team', response.data);
                    this.$set(this.user, 'team', response.data);
                });
            },
            getInvitations()
            {
                var query = this.ArrayToUrl({
                    'user_id' : this.user.id,
                    'status' : 0,
                    'sender_id-not': this.user.id,
                    "_with" : 'user,team'
                });
                
                axios.get('/api/team_user?'+query).then((response) => {
                    this.$set(this, 'invitations', response.data);
                });               
            },
            /*getVueItems: function()
            {
                var queryStartParams = {
                    'page' : 1,
                    '_limit' : 3, //limit,
                    '_offset' : 0,
                    "_with" : 'users,game',
                    "_sort" : '-id'
                };
                
                if(location.search)
                {
                    var paramsArray = this.UrlToArray(location.search);
                    
                    for (var prop in paramsArray)
                    {
                        if (paramsArray.hasOwnProperty(prop)) 
                        {
                            queryStartParams[prop] = paramsArray[prop];
                        }
                    }
                    
                    if(parseInt(paramsArray['_limit'])>0)
                        paramsArray['_offset'] = (parseInt(paramsArray['page'])-1)*parseInt(paramsArray['_limit']);
                }
                    
                var query = this.ArrayToUrl(queryStartParams);
                
                axios.get('/api/user/'+this.user.id+'/teams?'+query).then((response) => {
                    this.$set(this, 'teams', response.data.data);
                    
                    delete response.data.data;
                    this.pagination = response.data;
                });
            },*/
            answerToInvite(team_id, event)
            {
                var team_id = team_id; 
                var user_id = this.user.id;
                var status = event.target.value;
                    
                if(this.user.free_player && this.user.team_id!==null)
                {
                    
                    swal({
                        title: 'Are you sure you want to connect the team?',
                        text: "Your current team will be deleted and all invitations to your team to!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, accept invitation!'
                    }).then(function (result) {

                        if (result.value) {
                            axios.put('/api/teams/' + team_id + '/users/' + user_id, {status: status}).then(response => {
                                this.inviteAnswerSuccess = true;
                            }).catch(error => {

                                swal({
                                    type: 'error',
                                    title: 'Error!',
                                    html: error.response.data.error
                                });
                            });
                        }
                    })
                    
                }else{
                    axios.put('/api/teams/'+team_id+'/users/'+user_id, {status:status}).then(response => {
                        this.inviteAnswerSuccess = true;
                    }).catch(error => {
                    
                        swal({
                            type: 'error',
                            title: 'Error!',
                            html: error.response.data.error
                        });              
                    });
                }
            },
            leaveTeam(team_id)
            {
                event.preventDefault();
                var user_id = this.user.id;

                swal({
                    title: 'Are you sure you want to leave the team?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, leave it!'
                }).then(function (result) {

                    if (result.value) {
                        axios.put('/api/teams/' + team_id + '/users/' + user_id, {status: 2}).then(response => {
                            swal(
                                'Deleted!',
                                'You has been excluded from the team.',
                                'success'
                            );
                        });
                    }
                })
            }
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getVueItems();
            }
        }
    }
</script>