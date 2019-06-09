<template>
    <div>
        <card :title="tournament.title" v-if="tournament!=null">

            <div class="nk-tabs">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#tabs-1-1" role="tab" data-toggle="tab">Инфо</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-2" role="tab" data-toggle="tab">Команды</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-3" role="tab" data-toggle="tab">Матчи</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-4" role="tab" data-toggle="tab">Сетка</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-5" role="tab" data-toggle="tab">Призы</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade show active" id="tabs-1-1">
                        <div class="nk-gap"></div>
                        <div class="row vertical-gap">
                            <div class="col-md-6 col-xs-6">
                                <img :src="getImageLink(tournament.image, 'avatar_team')" class="w-100">
                            </div>
                            <aside class="col-lg-6 nk-sidebar-sticky-parent">
                                <dl>
                                    <dt class="mb-5">{{$t('tournament_start_time')}}:</dt>
                                    <dd class="mb-15 txt-dark font-13 weight-500">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").format('D MMM, HH:mm') }} МСК</dd>
                                    <dt class="mb-5">{{$t('reg_until')}}:</dt>
                                    <dd class="mb-10 txt-dark font-13 weight-500">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").subtract(1, 'hours').format('D MMM, HH:mm') }} МСК</dd>
                                    <dt class="mb-5">{{$t('teams')}}:</dt>
                                    <dd class="mb-10 txt-dark font-13 weight-500">{{tournament.teams.length}} / 175</dd>
                                    <dt class="mb-5">{{$t('game')}}:</dt>
                                    <dd class="mb-10 txt-dark font-13 weight-500">
                                        <router-link :to="{ name: 'game', params: { gameId: tournament.game.id }}" :title="tournament.game.title">
                                            <img :src="getImageLink(tournament.game.logo_mini)" width="35" :alt="tournament.game.title" />
                                        </router-link>
                                    </dd>
                                </dl>
                            </aside>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-xs-12 mt-20">
                                <p class="text-white">Для учащихся и выпускников общеобразовательных школ и среднеспециальных учебных заведений в возрасте от 14 до 18 лет.</p>
                                <div class="nk-gap-2"></div>
                                <div class="row vertical-gap">

                                    <div class="col-lg-3">
                                        <div class="nk-feature-1">
                                            <h4 class="nk-feature-title text-main-1 mb-0 f1em">1 Этап:</h4>
                                        </div>
                                    </div>

                                    <div class="col-lg-9">
                                        <div class="nk-feature-1">
                                            <div class="nk-feature-cont">
                                                <h3 class="nk-feature-title text-main-1">Внутришкольный</h3>
                                                <p>
                                                    Пройдет с 07 по 11 августа 2018 года.<br>
                                                    На этом этапе опрелятся Чемпионы Школ.<br>
                                                    В следующий этап от школы выходит только одна команда.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="nk-gap-2"></div>

                                <div class="row vertical-gap">

                                    <div class="col-lg-3">
                                        <div class="nk-feature-1">
                                            <h4 class="nk-feature-title text-main-1 mb-0 f1em">2 Этап:</h4>
                                        </div>
                                    </div>

                                    <div class="col-lg-9">
                                        <div class="nk-feature-1">
                                            <div class="nk-feature-cont">
                                                <h3 class="nk-feature-title text-main-1">РЕГИОНАЛЬНЫЕ КВАЛИФИКАЦИИ</h3>
                                                <p>
                                                    Пройдет с 12 августа по 19 августа 2018 года.<br>
                                                    Чемпионы школ встретятся в отборочном туре, чтобы определить финалистов, которые дальше продожат борьбу за звание Чемпиона России.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="nk-gap-2"></div>

                                <div class="row vertical-gap">

                                    <div class="col-lg-3">
                                        <div class="nk-feature-1">
                                            <h4 class="nk-feature-title text-main-1 mb-0 f1em">3 Этап:</h4>
                                        </div>
                                    </div>

                                    <div class="col-lg-9">
                                        <div class="nk-feature-1">
                                            <div class="nk-feature-cont">
                                                <h3 class="nk-feature-title text-main-1">Всероссийский Финал</h3>
                                                <p>
                                                    Финал пройдет с 29 по 31 августа 2018 года.<br>
                                                    Победителя узнает вся страна!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nk-gap"></div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="tabs-1-2">
                        <div class="nk-gap"></div>
                        <table class="nk-table" v-if="tournament!=null && tournament.teams!==null && tournament.teams.length>0">
                            <tbody>
                            <tr>
                                <th>{{$t('title')}}</th>
                                <th>{{$t('region')}}</th>
                                <th>{{$t('players')}}</th>
                                <th>{{$t('game')}}</th>
                                <th>{{$t('count_matches')}}</th>
                                <th>{{$t('count_wins')}}</th>
                                <th>{{$t('victory_rate')}}</th>
                            </tr>
                            <tr v-for="team in tournament.teams">
                                <td>
                                    <router-link  :to="{ name: 'team', params: { id: team.id }}" class="vm-title">
                                        <img :src="getImageLink(team.image, 'avatar_team')" class="w-50px mr-10" :alt="team.title" />
                                        <span>{{ team.title}}</span>
                                    </router-link>
                                </td>
                                <td>
                                    <template v-if="team.institution_id>0">
                                        {{team.institution.location.parent.title}},
                                        {{team.institution.location.title}}
                                    </template>
                                </td>
                                <td class="text-center"><router-link  :to="{ name: 'team.detail.players', params: { slug: team.slug }}">{{ team.users.length}}</router-link> / {{ team.quantity}}</td>
                                <td class="text-center" v-if="team.game!==null">
                                    <router-link :to="{ name: 'game', params: { gameId: tournament.game.id }}" :title="tournament.game.title">
                                        <img :src="getImageLink(tournament.game.logo_mini)" width="35" :alt="tournament.game.title" />
                                    </router-link>
                                </td>
                                <td class="text-center" v-else></td>

                                <td class="text-center">{{team.count_fights}}</td>
                                <td class="text-center">{{team.count_wins}}</td>
                                <td class="text-center" v-if="team.count_fights>0">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</td>
                                <td class="text-center" v-else>0%</td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination"></pagination>
                        <div class="nk-gap"></div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="tabs-1-3">
                        <div class="nk-gap"></div>
                        <match-list :filter="match_filter"></match-list>
                        <div class="nk-gap"></div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="tabs-1-4">
                        <div class="nk-gap"></div>
                        <div class="row mt-30">
                            <div class="col-lg-3 text-center">
                                <div class="text-white mb-10">Восточная конференция:</div>
                                <div v-for="team in tournament.teams" v-if="groups[0].teams.indexOf(team.id)>-1" class="team-bracket">
                                    <router-link  :to="{ name: 'team', params: { id: team.id }}" class="vm-title text-left">
                                        <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image w-25px" :alt="team.title" />
                                        <span class="ml-10">{{team.title}}</span>
                                    </router-link>
                                </div>
                                <div class="mt-40">&nbsp;</div>
                                <div class="text-white mb-10">Западная конференция:</div>
                                <div v-for="team in tournament.teams" v-if="groups[1].teams.indexOf(team.id)>-1" class="team-bracket">
                                    <router-link  :to="{ name: 'team', params: { id: team.id }}" class="vm-title text-left">
                                        <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image w-25px" :alt="team.title" />
                                        <span class="ml-10">{{team.title}}</span>
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-lg-3 text-center">
                                <div class="mt-70">&nbsp;</div>

                                <div class="text-white mb-10">Полуфинал 1:</div>
                                <div v-for="team in tournament.teams" v-if="[2,109].includes(team.id)" class="team-bracket">
                                    <router-link  :to="{ name: 'team', params: { id: team.id }}" class="vm-title text-left">
                                        <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image w-25px" :alt="team.title" />
                                        <span class="ml-10">{{team.title}}</span>
                                    </router-link>
                                </div>

                                <div class="mt-100">&nbsp;</div>
                                <div class="mt-100">&nbsp;</div>

                                <div class="text-white mb-10">Полуфинал 2:</div>
                                <div v-for="team in tournament.teams" v-if="[146,110].includes(team.id)" class="team-bracket">
                                    <router-link  :to="{ name: 'team', params: { id: team.id }}" class="vm-title text-left">
                                        <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image w-25px" :alt="team.title" />
                                        <span class="ml-10">{{team.title}}</span>
                                    </router-link>
                                </div>

                            </div>
                            <div class="col-lg-3 text-center">
                                <div class="mt-100">&nbsp;</div>
                                <div class="mt-100">&nbsp;</div>
                                <div class="mt-10">&nbsp;</div>

                                <div class="text-white mb-10">ФИНАЛ:</div>
                                <div v-for="team in tournament.teams" v-if="[2,110].includes(team.id)" class="team-bracket">
                                    <router-link  :to="{ name: 'team', params: { id: team.id }}" class="vm-title text-left">
                                        <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image w-25px" :alt="team.title" />
                                        <span class="ml-10">{{team.title}}</span>
                                    </router-link>
                                </div>

                                <div class="mt-100">&nbsp;</div>
                                <div class="mt-100">&nbsp;</div>
                                <div class="mt-50">&nbsp;</div>
                                <div class="text-white mb-10">Матч за 3-е:</div>
                                <div v-for="team in tournament.teams" v-if="[109,146].includes(team.id)" class="team-bracket">
                                    <router-link  :to="{ name: 'team', params: { id: team.id }}" class="vm-title text-left">
                                        <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image w-25px" :alt="team.title" />
                                        <span class="ml-10">{{team.title}}</span>
                                    </router-link>
                                </div>

                            </div>
                            <div class="col-lg-3 text-center">
                                <div class="mt-100">&nbsp;</div>
                                <div class="mt-100">&nbsp;</div>
                                <div class="mt-70">&nbsp;</div>
                                <div v-for="team in tournament.teams" v-if="[2].includes(team.id)" class="team-bracket">
                                    <router-link  :to="{ name: 'team', params: { id: team.id }}" class="vm-title text-left">
                                        <img :src="getImageLink(team.image, 'avatar_team')" class="img-responsive team-image w-25px" :alt="team.title" />
                                        <span class="ml-10">{{team.title}}</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div role="tabpanel" class="tab-pane fade" id="tabs-1-5">
                        <div class="nk-gap"></div>
                        <div class="row mt-30">
                            <div class="col-lg-12 text-center">
                                <img src="/images/banner_asus.png" class="w-100">
                            </div>
                        </div>
                        <div class="row mt-30">
                            <div class="col-lg-12 text-center">
                                <img src="/images/rekl_8.png" class="w-100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'
    import { loadMessages } from '~/plugins/i18n'
    import Vue from 'vue'
    import MatchList from "../../components/MatchList";

    export default {
        components: {MatchList},
        metaInfo () {
            return {
                title: this.title,
            }
        },
        computed: {

            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
                locale: 'lang/locale'
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
                fights: null,
                status_list: [
                    {id:0, title: 'Все'},
                    {id:1, title: 'Прошедшие'},
                    {id:2, title: "Онлайн"},
                    {id:3, title: "Предстоящие"}
                ],
                match_filter: {'tournament_id': this.$route.params.id},
                status_id: null,
                success: false,
                error: false,
                response: null,
                groups: [
                    {teams: [146, 131, 181, 2, 73], title: "Восточная конференция"},
                    {teams: [252, 167, 109, 110, 220], title: "Западная конференция"}
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

                } catch (e) {
                    this.errors.push(e);
                }
            },
            async getTournamentTeams()
            {
                try {
                    var query = this.ArrayToUrl({
                        '_with' : 'fights,users,institution.location,institution.location.parent',
                    });
                    const response = await axios.get('/api/tournaments/'+this.$route.params.id+"/teams?"+query);
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
            checkRigisterStart()
            {
                return this.moment.utc().isAfter(this.tournament.register_start);
            },
            checkRigisterEnd()
            {
                return this.moment.utc().isBefore(this.moment(this.tournament.start_at).subtract(1, 'hours'));
            },
            checkRegistered(value)
            {
                return this.teamsInTournament.indexOf(value) > -1 ? true : false;
            },
            checkUpcoming(start_at)
            {
                var d1 = new Date(start_at);
                var d2 = new Date();
                if(d1.getTime()-d2.getTime()>0)
                    return true;

                return false;
            }
        }
    }
</script>