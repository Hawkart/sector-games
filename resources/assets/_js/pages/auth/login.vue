<template>
<div class="table-struct full-width">
	<div class="table-cell vertical-align-middle auth-form-wrap">
		<div class="auth-form  ml-auto mr-auto no-float">
            <div class="row">
                <div class="col-md-12">
                    <card title="Login">
                        <socials></socials>
                        <form autocomplete="off" @submit.prevent="login" @keydown="form.onKeydown($event)">
                            <!-- Alert -->
                            <alert-error :form="form"></alert-error>
                            <div class="form-group" :class="{ 'has-error': form.errors.has('email') }">
                                <label>Email</label>
                                <input v-model="form.email" type="email" name="email" class="form-control">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                            <div  class="form-group" :class="{ 'has-error': form.errors.has('password') }">
                                <label>Password</label>
                                <input v-model="form.password" type="password" name="password" class="form-control">
                                <has-error :form="form" field="password"></has-error>
                            </div>
                            <div class="form-group row">
                                <div class="col-xs-6 col-sm-6">
                                    <v-button :loading="form.busy">
                                        Login
                                    </v-button>
                                </div>
                                <div class="col-xs-6 col-sm-6 text-right mt-10">
                                    <small>
                                        <router-link :to="{ name: 'password.request' }">Forgot Your Password?</router-link>
                                    </small>
                                </div>
                            </div>
                        </form>
                    </card>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Form from 'vform'
import Socials from '../../components/Socials.vue';

export default {
    name: 'login',
    metaInfo: { titleTemplate: 'Login | %s' },
    components: {Socials},
    data: () => ({
        form: new Form({
            email: '',
            password: ''
        })
    }),
    methods: {
        async login () {
            // Submit the form.
            const { data } = await this.form.post('/api/login');
            
            // Save the token.
            this.$store.dispatch('saveToken', {
                token: data.token,
                remember: true
            })
            
            // Fetch the user.
            var response = await this.$store.dispatch('fetchUser');
            
            // Redirect.
            if(response.type==null)
            {
                this.$router.push({ name: 'profile' })
            }else{
                this.$router.push({ name: 'home' })
            }
        }
    }
}
</script>