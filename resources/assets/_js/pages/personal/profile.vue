<template>
<div>

<div class="row" v-if="user!==null">
	<div class="col-lg-12 col-md-12 col-xs-12">
        <card>
            <div class="button-list">
                <div class="fl-l" v-for="social in socials">
                    <a href="javascript:void(0);" @click="socialLogin(social.socialId)" v-if="!checkSocialConnected(social.socialId)" :class="'btn btn-'+social.bclass+' mr-20 inline'" target="_self">
                        <i :class="'fa fa-'+social.fa"></i>&nbsp;{{social.socialId}}
                    </a>

                    <a href="javascript:void(0);" v-else :class="'btn btn-'+social.bclass+' mr-20 inline'" target="_self">
                        <i :class="'fa fa-'+social.fa"></i>&nbsp;{{social.socialId}}&nbsp;&nbsp;&nbsp;&nbsp;
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </card>
	</div>
</div>    

<div class="row" v-if="user!==null">
	<div class="col-lg-12 col-md-12 col-xs-12">
        <card>
            <div class="row">
                <div class="col-sm-12 col-xs-12">
                    <div class="form-wrap">
                        <div class="alert alert-warning alert-dismissable" v-if="user.type==null">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                            <i class="zmdi zmdi-alert-circle-o pr-15 pull-left"></i><p class="pull-left">Please set person's type. </p>
                            <div class="clearfix"></div>
                        </div>

                        <form autocomplete="off" @submit="save">
                            <h6 class="txt-dark capitalize-font"><i class="zmdi zmdi-account mr-10"></i>Your Profile</h6>
                            <hr class="light-grey-hr">
                            <div class="row">
                                <div class="col-md-6" v-if="type==null">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Type*</label>
                                        <div class="radio-list">
                                            <div class="radio-inline pl-0" v-for="(value, key) in types">
                                                <span class="radio radio-info">
                                                    <input type="radio" :value="key" v-model="user.type" :id="'radio_'+key">
                                                    <label :for="'radio_'+key">{{ value }}</label>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row" v-if="user.type=='player'">
                                <div class="col-md-6">
                                    <div class="form-group" :class="{ 'has-error': error && response.game_id }">
                                        <label class="control-label mb-10">Game*</label>
                                        <select v-model="user.game_id" class='form-control' :disabled="user.team_id!=null ? 'disabled' : null" data-style="form-control btn-default btn-outline" id="game_list">
                                            <option v-for="game in games" v-bind:value="game.id">
                                                {{ game.title }}
                                            </option>
                                        </select>
                                        <span class="help-block" v-if="error && response.game_id">{{ response.game_id[0] }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6" v-if="(user.schedule==null || user.schedule.length==0)">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Calendar of games</label>
                                        <div class="alert alert-warning alert-dismissable">
                                            <i class="zmdi zmdi-alert-circle-o pr-15 pull-left"></i><p class="pull-left">Please fill in <router-link :to="{ name: 'personal.calendar' }"><u>Calendar</u>
                                            </router-link> of future games. </p>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6" :class="{ 'has-error': error && response.nickname }">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Nickname*</label>
                                         <input type="text" class="form-control" placeholder="nickname" v-model="user.nickname">
                                        <span class="help-block" v-if="error && response.nickname">{{ response.nickname[0] }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6" :class="{ 'has-error': error && response.email }">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Email address*</label>
                                        <input type="email" class="form-control" v-model="user.email">
                                        <span class="help-block" v-if="error && response.email">{{ response.email[0] }}</span>

                                        <!--<button type="button" v-if="!user.confirmed" @click="sendEmailLinkConfirm" class="btn btn-primary btn-xs form-control">Send code to verify email</button>-->
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Country</label>
                                        <select v-model="user.country_id" class='form-control' data-style="form-control btn-default btn-outline" id="country_list">
                                            <option v-for="country in countries" v-bind:value="country.id" v-bind:data-image="country.flag">
                                                {{ country.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label mb-10">City</label>
                                        <input type="text" class="form-control" v-model="user.city">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="control-label mb-10 text-left">Description</label>
                                        <textarea class="form-control" rows="5" placeholder="Write about yourself, links to games accounts, etc." v-model="user.description"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6" v-if="user.type=='commentator'">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Minimal sponsor fee</label>
                                        <input type="text" class="form-control" placeholder="0" v-model="user.min_sponsor_fee">
                                    </div>
                                </div>
                            </div>
                            <h6 class="txt-dark capitalize-font mt-30"><i class="zmdi zmdi-lock mr-10"></i>Password change</h6>
                            <hr class="light-grey-hr">
                            <div class="row">
                                <div class="col-md-6" :class="{ 'has-error': error && response.password }">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Password</label>
                                        <input type="password" class="form-control" value="" v-model="user.password">
                                        <span class="help-block" v-if="error && response.password">{{ response.password[0] }}</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Confirm Password</label>
                                        <input type="password" class="form-control" value="" v-model="user.password_confirmation">
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions mt-10">
                                <button type="submit" class="btn btn-primary btn-icon left-icon mr-10">
                                    <i class="zmdi zmdi-edit"></i> <span>Update profile</span>
                                </button>
                            </div>
                        </form>
                        <div class="alert alert-success alert-dismissable mt-20" v-if="success">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                            <p>{{message}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </card>
    </div>
</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'
import Cookies from 'js-cookie'

export default {
    metaInfo: {
        title: 'Personal settings'
    },
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck',
    }),
    data() {
        return {
            types: {
                investor: 'investor',
                player: 'player'
            },
            nickname: null,
            success: false,
            error: false,
            response: null,
            countries: null,
            message: null,
            games: [],
            timezones: [],
            type: null,
            user_social_accounts: [],
            socials: [
                {
                    socialId : 'vkontakte',
                    bclass: 'vk',
                    fa: 'vk'
                },
                {
                    socialId : 'facebook',
                    bclass: 'facebook',
                    fa: 'facebook'
                },
                {
                    socialId : 'google',
                    bclass: 'google',
                    fa: 'google-plus'
                },
                {
                    socialId : 'twitch',
                    bclass: 'facebook',
                    fa: 'twitch'
                },
                {
                    socialId : 'youtube',
                    bclass: 'google',
                    fa: 'youtube'
                }
            ]
        }
    },
    mounted() {
        this.getUserTeam();
        this.getGames();
        this.getCountries();
        this.getUserSocialAccounts();
        //this.getTimezones();
        
        this.type = this.user.type;
        
        var self = this;
        Vue.nextTick(function(){ 
            
            /*$("#timezone_list").select2({
                placeholder: "Select timezone",
                allowClear: true
            }).on("select2:select", function(e) { 
                self.user.game_id = $(e.currentTarget).find("option:selected").val();
            }).on("select2:unselecting", function (e) {
                self.user.game_id = 0;
            });*/
            
            $("#game_list").select2({
                placeholder: "Select game",
                allowClear: true
            }).on("select2:select", function(e) { 
                self.user.game_id = $(e.currentTarget).find("option:selected").val();
            }).on("select2:unselecting", function (e) {
                self.user.game_id = 0;
            });
            
            $("#country_list").select2({
                placeholder: "Select country",
                templateResult: formatState,
                templateSelection: formatState,
                allowClear: true
            }).on("select2:select", function(e) { 
                self.user.country_id = $(e.currentTarget).find("option:selected").val();
            }).on("select2:unselecting", function (e) {
                self.user.country_id = 0;
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
        
        this.streams = this.user.streams;     
    },
    methods: {
        
        save(event) {
            event.preventDefault()
            
            axios.post('/api/users', this.user).then(response => {
                this.error = false;
                this.success = true;
                
                this.$set(this, 'message', response.data.message);
                
            }).catch(error => {
                this.response = error.response.data
                this.error = true
                this.success = false;                
            });
        },
        getUserTeam: function()
        {
            axios.get('/api/users/'+this.user.id+"/team").then((response) => {
                this.$set(this.user, 'team', response.data);
            });
        },
        getCountries: function()
        {
            if(this.$parent.countries==undefined || this.$parent.countries.length==0)
            {
                axios.get('/api/countries').then((response) => {
                    this.$set(this, 'countries', response.data);
                    this.$parent.countries = this.countries;
                });
            }else{
                this.countries = this.$parent.countries;
            }  
        },
        getGames: function()
        {
            if(this.$parent.games==undefined || this.$parent.games.length==0)
            {
                var query = this.ArrayToUrl({
                    '_limit' : 0,
                    "_sort" : 'title'
                });
                
                axios.get('/api/games?'+query).then((response) => {
                    this.$set(this, 'games', response.data);
                    this.$parent.games = this.games;
                });
            }else{
                this.games = this.$parent.games;
            }  
        },
        getTimezones: function()
        {
            axios.get('/api/timezones').then((response) => {
                this.$set(this, 'timezones', response.data);
            });
        },
        addAnother: function() 
        {
            if(this.streams==null)
            {
                this.streams  = [];
            }
            this.streams.push({ value: '' });
        },
        getUserSocialAccounts()
        {
            axios.get('/api/user_social_accounts/?user_id='+this.user.id).then((response) => {
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
            window.location.href='/social/'+provider+'?token='+Cookies.get('token');
        }
    },
}
</script>