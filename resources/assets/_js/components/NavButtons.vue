<template>
<div>
    <div class="row nav-buttons" v-if="authenticated && user.type=='player'">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="alert alert-warning alert-dismissable" v-if="authenticated && !user.confirmed">
				<i class="zmdi zmdi-alert-circle-o pr-15 pull-left"></i><p class="pull-left">You have cut access.  Press <a href="javascript:void(0);" @click="verifyCodeResendModal"><u>HERE</u></a>  to receive confirmation message to your e-mail</p>
				<div class="clearfix"></div>
			</div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'navbuttons',
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck'
    }),
    methods: {
        verifyCodeResendModal()
        {
            this.$modal.show('verify-code-resend');
        }
    }
};
</script>
<style lang="css">
.nav-buttons{
    margin: 10px -39px -5px;
    padding: 13px 15px;
}
</style>