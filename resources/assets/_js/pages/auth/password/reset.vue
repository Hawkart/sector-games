<template>
<div class="table-struct full-width">
	<div class="table-cell vertical-align-middle auth-form-wrap">
		<div class="auth-form  ml-auto mr-auto no-float">
            <div class="row">
                <div class="col-md-12">
                    <card title="Reset Password">
                        <form autocomplete="off" @submit.prevent="resetPassword">
                            <alert-error :form="form"></alert-error>
                            <alert-success :form="form" message="Password is changed successfully!"></alert-success>
                            <input type="hidden" v-model="form.token"/>
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
                            <div  class="form-group" :class="{ 'has-error': form.errors.has('password_confirmation') }">
                                <label>Confirm Password</label>
                                <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control">
                                <has-error :form="form" field="password_confirmation"></has-error>
                            </div>
                            <v-button :loading="form.busy">
                                Reset Password
                            </v-button>
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

export default {
    metaInfo: { titleTemplate: 'Reset Password | %s' },
    data: () => ({
        form: new Form({
            token: null,
            email: null,
            password: null,
            password_confirmation: null,
        })
    }),
    methods: {
        async resetPassword() {
            this.form.token = this.$route.params.token;
            const { data } = await this.form.post('/api/password/reset');
        }
    }
}
</script>