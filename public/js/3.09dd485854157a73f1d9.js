webpackJsonp([3],{"+GOX":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(n("Xxa5")),r=u(n("exGp")),o=u(n("Dd8w")),a=u(n("yKuP")),s=u(n("mtWM")),l=u(n("3SI7")),c=u(n("olAn"));u(n("I3G/"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={middleware:"guest",components:{LoginWithSocial:l.default,VueRecaptcha:c.default},metaInfo:function(){return{title:this.$t("register")}},data:function(){return{form:new a.default({type:"player",name:"",email:"",nickname:"",password:"",institution_id:"",class:"",char:"",game_id:"",game_roles:[1],timezone:void 0!==Intl.DateTimeFormat().resolvedOptions().timeZone?Intl.DateTimeFormat().resolvedOptions().timeZone:""}),country_id:null,countries:null,region_id:null,regions:null,city_id:null,cities:null,institutions:null,games:null,game:null,cofirmation_sent:!1}},computed:(0,o.default)({},mapGetters({user:"auth/user",locale:"lang/locale"}),{chars:function(){return this.$t("alphabet").split(",")}}),mounted:function(){this.getCountries(),this.getDota()},methods:{register:function(){var t=this;return(0,r.default)(i.default.mark(function e(){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.nickname=t.form.email,t.form.game_id=t.game.id,e.next=4,t.form.post("/api/register");case 4:n=e.sent,n.data,t.cofirmation_sent=!0;case 7:case"end":return e.stop()}},e,t)}))()},getDota:function(){var t=this;return(0,r.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.default.get("/api/games?title=Dota 2").then(function(e){t.$set(t,"game",e.data[0])});case 2:case"end":return e.stop()}},e,t)}))()},sendVerifyEmail:function(){var t=this;s.default.post("/api/email/verify_code/resend").then(function(e){t.cofirmation_sent=!0})},getCountries:function(){var t=this;return(0,r.default)(i.default.mark(function e(){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.default.get("/api/locations?parent_id=null").then(function(e){t.$set(t,"countries",e.data)});case 2:n=t,$("#country_list").select2().on("select2:select",function(t){n.country_id=$(t.currentTarget).find("option:selected").val(),n.getRegions(n.country_id)});case 4:case"end":return e.stop()}},e,t)}))()},selectCountry:function(){var t=this;return(0,r.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRegions(t.country_id);case 2:case"end":return e.stop()}},e,t)}))()},selectRegion:function(){var t=this;return(0,r.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCities(t.region_id);case 2:case"end":return e.stop()}},e,t)}))()},selectCity:function(){var t=this;return(0,r.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getSchools(t.city_id);case 2:case"end":return e.stop()}},e,t)}))()},getRegions:function(t){var e=this;s.default.get("/api/locations?_sort=title&parent_id="+t).then(function(t){e.$set(e,"regions",t.data);var n=e;$("#region_list").select2().on("select2:select",function(t){n.region_id=$(t.currentTarget).find("option:selected").val(),n.getCities(n.region_id)})})},getCities:function(t){var e=this;s.default.get("/api/locations?_sort=title&_limit=30&parent_id="+t).then(function(n){var i=n.data.data,r=e;e.$set(e,"cities",i),$("#city_list").select2({language:r.locale,ajax:{url:window.config.apiHost+"/api/locations",dataType:"json",delay:250,data:function(e){return{_sort:"title",parent_id:t,_q:e.term,page:e.page||1,_limit:30}},processResults:function(t,e){return e.page=e.page||1,{results:t.data.map(function(t){return{id:t.id,text:t.title}}),pagination:{more:30*e.page<t.total}}},cache:!0},placeholder:"Введите населенный пункт",minimumInputLength:2}).on("select2:select",function(t){r.city_id=$(t.currentTarget).find("option:selected").val(),r.getSchools(r.city_id)})})},getSchools:function(t){var e=this;s.default.get("/api/institutions?_sort=title&location_id="+t).then(function(t){e.$set(e,"institutions",t.data)})},numberRange:function(t,e){return new Array(e-t+1).fill().map(function(e,n){return n+t})}}}},"3SI7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ZZTC"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var a=n("byRg"),s=n("VU/8")(r.a,a.a,!1,null,null,null);e.default=s.exports},BqK1:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 m-auto"},[n("card",{attrs:{title:t.$t("register")}},[t.cofirmation_sent?n("div",[n("p",[t._v(t._s(t.$t("confirm_sent_text")))])]):n("form",{on:{submit:function(e){e.preventDefault(),t.register(e)},keydown:function(e){t.form.onKeydown(e)}}},[null!==t.countries?n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("country")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.country_id,expression:"country_id"}],staticClass:"form-control",attrs:{name:"country_id",id:"country_list"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.country_id=e.target.multiple?n:n[0]},t.selectCountry]}},t._l(t.countries,function(e){return n("option",{domProps:{value:e.id}},[t._v("\n                "+t._s(e.title)+"\n              ")])}))])]):t._e(),t._v(" "),null!==t.country_id?n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("region")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.region_id,expression:"region_id"}],staticClass:"form-control",attrs:{name:"region_id",id:"region_list"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.region_id=e.target.multiple?n:n[0]},t.selectRegion]}},t._l(t.regions,function(e){return n("option",{domProps:{value:e.id}},[t._v("\n                "+t._s(e.title)+"\n              ")])}))])]):t._e(),t._v(" "),null!=t.region_id?n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("locality")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.city_id,expression:"city_id"}],staticClass:"form-control",attrs:{name:"city_id",id:"city_list"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.city_id=e.target.multiple?n:n[0]},t.selectCity]}},t._l(t.cities,function(e){return n("option",{domProps:{value:e.id}},[t._v("\n                "+t._s(e.title)+"\n              ")])}))])]):t._e(),t._v(" "),null!=t.city_id?n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("school")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.form.institution_id,expression:"form.institution_id"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("institution_id")},attrs:{name:"institution_id"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"institution_id",e.target.multiple?n:n[0])}}},t._l(t.institutions,function(e){return n("option",{domProps:{value:e.id}},[t._v("\n                "+t._s(e.title)+"\n              ")])})),t._v(" "),n("has-error",{attrs:{form:t.form,field:"institution_id"}})],1)]):t._e(),t._v(" "),null!=t.city_id?n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("class")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.form.class,expression:"form.class"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("class")},attrs:{name:"class"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"class",e.target.multiple?n:n[0])}}},t._l(t.numberRange(8,11),function(e){return n("option",{domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),n("has-error",{attrs:{form:t.form,field:"class"}})],1)]):t._e(),t._v(" "),null!=t.city_id?n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("char")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.form.char,expression:"form.char"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("char")},attrs:{name:"char"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"char",e.target.multiple?n:n[0])}}},t._l(t.chars,function(e){return n("option",{domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),n("has-error",{attrs:{form:t.form,field:"class"}})],1)]):t._e(),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("div",{staticClass:"help-block"},[t._v(t._s(t.$t("register_email_help")))]),t._v(" "),n("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),n("div",{staticClass:"form-group row"},[n("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[n("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("register"))+"\n            ")]),t._v(" "),n("div",{staticClass:"ml-auto"},[n("login-with-social",{attrs:{provider:"vkontakte",ic:"vk"}}),t._v(" "),n("login-with-social",{attrs:{provider:"steam",ic:"steam"}})],1)],1)])])])],1)])},staticRenderFns:[]};e.a=i},ZZTC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(n("fZjL")),r=l(n("Dd8w")),o=l(n("pFYg")),a=l(n("Xxa5")),s=l(n("exGp"));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===t?"undefined":(0,o.default)(t))&&(n=t,t=""),n=(0,r.default)({url:t,title:e,width:600,height:720},n);var a=void 0!==window.screenLeft?window.screenLeft:window.screen.left,s=void 0!==window.screenTop?window.screenTop:window.screen.top,l=window.innerWidth||document.documentElement.clientWidth||window.screen.width,c=window.innerHeight||document.documentElement.clientHeight||window.screen.height;n.left=l/2-n.width/2+a,n.top=c/2-n.height/2+s;var u=(0,i.default)(n).reduce(function(t,e){return t.push(e+"="+n[e]),t},[]).join(","),d=window.open(t,e,u);return window.focus&&d.focus(),d}e.default={name:"LoginWithSocial",props:{provider:{type:String,default:null},ic:{type:String,default:null},text:{type:String,default:null}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t=this;return(0,s.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c("/social/"+t.provider,t.$t("login"));case 2:case"end":return e.stop()}},e,t)}))()},onMessage:function(t){t.origin!==window.origin&&t.origin!==window.config.apiHost||!t.data.token||(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"settings.profile"}))}}}},byRg:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:"nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-info p-9 ml-5 nk-social-"+this.ic,attrs:{type:"button"},on:{click:this.login}},[this._v("\n    "+this._s(this.text)+"\n    "),e("fa",{attrs:{icon:["fab",this.ic]}})],1)},staticRenderFns:[]};e.a=i},olAn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=(i=function(){var t=!1,e=[];return{resolved:function(){return t},resolve:function(n){if(!t){t=!0;for(var i=0,r=e.length;i<r;i++)e[i](n)}},promise:{then:function(n){t?n():e.push(n)}}}}(),{notify:function(){i.resolve()},wait:function(){return i.promise},render:function(t,e,n){this.wait().then(function(){n(window.grecaptcha.render(t,e))})},reset:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(t)}))},execute:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(t)}))},checkRecaptchaLoad:function(){window.hasOwnProperty("grecaptcha")&&this.notify()},assertLoaded:function(){if(!i.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=r.notify);var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String}},mounted:function(){var t=this;r.checkRecaptchaLoad();var e=o({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired}),n=this.$slots.default?this.$el.children[0]:this.$el;r.render(n,e,function(e){t.$widgetId=e,t.$emit("render",e)})},methods:{reset:function(){r.reset(this.$widgetId)},execute:function(){r.execute(this.$widgetId)},emitVerify:function(t){this.$emit("verify",t)},emitExpired:function(){this.$emit("expired")}},render:function(t){return t("div",{},this.$slots.default)}};e.default=a},"zAw/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("+GOX"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var a=n("BqK1"),s=n("VU/8")(r.a,a.a,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=3.09dd485854157a73f1d9.js.map