<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="$t('register')">
        <form @submit.prevent="register" @keydown="form.onKeydown($event)" v-if="!cofirmation_sent">

          <alert-error :form="form"></alert-error>

          <div class="form-group row" v-if="countries!==null">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('country') }}</label>
            <div class="col-md-7">
              <select v-model="country_id" name="country_id" class='form-control' id="country_list">
                <option v-for="country in countries" v-bind:value="country.id">
                  {{ country.title }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group row" v-if="country_id!==null">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('region') }}</label>
            <div class="col-md-7">
              <select v-model="region_id" name="region_id" class='form-control' id="region_list">
                <option v-for="region in regions" v-bind:value="region.id">
                  {{ region.title }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group row" v-if="region_id!=null">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('locality') }}</label>
            <div class="col-md-7">
              <select v-model="city_id" name="city_id" class='form-control' id="city_list">
              </select>
            </div>
          </div>

          <div class="form-group row" v-if="city_id!=null">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('school') }}</label>
            <div class="col-md-7">
              <select v-model="form.institution_id" name="institution_id" id="school_list" class='form-control'>
                <option v-for="institution in institutions" v-bind:value="institution.id">
                  {{ institution.title }}
                </option>
              </select>
              <has-error :form="form" field="institution_id" :class="{ 'd-block': form.errors.has('institution_id') }"/>
            </div>
          </div>

          <div class="form-group row" v-if="city_id!=null">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('class') }}</label>
            <div class="col-md-7">
              <select v-model="form.class" name="class" :class="{ 'is-invalid': form.errors.has('class') }" class='form-control'>
                <option v-for="cl in numberRange(8, 11)" v-bind:value="cl">
                  {{ cl }}
                </option>
              </select>
              <has-error :form="form" field="class"/>
            </div>
          </div>

          <div class="form-group row" v-if="city_id!=null">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('char') }}</label>
            <div class="col-md-7">
              <select v-model="form.char" name="char" :class="{ 'is-invalid': form.errors.has('char') }" class='form-control'>
                <option v-for="char in chars" v-bind:value="char">
                  {{ char }}
                </option>
                <option v-for="cl in numberRange(1, 10)" v-bind:value="cl">
                  {{ cl }}
                </option>
              </select>
              <has-error :form="form" field="char"/>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
            <div class="col-md-7">
              <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
              <has-error :form="form" field="name"/>
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

          <!-- Password Confirmation -->
          <!--<div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
            <div class="col-md-7">
              <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
              <has-error :form="form" field="password_confirmation"/>
            </div>
          </div>-->

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
      institution_id: '',
      class: '',
      char: '',
      game_id: '',
      game_roles: [1],
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone!==undefined ? Intl.DateTimeFormat().resolvedOptions().timeZone : "",
      agree: true
    }),
      country_id: null,
      countries: null,
      region_id: null,
      regions: null,
      city_id: null,
      cities: null,
      institutions: null,
      //sitekey: window.config.googleRecaptchaKey,
      games: null,
      game: null,
      cofirmation_sent: false
  }),

    computed:{
        ...mapGetters({
            user: 'auth/user',
            locale: 'lang/locale',
        }),
        chars: function ()
        {
            var str = this.$t('alphabet');
            return str.split(",");
        },
    },

  mounted() {
      this.getCountries();
      this.getDota();

      Vue.nextTick(function() {
          $.fn.select2.amd.define('select2/i18n/ru', [], function () {
              // Russian
              return {
                  errorLoading: function () {
                      return 'Результат не может быть загружен.';
                  },
                  inputTooLong: function (args) {
                      var overChars = args.input.length - args.maximum;
                      var message = 'Пожалуйста, удалите ' + overChars + ' символ';
                      if (overChars >= 2 && overChars <= 4) {
                          message += 'а';
                      } else if (overChars >= 5) {
                          message += 'ов';
                      }
                      return message;
                  },
                  inputTooShort: function (args) {
                      var remainingChars = args.minimum - args.input.length;

                      var message = 'Пожалуйста, введите ' + remainingChars + ' или более символов';

                      return message;
                  },
                  loadingMore: function () {
                      return 'Загружаем ещё ресурсы…';
                  },
                  maximumSelected: function (args) {
                      var message = 'Вы можете выбрать ' + args.maximum + ' элемент';

                      if (args.maximum >= 2 && args.maximum <= 4) {
                          message += 'а';
                      } else if (args.maximum >= 5) {
                          message += 'ов';
                      }

                      return message;
                  },
                  noResults: function () {
                      return 'Ничего не найдено';
                  },
                  searching: function () {
                      return 'Поиск…';
                  }
              };
          });
      });
  },

  methods: {
    async register () {

      this.form.nickname = this.form.email;
      //this.form['g-recaptcha-response'] = document.getElementsByName('g-recaptcha-response')[0].value;
      this.form.game_id = this.game.id;

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
    sendVerifyEmail()
    {
        axios.post('/api/email/verify_code/resend').then((response) => {
            this.cofirmation_sent = true;
        })
    },
    async getCountries()
    {
        await axios.get('/api/locations?parent_id=null').then((response) => {
            this.$set(this, 'countries', response.data);
        });

        var self = this;
        $("#country_list").select2().on("change", function (e) {
            self.country_id = $(e.currentTarget).find("option:selected").val();
        });
    },
    async selectCountry()
    {
        await this.getRegions(this.country_id);
    },
    async selectRegion()
    {
        await this.getCities(this.region_id);
    },
    async selectCity()
    {
        await this.getSchools(this.city_id);
    },

    getRegions(parent_id)
    {
        axios.get('/api/locations?_sort=title&parent_id='+parent_id).then((response) => {
            this.$set(this, 'regions', response.data);

            var self = this;
            $("#region_list").select2().on("change", function (e) {
                self.region_id = $(e.currentTarget).find("option:selected").val();
            });
        });
    },
    getCities(parent_id)
    {
        axios.get('/api/locations?_sort=title&_limit=30&parent_id='+parent_id).then((response) => {

            var cities = response.data;
            var self = this;
            this.$set(this, 'cities', cities);

            if ($('#city_list').data('select2')) {
                $("#city_list").select2('destroy');
            }

            $("#city_list").select2({
                language: self.locale,
                ajax: {
                    url: window.config.apiHost+'/api/locations',
                    dataType: 'json',
                    delay: 250,
                    data: function (params) {
                        return {
                            _sort: "title",
                            parent_id: parent_id,
                            "title-lk": params.term+"*", // search term
                            page: params.page || 1,
                            _limit: 30
                        };
                    },
                    processResults: function (data, params)
                    {
                        params.page = params.page || 1;
                        self.$set(self, 'cities', data.data);

                        return {
                            results: data.data.map(function (item) {
                                return {
                                    id: item.id,
                                    text: item.title
                                };
                            }),
                            pagination: {
                                more: (params.page * 30) < data.total
                            }
                        };
                    },
                    cache: true
                },
                placeholder: 'Введите населенный пункт',
                minimumInputLength: 2
            }).on("change", function (e) {
                self.city_id = $(e.currentTarget).find("option:selected").val();
            });

        });
    },
    getSchools(location_id)
    {
        axios.get('/api/institutions?_sort=title&location_id='+location_id).then((response) => {
            this.$set(this, 'institutions', response.data);

            var self = this;
            $("#school_list").select2().on("change", function (e) {
                self.form.institution_id = $(e.currentTarget).find("option:selected").val();
            });

        });
    },
    numberRange (start, end) {
        return new Array(end - start+1).fill().map((d, i) => i + start);
    }
  },
  watch: {
      country_id: function(val, oldVal)
      {
          this.region_id = null;
          this.city_id = null;
          this.institution_id = null;
          $('#region_list').val(null).trigger("change");
          $('#city_list').val(null).trigger("change");
          $('#school_list').val(null).trigger("change");

          this.getRegions(this.country_id);
      },
      region_id: function(val, oldVal)
      {
          this.city_id = null;
          this.institution_id = null;
          $('#city_list').val(null).trigger("change");
          $('#school_list').val(null).trigger("change");

          if(val!=null)
            this.getCities(val);
      },
      city_id: function(val, oldVal)
      {
          this.institution_id = null
          $('#school_list').val(null).trigger("change");
          if(val!=null)
            this.getSchools(this.city_id);
      }
  }
}
</script>