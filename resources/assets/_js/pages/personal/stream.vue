<template>
    <div>
        <div class="row" v-if="user!==null">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    			<card>
                    <h5 class="mb-10">How to use OBS</h5>
                    <div class="row">

                        <div class="col-md-12 col-sm-12 col-xs-12">

                            <p>Text how to user OBS...</p><br />

                            <button type="submit" class="btn btn-primary">
                                Turn on the stream
                            </button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <div class="form-wrap">
                                <h5 class="mb-10 mt-40">Streams</h5>
                                <form autocomplete="off" @submit="save">

                                    <div class="row" v-if="user.type=='player'">
                                        <div class="col-md-6">
                                            <div class="form-group" :class="{ 'has-error': error && response.streams }">
                                                <div v-for="stream in streams">
                                                    <input type="text" class="form-control" v-model="stream.value" :disabled="user.team_id!=null && user.team!=null && user.team.status==1 ? 'disabled' : null">
                                                </div>
                                                <button type="button" v-if="user.team_id==null || user.team_id!=null && user.team!=null &&  user.team.status!=1" class="btn btn-primary btn-xs form-control" @click="addAnother"><i class="fa fa-plus-circle"></i></button>
                                                <span class="help-block" v-if="error && response.streams">{{ response.streams[0] }}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-actions mt-10">
                                        <button type="submit" class="btn btn-primary btn-icon left-icon mr-10">
                                            <i class="zmdi zmdi-edit"></i> <span>Save</span>
                                        </button>
                                    </div>
                                </form>
                                <div class="alert alert-success alert-dismissable mt-20" v-if="success">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                    <p>{{message}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </card>
    		</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'

export default {
    metaInfo: {
        title: 'Streams'
    },
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck',
    }),
    data() {
        return {
            success: false,
            error: false,
            response: null,
            message: null,
            streams: []
        }
    },
    mounted() {        
        this.streams = this.user.streams;     
    },
    methods: {
        
        save(event) {
            event.preventDefault()
            
            this.user.streams = this.streams;
            
            axios.post('/api/users', this.user).then(response => {
                this.error = false;
                this.success = true;
                
                if(response.data.data.streams==null && this.user.type=='player' && this.free_player==1)
                {
                    swal(
                        'About streams!',
                        'The player is much easier to find a Team, if he adds links to the records of battles in which he participated!',
                        'warning'
                    );
                }
                
                this.$set(this, 'message', response.data.message);
                
            }).catch(error => {
                this.response = error.response.data
                this.error = true
                this.success = false;                
            });
        },
        addAnother: function() 
        {
            if(this.streams==null)
            {
                this.streams  = [];
            }
            this.streams.push({ value: '' });
        }
    },
}
</script>