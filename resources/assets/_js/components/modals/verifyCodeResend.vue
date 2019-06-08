<template>
    <modal name="verify-code-resend" :adaptive="true" width="60%" :minWidth="minWidth" height="auto" :scrollable="true" :pivotY="pivotY" @before-close="beforeClose">
        <div class="row heading-bg">
        	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <button type="button" class="close pull-right txt-dark" aria-label="Close" @click="close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <p class="txt-dark">After pushing "Send" please to find confirmation e-mail in your mailbox.</p>
        	</div>
        </div>
        <div class="row" v-if="user!==null">
        	<div class="col-lg-12 col-md-12 col-xs-12">
                <div class="panel panel-default card-view">
        			<div class="panel-wrapper collapse in">
        				<div class="panel-body">
                            <div class="row">
            					<div class="col-md-12 col-sm-12 col-xs-12">
            						<div class="form-wrap">
                                        <div class="alert alert-success alert-dismissable" v-if="success">
                                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                            <p>Success, check your mailbox!</p>
                                        </div>
                                                                           
            							<form autocomplete="off" @submit="send" v-if="!success">                                              
                                            <div class="row">
            									<div class="col-md-12" :class="{ 'has-error': error && response.email }">
            										<div class="form-group">
                                                        <label class="control-label mb-10">Email</label>
                                                        <input type="text" class="form-control" placeholder="name" v-model="email">
                                                        <span class="help-block" v-if="error && response.email">{{ response.email[0] }}</span>
            										</div>
            									</div>
                                            </div>
            								<div class="form-actions mt-10">
                                                <button type="submit" class="btn btn-primary mr-10">
                                                    <span>Send</span>
                                                </button>			
            								</div>				
            							</form>
            						</div>
            					</div>
                        	</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2';

export default {
    name: 'verify-code-resend-modal',
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })
    },
    data() {
        return {
            pivotY: 0.1,
            minWidth: 600,
            email: null,
            success: false,
            error: false,
            response: null
        }
    },
    mounted: function () {
        this.email = this.user.email;
    },
    methods: {
        send(event) {
            event.preventDefault();            
            
            axios.post('/api/email/verify_code/resend',
            {
                email: this.email,
            }).then(response => {
                
                if(response.data.error!==undefined)
                {
                    swal({
                        type: 'error',
                        html: response.data.error
                    })
                }else{
                    this.success = true;
                }
                
            });
        },
        beforeClose (event) {
            this.error = false;
            this.success = false;
            //this.$data.email = '';
            this.response = null;
        },
        close()
        {
            this.$modal.hide('verify-code-resend');   
        }
    },
}
</script>