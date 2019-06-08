import Vue from 'vue'
import Icon from './Icon.vue'
import Card from './Card'
import Child from './Child.vue'
import Button from './Button'
import Navigation from './Navigation.vue';
import Sidebar from './Sidebar.vue';
import Navbuttons from './NavButtons.vue';
import Pagination from './Pagination.vue';
import Teamcreate from './modals/teams/create.vue';
import Fightcreate from './modals/fights/create.vue';
import Usercalendar from './modals/personal/userCalendar.vue';
import VerifyCodeResend from './modals/verifyCodeResend.vue';
import CalendarSchedule from './Calendar.vue';
import CalendarFights from './CalendarFights.vue'
import PotentialBattles from './modals/fights/potentialBattles.vue'
import Comments from './Comments.vue'
import AnimatedNumber from './AnimatedNumber.vue'
import FooterBlock from './Footer.vue'
import NewsCarousel from './NewsCarousel.vue'
import FriendRequestIn from './FriendRequestIn.vue';
import { Form, HasError, AlertError, AlertSuccess } from 'vform'

Vue.component(Icon.name, Icon)
Vue.component(Navigation.name, Navigation)
Vue.component(Pagination.name, Pagination)
Vue.component(Navbuttons.name, Navbuttons)

Vue.component(CalendarSchedule.name, CalendarSchedule)
Vue.component(CalendarFights.name, CalendarFights)
Vue.component(PotentialBattles.name, PotentialBattles)
Vue.component(FriendRequestIn.name, FriendRequestIn)

Vue.component(Teamcreate.name, Teamcreate)
Vue.component(VerifyCodeResend.name, VerifyCodeResend)
Vue.component(Fightcreate.name, Fightcreate)
Vue.component(Usercalendar.name, Usercalendar)
Vue.component(Comments.name, Comments)
Vue.component(NewsCarousel.name, NewsCarousel)
Vue.component(AnimatedNumber.name, AnimatedNumber)
Vue.component(Sidebar.name, Sidebar)
Vue.component(FooterBlock.name, FooterBlock)

// Components that are registered globaly.
var components = [
    Card,
    Child,
    Button,
    HasError,
    AlertError,
    AlertSuccess
];

components.forEach(Component => {
    Vue.component(Component.name, Component)
})