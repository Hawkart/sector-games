webpackJsonp([21],{"2mSJ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Rts7"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);var r=a("POR/"),l=a("VU/8")(i.a,r.a,!1,null,null,null);e.default=l.exports},"POR/":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[null!==t.player?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("h3",{staticClass:"nk-decorated-h-3"},[a("span",[t._v(t._s(t.player.name)+" ["+t._s(t.player.nickname)+"]")])])])]):t._e(),t._v(" "),a("div",{staticClass:"row vertical-gap"},[a("aside",{staticClass:"col-lg-3 nk-sidebar-sticky-parent"},[null!==t.player?a("div",{staticClass:"nk-box-1 bg-dark-2 text-center"},[a("img",{staticClass:"w-100",attrs:{src:t.getImageLink(t.player.avatar,"avatar_user")}})]):t._e()]),t._v(" "),a("div",{staticClass:"col-lg-9"},[null!==t.team?a("card",{attrs:{title:t.$t("team")}},[a("table",{staticClass:"nk-table"},[a("tbody",[a("tr",[a("th",[t._v(t._s(t.$t("title")))]),t._v(" "),a("th",[t._v(t._s(t.$t("players")))]),t._v(" "),a("th",[t._v(t._s(t.$t("game")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_matches")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_wins")))]),t._v(" "),a("th",[t._v(t._s(t.$t("victory_rate")))]),t._v(" "),a("th",[t._v(t._s(t.$t("status")))])]),t._v(" "),a("tr",[a("td",[a("router-link",{staticClass:"vm-title",attrs:{to:{name:"team",params:{id:t.team.id}}}},[a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(t.team.image,"avatar_team"),alt:t.team.title}}),t._v(" "),a("span",[t._v(t._s(t.team.title))])])],1),t._v(" "),a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"team.detail.players",params:{slug:t.team.slug}}}},[t._v(t._s(t.team.users.length))]),t._v(" / "+t._s(t.team.quantity))],1),t._v(" "),null!==t.team.game?a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"game",params:{gameId:t.team.game.id}},title:t.team.game.title}},[a("img",{attrs:{src:t.getImageLink(t.team.game.logo_mini),width:"35",alt:t.team.game.title}})])],1):a("td",{staticClass:"text-center"}),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.team.count_fights))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.team.count_wins))]),t._v(" "),t.team.count_fights>0?a("td",{staticClass:"text-center"},[t._v(t._s(Number((t.team.count_wins/t.team.count_fights*100).toFixed(2)))+"%")]):a("td",{staticClass:"text-center"},[t._v("0%")]),t._v(" "),a("td",{staticClass:"text-center"},[0==t.team.status?a("span",[a("span",{staticClass:"text-warning"},[t._v(t._s(t.$t("status_pending")))])]):t._e(),t._v(" "),1==t.team.status?a("span",[a("span",{staticClass:"text-success"},[t._v(t._s(t.$t("status_accepted")))])]):t._e(),t._v(" "),t.team.quantity>t.team.users.length&&t.authenticated&&t.user.id!==t.team.capt_id&&"player"==t.user.type&&t.user.active?a("button",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white",on:{click:function(e){return t.joinTeam(t.team.id)}}},[t._v("\n                                "+t._s(t.$t("join_team"))+"\n                            ")]):t._e()])])])])]):t._e()],1)])])},staticRenderFns:[]};e.a=s},Rts7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(a("Dd8w")),i=a("NYxO"),n=r(a("mtWM"));r(a("e7x4"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:function(){return{title:this.title}},computed:(0,s.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check"})),data:function(){return{title:"Player",player:null,institution:null,team:null,response:null}},mounted:function(){this.getPlayer(),this.getUserSchools(),this.getUserTeam()},methods:{getPlayer:function(){var t=this,e=this.ArrayToUrl({type:"player"});n.default.get("/api/users/"+this.$route.params.id+"?"+e).then(function(e){t.$set(t,"player",e.data),t.title=t.player.nickname,t.$meta().refresh()})},getUserSchools:function(){var t=this;n.default.get("/api/institution_user?user_id="+this.$route.params.id+"&_with=institution&_sort=-id").then(function(e){e.data.length>0&&t.$set(t,"institution",e.data[0])})},getUserTeam:function(){var t=this;n.default.get("/api/users/"+this.$route.params.id+"/team?_with=game,users").then(function(e){t.$set(t,"team",e.data)})}}}}});
//# sourceMappingURL=21.06b968f4552a0adffd14.js.map