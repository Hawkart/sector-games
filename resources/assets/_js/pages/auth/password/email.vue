<template>
<div class="table-struct full-width">
	<div class="table-cell vertical-align-middle auth-form-wrap">
		<div class="auth-form  ml-auto mr-auto no-float">
            <div class="row">
                <div class="col-md-12">
                    <card title="Reset Password">
                        <form autocomplete="off" @submit.prevent="forgotPassword">
                            <alert-error :form="form"></alert-error>
                            <alert-success :form="form" message="We have e-mailed your password reset link!"></alert-success>
                            <div class="form-group" :class="{ 'has-error': form.errors.has('email') }">
                                <label>Email</label>
                                <input v-model="form.email" type="email" name="email" class="form-control">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                            <v-button :loading="form.busy">
                                Send Password Reset Link
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
            email: ''
        })
    }),
    methods: {
        async forgotPassword() {
            const { data } = await this.form.post('/api/password/email');
        }
    }
}
</script>