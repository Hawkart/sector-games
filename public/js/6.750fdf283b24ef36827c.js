webpackJsonp([6],{Sgv7:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=m(e("Xxa5")),o=m(e("exGp")),s=m(e("yKuP")),i=e("NYxO"),l=m(e("lbHh")),n=m(e("ngqk"));function m(t){return t&&t.__esModule?t:{default:t}}a.default={scrollToTop:!1,metaInfo:function(){return{title:this.$t("settings")}},data:function(){return{form:new s.default({name:"",email:""}),header:{Authorization:"Bearer "+l.default.get("token")},uploadUrl:window.config.apiHost+"/api/users/avatar"}},computed:(0,i.mapGetters)({user:"auth/user"}),components:{"vue-core-image-upload":n.default},created:function(){var t=this;this.form.keys().forEach(function(a){t.form[a]=t.user[a]})},methods:{update:function(){var t=this;return(0,o.default)(r.default.mark(function a(){var e,o;return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.form.patch("/api/settings/profile");case 2:e=a.sent,o=e.data,t.$store.dispatch("auth/updateUser",{user:o});case 5:case"end":return a.stop()}},a,t)}))()},imageuploaded:function(t){this.user.avatar=t.avatar}}}},VIGE:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card",{attrs:{title:t.$t("your_info")}},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right label-avatar"},[t._v(t._s(t.$t("avatar")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"profile-img-wrap"},[e("img",{staticClass:"rounded-circle profile-photo w-75px",attrs:{src:t.getImageLink(t.user.avatar),alt:"user"}}),t._v(" "),e("vue-core-image-upload",{staticClass:"fileupload btn btn-primary ml-20",attrs:{"crop-ratio":"1:1",crop:!0,headers:t.header,maxWidth:150,url:t.uploadUrl},on:{imageuploaded:t.imageuploaded}},[e("i",{staticClass:"fa fa-camera"},[t._v(" "+t._s(t.$t("upload")))])])],1)])]),t._v(" "),e("form",{on:{submit:function(a){a.preventDefault(),t.update(a)},keydown:function(a){t.form.onKeydown(a)}}},[e("alert-success",{attrs:{form:t.form,message:t.$t("info_updated")}}),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-9 ml-md-auto"},[e("v-button",{attrs:{loading:t.form.busy,type:"success"}},[t._v(t._s(t.$t("update")))])],1)])],1)])},staticRenderFns:[]}},doo0:function(t,a,e){var r=e("VU/8")(e("Sgv7"),e("VIGE"),!1,null,null,null);t.exports=r.exports}});
//# sourceMappingURL=6.750fdf283b24ef36827c.js.map