webpackJsonp([16],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/teams/index.vue":
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

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _sweetalert = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    metaInfo: function metaInfo() {
        return { title: this.$t('teams') };
    },


    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        authenticated: 'auth/check'
    })),
    mounted: function mounted() {

        this.getVueItems();
    },

    data: function data() {
        return {
            teams: [],
            games: [],
            countries: [],
            queryString: '',
            pagination: [],
            statuses: [{ id: '', title: '' }, { id: 0, title: 'pending' }, { id: 1, title: 'accepted' }],
            game_id: this.$route.query.game_id || '',
            country_id: this.$route.query.users_country_id || '' };
    },
    methods: {
        getVueItems: function getVueItems() {
            var _this = this;

            var queryStartParams = {
                'site_id': 2,
                'page': 1,
                '_limit': 12,
                '_with': 'game,fights,users,institution.location,institution.location.parent',
                "_sort": '-count_wins'
            };

            var query = this.UrlParamsMerge(queryStartParams);

            _axios2.default.get('/api/teams?' + query).then(function (response) {
                _this.$set(_this, 'teams', response.data.data);

                delete response.data.data;
                _this.pagination = response.data;
            });
        },
        getGames: function getGames() {
            var _this2 = this;

            _axios2.default.get('/api/games').then(function (response) {
                _this2.$set(_this2, 'games', response.data);
                _this2.$parent.games = _this2.games;
            });
        },
        getCountries: function getCountries() {
            var _this3 = this;

            _axios2.default.get('/api/countries').then(function (response) {
                _this3.$set(_this3, 'countries', response.data);
            });
        },
        search: function search(event) {
            this.$router.push(this.$route.path + "?" + $("#filter-form").serialize());
        },
        joinTeam: function joinTeam(team_id) {
            var _this4 = this;

            _axios2.default.put('/api/teams/' + team_id + '/users/' + this.user.id).then(function (response) {

                (0, _sweetalert2.default)({
                    type: 'success',
                    title: _this4.$t('join_team_request_success')
                });
            }).catch(function (error) {

                (0, _sweetalert2.default)({
                    type: 'warning',
                    title: error.response.data.error
                });
            });
        }
    },
    watch: {
        '$route.query': function $routeQuery(newPage, oldPage) {
            this.getVueItems();
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c10caac\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/teams/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("card", { attrs: { title: _vm.$t("teams") } }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
            [
              _vm.teams !== null && _vm.teams.length > 0
                ? _c("table", { staticClass: "nk-table" }, [
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _c("th", [_vm._v(_vm._s(_vm.$t("title")))]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(_vm.$t("players")))]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(_vm.$t("game")))]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(_vm.$t("count_matches")))]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(_vm.$t("count_wins")))]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(_vm.$t("victory_rate")))]),
                          _vm._v(" "),
                          _c("th", [_vm._v(_vm._s(_vm.$t("status")))])
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.teams, function(team) {
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
                                        name: "team",
                                        params: { id: team.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "w-50px mr-10",
                                      attrs: {
                                        src: _vm.getImageLink(
                                          team.image,
                                          "avatar_team"
                                        ),
                                        alt: team.title
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v(_vm._s(team.title))])
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "text-center" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "team.detail.players",
                                        params: { slug: team.slug }
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(team.users.length))]
                                ),
                                _vm._v(" / " + _vm._s(team.quantity))
                              ],
                              1
                            ),
                            _vm._v(" "),
                            team.game !== null
                              ? _c(
                                  "td",
                                  { staticClass: "text-center" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name: "game",
                                            params: { gameId: team.game.id }
                                          },
                                          title: team.game.title
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.getImageLink(
                                              team.game.logo_mini
                                            ),
                                            width: "35",
                                            alt: team.game.title
                                          }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _c("td", { staticClass: "text-center" }),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(team.count_fights))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(team.count_wins))
                            ]),
                            _vm._v(" "),
                            team.count_fights > 0
                              ? _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      Number(
                                        (
                                          (team.count_wins /
                                            team.count_fights) *
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
                              team.status == 0
                                ? _c("span", [
                                    _c(
                                      "span",
                                      { staticClass: "text-warning" },
                                      [_vm._v(_vm._s(_vm.$t("status_pending")))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              team.status == 1
                                ? _c("span", [
                                    _c(
                                      "span",
                                      { staticClass: "text-success" },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("status_accepted"))
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              team.quantity > team.users.length &&
                              _vm.authenticated &&
                              _vm.user.id !== team.capt_id &&
                              _vm.user.type == "player" &&
                              _vm.user.active
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "nk-btn nk-btn-rounded nk-btn-color-main-1 text-white",
                                      on: {
                                        click: function($event) {
                                          return _vm.joinTeam(team.id)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(_vm.$t("join_team")) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        })
                      ],
                      2
                    )
                  ])
                : _c("p", { staticClass: "text-white" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.$t("no_teams")) +
                        "\n                    "
                    )
                  ]),
              _vm._v(" "),
              _c("pagination", { attrs: { pagination: _vm.pagination } })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c10caac", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/teams/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/teams/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c10caac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c10caac\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/teams/index.vue");
var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c10caac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/teams/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c10caac", Component.options)
  } else {
    hotAPI.reload("data-v-4c10caac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9pbmRleC52dWU/ODc5OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRUE7QUFFQSxZQUZBLHNCQUVBO0FBQ0E7QUFDQSxLQUpBOzs7QUFNQSx5Q0FDQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxNQURBLENBTkE7QUFZQSxXQVpBLHFCQVlBOztBQUVBO0FBNERBLEtBMUVBOztBQTJFQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxxQkFGQTtBQUdBLHlCQUhBO0FBSUEsMkJBSkE7QUFLQSwwQkFMQTtBQU1BLHVCQUNBLHFCQURBLEVBRUEsMkJBRkEsRUFHQSw0QkFIQSxDQU5BO0FBV0Esb0RBWEE7QUFZQSxnRUFaQTtBQWtCQSxLQTlGQTtBQStGQTtBQUNBO0FBQUE7O0FBRUE7QUFFQSw0QkFGQTtBQUdBLHlCQUhBO0FBSUEsNEJBSkE7QUFLQSw2RkFMQTtBQU1BO0FBTkE7O0FBaUJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBTEE7QUFNQSxTQTVCQTtBQTZCQSxzQ0FDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEE7QUFJQSxTQW5DQTtBQW9DQSw4Q0FDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0EsU0F6Q0E7QUEwQ0EsdUNBQ0E7QUFDQTtBQUNBLFNBN0NBO0FBOENBLGdCQTlDQSxvQkE4Q0EsT0E5Q0EsRUErQ0E7QUFBQTs7QUFDQTs7QUFFQTtBQUNBLG1DQURBO0FBRUE7QUFGQTtBQUtBLGFBUEEsRUFPQSxLQVBBLENBT0E7O0FBRUE7QUFDQSxtQ0FEQTtBQUVB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RSxzV0FBYztBQUNoQixFQUFFLDhOQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvMTYuZmJmMzg1YTVmOTcyY2JhYzE3NjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxjYXJkIDp0aXRsZT1cIiR0KCd0ZWFtcycpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PCEtLTx0ZW1wbGF0ZSB2LWlmPVwidXNlci5pbnN0aXR1dGlvbl9pZD09PW51bGxcIj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+XHJcblx0XHRcdFx0XHRcdFx00JTQu9GPINC/0YDQvtGB0LzQvtGC0YDQsCDQutC+0LzQsNC90LQg0LLRiyDQtNC+0LvQttC90YsgXHJcblx0XHRcdFx0XHRcdFx0PHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3NldHRpbmdzLnNjaG9vbCcgfVwiIGNsYXNzPVwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZSBmMDdlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx00LfQsNC00LDRgtGMINGI0LrQvtC70YMgXHJcblx0XHRcdFx0XHRcdFx0PC9yb3V0ZXItbGluaz4g0LIg0LvQuNGH0L3QvtC8INC60LDQsdC40L3QtdGC0LUuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LWlmPVwidXNlci5pbnN0aXR1dGlvbl9pZCE9bnVsbCAmJiB0ZWFtcy5sZW5ndGg9PTBcIj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+XHJcblx0XHRcdFx0XHRcdFx00JIg0LLQsNGI0LXQuSDRiNC60L7Qu9C1INC10YnQtSDQvdC10YIg0L3QuCDQvtC00L3QvtC5INC60L7QvNCw0L3QtNGLLiDQkdGD0LTRjNGC0LUg0L/QtdGA0LLRi9C8LCAgXHJcblx0XHRcdFx0XHRcdFx0PHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3NldHRpbmdzLnRlYW0nIH1cIiBjbGFzcz1cIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGUgZjA3ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHTRgdC+0LfQtNCw0LnRgtC1XHJcblx0XHRcdFx0XHRcdFx0PC9yb3V0ZXItbGluaz4g0LrQvtC80LDQvdC00YMuXHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvdGVtcGxhdGU+LS0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIm5rLXRhYmxlXCIgdi1pZj1cInRlYW1zIT09bnVsbCAmJiB0ZWFtcy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCd0aXRsZScpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ3BsYXllcnMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdnYW1lJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgnY291bnRfbWF0Y2hlcycpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ2NvdW50X3dpbnMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCd2aWN0b3J5X3JhdGUnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdzdGF0dXMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwidGVhbSBpbiB0ZWFtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayAgOnRvPVwieyBuYW1lOiAndGVhbScsIHBhcmFtczogeyBpZDogdGVhbS5pZCB9fVwiIGNsYXNzPVwidm0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHRlYW0uaW1hZ2UsICdhdmF0YXJfdGVhbScpXCIgY2xhc3M9XCJ3LTUwcHggbXItMTBcIiA6YWx0PVwidGVhbS50aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IHRlYW0udGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+PHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICd0ZWFtLmRldGFpbC5wbGF5ZXJzJywgcGFyYW1zOiB7IHNsdWc6IHRlYW0uc2x1ZyB9fVwiPnt7IHRlYW0udXNlcnMubGVuZ3RofX08L3JvdXRlci1saW5rPiAvIHt7IHRlYW0ucXVhbnRpdHl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtaWY9XCJ0ZWFtLmdhbWUhPT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2dhbWUnLCBwYXJhbXM6IHsgZ2FtZUlkOiB0ZWFtLmdhbWUuaWQgfX1cIiA6dGl0bGU9XCJ0ZWFtLmdhbWUudGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHRlYW0uZ2FtZS5sb2dvX21pbmkpXCIgd2lkdGg9XCIzNVwiIDphbHQ9XCJ0ZWFtLmdhbWUudGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWVsc2U+PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7dGVhbS5jb3VudF9maWdodHN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7dGVhbS5jb3VudF93aW5zfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWlmPVwidGVhbS5jb3VudF9maWdodHM+MFwiPnt7IE51bWJlcigodGVhbS5jb3VudF93aW5zL3RlYW0uY291bnRfZmlnaHRzKjEwMCkudG9GaXhlZCgyKSl9fSU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWVsc2U+MCU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidGVhbS5zdGF0dXM9PTBcIj48c3BhbiBjbGFzcz1cInRleHQtd2FybmluZ1wiPnt7JHQoJ3N0YXR1c19wZW5kaW5nJyl9fTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInRlYW0uc3RhdHVzPT0xXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj57eyR0KCdzdGF0dXNfYWNjZXB0ZWQnKX19PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJ0ZWFtLnF1YW50aXR5PnRlYW0udXNlcnMubGVuZ3RoICYmIGF1dGhlbnRpY2F0ZWQgJiYgdXNlci5pZCE9PXRlYW0uY2FwdF9pZCAmJiB1c2VyLnR5cGU9PSdwbGF5ZXInICYmIHVzZXIuYWN0aXZlXCIgQGNsaWNrPVwiam9pblRlYW0odGVhbS5pZClcIiBjbGFzcz1cIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnam9pbl90ZWFtJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCB2LWVsc2UgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ25vX3RlYW1zJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCI+PC9wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvY2FyZD5cclxuXHJcbiAgICAgICAgPCEtLTxjYXJkIHYtZWxzZSA6dGl0bGU9XCIkdCgndGVhbXMnKVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgINCU0LvRjyDRgtC+0LPQviDRh9GC0L7QsdGLINGD0LLQuNC00LXRgtGMINGB0L/QuNGB0L7QuiDQutC+0LzQsNC90LQsIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyZWdpc3RlcicgfVwiIGNsYXNzPVwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZSBmMDdlbVwiPlxyXG4gICAgICAgICAgICAgICAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjDwvcm91dGVyLWxpbms+INC40LvQuCA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnbG9naW4nIH1cIiBjbGFzcz1cIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGUgZjA3ZW1cIj7QsNCy0YLQvtGA0LjQt9GD0LnRgtC10YHRjDwvcm91dGVyLWxpbms+LCDQtdGB0LvQuCDRgyDQstCw0YEg0LXRgdGC0Ywg0LDQutC60LDRg9C90YIuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2NhcmQ+LS0+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgICAgICBtZXRhSW5mbyAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCd0ZWFtcycpIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VnVlSXRlbXMoKTtcclxuXHJcblx0XHRcdC8qaWYodGhpcy5hdXRoZW50aWNhdGVkICYmIHRoaXMudXNlci5pbnN0aXR1dGlvbl9pZCE9bnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZ2V0VnVlSXRlbXMoKTtcclxuXHRcdFx0XHR0aGlzLmdldEdhbWVzKCk7XHJcblx0XHRcdFx0dGhpcy5nZXRDb3VudHJpZXMoKTtcclxuXHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdFZ1ZS5uZXh0VGljayhmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRcdCQoXCIjZ2FtZV9saXN0XCIpLnNlbGVjdDIoe1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJTZWxlY3QgZ2FtZVwiLFxyXG5cdFx0XHRcdFx0XHRhbGxvd0NsZWFyOiB0cnVlXHJcblx0XHRcdFx0XHR9KS5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5nYW1lX2lkID0gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XHJcblx0XHRcdFx0XHRcdHNlbGYuc2VhcmNoKCk7XHJcblx0XHRcdFx0XHR9KS5vbihcInNlbGVjdDI6dW5zZWxlY3RpbmdcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5nYW1lX2lkID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0XHRpZihzZWxmLmNvdW50cnlfaWQhPScnKVxyXG5cdFx0XHRcdFx0XHRcdHNlbGYuJHJvdXRlci5wdXNoKHNlbGYuJHJvdXRlLnBhdGgrXCI/dXNlcnNfY291bnRyeV9pZD1cIitzZWxmLmNvdW50cnlfaWQpO1xyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0c2VsZi4kcm91dGVyLnB1c2goc2VsZi4kcm91dGUucGF0aCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQkKFwiI2NvdW50cnlfbGlzdFwiKS5zZWxlY3QyKHtcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiU2VsZWN0IGNvdW50cnlcIixcclxuXHRcdFx0XHRcdFx0dGVtcGxhdGVSZXN1bHQ6IGZvcm1hdFN0YXRlLFxyXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVNlbGVjdGlvbjogZm9ybWF0U3RhdGUsXHJcblx0XHRcdFx0XHRcdGFsbG93Q2xlYXI6IHRydWVcclxuXHRcdFx0XHRcdH0pLm9uKFwic2VsZWN0MjpzZWxlY3RcIiwgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmNvdW50cnlfaWQgPSAkKGUuY3VycmVudFRhcmdldCkuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcclxuXHRcdFx0XHRcdFx0c2VsZi5zZWFyY2goKTtcclxuXHRcdFx0XHRcdH0pLm9uKFwic2VsZWN0Mjp1bnNlbGVjdGluZ1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmNvdW50cnlfaWQgPSAnJztcclxuXHRcdFx0XHRcdFx0aWYoc2VsZi5nYW1lX2lkIT0nJylcclxuXHRcdFx0XHRcdFx0XHRzZWxmLiRyb3V0ZXIucHVzaChzZWxmLiRyb3V0ZS5wYXRoK1wiP2dhbWVfaWQ9XCIrc2VsZi5nYW1lX2lkKTtcclxuXHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdHNlbGYuJHJvdXRlci5wdXNoKHNlbGYuJHJvdXRlLnBhdGgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0ZnVuY3Rpb24gZm9ybWF0U3RhdGUgKG9wdClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKCFvcHQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb3B0LnRleHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dmFyIG9wdGltYWdlID0gJChvcHQuZWxlbWVudCkuZGF0YSgnaW1hZ2UnKTtcclxuXHRcdFx0XHRcdFx0aWYoIW9wdGltYWdlKXtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb3B0LnRleHQ7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyICRvcHQgPSAkKFxyXG5cdFx0XHRcdFx0XHRcdFx0JzxzcGFuPjxpbWcgc3JjPVwiL2ltYWdlcy9mbGFncy8nICsgb3B0aW1hZ2UgKyAnXCIgd2lkdGg9XCIyM3B4XCIgLz4gJyArIG9wdC50ZXh0ICsgJzwvc3Bhbj4nXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJG9wdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0qL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGVhbXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZ2FtZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgY291bnRyaWVzOiBbXSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IFtdLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6JycsIHRpdGxlOiAnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjAsIHRpdGxlOiAncGVuZGluZyd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtpZDoxLCB0aXRsZTogJ2FjY2VwdGVkJ31cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBnYW1lX2lkOiB0aGlzLiRyb3V0ZS5xdWVyeS5nYW1lX2lkIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeV9pZDogdGhpcy4kcm91dGUucXVlcnkudXNlcnNfY291bnRyeV9pZCB8fCAnJy8qLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3RlYW1zOiBbMTQ2LCAxMzEsIDE4MSwgMiwgNzNdLCB0aXRsZTogXCLQktC+0YHRgtC+0YfQvdCw0Y8g0LrQvtC90YTQtdGA0LXQvdGG0LjRj1wifSxcclxuICAgICAgICAgICAgICAgICAgICB7dGVhbXM6IFsyNTIsIDE2NywgMTA5LCAxMTAsIDIyMF0sIHRpdGxlOiBcItCX0LDQv9Cw0LTQvdCw0Y8g0LrQvtC90YTQtdGA0LXQvdGG0LjRj1wifVxyXG4gICAgICAgICAgICAgICAgXSovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHMgOiB7XHJcbiAgICAgICAgICAgIGdldFZ1ZUl0ZW1zOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeVN0YXJ0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJ3N0YXR1cyc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NpdGVfaWQnOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICdwYWdlJyA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ19saW1pdCcgOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAnX3dpdGgnIDogJ2dhbWUsZmlnaHRzLHVzZXJzLGluc3RpdHV0aW9uLmxvY2F0aW9uLGluc3RpdHV0aW9uLmxvY2F0aW9uLnBhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJfc29ydFwiIDogJy1jb3VudF93aW5zJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKmlmKHRoaXMuYXV0aGVudGljYXRlZCAmJiB0aGlzLnVzZXIudHlwZSE9J2ludmVzdG9yJylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydnYW1lX2lkJ10gPSB0aGlzLnVzZXIuZ2FtZV9pZDtcclxuXHRcdFx0XHRcdGlmKHRoaXMudXNlci5pbnN0aXR1dGlvbl9pZCE9PW51bGwpXHJcblx0XHRcdFx0XHRcdHF1ZXJ5U3RhcnRQYXJhbXNbJ2luc3RpdHV0aW9uX2lkJ10gPSB0aGlzLnVzZXIuaW5zdGl0dXRpb25faWQ7XHJcblx0XHRcdFx0XHRxdWVyeVN0YXJ0UGFyYW1zWydpbnN0aXR1dGlvbl9pZC1ub3QnXSA9ICdudWxsJztcclxuICAgICAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuVXJsUGFyYW1zTWVyZ2UocXVlcnlTdGFydFBhcmFtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RlYW1zPycrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICd0ZWFtcycsIHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRHYW1lczogZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZ2FtZXMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnZ2FtZXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2FtZXMgPSB0aGlzLmdhbWVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldENvdW50cmllczogZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvY291bnRyaWVzJykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2NvdW50cmllcycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaDogZnVuY3Rpb24oZXZlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHRoaXMuJHJvdXRlLnBhdGgrXCI/XCIrJChcIiNmaWx0ZXItZm9ybVwiKS5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGpvaW5UZWFtKHRlYW1faWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zLnB1dCgnL2FwaS90ZWFtcy8nK3RlYW1faWQrJy91c2Vycy8nK3RoaXMudXNlci5pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLiR0KCdqb2luX3RlYW1fcmVxdWVzdF9zdWNjZXNzJylcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgICckcm91dGUucXVlcnknKG5ld1BhZ2UsIG9sZFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VnVlSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvaW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiY2FyZFwiLCB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJ0ZWFtc1wiKSB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0udGVhbXMgIT09IG51bGwgJiYgX3ZtLnRlYW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJuay10YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInRpdGxlXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwbGF5ZXJzXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJnYW1lXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb3VudF9tYXRjaGVzXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb3VudF93aW5zXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ2aWN0b3J5X3JhdGVcIikpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInN0YXR1c1wiKSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidm0tdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiB0ZWFtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTUwcHggbXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJfdGVhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IHRlYW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHRlYW0udGl0bGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW0uZGV0YWlsLnBsYXllcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogdGVhbS5zbHVnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGVhbS51c2Vycy5sZW5ndGgpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIC8gXCIgKyBfdm0uX3ModGVhbS5xdWFudGl0eSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmdhbWUgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJnYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBnYW1lSWQ6IHRlYW0uZ2FtZS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRlYW0uZ2FtZS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmdhbWUubG9nb19taW5pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogdGVhbS5nYW1lLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0ZWFtLmNvdW50X2ZpZ2h0cykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW0uY291bnRfd2lucykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNvdW50X2ZpZ2h0cyA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ZWFtLmNvdW50X3dpbnMgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNvdW50X2ZpZ2h0cykgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjAlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5zdGF0dXMgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13YXJuaW5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwic3RhdHVzX3BlbmRpbmdcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uc3RhdHVzID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwic3RhdHVzX2FjY2VwdGVkXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5xdWFudGl0eSA+IHRlYW0udXNlcnMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXV0aGVudGljYXRlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIuaWQgIT09IHRlYW0uY2FwdF9pZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIudHlwZSA9PSBcInBsYXllclwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlci5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uam9pblRlYW0odGVhbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJqb2luX3RlYW1cIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwibm9fdGVhbXNcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHsgYXR0cnM6IHsgcGFnaW5hdGlvbjogX3ZtLnBhZ2luYXRpb24gfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00YzEwY2FhY1wiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRjMTBjYWFjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90ZWFtcy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNGMxMGNhYWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDE2IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00YzEwY2FhY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdGVhbXMvaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRjMTBjYWFjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGMxMGNhYWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RlYW1zL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDE2Il0sInNvdXJjZVJvb3QiOiIifQ==