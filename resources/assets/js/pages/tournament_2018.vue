<template>
    <div>

        <card :title="$t('school_tournament_2018')+' DOTA2'">
        <div class="row vertical-gap">

            <div class="col-lg-3">
                <div class="nk-feature-1">
                    <h4 class="nk-feature-title text-main-1 mb-0 f1em">1 Этап:</h4>
                </div>
            </div>

            <div class="col-lg-9">
                <div class="nk-feature-1">
                <div class="nk-feature-cont">
                    <h3 class="nk-feature-title text-main-1">Внутришкольный</h3>
                    <p>
                        Пройдет с 22 июля по 29 июля 2018 года.<br>
                        На этом этапе опрелятся Чемпионы Школ.<br>
                        В следующий этап от школы выходит только одна команда.
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div class="nk-gap-2"></div>

        <div class="row vertical-gap">

            <div class="col-lg-3">
                <div class="nk-feature-1">
                    <h4 class="nk-feature-title text-main-1 mb-0 f1em">2 Этап:</h4>
                </div>
            </div>

            <div class="col-lg-9">
                <div class="nk-feature-1">
                    <div class="nk-feature-cont">
                        <h3 class="nk-feature-title text-main-1">Региональный групповой</h3>
                        <p>
                            Пройдет с 30 июля по 09 августа 2018 года.<br>
                            Чемпионы школ встретятся в отбочном туре, чтобы определить победителей,
                            которые будут дальше бороться за звание Чемпиона Области/Края/Республики.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="nk-gap-2"></div>

        <div class="row vertical-gap">

            <div class="col-lg-3">
                <div class="nk-feature-1">
                    <h4 class="nk-feature-title text-main-1 mb-0 f1em">3 Этап:</h4>
                </div>
            </div>

            <div class="col-lg-9">
                <div class="nk-feature-1">
                    <div class="nk-feature-cont">
                        <h3 class="nk-feature-title text-main-1">Региональные Финалы</h3>
                        <p>
                            Пройдут с 12 по 19  августа 2018 года.<br>
                            Одна команда станет Чемпионом Области/Края/Республики.<br>
                            Эта команда продолжит борьбу за звание Чемпиона России.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="nk-gap-2"></div>

        <div class="row vertical-gap">

            <div class="col-lg-3">
                <div class="nk-feature-1">
                    <h4 class="nk-feature-title text-main-1 mb-0 f1em">4 Этап:</h4>
                </div>
            </div>

            <div class="col-lg-9">
                <div class="nk-feature-1">
                    <div class="nk-feature-cont">
                        <h3 class="nk-feature-title text-main-1">Всероссийский Финал</h3>
                        <p>
                            Финал пройдет с 26 по 31 августа 2018 года.<br>
                            Победителя узнает вся страна!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="nk-gap-2"></div>

        <div class="row vertical-gap" v-if="!authenticated">

            <div class="col-lg-3">
                &nbsp;
            </div>

            <div class="col-lg-9">
                <router-link :to="{ name: 'register' }" class="nk-btn nk-btn-rounded nk-btn-color-main-1 text-white">Регистрируйтесь на турнир</router-link>
            </div>
        </div>

        </card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    export default {
        layout: 'default',

        metaInfo () {
            return { title: this.$t('school_tournament_2018') }
        },

        computed:{
            ...mapGetters({
                user: 'auth/user',
                locale: 'lang/locale',
            })
        }
    }
</script>