webpackJsonp([8],{"1iAA":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=l(s("Dd8w")),n=s("NYxO"),i=l(s("mtWM"));function l(t){return t&&t.__esModule?t:{default:t}}a.default={layout:"default",metaInfo:function(){return{title:this.$t("home")}},data:function(){return{title:window.config.appName,news:null}},computed:(0,e.default)({},(0,n.mapGetters)({user:"auth/user",locale:"lang/locale"})),mounted:function(){this.getNews(),this.moment.locale(this.locale)},methods:{getNews:function(){var t=this;i.default.get("/api/news?_limit=4&_sort=-id").then(function(a){var s=a.data.data,e=t;s.forEach(function(t){t.created_at=e.dateConvertUTC(t.created_at,-1)}),t.$set(t,"news",s)})}}}},qpdL:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("1iAA"),n=s.n(e);for(var i in e)"default"!==i&&function(t){s.d(a,t,function(){return e[t]})}(i);var l=s("yL6k"),r=s("VU/8")(n.a,l.a,!1,null,null,null);a.default=r.exports},yL6k:function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h3",{staticClass:"nk-decorated-h-2"},[s("span",[s("span",{staticClass:"text-main-1"},[t._v(t._s(t.$t("latest")))]),t._v(" "+t._s(t.$t("news")))])]),t._v(" "),s("div",{staticClass:"nk-gap"}),t._v(" "),s("div",{staticClass:"nk-blog-grid"},[s("div",{staticClass:"row"},t._l(t.news,function(a){return s("div",{staticClass:"col-md-6 col-lg-3"},[s("div",{staticClass:"nk-blog-post"},[s("router-link",{staticClass:"nk-post-img",attrs:{to:{name:"news.detail",params:{slug:a.slug}}}},[s("img",{attrs:{src:t.getImageLink(a.image),alt:a.title}})]),t._v(" "),s("div",{staticClass:"nk-gap"}),t._v(" "),s("h2",{staticClass:"nk-post-title h4"},[s("router-link",{attrs:{to:{name:"news.detail",params:{slug:a.slug}}}},[t._v(t._s(a.title))])],1),t._v(" "),s("div",{staticClass:"nk-post-text"},[s("p",[t._v(t._s(t._f("truncate")(a.excerpt,150,"...")))])]),t._v(" "),s("div",{staticClass:"nk-gap"}),t._v(" "),s("router-link",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1",attrs:{to:{name:"news.detail",params:{slug:a.slug}}}},[t._v(t._s(t.$t("read_more")))]),t._v(" "),s("div",{staticClass:"nk-post-date float-right"},[s("span",{staticClass:"fa fa-calendar"}),t._v(" "+t._s(t.moment(a.created_at,"YYYY-MM-DD h:mm:ss").format("MMMM Do")))])],1)])}))]),t._v(" "),s("div",{staticClass:"nk-gap-2"})])},staticRenderFns:[]};a.a=e}});
//# sourceMappingURL=8.2cd80633f3ce6f995ccf.js.map