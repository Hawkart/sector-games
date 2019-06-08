webpackJsonp([5],{"10H0":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=c(s("Dd8w")),i=s("NYxO"),n=c(s("mtWM")),r=(c(s("e7x4")),s("HNcv")),l=c(s("I3G/"));function c(t){return t&&t.__esModule?t:{default:t}}a.default={props:["filter"],computed:(0,e.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),data:function(){return{fights:[],status_list:[{id:0,title:"Все"},{id:1,title:"Прошедшие"},{id:2,title:"Онлайн"},{id:3,title:"Предстоящие"}],status_id:null,pagination:[]}},mounted:function(){(0,r.loadMessages)(this.locale),this.moment.locale(this.locale),this.getFights();var t=this;l.default.nextTick(function(){$("#status_list").select2({placeholder:"Статус матча"}).on("change",function(a){t.status_id=$(a.currentTarget).find("option:selected").val()})})},methods:{getFights:function(){var t=this,a={page:1,_limit:12,_sort:"-start_at",_with:"invitations.team,invitations.team.institution,invitations.team.institution.location,winner,game"};if(null!==this.filter)for(var s in this.filter)this.filter.hasOwnProperty(s)&&(a[s]=this.filter[s]);if(this.authenticated&&1!=this.user.role_id){var e="/api/teams/"+this.user.team_id+"/fights";"referee"==this.user.type&&(a.judge_id=this.user.id,e="/api/fights")}else e="/api/fights";1==this.status_id?a["winner_id-gt"]=0:2==this.status_id?(a.winner_id=null,a["start_at-st"]=this.moment.utc().format()):3==this.status_id&&(a["start_at-gt"]=this.moment.utc().format());var i=this.UrlParamsMerge(a);n.default.get(e+"?"+i).then(function(a){var s=a.data.data,e=t;s.forEach(function(t){t.start_at=e.dateConvertUTC(t.start_at,-1)}),t.$set(t,"fights",s),delete a.data.data,t.pagination=a.data})},checkUpcoming:function(t){var a=new Date(t),s=new Date;return a.getTime()-s.getTime()>0}},watch:{"$route.query":function(t,a){this.getFights()},status_id:function(t,a){this.getFights()}}}},C0Yk:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("10H0"),i=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(a,t,function(){return e[t]})}(n);var r=s("qa8L"),l=s("VU/8")(i.a,r.a,!1,null,null,null);a.default=l.exports},HSeX:function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[null!=t.tournament?s("card",{attrs:{title:t.tournament.title}},[s("div",{staticClass:"nk-tabs"},[s("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#tabs-1-1",role:"tab","data-toggle":"tab"}},[t._v("Инфо")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-2",role:"tab","data-toggle":"tab"}},[t._v("Команды")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-3",role:"tab","data-toggle":"tab"}},[t._v("Матчи")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-4",role:"tab","data-toggle":"tab"}},[t._v("Сетка")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#tabs-1-5",role:"tab","data-toggle":"tab"}},[t._v("Призы")])])]),t._v(" "),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade show active",attrs:{role:"tabpanel",id:"tabs-1-1"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),s("div",{staticClass:"row vertical-gap"},[s("div",{staticClass:"col-md-6 col-xs-6"},[s("img",{staticClass:"w-100",attrs:{src:t.getImageLink(t.tournament.image,"avatar_team")}})]),t._v(" "),s("aside",{staticClass:"col-lg-6 nk-sidebar-sticky-parent"},[s("dl",[s("dt",{staticClass:"mb-5"},[t._v(t._s(t.$t("tournament_start_time"))+":")]),t._v(" "),s("dd",{staticClass:"mb-15 txt-dark font-13 weight-500"},[t._v(t._s(t.moment(t.tournament.start_at,"YYYY-MM-DD h:mm:ss").format("D MMM, HH:mm"))+" МСК")]),t._v(" "),s("dt",{staticClass:"mb-5"},[t._v(t._s(t.$t("reg_until"))+":")]),t._v(" "),s("dd",{staticClass:"mb-10 txt-dark font-13 weight-500"},[t._v(t._s(t.moment(t.tournament.start_at,"YYYY-MM-DD h:mm:ss").subtract(1,"hours").format("D MMM, HH:mm"))+" МСК")]),t._v(" "),s("dt",{staticClass:"mb-5"},[t._v(t._s(t.$t("teams"))+":")]),t._v(" "),s("dd",{staticClass:"mb-10 txt-dark font-13 weight-500"},[t._v(t._s(t.tournament.teams.length)+" / 175")]),t._v(" "),s("dt",{staticClass:"mb-5"},[t._v(t._s(t.$t("game"))+":")]),t._v(" "),s("dd",{staticClass:"mb-10 txt-dark font-13 weight-500"},[s("router-link",{attrs:{to:{name:"game",params:{gameId:t.tournament.game.id}},title:t.tournament.game.title}},[s("img",{attrs:{src:t.getImageLink(t.tournament.game.logo_mini),width:"35",alt:t.tournament.game.title}})])],1)])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-xs-12 mt-20"},[s("p",{staticClass:"text-white"},[t._v("Для учащихся и выпускников общеобразовательных школ и среднеспециальных учебных заведений в возрасте от 14 до 18 лет.")]),t._v(" "),s("div",{staticClass:"nk-gap-2"}),t._v(" "),s("div",{staticClass:"row vertical-gap"},[s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"nk-feature-1"},[s("h4",{staticClass:"nk-feature-title text-main-1 mb-0 f1em"},[t._v("1 Этап:")])])]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("div",{staticClass:"nk-feature-1"},[s("div",{staticClass:"nk-feature-cont"},[s("h3",{staticClass:"nk-feature-title text-main-1"},[t._v("Внутришкольный")]),t._v(" "),s("p",[t._v("\n                                                Пройдет с 07 по 11 августа 2018 года."),s("br"),t._v("\n                                                На этом этапе опрелятся Чемпионы Школ."),s("br"),t._v("\n                                                В следующий этап от школы выходит только одна команда.\n                                            ")])])])])]),t._v(" "),s("div",{staticClass:"nk-gap-2"}),t._v(" "),s("div",{staticClass:"row vertical-gap"},[s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"nk-feature-1"},[s("h4",{staticClass:"nk-feature-title text-main-1 mb-0 f1em"},[t._v("2 Этап:")])])]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("div",{staticClass:"nk-feature-1"},[s("div",{staticClass:"nk-feature-cont"},[s("h3",{staticClass:"nk-feature-title text-main-1"},[t._v("РЕГИОНАЛЬНЫЕ КВАЛИФИКАЦИИ")]),t._v(" "),s("p",[t._v("\n                                                Пройдет с 12 августа по 19 августа 2018 года."),s("br"),t._v("\n                                                Чемпионы школ встретятся в отборочном туре, чтобы определить финалистов, которые дальше продожат борьбу за звание Чемпиона России.\n                                            ")])])])])]),t._v(" "),s("div",{staticClass:"nk-gap-2"}),t._v(" "),s("div",{staticClass:"row vertical-gap"},[s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"nk-feature-1"},[s("h4",{staticClass:"nk-feature-title text-main-1 mb-0 f1em"},[t._v("3 Этап:")])])]),t._v(" "),s("div",{staticClass:"col-lg-9"},[s("div",{staticClass:"nk-feature-1"},[s("div",{staticClass:"nk-feature-cont"},[s("h3",{staticClass:"nk-feature-title text-main-1"},[t._v("Всероссийский Финал")]),t._v(" "),s("p",[t._v("\n                                                Финал пройдет с 29 по 31 августа 2018 года."),s("br"),t._v("\n                                                Победителя узнает вся страна!\n                                            ")])])])])])])]),t._v(" "),s("div",{staticClass:"nk-gap"})]),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-2"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),null!=t.tournament&&null!==t.tournament.teams&&t.tournament.teams.length>0?s("table",{staticClass:"nk-table"},[s("tbody",[s("tr",[s("th",[t._v(t._s(t.$t("title")))]),t._v(" "),s("th",[t._v(t._s(t.$t("region")))]),t._v(" "),s("th",[t._v(t._s(t.$t("players")))]),t._v(" "),s("th",[t._v(t._s(t.$t("game")))]),t._v(" "),s("th",[t._v(t._s(t.$t("count_matches")))]),t._v(" "),s("th",[t._v(t._s(t.$t("count_wins")))]),t._v(" "),s("th",[t._v(t._s(t.$t("victory_rate")))])]),t._v(" "),t._l(t.tournament.teams,function(a){return s("tr",[s("td",[s("router-link",{staticClass:"vm-title",attrs:{to:{name:"team",params:{id:a.id}}}},[s("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),s("span",[t._v(t._s(a.title))])])],1),t._v(" "),s("td",[a.institution_id>0?[t._v("\n                                    "+t._s(a.institution.location.parent.title)+",\n                                    "+t._s(a.institution.location.title)+"\n                                ")]:t._e()],2),t._v(" "),s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:{name:"team.detail.players",params:{slug:a.slug}}}},[t._v(t._s(a.users.length))]),t._v(" / "+t._s(a.quantity))],1),t._v(" "),null!==a.game?s("td",{staticClass:"text-center"},[s("router-link",{attrs:{to:{name:"game",params:{gameId:t.tournament.game.id}},title:t.tournament.game.title}},[s("img",{attrs:{src:t.getImageLink(t.tournament.game.logo_mini),width:"35",alt:t.tournament.game.title}})])],1):s("td",{staticClass:"text-center"}),t._v(" "),s("td",{staticClass:"text-center"},[t._v(t._s(a.count_fights))]),t._v(" "),s("td",{staticClass:"text-center"},[t._v(t._s(a.count_wins))]),t._v(" "),a.count_fights>0?s("td",{staticClass:"text-center"},[t._v(t._s(Number((a.count_wins/a.count_fights*100).toFixed(2)))+"%")]):s("td",{staticClass:"text-center"},[t._v("0%")])])})],2)]):t._e(),t._v(" "),s("pagination",{attrs:{pagination:t.pagination}}),t._v(" "),s("div",{staticClass:"nk-gap"})],1),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-3"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),s("match-list",{attrs:{filter:t.match_filter}}),t._v(" "),s("div",{staticClass:"nk-gap"})],1),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{role:"tabpanel",id:"tabs-1-4"}},[s("div",{staticClass:"nk-gap"}),t._v(" "),s("div",{staticClass:"row mt-30"},[s("div",{staticClass:"col-lg-3"},[t._l(t.tournament.teams,function(a){return t.groups[0].teams.indexOf(a.id)>-1?s("div",{staticClass:"team-bracket"},[s("router-link",{staticClass:"vm-title text-left",attrs:{to:{name:"team",params:{id:a.id}}}},[s("img",{staticClass:"img-responsive team-image w-25px",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),s("span",{staticClass:"ml-10"},[t._v(t._s(a.title))])])],1):t._e()}),t._v(" "),s("div",{staticClass:"mt-40"},[t._v(" ")]),t._v(" "),t._l(t.tournament.teams,function(a){return t.groups[1].teams.indexOf(a.id)>-1?s("div",{staticClass:"team-bracket"},[s("router-link",{staticClass:"vm-title text-left",attrs:{to:{name:"team",params:{id:a.id}}}},[s("img",{staticClass:"img-responsive team-image w-25px",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),s("span",{staticClass:"ml-10"},[t._v(t._s(a.title))])])],1):t._e()})],2),t._v(" "),s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"mt-70"},[t._v(" ")]),t._v(" "),t._l(t.tournament.teams,function(a){return[2,109].includes(a.id)?s("div",{staticClass:"team-bracket"},[s("router-link",{staticClass:"vm-title text-left",attrs:{to:{name:"team",params:{id:a.id}}}},[s("img",{staticClass:"img-responsive team-image w-25px",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),s("span",{staticClass:"ml-10"},[t._v(t._s(a.title))])])],1):t._e()}),t._v(" "),s("div",{staticClass:"mt-100"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"mt-100"},[t._v(" ")]),t._v(" "),t._l(t.tournament.teams,function(a){return[146,110].includes(a.id)?s("div",{staticClass:"team-bracket"},[s("router-link",{staticClass:"vm-title text-left",attrs:{to:{name:"team",params:{id:a.id}}}},[s("img",{staticClass:"img-responsive team-image w-25px",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),s("span",{staticClass:"ml-10"},[t._v(t._s(a.title))])])],1):t._e()})],2),t._v(" "),s("div",{staticClass:"col-lg-3 text-center"},[s("div",{staticClass:"mt-100"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"mt-100"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"mt-10"},[t._v(" ")]),t._v(" "),t._l(t.tournament.teams,function(a){return[2,110].includes(a.id)?s("div",{staticClass:"team-bracket"},[s("router-link",{staticClass:"vm-title text-left",attrs:{to:{name:"team",params:{id:a.id}}}},[s("img",{staticClass:"img-responsive team-image w-25px",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),s("span",{staticClass:"ml-10"},[t._v(t._s(a.title))])])],1):t._e()}),t._v(" "),s("div",{staticClass:"mt-100"},[t._v(" ")]),t._v(" "),s("spam",[t._v("Матч за 3-е:")]),t._v(" "),t._l(t.tournament.teams,function(a){return[109,146].includes(a.id)?s("div",{staticClass:"team-bracket"},[s("router-link",{staticClass:"vm-title text-left",attrs:{to:{name:"team",params:{id:a.id}}}},[s("img",{staticClass:"img-responsive team-image w-25px",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),s("span",{staticClass:"ml-10"},[t._v(t._s(a.title))])])],1):t._e()})],2),t._v(" "),s("div",{staticClass:"col-lg-3 text-center"},[s("div",{staticClass:"mt-100"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"mt-100"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"mt-40"},[t._v(" ")]),t._v(" "),t._l(t.tournament.teams,function(a){return[2].includes(a.id)?s("div",{staticClass:"team-bracket"},[s("router-link",{staticClass:"vm-title text-left",attrs:{to:{name:"team",params:{id:a.id}}}},[s("img",{staticClass:"img-responsive team-image w-25px",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}),t._v(" "),s("span",{staticClass:"ml-10"},[t._v(t._s(a.title))])])],1):t._e()})],2)])])])])]):t._e()],1)},staticRenderFns:[]};a.a=e},m5O0:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("nxqK"),i=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(a,t,function(){return e[t]})}(n);var r=s("HSeX"),l=s("VU/8")(i.a,r.a,!1,null,null,null);a.default=l.exports},nxqK:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o(s("Xxa5")),i=o(s("exGp")),n=o(s("Dd8w")),r=s("NYxO"),l=o(s("mtWM")),c=o(s("e7x4")),m=(s("HNcv"),o(s("I3G/")),o(s("C0Yk")));function o(t){return t&&t.__esModule?t:{default:t}}a.default={components:{MatchList:m.default},metaInfo:function(){return{title:this.title}},computed:(0,n.default)({},(0,r.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"}),{teamsInTournament:function(){var t=[];return void 0!=this.tournament.teams&&this.tournament.teams.length>0&&this.tournament.teams.forEach(function(a){t.push(a.id)}),t}}),mounted:function(){this.getTournament()},data:function(){return{title:"Detail tournament",tournament:null,fights:null,status_list:[{id:0,title:"Все"},{id:1,title:"Прошедшие"},{id:2,title:"Онлайн"},{id:3,title:"Предстоящие"}],match_filter:{tournament_id:this.$route.params.id},status_id:null,success:!1,error:!1,response:null,groups:[{teams:[146,131,181,2,73],title:"Восточная конференция"},{teams:[252,167,109,110,220],title:"Западная конференция"}]}},methods:{getTournament:function(){var t=this;return(0,i.default)(e.default.mark(function a(){var s,i,n,r,c;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s=t.ArrayToUrl({_with:"game,fights,fights.invitations.team,fights.winner"}),a.prev=1,a.next=4,l.default.get("/api/tournaments/"+t.$route.params.id+"?"+s);case 4:i=a.sent,t.$set(t,"tournament",i.data),t.tournament.start_at=t.dateConvertUTC(t.tournament.start_at,-1),t.tournament.register_start=t.dateConvertUTC(t.tournament.register_start,-1),n=t.tournament.winners_part.split(","),r=parseInt(t.tournament.prize_pool),c=[],n.forEach(function(t){c.push(parseInt(t)*r/100)}),t.tournament.prizes=c,t.title=t.tournament.title,t.$meta().refresh(),t.getTournamentTeams(),t.getTournamentBrackets(),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(1),t.errors.push(a.t0);case 22:case"end":return a.stop()}},a,t,[[1,19]])}))()},getTournamentTeams:function(){var t=this;return(0,i.default)(e.default.mark(function a(){var s,i;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=t.ArrayToUrl({_with:"fights,users,institution.location,institution.location.parent"}),a.next=4,l.default.get("/api/tournaments/"+t.$route.params.id+"/teams?"+s);case 4:i=a.sent,t.$set(t.tournament,"teams",i.data),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t.errors.push(a.t0);case 11:case"end":return a.stop()}},a,t,[[0,8]])}))()},getTournamentBrackets:function(){var t=this;return(0,i.default)(e.default.mark(function a(){var s;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.default.get("/api/tournaments/"+t.$route.params.id+"/brackets");case 3:s=a.sent,t.$set(t.tournament,"brackets",s.data),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.errors.push(a.t0);case 10:case"end":return a.stop()}},a,t,[[0,7]])}))()},register:function(){var t=this;this.authenticated?null!=this.user.team_id?l.default.post("/api/tournaments/"+this.$route.params.id+"/teams/"+this.user.team_id).then(function(a){(0,c.default)({type:"success",title:"Success!",html:"You are registered on the tournament!"}),t.getTournamentTeams()}).catch(function(t){(0,c.default)({type:"warning",title:"Error!",html:t.response.data.error})}):(0,c.default)({type:"warning",title:"Error!",html:"You need to be in the team."}):this.$router.push({name:"login"})},checkRigisterStart:function(){return this.moment.utc().isAfter(this.tournament.register_start)},checkRigisterEnd:function(){return this.moment.utc().isBefore(this.moment(this.tournament.start_at).subtract(1,"hours"))},checkRegistered:function(t){return this.teamsInTournament.indexOf(t)>-1},checkUpcoming:function(t){var a=new Date(t),s=new Date;return a.getTime()-s.getTime()>0}}}},qa8L:function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("card",[s("div",{staticClass:"form-wrap"},[s("form",{attrs:{autocomplete:"off",id:"filter-form"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.status_id,expression:"status_id"}],staticClass:"form-control",attrs:{name:"status_id","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.status_id=a.target.multiple?s:s[0]}}},t._l(t.status_list,function(a){return s("option",{domProps:{value:a.id}},[t._v("\n                                            "+t._s(a.title)+"\n                                        ")])}))])])])])])],1)]),t._v(" "),s("div",{staticClass:"nk-gap-2"})],t._v(" "),null!=t.fights&&t.fights.length>0?s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t._l(t.fights,function(a){return null!=a.invitations?s("div",{staticClass:"nk-match"},[s("div",{staticClass:"nk-match-team-left"},[s("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[0].team.id}}}},[s("span",{staticClass:"nk-match-team-logo"},[s("img",{staticClass:"w-64px mr-10",attrs:{src:t.getImageLink(a.invitations[0].team.image,"avatar_team")}})]),t._v(" "),s("span",{staticClass:"nk-match-team-name"},[null!=a.invitations[0].team.institution?[t._v("\n                                "+t._s(a.invitations[0].team.institution.title)+", "+t._s(a.invitations[0].team.institution.location.title)+","),s("br")]:t._e(),t._v("\n                            "+t._s(a.invitations[0].team.title)+"\n                        ")],2)])],1),t._v(" "),s("div",{staticClass:"nk-match-status"},[s("router-link",{attrs:{to:{name:"match",params:{id:a.id}}}},[s("span",{staticClass:"nk-match-status-vs"},[24==a.id?[t._v("VS (bo5)")]:[t._v("VS (bo3)")]],2),t._v(" "),s("span",{staticClass:"nk-match-status-date"},[t._v(t._s(t.moment.utc(a.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, HH:mm"))+" МСК")]),t._v(" "),t.checkUpcoming(a.start_at)?[s("span",{staticClass:"nk-match-score"},[t._v(t._s(t.$t("upcoming")))])]:a.winner_id>0&&null!=a.result?[s("span",{staticClass:"nk-match-score bg-dark-1"},[parseInt(a.result[0])>parseInt(a.result[1])&&a.invitations[0].team.id==a.winner_id?[t._v("\n                                "+t._s(a.result[0])+" : "+t._s(a.result[1])+"\n                            ")]:parseInt(a.result[1])>parseInt(a.result[0])&&a.invitations[1].team.id==a.winner_id?[t._v("\n                                "+t._s(a.result[0])+" : "+t._s(a.result[1])+"\n                            ")]:[t._v("\n                                "+t._s(a.result[1])+" : "+t._s(a.result[0])+"\n                            ")]],2)]:[s("span",{staticClass:"nk-match-score bg-success"},[t._v(t._s(t.$t("online")))])]],2)],1),t._v(" "),s("div",{staticClass:"nk-match-team-right"},[s("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[1].team.id}}}},[s("span",{staticClass:"nk-match-team-name"},[null!=a.invitations[1].team.institution?[t._v("\n                                "+t._s(a.invitations[1].team.institution.title)+", "+t._s(a.invitations[1].team.institution.location.title)+","),s("br")]:t._e(),t._v("\n                            "+t._s(a.invitations[1].team.title)+"\n                        ")],2),t._v(" "),s("span",{staticClass:"nk-match-team-logo"},[s("img",{staticClass:"w-64px ml-10",attrs:{src:t.getImageLink(a.invitations[1].team.image,"avatar_team")}})])])],1)]):t._e()}),t._v(" "),s("pagination",{attrs:{pagination:t.pagination}})],2)]):s("div",[s("p",{staticClass:"txt-danger"},[t._v(t._s(t.$t("no_results")))])])],2)},staticRenderFns:[]};a.a=e}});
//# sourceMappingURL=5.34365ae19550ad69be50.js.map