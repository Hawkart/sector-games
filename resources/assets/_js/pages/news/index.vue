<template>
    <div>
        <div class="row heading-bg">
        	<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h5 class="txt-dark">News</h5>
        	</div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="post in news">
                <card pa_0="true" class="news-list">
                    <article class="col-item">
    					<div class="photo">
                            <router-link :to="{ name: 'news.detail', params: { slug: post.slug }}">
                                <img :src="getImageLink(post.image)" class="img-responsive" :alt="post.title" />
                            </router-link>
    					</div>
    					<div class="info">
    						<h6>{{ post.title }}</h6>
                            <p>{{ post.excerpt | truncate(100, '...') }}</p>
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
            title: 'News',
            titleTemplate: null
        },
        mounted() {
            this.getVueItems();
        },
        data : function() {
            return {
                news: [],
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
                
                axios.get('/api/news?'+query).then((response) => {
                    this.$set(this, 'news', response.data.data);
                    
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