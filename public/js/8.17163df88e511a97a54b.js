webpackJsonp([8],{RPO2:function(t,a,e){var s=e("yHVZ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("f03b94ee",s,!0,{})},bhye:function(t,a,e){"use strict";var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[null!==t.team?e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("h3",{staticClass:"nk-decorated-h-3"},[e("span",[t._v(t._s(t.team.title))])])])]):t._e(),t._v(" "),e("div",{staticClass:"row vertical-gap"},[e("aside",{staticClass:"col-lg-3 nk-sidebar-sticky-parent"},[null!==t.team?e("div",{staticClass:"nk-box-1 bg-dark-2 text-center"},[e("img",{staticClass:"w-100",attrs:{src:t.getImageLink(t.team.image,"avatar_team")}}),t._v(" "),e("div",{staticClass:"nk-gap"}),t._v(" "),!t.authenticated||t.team.quantity>t.team.users.length&&t.authenticated&&t.user.id!=t.team.capt_id&&"player"==t.user.type&&t.user.active?e("button",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em w-100",on:{click:function(a){return t.joinTeam(t.team.id)}}},[t._v("\n                    "+t._s(t.$t("join_team"))+"\n                ")]):t._e(),t._v(" "),e("table",{staticClass:"nk-team-table"},[e("tbody",[e("tr",[e("td",[e("strong",{staticClass:"h6"},[t._v(t._s(t.$t("count_matches")))])]),t._v(" "),e("td",[e("strong",{staticClass:"h5"},[t._v(t._s(t.team.count_fights))])])]),t._v(" "),e("tr",[e("td",[e("strong",{staticClass:"h6"},[t._v(t._s(t.$t("count_wins")))])]),t._v(" "),e("td",[e("strong",{staticClass:"h5"},[t._v(t._s(t.team.count_wins))])])]),t._v(" "),e("tr",[e("td",[e("strong",{staticClass:"h6"},[t._v(t._s(t.$t("victory_rate")))])]),t._v(" "),e("td",[t.team.count_fights>0?e("strong",{staticClass:"h5"},[t._v(t._s(Number((t.team.count_wins/t.team.count_fights*100).toFixed(2)))+"%")]):e("strong",{staticClass:"h5"},[t._v("0%")])])])])])]):t._e()]),t._v(" "),e("div",{staticClass:"col-lg-9"},[e("card",{attrs:{title:t.$t("players")}},[null!==t.team&&null!==t.team.users?e("div",{staticClass:"row vertical-gap"},t._l(t.team.users,function(a){return e("div",{staticClass:"col-lg-3 col-md-3 col-xs-12"},[e("div",{staticClass:"nk-box-1 bg-dark-2 text-center"},[e("router-link",{attrs:{to:{name:"player",params:{id:a.id}}}},[e("img",{staticClass:"w-100",attrs:{src:t.getImageLink(a.avatar)}}),e("br"),t._v(" "),e("span",{staticClass:"nk-feature-title"},[t._v(t._s(a.nickname))])]),t._v(" "),e("br"),t._v(" "),a.free_player?e("span",[e("span",{staticClass:"text-warning"},[t._v(t._s(t.$t("free")))])]):a.team_id>0&&a.id==t.team.capt_id?e("span",[e("span",{staticClass:"text-info"},[t._v(t._s(t.$t("captain")))])]):e("span",[e("span",{staticClass:"text-success"},[t._v(t._s(t.$t("in_team")))])])],1)])}),0):t._e()])],1)])])},staticRenderFns:[]};a.a=s},kbfI:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("o23g"),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);var r=e("bhye");var c=function(t){e("RPO2")},l=e("VU/8")(i.a,r.a,!1,c,null,null);a.default=l.exports},o23g:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=c(e("Dd8w")),i=e("NYxO"),n=c(e("mtWM")),r=c(e("e7x4"));function c(t){return t&&t.__esModule?t:{default:t}}a.default={metaInfo:function(){return{title:this.title}},computed:(0,s.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check"})),data:function(){return{title:"Detail page of team",team:null,response:null,invitations:null}},mounted:function(){this.getTeam()},methods:{getTeam:function(){var t=this,a=this.ArrayToUrl({_with:"game,users,institution.location,institution.location.parent"});n.default.get("/api/teams/"+this.$route.params.id+"?"+a).then(function(a){t.$set(t,"team",a.data),t.title="Team: "+t.team.title,t.$meta().refresh()})},getInvitations:function(){var t=this,a=this.ArrayToUrl({team_id:this.$route.params.id,status:1,_with:"user,team"});n.default.get("/api/team_user?"+a).then(function(a){t.$set(t,"invitations",a.data)})},joinTeam:function(t){var a=this;this.authenticated?n.default.put("/api/teams/"+t+"/users/"+this.user.id).then(function(t){(0,r.default)({type:"success",title:a.$t("join_team_request_success")})}).catch(function(t){(0,r.default)({type:"warning",title:t.response.data.error})}):this.$router.push({name:"login"})}}}},yHVZ:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".nk-team-table{width:100%}.nk-team-table>tbody>tr+tr>td{border-top:1px dotted hsla(0,0%,100%,.2)}.nk-team-table>tbody>tr>td{padding:20px 10px}.f07em{font-size:.7rem!important}",""])}});
//# sourceMappingURL=8.17163df88e511a97a54b.js.map