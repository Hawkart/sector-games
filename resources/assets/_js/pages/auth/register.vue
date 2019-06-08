<template>
<div class="table-struct full-width">
	<div class="table-cell vertical-align-middle auth-form-wrap">
    
        <div class="auth-form ml-auto mr-auto no-float" style="width:800px;" v-if="type!=null">
            <card>
                <register-player v-if="type=='player'" :type="type"></register-player>
                <register-investor v-if="type=='investor'" :type="type"></register-investor>
                <register-coach v-if="type=='coach'" :type="type"></register-coach>
            </card>
        </div>

        <register-choose v-if="!authenticated && (type===null || type===undefined)"></register-choose>
    </div>
</div>   
</template>

<script>
import { mapGetters } from 'vuex'
import RegisterPlayer from "../../components/auth/RegisterPlayer";
import RegisterInvestor from "../../components/auth/RegisterInvestor";
import RegisterChoose from "../../components/auth/RegisterChoose";
import RegisterCoach from "../../components/auth/RegisterCoach";

export default {
    components: {
        RegisterCoach,
        RegisterChoose,
        RegisterInvestor,
        RegisterPlayer,
    },
    metaInfo: {
        title: 'Register Page',
        titleTemplate: null
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })
    },
    data() {
        return {
            type: this.$route.query.type || null,
            success: false,
            error: false,
            response: null
        }
    },
    mounted: function () {
        this.init();
    },
    methods: {
        init()
        {
            this.type = this.$route.query.type || null;
            if(this.authenticated)
                this.type = this.user.type;
        }
    },
    watch: {
        '$route.query'(newPage, oldPage) {
            this.init();
        }
    }
}
</script>