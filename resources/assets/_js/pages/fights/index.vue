<template>
    <card title="Trainings" class="mt-20">
        <div class="table-wrap" v-if="fights!=null && fights.length>0">
            <div class="table-responsive">
                <table class="table table-hover table-bordered mb-0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Game</th>
                            <th>Teams</th>
                            <th>Datetime</th>
                            <!--<th>Bet</th>-->
                            <th>Status</th>
                            <th>Winner</th>
                        </tr>
                    </thead>
				    <tbody>
                        <tr v-for="fight in fights">
                            <td>
                                <router-link  :to="{ name: 'fight', params: { id: fight.id }}">        
                                    {{fight.id}}
                                </router-link>
                            </td>
                            <td class="text-center">
                                <router-link :to="{ name: 'game', params: { gameId: fight.game.id }}" :title="fight.game.title">
                                    <img :src="getImageLink(fight.game.logo_mini)" width="35" :alt="fight.game.title" />
                                </router-link>
                            </td>
                            <td class="text-center">
                                
                                <div class="w-45p-inline text-right">
                                    <router-link  :to="{ name: 'team.detail', params: { slug: fight.invitations[0].team.slug }}" class="vm-title">
                                        <span class="mr-20">{{ fight.invitations[0].team.title}}</span>
                                        <img :src="getImageLink(fight.invitations[0].team.image, 'avatar_team')" class="img-responsive team-image" /> 
                                    </router-link>
                                </div>
                                
                                <span class="ml-10 mr-10">VS</span>
                                
                                <div class="w-45p-inline text-left">
                                    <router-link  :to="{ name: 'team.detail', params: { slug: fight.invitations[1].team.slug }}" class="vm-title">
                                        <img :src="getImageLink(fight.invitations[1].team.image, 'avatar_team')" class="img-responsive team-image" /> 
                                        <span>{{ fight.invitations[1].team.title}}</span>
                                    </router-link>
                                </div>
                            </td>
                            <td class="text-center">{{ moment(fight.start_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do, h:mma') }}</td>
                            <!--<td class="text-center">{{fight.bet}}</td>-->
                            <td class="text-center">
                                <span v-if="fight.status==0">
                                    <span class="label label-default capitalize-font inline-block">waiting for </span><br />
                                    <span class="label label-default capitalize-font inline-block">invites answers</span>
                                </span>
                                <span v-if="fight.status==2">
                                    <span class="label label-danger capitalize-font inline-block">canceled</span><!-- <br />{{fight.cancel_text}}-->
                                </span>
                                <span v-if="fight.status==1">
                                    <span class="label label-success capitalize-font inline-block">active</span>
                                </span>
                                <span v-if="fight.status==3">
                                    <span class="label label-primary capitalize-font inline-block">finished</span>
                                </span>
                            </td>
                            <td class="text-center">
                                <div v-if="fight.winner_id>0">
                                    <router-link  :to="{ name: 'team.detail', params: { slug: fight.winner.slug }}" class="vm-title" :title="fight.winner.title">
                                        <img :src="getImageLink(fight.winner.image, 'avatar_team')" class="img-responsive team-image" /> 
                                        <!--<span>{{ fight.winner.title}}</span>-->
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else>
            <p class="txt-danger">No matches found.</p>
        </div>

        <pagination :pagination="pagination"></pagination>
     </card>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'

export default {
    metaInfo: {
        title: 'Matches',
    },
    data() {
        return {
            fights: [],
            pagination: []
        }
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })
    },
    mounted() {
        this.getFights();
    },
    methods: 
    {
        getFights()
        {
            var queryStartParams = {
                //'status' : 1,
                "tournament_id" : null,
                'page' : 1,
                '_limit' : 12,
                "_sort" : '-start_at',
                "_with" : 'invitations.team,winner,game'
            };
            
            if(this.authenticated && this.user.type!='investor')
            {
                queryStartParams['game_id'] = this.user.game_id;
            }
            
            var query = this.UrlParamsMerge(queryStartParams);
                
            axios.get('/api/fights?'+query).then((response) => {
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
        }
    },
    watch: {
        '$route.query'(newPage, oldPage) {
            this.getFights();
        }
    }
}
</script>