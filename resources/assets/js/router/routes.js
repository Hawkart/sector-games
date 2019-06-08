const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)
const EmailVerify = () => import('~/pages/auth/verify').then(m => m.default || m)

const News = () => import('~/pages/news/index.vue').then(m => m.default || m)
const NewsDetail = () => import('~/pages/news/detail.vue').then(m => m.default || m)

const Teams = () => import('~/pages/teams/index.vue').then(m => m.default || m)
const TeamsDetail = () => import('~/pages/teams/detail.vue').then(m => m.default || m)

const Players = () => import('~/pages/players/index.vue').then(m => m.default || m)
const PlayersDetail = () => import('~/pages/players/detail.vue').then(m => m.default || m)

const Tournaments = () => import('~/pages/tournaments/index.vue').then(m => m.default || m)
const TournamentsDetail = () => import('~/pages/tournaments/detail.vue').then(m => m.default || m)

const SchoolTournament = () => import('~/pages/tournament_2018.vue').then(m => m.default || m)

const Home = () => import('~/pages/home').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsSchool = () => import('~/pages/settings/school').then(m => m.default || m)
const SettingsTeam = () => import('~/pages/settings/team').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Welcome },

  { path: '/news', name: 'news', component: News },
  { path: '/news/:slug', name: 'news.detail', component: NewsDetail },


  { path: '/teams', name: 'teams', component: Teams },
  { path: '/teams/:id', name: 'team', component: TeamsDetail },

  { path: '/tournaments', name: 'tournaments', component: Tournaments },
  { path: '/tournaments/:id', name: 'tournament', component: TournamentsDetail },

  { path: '/tournament_2018', name: 'tournament_2018', component: SchoolTournament },


  { path: '/players', name: 'players', component: Players },
  { path: '/players/:id', name: 'player', component: PlayersDetail },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },
  { path: '/email/verify/:token', name: 'email.verify', component: EmailVerify },

  { path: '/home', name: 'home', component: Home },
  { path: '/settings',
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'school', name: 'settings.school', component: SettingsSchool },
      { path: 'team', name: 'settings.team', component: SettingsTeam }
    ] },

  { path: '*', component: NotFound }
]
