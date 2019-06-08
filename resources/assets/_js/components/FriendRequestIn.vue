<template>
    <div>
        <div class="row" v-if="users!==null && users.length>0">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    			<div class="panel panel-default card-view">
    				<div class="panel-wrapper collapse in">
    					<div class="panel-body">
                            <h5 class="txt-dark capitalize-font mb-10">Invitations ({{users.length}})</h5>
                            <div class="row">
                                <div class="alert alert-danger" role="alert" v-if="error">
                                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                    {{ error }}
                                </div>
                    			<div class="followers-wrap">
                    				<ul class="followers-list-wrap">
                    					<li class="follow-list" v-bind:class="{'is-collapsed' : collapsed }">
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  request-in" v-for="user in users">
                        						<div class="follo-body">
                        							<div class="follo-data">
                                                        <router-link :to="{ name: user.type, params: { id: user.id }}">
                                                            <img :src="getImageLink(user.avatar)" class="user-img img-circle" :alt="user.name" />
                                                        </router-link>
                        								<div class="user-data mt-15">
                        									<span class="name block capitalize-font">{{ user.nickname}}</span>
                        								</div>
                                                        <button class="btn btn-primary pull-right btn-xs fixed-btn mt-20 ml-15 btn-outline" @click="accept(user)" v-if="!user.accepted && !user.denied">Accept</button>
                        								<button class="btn btn-default pull-right btn-xs fixed-btn mt-20 btn-outline" @click="ignore(user)" v-if="!user.accepted && !user.denied">Ignore</button>
                        								
                                                        <button class="btn btn-default pull-right btn-xs fixed-btn mt-20 btn-outline" v-if="user.accepted">Accepted</button>
                                                        <button class="btn btn-default pull-right btn-xs fixed-btn mt-20 btn-outline" v-if="user.denied">Ignored</button>
                                                        <div class="clearfix"></div>
                        							</div>
                                                </div>
                                            </div>
                    					</li>
                    				</ul>
                    			</div>
                            </div>
                            
                            <div class="row" v-if="!collapsed && users.length>5">
                                <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center">
                                    <a class="btn btn-primary" v-on:click="collapsed=!collapsed">show more</a>
                                </div>
                            </div>
                        </div>
    				</div>	
    			</div>	
    		</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'

    export default {
        name: 'friends-request-in',
        data() {
            return {
                error: false,
                collapsed: true,
                users: []
            }
        },
        
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },

        methods: {
            accept(sender)
            {
                axios.post('/api/friends/acceptFriendRequest',
                {
                    id: sender.id,
                }).then(response => {
                    
                    if(response.data.error!==undefined)
                    {
                        swal({
                            type: 'error',
                            html: response.data.error
                        })
                    }else{
                        var index = this.users.indexOf(sender);
                        this.$set(this.users[index], 'accepted', true)
                    }
                });
            },
            ignore(sender)
            {
                axios.post('/api/friends/denyFriendRequest',
                {
                    id: sender.id,
                }).then(response => {
                    
                    if(response.data.error!==undefined)
                    {
                        swal({
                            type: 'error',
                            html: response.data.error
                        })
                    }else{
                        var index = this.users.indexOf(sender);
                        this.$set(this.users[index], 'denied', true)
                    }
                });
            },
            getVueItems: function()
            {
                axios.get('/api/friends/getPendingInFriends').then(response => {
                    
                    if(response.data.error!==undefined)
                        this.error = response.data.error
                       
                    this.$set(this, 'users', response.data);
                });
            }
        },

        mounted() {
            this.getVueItems();
        }
    }
</script>
<style>
.is-collapsed {
	.request-in:nth-child(n+5) {
		display: none;
	}
}
</style>