webpackJsonp([23],{"2WXp":function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"nk-blog-post nk-blog-post-single"},[s("h3",{staticClass:"nk-decorated-h-2"},[s("span",[t._v(t._s(t.post.title))])]),t._v(" "),s("div",{staticClass:"nk-gap"}),t._v(" "),s("div",{staticClass:"nk-post-text mt-0"},[s("div",{staticClass:"nk-post-img"},[s("img",{staticClass:"img-responsive",attrs:{src:t.getImageLink(t.post.image),alt:t.post.title}})]),t._v(" "),s("div",{staticClass:"nk-gap-1"}),t._v(" "),s("div",{staticClass:"info",domProps:{innerHTML:t._s(t.post.body)}})])])])},staticRenderFns:[]};e.a=a},"5Xeb":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("qCxU"),n=s.n(a);for(var i in a)"default"!==i&&function(t){s.d(e,t,function(){return a[t]})}(i);var o=s("2WXp"),r=s("VU/8")(n.a,o.a,!1,null,null,null);e.default=r.exports},qCxU:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(s("Dd8w")),n=s("NYxO"),i=o(s("mtWM"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={metaInfo:function(){return{title:this.title,meta:[{name:"description",content:this.meta_desc},{name:"keywords",content:this.meta_keywords}]}},computed:(0,a.default)({},(0,n.mapGetters)({user:"authUser",authenticated:"authCheck"})),data:function(){return{title:"Detail page of news",meta_desc:"",meta_keywords:"",post:null,response:null}},mounted:function(){this.getNews()},methods:{getNews:function(){var t=this;i.default.get("/api/news/"+this.$route.params.slug).then(function(e){t.$set(t,"post",e.data),t.title=t.post.title,t.meta_desc=t.post.meta_description,t.meta_keywords=t.post.meta_keywords,t.$meta().refresh()})}}}}});
//# sourceMappingURL=23.77f5723038cca23a060b.js.map