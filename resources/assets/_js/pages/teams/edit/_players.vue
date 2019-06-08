<template>
    <div>
        <div class="row" v-if="team!==null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    			<card>
                            
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-wrap">
                                <div class="form-inline">
                                    <button v-on:click="collapsed = !collapsed" class="btn btn-primary btn-icon">Invite players</button>
                                    <div class="checkbox mr-15" v-bind:class="{'hide' : collapsed }">
                                        <input type="checkbox" v-model="selectAll" id="allInvites"/>
                                        <label for="allInvites">Check all</label>
                                    </div>
                                    <button type="button" v-bind:class="{'hide' : collapsed }" @click="sendInvites()" class="btn btn-success btn-anim"><i class="icon-rocket"></i><span class="btn-text">Send invitations</span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-bind:class="{'hide' : collapsed }" class="mb-20">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="input-group mb-15 mt-15">
                                    <input type="text" v-model="q" name="q" @keyup.enter="search()" class="form-control" placeholder="Search by name or nickname">
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-primary" v-if="!loading" @click="search()"><i class="fa fa-search"></i></button>
                                        <button class="btn btn-default" type="button" disabled="disabled" v-if="loading">Searching...</button>
                                    </span>
                                </div>
                                <div class="alert alert-danger" role="alert" v-if="error">
                                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                    {{ error }}
                                </div>
                            </div>
                        </div>

                        <div class="followers-wrap">
                            <ul class="followers-list-wrap">
                                <li class="follow-list">
                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-for="friend in friends">
                                        <div class="follo-body">
                                            <div class="follo-data">
                                                <router-link :to="{ name: friend.type, params: { id: friend.id }}">
                                                    <img :src="getImageLink(friend.avatar)" class="user-img img-circle" :alt="friend.title" />
                                                </router-link>
                                                <div class="user-data mt-15">
                                                    <span class="name block capitalize-font">{{ friend.nickname}}</span>
                                                    <span class="time block truncate txt-grey">{{ friend.name}} {{ friend.last_name}}</span>
                                                </div>

                                                <div class="checkbox pull-right mt-20" v-if="!checkInTeam(friend.id)">
                                                    <input type="checkbox" :value="friend.id" v-model="selected" :id="'checkbox'+friend.id" number/>
                                                    <label :for="'checkbox'+friend.id">&nbsp;</label>
                                                </div>

                                                <div class="pull-right mt-20" v-else>
                                                    <i class="fa fa-check text-danger"></i>
                                                </div>

                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </card>
    		</div>
        </div>
                                             
        <div class="row" v-if="team!==null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    			<card>
                    <div class="alert alert-success alert-dismissable mt-20" v-if="inviteAnswerSuccess">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        <p>Your response to the invitation has been saved.</p>
                    </div>

                    <div class="table-wrap" v-if="invitations!==null">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th>avatar</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Captain</th>
                                        <th>Status</th>
                                        <th class="text-nowrap">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="invitation in invitations" v-bind:class="{'danger' : invitation.status==2, 'success' : invitation.status==1 }">
                                        <td>
                                            <router-link  :to="{ name: 'player', params: { id: invitation.user_id }}">
                                                <img :src="getImageLink(invitation.user.avatar)" class="img-responsive team-image" />
                                            </router-link>
                                        </td>
                                        <td>
                                            <router-link  :to="{ name: 'player', params: { id: invitation.user_id }}">
                                                {{ invitation.user.name}}
                                            </router-link>
                                        </td>
                                        <td class="text-center">{{ invitation.user.email}}</td>
                                        <td class="text-center"><i class="fa fa-check text-danger" v-if="invitation.user_id==team.capt_id && team.status==1"></i></td>
                                        <td class="text-center">
                                            <span v-if="invitation.status==0">pending</span>
                                            <span v-if="invitation.status==1">accepted</span>
                                            <span v-if="invitation.status==2">denied</span>
                                        </td>
                                        <td class="text-nowrap text-center">
                                           <span v-if="team.capt_id!=invitation.sender_id && invitation.status==0">
                                                <select @change="answerToInvite(team.id, invitation.user_id, $event)" class='form-control' data-style="form-control btn-default btn-outline">
                                                    <option v-for="status in statuses" v-bind:value="status.id">
                                                        {{ status.title }}
                                                    </option>
                                                </select>
                                           </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
    metaInfo () {
        return {
            title: 'Team',
        }
    },
    data() {
        return {
            success: false,
            error: false,
            team: null,
            response: null,
            collapsed: true,
            checkedAll: true,
            friends: [],
            q: this.$route.query.q || '',
            loading: false,
            selected: [],
            statuses: [
                {id:0, title: 'pending'},
                {id:1, title: 'accept'},
                {id:2, title: 'denied'}
            ],
            inviteAnswerSuccess: false,
            invitations: null
        }
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        }),
        selectAll: {
            get: function () {
                return this.friends ? this.selected.length == this.friends.length : false;
            },
            set: function (value) {
                var selected = [];

                if (value) {
                    this.friends.forEach(function (user) {
                        selected.push(user.id);
                    });
                }

                this.selected = selected;
            }
        },
        usersInTeam: function () {
            
            var usersInTeam = [];
            
            if(this.friends.length)
            {
                this.invitations.forEach(function (invitation) {
                    usersInTeam.push(invitation.user_id);
                });
            }
            
            return usersInTeam;
        }     
    },
    mounted() {
        Event.listen('teamEditLoad', event => {
            this.team = event.team;
        });
        
        this.team = this.$parent.team;
        
        //Get friends of user
        this.getFriends();
        
        //Get all invitations to the team
        this.getTeamUsers();
    },
    methods: {
        
        getFriends()
        {
            var queryStartParams = {
                "type" : 'player',
                "active" : 1,
                "game_id" : this.user.game_id,
                "free_player" : 1
            };
            
            var query = this.UrlParamsMerge(queryStartParams);
            
            axios.get('/api/users/'+this.user.id+'/friends/?'+query).then(response => {

                if(response.data.error!==undefined)
                    this.error = response.data.error
                
                this.$set(this, 'friends', response.data.data);
                this.loading = false;
                delete response.data.data;
            });
        },
        search()
        {
            if(this.q.length<2)
                return false;
            
            this.error = false;
            this.loading = true;
            
            var query = this.ArrayToUrl({
                "_q" : this.q,
                "type" : 'player',
                "active" : 1,
                "game_id" : this.user.game_id,
                "free_player" : 1
            });
            
            axios.get('/api/users/?'+query).then(response => {
                
                if(response.data.error!==undefined)
                    this.error = response.data.error
                
                this.$set(this, 'friends', response.data);
                this.loading = false;
            });
        },
        sendInvites(){
            var _self = this;
            
            this.selected.forEach(function (user) {
                _self.invite(user);
            }); 
            
            swal({
                type: 'success',
                title: 'Invitations were sent!',
                html: 'Invitations were sent to all players.'
            })
            //change team parent
        },
        invite(user_id)
        {
            axios.put('/api/teams/'+this.team.id+'/users/'+user_id).then(response => {
                console.log(response);
            });
        },
        answerToInvite(team_id, user_id, event)
        {
            axios.put('/api/teams/'+team_id+'/users/'+user_id, {status:event.target.value}).then(response => {
                this.inviteAnswerSuccess = true;
                
            }).catch(error => {
                
                swal({
                    type: 'warning',
                    title: 'Error!',
                    html: error.response.data.error
                });              
            });
            
        },
        checkInTeam: function (value) {
            return this.usersInTeam.indexOf(value) > -1 ? true : false;
        },
        getTeamUsers()
        {
            var query = this.ArrayToUrl({
                "_with" : 'user'
            });
            
            axios.get('/api/teams/'+this.$route.params.id+'/invitations?'+query).then((response) => {
                this.$set(this, 'invitations', response.data);
            });
        },
    },
}
</script>