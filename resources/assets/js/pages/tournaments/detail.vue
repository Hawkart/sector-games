<template>
    <div>
        <card :title="tournament.title" v-if="tournament!=null">

            <div class="nk-tabs">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#tabs-1-1" role="tab" data-toggle="tab">Лобби</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-5" role="tab" data-toggle="tab">Правила</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-2" role="tab" data-toggle="tab">Команды</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-3" role="tab" data-toggle="tab">Матчи</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-4" role="tab" data-toggle="tab" @click="initBrackets()">Сетка</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-6" role="tab" data-toggle="tab">Призы</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tabs-1-7" role="tab" data-toggle="tab" v-if="tournament.status==3">Победители</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade show active" id="tabs-1-1">
                        <div class="nk-gap"></div>
                        <div class="row vertical-gap">
                            <div class="col-md-4 col-xs-6">
                                <img :src="getImageLink(tournament.image, 'avatar_team')" class="w-100">
                            </div>
                            <aside class="col-lg-8 nk-sidebar-sticky-parent">

                                <div class="row">
                                    <div class="col-lg-6">
                                        <dl>
                                            <dt class="mb-5">{{$t('tournament_start_time')}}:</dt>
                                            <dd class="mb-15 txt-dark font-13 weight-500">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").format('D MMM, HH:mm') }} МСК</dd>
                                            <dt class="mb-5">{{$t('reg_until')}}:</dt>
                                            <dd class="mb-10 txt-dark font-13 weight-500">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").subtract(1, 'hours').format('D MMM, HH:mm') }} МСК</dd>
                                        </dl>
                                    </div>
                                    <div class="col-lg-6">
                                        <dl>
                                            <dt class="mb-5">{{$t('teams')}}:</dt>
                                            <dd class="mb-10 txt-dark font-13 weight-500">{{tournament.teams.length}} / {{ tournament.count_teams}}</dd>
                                            <dt class="mb-5">{{$t('game')}}:</dt>
                                            <dd class="mb-10 txt-dark font-13 weight-500">
                                                <router-link :to="{ name: 'game', params: { gameId: tournament.game.id }}" :title="tournament.game.title">
                                                    <img :src="getImageLink(tournament.game.logo_mini)" width="35" :alt="tournament.game.title" />
                                                </router-link>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12 text-white" v-html="tournament.description">
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="tabs-1-2">
                        <div class="nk-gap"></div>
                        <table class="nk-table" v-if="tournament!=null && tournament.teams!==null && tournament.teams.length>0">
                            <tbody>
                            <tr>
                                <th>{{$t('title')}}</th>
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
                        <brackets></brackets>
                    </div>

                    <div role="tabpanel" class="tab-pane fade" id="tabs-1-5">
                        <div class="nk-gap"></div>
                        <div class="row mt-30">
                            <div class="col-lg-12 text-white" v-html="tournament.rules">
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="tabs-1-6">
                        <div class="nk-gap"></div>
                        <div class="row mt-30">
                            <div class="col-lg-12 text-white" v-html="tournament.prizes">
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="tabs-1-7" v-if="tournament.status==3">
                        <div class="nk-gap"></div>
                        <div class="row mt-30">
                            <div class="col-lg-12 text-white">
                                <div v-for="(winner, index) in winners" :key="'winers'-winner.id">
                                    {{index+1}} - {{winner.title}}
                                </div>
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
    import Brackets from "../../components/Brackets";

    export default {
        components: {Brackets, MatchList},
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
                        if(team.length>0)
                            teamsInTournament.push(team.id);
                    });
                }

                return teamsInTournament;
            }
        },
        mounted() {
            //this.getTournamentBrackets();
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
                winners: []
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
                    /*var winners_part = this.tournament.winners_part.split(",");
                    var prize_pool = parseInt(this.tournament.prize_pool);
                    var prizes = [];

                    winners_part.forEach(function(part)
                    {
                        prizes.push(parseInt(part)*prize_pool/100);
                    });

                    this.tournament.prizes = prizes;*/
                    this.title = this.tournament.title;
                    this.$meta().refresh();

                    this.getTournamentTeams();
                    //this.getTournamentBrackets();

                    if(this.tournament.status==3)
                        this.getTournamentWinners();

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
            async getTournamentWinners()
            {
                try {
                    const response = await axios.get('/api/tournaments/'+this.$route.params.id+"/winners");
                    this.$set(this, 'winners', response.data);
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
            },
            initBrackets()
            {
                Vue.nextTick(() => {
                    setTimeout(() => {
                        this.slickBracketInit();
                    }, 500);
                });
            }
        }
    }
</script>