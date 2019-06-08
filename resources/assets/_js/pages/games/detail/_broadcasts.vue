<template>
<div>
    <card title="Broadcasts">
        <div class="row" v-if="streams!==null && streams.length>0">
			<div class="product-detail-wrap ml-10 mr-10">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="stream in streams">
        			<card pa_0="true">
                        <article class="col-item">
            				<div class="photo">
                                <router-link :to="{ name: 'stream', params: { stream: stream.channel.display_name }}">
            					    <img :src="stream.preview.medium" class="img-responsive"/>
                                </router-link>
            				</div>
            			</article>
                    </card>
                </div>
			</div>
        </div>
    </card>
</div>
</template>

<script>
    import axios from 'axios'
    export default {
        mounted() {
            this.getStreams(this.$route.params.gameId);
        },
        data : function() {
            return {
                streams: [],
            }
        },
        methods : {
            getStreams: function(id){
                axios.get('/api/twitch/search/' + id).then((response) => {
                    this.$set(this, 'streams', response.data);
                });
            }
        },
        watch: {
            '$route.params.gameId'(newId, oldId) {
                this.getStreams(newId)
            }
        }
    }
</script>