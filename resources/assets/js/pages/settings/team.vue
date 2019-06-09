<template>
    <card :title="$t('team')">
        <div class="nk-accordion" id="accordion-1" role="tablist" aria-multiselectable="false">
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="accordion-1-1-heading">
                    <a data-toggle="collapse" data-parent="#accordion-1" href="#accordion-1-1" aria-expanded="true" aria-controls="accordion-1-1">
                        {{ $t('game_and_role') }} <span class="panel-heading-arrow fa fa-angle-down"></span>
                    </a>
                </div>
                <div id="accordion-1-1" class="panel-collapse collapse show" role="tabpanel" aria-labelledby="accordion-1-1-heading">
                    <div class="nk-gap"></div>
                    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
                        <alert-success :form="form" :message="$t('info_updated')"/>

                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">{{ $t('game') }}</label>
                            <div class="col-md-7">
                                <select v-model="form.game_id" name="game_id" class='form-control' @change="selectGame">
                                    <option v-for="game in games" v-bind:value="game.id">
                                        {{ game.title }}
                                    </option>
                                </select>
                                <has-error :form="form" field="game_id"/>
                            </div>
                        </div>

                        <div class="form-group row"  v-if="form.game_id!=null">
                            <label class="col-md-3 col-form-label text-md-right">{{ $t('game_roles') }}</label>
                            <div class="col-md-7" style="padding-top: 8px">
                                <div v-for="game_role in game_roles" v-if="game_roles!=null && game_roles.length>0" class="form-check">
                                    <input type="checkbox" class="form-check-input" :value="game_role.id" v-model="form.game_roles">
                                    <label class="form-check-label">{{game_role.title}}</label>
                                </div>
                                <has-error :form="form" field="game_roles"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-9 ml-md-auto">
                                <v-button :loading="form.busy">{{ $t('update') }}</v-button>
                            </div>
                        </div>
                    </form>
                    <div class="nk-gap"></div>

                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="accordion-1-2-heading">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion-1" href="#accordion-1-2" aria-expanded="false" aria-controls="accordion-1-2">
                        {{ $t('create_edit_team') }} <span class="panel-heading-arrow fa fa-angle-down"></span>
                    </a>
                </div>
                <div id="accordion-1-2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-1-2-heading">
                    <div class="nk-gap"></div>

                    <div class="alert alert-warning alert-dismissable mt-20" v-if="!user.confirmed">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        <p>Для создания команды подтвердите почту.</p>
                    </div>

                    <div v-else-if="team!==null && user.team_id>0">
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right label-avatar">{{ $t('avatar') }}</label>
                            <div class="col-md-7">
                                <div class="profile-img-wrap" v-if="team.capt_id==user.id">
                                    <img class="rounded-circle profile-photo w-75px" :src="getImageLink(team.image, 'avatar_team')"/>
                                    <vue-core-image-upload
                                            crop-ratio="1:1"
                                            class="fileupload nk-btn nk-btn-rounded nk-btn-color-main-1 ml-20"
                                            :crop="true"
                                            :headers="header"
                                            :data="{id:team.id}"
                                            @imageuploaded="imageuploaded"
                                            :maxWidth="150"
                                            :url="uploadUrl">
                                        <i class="fa fa-camera">&nbsp;{{ $t('upload') }}</i>
                                    </vue-core-image-upload>
                                </div>
                                <img v-else class="rounded-circle profile-photo w-75px" :src="getImageLink(team.image, 'avatar_team')"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">{{ $t('title') }}</label>
                            <div class="col-md-7 col-form-label text-md-left">
                                <router-link  :to="{ name: 'team', params: { id: team.id }}"  class="vm-title">
                                    {{team.title}}
                                </router-link>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-9 ml-md-auto">
                                <a class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white" @click.prevent="leaveTeam(team.id)" title="Leave the team">{{ $t('leave_team') }}</a>
                            </div>
                        </div>

                        <div class="nk-gap"></div>

                        <div class="alert alert-success alert-dismissable" v-if="inviteAnswerSuccess">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                            <p class="mb-0">Ваш ответ сохранен.</p>
                        </div>
                        <table class="nk-table">
                            <tbody>
                            <tr>
                                <th>{{$t('name')}}</th>
                                <th>{{$t('captain')}}</th>
                                <th>{{$t('status')}}</th>
                                <th>{{$t('actions')}}</th>
                            </tr>
                            <tr v-for="invitation in invitations_to_team">
                                <td>
                                    <router-link  :to="{ name: 'player', params: { id: invitation.user.id }}"  class="vm-title">
                                        <img :src="getImageLink(invitation.user.avatar, 'user_avatar')" class="w-50px mr-10" />
                                        <span>{{ invitation.user.nickname}}</span>
                                    </router-link>
                                </td>
                                <td class="text-center"><i class="fa fa-check text-danger" v-if="invitation.user.id==team.capt_id"></i><span v-else>-</span></td>
                                <td class="text-center">
                                    <span v-if="invitation.status==0">{{$t('status_pending')}}</span>
                                    <span v-if="invitation.status==1">{{$t('status_accepted')}}</span>
                                    <span v-if="invitation.status==2">{{$t('status_denied')}}</span>
                                </td>
                                <td class="text-nowrap text-center">
                                   <span v-if="team.capt_id!=invitation.sender_id && invitation.status==0 && team.capt_id==user.id">
                                        <select @change="answerToInvite(team.id, invitation.user_id, $event)" class='form-control' data-style="form-control btn-default btn-outline">
                                            <option v-for="status in statuses" v-bind:value="status.id">
                                                {{ $t(status.title) }}
                                            </option>
                                        </select>
                                   </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="mt-20">
                            <span class="text-white">{{$t('invite_to_team_through')}}</span>
                            <social-sharing :url="'https://youthleague.ru/teams/'+user.team_id"
                                            title="ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2"
                                            description="ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2. Для учащихся и выпускников общеобразовательных школ и среднеспециальных учебных заведений в возрасте от 14 до 18 лет."
                                            hashtags="Dota2,киберспорт,турнир"
                                            inline-template>
                                <div class="ml-10 d-inline">
                                    <network network="email" class="nk-btn nk-btn-rounded nk-btn-color-main-1">
                                        <i class="fa fa-envelope"></i> Email
                                    </network>
                                    <network network="vk" class="nk-btn nk-btn-rounded nk-btn-color-main-1 btn-vk">
                                        <i class="fa fa-vk"></i> ВКонтакте
                                    </network>
                                    <network network="facebook" class="nk-btn nk-btn-rounded nk-btn-color-main-1 btn-fb">
                                        <i class="fa fa-facebook"></i> Facebook
                                    </network>
                                </div>
                            </social-sharing>
                        </div>
                    </div>

                    <div v-else-if="institution_user===null">
                        <p>{{$t('need_institution_connection')}}</p>
                    </div>

                    <form @submit.prevent="createTeam" @keydown="formTeam.onKeydown($event)" v-else>
                        <alert-success :form="formTeam" :message="$t('info_updated')"/>

                        <div class="form-group row">
                            <label class="col-md-3 col-form-label text-md-right">{{ $t('title') }}</label>
                            <div class="col-md-7">
                                <input v-model="formTeam.title" :class="{ 'is-invalid': formTeam.errors.has('title') }" class="form-control" type="text" name="title">
                                <input v-model="formTeam.slug" :class="{ 'is-invalid': formTeam.errors.has('slug') }" class="form-control" type="hidden" name="slug">
                                <has-error :form="formTeam" field="title"/>
                                <has-error :form="formTeam" field="slug"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-7 offset-md-3 d-flex">
                                <!-- Submit Button -->
                                <v-button :loading="form.busy">
                                    {{ $t('save') }}
                                </v-button>
                            </div>
                        </div>

                    </form>
                    <div class="nk-gap"></div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="accordion-1-4-heading">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion-1" href="#accordion-1-4" aria-expanded="false" aria-controls="accordion-1-4">
                        {{ $t('invitations_to_team') }} <span class="panel-heading-arrow fa fa-angle-down"></span>
                    </a>
                </div>
                <div id="accordion-1-4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-1-4-heading">
                    <div class="nk-gap"></div>

                    <div class="alert alert-warning alert-dismissable mt-20" v-if="!user.confirmed">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        <p>Для просмотра приглашений подтвердите почту.</p>
                    </div>

                    <div v-else-if="invitations!==undefined && invitations.length>0">
                        <div class="alert alert-success alert-dismissable" v-if="inviteAnswerSuccess">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                            <p class="mb-0">Ваш ответ сохранен.</p>
                        </div>
                        <table class="nk-table">
                            <tbody>
                            <tr>
                                <th>{{$t('date')}}</th>
                                <th>{{$t('title')}}</th>
                                <th>{{$t('actions')}}</th>
                            </tr>
                            <tr v-for="invitation in invitations">
                                <td>{{invitation.created_at}}</td>
                                <td>
                                    <router-link  :to="{ name: 'team', params: { id: invitation.team.id }}">
                                        <img :src="getImageLink(invitation.team.image)" class="w-50px mr-10" :alt="invitation.team.title" />
                                        <span>{{ invitation.team.title}}</span>
                                    </router-link>
                                </td>
                                <td class="text-nowrap text-center">
                                    <span v-if="invitation.status==1">{{$t('status_accepted')}}</span>
                                    <span v-if="invitation.status==2">{{$t('status_denied')}}</span>
                                    <select v-else @change="answerToInvite(invitation.team.id, user.id, $event)" class='form-control' data-style="form-control btn-default btn-outline">
                                        <option v-for="status in statuses" v-bind:value="status.id"
                                                :selected="status.id == invitation.status"
                                        >
                                            {{ $t(status.title) }}
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="cus-sat-stat weight-500 txt-warning mt-5" v-else>
                        <p class="text-white">{{$t('no_invitations')}}</p>
                    </div>
                    <div class="nk-gap"></div>
                </div>
            </div>
        </div>

    </card>
</template>

<script>
    import Form from 'vform'
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    import swal from 'sweetalert2'
    import Cookies from 'js-cookie'
    import VueCoreImageUpload from 'vue-core-image-upload'

    export default {
        metaInfo () {
            return { title: this.$t('team') }
        },

        components: {
            'vue-core-image-upload': VueCoreImageUpload,
        },

        data: () => ({
            form: new Form({
                game_id: '',
                game_roles: []
            }),
            formTeam: new Form({
                title: '',
                price: 0,
                slug: ''
            }),

            formTeamEdit: new Form({
                title: '',
                price: 0,
                slug: ''
            }),

            header: {
                Authorization: 'Bearer ' + Cookies.get('token')
            },
            uploadUrl: window.config.apiHost+'/api/teams/logo',

            games: null,
            game_roles: [],
            institution_user: null,
            team: null,
            teams: [],
            invitations_to_team: [],
            invitations: [],
            inviteAnswerSuccess: false,
            statuses: [
                {id:0, title: 'pending'},
                {id:1, title: 'accept'},
                {id:2, title: 'deny'}
            ],
        }),

        computed:{
            ...mapGetters({
                user: 'auth/user'
            }),
            chars: function ()
            {
                var str = this.$t('alphabet');
                return str.split(",");
            },
            slug: function() {
                var slug = this.slugTitle(this.formTeam.title);
                return slug;
            }
        },

        created () {
            // Fill the form with user data.
            this.form.keys().forEach(key => {
                if(!(key=='game_roles' && this.user[key]===null))
                {
                    this.form[key] = this.user[key]
                }
            })
        },

        mounted() {
            this.getGames();
            if(this.user.game_id!=null)
                this.getGameRoles(this.user.game_id);

            //For searching people from the same school
            this.getUserSchools();

            if(this.user.team_id>0)
            {
                this.getUserTeam();
                this.getInvitationsToTeam();
            }else{
                this.getTeamTitle();
            }

            this.getInvitations();
        },

        methods: {

            async getGames()
            {
                await axios.get('/api/games').then((response) => {
                    this.$set(this, 'games', response.data);
                });
            },

            async getGameRoles(game_id)
            {
                var query = this.ArrayToUrl({
                    "game_id" : game_id
                });

                await axios.get('/api/game_roles?'+query).then((response) => {
                    this.$set(this, 'game_roles', response.data);
                });
            },

            async update () {
                const { data } = await this.form.post('/api/users')

                this.$store.dispatch('auth/updateUser', { user: data.data })
            },

            async selectGame()
            {
                await this.getGameRoles(this.form.game_id);
            },

            async createTeam()
            {
                this.formTeam.slug = this.slug;
                const { data } = await this.formTeam.post('/api/teams');

                this.$set(this, 'team', data);
                this.user.team_id = this.team.id;
                this.$store.dispatch('auth/updateUser', { user: this.user })

                this.getInvitationsToTeam();
            },

            async getUsersFromSchool(institution_id)
            {
                var query = this.ArrayToUrl({
                    'id-not' : this.user.id
                });
                return await axios.get('/api/institutions/' + institution_id+'/users?'+query);
            },

            async getUserSchools() {
                await axios.get('/api/institution_user?user_id=' + this.user.id).then((response) => {

                    if(response.data.length>0)
                    {
                        this.$set(this, 'institution_user', response.data[0]);
                    }

                });

                if(this.institution_user!==null)
                {
                    const institution_users = await this.getUsersFromSchool(this.institution_user.institution_id);
                }

            },

            async getTeamTitle()
            {
                const { data } = await axios.get('/api/users/' + this.user.id+'/getTeamTitle');
                this.formTeam.title = data;
            },

            getUserTeam()
            {
                axios.get('/api/teams/'+this.user.team_id).then((response) => {
                    this.$set(this, 'team', response.data);
                    this.$set(this.user, 'team', response.data);
                });
            },

            getInvitationsToTeam()
            {
                var query = this.ArrayToUrl({
                    "_with" : 'user'
                });

                axios.get('/api/teams/'+this.user.team_id+'/invitations?'+query).then((response) => {
                    this.$set(this, 'invitations_to_team', response.data);
                });
            },

            getInvitations()
            {
                var query = this.ArrayToUrl({
                    'user_id' : this.user.id,
                    //'status' : 0,
                    'sender_id-not': this.user.id,
                    "_with" : 'user,team'
                });

                axios.get('/api/team_user?'+query).then((response) => {
                    this.$set(this, 'invitations', response.data);
                });
            },

            answerToInvite(team_id, user_id, event)
            {
                var team_id = team_id;
                //var user_id = this.user.id;
                var status = event.target.value;
                var _self = this;

                /*if(this.user.free_player && parseInt(this.user.team_id)>0)
                {
                    swal({
                        title: 'Вы уверены, что хотите присоединиться к команде?',
                        text: "Вы будете удалены из текущей команды!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Да, подтверждаю приглашение!'
                    }).then(function (result) {

                        if (result.value) {
                            axios.put('/api/teams/' + team_id + '/users/' + user_id, {status: status}).then(response => {
                                this.inviteAnswerSuccess = true;
                            }).catch(error => {

                                swal({
                                    type: 'error',
                                    title: 'Error!',
                                    html: error.response.data.error
                                });
                            });
                        }
                    })

                }else{*/

                    swal({
                        title: 'Изменить статус приглашения?',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Да!'
                    }).then(function (result) {

                        if (result.value) {

                            axios.put('/api/teams/' + team_id + '/users/' + user_id, {status: status}).then((response) => {
                               // _self.inviteAnswerSuccess = true;
                                _self.$set(_self, 'inviteAnswerSuccess', true);
                            });
                        }
                    })
                //}
            },

            leaveTeam(team_id)
            {
                var user_id = this.user.id;

                swal({
                    title: 'Вы уверены, что хотите покинуть команду?',
                    //text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Да!'
                }).then(function (result) {

                    if (result.value) {
                        axios.put('/api/teams/' + team_id + '/users/' + user_id, {status: 2}).then(response => {
                            swal(
                                'Deleted!',
                                'You has been excluded from the team.',
                                'success'
                            );
                        });
                    }
                })
            },

            imageuploaded(response) {
                this.team.image = response.image;
            },

            sendInvites(){
                var _self = this;

                this.selected.forEach(function (user) {
                    _self.invite(user);
                });

                swal({
                    type: 'success',
                    title: 'Invitations were sent!',
                    html: 'Invitations were sent to all players.'
                })
                //change team parent
            },
        }
    }
</script>