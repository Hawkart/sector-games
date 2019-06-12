webpackJsonp([10],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/teams/detail.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _sweetalert = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    metaInfo: function metaInfo() {
        return {
            title: this.title
        };
    },

    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        authenticated: 'auth/check'
    })),
    data: function data() {
        return {
            title: 'Detail page of team',
            team: null,
            response: null,
            invitations: null
        };
    },
    mounted: function mounted() {
        this.getTeam();
    },

    methods: {
        getTeam: function getTeam() {
            var _this = this;

            var query = this.ArrayToUrl({
                "_with": 'game,users,institution.location,institution.location.parent'
            });
            _axios2.default.get('/api/teams/' + this.$route.params.id + "?" + query).then(function (response) {
                _this.$set(_this, 'team', response.data);
                _this.title = "Team: " + _this.team.title;
                _this.$meta().refresh();
            });
        },
        getInvitations: function getInvitations() {
            var _this2 = this;

            var query = this.ArrayToUrl({
                'team_id': this.$route.params.id,
                'status': 1,
                "_with": 'user,team'
            });
            _axios2.default.get('/api/team_user?' + query).then(function (response) {
                _this2.$set(_this2, 'invitations', response.data);
            });
        },
        joinTeam: function joinTeam(team_id) {
            var _this3 = this;

            if (!this.authenticated) {
                this.$router.push({ name: 'login' });
                return;
            }

            _axios2.default.put('/api/teams/' + team_id + '/users/' + this.user.id).then(function (response) {
                (0, _sweetalert2.default)({
                    type: 'success',
                    title: _this3.$t('join_team_request_success')
                });
            }).catch(function (error) {
                (0, _sweetalert2.default)({
                    type: 'warning',
                    title: error.response.data.error
                });
            });
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6348cb32\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/teams/detail.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.nk-team-table{\n    width: 100%;\n}\n.nk-team-table > tbody > tr + tr > td {\n    border-top: 1px dotted rgba(255, 255, 255, 0.2);\n}\n.nk-team-table > tbody > tr > td {\n    padding: 20px 10px;\n}\n.f07em{\n    font-size: .7rem !important;\n}\n", "", {"version":3,"sources":["C:/xampp/htdocs/sector.local/resources/assets/js/pages/teams/resources/assets/js/pages/teams/detail.vue"],"names":[],"mappings":";AAoJA;IACA,YAAA;CACA;AACA;IACA,gDAAA;CACA;AAEA;IACA,mBAAA;CACA;AACA;IACA,4BAAA;CACA","file":"detail.vue","sourcesContent":["<template>\r\n    <div>\r\n        <div class=\"row\"  v-if=\"team!==null\">\r\n            <div class=\"col-lg-12\">\r\n                <h3 class=\"nk-decorated-h-3\"><span>{{team.title}}</span></h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row vertical-gap\">\r\n            <aside class=\"col-lg-3 nk-sidebar-sticky-parent\">\r\n                <div class=\"nk-box-1 bg-dark-2 text-center\" v-if=\"team!==null\">\r\n                    <img :src=\"getImageLink(team.image, 'avatar_team')\" class=\"w-100\">\r\n                    <div class=\"nk-gap\"></div>\r\n\r\n                    <button v-if=\"!authenticated || (team.quantity>team.users.length && authenticated && user.id!=team.capt_id && user.type=='player' && user.active)\" @click=\"joinTeam(team.id)\" class=\"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em w-100\">\r\n                        {{$t('join_team')}}\r\n                    </button>\r\n\r\n                    <table class=\"nk-team-table\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('count_matches')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\">{{team.count_fights}}</strong>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('count_wins')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\">{{team.count_wins}}</strong>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('victory_rate')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\" v-if=\"team.count_fights>0\">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</strong>\r\n                                <strong class=\"h5\" v-else>0%</strong>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </aside>\r\n            <div class=\"col-lg-9\">\r\n                <card :title=\"$t('players')\">\r\n                    <div class=\"row vertical-gap\" v-if=\"team!==null && team.users!==null\">\r\n                        <div class=\"col-lg-3 col-md-3 col-xs-12\"  v-for=\"player in team.users\">\r\n                            <div class=\"nk-box-1 bg-dark-2 text-center\">\r\n                                <router-link  :to=\"{ name: 'player', params: { id: player.id }}\">\r\n                                    <img :src=\"getImageLink(player.avatar)\" class=\"w-100\" /><br/>\r\n                                    <span class=\"nk-feature-title\">{{ player.nickname}}</span>\r\n                                </router-link>\r\n                                <br/>\r\n                                <span v-if=\"player.free_player\"><span class=\"text-warning\">{{$t('free')}}</span></span>\r\n                                <span v-else-if=\"player.team_id>0 && player.id==team.capt_id\"><span class=\"text-info\">{{$t('captain')}}</span></span>\r\n                                <span v-else><span class=\"text-success\">{{$t('in_team')}}</span></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </card>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import { mapGetters } from 'vuex'\r\n    import axios from 'axios'\r\n    import swal from 'sweetalert2'\r\n\r\n    export default {\r\n        metaInfo () {\r\n            return {\r\n                title: this.title,\r\n            }\r\n        },\r\n        computed: {\r\n            ...mapGetters({\r\n                user: 'auth/user',\r\n                authenticated: 'auth/check',\r\n            })\r\n        },\r\n        data() {\r\n            return {\r\n                title: 'Detail page of team',\r\n                team: null,\r\n                response: null,\r\n                invitations: null\r\n            }\r\n        },\r\n        mounted() {\r\n            this.getTeam();\r\n        },\r\n        methods: {\r\n            getTeam()\r\n            {\r\n                var query = this.ArrayToUrl({\r\n                    \"_with\" : 'game,users,institution.location,institution.location.parent'\r\n                });\r\n                axios.get('/api/teams/'+this.$route.params.id+\"?\"+query).then((response) => {\r\n                    this.$set(this, 'team', response.data);\r\n                    this.title = \"Team: \"+this.team.title;\r\n                    this.$meta().refresh();\r\n                });\r\n            },\r\n            getInvitations()\r\n            {\r\n                var query = this.ArrayToUrl({\r\n                    'team_id' : this.$route.params.id,\r\n                    'status' : 1,\r\n                    \"_with\" : 'user,team'\r\n                });\r\n                axios.get('/api/team_user?'+query).then((response) => {\r\n                    this.$set(this, 'invitations', response.data);\r\n                });\r\n            },\r\n            joinTeam(team_id)\r\n            {\r\n                if(!this.authenticated)\r\n                {\r\n                    this.$router.push({ name: 'login' });\r\n                    return;\r\n                }\r\n\r\n                axios.put('/api/teams/'+team_id+'/users/'+this.user.id).then(response => {\r\n                    swal({\r\n                        type: 'success',\r\n                        title: this.$t('join_team_request_success')\r\n                    });\r\n                }).catch(error => {\r\n                    swal({\r\n                        type: 'warning',\r\n                        title: error.response.data.error\r\n                    });\r\n                });\r\n            }\r\n        },\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .nk-team-table{\r\n        width: 100%;\r\n    }\r\n    .nk-team-table > tbody > tr + tr > td {\r\n        border-top: 1px dotted rgba(255, 255, 255, 0.2);\r\n    }\r\n\r\n    .nk-team-table > tbody > tr > td {\r\n        padding: 20px 10px;\r\n    }\r\n    .f07em{\r\n        font-size: .7rem !important;\r\n    }\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6348cb32\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/teams/detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.team !== null
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("h3", { staticClass: "nk-decorated-h-3" }, [
              _c("span", [_vm._v(_vm._s(_vm.team.title))])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row vertical-gap" }, [
      _c("aside", { staticClass: "col-lg-3 nk-sidebar-sticky-parent" }, [
        _vm.team !== null
          ? _c("div", { staticClass: "nk-box-1 bg-dark-2 text-center" }, [
              _c("img", {
                staticClass: "w-100",
                attrs: { src: _vm.getImageLink(_vm.team.image, "avatar_team") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "nk-gap" }),
              _vm._v(" "),
              !_vm.authenticated ||
              (_vm.team.quantity > _vm.team.users.length &&
                _vm.authenticated &&
                _vm.user.id != _vm.team.capt_id &&
                _vm.user.type == "player" &&
                _vm.user.active)
                ? _c(
                    "button",
                    {
                      staticClass:
                        "nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em w-100",
                      on: {
                        click: function($event) {
                          return _vm.joinTeam(_vm.team.id)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("join_team")) +
                          "\n                "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("table", { staticClass: "nk-team-table" }, [
                _c("tbody", [
                  _c("tr", [
                    _c("td", [
                      _c("strong", { staticClass: "h6" }, [
                        _vm._v(_vm._s(_vm.$t("count_matches")))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", { staticClass: "h5" }, [
                        _vm._v(_vm._s(_vm.team.count_fights))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _c("strong", { staticClass: "h6" }, [
                        _vm._v(_vm._s(_vm.$t("count_wins")))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", { staticClass: "h5" }, [
                        _vm._v(_vm._s(_vm.team.count_wins))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _c("strong", { staticClass: "h6" }, [
                        _vm._v(_vm._s(_vm.$t("victory_rate")))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.team.count_fights > 0
                        ? _c("strong", { staticClass: "h5" }, [
                            _vm._v(
                              _vm._s(
                                Number(
                                  (
                                    (_vm.team.count_wins /
                                      _vm.team.count_fights) *
                                    100
                                  ).toFixed(2)
                                )
                              ) + "%"
                            )
                          ])
                        : _c("strong", { staticClass: "h5" }, [_vm._v("0%")])
                    ])
                  ])
                ])
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-9" },
        [
          _c("card", { attrs: { title: _vm.$t("players") } }, [
            _vm.team !== null && _vm.team.users !== null
              ? _c(
                  "div",
                  { staticClass: "row vertical-gap" },
                  _vm._l(_vm.team.users, function(player) {
                    return _c(
                      "div",
                      { staticClass: "col-lg-3 col-md-3 col-xs-12" },
                      [
                        _c(
                          "div",
                          { staticClass: "nk-box-1 bg-dark-2 text-center" },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "player",
                                    params: { id: player.id }
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  staticClass: "w-100",
                                  attrs: {
                                    src: _vm.getImageLink(player.avatar)
                                  }
                                }),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "nk-feature-title" },
                                  [_vm._v(_vm._s(player.nickname))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            player.free_player
                              ? _c("span", [
                                  _c("span", { staticClass: "text-warning" }, [
                                    _vm._v(_vm._s(_vm.$t("free")))
                                  ])
                                ])
                              : player.team_id > 0 &&
                                player.id == _vm.team.capt_id
                              ? _c("span", [
                                  _c("span", { staticClass: "text-info" }, [
                                    _vm._v(_vm._s(_vm.$t("captain")))
                                  ])
                                ])
                              : _c("span", [
                                  _c("span", { staticClass: "text-success" }, [
                                    _vm._v(_vm._s(_vm.$t("in_team")))
                                  ])
                                ])
                          ],
                          1
                        )
                      ]
                    )
                  }),
                  0
                )
              : _vm._e()
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6348cb32", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6348cb32\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/teams/detail.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6348cb32\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/teams/detail.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("22e082af", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6348cb32\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6348cb32\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/pages/teams/detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/teams/detail.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6348cb32_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6348cb32\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/teams/detail.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6348cb32\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/teams/detail.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6348cb32_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/teams/detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6348cb32", Component.options)
  } else {
    hotAPI.reload("data-v-6348cb32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9iZDU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9lNzgzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9kODlmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRUE7Ozs7QUFDQTs7Ozs7O2tCQUVBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEtBTEE7O0FBTUEseUNBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBRkEsTUFEQSxDQU5BO0FBWUEsUUFaQSxrQkFZQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSxzQkFGQTtBQUdBLDBCQUhBO0FBSUE7QUFKQTtBQU1BLEtBbkJBO0FBb0JBLFdBcEJBLHFCQW9CQTtBQUNBO0FBQ0EsS0F0QkE7O0FBdUJBO0FBQ0EsZUFEQSxxQkFFQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFKQTtBQUtBLFNBWEE7QUFZQSxzQkFaQSw0QkFhQTtBQUFBOztBQUNBO0FBQ0EsZ0RBREE7QUFFQSwyQkFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0EsYUFGQTtBQUdBLFNBdEJBO0FBdUJBLGdCQXZCQSxvQkF1QkEsT0F2QkEsRUF3QkE7QUFBQTs7QUFDQSxxQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBREE7QUFFQTtBQUZBO0FBSUEsYUFMQSxFQUtBLEtBTEEsQ0FLQTtBQUNBO0FBQ0EsbUNBREE7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QWtSO0FBQzVSO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQWtFO0FBQ25HO0FBQzhiO0FBQ2E7QUFDM2M7QUFDeVE7QUFDelE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1V0FBYztBQUNoQixFQUFFLCtOQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvMTAuM2ZmNzM2ZmFmMTkyNzBlYzBmOTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAgdi1pZj1cInRlYW0hPT1udWxsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm5rLWRlY29yYXRlZC1oLTNcIj48c3Bhbj57e3RlYW0udGl0bGV9fTwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHZlcnRpY2FsLWdhcFwiPlxyXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJjb2wtbGctMyBuay1zaWRlYmFyLXN0aWNreS1wYXJlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1ib3gtMSBiZy1kYXJrLTIgdGV4dC1jZW50ZXJcIiB2LWlmPVwidGVhbSE9PW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsodGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCIhYXV0aGVudGljYXRlZCB8fCAodGVhbS5xdWFudGl0eT50ZWFtLnVzZXJzLmxlbmd0aCAmJiBhdXRoZW50aWNhdGVkICYmIHVzZXIuaWQhPXRlYW0uY2FwdF9pZCAmJiB1c2VyLnR5cGU9PSdwbGF5ZXInICYmIHVzZXIuYWN0aXZlKVwiIEBjbGljaz1cImpvaW5UZWFtKHRlYW0uaWQpXCIgY2xhc3M9XCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMSB0ZXh0LXdoaXRlIGYwN2VtIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2pvaW5fdGVhbScpfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwibmstdGVhbS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiaDZcIj57eyR0KCdjb3VudF9tYXRjaGVzJyl9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiaDVcIj57e3RlYW0uY291bnRfZmlnaHRzfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiaDZcIj57eyR0KCdjb3VudF93aW5zJyl9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiaDVcIj57e3RlYW0uY291bnRfd2luc319PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg2XCI+e3skdCgndmljdG9yeV9yYXRlJyl9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiaDVcIiB2LWlmPVwidGVhbS5jb3VudF9maWdodHM+MFwiPnt7IE51bWJlcigodGVhbS5jb3VudF93aW5zL3RlYW0uY291bnRfZmlnaHRzKjEwMCkudG9GaXhlZCgyKSl9fSU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiaDVcIiB2LWVsc2U+MCU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgICAgICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgncGxheWVycycpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2ZXJ0aWNhbC1nYXBcIiB2LWlmPVwidGVhbSE9PW51bGwgJiYgdGVhbS51c2VycyE9PW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC0zIGNvbC14cy0xMlwiICB2LWZvcj1cInBsYXllciBpbiB0ZWFtLnVzZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstYm94LTEgYmctZGFyay0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICdwbGF5ZXInLCBwYXJhbXM6IHsgaWQ6IHBsYXllci5pZCB9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsocGxheWVyLmF2YXRhcilcIiBjbGFzcz1cInctMTAwXCIgLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLWZlYXR1cmUtdGl0bGVcIj57eyBwbGF5ZXIubmlja25hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBsYXllci5mcmVlX3BsYXllclwiPjxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+e3skdCgnZnJlZScpfX08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cInBsYXllci50ZWFtX2lkPjAgJiYgcGxheWVyLmlkPT10ZWFtLmNhcHRfaWRcIj48c3BhbiBjbGFzcz1cInRleHQtaW5mb1wiPnt7JHQoJ2NhcHRhaW4nKX19PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+PHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj57eyR0KCdpbl90ZWFtJyl9fTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGV0YWlsIHBhZ2Ugb2YgdGVhbScsXHJcbiAgICAgICAgICAgICAgICB0ZWFtOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uczogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFRlYW0oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZ2V0VGVhbSgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuQXJyYXlUb1VybCh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJfd2l0aFwiIDogJ2dhbWUsdXNlcnMsaW5zdGl0dXRpb24ubG9jYXRpb24saW5zdGl0dXRpb24ubG9jYXRpb24ucGFyZW50J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGVhbXMvJyt0aGlzLiRyb3V0ZS5wYXJhbXMuaWQrXCI/XCIrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICd0ZWFtJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IFwiVGVhbTogXCIrdGhpcy50ZWFtLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1ldGEoKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0SW52aXRhdGlvbnMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgICd0ZWFtX2lkJyA6IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJyA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJfd2l0aFwiIDogJ3VzZXIsdGVhbSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RlYW1fdXNlcj8nK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnaW52aXRhdGlvbnMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBqb2luVGVhbSh0ZWFtX2lkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hdXRoZW50aWNhdGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2xvZ2luJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MucHV0KCcvYXBpL3RlYW1zLycrdGVhbV9pZCsnL3VzZXJzLycrdGhpcy51c2VyLmlkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy4kdCgnam9pbl90ZWFtX3JlcXVlc3Rfc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAubmstdGVhbS10YWJsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciArIHRyID4gdGQge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZjA3ZW17XHJcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm5rLXRlYW0tdGFibGV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmstdGVhbS10YWJsZSA+IHRib2R5ID4gdHIgKyB0ciA+IHRkIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcbi5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcbn1cXG4uZjA3ZW17XFxuICAgIGZvbnQtc2l6ZTogLjdyZW0gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L3hhbXBwL2h0ZG9jcy9zZWN0b3IubG9jYWwvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9KQTtJQUNBLFlBQUE7Q0FDQTtBQUNBO0lBQ0EsZ0RBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7Q0FDQTtBQUNBO0lBQ0EsNEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICB2LWlmPVxcXCJ0ZWFtIT09bnVsbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJuay1kZWNvcmF0ZWQtaC0zXFxcIj48c3Bhbj57e3RlYW0udGl0bGV9fTwvc3Bhbj48L2gzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgdmVydGljYWwtZ2FwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3M9XFxcImNvbC1sZy0zIG5rLXNpZGViYXItc3RpY2t5LXBhcmVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5rLWJveC0xIGJnLWRhcmstMiB0ZXh0LWNlbnRlclxcXCIgdi1pZj1cXFwidGVhbSE9PW51bGxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJnZXRJbWFnZUxpbmsodGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcXFwiIGNsYXNzPVxcXCJ3LTEwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuay1nYXBcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCIhYXV0aGVudGljYXRlZCB8fCAodGVhbS5xdWFudGl0eT50ZWFtLnVzZXJzLmxlbmd0aCAmJiBhdXRoZW50aWNhdGVkICYmIHVzZXIuaWQhPXRlYW0uY2FwdF9pZCAmJiB1c2VyLnR5cGU9PSdwbGF5ZXInICYmIHVzZXIuYWN0aXZlKVxcXCIgQGNsaWNrPVxcXCJqb2luVGVhbSh0ZWFtLmlkKVxcXCIgY2xhc3M9XFxcIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGUgZjA3ZW0gdy0xMDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2pvaW5fdGVhbScpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJuay10ZWFtLXRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJoNlxcXCI+e3skdCgnY291bnRfbWF0Y2hlcycpfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDVcXFwiPnt7dGVhbS5jb3VudF9maWdodHN9fTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJoNlxcXCI+e3skdCgnY291bnRfd2lucycpfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDVcXFwiPnt7dGVhbS5jb3VudF93aW5zfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDZcXFwiPnt7JHQoJ3ZpY3RvcnlfcmF0ZScpfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDVcXFwiIHYtaWY9XFxcInRlYW0uY291bnRfZmlnaHRzPjBcXFwiPnt7IE51bWJlcigodGVhbS5jb3VudF93aW5zL3RlYW0uY291bnRfZmlnaHRzKjEwMCkudG9GaXhlZCgyKSl9fSU8L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XFxcImg1XFxcIiB2LWVsc2U+MCU8L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2FzaWRlPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy05XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGNhcmQgOnRpdGxlPVxcXCIkdCgncGxheWVycycpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyB2ZXJ0aWNhbC1nYXBcXFwiIHYtaWY9XFxcInRlYW0hPT1udWxsICYmIHRlYW0udXNlcnMhPT1udWxsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtbWQtMyBjb2wteHMtMTJcXFwiICB2LWZvcj1cXFwicGxheWVyIGluIHRlYW0udXNlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuay1ib3gtMSBiZy1kYXJrLTIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XFxcInsgbmFtZTogJ3BsYXllcicsIHBhcmFtczogeyBpZDogcGxheWVyLmlkIH19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XFxcImdldEltYWdlTGluayhwbGF5ZXIuYXZhdGFyKVxcXCIgY2xhc3M9XFxcInctMTAwXFxcIiAvPjxici8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5rLWZlYXR1cmUtdGl0bGVcXFwiPnt7IHBsYXllci5uaWNrbmFtZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJwbGF5ZXIuZnJlZV9wbGF5ZXJcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPnt7JHQoJ2ZyZWUnKX19PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cXFwicGxheWVyLnRlYW1faWQ+MCAmJiBwbGF5ZXIuaWQ9PXRlYW0uY2FwdF9pZFxcXCI+PHNwYW4gY2xhc3M9XFxcInRleHQtaW5mb1xcXCI+e3skdCgnY2FwdGFpbicpfX08L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LXN1Y2Nlc3NcXFwiPnt7JHQoJ2luX3RlYW0nKX19PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9jYXJkPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxyXFxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXHJcXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG1ldGFJbmZvICgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcXHJcXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXFxyXFxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcXHJcXG4gICAgICAgICAgICB9KVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdEZXRhaWwgcGFnZSBvZiB0ZWFtJyxcXHJcXG4gICAgICAgICAgICAgICAgdGVhbTogbnVsbCxcXHJcXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIGludml0YXRpb25zOiBudWxsXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5nZXRUZWFtKCk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGdldFRlYW0oKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5BcnJheVRvVXJsKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJfd2l0aFxcXCIgOiAnZ2FtZSx1c2VycyxpbnN0aXR1dGlvbi5sb2NhdGlvbixpbnN0aXR1dGlvbi5sb2NhdGlvbi5wYXJlbnQnXFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGVhbXMvJyt0aGlzLiRyb3V0ZS5wYXJhbXMuaWQrXFxcIj9cXFwiK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICd0ZWFtJywgcmVzcG9uc2UuZGF0YSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gXFxcIlRlYW06IFxcXCIrdGhpcy50ZWFtLnRpdGxlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWV0YSgpLnJlZnJlc2goKTtcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBnZXRJbnZpdGF0aW9ucygpXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xcclxcbiAgICAgICAgICAgICAgICAgICAgJ3RlYW1faWQnIDogdGhpcy4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cycgOiAxLFxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcIl93aXRoXFxcIiA6ICd1c2VyLHRlYW0nXFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGVhbV91c2VyPycrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2ludml0YXRpb25zJywgcmVzcG9uc2UuZGF0YSk7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgam9pblRlYW0odGVhbV9pZClcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmF1dGhlbnRpY2F0ZWQpXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2xvZ2luJyB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBheGlvcy5wdXQoJy9hcGkvdGVhbXMvJyt0ZWFtX2lkKycvdXNlcnMvJyt0aGlzLnVzZXIuaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KCdqb2luX3RlYW1fcmVxdWVzdF9zdWNjZXNzJylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgICAubmstdGVhbS10YWJsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciArIHRyID4gdGQge1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5rLXRlYW0tdGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mMDdlbXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW0gIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTYzNDhjYjMyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTYzNDhjYjMyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS50ZWFtICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWRlY29yYXRlZC1oLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGVhbS50aXRsZSkpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB2ZXJ0aWNhbC1nYXBcIiB9LCBbXG4gICAgICBfYyhcImFzaWRlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTMgbmstc2lkZWJhci1zdGlja3ktcGFyZW50XCIgfSwgW1xuICAgICAgICBfdm0udGVhbSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1ib3gtMSBiZy1kYXJrLTIgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmdldEltYWdlTGluayhfdm0udGVhbS5pbWFnZSwgXCJhdmF0YXJfdGVhbVwiKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmF1dGhlbnRpY2F0ZWQgfHxcbiAgICAgICAgICAgICAgKF92bS50ZWFtLnF1YW50aXR5ID4gX3ZtLnRlYW0udXNlcnMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgX3ZtLmF1dGhlbnRpY2F0ZWQgJiZcbiAgICAgICAgICAgICAgICBfdm0udXNlci5pZCAhPSBfdm0udGVhbS5jYXB0X2lkICYmXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIudHlwZSA9PSBcInBsYXllclwiICYmXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIuYWN0aXZlKVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZSBmMDdlbSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uam9pblRlYW0oX3ZtLnRlYW0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcImpvaW5fdGVhbVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJuay10ZWFtLXRhYmxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNvdW50X21hdGNoZXNcIikpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImg1XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGVhbS5jb3VudF9maWdodHMpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiY291bnRfd2luc1wiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50ZWFtLmNvdW50X3dpbnMpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwidmljdG9yeV9yYXRlXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlYW0uY291bnRfZmlnaHRzID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImg1XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0udGVhbS5jb3VudF93aW5zIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlYW0uY291bnRfZmlnaHRzKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImg1XCIgfSwgW192bS5fdihcIjAlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTlcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJjYXJkXCIsIHsgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInBsYXllcnNcIikgfSB9LCBbXG4gICAgICAgICAgICBfdm0udGVhbSAhPT0gbnVsbCAmJiBfdm0udGVhbS51c2VycyAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IHZlcnRpY2FsLWdhcFwiIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW0udXNlcnMsIGZ1bmN0aW9uKHBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zIGNvbC1tZC0zIGNvbC14cy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstYm94LTEgYmctZGFyay0yIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBsYXllclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBwbGF5ZXIuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhwbGF5ZXIuYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS10aXRsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocGxheWVyLm5pY2tuYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5mcmVlX3BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiZnJlZVwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGxheWVyLnRlYW1faWQgPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5pZCA9PSBfdm0udGVhbS5jYXB0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYXB0YWluXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiaW5fdGVhbVwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02MzQ4Y2IzMlwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTYzNDhjYjMyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTYzNDhjYjMyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjM0OGNiMzJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjJlMDgyYWZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTYzNDhjYjMyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RldGFpbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjM0OGNiMzJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02MzQ4Y2IzMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTYzNDhjYjMyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjM0OGNiMzJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kZXRhaWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjM0OGNiMzJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02MzQ4Y2IzMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTYzNDhjYjMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIl0sInNvdXJjZVJvb3QiOiIifQ==