webpackJsonp([5],{"1wCa":function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{"data-sticky-container":""}},[i("div",{staticClass:"row mt-20"},[i("div",{staticClass:"col-lg-12 col-md-12 col-xs-12"},[i("card",{attrs:{pa_0:"true"}},[i("div",{staticClass:"profile-box"},[null!==t.team?i("div",{staticClass:"profile-cover-pic"},[i("div",{staticClass:"profile-image-overlay",style:{"background-image":"url("+t.getImageLink(t.team.overlay,"overlay_team")+")"}})]):t._e(),t._v(" "),i("div",{staticClass:"profile-info text-center stickyNav"},[i("div",{staticClass:"tab-struct custom-tab-1 mt-5 mb-10 weight-600"},[i("ul",{staticClass:"nav nav-tabs"},t._l(t.tabs,function(e){return i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:{name:e.route},"active-class":"active"}},[t._v("\n                                        "+t._s(e.name)+"\n                                    ")])],1)}))]),t._v(" "),null!==t.team?i("div",{staticClass:"profile-img-wrap"},[i("img",{staticClass:"inline-block",attrs:{src:t.getImageLink(t.team.image,"avatar_team"),alt:"logo"}})]):t._e()])])])],1)]),t._v(" "),i("div",{staticClass:"tab-content"},[i("div",{staticClass:"tab-pane fade active in"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])])},staticRenderFns:[]};e.a=s},NM5q:function(t,e,i){var s,n=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.selector=e,this.elements=[],this.version="1.2.0",this.vp=this.getViewportSize(),this.body=document.querySelector("body"),this.options={wrap:i.wrap||!1,marginTop:i.marginTop||0,stickyFor:i.stickyFor||0,stickyClass:i.stickyClass||null,stickyContainer:i.stickyContainer||"body"},this.updateScrollTopPosition=this.updateScrollTopPosition.bind(this),this.updateScrollTopPosition(),window.addEventListener("load",this.updateScrollTopPosition),window.addEventListener("scroll",this.updateScrollTopPosition),this.run()}return t.prototype.run=function(){var t=this,e=setInterval(function(){if("complete"===document.readyState){clearInterval(e);var i=document.querySelectorAll(t.selector);t.forEach(i,function(e){return t.renderElement(e)})}},10)},t.prototype.renderElement=function(t){var e=this;t.sticky={},t.sticky.active=!1,t.sticky.marginTop=parseInt(t.getAttribute("data-margin-top"))||this.options.marginTop,t.sticky.stickyFor=parseInt(t.getAttribute("data-sticky-for"))||this.options.stickyFor,t.sticky.stickyClass=t.getAttribute("data-sticky-class")||this.options.stickyClass,t.sticky.wrap=!!t.hasAttribute("data-sticky-wrap")||this.options.wrap,t.sticky.stickyContainer=this.options.stickyContainer,t.sticky.container=this.getStickyContainer(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect=this.getRectangle(t),"img"===t.tagName.toLowerCase()&&(t.onload=function(){return t.sticky.rect=e.getRectangle(t)}),t.sticky.wrap&&this.wrapElement(t),this.activate(t)},t.prototype.wrapElement=function(t){t.insertAdjacentHTML("beforebegin","<span></span>"),t.previousSibling.appendChild(t)},t.prototype.activate=function(t){t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active&&(t.sticky.active=!0),this.elements.indexOf(t)<0&&this.elements.push(t),t.sticky.resizeEvent||(this.initResizeEvents(t),t.sticky.resizeEvent=!0),t.sticky.scrollEvent||(this.initScrollEvents(t),t.sticky.scrollEvent=!0),this.setPosition(t)},t.prototype.initResizeEvents=function(t){var e=this;t.sticky.resizeListener=function(){return e.onResizeEvents(t)},window.addEventListener("resize",t.sticky.resizeListener)},t.prototype.destroyResizeEvents=function(t){window.removeEventListener("resize",t.sticky.resizeListener)},t.prototype.onResizeEvents=function(t){this.vp=this.getViewportSize(),t.sticky.rect=this.getRectangle(t),t.sticky.container.rect=this.getRectangle(t.sticky.container),t.sticky.rect.top+t.sticky.rect.height<t.sticky.container.rect.top+t.sticky.container.rect.height&&t.sticky.stickyFor<this.vp.width&&!t.sticky.active?t.sticky.active=!0:(t.sticky.rect.top+t.sticky.rect.height>=t.sticky.container.rect.top+t.sticky.container.rect.height||t.sticky.stickyFor>=this.vp.width&&t.sticky.active)&&(t.sticky.active=!1),this.setPosition(t)},t.prototype.initScrollEvents=function(t){var e=this;t.sticky.scrollListener=function(){return e.onScrollEvents(t)},window.addEventListener("scroll",t.sticky.scrollListener)},t.prototype.destroyScrollEvents=function(t){window.removeEventListener("scroll",t.sticky.scrollListener)},t.prototype.onScrollEvents=function(t){t.sticky.active&&this.setPosition(t)},t.prototype.setPosition=function(t){this.css(t,{position:"",width:"",top:"",left:""}),this.vp.height<t.sticky.rect.height||!t.sticky.active||(t.sticky.rect.width||(t.sticky.rect=this.getRectangle(t)),t.sticky.wrap&&this.css(t.parentNode,{display:"block",width:t.sticky.rect.width+"px",height:t.sticky.rect.height+"px"}),0===t.sticky.rect.top&&t.sticky.container===this.body?this.css(t,{position:"fixed",top:t.sticky.rect.top+"px",left:t.sticky.rect.left+"px",width:t.sticky.rect.width+"px"}):this.scrollTop>t.sticky.rect.top-t.sticky.marginTop?(this.css(t,{position:"fixed",width:t.sticky.rect.width+"px",left:t.sticky.rect.left+"px"}),this.scrollTop+t.sticky.rect.height+t.sticky.marginTop>t.sticky.container.rect.top+t.sticky.container.offsetHeight?(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{top:t.sticky.container.rect.top+t.sticky.container.offsetHeight-(this.scrollTop+t.sticky.rect.height)+"px"})):(t.sticky.stickyClass&&t.classList.add(t.sticky.stickyClass),this.css(t,{top:t.sticky.marginTop+"px"}))):(t.sticky.stickyClass&&t.classList.remove(t.sticky.stickyClass),this.css(t,{position:"",width:"",top:"",left:""}),t.sticky.wrap&&this.css(t.parentNode,{display:"",width:"",height:""})))},t.prototype.update=function(){var t=this;this.forEach(this.elements,function(e){e.sticky.rect=t.getRectangle(e),e.sticky.container.rect=t.getRectangle(e.sticky.container),t.activate(e),t.setPosition(e)})},t.prototype.destroy=function(){var t=this;this.forEach(this.elements,function(e){t.destroyResizeEvents(e),t.destroyScrollEvents(e),delete e.sticky})},t.prototype.getStickyContainer=function(t){for(var e=t.parentNode;!e.hasAttribute("data-sticky-container")&&!e.parentNode.querySelector(t.sticky.stickyContainer)&&e!==this.body;)e=e.parentNode;return e},t.prototype.getRectangle=function(t){this.css(t,{position:"",width:"",top:"",left:""});var e=Math.max(t.offsetWidth,t.clientWidth,t.scrollWidth),i=Math.max(t.offsetHeight,t.clientHeight,t.scrollHeight),s=0,n=0;do{s+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:s,left:n,width:e,height:i}},t.prototype.getViewportSize=function(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}},t.prototype.updateScrollTopPosition=function(){this.scrollTop=(window.pageYOffset||document.scrollTop)-(document.clientTop||0)||0},t.prototype.forEach=function(t,e){for(var i=0,s=t.length;i<s;i++)e(t[i])},t.prototype.css=function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t.style[i]=e[i])},t}();s=n,t.exports=s},XCs1:function(t,e,i){var s=i("NM5q");t.exports=s},kbfI:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("o23g"),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var c=i("1wCa"),r=i("VU/8")(n.a,c.a,!1,null,null,null);e.default=r.exports},o23g:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(i("Dd8w")),n=i("NYxO"),o=c(i("mtWM"));function c(t){return t&&t.__esModule?t:{default:t}}i("XCs1");e.default={metaInfo:function(){return{title:this.title}},computed:(0,s.default)({},(0,n.mapGetters)({user:"authUser",authenticated:"authCheck"})),data:function(){return{title:"Detail page of team",tabs:[{name:"Info",route:"team.detail"},{name:"Players",route:"team.detail.players"},{name:"Schedule",route:"team.detail.schedule"},{name:"Trainings",route:"team.detail.trainings"},{name:"Tournaments",route:"team.tournaments"}],team:null,stickyOptions:{marginTop:20,forName:0,className:"stuck"},response:null,invitations:null}},mounted:function(){this.getTeam()},methods:{getTeam:function(){var t=this,e=this.ArrayToUrl({_with:"game,users,users.country"});o.default.get("/api/teams/"+this.$route.params.id+"?"+e).then(function(e){t.$set(t,"team",e.data),t.title="Team: "+t.team.title,t.$meta().refresh(),t.getInvitations(t.team.id),Event.fire("teamEditLoad",{team:e.data})})},getInvitations:function(t){var e=this,i=this.ArrayToUrl({team_id:t,_with:"user,team"});o.default.get("/api/team_user?"+i).then(function(t){e.$set(e,"invitations",t.data)})}}}}});
//# sourceMappingURL=5.66f0ac36a74d9ecbb86d.js.map