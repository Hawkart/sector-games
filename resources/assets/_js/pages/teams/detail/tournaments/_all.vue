<template>
    <div>
        <card title="Tournaments">
            <div class="table-wrap" v-if="tournaments!=null && tournaments.length>0">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered mb-5">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Game</th>
                            <th>Buy in, SPA</th>
                            <th>Prize pool, SPA</th>
                            <th>Start time</th>
                            <th>Teams</th>
                            <th>Place</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="tournament in tournaments">
                            <td>
                                <router-link  :to="{ name: 'tournament.detail', params: { id: tournament.id }}"  class="vm-title">
                                    <img :src="getImageLink(tournament.image, 'avatar_team')" class="img-responsive team-image" :alt="tournament.title" v-if="tournament.image!=null" />
                                    <i class="ti-cup mr-20" v-else></i>
                                    <span>{{ tournament.title}}</span>
                                </router-link>
                            </td>
                            <td class="text-center">
                                <router-link :to="{ name: 'game', params: { gameId: tournament.game.id }}" :title="tournament.game.title">
                                    <img :src="getImageLink(tournament.game.logo_mini)" width="35" :alt="tournament.game.title" />
                                </router-link>
                            </td>
                            <td class="text-center" v-if="tournament.buy_in>0">{{ tournament.buy_in}}</td>
                            <td class="text-center" v-else>Free</td>
                            <td class="text-center">{{ tournament.prize_pool}}</td>
                            <td class="text-center">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do, h:mma')}}</td>
                            <td class="text-center">{{tournament.teams.length}} / {{ tournament.count_teams}}</td>
                            <th class="text-center">{{ getPlace(team, tournament.teams)}}</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-else>
                <p class="txt-danger">No tournaments found.</p>
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
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },
        data() {
            return {
                success: false,
                error: false,
                team: null,
                response: null,
                tournaments: [],
                pagination: []
            }
        },
        mounted() {
            this.getTeam();
        },
        methods: {
            getTeamTournaments()
            {
                var queryStartParams = {
                    'page' : 1,
                    '_limit' : 12,
                    "_sort" : '-start_at',
                    "_with" : 'game,teams',
                };

                var query = this.UrlParamsMerge(queryStartParams);

                axios.get('/api/teams/'+this.team.id+'/tournaments?'+query).then((response) => {
                    var tournaments = response.data.data;
                    var _self = this;

                    tournaments.forEach(function(tournament)
                    {
                        tournament.start_at = _self.dateConvertUTC(tournament.start_at, -1);
                    });

                    this.$set(this, 'tournaments', tournaments);

                    delete response.data.data;
                    this.pagination = response.data;
                });
            },
            getPlace(t, teams)
            {
                var place = -1;
                if(teams.length>0)
                {
                    teams.forEach(function(team)
                    {
                        if(t.id==team.team_id)
                        {
                            place = team.place;
                        }
                    })
                }

                return place;
            },
            getTeam()
            {
                axios.get('/api/teams/'+this.$route.params.slug).then((response) => {
                    this.$set(this, 'team', response.data);
                    this.getTeamTournaments();
                });
            }
        },
    }
</script>