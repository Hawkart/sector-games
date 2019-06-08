webpackJsonp([11],{"1rvA":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=u(e("Dd8w")),i=e("NYxO"),n=u(e("mtWM")),r=e("HNcv"),l=u(e("I3G/")),c=u(e("e7x4"));function u(t){return t&&t.__esModule?t:{default:t}}s.default={metaInfo:function(){return{title:this.$t("tournaments")}},data:function(){return{tournaments:[],pagination:[],status_list:[{id:0,title:"Все"},{id:1,title:"Прошедшие"},{id:2,title:"Онлайн"},{id:3,title:"Предстоящие"}],status_id:null}},computed:(0,a.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),mounted:function(){this.getTournaments(),(0,r.loadMessages)(this.locale),this.moment.locale(this.locale);var t=this;l.default.nextTick(function(){$("#status_list").select2({placeholder:"Статус турнира"}).on("change",function(s){t.status_id=$(s.currentTarget).find("option:selected").val()})})},methods:{getTournaments:function(){var t=this,s=(new Date,{page:1,_limit:12,_sort:"start_at",_with:"teams,game"});1==this.status_id?s["end_at-not"]=null:2==this.status_id?(s["start_at-st"]=this.moment.utc().format(),s.end_at=null):3==this.status_id&&(s["start_at-gt"]=this.moment.utc().format());var e=this.UrlParamsMerge(s);n.default.get("/api/tournaments?"+e).then(function(s){var e=s.data.data,a=t;e.length>0&&e.forEach(function(t){t.start_at=a.dateConvertUTC(t.start_at,-1)}),t.$set(t,"tournaments",e),delete s.data.data,t.pagination=s.data})},checkRegisterStart:function(t){return this.moment.utc().isAfter(t)},checkRegisterEnd:function(t){return this.moment.utc().isBefore(this.moment(t).subtract(1,"hours"))},register:function(){var t=this;this.authenticated?null!=this.user.team_id?n.default.post("/api/tournaments/"+this.$route.params.id+"/teams/"+this.user.team_id).then(function(s){(0,c.default)({type:"success",title:"Success!",html:"You are registered on the tournament!"}),t.getTournamentTeams()}).catch(function(t){(0,c.default)({type:"warning",title:"Error!",html:t.response.data.error})}):(0,c.default)({type:"warning",title:"Error!",html:"You need to be in the team."}):this.$router.push({name:"login"})}},watch:{"$route.query":function(t,s){this.getTournaments()},status_id:function(t,s){this.getTournaments()}}}},dAyu:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("1rvA"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);var r=e("zPM+"),l=e("VU/8")(i.a,r.a,!1,null,null,null);s.default=l.exports},"zPM+":function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("card",{attrs:{title:t.$t("tournaments")}},[[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("card",[e("div",{staticClass:"form-wrap"},[e("form",{attrs:{autocomplete:"off",id:"filter-form"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.status_id,expression:"status_id"}],staticClass:"form-control",attrs:{name:"status_id","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.status_id=s.target.multiple?e:e[0]}}},t._l(t.status_list,function(s){return e("option",{domProps:{value:s.id}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.title)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])}))])])])])])],1)]),t._v(" "),e("div",{staticClass:"nk-gap-2"})],t._v(" "),null!=t.tournaments&&t.tournaments.length>0?e("table",{staticClass:"nk-table"},[e("tbody",[e("tr",[e("th",[t._v(t._s(t.$t("title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("game")))]),t._v(" "),e("th",[t._v(t._s(t.$t("tournament_start_time")))]),t._v(" "),e("th",[t._v(t._s(t.$t("tournament_register_start_time")))]),t._v(" "),e("th",[t._v(t._s(t.$t("teams")))]),t._v(" "),e("th",[t._v(" ")])]),t._v(" "),t._l(t.tournaments,function(s){return e("tr",[e("td",[e("router-link",{staticClass:"vm-title",attrs:{to:{name:"tournament",params:{id:s.id}}}},[null!=s.image?e("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(s.image,"avatar_team"),alt:s.title}}):e("i",{staticClass:"ti-cup mr-20"}),t._v(" "),e("span",[t._v(t._s(s.title))])])],1),t._v(" "),e("td",{staticClass:"text-center"},[e("router-link",{attrs:{to:{name:"game",params:{gameId:s.game.id}},title:s.game.title}},[e("img",{attrs:{src:t.getImageLink(s.game.logo_mini),width:"35",alt:s.game.title}})])],1),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(t.moment(s.start_at,"YYYY-MM-DD h:mm:ss").format("D MMM, HH:mm"))+" МСК")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(t.moment(s.register_start,"YYYY-MM-DD h:mm:ss").format("D MMM, HH:mm"))+" МСК")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(s.teams.length)+" / 175")]),t._v(" "),e("td",[e("div",{staticClass:"input-group mt-5"},[t.checkRegisterStart(s.register_start)&&t.checkRegisterEnd(s.register_start)?e("button",{staticClass:"btn btn-primary btn-xs",on:{click:t.register}},[t._v("Зарегистрироваться")]):t.checkRegisterEnd(s.register_start)?t._e():e("button",{staticClass:"btn btn-defualt btn-xs",attrs:{disabled:""}},[t._v("Регистрация завершена")])])])])}),t._v(" "),e("tr",[e("td",[e("a",{staticClass:"vm-title",attrs:{href:"#"}},[e("img",{staticClass:"w-50px mr-10",attrs:{src:"/images/ava_32.png"}}),t._v(" "),e("span",[t._v("CS:GO")])])]),t._v(" "),e("td",{staticClass:"text-center"},[e("img",{attrs:{src:"/images/CS_GO1",width:"35"}})]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("23 фев. 2019 г., МСК")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("17 фев. 2019 г., МСК")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("-")]),t._v(" "),e("td",[e("div",{staticClass:"input-group mt-5"},[e("button",{staticClass:"btn btn-defualt btn-xs text-info",attrs:{disabled:""}},[t._v("Регистрация ожидается")])])])]),t._v(" "),e("tr",[e("td",[e("a",{staticClass:"vm-title",attrs:{href:"#"}},[e("img",{staticClass:"w-50px mr-10",attrs:{src:"/images/ava_32.png"}}),t._v(" "),e("span",[t._v("LOL")])])]),t._v(" "),e("td",{staticClass:"text-center"},[e("img",{attrs:{src:"/images/lol.jpg",width:"35"}})]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("13 апр. 2019 г., МСК")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("7 апр. 2019 г., МСК")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("-")]),t._v(" "),e("td",[e("div",{staticClass:"input-group mt-5"},[e("button",{staticClass:"btn btn-defualt btn-xs text-info",attrs:{disabled:""}},[t._v("Регистрация ожидается")])])])]),t._v(" "),e("tr",[e("td",[e("a",{staticClass:"vm-title",attrs:{href:"#"}},[e("img",{staticClass:"w-50px mr-10",attrs:{src:"/images/ava_32.png"}}),t._v(" "),e("span",[t._v("DOTA2")])])]),t._v(" "),e("td",{staticClass:"text-center"},[e("img",{attrs:{src:"/storage/games/February2018/6MmyFNiGM8h9igLGkgru.png",width:"35"}})]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("11 мая 2019 г., МСК")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("5 мая 2019 г., МСК")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("-")]),t._v(" "),e("td",[e("div",{staticClass:"input-group mt-5"},[e("button",{staticClass:"btn btn-defualt btn-xs text-info",attrs:{disabled:""}},[t._v("Регистрация ожидается")])])])])],2)]):e("p",{staticClass:"text-white"},[t._v("\n\t\t\t\t"+t._s(t.$t("no_tournaments"))+"\n\t\t\t")]),t._v(" "),e("pagination",{attrs:{pagination:t.pagination}})],2)],1)},staticRenderFns:[]};s.a=a}});
//# sourceMappingURL=11.dd1e56c203e050040a67.js.map