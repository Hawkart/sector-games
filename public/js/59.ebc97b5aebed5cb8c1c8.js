webpackJsonp([59],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/matches/index.vue":
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

var _i18n = __webpack_require__("./resources/assets/js/plugins/i18n.js");

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    metaInfo: function metaInfo() {
        return { title: this.$t('players') };
    },


    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        authenticated: 'auth/check',
        locale: 'lang/locale'
    })),

    data: function data() {
        return {
            fights: [],
            status_list: [{ id: 0, title: 'Все' }, { id: 1, title: 'Прошедшие' }, { id: 2, title: "Онлайн" }, { id: 3, title: "Предстоящие" }],
            status_id: null,
            pagination: []
        };
    },
    mounted: function mounted() {
        (0, _i18n.loadMessages)(this.locale);
        this.moment.locale(this.locale);

        this.getFights();

        var _self = this;
        _vue2.default.nextTick(function () {
            $("#status_list").select2({
                placeholder: "Статус матча"
            }).on("change", function (e) {
                _self.status_id = $(e.currentTarget).find("option:selected").val();
            });
        });
    },

    methods: {
        getFights: function getFights() {
            var _this = this;

            var queryStartParams = {
                'page': 1,
                '_limit': 12,
                "_sort": '-start_at',
                "_with": 'invitations.team,invitations.team.institution,invitations.team.institution.location,winner,game'
            };

            if (this.authenticated && this.user.role_id != 1) {
                var aroute = '/api/teams/' + this.user.team_id + '/fights';
                if (this.user.type == 'referee') {
                    queryStartParams['judge_id'] = this.user.id;
                    aroute = '/api/fights';
                }
            } else {
                var aroute = '/api/fights';
            }

            if (this.status_id == 1) {
                queryStartParams['winner_id-gt'] = 0;
            } else if (this.status_id == 2) {
                queryStartParams['winner_id'] = null;
                queryStartParams['start_at-st'] = this.moment.utc().format();
            } else if (this.status_id == 3) {
                queryStartParams['start_at-gt'] = this.moment.utc().format();
            }

            var query = this.UrlParamsMerge(queryStartParams);

            _axios2.default.get(aroute + '?' + query).then(function (response) {
                var fights = response.data.data;
                var _self = _this;

                fights.forEach(function (fight) {
                    fight.start_at = _self.dateConvertUTC(fight.start_at, -1);
                });

                _this.$set(_this, 'fights', fights);

                delete response.data.data;
                _this.pagination = response.data;
            });
        },
        checkUpcoming: function checkUpcoming(start_at) {
            var d1 = new Date(start_at);
            var d2 = new Date();
            if (d1.getTime() - d2.getTime() > 0) return true;

            return false;
        }
    },
    watch: {
        '$route.query': function $routeQuery(newPage, oldPage) {
            this.getFights();
        },

        status_id: function status_id(val, oldVal) {
            this.getFights();
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f8ec31ae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/matches/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card",
    { attrs: { title: _vm.$t("matches") } },
    [
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c("card", [
                _c("div", { staticClass: "form-wrap" }, [
                  _c(
                    "form",
                    { attrs: { autocomplete: "off", id: "filter-form" } },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-3" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.status_id,
                                  expression: "status_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "status_id",
                                "data-style":
                                  "form-control btn-default btn-outline",
                                id: "status_list"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.status_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.status_list, function(status) {
                              return _c(
                                "option",
                                { domProps: { value: status.id } },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(status.title) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "nk-gap-2" })
      ],
      _vm._v(" "),
      _vm.fights != null && _vm.fights.length > 0
        ? _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
              [
                _vm._l(_vm.fights, function(fight) {
                  return _c("div", { staticClass: "nk-match" }, [
                    _c(
                      "div",
                      { staticClass: "nk-match-team-left" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "team",
                                params: { id: fight.invitations[0].team.id }
                              }
                            }
                          },
                          [
                            _c("span", { staticClass: "nk-match-team-logo" }, [
                              _c("img", {
                                staticClass: "w-64px mr-10",
                                attrs: {
                                  src: _vm.getImageLink(
                                    fight.invitations[0].team.image,
                                    "avatar_team"
                                  )
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "nk-match-team-name" }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    fight.invitations[0].team.institution.title
                                  ) +
                                  ", " +
                                  _vm._s(
                                    fight.invitations[0].team.institution
                                      .location.title
                                  ) +
                                  ","
                              ),
                              _c("br"),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(fight.invitations[0].team.title) +
                                  "\n                        "
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "nk-match-status" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: { name: "match", params: { id: fight.id } }
                            }
                          },
                          [
                            _c("span", { staticClass: "nk-match-status-vs" }, [
                              _vm._v("VS (bo3)")
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "nk-match-status-date" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.moment
                                      .utc(fight.start_at, "YYYY-MM-DD h:mm:ss")
                                      .format("MMMM Do, HH:mm")
                                  ) + " МСК"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "nk-match-score" },
                              [
                                _vm.checkUpcoming(fight.start_at)
                                  ? [_vm._v(_vm._s(_vm.$t("upcoming")))]
                                  : fight.winner_id > 0
                                  ? [
                                      parseInt(fight.result[0]) >
                                        parseInt(fight.result[1]) &&
                                      fight.invitations[0].team.id ==
                                        fight.winner_id
                                        ? [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(fight.result[0]) +
                                                " : " +
                                                _vm._s(fight.result[1]) +
                                                "\n                                "
                                            )
                                          ]
                                        : parseInt(fight.result[1]) >
                                            parseInt(fight.result[0]) &&
                                          fight.invitations[1].team.id ==
                                            fight.winner_id
                                        ? [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(fight.result[0]) +
                                                " : " +
                                                _vm._s(fight.result[1]) +
                                                "\n                                "
                                            )
                                          ]
                                        : [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(fight.result[1]) +
                                                " : " +
                                                _vm._s(fight.result[0]) +
                                                "\n                                "
                                            )
                                          ]
                                    ]
                                  : [_vm._v(_vm._s(_vm.$t("online")))]
                              ],
                              2
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "nk-match-team-right" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "team",
                                params: { id: fight.invitations[1].team.id }
                              }
                            }
                          },
                          [
                            _c("span", { staticClass: "nk-match-team-name" }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    fight.invitations[1].team.institution.title
                                  ) +
                                  ", " +
                                  _vm._s(
                                    fight.invitations[1].team.institution
                                      .location.title
                                  ) +
                                  ","
                              ),
                              _c("br"),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(fight.invitations[1].team.title) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "nk-match-team-logo" }, [
                              _c("img", {
                                staticClass: "w-64px ml-10",
                                attrs: {
                                  src: _vm.getImageLink(
                                    fight.invitations[1].team.image,
                                    "avatar_team"
                                  )
                                }
                              })
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                _vm._v(" "),
                _c("pagination", { attrs: { pagination: _vm.pagination } })
              ],
              2
            )
          ])
        : _c("div", [
            _c("p", { staticClass: "txt-danger" }, [
              _vm._v(_vm._s(_vm.$t("no_results")))
            ])
          ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f8ec31ae", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/matches/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/matches/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8ec31ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f8ec31ae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/matches/index.vue");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8ec31ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/matches/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f8ec31ae", Component.options)
  } else {
    hotAPI.reload("data-v-f8ec31ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tYXRjaGVzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvaW5kZXgudnVlP2Y3MmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tYXRjaGVzL2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RkE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRUE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQSxLQUhBOzs7QUFLQSx5Q0FDQTtBQUNBLHlCQURBO0FBRUEsbUNBRkE7QUFHQTtBQUhBLE1BREEsQ0FMQTs7QUFhQSxRQWJBLGtCQWFBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDBCQUNBLHVCQURBLEVBRUEsNkJBRkEsRUFHQSwwQkFIQSxFQUlBLCtCQUpBLENBRkE7QUFRQSwyQkFSQTtBQVNBO0FBVEE7QUFXQSxLQXpCQTtBQTJCQSxXQTNCQSxxQkEyQkE7QUFDQTtBQUNBOztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREEsZUFFQSxFQUZBLENBRUEsUUFGQSxFQUVBO0FBQ0E7QUFDQSxhQUpBO0FBS0EsU0FOQTtBQU9BLEtBMUNBOztBQTJDQSxhQUNBO0FBQ0EsaUJBREEsdUJBRUE7QUFBQTs7QUFDQTtBQUdBLHlCQUhBO0FBSUEsNEJBSkE7QUFLQSxvQ0FMQTtBQU1BO0FBTkE7O0FBU0EsOERBQ0E7QUFDQTtBQUNBLGlEQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFSQSxNQVFBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUNBO0FBQ0E7QUFDQSxpQkFIQTs7QUFLQTs7QUFFQTtBQUNBO0FBQ0EsYUFiQTtBQWNBLFNBbERBO0FBbURBLHFCQW5EQSx5QkFtREEsUUFuREEsRUFvREE7QUFDQTtBQUNBO0FBQ0EsaURBQ0E7O0FBRUE7QUFDQTtBQTNEQSxLQTVDQTtBQXlHQTtBQUNBLHNCQURBLHVCQUNBLE9BREEsRUFDQSxPQURBLEVBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBSUEsbURBQ0E7QUFDQTtBQUNBO0FBUEE7QUF6R0EsQzs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLDJCQUEyQixFQUFFO0FBQzNDO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0EscUJBQXFCLFNBQVMseUNBQXlDLEVBQUU7QUFDekU7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3RELG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVksbUJBQW1CLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0EsZUFBZSx5REFBeUQ7QUFDeEU7QUFDQTtBQUNBLG9DQUFvQywwQkFBMEI7QUFDOUQ7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLHdDQUF3QyxvQ0FBb0M7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0Esd0NBQXdDLG9DQUFvQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUNBQWlDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseUJBQXlCLGVBQWU7QUFDM0U7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx3Q0FBd0Msb0NBQW9DO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0NBQXNDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdDQUFnQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFDQUFxQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0Esd0NBQXdDLG9DQUFvQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG9DQUFvQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esa0NBQWtDLFNBQVMsNkJBQTZCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0QkFBNEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ0Ysa0VBQVM7QUFDeEIsSUFBSSxLQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7OztBQ3JUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBa0U7QUFDbkc7QUFDNmI7QUFDYTtBQUMxYztBQUN3UTtBQUN4UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNXQUFjO0FBQ2hCLEVBQUUsOE5BQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVjLGdGQUFpQiIsImZpbGUiOiJqcy81OS5lYmM5N2I1YWViZWQ1Y2I4YzFjOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxjYXJkIDp0aXRsZT1cIiR0KCdtYXRjaGVzJylcIj5cclxuXHJcbiAgICAgICAgPHRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGlkPVwiZmlsdGVyLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic3RhdHVzX2lkXCIgbmFtZT1cInN0YXR1c19pZFwiIGNsYXNzPSdmb3JtLWNvbnRyb2wnIGRhdGEtc3R5bGU9XCJmb3JtLWNvbnRyb2wgYnRuLWRlZmF1bHQgYnRuLW91dGxpbmVcIiBpZD1cInN0YXR1c19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInN0YXR1cyBpbiBzdGF0dXNfbGlzdFwiIHYtYmluZDp2YWx1ZT1cInN0YXR1cy5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzdGF0dXMudGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwLTJcIj48L2Rpdj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImZpZ2h0cyE9bnVsbCAmJiBmaWdodHMubGVuZ3RoPjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1tYXRjaFwiIHYtZm9yPVwiZmlnaHQgaW4gZmlnaHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tbGVmdFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICd0ZWFtJywgcGFyYW1zOiB7IGlkOiBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEltYWdlTGluayhmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmltYWdlLCAnYXZhdGFyX3RlYW0nKVwiIGNsYXNzPVwidy02NHB4IG1yLTEwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC10ZWFtLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW5zdGl0dXRpb24udGl0bGV9fSwge3tmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uLnRpdGxlfX0sPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLnRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLW1hdGNoLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ21hdGNoJywgcGFyYW1zOiB7IGlkOiBmaWdodC5pZCB9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zdGF0dXMtdnNcIj5WUyAoYm8zKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtc3RhdHVzLWRhdGVcIj57eyBtb21lbnQudXRjKGZpZ2h0LnN0YXJ0X2F0LCBcIllZWVktTU0tREQgaDptbTpzc1wiKS5mb3JtYXQoJ01NTU0gRG8sIEhIOm1tJykgfX0g0JzQodCaPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY2hlY2tVcGNvbWluZyhmaWdodC5zdGFydF9hdClcIj57eyR0KCd1cGNvbWluZycpfX08L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJmaWdodC53aW5uZXJfaWQ+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInBhcnNlSW50KGZpZ2h0LnJlc3VsdFswXSk+cGFyc2VJbnQoZmlnaHQucmVzdWx0WzFdKSAmJiBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkPT1maWdodC53aW5uZXJfaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQucmVzdWx0WzBdfX0gOiB7e2ZpZ2h0LnJlc3VsdFsxXX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJwYXJzZUludChmaWdodC5yZXN1bHRbMV0pPnBhcnNlSW50KGZpZ2h0LnJlc3VsdFswXSkgJiYgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pZD09ZmlnaHQud2lubmVyX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZ2h0LnJlc3VsdFswXX19IDoge3tmaWdodC5yZXN1bHRbMV19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5yZXN1bHRbMV19fSA6IHt7ZmlnaHQucmVzdWx0WzBdfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+e3skdCgnb25saW5lJyl9fTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICd0ZWFtJywgcGFyYW1zOiB7IGlkOiBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmlkIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbnN0aXR1dGlvbi50aXRsZX19LCB7e2ZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24udGl0bGV9fSw8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0udGl0bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC10ZWFtLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsoZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctNjRweCBtbC0xMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCI+PC9wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0eHQtZGFuZ2VyXCI+e3skdCgnbm9fcmVzdWx0cycpfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2NhcmQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgICBpbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuICAgIGltcG9ydCB7IGxvYWRNZXNzYWdlcyB9IGZyb20gJ34vcGx1Z2lucy9pMThuJ1xyXG4gICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3BsYXllcnMnKSB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogJ2xhbmcvbG9jYWxlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmaWdodHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzX2xpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MCwgdGl0bGU6ICfQktGB0LUnfSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MSwgdGl0bGU6ICfQn9GA0L7RiNC10LTRiNC40LUnfSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MiwgdGl0bGU6IFwi0J7QvdC70LDQudC9XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtpZDozLCB0aXRsZTogXCLQn9GA0LXQtNGB0YLQvtGP0YnQuNC1XCJ9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzX2lkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIGxvYWRNZXNzYWdlcyh0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW9tZW50LmxvY2FsZSh0aGlzLmxvY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAvL2lmKHRoaXMuYXV0aGVudGljYXRlZClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmlnaHRzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3N0YXR1c19saXN0XCIpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCh0YLQsNGC0YPRgSDQvNCw0YLRh9CwXCJcclxuICAgICAgICAgICAgICAgIH0pLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYuc3RhdHVzX2lkID0gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnZXRGaWdodHMoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeVN0YXJ0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLydzdGF0dXMnIDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cInRvdXJuYW1lbnRfaWRcIiA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYWdlJyA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdfbGltaXQnIDogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX3NvcnRcIiA6ICctc3RhcnRfYXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl93aXRoXCIgOiAnaW52aXRhdGlvbnMudGVhbSxpbnZpdGF0aW9ucy50ZWFtLmluc3RpdHV0aW9uLGludml0YXRpb25zLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24sd2lubmVyLGdhbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoZW50aWNhdGVkICYmIHRoaXMudXNlci5yb2xlX2lkIT0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyb3V0ZSA9ICcvYXBpL3RlYW1zLycrdGhpcy51c2VyLnRlYW1faWQrJy9maWdodHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnVzZXIudHlwZT09J3JlZmVyZWUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydqdWRnZV9pZCddID0gdGhpcy51c2VyLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJvdXRlID0gJy9hcGkvZmlnaHRzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJvdXRlID0gJy9hcGkvZmlnaHRzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdHVzX2lkPT0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snd2lubmVyX2lkLWd0J10gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdHVzX2lkPT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snd2lubmVyX2lkJ10gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydzdGFydF9hdC1zdCddID0gdGhpcy5tb21lbnQudXRjKCkuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0dXNfaWQ9PTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydzdGFydF9hdC1ndCddID0gdGhpcy5tb21lbnQudXRjKCkuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLlVybFBhcmFtc01lcmdlKHF1ZXJ5U3RhcnRQYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoYXJvdXRlKyc/JytxdWVyeSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZ2h0cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uKGZpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5zdGFydF9hdCA9IF9zZWxmLmRhdGVDb252ZXJ0VVRDKGZpZ2h0LnN0YXJ0X2F0LCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdmaWdodHMnLCBmaWdodHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGVja1VwY29taW5nKHN0YXJ0X2F0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMSA9IG5ldyBEYXRlKHN0YXJ0X2F0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGQxLmdldFRpbWUoKS1kMi5nZXRUaW1lKCk+MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICAnJHJvdXRlLnF1ZXJ5JyhuZXdQYWdlLCBvbGRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZpZ2h0cygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXNfaWQ6IGZ1bmN0aW9uKHZhbCwgb2xkVmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZpZ2h0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tYXRjaGVzL2luZGV4LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJjYXJkXCIsXG4gICAgeyBhdHRyczogeyB0aXRsZTogX3ZtLiR0KFwibWF0Y2hlc1wiKSB9IH0sXG4gICAgW1xuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiY2FyZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXdyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLCBpZDogXCJmaWx0ZXItZm9ybVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGF0dXNfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdGF0dXNfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c19pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtc3R5bGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBidG4tZGVmYXVsdCBidG4tb3V0bGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzdGF0dXNfbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RhdHVzX2lkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdGF0dXNfbGlzdCwgZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IHN0YXR1cy5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Moc3RhdHVzLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcC0yXCIgfSlcbiAgICAgIF0sXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZpZ2h0cyAhPSBudWxsICYmIF92bS5maWdodHMubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlnaHRzLCBmdW5jdGlvbihmaWdodCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1sb2dvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTY0cHggbXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJfdGVhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbnN0aXR1dGlvbi50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbnN0aXR1dGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubG9jYXRpb24udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zdGF0dXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJtYXRjaFwiLCBwYXJhbXM6IHsgaWQ6IGZpZ2h0LmlkIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXN0YXR1cy12c1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlZTIChibzMpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zdGF0dXMtZGF0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51dGMoZmlnaHQuc3RhcnRfYXQsIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJNTU1NIERvLCBISDptbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiDQnNCh0JpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXNjb3JlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrVXBjb21pbmcoZmlnaHQuc3RhcnRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ1cGNvbWluZ1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmlnaHQud2lubmVyX2lkID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChmaWdodC5yZXN1bHRbMF0pID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChmaWdodC5yZXN1bHRbMV0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWQgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC53aW5uZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZ2h0LnJlc3VsdFswXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlnaHQucmVzdWx0WzFdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VJbnQoZmlnaHQucmVzdWx0WzFdKSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGZpZ2h0LnJlc3VsdFswXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaWQgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQud2lubmVyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWdodC5yZXN1bHRbMF0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZ2h0LnJlc3VsdFsxXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZ2h0LnJlc3VsdFsxXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlnaHQucmVzdWx0WzBdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib25saW5lXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmluc3RpdHV0aW9uLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmluc3RpdHV0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sb2NhdGlvbi50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1sb2dvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTY0cHggbWwtMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJfdGVhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7IGF0dHJzOiB7IHBhZ2luYXRpb246IF92bS5wYWdpbmF0aW9uIH0gfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidHh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJub19yZXN1bHRzXCIpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZjhlYzMxYWVcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mOGVjMzFhZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWF0Y2hlcy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtZjhlYzMxYWVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvaW5kZXgudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNTkiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWY4ZWMzMWFlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tYXRjaGVzL2luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mOGVjMzFhZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWY4ZWMzMWFlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tYXRjaGVzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvaW5kZXgudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNTkiXSwic291cmNlUm9vdCI6IiJ9