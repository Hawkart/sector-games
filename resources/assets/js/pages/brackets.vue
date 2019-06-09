<template>
    <main id="tournament">

        <ul :class="'round round-'+round" v-for="(bracket, round) in brackets">
            <li class="spacer">&nbsp;</li>

            <template v-for="cell in bracket">
                <li class="game game-top" v-bind:class="{ 'winner': cell.score[0]>cell.score[1] || cell.team_2==null || cell.team_2.id==null}">
                    <router-link  :to="{ name: 'team.detail', params: { slug: cell.team_1.id }}" class="vm-title" v-if="cell.team_1!=null && cell.team_1.id!=null">
                        <img :src="getImageLink(cell.team_1.image, 'avatar_team')" class="img-responsive team-image w-30" :alt="cell.team_1.title" />
                        <span>{{cell.team_1.title}}</span>
                    </router-link>
                    <span v-if="cell.team_1!=null && cell.team_1.id!=null" class="score">{{cell.score[0]}}</span>
                    <span v-else>&nbsp;</span>
                </li>
                <li class="game game-spacer">&nbsp;</li>
                <li class="game game-bottom" v-bind:class="{ 'winner': cell.score[1]>cell.score[0]}">
                    <router-link  :to="{ name: 'team.detail', params: { slug: cell.team_2.id }}" class="vm-title" v-if="cell.team_2!=null && cell.team_2.id!=null">
                        <img :src="getImageLink(cell.team_2.image, 'avatar_team')" class="img-responsive team-image w-30" :alt="cell.team_2.title" />
                        <span>{{cell.team_2.title}}</span>
                    </router-link>
                    <span v-if="cell.team_2!=null && cell.team_2.id!=null" class="score">{{cell.score[1]}}</span>
                    <span v-else>&nbsp;</span>
                </li>

                <li class="spacer">&nbsp;</li>
            </template>
        </ul>
    </main>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                brackets: [],
                errors: []
            }
        },
        mounted() {
            this.getTournamentBrackets();
        },
        methods : {
            async getTournamentBrackets()
            {
                try {
                    const response = await axios.get('/api/tournaments/15094/brackets');
                    this.$set(this, 'brackets', response.data);
                } catch (e) {
                    this.errors.push(e);
                }
            }
        }
    }
</script>

<style>
    .bracket {
        display: inline-block;
        white-space: nowrap;
        font-size: 0;
    }
    .bracket .round {
        display: inline-block;
        vertical-align: middle;
    }
    .bracket .round .winners > div {
        display: inline-block;
        vertical-align: middle;
    }
    .bracket .round .winners > div.matchups .matchup:last-child {
        margin-bottom: 0 !important;
    }
    .bracket .round .winners > div.matchups .matchup .participants {
        border-radius: 0.25rem;
        overflow: hidden;
    }
    .bracket .round .winners > div.matchups .matchup .participants .participant {
        box-sizing: border-box;
        color: #858585;
        border-left: 0.25rem solid #858585;
        background: white;
        width: 14rem;
        height: 3rem;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
    }
    .bracket .round .winners > div.matchups .matchup .participants .participant.winner {
        color: #60c645;
        border-color: #60c645;
    }
    .bracket .round .winners > div.matchups .matchup .participants .participant.loser {
        color: #dc563f;
        border-color: #dc563f;
    }
    .bracket .round .winners > div.matchups .matchup .participants .participant:not(:last-child) {
        border-bottom: thin solid #f0f2f2;
    }
    .bracket .round .winners > div.matchups .matchup .participants .participant span {
        margin: 0 1.25rem;
        line-height: 3;
        font-size: 1rem;
    }
    .bracket .round .winners > div.connector.filled .line, .bracket .round .winners > div.connector.filled.bottom .merger:after, .bracket .round .winners > div.connector.filled.top .merger:before {
        border-color: #60c645;
    }
    .bracket .round .winners > div.connector .line, .bracket .round .winners > div.connector .merger {
        box-sizing: border-box;
        width: 2rem;
        display: inline-block;
        vertical-align: top;
    }
    .bracket .round .winners > div.connector .line {
        border-bottom: thin solid #c0c0c8;
        height: 4rem;
    }
    .bracket .round .winners > div.connector .merger {
        position: relative;
        height: 8rem;
    }
    .bracket .round .winners > div.connector .merger:before, .bracket .round .winners > div.connector .merger:after {
        content: "";
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 50%;
        border: 0 solid;
        border-color: #c0c0c8;
    }
    .bracket .round .winners > div.connector .merger:before {
        border-right-width: thin;
        border-top-width: thin;
    }
    .bracket .round .winners > div.connector .merger:after {
        border-right-width: thin;
        border-bottom-width: thin;
    }

    .bracket .round.eightfinals .winners:not(:last-child) {
        margin-bottom: 2rem;
    }
    .bracket .round.eightfinals .winners .matchups .matchup:not(:last-child) {
        margin-bottom: 2rem;
    }

    .bracket .round.quarterfinals .winners:not(:last-child) {
        margin-bottom: 2rem;
    }
    .bracket .round.quarterfinals .winners .matchups .matchup:not(:last-child) {
        margin-bottom: 2rem;
    }
    .bracket .round.semifinals .winners .matchups .matchup:not(:last-child) {
        margin-bottom: 10rem;
    }
    .bracket .round.semifinals .winners .connector .merger {
        height: 16rem;
    }
    .bracket .round.semifinals .winners .connector .line {
        height: 8rem;
    }
    .bracket .round.finals .winners .connector .merger {
        height: 3rem;
    }
    .bracket .round.finals .winners .connector .line {
        height: 1.5rem;
    }



    /*
     *  Flex Layout Specifics
    */
    main{
        display:flex;
        flex-direction:row;
    }
    .round{
        display:flex;
        flex-direction:column;
        justify-content:center;
        min-width:250px;
        list-style:none;
        padding:0;
    }
    .round .spacer{ flex-grow:1; margin-bottom: 30px;}
    .round .spacer:first-child,
    .round .spacer:last-child{ flex-grow:.5; margin-bottom: 0;}

    .round .game-spacer{
        flex-grow:1;
    }

    li.game{
        padding-left:5px;
        position: relative;
    }

    li.game .vm-title span
    {
        margin-left: 5px;
        margin-right: 50px;
    }
    li.game .score{
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid hsla(0,0%,100%,.1);
        border-radius: 2px;
        margin-left: 8px;
        font-size: 13px;
        line-height: 28px;
        text-align: center;
        height: 30px;
        width: 30px;
        color: #ea6c41;
        margin-right: 0px;
    }

    li.game-top{ border-bottom:1px solid #aaa; padding-bottom: 5px; }

    li.game-spacer{
        border-right:1px solid #aaa;
        min-height:80px;
    }

    li.game-bottom{
        border-top:1px solid #aaa;
        padding-top: 5px;
    }

    li.game.winner span{
        font-weight:bold;
    }
    li.game-bottom.winner{
        border-top: 2px solid #469408;
    }
    li.game-top.winner{
        border-bottom: 2px solid #469408;
    }
    li.game.winner .score{
        color: #469408;
    }

    li.game-bottom .score
    {
        top: 5px;
    }
    .w-30{
        width: 30px !important;
    }

    .vm-title {
        width: 100%;
    }

    .vm-title span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .vm-title span {
        margin-left: 20px;
        width: calc(100% - 100px);
    }

    .vm-title, .vm-title .img-responsive, .vm-title span {
        display: inline-block;
        vertical-align: middle;
    }
</style>