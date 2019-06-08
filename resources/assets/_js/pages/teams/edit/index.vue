<template>
<div data-sticky-container>
    <div class="row mt-20">
        <div class="col-lg-12 col-md-12 col-xs-12">
    		<card pa_0="true">
                <div class="profile-box">
                    <div class="profile-cover-pic" v-if="team!==null">
                        <vue-core-image-upload
                            crop-ratio="1:1"
                            class="fileupload btn btn-default"
                            :crop="false"
                            :headers="header"
                            :data="{id:team.id}"
                            @imageuploaded="overlayuploaded"
                            :maxWidth="1000"
                            url="/api/teams/overlay">
                            <i class="fa fa-camera"></i>
                        </vue-core-image-upload>
                        <div class="profile-image-overlay" v-if="team.overlay!==null" v-bind:style="{ 'background-image': 'url(' + getImageLink(team.overlay) + ')' }"></div>
                        <div class="profile-image-overlay" v-else></div>
                    </div>
                    <div class="profile-info text-center stickyNav">

                        <div class="tab-struct custom-tab-1 mt-5 mb-10 weight-600">
                            <ul class="nav nav-tabs">
                                <li v-for="tab in tabs" class="nav-item">
                                    <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
                                        {{ tab.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                        <div class="profile-img-wrap" v-if="team!==null">
                            <img class="inline-block" :src="getImageLink(team.image, 'avatar_team')" alt="logo"/>
                            <vue-core-image-upload
                                crop-ratio="1:1"
                                class="fileupload btn btn-primary mb-10"
                                :crop="true"
                                :headers="header"
                                :data="{id:team.id}"
                                @imageuploaded="imageuploaded"
                                :maxWidth="150"
                                url="/api/teams/logo">
                                <i class="fa fa-camera"></i>
                            </vue-core-image-upload>
                        </div>
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
    metaInfo () {
        return {
            title: 'Team',
        }
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })      
    },
    components: {
        'vue-core-image-upload': VueCoreImageUpload,
    },
    data() {
        return {
            tabs: [
                {
                    name: 'Info',
                    route: 'teams.edit'
                },
                {
                    name: 'Players',
                    route: 'teams.edit.players'
                }
            ],
            team: null,
            stickyOptions: {
                marginTop: 20,
                forName: 0,
                className: 'stuck'
            },
            response: null,
            header: {
                Authorization: 'Bearer ' + Cookies.get('token')
            }
        }
    },
    mounted() {
        var sticky = new Sticky('.stickyNav');        
        this.getTeam();
    },
    methods: {
        imageuploaded(response) {
            this.team.image = response.image;
        },
        overlayuploaded(response) {
            this.team.overlay = response.overlay;
        },
        getTeam()
        {
            var query = this.ArrayToUrl({
                "_with" : 'game'
            });
            
            axios.get('/api/teams/'+this.$route.params.id+'/edit?'+query).then((response) => {
                
                var team = response.data;
                this.$set(this, 'team', team);
                
                Event.fire('teamEditLoad', {
                    team: team
                });
            });
        }
    },
}
</script>