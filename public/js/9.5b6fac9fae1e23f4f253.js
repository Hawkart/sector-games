webpackJsonp([9],{"3SI7":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("ZZTC"),o=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,function(){return r[e]})}(s);var i=n("ls8D"),a=n("VU/8")(o.a,i.a,!1,null,null,null);t.default=a.exports},TVyd:function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 m-auto"},[n("card",{attrs:{title:e.$t("login")}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)},keydown:function(t){return e.form.onKeydown(t)}}},[n("alert-error",{attrs:{form:e.form}}),e._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[e._v(e._s(e.$t("email")))]),e._v(" "),n("div",{staticClass:"col-md-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),n("has-error",{attrs:{form:e.form,field:"email"}})],1)]),e._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[e._v(e._s(e.$t("password")))]),e._v(" "),n("div",{staticClass:"col-md-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),n("has-error",{attrs:{form:e.form,field:"password"}})],1)]),e._v(" "),n("div",{staticClass:"form-group row"},[n("div",{staticClass:"col-md-3"}),e._v(" "),n("div",{staticClass:"col-md-7 d-flex"},[n("checkbox",{attrs:{name:"remember"},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}},[e._v("\n              "+e._s(e.$t("remember_me"))+"\n            ")]),e._v(" "),n("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[e._v("\n              "+e._s(e.$t("forgot_password"))+"\n            ")])],1)]),e._v(" "),n("div",{staticClass:"form-group row"},[n("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[n("v-button",{attrs:{loading:e.form.busy}},[e._v("\n              "+e._s(e.$t("login"))+"\n            ")])],1)])],1)])],1)])},staticRenderFns:[]};t.a=r},ZZTC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n("fZjL")),o=u(n("Dd8w")),s=u(n("pFYg")),i=u(n("Xxa5")),a=u(n("exGp")),l=u(n("lbHh"));function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===e?"undefined":(0,s.default)(e))&&(n=e,e=""),n=(0,o.default)({url:e,title:t,width:600,height:720},n);var i=void 0!==window.screenLeft?window.screenLeft:window.screen.left,a=void 0!==window.screenTop?window.screenTop:window.screen.top,l=window.innerWidth||document.documentElement.clientWidth||window.screen.width,u=window.innerHeight||document.documentElement.clientHeight||window.screen.height;n.left=l/2-n.width/2+i,n.top=u/2-n.height/2+a;var d=(0,r.default)(n).reduce(function(e,t){return e.push(t+"="+n[t]),e},[]).join(","),c=window.open(e,t,d);return window.focus&&c.focus(),c}t.default={name:"LoginWithSocial",props:{provider:{type:String,default:null},ic:{type:String,default:null},text:{type:String,default:null}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var e=this;return(0,a.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:d("/social/"+e.provider+"?token="+l.default.get("token"),e.$t("login"));case 2:case"end":return t.stop()}},t,e)}))()},onMessage:function(e){e.origin!==window.origin&&e.origin!==window.config.apiHost||!e.data.token||(this.$store.dispatch("auth/saveToken",{token:e.data.token}),this.$router.push({name:"settings.profile"}))}}}},ihEP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("Xxa5")),o=a(n("exGp")),s=a(n("yKuP")),i=a(n("3SI7"));function a(e){return e&&e.__esModule?e:{default:e}}t.default={middleware:"guest",components:{LoginWithSocial:i.default},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new s.default({email:"",password:""}),remember:!1}},methods:{login:function(){var e=this;return(0,o.default)(r.default.mark(function t(){var n,o;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/login");case 2:return n=t.sent,o=n.data,e.$store.dispatch("auth/saveToken",{token:o.token,remember:e.remember}),t.next=7,e.$store.dispatch("auth/fetchUser");case 7:e.$router.push({name:"settings.profile"});case 8:case"end":return t.stop()}},t,e)}))()}}}},ls8D:function(e,t,n){"use strict";var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("button",{class:"nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-info p-9 ml-5 btn-"+this.ic+" nk-social-"+this.ic,attrs:{type:"button"},on:{click:this.login}},[this._v("\n    "+this._s(this.text)+"\n    "),t("fa",{attrs:{icon:["fab",this.ic]}})],1)},staticRenderFns:[]};t.a=r},yNuM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("ihEP"),o=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,function(){return r[e]})}(s);var i=n("TVyd"),a=n("VU/8")(o.a,i.a,!1,null,null,null);t.default=a.exports}});
//# sourceMappingURL=9.5b6fac9fae1e23f4f253.js.map