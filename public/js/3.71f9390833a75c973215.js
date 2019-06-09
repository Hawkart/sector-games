webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/LoginWithSocial.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsCookie = __webpack_require__("./node_modules/js-cookie/src/js.cookie.js");

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'LoginWithSocial',

    props: {
        provider: { type: String, default: null },
        ic: { type: String, default: null },
        text: { type: String, default: null }
    },

    mounted: function mounted() {
        window.addEventListener('message', this.onMessage, false);
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('message', this.onMessage);
    },


    methods: {
        login: function login() {
            var _this = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var url;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                url = '/social/' + _this.provider + "?token=" + _jsCookie2.default.get('token');

                                openWindow(url, _this.$t('login'));

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },
        onMessage: function onMessage(e) {
            if (e.origin !== window.origin && e.origin !== window.config.apiHost || !e.data.token) {
                return;
            }

            this.$store.dispatch('auth/saveToken', {
                token: e.data.token
            });

            this.$router.push({ name: 'settings.profile' });
        }
    }
};

function openWindow(url, title) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if ((typeof url === 'undefined' ? 'undefined' : (0, _typeof3.default)(url)) === 'object') {
        options = url;
        url = '';
    }
    options = (0, _extends3.default)({ url: url, title: title, width: 600, height: 720 }, options);
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top;
    var width = window.innerWidth || document.documentElement.clientWidth || window.screen.width;
    var height = window.innerHeight || document.documentElement.clientHeight || window.screen.height;
    options.left = width / 2 - options.width / 2 + dualScreenLeft;
    options.top = height / 2 - options.height / 2 + dualScreenTop;
    var optionsStr = (0, _keys2.default)(options).reduce(function (acc, key) {
        acc.push(key + '=' + options[key]);
        return acc;
    }, []).join(',');
    var newWindow = window.open(url, title, optionsStr);
    if (window.focus) {
        newWindow.focus();
    }
    return newWindow;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/auth/register.vue":
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

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _LoginWithSocial = __webpack_require__("./resources/assets/js/components/LoginWithSocial.vue");

var _LoginWithSocial2 = _interopRequireDefault(_LoginWithSocial);

var _vueRecaptcha = __webpack_require__("./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");

var _vueRecaptcha2 = _interopRequireDefault(_vueRecaptcha);

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    middleware: 'guest',

    components: {
        LoginWithSocial: _LoginWithSocial2.default,
        VueRecaptcha: _vueRecaptcha2.default
    },

    metaInfo: function metaInfo() {
        return { title: this.$t('register') };
    },


    data: function data() {
        return {
            form: new _vform2.default({
                type: 'player',
                name: '',
                email: '',
                nickname: '',
                password: '',
                institution_id: '',
                class: '',
                char: '',
                game_id: '',
                game_roles: [1],
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone !== undefined ? Intl.DateTimeFormat().resolvedOptions().timeZone : "",
                agree: true
            }),
            country_id: null,
            countries: null,
            region_id: null,
            regions: null,
            city_id: null,
            cities: null,
            institutions: null,

            games: null,
            game: null,
            cofirmation_sent: false
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
        this.getCountries();
        this.getDota();

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
        register: function register() {
            var _this = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var _ref, data, _ref2, token;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                _this.form.nickname = _this.form.email;

                                _this.form.game_id = _this.game.id;

                                _context.next = 4;
                                return _this.form.post('/api/register');

                            case 4:
                                _ref = _context.sent;
                                data = _ref.data;


                                _this.cofirmation_sent = true;
                                _context.next = 9;
                                return _this.form.post('/api/login');

                            case 9:
                                _ref2 = _context.sent;
                                token = _ref2.data.token;

                                _this.$store.dispatch('auth/saveToken', { token: token });

                                _context.next = 14;
                                return _this.$store.dispatch('auth/updateUser', { user: data });

                            case 14:
                                _this.$router.push({ name: 'settings.instruction' });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },
        getDota: function getDota() {
            var _this2 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _axios2.default.get('/api/games?title=Dota 2').then(function (response) {
                                    _this2.$set(_this2, 'game', response.data[0]);
                                });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }))();
        },
        sendVerifyEmail: function sendVerifyEmail() {
            var _this3 = this;

            _axios2.default.post('/api/email/verify_code/resend').then(function (response) {
                _this3.cofirmation_sent = true;
            });
        },
        getCountries: function getCountries() {
            var _this4 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                var self;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _axios2.default.get('/api/locations?parent_id=null').then(function (response) {
                                    _this4.$set(_this4, 'countries', response.data);
                                });

                            case 2:
                                self = _this4;

                                $("#country_list").select2().on("change", function (e) {
                                    self.country_id = $(e.currentTarget).find("option:selected").val();
                                });

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this4);
            }))();
        },
        selectCountry: function selectCountry() {
            var _this5 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _this5.getRegions(_this5.country_id);

                            case 2:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this5);
            }))();
        },
        selectRegion: function selectRegion() {
            var _this6 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _this6.getCities(_this6.region_id);

                            case 2:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, _this6);
            }))();
        },
        selectCity: function selectCity() {
            var _this7 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return _this7.getSchools(_this7.city_id);

                            case 2:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, _this7);
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-23fafd96\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/LoginWithSocial.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      class:
        "nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-info p-9 ml-5 btn-" +
        _vm.ic +
        " nk-social-" +
        _vm.ic,
      attrs: { type: "button" },
      on: { click: _vm.login }
    },
    [
      _vm._v("\n    " + _vm._s(_vm.text) + "\n    "),
      _c("fa", { attrs: { icon: ["fab", _vm.ic] } })
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
    require("vue-hot-reload-api")      .rerender("data-v-23fafd96", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a3aa9146\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/auth/register.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-lg-8 m-auto" },
      [
        _c("card", { attrs: { title: _vm.$t("register") } }, [
          !_vm.cofirmation_sent
            ? _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.register($event)
                    },
                    keydown: function($event) {
                      return _vm.form.onKeydown($event)
                    }
                  }
                },
                [
                  _c("alert-error", { attrs: { form: _vm.form } }),
                  _vm._v(" "),
                  _vm.countries !== null
                    ? _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.country_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.countries, function(country) {
                              return _c(
                                "option",
                                { domProps: { value: country.id } },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(country.title) +
                                      "\n              "
                                  )
                                ]
                              )
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
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.region_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.regions, function(region) {
                              return _c(
                                "option",
                                { domProps: { value: region.id } },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(region.title) +
                                      "\n              "
                                  )
                                ]
                              )
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
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
                          [_vm._v(_vm._s(_vm.$t("locality")))]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-7" }, [
                          _c("select", {
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
                          })
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.city_id != null
                    ? _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
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
                                attrs: {
                                  name: "institution_id",
                                  id: "school_list"
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
                                      "\n                " +
                                        _vm._s(institution.title) +
                                        "\n              "
                                    )
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              class: {
                                "d-block": _vm.form.errors.has("institution_id")
                              },
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
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
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
                                class: {
                                  "is-invalid": _vm.form.errors.has("class")
                                },
                                attrs: { name: "class" },
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
                                return _c(
                                  "option",
                                  { domProps: { value: cl } },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(cl) +
                                        "\n              "
                                    )
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "class" }
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
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
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
                                class: {
                                  "is-invalid": _vm.form.errors.has("char")
                                },
                                attrs: { name: "char" },
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
                                  return _c(
                                    "option",
                                    { domProps: { value: char } },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(char) +
                                          "\n              "
                                      )
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.numberRange(1, 10), function(cl) {
                                  return _c(
                                    "option",
                                    { domProps: { value: cl } },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(cl) +
                                          "\n              "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "char" }
                            })
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-3 col-form-label text-md-right" },
                      [_vm._v(_vm._s(_vm.$t("name")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-7" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("name") },
                          attrs: { type: "text", name: "name" },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "name" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-3 col-form-label text-md-right" },
                      [_vm._v(_vm._s(_vm.$t("email")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-7" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("email") },
                          attrs: { type: "email", name: "email" },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "email" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "help-block" }, [
                          _vm._v(_vm._s(_vm.$t("register_email_help")))
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      { staticClass: "col-md-3 col-form-label text-md-right" },
                      [_vm._v(_vm._s(_vm.$t("password")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-7" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("password")
                          },
                          attrs: { type: "password", name: "password" },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "password" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-3" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-7 d-flex" },
                      [
                        _c(
                          "checkbox",
                          {
                            class: {
                              "is-invalid": _vm.form.errors.has("agree")
                            },
                            attrs: { name: "agree" },
                            model: {
                              value: _vm.form.agree,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "agree", $$v)
                              },
                              expression: "form.agree"
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("agree")) +
                                "\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "agree" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-7 offset-md-3 d-flex" },
                      [
                        _c("v-button", { attrs: { loading: _vm.form.busy } }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("register")) +
                              "\n            "
                          )
                        ])
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-a3aa9146", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var defer = function defer() {
  var state = false; // Resolved or not
  var callbacks = [];
  var resolve = function resolve(val) {
    if (state) {
      return;
    }

    state = true;
    for (var i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i](val);
    }
  };

  var then = function then(cb) {
    if (!state) {
      callbacks.push(cb);
      return;
    }
    cb();
  };

  var deferred = {
    resolved: function resolved() {
      return state;
    },

    resolve: resolve,
    promise: {
      then: then
    }
  };
  return deferred;
};

function createRecaptcha() {
  var deferred = defer();

  return {
    notify: function notify() {
      deferred.resolve();
    },
    wait: function wait() {
      return deferred.promise;
    },
    render: function render(ele, options, cb) {
      this.wait().then(function () {
        cb(window.grecaptcha.render(ele, options));
      });
    },
    reset: function reset(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.reset(widgetId);
      });
    },
    execute: function execute(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.execute(widgetId);
      });
    },
    checkRecaptchaLoad: function checkRecaptchaLoad() {
      if (window.hasOwnProperty('grecaptcha') && window.grecaptcha.hasOwnProperty('render')) {
        this.notify();
      }
    },
    assertLoaded: function assertLoaded() {
      if (!deferred.resolved()) {
        throw new Error('ReCAPTCHA has not been loaded');
      }
    }
  };
}

var recaptcha = createRecaptcha();

if (typeof window !== 'undefined') {
  window.vueRecaptchaApiLoaded = recaptcha.notify;
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var VueRecaptcha = {
  name: 'VueRecaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String
    },
    badge: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    tabindex: {
      type: String
    }
  },
  mounted: function mounted() {
    var _this = this;

    recaptcha.checkRecaptchaLoad();
    var opts = _extends({}, this.$props, {
      callback: this.emitVerify,
      'expired-callback': this.emitExpired
    });
    var container = this.$slots.default ? this.$el.children[0] : this.$el;
    recaptcha.render(container, opts, function (id) {
      _this.$widgetId = id;
      _this.$emit('render', id);
    });
  },

  methods: {
    reset: function reset() {
      recaptcha.reset(this.$widgetId);
    },
    execute: function execute() {
      recaptcha.execute(this.$widgetId);
    },
    emitVerify: function emitVerify(response) {
      this.$emit('verify', response);
    },
    emitExpired: function emitExpired() {
      this.$emit('expired');
    }
  },
  render: function render(h) {
    return h('div', {}, this.$slots.default);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (VueRecaptcha);


/***/ }),

/***/ "./resources/assets/js/components/LoginWithSocial.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/LoginWithSocial.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23fafd96_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LoginWithSocial_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-23fafd96\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/LoginWithSocial.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23fafd96_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LoginWithSocial_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/LoginWithSocial.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23fafd96", Component.options)
  } else {
    hotAPI.reload("data-v-23fafd96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/js/pages/auth/register.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/auth/register.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a3aa9146_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a3aa9146\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/auth/register.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a3aa9146_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_register_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/auth/register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3aa9146", Component.options)
  } else {
    hotAPI.reload("data-v-a3aa9146", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aFNvY2lhbC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aFNvY2lhbC52dWU/ZmRkMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIudnVlP2U3MzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1yZWNhcHRjaGEvZGlzdC92dWUtcmVjYXB0Y2hhLmVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhTb2NpYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9yZWdpc3Rlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBU0E7QUFDQSwyQkFEQTs7QUFHQTtBQUNBLGlEQURBO0FBRUEsMkNBRkE7QUFHQTtBQUhBLEtBSEE7O0FBU0EsV0FUQSxxQkFTQTtBQUNBO0FBQ0EsS0FYQTtBQWFBLGlCQWJBLDJCQWFBO0FBQ0E7QUFDQSxLQWZBOzs7QUFpQkE7QUFDQSxhQURBLG1CQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsbUNBTEEsR0FLQSx5RUFMQTs7QUFNQTs7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLFNBUkE7QUFhQSxpQkFiQSxxQkFhQSxDQWJBLEVBYUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUF2QkE7QUFqQkEsQzs7QUFnREE7QUFBQTs7QUFDQTtBQUNBO0FB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QUFBO0FBQUE7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBa0U7QUFDbkc7QUFDZ2M7QUFDYTtBQUM3YztBQUMyUTtBQUMzUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlXQUFjO0FBQ2hCLEVBQUUsaU9BQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVjLGdGQUFpQiIsImZpbGUiOiJqcy8zLjcxZjkzOTA4MzNhNzVjOTczMjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGJ1dHRvbiA6Y2xhc3M9XCInbmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1kYXJrLTMgbmstYnRuLWhvdmVyLWNvbG9yLWluZm8gcC05IG1sLTUgYnRuLScraWMrJyBuay1zb2NpYWwtJytpY1wiIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJsb2dpblwiPlxyXG4gICAgICAgIHt7IHRleHQgfX1cclxuICAgICAgICA8ZmEgOmljb249XCJbJ2ZhYicsIGljXVwiLz5cclxuICAgIDwvYnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAnTG9naW5XaXRoU29jaWFsJyxcclxuXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcHJvdmlkZXI6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBudWxsIH0sXHJcbiAgICAgICAgICAgIGljOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogbnVsbCB9LFxyXG4gICAgICAgICAgICB0ZXh0OiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBudWxsfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSwgZmFsc2UpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYmVmb3JlRGVzdHJveSAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBhc3luYyBsb2dpbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvKmNvbnN0IHVybCA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2ZldGNoT2F1dGhVcmwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHRoaXMucHJvdmlkZXJcclxuICAgICAgICAgICAgICAgIH0pKi9cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9zb2NpYWwvJyt0aGlzLnByb3ZpZGVyK1wiP3Rva2VuPVwiK0Nvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gICAgICAgICAgICAgICAgb3BlbldpbmRvdyh1cmwsIHRoaXMuJHQoJ2xvZ2luJykpXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHBhcmFtIHtNZXNzYWdlRXZlbnR9IGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9uTWVzc2FnZSAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAoZS5vcmlnaW4gIT09IHdpbmRvdy5vcmlnaW4gJiYgZS5vcmlnaW4gIT09d2luZG93LmNvbmZpZy5hcGlIb3N0KSAgfHwgIWUuZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogZS5kYXRhLnRva2VuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ3NldHRpbmdzLnByb2ZpbGUnIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEByZXR1cm4ge1dpbmRvd31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gb3BlbldpbmRvdyAodXJsLCB0aXRsZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1cmxcclxuICAgICAgICAgICAgdXJsID0gJydcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9ucyA9IHsgdXJsLCB0aXRsZSwgd2lkdGg6IDYwMCwgaGVpZ2h0OiA3MjAsIC4uLm9wdGlvbnMgfVxyXG4gICAgICAgIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlbi5sZWZ0XHJcbiAgICAgICAgY29uc3QgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiB3aW5kb3cuc2NyZWVuLnRvcFxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IHdpbmRvdy5zY3JlZW4ud2lkdGhcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIG9wdGlvbnMubGVmdCA9ICgod2lkdGggLyAyKSAtIChvcHRpb25zLndpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnRcclxuICAgICAgICBvcHRpb25zLnRvcCA9ICgoaGVpZ2h0IC8gMikgLSAob3B0aW9ucy5oZWlnaHQgLyAyKSkgKyBkdWFsU2NyZWVuVG9wXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uc1N0ciA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgYWNjLnB1c2goYCR7a2V5fT0ke29wdGlvbnNba2V5XX1gKVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjXHJcbiAgICAgICAgfSwgW10pLmpvaW4oJywnKVxyXG4gICAgICAgIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgdGl0bGUsIG9wdGlvbnNTdHIpXHJcbiAgICAgICAgaWYgKHdpbmRvdy5mb2N1cykge1xyXG4gICAgICAgICAgICBuZXdXaW5kb3cuZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3V2luZG93XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aFNvY2lhbC52dWUiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggbS1hdXRvXCI+XG4gICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgncmVnaXN0ZXInKVwiPlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiIHYtaWY9XCIhY29maXJtYXRpb25fc2VudFwiPlxuXG4gICAgICAgICAgPGFsZXJ0LWVycm9yIDpmb3JtPVwiZm9ybVwiPjwvYWxlcnQtZXJyb3I+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiB2LWlmPVwiY291bnRyaWVzIT09bnVsbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdjb3VudHJ5JykgfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImNvdW50cnlfaWRcIiBuYW1lPVwiY291bnRyeV9pZFwiIGNsYXNzPSdmb3JtLWNvbnRyb2wnIGlkPVwiY291bnRyeV9saXN0XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNvdW50cnkgaW4gY291bnRyaWVzXCIgdi1iaW5kOnZhbHVlPVwiY291bnRyeS5pZFwiPlxuICAgICAgICAgICAgICAgICAge3sgY291bnRyeS50aXRsZSB9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgdi1pZj1cImNvdW50cnlfaWQhPT1udWxsXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ3JlZ2lvbicpIH19PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJyZWdpb25faWRcIiBuYW1lPVwicmVnaW9uX2lkXCIgY2xhc3M9J2Zvcm0tY29udHJvbCcgaWQ9XCJyZWdpb25fbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJyZWdpb24gaW4gcmVnaW9uc1wiIHYtYmluZDp2YWx1ZT1cInJlZ2lvbi5pZFwiPlxuICAgICAgICAgICAgICAgICAge3sgcmVnaW9uLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiB2LWlmPVwicmVnaW9uX2lkIT1udWxsXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2xvY2FsaXR5JykgfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImNpdHlfaWRcIiBuYW1lPVwiY2l0eV9pZFwiIGNsYXNzPSdmb3JtLWNvbnRyb2wnIGlkPVwiY2l0eV9saXN0XCI+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiB2LWlmPVwiY2l0eV9pZCE9bnVsbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdzY2hvb2wnKSB9fTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZm9ybS5pbnN0aXR1dGlvbl9pZFwiIG5hbWU9XCJpbnN0aXR1dGlvbl9pZFwiIGlkPVwic2Nob29sX2xpc3RcIiBjbGFzcz0nZm9ybS1jb250cm9sJz5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiaW5zdGl0dXRpb24gaW4gaW5zdGl0dXRpb25zXCIgdi1iaW5kOnZhbHVlPVwiaW5zdGl0dXRpb24uaWRcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGluc3RpdHV0aW9uLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiaW5zdGl0dXRpb25faWRcIiA6Y2xhc3M9XCJ7ICdkLWJsb2NrJzogZm9ybS5lcnJvcnMuaGFzKCdpbnN0aXR1dGlvbl9pZCcpIH1cIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJjaXR5X2lkIT1udWxsXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2NsYXNzJykgfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImZvcm0uY2xhc3NcIiBuYW1lPVwiY2xhc3NcIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdjbGFzcycpIH1cIiBjbGFzcz0nZm9ybS1jb250cm9sJz5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiY2wgaW4gbnVtYmVyUmFuZ2UoOCwgMTEpXCIgdi1iaW5kOnZhbHVlPVwiY2xcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGNsIH19XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiY2xhc3NcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJjaXR5X2lkIT1udWxsXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2NoYXInKSB9fTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZm9ybS5jaGFyXCIgbmFtZT1cImNoYXJcIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdjaGFyJykgfVwiIGNsYXNzPSdmb3JtLWNvbnRyb2wnPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJjaGFyIGluIGNoYXJzXCIgdi1iaW5kOnZhbHVlPVwiY2hhclwiPlxuICAgICAgICAgICAgICAgICAge3sgY2hhciB9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJjbCBpbiBudW1iZXJSYW5nZSgxLCAxMClcIiB2LWJpbmQ6dmFsdWU9XCJjbFwiPlxuICAgICAgICAgICAgICAgICAge3sgY2wgfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJjaGFyXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnbmFtZScpIH19PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0ubmFtZVwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ25hbWUnKSB9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJuYW1lXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tIEVtYWlsIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdlbWFpbCcpIH19PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZW1haWxcIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdlbWFpbCcpIH1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZW1haWxcIi8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLWJsb2NrXCI+e3skdChcInJlZ2lzdGVyX2VtYWlsX2hlbHBcIil9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tIFBhc3N3b3JkIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdwYXNzd29yZCcpIH19PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpIH1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gUGFzc3dvcmQgQ29uZmlybWF0aW9uIC0tPlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnY29uZmlybV9wYXNzd29yZCcpIH19PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uXCIgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygncGFzc3dvcmRfY29uZmlybWF0aW9uJykgfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiPlxuICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+LS0+XG5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+Jm5ic3A7PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgICA8dnVlLXJlY2FwdGNoYSByZWY9XCJyZWNhcHRjaGFcIiA6c2l0ZWtleT1cInNpdGVrZXlcIiB0aGVtZT1cImxpZ2h0XCI+PC92dWUtcmVjYXB0Y2hhPlxuICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZy1yZWNhcHRjaGEtcmVzcG9uc2VcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4tLT5cblxuICAgICAgICAgIDwhLS0gUmVtZW1iZXIgTWUgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTcgZC1mbGV4XCI+XG4gICAgICAgICAgICAgIDxjaGVja2JveCB2LW1vZGVsPVwiZm9ybS5hZ3JlZVwiIG5hbWU9XCJhZ3JlZVwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2FncmVlJykgfVwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KCdhZ3JlZScpIH19XG4gICAgICAgICAgICAgIDwvY2hlY2tib3g+XG5cbiAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiYWdyZWVcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IG9mZnNldC1tZC0zIGQtZmxleFwiPlxuICAgICAgICAgICAgICA8IS0tIFN1Ym1pdCBCdXR0b24gLS0+XG4gICAgICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPlxuICAgICAgICAgICAgICAgIHt7ICR0KCdyZWdpc3RlcicpIH19XG4gICAgICAgICAgICAgIDwvdi1idXR0b24+XG5cbiAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGxvZ2luLXdpdGgtc29jaWFsIHByb3ZpZGVyPVwidmtvbnRha3RlXCIgaWM9XCJ2a1wiLz5cbiAgICAgICAgICAgICAgICA8bG9naW4td2l0aC1zb2NpYWwgcHJvdmlkZXI9XCJzdGVhbVwiIGljPVwic3RlYW1cIi8+XG4gICAgICAgICAgICAgICAgPGxvZ2luLXdpdGgtc29jaWFsIHByb3ZpZGVyPVwiZmFjZWJvb2tcIiBpYz1cImZhY2Vib29rXCIvPlxuICAgICAgICAgICAgICAgIDxsb2dpbi13aXRoLXNvY2lhbCBwcm92aWRlcj1cInR3aXRjaFwiIGljPVwidHdpdGNoXCIvPlxuICAgICAgICAgICAgICAgIDxsb2dpbi13aXRoLXNvY2lhbCBwcm92aWRlcj1cImdvb2dsZVwiIGljPVwiZ29vZ2xlXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2NhcmQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTG9naW5XaXRoU29jaWFsIGZyb20gJ34vY29tcG9uZW50cy9Mb2dpbldpdGhTb2NpYWwnXG5pbXBvcnQgVnVlUmVjYXB0Y2hhIGZyb20gJ3Z1ZS1yZWNhcHRjaGEnXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWRkbGV3YXJlOiAnZ3Vlc3QnLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBMb2dpbldpdGhTb2NpYWwsXG4gICAgVnVlUmVjYXB0Y2hhXG4gIH0sXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdyZWdpc3RlcicpIH1cbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgIHR5cGU6ICdwbGF5ZXInLFxuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBuaWNrbmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBpbnN0aXR1dGlvbl9pZDogJycsXG4gICAgICBjbGFzczogJycsXG4gICAgICBjaGFyOiAnJyxcbiAgICAgIGdhbWVfaWQ6ICcnLFxuICAgICAgZ2FtZV9yb2xlczogWzFdLFxuICAgICAgdGltZXpvbmU6IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSE9PXVuZGVmaW5lZCA/IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSA6IFwiXCIsXG4gICAgICBhZ3JlZTogdHJ1ZVxuICAgIH0pLFxuICAgICAgY291bnRyeV9pZDogbnVsbCxcbiAgICAgIGNvdW50cmllczogbnVsbCxcbiAgICAgIHJlZ2lvbl9pZDogbnVsbCxcbiAgICAgIHJlZ2lvbnM6IG51bGwsXG4gICAgICBjaXR5X2lkOiBudWxsLFxuICAgICAgY2l0aWVzOiBudWxsLFxuICAgICAgaW5zdGl0dXRpb25zOiBudWxsLFxuICAgICAgLy9zaXRla2V5OiB3aW5kb3cuY29uZmlnLmdvb2dsZVJlY2FwdGNoYUtleSxcbiAgICAgIGdhbWVzOiBudWxsLFxuICAgICAgZ2FtZTogbnVsbCxcbiAgICAgIGNvZmlybWF0aW9uX3NlbnQ6IGZhbHNlXG4gIH0pLFxuXG4gICAgY29tcHV0ZWQ6e1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxuICAgICAgICAgICAgbG9jYWxlOiAnbGFuZy9sb2NhbGUnLFxuICAgICAgICB9KSxcbiAgICAgICAgY2hhcnM6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzdHIgPSB0aGlzLiR0KCdhbHBoYWJldCcpO1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5zcGxpdChcIixcIik7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICBtb3VudGVkKCkge1xuICAgICAgdGhpcy5nZXRDb3VudHJpZXMoKTtcbiAgICAgIHRoaXMuZ2V0RG90YSgpO1xuXG4gICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJC5mbi5zZWxlY3QyLmFtZC5kZWZpbmUoJ3NlbGVjdDIvaTE4bi9ydScsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIFJ1c3NpYW5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yTG9hZGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0KDQtdC30YPQu9GM0YLQsNGCINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQt9Cw0LPRgNGD0LbQtdC9Lic7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaW5wdXRUb29Mb25nOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBvdmVyQ2hhcnMgPSBhcmdzLmlucHV0Lmxlbmd0aCAtIGFyZ3MubWF4aW11bTtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0YPQtNCw0LvQuNGC0LUgJyArIG92ZXJDaGFycyArICcg0YHQuNC80LLQvtC7JztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3ZlckNoYXJzID49IDIgJiYgb3ZlckNoYXJzIDw9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSAn0LAnO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlckNoYXJzID49IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSAn0L7Qsic7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGlucHV0VG9vU2hvcnQ6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbWFpbmluZ0NoYXJzID0gYXJncy5taW5pbXVtIC0gYXJncy5pbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUgJyArIHJlbWFpbmluZ0NoYXJzICsgJyDQuNC70Lgg0LHQvtC70LXQtSDRgdC40LzQstC+0LvQvtCyJztcblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmdNb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICfQl9Cw0LPRgNGD0LbQsNC10Lwg0LXRidGRINGA0LXRgdGD0YDRgdGL4oCmJztcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtYXhpbXVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAn0JLRiyDQvNC+0LbQtdGC0LUg0LLRi9Cx0YDQsNGC0YwgJyArIGFyZ3MubWF4aW11bSArICcg0Y3Qu9C10LzQtdC90YInO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubWF4aW11bSA+PSAyICYmIGFyZ3MubWF4aW11bSA8PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gJ9CwJztcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubWF4aW11bSA+PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gJ9C+0LInO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG5vUmVzdWx0czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L4nO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHNlYXJjaGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAn0J/QvtC40YHQuuKApic7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgcmVnaXN0ZXIgKCkge1xuXG4gICAgICB0aGlzLmZvcm0ubmlja25hbWUgPSB0aGlzLmZvcm0uZW1haWw7XG4gICAgICAvL3RoaXMuZm9ybVsnZy1yZWNhcHRjaGEtcmVzcG9uc2UnXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdnLXJlY2FwdGNoYS1yZXNwb25zZScpWzBdLnZhbHVlO1xuICAgICAgdGhpcy5mb3JtLmdhbWVfaWQgPSB0aGlzLmdhbWUuaWQ7XG5cbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSB1c2VyLlxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9yZWdpc3RlcicpXG5cbiAgICAgIHRoaXMuY29maXJtYXRpb25fc2VudCA9IHRydWU7XG4gICAgICAvL3RoaXMuc2VuZFZlcmlmeUVtYWlsKCk7XG5cbiAgICAgIC8vIExvZyBpbiB0aGUgdXNlci5cbiAgICAgIGNvbnN0IHsgZGF0YTogeyB0b2tlbiB9IH0gPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9sb2dpbicpXG5cbiAgICAgIC8vIFNhdmUgdGhlIHRva2VuLlxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvc2F2ZVRva2VuJywgeyB0b2tlbiB9KVxuXG4gICAgICAvLyBVcGRhdGUgdGhlIHVzZXIuXG4gICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC91cGRhdGVVc2VyJywgeyB1c2VyOiBkYXRhIH0pXG5cbiAgICAgIC8vIFJlZGlyZWN0IHRvIGluc3RydWN0aW9uLlxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnc2V0dGluZ3MuaW5zdHJ1Y3Rpb24nIH0pXG4gICAgfSxcbiAgICBhc3luYyBnZXREb3RhKClcbiAgICB7XG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nYW1lcz90aXRsZT1Eb3RhIDInKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdnYW1lJywgcmVzcG9uc2UuZGF0YVswXSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2VuZFZlcmlmeUVtYWlsKClcbiAgICB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvZW1haWwvdmVyaWZ5X2NvZGUvcmVzZW5kJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29maXJtYXRpb25fc2VudCA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBhc3luYyBnZXRDb3VudHJpZXMoKVxuICAgIHtcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2xvY2F0aW9ucz9wYXJlbnRfaWQ9bnVsbCcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2NvdW50cmllcycsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICQoXCIjY291bnRyeV9saXN0XCIpLnNlbGVjdDIoKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb3VudHJ5X2lkID0gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgc2VsZWN0Q291bnRyeSgpXG4gICAge1xuICAgICAgICBhd2FpdCB0aGlzLmdldFJlZ2lvbnModGhpcy5jb3VudHJ5X2lkKTtcbiAgICB9LFxuICAgIGFzeW5jIHNlbGVjdFJlZ2lvbigpXG4gICAge1xuICAgICAgICBhd2FpdCB0aGlzLmdldENpdGllcyh0aGlzLnJlZ2lvbl9pZCk7XG4gICAgfSxcbiAgICBhc3luYyBzZWxlY3RDaXR5KClcbiAgICB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0U2Nob29scyh0aGlzLmNpdHlfaWQpO1xuICAgIH0sXG5cbiAgICBnZXRSZWdpb25zKHBhcmVudF9pZClcbiAgICB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9sb2NhdGlvbnM/X3NvcnQ9dGl0bGUmcGFyZW50X2lkPScrcGFyZW50X2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdyZWdpb25zJywgcmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICQoXCIjcmVnaW9uX2xpc3RcIikuc2VsZWN0MigpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWdpb25faWQgPSAkKGUuY3VycmVudFRhcmdldCkuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldENpdGllcyhwYXJlbnRfaWQpXG4gICAge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvbG9jYXRpb25zP19zb3J0PXRpdGxlJl9saW1pdD0zMCZwYXJlbnRfaWQ9JytwYXJlbnRfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciBjaXRpZXMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdjaXRpZXMnLCBjaXRpZXMpO1xuXG4gICAgICAgICAgICBpZiAoJCgnI2NpdHlfbGlzdCcpLmRhdGEoJ3NlbGVjdDInKSkge1xuICAgICAgICAgICAgICAgICQoXCIjY2l0eV9saXN0XCIpLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJChcIiNjaXR5X2xpc3RcIikuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHNlbGYubG9jYWxlLFxuICAgICAgICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB3aW5kb3cuY29uZmlnLmFwaUhvc3QrJy9hcGkvbG9jYXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc29ydDogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF9pZDogcGFyZW50X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGUtbGtcIjogcGFyYW1zLnRlcm0rXCIqXCIsIC8vIHNlYXJjaCB0ZXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogcGFyYW1zLnBhZ2UgfHwgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbGltaXQ6IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnBhZ2UgPSBwYXJhbXMucGFnZSB8fCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2V0KHNlbGYsICdjaXRpZXMnLCBkYXRhLmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IGRhdGEuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZTogKHBhcmFtcy5wYWdlICogMzApIDwgZGF0YS50b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ9CS0LLQtdC00LjRgtC1INC90LDRgdC10LvQtdC90L3Ri9C5INC/0YPQvdC60YInLFxuICAgICAgICAgICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMlxuICAgICAgICAgICAgfSkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNpdHlfaWQgPSAkKGUuY3VycmVudFRhcmdldCkuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0U2Nob29scyhsb2NhdGlvbl9pZClcbiAgICB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9pbnN0aXR1dGlvbnM/X3NvcnQ9dGl0bGUmbG9jYXRpb25faWQ9Jytsb2NhdGlvbl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnaW5zdGl0dXRpb25zJywgcmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICQoXCIjc2Nob29sX2xpc3RcIikuc2VsZWN0MigpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mb3JtLmluc3RpdHV0aW9uX2lkID0gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG51bWJlclJhbmdlIChzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoZW5kIC0gc3RhcnQrMSkuZmlsbCgpLm1hcCgoZCwgaSkgPT4gaSArIHN0YXJ0KTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgICBjb3VudHJ5X2lkOiBmdW5jdGlvbih2YWwsIG9sZFZhbClcbiAgICAgIHtcbiAgICAgICAgICB0aGlzLnJlZ2lvbl9pZCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jaXR5X2lkID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uX2lkID0gbnVsbDtcbiAgICAgICAgICAkKCcjcmVnaW9uX2xpc3QnKS52YWwobnVsbCkudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgICAkKCcjY2l0eV9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgJCgnI3NjaG9vbF9saXN0JykudmFsKG51bGwpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG5cbiAgICAgICAgICB0aGlzLmdldFJlZ2lvbnModGhpcy5jb3VudHJ5X2lkKTtcbiAgICAgIH0sXG4gICAgICByZWdpb25faWQ6IGZ1bmN0aW9uKHZhbCwgb2xkVmFsKVxuICAgICAge1xuICAgICAgICAgIHRoaXMuY2l0eV9pZCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5pbnN0aXR1dGlvbl9pZCA9IG51bGw7XG4gICAgICAgICAgJCgnI2NpdHlfbGlzdCcpLnZhbChudWxsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICAgICQoJyNzY2hvb2xfbGlzdCcpLnZhbChudWxsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuXG4gICAgICAgICAgaWYodmFsIT1udWxsKVxuICAgICAgICAgICAgdGhpcy5nZXRDaXRpZXModmFsKTtcbiAgICAgIH0sXG4gICAgICBjaXR5X2lkOiBmdW5jdGlvbih2YWwsIG9sZFZhbClcbiAgICAgIHtcbiAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uX2lkID0gbnVsbFxuICAgICAgICAgICQoJyNzY2hvb2xfbGlzdCcpLnZhbChudWxsKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICAgIGlmKHZhbCE9bnVsbClcbiAgICAgICAgICAgIHRoaXMuZ2V0U2Nob29scyh0aGlzLmNpdHlfaWQpO1xuICAgICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3JlZ2lzdGVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJidXR0b25cIixcbiAgICB7XG4gICAgICBjbGFzczpcbiAgICAgICAgXCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLWRhcmstMyBuay1idG4taG92ZXItY29sb3ItaW5mbyBwLTkgbWwtNSBidG4tXCIgK1xuICAgICAgICBfdm0uaWMgK1xuICAgICAgICBcIiBuay1zb2NpYWwtXCIgK1xuICAgICAgICBfdm0uaWMsXG4gICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICBvbjogeyBjbGljazogX3ZtLmxvZ2luIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0udGV4dCkgKyBcIlxcbiAgICBcIiksXG4gICAgICBfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogW1wiZmFiXCIsIF92bS5pY10gfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yM2ZhZmQ5NlwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTIzZmFmZDk2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aFNvY2lhbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMjNmYWZkOTZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5XaXRoU29jaWFsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNiA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy04IG0tYXV0b1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiY2FyZFwiLCB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJyZWdpc3RlclwiKSB9IH0sIFtcbiAgICAgICAgICAhX3ZtLmNvZmlybWF0aW9uX3NlbnRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVnaXN0ZXIoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZvcm0ub25LZXlkb3duKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhbGVydC1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmNvdW50cmllcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNvdW50cnlcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb3VudHJ5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY291bnRyeV9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiY291bnRyeV9pZFwiLCBpZDogXCJjb3VudHJ5X2xpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY291bnRyeV9pZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGNvdW50cnkuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY291bnRyeS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uY291bnRyeV9pZCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInJlZ2lvblwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlZ2lvbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlZ2lvbl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwicmVnaW9uX2lkXCIsIGlkOiBcInJlZ2lvbl9saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlZ2lvbl9pZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucmVnaW9ucywgZnVuY3Rpb24ocmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IHJlZ2lvbi5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyZWdpb24udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnJlZ2lvbl9pZCAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibG9jYWxpdHlcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaXR5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNpdHlfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjaXR5X2lkXCIsIGlkOiBcImNpdHlfbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaXR5X2lkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uY2l0eV9pZCAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwic2Nob29sXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmluc3RpdHV0aW9uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmluc3RpdHV0aW9uX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaW5zdGl0dXRpb25faWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzY2hvb2xfbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnN0aXR1dGlvbl9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pbnN0aXR1dGlvbnMsIGZ1bmN0aW9uKGluc3RpdHV0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGluc3RpdHV0aW9uLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaW5zdGl0dXRpb24udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtYmxvY2tcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImluc3RpdHV0aW9uX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImluc3RpdHV0aW9uX2lkXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5jaXR5X2lkICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjbGFzc1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5jbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImNsYXNzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiY2xhc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubnVtYmVyUmFuZ2UoOCwgMTEpLCBmdW5jdGlvbihjbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRvbVByb3BzOiB7IHZhbHVlOiBjbCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGNsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNsYXNzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5jaXR5X2lkICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjaGFyXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNoYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY2hhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImNoYXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjaGFyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jaGFycywgZnVuY3Rpb24oY2hhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRvbVByb3BzOiB7IHZhbHVlOiBjaGFyIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhjaGFyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubnVtYmVyUmFuZ2UoMSwgMTApLCBmdW5jdGlvbihjbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRvbVByb3BzOiB7IHZhbHVlOiBjbCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY2wpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImNoYXJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibmFtZVwiKSkpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwibmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwibmFtZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImVtYWlsXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJlbWFpbFwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiZW1haWxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlbHAtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwicmVnaXN0ZXJfZW1haWxfaGVscFwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwYXNzd29yZFwiKSkpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXNzd29yZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIsIG5hbWU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwicGFzc3dvcmRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNyBkLWZsZXhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJhZ3JlZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhZ3JlZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5hZ3JlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiYWdyZWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5hZ3JlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcImFncmVlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwiYWdyZWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTcgb2Zmc2V0LW1kLTMgZC1mbGV4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtYnV0dG9uXCIsIHsgYXR0cnM6IHsgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwicmVnaXN0ZXJcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1hM2FhOTE0NlwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWEzYWE5MTQ2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi1hM2FhOTE0NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGRlZmVyID0gZnVuY3Rpb24gZGVmZXIoKSB7XG4gIHZhciBzdGF0ZSA9IGZhbHNlOyAvLyBSZXNvbHZlZCBvciBub3RcbiAgdmFyIGNhbGxiYWNrcyA9IFtdO1xuICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUodmFsKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGUgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrc1tpXSh2YWwpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdGhlbiA9IGZ1bmN0aW9uIHRoZW4oY2IpIHtcbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICBjYWxsYmFja3MucHVzaChjYik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNiKCk7XG4gIH07XG5cbiAgdmFyIGRlZmVycmVkID0ge1xuICAgIHJlc29sdmVkOiBmdW5jdGlvbiByZXNvbHZlZCgpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuXG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICBwcm9taXNlOiB7XG4gICAgICB0aGVuOiB0aGVuXG4gICAgfVxuICB9O1xuICByZXR1cm4gZGVmZXJyZWQ7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVSZWNhcHRjaGEoKSB7XG4gIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICB9LFxuICAgIHdhaXQ6IGZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGVsZSwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHRoaXMud2FpdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBjYih3aW5kb3cuZ3JlY2FwdGNoYS5yZW5kZXIoZWxlLCBvcHRpb25zKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCh3aWRnZXRJZCkge1xuICAgICAgaWYgKHR5cGVvZiB3aWRnZXRJZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFzc2VydExvYWRlZCgpO1xuICAgICAgdGhpcy53YWl0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZ3JlY2FwdGNoYS5yZXNldCh3aWRnZXRJZCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGV4ZWN1dGU6IGZ1bmN0aW9uIGV4ZWN1dGUod2lkZ2V0SWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2lkZ2V0SWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hc3NlcnRMb2FkZWQoKTtcbiAgICAgIHRoaXMud2FpdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmdyZWNhcHRjaGEuZXhlY3V0ZSh3aWRnZXRJZCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNoZWNrUmVjYXB0Y2hhTG9hZDogZnVuY3Rpb24gY2hlY2tSZWNhcHRjaGFMb2FkKCkge1xuICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnZ3JlY2FwdGNoYScpICYmIHdpbmRvdy5ncmVjYXB0Y2hhLmhhc093blByb3BlcnR5KCdyZW5kZXInKSkge1xuICAgICAgICB0aGlzLm5vdGlmeSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXNzZXJ0TG9hZGVkOiBmdW5jdGlvbiBhc3NlcnRMb2FkZWQoKSB7XG4gICAgICBpZiAoIWRlZmVycmVkLnJlc29sdmVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZUNBUFRDSEEgaGFzIG5vdCBiZWVuIGxvYWRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxudmFyIHJlY2FwdGNoYSA9IGNyZWF0ZVJlY2FwdGNoYSgpO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LnZ1ZVJlY2FwdGNoYUFwaUxvYWRlZCA9IHJlY2FwdGNoYS5ub3RpZnk7XG59XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgVnVlUmVjYXB0Y2hhID0ge1xuICBuYW1lOiAnVnVlUmVjYXB0Y2hhJyxcbiAgcHJvcHM6IHtcbiAgICBzaXRla2V5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGhlbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgYmFkZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIHRhYmluZGV4OiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJlY2FwdGNoYS5jaGVja1JlY2FwdGNoYUxvYWQoKTtcbiAgICB2YXIgb3B0cyA9IF9leHRlbmRzKHt9LCB0aGlzLiRwcm9wcywge1xuICAgICAgY2FsbGJhY2s6IHRoaXMuZW1pdFZlcmlmeSxcbiAgICAgICdleHBpcmVkLWNhbGxiYWNrJzogdGhpcy5lbWl0RXhwaXJlZFxuICAgIH0pO1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLiRzbG90cy5kZWZhdWx0ID8gdGhpcy4kZWwuY2hpbGRyZW5bMF0gOiB0aGlzLiRlbDtcbiAgICByZWNhcHRjaGEucmVuZGVyKGNvbnRhaW5lciwgb3B0cywgZnVuY3Rpb24gKGlkKSB7XG4gICAgICBfdGhpcy4kd2lkZ2V0SWQgPSBpZDtcbiAgICAgIF90aGlzLiRlbWl0KCdyZW5kZXInLCBpZCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHJlY2FwdGNoYS5yZXNldCh0aGlzLiR3aWRnZXRJZCk7XG4gICAgfSxcbiAgICBleGVjdXRlOiBmdW5jdGlvbiBleGVjdXRlKCkge1xuICAgICAgcmVjYXB0Y2hhLmV4ZWN1dGUodGhpcy4kd2lkZ2V0SWQpO1xuICAgIH0sXG4gICAgZW1pdFZlcmlmeTogZnVuY3Rpb24gZW1pdFZlcmlmeShyZXNwb25zZSkge1xuICAgICAgdGhpcy4kZW1pdCgndmVyaWZ5JywgcmVzcG9uc2UpO1xuICAgIH0sXG4gICAgZW1pdEV4cGlyZWQ6IGZ1bmN0aW9uIGVtaXRFeHBpcmVkKCkge1xuICAgICAgdGhpcy4kZW1pdCgnZXhwaXJlZCcpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoaCkge1xuICAgIHJldHVybiBoKCdkaXYnLCB7fSwgdGhpcy4kc2xvdHMuZGVmYXVsdCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZVJlY2FwdGNoYTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1yZWNhcHRjaGEvZGlzdC92dWUtcmVjYXB0Y2hhLmVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtcmVjYXB0Y2hhL2Rpc3QvdnVlLXJlY2FwdGNoYS5lcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Mb2dpbldpdGhTb2NpYWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTG9naW5XaXRoU29jaWFsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjNmYWZkOTZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Mb2dpbldpdGhTb2NpYWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aFNvY2lhbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjNmYWZkOTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yM2ZhZmQ5NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhTb2NpYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhTb2NpYWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA2IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9yZWdpc3Rlci52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9yZWdpc3Rlci52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWEzYWE5MTQ2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3JlZ2lzdGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hM2FhOTE0NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWEzYWE5MTQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=