webpackJsonp([9],{"+UYF":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".settings-card .card-body{padding:0}",""])},"0noC":function(t,e,n){var s=n("+UYF");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("20dd3dad",s,!0,{})},dv2D:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=n("Dd8w"),a=(s=i)&&s.__esModule?s:{default:s},o=n("NYxO");e.default={middleware:"auth",computed:(0,a.default)({},(0,o.mapGetters)({user:"auth/user"}),{tabs:function(){return[{icon:"user",name:this.$t("profile"),route:"settings.profile"},{icon:"university",name:this.$t("school"),route:"settings.school"},{icon:"users",name:this.$t("team"),route:"settings.team"},{icon:"book",name:this.$t("instruction"),route:"settings.instruction"}]}}),methods:{sendVerifyEmail:function(){var t=this;axios.post("/api/email/verify_code/resend").then(function(e){t.email_info=e.data.message})}}}},j4WV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("dv2D"),i=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var o=n("moyR");var r=function(t){n("0noC")},c=n("VU/8")(i.a,o.a,!1,r,null,null);e.default=c.exports},moyR:function(t,e,n){"use strict";var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[t.user.confirmed?t._e():n("div",{staticClass:"nk-info-box warning text-danger p-15 mb-20"},[n("em",[t._v(t._s(t.$t("confirm_email_text")))])])]),t._v(" "),n("div",{staticClass:"col-md-3"},[n("card",{staticClass:"settings-card",attrs:{title:t.$t("settings")}},[n("ul",{staticClass:"nav flex-column nav-pills"},t._l(t.tabs,function(e){return n("li",{key:e.route,staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:e.route},"active-class":"active"}},[n("fa",{attrs:{icon:e.icon,"fixed-width":""}}),t._v("\n            "+t._s(e.name)+"\n          ")],1)],1)})),t._v(" "),n("router-link",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white mt-20 w-100",attrs:{to:{name:"settings.team"}}},[t._v("\n        Собери команду"),n("br"),t._v(" вашей школы\n      ")])],1)],1),t._v(" "),n("div",{staticClass:"col-md-9"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)])},staticRenderFns:[]};e.a=s}});
//# sourceMappingURL=9.1d04c68af9771cfb4516.js.map