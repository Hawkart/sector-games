webpackJsonp([11],{"0HUy":function(t,s,a){"use strict";var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("card",{attrs:{title:t.$t("tournaments")}},[[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("card",[a("div",{staticClass:"form-wrap"},[a("form",{attrs:{autocomplete:"off",id:"filter-form"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.status_id,expression:"status_id"}],staticClass:"form-control",attrs:{name:"status_id","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.status_id=s.target.multiple?a:a[0]}}},t._l(t.status_list,function(s){return a("option",{domProps:{value:s.id}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.title)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])}))])])])])])],1)]),t._v(" "),a("div",{staticClass:"nk-gap-2"})],t._v(" "),null!=t.tournaments&&t.tournaments.length>0?a("table",{staticClass:"nk-table"},[a("tbody",[a("tr",[a("th",[t._v(t._s(t.$t("title")))]),t._v(" "),a("th",[t._v(t._s(t.$t("game")))]),t._v(" "),a("th",[t._v(t._s(t.$t("tournament_start_time")))]),t._v(" "),a("th",[t._v(t._s(t.$t("tournament_register_start_time")))]),t._v(" "),a("th",[t._v(t._s(t.$t("teams")))]),t._v(" "),a("th",[t._v(" ")])]),t._v(" "),t._l(t.tournaments,function(s){return a("tr",[a("td",[a("router-link",{staticClass:"vm-title",attrs:{to:{name:"tournament",params:{id:s.id}}}},[null!=s.image?a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(s.image,"avatar_team"),alt:s.title}}):a("i",{staticClass:"ti-cup mr-20"}),t._v(" "),a("span",[t._v(t._s(s.title))])])],1),t._v(" "),a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"game",params:{gameId:s.game.id}},title:s.game.title}},[a("img",{attrs:{src:t.getImageLink(s.game.logo_mini),width:"35",alt:s.game.title}})])],1),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.moment(s.start_at,"YYYY-MM-DD h:mm:ss").format("D MMM, HH:mm"))+" МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.moment(s.register_start,"YYYY-MM-DD h:mm:ss").format("D MMM, HH:mm"))+" МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(s.teams.length)+" / 175")]),t._v(" "),a("td",[a("div",{staticClass:"input-group mt-5"},[t.checkRegisterStart(s.register_start)&&t.checkRegisterEnd(s.register_start)?a("button",{staticClass:"btn btn-primary btn-xs",on:{click:t.register}},[t._v("Зарегистрироваться")]):t.checkRegisterEnd(s.register_start)?t._e():a("button",{staticClass:"btn btn-defualt btn-xs",attrs:{disabled:""}},[t._v("Регистрация завершена")])])])])}),t._v(" "),a("tr",[a("td",[a("a",{staticClass:"vm-title",attrs:{href:"#"}},[a("img",{staticClass:"w-50px mr-10",attrs:{src:"/images/ava_32.png"}}),t._v(" "),a("span",[t._v("CS:GO")])])]),t._v(" "),a("td",{staticClass:"text-center"},[a("img",{attrs:{src:"/images/CS_GO1.png",width:"35"}})]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("23 фев. 2019 г., МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("17 фев. 2019 г., МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("-")]),t._v(" "),a("td",[a("div",{staticClass:"input-group mt-5"},[a("button",{staticClass:"btn btn-defualt btn-xs text-info",attrs:{disabled:""}},[t._v("Регистрация ожидается")])])])]),t._v(" "),a("tr",[a("td",[a("a",{staticClass:"vm-title",attrs:{href:"#"}},[a("img",{staticClass:"w-50px mr-10",attrs:{src:"/images/ava_32.png"}}),t._v(" "),a("span",[t._v("LOL")])])]),t._v(" "),a("td",{staticClass:"text-center"},[a("img",{attrs:{src:"/images/lol.jpg",width:"35"}})]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("13 апр. 2019 г., МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("7 апр. 2019 г., МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("-")]),t._v(" "),a("td",[a("div",{staticClass:"input-group mt-5"},[a("button",{staticClass:"btn btn-defualt btn-xs text-info",attrs:{disabled:""}},[t._v("Регистрация ожидается")])])])]),t._v(" "),a("tr",[a("td",[a("a",{staticClass:"vm-title",attrs:{href:"#"}},[a("img",{staticClass:"w-50px mr-10",attrs:{src:"/images/ava_32.png"}}),t._v(" "),a("span",[t._v("DOTA2")])])]),t._v(" "),a("td",{staticClass:"text-center"},[a("img",{attrs:{src:"https://sparta.games/storage/games/February2018/6MmyFNiGM8h9igLGkgru.png",width:"35"}})]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("11 мая 2019 г., МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("5 мая 2019 г., МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v("-")]),t._v(" "),a("td",[a("div",{staticClass:"input-group mt-5"},[a("button",{staticClass:"btn btn-defualt btn-xs text-info",attrs:{disabled:""}},[t._v("Регистрация ожидается")])])])])],2)]):a("p",{staticClass:"text-white"},[t._v("\n\t\t\t\t"+t._s(t.$t("no_tournaments"))+"\n\t\t\t")]),t._v(" "),a("pagination",{attrs:{pagination:t.pagination}})],2)],1)},staticRenderFns:[]};s.a=e},"1rvA":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=u(a("Dd8w")),i=a("NYxO"),n=u(a("mtWM")),r=a("HNcv"),l=u(a("I3G/")),c=u(a("e7x4"));function u(t){return t&&t.__esModule?t:{default:t}}s.default={metaInfo:function(){return{title:this.$t("tournaments")}},data:function(){return{tournaments:[],pagination:[],status_list:[{id:0,title:"Все"},{id:1,title:"Прошедшие"},{id:2,title:"Онлайн"},{id:3,title:"Предстоящие"}],status_id:null}},computed:(0,e.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),mounted:function(){this.getTournaments(),(0,r.loadMessages)(this.locale),this.moment.locale(this.locale);var t=this;l.default.nextTick(function(){$("#status_list").select2({placeholder:"Статус турнира"}).on("change",function(s){t.status_id=$(s.currentTarget).find("option:selected").val()})})},methods:{getTournaments:function(){var t=this,s=(new Date,{page:1,_limit:12,_sort:"start_at",_with:"teams,game"});1==this.status_id?s["end_at-not"]=null:2==this.status_id?(s["start_at-st"]=this.moment.utc().format(),s.end_at=null):3==this.status_id&&(s["start_at-gt"]=this.moment.utc().format());var a=this.UrlParamsMerge(s);n.default.get("/api/tournaments?"+a).then(function(s){var a=s.data.data,e=t;a.length>0&&a.forEach(function(t){t.start_at=e.dateConvertUTC(t.start_at,-1)}),t.$set(t,"tournaments",a),delete s.data.data,t.pagination=s.data})},checkRegisterStart:function(t){return this.moment.utc().isAfter(t)},checkRegisterEnd:function(t){return this.moment.utc().isBefore(this.moment(t).subtract(1,"hours"))},register:function(){var t=this;this.authenticated?null!=this.user.team_id?n.default.post("/api/tournaments/"+this.$route.params.id+"/teams/"+this.user.team_id).then(function(s){(0,c.default)({type:"success",title:"Success!",html:"You are registered on the tournament!"}),t.getTournamentTeams()}).catch(function(t){(0,c.default)({type:"warning",title:"Error!",html:t.response.data.error})}):(0,c.default)({type:"warning",title:"Error!",html:"You need to be in the team."}):this.$router.push({name:"login"})}},watch:{"$route.query":function(t,s){this.getTournaments()},status_id:function(t,s){this.getTournaments()}}}},dAyu:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("1rvA"),i=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);var r=a("0HUy"),l=a("VU/8")(i.a,r.a,!1,null,null,null);s.default=l.exports}});
//# sourceMappingURL=11.ca01d863b68bbe360447.js.map