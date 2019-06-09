<template>
    <div>
        <card :title="$t('tournaments')">

			<template>
				<div class="row">
					<div class="col-md-12">
						<card>
							<div class="form-wrap">
								<form autocomplete="off" id="filter-form">
									<div class="row">
										<div class="col-md-3">
											<select v-model="status_id" name="status_id" class='form-control' data-style="form-control btn-default btn-outline" id="status_list">
												<option v-for="status in status_list" v-bind:value="status.id">
													{{ status.title }}
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

            <table class="nk-table" v-if="tournaments!=null && tournaments.length>0">
                <tbody>
					<tr>
						<th>{{$t('title')}}</th>
						<th>{{$t('game')}}</th>
						<th>{{$t('tournament_start_time')}}</th>
						<th>{{$t('tournament_register_start_time')}}</th>
						<th>{{$t('teams')}}</th>
						<th>&nbsp;</th>
					</tr>
					<tr v-for="tournament in tournaments">
						<td>
							<router-link  :to="{ name: 'tournament', params: { id: tournament.id }}"  class="vm-title">
								<img :src="getImageLink(tournament.image, 'avatar_team')" class="w-50px mr-10" :alt="tournament.title" v-if="tournament.image!=null" />
								<i class="ti-cup mr-20" v-else></i>
								<span>{{ tournament.title}}</span>
							</router-link>
						</td>
						<td class="text-center">
							<router-link :to="{ name: 'game', params: { gameId: tournament.game.id }}" :title="tournament.game.title">
								<img :src="getImageLink(tournament.game.logo_mini)" width="35" :alt="tournament.game.title" />
							</router-link>
						</td>
						<td class="text-center">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").format('D MMM, HH:mm') }} МСК</td>
						<td class="text-center">{{moment(tournament.register_start, "YYYY-MM-DD h:mm:ss").format('D MMM, HH:mm') }} МСК</td>
						<!--<td class="text-center">{{tournament.teams.length}} / {{ tournament.count_teams}}</td>-->
						<td class="text-center">{{tournament.teams.length}} / 175</td>
						<td>
							<div class="input-group mt-5">
								<button @click="register" v-if="checkRegisterStart(tournament.register_start) && checkRegisterEnd(tournament.register_start)" class="btn btn-primary btn-xs">Зарегистрироваться</button>
								<button v-else-if="!checkRegisterEnd(tournament.register_start)" disabled class="btn btn-defualt btn-xs">Регистрация завершена</button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<a href="#" class="vm-title">
								<img src="/images/ava_32.png" class="w-50px mr-10"/>
								<span>CS:GO</span>
							</a>
						</td>
						<td class="text-center">
							<img src="/images/CS_GO1.png" width="35" />
						</td>
						<td class="text-center">23 фев. 2019 г., МСК</td>
						<td class="text-center">17 фев. 2019 г., МСК</td>
						<td class="text-center">-</td>
						<td>
							<div class="input-group mt-5">
								<button disabled class="btn btn-defualt btn-xs text-info">Регистрация ожидается</button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<a href="#" class="vm-title">
								<img src="/images/ava_32.png" class="w-50px mr-10"/>
								<span>LOL</span>
							</a>
						</td>
						<td class="text-center">
							<img src="/images/lol.jpg" width="35" />
						</td>
						<td class="text-center">13 апр. 2019 г., МСК</td>
						<td class="text-center">7 апр. 2019 г., МСК</td>
						<td class="text-center">-</td>
						<td>
							<div class="input-group mt-5">
								<button disabled class="btn btn-defualt btn-xs text-info">Регистрация ожидается</button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<a href="#" class="vm-title">
								<img src="/images/ava_32.png" class="w-50px mr-10"/>
								<span>DOTA2</span>
							</a>
						</td>
						<td class="text-center">
							<img src="https://sparta.games/storage/games/February2018/6MmyFNiGM8h9igLGkgru.png" width="35" />
						</td>
						<td class="text-center">11 мая 2019 г., МСК</td>
						<td class="text-center">5 мая 2019 г., МСК</td>
						<td class="text-center">-</td>
						<td>
							<div class="input-group mt-5">
								<button disabled class="btn btn-defualt btn-xs text-info">Регистрация ожидается</button>
							</div>
						</td>
					</tr>

                </tbody>
            </table>
			
			<p v-else class="text-white">
				{{$t('no_tournaments')}}
			</p>

            <pagination :pagination="pagination"></pagination>
        </card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import { loadMessages } from '~/plugins/i18n'
    import Vue from 'vue'
    import swal from 'sweetalert2'

    export default {
        metaInfo () {
            return { title: this.$t('tournaments') }
        },
        data() {
            return {
                tournaments: [],
                pagination: [],
                status_list: [
                    {id:0, title: 'Все'},
                    {id:1, title: 'Прошедшие'},
                    {id:2, title: "Онлайн"},
                    {id:3, title: "Предстоящие"}
                ],
                status_id: null,
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
                locale: 'lang/locale'
            })
        },
        mounted() {
            this.getTournaments();

            loadMessages(this.locale);
            this.moment.locale(this.locale);

            var _self = this;
            Vue.nextTick(function() {
                $("#status_list").select2({
                    placeholder: "Статус турнира"
                }).on("change", function (e) {
                    _self.status_id = $(e.currentTarget).find("option:selected").val();
                });
            });
        },
        methods:
            {
                getTournaments()
                {
					var dnow = new Date();
					
                    var queryStartParams = {
                        //"status" : 1,
						//"register_start-gt" : this.dateConvertUTC(dnow.toLocaleDateString(), -1),
                        'page' : 1,
                        '_limit' : 12,
                        "_sort" : 'start_at',
                        "_with" : 'teams,game'
                    };

                    if(this.status_id==1)
                    {
                        queryStartParams['end_at-not'] = null;
                    }else if(this.status_id==2){
                        queryStartParams['start_at-st'] = this.moment.utc().format();
                        queryStartParams['end_at'] = null;
                    }else if(this.status_id==3){
                        queryStartParams['start_at-gt'] = this.moment.utc().format();
                    }

                    var query = this.UrlParamsMerge(queryStartParams);

                    axios.get('/api/tournaments?'+query).then((response) => {
                        var tournaments = response.data.data;
                        var _self = this;
						
						if(tournaments.length>0)
						{
							tournaments.forEach(function(tournament)
							{
								tournament.start_at = _self.dateConvertUTC(tournament.start_at, -1);
							});
						}
                        
                        this.$set(this, 'tournaments', tournaments);

                        delete response.data.data;
                        this.pagination = response.data;
                    });
                },
                checkRegisterStart(register_start)
                {
                    return this.moment.utc().isAfter(register_start);
                },
                checkRegisterEnd(register_start)
                {
                    return this.moment.utc().isBefore(this.moment(register_start).subtract(1, 'hours'));
                },
                register: function()
                {
                    if(!this.authenticated)
                    {
                        this.$router.push({ name: 'login' });
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
            },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getTournaments();
            },
            status_id: function(val, oldVal)
            {
                this.getTournaments();
            }
        }
    }
</script>