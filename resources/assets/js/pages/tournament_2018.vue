<template>
    <div>

        <card :title="$t('school_tournament_2018')+' DOTA2'">
            <p class="text-white">Для учащихся и выпускников общеобразовательных школ и среднеспециальных учебных заведений в возрасте от 14 до 18 лет.</p>
            <div class="nk-gap-2"></div>
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
                            Пройдет с 07 по 11 августа 2018 года.<br>
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
                            <h3 class="nk-feature-title text-main-1">РЕГИОНАЛЬНЫЕ КВАЛИФИКАЦИИ</h3>
                            <p>
                                Пройдет с 12 августа по 19 августа 2018 года.<br>
                                Чемпионы школ встретятся в отборочном туре, чтобы определить финалистов, которые дальше продожат борьбу за звание Чемпиона России.
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