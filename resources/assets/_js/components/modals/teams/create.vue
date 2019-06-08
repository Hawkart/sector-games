<template>
    <modal name="teams-create" :adaptive="true" width="60%" :minWidth="minWidth" height="auto" :scrollable="true" :pivotY="pivotY" @before-close="beforeClose">
        <div class="row heading-bg">
        	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <button type="button" class="close pull-right txt-dark" aria-label="Close" @click="close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h5 class="txt-dark">Team create</h5>
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

                        <div class="alert alert-warning alert-dismissable" v-if="error && response.schedule">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                            <i class="zmdi zmdi-alert-circle-o pr-15 pull-left"></i><p class="pull-left">{{ response.schedule[0] }}</p>
                            <div class="clearfix"></div>
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
                                <div class="col-md-12" :class="{ 'has-error': error && response.price }">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Price</label>
                                        <input type="text" class="form-control" placeholder="name" v-model="price">
                                        <span class="help-block" v-if="error && response.price">{{ response.price[0] }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="control-label mb-10">Slug</label>
                                        <input type="text" class="form-control" v-model="slug">
                                        <span class="help-block">Team's link will be: {{ getLink(slug) }}</span>
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

export default {
    name: 'team-create-modal',
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        }),
        slug: function() {
            var slug = this.slugTitle(this.title);
            return slug;
        }
    },
    data() {
        return {
            pivotY: 0.1,
            minWidth: 600,
            title: null,
            price: 0,
            success: false,
            error: false,
            response: null
        }
    },
    methods: {
        save(event) {
            event.preventDefault()
            
            axios.post('/api/teams', {
                title : this.title,
                slug: this.slug,
                price: this.price
            }).then(response => {
                this.error = false;
                this.success = true;
                
                this.$modal.hide('teams-create');
                this.$router.push({ name: 'teams.edit', params: { id: response.data.id } })
                
            }).catch(error => {
                this.response = error.response.data
                this.error = true
                this.success = false;                
            });
        },
        getLink(slug)
        {
            let props = this.$router.resolve({ 
                name: 'team.detail',
                params: { slug: slug },
            });
            
            return location.origin+props.href;
        },
        beforeClose (event) {
            this.error = false;
            this.success = false;
            this.$data.title = '';
            this.response = null;
        },
        close()
        {
            this.$modal.hide('teams-create');   
        }
    },
}
</script>