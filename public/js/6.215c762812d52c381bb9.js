webpackJsonp([6],{"1Bde":function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"nk-blog-grid"},[e("div",{staticClass:"row"})]),this._v(" "),e("div",{staticClass:"nk-gap-2"})])}]}},"1iAA":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("Dd8w")),s=n("NYxO"),a=r(n("mtWM"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={layout:"default",metaInfo:function(){return{title:this.$t("home")}},data:function(){return{title:window.config.appName}},computed:(0,i.default)({},(0,s.mapGetters)({user:"auth/user"}),{news:[]}),mounted:function(){this.getNews()},methods:{getNews:function(){var t=this;a.default.get("/api/news?_limit=4&_sort=-id").then(function(e){var n=e.data.data,i=t;n.forEach(function(t){t.created=i.dateConvertUTC(t.created,-1)}),t.$set(t,"news",n)})}}}},qpdL:function(t,e,n){var i=n("VU/8")(n("1iAA"),n("1Bde"),!1,null,null,null);t.exports=i.exports}});
//# sourceMappingURL=6.215c762812d52c381bb9.js.map