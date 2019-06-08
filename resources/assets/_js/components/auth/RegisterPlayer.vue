<template>
    <div v-if="type=='player'">
        <h4 class="panel-title txt-dark mb-10 text-center">Register as Player</h4>
        <form role="application" class="wizard clearfix">
            <div class="content clearfix mb-0">

                <div v-if="step==1" class="pa-20">
                    <h5 class="panel-title txt-dark mb-10">Choose the game</h5>
                    <div class="alert alert-danger" v-if="error && response.game_id">
                        <p>{{response.game_id}}</p>
                    </div>
                    <carousel :navigationEnabled="true" :paginationEnabled="false" :perPage="5">
                        <slide v-for="game in games">
                            <div class="panel panel-default card-view pa-0 mr-0 ml-0" v-bind:class="{ 'game-active' : isActiveGame(game.id) }">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body pa-0">
                                        <article class="col-item">
                                            <div class="photo">
                                                <a href="javascript:void(0);" @click="setGame(game)">
                                                    <img :src="getImageLink(game.logo)" class="img-responsive" :alt="game.title" />
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </carousel>
                </div>

                <div v-if="step==2" class="pa-15">
                    <h5 class="panel-title txt-dark mb-10">Set Your Email and Password</h5>
                    <p class="txt-dark mb-10">This is need for recieve information about tournaments and updates of team.</p>

                    <div class="form-group" v-bind:class="{ 'has-error': error && response.email }">
                        <label for="email">Please enter Your E-Mail address</label>
                        <input type="email" class="form-control" v-model="email" required placeholder="example@example.com">
                        <span class="help-block" v-if="error && response.email">{{ response.email[0] }}</span>
                    </div>
                    <div class="form-group" v-bind:class="{ 'has-error': error && response.password }">
                        <label for="password">Choose Your password for SpartaGames network</label>
                        <password v-model="password" :badge="false" :defaultClass="'form-control'" :secureLength="7"></password>
                        <span class="help-block" v-if="error && response.password">{{ response.password[0] }}</span>
                    </div>
                    <div class="form-group" v-bind:class="{ 'has-error': error && response['g-recaptcha-response'] }">
                        <vue-recaptcha ref="recaptcha" :sitekey="sitekey" theme="light"></vue-recaptcha>
                        <span class="help-block" v-if="error && response['g-recaptcha-response']">{{ response['g-recaptcha-response'][0] }}</span>
                    </div>
                </div>

                <div v-if="step==3" class="pa-15">
                    <h5 class="panel-title txt-dark mb-10">What's your name?</h5>
                    <p class="txt-dark mb-10">This is how players and investors in SpartaGames network will see and refer to you.</p>
                    <div class="form-group" v-bind:class="{ 'has-error': error && response.nickname }">
                        <label for="nickname">Enter Your Nickname</label>
                        <input type="text" class="form-control" v-model="nickname" required placeholder="Nickname">
                        <span class="help-block" v-if="error && response.nickname">{{ response.nickname }}</span>
                    </div>
                    <div class="form-group" v-bind:class="{ 'has-error': error && response.name }">
                        <label for="name">Enter Your Full Name</label>
                        <input type="text" class="form-control" v-model="name" required placeholder="Full name">
                        <span class="help-block" v-if="error && response.name">{{ response.name }}</span>
                    </div>
                </div>
                <div v-if="step==4" class="pa-15">
                    <h5 class="panel-title txt-dark mb-10">Register with Steam</h5>

                    <div class="alert alert-danger" v-if="error && response.social_provider">
                        <p>{{response.social_provider}}</p>
                    </div>

                    <div class="button-list mt-30">
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" class="btn btn-facebook">
                                    <i class="fa fa-steam"></i>&nbsp;steam
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" @click="socialLogin('steam')" v-if="!checkSocialConnected('steam')" class="btn btn-facebook" target="_blank">Connect</a>
                                <a href="javascript:void(0);" class="btn btn-success" v-else>Connected</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-if="step==5" class="pa-15">
                    <h5 class="panel-title txt-dark mb-10">Attach Twitch or Youtube archive</h5>
                    <p class="txt-dark mb-10">To prove your qulification please to attach records of game-streams from  TWITCH or YOUTUBE</p>
                    <div class="button-list mt-30">
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" class="btn btn-facebook" target="_self">
                                    <i class="fa fa-twitch"></i>&nbsp;twitch
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" @click="socialLogin('twitch')" v-if="!checkSocialConnected('twitch')" class="btn btn-facebook" target="_blank">Connect</a>
                                <a href="javascript:void(0);" class="btn btn-success" v-else>Connected</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" class="btn btn-google" target="_self">
                                    <i class="fa fa-youtube"></i>&nbsp;youtube
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" @click="socialLogin('youtube')" v-if="!checkSocialConnected('youtube')" class="btn btn-google" target="_blank">Connect</a>
                                <a href="javascript:void(0);" class="btn btn-success" v-else>Connected</a>
                            </div>
                        </div>
                    </div>
                    <h5 class="panel-title txt-dark mb-10 mt-30">Attach social accounts</h5>
                    <p class="txt-dark mb-10">To make easy to communicate with your friends Please to add any of this social networks profile.</p>

                    <div class="button-list mt-30">
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" class="btn btn-vk" target="_self">
                                    <i class="fa fa-vk"></i>&nbsp;vkontakte
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" @click="socialLogin('vkontakte')" v-if="!checkSocialConnected('vkontakte')" class="btn btn-vk" target="_blank">Connect</a>
                                <a href="javascript:void(0);" class="btn btn-success" v-else>Connected</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" class="btn btn-facebook" target="_self">
                                    <i class="fa fa-facebook"></i>&nbsp;facebook
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" @click="socialLogin('facebook')" v-if="!checkSocialConnected('facebook')" class="btn btn-facebook" target="_blank">Connect</a>
                                <a href="javascript:void(0);" class="btn btn-success" v-else>Connected</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" class="btn btn-google" target="_self">
                                    <i class="fa fa-google-plus"></i>&nbsp;google
                                </a>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <a href="javascript:void(0);" @click="socialLogin('google')" v-if="!checkSocialConnected('google')" class="btn btn-google" target="_blank">Connect</a>
                                <a href="javascript:void(0);" class="btn btn-success" v-else>Connected</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="step==6" class="pa-15">
                    <h5 class="panel-title txt-dark mb-10">Calendar</h5>
                    <p class="txt-dark mb-10">Choose the time intervals when you are ready to participate in</p>
                    <div class="ml-30 mr-30">
                        <calendar-shedule :schedule="events" :blockSize="blockSize" editable="true"></calendar-shedule>
                    </div>
                </div>
                <div v-if="step==7" class="pa-15">
                    <h5 class="panel-title txt-dark mb-10">Choose your roles in <span v-if="game!=null">{{game.title}}</span></h5>
                    <div class="alert alert-danger" v-if="error && response.user_game_roles">
                        <p>{{response.user_game_roles}}</p>
                    </div>
                    <div v-for="game_role in game_roles" v-if="game_roles!=null && game_roles.length>0">
                        <input type="checkbox" :value="game_role.id" v-model="user_game_roles">
                        <label>{{game_role.title}}</label>
                    </div>
                </div>
                <div v-if="step==8" class="pa-15">
                    <div v-if="email_info!=null">
                        <p class="txt-dark mb-10">{{email_info}}</p>
                    </div>
                </div>
                <div v-if="step==9" class="pa-15">
                    <p class="txt-dark mb-10 mt-10 txt-center">
                        Would you like to register your Team  other members of you team to Sparta.Games?
                    </p>

                    <div class="form-group" v-bind:class="{ 'has-error': error && response.title }">
                        <label for="email">Please enter Team Name</label>
                        <input type="email" id="email" class="form-control" v-model="team_name" required placeholder="My team">
                        <span class="help-block" v-if="error && response.title">{{ response.title[0] }}</span>
                    </div>
                    <div class="form-group">
                        <label for="email">Please enter Team ID in <span v-if="social_provider!=null">{{social_provider}}</span></label>
                        <input type="email" id="email" class="form-control" v-model="team_extern_id" required placeholder="1234356">
                    </div>

                </div>
                <div v-if="step==10" class="pa-15">
                    <p class="txt-success mb-10 mt-10 text-center">
                        THANK YOU!<br />
                        YOUR REGISTRATION HAS COMPLETED!
                    </p>
                </div>
            </div>
            <div class="actions clearfix">
                <a href="javascript:void(0);" v-if="step>1 && step<10 && !authenticated || authenticated && step>4 && step<10" class="btn btn-primary pull-left ml-15" @click="previous"><i class="fa fa-long-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;Previous</a>
                <a href="javascript:void(0);" v-if="step<11" class="btn btn-primary pull-right" @click="next">Next&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </form>

    </div>
</template>

<script>
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    import Socials from '../../components/Socials.vue'
    import { Carousel, Slide } from 'vue-carousel'
    import Password from 'vue-password-strength-meter'
    import Cookies from 'js-cookie'
    import VueRecaptcha from 'vue-recaptcha'

    export default {
        name: 'register-player',
        components: {
            Socials,
            Carousel,
            Slide,
            Password,
            VueRecaptcha
        },
        metaInfo: {
            title: 'Register Player'
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
                step: this.$route.query.step || localStorage.getItem('register_step') || 1,
                email_info: null,
                games: [],
                user_social_accounts: [],
                game_id:0,
                game_roles: [],
                user_game_roles: [],
                game: null,
                email: null,
                password: null,
                social_provider: null,
                team_extern_id: null,
                team_name: null,
                blockSize: 2,
                events:[],
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

                /*if(this.authenticated)
                {
                    this.type = this.user.type;
                    //this.user_game_roles = this.user.game_roles;
                }*/

                if(this.authenticated)
                {
                    if(this.user.active==1)
                    {
                        if(this.user.team_id!=null || this.step==10)
                        {
                            this.setStep(10);
                        }else{
                            this.setStep(9);
                        }
                    }

                    if(this.game==null && this.user.game_id!=null)
                        this.getGame(this.user.game_id);

                    if(this.step>3 && this.step<6 || this.step==8)
                    {
                        this.getUserSocialAccounts(this.user.id);
                    }

                    if(this.step==6)
                        this.events = this.user.schedule!==null ? this.eventsConvertUTC(this.user.schedule, -1) : [];   //Convert from UTC

                    if(this.step==7)
                        this.getGameRoles();

                    if(this.step==8)
                        this.sendVerifyEmail();

                }else{
                    if(this.step==1)
                    {
                        this.getGames();
                    }

                    if(this.step>3 || this.game==null)
                    {
                        this.setStep(1);
                    }
                }

                if(this.step<4 && this.authenticated)
                {
                    this.setStep(4);
                }else{
                    if(this.$route.query.step==null)
                        this.setStep(this.step);
                }
            },
            getGames()
            {
                axios.get('/api/games').then((response) => {
                    this.$set(this, 'games', response.data);
                });
            },
            getGame: function(id)
            {
                axios.get('/api/games/' + id).then((response) => {
                    var game = response.data;
                    this.setGame(game);
                });
            },
            setGame(game)
            {
                this.game = game;
                this.game_id = game.id;
                this.blockSize = game.cross_block;
                this.social_provider = game.social_provider;
            },
            isActiveGame(game_id)
            {
                return this.game_id == game_id
            },
            previous(){
                this.step--;
                this.setStep(this.step);
                this.email_info = null;
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

                //Check social game account exist
                if(this.step>4 && !this.checkSocialConnected(this.social_provider))
                {
                    this.setStep(4);
                }

                if(step==1)
                {
                    if(this.game_id==0)
                    {
                        this.error = true;
                        this.response = [];
                        this.response.game_id = 'You need choose the game!';

                        return;
                    }else{
                        step++;
                    }
                }
                else if(step==2)
                {
                    axios.post(
                        '/api/register',
                        {
                            email: this.email,
                            nickname: this.email,
                            password: this.password,
                            type: this.type,
                            game_id: this.game_id,
                            'g-recaptcha-response': document.getElementsByName('g-recaptcha-response')[0].value
                        }
                    ).then(response => {

                        axios.post('/api/login',
                            {
                                email: this.email,
                                password: this.password
                            }).then(response => {

                            this.error = false

                            this.$store.dispatch('saveToken', {
                                token: response.data.token,
                                remember: true
                            })

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

                        this.response = error.response.data
                        this.error = true
                        this.$refs.recaptcha.reset()
                    });
                }
                else if(step==3)
                {
                    if(this.name==null || this.nickname==null)
                    {
                        this.error = true;
                        this.response = [];
                        if(this.name==null)
                            this.response.name = 'You need fill full name!';

                        if(this.nickname==null)
                            this.response.nickname = 'You need fill nickname!';

                        return;
                    }

                    this.updateUser();
                }else if(step==4)
                {
                    if(this.checkSocialConnected(this.social_provider))
                    {
                        step++;
                    }else{
                        this.error = true;
                        this.response = [];
                        this.response.social_provider = 'Please connect you game account to Sparta.games!';
                    }

                }else if(step==5)
                {
                    step++;
                }
                else if(step==6)
                {
                    this.user.schedule = this.events;
                    //Convert Back to UTC
                    this.user.schedule = this.eventsConvertUTC(this.user.schedule, 1);

                    this.updateUser();
                }
                else if(step==7)
                {
                    if(this.user_game_roles.length==0)
                    {
                        this.error = true;
                        this.response = [];
                        this.response.user_game_roles = 'You need choose the roles!';

                        return;
                    }else{
                        this.user.game_roles = this.user_game_roles;
                        this.updateUser();
                    }
                }
                else if(step==8)
                {

                }
                else if(step==9)
                {
                    if(this.team_name==null || this.team_name=='' || this.team_name==undefined)
                    {
                        step++;
                    }else{

                        axios.post('/api/teams', {
                            title : this.team_name,
                            slug: this.slugTitle(this.team_name),
                            extern_id: this.team_extern_id
                        }).then(response => {
                            this.error = false;
                            this.success = true;

                            step++;
                            this.step++;
                            this.setStep(this.step);
                            this.user.team_id = response.data.id;

                        }).catch(error => {
                            this.response = error.response.data
                            this.error = true
                            this.success = false;
                        });
                    }
                }
                else if(step==10)
                {
                    this.$router.push({ name: 'profile'});
                    return;
                }

                this.step = step;
                this.setStep(this.step);
            },
            updateUser()
            {
                var step = this.step;

                axios.post('/api/users', this.user).then(response => {
                    this.error = false;
                    this.success = true;

                    if(step!=8)
                    {
                        step++;
                        this.step++;
                        this.setStep(this.step);
                    }
                }).catch(error => {
                    this.response = error.response.data
                    this.error = true
                    this.success = false;
                });
            },
            getGameRoles()
            {
                var query = this.ArrayToUrl({
                    "game_id" : this.user.game_id,
                    "_limit" : 0
                });

                axios.get('/api/game_roles/?'+query).then((response) => {
                    this.$set(this, 'game_roles', response.data);
                });
            },
            setStep(step)
            {
                localStorage.setItem('register_step', step);
                this.$router.push({ name: 'auth.register', query: { step: step, type:this.type } });
            },
            getUserSocialAccounts(user_id)
            {
                axios.get('/api/user_social_accounts/?user_id='+user_id).then((response) => {
                    this.$set(this, 'user_social_accounts', response.data);
                });
            },
            sendVerifyEmail()
            {
                axios.post('/api/email/verify_code/resend').then((response) => {
                    this.email_info = response.data.message;
                })
            },
            checkSocialConnected(provider)
            {
                var connected = false;
                if(this.user_social_accounts.length>0)
                {
                    this.user_social_accounts.forEach(function(account)
                    {
                        if(account.provider==provider)
                        {
                            connected = true;
                        }
                    });
                }

                return connected;
            },
            socialLogin(provider)
            {
                /*var popup;
                var lefto = screen.availWidth/2-400;
                var righto = screen.availHeight/2-300;
                popup = window.open('/social/'+provider+'?token='+Cookies.get('token'), "SocialAuthWindow", "width=800,height=600,toolbar=no,menubar=no,resizable=yes,scrollbars=yes,left=" + lefto + ", top="+righto);
                popup.focus();*/

                window.location.href='/social/'+provider+'?token='+Cookies.get('token');
            }
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.init();
            }
        }
    }
</script>

<style>
    .VueCarousel-navigation-button{
        font-size: 20px !important;
        color: #fff !important;
    }
    .card-view.game-active{
        border: 2px solid green;
    }
    .wizard > .actions {
        position: relative;
        display: block;
        width: 100%;
    }
    .Password{
        margin: 0 !important;
        max-width: 100% !important;
    }
</style>