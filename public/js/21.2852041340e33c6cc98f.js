webpackJsonp([21],{"13OU":function(t,a,i){"use strict";var s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return null!=t.fight?i("card",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[i("div",{staticClass:"nk-match"},[i("div",{staticClass:"nk-match-team-left"},[i("router-link",{attrs:{to:{name:"team",params:{id:t.fight.invitations[0].team.id}}}},[i("span",{staticClass:"nk-match-team-logo"},[i("img",{staticClass:"w-50px mr-10",attrs:{src:t.getImageLink(t.fight.invitations[0].team.image,"avatar_team")}})]),t._v(" "),i("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(t.fight.invitations[0].team.title)+"\n                        ")])])],1),t._v(" "),i("div",{staticClass:"nk-match-status"},[i("router-link",{attrs:{to:{name:"match",params:{id:t.fight.id}}}},[i("span",{staticClass:"nk-match-status-vs"},[t._v("VS")]),t._v(" "),i("span",{staticClass:"nk-match-status-date"},[t._v(t._s(t.moment(t.fight.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, HH:mm")))]),t._v(" "),i("span",{staticClass:"nk-match-score"},[t.checkUpcoming(t.fight.start_at)?[t._v(t._s(t.$t("upcoming")))]:t.fight.winner_id>0?[t._v(t._s(t.fight.winner.title))]:[t._v(t._s(t.$t("online")))]],2)])],1),t._v(" "),i("div",{staticClass:"nk-match-team-right"},[i("router-link",{attrs:{to:{name:"team",params:{id:t.fight.invitations[1].team.id}}}},[i("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(t.fight.invitations[1].team.title)+"\n                        ")]),t._v(" "),i("span",{staticClass:"nk-match-team-logo"},[i("img",{staticClass:"w-50px ml-10",attrs:{src:t.getImageLink(t.fight.invitations[1].team.image,"avatar_team")}})])])],1)])])]),t._v(" "),i("div",{staticClass:"row mt-20"},[i("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-6"},[i("div",{staticClass:"responsive-embed responsive-embed-16x9"},[i("iframe",{attrs:{src:"https://player.twitch.tv/?channel=eulcs",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}})])]),t._v(" "),i("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-6"},[i("iframe",{attrs:{src:"https://player.twitch.tv/?channel=eulcs",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}})])]),t._v(" "),i("div",{staticClass:"row mt-20"},[i("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-6"},[i("div",{staticClass:"responsive-embed responsive-embed-16x9"},[null!=t.fight.invitations[0].steam_link?i("iframe",{attrs:{src:t.fight.invitations[0].steam_link,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}}):t._e()])]),t._v(" "),i("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-6"},[i("div",{staticClass:"responsive-embed responsive-embed-16x9"},[null!=t.fight.invitations[1].steam_link?i("iframe",{attrs:{src:t.fight.invitations[1].steam_link,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}}):t._e()])])]),t._v(" "),!t.authenticated||2==t.fight.status||3==t.fight.status||t.fight.invitations[0].team.capt_id!=t.user.id&&t.fight.invitations[1].team.capt_id!=t.user.id?t._e():i("div",{staticClass:"row mt-20"},[i("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[i("form",{on:{submit:function(a){a.preventDefault(),t.matchExSave(a)},keydown:function(a){t.form.onKeydown(a)}}},[i("alert-error",{attrs:{form:t.form}}),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("match_extern_id")))]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.match_extern_id,expression:"form.match_extern_id"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("match_extern_id")},attrs:{type:"text",name:"match_extern_id"},domProps:{value:t.form.match_extern_id},on:{input:function(a){a.target.composing||t.$set(t.form,"match_extern_id",a.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"match_extern_id"}})],1)]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("twitch_link")))]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.twitch_link,expression:"form.twitch_link"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("twitch_link")},attrs:{type:"text",name:"twitch_link"},domProps:{value:t.form.twitch_link},on:{input:function(a){a.target.composing||t.$set(t.form,"twitch_link",a.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"twitch_link"}})],1)]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[i("v-button",{attrs:{loading:t.form.busy}},[t._v("\n                            "+t._s(t.$t("save"))+"\n                        ")])],1)])],1)])]),t._v(" "),i("div",{staticClass:"row mt-20"},[i("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[null!=t.fight.judge?[i("label",[t._v(t._s(t.$t("judge")))]),t._v(": "+t._s(t.fight.judge.name)),i("br"),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.fight.judge.description)}})]:t._e(),t._v(" "),null!=t.fight.commentator?[i("label",[t._v(t._s(t.$t("commentator")))]),t._v(": "+t._s(t.fight.commentator.name)),i("br"),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.fight.commentator.description)}})]:t._e()],2)])]):t._e()},staticRenderFns:[]};a.a=s},"Aa2/":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=l(i("Dd8w")),e=i("NYxO"),n=l(i("mtWM")),r=(l(i("e7x4")),i("HNcv")),o=l(i("yKuP"));function l(t){return t&&t.__esModule?t:{default:t}}a.default={metaInfo:function(){return{title:this.$t("players")}},computed:(0,s.default)({},(0,e.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),data:function(){return{fight:[],form:new o.default({match_extern_id:"",twitch_link:""})}},mounted:function(){(0,r.loadMessages)(this.locale),this.moment.locale(this.locale),this.getFight()},methods:{getFight:function(){var t=this,a=this.ArrayToUrl({_with:"invitations.team,invitations.team.users,winner,judge,commentator"});n.default.get("/api/fights/"+this.$route.params.id+"?"+a).then(function(a){var i=a.data;i.start_at=t.dateConvertUTC(i.start_at,-1),t.$set(t,"fight",i)})},checkUpcoming:function(t){var a=new Date(t),i=new Date;return a.getTime()-i.getTime()>0},matchExSave:function(t){t.preventDefault(),n.default.put("/api/fights/"+this.fight.id+"/teams/"+this.user.team_id,{extern_match_id:this.form.extern_match_id,twitch_link:this.form.twitch_link}).then(function(t){})}},watch:{"$route.query":function(t,a){this.getFights()}}}},upqO:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("Aa2/"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(a,t,function(){return s[t]})}(n);var r=i("13OU"),o=i("VU/8")(e.a,r.a,!1,null,null,null);a.default=o.exports}});
//# sourceMappingURL=21.2852041340e33c6cc98f.js.map