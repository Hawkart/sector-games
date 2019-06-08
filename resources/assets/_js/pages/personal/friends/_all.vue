<template>
    <div>
        <div class="row" v-if="users!==null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    			<card>
                    <h5 class="txt-dark capitalize-font mb-10">Friends ({{pagination.total}})</h5>

                    <div class="row">
                        <div class="alert alert-danger" role="alert" v-if="error">
                            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            {{ error }}
                        </div>
                        <div class="followers-wrap">
                            <ul class="followers-list-wrap">
                                <li class="follow-list">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for="user in users">
                                        <div class="follo-body">
                                            <div class="follo-data">
                                                <router-link :to="{ name: user.type, params: { id: user.id }}">
                                                    <img :src="getImageLink(user.avatar)" class="user-img img-circle" :alt="user.title" />
                                                </router-link>
                                                <div class="user-data mt-15">
                                                    <span class="name block capitalize-font">{{ user.nickname}}</span>
                                                </div>
                                                <button class="btn btn-default pull-right btn-xs fixed-btn mt-20 ml-15 btn-outline">Message</button>
                                                <button class="btn btn-default pull-right btn-xs fixed-btn mt-20 btn-outline">Remove</button>

                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
            title: 'All friends'
        },
        mounted() {
            this.getVueItems();
        },
        data : function() {
            return {
                loading: false,
                error: false,
                q: this.$route.query.q || '',
                users: [],
                pagination: [],
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
                
                var queryStartParams = {
                    'page' : 1,
                    '_limit' : 12,
                    "_sort" : 'id'
                };
                
                var query = this.UrlParamsMerge(queryStartParams);
                
                axios.get('/api/users/'+this.user.id+'/friends/?'+query).then(response => {
    
                    if(response.data.error!==undefined)
                        this.error = response.data.error
                    
                    this.$set(this, 'users', response.data.data);
                    delete response.data.data;
                    this.pagination = response.data;
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
    .followers-list-wrap .follo-body .follo-data .user-img{
        height: 70px;
        width: 70px;
    }
</style>