<template>
<div>

    <div class="container-fluid parallax-simple rel mt-50" style="background-image: url(http://spartacoin.com/images/BlizzCon8.jpg);" v-if="step==1">
    	<div class="color-overlay-dark"></div>
    	<div class="container">
    	    <div class="row">
                
                <div class="col-md-12 text-center mb-50">
                    <h2 class="mt-40 mb-40">СОЗДАЙ СВОЮ СОБСТВЕННУЮ eSPORT КОМАНДУ !</h2>
                </div>
                
    	    	<div class="col-md-6 text-left mb-50">
                    <h4 class="mt-5 mb-40 txt-trans-none">Сколько денег Вы готовы инвестировать в Команду ?</h4>
                </div>
                <div class="col-md-6 text-center mb-50">
                
                    <form autocomplete="off" v-on:submit="next('team-create', $event)">
                        <div class="input-group">
                            <input type="number"  class="form-control" v-model="team_price_invest" /><span class="input-group-addon">SPA</span> 
                        </div>
                        <span class="help-block txt-dark">Минимальное значение: 500 SPA.&nbsp;<small>Kурс 1 SPA = 1  доллар США</small></span>
                        <div class="form-group row">
                            <div class="col-xs-6 col-sm-6 text-left">
                                <button type="submit" class="btn btn-primary">next</button>
                            </div>
                            <div class="col-xs-6 col-sm-6 text-right">
                                <small>
                                    <router-link :to="{ name: 'investors-info', query: { step: 'part-investing' } }"  class="btn btn-primary">частичное финансирование</router-link>
                                </small>
                            </div>
                        </div>
                    </form>
    
                </div>
    	    </div>
    	</div>
    </div>
    
    <div class="container-fluid parallax-simple rel mt-50" style="background-image: url(http://spartacoin.com/images/BlizzCon8.jpg);" v-if="step=='part-investing'">
    	<div class="color-overlay-dark"></div>
    	<div class="container">
    	    <div class="row">
    	    	<div class="col-md-12 text-center mb-50">
                    <h4 class="mt-10 mb-40 txt-dark txt-trans-none">Частичное финансирование eSport Команды подразумевает, что Вы наряду с другими инвесторами принимаете участие в финансировании Команды, соответственно получаете только часть прибыли.</h4>
                </div>
                
                <div class="col-md-6 text-left mb-50">
                    <p class="txt-dark">Если Вы согласны с частичным финансированием Команды - введите сумму сюда:</p>
                    <form autocomplete="off" v-on:submit="next('games-part-investing', $event)">
                        <div class="input-group">
                            <input type="number"  class="form-control" v-model="team_price_part_invest" /><span class="input-group-addon">SPA</span> 
                        </div>
                        
                        <div class="form-group row mt-10">
                            <div class="col-xs-6 col-sm-6 text-left">
                                <button type="submit" class="btn btn-primary">next</button>
                            </div>
                            <div class="col-xs-6 col-sm-6 text-right mt-10">
                                <small class="txt-dark">Kурс 1 SPA = 1  доллар США</small>
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div class="col-md-6 text-right mb-50">
                    <p class="txt-dark">Если всё-таки хотите собственную Команду:</p>
                    <form autocomplete="off">
                        <div class="form-group row">
                            <router-link :to="{ name: 'investors-info', query: { step: 1 } }"  class="btn btn-primary mr-15">Own team</router-link>
                        </div>
                    </form>
                </div>
    	    </div>
    	</div>
    </div>
    
    <div class="container-fluid parallax-simple rel mt-50" style="background-image: url(http://spartacoin.com/images/BlizzCon8.jpg);" v-if="step=='games-part-investing'">
    	<div class="color-overlay-dark"></div>
    	<div class="container">
    	    <div class="row">
    	    	<div class="col-md-12 text-center mb-50">
                    <h4 class="mt-10 mb-40 txt-dark txt-trans-none">В какой кибердисциплине Вы хотите со-инвестировать в Команду?</h4>
                </div>
                
                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12" v-for="game in games">
        			<div class="panel panel-default card-view pa-0">
        				<div class="panel-wrapper collapse in">
        					<div class="panel-body pa-0">
        						<article class="col-item">
        							<div class="photo">
                                        <router-link :to="{ name: 'game', params: { gameId: game.id }}">
                                            <img :src="getImageLink(game.logo)" class="img-responsive" :alt="game.title" />
                                        </router-link>
        							</div>
        							<div class="info">
        								<h6>{{ game.title | truncate(20, '...') }}</h6>
        							</div>
        						</article>
        					</div>
        				</div>	
        			</div>	
        		</div>
                
    	    </div>
    	</div>
    </div>

</div>
					
</template>

<script> 
    import { mapGetters } from 'vuex'
    
    export default {
        metaInfo: {
            title: 'Investor\'s info',
            titleTemplate: null
        },
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },
        data() {
            return {
                team_price_invest:500,
                team_price_part_invest:100,
                step: this.$route.query.step || 1,
                games: []
            }
        },
        mounted: function () {
            
        },
        methods: {
            next(nextStep, event){
                alert(nextStep);
                if (event) event.preventDefault()
                
                this.$router.push({ name: 'investors-info', query: { step: nextStep } });
            },
            showTeamModalCreate() {
                if(this.authenticated)
                {
                    this.$modal.show('teams-create');
                }else{
                    this.$router.push({ name: 'auth.login' });
                }
            },
            setCookie(){
                localStorage.setItem('confirm_cookie', true);
                this.show_cookie_string = false;
            },
            getGames()
            {
                axios.get('/api/games').then((response) => {
                    this.$set(this, 'games', response.data);
                });
            }
        },
        watch: {
            '$route.query'(newPage, oldPage) {
                this.step = this.$route.query.step || 1;
                
                if(this.step=="games-part-investing" || this.step=="games-investing")
                {
                    this.getGames();
                }
            }
        }
    }
</script>