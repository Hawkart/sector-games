<template>
<div data-sticky-container>
    <div class="row mt-20" v-if="game!==null">
        <div class="col-lg-12 col-md-12 col-xs-12">
            <card pa_0="true">
                <div class="profile-box">
					<div class="profile-cover-pic">
						<div class="profile-image-overlay" v-bind:style="{ 'background-image': 'url(' + getImageLink(game.overlay, 'overlay_game') + ')' }"></div>
                        <!--<div class="profile-image-overlay" v-else  v-bind:style="{ 'background-image': 'url(' + getImageLink(game.images[0]) + ')' }"></div>-->
					</div>
					<div class="profile-info text-center stickyNav" data-margin-top="67" data-sticky-class="sticky">
						
                        <div class="tab-struct custom-tab-1 mt-5 mb-10 weight-600">
							<ul class="nav nav-tabs">
                                <li v-for="tab in tabs" class="nav-item">
                                    <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
                                        {{ tab.name }}
                                    </router-link>
                                </li>
							</ul>
						</div>
                        
                        <div class="profile-img-wrap">
							<img class="inline-block" :src="getImageLink(game.logo)" alt="logo"/>
						</div>
                        <h5 class="profile-title">
                            <span class="font-24 weight-600">{{ game.title }}</span>
                        </h5>
					</div>
				</div>
            </card>
    	</div>
    </div>
    
    <div class="tab-content">
        <div class="tab-pane fade active in">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
    
</div>
</template>

<script>
    import axios from 'axios'
    var Sticky = require('sticky-js')
    
    export default {
        mounted() {
            this.getGame(this.$route.params.gameId);
        },
        data : function() {
            return {
                game: [],
                tabs: [
                    {
                        name: 'Info',
                        route: 'game.info'
                    },
                    {
                        name: 'Broadcasts',
                        route: 'game'
                    },
                ],
                stickyOptions: {
                    marginTop: 20,
                    forName: 0,
                    className: 'stuck'
                },
            }
        },
        methods : {
            getGame: function(id)
            {
                var query = this.ArrayToUrl({
                    "_with" : 'genre'
                });
            
                axios.get('/api/games/' + id+"?"+query).then((response) => {
                    var game = response.data;
                    game.images = JSON.parse(game.images);
                    this.$set(this, 'game', game);
                });
            }
        },
        watch: {
            '$route.params.gameId'(newId, oldId) {
                this.getGame(newId)
            }
        }
    }
</script>