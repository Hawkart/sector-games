webpackJsonp([24],{"2o2+":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=l(s("Dd8w")),e=s("NYxO"),n=l(s("mtWM")),r=(l(s("e7x4")),s("HNcv")),o=l(s("I3G/"));function l(t){return t&&t.__esModule?t:{default:t}}a.default={metaInfo:function(){return{title:this.$t("players")}},computed:(0,i.default)({},(0,e.mapGetters)({user:"auth/user",authenticated:"auth/check",locale:"lang/locale"})),data:function(){return{fights:[],status_list:[{id:0,title:"Все"},{id:1,title:"Прошедшие"},{id:2,title:"Онлайн"},{id:3,title:"Предстоящие"}],status_id:null,pagination:[]}},mounted:function(){(0,r.loadMessages)(this.locale),this.moment.locale(this.locale),this.getFights();var t=this;o.default.nextTick(function(){$("#status_list").select2({placeholder:"Статус матча"}).on("change",function(a){t.status_id=$(a.currentTarget).find("option:selected").val()})})},methods:{getFights:function(){var t=this,a={page:1,_limit:12,_sort:"-start_at",_with:"invitations.team,invitations.team.institution,invitations.team.institution.location,winner,game"};if(this.authenticated&&1!=this.user.role_id){var s="/api/teams/"+this.user.team_id+"/fights";"referee"==this.user.type&&(a.judge_id=this.user.id,s="/api/fights")}else s="/api/fights";1==this.status_id?a["winner_id-gt"]=0:2==this.status_id?(a.winner_id=null,a["start_at-st"]=this.moment.utc().format()):3==this.status_id&&(a["start_at-gt"]=this.moment.utc().format());var i=this.UrlParamsMerge(a);n.default.get(s+"?"+i).then(function(a){var s=a.data.data,i=t;s.forEach(function(t){t.start_at=i.dateConvertUTC(t.start_at,-1)}),t.$set(t,"fights",s),delete a.data.data,t.pagination=a.data})},checkUpcoming:function(t){var a=new Date(t),s=new Date;return a.getTime()-s.getTime()>0}},watch:{"$route.query":function(t,a){this.getFights()},status_id:function(t,a){this.getFights()}}}},PvQd:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("2o2+"),e=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(a,t,function(){return i[t]})}(n);var r=s("q3M/"),o=s("VU/8")(e.a,r.a,!1,null,null,null);a.default=o.exports},"q3M/":function(t,a,s){"use strict";var i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("card",{attrs:{title:t.$t("matches")}},[[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("card",[s("div",{staticClass:"form-wrap"},[s("form",{attrs:{autocomplete:"off",id:"filter-form"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.status_id,expression:"status_id"}],staticClass:"form-control",attrs:{name:"status_id","data-style":"form-control btn-default btn-outline",id:"status_list"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.status_id=a.target.multiple?s:s[0]}}},t._l(t.status_list,function(a){return s("option",{domProps:{value:a.id}},[t._v("\n                                            "+t._s(a.title)+"\n                                        ")])}),0)])])])])])],1)]),t._v(" "),s("div",{staticClass:"nk-gap-2"})],t._v(" "),null!=t.fights&&t.fights.length>0?s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t._l(t.fights,function(a){return s("div",{staticClass:"nk-match"},[s("div",{staticClass:"nk-match-team-left"},[s("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[0].team.id}}}},[s("span",{staticClass:"nk-match-team-logo"},[s("img",{staticClass:"w-64px mr-10",attrs:{src:t.getImageLink(a.invitations[0].team.image,"avatar_team")}})]),t._v(" "),s("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[0].team.institution.title)+", "+t._s(a.invitations[0].team.institution.location.title)+","),s("br"),t._v("\n                            "+t._s(a.invitations[0].team.title)+"\n                        ")])])],1),t._v(" "),s("div",{staticClass:"nk-match-status"},[s("router-link",{attrs:{to:{name:"match",params:{id:a.id}}}},[s("span",{staticClass:"nk-match-status-vs"},[t._v("VS (bo3)")]),t._v(" "),s("span",{staticClass:"nk-match-status-date"},[t._v(t._s(t.moment.utc(a.start_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do, HH:mm"))+" МСК")]),t._v(" "),s("span",{staticClass:"nk-match-score"},[t.checkUpcoming(a.start_at)?[t._v(t._s(t.$t("upcoming")))]:a.winner_id>0?[parseInt(a.result[0])>parseInt(a.result[1])&&a.invitations[0].team.id==a.winner_id?[t._v("\n                                    "+t._s(a.result[0])+" : "+t._s(a.result[1])+"\n                                ")]:parseInt(a.result[1])>parseInt(a.result[0])&&a.invitations[1].team.id==a.winner_id?[t._v("\n                                    "+t._s(a.result[0])+" : "+t._s(a.result[1])+"\n                                ")]:[t._v("\n                                    "+t._s(a.result[1])+" : "+t._s(a.result[0])+"\n                                ")]]:[t._v(t._s(t.$t("online")))]],2)])],1),t._v(" "),s("div",{staticClass:"nk-match-team-right"},[s("router-link",{attrs:{to:{name:"team",params:{id:a.invitations[1].team.id}}}},[s("span",{staticClass:"nk-match-team-name"},[t._v("\n                            "+t._s(a.invitations[1].team.institution.title)+", "+t._s(a.invitations[1].team.institution.location.title)+","),s("br"),t._v("\n                            "+t._s(a.invitations[1].team.title)+"\n                        ")]),t._v(" "),s("span",{staticClass:"nk-match-team-logo"},[s("img",{staticClass:"w-64px ml-10",attrs:{src:t.getImageLink(a.invitations[1].team.image,"avatar_team")}})])])],1)])}),t._v(" "),s("pagination",{attrs:{pagination:t.pagination}})],2)]):s("div",[s("p",{staticClass:"txt-danger"},[t._v(t._s(t.$t("no_results")))])])],2)},staticRenderFns:[]};a.a=i}});
//# sourceMappingURL=24.28dd40b78a41435a04e5.js.map