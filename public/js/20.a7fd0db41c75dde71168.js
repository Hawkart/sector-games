webpackJsonp([20],{SqVZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("sytJ"),r=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var u=n("etOk"),o=n("VU/8")(r.a,u.a,!1,null,null,null);e.default=o.exports},etOk:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 m-auto"},[n("card",{attrs:{title:t.$t("verify_account")}},[t.message?n("div",{staticClass:"nk-info-box text-success"},[n("div",{staticClass:"nk-info-box-icon"},[n("i",{staticClass:"ion-checkmark-round"})]),t._v(" "),n("h3",[t._v(t._s(t.message)+"!")]),t._v(" "),n("em",[t._v(t._s(t.$t("now_you_can"))),n("router-link",{attrs:{to:{name:"login"}}},[n("u",[t._v(t._s(t.$t("may_auth")))])]),t._v(".")],1)]):t._e()])],1)])},staticRenderFns:[]};e.a=a},sytJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=u(n("Xxa5")),r=u(n("exGp")),s=u(n("yKuP"));u(n("mtWM"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={middleware:"guest",metaInfo:function(){return{title:this.$t("verify_account")}},data:function(){return{form:new s.default({token:""}),message:""}},methods:{verify:function(){var t=this;return(0,r.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.token=t.$route.params.token,e.next=3,t.form.get("/api/email/verify/"+t.form.token).then(function(e){t.message=e.data.message});case 3:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.verify()}}}});
//# sourceMappingURL=20.a7fd0db41c75dde71168.js.map