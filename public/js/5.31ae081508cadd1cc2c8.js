webpackJsonp([5],{"3SI7":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("ZZTC"),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,function(){return r[t]})}(i);var s=o("vD+B"),a=o("VU/8")(n.a,s.a,!1,null,null,null);e.default=a.exports},ZZTC:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(o("fZjL")),n=l(o("Dd8w")),i=l(o("pFYg")),s=l(o("Xxa5")),a=l(o("exGp"));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===t?"undefined":(0,i.default)(t))&&(o=t,t=""),o=(0,n.default)({url:t,title:e,width:600,height:720},o);var s=void 0!==window.screenLeft?window.screenLeft:window.screen.left,a=void 0!==window.screenTop?window.screenTop:window.screen.top,l=window.innerWidth||document.documentElement.clientWidth||window.screen.width,c=window.innerHeight||document.documentElement.clientHeight||window.screen.height;o.left=l/2-o.width/2+s,o.top=c/2-o.height/2+a;var d=(0,r.default)(o).reduce(function(t,e){return t.push(e+"="+o[e]),t},[]).join(","),u=window.open(t,e,d);return window.focus&&u.focus(),u}e.default={name:"LoginWithSocial",props:{provider:{type:String,default:null},ic:{type:String,default:null},text:{type:String,default:null}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t=this;return(0,a.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c("/social/"+t.provider,t.$t("login"));case 2:case"end":return e.stop()}},e,t)}))()},onMessage:function(t){t.origin!==window.origin&&t.origin!==window.config.apiHost||!t.data.token||(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}}},ihEP:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(o("Xxa5")),n=a(o("exGp")),i=a(o("yKuP")),s=a(o("3SI7"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={middleware:"guest",components:{LoginWithSocial:s.default},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new i.default({email:"",password:""}),remember:!1}},methods:{login:function(){var t=this;return(0,n.default)(r.default.mark(function e(){var o,n;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.post("/api/login");case 2:return o=e.sent,n=o.data,t.$store.dispatch("auth/saveToken",{token:n.token,remember:t.remember}),e.next=7,t.$store.dispatch("auth/fetchUser");case 7:t.$router.push({name:"settings.profile"});case 8:case"end":return e.stop()}},e,t)}))()}}}},reuj:function(t,e,o){"use strict";var r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-8 m-auto"},[o("card",{attrs:{title:t.$t("login")}},[o("form",{on:{submit:function(e){e.preventDefault(),t.login(e)},keydown:function(e){t.form.onKeydown(e)}}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-3"}),t._v(" "),o("div",{staticClass:"col-md-7 d-flex"},[o("checkbox",{attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n              "+t._s(t.$t("remember_me"))+"\n            ")]),t._v(" "),o("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")])],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[o("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")]),t._v(" "),o("div",{staticClass:"ml-auto"},[o("login-with-social",{attrs:{provider:"vkontakte",ic:"vk"}}),t._v(" "),o("login-with-social",{attrs:{provider:"steam",ic:"steam"}}),t._v(" "),o("login-with-social",{attrs:{provider:"facebook",ic:"facebook"}}),t._v(" "),o("login-with-social",{attrs:{provider:"twitch",ic:"twitch"}}),t._v(" "),o("login-with-social",{attrs:{provider:"google",ic:"google"}})],1)],1)])])])],1)])},staticRenderFns:[]};e.a=r},"vD+B":function(t,e,o){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:"nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-info p-9 ml-5 nk-social-"+this.ic,attrs:{type:"button"},on:{click:this.login}},[this._v("\n    "+this._s(this.text)+"\n    "),e("fa",{attrs:{icon:["fab",this.ic]}})],1)},staticRenderFns:[]};e.a=r},yNuM:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("ihEP"),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,function(){return r[t]})}(i);var s=o("reuj"),a=o("VU/8")(n.a,s.a,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=5.31ae081508cadd1cc2c8.js.map