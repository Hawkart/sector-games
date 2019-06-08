<template>
    <div data-sticky-container>
        <div class="row mt-20">
            <div class="col-lg-12 col-md-12 col-xs-12" v-if="investor!==null">
                <card pa_0="true">
                    <div class="profile-box">
                        <div class="profile-cover-pic">
                            <div class="profile-image-overlay" v-bind:style="{ 'background-image': 'url(' + getImageLink(investor.overlay, 'overlay_user') + ')' }"></div>
                        </div>
                        <div class="profile-info text-center stickyNav" data-margin-top="67" data-sticky-class="sticky">

                            <div class="tab-struct custom-tab-1 mt-5 mb-10 weight-600">
                                <ul class="nav nav-tabs">

                                </ul>
                            </div>

                            <div class="profile-img-wrap">
                                <img class="inline-block" :src="getImageLink(investor.avatar, 'avatar_user')" alt="user"/>
                            </div>
                            <h5 class="profile-title">
                                <span class="font-24 weight-600">{{ investor.name }} {{ investor.last_name }}</span>
                                <br /><span class="font-20 weight-500">({{ investor.nickname }})</span>
                            </h5>
                        </div>
                    </div>
                </card>
            </div>
        </div>

        <div class="tab-content">
            <div class="tab-pane fade active in">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'

    export default {
        metaInfo () {
            return {
                title: this.title,
            }
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },
        data() {
            return {
                title: 'Detail page of investor',
                investor: null,
                response: null/*,
                tabs: [
                    {
                        name: 'Profile',
                        route: 'player.detail'
                    },
                    {
                        name: 'Teams',
                        route: 'player.detail.teams'
                    },
                    {
                        name: 'Matches',
                        route: 'player.detail.fights'
                    },
                    {
                        name: 'Schedule',
                        route: 'player.detail.schedule'
                    },
                ]*/
            }
        },
        mounted() {
            this.getItem();
        },
        methods: {
            getItem()
            {
                var query = this.ArrayToUrl({
                    "type" : 'investor',
                    "_with" : 'game'
                });

                axios.get('/api/users/'+this.$route.params.id+"?"+query).then((response) => {
                    this.$set(this, 'investor', response.data);

                    this.title = this.investor.nickname;
                    this.$meta().refresh();

                    Event.fire('investorDetailLoad', {
                        investor: response.data
                    });
                });
            },
        },
    }
</script>