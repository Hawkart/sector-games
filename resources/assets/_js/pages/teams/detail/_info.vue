<template>
<div>
    <div class="row" v-if="team!==null">
    	<div class="col-lg-4 col-md-6 col-xs-12">
            <card>
                <h6>Invite Player:</h6>
                <social-sharing :title="team.title" inline-template>
                <div class="button-list mb-5">
                    <network network="facebook">
                        <button class="btn btn-facebook btn-icon-anim btn-square"><i class="fa fa-facebook"></i></button>
                    </network>
                    <network network="twitter">
                        <button class="btn btn-twitter btn-icon-anim btn-square"><i class="fa fa-twitter"></i></button>
                    </network>
                    <network network="googleplus">
                        <button class="btn btn-googleplus btn-icon-anim btn-square"><i class="fa fa-google-plus"></i></button>
                    </network>
                    <network network="pinterest">
                        <button class="btn btn-pinterest btn-icon-anim btn-square"><i class="fa fa-pinterest"></i></button>
                    </network>
                    <network network="vk">
                        <button class="btn btn-instagram btn-icon-anim btn-square"><i class="fa fa-vk"></i></button>
                    </network>
                </div>
                </social-sharing>
             </card>
        </div>
        
        <div class="col-lg-4 col-md-6 col-xs-12">
            <card>
                <h6>Invite investor:</h6>
                <div class="mb-10 mt-10">
                    <button class="btn btn-primary" @click="sendToInvestor()">&nbsp; Apply to Investor</button>
                </div>
             </card>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12" v-if="authenticated && user.type=='investor'">
            <card>
                <h6>Invest to team:</h6>
                <div class="input-group mt-10 mb-10">
                    <input type="text" v-model="price" class="form-control">
                    <span class="input-group-btn">
                        <button class="btn btn-primary btn-icon" @click="invest()">Buy</button>
                    </span>
                </div>
            </card>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12" v-else-if="team.quantity!=team.users.length">
            <card>
                <h6>Players wanted: {{team.quantity-team.users.length}}</h6>
                <div class="mb-10 mt-10" v-if="authenticated && user.type=='player' && user.active  || !authenticated">
                    <button class="btn btn-primary btn-icon left-icon" v-if="authenticated && !checkInTeam(user.id) || !authenticated" @click="invite()"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp; Join to Team</button>
                    <span class="btn btn-primary btn-icon left-icon" v-else-if="authenticated && checkInTeam(user.id)"><i class="fa fa-check"></i>&nbsp; Your are in the team</span>
                </div>
             </card>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12" v-else>
            <card>
                <h6>Status:</h6>
                <div class="mb-15 mt-25">
                    <span class="label label-success capitalize-font inline-block">accepted</span>
                </div>
             </card>
        </div>
    </div>   
        
    <card :title="team.title" v-if="team!==null">
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="panel-body">
					<dl>
                      <dt class="mb-5">Created at</dt>
					  <dd class="mb-15 txt-dark font-13 weight-500">{{ moment(team.created_at, "YYYY-MM-DD h:mm:ss").fromNow()}}</dd>
                      <dt class="mb-5">
                         Players in team
                      </dt>
					  <dd class="mb-15 txt-dark font-13 weight-500">
                        <router-link :to="{ name: 'team.detail.players' }" style="border-bottom: 1px dashed;">
                            {{ team.users.length}}
                        </router-link>
                      </dd>
                      <dt class="mb-5">Captain</dt>
					  <dd class="txt-dark font-13 weight-500"><span v-if="team.users.length>0">{{team.users[0].name}}</span><span v-else>-</span></dd>
					</dl>
				</div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="panel-body">
					<dl>
                      <dt class="mb-5">Game</dt>
					  <dd class="mb-15 txt-dark font-13 weight-500">
                        <img :src="getImageLink(team.game.logo_mini)" class="zmdi mr-5" width="25" :alt="team.game.title" />
                      </dd>
					  <dt class="mb-5">Total fights</dt>
					  <dd class="mb-15 txt-dark font-13 weight-500">{{team.count_fights}}</dd>
                      <dt class="mb-5">Count wins</dt>
					  <dd class="txt-dark font-13 weight-500">{{ team.count_wins}}</dd>
					</dl>
				</div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="panel-body">
					<dl>
                      <dt class="mb-5">Victory rate</dt>
					  <dd class="mb-15 txt-dark font-13 weight-500"><span v-if="team.count_fights>0">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</span><span v-else>0%</span></dd>
                      <dt class="mb-5">Earned</dt>
					  <dd class="mb-15 txt-dark font-13 weight-500">{{team.total_sum}}</dd>
					  <dt class="mb-5">Amount paid to investors</dt>
					  <dd class="txt-dark font-13 weight-500">{{team.payed_dividents}}</dd>
					</dl>
				</div>
            </div>
        </div>
    </card>

    <div class="row" v-if="team!==null">
        <div class="col-lg-12 col-md-12 col-xs-12">
            <card title="Investors">
                <div class="table-wrap" v-if="investor_team!=null && investor_team.length>0">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered mb-5">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Investment</th>
                                <th>Owner</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="it in investor_team">
                                <td>
                                    <router-link  :to="{ name: 'investor', params: { id: it.user.id }}"  class="vm-title">
                                        <img :src="getImageLink(it.user.avatar)" class="img-responsive team-image" />
                                        <span>{{ it.user.nickname}}</span>
                                    </router-link>
                                </td>
                                <td class="text-center">{{it.invest_price}}</td>
                                <td class="text-center">
                                    <span v-if="it.owner">yes</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-else>
                    <p class="txt-danger mb-10">No investors found.</p>
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
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        }),
        slug: function() {
            var slug = this.slugTitle(this.team.title);
            this.team.slug = slug;
            return slug;
        },
        usersInTeam: function () {
            
            var usersInTeam = [];
            
            if(this.team.users.length)
            {
                this.team.users.forEach(function (user) {
                    usersInTeam.push(user.id);
                });
            }
            
            return usersInTeam;
        },
        price: function() {
            return parseInt(this.team.price)/4;
        }
    },
    ready() {
        Event.listen('teamEditLoad', event => {
            this.team = event.team;
        });
    },
    data() {
        return {
            success: false,
            error: false,
            team: null,
            games: [],
            fights: [],
            investor_team: [],
            response: null
        }
    },
    mounted() {
        Event.listen('teamEditLoad', event => {
            this.team = event.team;
        });
        
        this.team = this.$parent.team;
        
        var self = this;
        setTimeout(function(){
            self.getInvestors(self.team.id);
        }, 1000);
    },
    methods: {       
        checkInTeam: function (value) {
            return this.usersInTeam.indexOf(value) > -1 ? true : false;
        },
        invite()
        {
            if(!this.authenticated)
            {
                this.$router.push({ name: 'auth.login' });
                return;
            }
            
            axios.put('/api/teams/'+this.team.id+'/users/'+this.user.id).then(response => {
            
                swal({
                    type: 'success',
                    title: 'Request sent!',
                    html: 'You sent request to the team!'
                });
                
            }).catch(error => {
                
                swal({
                    type: 'warning',
                    title: 'Error!',
                    html: error.response.data.error
                });              
            });
        },
        sendToInvestor()
        {
            if(!this.authenticated)
            {
                this.$router.push({ name: 'auth.login' });
                return;
            }
            
            var team_id = this.team.id;
            swal({
                title: 'Enter investor\'s email to send team link to.',
                input: 'email',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: function (email) 
                {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function() {
                            
                            axios.post('/api/teams/'+team_id+'/toInvestor', {email: email}).then(response => {
                                resolve()
                            });
                            
                        }, 1000)
                    })
                },
                allowOutsideClick: false
            }).then(function (result) {

                if (result.value) {
                    swal({
                        type: 'success',
                        title: 'Link sent!',
                        html: 'Team\'s link sent to email: ' + result.value
                    })
                }
            })
        },
        invest()
        {
            var team_id = this.team.id;
            var investor_id = this.user.id;
            var price = this.price;

            var self = this;

            swal({
                title: 'Are you sure you want invest to the team?',
                text: "You will be charged "+this.price+" $ in your account!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, invest!'
            }).then(function (result) {

                if (result.value) {
                    axios.post('/api/investors/' + investor_id + '/teams/' + team_id, {invest_price: price}).then(response => {
                        swal({
                            type: 'success',
                            title: 'Success!',
                            html: 'Invested successfully.'
                        });

                        self.getInvestors(self.team.id);
                    }).catch(error => {
                        swal({
                            type: 'error',
                            title: 'Error!',
                            html: error.response.data.message
                        });
                    });
                }
            })
        },
        getInvestors(team_id)
        {
            var query = this.ArrayToUrl({
                'team_id' : team_id,
                "_with" : 'user,team'
            });

            axios.get('/api/investor_team?'+query).then((response) => {
                this.$set(this, 'investor_team', response.data);
            });
        }
    },
}
</script>