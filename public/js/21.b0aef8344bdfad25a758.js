webpackJsonp([21],{"2o2+":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=c(i("Dd8w")),s=i("NYxO"),e=c(i("mtWM")),o=(c(i("e7x4")),i("HNcv"));function c(t){return t&&t.__esModule?t:{default:t}}a.default={metaInfo:function(){return{title:this.$t("players")}},computed:(0,n.default)({},(0,s.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),data:function(){return{fights:[],pagination:[]}},mounted:function(){(0,o.loadMessages)(this.locale),this.moment.locale(this.locale),this.authenticated&&this.getFights()},methods:{getFights:function(){var t=this,a=this.UrlParamsMerge({page:1,_limit:12,_sort:"-start_at",_with:"invitations.team,invitations.team.institution,invitations.team.institution.location,winner,game"});e.default.get("/api/teams/"+this.user.team_id+"/fights?"+a).then(function(a){var i=a.data.data,n=t;i.forEach(function(t){t.start_at=n.dateConvertUTC(t.start_at,-1)}),t.$set(t,"fights",i),delete a.data.data,t.pagination=a.data})},checkUpcoming:function(t){var a=new Date(t),i=new Date;return a.getTime()-i.getTime()>0}},watch:{"$route.query":function(t,a){this.getFights()}}}},PvQd:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i("2o2+"),s=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,function(){return n[t]})}(e);var o=i("jr+u"),c=i("VU/8")(s.a,o.a,!1,null,null,null);a.default=c.exports},"jr+u":function(t,a,i){"use strict";var n={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.authenticated?i("card",{attrs:{title:t.$t("matches")}},[null!=t.fights&&t.fights.length>0?i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t._l(t.fights,function(a){return i("div",{staticClass:"nk-match"},[i("div",{staticClass:"nk-match-team-left"},[i("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[0].team.id}}}},[i("span",{staticClass:"nk-match-team-logo"},[i("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(a.invitations[0].team.image,"avatar_team")}})]),t._v(" "),i("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[0].team.institution.title)+", "+t._s(a.invitations[0].team.institution.location.title)+",\n                            "+t._s(a.invitations[0].team.title)+"\n                        ")])])],1),t._v(" "),i("div",{staticClass:"nk-match-status"},[i("router-link",{attrs:{to:{name:"match",params:{id:a.id}}}},[i("span",{staticClass:"nk-match-status-vs"},[t._v("VS")]),t._v(" "),i("span",{staticClass:"nk-match-status-date"},[t._v(t._s(t.moment(a.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, HH:mm")))]),t._v(" "),i("span",{staticClass:"nk-match-score"},[t.checkUpcoming(a.start_at)?[t._v(t._s(t.$t("upcoming")))]:a.winner_id>0?[t._v(t._s(a.winner.title))]:[t._v(t._s(t.$t("online")))]],2)])],1),t._v(" "),i("div",{staticClass:"nk-match-team-right"},[i("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[1].team.id}}}},[i("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[1].team.institution.title)+", "+t._s(a.invitations[1].team.institution.location.title)+",\n                            "+t._s(a.invitations[1].team.title)+"\n                        ")]),t._v(" "),i("span",{staticClass:"nk-match-team-logo"},[i("img",{staticClass:"w-50px ml-10",attrs:{src:t.getImageLink(a.invitations[1].team.image,"avatar_team")}})])])],1)])}),t._v(" "),i("pagination",{attrs:{pagination:t.pagination}})],2)]):i("div",[i("p",{staticClass:"txt-danger"},[t._v(t._s(t.$t("no_matches")))])])]):t._e()},staticRenderFns:[]};a.a=n}});
//# sourceMappingURL=21.b0aef8344bdfad25a758.js.map