<template>
    <div>
        <h2 class="text-center">
          <span><span class="text-main-1">{{$t('youth')}}</span> {{$t('cybersports_league')}}</span>
        </h2>

        <div class="row">
            <div class="col-lg-12">
            <flickity ref="flickity" :options="flickityOptions">
                <div class="carousel-cell" style="background-image: url('/images/slider/slide_1.png')">
                    <h3>MULTIDISCIPLINARY CYBER SPORTS <br/> SECTOR FESTIVAL </h3>
                    <h4 class="text-main-1" v-if="daysTo>0">Registration will begin in <strong>{{daysTo}}</strong> days </h4>
                    <h4 class="text-main-1" v-else>
                        <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white">
                            {{ $t('register') }}
                        </router-link>
                    </h4>
                </div>
                <!--<div class="carousel-cell" style="background-image: url('/images/slider/slide_2.png')">
                    <h3>Яркое событие с лучшими командами <br/> мира и огромными призовыми</h3>
                    <h4 class="text-main-1" v-if="daysTo>0">Регистрация начнется через <strong>{{daysTo}}</strong> дня </h4>
                    <h4 class="text-main-1" v-else>
                        <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white">
                            {{ $t('register') }}
                        </router-link>
                    </h4>
                </div>-->
                <div class="carousel-cell"  style="background-image: url('/images/slider/slide_3.png')">
                    <h3>Opportunity to win a car</h3>
                    <h4 class="text-main-1" v-if="daysTo>0">Registration will begin in <strong>{{daysTo}}</strong> days </h4>
                    <h4 class="text-main-1" v-else>
                        <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white">
                            {{ $t('register') }}
                        </router-link>
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
                        <h3 class="nk-feature-title text-main-1">
                            <router-link :to="{ name: 'teams' }">{{ $t('teams') }}</router-link>
                        </h3>
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
                        <h4 class="nk-feature-title text-main-1">
                            <router-link :to="{ name: 'players' }">{{ $t('players') }}</router-link>
                        </h4>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="nk-feature-1">
                    <div class="nk-feature-icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" class="svg-inline--fa fa-trophy fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>
                    </div>
                    <div class="nk-feature-cont">
                        <h3 class="nk-feature-title">{{countSchools}}</h3>
                        <h3 class="nk-feature-title text-main-1">
                            <router-link :to="{ name: 'tournaments' }">{{ $t('tournaments') }}</router-link>
                        </h3>
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
	  this.getPlayersCount();
	  this.getTeamsCount();
	  this.getSchoolsCount();
      this.moment.locale(this.locale);
  },

  methods: {
	  getPlayersCount()
        {
            var query = this.ArrayToUrl({
                "active" : 1,
                "site_id": 2,
                'type' : 'player',
                "_limit" : 1,
                '_fields' : 'id'
            });

            axios.get('/api/users?'+query).then((response) => {
                this.$set(this, 'countPlayers', response.data.total);
            });
        },
        getTeamsCount()
        {
            var query = this.ArrayToUrl({
                "status-not" : 2,
                "site_id": 2,
                "_limit" : 1,
                '_fields' : 'id'
            });

            axios.get('/api/teams?'+query).then((response) => {
                this.$set(this, 'countTeams', response.data.total)
            });
        },
        getSchoolsCount()
        {
            var query = this.ArrayToUrl({
                "site_id": 2,
                "_limit" : 1,
                '_fields' : 'id'
            });

            axios.get('/api/tournaments?'+query).then((response) => {
                this.$set(this, 'countSchools', response.data.total);
            });
        }
  }
}
</script>