webpackJsonp([8],{Ftjx:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,'.bracket{display:inline-block;white-space:nowrap;font-size:0}.bracket .round,.bracket .round .winners>div{display:inline-block;vertical-align:middle}.bracket .round .winners>div.matchups .matchup:last-child{margin-bottom:0!important}.bracket .round .winners>div.matchups .matchup .participants{border-radius:.25rem;overflow:hidden}.bracket .round .winners>div.matchups .matchup .participants .participant{-webkit-box-sizing:border-box;box-sizing:border-box;color:#858585;border-left:.25rem solid #858585;background:#fff;width:14rem;height:3rem;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.12)}.bracket .round .winners>div.matchups .matchup .participants .participant.winner{color:#60c645;border-color:#60c645}.bracket .round .winners>div.matchups .matchup .participants .participant.loser{color:#dc563f;border-color:#dc563f}.bracket .round .winners>div.matchups .matchup .participants .participant:not(:last-child){border-bottom:thin solid #f0f2f2}.bracket .round .winners>div.matchups .matchup .participants .participant span{margin:0 1.25rem;line-height:3;font-size:1rem}.bracket .round .winners>div.connector.filled.bottom .merger:after,.bracket .round .winners>div.connector.filled .line,.bracket .round .winners>div.connector.filled.top .merger:before{border-color:#60c645}.bracket .round .winners>div.connector .line,.bracket .round .winners>div.connector .merger{-webkit-box-sizing:border-box;box-sizing:border-box;width:2rem;display:inline-block;vertical-align:top}.bracket .round .winners>div.connector .line{border-bottom:thin solid #c0c0c8;height:4rem}.bracket .round .winners>div.connector .merger{position:relative;height:8rem}.bracket .round .winners>div.connector .merger:after,.bracket .round .winners>div.connector .merger:before{content:"";display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:50%;border:0 solid;border-color:#c0c0c8}.bracket .round .winners>div.connector .merger:before{border-right-width:thin;border-top-width:thin}.bracket .round .winners>div.connector .merger:after{border-right-width:thin;border-bottom-width:thin}.bracket .round.eightfinals .winners .matchups .matchup:not(:last-child),.bracket .round.eightfinals .winners:not(:last-child),.bracket .round.quarterfinals .winners .matchups .matchup:not(:last-child),.bracket .round.quarterfinals .winners:not(:last-child){margin-bottom:2rem}.bracket .round.semifinals .winners .matchups .matchup:not(:last-child){margin-bottom:10rem}.bracket .round.semifinals .winners .connector .merger{height:16rem}.bracket .round.semifinals .winners .connector .line{height:8rem}.bracket .round.finals .winners .connector .merger{height:3rem}.bracket .round.finals .winners .connector .line{height:1.5rem}main{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.round,main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.round{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:250px;list-style:none;padding:0}.round .spacer{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin-bottom:30px}.round .spacer:first-child,.round .spacer:last-child{-webkit-box-flex:.5;-ms-flex-positive:.5;flex-grow:.5;margin-bottom:0}.round .game-spacer{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}li.game{padding-left:5px;position:relative}li.game .vm-title span{margin-left:5px;margin-right:50px}li.game .score{position:absolute;top:0;right:0;border:1px solid hsla(0,0%,100%,.1);border-radius:2px;margin-left:8px;font-size:13px;line-height:28px;text-align:center;height:30px;width:30px;color:#ea6c41;margin-right:0}li.game-top{border-bottom:1px solid #aaa;padding-bottom:5px}li.game-spacer{border-right:1px solid #aaa;min-height:80px}li.game-bottom{border-top:1px solid #aaa;padding-top:5px}li.game.winner span{font-weight:700}li.game-bottom.winner{border-top:2px solid #469408}li.game-top.winner{border-bottom:2px solid #469408}li.game.winner .score{color:#469408}li.game-bottom .score{top:5px}.w-30{width:30px!important}',""])},HTW4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(r("Xxa5")),n=o(r("exGp")),a=o(r("mtWM"));function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{brackets:[],errors:[]}},mounted:function(){this.getTournamentBrackets()},methods:{getTournamentBrackets:function(){var e=this;return(0,n.default)(i.default.mark(function t(){var r;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.default.get("/api/tournaments/15094/brackets");case 3:r=t.sent,e.$set(e.tournament,"brackets",r.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.errors.push(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()}}}},"JPt/":function(e,t,r){var i=r("Ftjx");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r("rjj0")("f0037524",i,!0,{})},LguA:function(e,t,r){"use strict";var i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{attrs:{id:"tournament"}},e._l(e.brackets,function(t,i){return r("ul",{class:"round round-"+i},[r("li",{staticClass:"spacer"},[e._v(" ")]),e._v(" "),e._l(t,function(t){return[r("li",{staticClass:"game game-top",class:{winner:t.score[0]>t.score[1]||null==t.team_2||null==t.team_2.id}},[null!=t.team_1&&null!=t.team_1.id?r("router-link",{staticClass:"vm-title",attrs:{to:{name:"team.detail",params:{slug:t.team_1.id}}}},[r("img",{staticClass:"img-responsive team-image w-30",attrs:{src:e.getImageLink(t.team_1.image,"avatar_team"),alt:t.team_1.title}}),e._v(" "),r("span",[e._v(e._s(t.team_1.title))])]):e._e(),e._v(" "),null!=t.team_1&&null!=t.team_1.id?r("span",{staticClass:"score"},[e._v(e._s(t.score[0]))]):r("span",[e._v(" ")])],1),e._v(" "),r("li",{staticClass:"game game-spacer"},[e._v(" ")]),e._v(" "),r("li",{staticClass:"game game-bottom",class:{winner:t.score[1]>t.score[0]}},[null!=t.team_2&&null!=t.team_2.id?r("router-link",{staticClass:"vm-title",attrs:{to:{name:"team.detail",params:{slug:t.team_2.id}}}},[r("img",{staticClass:"img-responsive team-image w-30",attrs:{src:e.getImageLink(t.team_2.image,"avatar_team"),alt:t.team_2.title}}),e._v(" "),r("span",[e._v(e._s(t.team_2.title))])]):e._e(),e._v(" "),null!=t.team_2&&null!=t.team_2.id?r("span",{staticClass:"score"},[e._v(e._s(t.score[1]))]):r("span",[e._v(" ")])],1),e._v(" "),r("li",{staticClass:"spacer"},[e._v(" ")])]})],2)}))},staticRenderFns:[]};t.a=i},P1d4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("HTW4"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,function(){return i[e]})}(a);var o=r("LguA");var s=function(e){r("JPt/")},c=r("VU/8")(n.a,o.a,!1,s,null,null);t.default=c.exports}});
//# sourceMappingURL=8.1383f5f3c255cced4fcf.js.map