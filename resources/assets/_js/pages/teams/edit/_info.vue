<template>
<div>
    <div class="row" v-if="team!==null">
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
                        <p>Data updated!</p>
                    </div>
                    <form autocomplete="off" @submit="save">
                        <div class="row">
                            <div class="col-md-6" :class="{ 'has-error': error && response.title }">
                                <div class="form-group">
                                    <label class="control-label mb-10">Title</label>
                                    <input type="text" class="form-control" placeholder="name" v-model="team.title">
                                    <span class="help-block" v-if="error && response.title">{{ response.title[0] }}</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label mb-10">Slug</label>
                                    <input type="text" class="form-control" v-model="slug">
                                    <span class="help-block">Team's link will be: {{ getLink(slug) }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group" :class="{ 'has-error': error && response.quantity }">
                                    <label class="control-label mb-10">Minimum players to activate the team</label>
                                    <p>{{team.quantity}}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group" :class="{ 'has-error': error && response.game_id }">
                                    <label class="control-label mb-10">Game</label>
                                    <p>{{ team.game.title }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group" :class="{ 'has-error': error && response.price }">
                                    <label class="control-label mb-10">Price of team</label>
                                    <p>{{team.price}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-actions mt-10">
                            <button type="submit" class="btn btn-primary btn-icon left-icon mr-10">
                                <i class="zmdi zmdi-edit"></i> <span>Edit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </card>
        </div>
    </div>
</div>
</template>


<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    metaInfo () {
        return {
            title: 'Team',
        }
    },
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        }),
        slug: function() {
            var slug = this.slugTitle(this.team.title);
            this.team.slug = slug;
            return slug;
        }       
    },
    ready() {
        Event.listen('teamEditLoad', event => {
            this.team = event.team;
        });
    },
    data() {
        return {
            success: false,
            error: false,
            team: null,
            response: null
        }
    },
    mounted() {
        Event.listen('teamEditLoad', event => {
            this.team = event.team;
        });
        
        this.team = this.$parent.team;
    },
    methods: {       
        save(event) {
            event.preventDefault()
            
            axios.post('/api/teams/'+this.team.id, this.team).then(response => {
                this.error = false;
                this.success = true;
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
        }
    },
}
</script>