<template>
    <div>
        <div class="row heading-bg">
        	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h5 class="txt-dark">Games</h5>
        	</div>
        </div>
    
        <!--
        <div class="row">
        	<div class="col-md-12">
        		<div class="panel panel-default card-view">
        			<div class="panel-wrapper collapse in">
        				<div class="panel-body">
                            <div class="form-wrap">
                                <form autocomplete="off" id="genre-form">
                                    <div class="row">
        								<div class="col-md-3">
                                                <select v-model="genre_id" name="genre_id" class='form-control' data-style="form-control btn-default btn-outline" id="genre_list">
                                                    <option v-for="genre in genres" v-bind:value="genre.id">
                                                        {{ genre.title }}
                                                    </option>
                                                </select>
        										
        								</div>
                                    </div>
                                </form>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>-->
        
        <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12" v-for="game in games">
                <card pa_0="true">
                    <article class="col-item">
						<div class="photo">
                            <router-link :to="{ name: 'game', params: { gameId: game.id }}">
                                <img :src="getImageLink(game.logo)" class="img-responsive" :alt="game.title" />
                            </router-link>
						</div>
						<div class="info">
							<h6>{{ game.title | truncate(20, '...') }}</h6>
						</div>
					</article>
                </card>	
    		</div>
        </div>

        <pagination :pagination="pagination"></pagination>
    </div>    
</template>

<script> 
    import axios from 'axios'
       
    export default {
        metaInfo: {
            title: 'Games',
            titleTemplate: null
        },
        mounted() {
            //this.getGenres();
            this.getVueItems();
            
            //Select2 for genres
            /*var self = this;
            Vue.nextTick(function(){
                $("#genre_list").select2({
                    placeholder: "Select genre",
                    allowClear: true
                }).on("select2:select", function(e) { 
                    self.search();
                });
            
                $("#genre_list").on("select2:unselecting", function (e) {
                    self.$router.push(self.$route.path);
                });
            });*/
        },
        data : function() {
            return {
                games: [],
                //genres: [],
                //genre_id: this.$route.query.genre_id || '',
                queryString: '',
                pagination: []
            }
        },
        methods : {
            getVueItems: function(){
                
                var queryStartParams = {
                    'page' : 1,
                    '_limit' : 12,
                    "_sort" : 'id'
                };
                
                var query = this.UrlParamsMerge(queryStartParams);
                
                axios.get('/api/games?'+query).then((response) => {
                    this.$set(this, 'games', response.data.data);
                    
                    delete response.data.data;
                    this.pagination = response.data;
                });
            },
            /*getGenres: function()
            {
                if(this.$parent.genres==undefined || this.$parent.genres.length==0)
                {
                    axios.get('/api/genres').then((response) => {
                        this.$set(this, 'genres', response.data);
                        
                        //put genres in app.genres
                        this.$parent.genres = this.genres;
                    });
                }else{
                    this.genres = this.$parent.genres;
                }  
            },*/
            search: function(event)
            {
                this.$router.push(this.$route.path+"?"+$("#genre-form").serialize());
            }
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getVueItems();
            }
        }
    }
</script>