webpackJsonp([10],{"1rvA":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=o(e("Dd8w")),n=e("NYxO"),i=o(e("mtWM")),r=e("HNcv"),l=o(e("I3G/"));function o(t){return t&&t.__esModule?t:{default:t}}a.default={metaInfo:function(){return{title:this.$t("tournaments")}},data:function(){return{tournaments:[],pagination:[],status_list:[{id:0,title:"Все"},{id:1,title:"Прошедшие"},{id:2,title:"Онлайн"},{id:3,title:"Предстоящие"}],status_id:null}},computed:(0,s.default)({},(0,n.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),mounted:function(){this.getTournaments(),(0,r.loadMessages)(this.locale),this.moment.locale(this.locale);var t=this;l.default.nextTick(function(){$("#status_list").select2({placeholder:"Статус матча"}).on("change",function(a){t.status_id=$(a.currentTarget).find("option:selected").val()})})},methods:{getTournaments:function(){var t=this,a=new Date,e={status:1,"register_start-gt":this.dateConvertUTC(a.toLocaleDateString(),-1),page:1,_limit:12,_sort:"start_at",_with:"teams,game"},s=this.UrlParamsMerge(e);i.default.get("/api/tournaments?"+s).then(function(a){var e=a.data.data,s=t;e.length>0&&e.forEach(function(t){t.start_at=s.dateConvertUTC(t.start_at,-1)}),t.$set(t,"tournaments",e),delete a.data.data,t.pagination=a.data})}},watch:{"$route.query":function(t,a){this.getTournaments()},status_id:function(t,a){this.getTournaments()}}}},H3Om:function(t,a,e){"use strict";var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("card",{attrs:{title:t.$t("tournaments")}},[[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("card",[e("div",{staticClass:"form-wrap"},[e("form",{attrs:{autocomplete:"off",id:"filter-form"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.status_id,expression:"status_id"}],staticClass:"form-control",attrs:{name:"status_id","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.status_id=a.target.multiple?e:e[0]}}},t._l(t.status_list,function(a){return e("option",{domProps:{value:a.id}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(a.title)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])}))])])])])])],1)]),t._v(" "),e("div",{staticClass:"nk-gap-2"})],t._v(" "),null!=t.tournaments&&t.tournaments.length>0?e("table",{staticClass:"nk-table"},[e("tbody",[e("tr",[e("th",[t._v(t._s(t.$t("title")))]),t._v(" "),e("th",[t._v(t._s(t.$t("game")))]),t._v(" "),e("th",[t._v(t._s(t.$t("start_time")))]),t._v(" "),e("th",[t._v(t._s(t.$t("register_time")))]),t._v(" "),e("th",[t._v(t._s(t.$t("teams")))])]),t._v(" "),t._l(t.tournaments,function(a){return e("tr",[e("td",[e("router-link",{staticClass:"vm-title",attrs:{to:{name:"tournament.detail",params:{id:a.id}}}},[null!=a.image?e("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(a.image,"avatar_team"),alt:a.title}}):e("i",{staticClass:"ti-cup mr-20"}),t._v(" "),e("span",[t._v(t._s(a.title))])])],1),t._v(" "),e("td",{staticClass:"text-center"},[e("router-link",{attrs:{to:{name:"game",params:{gameId:a.game.id}},title:a.game.title}},[e("img",{attrs:{src:t.getImageLink(a.game.logo_mini),width:"35",alt:a.game.title}})])],1),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(t.moment(a.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, h:mma")))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(t.moment(a.register_start,"YYYY-MM-DD h:mm:ss").format("MMMM Do, h:mma")))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(a.teams.length)+" / "+t._s(a.count_teams))])])})],2)]):e("p",{staticClass:"text-white"},[t._v("\n\t\t\t\t"+t._s(t.$t("no_tournaments"))+"\n\t\t\t")]),t._v(" "),e("pagination",{attrs:{pagination:t.pagination}})],2)],1)},staticRenderFns:[]};a.a=s},dAyu:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("1rvA"),n=e.n(s);for(var i in s)"default"!==i&&function(t){e.d(a,t,function(){return s[t]})}(i);var r=e("H3Om"),l=e("VU/8")(n.a,r.a,!1,null,null,null);a.default=l.exports}});
//# sourceMappingURL=10.aa65fa45a2f47e42b58e.js.map