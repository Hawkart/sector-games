<template>
<div data-sticky-container>
    <div class="row mt-20">
        <div class="col-lg-12 col-md-12 col-xs-12">
    		<card pa_0="true">
                <div class="profile-box">
                    <div class="profile-cover-pic">
                        <vue-core-image-upload
                            crop-ratio="1:1"
                            class="fileupload btn btn-default"
                            :crop="false"
                            :headers="header"
                            @imageuploaded="overlayuploaded"
                            :maxWidth="1000"
                            url="/api/users/overlay">
                            <i class="fa fa-camera"></i>
                        </vue-core-image-upload>
                        <div class="profile-image-overlay" v-bind:style="{ 'background-image': 'url(' + getImageLink(user.overlay, 'overlay_user') + ')' }"></div>
                    </div>
                    <div class="profile-info text-center stickyNav" data-margin-top="67" data-sticky-class="sticky">

                        <div class="tab-struct custom-tab-1 mt-5 mb-10 weight-600">
                            <ul class="nav nav-tabs">
                                <li v-for="tab in tabs" class="nav-item">
                                    <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
                                        {{ tab.name }}
                                    </router-link>
                                </li>

                                <li class="nav-item" v-if="user.type=='player'">
                                    <router-link :to="{ name: 'personal.teams' }" class="nav-link" active-class="active">
                                        Teams
                                    </router-link>
                                </li>

                                <li class="nav-item" v-if="user.type=='player'">
                                    <router-link :to="{ name: 'personal.calendar' }" class="nav-link" active-class="active">
                                        Calendar
                                    </router-link>
                                </li>

                                <li class="nav-item" v-if="user.type=='player'">
                                    <router-link :to="{ name: 'personal.matches.calendar' }" class="nav-link" active-class="active">
                                        Trainings
                                    </router-link>
                                </li>

                                <li class="nav-item" v-if="user.type=='player'">
                                    <router-link :to="{ name: 'personal.qualification' }" class="nav-link" active-class="active">
                                        Qualification
                                    </router-link>
                                </li>

                                <li class="nav-item" v-if="user.type=='player'">
                                    <router-link :to="{ name: 'personal.stream' }" class="nav-link" active-class="active">
                                        Streams
                                    </router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link :to="{ name: 'personal.billing' }" class="nav-link" active-class="active">
                                        Billing
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                        <div class="profile-img-wrap">
                            <img class="inline-block" :src="getImageLink(user.avatar)" alt="user"/>
                            <vue-core-image-upload
                                crop-ratio="1:1"
                                class="fileupload btn btn-primary mb-10"
                                :crop="true"
                                :headers="header"
                                @imageuploaded="imageuploaded"
                                :maxWidth="150"
                                url="/api/users/avatar">
                                <i class="fa fa-camera"></i>
                            </vue-core-image-upload>
                        </div>
                        <h5 class="profile-title">
                            <span class="font-24 weight-600">{{ user.name }} {{ user.last_name }}</span>
                            <br /><span class="font-20 weight-500">({{ user.nickname }})</span>
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
import Cookies from 'js-cookie'
import VueCoreImageUpload from 'vue-core-image-upload'
var Sticky = require('sticky-js');

export default {
    metaInfo: {
        title: 'Personal settings'
    },
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck',
    }),
    components: {
        'vue-core-image-upload': VueCoreImageUpload,
    },
    data() {
        return {
            tabs: [
                {
                    name: 'Profile',
                    route: 'profile'
                },
                {
                    name: 'Friends',
                    route: 'friends.search'
                }
            ],
            stickyOptions: {
                marginTop: 20,
                forName: 0,
                className: 'stuck'
            },
            header: {
                Authorization: 'Bearer ' + Cookies.get('token')
            }
        }
    },
    mounted() {
        var sticky = new Sticky('.stickyNav');
    },
    methods: {
        imageuploaded(response) {
            this.user.avatar = response.avatar;
        },
        overlayuploaded(response) {
            console.log(response);
            this.user.overlay = response.overlay;
        },
    },
}
</script>