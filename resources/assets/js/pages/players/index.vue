<template>
    <div>

		<template v-if="authenticated && user.institution_id!=null">
			<div class="row mt-20">
				<div class="col-md-12">
					<card>
						<div class="form-wrap">
							<form autocomplete="off" id="filter-form">
								<div class="row">
									<!--<div class="col-md-3">
										<select v-model="game_id" name="game_id" class='form-control' data-style="form-control btn-default btn-outline" id="game_list">
											<option v-for="game in games" v-bind:value="game.id">
												{{ game.title }}
											</option>
										</select>
									</div>
									<div class="col-md-3">
										<select v-model="country_id" name="country_id" class='form-control' data-style="form-control btn-default btn-outline" id="country_list">
											<option v-for="country in countries" v-bind:value="country.id" v-bind:data-image="country.flag">
												{{ country.name }}
											</option>
										</select>
									</div>-->
									<div class="col-md-3">
										<select v-model="free_player" name="free_player" class='form-control' data-style="form-control btn-default btn-outline" id="status_list">
											<option v-for="status in statuses" v-bind:value="status.id">
												{{ $t(status.title) }}
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
		</template>
		
        <card :title="$t('players')" v-if="authenticated">

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					
					<template v-if="user.institution_id===null">
						<p class="text-white">
							Для просмотра игроков вы должны 
							<router-link :to="{ name: 'settings.school' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em">
								задать школу 
							</router-link> в личном кабинете.
						</p>
					</template>
				
					<template v-if="user.institution_id!=null && players!==null && players.length>0">
						<a class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white" @click.prevent="sendInvites">
							{{ $t('send_invitations_to_team') }} ({{parseInt(choose_players.length)}})
						</a>
						<div class="nk-gap"></div>
					</template>
				
                    <table class="nk-table" v-if="players!==null && players.length>0">
                        <tbody>
                        <tr>
                            <th v-if="authenticated"><!--{{$t('actions')}}--></th>
                            <th>{{$t('name')}}</th>
                            <th>{{$t('team')}}</th>
                            <th>{{$t('count_matches')}}</th>
                            <th>{{$t('count_wins')}}</th>
                            <th>{{$t('victory_rate')}}</th>
                            <th>{{$t('status')}}</th>
                        </tr>
                        <tr v-for="player in players">
                            <td class="text-center" v-if="authenticated">
                                <template v-if="player.free_player && player.id!=user.id">
                                    <!--<checkbox v-model="choose_players" :value="player.id" checked="false" name="choose_players[]">
                                        &nbsp;
                                    </checkbox>-->

                                    <input type="checkbox" :value="player.id" v-model="choose_players">
                                    <label>&nbsp;</label>
                                </template>
                            </td>
                            <td>
                                <router-link  :to="{ name: 'player', params: { id: player.id }}"  class="vm-title">
                                    <img :src="getImageLink(player.avatar)" class="w-50px mr-10" />
                                    <span>{{ player.nickname}}</span>
                                </router-link>
                            </td>
                            <td class="text-center"><span v-if="player.team_id>0 && player.team!==null">

                                    <router-link  :to="{ name: 'team.detail', params: {slug : player.team.slug }}">
                                        <img :src="getImageLink(player.team.image)" class="w-50px mr-10" v-if="player.team.image!==null"/>
                                        <span v-if="player.team.image==null">{{player.team.title}}</span>
                                    </router-link>

                                </span></td>
                            <td class="text-center">{{player.fights_count}}</td>
                            <td class="text-center">{{player.wins}}</td>
                            <td class="text-center" v-if="player.fights_count>0">{{ Number((player.wins/player.fights_count*100).toFixed(2))}}%</td>
                            <td class="text-center" v-else>0</td>
                            <td class="text-center">
                                <span v-if="player.free_player"><span class="text-warning">{{$t('free')}}</span></span>
                                <span v-else-if="player.team_id>0 && player.id==player.team.capt_id"><span class="text-info">{{$t('captain')}}</span></span>
                                <span v-else><span class="text-success">{{$t('in_team')}}</span></span>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <pagination :pagination="pagination"></pagination>
        </card>

        <card v-else :title="$t('players')">
            <p class="text-white">
                Для того чтобы увидеть список игроков, <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em">
                зарегистрируйтесь</router-link> или <router-link :to="{ name: 'login' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em">авторизуйтесь</router-link>, если у вас есть аккаунт.
            </p>
        </card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import Vue from 'vue'
    import swal from 'sweetalert2'

    export default {
        metaInfo () {
            return { title: this.$t('players') }
        },

        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
            })
        },
        mounted() {
		
			if(this.authenticated && this.user.institution_id!=null)
			{
				this.getVueItems();
				//this.getGames();
				//this.getCountries();

				var self = this;
				Vue.nextTick(function() {

					$("#status_list").select2({
						placeholder: self.$t('select_status'),
						allowClear: true
					}).on("select2:select", function(e) {
						self.free_player = $(e.currentTarget).find("option:selected").val();
						self.search();
					}).on("select2:unselecting", function (e) {
						self.free_player = '';

						var q = Object.assign({}, self.$route.query);
						delete q.free_player;
						self.$router.push(self.$route.path+"?"+$.param(q));
					});

					/*$("#game_list").select2({
						placeholder: self.$t('select_game'),
						allowClear: true
					}).on("select2:select", function(e) {
						self.game_id = $(e.currentTarget).find("option:selected").val();
						self.search();
					}).on("select2:unselecting", function (e) {
						self.game_id = '';

						var q = Object.assign({}, self.$route.query);
						delete q.game_id;
						self.$router.push(self.$route.path+"?"+$.param(q));
					});

					$("#country_list").select2({
						placeholder: self.$t('select_country'),
						templateResult: formatState,
						templateSelection: formatState,
						allowClear: true
					}).on("select2:select", function(e) {
						self.country_id = $(e.currentTarget).find("option:selected").val();
						self.search();
					}).on("select2:unselecting", function (e) {
						self.country_id = '';
						var q = Object.assign({}, self.$route.query);
						delete q.country_id;
						self.$router.push(self.$route.path+"?"+$.param(q));
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
					};*/
				});
			}
        },
        data : function() {
            return {
                players: [],
                statuses: [
                    {id:0, title: 'in_team'},
                    {id:1, title: 'free'}
                ],
                games: [],
                countries: [],
                game_id: this.$route.query.game_id || '',
                country_id: this.$route.query.country_id || '',
                free_player: this.$route.query.free_player || '',
                pagination: [],
                choose_players: []
            }
        },
        methods : {
            getVueItems: function(){

                var queryStartParams = {
                    'page' : 1,
                    '_limit' : 12,
                    'type' : 'player',
                    '_with' : 'team,country,team.fights',
                    "active" : 1,
                    "_sort" : '-id'
                };

                if(this.authenticated && this.user.type=='player')
                {
                    queryStartParams['game_id'] = this.user.game_id;
					if(this.user.institution_id!==null)
						queryStartParams['institution_id'] = this.user.institution_id;
					queryStartParams['institution_id-not'] = 'null';
                }

                var query = this.UrlParamsMerge(queryStartParams);

                axios.get('/api/users?'+query).then((response) => {

                    var players = response.data.data;
                    var _self = this;

                    players.forEach(function(player)
                    {
                        var cf = 0;
                        var wins = 0;
                        if(player.team_id>0 && player.team.fights.length>0)
                        {
                            var tid = player.team_id;

                            player.team.fights.forEach(function(fight){
                                if(fight.status==3)
                                {
                                    cf++;
                                    if(fight.winner_id==tid)
                                    {
                                        wins++;
                                    }
                                }
                            });
                        }
                        player.wins = wins;
                        player.fights_count = cf;
                    });

                    this.$set(this, 'players', players);

                    delete response.data.data;
                    this.pagination = response.data;
                });
            },
            getGames: function()
            {
                axios.get('/api/games').then((response) => {
                    this.$set(this, 'games', response.data);
                    this.$parent.games = this.games;
                });
            },
            getCountries: function()
            {
                axios.get('/api/countries').then((response) => {
                    this.$set(this, 'countries', response.data);
                });
            },
            search: function(event)
            {
                this.$router.push(this.$route.path+"?"+$("#filter-form").serialize());
            },
            sendInvites(){
                var _self = this;

                this.choose_players.forEach(function (user_id) {
                    _self.invite(user_id);
                });

                swal({
                    type: 'success',
                    title: this.$t('invitations_sent')
                })
            },

            invite(user_id)
            {
                axios.put('/api/teams/'+this.user.team_id+'/users/'+user_id).then(response => {
                    //console.log(response);
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