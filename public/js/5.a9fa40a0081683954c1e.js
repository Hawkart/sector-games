webpackJsonp([5],{"13xR":function(t,e,o){"use strict";var n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-8 m-auto"},[o("card",{attrs:{title:t.$t("login")}},[o("form",{on:{submit:function(e){e.preventDefault(),t.login(e)},keydown:function(e){t.form.onKeydown(e)}}},[o("alert-error",{attrs:{form:t.form}}),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-3"}),t._v(" "),o("div",{staticClass:"col-md-7 d-flex"},[o("checkbox",{attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n              "+t._s(t.$t("remember_me"))+"\n            ")]),t._v(" "),o("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")])],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[o("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")]),t._v(" "),o("div",{staticClass:"ml-auto"},[o("login-with-social",{attrs:{provider:"vkontakte",ic:"vk"}}),t._v(" "),o("login-with-social",{attrs:{provider:"steam",ic:"steam"}})],1)],1)])],1)])],1)])},staticRenderFns:[]};e.a=n},"3SI7":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("ZZTC"),r=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);var i=o("65IP"),a=o("VU/8")(r.a,i.a,!1,null,null,null);e.default=a.exports},"65IP":function(t,e,o){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:"nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-info p-9 ml-5 btn-"+this.ic+" nk-social-"+this.ic,attrs:{type:"button"},on:{click:this.login}},[this._v("\n    "+this._s(this.text)+"\n    "),e("fa",{attrs:{icon:["fab",this.ic]}})],1)},staticRenderFns:[]};e.a=n},ZZTC:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=d(o("fZjL")),r=d(o("Dd8w")),s=d(o("pFYg")),i=d(o("Xxa5")),a=d(o("exGp")),l=d(o("lbHh"));function d(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===t?"undefined":(0,s.default)(t))&&(o=t,t=""),o=(0,r.default)({url:t,title:e,width:600,height:720},o);var i=void 0!==window.screenLeft?window.screenLeft:window.screen.left,a=void 0!==window.screenTop?window.screenTop:window.screen.top,l=window.innerWidth||document.documentElement.clientWidth||window.screen.width,d=window.innerHeight||document.documentElement.clientHeight||window.screen.height;o.left=l/2-o.width/2+i,o.top=d/2-o.height/2+a;var u=(0,n.default)(o).reduce(function(t,e){return t.push(e+"="+o[e]),t},[]).join(","),c=window.open(t,e,u);return window.focus&&c.focus(),c}e.default={name:"LoginWithSocial",props:{provider:{type:String,default:null},ic:{type:String,default:null},text:{type:String,default:null}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t=this;return(0,a.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u("/social/"+t.provider+"?token="+l.default.get("token"),t.$t("login"));case 2:case"end":return e.stop()}},e,t)}))()},onMessage:function(t){t.origin!==window.origin&&t.origin!==window.config.apiHost||!t.data.token||(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"settings.profile"}))}}}},ihEP:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(o("Xxa5")),r=a(o("exGp")),s=a(o("yKuP")),i=a(o("3SI7"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={middleware:"guest",components:{LoginWithSocial:i.default},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new s.default({email:"",password:""}),remember:!1}},methods:{login:function(){var t=this;return(0,r.default)(n.default.mark(function e(){var o,r;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.post("/api/login");case 2:return o=e.sent,r=o.data,t.$store.dispatch("auth/saveToken",{token:r.token,remember:t.remember}),e.next=7,t.$store.dispatch("auth/fetchUser");case 7:t.$router.push({name:"settings.profile"});case 8:case"end":return e.stop()}},e,t)}))()}}}},yNuM:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("ihEP"),r=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);var i=o("13xR"),a=o("VU/8")(r.a,i.a,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=5.a9fa40a0081683954c1e.js.map