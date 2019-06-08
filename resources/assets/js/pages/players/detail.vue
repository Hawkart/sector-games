<template>
    <div>
        <div class="row"  v-if="player!==null">
            <div class="col-lg-12">
                <h3 class="nk-decorated-h-3"><span>{{player.name}} [{{player.nickname}}]</span></h3>
            </div>
        </div>
        <div class="row vertical-gap">
            <aside class="col-lg-3 nk-sidebar-sticky-parent">
                <div class="nk-box-1 bg-dark-2 text-center" v-if="player!==null">
                    <img :src="getImageLink(player.avatar, 'avatar_user')" class="w-100">
                    <table class="nk-team-table" v-if="institution!==null && institution.institution!==null">
                        <tbody>
                        <tr>
                            <td>
                                <span class="h6">{{institution.institution.title}}, {{institution.number}} {{institution.char}}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </aside>
            <div class="col-lg-9">
                <card :title="$t('team')" v-if="team!==null">
                    <table class="nk-table">
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
                        <tr>
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
                </card>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'

    export default {
        metaInfo () {
            return {
                title: this.title,
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
            })
        },
        data() {
            return {
                title: 'Player',
                player: null,
                institution: null,
                team: null,
                response: null
            }
        },
        mounted() {
            this.getPlayer();
            this.getUserSchools();
            this.getUserTeam();
        },
        methods: {
            getPlayer()
            {
                var query = this.ArrayToUrl({
                    "type" : 'player'
                });

                axios.get('/api/users/'+this.$route.params.id+"?"+query).then((response) => {
                    this.$set(this, 'player', response.data);

                    this.title = this.player.nickname;
                    this.$meta().refresh();
                });
            },
            getUserSchools()
            {
                axios.get('/api/institution_user?user_id='+this.$route.params.id+'&_with=institution&_sort=-id').then((response) => {
                    if(response.data.length>0)
                        this.$set(this, 'institution', response.data[0]);
                });
            },
            getUserTeam: function(){
                axios.get('/api/users/'+this.$route.params.id+'/team?_with=game,users').then((response) => {
                    this.$set(this, 'team', response.data);
                });
            },
        },
    }
</script>