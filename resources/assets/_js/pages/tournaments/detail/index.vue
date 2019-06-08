<template>
    <div>
    
        <div class="row mt-20" v-if="tournament!==null">
            <div class="col-lg-12 col-md-12 col-xs-12">
        		<card pa_0="true">
					<div class="profile-box">
						<div class="profile-cover-pic">
							<div class="profile-image-overlay" v-bind:style="{ 'background-image': 'url(' + getImageLink(null, 'overlay_user') + ')' }"></div>
						</div>
						<div class="profile-info text-center">
							
                            <div class="tab-struct custom-tab-1 mt-5 mb-10 weight-600">
    							<ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <router-link :to="{ name: 'tournament.detail' }" class="nav-link" active-class="active">
                                            Overview
                                        </router-link>
                                    </li>
                                    
                                    <li class="nav-item" v-if="tournament.fights!=null && tournament.fights.length>0">
                                        <router-link :to="{ name: 'tournament.detail.brackets' }" class="nav-link" active-class="active">
                                            Brackets
                                        </router-link>
                                    </li>
                                    
                                    <li class="nav-item" v-if="tournament.fights!=null && tournament.fights.length>0">
                                        <router-link :to="{ name: 'tournament.detail.matches' }" class="nav-link" active-class="active">
                                            Matches
                                        </router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link :to="{ name: 'tournament.detail.rules' }" class="nav-link" active-class="active">
                                            Rules
                                        </router-link>
                                    </li>   
    							</ul>
    						</div>
                            
                            <div class="profile-img-wrap">
								<img class="inline-block" :src="getImageLink(tournament.image)" alt="user"/>
							</div>
                            <h5 class="profile-title" style="bottom: 52px;">
                                <span class="txt-dark font-21 weight-600">{{tournament.title}}</span><br />
                                <span class="font-15 weight-500">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do, h:mma')}}</span>
                                <div class="input-group mt-5">
                                    <span class="btn btn-success btn-icon left-icon btn-xs" disabled v-if="authenticated && checkRegistered(user.team_id)"><i class="fa fa-check"></i>&nbsp; Your team is already registered.</span>
                                    <button @click="register" v-else-if="checkRigisterStart() && checkRigisterEnd()" class="btn btn-primary btn-xs">Register</button>
                                    <button v-else-if="!checkRigisterStart()" disabled class="btn btn-primary btn-xs">Registration will start at {{moment(tournament.register_start, "YYYY-MM-DD h:mm:ss").format('MMMM Do, h:mma')}}</button>
                                    <button v-else-if="!checkRigisterEnd()" disabled class="btn btn-defualt btn-xs">Registration finished</button>
                                </div>
                            </h5>
						</div>
					</div>
				</card>
        	</div>
        </div>
        
        <div class="tab-content">
            <div class="tab-pane fade active in">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
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
                title: this.title,
            }
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            }),
            teamsInTournament: function () {
                
                var teamsInTournament = [];
                
                if(this.tournament.teams!=undefined && this.tournament.teams.length>0)
                {
                    this.tournament.teams.forEach(function (team) {
                        teamsInTournament.push(team.id);
                    });
                }
                
                return teamsInTournament;
            }
        },
        mounted() {
            this.getTournament();
        },
        data : function() {
            return {
                title: 'Detail tournament',
                tournament: null,
                success: false,
                error: false,
                response: null,
                tabs: [
                    {
                        name: 'Overview',
                        route: 'tournament.detail'
                    },
                    {
                        name: 'Brackets',
                        route: 'tournament.detail.brackets'
                    },
                    {
                        name: 'Rules',
                        route: 'tournament.detail.rules'
                    }
                ]
            }
        },
        methods : {
            async getTournament()
            {
                var query = this.ArrayToUrl({
                    '_with' : 'game,fights,fights.invitations.team,fights.winner'
                });

                try {
                    const response = await axios.get('/api/tournaments/'+this.$route.params.id+"?"+query);
                    this.$set(this, 'tournament', response.data);
                    this.tournament.start_at = this.dateConvertUTC(this.tournament.start_at, -1);
                    this.tournament.register_start = this.dateConvertUTC(this.tournament.register_start, -1);

                    //count prizes
                    var winners_part = this.tournament.winners_part.split(",");
                    var prize_pool = parseInt(this.tournament.prize_pool);
                    var prizes = [];

                    winners_part.forEach(function(part)
                    {
                        prizes.push(parseInt(part)*prize_pool/100);
                    });

                    this.tournament.prizes = prizes;
                    this.title = this.tournament.title;
                    this.$meta().refresh();

                    this.getTournamentTeams();
                    this.getTournamentBrackets();

                    Event.fire('tournamentEditLoad', {
                        tournament: this.tournament
                    });
                } catch (e) {
                    this.errors.push(e);
                }
            },
            async getTournamentTeams()
            {
                try {
                    const response = await axios.get('/api/tournaments/'+this.$route.params.id+"/teams");
                    this.$set(this.tournament, 'teams', response.data);
                } catch (e) {
                    this.errors.push(e);
                }
            },
            async getTournamentBrackets()
            {
                try {
                    const response = await axios.get('/api/tournaments/'+this.$route.params.id+"/brackets");
                    this.$set(this.tournament, 'brackets', response.data);
                } catch (e) {
                    this.errors.push(e);
                }
            },
            register: function()
            {
                if(!this.authenticated)
                {
                    this.$router.push({ name: 'auth.login' });
                    return;
                }
                
                if(this.user.team_id==null)
                {   
                    swal({ type: 'warning', title: 'Error!', html: 'You need to be in the team.' });
                    return;
                }
                                
                axios.post('/api/tournaments/'+this.$route.params.id+'/teams/'+this.user.team_id).then(response => {
            
                    swal({
                        type: 'success',
                        title: 'Success!',
                        html: 'You are registered on the tournament!'
                    });
                    
                    this.getTournamentTeams();
                    
                }).catch(error => {
                    
                    swal({
                        type: 'warning',
                        title: 'Error!',
                        html: error.response.data.error
                    });              
                });
            },
            checkRigisterStart()
            {
                var now = moment();
                /*console.log(moment(this.tournament.start_at).subtract('hours', 1).format('dddd, MMMM DD YYYY, h:mm:ss'));
                console.log(moment(this.tournament.start_at).format('dddd, MMMM DD YYYY, h:mm:ss'));
                console.log(now.format('dddd, MMMM DD YYYY, h:mm:ss'));
                console.log(moment(this.tournament.register_start).format('dddd, MMMM DD YYYY, h:mm:ss'));
                console.log(moment(this.tournament.register_start).isAfter(now));*/
  
                return moment(now).isAfter(this.tournament.register_start);
            },
            checkRigisterEnd()
            {
                var now = moment();
                return moment(now).isBefore(moment(this.tournament.start_at).subtract(1, 'hours'));
            },
            checkRegistered(value)
            {
                return this.teamsInTournament.indexOf(value) > -1 ? true : false;
            }
        }
    }
</script>