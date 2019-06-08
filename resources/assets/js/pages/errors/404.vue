<template>
  <div class="nk-fullscreen-block">
    <div class="nk-fullscreen-block-top">
      <div class="text-center">
        <div class="nk-gap-4"></div>
        <router-link :to="{ name: 'home' }">
          <img :src="appLogo" :alt="appName">
        </router-link>
        <div class="nk-gap-2"></div>
      </div>
    </div>
    <div class="nk-fullscreen-block-middle">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h1 class="text-main-1" style="font-size: 150px;">404</h1>

            <div class="nk-gap"></div>
            <h2 class="h4">{{ $t('page_not_found') }}</h2>

            <div>Or such a page just doesn't exist... <br> Would you like to go back to the homepage?</div>
            <div class="nk-gap-3"></div>

            <router-link :to="{ name: 'home' }" class="nk-btn nk-btn-rounded nk-btn-color-white">
              {{ $t('go_home') }}
            </router-link>
          </div>
        </div>
        <div class="nk-gap-3"></div>
      </div>
    </div>
    <div class="nk-fullscreen-block-bottom">
      <div class="nk-gap-2"></div>
      <ul class="nk-social-links-2 nk-social-links-center">
        <li><a class="nk-social-twitch" href="#"><span class="fa fa-twitch"></span></a></li>
        <li><a class="nk-social-steam" href="#"><span class="fa fa-steam"></span></a></li>
        <li><a class="nk-social-facebook" href="#"><span class="fa fa-facebook"></span></a></li>
        <li><a class="nk-social-instagram" href="#"><span class="fa fa-instagram"></span></a></li>
        <li><a class="nk-social-linkedin" href="#"><span class="fa fa-linkedin"></span></a></li>
        <li><a class="nk-social-odnoklassniki" href="#"><span class="fa fa-odnoklassniki"></span></a></li>
        <li><a class="nk-social-vk" href="#"><span class="fa fa-vk"></span></a></li>
        <li><a class="nk-social-youtube" href="#"><span class="fa fa-youtube-play"></span></a></li>
      </ul>
      <div class="nk-gap-2"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'NotFound',
        layout: 'default',
        data: () => ({
            appName: window.config.appName,
            appLogo: window.config.appLogo
        }),
    }
</script>
