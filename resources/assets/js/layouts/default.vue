<template>
  <div>
    <navbar/>

    <div class="nk-main">

      <div class="nk-gap-2"></div>

      <div class="container container-full-h">
        <child/>
      </div>

      <div class="nk-gap-4"></div>

      <gfooter></gfooter>

      <img class="nk-page-background-top" src="../../images/bg-top.png" alt="">
      <img class="nk-page-background-bottom" src="../../images/bg-bottom.png" alt="">

    </div>

  </div>

</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  name: 'MainLayout',

  components: {
    Navbar
  }
}
</script>
