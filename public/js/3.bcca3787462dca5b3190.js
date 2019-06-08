webpackJsonp([3],{"3SI7":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ZZTC"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);var s=a("wcO2"),i=a("VU/8")(r.a,s.a,!1,null,null,null);t.default=i.exports},QVM2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a("Xxa5")),r=d(a("exGp")),o=d(a("Dd8w")),s=d(a("yKuP")),i=d(a("mtWM")),l=a("NYxO"),c=d(a("3SI7"));function d(e){return e&&e.__esModule?e:{default:e}}t.default={metaInfo:function(){return{title:this.$t("team")}},components:{LoginWithSocial:c.default},data:function(){return{form:new s.default({game_id:"",game_roles:"",nickname:""}),games:null,game_roles:null}},computed:(0,o.default)({},(0,l.mapGetters)({user:"auth/user"}),{chars:function(){return this.$t("alphabet").split(",")}}),created:function(){var e=this;this.form.keys().forEach(function(t){e.form[t]=e.user[t]})},mounted:function(){this.getGames(),null!=this.user.game_id&&this.getGameRoles(this.user.game_id)},methods:{getGames:function(){var e=this;return(0,r.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.default.get("/api/games").then(function(t){e.$set(e,"games",t.data)});case 2:case"end":return t.stop()}},t,e)}))()},getGameRoles:function(e){var t=this;return(0,r.default)(n.default.mark(function a(){var r;return n.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.ArrayToUrl({game_id:e}),a.next=3,i.default.get("/api/game_roles?"+r).then(function(e){t.$set(t,"game_roles",e.data)});case 3:case"end":return a.stop()}},a,t)}))()},update:function(){var e=this;return(0,r.default)(n.default.mark(function t(){var a,r;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/users");case 2:a=t.sent,r=a.data,e.$store.dispatch("auth/updateUser",{user:r.data});case 5:case"end":return t.stop()}},t,e)}))()},selectGame:function(){var e=this;return(0,r.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getGameRoles(e.form.game_id);case 2:case"end":return t.stop()}},t,e)}))()},createTeam:function(){}}}},Xe4k:function(e,t,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("card",{attrs:{title:e.$t("team")}},[a("div",{staticClass:"nk-accordion",attrs:{id:"accordion-1",role:"tablist","aria-multiselectable":"true"}},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading",attrs:{role:"tab",id:"accordion-1-1-heading"}},[a("a",{staticClass:"collapsed",attrs:{"data-toggle":"collapse","data-parent":"#accordion-1",href:"#accordion-1-1","aria-expanded":"true","aria-controls":"accordion-1-1"}},[e._v("\n                    "+e._s(e.$t("game_and_role"))+" "),a("span",{staticClass:"panel-heading-arrow fa fa-angle-down"})])]),e._v(" "),a("div",{staticClass:"panel-collapse collapse show",attrs:{id:"accordion-1-1",role:"tabpanel","aria-labelledby":"accordion-1-1-heading"}},[a("form",{on:{submit:function(t){t.preventDefault(),e.update(t)},keydown:function(t){e.form.onKeydown(t)}}},[a("alert-success",{attrs:{form:e.form,message:e.$t("info_updated")}}),e._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[e._v(e._s(e.$t("game")))]),e._v(" "),a("div",{staticClass:"col-md-7"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.game_id,expression:"form.game_id"}],staticClass:"form-control",attrs:{name:"game_id"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"game_id",t.target.multiple?a:a[0])},e.selectGame]}},e._l(e.games,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                                    "+e._s(t.title)+"\n                                ")])})),e._v(" "),a("has-error",{attrs:{form:e.form,field:"game_id"}})],1)]),e._v(" "),null!=e.form.game_id?a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[e._v(e._s(e.$t("game_roles")))]),e._v(" "),a("div",{staticClass:"col-md-7",staticStyle:{"padding-top":"8px"}},[e._l(e.game_roles,function(t){return null!=e.game_roles&&e.game_roles.length>0?a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.game_roles,expression:"form.game_roles"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.form.game_roles)?e._i(e.form.game_roles,t.id)>-1:e.form.game_roles},on:{change:function(a){var n=e.form.game_roles,r=a.target,o=!!r.checked;if(Array.isArray(n)){var s=t.id,i=e._i(n,s);r.checked?i<0&&(e.form.game_roles=n.concat([s])):i>-1&&(e.form.game_roles=n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.form,"game_roles",o)}}}),e._v(" "),a("label",{staticClass:"form-check-label"},[e._v(e._s(t.title))])]):e._e()}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"game_roles"}})],2)]):e._e(),e._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[e._v(e._s(e.$t("nickname")))]),e._v(" "),a("div",{staticClass:"col-md-7"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.nickname,expression:"form.nickname"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("nickname")},attrs:{type:"text",name:"nickname"},domProps:{value:e.form.nickname},on:{input:function(t){t.target.composing||e.$set(e.form,"nickname",t.target.value)}}}),e._v(" "),a("has-error",{attrs:{form:e.form,field:"nickname"}})],1)]),e._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-md-9 ml-md-auto"},[a("v-button",{attrs:{loading:e.form.busy,type:"success"}},[e._v(e._s(e.$t("update")))]),e._v(" "),a("login-with-social",{attrs:{provider:"steam",ic:"steam",text:e.$t("connect_account")}})],1)])],1)])]),e._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading",attrs:{role:"tab",id:"accordion-1-2-heading"}},[a("a",{attrs:{"data-toggle":"collapse","data-parent":"#accordion-1",href:"#accordion-1-2","aria-expanded":"false","aria-controls":"accordion-1-2"}},[e._v("\n                    "+e._s(e.$t("create_team"))+" "),a("span",{staticClass:"panel-heading-arrow fa fa-angle-down"})])]),e._v(" "),a("div",{staticClass:"panel-collapse collapse",attrs:{id:"accordion-1-2",role:"tabpanel","aria-labelledby":"accordion-1-2-heading"}},[a("p",[e._v("And she went on planning to herself how she would manage it. 'They must go by the carrier' she thought; and how funny it'll seem And she went on planning to herself how")])])]),e._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading",attrs:{role:"tab",id:"accordion-1-3-heading"}},[a("a",{staticClass:"collapsed",attrs:{"data-toggle":"collapse","data-parent":"#accordion-1",href:"#accordion-1-3","aria-expanded":"false","aria-controls":"accordion-1-3"}},[e._v("\n                    "+e._s(e.$t("connect_to_team"))+" "),a("span",{staticClass:"panel-heading-arrow fa fa-angle-down"})])]),e._v(" "),a("div",{staticClass:"panel-collapse collapse",attrs:{id:"accordion-1-3",role:"tabpanel","aria-labelledby":"accordion-1-3-heading"}},[a("p",[e._v("I have related the substance of several conversations I had with my master during the greatest part of the time I had the, for brevity sake, omitted much moredown.")])])])])])},staticRenderFns:[]};t.a=n},ZZTC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a("fZjL")),r=l(a("Dd8w")),o=l(a("pFYg")),s=l(a("Xxa5")),i=l(a("exGp"));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===e?"undefined":(0,o.default)(e))&&(a=e,e=""),a=(0,r.default)({url:e,title:t,width:600,height:720},a);var s=void 0!==window.screenLeft?window.screenLeft:window.screen.left,i=void 0!==window.screenTop?window.screenTop:window.screen.top,l=window.innerWidth||document.documentElement.clientWidth||window.screen.width,c=window.innerHeight||document.documentElement.clientHeight||window.screen.height;a.left=l/2-a.width/2+s,a.top=c/2-a.height/2+i;var d=(0,n.default)(a).reduce(function(e,t){return e.push(t+"="+a[t]),e},[]).join(","),u=window.open(e,t,d);return window.focus&&u.focus(),u}t.default={name:"LoginWithSocial",props:{provider:{type:String,default:null},ic:{type:String,default:null},text:{type:String,default:null}},computed:{url:function(){return"/api/social/"+(void 0).provider}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var e=this;return(0,i.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("auth/fetchOauthUrl",{provider:e.provider});case 2:c(t.sent,e.$t("login"));case 4:case"end":return t.stop()}},t,e)}))()},onMessage:function(e){e.origin!==window.origin&&e.origin!==window.config.apiHost||!e.data.token||(this.$store.dispatch("auth/saveToken",{token:e.data.token}),this.$router.push({name:"home"}))}}}},dqi5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("QVM2"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);var s=a("Xe4k"),i=a("VU/8")(r.a,s.a,!1,null,null,null);t.default=i.exports},wcO2:function(e,t,a){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("button",{class:"nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-info ml-5 nk-social-"+this.ic,attrs:{type:"button"},on:{click:this.login}},[this._v("\n    "+this._s(this.text)+"\n    "),t("fa",{attrs:{icon:["fab",this.ic]}})],1)},staticRenderFns:[]};t.a=n}});
//# sourceMappingURL=3.bcca3787462dca5b3190.js.map