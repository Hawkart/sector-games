webpackJsonp([13],{"1rvA":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=l(a("Dd8w")),n=a("NYxO"),i=l(a("mtWM")),r=a("HNcv"),o=l(a("I3G/")),u=l(a("e7x4"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:function(){return{title:this.$t("tournaments")}},data:function(){return{tournaments:[],pagination:[],status_list:[{id:0,title:this.$t("s_t_all")},{id:1,title:this.$t("s_t_finished")},{id:2,title:this.$t("s_t_online")},{id:3,title:this.$t("s_t_future")}],status_id:null}},computed:(0,s.default)({},(0,n.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),mounted:function(){this.getTournaments(),(0,r.loadMessages)(this.locale),this.moment.locale(this.locale);var t=this;o.default.nextTick(function(){$("#status_list").select2({placeholder:t.$t("status")}).on("change",function(e){t.status_id=$(e.currentTarget).find("option:selected").val()})})},methods:{getTournaments:function(){var t=this,e=(new Date,{site_id:2,page:1,_limit:12,_sort:"start_at",_with:"teams,game"});1==this.status_id?e["end_at-not"]=null:2==this.status_id?(e["start_at-st"]=this.moment.utc().format(),e.end_at=null):3==this.status_id&&(e["start_at-gt"]=this.moment.utc().format());var a=this.UrlParamsMerge(e);i.default.get("/api/tournaments?"+a).then(function(e){var a=e.data.data,s=t;a.length>0&&a.forEach(function(t){t.start_at=s.dateConvertUTC(t.start_at,-1),t.register_start=s.dateConvertUTC(t.register_start,-1)}),t.$set(t,"tournaments",a),delete e.data.data,t.pagination=e.data})},canRegister:function(t,e){return this.moment(e).isBefore(this.moment.utc())&&this.moment(t).subtract(1,"hours").isAfter(this.moment.utc())},checkRegisterEnd:function(t){return this.moment.utc().isAfter(this.moment(t).subtract(1,"hours"))},register:function(){var t=this;this.authenticated?null!=this.user.team_id?i.default.post("/api/tournaments/"+this.$route.params.id+"/teams/"+this.user.team_id).then(function(e){(0,u.default)({type:"success",title:"Success!",html:"You are registered on the tournament!"}),t.getTournamentTeams()}).catch(function(t){(0,u.default)({type:"warning",title:"Error!",html:t.response.data.error})}):(0,u.default)({type:"warning",title:"Error!",html:"You need to be in the team."}):this.$router.push({name:"login"})}},watch:{"$route.query":function(t,e){this.getTournaments()},status_id:function(t,e){this.getTournaments()}}}},dAyu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("1rvA"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("zK2m"),o=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=o.exports},zK2m:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("card",{attrs:{title:t.$t("tournaments")}},[[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("card",[a("div",{staticClass:"form-wrap"},[a("form",{attrs:{autocomplete:"off",id:"filter-form"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.status_id,expression:"status_id"}],staticClass:"form-control",attrs:{name:"status_id","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.status_id=e.target.multiple?a:a[0]}}},t._l(t.status_list,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])}),0)])])])])])],1)]),t._v(" "),a("div",{staticClass:"nk-gap-2"})],t._v(" "),null!=t.tournaments&&t.tournaments.length>0?a("table",{staticClass:"nk-table"},[a("tbody",[a("tr",[a("th",[t._v(t._s(t.$t("title")))]),t._v(" "),a("th",[t._v(t._s(t.$t("game")))]),t._v(" "),a("th",[t._v(t._s(t.$t("tournament_start_time")))]),t._v(" "),a("th",[t._v(t._s(t.$t("tournament_register_start_time")))]),t._v(" "),a("th",[t._v(t._s(t.$t("teams")))]),t._v(" "),a("th",[t._v(" ")])]),t._v(" "),t._l(t.tournaments,function(e){return a("tr",[a("td",[a("router-link",{staticClass:"vm-title",attrs:{to:{name:"tournament",params:{id:e.id}}}},[null!=e.image?a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.image,"avatar_team"),alt:e.title}}):a("i",{staticClass:"ti-cup mr-20"}),t._v(" "),a("span",[t._v(t._s(e.title))])])],1),t._v(" "),a("td",{staticClass:"text-center"},[a("router-link",{attrs:{to:{name:"game",params:{gameId:e.game.id}},title:e.game.title}},[a("img",{attrs:{src:t.getImageLink(e.game.logo_mini),width:"35",alt:e.game.title}})])],1),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.moment(e.start_at,"YYYY-MM-DD h:mm:ss").format("D MMM, HH:mm"))+" МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.moment(e.register_start,"YYYY-MM-DD h:mm:ss").format("D MMM, HH:mm"))+" МСК")]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.teams.length)+" / "+t._s(e.count_teams))]),t._v(" "),a("td",[a("div",{staticClass:"input-group mt-5"},[t.canRegister(e.start_at,e.register_start)?a("button",{staticClass:"btn btn-primary btn-xs",on:{click:t.register}},[t._v(t._s(t.$t("register")))]):t.checkRegisterEnd(e.start_at)?a("button",{staticClass:"btn btn-defualt btn-xs",attrs:{disabled:""}},[t._v(t._s(t.$t("register_finished")))]):t._e()])])])})],2)]):a("p",{staticClass:"text-white"},[t._v("\n\t\t\t\t"+t._s(t.$t("no_tournaments"))+"\n\t\t\t")]),t._v(" "),a("pagination",{attrs:{pagination:t.pagination}})],2)],1)},staticRenderFns:[]};e.a=s}});
//# sourceMappingURL=13.ac8ae5f39fd288f5b774.js.map