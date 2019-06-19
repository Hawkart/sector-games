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

      <!--<img class="nk-page-background-top" src="../../images/bg-top.png" alt="">
      <img class="nk-page-background-bottom" src="../../images/bg-bottom.png" alt="">-->

      <!--<chat :channels="channels" v-if="authenticated && channels!==null"></chat>-->
    </div>

  </div>

</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Chat from "~/components/Chat";
import Navbar from '~/components/Navbar'

export default {
    name: 'MainLayout',

    components: {
        Navbar, Chat
    },

    computed: {
        ...mapGetters({
            user: 'auth/user',
            authenticated: 'auth/check',
        })
    },
    data() {
        return {
            channels: null,
        };
    },
    created() {
        if (this.authenticated)
            this.getThreads();
    },
    methods: {
        getThreads: function () {
            axios.get('/api/users/' + this.user.id + '/threads').then((response) => {
                this.$set(this, 'channels', response.data);
            });
        },
    },
    watch: {
        authenticated: function (newAuth, oldAuth) {
            if (newAuth)
                this.getThreads();
        }
    }
}
</script>
