webpackJsonp([17],{

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1109e074\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/school.vue":
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
            _vm.update($event)
          },
          keydown: function($event) {
            _vm.form.onKeydown($event)
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
                  })
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
                  })
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
                  })
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
                    })
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
                    })
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
    require("vue-hot-reload-api")      .rerender("data-v-1109e074", esExports)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1109e074_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_school_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1109e074\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/school.vue");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1109e074_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_school_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\settings\\school.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1109e074", Component.options)
  } else {
    hotAPI.reload("data-v-1109e074", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9zY2hvb2wudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3Mvc2Nob29sLnZ1ZT84Yjk2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3Mvc2Nob29sLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkE7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7Ozs7O2tDQUVBO2dDQUNBO0FBRUE7Ozs7OztnQ0FHQTt1QkFDQTtzQkFFQTtBQUpBO3dCQUtBO3VCQUNBO3VCQUNBO3FCQUNBO3FCQUNBO29CQUNBOzBCQUNBO3lCQUNBO2tCQUNBO29CQUNBO3FCQUdBO0FBbEJBOzs7QUFtQkE7Y0FFQTtnQkFFQTtBQUhBO2VBSUEsaUJBQ0E7OEJBQ0E7NkJBQ0E7QUFHQTs7O2dDQUNBO2FBQ0E7YUFHQTs7MkNBQ0E7dUVBRUE7OzBEQUVBOytCQUNBO0FBQ0E7OERBQ0E7aUVBQ0E7MkVBQ0E7OERBQ0E7dUNBQ0E7bURBQ0E7dUNBQ0E7QUFDQTsrQkFDQTtBQUNBO2dFQUNBO3VFQUVBOztnRkFFQTs7K0JBQ0E7QUFDQTt3REFDQTsrQkFDQTtBQUNBO29FQUNBOzRFQUVBOztvRUFDQTt1Q0FDQTtzREFDQTt1Q0FDQTtBQUVBOzsrQkFDQTtBQUNBO29EQUNBOytCQUNBO0FBQ0E7b0RBQ0E7K0JBQ0E7QUFFQTtBQXpDQTtBQTBDQTtBQUNBO0FBRUE7Ozs7O0FBRUE7Ozs7Ozs7Ozs7dUZBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O2dMQUNBO3FGQUNBO2dHQUNBOzJFQUNBOzBFQUNBO29GQUNBO0FBdUJBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztxSEFDQTs4RUFDQTtBQUNBOzs7QUFDQTs7K0ZBQ0E7aUdBQ0E7QUFDQTs7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RDtBQUNBO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7QUFDQSw4QkFBOEIsU0FBUyx5QkFBeUIsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNoYUE7QUFBQTtBQUNBO0FBQ0E7QUFDd1c7QUFDYTtBQUNyWDtBQUNpTDtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMTcuYmQ5NDM1YmY2ODMwMjhmY2NiYTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8Y2FyZCA6dGl0bGU9XCIkdCgnc2Nob29sJylcIj5cclxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cclxuICAgICAgICAgICAgPGFsZXJ0LXN1Y2Nlc3MgOmZvcm09XCJmb3JtXCIgOm1lc3NhZ2U9XCIkdCgnaW5mb191cGRhdGVkJylcIi8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiB2LWlmPVwiY291bnRyaWVzIT09bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdjb3VudHJ5JykgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiY291bnRyeV9pZFwiIG5hbWU9XCJjb3VudHJ5X2lkXCIgY2xhc3M9J2Zvcm0tY29udHJvbCcgaWQ9XCJjb3VudHJ5X2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNvdW50cnkgaW4gY291bnRyaWVzXCIgdi1iaW5kOnZhbHVlPVwiY291bnRyeS5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY291bnRyeS50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJjb3VudHJ5X2lkIT09bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdyZWdpb24nKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJyZWdpb25faWRcIiBuYW1lPVwicmVnaW9uX2lkXCIgY2xhc3M9J2Zvcm0tY29udHJvbCcgaWQ9XCJyZWdpb25fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwicmVnaW9uIGluIHJlZ2lvbnNcIiB2LWJpbmQ6dmFsdWU9XCJyZWdpb24uaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJlZ2lvbi50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJyZWdpb25faWQhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnbG9jYWxpdHknKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJjaXR5X2lkXCIgbmFtZT1cImNpdHlfaWRcIiBjbGFzcz0nZm9ybS1jb250cm9sJyBpZD1cImNpdHlfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiY2l0eSBpbiBjaXRpZXNcIiB2LWJpbmQ6dmFsdWU9XCJjaXR5LmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjaXR5LnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgdi1pZj1cImNpdHlfaWQhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnc2Nob29sJykgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZm9ybS5pbnN0aXR1dGlvbl9pZFwiIG5hbWU9XCJpbnN0aXR1dGlvbl9pZFwiIGlkPVwic2Nob29sX2xpc3RcIiBjbGFzcz0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImluc3RpdHV0aW9uIGluIGluc3RpdHV0aW9uc1wiIHYtYmluZDp2YWx1ZT1cImluc3RpdHV0aW9uLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpbnN0aXR1dGlvbi50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiaW5zdGl0dXRpb25faWRcIiA6Y2xhc3M9XCJ7ICdkLWJsb2NrJzogZm9ybS5lcnJvcnMuaGFzKCdpbnN0aXR1dGlvbl9pZCcpIH1cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiB2LWlmPVwiY2l0eV9pZCE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdjbGFzcycpIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImZvcm0uY2xhc3NcIiBuYW1lPVwiY2xhc3NcIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdjbGFzcycpIH1cIiBjbGFzcz0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNsIGluIG51bWJlclJhbmdlKDgsMTEpXCIgdi1iaW5kOnZhbHVlPVwiY2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJjbGFzc1wiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJjaXR5X2lkIT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2NoYXInKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJmb3JtLmNoYXJcIiBuYW1lPVwiY2hhclwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2NoYXInKSB9XCIgY2xhc3M9J2Zvcm0tY29udHJvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJjaGFyIGluIGNoYXJzXCIgdi1iaW5kOnZhbHVlPVwiY2hhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY2hhciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNsIGluIG51bWJlclJhbmdlKDEsIDEwKVwiIHYtYmluZDp2YWx1ZT1cImNsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiY2hhclwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gU3VibWl0IEJ1dHRvbiAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgbWwtbWQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPnt7ICR0KCd1cGRhdGUnKSB9fTwvdi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9jYXJkPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3NjaG9vbCcpIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgICBpbnN0aXR1dGlvbl9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBjbGFzczogJycsXHJcbiAgICAgICAgICAgICAgICBjaGFyOiAnJ1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY291bnRyeV9pZDogbnVsbCxcclxuICAgICAgICAgICAgY291bnRyaWVzOiBudWxsLFxyXG4gICAgICAgICAgICByZWdpb25faWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJlZ2lvbnM6IG51bGwsXHJcbiAgICAgICAgICAgIGNpdHlfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNpdGllczogbnVsbCxcclxuICAgICAgICAgICAgaW5zdGl0dXRpb25zOiBudWxsLFxyXG4gICAgICAgICAgICBpbnN0aXR1dGlvbjogbnVsbCxcclxuICAgICAgICAgICAgY2l0eTogbnVsbCxcclxuICAgICAgICAgICAgcmVnaW9uOiBudWxsLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiBudWxsLFxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBjb21wdXRlZDp7XHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZSdcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNoYXJzOiBmdW5jdGlvbiAoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gdGhpcy4kdCgnYWxwaGFiZXQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlclNjaG9vbHMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDb3VudHJpZXMoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkLmZuLnNlbGVjdDIuYW1kLmRlZmluZSgnc2VsZWN0Mi9pMThuL3J1JywgW10sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSdXNzaWFuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMb2FkaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ9Cg0LXQt9GD0LvRjNGC0LDRgiDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0LfQsNCz0YDRg9C20LXQvS4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFRvb0xvbmc6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0YPQtNCw0LvQuNGC0LUgJyArIG92ZXJDaGFycyArICcg0YHQuNC80LLQvtC7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdmVyQ2hhcnMgPj0gMiAmJiBvdmVyQ2hhcnMgPD0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gJ9CwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckNoYXJzID49IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlICs9ICfQvtCyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFRvb1Nob3J0OiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1ICcgKyByZW1haW5pbmdDaGFycyArICcg0LjQu9C4INCx0L7Qu9C10LUg0YHQuNC80LLQvtC70L7Qsic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ9CX0LDQs9GA0YPQttCw0LXQvCDQtdGJ0ZEg0YDQtdGB0YPRgNGB0YvigKYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICfQktGLINC80L7QttC10YLQtSDQstGL0LHRgNCw0YLRjCAnICsgYXJncy5tYXhpbXVtICsgJyDRjdC70LXQvNC10L3Rgic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubWF4aW11bSA+PSAyICYmIGFyZ3MubWF4aW11bSA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSAn0LAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzLm1heGltdW0gPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gJ9C+0LInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub1Jlc3VsdHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J/QvtC40YHQuuKApic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYXN5bmMgdXBkYXRlICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvdXNlcnMvJyt0aGlzLnVzZXIuaWQrJy9pbnN0aXR1dGlvbnMnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBnZXRVc2VyU2Nob29scygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldCgnL2FwaS9pbnN0aXR1dGlvbl91c2VyP3VzZXJfaWQ9Jyt0aGlzLnVzZXIuaWQrJyZfd2l0aD1pbnN0aXR1dGlvbiZfc29ydD0tY3JlYXRlZF9hdCcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdpbnN0aXR1dGlvbicsIHJlc3BvbnNlLmRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5pbnN0aXR1dGlvbl9pZCA9IHRoaXMuaW5zdGl0dXRpb24uaW5zdGl0dXRpb24uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsYXNzID0gdGhpcy5pbnN0aXR1dGlvbi5udW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNoYXIgPSB0aGlzLmluc3RpdHV0aW9uLmNoYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaXR5X2lkID0gdGhpcy5pbnN0aXR1dGlvbi5pbnN0aXR1dGlvbi5sb2NhdGlvbl9pZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qaWYodGhpcy5pbnN0aXR1dGlvbiE9bnVsbCAmJiB0aGlzLmluc3RpdHV0aW9uLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpdHkgPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uKHRoaXMuY2l0eV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaXR5ID0gY2l0eS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpb24gPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uKHRoaXMuY2l0eS5wYXJlbnRfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uID0gcmVnaW9uLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uKHRoaXMucmVnaW9uLnBhcmVudF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlfaWQgPSB0aGlzLmNvdW50cnkuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpb25faWQgPSB0aGlzLnJlZ2lvbi5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZWxlY3RDb3VudHJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZWxlY3RDaXR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZWxlY3RSZWdpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvdW50cmllcygpO1xyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGdldENvdW50cmllcygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldCgnL2FwaS9sb2NhdGlvbnM/cGFyZW50X2lkPW51bGwnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnY291bnRyaWVzJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICQoXCIjY291bnRyeV9saXN0XCIpLnNlbGVjdDIoKS5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb3VudHJ5X2lkID0gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgc2VsZWN0Q291bnRyeSgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0UmVnaW9ucyh0aGlzLmNvdW50cnlfaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBzZWxlY3RSZWdpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENpdGllcyh0aGlzLnJlZ2lvbl9pZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIHNlbGVjdENpdHkoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldFNjaG9vbHModGhpcy5jaXR5X2lkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgZ2V0TG9jYXRpb24oaWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbG9jYXRpb25zLycraWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRSZWdpb25zKHBhcmVudF9pZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2xvY2F0aW9ucz9fc29ydD10aXRsZSZwYXJlbnRfaWQ9JytwYXJlbnRfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdyZWdpb25zJywgcmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI3JlZ2lvbl9saXN0XCIpLnNlbGVjdDIoKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlZ2lvbl9pZCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldENpdGllcyhwYXJlbnRfaWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9sb2NhdGlvbnM/X3NvcnQ9dGl0bGUmX2xpbWl0PTMwJnBhcmVudF9pZD0nK3BhcmVudF9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNpdGllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnY2l0aWVzJywgY2l0aWVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyNjaXR5X2xpc3QnKS5kYXRhKCdzZWxlY3QyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNjaXR5X2xpc3RcIikuc2VsZWN0MignZGVzdHJveScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjaXR5X2xpc3RcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBzZWxmLmxvY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB3aW5kb3cuY29uZmlnLmFwaUhvc3QrJy9hcGkvbG9jYXRpb25zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMjUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zb3J0OiBcInRpdGxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF9pZDogcGFyZW50X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlLWxrXCI6IHBhcmFtcy50ZXJtK1wiKlwiLCAvLyBzZWFyY2ggdGVybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiBwYXJhbXMucGFnZSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbGltaXQ6IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucGFnZSA9IHBhcmFtcy5wYWdlIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2V0KHNlbGYsICdjaXRpZXMnLCBkYXRhLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhLmRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlOiAocGFyYW1zLnBhZ2UgKiAzMCkgPCBkYXRhLnRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn0JLQstC10LTQuNGC0LUg0L3QsNGB0LXQu9C10L3QvdGL0Lkg0L/Rg9C90LrRgicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMlxyXG4gICAgICAgICAgICAgICAgICAgIH0pLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2l0eV9pZCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRTY2hvb2xzKGxvY2F0aW9uX2lkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvaW5zdGl0dXRpb25zP19zb3J0PXRpdGxlJmxvY2F0aW9uX2lkPScrbG9jYXRpb25faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdpbnN0aXR1dGlvbnMnLCByZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjc2Nob29sX2xpc3RcIikuc2VsZWN0MigpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZm9ybS5pbnN0aXR1dGlvbl9pZCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudW1iZXJSYW5nZSAoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheShlbmQgLSBzdGFydCsxKS5maWxsKCkubWFwKChkLCBpKSA9PiBpICsgc3RhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBjb3VudHJ5X2lkOiBmdW5jdGlvbih2YWwsIG9sZFZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb25faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXR5X2lkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGl0dXRpb25faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJCgnI3JlZ2lvbl9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjY2l0eV9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2Nob29sX2xpc3QnKS52YWwobnVsbCkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlZ2lvbnModGhpcy5jb3VudHJ5X2lkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVnaW9uX2lkOiBmdW5jdGlvbih2YWwsIG9sZFZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaXR5X2lkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGl0dXRpb25faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgJCgnI2NpdHlfbGlzdCcpLnZhbChudWxsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3NjaG9vbF9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodmFsIT1udWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2l0aWVzKHZhbCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNpdHlfaWQ6IGZ1bmN0aW9uKHZhbCwgb2xkVmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uX2lkID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgJCgnI3NjaG9vbF9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgICAgICBpZih2YWwhPW51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTY2hvb2xzKHRoaXMuY2l0eV9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3NjaG9vbC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiY2FyZFwiLCB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJzY2hvb2xcIikgfSB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIF92bS51cGRhdGUoJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJhbGVydC1zdWNjZXNzXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgbWVzc2FnZTogX3ZtLiR0KFwiaW5mb191cGRhdGVkXCIpIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jb3VudHJpZXMgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNvdW50cnlcIikpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY291bnRyeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY291bnRyeV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjb3VudHJ5X2lkXCIsIGlkOiBcImNvdW50cnlfbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvdW50cnlfaWQgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvdW50cmllcywgZnVuY3Rpb24oY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogY291bnRyeS5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGNvdW50cnkudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jb3VudHJ5X2lkICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJyZWdpb25cIikpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVnaW9uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWdpb25faWRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwicmVnaW9uX2lkXCIsIGlkOiBcInJlZ2lvbl9saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaW9uX2lkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yZWdpb25zLCBmdW5jdGlvbihyZWdpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIHsgZG9tUHJvcHM6IHsgdmFsdWU6IHJlZ2lvbi5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJlZ2lvbi50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnJlZ2lvbl9pZCAhPSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJsb2NhbGl0eVwiKSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaXR5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaXR5X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNpdHlfaWRcIiwgaWQ6IFwiY2l0eV9saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2l0eV9pZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY2l0aWVzLCBmdW5jdGlvbihjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiBjaXR5LmlkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY2l0eS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmNpdHlfaWQgIT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwic2Nob29sXCIpKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5pbnN0aXR1dGlvbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmluc3RpdHV0aW9uX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiaW5zdGl0dXRpb25faWRcIiwgaWQ6IFwic2Nob29sX2xpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluc3RpdHV0aW9uX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pbnN0aXR1dGlvbnMsIGZ1bmN0aW9uKGluc3RpdHV0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGluc3RpdHV0aW9uLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGluc3RpdHV0aW9uLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImQtYmxvY2tcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImluc3RpdHV0aW9uX2lkXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJpbnN0aXR1dGlvbl9pZFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmNpdHlfaWQgIT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiY2xhc3NcIikpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJjbGFzc1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiY2xhc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5udW1iZXJSYW5nZSg4LCAxMSksIGZ1bmN0aW9uKGNsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGNsIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY2wpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJjbGFzc1wiIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uY2l0eV9pZCAhPSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjaGFyXCIpKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jaGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY2hhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImNoYXJcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNoYXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jaGFycywgZnVuY3Rpb24oY2hhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGNoYXIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhjaGFyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubnVtYmVyUmFuZ2UoMSwgMTApLCBmdW5jdGlvbihjbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGNsIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY2wpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiY2hhclwiIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTkgbWwtbWQtYXV0b1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1idXR0b25cIiwgeyBhdHRyczogeyBsb2FkaW5nOiBfdm0uZm9ybS5idXN5IH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwidXBkYXRlXCIpKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xMTA5ZTA3NFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTExMDllMDc0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9zY2hvb2wudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTExMDllMDc0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9zY2hvb2wudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zY2hvb2wudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2Nob29sLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTEwOWUwNzRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zY2hvb2wudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxzZXR0aW5nc1xcXFxzY2hvb2wudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTExMDllMDc0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTEwOWUwNzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3NjaG9vbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9zY2hvb2wudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTciXSwic291cmNlUm9vdCI6IiJ9