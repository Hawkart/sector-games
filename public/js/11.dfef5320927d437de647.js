webpackJsonp([11],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/tournaments/index.vue":
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

var _i18n = __webpack_require__("./resources/assets/js/plugins/i18n.js");

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _sweetalert = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    metaInfo: function metaInfo() {
        return { title: this.$t('tournaments') };
    },
    data: function data() {
        return {
            tournaments: [],
            pagination: [],
            status_list: [{ id: 0, title: 'Все' }, { id: 1, title: 'Прошедшие' }, { id: 2, title: "Онлайн" }, { id: 3, title: "Предстоящие" }],
            status_id: null
        };
    },

    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        authenticated: 'auth/check',
        locale: 'lang/locale'
    })),
    mounted: function mounted() {
        this.getTournaments();

        (0, _i18n.loadMessages)(this.locale);
        this.moment.locale(this.locale);

        var _self = this;
        _vue2.default.nextTick(function () {
            $("#status_list").select2({
                placeholder: "Статус турнира"
            }).on("change", function (e) {
                _self.status_id = $(e.currentTarget).find("option:selected").val();
            });
        });
    },

    methods: {
        getTournaments: function getTournaments() {
            var _this = this;

            var dnow = new Date();

            var queryStartParams = {
                'page': 1,
                '_limit': 12,
                "_sort": 'start_at',
                "_with": 'teams,game'
            };

            if (this.status_id == 1) {
                queryStartParams['end_at-not'] = null;
            } else if (this.status_id == 2) {
                queryStartParams['start_at-st'] = this.moment.utc().format();
                queryStartParams['end_at'] = null;
            } else if (this.status_id == 3) {
                queryStartParams['start_at-gt'] = this.moment.utc().format();
            }

            var query = this.UrlParamsMerge(queryStartParams);

            _axios2.default.get('/api/tournaments?' + query).then(function (response) {
                var tournaments = response.data.data;
                var _self = _this;

                if (tournaments.length > 0) {
                    tournaments.forEach(function (tournament) {
                        tournament.start_at = _self.dateConvertUTC(tournament.start_at, -1);
                    });
                }

                _this.$set(_this, 'tournaments', tournaments);

                delete response.data.data;
                _this.pagination = response.data;
            });
        },
        checkRegisterStart: function checkRegisterStart(register_start) {
            return this.moment.utc().isAfter(register_start);
        },
        checkRegisterEnd: function checkRegisterEnd(register_start) {
            return this.moment.utc().isBefore(this.moment(register_start).subtract(1, 'hours'));
        },

        register: function register() {
            var _this2 = this;

            if (!this.authenticated) {
                this.$router.push({ name: 'login' });
                return;
            }

            if (this.user.team_id == null) {
                (0, _sweetalert2.default)({ type: 'warning', title: 'Error!', html: 'You need to be in the team.' });
                return;
            }

            _axios2.default.post('/api/tournaments/' + this.$route.params.id + '/teams/' + this.user.team_id).then(function (response) {

                (0, _sweetalert2.default)({
                    type: 'success',
                    title: 'Success!',
                    html: 'You are registered on the tournament!'
                });

                _this2.getTournamentTeams();
            }).catch(function (error) {

                (0, _sweetalert2.default)({
                    type: 'warning',
                    title: 'Error!',
                    html: error.response.data.error
                });
            });
        }
    },
    watch: {
        '$route.query': function $routeQuery(newPage, oldPage) {
            this.getTournaments();
        },

        status_id: function status_id(val, oldVal) {
            this.getTournaments();
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ba61360\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournaments/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "card",
        { attrs: { title: _vm.$t("tournaments") } },
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
                                        .call($event.target.options, function(
                                          o
                                        ) {
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
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(status.title) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t"
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
          _vm.tournaments != null && _vm.tournaments.length > 0
            ? _c("table", { staticClass: "nk-table" }, [
                _c(
                  "tbody",
                  [
                    _c("tr", [
                      _c("th", [_vm._v(_vm._s(_vm.$t("title")))]),
                      _vm._v(" "),
                      _c("th", [_vm._v(_vm._s(_vm.$t("game")))]),
                      _vm._v(" "),
                      _c("th", [
                        _vm._v(_vm._s(_vm.$t("tournament_start_time")))
                      ]),
                      _vm._v(" "),
                      _c("th", [
                        _vm._v(_vm._s(_vm.$t("tournament_register_start_time")))
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v(_vm._s(_vm.$t("teams")))]),
                      _vm._v(" "),
                      _c("th", [_vm._v(" ")])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.tournaments, function(tournament) {
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
                                    name: "tournament",
                                    params: { id: tournament.id }
                                  }
                                }
                              },
                              [
                                tournament.image != null
                                  ? _c("img", {
                                      staticClass: "w-50px mr-10",
                                      attrs: {
                                        src: _vm.getImageLink(
                                          tournament.image,
                                          "avatar_team"
                                        ),
                                        alt: tournament.title
                                      }
                                    })
                                  : _c("i", { staticClass: "ti-cup mr-20" }),
                                _vm._v(" "),
                                _c("span", [_vm._v(_vm._s(tournament.title))])
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
                                    name: "game",
                                    params: { gameId: tournament.game.id }
                                  },
                                  title: tournament.game.title
                                }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: _vm.getImageLink(
                                      tournament.game.logo_mini
                                    ),
                                    width: "35",
                                    alt: tournament.game.title
                                  }
                                })
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(
                            _vm._s(
                              _vm
                                .moment(
                                  tournament.start_at,
                                  "YYYY-MM-DD h:mm:ss"
                                )
                                .format("D MMM, HH:mm")
                            ) + " МСК"
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(
                            _vm._s(
                              _vm
                                .moment(
                                  tournament.register_start,
                                  "YYYY-MM-DD h:mm:ss"
                                )
                                .format("D MMM, HH:mm")
                            ) + " МСК"
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(tournament.teams.length) + " / 175")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("div", { staticClass: "input-group mt-5" }, [
                            _vm.checkRegisterStart(tournament.register_start) &&
                            _vm.checkRegisterEnd(tournament.register_start)
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary btn-xs",
                                    on: { click: _vm.register }
                                  },
                                  [_vm._v("Зарегистрироваться")]
                                )
                              : !_vm.checkRegisterEnd(tournament.register_start)
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-defualt btn-xs",
                                    attrs: { disabled: "" }
                                  },
                                  [_vm._v("Регистрация завершена")]
                                )
                              : _vm._e()
                          ])
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c(
                          "a",
                          { staticClass: "vm-title", attrs: { href: "#" } },
                          [
                            _c("img", {
                              staticClass: "w-50px mr-10",
                              attrs: { src: "/images/ava_32.png" }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("CS:GO")])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _c("img", {
                          attrs: { src: "/images/CS_GO1.png", width: "35" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("23 фев. 2019 г., МСК")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("17 фев. 2019 г., МСК")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("-")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "input-group mt-5" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-defualt btn-xs text-info",
                              attrs: { disabled: "" }
                            },
                            [_vm._v("Регистрация ожидается")]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c(
                          "a",
                          { staticClass: "vm-title", attrs: { href: "#" } },
                          [
                            _c("img", {
                              staticClass: "w-50px mr-10",
                              attrs: { src: "/images/ava_32.png" }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("LOL")])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _c("img", {
                          attrs: { src: "/images/lol.jpg", width: "35" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("13 апр. 2019 г., МСК")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("7 апр. 2019 г., МСК")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("-")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "input-group mt-5" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-defualt btn-xs text-info",
                              attrs: { disabled: "" }
                            },
                            [_vm._v("Регистрация ожидается")]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [
                        _c(
                          "a",
                          { staticClass: "vm-title", attrs: { href: "#" } },
                          [
                            _c("img", {
                              staticClass: "w-50px mr-10",
                              attrs: { src: "/images/ava_32.png" }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("DOTA2")])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _c("img", {
                          attrs: {
                            src:
                              "https://sparta.games/storage/games/February2018/6MmyFNiGM8h9igLGkgru.png",
                            width: "35"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("11 мая 2019 г., МСК")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v("5 мая 2019 г., МСК")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [_vm._v("-")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "input-group mt-5" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-defualt btn-xs text-info",
                              attrs: { disabled: "" }
                            },
                            [_vm._v("Регистрация ожидается")]
                          )
                        ])
                      ])
                    ])
                  ],
                  2
                )
              ])
            : _c("p", { staticClass: "text-white" }, [
                _vm._v(
                  "\n\t\t\t\t" + _vm._s(_vm.$t("no_tournaments")) + "\n\t\t\t"
                )
              ]),
          _vm._v(" "),
          _c("pagination", { attrs: { pagination: _vm.pagination } })
        ],
        2
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-0ba61360", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/tournaments/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/tournaments/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ba61360_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ba61360\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournaments/index.vue");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ba61360_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/tournaments/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ba61360", Component.options)
  } else {
    hotAPI.reload("data-v-0ba61360", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9pbmRleC52dWU/NmQ4MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3SUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRUE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsUUFKQSxrQkFJQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSwwQkFGQTtBQUdBLDBCQUNBLHVCQURBLEVBRUEsNkJBRkEsRUFHQSwwQkFIQSxFQUlBLCtCQUpBLENBSEE7QUFTQTtBQVRBO0FBV0EsS0FoQkE7O0FBaUJBLHlDQUNBO0FBQ0EseUJBREE7QUFFQSxtQ0FGQTtBQUdBO0FBSEEsTUFEQSxDQWpCQTtBQXdCQSxXQXhCQSxxQkF3QkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREEsZUFFQSxFQUZBLENBRUEsUUFGQSxFQUVBO0FBQ0E7QUFDQSxhQUpBO0FBS0EsU0FOQTtBQU9BLEtBdENBOztBQXVDQSxhQUNBO0FBQ0Esc0JBREEsNEJBRUE7QUFBQTs7QUFDQTs7QUFFQTtBQUdBLHlCQUhBO0FBSUEsNEJBSkE7QUFLQSxtQ0FMQTtBQU1BO0FBTkE7O0FBU0EscUNBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FDQTtBQUNBLDhEQUNBO0FBQ0E7QUFDQSxxQkFIQTtBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQWhCQTtBQWlCQSxTQTNDQTtBQTRDQSwwQkE1Q0Es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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvMTEuZGZlZjUzMjA5MjdkNDM3ZGU2NDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxjYXJkIDp0aXRsZT1cIiR0KCd0b3VybmFtZW50cycpXCI+XHJcblxyXG5cdFx0XHQ8dGVtcGxhdGU+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHQ8Y2FyZD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS13cmFwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBhdXRvY29tcGxldGU9XCJvZmZcIiBpZD1cImZpbHRlci1mb3JtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3Qgdi1tb2RlbD1cInN0YXR1c19pZFwiIG5hbWU9XCJzdGF0dXNfaWRcIiBjbGFzcz0nZm9ybS1jb250cm9sJyBkYXRhLXN0eWxlPVwiZm9ybS1jb250cm9sIGJ0bi1kZWZhdWx0IGJ0bi1vdXRsaW5lXCIgaWQ9XCJzdGF0dXNfbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHYtZm9yPVwic3RhdHVzIGluIHN0YXR1c19saXN0XCIgdi1iaW5kOnZhbHVlPVwic3RhdHVzLmlkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgc3RhdHVzLnRpdGxlIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2NhcmQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmstZ2FwLTJcIj48L2Rpdj5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cIm5rLXRhYmxlXCIgdi1pZj1cInRvdXJuYW1lbnRzIT1udWxsICYmIHRvdXJuYW1lbnRzLmxlbmd0aD4wXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0aD57eyR0KCd0aXRsZScpfX08L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+e3skdCgnZ2FtZScpfX08L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+e3skdCgndG91cm5hbWVudF9zdGFydF90aW1lJyl9fTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD57eyR0KCd0b3VybmFtZW50X3JlZ2lzdGVyX3N0YXJ0X3RpbWUnKX19PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPnt7JHQoJ3RlYW1zJyl9fTwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD4mbmJzcDs8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0ciB2LWZvcj1cInRvdXJuYW1lbnQgaW4gdG91cm5hbWVudHNcIj5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxyb3V0ZXItbGluayAgOnRvPVwieyBuYW1lOiAndG91cm5hbWVudCcsIHBhcmFtczogeyBpZDogdG91cm5hbWVudC5pZCB9fVwiICBjbGFzcz1cInZtLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsodG91cm5hbWVudC5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctNTBweCBtci0xMFwiIDphbHQ9XCJ0b3VybmFtZW50LnRpdGxlXCIgdi1pZj1cInRvdXJuYW1lbnQuaW1hZ2UhPW51bGxcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJ0aS1jdXAgbXItMjBcIiB2LWVsc2U+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3sgdG91cm5hbWVudC50aXRsZX19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvcm91dGVyLWxpbms+XHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2dhbWUnLCBwYXJhbXM6IHsgZ2FtZUlkOiB0b3VybmFtZW50LmdhbWUuaWQgfX1cIiA6dGl0bGU9XCJ0b3VybmFtZW50LmdhbWUudGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgOnNyYz1cImdldEltYWdlTGluayh0b3VybmFtZW50LmdhbWUubG9nb19taW5pKVwiIHdpZHRoPVwiMzVcIiA6YWx0PVwidG91cm5hbWVudC5nYW1lLnRpdGxlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L3JvdXRlci1saW5rPlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7bW9tZW50KHRvdXJuYW1lbnQuc3RhcnRfYXQsIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCIpLmZvcm1hdCgnRCBNTU0sIEhIOm1tJykgfX0g0JzQodCaPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e21vbWVudCh0b3VybmFtZW50LnJlZ2lzdGVyX3N0YXJ0LCBcIllZWVktTU0tREQgaDptbTpzc1wiKS5mb3JtYXQoJ0QgTU1NLCBISDptbScpIH19INCc0KHQmjwvdGQ+XHJcblx0XHRcdFx0XHRcdDwhLS08dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7dG91cm5hbWVudC50ZWFtcy5sZW5ndGh9fSAvIHt7IHRvdXJuYW1lbnQuY291bnRfdGVhbXN9fTwvdGQ+LS0+XHJcblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3t0b3VybmFtZW50LnRlYW1zLmxlbmd0aH19IC8gMTc1PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtdC01XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cInJlZ2lzdGVyXCIgdi1pZj1cImNoZWNrUmVnaXN0ZXJTdGFydCh0b3VybmFtZW50LnJlZ2lzdGVyX3N0YXJ0KSAmJiBjaGVja1JlZ2lzdGVyRW5kKHRvdXJuYW1lbnQucmVnaXN0ZXJfc3RhcnQpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHYtZWxzZS1pZj1cIiFjaGVja1JlZ2lzdGVyRW5kKHRvdXJuYW1lbnQucmVnaXN0ZXJfc3RhcnQpXCIgZGlzYWJsZWQgY2xhc3M9XCJidG4gYnRuLWRlZnVhbHQgYnRuLXhzXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQt9Cw0LLQtdGA0YjQtdC90LA8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cInZtLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9pbWFnZXMvYXZhXzMyLnBuZ1wiIGNsYXNzPVwidy01MHB4IG1yLTEwXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+Q1M6R088L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9DU19HTzEucG5nXCIgd2lkdGg9XCIzNVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+MjMg0YTQtdCyLiAyMDE5INCzLiwg0JzQodCaPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4xNyDRhNC10LIuIDIwMTkg0LMuLCDQnNCh0Jo8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPi08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG10LTVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gZGlzYWJsZWQgY2xhc3M9XCJidG4gYnRuLWRlZnVhbHQgYnRuLXhzIHRleHQtaW5mb1wiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L7QttC40LTQsNC10YLRgdGPPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ2bS10aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2F2YV8zMi5wbmdcIiBjbGFzcz1cInctNTBweCBtci0xMFwiLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPkxPTDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2xvbC5qcGdcIiB3aWR0aD1cIjM1XCIgLz5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4xMyDQsNC/0YAuIDIwMTkg0LMuLCDQnNCh0Jo8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjcg0LDQv9GALiAyMDE5INCzLiwg0JzQodCaPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4tPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtdC01XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGRpc2FibGVkIGNsYXNzPVwiYnRuIGJ0bi1kZWZ1YWx0IGJ0bi14cyB0ZXh0LWluZm9cIj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPINC+0LbQuNC00LDQtdGC0YHRjzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzPVwidm0tdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9hdmFfMzIucG5nXCIgY2xhc3M9XCJ3LTUwcHggbXItMTBcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5ET1RBMjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJodHRwczovL3NwYXJ0YS5nYW1lcy9zdG9yYWdlL2dhbWVzL0ZlYnJ1YXJ5MjAxOC82TW15Rk5pR004aDlpZ0xHa2dydS5wbmdcIiB3aWR0aD1cIjM1XCIgLz5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4xMSDQvNCw0Y8gMjAxOSDQsy4sINCc0KHQmjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+NSDQvNCw0Y8gMjAxOSDQsy4sINCc0KHQmjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+LTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbXQtNVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBkaXNhYmxlZCBjbGFzcz1cImJ0biBidG4tZGVmdWFsdCBidG4teHMgdGV4dC1pbmZvXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvtC20LjQtNCw0LXRgtGB0Y88L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuXHRcdFx0XHJcblx0XHRcdDxwIHYtZWxzZSBjbGFzcz1cInRleHQtd2hpdGVcIj5cclxuXHRcdFx0XHR7eyR0KCdub190b3VybmFtZW50cycpfX1cclxuXHRcdFx0PC9wPlxyXG5cclxuICAgICAgICAgICAgPHBhZ2luYXRpb24gOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCI+PC9wYWdpbmF0aW9uPlxyXG4gICAgICAgIDwvY2FyZD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gICAgaW1wb3J0IHsgbG9hZE1lc3NhZ2VzIH0gZnJvbSAnfi9wbHVnaW5zL2kxOG4nXHJcbiAgICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuICAgIGltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBtZXRhSW5mbyAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCd0b3VybmFtZW50cycpIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0b3VybmFtZW50czogW10sXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBbXSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19saXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjAsIHRpdGxlOiAn0JLRgdC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjEsIHRpdGxlOiAn0J/RgNC+0YjQtdC00YjQuNC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjIsIHRpdGxlOiBcItCe0L3Qu9Cw0LnQvVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MywgdGl0bGU6IFwi0J/RgNC10LTRgdGC0L7Rj9GJ0LjQtVwifVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19pZDogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogJ2xhbmcvbG9jYWxlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUb3VybmFtZW50cygpO1xyXG5cclxuICAgICAgICAgICAgbG9hZE1lc3NhZ2VzKHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgdGhpcy5tb21lbnQubG9jYWxlKHRoaXMubG9jYWxlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjc3RhdHVzX2xpc3RcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0KHRgtCw0YLRg9GBINGC0YPRgNC90LjRgNCwXCJcclxuICAgICAgICAgICAgICAgIH0pLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYuc3RhdHVzX2lkID0gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnZXRUb3VybmFtZW50cygpXHJcbiAgICAgICAgICAgICAgICB7XHJcblx0XHRcdFx0XHR2YXIgZG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnlTdGFydFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cInN0YXR1c1wiIDogMSxcclxuXHRcdFx0XHRcdFx0Ly9cInJlZ2lzdGVyX3N0YXJ0LWd0XCIgOiB0aGlzLmRhdGVDb252ZXJ0VVRDKGRub3cudG9Mb2NhbGVEYXRlU3RyaW5nKCksIC0xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BhZ2UnIDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ19saW1pdCcgOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJfc29ydFwiIDogJ3N0YXJ0X2F0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJfd2l0aFwiIDogJ3RlYW1zLGdhbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0dXNfaWQ9PTEpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydlbmRfYXQtbm90J10gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdHVzX2lkPT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snc3RhcnRfYXQtc3QnXSA9IHRoaXMubW9tZW50LnV0YygpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydlbmRfYXQnXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0dXNfaWQ9PTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydzdGFydF9hdC1ndCddID0gdGhpcy5tb21lbnQudXRjKCkuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLlVybFBhcmFtc01lcmdlKHF1ZXJ5U3RhcnRQYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdG91cm5hbWVudHM/JytxdWVyeSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvdXJuYW1lbnRzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYodG91cm5hbWVudHMubGVuZ3RoPjApXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR0b3VybmFtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHRvdXJuYW1lbnQpXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dG91cm5hbWVudC5zdGFydF9hdCA9IF9zZWxmLmRhdGVDb252ZXJ0VVRDKHRvdXJuYW1lbnQuc3RhcnRfYXQsIC0xKTtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICd0b3VybmFtZW50cycsIHRvdXJuYW1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hlY2tSZWdpc3RlclN0YXJ0KHJlZ2lzdGVyX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbWVudC51dGMoKS5pc0FmdGVyKHJlZ2lzdGVyX3N0YXJ0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGVja1JlZ2lzdGVyRW5kKHJlZ2lzdGVyX3N0YXJ0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbWVudC51dGMoKS5pc0JlZm9yZSh0aGlzLm1vbWVudChyZWdpc3Rlcl9zdGFydCkuc3VidHJhY3QoMSwgJ2hvdXJzJykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyOiBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuYXV0aGVudGljYXRlZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2xvZ2luJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy51c2VyLnRlYW1faWQ9PW51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FsKHsgdHlwZTogJ3dhcm5pbmcnLCB0aXRsZTogJ0Vycm9yIScsIGh0bWw6ICdZb3UgbmVlZCB0byBiZSBpbiB0aGUgdGVhbS4nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3RvdXJuYW1lbnRzLycrdGhpcy4kcm91dGUucGFyYW1zLmlkKycvdGVhbXMvJyt0aGlzLnVzZXIudGVhbV9pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogJ1lvdSBhcmUgcmVnaXN0ZXJlZCBvbiB0aGUgdG91cm5hbWVudCEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUb3VybmFtZW50VGVhbXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICAnJHJvdXRlLnF1ZXJ5JyhuZXdQYWdlLCBvbGRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnRzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1c19pZDogZnVuY3Rpb24odmFsLCBvbGRWYWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG91cm5hbWVudHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvaW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImNhcmRcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogX3ZtLiR0KFwidG91cm5hbWVudHNcIikgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiY2FyZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS13cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGF1dG9jb21wbGV0ZTogXCJvZmZcIiwgaWQ6IFwiZmlsdGVyLWZvcm1cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGF0dXNfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RhdHVzX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c19pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sIGJ0bi1kZWZhdWx0IGJ0bi1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzdGF0dXNfbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RhdHVzX2lkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdGF0dXNfbGlzdCwgZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IHN0YXR1cy5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhzdGF0dXMudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwLTJcIiB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0udG91cm5hbWVudHMgIT0gbnVsbCAmJiBfdm0udG91cm5hbWVudHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidGl0bGVcIikpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJnYW1lXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ0b3VybmFtZW50X3N0YXJ0X3RpbWVcIikpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInRvdXJuYW1lbnRfcmVnaXN0ZXJfc3RhcnRfdGltZVwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInRlYW1zXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIsKgXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udG91cm5hbWVudHMsIGZ1bmN0aW9uKHRvdXJuYW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZtLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG91cm5hbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiB0b3VybmFtZW50LmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdXJuYW1lbnQuaW1hZ2UgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTUwcHggbXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VybmFtZW50LmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJfdGVhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IHRvdXJuYW1lbnQudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpLWN1cCBtci0yMFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModG91cm5hbWVudC50aXRsZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJnYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgZ2FtZUlkOiB0b3VybmFtZW50LmdhbWUuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRvdXJuYW1lbnQuZ2FtZS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91cm5hbWVudC5nYW1lLmxvZ29fbWluaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IHRvdXJuYW1lbnQuZ2FtZS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb21lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91cm5hbWVudC5zdGFydF9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllZWVktTU0tREQgaDptbTpzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkQgTU1NLCBISDptbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiDQnNCh0JpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VybmFtZW50LnJlZ2lzdGVyX3N0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiRCBNTU0sIEhIOm1tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiINCc0KHQmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0b3VybmFtZW50LnRlYW1zLmxlbmd0aCkgKyBcIiAvIDE3NVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAgbXQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hlY2tSZWdpc3RlclN0YXJ0KHRvdXJuYW1lbnQucmVnaXN0ZXJfc3RhcnQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrUmVnaXN0ZXJFbmQodG91cm5hbWVudC5yZWdpc3Rlcl9zdGFydClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJlZ2lzdGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogIV92bS5jaGVja1JlZ2lzdGVyRW5kKHRvdXJuYW1lbnQucmVnaXN0ZXJfc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZ1YWx0IGJ0bi14c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0LfQsNCy0LXRgNGI0LXQvdCwXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2bS10aXRsZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTUwcHggbXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2F2YV8zMi5wbmdcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkNTOkdPXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DU19HTzEucG5nXCIsIHdpZHRoOiBcIjM1XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjIzINGE0LXQsi4gMjAxOSDQsy4sINCc0KHQmlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMTcg0YTQtdCyLiAyMDE5INCzLiwg0JzQodCaXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG10LTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZ1YWx0IGJ0bi14cyB0ZXh0LWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC+0LbQuNC00LDQtdGC0YHRj1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidm0tdGl0bGVcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy01MHB4IG1yLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9hdmFfMzIucG5nXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJMT0xcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2xvbC5qcGdcIiwgd2lkdGg6IFwiMzVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMTMg0LDQv9GALiAyMDE5INCzLiwg0JzQodCaXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI3INCw0L/RgC4gMjAxOSDQsy4sINCc0KHQmlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBtdC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmdWFsdCBidG4teHMgdGV4dC1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvtC20LjQtNCw0LXRgtGB0Y9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZtLXRpdGxlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNTBweCBtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvYXZhXzMyLnBuZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiRE9UQTJcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3NwYXJ0YS5nYW1lcy9zdG9yYWdlL2dhbWVzL0ZlYnJ1YXJ5MjAxOC82TW15Rk5pR004aDlpZ0xHa2dydS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxMSDQvNCw0Y8gMjAxOSDQsy4sINCc0KHQmlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiNSDQvNCw0Y8gMjAxOSDQsy4sINCc0KHQmlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBtdC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmdWFsdCBidG4teHMgdGV4dC1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvtC20LjQtNCw0LXRgtGB0Y9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLiR0KFwibm9fdG91cm5hbWVudHNcIikpICsgXCJcXG5cXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBhZ2luYXRpb25cIiwgeyBhdHRyczogeyBwYWdpbmF0aW9uOiBfdm0ucGFnaW5hdGlvbiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMGJhNjEzNjBcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wYmE2MTM2MFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTBiYTYxMzYwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9pbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGJhNjEzNjBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wYmE2MTM2MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBiYTYxMzYwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9pbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSJdLCJzb3VyY2VSb290IjoiIn0=