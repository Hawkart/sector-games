<template>
    <div>
        <card v-if="authenticated" :title="$t('teams')">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					
					<template v-if="user.institution_id===null">
						<p class="text-white">
							Для просмотра команд вы должны 
							<router-link :to="{ name: 'settings.school' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em">
								задать школу 
							</router-link> в личном кабинете.
						</p>
					</template>
					
					<template v-if="user.institution_id!=null && teams.length==0">
						<p class="text-white">
							В вашей школе еще нет ни одной команды. Будьте первым,  
							<router-link :to="{ name: 'settings.team' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em">
							создайте
							</router-link> команду.
						</p>
					</template>
					
                    <table class="nk-table" v-if="teams!==null && teams.length>0">
                        <tbody>
                        <tr>
                            <th>{{$t('title')}}</th>
                            <th>{{$t('players')}}</th>
                            <th>{{$t('game')}}</th>
                            <th>{{$t('count_matches')}}</th>
                            <th>{{$t('count_wins')}}</th>
                            <th>{{$t('victory_rate')}}</th>
                            <th>{{$t('status')}}</th>
                        </tr>
                        <tr v-for="team in teams">
                            <td>
                                <router-link  :to="{ name: 'team', params: { id: team.id }}" class="vm-title">
                                    <img :src="getImageLink(team.image, 'avatar_team')" class="w-50px mr-10" :alt="team.title" />
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
                            <td class="text-center">
                                <span v-if="team.status==0"><span class="text-warning">{{$t('status_pending')}}</span></span>
                                <span v-if="team.status==1"><span class="text-success">{{$t('status_accepted')}}</span></span>
                                <button v-if="team.quantity>team.users.length && authenticated && user.id!==team.capt_id && user.type=='player' && user.active" @click="joinTeam(team.id)" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white">
                                    {{$t('join_team')}}
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <pagination :pagination="pagination"></pagination>
                </div>
            </div>
        </card>

        <card v-else :title="$t('teams')">
            <p class="text-white">
                Для того чтобы увидеть список команд, <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em">
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
            return { title: this.$t('teams') }
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
			}
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
					if(this.user.institution_id!==null)
						queryStartParams['institution_id'] = this.user.institution_id;
					queryStartParams['institution_id-not'] = 'null';
                }

                var query = this.UrlParamsMerge(queryStartParams);

                axios.get('/api/teams?'+query).then((response) => {
                    this.$set(this, 'teams', response.data.data);

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
            joinTeam(team_id)
            {
                axios.put('/api/teams/'+team_id+'/users/'+this.user.id).then(response => {

                    swal({
                        type: 'success',
                        title: this.$t('join_team_request_success')
                    });

                }).catch(error => {

                    swal({
                        type: 'warning',
                        title: error.response.data.error
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