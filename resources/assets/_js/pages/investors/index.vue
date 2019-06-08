<template>
    <div>
        <card title="Investors" class="mt-20">

            <div class="row" v-if="investors!==null">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="table-wrap">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered mb-5">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Total amount of investments in Teams</th>
                                    <th>Teams invested</th>
                                    <th>Free amount</th>
                                    <th>Max win</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="player in investors">
                                    <td>
                                        <router-link  :to="{ name: 'investor', params: { id: player.id }}"  class="vm-title">
                                            <img :src="getImageLink(player.avatar)" class="img-responsive team-image" />
                                            <span>{{ player.nickname}}</span>
                                        </router-link>
                                    </td>
                                    <td class="text-center"><span v-if="player.country_id>0 && player.country!==null"><img :src="'/images/flags/'+player.country.flag" :title="player.country.full_name" /></span><span v-else> - </span></td>
                                    <td class="text-center">0</td>
                                    <td class="text-center">0</td>
                                    <td class="text-center">0</td>
                                    <td class="text-center">0</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

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
            title: 'Investors',
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
        },
        data : function() {
            return {
                investors: [],
                queryString: '',
                pagination: []
            }
        },
        methods : {
            getVueItems: function(){

                var queryStartParams = {
                    'page' : 1,
                    '_limit' : 12,
                    'type' : 'investor',
                    '_with' : 'team,country,team.fights',
                    "active" : 1,
                    "_sort" : '-id'
                };

                /*if(this.authenticated && user.type=='player')
                {
                    queryStartParams['game_id'] = this.user.game_id;
                }*/

                var query = this.UrlParamsMerge(queryStartParams);

                axios.get('/api/users/?'+query).then((response) => {
                    this.$set(this, 'investors', response.data.data);

                    delete response.data.data;
                    this.pagination = response.data;
                });
            }
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getVueItems();
            }
        }
    }
</script>