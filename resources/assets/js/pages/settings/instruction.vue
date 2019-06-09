<template>
    <card :title="$t('instruction')">
        <h4>Для участия в Турнире необходимо собрать команду из 5-ти игроков вашей школы. Как это сделать:</h4>
        <ol class="text-main-1 pl-20">
            <li class="text-white" v-if="!user.confirmed">Проверьте Ваш почтовый ящик : {{user.email}}
                Перейдите по ссылке в сообщении, отправленном от support@youthleague.ru, подтвердите Ваш e-mail адрес.
                На  адрес {{user.email}}  будут направляться уведомления о дате и времени начала матчей Турнира.
                Не пропускайте сообщения, отправляемые на  адрес {{user.email}}.<br/>
                За опоздание или неявку на матч команде может быть засчитано техническое поражение.
            </li>
            <li class="text-white">
                Присоедините ваш аккаунт Steam в <router-link :to="{ name: 'settings.team' }">Личном кабинете</router-link>.
            </li>
            <li class="text-white">
                Вступите в группу <a href="https://steamcommunity.com/groups/youthleague" target="_blank">"Национальная Молодежная Киберспортивная Лига"</a> в STEAM Community.
            </li>
            <li class="text-white">
                Пригласите игроков вашей команды в группу <a href="https://steamcommunity.com/groups/youthleague" target="_blank">"Национальная Молодежная Киберспортивная Лига"</a> в STEAM Community.
            </li>
            <li class="text-white">
                Пригласите игроков вашей команды зарегистрироваться на турнир:<br/>
                <social-sharing :url="user.team_id>0 ? 'https://youthleague.ru/teams/'+user.team_id : 'https://youthleague.ru/register'"
                                title="ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2"
                                description="ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2. Для учащихся и выпускников общеобразовательных школ и среднеспециальных учебных заведений в возрасте от 14 до 18 лет."
                                hashtags="Dota2,киберспорт,турнир"
                                inline-template>
                    <div class="mt-10">
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
            </li>
            <li class="text-white">
                Присоедините ваш аккаунт ВКонтакте в <router-link :to="{ name: 'settings.team' }">Личном кабинете</router-link>.
            </li>
            <li class="text-white">
                Вступите в группу <a href="https://vk.com/youthleagueru" target="_blank">"Национальная Молодежная Киберспортивная Лига"</a> в ВКонтакте. В этой группе будут отображаться все последние новости Турнира: Результаты матчей,
                объявляться победители этапов, публиковаться фотоотчеты о награждении чемпионов.
            </li>
            <li class="text-white">
                Пригластите ваших друзей, знакомых, близких в группу <a href="https://vk.com/youthleagueru" target="_blank">"Национальная Молодежная Киберспортивная Лига"</a> в ВКонтаке чтобы они следили за Вашими победами, успехами и достижениями.
            </li>
        </ol>

        <p class="text-white">
            По всем вопросам Вы всегда можете обратиться в <a href="https://vk.com/youthleagueru" target="_blank">группу</a> поддержки ВКонтакте или через виджет  ВК в правом нижнем углу сайта.
        </p>

    </card>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        middleware: 'auth',

        computed: mapGetters({
            user: 'auth/user',
            locale: 'lang/locale',
        }),
    }
</script>