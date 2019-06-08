<template>
    <div>

    <div class="nk-info-box text-success">
        <div class="container">
            <div class="nk-info-box-icon">
                <i class="ion-checkmark-round"></i>
            </div>

            <div class="nk-info-box-close nk-info-box-close-btn" @click="setCookie">
                <i class="ion-close-round"></i>
            </div>
            <em>Youthleague использует coockies. By using our services, you acknowledge and approve that we use cookies. <a href="#">Read more</a></em>
        </div>
    </div>

    <header class="nk-header nk-header-opaque">
        <!-- START: Top Contacts -->
        <div class="nk-contacts-top">
            <div class="container">
                <div class="nk-contacts-left">
                    <ul class="nk-social-links">
                        <li><a class="nk-social-rss" href="#"><span class="fa fa-rss"></span></a></li>
                        <li><a class="nk-social-twitch" href="#"><span class="fa fa-twitch"></span></a></li>
                        <li><a class="nk-social-steam" href="#"><span class="fa fa-steam"></span></a></li>
                        <li><a class="nk-social-facebook" href="#"><span class="fa fa-facebook"></span></a></li>
                        <li><a class="nk-social-google-plus" href="#"><span class="fa fa-google-plus"></span></a></li>
                        <li><a class="nk-social-twitter" href="https://twitter.com/nkdevv" target="_blank"><span class="fa fa-twitter"></span></a></li>
                        <li><a class="nk-social-pinterest" href="#"><span class="fa fa-pinterest-p"></span></a></li>

                        <!-- Additional Social Buttons
                            <li><a class="nk-social-behance" href="#"><span class="fa fa-behance"></span></a></li>
                            <li><a class="nk-social-bitbucket" href="#"><span class="fa fa-bitbucket"></span></a></li>
                            <li><a class="nk-social-dropbox" href="#"><span class="fa fa-dropbox"></span></a></li>
                            <li><a class="nk-social-dribbble" href="#"><span class="fa fa-dribbble"></span></a></li>
                            <li><a class="nk-social-deviantart" href="#"><span class="fa fa-deviantart"></span></a></li>
                            <li><a class="nk-social-flickr" href="#"><span class="fa fa-flickr"></span></a></li>
                            <li><a class="nk-social-foursquare" href="#"><span class="fa fa-foursquare"></span></a></li>
                            <li><a class="nk-social-github" href="#"><span class="fa fa-github"></span></a></li>
                            <li><a class="nk-social-instagram" href="#"><span class="fa fa-instagram"></span></a></li>
                            <li><a class="nk-social-linkedin" href="#"><span class="fa fa-linkedin"></span></a></li>
                            <li><a class="nk-social-medium" href="#"><span class="fa fa-medium"></span></a></li>
                            <li><a class="nk-social-odnoklassniki" href="#"><span class="fa fa-odnoklassniki"></span></a></li>
                            <li><a class="nk-social-paypal" href="#"><span class="fa fa-paypal"></span></a></li>
                            <li><a class="nk-social-reddit" href="#"><span class="fa fa-reddit"></span></a></li>
                            <li><a class="nk-social-skype" href="#"><span class="fa fa-skype"></span></a></li>
                            <li><a class="nk-social-soundcloud" href="#"><span class="fa fa-soundcloud"></span></a></li>
                            <li><a class="nk-social-slack" href="#"><span class="fa fa-slack"></span></a></li>
                            <li><a class="nk-social-tumblr" href="#"><span class="fa fa-tumblr"></span></a></li>
                            <li><a class="nk-social-vimeo" href="#"><span class="fa fa-vimeo"></span></a></li>
                            <li><a class="nk-social-vk" href="#"><span class="fa fa-vk"></span></a></li>
                            <li><a class="nk-social-wordpress" href="#"><span class="fa fa-wordpress"></span></a></li>
                            <li><a class="nk-social-youtube" href="#"><span class="fa fa-youtube-play"></span></a></li>
                        -->
                    </ul>
                </div>
                <div class="nk-contacts-right">
                    <ul class="nk-contacts-icons">

                        <li>
                            <a href="#" data-toggle="modal" data-target="#modalSearch">
                                <span class="fa fa-search"></span>
                            </a>
                        </li>


                        <li>
                            <a href="#" data-toggle="modal" data-target="#modalLogin">
                                <span class="fa fa-user"></span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <!-- END: Top Contacts -->

        <nav class="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide">
            <div class="container">
                <div class="nk-nav-table">

                    <router-link :to="{ name: 'home' }" class="nk-nav-logo">
                        <img :src="this.$parent.logo" :alt="this.$parent.siteName" width="199">
                    </router-link>

                    <ul class="nk-nav nk-nav-right d-none d-lg-table-cell" data-nav-mobile="#nk-nav-mobile">
                        <li>
                            <router-link :to="{ name: 'players' }">Игроки</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'teams' }">Команды</router-link>
                        </li>
                    </ul>
                    <ul class="nk-nav nk-nav-right nk-nav-icons">

                        <li class="single-icon d-lg-none">
                            <a href="#" class="no-link-effect" data-nav-toggle="#nk-nav-mobile">
                                <span class="nk-icon-burger">
                                    <span class="nk-t-1"></span>
                                    <span class="nk-t-2"></span>
                                    <span class="nk-t-3"></span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- END: Navbar -->
    </header>

    <div id="nk-nav-mobile" class="nk-navbar nk-navbar-side nk-navbar-right-side nk-navbar-overlay-content d-lg-none">
        <div class="nano">
            <div class="nano-content">
                <a href="index.html" class="nk-nav-logo">
                    <img src="assets/images/logo.png" alt="" width="120">
                </a>
                <div class="nk-navbar-mobile-content">
                    <ul class="nk-nav">
                        <!-- Here will be inserted menu from [data-mobile-menu="#nk-nav-mobile"] -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- END: Navbar Mobile -->

    <!--
    <nav class="navbar navbar-inverse navbar-fixed-top" v-bind:class="{'navbar-authenticated':authenticated}">
        
        <div class="alert alert-success alert-dismissable text-center" v-if="show_cookie_string==true">
			<button type="button" class="close" @click="setCookie" data-dismiss="alert" aria-hidden="true">×</button>Sparta.Games is using cookies. By using our services, you acknowledge and approve that we use cookies. <a href="#">Read more</a>.
		</div>
        
    	<div class="mobile-only-brand pull-left">
    		<div class="nav-header pull-left">
    			<div class="logo-wrap">
                    <router-link :to="{ name: 'home' }">
                        <img class="brand-img" :src="this.$parent.logo" alt="brand"/>
    					<span class="brand-text">{{this.$parent.siteName}}</span>
                    </router-link>
    			</div>
    		</div>	
    		<a id="toggle_nav_btn" class="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0);"><i class="zmdi zmdi-menu"></i></a>
    		<a id="toggle_mobile_search" data-toggle="collapse" data-target="#search_form" class="mobile-only-view" href="javascript:void(0);"><i class="zmdi zmdi-search"></i></a>
    		<a id="toggle_mobile_nav" class="mobile-only-view" href="javascript:void(0);"><i class="zmdi zmdi-more"></i></a>
    		
            <a class="btn btn-info inline-block ml-20 mt-15 pull-left btn-sm hidden-xs hidden-sm" @click="showTeamModalCreate" v-if="!authenticated || (authenticated && (user.type=='player' || user.type=='coach')) ">
                <span class="btn-text">Create Team</span>
            </a>
            
            <router-link :to="{ name: 'streams' }" class="btn btn-warning inline-block ml-20 mt-15 pull-left btn-sm btn-outline">Online streams</router-link>
            
            <router-link :to="{ name: 'teams' }" class="btn btn-warning inline-block ml-20 mt-15 pull-left btn-sm btn-outline">Top teams</router-link>
            
            <router-link :to="{ name: 'players' }" class="btn btn-warning inline-block ml-20 mt-15 pull-left btn-sm btn-outline">Top players</router-link>

    	</div>
    	<div id="mobile_only_nav" class="mobile-only-nav pull-right mr-15">
    		<ul class="nav navbar-right top-nav pull-right">
            
                <li v-if="!authenticated">
                    <router-link :to="{ name: 'auth.login' }" class="btn btn-primary inline-block ml-20 mt-15 pull-left btn-sm"><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;&nbsp;Login</router-link>
                </li>
                <li v-if="!authenticated">
                    <router-link :to="{ name: 'auth.register' }" class="btn btn-danger inline-block ml-20 mt-15 pull-left btn-sm">Register</router-link>
                </li>
				<li class="dropdown alert-drp" v-if="authenticated">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="zmdi zmdi-notifications top-nav-icon"></i><span class="top-nav-icon-badge">0</span></a>
					<ul class="dropdown-menu alert-dropdown" data-dropdown-in="bounceIn" data-dropdown-out="bounceOut">
						<li>
							<div class="notification-box-head-wrap">
								<span class="notification-box-head pull-left inline-block">notifications</span>
								<a class="txt-danger pull-right clear-notifications inline-block" href="javascript:void(0)"> clear all </a>
								<div class="clearfix"></div>
								<hr class="light-grey-hr ma-0"/>
							</div>
						</li>
						<li>
							<div class="streamline message-nicescroll-bar">
							</div>
						</li>
						<li>
							<div class="notification-box-bottom-wrap">
								<hr class="light-grey-hr ma-0"/>
								<a class="block text-center read-all" href="javascript:void(0)"> read all </a>
								<div class="clearfix"></div>
							</div>
						</li>
					</ul>
				</li>
				<li class="dropdown auth-drp" v-if="authenticated">
					<a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown">
                        <img :src="getImageLink(user.avatar, 'avatar_user')" alt="user_auth" class="user-auth-img img-circle"/>
                        <span class="user-online-status"></span>
                        <span class="user-title">{{user.nickname}}<br />
                        <span class="user-balance text-info">
                            <span class="weight-500" style="font-size: 18px;" >{{formatPrice(user.balance)}}</span> SPA
                        </span>
                        </span>
                    </a>
					<ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                        <li>
                            <router-link :to="{ name: 'profile' }"><i class="zmdi zmdi-account"></i><span>Profile</span></router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'friends.search' }"><i class="zmdi zmdi-accounts"></i><span>Friends</span></router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'personal.teams' }" v-if="user.type=='player'"><i class="fa fa-users" style="font-size: 14px" aria-hidden="true"></i><span>Teams</span></router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'personal.calendar' }" v-if="user.type=='player'"><i class="fa fa-calendar" style="font-size: 14px" aria-hidden="true"></i><span>Calendar</span></router-link>
                        </li>
                        <li  v-if="user.type=='player'">
                            <router-link :to="{ name: 'personal.matches.calendar' }">
                                <i class="fa fa-trophy" style="font-size: 14px" aria-hidden="true"></i><span>Trainings</span>
                            </router-link>
                        </li>
                        <li  v-if="user.type=='player'">
                            <router-link :to="{ name: 'personal.qualification' }">
                                <i class="fa fa-bar-chart" style="font-size: 14px" aria-hidden="true"></i><span>Qualification</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'personal.stream' }" v-if="user.type=='player'"><i class="fa fa-video-camera" style="font-size: 14px" aria-hidden="true"></i><span>Streams</span></router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'personal.billing' }"><i class="fa fa-money" style="font-size: 14px" aria-hidden="true"></i><span>Billing</span></router-link>
                        </li>
						<li class="divider"></li>                        
                        <li>
                            <a href="javascript:void(0)" v-on:click="this.$parent.logout">
                                <i class="zmdi zmdi-power"></i><span>Logout</span>
                            </a>
                        </li>
					</ul>
				</li>
    		</ul>
    	</div>	
    </nav>-->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'navigation',
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck'
    }),
    data() {
        return {
            show_cookie_string:false
        }
    },
    mounted: function () {
        let confirm_cookie = localStorage.getItem('confirm_cookie');
        if (confirm_cookie === null) 
        {
            this.show_cookie_string = true;
        }
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        showTeamModalCreate() {
            if(this.authenticated)
            {
                this.$modal.show('teams-create');
            }else{
                this.$router.push({ name: 'auth.login' });
            }
        },
        setCookie(){
            localStorage.setItem('confirm_cookie', true);
            this.show_cookie_string = false;
        }
    }
};
</script>