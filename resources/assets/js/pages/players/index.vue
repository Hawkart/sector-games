<template>
    <div>

		<!--<template v-if="authenticated && user.institution_id!=null">
			<div class="row mt-20">
				<div class="col-md-12">
					<card>
						<div class="form-wrap">
							<form autocomplete="off" id="filter-form">
								<div class="row">
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
		</template>-->
		
        <card :title="$t('players')">

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					
					<!--<template v-if="user.institution_id===null">
						<p class="text-white">
							Для просмотра игроков вы должны 
							<router-link :to="{ name: 'settings.school' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em">
								задать школу 
							</router-link> в личном кабинете.
						</p>
					</template>
				
					<template v-if="user.institution_id!=null && players!==null && players.length>0 && user.team_id>0">
                        <div class="mb-20">
                            <span class="text-white">{{$t('invite_to_team_through')}}</span>
                            <social-sharing :url="'https://youthleague.ru/teams/'+user.team_id"
                                            title="ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2"
                                            description="ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2. Для учащихся и выпускников общеобразовательных школ и среднеспециальных учебных заведений в возрасте от 14 до 18 лет."
                                            hashtags="Dota2,киберспорт,турнир"
                                            inline-template>
                                <div class="ml-10 d-inline">
                                    <network network="email" class="nk-btn nk-btn-rounded nk-btn-color-main-1">
                                        <i class="fa fa-envelope"></i> Email
                                    </network>
                                    <network network="vk" class="nk-btn nk-btn-rounded nk-btn-color-main-1 btn-vk">
                                        <i class="fa fa-vk"></i> ВКонтакте
                                    </network>
                                    <network network="facebook" class="nk-btn nk-btn-rounded nk-btn-color-main-1 btn-fb">
                                        <i class="fa fa-facebook"></i> Facebook
                                    </network>
                                </div>
                            </social-sharing>
                        </div>
                        <a class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white" @click.prevent="sendInvites">
                            {{ $t('send_invitations_to_team') }} ({{parseInt(choose_players.length)}})
                        </a>
                        <div class="nk-gap"></div>
					</template>-->
				
                    <table class="nk-table" v-if="players!==null && players.length>0">
                        <tbody>
                        <tr>
                            <!--<th v-if="authenticated"></th>-->
                            <th>{{$t('name')}}</th>
                            <th>{{$t('team')}}</th>
                            <th>{{$t('count_matches')}}</th>
                            <th>{{$t('count_wins')}}</th>
                            <th>{{$t('victory_rate')}}</th>
                            <th>{{$t('status')}}</th>
                        </tr>
                        <tr v-for="player in players">
                            <!--<td class="text-center" v-if="authenticated">
                                <template v-if="player.free_player && player.id!=user.id">
                                    <input type="checkbox" :value="player.id" v-model="choose_players">
                                    <label>&nbsp;</label>
                                </template>
                            </td>-->
                            <td>
                                <router-link  :to="{ name: 'player', params: { id: player.id }}"  class="vm-title">
                                    <img :src="getImageLink(player.avatar)" class="w-50px mr-10" />
                                    <span>{{ player.nickname}}</span>
                                </router-link>
                            </td>
                            <td class="text-center"><span v-if="player.team_id>0 && player.team!==null">
                                    <router-link  :to="{ name: 'team.detail', params: {id : player.team.id }}">
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

        <!--<card v-else :title="$t('players')">
            <p class="text-white">
                Для того чтобы увидеть список игроков, <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em">
                зарегистрируйтесь</router-link> или <router-link :to="{ name: 'login' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em">авторизуйтесь</router-link>, если у вас есть аккаунт.
            </p>
        </card>-->
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
		
			//if(this.authenticated && this.user.institution_id!=null)
			//{
				this.getVueItems();
			//}
        },
        data : function() {
            return {
                players: [],
                game_id: this.$route.query.game_id || '',
                country_id: this.$route.query.country_id || '',
                free_player: this.$route.query.free_player || '',
                pagination: [],
                choose_players: [],
                statuses: [
                    {id:'', title: ''},
                    {id:0, title: this.$t('free')},
                    {id:1, title: this.$t('in_team')}
                ],
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

                /*if(this.authenticated && this.user.type=='player')
                {
                    queryStartParams['game_id'] = this.user.game_id;
					if(this.user.institution_id!==null)
						queryStartParams['institution_id'] = this.user.institution_id;
					queryStartParams['institution_id-not'] = 'null';
                }*/

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