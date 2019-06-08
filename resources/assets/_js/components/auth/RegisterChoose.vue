<template>
    <div class="container-fluid parallax-simple rel" style="background-image: url(/images/background.jpg);">
        <div class="color-overlay-dark"></div>
        <div class="container">

            <div class="row mb-30">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mb-50">
                    <h4 class="txt-dark txt-shadow">Welcome to SPARTA.GAMES !<br />The First Crowdfunding eSports Platform in the World!</h4>
                </div>
                <div class="col-lg-3 col-lg-offset-2 col-md-offset-2 col-md-3 col-sm-6 col-xs-12 mb-30">
                    <div class="row">
                        <div class="col-xs-12 text-center  pl-0 pr-0">
                            <router-link :to="{ name: 'auth.register', query: { type: 'player' } }">
                                <img src="/images/player.png" class="img-reg-index">
                            </router-link><br />
                            <router-link :to="{ name: 'auth.register', query: { type: 'player' } }" class="btn btn-primary mt-10 w-100p-inline btn-outline" style="border-width: 2px;">
                                <span class="weight-500 txt-light blocktxt-shadow">Start as Player</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-lg-offset-2 col-md-offset-2 col-md-3 col-sm-6 col-xs-12 mb-30">
                    <div class="row">
                        <div class="col-xs-12 text-center pl-0 pr-0">
                            <router-link :to="{ name: 'auth.register', query: { type: 'coach' } }">
                                <img src="/images/coach.png" class="img-reg-index"/>
                            </router-link><br />
                            <router-link :to="{ name: 'auth.register', query: { type: 'coach' } }"  class="btn btn-primary mt-10 w-100p-inline btn-outline" style="border-width: 2px;">
                                <span class="weight-500 txt-light blocktxt-shadow">Start as Coach</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-lg-offset-2 col-md-offset-2 col-md-3 col-sm-6 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12 text-center pl-0 pr-0">
                            <router-link :to="{ name: 'auth.register', query: { type: 'investor' } }">
                                <img src="/images/investor.png" class="img-reg-index">
                            </router-link><br />
                            <router-link :to="{ name: 'auth.register', query: { type: 'investor' } }" class="btn btn-primary mt-10 w-100p-inline btn-outline" style="border-width: 2px;">
                                <span class="weight-500 txt-light blocktxt-shadow">Start as Investor</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-lg-offset-2 col-md-offset-2 col-md-3 col-sm-6 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12 text-center pl-0 pr-0">
                            <a href="javascript:void(0);">
                                <img src="/images/referee.png" class="img-reg-index">
                            </a><br />
                            <a href="javascript:void(0);" class="btn btn-primary mt-10 w-100p-inline btn-outline" style="border-width: 2px;">
                                <span class="weight-500 txt-light blocktxt-shadow">Start as Referee</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'register-choose'
    }
</script>