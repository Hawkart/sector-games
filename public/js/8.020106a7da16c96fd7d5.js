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
exports.push([module.i, "\n.nk-team-table{\n    width: 100%;\n}\n.nk-team-table > tbody > tr + tr > td {\n    border-top: 1px dotted rgba(255, 255, 255, 0.2);\n}\n.nk-team-table > tbody > tr > td {\n    padding: 20px 10px;\n}\n.f07em{\n    font-size: .7rem !important;\n}\n", "", {"version":3,"sources":["C:/xampp/htdocs/sector.local/resources/assets/js/pages/teams/resources/assets/js/pages/teams/detail.vue"],"names":[],"mappings":";AAqKA;IACA,YAAA;CACA;AACA;IACA,gDAAA;CACA;AAEA;IACA,mBAAA;CACA;AACA;IACA,4BAAA;CACA","file":"detail.vue","sourcesContent":["<template>\r\n    <div>\r\n        <div class=\"row\"  v-if=\"team!==null\">\r\n            <div class=\"col-lg-12\">\r\n                <h3 class=\"nk-decorated-h-3\"><span>{{team.title}}</span></h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row vertical-gap\">\r\n            <aside class=\"col-lg-3 nk-sidebar-sticky-parent\">\r\n                <div class=\"nk-box-1 bg-dark-2 text-center\" v-if=\"team!==null\">\r\n                    <img :src=\"getImageLink(team.image, 'avatar_team')\" class=\"w-100\">\r\n                    <div class=\"nk-gap\"></div>\r\n\r\n                    <button v-if=\"!authenticated || (team.quantity>team.users.length && authenticated && user.id!=team.capt_id && user.type=='player' && user.active)\" @click=\"joinTeam(team.id)\" class=\"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em w-100\">\r\n                        {{$t('join_team')}}\r\n                    </button>\r\n\r\n                    <table class=\"nk-team-table\">\r\n                        <tbody>\r\n\r\n                        <tr v-if=\"team.institution_id>0\">\r\n                            <td colspan=\"2\">\r\n                                <span class=\"h6 text-left\">{{team.institution.location.parent.title}}, {{team.institution.location.title}}</span>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('count_matches')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\">{{team.count_fights}}</strong>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('count_wins')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\">{{team.count_wins}}</strong>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('victory_rate')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\" v-if=\"team.count_fights>0\">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</strong>\r\n                                <strong class=\"h5\" v-else>0%</strong>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </aside>\r\n            <div class=\"col-lg-9\">\r\n                <card :title=\"$t('players')\">\r\n                    <table class=\"nk-table\" v-if=\"team!==null && team.users!==null\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <th>{{$t('name')}}</th>\r\n                            <th>{{$t('victory_rate')}}</th>\r\n                            <th>{{$t('status')}}</th>\r\n                        </tr>\r\n                        <tr v-for=\"player in team.users\">\r\n                            <td>\r\n                                <router-link  :to=\"{ name: 'player', params: { id: player.id }}\"  class=\"vm-title\">\r\n                                    <img :src=\"getImageLink(player.avatar)\" class=\"w-50px mr-10\" />\r\n                                    <span>{{ player.nickname}}</span>\r\n                                </router-link>\r\n                            </td>\r\n                            <td class=\"text-center\" v-if=\"team.count_fights>0\">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</td>\r\n                            <td class=\"text-center\" v-else>0%</td>\r\n                            <td class=\"text-center\">\r\n                                <span v-if=\"player.free_player\"><span class=\"text-warning\">{{$t('free')}}</span></span>\r\n                                <span v-else-if=\"player.team_id>0 && player.id==team.capt_id\"><span class=\"text-info\">{{$t('captain')}}</span></span>\r\n                                <span v-else><span class=\"text-success\">{{$t('in_team')}}</span></span>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </card>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import { mapGetters } from 'vuex'\r\n    import axios from 'axios'\r\n    import swal from 'sweetalert2'\r\n\r\n    export default {\r\n        metaInfo () {\r\n            return {\r\n                title: this.title,\r\n            }\r\n        },\r\n        computed: {\r\n            ...mapGetters({\r\n                user: 'auth/user',\r\n                authenticated: 'auth/check',\r\n            })\r\n        },\r\n        data() {\r\n            return {\r\n                title: 'Detail page of team',\r\n                team: null,\r\n                response: null,\r\n                invitations: null\r\n            }\r\n        },\r\n        mounted() {\r\n            this.getTeam();\r\n        },\r\n        methods: {\r\n            getTeam()\r\n            {\r\n                var query = this.ArrayToUrl({\r\n                    \"_with\" : 'game,users,institution.location,institution.location.parent'\r\n                });\r\n                axios.get('/api/teams/'+this.$route.params.id+\"?\"+query).then((response) => {\r\n                    this.$set(this, 'team', response.data);\r\n                    this.title = \"Team: \"+this.team.title;\r\n                    this.$meta().refresh();\r\n                });\r\n            },\r\n            getInvitations()\r\n            {\r\n                var query = this.ArrayToUrl({\r\n                    'team_id' : this.$route.params.id,\r\n                    'status' : 1,\r\n                    \"_with\" : 'user,team'\r\n                });\r\n                axios.get('/api/team_user?'+query).then((response) => {\r\n                    this.$set(this, 'invitations', response.data);\r\n                });\r\n            },\r\n            joinTeam(team_id)\r\n            {\r\n                if(!this.authenticated)\r\n                {\r\n                    this.$router.push({ name: 'login' });\r\n                    return;\r\n                }\r\n\r\n                axios.put('/api/teams/'+team_id+'/users/'+this.user.id).then(response => {\r\n                    swal({\r\n                        type: 'success',\r\n                        title: this.$t('join_team_request_success')\r\n                    });\r\n                }).catch(error => {\r\n                    swal({\r\n                        type: 'warning',\r\n                        title: error.response.data.error\r\n                    });\r\n                });\r\n            }\r\n        },\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .nk-team-table{\r\n        width: 100%;\r\n    }\r\n    .nk-team-table > tbody > tr + tr > td {\r\n        border-top: 1px dotted rgba(255, 255, 255, 0.2);\r\n    }\r\n\r\n    .nk-team-table > tbody > tr > td {\r\n        padding: 20px 10px;\r\n    }\r\n    .f07em{\r\n        font-size: .7rem !important;\r\n    }\r\n</style>"],"sourceRoot":""}]);

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
                  _vm.team.institution_id > 0
                    ? _c("tr", [
                        _c("td", { attrs: { colspan: "2" } }, [
                          _c("span", { staticClass: "h6 text-left" }, [
                            _vm._v(
                              _vm._s(
                                _vm.team.institution.location.parent.title
                              ) +
                                ", " +
                                _vm._s(_vm.team.institution.location.title)
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9iZDU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9lNzgzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9kODlmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRkE7Ozs7QUFDQTs7Ozs7O2tCQUVBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEtBTEE7O0FBTUEseUNBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBRkEsTUFEQSxDQU5BO0FBWUEsUUFaQSxrQkFZQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSxzQkFGQTtBQUdBLDBCQUhBO0FBSUE7QUFKQTtBQU1BLEtBbkJBO0FBb0JBLFdBcEJBLHFCQW9CQTtBQUNBO0FBQ0EsS0F0QkE7O0FBdUJBO0FBQ0EsZUFEQSxxQkFFQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFKQTtBQUtBLFNBWEE7QUFZQSxzQkFaQSw0QkFhQTtBQUFBOztBQUNBO0FBQ0EsZ0RBREE7QUFFQSwyQkFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0EsYUFGQTtBQUdBLFNBdEJBO0FBdUJBLGdCQXZCQSxvQkF1QkEsT0F2QkEsRUF3QkE7QUFBQTs7QUFDQSxxQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBREE7QUFFQTtBQUZBO0FBSUEsYUFMQSxFQUtBLEtBTEEsQ0FLQTtBQUNBO0FBQ0EsbUNBREE7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O0FBQ0EsY0FBYyxtQkFBTyxDQUFDLG1TQUE0UztBQUNsVSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLHdEQUFzRSxnQ0FBZ0M7QUFDM0g7QUFDQSxHQUFHLEtBQVU7QUFDYjtBQUNBO0FBQ0Esc0pBQXNKLGtGQUFrRjtBQUN4TywrSkFBK0osa0ZBQWtGO0FBQ2pQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyw0VUFBa1I7QUFDNVI7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBa0U7QUFDbkc7QUFDOGI7QUFDYTtBQUMzYztBQUN5UTtBQUN6UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVXQUFjO0FBQ2hCLEVBQUUsK05BQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVjLGdGQUFpQiIsImZpbGUiOiJqcy84LjAyMDEwNmE3ZGExNmM5NmZkN2Q1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgIHYtaWY9XCJ0ZWFtIT09bnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJuay1kZWNvcmF0ZWQtaC0zXCI+PHNwYW4+e3t0ZWFtLnRpdGxlfX08L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2ZXJ0aWNhbC1nYXBcIj5cclxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY29sLWxnLTMgbmstc2lkZWJhci1zdGlja3ktcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstYm94LTEgYmctZGFyay0yIHRleHQtY2VudGVyXCIgdi1pZj1cInRlYW0hPT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHRlYW0uaW1hZ2UsICdhdmF0YXJfdGVhbScpXCIgY2xhc3M9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiIWF1dGhlbnRpY2F0ZWQgfHwgKHRlYW0ucXVhbnRpdHk+dGVhbS51c2Vycy5sZW5ndGggJiYgYXV0aGVudGljYXRlZCAmJiB1c2VyLmlkIT10ZWFtLmNhcHRfaWQgJiYgdXNlci50eXBlPT0ncGxheWVyJyAmJiB1c2VyLmFjdGl2ZSlcIiBAY2xpY2s9XCJqb2luVGVhbSh0ZWFtLmlkKVwiIGNsYXNzPVwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZSBmMDdlbSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdqb2luX3RlYW0nKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIm5rLXRlYW0tdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtaWY9XCJ0ZWFtLmluc3RpdHV0aW9uX2lkPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaDYgdGV4dC1sZWZ0XCI+e3t0ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uLnBhcmVudC50aXRsZX19LCB7e3RlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24udGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg2XCI+e3skdCgnY291bnRfbWF0Y2hlcycpfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg1XCI+e3t0ZWFtLmNvdW50X2ZpZ2h0c319PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg2XCI+e3skdCgnY291bnRfd2lucycpfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg1XCI+e3t0ZWFtLmNvdW50X3dpbnN9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJoNlwiPnt7JHQoJ3ZpY3RvcnlfcmF0ZScpfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg1XCIgdi1pZj1cInRlYW0uY291bnRfZmlnaHRzPjBcIj57eyBOdW1iZXIoKHRlYW0uY291bnRfd2lucy90ZWFtLmNvdW50X2ZpZ2h0cyoxMDApLnRvRml4ZWQoMikpfX0lPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImg1XCIgdi1lbHNlPjAlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgICAgPGNhcmQgOnRpdGxlPVwiJHQoJ3BsYXllcnMnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIm5rLXRhYmxlXCIgdi1pZj1cInRlYW0hPT1udWxsICYmIHRlYW0udXNlcnMhPT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ25hbWUnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCd2aWN0b3J5X3JhdGUnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdzdGF0dXMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwicGxheWVyIGluIHRlYW0udXNlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3BsYXllcicsIHBhcmFtczogeyBpZDogcGxheWVyLmlkIH19XCIgIGNsYXNzPVwidm0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHBsYXllci5hdmF0YXIpXCIgY2xhc3M9XCJ3LTUwcHggbXItMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBwbGF5ZXIubmlja25hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1pZj1cInRlYW0uY291bnRfZmlnaHRzPjBcIj57eyBOdW1iZXIoKHRlYW0uY291bnRfd2lucy90ZWFtLmNvdW50X2ZpZ2h0cyoxMDApLnRvRml4ZWQoMikpfX0lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1lbHNlPjAlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInBsYXllci5mcmVlX3BsYXllclwiPjxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+e3skdCgnZnJlZScpfX08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cInBsYXllci50ZWFtX2lkPjAgJiYgcGxheWVyLmlkPT10ZWFtLmNhcHRfaWRcIj48c3BhbiBjbGFzcz1cInRleHQtaW5mb1wiPnt7JHQoJ2NhcHRhaW4nKX19PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+PHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj57eyR0KCdpbl90ZWFtJyl9fTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGV0YWlsIHBhZ2Ugb2YgdGVhbScsXHJcbiAgICAgICAgICAgICAgICB0ZWFtOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uczogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFRlYW0oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZ2V0VGVhbSgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuQXJyYXlUb1VybCh7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJfd2l0aFwiIDogJ2dhbWUsdXNlcnMsaW5zdGl0dXRpb24ubG9jYXRpb24saW5zdGl0dXRpb24ubG9jYXRpb24ucGFyZW50J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGVhbXMvJyt0aGlzLiRyb3V0ZS5wYXJhbXMuaWQrXCI/XCIrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICd0ZWFtJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IFwiVGVhbTogXCIrdGhpcy50ZWFtLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1ldGEoKS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0SW52aXRhdGlvbnMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgICd0ZWFtX2lkJyA6IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJyA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJfd2l0aFwiIDogJ3VzZXIsdGVhbSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RlYW1fdXNlcj8nK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnaW52aXRhdGlvbnMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBqb2luVGVhbSh0ZWFtX2lkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hdXRoZW50aWNhdGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2xvZ2luJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MucHV0KCcvYXBpL3RlYW1zLycrdGVhbV9pZCsnL3VzZXJzLycrdGhpcy51c2VyLmlkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy4kdCgnam9pbl90ZWFtX3JlcXVlc3Rfc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAubmstdGVhbS10YWJsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciArIHRyID4gdGQge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZjA3ZW17XHJcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm5rLXRlYW0tdGFibGV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmstdGVhbS10YWJsZSA+IHRib2R5ID4gdHIgKyB0ciA+IHRkIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcbi5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcbn1cXG4uZjA3ZW17XFxuICAgIGZvbnQtc2l6ZTogLjdyZW0gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L3hhbXBwL2h0ZG9jcy9zZWN0b3IubG9jYWwvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXFLQTtJQUNBLFlBQUE7Q0FDQTtBQUNBO0lBQ0EsZ0RBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7Q0FDQTtBQUNBO0lBQ0EsNEJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZGV0YWlsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICB2LWlmPVxcXCJ0ZWFtIT09bnVsbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJuay1kZWNvcmF0ZWQtaC0zXFxcIj48c3Bhbj57e3RlYW0udGl0bGV9fTwvc3Bhbj48L2gzPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgdmVydGljYWwtZ2FwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3M9XFxcImNvbC1sZy0zIG5rLXNpZGViYXItc3RpY2t5LXBhcmVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5rLWJveC0xIGJnLWRhcmstMiB0ZXh0LWNlbnRlclxcXCIgdi1pZj1cXFwidGVhbSE9PW51bGxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJnZXRJbWFnZUxpbmsodGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcXFwiIGNsYXNzPVxcXCJ3LTEwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuay1nYXBcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCIhYXV0aGVudGljYXRlZCB8fCAodGVhbS5xdWFudGl0eT50ZWFtLnVzZXJzLmxlbmd0aCAmJiBhdXRoZW50aWNhdGVkICYmIHVzZXIuaWQhPXRlYW0uY2FwdF9pZCAmJiB1c2VyLnR5cGU9PSdwbGF5ZXInICYmIHVzZXIuYWN0aXZlKVxcXCIgQGNsaWNrPVxcXCJqb2luVGVhbSh0ZWFtLmlkKVxcXCIgY2xhc3M9XFxcIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGUgZjA3ZW0gdy0xMDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2pvaW5fdGVhbScpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJuay10ZWFtLXRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtaWY9XFxcInRlYW0uaW5zdGl0dXRpb25faWQ+MFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCIyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoNiB0ZXh0LWxlZnRcXFwiPnt7dGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbi5wYXJlbnQudGl0bGV9fSwge3t0ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uLnRpdGxlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XFxcImg2XFxcIj57eyR0KCdjb3VudF9tYXRjaGVzJyl9fTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJoNVxcXCI+e3t0ZWFtLmNvdW50X2ZpZ2h0c319PC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XFxcImg2XFxcIj57eyR0KCdjb3VudF93aW5zJyl9fTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJoNVxcXCI+e3t0ZWFtLmNvdW50X3dpbnN9fTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJoNlxcXCI+e3skdCgndmljdG9yeV9yYXRlJyl9fTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJoNVxcXCIgdi1pZj1cXFwidGVhbS5jb3VudF9maWdodHM+MFxcXCI+e3sgTnVtYmVyKCh0ZWFtLmNvdW50X3dpbnMvdGVhbS5jb3VudF9maWdodHMqMTAwKS50b0ZpeGVkKDIpKX19JTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDVcXFwiIHYtZWxzZT4wJTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvYXNpZGU+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Y2FyZCA6dGl0bGU9XFxcIiR0KCdwbGF5ZXJzJylcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJuay10YWJsZVxcXCIgdi1pZj1cXFwidGVhbSE9PW51bGwgJiYgdGVhbS51c2VycyE9PW51bGxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCduYW1lJyl9fTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCd2aWN0b3J5X3JhdGUnKX19PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ3N0YXR1cycpfX08L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCJwbGF5ZXIgaW4gdGVhbS51c2Vyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayAgOnRvPVxcXCJ7IG5hbWU6ICdwbGF5ZXInLCBwYXJhbXM6IHsgaWQ6IHBsYXllci5pZCB9fVxcXCIgIGNsYXNzPVxcXCJ2bS10aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJnZXRJbWFnZUxpbmsocGxheWVyLmF2YXRhcilcXFwiIGNsYXNzPVxcXCJ3LTUwcHggbXItMTBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgcGxheWVyLm5pY2tuYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB2LWlmPVxcXCJ0ZWFtLmNvdW50X2ZpZ2h0cz4wXFxcIj57eyBOdW1iZXIoKHRlYW0uY291bnRfd2lucy90ZWFtLmNvdW50X2ZpZ2h0cyoxMDApLnRvRml4ZWQoMikpfX0lPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgdi1lbHNlPjAlPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJwbGF5ZXIuZnJlZV9wbGF5ZXJcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LXdhcm5pbmdcXFwiPnt7JHQoJ2ZyZWUnKX19PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cXFwicGxheWVyLnRlYW1faWQ+MCAmJiBwbGF5ZXIuaWQ9PXRlYW0uY2FwdF9pZFxcXCI+PHNwYW4gY2xhc3M9XFxcInRleHQtaW5mb1xcXCI+e3skdCgnY2FwdGFpbicpfX08L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LXN1Y2Nlc3NcXFwiPnt7JHQoJ2luX3RlYW0nKX19PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICA8L2NhcmQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXHJcXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcclxcbiAgICBpbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0MidcXHJcXG5cXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbWV0YUluZm8gKCkge1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xcclxcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcXHJcXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snLFxcclxcbiAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YSgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RldGFpbCBwYWdlIG9mIHRlYW0nLFxcclxcbiAgICAgICAgICAgICAgICB0ZWFtOiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogbnVsbCxcXHJcXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbnM6IG51bGxcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbW91bnRlZCgpIHtcXHJcXG4gICAgICAgICAgICB0aGlzLmdldFRlYW0oKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgZ2V0VGVhbSgpXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xcclxcbiAgICAgICAgICAgICAgICAgICAgXFxcIl93aXRoXFxcIiA6ICdnYW1lLHVzZXJzLGluc3RpdHV0aW9uLmxvY2F0aW9uLGluc3RpdHV0aW9uLmxvY2F0aW9uLnBhcmVudCdcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90ZWFtcy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCtcXFwiP1xcXCIrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ3RlYW0nLCByZXNwb25zZS5kYXRhKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBcXFwiVGVhbTogXFxcIit0aGlzLnRlYW0udGl0bGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXRhKCkucmVmcmVzaCgpO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldEludml0YXRpb25zKClcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuQXJyYXlUb1VybCh7XFxyXFxuICAgICAgICAgICAgICAgICAgICAndGVhbV9pZCcgOiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJyA6IDEsXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwiX3dpdGhcXFwiIDogJ3VzZXIsdGVhbSdcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90ZWFtX3VzZXI/JytxdWVyeSkudGhlbigocmVzcG9uc2UpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnaW52aXRhdGlvbnMnLCByZXNwb25zZS5kYXRhKTtcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBqb2luVGVhbSh0ZWFtX2lkKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYXV0aGVudGljYXRlZClcXHJcXG4gICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnbG9naW4nIH0pO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGF4aW9zLnB1dCgnL2FwaS90ZWFtcy8nK3RlYW1faWQrJy91c2Vycy8nK3RoaXMudXNlci5pZCkudGhlbihyZXNwb25zZSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuJHQoJ2pvaW5fdGVhbV9yZXF1ZXN0X3N1Y2Nlc3MnKVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvclxcclxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC5uay10ZWFtLXRhYmxle1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5rLXRlYW0tdGFibGUgPiB0Ym9keSA+IHRyICsgdHIgPiB0ZCB7XFxyXFxuICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmstdGVhbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmYwN2Vte1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjM0OGNiMzJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjM0OGNiMzJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0udGVhbSAhPT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJuay1kZWNvcmF0ZWQtaC0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnRlYW0udGl0bGUpKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdmVydGljYWwtZ2FwXCIgfSwgW1xuICAgICAgX2MoXCJhc2lkZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zIG5rLXNpZGViYXItc3RpY2t5LXBhcmVudFwiIH0sIFtcbiAgICAgICAgX3ZtLnRlYW0gIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstYm94LTEgYmctZGFyay0yIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5nZXRJbWFnZUxpbmsoX3ZtLnRlYW0uaW1hZ2UsIFwiYXZhdGFyX3RlYW1cIikgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5hdXRoZW50aWNhdGVkIHx8XG4gICAgICAgICAgICAgIChfdm0udGVhbS5xdWFudGl0eSA+IF92bS50ZWFtLnVzZXJzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIF92bS5hdXRoZW50aWNhdGVkICYmXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIuaWQgIT0gX3ZtLnRlYW0uY2FwdF9pZCAmJlxuICAgICAgICAgICAgICAgIF92bS51c2VyLnR5cGUgPT0gXCJwbGF5ZXJcIiAmJlxuICAgICAgICAgICAgICAgIF92bS51c2VyLmFjdGl2ZSlcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGUgZjA3ZW0gdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmpvaW5UZWFtKF92bS50ZWFtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJqb2luX3RlYW1cIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstdGVhbS10YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS50ZWFtLmluc3RpdHV0aW9uX2lkID4gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoNiB0ZXh0LWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbi5wYXJlbnQudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24udGl0bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImg2XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb3VudF9tYXRjaGVzXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRlYW0uY291bnRfZmlnaHRzKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNvdW50X3dpbnNcIikpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImg1XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGVhbS5jb3VudF93aW5zKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInZpY3RvcnlfcmF0ZVwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS50ZWFtLmNvdW50X2ZpZ2h0cyA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnRlYW0uY291bnRfd2lucyAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZWFtLmNvdW50X2ZpZ2h0cykgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNVwiIH0sIFtfdm0uX3YoXCIwJVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiY2FyZFwiLCB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJwbGF5ZXJzXCIpIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLnRlYW0gIT09IG51bGwgJiYgX3ZtLnRlYW0udXNlcnMgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm5hbWVcIikpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidmljdG9yeV9yYXRlXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInN0YXR1c1wiKSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbS51c2VycywgZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidm0tdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwbGF5ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBwbGF5ZXIuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNTBweCBtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKHBsYXllci5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MocGxheWVyLm5pY2tuYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZWFtLmNvdW50X2ZpZ2h0cyA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0udGVhbS5jb3VudF93aW5zIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZWFtLmNvdW50X2ZpZ2h0cykgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMCVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmZyZWVfcGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJmcmVlXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwbGF5ZXIudGVhbV9pZCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmlkID09IF92bS50ZWFtLmNhcHRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm9cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNhcHRhaW5cIikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJpbl90ZWFtXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjM0OGNiMzJcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02MzQ4Y2IzMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi02MzQ4Y2IzMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjM0OGNiMzJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjJlMDgyYWZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTYzNDhjYjMyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RldGFpbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjM0OGNiMzJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi02MzQ4Y2IzMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTYzNDhjYjMyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02MzQ4Y2IzMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kZXRhaWwudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldGFpbC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02MzQ4Y2IzMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2RldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTYzNDhjYjMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjM0OGNiMzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=