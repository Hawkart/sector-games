webpackJsonp([21],{"2o2+":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=l(i("Dd8w")),e=i("NYxO"),n=l(i("mtWM")),r=(l(i("e7x4")),i("HNcv")),o=l(i("I3G/"));function l(t){return t&&t.__esModule?t:{default:t}}a.default={metaInfo:function(){return{title:this.$t("players")}},computed:(0,s.default)({},(0,e.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),data:function(){return{fights:[],status_list:[{id:"",title:""},{id:0,title:this.$t("old")},{id:1,title:this.$t("online")},{id:2,title:this.$t("upcoming")}],status_id:null,pagination:[]}},mounted:function(){(0,r.loadMessages)(this.locale),this.moment.locale(this.locale),this.getFights();var t=this;o.default.nextTick(function(){$("#status_list").select2().on("change",function(a){t.status_id=$(a.currentTarget).find("option:selected").val()})})},methods:{getFights:function(){var t=this,a={page:1,_limit:12,_sort:"-start_at",_with:"invitations.team,invitations.team.institution,invitations.team.institution.location,winner,game"};if(this.authenticated){var i="/api/teams/"+this.user.team_id+"/fights";"referee"==this.user.type&&(a.judge_id=this.user.id,i="/api/fights")}else i="/api/fights";0==this.status_id?a["winner_id-gt"]=0:1==this.status_id?a["start_at-st"]=this.moment.utc().format():2==this.status_id&&(a["start_at-gt"]=this.moment.utc().format());var s=this.UrlParamsMerge(a);n.default.get(i+"?"+s).then(function(a){var i=a.data.data,s=t;i.forEach(function(t){t.start_at=s.dateConvertUTC(t.start_at,-1)}),t.$set(t,"fights",i),delete a.data.data,t.pagination=a.data,$("#status_list").select2().on("change",function(t){s.status_id=$(t.currentTarget).find("option:selected").val()})})},checkUpcoming:function(t){var a=new Date(t),i=new Date;return a.getTime()-i.getTime()>0}},watch:{"$route.query":function(t,a){this.getFights()},status_id:function(t,a){this.getFights()}}}},PvQd:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("2o2+"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(a,t,function(){return s[t]})}(n);var r=i("XGx6"),o=i("VU/8")(e.a,r.a,!1,null,null,null);a.default=o.exports},XGx6:function(t,a,i){"use strict";var s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("card",{attrs:{title:t.$t("matches")}},[[i("div",{staticClass:"row mt-20"},[i("div",{staticClass:"col-md-12"},[i("card",[i("div",{staticClass:"form-wrap"},[i("form",{attrs:{autocomplete:"off",id:"filter-form"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-3"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.status_id,expression:"status_id"}],staticClass:"form-control",attrs:{name:"status_id","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.status_id=a.target.multiple?i:i[0]}}},t._l(t.status_list,function(a){return i("option",{domProps:{value:a.id}},[t._v("\n                                            "+t._s(a.title)+"\n                                        ")])}))])])])])])],1)]),t._v(" "),i("div",{staticClass:"nk-gap-2"})],t._v(" "),null!=t.fights&&t.fights.length>0?i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t._l(t.fights,function(a){return i("div",{staticClass:"nk-match"},[i("div",{staticClass:"nk-match-team-left"},[i("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[0].team.id}}}},[i("span",{staticClass:"nk-match-team-logo"},[i("img",{staticClass:"w-64px mr-10",attrs:{src:t.getImageLink(a.invitations[0].team.image,"avatar_team")}})]),t._v(" "),i("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[0].team.institution.title)+", "+t._s(a.invitations[0].team.institution.location.title)+","),i("br"),t._v("\n                            "+t._s(a.invitations[0].team.title)+"\n                        ")])])],1),t._v(" "),i("div",{staticClass:"nk-match-status"},[i("router-link",{attrs:{to:{name:"match",params:{id:a.id}}}},[i("span",{staticClass:"nk-match-status-vs"},[t._v("VS")]),t._v(" "),i("span",{staticClass:"nk-match-status-date"},[t._v(t._s(t.moment(a.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, HH:mm")))]),t._v(" "),i("span",{staticClass:"nk-match-score"},[t.checkUpcoming(a.start_at)?[t._v(t._s(t.$t("upcoming")))]:a.winner_id>0?[parseInt(a.result[0])>parseInt(a.result[1])&&a.invitations[0].team.id==a.winner_id?[t._v("\n                                    "+t._s(a.result[0])+" : "+t._s(a.result[1])+"\n                                ")]:parseInt(a.result[1])>parseInt(a.result[0])&&a.invitations[1].team.id==a.winner_id?[t._v("\n                                    "+t._s(a.result[0])+" : "+t._s(a.result[1])+"\n                                ")]:[t._v("\n                                    "+t._s(a.result[1])+" : "+t._s(a.result[0])+"\n                                ")]]:[t._v(t._s(t.$t("online")))]],2)])],1),t._v(" "),i("div",{staticClass:"nk-match-team-right"},[i("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[1].team.id}}}},[i("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[1].team.institution.title)+", "+t._s(a.invitations[1].team.institution.location.title)+","),i("br"),t._v("\n                            "+t._s(a.invitations[1].team.title)+"\n                        ")]),t._v(" "),i("span",{staticClass:"nk-match-team-logo"},[i("img",{staticClass:"w-64px ml-10",attrs:{src:t.getImageLink(a.invitations[1].team.image,"avatar_team")}})])])],1)])}),t._v(" "),i("pagination",{attrs:{pagination:t.pagination}})],2)]):t._e()],2)},staticRenderFns:[]};a.a=s}});
//# sourceMappingURL=21.a5b5fcf18b4f97ddf9fa.js.map