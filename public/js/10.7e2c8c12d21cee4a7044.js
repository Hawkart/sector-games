webpackJsonp([10],{"6PwW":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(a("woOf")),r=o(a("Dd8w")),i=a("NYxO"),n=o(a("mtWM")),l=o(a("I3G/"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:{title:"Players",titleTemplate:null},computed:(0,r.default)({},(0,i.mapGetters)({user:"authUser",authenticated:"authCheck"})),mounted:function(){this.getVueItems(),this.getGames(),this.getCountries();var t=this;l.default.nextTick(function(){function e(t){if(!t.id)return t.text;var e=$(t.element).data("image");return e?$('<span><img src="/images/flags/'+e+'" width="23px" /> '+t.text+"</span>"):t.text}$("#status_list").select2({placeholder:t.$t("select_status"),allowClear:!0}).on("select2:select",function(e){t.free_player=$(e.currentTarget).find("option:selected").val(),t.search()}).on("select2:unselecting",function(e){t.free_player="";var a=(0,s.default)({},t.$route.query);delete a.free_player,t.$router.push(t.$route.path+"?"+$.param(a))}),$("#game_list").select2({placeholder:t.$t("select_game"),allowClear:!0}).on("select2:select",function(e){t.game_id=$(e.currentTarget).find("option:selected").val(),t.search()}).on("select2:unselecting",function(e){t.game_id="";var a=(0,s.default)({},t.$route.query);delete a.game_id,t.$router.push(t.$route.path+"?"+$.param(a))}),$("#country_list").select2({placeholder:t.$t("select_country"),templateResult:e,templateSelection:e,allowClear:!0}).on("select2:select",function(e){t.country_id=$(e.currentTarget).find("option:selected").val(),t.search()}).on("select2:unselecting",function(e){t.country_id="";var a=(0,s.default)({},t.$route.query);delete a.country_id,t.$router.push(t.$route.path+"?"+$.param(a))})})},data:function(){return{players:[],statuses:[{id:0,title:"in_team"},{id:1,title:"free"}],games:[],countries:[],game_id:this.$route.query.game_id||"",country_id:this.$route.query.country_id||"",free_player:this.$route.query.free_player||"",pagination:[],choose_players:[]}},methods:{getVueItems:function(){var t=this,e={page:1,_limit:12,type:"player",_with:"team,country,team.fights",active:1,_sort:"-id"};this.authenticated&&"player"==this.user.type&&(e.game_id=this.user.game_id);var a=this.UrlParamsMerge(e);n.default.get("/api/users?"+a).then(function(e){var a=e.data.data;a.forEach(function(t){var e=0,a=0;if(t.team_id>0&&t.team.fights.length>0){var s=t.team_id;t.team.fights.forEach(function(t){3==t.status&&(e++,t.winner_id==s&&a++)})}t.wins=a,t.fights_count=e}),t.$set(t,"players",a),delete e.data.data,t.pagination=e.data})},getGames:function(){var t=this;n.default.get("/api/games").then(function(e){t.$set(t,"games",e.data),t.$parent.games=t.games})},getCountries:function(){var t=this;n.default.get("/api/countries").then(function(e){t.$set(t,"countries",e.data)})},search:function(t){this.$router.push(this.$route.path+"?"+$("#filter-form").serialize())}},watch:{"$route.query":function(t,e){this.getVueItems()}}}},M81d:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated?t._e():a("div",{staticClass:"row mt-20"},[a("div",{staticClass:"col-md-12"},[a("card",[a("div",{staticClass:"form-wrap"},[a("form",{attrs:{autocomplete:"off",id:"filter-form"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.game_id,expression:"game_id"}],staticClass:"form-control",attrs:{name:"game_id","data-style":"form-control btn-default btn-outline",id:"game_list"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.game_id=e.target.multiple?a:a[0]}}},t._l(t.games,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n                                        "+t._s(e.title)+"\n                                    ")])}))]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.country_id,expression:"country_id"}],staticClass:"form-control",attrs:{name:"country_id","data-style":"form-control btn-default btn-outline",id:"country_list"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.country_id=e.target.multiple?a:a[0]}}},t._l(t.countries,function(e){return a("option",{attrs:{"data-image":e.flag},domProps:{value:e.id}},[t._v("\n                                        "+t._s(e.name)+"\n                                    ")])}))]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.free_player,expression:"free_player"}],staticClass:"form-control",attrs:{name:"free_player","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.free_player=e.target.multiple?a:a[0]}}},t._l(t.statuses,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n                                        "+t._s(t.$t(e.title))+"\n                                    ")])}))])])])])])],1)]),t._v(" "),a("div",{staticClass:"nk-gap-2"}),t._v(" "),a("card",{attrs:{title:t.$t("players")}},[a("v-button",[t._v("\n            "+t._s(t.$t("send_invitations"))+" ("+t._s(parseInt(t.choose_players.length))+")\n        ")]),t._v(" "),a("div",{staticClass:"nk-gap"}),t._v(" "),null!==t.players?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[a("table",{staticClass:"nk-table"},[a("tbody",[a("tr",[a("th",[t._v(t._s(t.$t("name")))]),t._v(" "),a("th",[t._v(t._s(t.$t("team")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_matches")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_wins")))]),t._v(" "),a("th",[t._v(t._s(t.$t("victory_rate")))]),t._v(" "),a("th",[t._v(t._s(t.$t("status")))]),t._v(" "),a("th",[t._v(t._s(t.$t("actions")))])]),t._v(" "),t._l(t.players,function(e){return a("tr",[a("td",[a("router-link",{staticClass:"vm-title",attrs:{to:{name:"player",params:{id:e.id}}}},[a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.avatar)}}),t._v(" "),a("span",[t._v(t._s(e.nickname))])])],1),t._v(" "),a("td",{staticClass:"text-center"},[e.team_id>0&&null!==e.team?a("span",[a("router-link",{attrs:{to:{name:"team.detail",params:{slug:e.team.slug}}}},[null!==e.team.image?a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.team.image)}}):t._e(),t._v(" "),null==e.team.image?a("span",[t._v(t._s(e.team.title))]):t._e()])],1):t._e()]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.fights_count))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.wins))]),t._v(" "),e.fights_count>0?a("td",{staticClass:"text-center"},[t._v(t._s(Number((e.wins/e.fights_count*100).toFixed(2)))+"%")]):a("td",{staticClass:"text-center"},[t._v("0")]),t._v(" "),a("td",{staticClass:"text-center"},[e.free_player?a("span",[a("span",{staticClass:"label label-default capitalize-font inline-block"},[t._v(t._s(t.$t("free")))])]):e.team_id>0&&e.id==e.team.capt_id?a("span",[a("span",{staticClass:"label label-primary capitalize-font inline-block"},[t._v(t._s(t.$t("captain")))])]):a("span",[a("span",{staticClass:"label label-success capitalize-font inline-block"},[t._v(t._s(t.$t("in_team")))])])]),t._v(" "),a("td",{staticClass:"text-center"},[e.free_player?[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.choose_players,expression:"choose_players"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.choose_players)?t._i(t.choose_players,e.id)>-1:t.choose_players},on:{change:function(a){var s=t.choose_players,r=a.target,i=!!r.checked;if(Array.isArray(s)){var n=e.id,l=t._i(s,n);r.checked?l<0&&(t.choose_players=s.concat([n])):l>-1&&(t.choose_players=s.slice(0,l).concat(s.slice(l+1)))}else t.choose_players=i}}}),t._v(" "),a("label",{staticClass:"custom-control-label my-auto"},[t._v(" ")])])]:t._e()],2)])})],2)])])]):t._e(),t._v(" "),a("pagination",{attrs:{pagination:t.pagination}})],1)],1)},staticRenderFns:[]};e.a=s},dB8k:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("6PwW"),r=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var n=a("M81d"),l=a("VU/8")(r.a,n.a,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=10.7e2c8c12d21cee4a7044.js.map