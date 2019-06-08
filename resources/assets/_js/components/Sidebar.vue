<template>
<!-- Left Sidebar Menu -->
<div class="fixed-sidebar-left">
	<ul class="nav navbar-nav side-nav nicescroll-bar">
        
        <li class="navigation-header">
			<span>left menu</span> 
			<i class="zmdi zmdi-more"></i>
		</li>
        
        <li class="visible-xs visible-sm">
            <a class="btn btn-info btn-sm mb-10" @click="showTeamModalCreate">
                <span class="btn-text">Create Team</span>
            </a>
        </li>
        <li class="visible-xs visible-sm">   
            <router-link :to="{ name: 'streams' }" class="btn btn-warning btn-sm mb-10">Online streams</router-link>
        </li>
        <li class="visible-xs visible-sm">    
            <router-link :to="{ name: 'investors-info' }" class="btn btn-warning btn-sm mb-10">For Investors</router-link>
        </li>  

        <li>
            <router-link :to="{ name: 'games' }"><div class="pull-left"><i class="fa fa-gamepad mr-20" aria-hidden="true"></i><span class="right-nav-text">Games</span></div><div class="clearfix"></div></router-link>
        </li>
        <li>
            <router-link :to="{ name: 'teams' }"><div class="pull-left"><i class="fa fa-users mr-20" aria-hidden="true"></i><span class="right-nav-text">Teams</span></div><div class="clearfix"></div></router-link>
        </li>
        <li>
            <router-link :to="{ name: 'players' }"><div class="pull-left"><i class="fa fa-user mr-20" aria-hidden="true"></i><span class="right-nav-text">Players</span></div><div class="clearfix"></div></router-link>
        </li>
        <li>
            <router-link :to="{ name: 'investors' }"><div class="pull-left"><i class="fa fa-user-secret mr-20" aria-hidden="true"></i><span class="right-nav-text">Investors</span></div><div class="clearfix"></div></router-link>
        </li>
        <li>
            <router-link :to="{ name: 'fights' }"><div class="pull-left"><i class="ti-shield mr-20"></i><span class="right-nav-text">Trainings</span></div><div class="clearfix"></div></router-link>
        </li>
        <li>
            <router-link :to="{ name: 'tournaments' }"><div class="pull-left"><i class="ti-cup mr-20"></i><span class="right-nav-text">Tournaments</span></div><div class="clearfix"></div></router-link>
        </li>
        <li>
            <router-link :to="{ name: 'news' }"><div class="pull-left"><i class="fa fa-newspaper-o mr-20"></i><span class="right-nav-text">News</span></div><div class="clearfix"></div></router-link>
        </li>
	</ul>
    
</div>
<!-- /Left Sidebar Menu -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'sidebar',
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck'
    }),
    data() {
        return {
            storagePath: '/storage/'
        }
    },
    methods: {
        showTeamModalCreate() {
            if(this.authenticated)
            {
                this.$modal.show('teams-create');
            }else{
                this.$router.push({ name: 'auth.login' });
            }
        },
    }
};
</script>
<style lang="css">
.w-100{
    width: 100% !important;
}
</style>