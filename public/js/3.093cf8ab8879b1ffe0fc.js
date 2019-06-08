webpackJsonp([3],{"+Z8z":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(o("fZjL")),r=u(o("Dd8w")),s=u(o("pFYg")),i=u(o("Xxa5")),a=u(o("exGp"));function u(t){return t&&t.__esModule?t:{default:t}}function l(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===t?"undefined":(0,s.default)(t))&&(o=t,t=""),o=(0,r.default)({url:t,title:e,width:600,height:720},o);var i=void 0!==window.screenLeft?window.screenLeft:window.screen.left,a=void 0!==window.screenTop?window.screenTop:window.screen.top,u=window.innerWidth||document.documentElement.clientWidth||window.screen.width,l=window.innerHeight||document.documentElement.clientHeight||window.screen.height;o.left=u/2-o.width/2+i,o.top=l/2-o.height/2+a;var d=(0,n.default)(o).reduce(function(t,e){return t.push(e+"="+o[e]),t},[]).join(","),c=window.open(t,e,d);return window.focus&&c.focus(),c}e.default={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t=this;return(0,a.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 2:l(e.sent,t.$t("login"));case 4:case"end":return e.stop()}},e,t)}))()},onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}}},OMNW:function(t,e,o){var n=o("VU/8")(o("+Z8z"),o("qcJ/"),!1,null,null,null);t.exports=n.exports},ihEP:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(o("Xxa5")),r=a(o("exGp")),s=a(o("yKuP")),i=a(o("OMNW"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={middleware:"guest",components:{LoginWithGithub:i.default},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new s.default({email:"",password:""}),remember:!1}},methods:{login:function(){var t=this;return(0,r.default)(n.default.mark(function e(){var o,r;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.post("/api/login");case 2:return o=e.sent,r=o.data,t.$store.dispatch("auth/saveToken",{token:r.token,remember:t.remember}),e.next=7,t.$store.dispatch("auth/fetchUser");case 7:t.$router.push({name:"home"});case 8:case"end":return e.stop()}},e,t)}))()}}}},ozxK:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-8 m-auto"},[o("card",{attrs:{title:t.$t("login")}},[o("form",{on:{submit:function(e){e.preventDefault(),t.login(e)},keydown:function(e){t.form.onKeydown(e)}}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-3"}),t._v(" "),o("div",{staticClass:"col-md-7 d-flex"},[o("checkbox",{attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n              "+t._s(t.$t("remember_me"))+"\n            ")]),t._v(" "),o("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")])],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[o("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")]),t._v(" "),o("login-with-github")],1)])])])],1)])},staticRenderFns:[]}},"qcJ/":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return this.githubAuth?e("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:this.login}},[this._v("\n  "+this._s(this.$t("login_with"))+"\n  "),e("fa",{attrs:{icon:["fab","github"]}})],1):this._e()},staticRenderFns:[]}},yNuM:function(t,e,o){var n=o("VU/8")(o("ihEP"),o("ozxK"),!1,null,null,null);t.exports=n.exports}});
//# sourceMappingURL=3.093cf8ab8879b1ffe0fc.js.map