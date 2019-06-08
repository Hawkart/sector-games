<template>
    <div v-if="type=='investor'">
        <h4 class="panel-title txt-dark mb-10 text-center">Register as Investor</h4>
        <form role="application" class="wizard clearfix">
            <div class="content clearfix mb-0">

                <div v-if="step==1">
                    <h5 class="panel-title txt-dark mb-10">Set Info about yourself</h5>

                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <div class="form-group" v-bind:class="{ 'has-error': error && response.nickname }">
                                <label class="control-label mb-10">Enter Your Nickname</label>
                                <input type="text" class="form-control" v-model="nickname" required placeholder="Nickname">
                                <span class="help-block" v-if="error && response.nickname">{{ response.nickname[0] }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="form-group" v-bind:class="{ 'has-error': error && response.name }">
                                <label class="control-label mb-10">Enter Your Full Name</label>
                                <input type="text" class="form-control" v-model="name" required placeholder="Full name">
                                <span class="help-block" v-if="error && response.name">{{ response.name[0] }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group" v-bind:class="{ 'has-error': error && response.email }">
                        <label class="control-label mb-10">Please enter Your E-Mail address for recieving information.</label>
                        <input type="email" id="email" class="form-control" v-model="email" required placeholder="example@example.com">
                        <span class="help-block" v-if="error && response.email">{{ response.email[0] }}</span>
                    </div>
                    <div class="form-group" v-bind:class="{ 'has-error': error && response.password }">
                        <label class="control-label mb-10">Choose Your password for SpartaGames network</label>
                        <password v-model="password" :badge="false" :defaultClass="'form-control'" :secureLength="7"></password>
                        <span class="help-block" v-if="error && response.password">{{ response.password[0] }}</span>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <div class="form-group" v-bind:class="{ 'has-error': error && response.country_id }">
                                <label class="control-label mb-10">Country of living</label>
                                <select v-model="country_id" class='form-control' data-style="form-control btn-default btn-outline" id="country_list">
                                    <option v-for="country in countries" v-bind:value="country.id" v-bind:data-image="country.flag">
                                        {{ country.name }}
                                    </option>
                                </select>
                                <span class="help-block" v-if="error && response.country_id">{{ response.country_id[0] }}</span>
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="form-group" v-bind:class="{ 'has-error': error && response.tax_country_id }">
                                <label class="control-label mb-10">Country tax</label>
                                <select v-model="tax_country_id" class='form-control' data-style="form-control btn-default btn-outline" id="country_tax_list">
                                    <option v-for="country in countries" v-bind:value="country.id" v-bind:data-image="country.flag">
                                        {{ country.name }}
                                    </option>
                                </select>
                                <span class="help-block" v-if="error && response.tax_country_id">{{ response.tax_country_id[0] }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <div class="form-group" v-bind:class="{ 'has-error': error && response['g-recaptcha-response'] }">
                                <vue-recaptcha ref="recaptcha" :sitekey="sitekey" theme="light"></vue-recaptcha>
                                <span class="help-block" v-if="error && response['g-recaptcha-response']">{{ response['g-recaptcha-response'][0] }}</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-if="step==2" class="pa-15">
                    <div v-if="email_info!=null">
                        <p class="txt-dark mb-10">{{email_info}}</p>
                    </div>
                </div>
                <div v-if="step==3" class="pa-15">
                    <p class="txt-success mb-10 mt-10 text-center">
                        THANK YOU!<br />
                        YOUR REGISTRATION HAS COMPLETED!
                    </p>
                </div>
            </div>
            <div class="actions clearfix">
                <a href="javascript:void(0);" v-if="step<3" class="btn btn-primary pull-right" @click="next">Next&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </form>

    </div>
</template>


<script>
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    import Password from 'vue-password-strength-meter'
    import VueRecaptcha from 'vue-recaptcha'

    export default {
        name: 'register-investor',
        components: {
            Password,
            VueRecaptcha
        },
        metaInfo: {
            title: 'Register Investor'
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },
        props: ['type'],
        data() {
            return {
                name: null,
                nickname: null,
                email: null,
                password: null,
                country_id: null,
                tax_country_id: null,
                step: this.$route.query.step || localStorage.getItem('register_step') || 1,
                email_info: null,
                countries: null,
                sitekey: window.Laravel.googleRecaptchaKey,
                success: false,
                error: false,
                response: null
            }
        },
        mounted: function () {
            this.init();
        },
        methods: {
            init()
            {
                this.step = this.$route.query.step || localStorage.getItem('register_step') || 1;

                if(this.authenticated && this.user.active==1)
                {
                    if(this.step==3)
                    {
                        this.setStep(3);
                    }
                }

                this.getCountries();
                var self = this;
                Vue.nextTick(function(){
                    $("#country_list").select2({
                        placeholder: "Select country",
                        templateResult: formatState,
                        templateSelection: formatState,
                        allowClear: true
                    }).on("select2:select", function(e) {
                        self.country_id = $(e.currentTarget).find("option:selected").val();
                    }).on("select2:unselecting", function (e) {
                        self.country_id = 0;
                    });

                    $("#country_tax_list").select2({
                        placeholder: "Select country",
                        templateResult: formatState,
                        templateSelection: formatState,
                        allowClear: true
                    }).on("select2:select", function(e) {
                        self.tax_country_id = $(e.currentTarget).find("option:selected").val();
                    }).on("select2:unselecting", function (e) {
                        self.tax_country_id = 0;
                    });

                    function formatState (opt)
                    {
                        if (!opt.id) {
                            return opt.text;
                        }
                        var optimage = $(opt.element).data('image');
                        if(!optimage){
                            return opt.text;
                        } else {
                            var $opt = $(
                                '<span><img src="/images/flags/' + optimage + '" width="23px" /> ' + opt.text + '</span>'
                            );
                            return $opt;
                        }
                    };
                });

                if(this.step>1 && !this.authenticated)
                {
                    this.setStep(1);
                }
                if(this.step==2 && this.authenticated)
                {
                    this.sendVerifyEmail();
                }

                if(this.$route.query.step==null)
                    this.setStep(this.step);
            },
            dismiss()
            {
                this.step++;
                this.setStep(this.step);
            },
            next()
            {
                var step = this.step;
                this.error = false;
                this.response = null;

                if(step==1)
                {
                    axios.post(
                        '/api/register',
                        {
                            email: this.email,
                            password: this.password,
                            type: this.type,
                            nickname: this.nickname,
                            name: this.name,
                            country_id: this.country_id,
                            tax_country_id: this.tax_country_id,
                            'g-recaptcha-response': document.getElementsByName('g-recaptcha-response')[0].value
                        }
                    ).then(response => {

                        axios.post('/api/login',
                            {
                                email: this.email,
                                password: this.password
                            }).then(response => {

                            this.error = false;

                            this.$store.dispatch('saveToken', {
                                token: response.data.token,
                                remember: true
                            });
                            this.$store.dispatch('fetchUser').then(response => {
                                step++;
                                this.step++;
                                this.setStep(this.step);
                            })

                        }).catch(error => {

                            this.response = error.response.data;
                            this.error = true

                        });

                    }).catch(error => {

                        this.response = error.response.data;
                        this.error = true
                        this.$refs.recaptcha.reset()
                    });
                }
                else if(step==2)
                {

                }
                else if(step==3)
                {
                    this.$router.push({ name: 'profile'});
                    return;
                }

                this.step = step;
                this.setStep(this.step);
            },
            setStep(step)
            {
                localStorage.setItem('register_step', step);
                this.$router.push({ name: 'auth.register', query: { step: step, type:this.type } });
            },
            sendVerifyEmail()
            {
                axios.post('/api/email/verify_code/resend').then((response) => {
                    this.email_info = response.data.message;
                })
            },
            getCountries: function()
            {
                axios.get('/api/countries').then((response) => {
                    this.$set(this, 'countries', response.data);
                });
            },
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.init();
            }
        }
    }
</script>

<style>
    .wizard > .actions {
        position: relative;
        display: block;
        width: 100%;
        padding-right: 0;
    }
    .Password{
        margin: 0 !important;
        max-width: 100% !important;
    }
</style>