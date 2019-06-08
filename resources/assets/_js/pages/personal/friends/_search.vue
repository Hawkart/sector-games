<template>
    <div>
        
        <friends-request-in></friends-request-in>
        
        <div class="row" v-if="user!==null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    			<card>
                    <h5 class="txt-dark capitalize-font mb-10">People you may know</h5>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div class="input-group mb-15">
                                <input type="text" v-model="q" name="q" @keyup.enter="search()" @input="search()" class="form-control" placeholder="Search by friend's name">
                                <span class="input-group-btn">
                                    <button type="button" class="btn btn-primary" v-if="!loading" @click="search()"><i class="fa fa-search"></i></button>
                                    <button class="btn btn-default" type="button" disabled="disabled" v-if="loading">Searching...</button>
                                </span>
                            </div>
                            <div class="alert alert-danger" role="alert" v-if="error">
                                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                {{ error }}
                            </div>
                        </div>
                    </div>

                    <div class="row friend-list" v-if="steam_friends!=undefined && steam_friends.length>0">
                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-6" v-for="friend in steam_friends">
                            <card pa_0="true" class="ml-0 mr-0">
                                <article class="col-item">
                                    <div class="photo">
                                        <img :src="friend.avatarfull" class="img-responsive" />
                                    </div>
                                    <div class="info">
                                        <h6>{{ friend.personaname}}</h6>
                                        <p>{{ friend.realname}}</p>
                                    </div>
                                </article>
                            </card>
                        </div>
                    </div>

                    <div class="row friend-list">
                        <div class="col-lg-2 col-md-2 col-sm-3 col-xs-6" v-for="user in users">
                            <card pa_0="true" class="ml-0 mr-0">
                                <article class="col-item">
                                    <div class="photo">
                                        <router-link :to="{ name: user.type, params: { id: user.id }}">
                                            <img :src="getImageLink(user.avatar)" class="img-responsive" :alt="user.title" />
                                        </router-link>
                                    </div>
                                    <div class="info text-center">
                                        <router-link :to="{ name: user.type, params: { id: user.id }}">
                                            <h6>{{ user.nickname}}</h6>
                                        </router-link>

                                        <a href="javascript:void(0);" @click="befriend(user)" class="btn btn-primary btn-xs mt-15 btn-outline" v-show="!user.activated">
                                            Connect
                                        </a>
                                        <a href="javascript:void(0);" v-show="user.activated" class="btn btn-success btn-xs mt-15 btn-outline">
                                            <i class="fa fa-check" aria-hidden="true"></i> &nbsp;Invitation sent
                                        </a>
                                    </div>
                                </article>
                            </card>
                        </div>
                    </div>

                    <pagination :pagination="pagination"></pagination>
                </card>
    		</div>
        </div>

    </div>
</template>

<script> 
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2';
       
    export default {
        metaInfo: {
            title: 'Search users',
        },
        mounted() {
            this.getVueItems();
            this.getUserSteamAccount(this.user.id);
        },
        data : function() {
            return {
                loading: false,
                error: false,
                q: this.$route.query.q || '',
                users: [],
                steam_id: null,
                steam_friends:[],
                pagination: []
            }
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },
        methods : {       
            getVueItems: function(){
                
                if(this.q!=undefined && this.q.length<2 && this.$route.query.q!==undefined && this.q.length>0)
                    return false;

                this.error = false;
                this.loading = true;
                
                axios.get('/api/friends/searchPotential'+location.search).then(response => {
                    
                    if(response.data.error!==undefined)
                        this.error = response.data.error
                    
                    this.$set(this, 'users', response.data.data);
                    this.loading = false;
                    delete response.data.data;
                    this.pagination = response.data;
                });
            },
            befriend(recipient)
            {
                axios.post('/api/friends/befriend',
                {
                    id: recipient.id,
                }).then(response => {
                    
                    if(response.data.error!==undefined)
                    {
                        swal({
                            type: 'error',
                            html: response.data.error
                        })
                    }else{
                        var index = this.users.indexOf(recipient);
                        this.$set(this.users[index], 'activated', true)
                    }
                });
            },
            search: function(event)
            {
                this.$router.push(this.$route.path+"?q="+this.q);
            },
            getSteamFriends(steam_id)
            {
                axios.get('/api/steam/'+steam_id+'/friends').then(response => {
                    console.log(response.data.data);
                    this.$set(this, 'steam_friends', response.data.data);
                });
            },
            getUserSteamAccount(user_id)
            {
                var query = this.UrlParamsMerge({
                    'user_id' : user_id,
                    'provider' : 'steam'
                });
                axios.get('/api/user_social_accounts?'+query).then(response => {
                    var accounts = response.data;
                    
                    if(accounts.length>0)
                    {
                        this.getSteamFriends(accounts[0].provider_user_id);
                    }
                });
            }
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getVueItems();
            }
        }
    }
</script>
<style>
    .friend-list .options {
        position: absolute;
        top: 12px;
        right: 5px;
    }
    .friend-list .options a:hover{
        color: #177ec1;
    }
    .friend-list .col-item .info{
        position: relative;
    }
</style>