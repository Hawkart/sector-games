<template>
    <modal name="fight-create" :adaptive="true" width="60%" :minWidth="minWidth" height="auto" :scrollable="true" :pivotY="pivotY" @before-close="beforeClose">
        <div class="row heading-bg">
        	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <button type="button" class="close pull-right txt-dark" aria-label="Close" @click="close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h5 class="txt-dark">Fight create</h5>
        	</div>
        </div>
        <div class="row" v-if="user!==null">
        	<div class="col-lg-12 col-md-12 col-xs-12">
                <card>
                    <div class="alert alert-warning alert-dismissable" v-if="user.type!='player'">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        <i class="zmdi zmdi-alert-circle-o pr-15 pull-left"></i><p class="pull-left">Only player can create teams. </p>
                        <div class="clearfix"></div>
                    </div>

                    <div class="form-wrap" v-else>
                        <div class="alert alert-success alert-dismissable" v-if="success">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                            <p>Team is created!</p>
                        </div>
                        <form autocomplete="off" @submit="save">
                            <div class="row">
                                <div class="col-md-12" :class="{ 'has-error': error && response.title }">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Title</label>
                                        <input type="text" class="form-control" placeholder="name" v-model="title">
                                        <span class="help-block" v-if="error && response.title">{{ response.title[0] }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group" :class="{ 'has-error': error && response.start_at }">
                                        <label class="control-label mb-10">Date & time</label>
                                        <div class="row">
                                            <div class="col-md-8 col-sm-12 col-xs-12 form-group">
                                                <date-picker v-model="start_at_date" lang="en"></date-picker>
                                            </div>
                                            <div class="col-md-4 col-sm-12 col-xs-12 form-group">
                                                <vue-timepicker format="HH:mm:ss" v-model="start_at_time" :minute-interval="5"></vue-timepicker>
                                            </div>
                                        </div>
                                        <span class="help-block" v-if="error && response.start_at">{{ response.start_at[0] }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions mt-10">
                                <button type="submit" class="btn btn-primary mr-10">
                                    <span>Save</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </card>
            </div>
        </div>
    </modal>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import DatePicker from 'vue2-datepicker'
import VueTimepicker from 'vue2-timepicker'

export default {
    name: 'fight-create-modal',
    components: { DatePicker, VueTimepicker },
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
            title: null,
            success: false,
            error: false,
            response: null,
            start_at_date: null,
            start_at_time: {
                HH: "00",
                mm: "05",
                ss: "00"
            }
        }
    },
    methods: {
        save(event) {
            event.preventDefault()
            
            axios.post('/api/fights', {
                title : this.title,
                start_at_date: this.start_at_date,
                start_at_time: this.start_at_time.HH+":"+this.start_at_time.mm+":"+this.start_at_time.ss
            }).then(response => {
                this.error = false;
                this.success = true;
                
                this.$modal.hide('fight-create');
                this.$router.push({ name: 'fights'});
                //this.$router.push({ name: 'fights.edit', params: { id: response.data.id } })
                
            }).catch(error => {
                this.response = error.response.data
                this.error = true
                this.success = false;                
            });
        },
        beforeClose (event) {
            this.error = false;
            this.success = false;
            this.$data.title = '';
            this.response = null;
        },
        close()
        {
            this.$modal.hide('fight-create');   
        },
        getTeams()
        {
            var query = this.ArrayToUrl({
                'status' : 1
            });
            axios.get('/teams?'+query).then((response) => {
                this.$set(this, 'teams', response.data);
                this.$parent.teams = this.teams;
            });
        }
    },
}
</script>