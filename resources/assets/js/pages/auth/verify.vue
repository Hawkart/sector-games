<template>
    <div class="row">
        <div class="col-lg-8 m-auto">
            <card :title="$t('verify_account')">
                <div v-if="message" class="nk-info-box text-success">
                    <div class="nk-info-box-icon">
                        <i class="ion-checkmark-round"></i>
                    </div>
                    <h3>{{ message }}!</h3>
                    <em>{{$t('now_you_can')}}<router-link :to="{ name: 'login' }"><u>{{$t('may_auth')}}</u></router-link>.</em>
                </div>
            </card>
        </div>
    </div>
</template>


<script>
    import Form from 'vform'
    import axios from 'axios'

    export default {
        middleware: 'guest',

        metaInfo () {
            return { title: this.$t('verify_account') }
        },

        data: () => ({
            form: new Form({
                token: ''
            }),
            message: ''
        }),

        methods: {
            async verify() {
                this.form.token = this.$route.params.token

                await this.form.get(
                    '/api/email/verify/'+this.form.token
                ).then(response => {
                    this.message = response.data.message

                    // Redirect home.
                    //this.$router.push({ name: 'login' })
                });
            }
        },

        mounted() {
            this.verify();
        },
    }
</script>