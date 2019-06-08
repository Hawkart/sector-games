<template>
    <div class="table-struct full-width">
    	<div class="table-cell vertical-align-middle auth-form-wrap"  v-if="error">
    		<div class="auth-form  ml-auto mr-auto no-float">
                <div class="row">
                    <div class="col-md-12">
                        <card>
                            <div class="alert alert-danger">
                                <p>{{ response.error }}</p>
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

export default {
    data() {
        return {
            success: false,
            error: false,
            response: null
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            axios.get('/api'+this.$route.fullPath).then(response => {
                this.error = false
                
                this.$store.dispatch('saveToken', {
                    token: response.data.meta.token,
                    remember: true
                })

                this.$store.dispatch('fetchUser').then(() => {
                    this.$router.push({ name: 'auth.register' })
                })
            }, response => {
                this.response = response.data
                this.error = true
            })
        })
    }
}
</script>