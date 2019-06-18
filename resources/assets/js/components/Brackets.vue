<template>
    <div class="tournament-bracket tournament-bracket--rounded">
        <div class="tournament-bracket__round tournament-bracket__round--quarterfinals" v-for="bracket in brackets.rounds" :key="bracket.round.id">
            <h3 class="tournament-bracket__round-title">{{bracket.round.title}}</h3>
            <ul class="tournament-bracket__list"
                :class="countClass(bracket, brackets.type)"
            >
                <li class="tournament-bracket__item" v-for="match in bracket.matches" :key="match.id">
                    <div class="tournament-bracket__match" tabindex="0">
                        <table class="tournament-bracket__table">
                            <caption class="tournament-bracket__caption">
                                {{match.title}}, <time datetime="1998-02-18">{{moment( convertTime(match.start_at), "YYYY-MM-DD h:mm:ss").format('D MMM, HH:mm') }} МСК</time>
                            </caption>
                            <thead class="sr-only">
                            <tr>
                                <th>Team</th>
                                <th>Score</th>
                            </tr>
                            </thead>
                            <tbody class="tournament-bracket__content">
                                <tr class="tournament-bracket__team" :class="{' tournament-bracket__team--winner': (team.id!=undefined && team.id==match.winner_id)}" v-for="(team, index) in match.teams" :key="index" v-if="match.teams.length>0">
                                    <td class="tournament-bracket__country">
                                        <abbr class="tournament-bracket__code" v-if="team.id!=undefined">{{team.title}}</abbr>
                                        <abbr class="tournament-bracket__code" v-else>Winner of R{{bracket.round.number-1}}</abbr>
                                        <span class="tournament-bracket__flag flag-icon"></span>
                                    </td>
                                    <td class="tournament-bracket__score">
                                        <span class="tournament-bracket__number" v-if="match.winner_id>0">{{match.result[index]}}</span>
                                        <span class="tournament-bracket__number" v-else>0</span>
                                    </td>
                                </tr>
                                <template v-else>
                                    <tr class="tournament-bracket__team">
                                        <td class="tournament-bracket__country">
                                            <abbr class="tournament-bracket__code">Winner of R{{bracket.round.number-1}}</abbr>
                                            <span class="tournament-bracket__flag flag-icon"></span>
                                        </td>
                                        <td class="tournament-bracket__score">
                                            <span class="tournament-bracket__number">0</span>
                                        </td>
                                    </tr>
                                    <tr class="tournament-bracket__team">
                                        <td class="tournament-bracket__country">
                                            <abbr class="tournament-bracket__code">Winner of R{{bracket.round.number-1}}</abbr>
                                            <span class="tournament-bracket__flag flag-icon"></span>
                                        </td>
                                        <td class="tournament-bracket__score">
                                            <span class="tournament-bracket__number">0</span>
                                        </td>
                                    </tr>
                                </template>

                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
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
            }
        }
    }
</script>