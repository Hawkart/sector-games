webpackJsonp([20],{"+Sop":function(r,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(s("Xxa5")),a=i(s("exGp")),e=i(s("yKuP"));function i(r){return r&&r.__esModule?r:{default:r}}t.default={middleware:"guest",metaInfo:function(){return{title:this.$t("reset_password")}},data:function(){return{status:"",form:new e.default({token:"",email:"",password:"",password_confirmation:""})}},created:function(){this.form.email=this.$route.query.email,this.form.token=this.$route.params.token},methods:{reset:function(){var r=this;return(0,a.default)(o.default.mark(function t(){var s;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.form.post("/api/password/reset");case 2:s=t.sent,s.data,r.form.reset();case 5:case"end":return t.stop()}},t,r)}))()}}}},RyQz:function(r,t,s){"use strict";var o={render:function(){var r=this,t=r.$createElement,s=r._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 m-auto"},[s("card",{attrs:{title:r.$t("reset_password")}},[s("form",{on:{submit:function(t){t.preventDefault(),r.reset(t)},keydown:function(t){r.form.onKeydown(t)}}},[s("alert-success",{attrs:{form:r.form}}),r._v(" "),s("alert-error",{attrs:{form:r.form}}),r._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-right"},[r._v(r._s(r.$t("email")))]),r._v(" "),s("div",{staticClass:"col-md-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:r.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":r.form.errors.has("email")},attrs:{type:"email",name:"email",readonly:""},domProps:{value:r.form.email},on:{input:function(t){t.target.composing||r.$set(r.form,"email",t.target.value)}}}),r._v(" "),s("has-error",{attrs:{form:r.form,field:"email"}})],1)]),r._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-right"},[r._v(r._s(r.$t("password")))]),r._v(" "),s("div",{staticClass:"col-md-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:r.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":r.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:r.form.password},on:{input:function(t){t.target.composing||r.$set(r.form,"password",t.target.value)}}}),r._v(" "),s("has-error",{attrs:{form:r.form,field:"password"}})],1)]),r._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-3 col-form-label text-md-right"},[r._v(r._s(r.$t("confirm_password")))]),r._v(" "),s("div",{staticClass:"col-md-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:r.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":r.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:r.form.password_confirmation},on:{input:function(t){t.target.composing||r.$set(r.form,"password_confirmation",t.target.value)}}}),r._v(" "),s("has-error",{attrs:{form:r.form,field:"password_confirmation"}})],1)]),r._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-9 ml-md-auto"},[s("v-button",{attrs:{loading:r.form.busy}},[r._v("\n              "+r._s(r.$t("reset_password"))+"\n            ")])],1)])],1)])],1)])},staticRenderFns:[]};t.a=o},csiM:function(r,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("+Sop"),a=s.n(o);for(var e in o)"default"!==e&&function(r){s.d(t,r,function(){return o[r]})}(e);var i=s("RyQz"),n=s("VU/8")(a.a,i.a,!1,null,null,null);t.default=n.exports}});
//# sourceMappingURL=20.e2362d910e2881b9a665.js.map