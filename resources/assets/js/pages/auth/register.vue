<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="$t('register')">
        <form @submit.prevent="register" @keydown="form.onKeydown($event)" v-if="!cofirmation_sent">

          <alert-error :form="form"></alert-error>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('nickname') }}</label>
            <div class="col-md-7">
              <input v-model="form.nickname" :class="{ 'is-invalid': form.errors.has('nickname') }" class="form-control" type="text" name="nickname">
              <has-error :form="form" field="nickname"/>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
            <div class="col-md-7">
              <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
              <has-error :form="form" field="name"/>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('game') }}</label>
            <div class="col-md-7">
              <select v-model="form.game_id" name="game_id" class='form-control' :class="{ 'is-invalid': form.errors.has('game_id') }">
                <option v-for="game in games" v-bind:value="game.id" :key="game.id">
                  {{ game.title }}
                </option>
              </select>
              <has-error :form="form" field="game_id"/>
            </div>
          </div>

          <!-- Email -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-md-7">
              <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
              <has-error :form="form" field="email"/>
              <div class="help-block">{{$t("register_email_help")}}</div>
            </div>
          </div>

          <!-- Password -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>
            <div class="col-md-7">
              <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
              <has-error :form="form" field="password"/>
            </div>
          </div>

          <!--<div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">&nbsp;</label>
            <div class="col-md-7">
              <vue-recaptcha ref="recaptcha" :sitekey="sitekey" theme="light"></vue-recaptcha>
              <has-error :form="form" field="g-recaptcha-response"/>
            </div>
          </div>-->

          <!-- Remember Me -->
          <div class="form-group row">
            <div class="col-md-3"/>
            <div class="col-md-7 d-flex">
              <checkbox v-model="form.agree" name="agree" :class="{ 'is-invalid': form.errors.has('agree') }">
                {{ $t('agree') }}
              </checkbox>

             <has-error :form="form" field="agree"/>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
              <!-- Submit Button -->
              <v-button :loading="form.busy">
                {{ $t('register') }}
              </v-button>

              <!--<div class="ml-auto">
                <login-with-social provider="vkontakte" ic="vk"/>
                <login-with-social provider="steam" ic="steam"/>
                <login-with-social provider="facebook" ic="facebook"/>
                <login-with-social provider="twitch" ic="twitch"/>
                <login-with-social provider="google" ic="google"/>
              </div>-->
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import axios from 'axios'
import LoginWithSocial from '~/components/LoginWithSocial'
import VueRecaptcha from 'vue-recaptcha'
import Vue from 'vue'

export default {
  middleware: 'guest',

  components: {
    LoginWithSocial,
    VueRecaptcha
  },

  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      type: 'player',
      name: '',
      email: '',
      nickname: '',
      password: '',
      game_id: '',
      game_roles: [1],
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone!==undefined ? Intl.DateTimeFormat().resolvedOptions().timeZone : "",
      agree: true
    }),
      //sitekey: window.config.googleRecaptchaKey,
      games: null,
      game: null,
      cofirmation_sent: false
  }),

    computed:{
        ...mapGetters({
            user: 'auth/user',
            locale: 'lang/locale',
        })
    },

  mounted() {
      this.getDota();
      this.getGames();
  },

  methods: {
    async register () {
      //this.form['g-recaptcha-response'] = document.getElementsByName('g-recaptcha-response')[0].value;
      //this.form.game_id = this.game.id;

      // Register the user.
      const { data } = await this.form.post('/api/register')

      this.cofirmation_sent = true;
      //this.sendVerifyEmail();

      // Log in the user.
      const { data: { token } } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', { token })

      // Update the user.
      await this.$store.dispatch('auth/updateUser', { user: data })

      // Redirect to instruction.
      this.$router.push({ name: 'settings.instruction' })
    },
    async getDota()
    {
        await axios.get('/api/games?title=Dota 2').then((response) => {
            this.$set(this, 'game', response.data[0]);
        });
    },
    async getGames()
    {
      await axios.get('/api/games').then((response) => {
        this.$set(this, 'games', response.data);
      });
    },
    sendVerifyEmail()
    {
        axios.post('/api/email/verify_code/resend').then((response) => {
            this.cofirmation_sent = true;
        })
    }
  }
}
</script>