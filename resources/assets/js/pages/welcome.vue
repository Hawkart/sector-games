<template>
    <div>
        <h2 class="text-center">
          <span><span class="text-main-1">{{$t('youth')}}</span> {{$t('cybersports_league')}}&trade;</span>
        </h2>

        <div class="row">
            <div class="col-lg-12">
            <flickity ref="flickity" :options="flickityOptions">
                <div class="carousel-cell" style="background-image: url('/images/slider/slide_1.png')">
                    <h3>Впиши своё имя в историю <br/>российского киберспорта!</h3>
                    <h4 class="text-main-1" v-if="daysTo>0">Регистрация начнется через <strong>{{daysTo}}</strong> дня </h4>
                    <h4 class="text-main-1" v-else>
                        <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white">
                        зарегистрируйтесь</router-link>
                    </h4>
                </div>
                <div class="carousel-cell" style="background-image: url('/images/slider/slide_2.png')">
                    <h3>Участвуй во втором всероссийском<br/> школьном турнире DOTA2!</h3>
                    <h4 class="text-main-1" v-if="daysTo>0">Регистрация начнется через <strong>{{daysTo}}</strong> дня </h4>
                    <h4 class="text-main-1" v-else>
                        <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white">
                            зарегистрируйтесь</router-link>
                    </h4>
                </div>
                <div class="carousel-cell"  style="background-image: url('/images/slider/slide_3.png')">
                    <h3>Собери свою команду и стань<br/> чемпионом школы!</h3>
                    <h4 class="text-main-1" v-if="daysTo>0">Регистрация начнется через <strong>{{daysTo}}</strong> дня </h4>
                    <h4 class="text-main-1" v-else>
                        <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white">
                            зарегистрируйтесь</router-link>
                    </h4>
                </div>
                <div class="carousel-cell"  style="background-image: url('/images/slider/slide_6.png')">
                    <h3>Стань звездой киберспорта - попади<br/> в финал Всероссийского турнира!</h3>
                    <h4 class="text-main-1" v-if="daysTo>0">Регистрация начнется через <strong>{{daysTo}}</strong> дня </h4>
                    <h4 class="text-main-1" v-else>
                        <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white">
                            зарегистрируйтесь</router-link>
                    </h4>
                </div>
            </flickity>
            </div>
        </div>

        <div class="nk-gap-2"></div>

        <div class="row vertical-gap">

            <div class="col-lg-4">
                <div class="nk-feature-1">
                    <div class="nk-feature-icon">
                        <fa icon="users"/>
                    </div>
                    <div class="nk-feature-cont">
                        <h3 class="nk-feature-title">{{countTeams}}</h3>
                        <h3 class="nk-feature-title text-main-1">{{$t('teams')}}</h3>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="nk-feature-1">
                    <div class="nk-feature-icon">
                        <fa icon="gamepad"/>
                    </div>
                    <div class="nk-feature-cont">
                        <h3 class="nk-feature-title">{{countPlayers}}</h3>
                        <h4 class="nk-feature-title text-main-1">{{$t('players')}}</h4>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="nk-feature-1">
                    <div class="nk-feature-icon">
                        <fa icon="university"/>
                    </div>
                    <div class="nk-feature-cont">
                        <h3 class="nk-feature-title">{{countSchools}}</h3>
                        <h3 class="nk-feature-title text-main-1">{{$t('schools')}}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="nk-gap-2"></div>
        <h3 class="nk-decorated-h-2"><span><span class="text-main-1">{{$t('latest')}}</span> {{$t('news')}}</span></h3>
        <div class="nk-gap"></div>
        <div class="nk-blog-grid">
          <div class="row">

            <div class="col-md-6 col-lg-4 col-xl-3" v-for="post in news">

              <div class="nk-blog-post">

                  <router-link :to="{ name: 'news.detail', params: { slug: post.slug }}" class="nk-post-img">
                    <img :src="getImageLink(post.image)" :alt="post.title">
                  </router-link>
                  <div class="nk-gap"></div>
                  <h2 class="nk-post-title h4"><router-link :to="{ name: 'news.detail', params: { slug: post.slug }}">{{post.title}}</router-link></h2>
                  <div class="nk-post-text">
                    <p>{{ post.excerpt | truncate(150, '...') }}</p>
                  </div>
                  <div class="nk-gap"></div>
                  <router-link :to="{ name: 'news.detail', params: { slug: post.slug }}" class="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1">{{$t('read_more')}}</router-link>
                  <div class="nk-post-date float-right"><span class="fa fa-calendar"></span> {{moment(post.created_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do')}}</div>
              </div>

            </div>

          </div>
        </div>

        <div class="nk-gap-2"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Flickity from 'vue-flickity';

export default {
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

    components: {
        Flickity
    },

  data: () => ({
    title: window.config.appName,
    news: null,
    flickityOptions: {
        autoPlay: 3500,
        //initialIndex: 3,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        adaptiveHeight: true
    },
	countSchools: 0,
	countPlayers: 0,
	countTeams: 0
  }),

  computed:{
      ...mapGetters({
          user: 'auth/user',
          locale: 'lang/locale',
      }),
	  daysTo: function ()
      {
		var d2 = new Date('Jun 20, 2018');
		var d3 = new Date();
		var ds = (d2.getTime()-d3.getTime()) / (1000*60*60*24);
		return Math.round(ds)+1;
	  }
  },

  mounted() {
      this.getNews();
	  this.getPlayersCount();
	  this.getTeamsCount();
	  this.getSchoolsCount();
      this.moment.locale(this.locale);
  },

  methods: {

      getNews: function()
      {
          axios.get('/api/news?_limit=4&_sort=-id').then((response) => {
              var news = response.data.data;
              var _self = this;

              news.forEach(function(post)
              {
                  post.created_at = _self.dateConvertUTC(post.created_at, -1);
              });

              this.$set(this, 'news', news);
          });
      },
	  getPlayersCount()
        {
            var query = this.ArrayToUrl({
                //"active" : 1,
                'type' : 'player',
				'institution_id-not': "null",
                "_limit" : 1,
                '_fields' : 'id'
            });

            axios.get('/api/users?'+query).then((response) => {
                this.$set(this, 'countPlayers', response.data.total);
            });

            /*var countPlayers = 52;
            var d2 = new Date('Jun 25, 2018');
            var d3 = new Date();
            var ds = (d3.getTime()-d2.getTime()) / (1000*60*60*24);
            ds = Math.round(ds);
            his.$set(this, 'countPlayers', countPlayers*(1+ds));
            */
        },
        getTeamsCount()
        {
            var query = this.ArrayToUrl({
                "status-not" : 2,
				"institution_id-not": "null",
                "_limit" : 1,
                '_fields' : 'id'
            });

            axios.get('/api/teams?'+query).then((response) => {
                this.$set(this, 'countTeams', response.data.total)
            });

            /*var countTeams = 7;
            var d2 = new Date('Jun 25, 2018');
            var d3 = new Date();
            var ds = (d3.getTime()-d2.getTime()) / (1000*60*60*24);
            ds = Math.round(ds);

            this.$set(this, 'countTeams', countTeams*(1+ds));*/
        },
        getSchoolsCount()
        {
            var query = this.ArrayToUrl({
                "_limit" : 1,
                '_fields' : 'id'
            });

            axios.get('/api/institutions?'+query).then((response) => {
                this.$set(this, 'countSchools', response.data.total);
            });
        }
  }
}
</script>