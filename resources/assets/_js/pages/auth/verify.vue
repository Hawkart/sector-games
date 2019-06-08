<template>
<div class="table-struct full-width">
	<div class="table-cell vertical-align-middle auth-form-wrap">
		<div class="auth-form  ml-auto mr-auto no-float">
            <div class="row">
                <div class="col-md-12">
                    <card title="Verify account">
                        <div v-if="message" class="alert alert-success">
                            {{ message }}
                             Now you can <router-link :to="{ name: 'auth.login' }"><u>login</u></router-link>.
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    metaInfo: { titleTemplate: 'Verify email' },
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck'
    }),
    mounted() {
        this.verify();
    },
    data() {
        return {
            token: null,
            success: false,
            error: false,
            response: null,
            message: null
        }
    },
    methods: {
        verify() {
            this.token = this.$route.params.token
            axios.get(
                '/api/email/verify/'+this.token
            ).then(response => {
                this.success = true
                this.error = false
                this.message = response.data.message
                
                if(this.authenticated)
                {
                    this.user.confirmed = 1;
                    if(this.user.type=='player')
                    {
                        this.$router.push({ name: 'auth.register', query: { step: 9} });
                    }else if(this.user.type=='investor') {
                        this.$router.push({name: 'auth.register', query: {step: 3}});
                    }
                }
                
            }).catch(error => {
                this.response = error.response.data;
                this.error = true;
                this.message = false;
            });
        }
    }
}
</script>