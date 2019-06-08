<template>
    <div>
        <navigation></navigation>
        <!--<sidebar></sidebar>-->


        <div class="nk-main">

            <div class="nk-gap-2"></div>

            <div class="container">
                <child/>
            </div>

            <div class="nk-gap-4"></div>

            <gfooter></gfooter>

            <!-- START: Page Background -->

            <img class="nk-page-background-top" src="../../images/bg-top.png" alt="">
            <img class="nk-page-background-bottom" src="../../images/bg-bottom.png" alt="">

            <!-- END: Page Background -->

        </div>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import api from '../api'
import axios from 'axios'
import swal from 'sweetalert2';

export default {
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck'
    }),
    created () {
    },
    data() {
        return {
            siteName: "Sparta.games",
            logo: '/images/logo.png',
            genres: [],
            games: []
        }
    },
    methods: {
        logout () {
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.push({ name: 'auth.login' })
            })
        }
    },
    mounted: function () {
        
        Vue.nextTick(function(){

            var options = {
                scrollToAnchorSpeed: 700,

                templates: {
                    secondaryNavbarBackItem: 'Back',

                    plainVideoIcon: '<span class="nk-video-icon"><span class="fa fa-play pl-5"></span></span>',
                    plainVideoLoadIcon: '<span class="nk-video-icon"><span class="nk-loading-icon"></span></span>',

                    audioPlainButton:
                        `<div class="nk-audio-plain-play-pause">
                <span class="nk-audio-plain-play">
                    <span class="ion-play ml-3"></span>
                </span>
                <span class="nk-audio-plain-pause">
                    <span class="ion-pause"></span>
                </span>
            </div>`,

                    instagram:
                        `<div class="col-4">
                <a href="{{link}}" target="_blank">
                    <img src="{{image}}" alt="{{caption}}" class="nk-img-stretch">
                </a>
            </div>`,
                    instagramLoadingText: 'Loading...',
                    instagramFailText: 'Failed to fetch data',
                    instagramApiPath: 'php/instagram/instagram.php',

                    twitter:
                        `<div class="nk-twitter">
                <span class="nk-twitter-icon fa fa-twitter"></span>
                <div class="nk-twitter-name">
                      <a href="https://twitter.com/{{screen_name}}" target="_blank">@{{screen_name}}</a>
                </div>
                <div class="nk-twitter-date">
                    <span>{{date}}</span>
                </div>
                <div class="nk-twitter-text">
                   {{tweet}}
                </div>
            </div>`,
                    twitterLoadingText: 'Loading...',
                    twitterFailText: 'Failed to fetch data',
                    twitterApiPath: 'php/twitter/tweet.php',

                    countdown:
                        `<div class="nk-hexagon">
                <div class="nk-hexagon-inner"></div>
                <span>%D</span>
                <small>Days</small>
            </div>
            <div class="nk-hexagon">
                <div class="nk-hexagon-inner"></div>
                <span>%H</span>
                <small>Hours</small>
            </div>
            <div class="nk-hexagon">
                <div class="nk-hexagon-inner"></div>
                <span>%M</span>
                <small>Minutes</small>
            </div>
            <div class="nk-hexagon">
                <div class="nk-hexagon-inner"></div>
                <span>%S</span>
                <small>Seconds</small>
            </div>`,
                },
            };

            if (typeof window.GoodGames !== 'undefined') {
                window.GoodGames.setOptions(options);
                window.GoodGames.init();
            }
        });
        
        //First on site
        /*let confirm_cookie = localStorage.getItem('confirm_cookie')
        if (confirm_cookie === null) 
        {
            swal({
                title: 'First time on SPARTA.games?',
                html: '<p>You can search your favourite games using genres!  Create team! Play with your friends! We hope you\'ll enjoy it!</p><br/>'+
                '<p>Be advised that cookies are used to ensure you get the best experience on our website. If you continue to use this site, you consent to this use of cookies. Learn more about our Privacy and Cookie Policy.</p>'+
                '<p>This website stores cookies on your computer. These cookies are used to improve your website experience and provide more personalized services to you. </p>',
                type: 'info',
                showCancelButton: true,
                confirmButtonText: 'Accept!'
            }).then(function () {
                localStorage.setItem('confirm_cookie', true)
            })
        }*/
        
        /*Event.listen('changeAvatar', (avatar) => {
            console.log('App (avatar changed listener) - '+avatar);
            this.auth.user.profile.avatar = avatar;
        });*/
    }
}
</script>