webpackJsonp([10],{"4qB1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("SxQf"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("OlEJ"),u=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=u.exports},OlEJ:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?a("card",{attrs:{title:t.$t("teams")}},[null!==t.teams?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[a("table",{staticClass:"nk-table"},[a("tbody",[a("tr",[a("th",[t._v(t._s(t.$t("title")))]),t._v(" "),a("th",[t._v(t._s(t.$t("players")))]),t._v(" "),a("th",[t._v(t._s(t.$t("game")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_matches")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_wins")))]),t._v(" "),a("th",[t._v(t._s(t.$t("victory_rate")))]),t._v(" "),a("th",[t._v(t._s(t.$t("status")))])]),t._v(" "),t._l(t.teams,function(e){return a("tr",[a("td",[a("router-link",{staticClass:"vm-title",attrs:{to:{name:"team",params:{id:e.id}}}},[a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.image,"avatar_team"),alt:e.title}}),t._v(" "),a("span",[t._v(t._s(e.title))])])],1),t._v(" "),a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"team.detail.players",params:{slug:e.slug}}}},[t._v(t._s(e.users.length))]),t._v(" / "+t._s(e.quantity))],1),t._v(" "),null!==e.game?a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"game",params:{gameId:e.game.id}},title:e.game.title}},[a("img",{attrs:{src:t.getImageLink(e.game.logo_mini),width:"35",alt:e.game.title}})])],1):a("td",{staticClass:"text-center"}),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.count_fights))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.count_wins))]),t._v(" "),e.count_fights>0?a("td",{staticClass:"text-center"},[t._v(t._s(Number((e.count_wins/e.count_fights*100).toFixed(2)))+"%")]):a("td",{staticClass:"text-center"},[t._v("0%")]),t._v(" "),a("td",{staticClass:"text-center"},[0==e.status?a("span",[a("span",{staticClass:"text-warning"},[t._v(t._s(t.$t("status_pending")))])]):t._e(),t._v(" "),1==e.status?a("span",[a("span",{staticClass:"text-success"},[t._v(t._s(t.$t("status_accepted")))])]):t._e(),t._v(" "),e.quantity>e.users.length&&t.authenticated&&t.user.id!==e.capt_id&&"player"==t.user.type&&t.user.active?a("button",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white",on:{click:function(a){t.joinTeam(e.id)}}},[t._v("\n                                    "+t._s(t.$t("join_team"))+"\n                                ")]):t._e()])])})],2)]),t._v(" "),a("pagination",{attrs:{pagination:t.pagination}})],1)]):t._e()]):a("card",{attrs:{title:t.$t("teams")}},[a("div",{staticClass:"nk-gap-2"}),t._v(" "),a("p",{staticClass:"text-white"},[t._v("\n                Для того чтобы увидеть список команд, "),a("router-link",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em",attrs:{to:{name:"register"}}},[t._v("\n                зарегистрируйтесь")]),t._v(" или "),a("router-link",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em",attrs:{to:{name:"login"}}},[t._v("авторизуйтесь")]),t._v(", если у вас есть аккаунт.\n            ")],1),t._v(" "),a("div",{staticClass:"nk-gap-2"})])],1)},staticRenderFns:[]};e.a=s},SxQf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(a("Dd8w")),n=a("NYxO"),i=c(a("mtWM")),r=c(a("I3G/")),u=c(a("e7x4"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:{title:"Teams",titleTemplate:null},computed:(0,s.default)({},(0,n.mapGetters)({user:"auth/user",authenticated:"auth/check"})),mounted:function(){this.getVueItems(),this.getGames(),this.getCountries();var t=this;r.default.nextTick(function(){function e(t){if(!t.id)return t.text;var e=$(t.element).data("image");return e?$('<span><img src="/images/flags/'+e+'" width="23px" /> '+t.text+"</span>"):t.text}$("#game_list").select2({placeholder:"Select game",allowClear:!0}).on("select2:select",function(e){t.game_id=$(e.currentTarget).find("option:selected").val(),t.search()}).on("select2:unselecting",function(e){t.game_id="",""!=t.country_id?t.$router.push(t.$route.path+"?users_country_id="+t.country_id):t.$router.push(t.$route.path)}),$("#country_list").select2({placeholder:"Select country",templateResult:e,templateSelection:e,allowClear:!0}).on("select2:select",function(e){t.country_id=$(e.currentTarget).find("option:selected").val(),t.search()}).on("select2:unselecting",function(e){t.country_id="",""!=t.game_id?t.$router.push(t.$route.path+"?game_id="+t.game_id):t.$router.push(t.$route.path)})})},data:function(){return{teams:[],games:[],countries:[],queryString:"",pagination:[],statuses:[{id:"",title:""},{id:0,title:"pending"},{id:1,title:"accepted"}],game_id:this.$route.query.game_id||"",country_id:this.$route.query.users_country_id||""}},methods:{getVueItems:function(){var t=this,e={page:1,_limit:12,_with:"game,fights,users",_sort:"-id"};this.authenticated&&"investor"!=this.user.type&&(e.game_id=this.user.game_id,e.institution_id=this.user.institution_id);var a=this.UrlParamsMerge(e);i.default.get("/api/teams?"+a).then(function(e){t.$set(t,"teams",e.data.data),delete e.data.data,t.pagination=e.data})},getGames:function(){var t=this;i.default.get("/api/games").then(function(e){t.$set(t,"games",e.data),t.$parent.games=t.games})},getCountries:function(){var t=this;i.default.get("/api/countries").then(function(e){t.$set(t,"countries",e.data)})},search:function(t){this.$router.push(this.$route.path+"?"+$("#filter-form").serialize())},joinTeam:function(t){var e=this;i.default.put("/api/teams/"+t+"/users/"+this.user.id).then(function(t){(0,u.default)({type:"success",title:e.$t("join_team_request_success")})}).catch(function(t){(0,u.default)({type:"warning",title:t.response.data.error})})}},watch:{"$route.query":function(t,e){this.getVueItems()}}}}});
//# sourceMappingURL=10.af6ff29eb33010dafc7f.js.map