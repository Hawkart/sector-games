webpackJsonp([3],{"3SI7":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ZZTC"),n=a.n(s);for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);var i=a("eOa7"),o=a("VU/8")(n.a,i.a,!1,null,null,null);e.default=o.exports},QVM2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=d(a("Xxa5")),n=d(a("exGp")),r=d(a("Dd8w")),i=d(a("yKuP")),o=d(a("mtWM")),l=a("NYxO"),c=d(a("3SI7")),u=d(a("e7x4"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:function(){return{title:this.$t("team")}},components:{LoginWithSocial:c.default},data:function(){return{form:new i.default({game_id:"",game_roles:"",nickname:""}),formTeam:new i.default({title:"",price:0,slug:""}),games:null,game_roles:null,institution_user:null,team:null,teams:[],invitations:[],inviteAnswerSuccess:!1,statuses:[{id:0,title:"pending"},{id:1,title:"accept"},{id:2,title:"denied"}]}},computed:(0,r.default)({},(0,l.mapGetters)({user:"auth/user"}),{chars:function(){return this.$t("alphabet").split(",")},slug:function(){var t=this.slugTitle(this.formTeam.title);return t}}),created:function(){var t=this;this.form.keys().forEach(function(e){t.form[e]=t.user[e]})},mounted:function(){this.getGames(),null!=this.user.game_id&&this.getGameRoles(this.user.game_id),this.getUserSchools(),this.getUserTeam(),this.getTeamTitle(),this.getInvitations()},methods:{getGames:function(){var t=this;return(0,n.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.default.get("/api/games").then(function(e){t.$set(t,"games",e.data)});case 2:case"end":return e.stop()}},e,t)}))()},getGameRoles:function(t){var e=this;return(0,n.default)(s.default.mark(function a(){var n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.ArrayToUrl({game_id:t}),a.next=3,o.default.get("/api/game_roles?"+n).then(function(t){e.$set(e,"game_roles",t.data)});case 3:case"end":return a.stop()}},a,e)}))()},update:function(){var t=this;return(0,n.default)(s.default.mark(function e(){var a,n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.post("/api/users");case 2:a=e.sent,n=a.data,t.$store.dispatch("auth/updateUser",{user:n.data});case 5:case"end":return e.stop()}},e,t)}))()},selectGame:function(){var t=this;return(0,n.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getGameRoles(t.form.game_id);case 2:case"end":return e.stop()}},e,t)}))()},createTeam:function(){var t=this;return(0,n.default)(s.default.mark(function e(){var a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.form.post("/api/teams"),a.data,t.user.team_id=t.team.id,t.$store.dispatch("auth/updateUser",{user:t.user});case 3:case"end":return e.stop()}},e,t)}))()},getUsersFromSchool:function(t){var e=this;return(0,n.default)(s.default.mark(function a(){var n;return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.ArrayToUrl({"id-not":e.user.id}),a.next=3,o.default.get("/api/institutions/"+t+"/users?"+n);case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}},a,e)}))()},getUserSchools:function(){var t=this;return(0,n.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.default.get("/api/institution_user?user_id="+t.user.id).then(function(e){e.data.length>0&&t.$set(t,"institution_user",e.data[0])});case 2:if(null===t.institution_user){e.next=6;break}return e.next=5,t.getUsersFromSchool(t.institution_user.institution_id);case 5:e.sent;case 6:case"end":return e.stop()}},e,t)}))()},getTeamTitle:function(){var t=this;return(0,n.default)(s.default.mark(function e(){var a,n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.default.get("/api/users/"+t.user.id+"/getTeamTitle");case 2:a=e.sent,n=a.data,console.log(n.data);case 5:case"end":return e.stop()}},e,t)}))()},getUserTeam:function(){var t=this;o.default.get("/api/users/"+this.user.id+"/team").then(function(e){t.$set(t,"team",e.data),t.$set(t.user,"team",e.data)})},getInvitations:function(){var t=this,e=this.ArrayToUrl({user_id:this.user.id,status:0,"sender_id-not":this.user.id,_with:"user,team"});o.default.get("/api/team_user?"+e).then(function(e){t.$set(t,"invitations",e.data)})},answerToInvite:function(t,e){var a=this,s=(t=t,this.user.id),n=e.target.value;this.user.free_player&&null!==this.user.team_id?(0,u.default)({title:"Are you sure you want to connect the team?",text:"Your current team will be deleted and all invitations to your team to!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, accept invitation!"}).then(function(e){var a=this;e.value&&o.default.put("/api/teams/"+t+"/users/"+s,{status:n}).then(function(t){a.inviteAnswerSuccess=!0}).catch(function(t){(0,u.default)({type:"error",title:"Error!",html:t.response.data.error})})}):o.default.put("/api/teams/"+t+"/users/"+s,{status:n}).then(function(t){a.inviteAnswerSuccess=!0}).catch(function(t){(0,u.default)({type:"error",title:"Error!",html:t.response.data.error})})},leaveTeam:function(t){event.preventDefault();var e=this.user.id;(0,u.default)({title:"Are you sure you want to leave the team?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, leave it!"}).then(function(a){a.value&&o.default.put("/api/teams/"+t+"/users/"+e,{status:2}).then(function(t){(0,u.default)("Deleted!","You has been excluded from the team.","success")})})}}}},ZZTC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=l(a("fZjL")),n=l(a("Dd8w")),r=l(a("pFYg")),i=l(a("Xxa5")),o=l(a("exGp"));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===t?"undefined":(0,r.default)(t))&&(a=t,t=""),a=(0,n.default)({url:t,title:e,width:600,height:720},a);var i=void 0!==window.screenLeft?window.screenLeft:window.screen.left,o=void 0!==window.screenTop?window.screenTop:window.screen.top,l=window.innerWidth||document.documentElement.clientWidth||window.screen.width,c=window.innerHeight||document.documentElement.clientHeight||window.screen.height;a.left=l/2-a.width/2+i,a.top=c/2-a.height/2+o;var u=(0,s.default)(a).reduce(function(t,e){return t.push(e+"="+a[e]),t},[]).join(","),d=window.open(t,e,u);return window.focus&&d.focus(),d}e.default={name:"LoginWithSocial",props:{provider:{type:String,default:null},ic:{type:String,default:null},text:{type:String,default:null}},computed:{url:function(){return"/api/social/"+(void 0).provider}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t=this;return(0,o.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/fetchOauthUrl",{provider:t.provider});case 2:c(e.sent,t.$t("login"));case 4:case"end":return e.stop()}},e,t)}))()},onMessage:function(t){t.origin!==window.origin&&t.origin!==window.config.apiHost||!t.data.token||(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}}},dqi5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("QVM2"),n=a.n(s);for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);var i=a("k/Zk"),o=a("VU/8")(n.a,i.a,!1,null,null,null);e.default=o.exports},eOa7:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:"nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-info p-9 ml-5 nk-social-"+this.ic,attrs:{type:"button"},on:{click:this.login}},[this._v("\n    "+this._s(this.text)+"\n    "),e("fa",{attrs:{icon:["fab",this.ic]}})],1)},staticRenderFns:[]};e.a=s},"k/Zk":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card",{attrs:{title:t.$t("team")}},[a("div",{staticClass:"nk-accordion",attrs:{id:"accordion-1",role:"tablist","aria-multiselectable":"false"}},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading",attrs:{role:"tab",id:"accordion-1-1-heading"}},[a("a",{attrs:{"data-toggle":"collapse","data-parent":"#accordion-1",href:"#accordion-1-1","aria-expanded":"true","aria-controls":"accordion-1-1"}},[t._v("\n                    "+t._s(t.$t("game_and_role"))+" "),a("span",{staticClass:"panel-heading-arrow fa fa-angle-down"})])]),t._v(" "),a("div",{staticClass:"panel-collapse collapse show",attrs:{id:"accordion-1-1",role:"tabpanel","aria-labelledby":"accordion-1-1-heading"}},[a("form",{on:{submit:function(e){e.preventDefault(),t.update(e)},keydown:function(e){t.form.onKeydown(e)}}},[a("alert-success",{attrs:{form:t.form,message:t.$t("info_updated")}}),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("game")))]),t._v(" "),a("div",{staticClass:"col-md-7"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.game_id,expression:"form.game_id"}],staticClass:"form-control",attrs:{name:"game_id"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.form,"game_id",e.target.multiple?a:a[0])},t.selectGame]}},t._l(t.games,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n                                    "+t._s(e.title)+"\n                                ")])})),t._v(" "),a("has-error",{attrs:{form:t.form,field:"game_id"}})],1)]),t._v(" "),null!=t.form.game_id?a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("game_roles")))]),t._v(" "),a("div",{staticClass:"col-md-7",staticStyle:{"padding-top":"8px"}},[t._l(t.game_roles,function(e){return null!=t.game_roles&&t.game_roles.length>0?a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.game_roles,expression:"form.game_roles"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.form.game_roles)?t._i(t.form.game_roles,e.id)>-1:t.form.game_roles},on:{change:function(a){var s=t.form.game_roles,n=a.target,r=!!n.checked;if(Array.isArray(s)){var i=e.id,o=t._i(s,i);n.checked?o<0&&(t.form.game_roles=s.concat([i])):o>-1&&(t.form.game_roles=s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.form,"game_roles",r)}}}),t._v(" "),a("label",{staticClass:"form-check-label"},[t._v(t._s(e.title))])]):t._e()}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"game_roles"}})],2)]):t._e(),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("nickname")))]),t._v(" "),a("div",{staticClass:"col-md-7"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nickname,expression:"form.nickname"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("nickname")},attrs:{type:"text",name:"nickname"},domProps:{value:t.form.nickname},on:{input:function(e){e.target.composing||t.$set(t.form,"nickname",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"nickname"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-md-9 ml-md-auto"},[a("v-button",{attrs:{loading:t.form.busy}},[t._v(t._s(t.$t("update")))]),t._v(" "),a("login-with-social",{attrs:{provider:"steam",ic:"steam",text:t.$t("connect_account")}})],1)])],1),t._v(" "),a("div",{staticClass:"nk-gap"})])]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading",attrs:{role:"tab",id:"accordion-1-2-heading"}},[a("a",{staticClass:"collapsed",attrs:{"data-toggle":"collapse","data-parent":"#accordion-1",href:"#accordion-1-2","aria-expanded":"false","aria-controls":"accordion-1-2"}},[t._v("\n                    "+t._s(t.$t("create_edit_team"))+" "),a("span",{staticClass:"panel-heading-arrow fa fa-angle-down"})])]),t._v(" "),a("div",{staticClass:"panel-collapse collapse",attrs:{id:"accordion-1-2",role:"tabpanel","aria-labelledby":"accordion-1-2-heading"}},[null!==t.team&&t.user.team_id>0?a("table",{staticClass:"nk-table mb-5"},[a("tbody",[a("tr",[a("th",[t._v("Logo")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Need players")]),t._v(" "),a("th",[t._v("Balance, "),a("i",{staticClass:"fa fa-btc",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("th",{staticClass:"text-nowrap"},[t._v("Action")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:{name:"team.detail",params:{slug:t.team.slug}}}},[a("img",{staticClass:"img-responsive team-image",attrs:{src:t.getImageLink(t.team.image),alt:t.team.title}})])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"team.detail",params:{slug:t.team.slug}}}},[t._v("\n                                    "+t._s(t.team.title)+"\n                                ")])],1),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.team.quantity))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.team.balance))]),t._v(" "),a("td",{staticClass:"text-nowrap text-center"},[t.team.capt_id==t.user.id?a("router-link",{staticClass:"mr-25",attrs:{to:{name:"teams.edit",params:{id:t.team.id}}}},[a("i",{staticClass:"fa fa-pencil text-inverse mr-10"})]):t._e(),t._v(" "),a("a",{attrs:{href:"#",title:"Leave the team"},on:{click:function(e){t.leaveTeam(t.team.id,e)}}},[a("i",{staticClass:"fa fa-trash text-inverse mr-10"})])],1)])])]):null===t.institution_user?a("div",[a("p",[t._v(t._s(t.$t("need_institution_connection")))])]):t._e(),t._v(" "),a("form",{attrs:{else:""},on:{submit:function(e){e.preventDefault(),t.createTeam(e)},keydown:function(e){t.form.onKeydown(e)}}},[a("alert-success",{attrs:{form:t.formTeam,message:t.$t("info_updated")}}),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("title")))]),t._v(" "),a("div",{staticClass:"col-md-7"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formTeam.title,expression:"formTeam.title"}],staticClass:"form-control",class:{"is-invalid":t.formTeam.errors.has("title")},attrs:{disabled:"",type:"text",name:"title"},domProps:{value:t.formTeam.title},on:{input:function(e){e.target.composing||t.$set(t.formTeam,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formTeam.title,expression:"formTeam.title"}],staticClass:"form-control",class:{"is-invalid":t.formTeam.errors.has("slug")},attrs:{type:"hidden",name:"slug"},domProps:{value:t.formTeam.title},on:{input:function(e){e.target.composing||t.$set(t.formTeam,"title",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.formTeam,field:"title"}}),t._v(" "),a("has-error",{attrs:{form:t.formTeam,field:"slug"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[a("v-button",{attrs:{loading:t.form.busy}},[t._v("\n                                "+t._s(t.$t("save"))+"\n                            ")])],1)])],1),t._v(" "),a("div",{staticClass:"nk-gap"})])]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading",attrs:{role:"tab",id:"accordion-1-4-heading"}},[a("a",{staticClass:"collapsed",attrs:{"data-toggle":"collapse","data-parent":"#accordion-1",href:"#accordion-1-4","aria-expanded":"false","aria-controls":"accordion-1-4"}},[t._v("\n                    "+t._s(t.$t("invitations_to_team"))+" "),a("span",{staticClass:"panel-heading-arrow fa fa-angle-down"})])]),t._v(" "),a("div",{staticClass:"panel-collapse collapse",attrs:{id:"accordion-1-4",role:"tabpanel","aria-labelledby":"accordion-1-4-heading"}},[void 0!==t.invitations&&t.invitations.length?a("div",[t.inviteAnswerSuccess?a("div",{staticClass:"alert alert-success alert-dismissable mt-20"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-hidden":"true"}},[t._v("×")]),t._v(" "),a("p",[t._v("Your response to the invitation has been saved.")])]):t._e(),t._v(" "),a("table",{staticClass:"nk-table"},[a("tbody",[a("tr",[a("th",[t._v("Logo")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Need players")]),t._v(" "),a("th",[t._v("Balance, "),a("i",{staticClass:"fa fa-btc",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("th",{staticClass:"text-nowrap"},[t._v("Action")])]),t._v(" "),t._l(t.invitations,function(e){return a("tr",[a("td",[a("router-link",{attrs:{to:{name:"team.detail",params:{slug:e.team.slug}}}},[a("img",{staticClass:"img-responsive team-image",attrs:{src:t.getImageLink(e.team.image),alt:e.team.title}})])],1),t._v(" "),a("td",[a("router-link",{attrs:{to:{name:"team.detail",params:{slug:t.team.slug}}}},[t._v("\n                                    "+t._s(e.team.title)+"\n                                ")])],1),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.team.quantity))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.team.balance))]),t._v(" "),a("td",{staticClass:"text-nowrap text-center"},[a("select",{staticClass:"form-control",attrs:{"data-style":"form-control btn-default btn-outline"},on:{change:function(a){t.answerToInvite(e.team.id,a)}}},t._l(t.statuses,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n                                        "+t._s(e.title)+"\n                                    ")])}))])])})],2)])]):a("div",{staticClass:"cus-sat-stat weight-500 txt-warning mt-5"},[a("span",{staticClass:"counter-anim"},[t._v("You haven't invitations yet!")])]),t._v(" "),a("div",{staticClass:"nk-gap"})])]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading",attrs:{role:"tab",id:"accordion-1-3-heading"}},[a("a",{staticClass:"collapsed",attrs:{"data-toggle":"collapse","data-parent":"#accordion-1",href:"#accordion-1-3","aria-expanded":"false","aria-controls":"accordion-1-3"}},[t._v("\n                    "+t._s(t.$t("connect_to_team"))+" "),a("span",{staticClass:"panel-heading-arrow fa fa-angle-down"})])]),t._v(" "),a("div",{staticClass:"panel-collapse collapse",attrs:{id:"accordion-1-3",role:"tabpanel","aria-labelledby":"accordion-1-3-heading"}},[a("p",[t._v("I have related the substance of several conversations I had with my master during the greatest part of the time I had the, for brevity sake, omitted much moredown.")])])])])])},staticRenderFns:[]};e.a=s}});
//# sourceMappingURL=3.6643e8170785e6b39c84.js.map