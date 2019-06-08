<template>
    <div>
        <card :title="$t('tournaments')">
            <table class="nk-table" v-if="tournaments!=null && tournaments.length>0">
                <tbody>
					<tr>
						<th>{{$t('title')}}</th>
						<th>{{$t('game')}}</th>
						<th>{{$t('start_time')}}</th>
						<th>{{$t('register_time')}}</th>
						<th>{{$t('teams')}}</th>
					</tr>
					<tr v-for="tournament in tournaments">
						<td>
							<router-link  :to="{ name: 'tournament.detail', params: { id: tournament.id }}"  class="vm-title">
								<img :src="getImageLink(tournament.image, 'avatar_team')" class="w-50px mr-10" :alt="tournament.title" v-if="tournament.image!=null" />
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
						<td class="text-center">{{moment(tournament.start_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do, h:mma')}}</td>
						<td class="text-center">{{tournament.teams.length}} / {{ tournament.count_teams}}</td>
					</tr>
                </tbody>
            </table>
			
			<p v-else class="text-white">
				{{$t('no_tournaments')}}
			</p>

            <pagination :pagination="pagination"></pagination>
        </card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'

    export default {
        metaInfo () {
            return { title: this.$t('tournaments') }
        },
        data() {
            return {
                tournaments: [],
                pagination: []
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
            })
        },
        mounted() {
            this.getTournaments();
        },
        methods:
            {
                getTournaments()
                {
					var dnow = new Date();
					
                    var queryStartParams = {
                        "status" : 1,
						"register_start-gt" : this.dateConvertUTC(dnow.toLocaleDateString(), -1),
                        'page' : 1,
                        '_limit' : 12,
                        "_sort" : 'start_at',
                        "_with" : 'teams,game'
                    };

                    var query = this.UrlParamsMerge(queryStartParams);

                    axios.get('/api/tournaments?'+query).then((response) => {
                        var tournaments = response.data.data;
                        var _self = this;
						
						if(tournaments.length>0)
						{
							tournaments.forEach(function(tournament)
							{
								tournament.start_at = _self.dateConvertUTC(tournament.start_at, -1);
							});
						}
                        
                        this.$set(this, 'tournaments', tournaments);

                        delete response.data.data;
                        this.pagination = response.data;
                    });
                }
            },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getTournaments();
            }
        }
    }
</script>