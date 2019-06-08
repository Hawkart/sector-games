<template>
    <div>


    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RegisterChoose from "../components/auth/RegisterChoose";

export default {
    components: {RegisterChoose},
    name: 'home',
    
    metaInfo: {
        titleTemplate: 'Home | %s'
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })
    },
    data() {
        return {
            pageId: 'main',// this.$route.path ? this.$route.path : 'main'
            countPlayers: 0,
            countTeamsNeedPlayers: 0,
            countFights: 0
        }
    },
    mounted() {
        this.getCountries();
    },
    methods : {
        getCountries()
        {
            axios.get('http://games.local/api/users').then((response) => {
            });
        }
    }
    
}
</script>