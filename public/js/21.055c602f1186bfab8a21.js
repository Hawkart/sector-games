webpackJsonp([21],{"Aa2/":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=l(e("Dd8w")),a=e("NYxO"),n=l(e("mtWM")),r=(l(e("e7x4")),e("HNcv")),o=l(e("yKuP"));function l(t){return t&&t.__esModule?t:{default:t}}i.default={metaInfo:function(){return{title:this.$t("players")}},computed:(0,s.default)({},(0,a.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),data:function(){return{fight:[],form:new o.default({extern_match_id:"",twitch_link:""}),formResult:new o.default({match_result:""}),result_1:"",result_2:"",winner_id:""}},mounted:function(){(0,r.loadMessages)(this.locale),this.moment.locale(this.locale),this.getFight()},methods:{getFight:function(){var t=this,i=this.ArrayToUrl({_with:"invitations.team,invitations.team.institution,invitations.team.institution.location,winner,judge,commentator"});n.default.get("/api/fights/"+this.$route.params.id+"?"+i).then(function(i){var e=i.data;if(e.start_at=t.dateConvertUTC(e.start_at,-1),t.$set(t,"fight",e),t.authenticated){var s=t;t.fight.invitations.forEach(function(t){t.team.capt_id==s.user.id&&(s.form.extern_match_id=t.extern_match_id,s.form.twitch_link=t.twitch_link,null!=t.match_result&&(s.formResult.match_result=t.match_result,s.result_1=t.match_result.result_1,s.result_2=t.match_result.result_2,s.winner_id=t.match_result.winner_id))})}})},checkUpcoming:function(t){var i=new Date(t),e=new Date;return i.getTime()-e.getTime()>0},matchExSave:function(){var t=this;this.form.put("/api/fights/"+this.fight.id+"/teams/"+this.user.team_id,{extern_match_id:this.form.extern_match_id,twitch_link:this.form.twitch_link}).then(function(i){var e=t;t.fight.invitations.map(function(t){t.team.capt_id==e.user.id&&(t.twitch_link=e.form.twitch_link)})})},saveResult:function(){this.formResult.match_result={result_1:this.result_1,result_2:this.result_2,winner_id:this.winner_id},this.formResult.put("/api/fights/"+this.fight.id+"/teams/"+this.user.team_id)}},watch:{"$route.query":function(t,i){this.getFights()}}}},rdLN:function(t,i,e){"use strict";var s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return null!=t.fight?e("card",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[e("div",{staticClass:"nk-match"},[e("div",{staticClass:"nk-match-team-left"},[e("router-link",{attrs:{to:{name:"team",params:{id:t.fight.invitations[0].team.id}}}},[e("span",{staticClass:"nk-match-team-logo"},[e("img",{staticClass:"w-84px mr-10",attrs:{src:t.getImageLink(t.fight.invitations[0].team.image,"avatar_team")}})]),t._v(" "),e("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(t.fight.invitations[0].team.institution.title)+", "+t._s(t.fight.invitations[0].team.institution.location.title)+",\n                            "+t._s(t.fight.invitations[0].team.title)+"\n                        ")])])],1),t._v(" "),e("div",{staticClass:"nk-match-status"},[e("router-link",{attrs:{to:{name:"match",params:{id:t.fight.id}}}},[e("span",{staticClass:"nk-match-status-vs"},[t._v("VS")]),t._v(" "),e("span",{staticClass:"nk-match-status-date"},[t._v(t._s(t.moment(t.fight.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, HH:mm")))]),t._v(" "),e("span",{staticClass:"nk-match-score"},[t.checkUpcoming(t.fight.start_at)?[t._v(t._s(t.$t("upcoming")))]:t.fight.winner_id>0?[t._v(t._s(t.fight.winner.title))]:[t._v(t._s(t.$t("online")))]],2)])],1),t._v(" "),e("div",{staticClass:"nk-match-team-right"},[e("router-link",{attrs:{to:{name:"team",params:{id:t.fight.invitations[1].team.id}}}},[e("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(t.fight.invitations[1].team.institution.title)+", "+t._s(t.fight.invitations[1].team.institution.location.title)+",\n                            "+t._s(t.fight.invitations[1].team.title)+"\n                        ")]),t._v(" "),e("span",{staticClass:"nk-match-team-logo"},[e("img",{staticClass:"w-84px ml-10",attrs:{src:t.getImageLink(t.fight.invitations[1].team.image,"avatar_team")}})])])],1)])])]),t._v(" "),e("div",{staticClass:"row mt-20"},[null!=t.fight.invitations[0].twitch_link?e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-6"},[e("div",{staticClass:"responsive-embed responsive-embed-16x9"},[e("iframe",{attrs:{src:t.fight.invitations[0].twitch_link,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}})])]):t._e(),t._v(" "),null!=t.fight.invitations[1].twitch_link?e("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 col-xs-6"},[e("div",{staticClass:"responsive-embed responsive-embed-16x9"},[e("iframe",{attrs:{src:t.fight.invitations[1].twitch_link,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}})])]):t._e()]),t._v(" "),!t.authenticated||2==t.fight.status||3==t.fight.status||t.fight.invitations[0].team.capt_id!=t.user.id&&t.fight.invitations[1].team.capt_id!=t.user.id?t._e():e("div",{staticClass:"row mt-20"},[e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[e("form",{on:{submit:function(i){i.preventDefault(),t.matchExSave(i)},keydown:function(i){t.form.onKeydown(i)}}},[e("alert-success",{attrs:{form:t.form,message:t.$t("info_updated")}}),t._v(" "),e("alert-error",{attrs:{form:t.form}}),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("match_extern_id")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.extern_match_id,expression:"form.extern_match_id"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("extern_match_id")},attrs:{type:"text",name:"extern_match_id"},domProps:{value:t.form.extern_match_id},on:{input:function(i){i.target.composing||t.$set(t.form,"extern_match_id",i.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"match_extern_id"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("twitch_link")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.twitch_link,expression:"form.twitch_link"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("twitch_link")},attrs:{placeholder:"https://player.twitch.tv/?channel=eulcs",type:"text",name:"twitch_link"},domProps:{value:t.form.twitch_link},on:{input:function(i){i.target.composing||t.$set(t.form,"twitch_link",i.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"twitch_link"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[e("v-button",{attrs:{loading:t.form.busy}},[t._v("\n                            "+t._s(t.$t("save"))+"\n                        ")])],1)])],1)])]),t._v(" "),!t.authenticated||2==t.fight.status||3==t.fight.status||t.fight.invitations[0].team.capt_id!=t.user.id&&t.fight.invitations[1].team.capt_id!=t.user.id?t._e():e("div",{staticClass:"row mt-20"},[e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[e("form",{on:{submit:function(i){i.preventDefault(),t.saveResult(i)},keydown:function(i){t.formResult.onKeydown(i)}}},[e("alert-success",{attrs:{form:t.formResult,message:t.$t("info_updated")}}),t._v(" "),e("alert-error",{attrs:{form:t.formResult}}),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("match_result")))]),t._v(" "),e("div",{staticClass:"col-md-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.result_1,expression:"result_1"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.result_1},on:{input:function(i){i.target.composing||(t.result_1=i.target.value)}}})]),t._v(" "),e("label",{staticClass:"col-md-1 col-form-label text-center"},[t._v("\n                        :\n                    ")]),t._v(" "),e("div",{staticClass:"col-md-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.result_2,expression:"result_2"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.result_2},on:{input:function(i){i.target.composing||(t.result_2=i.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("winner")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.winner_id,expression:"winner_id"}],staticClass:"form-control",on:{change:function(i){var e=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.winner_id=i.target.multiple?e:e[0]}}},t._l(t.fight.invitations,function(i){return e("option",{domProps:{value:i.team.id}},[t._v("\n                                "+t._s(i.team.title)+"\n                            ")])}))])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[e("v-button",{attrs:{loading:t.form.busy}},[t._v("\n                            "+t._s(t.$t("save"))+"\n                        ")])],1)])],1)])]),t._v(" "),e("div",{staticClass:"row mt-20"},[e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[null!=t.fight.judge?[e("label",[t._v(t._s(t.$t("judge")))]),t._v(": "+t._s(t.fight.judge.name)),e("br"),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.fight.judge.description)}})]:t._e(),t._v(" "),null!=t.fight.commentator?[e("label",[t._v(t._s(t.$t("commentator")))]),t._v(": "+t._s(t.fight.commentator.name)),e("br"),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.fight.commentator.description)}})]:t._e()],2)])]):t._e()},staticRenderFns:[]};i.a=s},upqO:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("Aa2/"),a=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);var r=e("rdLN"),o=e("VU/8")(a.a,r.a,!1,null,null,null);i.default=o.exports}});
//# sourceMappingURL=21.055c602f1186bfab8a21.js.map