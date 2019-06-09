webpackJsonp([20],{"6PwW":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=u(a("Dd8w")),i=a("NYxO"),n=u(a("mtWM")),r=(u(a("I3G/")),u(a("e7x4")));function u(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:function(){return{title:this.$t("players")}},computed:(0,s.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check"})),mounted:function(){this.getVueItems()},data:function(){return{players:[],game_id:this.$route.query.game_id||"",country_id:this.$route.query.country_id||"",free_player:this.$route.query.free_player||"",pagination:[],choose_players:[],statuses:[{id:"",title:""},{id:0,title:this.$t("free")},{id:1,title:this.$t("in_team")}]}},methods:{getVueItems:function(){var t=this,e=this.UrlParamsMerge({page:1,_limit:12,type:"player",_with:"team,country,team.fights",active:1,_sort:"-id"});n.default.get("/api/users?"+e).then(function(e){var a=e.data.data;a.forEach(function(t){var e=0,a=0;if(t.team_id>0&&t.team.fights.length>0){var s=t.team_id;t.team.fights.forEach(function(t){3==t.status&&(e++,t.winner_id==s&&a++)})}t.wins=a,t.fights_count=e}),t.$set(t,"players",a),delete e.data.data,t.pagination=e.data})},getGames:function(){var t=this;n.default.get("/api/games").then(function(e){t.$set(t,"games",e.data),t.$parent.games=t.games})},getCountries:function(){var t=this;n.default.get("/api/countries").then(function(e){t.$set(t,"countries",e.data)})},search:function(t){this.$router.push(this.$route.path+"?"+$("#filter-form").serialize())},sendInvites:function(){var t=this;this.choose_players.forEach(function(e){t.invite(e)}),(0,r.default)({type:"success",title:this.$t("invitations_sent")})},invite:function(t){n.default.put("/api/teams/"+this.user.team_id+"/users/"+t).then(function(t){})}},watch:{"$route.query":function(t,e){this.getVueItems()}}}},YotQ:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("card",{attrs:{title:t.$t("players")}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[null!==t.players&&t.players.length>0?a("table",{staticClass:"nk-table"},[a("tbody",[a("tr",[a("th",[t._v(t._s(t.$t("name")))]),t._v(" "),a("th",[t._v(t._s(t.$t("team")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_matches")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_wins")))]),t._v(" "),a("th",[t._v(t._s(t.$t("victory_rate")))]),t._v(" "),a("th",[t._v(t._s(t.$t("status")))])]),t._v(" "),t._l(t.players,function(e){return a("tr",[a("td",[a("router-link",{staticClass:"vm-title",attrs:{to:{name:"player",params:{id:e.id}}}},[a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.avatar)}}),t._v(" "),a("span",[t._v(t._s(e.nickname))])])],1),t._v(" "),a("td",{staticClass:"text-center"},[e.team_id>0&&null!==e.team?a("span",[a("router-link",{attrs:{to:{name:"team.detail",params:{slug:e.team.slug}}}},[null!==e.team.image?a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.team.image)}}):t._e(),t._v(" "),null==e.team.image?a("span",[t._v(t._s(e.team.title))]):t._e()])],1):t._e()]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.fights_count))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.wins))]),t._v(" "),e.fights_count>0?a("td",{staticClass:"text-center"},[t._v(t._s(Number((e.wins/e.fights_count*100).toFixed(2)))+"%")]):a("td",{staticClass:"text-center"},[t._v("0")]),t._v(" "),a("td",{staticClass:"text-center"},[e.free_player?a("span",[a("span",{staticClass:"text-warning"},[t._v(t._s(t.$t("free")))])]):e.team_id>0&&e.id==e.team.capt_id?a("span",[a("span",{staticClass:"text-info"},[t._v(t._s(t.$t("captain")))])]):a("span",[a("span",{staticClass:"text-success"},[t._v(t._s(t.$t("in_team")))])])])])})],2)]):t._e()])]),t._v(" "),a("pagination",{attrs:{pagination:t.pagination}})],1)],1)},staticRenderFns:[]};e.a=s},dB8k:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("6PwW"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);var r=a("YotQ"),u=a("VU/8")(i.a,r.a,!1,null,null,null);e.default=u.exports}});
//# sourceMappingURL=20.df21a4b66a5d2443f464.js.map