<template>
<div data-sticky-container>
    <div class="row mt-20">
        <div class="col-lg-12 col-md-12 col-xs-12">
    		<card pa_0="true">
				<div class="profile-box">
					<div class="profile-cover-pic" v-if="team!==null">
						<div class="profile-image-overlay" v-bind:style="{ 'background-image': 'url(' + getImageLink(team.overlay, 'overlay_team') + ')' }"></div>
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
var Sticky = require('sticky-js');

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
            title: 'Detail page of team',
            tabs: [
                {
                    name: 'Info',
                    route: 'team.detail'
                },
                {
                    name: 'Players',
                    route: 'team.detail.players'
                },
                {
                    name: 'Schedule',
                    route: 'team.detail.schedule'
                },
                {
                    name: 'Trainings',
                    route: 'team.detail.trainings'
                },
                {
                    name: 'Tournaments',
                    route: 'team.tournaments'
                }
            ],
            team: null,
            stickyOptions: {
                marginTop: 20,
                forName: 0,
                className: 'stuck'
            },
            response: null,
            invitations: null
        }
    },
    mounted() {
        //var sticky = new Sticky('.stickyNav');        
        this.getTeam();
    },
    methods: {
        getTeam()
        {
            var query = this.ArrayToUrl({
                "_with" : 'game,users,users.country'
            });
            
            axios.get('/api/teams/'+this.$route.params.slug+"?"+query).then((response) => {
                this.$set(this, 'team', response.data);
                
                this.title = "Team: "+this.team.title;
                this.$meta().refresh();
                
                this.getInvitations(this.team.id);
                
                Event.fire('teamEditLoad', {
                    team: response.data
                });
            });
        },
        getInvitations(team_id)
        {
            var query = this.ArrayToUrl({
                'team_id' : team_id,
                //'status' : 0,
                "_with" : 'user,team'
            });
            
            axios.get('/api/team_user?'+query).then((response) => {
                this.$set(this, 'invitations', response.data);
            });               
        }
    },
}
</script>