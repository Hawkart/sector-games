<template>
  <div class="row">

    <div class="col-md-12">
      <div class="nk-info-box warning text-danger p-15 mb-20" v-if="!user.confirmed">
        <em>{{$t("confirm_email_text")}}</em>
      </div>
    </div>

    <div class="col-md-3">
      <card :title="$t('settings')" class="settings-card">
        <ul class="nav flex-column nav-pills">
          <li v-for="tab in tabs" :key="tab.route" class="nav-item">
            <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
              <fa :icon="tab.icon" fixed-width/>
              {{ tab.name }}
            </router-link>
          </li>
        </ul>

        <router-link :to="{ name: 'settings.team' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white mt-20 w-100">
          Собери команду<br/> вашей школы
        </router-link>

      </card>
    </div>

    <div class="col-md-9">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',

  computed: {
      ...mapGetters({
          user: 'auth/user'
      }),
      tabs () {
        return [
          {
            icon: 'user',
            name: this.$t('profile'),
            route: 'settings.profile'
          },
          {
            icon: 'university',
            name: this.$t('school'),
            route: 'settings.school'
          },
          {
            icon: 'users',
            name: this.$t('team'),
            route: 'settings.team'
          },
          {
              icon: 'book',
              name: this.$t('instruction'),
              route: 'settings.instruction'
          },
        ]
      }
  },
  methods: {
      sendVerifyEmail()
      {
          axios.post('/api/email/verify_code/resend').then((response) => {
              this.email_info = response.data.message;
          })
      }
  }
}
</script>

<style>
.settings-card .card-body {
  padding: 0;
}
</style>
