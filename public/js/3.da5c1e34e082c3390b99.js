webpackJsonp([3],{"04F5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["participants"]}},"8Vpf":function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{ref:"message-window",staticClass:"chatapp-chat-nicescroll-bar pt-10"},[t._l(t.messages,function(e){return a("li",{key:e.id,class:e.user.id==t.user.id?"self":"friend"},[e.user.id==t.user.id?a("div",{staticClass:"self-msg-wrap"},[a("div",{staticClass:"msg block pull-right"},[t._v(" "+t._s(e.body)+"\n                "),a("div",{staticClass:"msg-per-detail text-right"},[a("span",{staticClass:"msg-time txt-grey"},[t._v(t._s(e.created_at))])])]),t._v(" "),a("div",{staticClass:"clearfix"})]):a("div",{staticClass:"friend-msg-wrap"},[a("img",{staticClass:"rounded-circle profile-photo w-20 block pull-left",attrs:{src:t.getImageLink(e.user.avatar),title:e.user.nickname,alt:e.user.nickname}}),t._v(" "),a("div",{staticClass:"msg pull-left"},[t._v("\n                "+t._s(e.body)+"\n                "),a("div",{staticClass:"msg-per-detail  text-right"},[a("span",{staticClass:"msg-time txt-grey"},[t._v(t._s(e.created_at))])])]),t._v(" "),a("div",{staticClass:"clearfix"})])])}),t._v(" "),t.isTyping&&t.isTyping.user.id!=t.user.id?a("li",{staticClass:"friend"}):t._e()],2)},staticRenderFns:[]};e.a=s},BkII:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row mt-20 chat-window"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"chat-cmplt-wrap chat-for-widgets-1"},[null==t.activeChannel?a("div",{staticClass:"chat-box-wrap"},[a("div",[t._m(0),t._v(" "),a("div",{staticClass:"chatapp-nicescroll-bar"},[a("chat-channels",{attrs:{channels:t.channels,"active-channel":t.activeChannel},on:{channelChanged:t.onChannelChanged}})],1)])]):t._e(),t._v(" "),null!=t.activeChannel?a("div",{staticClass:"recent-chat-box-wrap"},[a("div",{staticClass:"recent-chat-wrap"},[a("div",{staticClass:"panel-heading ma-0 pt-15"},[a("div",{staticClass:"goto-back"},[a("a",{staticClass:"inline-block txt-grey",attrs:{href:"javascript:void(0)",title:"Chats"},on:{click:function(e){e.preventDefault(),t.onChannelChanged(null)}}},[a("i",{staticClass:"fa fa-weixin",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("span",{staticClass:"inline-block txt-dark"},[t._v(t._s(t.activeChannel.subject))]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"clearfix"})])]),t._v(" "),a("div",[a("div",{staticClass:"chat-content"},[a("chat-messages",{attrs:{messages:t.messages,isTyping:t.isTyping}})],1),t._v(" "),a("chat-new-message",{attrs:{"active-channel":t.activeChannel},on:{messageAdded:t.onMessageAdded}})],1)])]):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"chat-search",attrs:{role:"search"}},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{id:"example-input1-group21",name:"example-input1-group2",placeholder:"Search",type:"text"}}),this._v(" "),e("span",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn  btn-default",attrs:{type:"button"}},[e("i",{staticClass:"zmdi zmdi-search"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"inline-block text-right txt-grey",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"zmdi zmdi-more"})])}]};e.a=s},DhBu:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"input-msg-send form-control",attrs:{type:"text",id:"input_msg_send_chatapp",placeholder:"Type something"},domProps:{value:t.message},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;e.preventDefault(),t.sendMessage(e)},keydown:t.actionUser,input:function(e){e.target.composing||(t.message=e.target.value)}}})])},staticRenderFns:[]};e.a=s},Drxo:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-2"},t._l(t.participants,function(e,s){return a("p",{key:s,domProps:{textContent:t._s(e)}})}))},staticRenderFns:[]};e.a=s},HPyy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=d(a("BO1k")),n=d(a("Dd8w")),i=a("NYxO"),r=d(a("mtWM")),c=d(a("T3t9")),l=d(a("xOid")),u=d(a("gMd1")),o=d(a("xOfH"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{ChatParticipants:o.default,ChatChannels:u.default,ChatMessages:c.default,ChatNewMessage:l.default},computed:(0,n.default)({},(0,i.mapGetters)({user:"auth/user",authenticated:"auth/check"})),props:["channels"],data:function(){return{participants:[],socket:null,messages:null,activeChannel:null,isTyping:!1,typingTimer:!1}},created:function(){var t=this;this.fetchMessages(),this.fetchParticipants();var e=!0,a=!1,n=void 0;try{for(var i,r=(0,s.default)(this.channels);!(e=(i=r.next()).done);e=!0){var c=i.value;window.Echo.private("channel_"+c.id.toString()).listen("MessageSent",function(e){t.messages.push(e.data),t.isTyping=!1}).listenForWhisper("typing",function(e){t.isTyping=e,t.typingTimer&&clearTimeout(t.typingTimer),t.typingTimer=setTimeout(function(){t.isTyping=!1},2e3)})}}catch(t){a=!0,n=t}finally{try{!e&&r.return&&r.return()}finally{if(a)throw n}}},methods:{fetchMessages:function(){var t=this;null!==this.activeChannel&&r.default.get("/api/channels/"+this.activeChannel.id+"/messages").then(function(e){var a=e.data;t.messages=a})},fetchParticipants:function(){var t=this;null!==this.activeChannel&&r.default.get("/api/channels/"+this.activeChannel.id+"/participants").then(function(e){var a=e.data;t.participants=a})},onChannelChanged:function(t){this.activeChannel=t,this.fetchMessages(),this.fetchParticipants()},onMessageAdded:function(t){this.messages.push(t)}}}},RB0n:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".chat-window{width:300px;position:fixed;bottom:50px;right:50px}.chat-cmplt-wrap.chat-for-widgets-1{height:370px}.chat-cmplt-wrap.chat-for-widgets-1 .chat-box-wrap,.chat-cmplt-wrap.chat-for-widgets-1 .recent-chat-box-wrap{float:none;width:100%}.chat-list-wrap .chat-body .chat-data .user-img{font-size:34px}.chat-cmplt-wrap.chat-for-widgets-1 .chat-search .input-group input{height:36px}.chat-cmplt-wrap.chat-for-widgets-1 .chat-search .input-group .input-group-btn{top:15px}.recent-chat-wrap .input-group .input-msg-send{height:40px;font-size:13px}@media (max-width:1024px){.chat-cmplt-wrap.chat-for-widgets-1 .recent-chat-box-wrap{right:0}}",""])},Ri2d:function(t,e,a){var s=a("RB0n");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("270ddc08",s,!0,{})},T3t9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("nngi"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("8Vpf"),c=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=c.exports},biJn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(a("Dd8w")),n=a("NYxO"),i=r(a("mtWM"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={props:["activeChannel"],computed:(0,s.default)({},(0,n.mapGetters)({user:"auth/user",authenticated:"auth/check"})),data:function(){return{message:""}},methods:{sendMessage:function(){var t=this;i.default.post("/api/channels/"+this.activeChannel.id+"/messages",{message:this.message}).then(function(e){t.message="",t.$emit("messageAdded",e.data)})},actionUser:function(){window.Echo.private("channel_"+this.activeChannel.id.toString()).whisper("typing",{user:this.user})}}}},gMd1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("r4A1"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("opQn"),c=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=c.exports},hTNP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("HPyy"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("BkII");var c=function(t){a("Ri2d")},l=a("VU/8")(n.a,r.a,!1,c,null,null);e.default=l.exports},nngi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=a("Dd8w"),i=(s=n)&&s.__esModule?s:{default:s},r=a("NYxO");e.default={props:["messages","isTyping"],mounted:function(){this.scrollToBottom()},computed:(0,i.default)({},(0,r.mapGetters)({user:"auth/user",authenticated:"auth/check"})),watch:{messages:function(){this.scrollToBottom()}},methods:{scrollToBottom:function(){var t=this;this.$nextTick(function(){t.$refs["message-window"].scrollTop=t.$refs["message-window"].scrollHeight})}}}},opQn:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"chat-list-wrap"},[a("li",{staticClass:"chat-list"},[a("div",{staticClass:"chat-body"},t._l(t.channels,function(e){return a("a",{key:e.id,staticClass:"channel",class:{active:null!==t.activeChannel&&e.id==t.activeChannel.id},attrs:{href:"javascript:void(0)"},on:{click:function(a){t.setChannel(e)}}},[a("div",{staticClass:"chat-data"},[a("i",{staticClass:"fa fa-weixin user-img img-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),a("div",{staticClass:"user-data"},[a("span",{staticClass:"name block capitalize-font"},[t._v(t._s(e.subject))]),t._v(" "),a("span",{staticClass:"time block truncate text-white",attrs:{title:e.participantsString}},[t._v(t._s(e.participantsString))])]),t._v(" "),e.userUnreadMessagesCount>0?a("div",{staticClass:"pull-right"},[a("span",{staticClass:"label label-info ml-10"},[t._v(t._s(e.userUnreadMessagesCount))])]):t._e(),t._v(" "),a("div",{staticClass:"clearfix"})])])}))])])},staticRenderFns:[]};e.a=s},qHDn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("zku0"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("vlrn"),c=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=c.exports},r4A1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["channels","activeChannel"],methods:{setChannel:function(t){this.$emit("channelChanged",t)}}}},vlrn:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return null!==this.channels?e("chat",{attrs:{channels:this.channels}}):this._e()},staticRenderFns:[]};e.a=s},xOfH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("04F5"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("Drxo"),c=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=c.exports},xOid:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("biJn"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var r=a("DhBu"),c=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=c.exports},zku0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(a("Dd8w")),n=a("NYxO"),i=c(a("hTNP")),r=c(a("mtWM"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Chat:i.default},metaInfo:{titleTemplate:"Chat | %s"},computed:(0,s.default)({},(0,n.mapGetters)({user:"auth/user",authenticated:"auth/check"})),data:function(){return{channels:null}},created:function(){this.getThreads()},methods:{getThreads:function(){var t=this;r.default.get("/api/users/"+this.user.id+"/threads").then(function(e){t.$set(t,"channels",e.data)})}}}}});
//# sourceMappingURL=3.da5c1e34e082c3390b99.js.map