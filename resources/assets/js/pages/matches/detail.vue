<template>
    <card v-if="fight!=null">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div class="nk-match">
                    <div class="nk-match-team-left">

                        <router-link  :to="{ name: 'team', params: { id: fight.invitations[0].team.id }}">
                            <span class="nk-match-team-logo">
                                <img :src="getImageLink(fight.invitations[0].team.image, 'avatar_team')" class="w-64px mr-10"/>
                            </span>
                            <span class="nk-match-team-name">
                                {{fight.invitations[0].team.institution.title}}, {{fight.invitations[0].team.institution.location.title}},<br/>
                                {{ fight.invitations[0].team.title}}
                            </span>
                        </router-link>

                    </div>
                    <div class="nk-match-status">
                        <router-link  :to="{ name: 'match', params: { id: fight.id }}">
                            <span class="nk-match-status-vs">
                                <template v-if="fight.id==24">VS (bo5)</template>
                                <template v-else>VS (bo3)</template>
                            </span>
                            <span class="nk-match-status-date">{{ moment.utc(fight.start_at, "YYYY-MM-DD h:mm:ss").format('MMMM Do, HH:mm') }} МСК</span>

                            <template v-if="checkUpcoming(fight.start_at)">
                                <span class="nk-match-score">{{$t('upcoming')}}</span>
                            </template>
                            <template v-else-if="fight.winner_id>0 && fight.result!=null">
                                <span class="nk-match-score bg-dark-1">
                                <template v-if="parseInt(fight.result[0])>parseInt(fight.result[1]) && fight.invitations[0].team.id==fight.winner_id">
                                    {{fight.result[0]}} : {{fight.result[1]}}
                                </template>
                                <template v-else-if="parseInt(fight.result[1])>parseInt(fight.result[0]) && fight.invitations[1].team.id==fight.winner_id">
                                    {{fight.result[0]}} : {{fight.result[1]}}
                                </template>
                                <template v-else>
                                    {{fight.result[1]}} : {{fight.result[0]}}
                                </template>
                                </span>
                            </template>
                            <template v-else>
                                <span class="nk-match-score bg-success">{{$t('online')}}</span>
                            </template>

                        </router-link>
                    </div>
                    <div class="nk-match-team-right">
                        <router-link  :to="{ name: 'team', params: { id: fight.invitations[1].team.id }}">
                            <span class="nk-match-team-name">
                                {{fight.invitations[1].team.institution.title}}, {{fight.invitations[1].team.institution.location.title}},<br/>
                                {{ fight.invitations[1].team.title}}
                            </span>
                            <span class="nk-match-team-logo">
                                <img :src="getImageLink(fight.invitations[1].team.image, 'avatar_team')" class="w-64px ml-10"/>
                            </span>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>

        <!--<div class="row mt-20">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" v-if="fight.invitations[0].twitch_link!=null">
                <div class="responsive-embed responsive-embed-16x9">
                    <iframe :src="fight.invitations[0].twitch_link" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" v-if="fight.invitations[1].twitch_link!=null">
                <div class="responsive-embed responsive-embed-16x9">
                    <iframe :src="fight.invitations[1].twitch_link" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                </div>
            </div>
        </div>-->

        <div class="row mt-20">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="responsive-embed responsive-embed-16x9">
                    <iframe src="https://player.twitch.tv/?channel=youthleagueru" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                </div>
            </div>
        </div>

        <div class="row mt-10 mb-30" v-if="chat!==null && (fight.invitations[0].team.capt_id==user.id || fight.invitations[1].team.capt_id==user.id || fight.judge_id==user.id || user.role_id==1)">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <match-chat :channel="chat"></match-chat>
            </div>
        </div>

        <div class="row mt-20" v-if="authenticated && fight.status!=2 && fight.status!=3
                      && (fight.invitations[0].team.capt_id==user.id || fight.invitations[1].team.capt_id==user.id)"
        >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <form @submit.prevent="matchExSave" @keydown="form.onKeydown($event)">

                    <alert-success :form="form" :message="$t('info_updated')"/>
                    <alert-error :form="form"></alert-error>

                    <!--<div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('match_extern_id') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.extern_match_id" :class="{ 'is-invalid': form.errors.has('extern_match_id') }" class="form-control" type="text" name="extern_match_id">
                            <has-error :form="form" field="match_extern_id"/>
                        </div>
                    </div>-->

                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('twitch_link') }}</label>
                        <div class="col-md-7">
                            <input v-model="form.twitch_link" placeholder="https://www.twitch.tv/eulcs" :class="{ 'is-invalid': form.errors.has('twitch_link') }" class="form-control" type="text" name="twitch_link">
                            <has-error :form="form" field="twitch_link"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-7 offset-md-3 d-flex">
                            <v-button :loading="form.busy">
                                {{ $t('save') }}
                            </v-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="row mt-20" v-if="authenticated && fight.status!=2 && fight.status!=3
                      && (fight.invitations[0].team.capt_id==user.id || fight.invitations[1].team.capt_id==user.id)"
        >
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <form @submit.prevent="saveResult" @keydown="formResult.onKeydown($event)">

                    <alert-success :form="formResult" :message="$t('info_updated')"/>
                    <alert-error :form="formResult"></alert-error>

                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('match_result') }}</label>
                        <div class="col-md-3">
                            <input v-model="result_1" class="form-control" type="number">
                        </div>
                        <label class="col-md-1 col-form-label text-center">
                            :
                        </label>
                        <div class="col-md-3">
                            <input v-model="result_2" class="form-control" type="number">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('winner') }}</label>
                        <div class="col-md-7">
                            <select v-model="winner_id" class='form-control'>
                                <option v-for="invitation in fight.invitations" v-bind:value="invitation.team.id">
                                    {{ invitation.team.title }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-7 offset-md-3 d-flex">
                            <v-button :loading="formResult.busy">
                                {{ $t('save') }}
                            </v-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="row mt-20" v-if="authenticated && fight.judge_id==user.id  && fight.status!=3">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" v-for="invitation in fight.invitations">
                <div class="form-group row" v-if="invitation.match_result!=null">
                    <label class="col-md-5 col-form-label text-md-right">{{ $t('match_result') }}:</label>
                    <label class="col-md-7 col-form-label">
                        {{invitation.match_result.result_1}} : {{invitation.match_result.result_2}}
                    </label>
                </div>

                <div class="form-group row" v-if="invitation.match_result!=null">
                    <label class="col-md-5 col-form-label text-md-right">{{ $t('winner') }}:</label>
                    <label class="col-md-7 col-form-label">
                        <template v-if="invitation.match_result.winner_id==fight.invitations[0].team.id">
                            {{fight.invitations[0].team.title}}
                        </template>
                        <template v-else>
                            {{fight.invitations[1].team.title}}
                        </template>
                    </label>
                </div>
            </div>
        </div>

        <div class="row mt-20" v-if="authenticated && fight.judge_id==user.id && fight.status!=3">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <form @submit.prevent="saveFight" @keydown="formFight.onKeydown($event)">

                    <alert-success :form="formFight" :message="$t('info_updated')"/>
                    <alert-error :form="formFight"></alert-error>

                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('match_result') }}</label>
                        <div class="col-md-3">
                            <input v-model="result_1" class="form-control" type="number">
                        </div>
                        <label class="col-md-1 col-form-label text-center">
                            :
                        </label>
                        <div class="col-md-3">
                            <input v-model="result_2" class="form-control" type="number">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">{{ $t('winner') }}</label>
                        <div class="col-md-7">
                            <select v-model="winner_id" class='form-control'>
                                <option v-for="invitation in fight.invitations" v-bind:value="invitation.team.id">
                                    {{ invitation.team.title }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-7 offset-md-3 d-flex">
                            <v-button :loading="formFight.busy">
                                {{ $t('save') }}
                            </v-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="row mt-20">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div v-if="fight.judge!=null">
                    <label>{{$t('judge')}}</label>: {{fight.judge.name}}<br/>
                    <div v-html="fight.judge.description"></div>
                </div>
                <div v-if="fight.commentator!=null" class="mt-20">
                    <label>{{$t('commentator')}}</label>: {{fight.commentator.name}}<br/>
                    <div v-html="fight.commentator.description"></div>
                </div>
            </div>
        </div>

    </card>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'
    import { loadMessages } from '~/plugins/i18n'
    import Form from 'vform'
    import MatchChat from "../../components/MatchChat";

    export default {
        components: {MatchChat},
        metaInfo () {
            return { title: this.$t('players') }
        },

        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
                locale: 'lang/locale'
            })
        },

        data() {
            return {
                fight: [],
                form: new Form({
                    //extern_match_id: '',
                    twitch_link: ''
                }),
                formResult: new Form({
                    match_result: ''
                }),
                formFight: new Form({
                    result: '',
                    winner_id: ''
                }),
                result_1: '',
                result_2: '',
                winner_id: '',
                chat: null
            }
        },

        mounted() {
            loadMessages(this.locale);
            this.moment.locale(this.locale);
            this.getFight();
        },
        methods:
            {
                getFightChat: function()
                {
                    axios.get('/api/fights/'+this.$route.params.id+'/thread').then((response) => {
                        this.$set(this, 'chat', response.data);
                    });
                },
                getFight: function()
                {
                    var query = this.ArrayToUrl({
                        '_with' : 'invitations.team,invitations.team.institution,invitations.team.institution.location,judge,commentator,threads'
                    });

                    axios.get('/api/fights/'+this.$route.params.id+"?"+query).then((response) => {
                        var fight = response.data;
                        fight.start_at = this.dateConvertUTC(fight.start_at, -1);
                        this.$set(this, 'fight', fight);

                        if(this.authenticated)
                        {
                            var _self = this;
                            if(this.fight.status!=3)
                            {
                                this.fight.invitations.forEach(function(invitation)
                                {
                                    if(invitation.team.capt_id==_self.user.id)
                                    {
                                        //_self.form.extern_match_id = invitation.extern_match_id;
                                        _self.form.twitch_link = invitation.twitch_link;

                                        if(invitation.match_result!=null)
                                        {
                                            _self.formResult.match_result = invitation.match_result;
                                            _self.result_1 = invitation.match_result.result_1;
                                            _self.result_2 = invitation.match_result.result_2;
                                            _self.winner_id = invitation.match_result.winner_id;
                                        }
                                    }
                                });
                            }else{
                                this.result_1 = this.fight.result[0];
                                this.result_2 = this.fight.result[1];
                                this.winner_id = this.fight.winner_id;
                            }

                            if(fight.invitations[0].team.capt_id==this.user.id || fight.invitations[1].team.capt_id==this.user.id || fight.judge_id==this.user.id || this.user.role_id==1)
                                this.getFightChat();
                        }
                    });
                },
                checkUpcoming(start_at)
                {
                    var d1 = new Date(start_at);
                    var d2 = new Date();
                    if(d1.getTime()-d2.getTime()>0)
                        return true;

                    return false;
                },
                matchExSave()
                {
                    this.form.put('/api/fights/'+this.fight.id+'/teams/'+this.user.team_id).then((response) =>
                    {

                        var _self = this;
                        this.fight.invitations.map(function(invitation)
                        {
                            if(invitation.team.capt_id==_self.user.id)
                            {
                                invitation.twitch_link = _self.form.twitch_link;
                            }
                        });
                    });
                },
                saveResult()
                {
                    this.formResult.match_result = {
                        'result_1' : this.result_1,
                        'result_2': this.result_2,
                        'winner_id': this.winner_id
                    };

                    this.formResult.put('/api/fights/'+this.fight.id+'/teams/'+this.user.team_id);
                },
                saveFight()
                {
                    this.formFight.result = [this.result_1, this.result_2];
                    this.formFight.winner_id = this.winner_id;
                    this.formFight.put('/api/fights/'+this.fight.id);
                }
            },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.getFights();
            }
        }
    }
</script>