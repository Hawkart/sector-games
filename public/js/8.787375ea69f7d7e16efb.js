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

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b57ab4e4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/teams/detail.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.nk-team-table{\n    width: 100%;\n}\n.nk-team-table > tbody > tr + tr > td {\n    border-top: 1px dotted rgba(255, 255, 255, 0.2);\n}\n.nk-team-table > tbody > tr > td {\n    padding: 20px 10px;\n}\n.f07em{\n    font-size: .7rem !important;\n}\n", "", {"version":3,"sources":["C:/xampp70/htdocs/youthleague.local/resources/assets/js/pages/teams/resources/assets/js/pages/teams/detail.vue"],"names":[],"mappings":";AAqKA;IACA,YAAA;CACA;AACA;IACA,gDAAA;CACA;AAEA;IACA,mBAAA;CACA;AACA;IACA,4BAAA;CACA","file":"detail.vue","sourcesContent":["<template>\r\n    <div>\r\n        <div class=\"row\"  v-if=\"team!==null\">\r\n            <div class=\"col-lg-12\">\r\n                <h3 class=\"nk-decorated-h-3\"><span>{{team.title}}</span></h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row vertical-gap\">\r\n            <aside class=\"col-lg-3 nk-sidebar-sticky-parent\">\r\n                <div class=\"nk-box-1 bg-dark-2 text-center\" v-if=\"team!==null\">\r\n                    <img :src=\"getImageLink(team.image, 'avatar_team')\" class=\"w-100\">\r\n                    <div class=\"nk-gap\"></div>\r\n\r\n                    <button v-if=\"!authenticated || (team.quantity>team.users.length && authenticated && user.id!=team.capt_id && user.type=='player' && user.active)\" @click=\"joinTeam(team.id)\" class=\"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white f07em w-100\">\r\n                        {{$t('join_team')}}\r\n                    </button>\r\n\r\n                    <table class=\"nk-team-table\">\r\n                        <tbody>\r\n\r\n                        <tr v-if=\"team.institution_id>0\">\r\n                            <td colspan=\"2\">\r\n                                <span class=\"h6 text-left\">{{team.institution.location.parent.title}}, {{team.institution.location.title}}</span>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('count_matches')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\">{{team.count_fights}}</strong>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('count_wins')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\">{{team.count_wins}}</strong>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <strong class=\"h6\">{{$t('victory_rate')}}</strong>\r\n                            </td>\r\n                            <td>\r\n                                <strong class=\"h5\" v-if=\"team.count_fights>0\">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</strong>\r\n                                <strong class=\"h5\" v-else>0%</strong>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </aside>\r\n            <div class=\"col-lg-9\">\r\n                <card :title=\"$t('players')\">\r\n                    <table class=\"nk-table\" v-if=\"team!==null && team.users!==null\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <th>{{$t('name')}}</th>\r\n                            <th>{{$t('victory_rate')}}</th>\r\n                            <th>{{$t('status')}}</th>\r\n                        </tr>\r\n                        <tr v-for=\"player in team.users\">\r\n                            <td>\r\n                                <router-link  :to=\"{ name: 'player', params: { id: player.id }}\"  class=\"vm-title\">\r\n                                    <img :src=\"getImageLink(player.avatar)\" class=\"w-50px mr-10\" />\r\n                                    <span>{{ player.nickname}}</span>\r\n                                </router-link>\r\n                            </td>\r\n                            <td class=\"text-center\" v-if=\"team.count_fights>0\">{{ Number((team.count_wins/team.count_fights*100).toFixed(2))}}%</td>\r\n                            <td class=\"text-center\" v-else>0%</td>\r\n                            <td class=\"text-center\">\r\n                                <span v-if=\"player.free_player\"><span class=\"text-warning\">{{$t('free')}}</span></span>\r\n                                <span v-else-if=\"player.team_id>0 && player.id==team.capt_id\"><span class=\"text-info\">{{$t('captain')}}</span></span>\r\n                                <span v-else><span class=\"text-success\">{{$t('in_team')}}</span></span>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </card>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    import { mapGetters } from 'vuex'\r\n    import axios from 'axios'\r\n    import swal from 'sweetalert2'\r\n\r\n    export default {\r\n        metaInfo () {\r\n            return {\r\n                title: this.title,\r\n            }\r\n        },\r\n        computed: {\r\n            ...mapGetters({\r\n                user: 'auth/user',\r\n                authenticated: 'auth/check',\r\n            })\r\n        },\r\n        data() {\r\n            return {\r\n                title: 'Detail page of team',\r\n                team: null,\r\n                response: null,\r\n                invitations: null\r\n            }\r\n        },\r\n        mounted() {\r\n            this.getTeam();\r\n        },\r\n        methods: {\r\n            getTeam()\r\n            {\r\n                var query = this.ArrayToUrl({\r\n                    \"_with\" : 'game,users,institution.location,institution.location.parent'\r\n                });\r\n                axios.get('/api/teams/'+this.$route.params.id+\"?\"+query).then((response) => {\r\n                    this.$set(this, 'team', response.data);\r\n                    this.title = \"Team: \"+this.team.title;\r\n                    this.$meta().refresh();\r\n                });\r\n            },\r\n            getInvitations()\r\n            {\r\n                var query = this.ArrayToUrl({\r\n                    'team_id' : this.$route.params.id,\r\n                    'status' : 1,\r\n                    \"_with\" : 'user,team'\r\n                });\r\n                axios.get('/api/team_user?'+query).then((response) => {\r\n                    this.$set(this, 'invitations', response.data);\r\n                });\r\n            },\r\n            joinTeam(team_id)\r\n            {\r\n                if(!this.authenticated)\r\n                {\r\n                    this.$router.push({ name: 'login' });\r\n                    return;\r\n                }\r\n\r\n                axios.put('/api/teams/'+team_id+'/users/'+this.user.id).then(response => {\r\n                    swal({\r\n                        type: 'success',\r\n                        title: this.$t('join_team_request_success')\r\n                    });\r\n                }).catch(error => {\r\n                    swal({\r\n                        type: 'warning',\r\n                        title: error.response.data.error\r\n                    });\r\n                });\r\n            }\r\n        },\r\n    }\r\n</script>\r\n\r\n<style>\r\n    .nk-team-table{\r\n        width: 100%;\r\n    }\r\n    .nk-team-table > tbody > tr + tr > td {\r\n        border-top: 1px dotted rgba(255, 255, 255, 0.2);\r\n    }\r\n\r\n    .nk-team-table > tbody > tr > td {\r\n        padding: 20px 10px;\r\n    }\r\n    .f07em{\r\n        font-size: .7rem !important;\r\n    }\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b57ab4e4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/teams/detail.vue":
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
                          _vm.joinTeam(_vm.team.id)
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
                                    _vm.team.count_wins /
                                    _vm.team.count_fights *
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
                                        _vm.team.count_wins /
                                        _vm.team.count_fights *
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
                                    _c(
                                      "span",
                                      { staticClass: "text-success" },
                                      [_vm._v(_vm._s(_vm.$t("in_team")))]
                                    )
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
    require("vue-hot-reload-api")      .rerender("data-v-b57ab4e4", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b57ab4e4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/teams/detail.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b57ab4e4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/teams/detail.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("ed255664", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b57ab4e4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b57ab4e4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b57ab4e4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b57ab4e4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/teams/detail.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b57ab4e4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/teams/detail.vue")
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b57ab4e4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\teams\\detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b57ab4e4", Component.options)
  } else {
    hotAPI.reload("data-v-b57ab4e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT8zNTFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT9hNjZjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZT8wZDNjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBMEZBOztBQUNBOzs7O0FBR0E7Ozs7Ozs7a0NBRUE7O3dCQUdBO0FBRkE7QUFHQTs7QUFDQTtjQUVBO3VCQUdBO0FBSkE7MEJBS0E7O21CQUVBO2tCQUNBO3NCQUNBO3lCQUVBO0FBTEE7QUFNQTtnQ0FDQTthQUNBO0FBQ0E7OztBQUVBO0FBQ0E7Ozt5QkFHQTtBQUZBOzhHQUdBO21EQUNBO29EQUNBOzhCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs4Q0FFQTswQkFDQTt5QkFFQTtBQUpBO29GQUtBOzREQUNBO0FBQ0E7QUFDQTtvQ0FDQTtBQUNBOztzQkFDQSxlQUNBOzBDQUNBO0FBQ0E7QUFFQTs7NkdBQ0E7OzBCQUVBO3FDQUVBO0FBSEE7c0NBSUE7OzBCQUVBOytDQUVBO0FBSEE7QUFJQTtBQUVBO0FBM0NBO0FBdkJBLEU7Ozs7Ozs7QUMvRkE7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMkMsa0JBQWtCLEdBQUcseUNBQXlDLHNEQUFzRCxHQUFHLG9DQUFvQyx5QkFBeUIsR0FBRyxTQUFTLGtDQUFrQyxHQUFHLFVBQVUsaUtBQWlLLE1BQU0sVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyw2TkFBNk4s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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvOC43ODczNzVlYTY5ZjdkN2UxNmVmYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiICB2LWlmPVwidGVhbSE9PW51bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibmstZGVjb3JhdGVkLWgtM1wiPjxzcGFuPnt7dGVhbS50aXRsZX19PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdmVydGljYWwtZ2FwXCI+XHJcbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImNvbC1sZy0zIG5rLXNpZGViYXItc3RpY2t5LXBhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWJveC0xIGJnLWRhcmstMiB0ZXh0LWNlbnRlclwiIHYtaWY9XCJ0ZWFtIT09bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEltYWdlTGluayh0ZWFtLmltYWdlLCAnYXZhdGFyX3RlYW0nKVwiIGNsYXNzPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cIiFhdXRoZW50aWNhdGVkIHx8ICh0ZWFtLnF1YW50aXR5PnRlYW0udXNlcnMubGVuZ3RoICYmIGF1dGhlbnRpY2F0ZWQgJiYgdXNlci5pZCE9dGVhbS5jYXB0X2lkICYmIHVzZXIudHlwZT09J3BsYXllcicgJiYgdXNlci5hY3RpdmUpXCIgQGNsaWNrPVwiam9pblRlYW0odGVhbS5pZClcIiBjbGFzcz1cIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGUgZjA3ZW0gdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnam9pbl90ZWFtJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJuay10ZWFtLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWlmPVwidGVhbS5pbnN0aXR1dGlvbl9pZD4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImg2IHRleHQtbGVmdFwiPnt7dGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbi5wYXJlbnQudGl0bGV9fSwge3t0ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJoNlwiPnt7JHQoJ2NvdW50X21hdGNoZXMnKX19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJoNVwiPnt7dGVhbS5jb3VudF9maWdodHN9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJoNlwiPnt7JHQoJ2NvdW50X3dpbnMnKX19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJoNVwiPnt7dGVhbS5jb3VudF93aW5zfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiaDZcIj57eyR0KCd2aWN0b3J5X3JhdGUnKX19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJoNVwiIHYtaWY9XCJ0ZWFtLmNvdW50X2ZpZ2h0cz4wXCI+e3sgTnVtYmVyKCh0ZWFtLmNvdW50X3dpbnMvdGVhbS5jb3VudF9maWdodHMqMTAwKS50b0ZpeGVkKDIpKX19JTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJoNVwiIHYtZWxzZT4wJTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTlcIj5cclxuICAgICAgICAgICAgICAgIDxjYXJkIDp0aXRsZT1cIiR0KCdwbGF5ZXJzJylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJuay10YWJsZVwiIHYtaWY9XCJ0ZWFtIT09bnVsbCAmJiB0ZWFtLnVzZXJzIT09bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCduYW1lJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgndmljdG9yeV9yYXRlJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgnc3RhdHVzJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cInBsYXllciBpbiB0ZWFtLnVzZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICdwbGF5ZXInLCBwYXJhbXM6IHsgaWQ6IHBsYXllci5pZCB9fVwiICBjbGFzcz1cInZtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEltYWdlTGluayhwbGF5ZXIuYXZhdGFyKVwiIGNsYXNzPVwidy01MHB4IG1yLTEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgcGxheWVyLm5pY2tuYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtaWY9XCJ0ZWFtLmNvdW50X2ZpZ2h0cz4wXCI+e3sgTnVtYmVyKCh0ZWFtLmNvdW50X3dpbnMvdGVhbS5jb3VudF9maWdodHMqMTAwKS50b0ZpeGVkKDIpKX19JTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtZWxzZT4wJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJwbGF5ZXIuZnJlZV9wbGF5ZXJcIj48c3BhbiBjbGFzcz1cInRleHQtd2FybmluZ1wiPnt7JHQoJ2ZyZWUnKX19PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJwbGF5ZXIudGVhbV9pZD4wICYmIHBsYXllci5pZD09dGVhbS5jYXB0X2lkXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0LWluZm9cIj57eyR0KCdjYXB0YWluJyl9fTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPjxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+e3skdCgnaW5fdGVhbScpfX08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICAgIGltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBtZXRhSW5mbyAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RldGFpbCBwYWdlIG9mIHRlYW0nLFxyXG4gICAgICAgICAgICAgICAgdGVhbTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbnM6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUZWFtKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGdldFRlYW0oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiX3dpdGhcIiA6ICdnYW1lLHVzZXJzLGluc3RpdHV0aW9uLmxvY2F0aW9uLGluc3RpdHV0aW9uLmxvY2F0aW9uLnBhcmVudCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RlYW1zLycrdGhpcy4kcm91dGUucGFyYW1zLmlkK1wiP1wiK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAndGVhbScsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBcIlRlYW06IFwiK3RoaXMudGVhbS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXRhKCkucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldEludml0YXRpb25zKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5BcnJheVRvVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICAndGVhbV9pZCcgOiB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cycgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiX3dpdGhcIiA6ICd1c2VyLHRlYW0nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90ZWFtX3VzZXI/JytxdWVyeSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2ludml0YXRpb25zJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgam9pblRlYW0odGVhbV9pZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuYXV0aGVudGljYXRlZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdsb2dpbicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGF4aW9zLnB1dCgnL2FwaS90ZWFtcy8nK3RlYW1faWQrJy91c2Vycy8nK3RoaXMudXNlci5pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuJHQoJ2pvaW5fdGVhbV9yZXF1ZXN0X3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLm5rLXRlYW0tdGFibGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubmstdGVhbS10YWJsZSA+IHRib2R5ID4gdHIgKyB0ciA+IHRkIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICAubmstdGVhbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmYwN2Vte1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5uay10ZWFtLXRhYmxle1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLm5rLXRlYW0tdGFibGUgPiB0Ym9keSA+IHRyICsgdHIgPiB0ZCB7XFxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG4ubmstdGVhbS10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG59XFxuLmYwN2Vte1xcbiAgICBmb250LXNpemU6IC43cmVtICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi94YW1wcDcwL2h0ZG9jcy95b3V0aGxlYWd1ZS5sb2NhbC9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUtBO0lBQ0EsWUFBQTtDQUNBO0FBQ0E7SUFDQSxnREFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtDQUNBO0FBQ0E7SUFDQSw0QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJkZXRhaWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgIHYtaWY9XFxcInRlYW0hPT1udWxsXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcIm5rLWRlY29yYXRlZC1oLTNcXFwiPjxzcGFuPnt7dGVhbS50aXRsZX19PC9zcGFuPjwvaDM+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyB2ZXJ0aWNhbC1nYXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cXFwiY29sLWxnLTMgbmstc2lkZWJhci1zdGlja3ktcGFyZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmstYm94LTEgYmctZGFyay0yIHRleHQtY2VudGVyXFxcIiB2LWlmPVxcXCJ0ZWFtIT09bnVsbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XFxcImdldEltYWdlTGluayh0ZWFtLmltYWdlLCAnYXZhdGFyX3RlYW0nKVxcXCIgY2xhc3M9XFxcInctMTAwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5rLWdhcFxcXCI+PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtaWY9XFxcIiFhdXRoZW50aWNhdGVkIHx8ICh0ZWFtLnF1YW50aXR5PnRlYW0udXNlcnMubGVuZ3RoICYmIGF1dGhlbnRpY2F0ZWQgJiYgdXNlci5pZCE9dGVhbS5jYXB0X2lkICYmIHVzZXIudHlwZT09J3BsYXllcicgJiYgdXNlci5hY3RpdmUpXFxcIiBAY2xpY2s9XFxcImpvaW5UZWFtKHRlYW0uaWQpXFxcIiBjbGFzcz1cXFwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZSBmMDdlbSB3LTEwMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnam9pbl90ZWFtJyl9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcIm5rLXRlYW0tdGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1pZj1cXFwidGVhbS5pbnN0aXR1dGlvbl9pZD4wXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XFxcIjJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImg2IHRleHQtbGVmdFxcXCI+e3t0ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uLnBhcmVudC50aXRsZX19LCB7e3RlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24udGl0bGV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDZcXFwiPnt7JHQoJ2NvdW50X21hdGNoZXMnKX19PC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XFxcImg1XFxcIj57e3RlYW0uY291bnRfZmlnaHRzfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cXFwiaDZcXFwiPnt7JHQoJ2NvdW50X3dpbnMnKX19PC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XFxcImg1XFxcIj57e3RlYW0uY291bnRfd2luc319PC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XFxcImg2XFxcIj57eyR0KCd2aWN0b3J5X3JhdGUnKX19PC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XFxcImg1XFxcIiB2LWlmPVxcXCJ0ZWFtLmNvdW50X2ZpZ2h0cz4wXFxcIj57eyBOdW1iZXIoKHRlYW0uY291bnRfd2lucy90ZWFtLmNvdW50X2ZpZ2h0cyoxMDApLnRvRml4ZWQoMikpfX0lPC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVxcXCJoNVxcXCIgdi1lbHNlPjAlPC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9hc2lkZT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctOVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxjYXJkIDp0aXRsZT1cXFwiJHQoJ3BsYXllcnMnKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcIm5rLXRhYmxlXFxcIiB2LWlmPVxcXCJ0ZWFtIT09bnVsbCAmJiB0ZWFtLnVzZXJzIT09bnVsbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ25hbWUnKX19PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ3ZpY3RvcnlfcmF0ZScpfX08L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgnc3RhdHVzJyl9fTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcInBsYXllciBpbiB0ZWFtLnVzZXJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XFxcInsgbmFtZTogJ3BsYXllcicsIHBhcmFtczogeyBpZDogcGxheWVyLmlkIH19XFxcIiAgY2xhc3M9XFxcInZtLXRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XFxcImdldEltYWdlTGluayhwbGF5ZXIuYXZhdGFyKVxcXCIgY2xhc3M9XFxcInctNTBweCBtci0xMFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBwbGF5ZXIubmlja25hbWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIHYtaWY9XFxcInRlYW0uY291bnRfZmlnaHRzPjBcXFwiPnt7IE51bWJlcigodGVhbS5jb3VudF93aW5zL3RlYW0uY291bnRfZmlnaHRzKjEwMCkudG9GaXhlZCgyKSl9fSU8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiB2LWVsc2U+MCU8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcInBsYXllci5mcmVlX3BsYXllclxcXCI+PHNwYW4gY2xhc3M9XFxcInRleHQtd2FybmluZ1xcXCI+e3skdCgnZnJlZScpfX08L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVxcXCJwbGF5ZXIudGVhbV9pZD4wICYmIHBsYXllci5pZD09dGVhbS5jYXB0X2lkXFxcIj48c3BhbiBjbGFzcz1cXFwidGV4dC1pbmZvXFxcIj57eyR0KCdjYXB0YWluJyl9fTwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+PHNwYW4gY2xhc3M9XFxcInRleHQtc3VjY2Vzc1xcXCI+e3skdCgnaW5fdGVhbScpfX08L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgIDwvY2FyZD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xcclxcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxyXFxuICAgIGltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBtZXRhSW5mbyAoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XFxyXFxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxcclxcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaycsXFxyXFxuICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBkYXRhKCkge1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGV0YWlsIHBhZ2Ugb2YgdGVhbScsXFxyXFxuICAgICAgICAgICAgICAgIHRlYW06IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uczogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtb3VudGVkKCkge1xcclxcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVhbSgpO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICBnZXRUZWFtKClcXHJcXG4gICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuQXJyYXlUb1VybCh7XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXFwiX3dpdGhcXFwiIDogJ2dhbWUsdXNlcnMsaW5zdGl0dXRpb24ubG9jYXRpb24saW5zdGl0dXRpb24ubG9jYXRpb24ucGFyZW50J1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RlYW1zLycrdGhpcy4kcm91dGUucGFyYW1zLmlkK1xcXCI/XFxcIitxdWVyeSkudGhlbigocmVzcG9uc2UpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAndGVhbScsIHJlc3BvbnNlLmRhdGEpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IFxcXCJUZWFtOiBcXFwiK3RoaXMudGVhbS50aXRsZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1ldGEoKS5yZWZyZXNoKCk7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZ2V0SW52aXRhdGlvbnMoKVxcclxcbiAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5BcnJheVRvVXJsKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICd0ZWFtX2lkJyA6IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcXHJcXG4gICAgICAgICAgICAgICAgICAgICdzdGF0dXMnIDogMSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJfd2l0aFxcXCIgOiAndXNlcix0ZWFtJ1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RlYW1fdXNlcj8nK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdpbnZpdGF0aW9ucycsIHJlc3BvbnNlLmRhdGEpO1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGpvaW5UZWFtKHRlYW1faWQpXFxyXFxuICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hdXRoZW50aWNhdGVkKVxcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdsb2dpbicgfSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgYXhpb3MucHV0KCcvYXBpL3RlYW1zLycrdGVhbV9pZCsnL3VzZXJzLycrdGhpcy51c2VyLmlkKS50aGVuKHJlc3BvbnNlID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy4kdCgnam9pbl90ZWFtX3JlcXVlc3Rfc3VjY2VzcycpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yXFxyXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gICAgLm5rLXRlYW0tdGFibGV7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAubmstdGVhbS10YWJsZSA+IHRib2R5ID4gdHIgKyB0ciA+IHRkIHtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uay10ZWFtLXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZjA3ZW17XFxyXFxuICAgICAgICBmb250LXNpemU6IC43cmVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iNTdhYjRlNFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iNTdhYjRlNFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS50ZWFtICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWRlY29yYXRlZC1oLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGVhbS50aXRsZSkpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB2ZXJ0aWNhbC1nYXBcIiB9LCBbXG4gICAgICBfYyhcImFzaWRlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTMgbmstc2lkZWJhci1zdGlja3ktcGFyZW50XCIgfSwgW1xuICAgICAgICBfdm0udGVhbSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1ib3gtMSBiZy1kYXJrLTIgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmdldEltYWdlTGluayhfdm0udGVhbS5pbWFnZSwgXCJhdmF0YXJfdGVhbVwiKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmF1dGhlbnRpY2F0ZWQgfHxcbiAgICAgICAgICAgICAgKF92bS50ZWFtLnF1YW50aXR5ID4gX3ZtLnRlYW0udXNlcnMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgX3ZtLmF1dGhlbnRpY2F0ZWQgJiZcbiAgICAgICAgICAgICAgICBfdm0udXNlci5pZCAhPSBfdm0udGVhbS5jYXB0X2lkICYmXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIudHlwZSA9PSBcInBsYXllclwiICYmXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIuYWN0aXZlKVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZSBmMDdlbSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qb2luVGVhbShfdm0udGVhbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiam9pbl90ZWFtXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLXRlYW0tdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0udGVhbS5pbnN0aXR1dGlvbl9pZCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDYgdGV4dC1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24ucGFyZW50LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiY291bnRfbWF0Y2hlc1wiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50ZWFtLmNvdW50X2ZpZ2h0cykpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImg2XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb3VudF93aW5zXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRlYW0uY291bnRfd2lucykpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcImg2XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ2aWN0b3J5X3JhdGVcIikpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbS5jb3VudF9maWdodHMgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwiaDVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlYW0uY291bnRfd2lucyAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbS5jb3VudF9maWdodHMgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJoNVwiIH0sIFtfdm0uX3YoXCIwJVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiY2FyZFwiLCB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJwbGF5ZXJzXCIpIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLnRlYW0gIT09IG51bGwgJiYgX3ZtLnRlYW0udXNlcnMgIT09IG51bGxcbiAgICAgICAgICAgICAgPyBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm5hbWVcIikpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidmljdG9yeV9yYXRlXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInN0YXR1c1wiKSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbS51c2VycywgZnVuY3Rpb24ocGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidm0tdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwbGF5ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBwbGF5ZXIuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNTBweCBtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKHBsYXllci5hdmF0YXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MocGxheWVyLm5pY2tuYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZWFtLmNvdW50X2ZpZ2h0cyA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZWFtLmNvdW50X3dpbnMgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZWFtLmNvdW50X2ZpZ2h0cyAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIwJVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZnJlZV9wbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImZyZWVcIikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBsYXllci50ZWFtX2lkID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuaWQgPT0gX3ZtLnRlYW0uY2FwdF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm9cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2FwdGFpblwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXN1Y2Nlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJpbl90ZWFtXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWI1N2FiNGU0XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYjU3YWI0ZTRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtYjU3YWI0ZTRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWI1N2FiNGU0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RldGFpbC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImVkMjU1NjY0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iNTdhYjRlNFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kZXRhaWwudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWI1N2FiNGU0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RldGFpbC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjU3YWI0ZTRcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iNTdhYjRlNFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjU3YWI0ZTRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kZXRhaWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjU3YWI0ZTRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcdGVhbXNcXFxcZGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iNTdhYjRlNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWI1N2FiNGU0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9