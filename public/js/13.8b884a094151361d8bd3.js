webpackJsonp([13],{"6PwW":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(a("woOf")),n=c(a("Dd8w")),i=a("NYxO"),r=c(a("mtWM")),l=c(a("I3G/")),o=c(a("e7x4"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:function(){return{title:this.$t("players")}},computed:(0,n.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check"})),mounted:function(){if(this.authenticated&&null!=this.user.institution_id){this.getVueItems();var t=this;l.default.nextTick(function(){$("#status_list").select2({placeholder:t.$t("select_status"),allowClear:!0}).on("select2:select",function(e){t.free_player=$(e.currentTarget).find("option:selected").val(),t.search()}).on("select2:unselecting",function(e){t.free_player="";var a=(0,s.default)({},t.$route.query);delete a.free_player,t.$router.push(t.$route.path+"?"+$.param(a))})})}},data:function(){return{players:[],statuses:[{id:0,title:"in_team"},{id:1,title:"free"}],games:[],countries:[],game_id:this.$route.query.game_id||"",country_id:this.$route.query.country_id||"",free_player:this.$route.query.free_player||"",pagination:[],choose_players:[]}},methods:{getVueItems:function(){var t=this,e={page:1,_limit:12,type:"player",_with:"team,country,team.fights",active:1,_sort:"-id"};this.authenticated&&"player"==this.user.type&&(e.game_id=this.user.game_id,null!==this.user.institution_id&&(e.institution_id=this.user.institution_id),e["institution_id-not"]="null");var a=this.UrlParamsMerge(e);r.default.get("/api/users?"+a).then(function(e){var a=e.data.data;a.forEach(function(t){var e=0,a=0;if(t.team_id>0&&t.team.fights.length>0){var s=t.team_id;t.team.fights.forEach(function(t){3==t.status&&(e++,t.winner_id==s&&a++)})}t.wins=a,t.fights_count=e}),t.$set(t,"players",a),delete e.data.data,t.pagination=e.data})},getGames:function(){var t=this;r.default.get("/api/games").then(function(e){t.$set(t,"games",e.data),t.$parent.games=t.games})},getCountries:function(){var t=this;r.default.get("/api/countries").then(function(e){t.$set(t,"countries",e.data)})},search:function(t){this.$router.push(this.$route.path+"?"+$("#filter-form").serialize())},sendInvites:function(){var t=this;this.choose_players.forEach(function(e){t.invite(e)}),(0,o.default)({type:"success",title:this.$t("invitations_sent")})},invite:function(t){r.default.put("/api/teams/"+this.user.team_id+"/users/"+t).then(function(t){})}},watch:{"$route.query":function(t,e){this.getVueItems()}}}},dB8k:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("6PwW"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("rxCV"),l=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=l.exports},rxCV:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.authenticated&&null!=t.user.institution_id?[a("div",{staticClass:"row mt-20"},[a("div",{staticClass:"col-md-12"},[a("card",[a("div",{staticClass:"form-wrap"},[a("form",{attrs:{autocomplete:"off",id:"filter-form"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.free_player,expression:"free_player"}],staticClass:"form-control",attrs:{name:"free_player","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.free_player=e.target.multiple?a:a[0]}}},t._l(t.statuses,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.$t(e.title))+"\n\t\t\t\t\t\t\t\t\t\t\t")])}))])])])])])],1)]),t._v(" "),a("div",{staticClass:"nk-gap-2"})]:t._e(),t._v(" "),t.authenticated?a("card",{attrs:{title:t.$t("players")}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[null===t.user.institution_id?[a("p",{staticClass:"text-white"},[t._v("\n\t\t\t\t\t\t\tДля просмотра игроков вы должны \n\t\t\t\t\t\t\t"),a("router-link",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em",attrs:{to:{name:"settings.school"}}},[t._v("\n\t\t\t\t\t\t\t\tзадать школу \n\t\t\t\t\t\t\t")]),t._v(" в личном кабинете.\n\t\t\t\t\t\t")],1)]:t._e(),t._v(" "),null!=t.user.institution_id&&null!==t.players&&t.players.length>0?[a("div",{staticClass:"mb-20"},[a("span",{staticClass:"text-white"},[t._v(t._s(t.$t("invite_to_team_through")))]),t._v(" "),a("social-sharing",{attrs:{url:"https://youthleague.ru/register",title:"ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2",description:"ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2. Для учащихся и выпускников общеобразовательных школ и среднеспециальных учебных заведений в возрасте от 14 до 18 лет.",hashtags:"Dota2,киберспорт,турнир"},inlineTemplate:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-10 d-inline"},[e("network",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1",attrs:{network:"email"}},[e("i",{staticClass:"fa fa-envelope"}),this._v(" Email\n                                    ")]),this._v(" "),e("network",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 btn-vk",attrs:{network:"vk"}},[e("i",{staticClass:"fa fa-vk"}),this._v(" ВКонтакте\n                                    ")]),this._v(" "),e("network",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 btn-fb",attrs:{network:"facebook"}},[e("i",{staticClass:"fa fa-facebook"}),this._v(" Facebook\n                                    ")]),this._v(" "),e("network",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 btn-telegram",attrs:{network:"telegram"}},[e("i",{staticClass:"fa fa-telegram"}),this._v(" Telegram\n                                    ")])],1)},staticRenderFns:[]}})],1),t._v(" "),a("a",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white",on:{click:function(e){e.preventDefault(),t.sendInvites(e)}}},[t._v("\n                            "+t._s(t.$t("send_invitations_to_team"))+" ("+t._s(parseInt(t.choose_players.length))+")\n                        ")]),t._v(" "),a("div",{staticClass:"nk-gap"})]:t._e(),t._v(" "),null!==t.players&&t.players.length>0?a("table",{staticClass:"nk-table"},[a("tbody",[a("tr",[t.authenticated?a("th"):t._e(),t._v(" "),a("th",[t._v(t._s(t.$t("name")))]),t._v(" "),a("th",[t._v(t._s(t.$t("team")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_matches")))]),t._v(" "),a("th",[t._v(t._s(t.$t("count_wins")))]),t._v(" "),a("th",[t._v(t._s(t.$t("victory_rate")))]),t._v(" "),a("th",[t._v(t._s(t.$t("status")))])]),t._v(" "),t._l(t.players,function(e){return a("tr",[t.authenticated?a("td",{staticClass:"text-center"},[e.free_player&&e.id!=t.user.id?[a("input",{directives:[{name:"model",rawName:"v-model",value:t.choose_players,expression:"choose_players"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.choose_players)?t._i(t.choose_players,e.id)>-1:t.choose_players},on:{change:function(a){var s=t.choose_players,n=a.target,i=!!n.checked;if(Array.isArray(s)){var r=e.id,l=t._i(s,r);n.checked?l<0&&(t.choose_players=s.concat([r])):l>-1&&(t.choose_players=s.slice(0,l).concat(s.slice(l+1)))}else t.choose_players=i}}}),t._v(" "),a("label",[t._v(" ")])]:t._e()],2):t._e(),t._v(" "),a("td",[a("router-link",{staticClass:"vm-title",attrs:{to:{name:"player",params:{id:e.id}}}},[a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.avatar)}}),t._v(" "),a("span",[t._v(t._s(e.nickname))])])],1),t._v(" "),a("td",{staticClass:"text-center"},[e.team_id>0&&null!==e.team?a("span",[a("router-link",{attrs:{to:{name:"team.detail",params:{slug:e.team.slug}}}},[null!==e.team.image?a("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(e.team.image)}}):t._e(),t._v(" "),null==e.team.image?a("span",[t._v(t._s(e.team.title))]):t._e()])],1):t._e()]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.fights_count))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.wins))]),t._v(" "),e.fights_count>0?a("td",{staticClass:"text-center"},[t._v(t._s(Number((e.wins/e.fights_count*100).toFixed(2)))+"%")]):a("td",{staticClass:"text-center"},[t._v("0")]),t._v(" "),a("td",{staticClass:"text-center"},[e.free_player?a("span",[a("span",{staticClass:"text-warning"},[t._v(t._s(t.$t("free")))])]):e.team_id>0&&e.id==e.team.capt_id?a("span",[a("span",{staticClass:"text-info"},[t._v(t._s(t.$t("captain")))])]):a("span",[a("span",{staticClass:"text-success"},[t._v(t._s(t.$t("in_team")))])])])])})],2)]):t._e()],2)]),t._v(" "),a("pagination",{attrs:{pagination:t.pagination}})],1):a("card",{attrs:{title:t.$t("players")}},[a("p",{staticClass:"text-white"},[t._v("\n                Для того чтобы увидеть список игроков, "),a("router-link",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em",attrs:{to:{name:"register"}}},[t._v("\n                зарегистрируйтесь")]),t._v(" или "),a("router-link",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em",attrs:{to:{name:"login"}}},[t._v("авторизуйтесь")]),t._v(", если у вас есть аккаунт.\n            ")],1)])],2)},staticRenderFns:[]};e.a=s}});
//# sourceMappingURL=13.8b884a094151361d8bd3.js.map