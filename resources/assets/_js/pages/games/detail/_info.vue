<template>
<div>
    <div class="row" v-if="game!==null">
    	<div class="col-lg-12 col-md-12 col-xs-12">
            <card :title="game.title">
                <div class="product-detail-wrap ml-10 mr-10">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="image in game.images">
                			<div class="panel panel-default card-view pa-0">
                				<div class="panel-wrapper collapse in">
                					<div class="panel-body pa-0">
                						<article class="col-item">
                							<div class="photo">
                                                <img class="img-responsive" :src="getImageLink(image)"  :alt="game.title" />
                							</div>
                						</article>
                					</div>
                				</div>	
                			</div>	
                		</div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p class="mb-10" v-if="game.genre!==undefined"><strong>Genre:</strong> &nbsp;{{ game.genre.title }}</p>
                            <p class="mb-20"><strong>Description:</strong> &nbsp;<span v-html="game.body"></span></p>
                        </div>
                    </div>
				</div>
            </card>
        </div>
    </div>
</div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        mounted() {
            this.getGame(this.$route.params.gameId);
        },
        data : function() {
            return {
                game: []
            }
        },
        methods : {
            getGame: function(id){
                var query = this.ArrayToUrl({
                    "_with" : 'genre'
                });
            
                axios.get('/api/games/' + id+"?"+query).then((response) => {
                    var game = response.data;
                    game.images = JSON.parse(game.images);
                    this.$set(this, 'game', game);
                });
            },
        },
        watch: {
            '$route.params.gameId'(newId, oldId) {
                this.getGame(newId)
            }
        }
    }
</script>