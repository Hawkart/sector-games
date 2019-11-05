<template>
  <div>

    <!--<div class="nk-info-box warning p-0 pt-25 pb-15 mb-20" v-if="show_cookie_string==true">
        <div class="container">
            <div class="nk-info-box-close nk-info-box-close-btn mr-20 mt-0" @click="setCookie">
              <i class="ion-close-round"></i>
            </div>
            <em>{{$t("cookies_text")}} <a href="#">{{$t("read_more")}}</a></em>
        </div>
    </div>-->

    <header class="nk-header nk-header-opaque">
      <!-- START: Top Contacts -->
      <div class="nk-contacts-top">
        <div class="container">
          <div class="nk-contacts-left">
            <!--<ul class="navbar-nav">
              <locale-dropdown/>
            </ul>-->
          </div>
          <div class="nk-contacts-right">

            <ul class="nk-contacts-icons">
              <!--<li v-if="authenticated">
                <a href="#">
                  <span class="fa fa-bell"></span>
                  <span class="nk-badge">27</span>
                </a>
              </li>-->
              <li v-if="authenticated" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"
                   href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img :src="getImageLink(user.avatar)" class="rounded-circle profile-photo mr-1 w-20">
                  {{ user.name }}
                </a>
                <div class="dropdown-menu">
                  <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
                    <fa icon="cog" fixed-width/>
                    {{ $t('settings') }}
                  </router-link>

                  <div class="dropdown-divider"/>
                  <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
                    <fa icon="sign-out-alt" fixed-width/>
                    {{ $t('logout') }}
                  </a>
                </div>
              </li>
              <template v-else>
                <li class="nav-item">
                  <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
                      <span class="fa fa-user"></span>&nbsp;{{ $t('login') }}
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'register' }" class="nav-link nk-btn nk-btn-rounded nk-btn-color-main-1 text-white text-trans-none" active-class="active">
                    {{ $t('register') }}
                  </router-link>
                </li>
              </template>
            </ul>

          </div>
        </div>
      </div>
      <!-- END: Top Contacts -->

      <nav class="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide">
        <div class="container">
          <div class="nk-nav-table">

            <router-link :to="{ name: 'welcome' }" class="nk-nav-logo">
              <img :src="appLogo_2" :alt="appName" width="200">
            </router-link>

            <ul class="nk-nav nk-nav-right d-none d-lg-table-cell">
              <li>
                <router-link :to="{ name: 'tournaments' }">{{ $t('tournaments') }}</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'teams' }">{{ $t('teams') }}</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'players' }">{{ $t('players') }}</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'faq' }">{{ $t('faq') }}</router-link>
              </li>
              <!--<li>
                <router-link :to="{ name: 'matches' }">{{ $t('matches') }}</router-link>
              </li>-->
            </ul>
            <ul class="nk-nav nk-nav-right nk-nav-icons">

              <li class="single-icon d-lg-none">
                <a href="#" class="no-link-effect" @click.prevent="showMobileMenu = !showMobileMenu">
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

    <div id="nk-nav-mobile" class="nk-navbar nk-navbar-overlay-content"  v-bind:class="{ 'd-none': !showMobileMenu }">
		<div class="nk-navbar-mobile-content">
			<ul class="nk-nav">
              <li>
                <router-link :to="{ name: 'tournaments' }">{{ $t('tournaments') }}</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'teams' }">{{ $t('teams') }}</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'players' }">{{ $t('players') }}</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'faq' }">{{ $t('faq') }}</router-link>
              </li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import LocaleDropdown from './LocaleDropdown'
    import SocialsGroup from "./SocialsGroup";

    export default {
        components: {
            SocialsGroup,
            LocaleDropdown
        },

        data: () => ({
            appName: window.config.appName,
            appLogo: window.config.appLogo,
            appLogo_2: window.config.appLogo_2,
            show_cookie_string: false,
			showMobileMenu: false
        }),

        computed: mapGetters({
            user: 'auth/user',
            authenticated: 'auth/check'
        }),

        mounted: function () {
            let confirm_cookie = localStorage.getItem('confirm_cookie');
            if (confirm_cookie === null)
                this.show_cookie_string = true;
        },

        methods: {
            async logout () {
                // Log out the user.
                await this.$store.dispatch('auth/logout')

                // Redirect to login.
                this.$router.push({ name: 'login' })
            },
            setCookie(){
                localStorage.setItem('confirm_cookie', true);
                this.show_cookie_string = false;
            }
        }
    }
</script>