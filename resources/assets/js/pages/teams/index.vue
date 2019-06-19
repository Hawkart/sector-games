<template>
    <div>
        <card :title="$t('teams')">

            <template>
                <div class="row">
                    <div class="col-md-12">
                        <card>
                            <div class="form-wrap">
                                <form autocomplete="off" id="filter-form">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <input type="text" v-model="q" @input="debouncedSearch" name="q" class="form-control" :placeholder="$t('search')">
                                        </div>
                                        <div class="col-md-3">
                                            <select v-model="status_id" name="status_id" class='form-control' data-style="form-control btn-default btn-outline" id="status_list">
                                                <option v-for="status in statuses" v-bind:value="status.id">
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

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                                <button v-if="team.quantity>team.users.length && authenticated && user.id!==team.capt_id && user.type=='player' && user.active"
                                        @click="joinTeam(team.id)"
                                        class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white" v-html="$t('join_team')"
                                ></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <p v-else class="text-white">
                        {{$t('no_teams')}}
                    </p>

                    <pagination :pagination="pagination"></pagination>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import Vue from 'vue'
    import swal from 'sweetalert2'
    import debounce from 'lodash/debounce';

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
            this.getVueItems();

            var _self = this;
            Vue.nextTick(function() {
                $("#status_list").select2({
                    placeholder: "Статус"
                }).on("change", function (e) {
                    _self.status_id = $(e.currentTarget).find("option:selected").val();
                });
            });
        },
        data : function() {
            return {
                teams: [],
                games: [],
                countries: [],
                queryString: '',
                pagination: [],
                status_id: -1,
                q: '',
                statuses: [
                    {id: '', title: ''},
                    {id: 0, title: this.$t('status_pending')},
                    {id: 1, title: this.$t('status_accepted')}
                ]
            }
        },
        methods : {
            getVueItems: function()
            {
                var queryStartParams = {
                    'site_id': 2,
                    'page' : 1,
                    '_limit' : 12,
                    '_with' : 'game,fights,users',
                    "_sort" : '-count_wins'
                };

                if(parseInt(this.status_id)==0 || parseInt(this.status_id)==1)
                    queryStartParams['status'] = this.status_id;

                if(this.q.length>2)
                    queryStartParams['_q'] = this.q;

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
            debouncedSearch: debounce(function () {
                this.getVueItems();
            }, 500)
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getVueItems();
            },
            status_id: function(val, oldVal)
            {
                this.getVueItems();
            }
        }
    }
</script>