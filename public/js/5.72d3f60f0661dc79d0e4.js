webpackJsonp([5],{"+Lk5":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o(s("Xxa5")),n=o(s("exGp")),i=o(s("Dd8w")),r=s("NYxO"),l=o(s("mtWM"));o(s("e7x4")),s("HNcv"),o(s("I3G/"));function o(t){return t&&t.__esModule?t:{default:t}}a.default={computed:(0,i.default)({},(0,r.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),data:function(){return{brackets:[],pagination:[]}},mounted:function(){this.getTournamentBrackets()},methods:{getTournamentBrackets:function(){var t=this;return(0,n.default)(e.default.mark(function a(){var s;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.default.get("/api/tournaments/"+t.$route.params.id+"/brackets");case 3:s=a.sent,t.$set(t,"brackets",s.data),t.bracketsSlinkInit(),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t.errors.push(a.t0);case 11:case"end":return a.stop()}},a,t,[[0,8]])}))()},convertTime:function(t){return this.dateConvertUTC(t,-1)},countClass:function(t,a){var s=[];return a||(1==t.round.number?s.push("d-block"):s.push("mt-60")),s},bracketsSlinkInit:function(){}}}},"10H0":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o(s("Dd8w")),n=s("NYxO"),i=o(s("mtWM")),r=(o(s("e7x4")),s("HNcv")),l=o(s("I3G/"));function o(t){return t&&t.__esModule?t:{default:t}}a.default={props:["filter"],computed:(0,e.default)({},(0,n.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),data:function(){return{fights:[],status_list:[{id:0,title:this.$t("s_t_all")},{id:1,title:this.$t("s_t_finished")},{id:2,title:this.$t("s_t_online")},{id:3,title:this.$t("s_t_future")}],status_id:null,pagination:[]}},mounted:function(){(0,r.loadMessages)(this.locale),this.moment.locale(this.locale),this.getFights();var t=this;l.default.nextTick(function(){$("#status_list").select2({placeholder:t.$t("status")}).on("change",function(a){t.status_id=$(a.currentTarget).find("option:selected").val()})})},methods:{getFights:function(){var t=this,a={page:1,_limit:12,_sort:"-start_at",_with:"invitations.team,invitations.team.institution,invitations.team.institution.location,winner,game"};if(null!==this.filter)for(var s in this.filter)this.filter.hasOwnProperty(s)&&(a[s]=this.filter[s]);if(this.authenticated&&1!=this.user.role_id){var e="/api/teams/"+this.user.team_id+"/fights";"referee"==this.user.type&&(a.judge_id=this.user.id,e="/api/fights")}else e="/api/fights";1==this.status_id?a["winner_id-gt"]=0:2==this.status_id?(a.winner_id=null,a["start_at-st"]=this.moment.utc().format()):3==this.status_id&&(a["start_at-gt"]=this.moment.utc().format());var n=this.UrlParamsMerge(a);i.default.get(e+"?"+n).then(function(a){var s=a.data.data,e=t;s.forEach(function(t){t.start_at=e.dateConvertUTC(t.start_at,-1)}),t.$set(t,"fights",s),delete a.data.data,t.pagination=a.data})},checkUpcoming:function(t){var a=new Date(t),s=new Date;return a.getTime()-s.getTime()>0}},watch:{"$route.query":function(t,a){this.getFights()},status_id:function(t,a){this.getFights()}}}},"3J0H":function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[null!=t.tournament?s("card",{attrs:{title:t.tournament.title}},[s("div",{staticClass:"nk-tabs"},[s("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#tabs-1-1",role:"tab","data-toggle":"tab"}},[t._v(t._s(t.$t("lobby")))])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-5",role:"tab","data-toggle":"tab"}},[t._v(t._s(t.$t("rules")))])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-2",role:"tab","data-toggle":"tab"}},[t._v(t._s(t.$t("teams")))])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-3",role:"tab","data-toggle":"tab"}},[t._v(t._s(t.$t("matches")))])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-4",role:"tab","data-toggle":"tab"},on:{click:function(a){return t.initBrackets()}}},[t._v(t._s(t.$t("brackets")))])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-6",role:"tab","data-toggle":"tab"}},[t._v(t._s(t.$t("prizes")))])]),t._v(" "),s("li",{staticClass:"nav-item"},[3==t.tournament.status?s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-7",role:"tab","data-toggle":"tab"}},[t._v(t._s(t.$t("winners")))]):t._e()])]),t._v(" "),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade show active",attrs:{role:"tabpanel",id:"tabs-1-1"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),s("div",{staticClass:"row vertical-gap"},[s("div",{staticClass:"col-md-4 col-xs-6"},[s("img",{staticClass:"w-100",attrs:{src:t.getImageLink(t.tournament.image,"avatar_team")}})]),t._v(" "),s("aside",{staticClass:"col-lg-8 nk-sidebar-sticky-parent"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("dl",[s("dt",{staticClass:"mb-5"},[t._v(t._s(t.$t("tournament_start_time"))+":")]),t._v(" "),s("dd",{staticClass:"mb-15 txt-dark font-13 weight-500"},[t._v(t._s(t.moment(t.tournament.start_at,"YYYY-MM-DD h:mm:ss").format("D MMM, HH:mm"))+" Msk")]),t._v(" "),s("dt",{staticClass:"mb-5"},[t._v(t._s(t.$t("reg_until"))+":")]),t._v(" "),s("dd",{staticClass:"mb-10 txt-dark font-13 weight-500"},[t._v(t._s(t.moment(t.tournament.start_at,"YYYY-MM-DD h:mm:ss").subtract(1,"hours").format("D MMM, HH:mm"))+" Msk")])])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("dl",[s("dt",{staticClass:"mb-5"},[t._v(t._s(t.$t("teams"))+":")]),t._v(" "),s("dd",{staticClass:"mb-10 txt-dark font-13 weight-500"},[t._v(t._s(t.tournament.teams.length)+" / "+t._s(t.tournament.count_teams))]),t._v(" "),s("dt",{staticClass:"mb-5"},[t._v(t._s(t.$t("game"))+":")]),t._v(" "),s("dd",{staticClass:"mb-10 txt-dark font-13 weight-500"},[s("router-link",{attrs:{to:{name:"game",params:{gameId:t.tournament.game.id}},title:t.tournament.game.title}},[s("img",{attrs:{src:t.getImageLink(t.tournament.game.logo_mini),width:"35",alt:t.tournament.game.title}})])],1)])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 text-white",domProps:{innerHTML:t._s(t.tournament.description)}})])])])]),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-2"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),null!=t.tournament&&null!==t.tournament.teams&&t.tournament.teams.length>0?s("table",{staticClass:"nk-table"},[s("tbody",[s("tr",[s("th",[t._v(t._s(t.$t("title")))]),t._v(" "),s("th",[t._v(t._s(t.$t("players")))]),t._v(" "),s("th",[t._v(t._s(t.$t("game")))]),t._v(" "),s("th",[t._v(t._s(t.$t("count_matches")))]),t._v(" "),s("th",[t._v(t._s(t.$t("count_wins")))]),t._v(" "),s("th",[t._v(t._s(t.$t("victory_rate")))])]),t._v(" "),t._l(t.tournament.teams,function(a){return s("tr",[s("td",[s("router-link",{staticClass:"vm-title",attrs:{to:{name:"team",params:{id:a.id}}}},[s("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),s("span",[t._v(t._s(a.title))])])],1),t._v(" "),s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:{name:"team.detail.players",params:{slug:a.slug}}}},[t._v(t._s(a.users.length))]),t._v(" / "+t._s(a.quantity))],1),t._v(" "),null!==a.game?s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:{name:"game",params:{gameId:t.tournament.game.id}},title:t.tournament.game.title}},[s("img",{attrs:{src:t.getImageLink(t.tournament.game.logo_mini),width:"35",alt:t.tournament.game.title}})])],1):s("td",{staticClass:"text-center"}),t._v(" "),s("td",{staticClass:"text-center"},[t._v(t._s(a.count_fights))]),t._v(" "),s("td",{staticClass:"text-center"},[t._v(t._s(a.count_wins))]),t._v(" "),a.count_fights>0?s("td",{staticClass:"text-center"},[t._v(t._s(Number((a.count_wins/a.count_fights*100).toFixed(2)))+"%")]):s("td",{staticClass:"text-center"},[t._v("0%")])])})],2)]):t._e(),t._v(" "),s("pagination",{attrs:{pagination:t.pagination}}),t._v(" "),s("div",{staticClass:"nk-gap"})],1),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-3"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),s("match-list",{attrs:{filter:t.match_filter}}),t._v(" "),s("div",{staticClass:"nk-gap"})],1),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-4"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),s("brackets")],1),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-5"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),s("div",{staticClass:"row mt-30"},[s("div",{staticClass:"col-lg-12 text-white",domProps:{innerHTML:t._s(t.tournament.rules)}})])]),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-6"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),s("div",{staticClass:"row mt-30"},[s("div",{staticClass:"col-lg-12 text-white",domProps:{innerHTML:t._s(t.tournament.prizes)}})])]),t._v(" "),3==t.tournament.status?s("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-7"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),s("div",{staticClass:"row mt-30"},[s("div",{staticClass:"col-lg-12 text-white"},t._l(t.winners,function(a,e){return s("div",{key:"winers"-a.id},[t._v("\n                                "+t._s(e+1)+" - "+t._s(a.title)+"\n                            ")])}),0)])]):t._e()])])]):t._e()],1)},staticRenderFns:[]};a.a=e},C0Yk:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("10H0"),n=s.n(e);for(var i in e)"default"!==i&&function(t){s.d(a,t,function(){return e[t]})}(i);var r=s("jPDk"),l=s("VU/8")(n.a,r.a,!1,null,null,null);a.default=l.exports},K4rB:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("+Lk5"),n=s.n(e);for(var i in e)"default"!==i&&function(t){s.d(a,t,function(){return e[t]})}(i);var r=s("gdhl"),l=s("VU/8")(n.a,r.a,!1,null,null,null);a.default=l.exports},gdhl:function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tournament"},[s("div",{staticClass:"tournament-nav hidden"},[s("div",{staticClass:"tournament-nav__list"},t._l(t.brackets.rounds,function(a){return s("div",{key:"high-nav-"+a.round.id,staticClass:"tournament-nav__round"},[s("div",{staticClass:"tournament-nav__round-box",class:{active:1==a.round.number},attrs:{"data-round":a.round.number}},[t._v(t._s(a.round.title))])])}),0)]),t._v(" "),s("div",{staticClass:"tournament-head"},[t._m(0),t._v(" "),s("div",{staticClass:"tournament-head__list"},t._l(t.brackets.rounds,function(a){return s("div",{key:"head-nav-"+a.round.id,staticClass:"tournament-head__round"},[s("div",{staticClass:"tournament-head__round-box"},[s("div",{staticClass:"tournament-head__round-title"},[t._v(t._s(a.round.title))]),t._v(" "),s("div",{staticClass:"tournament-head__round-info"},[s("div",{staticClass:"tournament-head__round-date"},[s("img",{attrs:{src:"/images/date.svg",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.moment(t.convertTime(a.round.datetime),"YYYY-MM-DD h:mm:ss").format("DD.MM.YYYY")))])]),t._v(" "),s("div",{staticClass:"tournament-head__round-time"},[s("img",{attrs:{src:"/images/clock.svg",alt:""}}),t._v(" "),s("span",[t._v(t._s(t.moment(t.convertTime(a.round.datetime),"YYYY-MM-DD h:mm:ss").format("h:mm")))])])])])])}),0)]),t._v(" "),s("div",{staticClass:"tournament-body"},[s("div",{staticClass:"tournament-list"},t._l(t.brackets.rounds,function(a){return s("div",{key:"tlist-"+a.round.id,staticClass:"tournament-list__round"},t._l(a.matches,function(a){return s("div",{key:"tlist-match-"+a.id,staticClass:"tournament-list__group",class:{complete:a.winner_id>0}},t._l(a.teams,function(e,n){return s("div",{key:"tlist-match-team-"+a.id+"-"+n,staticClass:"tournament-list__team",class:{win:void 0!=e.id&&e.id==a.winner_id}},[s("div",{staticClass:"tournament-list__team-box"},[s("div",{staticClass:"tournament-list__team-text"},[s("div",{staticClass:"tournament-list__team-logo"},[e.id>0?s("img",{attrs:{src:t.getImageLink(e.image,"avatar_team"),alt:e.title}}):t._e()]),t._v(" "),s("div",{staticClass:"tournament-list__team-name"},[e.id>0?s("router-link",{attrs:{to:{name:"team",params:{id:e.id}}}},[t._v("\n                                        "+t._s(e.title)+"\n                                    ")]):s("span",[t._v("\n                                        "+t._s(e.title)+"\n                                    ")])],1)]),t._v(" "),s("div",{staticClass:"tournament-list__team-count"},[a.winner_id>0?s("span",[t._v(t._s(a.result[n]))]):s("span",[t._v("0")])])])])}),0)}),0)}),0)]),t._v(" "),s("div",{staticClass:"tournament-nav"},[t._m(1),t._v(" "),s("div",{staticClass:"tournament-nav__list"},t._l(t.brackets.rounds,function(a){return s("div",{key:"bottom-nav-"+a.round.id,staticClass:"tournament-nav__round"},[s("div",{staticClass:"tournament-nav__round-box",class:{active:1==a.round.number},attrs:{"data-round":a.round.number}},[t._v(t._s(a.round.title))])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tournament-head__arr"},[a("div",{staticClass:"tournament-head__arr-prev disabled"},[a("img",{attrs:{src:"/images/arr-left.svg",alt:""}})]),this._v(" "),a("div",{staticClass:"tournament-head__arr-next"},[a("img",{attrs:{src:"/images/arr-right.svg",alt:""}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tournament-nav__arr"},[a("div",{staticClass:"tournament-nav__arr-prev disabled"},[a("img",{attrs:{src:"/images/arr-left.svg",alt:""}})]),this._v(" "),a("div",{staticClass:"tournament-nav__arr-next"},[a("img",{attrs:{src:"/images/arr-right.svg",alt:""}})])])}]};a.a=e},jPDk:function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("card",[s("div",{staticClass:"form-wrap"},[s("form",{attrs:{autocomplete:"off",id:"filter-form"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.status_id,expression:"status_id"}],staticClass:"form-control",attrs:{name:"status_id","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.status_id=a.target.multiple?s:s[0]}}},t._l(t.status_list,function(a){return s("option",{domProps:{value:a.id}},[t._v("\n                                            "+t._s(a.title)+"\n                                        ")])}),0)])])])])])],1)]),t._v(" "),s("div",{staticClass:"nk-gap-2"})],t._v(" "),null!=t.fights&&t.fights.length>0?s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t._l(t.fights,function(a){return null!=a.invitations?s("div",{staticClass:"nk-match"},[s("div",{staticClass:"nk-match-team-left"},[null!=a.invitations[0].team?s("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[0].team.id}}}},[s("span",{staticClass:"nk-match-team-logo"},[s("img",{staticClass:"w-64px mr-10",attrs:{src:t.getImageLink(a.invitations[0].team.image,"avatar_team")}})]),t._v(" "),s("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[0].team.title)+"\n                        ")])]):t._e()],1),t._v(" "),s("div",{staticClass:"nk-match-status"},[s("router-link",{attrs:{to:{name:"match",params:{id:a.id}}}},[s("span",{staticClass:"nk-match-status-vs"},[[t._v("VS (bo3)")]],2),t._v(" "),s("span",{staticClass:"nk-match-status-date"},[t._v(t._s(t.moment.utc(a.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, HH:mm"))+" Msk")]),t._v(" "),t.checkUpcoming(a.start_at)?[s("span",{staticClass:"nk-match-score"},[t._v(t._s(t.$t("upcoming")))])]:a.winner_id>0&&null!=a.result?[s("span",{staticClass:"nk-match-score bg-dark-1"},[parseInt(a.result[0])>parseInt(a.result[1])&&a.invitations[0].team.id==a.winner_id?[t._v("\n                                "+t._s(a.result[0])+" : "+t._s(a.result[1])+"\n                            ")]:parseInt(a.result[1])>parseInt(a.result[0])&&a.invitations[1].team.id==a.winner_id?[t._v("\n                                "+t._s(a.result[0])+" : "+t._s(a.result[1])+"\n                            ")]:[t._v("\n                                "+t._s(a.result[1])+" : "+t._s(a.result[0])+"\n                            ")]],2)]:[s("span",{staticClass:"nk-match-score bg-success"},[t._v(t._s(t.$t("online")))])]],2)],1),t._v(" "),s("div",{staticClass:"nk-match-team-right"},[null!=a.invitations[1].team?s("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[1].team.id}}}},[s("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[1].team.title)+"\n                        ")]),t._v(" "),s("span",{staticClass:"nk-match-team-logo"},[s("img",{staticClass:"w-64px ml-10",attrs:{src:t.getImageLink(a.invitations[1].team.image,"avatar_team")}})])]):t._e()],1)]):t._e()}),t._v(" "),s("pagination",{attrs:{pagination:t.pagination}})],2)]):s("div",[s("p",{staticClass:"txt-danger"},[t._v(t._s(t.$t("no_results")))])])],2)},staticRenderFns:[]};a.a=e},m5O0:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("nxqK"),n=s.n(e);for(var i in e)"default"!==i&&function(t){s.d(a,t,function(){return e[t]})}(i);var r=s("3J0H"),l=s("VU/8")(n.a,r.a,!1,null,null,null);a.default=l.exports},nxqK:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=m(s("Xxa5")),n=m(s("exGp")),i=m(s("Dd8w")),r=s("NYxO"),l=m(s("mtWM")),o=m(s("e7x4")),u=(s("HNcv"),m(s("I3G/"))),c=m(s("C0Yk")),d=m(s("K4rB"));function m(t){return t&&t.__esModule?t:{default:t}}a.default={components:{Brackets:d.default,MatchList:c.default},metaInfo:function(){return{title:this.title}},computed:(0,i.default)({},(0,r.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"}),{teamsInTournament:function(){var t=[];return void 0!=this.tournament.teams&&this.tournament.teams.length>0&&this.tournament.teams.forEach(function(a){a.length>0&&t.push(a.id)}),t}}),mounted:function(){this.getTournament()},data:function(){return{title:"Detail tournament",tournament:null,fights:null,status_list:[{id:0,title:this.$t("s_t_all")},{id:1,title:this.$t("s_t_finished")},{id:2,title:this.$t("s_t_online")},{id:3,title:this.$t("s_t_future")}],match_filter:{tournament_id:this.$route.params.id},status_id:null,success:!1,error:!1,response:null,winners:[]}},methods:{getTournament:function(){var t=this;return(0,n.default)(e.default.mark(function a(){var s,n;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s=t.ArrayToUrl({_with:"game,fights,fights.invitations.team,fights.winner"}),a.prev=1,a.next=4,l.default.get("/api/tournaments/"+t.$route.params.id+"?"+s);case 4:n=a.sent,t.$set(t,"tournament",n.data),t.tournament.start_at=t.dateConvertUTC(t.tournament.start_at,-1),t.tournament.register_start=t.dateConvertUTC(t.tournament.register_start,-1),t.title=t.tournament.title,t.$meta().refresh(),t.getTournamentTeams(),3==t.tournament.status&&t.getTournamentWinners(),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(1),t.errors.push(a.t0);case 17:case"end":return a.stop()}},a,t,[[1,14]])}))()},getTournamentTeams:function(){var t=this;return(0,n.default)(e.default.mark(function a(){var s,n;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=t.ArrayToUrl({_with:"fights,users,institution.location,institution.location.parent"}),a.next=4,l.default.get("/api/tournaments/"+t.$route.params.id+"/teams?"+s);case 4:n=a.sent,t.$set(t.tournament,"teams",n.data),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t.errors.push(a.t0);case 11:case"end":return a.stop()}},a,t,[[0,8]])}))()},getTournamentWinners:function(){var t=this;return(0,n.default)(e.default.mark(function a(){var s;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.default.get("/api/tournaments/"+t.$route.params.id+"/winners");case 3:s=a.sent,t.$set(t,"winners",s.data),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.errors.push(a.t0);case 10:case"end":return a.stop()}},a,t,[[0,7]])}))()},register:function(){var t=this;this.authenticated?null!=this.user.team_id?l.default.post("/api/tournaments/"+this.$route.params.id+"/teams/"+this.user.team_id).then(function(a){(0,o.default)({type:"success",title:"Success!",html:"You are registered on the tournament!"}),t.getTournamentTeams()}).catch(function(t){(0,o.default)({type:"warning",title:"Error!",html:t.response.data.error})}):(0,o.default)({type:"warning",title:"Error!",html:"You need to be in the team."}):this.$router.push({name:"login"})},checkRigisterStart:function(){return this.moment.utc().isAfter(this.tournament.register_start)},checkRigisterEnd:function(){return this.moment.utc().isBefore(this.moment(this.tournament.start_at).subtract(1,"hours"))},checkRegistered:function(t){return this.teamsInTournament.indexOf(t)>-1},checkUpcoming:function(t){var a=new Date(t),s=new Date;return a.getTime()-s.getTime()>0},initBrackets:function(){var t=this;u.default.nextTick(function(){setTimeout(function(){t.slickBracketInit()},500)})}}}}});
//# sourceMappingURL=5.72d3f60f0661dc79d0e4.js.map