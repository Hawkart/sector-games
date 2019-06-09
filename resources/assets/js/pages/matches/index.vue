<template>
    <card :title="$t('matches')">

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

        <div class="row" v-if="fights!=null && fights.length>0">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div class="nk-match" v-for="fight in fights">
                    <div class="nk-match-team-left">

                        <router-link  :to="{ name: 'team', params: { id: fight.invitations[0].team.id }}">
                            <span class="nk-match-team-logo">
                                <img :src="getImageLink(fight.invitations[0].team.image, 'avatar_team')" class="w-64px mr-10"/>
                            </span>
                            <span class="nk-match-team-name">
                                {{fight.invitations[0].team.institution.title}}, {{fight.invitations[0].team.institution.location.title}},<br/>
                                {{ fight.invitations[0].team.title}}
                            </span>
                        </router-link>

                    </div>
                    <div class="nk-match-status">
                        <router-link  :to="{ name: 'match', params: { id: fight.id }}">
                            <span class="nk-match-status-vs">VS (bo3)</span>
                            <span class="nk-match-status-date">{{ moment.utc(fight.start_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do, HH:mm') }} МСК</span>
                            <span class="nk-match-score">
                                <template v-if="checkUpcoming(fight.start_at)">{{$t('upcoming')}}</template>
                                <template v-else-if="fight.winner_id>0">
                                    <template v-if="parseInt(fight.result[0])>parseInt(fight.result[1]) && fight.invitations[0].team.id==fight.winner_id">
                                        {{fight.result[0]}} : {{fight.result[1]}}
                                    </template>
                                    <template v-else-if="parseInt(fight.result[1])>parseInt(fight.result[0]) && fight.invitations[1].team.id==fight.winner_id">
                                        {{fight.result[0]}} : {{fight.result[1]}}
                                    </template>
                                    <template v-else>
                                        {{fight.result[1]}} : {{fight.result[0]}}
                                    </template>
                                </template>
                                <template v-else>{{$t('online')}}</template>
                            </span>
                        </router-link>
                    </div>
                    <div class="nk-match-team-right">
                        <router-link  :to="{ name: 'team', params: { id: fight.invitations[1].team.id }}">
                            <span class="nk-match-team-name">
                                {{fight.invitations[1].team.institution.title}}, {{fight.invitations[1].team.institution.location.title}},<br/>
                                {{ fight.invitations[1].team.title}}
                            </span>
                            <span class="nk-match-team-logo">
                                <img :src="getImageLink(fight.invitations[1].team.image, 'avatar_team')" class="w-64px ml-10"/>
                            </span>
                        </router-link>
                    </div>
                </div>
                <pagination :pagination="pagination"></pagination>
            </div>
        </div>
        <div v-else>
            <p class="txt-danger">{{$t('no_results')}}</p>
        </div>
    </card>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'
    import { loadMessages } from '~/plugins/i18n'
    import Vue from 'vue'

    export default {
        metaInfo () {
            return { title: this.$t('players') }
        },

        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
                locale: 'lang/locale'
            })
        },

        data() {
            return {
                fights: [],
                status_list: [
                    {id:0, title: 'Все'},
                    {id:1, title: 'Прошедшие'},
                    {id:2, title: "Онлайн"},
                    {id:3, title: "Предстоящие"}
                ],
                status_id: null,
                pagination: []
            }
        },

        mounted() {
            loadMessages(this.locale);
            this.moment.locale(this.locale);

            //if(this.authenticated)
                this.getFights();

            var _self = this;
            Vue.nextTick(function() {
                $("#status_list").select2({
                    placeholder: "Статус матча"
                }).on("change", function (e) {
                    _self.status_id = $(e.currentTarget).find("option:selected").val();
                });
            });
        },
        methods:
            {
                getFights()
                {
                    var queryStartParams = {
                        //'status' : 1,
                        //"tournament_id" : null,
                        'page' : 1,
                        '_limit' : 12,
                        "_sort" : '-start_at',
                        "_with" : 'invitations.team,invitations.team.institution,invitations.team.institution.location,winner,game'
                    };

                    if(this.authenticated && this.user.role_id!=1)
                    {
                        var aroute = '/api/teams/'+this.user.team_id+'/fights';
                        if(this.user.type=='referee')
                        {
                            queryStartParams['judge_id'] = this.user.id;
                            aroute = '/api/fights';
                        }
                    }else{
                        var aroute = '/api/fights';
                    }

                    if(this.status_id==1)
                    {
                        queryStartParams['winner_id-gt'] = 0;
                    }else if(this.status_id==2){
                        queryStartParams['winner_id'] = null;
                        queryStartParams['start_at-st'] = this.moment.utc().format();
                    }else if(this.status_id==3){
                        queryStartParams['start_at-gt'] = this.moment.utc().format();
                    }

                    var query = this.UrlParamsMerge(queryStartParams);

                    axios.get(aroute+'?'+query).then((response) => {
                        var fights = response.data.data;
                        var _self = this;

                        fights.forEach(function(fight)
                        {
                            fight.start_at = _self.dateConvertUTC(fight.start_at, -1);
                        });

                        this.$set(this, 'fights', fights);

                        delete response.data.data;
                        this.pagination = response.data;
                    });
                },
                checkUpcoming(start_at)
                {
                    var d1 = new Date(start_at);
                    var d2 = new Date();
                    if(d1.getTime()-d2.getTime()>0)
                        return true;

                    return false;
                }
            },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getFights();
            },
            status_id: function(val, oldVal)
            {
                this.getFights();
            }
        }
    }
</script>