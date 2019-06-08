<template>
    <div>
    
        <div class="row mt-20" v-if="fight!==null">
            <div class="col-lg-12 col-md-12 col-xs-12" v-if="fight.extern_statistic!=null">
            
                <div class="panel panel-default card-view">
    				<div class="panel-wrapper collapse in">
                        
                        <div class="panel-body sm-data-box-1">
                            <div class="stat-match-info">
                                <div class="txt-success text-center cus-sat-stat">{{fight.extern_statistic.radiant_score}}</div>
                                <div class="ml-20 mr-20">
                                    <span class="uppercase-font font-15 block text-center txt-dark">All Draft</span>
                                    <span class="uppercase-font font-24 block text-center txt-dark">
                                        <div>
                                            <span>{{moment.utc(fight.extern_statistic.duration*1000).format('mm:ss')}}</span>
                                        </div>
                                    </span>
                                    <span class="block mt-5">Ended {{ moment.unix(fight.extern_statistic.start_time).utc().fromNow()}}</span>
                                </div>
                                <div class="txt-danger text-center cus-sat-stat">{{fight.extern_statistic.dire_score}}</div>
                            </div>
                            
    					</div>
    				</div>
    			</div>
            </div>

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <card :title="fight.title">

                    <div class="row mb-20">
                        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                            <iframe src="//playercdn.cdnvideo.ru/aloha/players/spartagames_player.html" frameborder="0" width="100%" height="360" scrolling="no" style="overflow:hidden;" allowfullscreen> 
                            </iframe>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        
                            <div class="alert alert-danger" v-if="error">
                                <p>{{ response.error }}</p>
                            </div>
                            <form autocomplete="off" v-on:submit="matchExSave" v-if="fight.extern_match_id==null && fight.status!=2 && fight.status!=3">
                                <div class="form-group">
                                    <label for="extern_match_id">Fill extern match ID in Steam</label>
                                    <input type="text" id="extern_match_id" class="form-control" v-model="extern_match_id" required>
                                </div>
                                <div class="form-group row">
                                    <div class="col-xs-6 col-sm-6">
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </form>
                            
                            <dl v-else>
							  <dt class="mb-10 txt-dark">Extern match ID:</dt>
							  <dd class="mb-10">{{fight.extern_match_id}}</dd>
							</dl>
                            
                            <dl v-if="fight.status==2" class="mt-30">
							  <dt class="mb-10 txt-dark">Cancel reason:</dt>
							  <dd class="mb-10 txt-danger">{{fight.cancel_text}}</dd>
							</dl>
                            
                        </div>
                    </div>
                    
                    <div class="table-wrap">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th>Game</th>
                                        <th>Teams</th>
                                        <th>Datetime</th>
                                        <!--<th>Bet</th>-->
                                        <th>Status</th>
                                        <th>Winner</th>
                                    </tr>
                                </thead>
            				    <tbody>
                                    <tr>
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
                </card>	
    		</div>
        </div>        
    </div>    
</template>

<script> 
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    
    export default {
        metaInfo () {
            return {
                title: this.title,
            }
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            }),
        },
        mounted() {
            this.getFight();
            //this.getStreams();
        },
        data : function() {
            return {
                title: 'Detail fight',
                fight: null,
                extern_match_id: null,
                players: [],
                teams: [],
                streams: [],
                success: false,
                error: false,
                response: null
            }
        },
        methods : {
            getFight: function()
            {
                var query = this.ArrayToUrl({
                    '_with' : 'game,invitations.team,invitations.team.users,winner'
                });
                
                axios.get('/api/fights/'+this.$route.params.id+"?"+query).then((response) => {
                    this.$set(this, 'fight', response.data);
                    
                    this.title = this.fight.title;
                    this.$meta().refresh();
                });
            },
            getStreams: function()
            {
                var query = this.ArrayToUrl({
                    'team_id' : (this.user!=null) ? this.user.team_id : null,
                    'fight_d' : this.$route.params.id
                });
                
                axios.get('/api/streams/?'+query).then((response) => {
                    this.$set(this, 'streams', response.data);
                });
            },
            matchExSave(event)
            {
                event.preventDefault();
                axios.put('/api/fights/'+this.fight.id, {
                    extern_match_id: this.extern_match_id
                }).then((response) => {
                    this.error = false
                    this.$set(this.fight, 'extern_match_id', this.extern_match_id);
                }).catch(error => {
                    
                    this.response = error.response.data;                
                    this.error = true
                    
                });
            }
        }
    }
</script>