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

            <div class="nk-gap-3"></div>

            <router-link :to="{ name: 'welcome' }" class="nk-btn nk-btn-rounded nk-btn-color-white">
              {{ $t('go_home') }}
            </router-link>
          </div>
        </div>
        <div class="nk-gap-3"></div>
      </div>
    </div>
    <div class="nk-fullscreen-block-bottom">
      <div class="nk-gap-2"></div>
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
