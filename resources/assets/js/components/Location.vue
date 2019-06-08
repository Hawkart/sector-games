<template>
    <div>
        <h3 class="nk-decorated-h-2" v-if="title"><span>{{ title }}</span></h3>
        <div class="nk-gap" v-if="title"></div>
        <slot/>
    </div>
</template>

<template>
    <div>

        <div class="row heading-bg">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h5 class="txt-dark">news</h5>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="post in news">
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

    </div>
</template>

<script>
    export default {
        name: 'Location',
        props: {
            parent_id: { type: String, default: null }
        },
        data : function() {
            return {
                locations: [],
            }
        },
        mounted: function () {
            this.getLocations();
        },
        methods :
        {
            getLocations: function()
            {
                axios.get('/api/locations?'+query).then((response) => {
                    this.$set(this, 'locations', response.data.data);
                });
            },

        }
    };
</script>