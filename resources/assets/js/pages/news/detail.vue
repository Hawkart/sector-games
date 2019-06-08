<template>
    <div>
        <div class="nk-blog-post nk-blog-post-single">

            <h3 class="nk-decorated-h-2"><span>{{post.title }}</span></h3>
            <div class="nk-gap"></div>

            <div class="nk-post-text mt-0">
                <div class="nk-post-img">
                    <img :src="getImageLink(post.image)" class="img-responsive" :alt="post.title" />
                </div>
                <div class="nk-gap-1"></div>
                <div class="info" v-html="post.body"></div>

                <!--
                <div class="nk-gap"></div>
                <div class="nk-post-share">
                    <span class="h5">Share Article:</span>

                    <ul class="nk-social-links-2">
                        <li><span class="nk-social-facebook" title="Share page on Facebook" data-share="facebook"><span class="fa fa-facebook"></span></span></li>
                        <li><span class="nk-social-google-plus" title="Share page on Google+" data-share="google-plus"><span class="fa fa-google-plus"></span></span></li>
                        <li><span class="nk-social-twitter" title="Share page on Twitter" data-share="twitter"><span class="fa fa-twitter"></span></span></li>
                        <li><span class="nk-social-pinterest" title="Share page on Pinterest" data-share="pinterest"><span class="fa fa-pinterest-p"></span></span></li>
                    </ul>
                </div>
                -->
            </div>
            <!-- END: Post Text -->
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
                meta: [
                    { name: 'description', content: this.meta_desc },
                    { name: 'keywords', content: this.meta_keywords }
                ]
            }
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },
        data() {
            return {
                title: 'Detail page of news',
                meta_desc: '',
                meta_keywords: '',
                post: null,
                response: null
            }
        },
        mounted() {
            this.getNews();
        },
        methods: {
            getNews()
            {
                axios.get('/api/news/'+this.$route.params.slug).then((response) => {
                    this.$set(this, 'post', response.data);

                    this.title = this.post.title;
                    this.meta_desc = this.post.meta_description;
                    this.meta_keywords = this.post.meta_keywords;
                    this.$meta().refresh();
                });
            }
        }
    }
</script>