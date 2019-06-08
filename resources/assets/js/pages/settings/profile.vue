<template>
  <div>
  <card :title="$t('your_info')">

    <!-- Name -->
    <div class="form-group row">
      <label class="col-md-3 col-form-label text-md-right label-avatar">{{ $t('avatar') }}</label>
      <div class="col-md-7">
        <div class="profile-img-wrap">
          <img class="rounded-circle profile-photo w-75px" :src="getImageLink(user.avatar)" alt="user"/>
          <vue-core-image-upload
                  crop-ratio="1:1"
                  class="fileupload nk-btn nk-btn-rounded nk-btn-color-main-1 ml-20"
                  :crop="true"
                  :headers="header"
                  @imageuploaded="imageuploaded"
                  :maxWidth="150"
                  :url="uploadUrl">
            <i class="fa fa-camera">&nbsp;{{ $t('upload') }}</i>
          </vue-core-image-upload>
        </div>
      </div>
    </div>

    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <alert-success :form="form" :message="$t('info_updated')"/>

      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
        <div class="col-md-7">
          <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
          <has-error :form="form" field="name"/>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('last_name') }}</label>
        <div class="col-md-7">
            <input v-model="form.last_name" :class="{ 'is-invalid': form.errors.has('last_name') }" class="form-control" type="text" name="last_name">
            <has-error :form="form" field="last_name"/>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('date_birth') }}</label>
        <div class="col-md-7">
          <date-picker v-model="form.date_birth" editable input-class="form-control" :lang="locale" :first-day-of-week="1" :class="{ 'is-invalid': form.errors.has('last_name') }"></date-picker>
          <has-error :form="form" field="date_birth"/>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
        <div class="col-md-7">
          <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
          <has-error :form="form" field="email" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('timezone') }}</label>
        <div class="col-md-7">
          <select v-model="form.timezone" name="timezone" class='form-control' id="timezone_list">
            <option v-for="(timezone, tz_utc) in timezones" v-bind:value="tz_utc">
              {{ timezone }}
            </option>
          </select>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-group row">
        <div class="col-md-9 ml-md-auto">
          <v-button :loading="form.busy">{{ $t('update') }}</v-button>
        </div>
      </div>
    </form>
  </card>

  <card :title="$t('your_password')" class="mt-40">
    <form @submit.prevent="update_p" @keydown="form_p.onKeydown($event)">
      <alert-success :form="form_p" :message="$t('password_updated')"/>

      <!-- Password -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('new_password') }}</label>
        <div class="col-md-7">
          <input v-model="form_p.password" :class="{ 'is-invalid': form_p.errors.has('password') }" class="form-control" type="password" name="password">
          <has-error :form="form_p" field="password"/>
        </div>
      </div>

      <!-- Password Confirmation -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
        <div class="col-md-7">
          <input v-model="form_p.password_confirmation" :class="{ 'is-invalid': form_p.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
          <has-error :form="form_p" field="password_confirmation"/>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-group row">
        <div class="col-md-9 ml-md-auto">
          <v-button :loading="form_p.busy">{{ $t('update') }}</v-button>
        </div>
      </div>
    </form>
  </card>
  </div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import VueCoreImageUpload from 'vue-core-image-upload'
import DatePicker from 'vue2-datepicker'
import axios from 'axios'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      date_birth: '',
      last_name: '',
      timezone: ''
    }),
    form_p: new Form({
        password: '',
        password_confirmation: ''
    }),
    header: {
        Authorization: 'Bearer ' + Cookies.get('token')
    },
    uploadUrl: window.config.apiHost+'/api/users/avatar',
    timezones: []
  }),

  computed: mapGetters({
    user: 'auth/user',
    locale: 'lang/locale',
  }),

  components: {
      'vue-core-image-upload': VueCoreImageUpload,
      DatePicker
  },

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
        if(key=='timezone' && this.user[key]=='' && Intl.DateTimeFormat().resolvedOptions().timeZone!==undefined)
        {
            this.form[key] = Intl.DateTimeFormat().resolvedOptions().timeZone
        }else{
            this.form[key] = this.user[key]
        }
    })
  },

  mounted() {
      this.getTimezones();
  },

  methods: {
    async update () {
      this.form.timezone = this.timezone;
      const { data } = await this.form.post('/api/users')

      this.$store.dispatch('auth/updateUser', { user: data.data })
    },
    async update_p () {
        await this.form_p.patch('/api/password')
        this.form_p.reset()
    },
    async getTimezones()
    {
        await axios.get('/api/timezones').then((response) => {
            this.$set(this, 'timezones', response.data);
        });

        var self = this;
        $("#timezone_list").select2().on("select2:select", function (e) {
            self.timezone = $(e.currentTarget).find("option:selected").val();
        });
    },
    imageuploaded(response) {
        this.user.avatar = response.avatar;
    },
  }
}
</script>
