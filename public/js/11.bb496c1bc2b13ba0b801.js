webpackJsonp([11],{QYfe:function(t,a,e){"use strict";var n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[null!=t.tournament?e("card",{attrs:{title:t.tournament.title}},[e("div",{staticClass:"nk-tabs"},[e("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{href:"#tabs-1-1",role:"tab","data-toggle":"tab"}},[t._v("Инфо")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-2",role:"tab","data-toggle":"tab"}},[t._v("Команды")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-3",role:"tab","data-toggle":"tab"}},[t._v("Матчи")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-4",role:"tab","data-toggle":"tab"}},[t._v("Сетка")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-5",role:"tab","data-toggle":"tab"}},[t._v("Призы")])])]),t._v(" "),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane fade show active",attrs:{role:"tabpanel",id:"tabs-1-1"}},[e("div",{staticClass:"nk-gap"}),t._v(" "),e("div",{staticClass:"nk-gap"})]),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-2"}},[e("div",{staticClass:"nk-gap"}),t._v(" "),null!=t.tournament&&null!==t.tournament.teams&&t.tournament.teams.length>0?e("table",{staticClass:"nk-table"},[e("tbody",[e("tr",[e("th",[t._v(t._s(t.$t("title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("region")))]),t._v(" "),e("th",[t._v(t._s(t.$t("players")))]),t._v(" "),e("th",[t._v(t._s(t.$t("game")))]),t._v(" "),e("th",[t._v(t._s(t.$t("count_matches")))]),t._v(" "),e("th",[t._v(t._s(t.$t("count_wins")))]),t._v(" "),e("th",[t._v(t._s(t.$t("victory_rate")))])]),t._v(" "),t._l(t.tournament.teams,function(a){return e("tr",[e("td",[e("router-link",{staticClass:"vm-title",attrs:{to:{name:"team",params:{id:a.id}}}},[e("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),e("span",[t._v(t._s(a.title))])])],1),t._v(" "),e("td",[a.institution_id>0?[t._v("\n                                    "+t._s(a.institution.location.parent.title)+",\n                                    "+t._s(a.institution.location.title)+"\n                                ")]:t._e()],2),t._v(" "),e("td",{staticClass:"text-center"},[e("router-link",{attrs:{to:{name:"team.detail.players",params:{slug:a.slug}}}},[t._v(t._s(a.users.length))]),t._v(" / "+t._s(a.quantity))],1),t._v(" "),null!==a.game?e("td",{staticClass:"text-center"},[e("router-link",{attrs:{to:{name:"game",params:{gameId:t.tournament.game.id}},title:t.tournament.game.title}},[e("img",{attrs:{src:t.getImageLink(t.tournament.game.logo_mini),width:"35",alt:t.tournament.game.title}})])],1):e("td",{staticClass:"text-center"}),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(a.count_fights))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(a.count_wins))]),t._v(" "),a.count_fights>0?e("td",{staticClass:"text-center"},[t._v(t._s(Number((a.count_wins/a.count_fights*100).toFixed(2)))+"%")]):e("td",{staticClass:"text-center"},[t._v("0%")])])})],2)]):t._e(),t._v(" "),e("pagination",{attrs:{pagination:t.pagination}}),t._v(" "),e("div",{staticClass:"nk-gap"})],1),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-3"}},[e("div",{staticClass:"nk-gap"}),t._v(" "),e("div",{staticClass:"nk-gap"})]),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-4"}},[e("div",{staticClass:"nk-gap"}),t._v(" "),e("div",{staticClass:"nk-gap"})]),t._v(" "),e("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-5"}},[e("div",{staticClass:"nk-gap"}),t._v(" "),e("div",{staticClass:"nk-gap"})])])])]):t._e()],1)},staticRenderFns:[]};a.a=n},m5O0:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("nxqK"),s=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,function(){return n[t]})}(r);var i=e("QYfe"),u=e("VU/8")(s.a,i.a,!1,null,null,null);a.default=u.exports},nxqK:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=l(e("Xxa5")),s=l(e("exGp")),r=l(e("Dd8w")),i=e("NYxO"),u=l(e("mtWM")),o=l(e("e7x4"));function l(t){return t&&t.__esModule?t:{default:t}}a.default={metaInfo:function(){return{title:this.title}},computed:(0,r.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"}),{teamsInTournament:function(){var t=[];return void 0!=this.tournament.teams&&this.tournament.teams.length>0&&this.tournament.teams.forEach(function(a){t.push(a.id)}),t}}),mounted:function(){this.getTournament()},data:function(){return{title:"Detail tournament",tournament:null,success:!1,error:!1,response:null}},methods:{getTournament:function(){var t=this;return(0,s.default)(n.default.mark(function a(){var e,s,r,i,o;return n.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.ArrayToUrl({_with:"game,fights,fights.invitations.team,fights.winner"}),a.prev=1,a.next=4,u.default.get("/api/tournaments/"+t.$route.params.id+"?"+e);case 4:s=a.sent,t.$set(t,"tournament",s.data),t.tournament.start_at=t.dateConvertUTC(t.tournament.start_at,-1),t.tournament.register_start=t.dateConvertUTC(t.tournament.register_start,-1),r=t.tournament.winners_part.split(","),i=parseInt(t.tournament.prize_pool),o=[],r.forEach(function(t){o.push(parseInt(t)*i/100)}),t.tournament.prizes=o,t.title=t.tournament.title,t.$meta().refresh(),t.getTournamentTeams(),t.getTournamentBrackets(),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(1),t.errors.push(a.t0);case 22:case"end":return a.stop()}},a,t,[[1,19]])}))()},getTournamentTeams:function(){var t=this;return(0,s.default)(n.default.mark(function a(){var e,s;return n.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=t.ArrayToUrl({_with:"fights,users,institution.location,institution.location.parent"}),a.next=4,u.default.get("/api/tournaments/"+t.$route.params.id+"/teams?"+e);case 4:s=a.sent,t.$set(t.tournament,"teams",s.data),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t.errors.push(a.t0);case 11:case"end":return a.stop()}},a,t,[[0,8]])}))()},getTournamentBrackets:function(){var t=this;return(0,s.default)(n.default.mark(function a(){var e;return n.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.default.get("/api/tournaments/"+t.$route.params.id+"/brackets");case 3:e=a.sent,t.$set(t.tournament,"brackets",e.data),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.errors.push(a.t0);case 10:case"end":return a.stop()}},a,t,[[0,7]])}))()},register:function(){var t=this;this.authenticated?null!=this.user.team_id?u.default.post("/api/tournaments/"+this.$route.params.id+"/teams/"+this.user.team_id).then(function(a){(0,o.default)({type:"success",title:"Success!",html:"You are registered on the tournament!"}),t.getTournamentTeams()}).catch(function(t){(0,o.default)({type:"warning",title:"Error!",html:t.response.data.error})}):(0,o.default)({type:"warning",title:"Error!",html:"You need to be in the team."}):this.$router.push({name:"login"})},checkRigisterStart:function(){return this.moment.utc().isAfter(this.tournament.register_start)},checkRigisterEnd:function(){return this.moment.utc().isBefore(this.moment(this.tournament.start_at).subtract(1,"hours"))},checkRegistered:function(t){return this.teamsInTournament.indexOf(t)>-1}}}}});
//# sourceMappingURL=11.bb496c1bc2b13ba0b801.js.map