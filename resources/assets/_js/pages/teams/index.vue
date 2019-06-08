<template>
    <div>
        <div class="row mt-20" v-if="!authenticated"><!-- || user.type=='investor'-->
        	<div class="col-md-12">
                <card>
                    <div class="form-wrap">
                        <form autocomplete="off" id="filter-form">
                            <div class="row">
                                <div class="col-md-3">
                                    <select v-model="game_id" name="game_id" class='form-control' data-style="form-control btn-default btn-outline" id="game_list">
                                        <option v-for="game in games" v-bind:value="game.id">
                                            {{ game.title }}
                                        </option>
                                    </select>	
								</div>
                                
                                <div class="col-md-3">
									<select v-model="country_id" name="users_country_id" class='form-control' data-style="form-control btn-default btn-outline" id="country_list">
                                        <option v-for="country in countries" v-bind:value="country.id" v-bind:data-image="country.flag">
                                            {{ country.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </form>
					</div>
                </card>
        	</div>
        </div>
        <div class="nk-gap-2"></div>
        <card v-if="teams!==null" title="Teams" v-bind:class="{'mt-20': authenticated }">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                    <table class="nk-table">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Players</th>
                                <th>Game</th>
                                <th>Total fights</th>
                                <th>Count wins</th>
                                <th>Victory rate</th>
                                <th>Earned</th>
                                <th>Amount paid to investors</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                            <tr v-for="team in teams">
                                <!--<td>{{ moment(team.created_at, "YYYY-MM-DD h:mm:ss").fromNow()}}</td>-->
                                <td>
                                    <router-link  :to="{ name: 'team.detail', params: { slug: team.slug }}" class="vm-title">
                                        <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image" :alt="team.title" />
                                        <span>{{ team.title}}</span>
                                    </router-link>
                                </td>
                                <td class="text-center"><router-link  :to="{ name: 'team.detail.players', params: { slug: team.slug }}">{{ team.users.length}}</router-link> / {{ team.quantity}}</td>
                                <td class="text-center" v-if="team.game!==null">
                                    <router-link :to="{ name: 'game', params: { gameId: team.game.id }}" :title="team.game.title">
                                        <img :src="getImageLink(team.game.logo_mini)" width="35" :alt="team.game.title" />
                                    </router-link>
                                </td>
                                <td class="text-center" v-else></td>

                                <td class="text-center">{{team.count_fights}}</td>
                                <td class="text-center">{{team.count_wins}}</td>
                                <td class="text-center" v-if="team.count_fights>0">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</td>
                                <td class="text-center" v-else>0%</td>
                                <td class="text-center">{{team.total_sum}}</td>
                                <td class="text-center">{{team.payed_dividents}}</td>

                                <td class="text-center">{{ Number((team.price).toFixed(2))}}</td>
                                <td class="text-center">
                                    <span v-if="team.status==0"><span class="label label-default capitalize-font inline-block">pending</span></span>
                                    <span v-if="team.status==1"><span class="label label-success capitalize-font inline-block">accepted</span></span>
                                    <button v-if="team.quantity>team.users.length && authenticated && user.id!==team.capt_id && user.type=='player' && user.active" @click="joinTeam(team.id)" class="btn btn-primary btn-icon left-icon btn-xs ml-10"><i aria-hidden="true" class="fa fa-check"></i>&nbsp; join the team</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    
                </div>
            </div>
            
            <pagination :pagination="pagination"></pagination>
        </card>
    </div>    
</template>

<script> 
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'
    
    export default {
        metaInfo: {
            title: 'Teams',
            titleTemplate: null
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },
        mounted() {
            this.getVueItems();
            this.getGames();
            this.getCountries();
        
            var self = this;
            Vue.nextTick(function(){ 
                
                $("#game_list").select2({
                    placeholder: "Select game",
                    allowClear: true
                }).on("select2:select", function(e) { 
                    self.game_id = $(e.currentTarget).find("option:selected").val();
                    self.search();
                }).on("select2:unselecting", function (e) {
                    self.game_id = '';

                    if(self.country_id!='')
                        self.$router.push(self.$route.path+"?users_country_id="+self.country_id);
                    else
                        self.$router.push(self.$route.path);
                });
                
                $("#country_list").select2({
                    placeholder: "Select country",
                    templateResult: formatState,
                    templateSelection: formatState,
                    allowClear: true
                }).on("select2:select", function(e) { 
                    self.country_id = $(e.currentTarget).find("option:selected").val();
                    self.search();
                }).on("select2:unselecting", function (e) {
                    self.country_id = '';
                    if(self.game_id!='')
                        self.$router.push(self.$route.path+"?game_id="+self.game_id);
                    else
                        self.$router.push(self.$route.path);
                });
                
                function formatState (opt) 
                {
                    if (!opt.id) {
                        return opt.text;
                    }               
                    var optimage = $(opt.element).data('image'); 
                    if(!optimage){
                        return opt.text;
                    } else {                    
                        var $opt = $(
                            '<span><img src="/images/flags/' + optimage + '" width="23px" /> ' + opt.text + '</span>'
                        );
                        return $opt;
                    }
                };

            });
        },
        data : function() {
            return {
                teams: [],
                games: [],
                countries: [],
                queryString: '',
                pagination: [],
                statuses: [
                    {id:'', title: ''},
                    {id:0, title: 'pending'},
                    {id:1, title: 'accepted'}
                ],
                game_id: this.$route.query.game_id || '',
                country_id: this.$route.query.users_country_id || '',
            }
        },
        methods : {
            getVueItems: function(){
                
                var queryStartParams = {
                    'page' : 1,
                    '_limit' : 12,
                    '_with' : 'game,fights,users',
                    "_sort" : '-id'
                };
                
                if(this.authenticated && this.user.type!='investor')
                {
                    queryStartParams['game_id'] = this.user.game_id;
                }
                
                var query = this.UrlParamsMerge(queryStartParams);
                
                axios.get('http://games.local/api/teams?'+query).then((response) => {
                    this.$set(this, 'teams', response.data.data);
                    
                    delete response.data.data;
                    this.pagination = response.data;
                });
            },
            getGames: function()
            {
                axios.get('http://games.local/api/games').then((response) => {
                    this.$set(this, 'games', response.data);
                    this.$parent.games = this.games;
                });
            },
            getCountries: function()
            {
                axios.get('http://games.local/api/countries').then((response) => {
                    this.$set(this, 'countries', response.data);
                });
            },
            search: function(event)
            {
                this.$router.push(this.$route.path+"?"+$("#filter-form").serialize());
            },
            joinTeam(team_id)
            {
                axios.put('http://games.local/api/teams/'+team_id+'/users/'+this.user.id).then(response => {
                    
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
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getVueItems();
            }
        }
    }
</script>