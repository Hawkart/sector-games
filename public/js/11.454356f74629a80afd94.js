webpackJsonp([11],{SqVZ:function(t,e,n){var s=n("VU/8")(n("sytJ"),n("ppOY"),!1,null,null,null);t.exports=s.exports},ppOY:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 m-auto"},[n("card",{attrs:{title:t.$t("verify_account")}},[t.message?n("div",{staticClass:"nk-info-box text-success"},[n("div",{staticClass:"nk-info-box-icon"},[n("i",{staticClass:"ion-checkmark-round"})]),t._v(" "),n("h3",[t._v(t._s(t.message)+"!")]),t._v(" "),n("em",[t._v("Now you can "),n("router-link",{attrs:{to:{name:"login"}}},[n("u",[t._v(t._s(t.$t("login")))])]),t._v(".")],1)]):t._e()])],1)])},staticRenderFns:[]}},sytJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(n("Xxa5")),a=o(n("exGp")),r=o(n("yKuP"));o(n("mtWM"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={middleware:"guest",metaInfo:function(){return{title:this.$t("verify_account")}},data:function(){return{form:new r.default({token:""}),message:""}},methods:{verify:function(){var t=this;return(0,a.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.token=t.$route.params.token,e.next=3,t.form.get("/api/email/verify/"+t.form.token).then(function(e){t.message=e.data.message});case 3:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.verify()}}}});
//# sourceMappingURL=11.454356f74629a80afd94.js.map