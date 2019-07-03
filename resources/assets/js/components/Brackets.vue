<template>
    <div class="tournament">
        <div class="tournament-nav hidden">
            <div class="tournament-nav__list">
                <div class="tournament-nav__round" v-for="bracket in brackets.rounds" :key="'high-nav-'+bracket.round.id">
                    <div class="tournament-nav__round-box" :class="{'active': bracket.round.number==1}" :data-round="bracket.round.number">{{bracket.round.title}}</div>
                </div>
            </div>
        </div>
        <div class="tournament-head">
            <div class="tournament-head__arr">
                <div class="tournament-head__arr-prev disabled">
                    <img src="/images/arr-left.svg" alt="">
                </div>
                <div class="tournament-head__arr-next">
                    <img src="/images/arr-right.svg" alt="">
                </div>
            </div>
            <div class="tournament-head__list">
                <div class="tournament-head__round" v-for="bracket in brackets.rounds" :key="'head-nav-'+bracket.round.id">
                    <div class="tournament-head__round-box">
                        <div class="tournament-head__round-title">{{bracket.round.title}}</div>
                        <div class="tournament-head__round-info">
                            <div class="tournament-head__round-date">
                                <img src="/images/date.svg" alt="">
                                <span>{{ moment( convertTime(bracket.round.datetime), 'YYYY-MM-DD h:mm:ss').format('DD.MM.YYYY') }}</span>
                            </div>
                            <div class="tournament-head__round-time">
                                <img src="/images/clock.svg" alt="">
                                <span>{{ moment( convertTime(bracket.round.datetime), 'YYYY-MM-DD h:mm:ss').format('h:mm') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tournament-body">
            <div class="tournament-list">
                <div class="tournament-list__round" v-for="bracket in brackets.rounds" :key="'tlist-'+bracket.round.id">
                    <div class="tournament-list__group" :class="{'complete': match.winner_id>0}" v-for="match in bracket.matches" :key="'tlist-match-'+match.id">
                        <div class="tournament-list__team" :class="{'win': (team.id!=undefined && team.id==match.winner_id)}" v-for="(team, index) in match.teams" :key="'tlist-match-team-'+match.id+'-'+index">
                            <div class="tournament-list__team-box">
                                <div class="tournament-list__team-text">
                                    <div class="tournament-list__team-logo">
                                        <img :src="getImageLink(team.image, 'avatar_team')" :alt="team.title" v-if="team.id>0" />
                                    </div>
                                    <div class="tournament-list__team-name">
                                        <router-link  :to="{ name: 'team', params: { id: team.id }}" v-if="team.id>0">
                                            {{team.title}}
                                        </router-link>
                                        <span v-else>
                                            {{team.title}}
                                        </span>
                                    </div>
                                </div>
                                <div class="tournament-list__team-count">
                                    <span v-if="match.winner_id>0">{{match.result[index]}}</span>
                                    <span v-else>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tournament-nav">
            <div class="tournament-nav__arr">
                <div class="tournament-nav__arr-prev disabled">
                    <img src="/images/arr-left.svg" alt="">
                </div>
                <div class="tournament-nav__arr-next">
                    <img src="/images/arr-right.svg" alt="">
                </div>
            </div>
            <div class="tournament-nav__list">
                <div class="tournament-nav__round" v-for="bracket in brackets.rounds" :key="'bottom-nav-'+bracket.round.id">
                    <div class="tournament-nav__round-box" :class="{'active': bracket.round.number==1}" :data-round="bracket.round.number">{{bracket.round.title}}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    import swal from 'sweetalert2'
    import { loadMessages } from '~/plugins/i18n'
    import Vue from 'vue'

    export default {
        computed: {
            ...mapGetters({
                user: 'auth/user',
                authenticated: 'auth/check',
                locale: 'lang/locale'
            })
        },

        data() {
            return {
                brackets: [],
                pagination: []
            }
        },

        mounted() {
            this.getTournamentBrackets();
        },
        methods:
        {
            async getTournamentBrackets()
            {
                try {
                    const response = await axios.get('/api/tournaments/'+this.$route.params.id+"/brackets");
                    this.$set(this, 'brackets', response.data);

                    this.bracketsSlinkInit();
                } catch (e) {
                    this.errors.push(e);
                }
            },
            convertTime(start_at)
            {
                return this.dateConvertUTC(start_at, -1)
            },
            countClass(bracket, type)
            {
                var result = [];

                if(!type)
                {
                    if(bracket.round.number==1)
                        result.push('d-block');
                    else
                        result.push('mt-60');
                }

                return result;
            },
            bracketsSlinkInit()
            {
                /*Vue.nextTick(() => {
                    this.slickBracketInit();
                });*/
                //setTimeout(function() {
                    // this.slickBracketInit();
                //}, 1000);

            }
        }
    }
</script>