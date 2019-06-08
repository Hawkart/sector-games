<template>

	<div class="row">
		<div class="col-sm-12">
			<div class="panel panel-default card-view">
				<div class="panel-wrapper collapse in">
					<div class="panel-body">
						<div class="row">
							<div class="col-md-8">
                                <iframe
                                    :src="'http://player.twitch.tv/?channel='+stream_name+'&autoplay=false'"
                                    height="360"
                                    width="640"
                                    frameborder="0"
                                    scrolling="no"
                                    allowfullscreen="true">
                                </iframe>
							</div>	
                            <div class="col-md-4">
                                <iframe frameborder="0" 
                                        scrolling="no" 
                                        id="chat_embed" 
                                        :src="'http://www.twitch.tv/'+stream_name+'/chat'"
                                        height="360"
                                        width="300">
                                </iframe>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        mounted() {
            this.getStream(this.$route.params.stream);
        },
        data : function() {
            return {
                stream: [],
                stream_name: this.$route.params.stream
            }
        },
        methods : {
            getStream: function(id){
                axios.get('/api/twitch/' + id).then((response) => {
                    this.$set(this, 'stream', response.data.game);
                });
            }
        },
        watch: {
            '$route.params.stream'(newId, oldId) {
                this.getGame(newId)
            }
        }
    }
</script>