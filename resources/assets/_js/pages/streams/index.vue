<template>
    <div>
        <div class="row heading-bg">
        	<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h5 class="txt-dark">Online streams</h5>
        	</div>
        </div>
        
        
        <div class="row" v-if="streams!==null">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6" v-for="stream in streams">
    			<div class="panel panel-default card-view pa-0">
    				<div class="panel-wrapper collapse in">
    					<div class="panel-body pa-0">
    						<article class="col-item">
    							<div class="photo">
                                    <router-link :to="{ name: 'stream', params: { stream: stream.stream.channel.display_name }}">
                                        <img :src="stream.stream.preview.medium" class="img-responsive" :alt="stream.title" />
                                    </router-link>
    							</div>
    							<div class="info">
    								<h6>{{ stream.title }}</h6>
                                    
                                    <div><i aria-hidden="true" class="fa fa-gamepad"></i> {{ stream.stream.game }}</div>
                                    <div><i class="fa fa-eye"></i> {{ stream.stream.viewers }}</div>
    							</div>
    						</article>
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
        metaInfo: {
            title: 'Online streams',
            titleTemplate: null
        },
        mounted() {
            this.getVueItems();
        },
        data : function() {
            return {
                streams: [],
                queryString: '',
                pagination: {
                    total: 0, 
                    per_page: 2,
                    from: 1, 
                    to: 0,
                    current_page: 1,
                    next_page_url: null,
                    prev_page_url: null
                },
                offset: 24,
            }
        },
        computed: {
            isActived: function () {
                return this.pagination.current_page;
            },
            pagesNumber: function () {
                if (!this.pagination.to) {
                    return [];
                }
                var from = this.pagination.current_page - this.offset;
                if (from < 1) {
                    from = 1;
                }
                var to = from + (this.offset * 2);
                if (to >= this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                var pagesArray = [];
                while (from <= to) {
                    pagesArray.push(from);
                    from++;
                }
                return pagesArray;
            }
        },
        methods : {
            getVueItems: function(){
                axios.get('/api/twitch'+location.search).then((response) => {
                    this.$set(this, 'streams', response.data);
                    
                    this.pagination.total = 4;
                });
            },
            getLink(page){
                let link = location.search;
                link = this.$route.path + this.updateUrlParameter(link, "page", page);
                return link;
            }
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getVueItems();
            }
        }
    }
</script>