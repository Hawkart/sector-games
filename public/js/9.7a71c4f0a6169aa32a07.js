webpackJsonp([9],{"1rvA":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(a("Dd8w")),s=a("NYxO"),r=i(a("mtWM"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:function(){return{title:this.$t("tournaments")}},data:function(){return{tournaments:[],pagination:[]}},computed:(0,n.default)({},(0,s.mapGetters)({user:"auth/user",authenticated:"auth/check"})),mounted:function(){this.getTournaments()},methods:{getTournaments:function(){var t=this,e=new Date,a={status:1,"register_start-gt":this.dateConvertUTC(e.getTime(),-1),page:1,_limit:12,_sort:"start_at",_with:"teams,game"},n=this.UrlParamsMerge(a);r.default.get("/api/tournaments?"+n).then(function(e){var a=e.data.data,n=t;a.forEach(function(t){t.start_at=n.dateConvertUTC(t.start_at,-1)}),t.$set(t,"tournaments",a),delete e.data.data,t.pagination=e.data})}},watch:{"$route.query":function(t,e){this.getTournaments()}}}},dAyu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("1rvA"),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("zc24"),u=a("VU/8")(s.a,i.a,!1,null,null,null);e.default=u.exports},zc24:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("card",{attrs:{title:t.$t("tournaments")}},[null!=t.tournaments&&t.tournaments.length>0?a("table",{staticClass:"nk-table"},[a("tbody",[a("tr",[a("th",[t._v(t._s(t.$t("title")))]),t._v(" "),a("th",[t._v(t._s(t.$t("game")))]),t._v(" "),a("th",[t._v(t._s(t.$t("start_time")))]),t._v(" "),a("th",[t._v(t._s(t.$t("register_time")))]),t._v(" "),a("th",[t._v(t._s(t.$t("teams")))])]),t._v(" "),t._l(t.tournaments,function(e){return a("tr",[a("td",[a("router-link",{staticClass:"vm-title",attrs:{to:{name:"tournament.detail",params:{id:e.id}}}},[null!=e.image?a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.image,"avatar_team"),alt:e.title}}):a("i",{staticClass:"ti-cup mr-20"}),t._v(" "),a("span",[t._v(t._s(e.title))])])],1),t._v(" "),a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"game",params:{gameId:e.game.id}},title:e.game.title}},[a("img",{attrs:{src:t.getImageLink(e.game.logo_mini),width:"35",alt:e.game.title}})])],1),t._v(" "),e.buy_in>0?a("td",{staticClass:"text-center"},[t._v(t._s(e.buy_in))]):a("td",{staticClass:"text-center"},[t._v("Free")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.moment(e.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, h:mma")))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.teams.length)+" / "+t._s(e.count_teams))])])})],2)]):a("p",{staticClass:"text-white"},[t._v("\n\t\t\t\t"+t._s(t.$t("no_tournaments"))+"\n\t\t\t")]),t._v(" "),a("pagination",{attrs:{pagination:t.pagination}})],1)],1)},staticRenderFns:[]};e.a=n}});
//# sourceMappingURL=9.7a71c4f0a6169aa32a07.js.map