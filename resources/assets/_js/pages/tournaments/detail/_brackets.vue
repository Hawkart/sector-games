<template>
<div> 
     <div class="row" v-if="tournament!==null && tournament.brackets!=null">
    	<div class="col-lg-12 col-md-12 col-xs-12">
            <card>
                <main id="tournament">
                
                	<ul :class="'round round-'+round" v-for="(bracket, round) in tournament.brackets">
                		<li class="spacer">&nbsp;</li>

                        <template v-for="cell in bracket">
                            <li class="game game-top" v-bind:class="{ 'winner': cell.score[0]>cell.score[1] || cell.team_2==null || cell.team_2.id==null}">
                            
                                <router-link  :to="{ name: 'team.detail', params: { slug: cell.team_1.id }}" class="vm-title" v-if="cell.team_1!=null && cell.team_1.id!=null">
                                    <img :src="getImageLink(cell.team_1.image, 'avatar_team')" class="img-responsive team-image w-30" :alt="cell.team_1.title" />
                                    <span>{{cell.team_1.title}}</span>
                                </router-link>
                                <!--<a class="vm-title" v-else>
                                    <img :src="getImageLink(null, 'avatar_team')" class="img-responsive team-image w-30" />
                                    <span style="float: none;">&nbsp</span>
                                </a>-->
                                
                                <span v-if="cell.team_1!=null && cell.team_1.id!=null" class="score">{{cell.score[0]}}</span>
                                <span v-else>&nbsp;</span>
                            </li>
                    		<li class="game game-spacer">&nbsp;</li>
                    		<li class="game game-bottom" v-bind:class="{ 'winner': cell.score[1]>cell.score[0]}">
                                <router-link  :to="{ name: 'team.detail', params: { slug: cell.team_2.id }}" class="vm-title" v-if="cell.team_2!=null && cell.team_2.id!=null">
                                    <img :src="getImageLink(cell.team_2.image, 'avatar_team')" class="img-responsive team-image w-30" :alt="cell.team_2.title" />
                                    <span>{{cell.team_2.title}}</span>
                                </router-link>
                                <!--<a class="vm-title" v-else>
                                    <img :src="getImageLink(null, 'avatar_team')" class="img-responsive team-image w-30" />
                                    <span style="float: none;">&nbsp</span>
                                </a>-->
                                
                                <span v-if="cell.team_2!=null && cell.team_2.id!=null" class="score">{{cell.score[1]}}</span>
                                <span v-else>&nbsp;</span>
                            </li>
                    
                    		<li class="spacer">&nbsp;</li>
                        </template>
                	</ul>
                			
                </main>
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
    computed: {
        ...mapGetters({
            user: 'authUser',
            authenticated: 'authCheck',
        })     
    },
    ready() {
        Event.listen('tournamentEditLoad', event => {
            this.tournament = event.tournament;
        });
    },
    data() {
        return {
            success: false,
            error: false,
            tournament: null,
            response: null
        }
    },
    mounted() {
        Event.listen('tournamentEditLoad', event => {
            this.tournament = event.tournament;
        });
        
        this.tournament = this.$parent.tournament;
    }
}
</script>


<style>
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
</style>