<template>
    <card :title="$t('school')">
        <form @submit.prevent="update" @keydown="form.onKeydown($event)">
            <alert-success :form="form" :message="$t('info_updated')"/>

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
                        <option v-for="city in cities" v-bind:value="city.id">
                            {{ city.title }}
                        </option>
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
                        <option v-for="cl in numberRange(8,11)" v-bind:value="cl">
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

            <!-- Submit Button -->
            <div class="form-group row">
                <div class="col-md-9 ml-md-auto">
                    <v-button :loading="form.busy">{{ $t('update') }}</v-button>
                </div>
            </div>
        </form>
    </card>
</template>


<script>
    import Form from 'vform'
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    import Vue from 'vue'

    export default {
        metaInfo () {
            return { title: this.$t('school') }
        },

        data: () => ({
            form: new Form({
                institution_id: '',
                class: '',
                char: ''
            }),
            country_id: null,
            countries: null,
            region_id: null,
            regions: null,
            city_id: null,
            cities: null,
            institutions: null,
            institution: null,
            city: null,
            region: null,
            country: null,
        }),

        computed:{
            ...mapGetters({
                user: 'auth/user',
                locale: 'lang/locale'
            }),
            chars: function ()
            {
                var str = this.$t('alphabet');
                return str.split(",");
            },
        },

        mounted() {
            this.getUserSchools();
            this.getCountries();


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
            async update () {
                const { data } = await this.form.post('/api/users/'+this.user.id+'/institutions')
            },
            async getUserSchools()
            {
                await axios.get('/api/institution_user?user_id='+this.user.id+'&_with=institution&_sort=-created_at').then((response) => {
                    this.$set(this, 'institution', response.data[0]);
                    this.form.institution_id = this.institution.institution.id;
                    this.form.class = this.institution.number;
                    this.form.char = this.institution.char;
                    this.city_id = this.institution.institution.location_id;
                });

                /*if(this.institution!=null && this.institution.length>0)
                {
                    const city = await this.getLocation(this.city_id);
                    this.city = city.data;

                    const region = await this.getLocation(this.city.parent_id);
                    this.region = region.data;

                    const country = await this.getLocation(this.region.parent_id);
                    this.country = country.data;

                    this.country_id = this.country.id;
                    this.region_id = this.region.id;

                    await this.selectCountry();
                    await this.selectCity();
                    await this.selectRegion();

                }else{
                    this.getCountries();
                }*/
            },
            async getCountries()
            {
                await axios.get('/api/locations?parent_id=null').then((response) => {
                    this.$set(this, 'countries', response.data);
                });
                var self = this;
                $("#country_list").select2().on("select2:select", function (e) {
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
            async getLocation(id)
            {
                return await axios.get('/api/locations/'+id);
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