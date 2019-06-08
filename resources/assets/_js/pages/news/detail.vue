<template>
<div>
    <div class="row heading-bg" v-if="post!=null">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h5 class="txt-dark">{{ post.title }}</h5>
		</div>
	</div>
    
    <div class="row" v-if="post!=null">
        <div class="col-lg-12 col-md-12 col-sm-12">
			<card pa_0="true">
				<article class="col-item">
					<div class="photo">
                        <img :src="getImageLink(post.image)" class="img-responsive" :alt="post.title" />
					</div>
					<div class="info" v-html="post.body"></div>
				</article>
            </card>	
		</div>
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