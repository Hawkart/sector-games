webpackJsonp([7],{NmJ0:function(t,e,s){var i=s("WV1y");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("ccee8f9e",i,!0,{})},WV1y:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".settings-card .card-body{padding:0}",""])},dv2D:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=s("Dd8w"),a=(i=n)&&i.__esModule?i:{default:i},r=s("NYxO");e.default={middleware:"auth",computed:(0,a.default)({},(0,r.mapGetters)({user:"auth/user"}),{tabs:function(){return[{icon:"user",name:this.$t("profile"),route:"settings.profile"},{icon:"university",name:this.$t("school"),route:"settings.school"},{icon:"users",name:this.$t("team"),route:"settings.team"},{icon:"book",name:this.$t("instruction"),route:"settings.instruction"}]}}),methods:{sendVerifyEmail:function(){var t=this;axios.post("/api/email/verify_code/resend").then(function(e){t.email_info=e.data.message})}}}},hh01:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[t.user.confirmed?t._e():s("div",{staticClass:"nk-info-box warning text-danger p-15 mb-20"},[s("em",[t._v(t._s(t.$t("confirm_email_text")))])])]),t._v(" "),s("div",{staticClass:"col-md-3"},[s("card",{staticClass:"settings-card",attrs:{title:t.$t("settings")}},[s("ul",{staticClass:"nav flex-column nav-pills"},t._l(t.tabs,function(e){return s("li",{key:e.route,staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:e.route},"active-class":"active"}},[s("fa",{attrs:{icon:e.icon,"fixed-width":""}}),t._v("\n            "+t._s(e.name)+"\n          ")],1)],1)}))])],1),t._v(" "),s("div",{staticClass:"col-md-9"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)])},staticRenderFns:[]};e.a=i},j4WV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("dv2D"),n=s.n(i);for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);var r=s("hh01");var o=function(t){s("NmJ0")},c=s("VU/8")(n.a,r.a,!1,o,null,null);e.default=c.exports}});
//# sourceMappingURL=7.154de89d9bec7d916b09.js.map