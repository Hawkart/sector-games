webpackJsonp([19],{"2o2+":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=r(s("Dd8w")),i=s("NYxO"),n=r(s("mtWM"));r(s("e7x4"));function r(t){return t&&t.__esModule?t:{default:t}}a.default={metaInfo:function(){return{title:this.$t("players")}},computed:(0,e.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check"})),data:function(){return{fights:[],pagination:[]}},mounted:function(){this.authenticated&&this.getFights()},methods:{getFights:function(){var t=this,a=this.UrlParamsMerge({page:1,_limit:12,_sort:"-start_at",_with:"invitations.team,winner,game"});n.default.get("/api/teams/"+this.user.team_id+"/fights?"+a).then(function(a){var s=a.data.data,e=t;s.forEach(function(t){t.start_at=e.dateConvertUTC(t.start_at,-1)}),t.$set(t,"fights",s),delete a.data.data,t.pagination=a.data})},checkUpcoming:function(t){var a=new Date(t),s=new Date;return a.getTime()-s.getTime()>0}},watch:{"$route.query":function(t,a){this.getFights()}}}},PvQd:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("2o2+"),i=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(a,t,function(){return e[t]})}(n);var r=s("UQYw"),c=s("VU/8")(i.a,r.a,!1,null,null,null);a.default=c.exports},UQYw:function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.authenticated?s("card",{attrs:{title:t.$t("matches")}},[null!=t.fights&&t.fights.length>0?s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t._l(t.fights,function(a){return s("div",{staticClass:"nk-match"},[s("div",{staticClass:"nk-match-team-left"},[s("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[0].team.id}}}},[s("span",{staticClass:"nk-match-team-logo"},[s("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(a.invitations[0].team.image,"avatar_team")}})]),t._v(" "),s("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[0].team.title)+"\n                        ")])])],1),t._v(" "),s("div",{staticClass:"nk-match-status"},[s("router-link",{attrs:{to:{name:"match",params:{id:a.id}}}},[s("span",{staticClass:"nk-match-status-vs"},[t._v("VS")]),t._v(" "),s("span",{staticClass:"nk-match-status-date"},[t._v(t._s(t.moment(a.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, h:mma")))]),t._v(" "),s("span",{staticClass:"nk-match-score"},[t.checkUpcoming(a.start_at)?[t._v(t._s(t.$t("upcoming")))]:a.winner_id>0?[t._v(t._s(a.winner.title))]:[t._v(t._s(t.$t("online")))]],2)])],1),t._v(" "),s("div",{staticClass:"nk-match-team-right"},[s("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[1].team.id}}}},[s("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[1].team.title)+"\n                        ")]),t._v(" "),s("span",{staticClass:"nk-match-team-logo"},[s("img",{staticClass:"w-50px ml-10",attrs:{src:t.getImageLink(a.invitations[1].team.image,"avatar_team")}})])])],1)])}),t._v(" "),s("pagination",{attrs:{pagination:t.pagination}})],2)]):s("div",[s("p",{staticClass:"txt-danger"},[t._v(t._s(t.$t("no_matches")))])])]):t._e()},staticRenderFns:[]};a.a=e}});
//# sourceMappingURL=19.2f6bb289ea46c06a340b.js.map