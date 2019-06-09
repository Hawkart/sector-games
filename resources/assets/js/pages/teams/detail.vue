<template>
    <div>
        <div class="row"  v-if="team!==null">
            <div class="col-lg-12">
                <h3 class="nk-decorated-h-3"><span>{{team.title}}</span></h3>
            </div>
        </div>
        <div class="row vertical-gap">
            <aside class="col-lg-3 nk-sidebar-sticky-parent">
                <div class="nk-box-1 bg-dark-2 text-center" v-if="team!==null">
                    <img :src="getImageLink(team.image, 'avatar_team')" class="w-100">
                    <div class="nk-gap"></div>

                    <button v-if="!authenticated || (team.quantity>team.users.length && authenticated && user.id!=team.capt_id && user.type=='player' && user.active)" @click="joinTeam(team.id)" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em w-100">
                        {{$t('join_team')}}
                    </button>

                    <table class="nk-team-table">
                        <tbody>

                        <tr v-if="team.institution_id>0">
                            <td colspan="2">
                                <span class="h6 text-left">{{team.institution.location.parent.title}}, {{team.institution.location.title}}</span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <strong class="h6">{{$t('count_matches')}}</strong>
                            </td>
                            <td>
                                <strong class="h5">{{team.count_fights}}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong class="h6">{{$t('count_wins')}}</strong>
                            </td>
                            <td>
                                <strong class="h5">{{team.count_wins}}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong class="h6">{{$t('victory_rate')}}</strong>
                            </td>
                            <td>
                                <strong class="h5" v-if="team.count_fights>0">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</strong>
                                <strong class="h5" v-else>0%</strong>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </aside>
            <div class="col-lg-9">
                <card :title="$t('players')">
                    <table class="nk-table" v-if="team!==null && team.users!==null">
                        <tbody>
                        <tr>
                            <th>{{$t('name')}}</th>
                            <th>{{$t('victory_rate')}}</th>
                            <th>{{$t('status')}}</th>
                        </tr>
                        <tr v-for="player in team.users">
                            <td>
                                <router-link  :to="{ name: 'player', params: { id: player.id }}"  class="vm-title">
                                    <img :src="getImageLink(player.avatar)" class="w-50px mr-10" />
                                    <span>{{ player.nickname}}</span>
                                </router-link>
                            </td>
                            <td class="text-center" v-if="team.count_fights>0">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</td>
                            <td class="text-center" v-else>0%</td>
                            <td class="text-center">
                                <span v-if="player.free_player"><span class="text-warning">{{$t('free')}}</span></span>
                                <span v-else-if="player.team_id>0 && player.id==team.capt_id"><span class="text-info">{{$t('captain')}}</span></span>
                                <span v-else><span class="text-success">{{$t('in_team')}}</span></span>
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
                title: 'Detail page of team',
                team: null,
                response: null,
                invitations: null
            }
        },
        mounted() {
            this.getTeam();
        },
        methods: {
            getTeam()
            {
                var query = this.ArrayToUrl({
                    "_with" : 'game,users,institution.location,institution.location.parent'
                });
                axios.get('/api/teams/'+this.$route.params.id+"?"+query).then((response) => {
                    this.$set(this, 'team', response.data);
                    this.title = "Team: "+this.team.title;
                    this.$meta().refresh();
                });
            },
            getInvitations()
            {
                var query = this.ArrayToUrl({
                    'team_id' : this.$route.params.id,
                    'status' : 1,
                    "_with" : 'user,team'
                });
                axios.get('/api/team_user?'+query).then((response) => {
                    this.$set(this, 'invitations', response.data);
                });
            },
            joinTeam(team_id)
            {
                if(!this.authenticated)
                {
                    this.$router.push({ name: 'login' });
                    return;
                }

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
            }
        },
    }
</script>

<style>
    .nk-team-table{
        width: 100%;
    }
    .nk-team-table > tbody > tr + tr > td {
        border-top: 1px dotted rgba(255, 255, 255, 0.2);
    }

    .nk-team-table > tbody > tr > td {
        padding: 20px 10px;
    }
    .f07em{
        font-size: .7rem !important;
    }
</style>