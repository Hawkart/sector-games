webpackJsonp([8],{

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
exports.push([module.i, "\n.nk-team-table{\n    width: 100%;\n}\n.nk-team-table > tbody > tr + tr > td {\n    border-top: 1px dotted rgba(255, 255, 255, 0.2);\n}\n.nk-team-table > tbody > tr > td {\n    padding: 20px 10px;\n}\n.f07em{\n    font-size: .7rem !important;\n}\n", "", {"version":3,"sources":["C:/xampp/htdocs/sector.local/resources/assets/js/pages/teams/resources/assets/js/pages/teams/detail.vue"],"names":[],"mappings":";AA8JA;IACA,YAAA;CACA;AACA;IACA,gDAAA;CACA;AAEA;IACA,mBAAA;CACA;AACA;IACA,4BAAA;CACA","file":"detail.vue","sourcesContent":["<template>\r\n    <div>\r\n        <div class=\"row\"  v-if=\"team!==null\">\r\n            <div class=\"col-lg-12\">\r\n                <h3 class=\"nk-decorated-h-3\"><span>{{team.title}}</span></h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row vertical-gap\">\r\n            <aside class=\"col-lg-3 nk-sidebar-sticky-parent\">\r\n                <div class=\"nk-box-1 bg-dark-2 text-center\" v-if=\"team!==null\">\r\n                    <img :src=\"getImageLink(team.image, 'avatar_team')\" class=\"w-100\">\r\n                    <div class=\"nk-gap\"></div>\r\n\r\n                    <button v-if=\"!authenticated || (team.quantity>team.users.length && authenticated && user.id!=team.capt_id && user.type=='player' && user.active)\" @click=\"joinTeam(team.id)\" class=\"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em w-100\">\r\n                        {{$t('join_team')}}\r\n                    </button>\r\n\r\n                    <table class=\"nk-team-table\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('count_matches')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\">{{team.count_fights}}</strong>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('count_wins')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\">{{team.count_wins}}</strong>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('victory_rate')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\" v-if=\"team.count_fights>0\">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</strong>\r\n                                <strong class=\"h5\" v-else>0%</strong>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </aside>\r\n            <div class=\"col-lg-9\">\r\n                <card :title=\"$t('players')\">\r\n                    <table class=\"nk-table\" v-if=\"team!==null && team.users!==null\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <th>{{$t('name')}}</th>\r\n                            <th>{{$t('victory_rate')}}</th>\r\n                            <th>{{$t('status')}}</th>\r\n                        </tr>\r\n                        <tr v-for=\"player in team.users\">\r\n                            <td>\r\n                                <router-link  :to=\"{ name: 'player', params: { id: player.id }}\"  class=\"vm-title\">\r\n                                    <img :src=\"getImageLink(player.avatar)\" class=\"w-50px mr-10\" />\r\n                                    <span>{{ player.nickname}}</span>\r\n                                </router-link>\r\n                            </td>\r\n                            <td class=\"text-center\" v-if=\"team.count_fights>0\">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</td>\r\n                            <td class=\"text-center\" v-else>0%</td>\r\n                            <td class=\"text-center\">\r\n                                <span v-if=\"player.free_player\"><span class=\"text-warning\">{{$t('free')}}</span></span>\r\n                                <span v-else-if=\"player.team_id>0 && player.id==team.capt_id\"><span class=\"text-info\">{{$t('captain')}}</span></span>\r\n                                <span v-else><span class=\"text-success\">{{$t('in_team')}}</span></span>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </card>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import { mapGetters } from 'vuex'\r\n    import axios from 'axios'\r\n    import swal from 'sweetalert2'\r\n\r\n    export default {\r\n        metaInfo () {\r\n            return {\r\n                title: this.title,\r\n            }\r\n        },\r\n        computed: {\r\n            ...mapGetters({\r\n                user: 'auth/user',\r\n                authenticated: 'auth/check',\r\n            })\r\n        },\r\n        data() {\r\n            return {\r\n                title: 'Detail page of team',\r\n                team: null,\r\n                response: null,\r\n                invitations: null\r\n            }\r\n        },\r\n        mounted() {\r\n            this.getTeam();\r\n        },\r\n        methods: {\r\n            getTeam()\r\n            {\r\n                var query = this.ArrayToUrl({\r\n                    \"_with\" : 'game,users,institution.location,institution.location.parent'\r\n                });\r\n                axios.get('/api/teams/'+this.$route.params.id+\"?\"+query).then((response) => {\r\n                    this.$set(this, 'team', response.data);\r\n                    this.title = \"Team: \"+this.team.title;\r\n                    this.$meta().refresh();\r\n                });\r\n            },\r\n            getInvitations()\r\n            {\r\n                var query = this.ArrayToUrl({\r\n                    'team_id' : this.$route.params.id,\r\n                    'status' : 1,\r\n                    \"_with\" : 'user,team'\r\n                });\r\n                axios.get('/api/team_user?'+query).then((response) => {\r\n                    this.$set(this, 'invitations', response.data);\r\n                });\r\n            },\r\n            joinTeam(team_id)\r\n            {\r\n                if(!this.authenticated)\r\n                {\r\n                    this.$router.push({ name: 'login' });\r\n                    return;\r\n                }\r\n\r\n                axios.put('/api/teams/'+team_id+'/users/'+this.user.id).then(response => {\r\n                    swal({\r\n                        type: 'success',\r\n                        title: this.$t('join_team_request_success')\r\n                    });\r\n                }).catch(error => {\r\n                    swal({\r\n                        type: 'warning',\r\n                        title: error.response.data.error\r\n                    });\r\n                });\r\n            }\r\n        },\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .nk-team-table{\r\n        width: 100%;\r\n    }\r\n    .nk-team-table > tbody > tr + tr > td {\r\n        border-top: 1px dotted rgba(255, 255, 255, 0.2);\r\n    }\r\n\r\n    .nk-team-table > tbody > tr > td {\r\n        padding: 20px 10px;\r\n    }\r\n    .f07em{\r\n        font-size: .7rem !important;\r\n    }\r\n</style>"],"sourceRoot":""}]);

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
              ? _c("table", { staticClass: "nk-table" }, [
                  _c(
                    "tbody",
                    [
                      _c("tr", [
                        _c("th", [_vm._v(_vm._s(_vm.$t("name")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("victory_rate")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("status")))])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.team.users, function(player) {
                        return _c("tr", [
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "vm-title",
                                  attrs: {
                                    to: {
                                      name: "player",
                                      params: { id: player.id }
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "w-50px mr-10",
                                    attrs: {
                                      src: _vm.getImageLink(player.avatar)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(player.nickname))])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.team.count_fights > 0
                            ? _c("td", { staticClass: "text-center" }, [
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
                            : _c("td", { staticClass: "text-center" }, [
                                _vm._v("0%")
                              ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
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
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9iZDU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9lNzgzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9kODlmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRkE7Ozs7QUFDQTs7Ozs7O2tCQUVBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEtBTEE7O0FBTUEseUNBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBRkEsTUFEQSxDQU5BO0FBWUEsUUFaQSxrQkFZQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSxzQkFGQTtBQUdBLDBCQUhBO0FBSUE7QUFKQTtBQU1BLEtBbkJBO0FBb0JBLFdBcEJBLHFCQW9CQTtBQUNBO0FBQ0EsS0F0QkE7O0FBdUJBO0FBQ0EsZUFEQSxxQkFFQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFKQTtBQUtBLFNBWEE7QUFZQSxzQkFaQSw0QkFhQTtBQUFBOztBQUNBO0FBQ0EsZ0RBREE7QUFFQSwyQkFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0EsYUFGQTtBQUdBLFNBdEJBO0FBdUJBLGdCQXZCQSxvQkF1QkEsT0F2QkEsRUF3QkE7QUFBQTs7QUFDQSxxQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBREE7QUFFQTtBQUZBO0FBSUEsYUFMQSxFQUtBLEtBTEEsQ0FLQTtBQUNBO0FBQ0EsbUNBREE7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QUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyw0VUFBa1I7QUFDNVI7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBa0U7QUFDbkc7QUFDOGI7QUFDYTtBQUMzYztBQUN5UTtBQUN6UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVXQUFjO0FBQ2hCLEVBQUUsK05BQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVjLGdGQUFpQiIsImZpbGUiOiJqcy84LjYzZWYzZDA5OTJkMzg2NmY5ZmMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgIHYtaWY9XCJ0ZWFtIT09bnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJuay1kZWNvcmF0ZWQtaC0zXCI+PHNwYW4+e3t0ZWFtLnRpdGxlfX08L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2ZXJ0aWNhbC1nYXBcIj5cclxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY29sLWxnLTMgbmstc2lkZWJhci1zdGlja3ktcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstYm94LTEgYmctZGFyay0yIHRleHQtY2VudGVyXCIgdi1pZj1cInRlYW0hPT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHRlYW0uaW1hZ2UsICdhdmF0YXJfdGVhbScpXCIgY2xhc3M9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiIWF1dGhlbnRpY2F0ZWQgfHwgKHRlYW0ucXVhbnRpdHk+dGVhbS51c2Vycy5sZW5ndGggJiYgYXV0aGVudGljYXRlZCAmJiB1c2VyLmlkIT10ZWFtLmNhcHRfaWQgJiYgdXNlci50eXBlPT0ncGxheWVyJyAmJiB1c2VyLmFjdGl2ZSlcIiBAY2xpY2s9XCJqb2luVGVhbSh0ZWFtLmlkKVwiIGNsYXNzPVwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZSBmMDdlbSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdqb2luX3RlYW0nKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIm5rLXRlYW0tdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg2XCI+e3skdCgnY291bnRfbWF0Y2hlcycpfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg1XCI+e3t0ZWFtLmNvdW50X2ZpZ2h0c319PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg2XCI+e3skdCgnY291bnRfd2lucycpfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg1XCI+e3t0ZWFtLmNvdW50X3dpbnN9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJoNlwiPnt7JHQoJ3ZpY3RvcnlfcmF0ZScpfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg1XCIgdi1pZj1cInRlYW0uY291bnRfZmlnaHRzPjBcIj57eyBOdW1iZXIoKHRlYW0uY291bnRfd2lucy90ZWFtLmNvdW50X2ZpZ2h0cyoxMDApLnRvRml4ZWQoMikpfX0lPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg1XCIgdi1lbHNlPjAlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgICAgPGNhcmQgOnRpdGxlPVwiJHQoJ3BsYXllcnMnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIm5rLXRhYmxlXCIgdi1pZj1cInRlYW0hPT1udWxsICYmIHRlYW0udXNlcnMhPT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ25hbWUnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCd2aWN0b3J5X3JhdGUnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdzdGF0dXMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwicGxheWVyIGluIHRlYW0udXNlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3BsYXllcicsIHBhcmFtczogeyBpZDogcGxheWVyLmlkIH19XCIgIGNsYXNzPVwidm0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHBsYXllci5hdmF0YXIpXCIgY2xhc3M9XCJ3LTUwcHggbXItMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBwbGF5ZXIubmlja25hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1pZj1cInRlYW0uY291bnRfZmlnaHRzPjBcIj57eyBOdW1iZXIoKHRlYW0uY291bnRfd2lucy90ZWFtLmNvdW50X2ZpZ2h0cyoxMDApLnRvRml4ZWQoMikpfX0lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1lbHNlPjAlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBsYXllci5mcmVlX3BsYXllclwiPjxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+e3skdCgnZnJlZScpfX08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cInBsYXllci50ZWFtX2lkPjAgJiYgcGxheWVyLmlkPT10ZWFtLmNhcHRfaWRcIj48c3BhbiBjbGFzcz1cInRleHQtaW5mb1wiPnt7JHQoJ2NhcHRhaW4nKX19PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+PHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj57eyR0KCdpbl90ZWFtJyl9fTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGV0YWlsIHBhZ2Ugb2YgdGVhbScsXHJcbiAgICAgICAgICAgICAgICB0ZWFtOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uczogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFRlYW0oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZ2V0VGVhbSgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuQXJyYXlUb1VybCh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJfd2l0aFwiIDogJ2dhbWUsdXNlcnMsaW5zdGl0dXRpb24ubG9jYXRpb24saW5zdGl0dXRpb24ubG9jYXRpb24ucGFyZW50J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGVhbXMvJyt0aGlzLiRyb3V0ZS5wYXJhbXMuaWQrXCI/XCIrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICd0ZWFtJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IFwiVGVhbTogXCIrdGhpcy50ZWFtLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1ldGEoKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0SW52aXRhdGlvbnMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgICd0ZWFtX2lkJyA6IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJyA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJfd2l0aFwiIDogJ3VzZXIsdGVhbSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RlYW1fdXNlcj8nK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnaW52aXRhdGlvbnMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBqb2luVGVhbSh0ZWFtX2lkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hdXRoZW50aWNhdGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2xvZ2luJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MucHV0KCcvYXBpL3RlYW1zLycrdGVhbV9pZCsnL3VzZXJzLycrdGhpcy51c2VyLmlkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy4kdCgnam9pbl90ZWFtX3JlcXVlc3Rfc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAubmstdGVhbS10YWJsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciArIHRyID4gdGQge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZjA3ZW17XHJcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm5rLXRlYW0tdGFibGV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmstdGVhbS10YWJsZSA+IHRib2R5ID4gdHIgKyB0ciA+IHRkIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcbi5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcbn1cXG4uZjA3ZW17XFxuICAgIGZvbnQtc2l6ZTogLjdyZW0gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L3hhbXBwL2h0ZG9jcy9zZWN0b3IubG9jYWwvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQThKQTtJQUNBLFlBQUE7Q0FDQTtBQUNBO0lBQ0EsZ0RBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7Q0FDQTtBQUNBO0lBQ0EsNEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICB2LWlmPVxcXCJ0ZWFtIT09bnVsbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJuay1kZWNvcmF0ZWQtaC0zXFxcIj48c3Bhbj57e3RlYW0udGl0bGV9fTwvc3Bhbj48L2gzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgdmVydGljYWwtZ2FwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3M9XFxcImNvbC1sZy0zIG5rLXNpZGViYXItc3RpY2t5LXBhcmVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5rLWJveC0xIGJnLWRhcmstMiB0ZXh0LWNlbnRlclxcXCIgdi1pZj1cXFwidGVhbSE9PW51bGxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJnZXRJbWFnZUxpbmsodGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcXFwiIGNsYXNzPVxcXCJ3LTEwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuay1nYXBcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCIhYXV0aGVudGljYXRlZCB8fCAodGVhbS5xdWFudGl0eT50ZWFtLnVzZXJzLmxlbmd0aCAmJiBhdXRoZW50aWNhdGVkICYmIHVzZXIuaWQhPXRlYW0uY2FwdF9pZCAmJiB1c2VyLnR5cGU9PSdwbGF5ZXInICYmIHVzZXIuYWN0aXZlKVxcXCIgQGNsaWNrPVxcXCJqb2luVGVhbSh0ZWFtLmlkKVxcXCIgY2xhc3M9XFxcIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGUgZjA3ZW0gdy0xMDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2pvaW5fdGVhbScpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJuay10ZWFtLXRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJoNlxcXCI+e3skdCgnY291bnRfbWF0Y2hlcycpfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDVcXFwiPnt7dGVhbS5jb3VudF9maWdodHN9fTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJoNlxcXCI+e3skdCgnY291bnRfd2lucycpfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDVcXFwiPnt7dGVhbS5jb3VudF93aW5zfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDZcXFwiPnt7JHQoJ3ZpY3RvcnlfcmF0ZScpfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDVcXFwiIHYtaWY9XFxcInRlYW0uY291bnRfZmlnaHRzPjBcXFwiPnt7IE51bWJlcigodGVhbS5jb3VudF93aW5zL3RlYW0uY291bnRfZmlnaHRzKjEwMCkudG9GaXhlZCgyKSl9fSU8L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XFxcImg1XFxcIiB2LWVsc2U+MCU8L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2FzaWRlPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy05XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGNhcmQgOnRpdGxlPVxcXCIkdCgncGxheWVycycpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwibmstdGFibGVcXFwiIHYtaWY9XFxcInRlYW0hPT1udWxsICYmIHRlYW0udXNlcnMhPT1udWxsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgnbmFtZScpfX08L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgndmljdG9yeV9yYXRlJyl9fTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdzdGF0dXMnKX19PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cXFwicGxheWVyIGluIHRlYW0udXNlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cXFwieyBuYW1lOiAncGxheWVyJywgcGFyYW1zOiB7IGlkOiBwbGF5ZXIuaWQgfX1cXFwiICBjbGFzcz1cXFwidm0tdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwiZ2V0SW1hZ2VMaW5rKHBsYXllci5hdmF0YXIpXFxcIiBjbGFzcz1cXFwidy01MHB4IG1yLTEwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IHBsYXllci5uaWNrbmFtZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdi1pZj1cXFwidGVhbS5jb3VudF9maWdodHM+MFxcXCI+e3sgTnVtYmVyKCh0ZWFtLmNvdW50X3dpbnMvdGVhbS5jb3VudF9maWdodHMqMTAwKS50b0ZpeGVkKDIpKX19JTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHYtZWxzZT4wJTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cXFwicGxheWVyLmZyZWVfcGxheWVyXFxcIj48c3BhbiBjbGFzcz1cXFwidGV4dC13YXJuaW5nXFxcIj57eyR0KCdmcmVlJyl9fTwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XFxcInBsYXllci50ZWFtX2lkPjAgJiYgcGxheWVyLmlkPT10ZWFtLmNhcHRfaWRcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWluZm9cXFwiPnt7JHQoJ2NhcHRhaW4nKX19PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT48c3BhbiBjbGFzcz1cXFwidGV4dC1zdWNjZXNzXFxcIj57eyR0KCdpbl90ZWFtJyl9fTwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgPC9jYXJkPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxyXFxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXHJcXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG1ldGFJbmZvICgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcXHJcXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXFxyXFxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcXHJcXG4gICAgICAgICAgICB9KVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdEZXRhaWwgcGFnZSBvZiB0ZWFtJyxcXHJcXG4gICAgICAgICAgICAgICAgdGVhbTogbnVsbCxcXHJcXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIGludml0YXRpb25zOiBudWxsXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy5nZXRUZWFtKCk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGdldFRlYW0oKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5BcnJheVRvVXJsKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJfd2l0aFxcXCIgOiAnZ2FtZSx1c2VycyxpbnN0aXR1dGlvbi5sb2NhdGlvbixpbnN0aXR1dGlvbi5sb2NhdGlvbi5wYXJlbnQnXFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGVhbXMvJyt0aGlzLiRyb3V0ZS5wYXJhbXMuaWQrXFxcIj9cXFwiK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICd0ZWFtJywgcmVzcG9uc2UuZGF0YSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gXFxcIlRlYW06IFxcXCIrdGhpcy50ZWFtLnRpdGxlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWV0YSgpLnJlZnJlc2goKTtcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBnZXRJbnZpdGF0aW9ucygpXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xcclxcbiAgICAgICAgICAgICAgICAgICAgJ3RlYW1faWQnIDogdGhpcy4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cycgOiAxLFxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcIl93aXRoXFxcIiA6ICd1c2VyLHRlYW0nXFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGVhbV91c2VyPycrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2ludml0YXRpb25zJywgcmVzcG9uc2UuZGF0YSk7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgam9pblRlYW0odGVhbV9pZClcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmF1dGhlbnRpY2F0ZWQpXFxyXFxuICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2xvZ2luJyB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBheGlvcy5wdXQoJy9hcGkvdGVhbXMvJyt0ZWFtX2lkKycvdXNlcnMvJyt0aGlzLnVzZXIuaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KCdqb2luX3RlYW1fcmVxdWVzdF9zdWNjZXNzJylcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgICAubmstdGVhbS10YWJsZXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciArIHRyID4gdGQge1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5rLXRlYW0tdGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mMDdlbXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW0gIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTYzNDhjYjMyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTYzNDhjYjMyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLnRlYW0gIT09IG51bGxcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZGVjb3JhdGVkLWgtM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50ZWFtLnRpdGxlKSldKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHZlcnRpY2FsLWdhcFwiIH0sIFtcbiAgICAgIF9jKFwiYXNpZGVcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMyBuay1zaWRlYmFyLXN0aWNreS1wYXJlbnRcIiB9LCBbXG4gICAgICAgIF92bS50ZWFtICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWJveC0xIGJnLWRhcmstMiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKF92bS50ZWFtLmltYWdlLCBcImF2YXRhcl90ZWFtXCIpIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0uYXV0aGVudGljYXRlZCB8fFxuICAgICAgICAgICAgICAoX3ZtLnRlYW0ucXVhbnRpdHkgPiBfdm0udGVhbS51c2Vycy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICBfdm0uYXV0aGVudGljYXRlZCAmJlxuICAgICAgICAgICAgICAgIF92bS51c2VyLmlkICE9IF92bS50ZWFtLmNhcHRfaWQgJiZcbiAgICAgICAgICAgICAgICBfdm0udXNlci50eXBlID09IFwicGxheWVyXCIgJiZcbiAgICAgICAgICAgICAgICBfdm0udXNlci5hY3RpdmUpXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMSB0ZXh0LXdoaXRlIGYwN2VtIHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5qb2luVGVhbShfdm0udGVhbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiam9pbl90ZWFtXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLXRlYW0tdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiY291bnRfbWF0Y2hlc1wiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50ZWFtLmNvdW50X2ZpZ2h0cykpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImg2XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb3VudF93aW5zXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRlYW0uY291bnRfd2lucykpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImg2XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ2aWN0b3J5X3JhdGVcIikpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbS5jb3VudF9maWdodHMgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS50ZWFtLmNvdW50X3dpbnMgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbS5jb3VudF9maWdodHMpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDVcIiB9LCBbX3ZtLl92KFwiMCVcIildKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImNhcmRcIiwgeyBhdHRyczogeyB0aXRsZTogX3ZtLiR0KFwicGxheWVyc1wiKSB9IH0sIFtcbiAgICAgICAgICAgIF92bS50ZWFtICE9PSBudWxsICYmIF92bS50ZWFtLnVzZXJzICE9PSBudWxsXG4gICAgICAgICAgICAgID8gX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLXRhYmxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJuYW1lXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInZpY3RvcnlfcmF0ZVwiKSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJzdGF0dXNcIikpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW0udXNlcnMsIGZ1bmN0aW9uKHBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZtLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGxheWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogcGxheWVyLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTUwcHggbXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhwbGF5ZXIuYXZhdGFyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHBsYXllci5uaWNrbmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbS5jb3VudF9maWdodHMgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnRlYW0uY291bnRfd2lucyAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbS5jb3VudF9maWdodHMpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjAlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5mcmVlX3BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiZnJlZVwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGxheWVyLnRlYW1faWQgPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5pZCA9PSBfdm0udGVhbS5jYXB0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjYXB0YWluXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiaW5fdGVhbVwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTYzNDhjYjMyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjM0OGNiMzJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNjM0OGNiMzJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTYzNDhjYjMyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RldGFpbC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjIyZTA4MmFmXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02MzQ4Y2IzMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kZXRhaWwudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTYzNDhjYjMyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RldGFpbC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjM0OGNiMzJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02MzQ4Y2IzMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjM0OGNiMzJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kZXRhaWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjM0OGNiMzJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02MzQ4Y2IzMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTYzNDhjYjMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9