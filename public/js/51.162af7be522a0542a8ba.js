webpackJsonp([51],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/settings/school.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _vform = __webpack_require__("./node_modules/vform/dist/vform.js");

var _vform2 = _interopRequireDefault(_vform);

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    metaInfo: function metaInfo() {
        return { title: this.$t('school') };
    },


    data: function data() {
        return {
            form: new _vform2.default({
                institution_id: '',
                class: '',
                char: ''
            }),
            country_id: null,
            countries: null,
            region_id: null,
            regions: null,
            city_id: null,
            cities: null,
            institutions: null,
            institution: null,
            city: null,
            region: null,
            country: null
        };
    },

    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        locale: 'lang/locale'
    }), {
        chars: function chars() {
            var str = this.$t('alphabet');
            return str.split(",");
        }
    }),

    mounted: function mounted() {
        this.getUserSchools();
        this.getCountries();

        _vue2.default.nextTick(function () {
            $.fn.select2.amd.define('select2/i18n/ru', [], function () {
                return {
                    errorLoading: function errorLoading() {
                        return 'Результат не может быть загружен.';
                    },
                    inputTooLong: function inputTooLong(args) {
                        var overChars = args.input.length - args.maximum;
                        var message = 'Пожалуйста, удалите ' + overChars + ' символ';
                        if (overChars >= 2 && overChars <= 4) {
                            message += 'а';
                        } else if (overChars >= 5) {
                            message += 'ов';
                        }
                        return message;
                    },
                    inputTooShort: function inputTooShort(args) {
                        var remainingChars = args.minimum - args.input.length;

                        var message = 'Пожалуйста, введите ' + remainingChars + ' или более символов';

                        return message;
                    },
                    loadingMore: function loadingMore() {
                        return 'Загружаем ещё ресурсы…';
                    },
                    maximumSelected: function maximumSelected(args) {
                        var message = 'Вы можете выбрать ' + args.maximum + ' элемент';

                        if (args.maximum >= 2 && args.maximum <= 4) {
                            message += 'а';
                        } else if (args.maximum >= 5) {
                            message += 'ов';
                        }

                        return message;
                    },
                    noResults: function noResults() {
                        return 'Ничего не найдено';
                    },
                    searching: function searching() {
                        return 'Поиск…';
                    }
                };
            });
        });
    },


    methods: {
        update: function update() {
            var _this = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var _ref, data;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _this.form.post('/api/users/' + _this.user.id + '/institutions');

                            case 2:
                                _ref = _context.sent;
                                data = _ref.data;

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },
        getUserSchools: function getUserSchools() {
            var _this2 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _axios2.default.get('/api/institution_user?user_id=' + _this2.user.id + '&_with=institution&_sort=-created_at').then(function (response) {
                                    _this2.$set(_this2, 'institution', response.data[0]);
                                    _this2.form.institution_id = _this2.institution.institution.id;
                                    _this2.form.class = _this2.institution.number;
                                    _this2.form.char = _this2.institution.char;
                                    _this2.city_id = _this2.institution.institution.location_id;
                                });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }))();
        },
        getCountries: function getCountries() {
            var _this3 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                var self;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _axios2.default.get('/api/locations?parent_id=null').then(function (response) {
                                    _this3.$set(_this3, 'countries', response.data);
                                });

                            case 2:
                                self = _this3;

                                $("#country_list").select2().on("select2:select", function (e) {
                                    self.country_id = $(e.currentTarget).find("option:selected").val();
                                });

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this3);
            }))();
        },
        selectCountry: function selectCountry() {
            var _this4 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _this4.getRegions(_this4.country_id);

                            case 2:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this4);
            }))();
        },
        selectRegion: function selectRegion() {
            var _this5 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _this5.getCities(_this5.region_id);

                            case 2:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, _this5);
            }))();
        },
        selectCity: function selectCity() {
            var _this6 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return _this6.getSchools(_this6.city_id);

                            case 2:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, _this6);
            }))();
        },
        getLocation: function getLocation(id) {
            var _this7 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.next = 2;
                                return _axios2.default.get('/api/locations/' + id);

                            case 2:
                                return _context7.abrupt('return', _context7.sent);

                            case 3:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, _this7);
            }))();
        },
        getRegions: function getRegions(parent_id) {
            var _this8 = this;

            _axios2.default.get('/api/locations?_sort=title&parent_id=' + parent_id).then(function (response) {
                _this8.$set(_this8, 'regions', response.data);

                var self = _this8;
                $("#region_list").select2().on("change", function (e) {
                    self.region_id = $(e.currentTarget).find("option:selected").val();
                });
            });
        },
        getCities: function getCities(parent_id) {
            var _this9 = this;

            _axios2.default.get('/api/locations?_sort=title&_limit=30&parent_id=' + parent_id).then(function (response) {

                var cities = response.data;
                var self = _this9;
                _this9.$set(_this9, 'cities', cities);

                if ($('#city_list').data('select2')) {
                    $("#city_list").select2('destroy');
                }

                $("#city_list").select2({
                    language: self.locale,
                    ajax: {
                        url: window.config.apiHost + '/api/locations',
                        dataType: 'json',
                        delay: 250,
                        data: function data(params) {
                            return {
                                _sort: "title",
                                parent_id: parent_id,
                                "title-lk": params.term + "*",
                                page: params.page || 1,
                                _limit: 30
                            };
                        },
                        processResults: function processResults(data, params) {
                            params.page = params.page || 1;
                            self.$set(self, 'cities', data.data);

                            return {
                                results: data.data.map(function (item) {
                                    return {
                                        id: item.id,
                                        text: item.title
                                    };
                                }),
                                pagination: {
                                    more: params.page * 30 < data.total
                                }
                            };
                        },
                        cache: true
                    },
                    placeholder: 'Введите населенный пункт',
                    minimumInputLength: 2
                }).on("change", function (e) {
                    self.city_id = $(e.currentTarget).find("option:selected").val();
                });
            });
        },
        getSchools: function getSchools(location_id) {
            var _this10 = this;

            _axios2.default.get('/api/institutions?_sort=title&location_id=' + location_id).then(function (response) {
                _this10.$set(_this10, 'institutions', response.data);

                var self = _this10;
                $("#school_list").select2().on("change", function (e) {
                    self.form.institution_id = $(e.currentTarget).find("option:selected").val();
                });
            });
        },
        numberRange: function numberRange(start, end) {
            return new Array(end - start + 1).fill().map(function (d, i) {
                return i + start;
            });
        }
    },
    watch: {
        country_id: function country_id(val, oldVal) {
            this.region_id = null;
            this.city_id = null;
            this.institution_id = null;
            $('#region_list').val(null).trigger("change");
            $('#city_list').val(null).trigger("change");
            $('#school_list').val(null).trigger("change");

            this.getRegions(this.country_id);
        },
        region_id: function region_id(val, oldVal) {
            this.city_id = null;
            this.institution_id = null;
            $('#city_list').val(null).trigger("change");
            $('#school_list').val(null).trigger("change");

            if (val != null) this.getCities(val);
        },
        city_id: function city_id(val, oldVal) {
            this.institution_id = null;
            $('#school_list').val(null).trigger("change");
            if (val != null) this.getSchools(this.city_id);
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0e794553\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/school.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("card", { attrs: { title: _vm.$t("school") } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.update($event)
          },
          keydown: function($event) {
            return _vm.form.onKeydown($event)
          }
        }
      },
      [
        _c("alert-success", {
          attrs: { form: _vm.form, message: _vm.$t("info_updated") }
        }),
        _vm._v(" "),
        _vm.countries !== null
          ? _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-md-3 col-form-label text-md-right" },
                [_vm._v(_vm._s(_vm.$t("country")))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-7" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.country_id,
                        expression: "country_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "country_id", id: "country_list" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.country_id = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.countries, function(country) {
                    return _c("option", { domProps: { value: country.id } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(country.title) +
                          "\n                    "
                      )
                    ])
                  }),
                  0
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.country_id !== null
          ? _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-md-3 col-form-label text-md-right" },
                [_vm._v(_vm._s(_vm.$t("region")))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-7" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.region_id,
                        expression: "region_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "region_id", id: "region_list" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.region_id = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.regions, function(region) {
                    return _c("option", { domProps: { value: region.id } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(region.title) +
                          "\n                    "
                      )
                    ])
                  }),
                  0
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.region_id != null
          ? _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-md-3 col-form-label text-md-right" },
                [_vm._v(_vm._s(_vm.$t("locality")))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-7" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.city_id,
                        expression: "city_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "city_id", id: "city_list" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.city_id = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.cities, function(city) {
                    return _c("option", { domProps: { value: city.id } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(city.title) +
                          "\n                    "
                      )
                    ])
                  }),
                  0
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.city_id != null
          ? _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-md-3 col-form-label text-md-right" },
                [_vm._v(_vm._s(_vm.$t("school")))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-7" },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.institution_id,
                          expression: "form.institution_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "institution_id", id: "school_list" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "institution_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.institutions, function(institution) {
                      return _c(
                        "option",
                        { domProps: { value: institution.id } },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(institution.title) +
                              "\n                    "
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("has-error", {
                    class: { "d-block": _vm.form.errors.has("institution_id") },
                    attrs: { form: _vm.form, field: "institution_id" }
                  })
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.city_id != null
          ? _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-md-3 col-form-label text-md-right" },
                [_vm._v(_vm._s(_vm.$t("class")))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-7" },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.class,
                          expression: "form.class"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("class") },
                      attrs: { name: "class" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "class",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.numberRange(8, 11), function(cl) {
                      return _c("option", { domProps: { value: cl } }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(cl) +
                            "\n                    "
                        )
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "class" } })
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.city_id != null
          ? _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-md-3 col-form-label text-md-right" },
                [_vm._v(_vm._s(_vm.$t("char")))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-7" },
                [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.char,
                          expression: "form.char"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("char") },
                      attrs: { name: "char" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "char",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _vm._l(_vm.chars, function(char) {
                        return _c("option", { domProps: { value: char } }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(char) +
                              "\n                    "
                          )
                        ])
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.numberRange(1, 10), function(cl) {
                        return _c("option", { domProps: { value: cl } }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(cl) +
                              "\n                    "
                          )
                        ])
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "char" } })
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "div",
            { staticClass: "col-md-9 ml-md-auto" },
            [
              _c("v-button", { attrs: { loading: _vm.form.busy } }, [
                _vm._v(_vm._s(_vm.$t("update")))
              ])
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e794553", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/settings/school.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_school_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/settings/school.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_school_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_school_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_school_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_school_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e794553_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_school_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0e794553\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/school.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_school_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e794553_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_school_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/settings/school.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e794553", Component.options)
  } else {
    hotAPI.reload("data-v-0e794553", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9zY2hvb2wudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3Mvc2Nob29sLnZ1ZT9kODY3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3Mvc2Nob29sLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEZBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztrQkFFQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBLEtBSEE7OztBQUtBO0FBQUE7QUFDQTtBQUNBLGtDQURBO0FBRUEseUJBRkE7QUFHQTtBQUhBLGNBREE7QUFNQSw0QkFOQTtBQU9BLDJCQVBBO0FBUUEsMkJBUkE7QUFTQSx5QkFUQTtBQVVBLHlCQVZBO0FBV0Esd0JBWEE7QUFZQSw4QkFaQTtBQWFBLDZCQWJBO0FBY0Esc0JBZEE7QUFlQSx3QkFmQTtBQWdCQTtBQWhCQTtBQUFBLEtBTEE7O0FBd0JBLHlDQUNBO0FBQ0EseUJBREE7QUFFQTtBQUZBLE1BREE7QUFLQSxnQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBLE1BeEJBOztBQW9DQSxXQXBDQSxxQkFvQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBYkE7QUFjQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBcEJBO0FBcUJBO0FBQ0E7QUFDQSxxQkF2QkE7QUF3QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBRkEsTUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFsQ0E7QUFtQ0E7QUFDQTtBQUNBLHFCQXJDQTtBQXNDQTtBQUNBO0FBQ0E7QUF4Q0E7QUEwQ0EsYUE1Q0E7QUE2Q0EsU0E5Q0E7QUErQ0EsS0F4RkE7OztBQTBGQTtBQUNBLGNBREEsb0JBQ0E7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FDQSxnRUFEQTs7QUFBQTtBQUFBO0FBQ0Esb0NBREEsUUFDQSxJQURBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsU0FIQTtBQUlBLHNCQUpBLDRCQUtBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBTkEsQ0FEQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCQSxTQW5DQTtBQW9DQSxvQkFwQ0EsMEJBcUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FDQTtBQUNBO0FBQ0EsaUNBRkEsQ0FEQTs7QUFBQTtBQUlBLG9DQUpBLEdBSUEsTUFKQTs7QUFLQTtBQUNBO0FBQ0EsaUNBRkE7O0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxTQTdDQTtBQThDQSxxQkE5Q0EsMkJBK0NBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQ0Esb0NBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxTQWpEQTtBQWtEQSxvQkFsREEsMEJBbURBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQ0Esa0NBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxTQXJEQTtBQXNEQSxrQkF0REEsd0JBdURBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQ0EsaUNBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxTQXpEQTtBQTBEQSxtQkExREEsdUJBMERBLEVBMURBLEVBMkRBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQ0EsMkNBREE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLFNBN0RBO0FBOERBLGtCQTlEQSxzQkE4REEsU0E5REEsRUErREE7QUFBQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBO0FBR0EsYUFQQTtBQVFBLFNBeEVBO0FBeUVBLGlCQXpFQSxxQkF5RUEsU0F6RUEsRUEwRUE7QUFBQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBREE7QUFFQTtBQUNBLHFFQURBO0FBRUEsd0NBRkE7QUFHQSxrQ0FIQTtBQUlBO0FBQ0E7QUFDQSw4Q0FEQTtBQUVBLG9EQUZBO0FBR0EsNkRBSEE7QUFJQSxzREFKQTtBQUtBO0FBTEE7QUFPQSx5QkFaQTtBQWFBLDhFQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFEQTtBQUVBO0FBRkE7QUFJQSxpQ0FMQSxDQURBO0FBT0E7QUFDQTtBQURBO0FBUEE7QUFXQSx5QkE3QkE7QUE4QkE7QUE5QkEscUJBRkE7QUFrQ0EsMkRBbENBO0FBbUNBO0FBbkNBLG1CQW9DQSxFQXBDQSxDQW9DQSxRQXBDQSxFQW9DQTtBQUNBO0FBQ0EsaUJBdENBO0FBd0NBLGFBbERBO0FBbURBLFNBOUhBO0FBK0hBLGtCQS9IQSxzQkErSEEsV0EvSEEsRUFnSUE7QUFBQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBO0FBSUEsYUFSQTtBQVNBLFNBMUlBO0FBMklBLG1CQTNJQSx1QkEySUEsS0EzSUEsRUEySUEsR0EzSUEsRUEySUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQTdJQSxLQTFGQTtBQXlPQTtBQUNBLHFEQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FYQTtBQVlBLG1EQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQ0E7QUFDQSxTQXJCQTtBQXNCQSwrQ0FDQTtBQUNBO0FBQ0E7QUFDQSw2QkFDQTtBQUNBO0FBNUJBO0FBek9BLEM7Ozs7Ozs7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsMEJBQTBCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBLGlCQUFpQix1REFBdUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUNBQXlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSx5Q0FBeUMsWUFBWSxvQkFBb0IsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQSxpQkFBaUIsdURBQXVEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUF1QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EseUNBQXlDLFlBQVksbUJBQW1CLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0EsaUJBQWlCLHVEQUF1RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLHlDQUF5QyxZQUFZLGlCQUFpQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBLGlCQUFpQix1REFBdUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNENBQTRDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWSx3QkFBd0IsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1EQUFtRDtBQUMvRSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0EsaUJBQWlCLHVEQUF1RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2Q0FBNkM7QUFDM0UsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSwyQ0FBMkMsWUFBWSxZQUFZLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTLGlDQUFpQyxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0EsaUJBQWlCLHVEQUF1RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0Q0FBNEM7QUFDMUUsOEJBQThCLGVBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWSxjQUFjLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWSxZQUFZLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsZ0NBQWdDLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQSw4QkFBOEIsU0FBUyx5QkFBeUIsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNGLGtFQUFTO0FBQ3hCLElBQUksS0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUNyYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQWtFO0FBQ25HO0FBQzhiO0FBQ2E7QUFDM2M7QUFDeVE7QUFDelE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1V0FBYztBQUNoQixFQUFFLCtOQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvNTEuMTYyYWY3YmU1MjJhMDU0MmE4YmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8Y2FyZCA6dGl0bGU9XCIkdCgnc2Nob29sJylcIj5cclxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cclxuICAgICAgICAgICAgPGFsZXJ0LXN1Y2Nlc3MgOmZvcm09XCJmb3JtXCIgOm1lc3NhZ2U9XCIkdCgnaW5mb191cGRhdGVkJylcIi8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiB2LWlmPVwiY291bnRyaWVzIT09bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdjb3VudHJ5JykgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiY291bnRyeV9pZFwiIG5hbWU9XCJjb3VudHJ5X2lkXCIgY2xhc3M9J2Zvcm0tY29udHJvbCcgaWQ9XCJjb3VudHJ5X2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNvdW50cnkgaW4gY291bnRyaWVzXCIgdi1iaW5kOnZhbHVlPVwiY291bnRyeS5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY291bnRyeS50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJjb3VudHJ5X2lkIT09bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdyZWdpb24nKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJyZWdpb25faWRcIiBuYW1lPVwicmVnaW9uX2lkXCIgY2xhc3M9J2Zvcm0tY29udHJvbCcgaWQ9XCJyZWdpb25fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwicmVnaW9uIGluIHJlZ2lvbnNcIiB2LWJpbmQ6dmFsdWU9XCJyZWdpb24uaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJlZ2lvbi50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJyZWdpb25faWQhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnbG9jYWxpdHknKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJjaXR5X2lkXCIgbmFtZT1cImNpdHlfaWRcIiBjbGFzcz0nZm9ybS1jb250cm9sJyBpZD1cImNpdHlfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiY2l0eSBpbiBjaXRpZXNcIiB2LWJpbmQ6dmFsdWU9XCJjaXR5LmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjaXR5LnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgdi1pZj1cImNpdHlfaWQhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnc2Nob29sJykgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZm9ybS5pbnN0aXR1dGlvbl9pZFwiIG5hbWU9XCJpbnN0aXR1dGlvbl9pZFwiIGlkPVwic2Nob29sX2xpc3RcIiBjbGFzcz0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImluc3RpdHV0aW9uIGluIGluc3RpdHV0aW9uc1wiIHYtYmluZDp2YWx1ZT1cImluc3RpdHV0aW9uLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpbnN0aXR1dGlvbi50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiaW5zdGl0dXRpb25faWRcIiA6Y2xhc3M9XCJ7ICdkLWJsb2NrJzogZm9ybS5lcnJvcnMuaGFzKCdpbnN0aXR1dGlvbl9pZCcpIH1cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiB2LWlmPVwiY2l0eV9pZCE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdjbGFzcycpIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImZvcm0uY2xhc3NcIiBuYW1lPVwiY2xhc3NcIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdjbGFzcycpIH1cIiBjbGFzcz0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNsIGluIG51bWJlclJhbmdlKDgsMTEpXCIgdi1iaW5kOnZhbHVlPVwiY2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJjbGFzc1wiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJjaXR5X2lkIT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2NoYXInKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJmb3JtLmNoYXJcIiBuYW1lPVwiY2hhclwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2NoYXInKSB9XCIgY2xhc3M9J2Zvcm0tY29udHJvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJjaGFyIGluIGNoYXJzXCIgdi1iaW5kOnZhbHVlPVwiY2hhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY2hhciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNsIGluIG51bWJlclJhbmdlKDEsIDEwKVwiIHYtYmluZDp2YWx1ZT1cImNsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiY2hhclwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gU3VibWl0IEJ1dHRvbiAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgbWwtbWQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPnt7ICR0KCd1cGRhdGUnKSB9fTwvdi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9jYXJkPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3NjaG9vbCcpIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbl9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBjbGFzczogJycsXHJcbiAgICAgICAgICAgICAgICBjaGFyOiAnJ1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY291bnRyeV9pZDogbnVsbCxcclxuICAgICAgICAgICAgY291bnRyaWVzOiBudWxsLFxyXG4gICAgICAgICAgICByZWdpb25faWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJlZ2lvbnM6IG51bGwsXHJcbiAgICAgICAgICAgIGNpdHlfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNpdGllczogbnVsbCxcclxuICAgICAgICAgICAgaW5zdGl0dXRpb25zOiBudWxsLFxyXG4gICAgICAgICAgICBpbnN0aXR1dGlvbjogbnVsbCxcclxuICAgICAgICAgICAgY2l0eTogbnVsbCxcclxuICAgICAgICAgICAgcmVnaW9uOiBudWxsLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBudWxsLFxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBjb21wdXRlZDp7XHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZSdcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNoYXJzOiBmdW5jdGlvbiAoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gdGhpcy4kdCgnYWxwaGFiZXQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlclNjaG9vbHMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb3VudHJpZXMoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkLmZuLnNlbGVjdDIuYW1kLmRlZmluZSgnc2VsZWN0Mi9pMThuL3J1JywgW10sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSdXNzaWFuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMb2FkaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ9Cg0LXQt9GD0LvRjNGC0LDRgiDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0LfQsNCz0YDRg9C20LXQvS4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFRvb0xvbmc6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0YPQtNCw0LvQuNGC0LUgJyArIG92ZXJDaGFycyArICcg0YHQuNC80LLQvtC7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdmVyQ2hhcnMgPj0gMiAmJiBvdmVyQ2hhcnMgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gJ9CwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckNoYXJzID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9ICfQvtCyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFRvb1Nob3J0OiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1ICcgKyByZW1haW5pbmdDaGFycyArICcg0LjQu9C4INCx0L7Qu9C10LUg0YHQuNC80LLQvtC70L7Qsic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ9CX0LDQs9GA0YPQttCw0LXQvCDQtdGJ0ZEg0YDQtdGB0YPRgNGB0YvigKYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICfQktGLINC80L7QttC10YLQtSDQstGL0LHRgNCw0YLRjCAnICsgYXJncy5tYXhpbXVtICsgJyDRjdC70LXQvNC10L3Rgic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubWF4aW11bSA+PSAyICYmIGFyZ3MubWF4aW11bSA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSAn0LAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLm1heGltdW0gPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gJ9C+0LInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub1Jlc3VsdHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J/QvtC40YHQuuKApic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYXN5bmMgdXBkYXRlICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvdXNlcnMvJyt0aGlzLnVzZXIuaWQrJy9pbnN0aXR1dGlvbnMnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBnZXRVc2VyU2Nob29scygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldCgnL2FwaS9pbnN0aXR1dGlvbl91c2VyP3VzZXJfaWQ9Jyt0aGlzLnVzZXIuaWQrJyZfd2l0aD1pbnN0aXR1dGlvbiZfc29ydD0tY3JlYXRlZF9hdCcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdpbnN0aXR1dGlvbicsIHJlc3BvbnNlLmRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5pbnN0aXR1dGlvbl9pZCA9IHRoaXMuaW5zdGl0dXRpb24uaW5zdGl0dXRpb24uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsYXNzID0gdGhpcy5pbnN0aXR1dGlvbi5udW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNoYXIgPSB0aGlzLmluc3RpdHV0aW9uLmNoYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaXR5X2lkID0gdGhpcy5pbnN0aXR1dGlvbi5pbnN0aXR1dGlvbi5sb2NhdGlvbl9pZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qaWYodGhpcy5pbnN0aXR1dGlvbiE9bnVsbCAmJiB0aGlzLmluc3RpdHV0aW9uLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpdHkgPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uKHRoaXMuY2l0eV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaXR5ID0gY2l0eS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpb24gPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uKHRoaXMuY2l0eS5wYXJlbnRfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uID0gcmVnaW9uLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uKHRoaXMucmVnaW9uLnBhcmVudF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlfaWQgPSB0aGlzLmNvdW50cnkuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb25faWQgPSB0aGlzLnJlZ2lvbi5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZWxlY3RDb3VudHJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZWxlY3RDaXR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZWxlY3RSZWdpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvdW50cmllcygpO1xyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGdldENvdW50cmllcygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldCgnL2FwaS9sb2NhdGlvbnM/cGFyZW50X2lkPW51bGwnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnY291bnRyaWVzJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICQoXCIjY291bnRyeV9saXN0XCIpLnNlbGVjdDIoKS5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb3VudHJ5X2lkID0gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgc2VsZWN0Q291bnRyeSgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0UmVnaW9ucyh0aGlzLmNvdW50cnlfaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBzZWxlY3RSZWdpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENpdGllcyh0aGlzLnJlZ2lvbl9pZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIHNlbGVjdENpdHkoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldFNjaG9vbHModGhpcy5jaXR5X2lkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgZ2V0TG9jYXRpb24oaWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbG9jYXRpb25zLycraWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRSZWdpb25zKHBhcmVudF9pZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2xvY2F0aW9ucz9fc29ydD10aXRsZSZwYXJlbnRfaWQ9JytwYXJlbnRfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdyZWdpb25zJywgcmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3JlZ2lvbl9saXN0XCIpLnNlbGVjdDIoKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlZ2lvbl9pZCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldENpdGllcyhwYXJlbnRfaWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9sb2NhdGlvbnM/X3NvcnQ9dGl0bGUmX2xpbWl0PTMwJnBhcmVudF9pZD0nK3BhcmVudF9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNpdGllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnY2l0aWVzJywgY2l0aWVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyNjaXR5X2xpc3QnKS5kYXRhKCdzZWxlY3QyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjaXR5X2xpc3RcIikuc2VsZWN0MignZGVzdHJveScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjaXR5X2xpc3RcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBzZWxmLmxvY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB3aW5kb3cuY29uZmlnLmFwaUhvc3QrJy9hcGkvbG9jYXRpb25zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMjUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zb3J0OiBcInRpdGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF9pZDogcGFyZW50X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlLWxrXCI6IHBhcmFtcy50ZXJtK1wiKlwiLCAvLyBzZWFyY2ggdGVybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYXJhbXMucGFnZSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbGltaXQ6IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucGFnZSA9IHBhcmFtcy5wYWdlIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2V0KHNlbGYsICdjaXRpZXMnLCBkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhLmRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlOiAocGFyYW1zLnBhZ2UgKiAzMCkgPCBkYXRhLnRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn0JLQstC10LTQuNGC0LUg0L3QsNGB0LXQu9C10L3QvdGL0Lkg0L/Rg9C90LrRgicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMlxyXG4gICAgICAgICAgICAgICAgICAgIH0pLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2l0eV9pZCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRTY2hvb2xzKGxvY2F0aW9uX2lkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvaW5zdGl0dXRpb25zP19zb3J0PXRpdGxlJmxvY2F0aW9uX2lkPScrbG9jYXRpb25faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdpbnN0aXR1dGlvbnMnLCByZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2Nob29sX2xpc3RcIikuc2VsZWN0MigpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZm9ybS5pbnN0aXR1dGlvbl9pZCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudW1iZXJSYW5nZSAoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheShlbmQgLSBzdGFydCsxKS5maWxsKCkubWFwKChkLCBpKSA9PiBpICsgc3RhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBjb3VudHJ5X2lkOiBmdW5jdGlvbih2YWwsIG9sZFZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb25faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXR5X2lkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGl0dXRpb25faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJCgnI3JlZ2lvbl9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjY2l0eV9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2Nob29sX2xpc3QnKS52YWwobnVsbCkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlZ2lvbnModGhpcy5jb3VudHJ5X2lkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVnaW9uX2lkOiBmdW5jdGlvbih2YWwsIG9sZFZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXR5X2lkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGl0dXRpb25faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJCgnI2NpdHlfbGlzdCcpLnZhbChudWxsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3NjaG9vbF9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodmFsIT1udWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2l0aWVzKHZhbCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNpdHlfaWQ6IGZ1bmN0aW9uKHZhbCwgb2xkVmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uX2lkID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgJCgnI3NjaG9vbF9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICBpZih2YWwhPW51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTY2hvb2xzKHRoaXMuY2l0eV9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3NjaG9vbC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiY2FyZFwiLCB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJzY2hvb2xcIikgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlKCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImFsZXJ0LXN1Y2Nlc3NcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBtZXNzYWdlOiBfdm0uJHQoXCJpbmZvX3VwZGF0ZWRcIikgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmNvdW50cmllcyAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY291bnRyeVwiKSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb3VudHJ5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb3VudHJ5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNvdW50cnlfaWRcIiwgaWQ6IFwiY291bnRyeV9saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY291bnRyeV9pZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiBjb3VudHJ5LmlkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY291bnRyeS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jb3VudHJ5X2lkICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJyZWdpb25cIikpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVnaW9uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWdpb25faWRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwicmVnaW9uX2lkXCIsIGlkOiBcInJlZ2lvbl9saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaW9uX2lkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yZWdpb25zLCBmdW5jdGlvbihyZWdpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIHsgZG9tUHJvcHM6IHsgdmFsdWU6IHJlZ2lvbi5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJlZ2lvbi50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5yZWdpb25faWQgIT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibG9jYWxpdHlcIikpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2l0eV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2l0eV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjaXR5X2lkXCIsIGlkOiBcImNpdHlfbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNpdHlfaWQgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNpdGllcywgZnVuY3Rpb24oY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogY2l0eS5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGNpdHkudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uY2l0eV9pZCAhPSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJzY2hvb2xcIikpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmluc3RpdHV0aW9uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaW5zdGl0dXRpb25faWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJpbnN0aXR1dGlvbl9pZFwiLCBpZDogXCJzY2hvb2xfbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5zdGl0dXRpb25faWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmluc3RpdHV0aW9ucywgZnVuY3Rpb24oaW5zdGl0dXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBkb21Qcm9wczogeyB2YWx1ZTogaW5zdGl0dXRpb24uaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaW5zdGl0dXRpb24udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiZC1ibG9ja1wiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaW5zdGl0dXRpb25faWRcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImluc3RpdHV0aW9uX2lkXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uY2l0eV9pZCAhPSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjbGFzc1wiKSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uY2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImNsYXNzXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjbGFzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm51bWJlclJhbmdlKDgsIDExKSwgZnVuY3Rpb24oY2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogY2wgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhjbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNsYXNzXCIgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jaXR5X2lkICE9IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNoYXJcIikpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNoYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jaGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiY2hhclwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiY2hhclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNoYXJzLCBmdW5jdGlvbihjaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogY2hhciB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGNoYXIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5udW1iZXJSYW5nZSgxLCAxMCksIGZ1bmN0aW9uKGNsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogY2wgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhjbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJjaGFyXCIgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOSBtbC1tZC1hdXRvXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWJ1dHRvblwiLCB7IGF0dHJzOiB7IGxvYWRpbmc6IF92bS5mb3JtLmJ1c3kgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ1cGRhdGVcIikpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTBlNzk0NTUzXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMGU3OTQ1NTNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3NjaG9vbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMGU3OTQ1NTNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3NjaG9vbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1MSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NjaG9vbC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zY2hvb2wudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wZTc5NDU1M1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NjaG9vbC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3NjaG9vbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGU3OTQ1NTNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wZTc5NDU1M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3Mvc2Nob29sLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3NjaG9vbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1MSJdLCJzb3VyY2VSb290IjoiIn0=