<template>
    <div>

        <div class="row mt-20" v-if="!authenticated">
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
                                    <select v-model="country_id" name="country_id" class='form-control' data-style="form-control btn-default btn-outline" id="country_list">
                                        <option v-for="country in countries" v-bind:value="country.id" v-bind:data-image="country.flag">
                                            {{ country.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select v-model="free_player" name="free_player" class='form-control' data-style="form-control btn-default btn-outline" id="status_list">
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
        <card title="Players">
            <div class="row" v-if="players!==null">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <table class="nk-table">
                        <thead>

                        </thead>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Team</th>
                                <th>Total matches</th>
                                <th>Wins</th>
                                <th>Victory rate</th>
                                <th>Status</th>
                            </tr>
                            <tr v-for="player in players">
                                <td>
                                    <router-link  :to="{ name: 'player', params: { id: player.id }}"  class="vm-title">
                                        <img :src="getImageLink(player.avatar)" class="img-responsive team-image" />
                                        <span>{{ player.nickname}}</span>
                                    </router-link>
                                </td>
                                <td class="text-center"><span v-if="player.country_id>0 && player.country!==null"><img :src="'/images/flags/'+player.country.flag" :title="player.country.full_name" /></span><span v-else> - </span></td>
                                <td class="text-center"><span v-if="player.team_id>0 && player.team!==null">

                                    <router-link  :to="{ name: 'team.detail', params: {slug : player.team.slug }}">
                                        <img :src="getImageLink(player.team.image)" class="w-45" v-if="player.team.image!==null"/>
                                        <span v-if="player.team.image==null">{{player.team.title}}</span>
                                    </router-link>

                                </span></td>
                                <td class="text-center">{{player.fights_count}}</td>
                                <td class="text-center">{{player.wins}}</td>
                                <td class="text-center" v-if="player.fights_count>0">{{ Number((player.wins/player.fights_count*100).toFixed(2))}}%</td>
                                <td class="text-center" v-else>0</td>
                                <td class="text-center">
                                    <span v-if="player.free_player"><span class="label label-default capitalize-font inline-block">Free</span></span>
                                    <span v-else-if="player.team_id>0 && player.id==player.team.capt_id"><span class="label label-primary capitalize-font inline-block">Captain</span></span>
                                    <span v-else><span class="label label-success capitalize-font inline-block">In team</span></span>

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
    
    export default {
        metaInfo: {
            title: 'Players',
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
            Vue.nextTick(function() {

                $("#status_list").select2({
                    placeholder: "Select status",
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

                $("#game_list").select2({
                    placeholder: "Select game",
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
                    placeholder: "Select country",
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
                };
            });
        },
        data : function() {
            return {
                players: [],
                statuses: [
                    {id:0, title: 'in team'},
                    {id:1, title: 'free'}
                ],
                games: [],
                countries: [],
                game_id: this.$route.query.game_id || '',
                country_id: this.$route.query.country_id || '',
                free_player: this.$route.query.free_player || '',
                pagination: []
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
                }
                
                var query = this.UrlParamsMerge(queryStartParams);
                
                axios.get('/api/users/?'+query).then((response) => {

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
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getVueItems();
            }
        }
    }
</script>