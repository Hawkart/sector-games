webpackJsonp([12],{"4qB1":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("SxQf"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);var u=s("sUrE"),r=s("VU/8")(i.a,u.a,!1,null,null,null);e.default=r.exports},SxQf:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(s("Dd8w")),i=s("NYxO"),n=r(s("mtWM")),u=(r(s("I3G/")),r(s("e7x4")));function r(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:function(){return{title:this.$t("teams")}},computed:(0,a.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check"})),mounted:function(){this.getVueItems()},data:function(){return{teams:[],games:[],countries:[],queryString:"",pagination:[],statuses:[{id:"",title:""},{id:0,title:"pending"},{id:1,title:"accepted"}],game_id:this.$route.query.game_id||"",country_id:this.$route.query.users_country_id||""}},methods:{getVueItems:function(){var t=this,e={status:1,page:1,_limit:12,_with:"game,fights,users,institution.location,institution.location.parent",_sort:"-id"};this.authenticated&&"investor"!=this.user.type&&(e.game_id=this.user.game_id,null!==this.user.institution_id&&(e.institution_id=this.user.institution_id),e["institution_id-not"]="null");var s=this.UrlParamsMerge(e);n.default.get("/api/teams?"+s).then(function(e){t.$set(t,"teams",e.data.data),delete e.data.data,t.pagination=e.data})},getGames:function(){var t=this;n.default.get("/api/games").then(function(e){t.$set(t,"games",e.data),t.$parent.games=t.games})},getCountries:function(){var t=this;n.default.get("/api/countries").then(function(e){t.$set(t,"countries",e.data)})},search:function(t){this.$router.push(this.$route.path+"?"+$("#filter-form").serialize())},joinTeam:function(t){var e=this;n.default.put("/api/teams/"+t+"/users/"+this.user.id).then(function(t){(0,u.default)({type:"success",title:e.$t("join_team_request_success")})}).catch(function(t){(0,u.default)({type:"warning",title:t.response.data.error})})}},watch:{"$route.query":function(t,e){this.getVueItems()}}}},sUrE:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("card",{attrs:{title:t.$t("teams")}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[null!==t.teams&&t.teams.length>0?s("table",{staticClass:"nk-table"},[s("tbody",[s("tr",[s("th",[t._v(t._s(t.$t("title")))]),t._v(" "),s("th",[t._v(t._s(t.$t("region")))]),t._v(" "),s("th",[t._v(t._s(t.$t("players")))]),t._v(" "),s("th",[t._v(t._s(t.$t("game")))]),t._v(" "),s("th",[t._v(t._s(t.$t("count_matches")))]),t._v(" "),s("th",[t._v(t._s(t.$t("count_wins")))]),t._v(" "),s("th",[t._v(t._s(t.$t("victory_rate")))]),t._v(" "),s("th",[t._v(t._s(t.$t("status")))])]),t._v(" "),t._l(t.teams,function(e){return s("tr",[s("td",[s("router-link",{staticClass:"vm-title",attrs:{to:{name:"team",params:{id:e.id}}}},[s("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.image,"avatar_team"),alt:e.title}}),t._v(" "),s("span",[t._v(t._s(e.title))])])],1),t._v(" "),s("td",[e.institution_id>0?[t._v("\n                                    "+t._s(e.institution.location.parent.title)+",\n                                    "+t._s(e.institution.location.title)+"\n                                ")]:t._e()],2),t._v(" "),s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:{name:"team.detail.players",params:{slug:e.slug}}}},[t._v(t._s(e.users.length))]),t._v(" / "+t._s(e.quantity))],1),t._v(" "),null!==e.game?s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:{name:"game",params:{gameId:e.game.id}},title:e.game.title}},[s("img",{attrs:{src:t.getImageLink(e.game.logo_mini),width:"35",alt:e.game.title}})])],1):s("td",{staticClass:"text-center"}),t._v(" "),s("td",{staticClass:"text-center"},[t._v(t._s(e.count_fights))]),t._v(" "),s("td",{staticClass:"text-center"},[t._v(t._s(e.count_wins))]),t._v(" "),e.count_fights>0?s("td",{staticClass:"text-center"},[t._v(t._s(Number((e.count_wins/e.count_fights*100).toFixed(2)))+"%")]):s("td",{staticClass:"text-center"},[t._v("0%")]),t._v(" "),s("td",{staticClass:"text-center"},[0==e.status?s("span",[s("span",{staticClass:"text-warning"},[t._v(t._s(t.$t("status_pending")))])]):t._e(),t._v(" "),1==e.status?s("span",[s("span",{staticClass:"text-success"},[t._v(t._s(t.$t("status_accepted")))])]):t._e()])])})],2)]):t._e(),t._v(" "),s("pagination",{attrs:{pagination:t.pagination}})],1)])])],1)},staticRenderFns:[]};e.a=a}});
//# sourceMappingURL=12.10bbc9f46ba981081f3b.js.map