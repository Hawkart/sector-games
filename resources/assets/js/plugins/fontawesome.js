import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/fontawesome-free-regular/shakable.es'

import {
    faUser, faLock, faSignOutAlt, faCog, faSpinner, faUsers, faUniversity, faGamepad, faBook
} from '@fortawesome/fontawesome-free-solid/shakable.es'

import {
    faGithub, faVk, faSteam, faFacebook, faGoogle, faTwitch
} from '@fortawesome/fontawesome-free-brands/shakable.es'

fontawesome.library.add(
    faUser, faLock, faSignOutAlt, faCog, faSpinner, faGithub, faVk, faSteam, faFacebook, faGoogle, faTwitch, faUsers, faUniversity, faGamepad, faBook
)

Vue.component('fa', FontAwesomeIcon)