webpackJsonp([10],{"+Sop":function(s,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(r("Xxa5")),a=i(r("exGp")),e=i(r("yKuP"));function i(s){return s&&s.__esModule?s:{default:s}}t.default={middleware:"guest",metaInfo:function(){return{title:this.$t("reset_password")}},data:function(){return{status:"",form:new e.default({token:"",email:"",password:"",password_confirmation:""})}},created:function(){this.form.email=this.$route.query.email,this.form.token=this.$route.params.token},methods:{reset:function(){var s=this;return(0,a.default)(o.default.mark(function t(){var r,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.form.post("/api/password/reset");case 2:r=t.sent,a=r.data,s.status=a.status,s.form.reset();case 6:case"end":return t.stop()}},t,s)}))()}}}},csiM:function(s,t,r){var o=r("VU/8")(r("+Sop"),r("jybZ"),!1,null,null,null);s.exports=o.exports},jybZ:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 m-auto"},[r("card",{attrs:{title:s.$t("reset_password")}},[r("form",{on:{submit:function(t){t.preventDefault(),s.reset(t)},keydown:function(t){s.form.onKeydown(t)}}},[r("alert-success",{attrs:{form:s.form,message:s.status}}),s._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[s._v(s._s(s.$t("email")))]),s._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("email")},attrs:{type:"email",name:"email",readonly:""},domProps:{value:s.form.email},on:{input:function(t){t.target.composing||s.$set(s.form,"email",t.target.value)}}}),s._v(" "),r("has-error",{attrs:{form:s.form,field:"email"}})],1)]),s._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[s._v(s._s(s.$t("password")))]),s._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:s.form.password},on:{input:function(t){t.target.composing||s.$set(s.form,"password",t.target.value)}}}),s._v(" "),r("has-error",{attrs:{form:s.form,field:"password"}})],1)]),s._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[s._v(s._s(s.$t("confirm_password")))]),s._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:s.form.password_confirmation},on:{input:function(t){t.target.composing||s.$set(s.form,"password_confirmation",t.target.value)}}}),s._v(" "),r("has-error",{attrs:{form:s.form,field:"password_confirmation"}})],1)]),s._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-9 ml-md-auto"},[r("v-button",{attrs:{loading:s.form.busy}},[s._v("\n              "+s._s(s.$t("reset_password"))+"\n            ")])],1)])],1)])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=10.9f103b533a71dd7189c6.js.map