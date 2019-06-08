<template>
    <div>
        <h3 class="nk-decorated-h-2"><span>{{$t('news')}}</span></h3>
        <div class="nk-gap"></div>
        <div class="nk-blog-grid">
            <div class="row">

                <div class="col-md-6 col-lg-3" v-for="post in news">

                    <div class="nk-blog-post">

                        <router-link :to="{ name: 'news.detail', params: { slug: post.slug }}" class="nk-post-img">
                            <img :src="getImageLink(post.image)" :alt="post.title">
                        </router-link>
                        <div class="nk-gap"></div>
                        <h2 class="nk-post-title h4"><router-link :to="{ name: 'news.detail', params: { slug: post.slug }}">{{post.title}}</router-link></h2>
                        <div class="nk-post-text">
                            <p>{{ post.excerpt | truncate(100, '...') }}</p>
                        </div>
                        <div class="nk-gap"></div>
                        <router-link :to="{ name: 'news.detail', params: { slug: post.slug }}" class="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">{{$t('read_more')}}</router-link>
                        <div class="nk-post-date float-right"><span class="fa fa-calendar"></span> {{moment(post.created_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do')}}</div>
                    </div>

                </div>

            </div>
        </div>

        <div class="nk-gap-2"></div>

        <pagination :pagination="pagination"></pagination>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        layout: 'default',

        metaInfo () {
            return { title: this.$t('news') }
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