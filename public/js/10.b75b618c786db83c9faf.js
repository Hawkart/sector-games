webpackJsonp([10],{KlC9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 m-auto"},[n("card",{attrs:{title:t.$t("verify_account")}},[t.message?n("div",{staticClass:"alert alert-success"},[t._v("\n                "+t._s(t.message)+"\n                Now you can "),n("router-link",{attrs:{to:{name:"login"}}},[n("u",[t._v(t._s(t.$t("login")))])]),t._v(".\n            ")],1):t._e()])],1)])},staticRenderFns:[]}},SqVZ:function(t,e,n){var r=n("VU/8")(n("sytJ"),n("KlC9"),!1,null,null,null);t.exports=r.exports},sytJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("Xxa5")),a=o(n("exGp")),s=o(n("yKuP"));o(n("mtWM"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={middleware:"guest",metaInfo:function(){return{title:this.$t("verify_account")}},data:function(){return{form:new s.default({token:""}),message:""}},methods:{verify:function(){var t=this;return(0,a.default)(r.default.mark(function e(){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.token=t.$route.params.token,e.next=3,t.form.get("/api/email/verify/"+t.form.token).then(function(e){t.message=e.data.message,t.$router.push({name:"login"})});case 3:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.verify()}}}});
//# sourceMappingURL=10.b75b618c786db83c9faf.js.map