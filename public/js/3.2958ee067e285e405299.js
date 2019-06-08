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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/settings/profile.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _vform = __webpack_require__("./node_modules/vform/dist/vform.js");

var _vform2 = _interopRequireDefault(_vform);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _jsCookie = __webpack_require__("./node_modules/js-cookie/src/js.cookie.js");

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _vueCoreImageUpload = __webpack_require__("./node_modules/vue-core-image-upload/dist/vue-core-image-upload.vue");

var _vueCoreImageUpload2 = _interopRequireDefault(_vueCoreImageUpload);

var _vue2Datepicker = __webpack_require__("./node_modules/vue2-datepicker/dist/build.js");

var _vue2Datepicker2 = _interopRequireDefault(_vue2Datepicker);

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _LoginWithSocial = __webpack_require__("./resources/assets/js/components/LoginWithSocial.vue");

var _LoginWithSocial2 = _interopRequireDefault(_LoginWithSocial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    scrollToTop: false,

    metaInfo: function metaInfo() {
        return { title: this.$t('settings') };
    },

    data: function data() {
        return {
            form: new _vform2.default({
                name: '',
                email: '',
                date_birth: '',
                last_name: '',
                timezone: '',
                nickname: ''
            }),
            form_p: new _vform2.default({
                password: '',
                password_confirmation: ''
            }),
            header: {
                Authorization: 'Bearer ' + _jsCookie2.default.get('token')
            },
            uploadUrl: window.config.apiHost + '/api/users/avatar',
            timezones: [],
            user_social_accounts: []
        };
    },

    computed: (0, _vuex.mapGetters)({
        user: 'auth/user',
        locale: 'lang/locale'
    }),

    components: {
        'vue-core-image-upload': _vueCoreImageUpload2.default,
        DatePicker: _vue2Datepicker2.default,
        LoginWithSocial: _LoginWithSocial2.default
    },

    created: function created() {
        var _this = this;

        this.form.keys().forEach(function (key) {
            if (key == 'timezone' && _this.user[key] == '' && Intl.DateTimeFormat().resolvedOptions().timeZone !== undefined) {
                _this.form[key] = Intl.DateTimeFormat().resolvedOptions().timeZone;
            } else {
                _this.form[key] = _this.user[key];
            }
        });
    },
    mounted: function mounted() {
        this.getTimezones();
        this.getUserSocialAccounts();
    },


    methods: {
        update: function update() {
            var _this2 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var _ref, data;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this2.form.timezone = _this2.timezone;
                                _context.next = 3;
                                return _this2.form.post('/api/users');

                            case 3:
                                _ref = _context.sent;
                                data = _ref.data;


                                _this2.$store.dispatch('auth/updateUser', { user: data.data });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }))();
        },
        update_p: function update_p() {
            var _this3 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _this3.form_p.patch('/api/password');

                            case 2:
                                _this3.form_p.reset();

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this3);
            }))();
        },
        getTimezones: function getTimezones() {
            var _this4 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                var self;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _axios2.default.get('/api/timezones').then(function (response) {
                                    _this4.$set(_this4, 'timezones', response.data);
                                });

                            case 2:
                                self = _this4;

                                $("#timezone_list").select2().on("select2:select", function (e) {
                                    self.timezone = $(e.currentTarget).find("option:selected").val();
                                });

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this4);
            }))();
        },
        imageuploaded: function imageuploaded(response) {
            this.user.avatar = response.avatar;
        },
        getUserSocialAccounts: function getUserSocialAccounts() {
            var _this5 = this;

            _axios2.default.get('/api/user_social_accounts?user_id=' + this.user.id).then(function (response) {
                _this5.$set(_this5, 'user_social_accounts', response.data);
            });
        },
        checkSocialConnected: function checkSocialConnected(provider) {
            var connected = false;
            if (this.user_social_accounts.length > 0) {
                this.user_social_accounts.forEach(function (account) {
                    if (account.provider == provider) {
                        connected = true;
                    }
                });
            }

            return connected;
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6dc52816\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/LoginWithSocial.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-6dc52816", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-94084972\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/profile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("card", { attrs: { title: _vm.$t("your_info") } }, [
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            {
              staticClass: "col-md-3 col-form-label text-md-right label-avatar"
            },
            [_vm._v(_vm._s(_vm.$t("avatar")))]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-7" }, [
            _c(
              "div",
              { staticClass: "profile-img-wrap" },
              [
                _c("img", {
                  staticClass: "rounded-circle profile-photo w-75px",
                  attrs: { src: _vm.getImageLink(_vm.user.avatar), alt: "user" }
                }),
                _vm._v(" "),
                _c(
                  "vue-core-image-upload",
                  {
                    staticClass:
                      "fileupload nk-btn nk-btn-rounded nk-btn-color-main-1 ml-20",
                    attrs: {
                      "crop-ratio": "1:1",
                      crop: true,
                      headers: _vm.header,
                      maxWidth: 150,
                      url: _vm.uploadUrl
                    },
                    on: { imageuploaded: _vm.imageuploaded }
                  },
                  [
                    _c("i", { staticClass: "fa fa-camera" }, [
                      _vm._v(" " + _vm._s(_vm.$t("upload")))
                    ])
                  ]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
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
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-md-3 col-form-label text-md-right" },
                [_vm._v(_vm._s(_vm.$t("nickname")))]
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
                        value: _vm.form.nickname,
                        expression: "form.nickname"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("nickname") },
                    attrs: { type: "text", name: "nickname" },
                    domProps: { value: _vm.form.nickname },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "nickname", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "nickname" }
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
                  _c("has-error", { attrs: { form: _vm.form, field: "name" } })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-md-3 col-form-label text-md-right" },
                [_vm._v(_vm._s(_vm.$t("last_name")))]
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
                        value: _vm.form.last_name,
                        expression: "form.last_name"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("last_name") },
                    attrs: { type: "text", name: "last_name" },
                    domProps: { value: _vm.form.last_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "last_name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "last_name" }
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
                [_vm._v(_vm._s(_vm.$t("date_birth")))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-7" },
                [
                  _c("date-picker", {
                    class: { "is-invalid": _vm.form.errors.has("last_name") },
                    attrs: {
                      editable: "",
                      "input-class": "form-control",
                      lang: _vm.locale,
                      "first-day-of-week": 1
                    },
                    model: {
                      value: _vm.form.date_birth,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date_birth", $$v)
                      },
                      expression: "form.date_birth"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "date_birth" }
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
                    attrs: { type: "email", name: "email", disabled: "" },
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
                  _c("has-error", { attrs: { form: _vm.form, field: "email" } })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-md-3 col-form-label text-md-right" },
                [_vm._v(_vm._s(_vm.$t("timezone")))]
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
                        value: _vm.form.timezone,
                        expression: "form.timezone"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "timezone", id: "timezone_list" },
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
                          "timezone",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.timezones, function(timezone, tz_utc) {
                    return _c("option", { domProps: { value: tz_utc } }, [
                      _vm._v(
                        "\n            " + _vm._s(timezone) + "\n          "
                      )
                    ])
                  })
                )
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "card",
        { staticClass: "mt-40", attrs: { title: _vm.$t("your_password") } },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.update_p($event)
                },
                keydown: function($event) {
                  _vm.form_p.onKeydown($event)
                }
              }
            },
            [
              _c("alert-success", {
                attrs: { form: _vm.form_p, message: _vm.$t("password_updated") }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "label",
                  { staticClass: "col-md-3 col-form-label text-md-right" },
                  [_vm._v(_vm._s(_vm.$t("new_password")))]
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
                          value: _vm.form_p.password,
                          expression: "form_p.password"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form_p.errors.has("password")
                      },
                      attrs: { type: "password", name: "password" },
                      domProps: { value: _vm.form_p.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form_p, "password", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form_p, field: "password" }
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
                  [_vm._v(_vm._s(_vm.$t("confirm_password")))]
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
                          value: _vm.form_p.password_confirmation,
                          expression: "form_p.password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form_p.errors.has(
                          "password_confirmation"
                        )
                      },
                      attrs: {
                        type: "password",
                        name: "password_confirmation"
                      },
                      domProps: { value: _vm.form_p.password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form_p,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: {
                        form: _vm.form_p,
                        field: "password_confirmation"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-9 ml-md-auto" },
                  [
                    _c("v-button", { attrs: { loading: _vm.form_p.busy } }, [
                      _vm._v(_vm._s(_vm.$t("update")))
                    ])
                  ],
                  1
                )
              ])
            ],
            1
          )
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-94084972", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue2-datepicker/dist/build.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DatePicker=t():e.DatePicker=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=5)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<t.length;a++){var s=t[a];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,n,i,a,r){var s,o=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId=a);var u;if(r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):i&&(u=i),u){var d=c.functional,h=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(e,t){return u.call(t),h(e,t)}):c.beforeCreate=h?[].concat(h,u):[u]}return{esModule:s,exports:o,options:c}}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(r(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],a=0;a<n.parts.length;a++)s.push(r(n.parts[a]));u[n.id]={id:n.id,refs:1,parts:s}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function r(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(f)return m;i.parentNode.removeChild(i)}if(g){var r=p++;i=h||(h=a()),t=s.bind(null,i,r,!1),n=s.bind(null,i,r,!0)}else i=a(),t=o.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function s(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,a);else{var r=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function o(e,t){var n=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(15),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),h=null,p=0,f=!1,m=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var a=c(e,t);return i(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r],o=u[s.id];o.refs--,n.push(o)}t?(a=c(e,t),i(a)):a=[];for(var r=0;r<n.length;r++){var o=n[r];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete u[o.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function i(e){n(13)}var a=n(7),r=n(11),s=n(1),o=i,l=s(a.a,r.a,!1,o,null,null);t.a=l.exports},function(e,t,n){"use strict";t.a={zh:{days:["日","一","二","三","四","五","六"],months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],pickers:["未来7天","未来30天","最近7天","最近30天"],placeholder:{date:"请选择日期",dateRange:"请选择日期范围"}},en:{days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pickers:["next 7 days","next 30 days","previous 7 days","previous 30 days"],placeholder:{date:"Select Date",dateRange:"Select Date Range"}},ro:{days:["Lun","Mar","Mie","Joi","Vin","Sâm","Dum"],months:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"],pickers:["urmatoarele 7 zile","urmatoarele 30 zile","ultimele 7 zile","ultimele 30 zile"],placeholder:{date:"Selectați Data",dateRange:"Selectați Intervalul De Date"}},fr:{days:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],months:["Jan","Fev","Mar","Avr","Mai","Juin","Juil","Aout","Sep","Oct","Nov","Dec"],pickers:["7 jours suivants","30 jours suivants","7 jours précédents","30 jours précédents"],placeholder:{date:"Sélectionnez une date",dateRange:"Sélectionnez une période"}},es:{days:["Dom","Lun","mar","Mie","Jue","Vie","Sab"],months:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],pickers:["próximos 7 días","próximos 30 días","7 días anteriores","30 días anteriores"],placeholder:{date:"Seleccionar fecha",dateRange:"Seleccionar un rango de fechas"}},"pt-br":{days:["Dom","Seg","Ter","Qua","Quin","Sex","Sáb"],months:["Jan","Fev","Mar","Abr","Maio","Jun","Jul","Ago","Set","Out","Nov","Dez"],pickers:["próximos 7 dias","próximos 30 dias","7 dias anteriores"," 30 dias anteriores"],placeholder:{date:"Selecione uma data",dateRange:"Selecione um período"}},ru:{days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],pickers:["след. 7 дней","след. 30 дней","прош. 7 дней","прош. 30 дней"],placeholder:{date:"Выберите дату",dateRange:"Выберите период"}},de:{days:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],pickers:["nächsten 7 Tage","nächsten 30 Tage","vorigen 7 Tage","vorigen 30 Tage"],placeholder:{date:"Datum auswählen",dateRange:"Zeitraum auswählen"}},it:{days:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],months:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],pickers:["successivi 7 giorni","successivi 30 giorni","precedenti 7 giorni","precedenti 30 giorni"],placeholder:{date:"Seleziona una data",dateRange:"Seleziona un intervallo date"}},cs:{days:["Ned","Pon","Úte","Stř","Čtv","Pát","Sob"],months:["Led","Úno","Bře","Dub","Kvě","Čer","Čerc","Srp","Zář","Říj","Lis","Pro"],pickers:["příštích 7 dní","příštích 30 dní","předchozích 7 dní","předchozích 30 dní"],placeholder:{date:"Vyberte datum",dateRange:"Vyberte časové rozmezí"}},sl:{days:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],months:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],pickers:["naslednjih 7 dni","naslednjih 30 dni","prejšnjih 7 dni","prejšnjih 30 dni"],placeholder:{date:"Izberite datum",dateRange:"Izberite razpon med 2 datumoma"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3);i.a.install=function(e){e.component(i.a.name,i.a)},t.default=i.a},function(e,t,n){"use strict";var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseInt(e/t);return Array.apply(null,{length:n}).map(function(e,n){return n*t})},a=function(e){var t=(e||"").split(":");if(t.length>=2){return{hours:parseInt(t[0],10),minutes:parseInt(t[1],10)}}return null},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"24",n=e.hours;n="24"===t?n:n%12||12,n=n<10?"0"+n:n;var i=e.minutes<10?"0"+e.minutes:e.minutes,a=n+":"+i;return"12"===t&&(a+=e.hours>=12?" pm":" am"),a};t.a={props:{startAt:null,endAt:null,value:null,show:Boolean},data:function(){var e=this.$parent.translation,t=this.$parent.minuteStep,n=[i(24,1),i(60,t||1)];return 0===t&&n.push(i(60,1)),{months:e.months,dates:[],years:[],now:new Date,currentPanel:"date",times:n}},computed:{days:function(){var e=this.$parent.translation.days,t=+this.$parent.firstDayOfWeek;return e.concat(e).slice(t,t+7)},timeType:function(){return/h+/.test(this.$parent.format)?"12":"24"},timeSelectOptions:function(){var e=[],t=this.$parent.timePickerOptions;if(!t)return[];if("function"==typeof t)return t()||[];var n=a(t.start),i=a(t.end),s=a(t.step);if(n&&i&&s)for(var o=n.minutes+60*n.hours,l=i.minutes+60*i.hours,c=s.minutes+60*s.hours,u=Math.floor((l-o)/c),d=0;d<=u;d++){var h=o+d*c,p=Math.floor(h/60),f=h%60,m={hours:p,minutes:f};e.push({value:m,label:r(m,this.timeType)})}return e},currentYear:function(){return this.now.getFullYear()},currentMonth:function(){return this.now.getMonth()},curHour:function(){return this.now.getHours()},curMinute:function(){return this.now.getMinutes()},curSecond:function(){return this.now.getSeconds()}},created:function(){this.updateCalendar()},watch:{show:function(e){e&&(this.currentPanel="date",this.updateNow())},value:{handler:"updateNow",immediate:!0},now:"updateCalendar"},filters:{timeText:function(e){return("00"+e).slice(String(e).length)}},methods:{updateNow:function(){this.now=this.value?new Date(this.value):new Date},updateCalendar:function(){function e(e,t,n,i){return Array.apply(null,{length:n}).map(function(n,a){var r=t+a,s=new Date(e.getFullYear(),e.getMonth(),r,0,0,0);return s.setDate(r),{title:s.toLocaleDateString(),date:s,day:r,classes:i}})}var t=this.$parent.firstDayOfWeek,n=new Date(this.now);n.setDate(0);var i=(n.getDay()+7-t)%7+1,a=n.getDate()-(i-1),r=e(n,a,i,"lastMonth");n.setMonth(n.getMonth()+2,0);var s=n.getDate(),o=e(n,1,s,"curMonth");n.setMonth(n.getMonth()+1,1);for(var l=42-(i+s),c=e(n,1,l,"nextMonth"),u=0,d=0,h=r.concat(o,c),p=new Array(6);u<42;)p[d++]=h.slice(u,u+=7);this.dates=p},isDisabled:function(e){var t=new Date(e).getTime();return!!(this.$parent.disabledDays.some(function(e){return new Date(e).setHours(0,0,0,0)===t})||""!==this.$parent.notBefore&&t<new Date(this.$parent.notBefore).getTime()||""!==this.$parent.notAfter&&t>new Date(this.$parent.notAfter).getTime()||this.startAt&&t<new Date(this.startAt).setHours(0,0,0,0)||this.endAt&&t>new Date(this.endAt).setHours(0,0,0,0))},getDateClasses:function(e){var t=[],n=new Date(e.date).setHours(0,0,0,0),i=(new Date(e.date).setHours(23,59,59,999),this.value?new Date(this.value).setHours(0,0,0,0):0),a=this.startAt?new Date(this.startAt).setHours(0,0,0,0):0,r=this.endAt?new Date(this.endAt).setHours(0,0,0,0):0,s=(new Date).setHours(0,0,0,0);return this.isDisabled(n)?"disabled":(t.push(e.classes),n===s&&t.push("today"),i&&(n===i?t.push("current"):a&&n<=i?t.push("inrange"):r&&n>=i&&t.push("inrange")),t.join(" "))},getTimeClasses:function(e,t){var n=void 0,i=void 0,a=this.startAt?new Date(this.startAt):0,r=this.endAt?new Date(this.endAt):0,s=[];switch(t){case-1:n=60*this.curHour+this.curMinute,i=new Date(this.now).setHours(Math.floor(e/60),e%60,0);break;case 0:n=this.curHour,i=new Date(this.now).setHours(e);break;case 1:n=this.curMinute,i=new Date(this.now).setMinutes(e);break;case 2:n=this.curSecond,i=new Date(this.now).setSeconds(e)}return""!==this.$parent.notBefore&&i<new Date(this.$parent.notBefore).getTime()||""!==this.$parent.notAfter&&i>new Date(this.$parent.notAfter).getTime()?"disabled":(e===n?s.push("cur-time"):a?i<a&&s.push("disabled"):r&&i>r&&s.push("disabled"),s.join(" "))},showMonths:function(){"months"===this.currentPanel?this.currentPanel="date":this.currentPanel="months"},showYears:function(){if("years"===this.currentPanel)this.currentPanel="date";else{for(var e=10*Math.floor(this.now.getFullYear()/10),t=[],n=0;n<10;n++)t.push(e+n);this.years=t,this.currentPanel="years"}},changeYear:function(e){if("years"===this.currentPanel)this.years=this.years.map(function(t){return t+10*e});else{var t=new Date(this.now);t.setFullYear(t.getFullYear()+e,t.getMonth(),1),this.now=t}},changeMonth:function(e){var t=new Date(this.now);t.setMonth(t.getMonth()+e,1),this.now=t},scrollIntoView:function(e,t){if(!t)return void(e.scrollTop=0);var n=t.offsetTop,i=t.offsetTop+t.offsetHeight,a=e.scrollTop,r=a+e.clientHeight;n<a?e.scrollTop=n:i>r&&(e.scrollTop=i-e.clientHeight)},selectDate:function(e){var t=this;if(-1===this.getDateClasses(e).indexOf("disabled")){var n=new Date(e.date);"datetime"===this.$parent.type&&(this.value instanceof Date&&n.setHours(this.value.getHours(),this.value.getMinutes(),this.value.getSeconds()),this.startAt&&n.getTime()<new Date(this.startAt).getTime()?n=new Date(this.startAt):this.endAt&&n.getTime()>new Date(this.endAt).getTime()&&(n=new Date(this.endAt)),this.currentPanel="time",this.$nextTick(function(){Array.prototype.forEach.call(t.$el.querySelectorAll(".mx-time-list-wrapper"),function(e){t.scrollIntoView(e,e.querySelector(".cur-time"))})})),this.now=n,this.$emit("input",n),this.$emit("select")}},isDisabledYear:function(e){if(this.value){var t=new Date(this.now).setFullYear(e);return this.isDisabled(t)}return!1},isDisabledMonth:function(e){if(this.value){var t=new Date(this.now).setMonth(e);return this.isDisabled(t)}return!1},selectYear:function(e){if(!this.isDisabledYear(e)){var t=new Date(this.now);t.setFullYear(e),this.now=t,this.value&&(this.$emit("input",t),this.$emit("select",!0)),this.currentPanel="months"}},selectMonth:function(e){if(!this.isDisabledMonth(e)){var t=new Date(this.now);t.setMonth(e),this.now=t,this.value&&(this.$emit("input",t),this.$emit("select",!0)),this.currentPanel="date"}},selectTime:function(e,t){if(-1===this.getTimeClasses(e,t).indexOf("disabled")){var n=new Date(this.now);0===t?n.setHours(e):1===t?n.setMinutes(e):2===t&&n.setSeconds(e),this.now=n,this.$emit("input",n),this.$emit("select")}},pickTime:function(e){if(-1===this.getTimeClasses(60*e.hours+e.minutes,-1).indexOf("disabled")){var t=new Date(this.now);t.setHours(e.hours,e.minutes,0),this.now=t,this.$emit("input",t),this.$emit("select")}}}}},function(e,t,n){"use strict";var i=n(10),a=n(4),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e){return null!==e&&"object"===(void 0===e?"undefined":s(e))};t.a={name:"DatePicker",components:{CalendarPanel:i.a},props:{value:null,format:{type:String,default:"yyyy-MM-dd"},customFormatter:{type:Function},range:{type:Boolean,default:!1},type:{type:String,default:"date"},width:{type:[String,Number],default:210},placeholder:String,lang:{type:[String,Object],default:"zh"},shortcuts:{type:[Boolean,Array],default:!0},disabledDays:{type:Array,default:function(){return[]}},notBefore:{default:""},notAfter:{default:""},firstDayOfWeek:{default:7,type:Number,validator:function(e){return e>=1&&e<=7}},minuteStep:{type:Number,default:0,validator:function(e){return e>=0&&e<=60}},timePickerOptions:{type:[Object,Function],default:function(){return null}},confirm:{type:Boolean,default:!1},inputClass:{type:String,default:"mx-input"},confirmText:{type:String,default:"OK"},disabled:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},rangeSeparator:{type:String,default:"~"},inputName:{type:String,default:"date"}},data:function(){return{showPopup:!1,showCloseIcon:!1,currentValue:this.value,position:null,userInput:null,ranges:[]}},watch:{value:{handler:function(e){this.range?this.currentValue=this.isValidRange(e)?e.slice(0,2):[void 0,void 0]:this.currentValue=this.isValidDate(e)?e:void 0},immediate:!0},showPopup:function(e){e?this.$nextTick(this.displayPopup):this.userInput=null}},computed:{translation:function(){return o(this.lang)?r({},a.a.en,this.lang):a.a[this.lang]||a.a.en},innerPlaceholder:function(){return this.placeholder||(this.range?this.translation.placeholder.dateRange:this.translation.placeholder.date)},text:function(){return!this.range&&this.isValidDate(this.value)?null!==this.userInput?this.userInput:this.stringify(this.value):this.range&&this.isValidRange(this.value)?this.stringify(this.value[0])+" "+this.rangeSeparator+" "+this.stringify(this.value[1]):""},computedWidth:function(){return"string"==typeof this.width&&/^\d+$/.test(this.width)||"number"==typeof this.width?this.width+"px":this.width}},methods:{handleInput:function(e){this.userInput=e.target.value},handleChange:function(e){var t=e.target.value,n=this.parseDate(t,this.format);if(n&&this.editable&&!this.range){if(this.notBefore&&n<new Date(this.notBefore))return;if(this.notAfter&&n>new Date(this.notAfter))return;for(var i=0,a=this.disabledDays.length;i<a;i++)if(n.getTime()===new Date(this.disabledDays[i]).getTime())return;this.$emit("input",n),this.$emit("change",n),this.closePopup()}},updateDate:function(){var e=this.currentValue;(!this.range&&e||this.range&&e[0]&&e[1])&&(this.$emit("input",e),this.$emit("change",e))},confirmDate:function(){this.updateDate(),this.closePopup(),this.$emit("confirm",this.currentValue)},selectDate:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.confirm||this.disabled||(this.updateDate(),e||"date"!==this.type||this.range||this.closePopup())},closePopup:function(){this.showPopup=!1},togglePopup:function(){this.showPopup?(this.$refs.input.blur(),this.showPopup=!1):(this.$refs.input.focus(),this.showPopup=!0)},hoverIcon:function(e){this.disabled||("mouseenter"===e.type&&this.text&&(this.showCloseIcon=!0),"mouseleave"===e.type&&(this.showCloseIcon=!1))},clickIcon:function(){this.disabled||(this.showCloseIcon?(this.$emit("input",""),this.$emit("change","")):this.togglePopup())},parseDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd",n=!0,i={y:0,M:1,d:0,H:0,h:0,m:0,s:0};return t.replace(/([^yMdHhms]*?)(([yMdHhms])\3*)([^yMdHhms]*?)/g,function(t,a,r,s,o,l,c){var u=new RegExp(a+"(\\d{"+r.length+"})"+o);return-1===e.search(u)?n=!1:e=e.replace(u,function(e,t){return i[s]=parseInt(t),""}),""}),!!n&&(i.M--,new Date(i.y,i.M,i.d,i.H||i.h,i.m,i.s))},formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss",n=e.getHours(),i={"M+":e.getMonth()+1,"[Dd]+":e.getDate(),"H+":n,"h+":n%12||12,"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds(),a:n>=12?"pm":"am",A:n>=12?"PM":"AM"},a=t.replace(/[Yy]+/g,function(t){return(""+e.getFullYear()).slice(4-t.length)});return Object.keys(i).forEach(function(e){a=a.replace(new RegExp(e),function(t){var n=""+i[e];return 1===t.length?n:("00"+n).slice(n.length)})}),a},stringify:function(e){return"function"==typeof this.customFormatter?this.customFormatter(new Date(e)):this.formatDate(new Date(e),this.format)},isValidDate:function(e){return!!new Date(e).getTime()},isValidRange:function(e){return Array.isArray(e)&&2===e.length&&this.isValidDate(e[0])&&this.isValidDate(e[1])},selectRange:function(e){this.$emit("input",[e.start,e.end]),this.$emit("change",[e.start,e.end])},initRanges:function(){var e=this;Array.isArray(this.shortcuts)?this.ranges=this.shortcuts:this.shortcuts?(this.ranges=[{text:"未来7天",start:new Date,end:new Date(Date.now()+6048e5)},{text:"未来30天",start:new Date,end:new Date(Date.now()+2592e6)},{text:"最近7天",start:new Date(Date.now()-6048e5),end:new Date},{text:"最近30天",start:new Date(Date.now()-2592e6),end:new Date}],this.ranges.forEach(function(t,n){t.text=e.translation.pickers[n]})):this.ranges=[]},displayPopup:function(){if(!this.disabled){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight,n=this.$el.getBoundingClientRect(),i=this.$refs.calendar.getBoundingClientRect();this.position={},e-n.left<i.width&&n.right<i.width?this.position.left=1-n.left+"px":n.left+n.width/2<=e/2?this.position.left=0:this.position.right=0,n.top<=i.height+1&&t-n.bottom<=i.height+1?this.position.top=t-n.top-i.height-1+"px":n.top+n.height/2<=t/2?this.position.top="100%":this.position.bottom="100%"}}},created:function(){this.initRanges()},directives:{clickoutside:{bind:function(e,t,n){e["@clickoutside"]=function(i){!e.contains(i.target)&&t.expression&&n.context[t.expression]&&t.value()},document.addEventListener("click",e["@clickoutside"],!0)},unbind:function(e){document.removeEventListener("click",e["@clickoutside"],!0)}}}}},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,'.mx-datepicker{position:relative;display:inline-block;color:#73879c;font:14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,sans-serif}.mx-datepicker *{box-sizing:border-box}.mx-datepicker.disabled{opacity:.7;cursor:not-allowed}.mx-datepicker-popup{position:absolute;width:250px;margin-top:1px;margin-bottom:1px;border:1px solid #d9d9d9;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);z-index:1000}.mx-datepicker-popup.range{width:496px}.mx-input{display:inline-block;width:100%;height:34px;padding:6px 30px 6px 10px;font-size:14px;line-height:1.4;color:#555;background-color:#fff;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.mx-input.disabled,.mx-input:disabled{opacity:.7;cursor:not-allowed}.mx-input:focus{outline:none}.mx-input-icon{top:0;right:0;position:absolute;width:30px;height:100%;color:#888;text-align:center;font-style:normal}.mx-input-icon:after{content:"";display:inline-block;width:0;height:100%;vertical-align:middle}.mx-input-icon__calendar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA00lEQVQ4T72SzQ2CQBCF54UGKIES6EAswQq0BS/A3PQ0hAt0oKVQgiVYAkcuZMwSMOyCyRKNe9uf+d6b2Qf6csGtL8sy7vu+Zebn/E5EoiAIwjRNH/PzBUBEGiJqmPniAMw+YeZkFSAiJwA3j45aVT0wsxGitwOjDGDnASBVvU4OLQARRURk9e4CAcSqWn8CLHp3Ae6MXAe/B4yzUeMkz/P9ZgdFUQzFIwD/B4yKgwMTos0OtvzCHcDRJ0gAzlmW1VYSq6oKu66LfQBTjC2AT+Hamxcml5IRpPq3VQAAAABJRU5ErkJggg==);background-position:50%;background-repeat:no-repeat}.mx-input-icon__close:before{content:"\\2716";vertical-align:middle}.mx-datepicker-top{text-align:left;padding:0 12px;line-height:34px;border-bottom:1px solid rgba(0,0,0,.05)}.mx-datepicker-top>span{white-space:nowrap;cursor:pointer}.mx-datepicker-top>span:hover{color:#1284e7}.mx-datepicker-top>span:after{content:"|";margin:0 10px;color:#48576a}.mx-datepicker-footer{padding:4px;clear:both;text-align:right;border-top:1px solid rgba(0,0,0,.05)}.mx-datepicker-btn{font-size:12px;line-height:1;padding:7px 15px;margin:0 5px;cursor:pointer;background-color:transparent;outline:none;border:none;border-radius:3px}.mx-datepicker-btn-confirm{border:1px solid rgba(0,0,0,.1);color:#73879c}.mx-datepicker-btn-confirm:hover{color:#1284e7;border-color:#1284e7}',""])},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".mx-calendar{float:left;width:100%;padding:6px 12px}.mx-calendar a{color:inherit;text-decoration:none;cursor:pointer}.mx-calendar-header{line-height:34px;text-align:center}.mx-calendar-header>a:hover{color:#1284e7}.mx-calendar__next-icon,.mx-calendar__prev-icon{font-size:20px;padding:0 6px}.mx-calendar__prev-icon{float:left}.mx-calendar__next-icon{float:right}.mx-calendar-content{height:224px;overflow:hidden}.mx-calendar-table{width:100%;font-size:12px;table-layout:fixed;border-collapse:collapse;border-spacing:0}.mx-calendar-table .today{color:#20a0ff}.mx-calendar-table .lastMonth,.mx-calendar-table .nextMonth{color:#ddd}.mx-calendar-table td,.mx-calendar-table th{width:32px;height:32px;text-align:center}.mx-calendar-table td{cursor:pointer}.mx-calendar-month>a:hover,.mx-calendar-table td.inrange,.mx-calendar-table td:hover,.mx-calendar-year>a:hover{background-color:#eaf8fe}.mx-calendar-month>a.current,.mx-calendar-table td.current,.mx-calendar-year>a.current{color:#fff;background-color:#1284e7}.mx-calendar-month a.disabled,.mx-calendar-table td.disabled,.mx-calendar-year a.disabled,.mx-time-item.disabled{cursor:not-allowed;color:#ccc;background-color:#f3f3f3}.mx-calendar-month,.mx-calendar-time,.mx-calendar-year{width:100%;height:100%;padding:7px 0;text-align:center}.mx-calendar-year>a{display:inline-block;width:40%;margin:1px 5%;line-height:40px}.mx-calendar-month>a{display:inline-block;width:30%;line-height:40px;margin:8px 1.5%}.mx-time-list-wrapper{position:relative;display:inline-block;width:100%;height:100%;border-top:1px solid rgba(0,0,0,.05);border-left:1px solid rgba(0,0,0,.05);box-sizing:border-box;overflow-y:auto}.mx-time-list-wrapper::-webkit-scrollbar{width:8px;height:8px}.mx-time-list-wrapper::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.05);border-radius:10px;box-shadow:inset 1px 1px 0 rgba(0,0,0,.1)}.mx-time-list-wrapper:hover::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.2)}.mx-time-list-wrapper:first-child{border-left:0}.mx-time-picker-item{text-align:left;padding-left:10px}.mx-time-list{margin:0;padding:0;list-style:none}.mx-time-item{width:100%;font-size:12px;height:30px;line-height:30px;cursor:pointer}.mx-time-item:hover{background-color:#eaf8fe}.mx-time-item.cur-time{color:#fff;background-color:#1284e7}",""])},function(e,t,n){"use strict";function i(e){n(14)}var a=n(6),r=n(12),s=n(1),o=i,l=s(a.a,r.a,!1,o,null,null);t.a=l.exports},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.closePopup,expression:"closePopup"}],staticClass:"mx-datepicker",class:{disabled:e.disabled},style:{width:e.computedWidth,"min-width":e.range?"datetime"===e.type?"320px":"210px":"140px"}},[n("input",{ref:"input",class:e.inputClass,attrs:{name:e.inputName,disabled:e.disabled,readonly:!e.editable||e.range,placeholder:e.innerPlaceholder},domProps:{value:e.text},on:{mouseenter:e.hoverIcon,mouseleave:e.hoverIcon,click:e.togglePopup,input:e.handleInput,change:e.handleChange,mousedown:function(e){e.preventDefault()}}}),e._v(" "),n("i",{staticClass:"mx-input-icon",class:e.showCloseIcon?"mx-input-icon__close":"mx-input-icon__calendar",on:{mouseenter:e.hoverIcon,mouseleave:e.hoverIcon,click:e.clickIcon}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showPopup,expression:"showPopup"}],ref:"calendar",staticClass:"mx-datepicker-popup",class:{range:e.range},style:e.position},[e.range?n("div",{staticStyle:{overflow:"hidden"}},[e.ranges.length?n("div",{staticClass:"mx-datepicker-top"},e._l(e.ranges,function(t){return n("span",{on:{click:function(n){e.selectRange(t)}}},[e._v(e._s(t.text))])})):e._e(),e._v(" "),n("calendar-panel",{staticStyle:{width:"50%","box-shadow":"1px 0 rgba(0, 0, 0, .1)"},attrs:{"end-at":e.currentValue[1],show:e.showPopup},on:{select:e.selectDate},model:{value:e.currentValue[0],callback:function(t){e.$set(e.currentValue,0,t)},expression:"currentValue[0]"}}),e._v(" "),n("calendar-panel",{staticStyle:{width:"50%"},attrs:{"start-at":e.currentValue[0],show:e.showPopup},on:{select:e.selectDate},model:{value:e.currentValue[1],callback:function(t){e.$set(e.currentValue,1,t)},expression:"currentValue[1]"}})],1):n("calendar-panel",{attrs:{show:e.showPopup},on:{select:e.selectDate},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}}),e._v(" "),e.confirm?n("div",{staticClass:"mx-datepicker-footer"},[n("button",{staticClass:"mx-datepicker-btn mx-datepicker-btn-confirm",attrs:{type:"button"},on:{click:e.confirmDate}},[e._v(" "+e._s(e.confirmText))])]):e._e()],1)])},a=[],r={render:i,staticRenderFns:a};t.a=r},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-calendar"},["time"===e.currentPanel?n("div",{staticClass:"mx-calendar-header"},[n("a",{on:{click:function(t){e.currentPanel="date"}}},[e._v(e._s(e.now.toLocaleDateString()))])]):n("div",{staticClass:"mx-calendar-header"},[n("a",{staticClass:"mx-calendar__prev-icon",on:{click:function(t){e.changeYear(-1)}}},[e._v("«")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"date"===e.currentPanel,expression:"currentPanel === 'date'"}],staticClass:"mx-calendar__prev-icon",on:{click:function(t){e.changeMonth(-1)}}},[e._v("‹")]),e._v(" "),n("a",{staticClass:"mx-calendar__next-icon",on:{click:function(t){e.changeYear(1)}}},[e._v("»")]),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"date"===e.currentPanel,expression:"currentPanel === 'date'"}],staticClass:"mx-calendar__next-icon",on:{click:function(t){e.changeMonth(1)}}},[e._v("›")]),e._v(" "),n("a",{on:{click:e.showMonths}},[e._v(e._s(e.months[e.currentMonth]))]),e._v(" "),n("a",{on:{click:e.showYears}},[e._v(e._s(e.currentYear))])]),e._v(" "),n("div",{staticClass:"mx-calendar-content"},[n("table",{directives:[{name:"show",rawName:"v-show",value:"date"===e.currentPanel,expression:"currentPanel === 'date'"}],staticClass:"mx-calendar-table"},[n("thead",[n("tr",e._l(e.days,function(t,i){return n("th",{key:i},[e._v(e._s(t))])}))]),e._v(" "),n("tbody",e._l(e.dates,function(t){return n("tr",e._l(t,function(t){return n("td",{class:e.getDateClasses(t),attrs:{title:t.title},on:{click:function(n){e.selectDate(t)}}},[e._v(e._s(t.day))])}))}))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"years"===e.currentPanel,expression:"currentPanel === 'years'"}],staticClass:"mx-calendar-year"},e._l(e.years,function(t){return n("a",{class:{current:e.currentYear===t,disabled:e.isDisabledYear(t)},on:{click:function(n){e.selectYear(t)}}},[e._v(e._s(t))])})),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"months"===e.currentPanel,expression:"currentPanel === 'months'"}],staticClass:"mx-calendar-month"},e._l(e.months,function(t,i){return n("a",{class:{current:e.currentMonth===i,disabled:e.isDisabledMonth(i)},on:{click:function(t){e.selectMonth(i)}}},[e._v(e._s(t))])})),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"time"===e.currentPanel,expression:"currentPanel === 'time'"}],staticClass:"mx-calendar-time"},[e.timeSelectOptions.length?n("div",{staticClass:"mx-time-list-wrapper"},[n("ul",{staticClass:"mx-time-list"},e._l(e.timeSelectOptions,function(t){return n("li",{staticClass:"mx-time-item mx-time-picker-item",class:e.getTimeClasses(60*t.value.hours+t.value.minutes,-1),on:{click:function(n){e.pickTime(t.value)}}},[e._v("\n            "+e._s(t.label)+"\n          ")])}))]):e._l(e.times,function(t,i){return n("div",{key:i,staticClass:"mx-time-list-wrapper",style:{width:100/e.times.length+"%"}},[n("ul",{staticClass:"mx-time-list"},e._l(t,function(t){return n("li",{key:t,staticClass:"mx-time-item",class:e.getTimeClasses(t,i),on:{click:function(n){e.selectTime(t,i)}}},[e._v(e._s(e._f("timeText")(t)))])}))])})],2)])])},a=[],r={render:i,staticRenderFns:a};t.a=r},function(e,t,n){var i=n(8);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("23e67822",i,!0)},function(e,t,n){var i=n(9);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2)("8118ebce",i,!0)},function(e,t){e.exports=function(e,t){for(var n=[],i={},a=0;a<t.length;a++){var r=t[a],s=r[0],o=r[1],l=r[2],c=r[3],u={id:e+":"+a,css:o,media:l,sourceMap:c};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}}])});

/***/ }),

/***/ "./resources/assets/js/components/LoginWithSocial.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/LoginWithSocial.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_LoginWithSocial_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6dc52816_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LoginWithSocial_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6dc52816\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/LoginWithSocial.vue");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6dc52816_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LoginWithSocial_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\LoginWithSocial.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dc52816", Component.options)
  } else {
    hotAPI.reload("data-v-6dc52816", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/js/pages/settings/profile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/settings/profile.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_94084972_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-94084972\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/profile.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_94084972_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\settings\\profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-94084972", Component.options)
  } else {
    hotAPI.reload("data-v-94084972", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aFNvY2lhbC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aFNvY2lhbC52dWU/ZDg5YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUudnVlPzM4NmIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZTItZGF0ZXBpY2tlci9kaXN0L2J1aWxkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhTb2NpYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcHJvZmlsZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7OztVQUdBOzs7MkNBRUE7cUNBQ0E7dUNBR0E7QUFMQTs7Z0NBTUE7MkRBQ0E7QUFFQTs0Q0FDQTttREFDQTtBQUVBOzs7OztBQU1BOzs7Ozs7Ozt1R0FDQTs7eURBQ0E7Ozs7Ozs7OztBQUtBO3lDQUNBO21HQUNBO0FBQ0E7QUFFQTs7OzhCQUlBO0FBSEE7O3NDQUlBO0FBT0E7QUE3QkE7QUFqQkE7O0FBK0NBO0FBQ0E7OzhGQUNBO2tCQUNBO2NBQ0E7QUFDQTswRkFDQTs2RkFDQTswRkFDQTsyRkFDQTs4RkFDQTttREFDQTtvREFDQTs2RUFDQTtxQ0FDQTtlQUNBO2dCQUNBOzRDQUNBO3NCQUNBO2tCQUNBO0FBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8zLjI5NThlZTA2N2UyODVlNDA1Mjk5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGJ1dHRvbiA6Y2xhc3M9XCInbmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1kYXJrLTMgbmstYnRuLWhvdmVyLWNvbG9yLWluZm8gcC05IG1sLTUgYnRuLScraWMrJyBuay1zb2NpYWwtJytpY1wiIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJsb2dpblwiPlxyXG4gICAgICAgIHt7IHRleHQgfX1cclxuICAgICAgICA8ZmEgOmljb249XCJbJ2ZhYicsIGljXVwiLz5cclxuICAgIDwvYnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiAnTG9naW5XaXRoU29jaWFsJyxcclxuXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcHJvdmlkZXI6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBudWxsIH0sXHJcbiAgICAgICAgICAgIGljOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogbnVsbCB9LFxyXG4gICAgICAgICAgICB0ZXh0OiB7dHlwZTogU3RyaW5nLCBkZWZhdWx0OiBudWxsfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSwgZmFsc2UpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYmVmb3JlRGVzdHJveSAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBhc3luYyBsb2dpbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvKmNvbnN0IHVybCA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2ZldGNoT2F1dGhVcmwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHRoaXMucHJvdmlkZXJcclxuICAgICAgICAgICAgICAgIH0pKi9cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gJy9zb2NpYWwvJyt0aGlzLnByb3ZpZGVyK1wiP3Rva2VuPVwiK0Nvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gICAgICAgICAgICAgICAgb3BlbldpbmRvdyh1cmwsIHRoaXMuJHQoJ2xvZ2luJykpXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHBhcmFtIHtNZXNzYWdlRXZlbnR9IGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9uTWVzc2FnZSAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAoZS5vcmlnaW4gIT09IHdpbmRvdy5vcmlnaW4gJiYgZS5vcmlnaW4gIT09d2luZG93LmNvbmZpZy5hcGlIb3N0KSAgfHwgIWUuZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3NhdmVUb2tlbicsIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogZS5kYXRhLnRva2VuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ3NldHRpbmdzLnByb2ZpbGUnIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEByZXR1cm4ge1dpbmRvd31cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gb3BlbldpbmRvdyAodXJsLCB0aXRsZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1cmxcclxuICAgICAgICAgICAgdXJsID0gJydcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9ucyA9IHsgdXJsLCB0aXRsZSwgd2lkdGg6IDYwMCwgaGVpZ2h0OiA3MjAsIC4uLm9wdGlvbnMgfVxyXG4gICAgICAgIGNvbnN0IGR1YWxTY3JlZW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlbi5sZWZ0XHJcbiAgICAgICAgY29uc3QgZHVhbFNjcmVlblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiB3aW5kb3cuc2NyZWVuLnRvcFxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IHdpbmRvdy5zY3JlZW4ud2lkdGhcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIG9wdGlvbnMubGVmdCA9ICgod2lkdGggLyAyKSAtIChvcHRpb25zLndpZHRoIC8gMikpICsgZHVhbFNjcmVlbkxlZnRcclxuICAgICAgICBvcHRpb25zLnRvcCA9ICgoaGVpZ2h0IC8gMikgLSAob3B0aW9ucy5oZWlnaHQgLyAyKSkgKyBkdWFsU2NyZWVuVG9wXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uc1N0ciA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgYWNjLnB1c2goYCR7a2V5fT0ke29wdGlvbnNba2V5XX1gKVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjXHJcbiAgICAgICAgfSwgW10pLmpvaW4oJywnKVxyXG4gICAgICAgIGNvbnN0IG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgdGl0bGUsIG9wdGlvbnNTdHIpXHJcbiAgICAgICAgaWYgKHdpbmRvdy5mb2N1cykge1xyXG4gICAgICAgICAgICBuZXdXaW5kb3cuZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3V2luZG93XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aFNvY2lhbC52dWUiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gIDxjYXJkIDp0aXRsZT1cIiR0KCd5b3VyX2luZm8nKVwiPlxuXG4gICAgPCEtLSBOYW1lIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodCBsYWJlbC1hdmF0YXJcIj57eyAkdCgnYXZhdGFyJykgfX08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWltZy13cmFwXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIHByb2ZpbGUtcGhvdG8gdy03NXB4XCIgOnNyYz1cImdldEltYWdlTGluayh1c2VyLmF2YXRhcilcIiBhbHQ9XCJ1c2VyXCIvPlxuICAgICAgICAgIDx2dWUtY29yZS1pbWFnZS11cGxvYWRcbiAgICAgICAgICAgICAgICAgIGNyb3AtcmF0aW89XCIxOjFcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxldXBsb2FkIG5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIG1sLTIwXCJcbiAgICAgICAgICAgICAgICAgIDpjcm9wPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlclwiXG4gICAgICAgICAgICAgICAgICBAaW1hZ2V1cGxvYWRlZD1cImltYWdldXBsb2FkZWRcIlxuICAgICAgICAgICAgICAgICAgOm1heFdpZHRoPVwiMTUwXCJcbiAgICAgICAgICAgICAgICAgIDp1cmw9XCJ1cGxvYWRVcmxcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FtZXJhXCI+Jm5ic3A7e3sgJHQoJ3VwbG9hZCcpIH19PC9pPlxuICAgICAgICAgIDwvdnVlLWNvcmUtaW1hZ2UtdXBsb2FkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICA8YWxlcnQtc3VjY2VzcyA6Zm9ybT1cImZvcm1cIiA6bWVzc2FnZT1cIiR0KCdpbmZvX3VwZGF0ZWQnKVwiLz5cblxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnbmlja25hbWUnKSB9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5uaWNrbmFtZVwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ25pY2tuYW1lJykgfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmlja25hbWVcIj5cbiAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibmlja25hbWVcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ25hbWUnKSB9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnbmFtZScpIH1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibmFtZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnbGFzdF9uYW1lJykgfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdsYXN0X25hbWUnKSB9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0X25hbWVcIj5cbiAgICAgICAgICAgIDxoYXMtZXJyb3IgOmZvcm09XCJmb3JtXCIgZmllbGQ9XCJsYXN0X25hbWVcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ2RhdGVfYmlydGgnKSB9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgIDxkYXRlLXBpY2tlciB2LW1vZGVsPVwiZm9ybS5kYXRlX2JpcnRoXCIgZWRpdGFibGUgaW5wdXQtY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6bGFuZz1cImxvY2FsZVwiIDpmaXJzdC1kYXktb2Ytd2Vlaz1cIjFcIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdsYXN0X25hbWUnKSB9XCI+PC9kYXRlLXBpY2tlcj5cbiAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwiZGF0ZV9iaXJ0aFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnZW1haWwnKSB9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJykgfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cImVtYWlsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgndGltZXpvbmUnKSB9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImZvcm0udGltZXpvbmVcIiBuYW1lPVwidGltZXpvbmVcIiBjbGFzcz0nZm9ybS1jb250cm9sJyBpZD1cInRpbWV6b25lX2xpc3RcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIodGltZXpvbmUsIHR6X3V0YykgaW4gdGltZXpvbmVzXCIgdi1iaW5kOnZhbHVlPVwidHpfdXRjXCI+XG4gICAgICAgICAgICAgIHt7IHRpbWV6b25lIH19XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBTdWJtaXQgQnV0dG9uIC0tPlxuICAgICAgPCEtLTxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgbWwtbWQtYXV0b1wiPlxuICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPnt7ICR0KCd1cGRhdGUnKSB9fTwvdi1idXR0b24+XG5cbiAgICAgICAgICA8bG9naW4td2l0aC1zb2NpYWwgcHJvdmlkZXI9XCJ2a29udGFrdGVcIiBpYz1cInZrXCIgOnRleHQ9XCIkdCgnY29ubmVjdF9hY2NvdW50JylcIiB2LWlmPVwiIWNoZWNrU29jaWFsQ29ubmVjdGVkKCd2a29udGFrdGUnKVwiLz5cbiAgICAgICAgICA8bG9naW4td2l0aC1zb2NpYWwgcHJvdmlkZXI9XCJzdGVhbVwiIGljPVwic3RlYW1cIiA6dGV4dD1cIiR0KCdjb25uZWN0X2FjY291bnQnKVwiIHYtaWY9XCIhY2hlY2tTb2NpYWxDb25uZWN0ZWQoJ3N0ZWFtJylcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+LS0+XG5cbiAgICA8L2Zvcm0+XG4gIDwvY2FyZD5cblxuICA8Y2FyZCA6dGl0bGU9XCIkdCgneW91cl9wYXNzd29yZCcpXCIgY2xhc3M9XCJtdC00MFwiPlxuICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInVwZGF0ZV9wXCIgQGtleWRvd249XCJmb3JtX3Aub25LZXlkb3duKCRldmVudClcIj5cbiAgICAgIDxhbGVydC1zdWNjZXNzIDpmb3JtPVwiZm9ybV9wXCIgOm1lc3NhZ2U9XCIkdCgncGFzc3dvcmRfdXBkYXRlZCcpXCIvPlxuXG4gICAgICA8IS0tIFBhc3N3b3JkIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnbmV3X3Bhc3N3b3JkJykgfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1fcC5wYXNzd29yZFwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtX3AuZXJyb3JzLmhhcygncGFzc3dvcmQnKSB9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybV9wXCIgZmllbGQ9XCJwYXNzd29yZFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBQYXNzd29yZCBDb25maXJtYXRpb24gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdjb25maXJtX3Bhc3N3b3JkJykgfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1fcC5wYXNzd29yZF9jb25maXJtYXRpb25cIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybV9wLmVycm9ycy5oYXMoJ3Bhc3N3b3JkX2NvbmZpcm1hdGlvbicpIH1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIj5cbiAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybV9wXCIgZmllbGQ9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gU3VibWl0IEJ1dHRvbiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgbWwtbWQtYXV0b1wiPlxuICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm1fcC5idXN5XCI+e3sgJHQoJ3VwZGF0ZScpIH19PC92LWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvY2FyZD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBWdWVDb3JlSW1hZ2VVcGxvYWQgZnJvbSAndnVlLWNvcmUtaW1hZ2UtdXBsb2FkJ1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAndnVlMi1kYXRlcGlja2VyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IExvZ2luV2l0aFNvY2lhbCBmcm9tICd+L2NvbXBvbmVudHMvTG9naW5XaXRoU29jaWFsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNjcm9sbFRvVG9wOiBmYWxzZSxcblxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3NldHRpbmdzJykgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgZGF0ZV9iaXJ0aDogJycsXG4gICAgICBsYXN0X25hbWU6ICcnLFxuICAgICAgdGltZXpvbmU6ICcnLFxuICAgICAgbmlja25hbWU6ICcnXG4gICAgfSksXG4gICAgZm9ybV9wOiBuZXcgRm9ybSh7XG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH0pLFxuICAgIGhlYWRlcjoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBDb29raWVzLmdldCgndG9rZW4nKVxuICAgIH0sXG4gICAgdXBsb2FkVXJsOiB3aW5kb3cuY29uZmlnLmFwaUhvc3QrJy9hcGkvdXNlcnMvYXZhdGFyJyxcbiAgICB0aW1lem9uZXM6IFtdLFxuICAgIHVzZXJfc29jaWFsX2FjY291bnRzOltdLFxuICB9KSxcblxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgdXNlcjogJ2F1dGgvdXNlcicsXG4gICAgbG9jYWxlOiAnbGFuZy9sb2NhbGUnLFxuICB9KSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgICAndnVlLWNvcmUtaW1hZ2UtdXBsb2FkJzogVnVlQ29yZUltYWdlVXBsb2FkLFxuICAgICAgRGF0ZVBpY2tlcixcbiAgICAgIExvZ2luV2l0aFNvY2lhbFxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIC8vIEZpbGwgdGhlIGZvcm0gd2l0aCB1c2VyIGRhdGEuXG4gICAgdGhpcy5mb3JtLmtleXMoKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmKGtleT09J3RpbWV6b25lJyAmJiB0aGlzLnVzZXJba2V5XT09JycgJiYgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lIT09dW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZvcm1ba2V5XSA9IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZm9ybVtrZXldID0gdGhpcy51c2VyW2tleV1cbiAgICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuZ2V0VGltZXpvbmVzKCk7XG4gICAgICB0aGlzLmdldFVzZXJTb2NpYWxBY2NvdW50cygpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyB1cGRhdGUgKCkge1xuICAgICAgdGhpcy5mb3JtLnRpbWV6b25lID0gdGhpcy50aW1lem9uZTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvdXNlcnMnKVxuXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC91cGRhdGVVc2VyJywgeyB1c2VyOiBkYXRhLmRhdGEgfSlcbiAgICB9LFxuICAgIGFzeW5jIHVwZGF0ZV9wICgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5mb3JtX3AucGF0Y2goJy9hcGkvcGFzc3dvcmQnKVxuICAgICAgICB0aGlzLmZvcm1fcC5yZXNldCgpXG4gICAgfSxcbiAgICBhc3luYyBnZXRUaW1lem9uZXMoKVxuICAgIHtcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3RpbWV6b25lcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ3RpbWV6b25lcycsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICQoXCIjdGltZXpvbmVfbGlzdFwiKS5zZWxlY3QyKCkub24oXCJzZWxlY3QyOnNlbGVjdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi50aW1lem9uZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGltYWdldXBsb2FkZWQocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy51c2VyLmF2YXRhciA9IHJlc3BvbnNlLmF2YXRhcjtcbiAgICB9LFxuXG4gICAgICBnZXRVc2VyU29jaWFsQWNjb3VudHMoKVxuICAgICAge1xuICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyX3NvY2lhbF9hY2NvdW50cz91c2VyX2lkPScrdGhpcy51c2VyLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ3VzZXJfc29jaWFsX2FjY291bnRzJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY2hlY2tTb2NpYWxDb25uZWN0ZWQocHJvdmlkZXIpXG4gICAgICB7XG4gICAgICAgICAgdmFyIGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIGlmKHRoaXMudXNlcl9zb2NpYWxfYWNjb3VudHMubGVuZ3RoPjApXG4gICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnVzZXJfc29jaWFsX2FjY291bnRzLmZvckVhY2goZnVuY3Rpb24oYWNjb3VudClcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYoYWNjb3VudC5wcm92aWRlcj09cHJvdmlkZXIpXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbm5lY3RlZDtcbiAgICAgIH0sXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcHJvZmlsZS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYnV0dG9uXCIsXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1kYXJrLTMgbmstYnRuLWhvdmVyLWNvbG9yLWluZm8gcC05IG1sLTUgYnRuLVwiICtcbiAgICAgICAgX3ZtLmljICtcbiAgICAgICAgXCIgbmstc29jaWFsLVwiICtcbiAgICAgICAgX3ZtLmljLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dpbiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnRleHQpICsgXCJcXG4gICAgXCIpLFxuICAgICAgX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFtcImZhYlwiLCBfdm0uaWNdIH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmRjNTI4MTZcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ZGM1MjgxNlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhTb2NpYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTZkYzUyODE2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luV2l0aFNvY2lhbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDQgNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImNhcmRcIiwgeyBhdHRyczogeyB0aXRsZTogX3ZtLiR0KFwieW91cl9pbmZvXCIpIH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0IGxhYmVsLWF2YXRhclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiYXZhdGFyXCIpKSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcm9maWxlLWltZy13cmFwXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtY2lyY2xlIHByb2ZpbGUtcGhvdG8gdy03NXB4XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5nZXRJbWFnZUxpbmsoX3ZtLnVzZXIuYXZhdGFyKSwgYWx0OiBcInVzZXJcIiB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidnVlLWNvcmUtaW1hZ2UtdXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZmlsZXVwbG9hZCBuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMSBtbC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiY3JvcC1yYXRpb1wiOiBcIjE6MVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNyb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgIHVybDogX3ZtLnVwbG9hZFVybFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBpbWFnZXVwbG9hZGVkOiBfdm0uaW1hZ2V1cGxvYWRlZCB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1jYW1lcmFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcIiArIF92bS5fcyhfdm0uJHQoXCJ1cGxvYWRcIikpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiYWxlcnQtc3VjY2Vzc1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBtZXNzYWdlOiBfdm0uJHQoXCJpbmZvX3VwZGF0ZWRcIikgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibmlja25hbWVcIikpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5pY2tuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5pY2tuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5pY2tuYW1lXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcIm5pY2tuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLm5pY2tuYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmlja25hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcIm5pY2tuYW1lXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibmFtZVwiKSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwibmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwibmFtZVwiIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibGFzdF9uYW1lXCIpKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImxhc3RfbmFtZVwiKSB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJsYXN0X25hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0ubGFzdF9uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibGFzdF9uYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJsYXN0X25hbWVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJkYXRlX2JpcnRoXCIpKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkYXRlLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibGFzdF9uYW1lXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IF92bS5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmaXJzdC1kYXktb2Ytd2Vla1wiOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRhdGVfYmlydGgsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGF0ZV9iaXJ0aFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGF0ZV9iaXJ0aFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaGFzLWVycm9yXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcImRhdGVfYmlydGhcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJlbWFpbFwiKSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZW1haWxcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIGRpc2FibGVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtLCBmaWVsZDogXCJlbWFpbFwiIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidGltZXpvbmVcIikpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50aW1lem9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50aW1lem9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ0aW1lem9uZVwiLCBpZDogXCJ0aW1lem9uZV9saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZXpvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGltZXpvbmVzLCBmdW5jdGlvbih0aW1lem9uZSwgdHpfdXRjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiB0el91dGMgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyh0aW1lem9uZSkgKyBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY2FyZFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTQwXCIsIGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJ5b3VyX3Bhc3N3b3JkXCIpIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBfdm0udXBkYXRlX3AoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZm9ybV9wLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImFsZXJ0LXN1Y2Nlc3NcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtX3AsIG1lc3NhZ2U6IF92bS4kdChcInBhc3N3b3JkX3VwZGF0ZWRcIikgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJuZXdfcGFzc3dvcmRcIikpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtX3AucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybV9wLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLmZvcm1fcC5lcnJvcnMuaGFzKFwicGFzc3dvcmRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiwgbmFtZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtX3AucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybV9wLCBcInBhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcm06IF92bS5mb3JtX3AsIGZpZWxkOiBcInBhc3N3b3JkXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNvbmZpcm1fcGFzc3dvcmRcIikpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtX3AucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1fcC5wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybV9wLmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm1fcC5wYXNzd29yZF9jb25maXJtYXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybV9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybV9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOSBtbC1tZC1hdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWJ1dHRvblwiLCB7IGF0dHJzOiB7IGxvYWRpbmc6IF92bS5mb3JtX3AuYnVzeSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwZGF0ZVwiKSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTk0MDg0OTcyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOTQwODQ5NzJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTk0MDg0OTcyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkRhdGVQaWNrZXI9dCgpOmUuRGF0ZVBpY2tlcj10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChpKXtpZihuW2ldKXJldHVybiBuW2ldLmV4cG9ydHM7dmFyIGE9bltpXT17aTppLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbaV0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsdCksYS5sPSEwLGEuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5pPWZ1bmN0aW9uKGUpe3JldHVybiBlfSx0LmQ9ZnVuY3Rpb24oZSxuLGkpe3QubyhlLG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6aX0pfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIG49ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChuLFwiYVwiLG4pLG59LHQubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdC5wPVwiL2Rpc3QvXCIsdCh0LnM9NSl9KFtmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PHRoaXMubGVuZ3RoO3QrKyl7dmFyIG49dGhpc1t0XTtuWzJdP2UucHVzaChcIkBtZWRpYSBcIituWzJdK1wie1wiK25bMV0rXCJ9XCIpOmUucHVzaChuWzFdKX1yZXR1cm4gZS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIGk9e30sYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgcj10aGlzW2FdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiByJiYoaVtyXT0hMCl9Zm9yKGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIHM9dFthXTtcIm51bWJlclwiPT10eXBlb2Ygc1swXSYmaVtzWzBdXXx8KG4mJiFzWzJdP3NbMl09bjpuJiYoc1syXT1cIihcIitzWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChzKSl9fSxlfX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LG4saSxhLHIpe3ZhciBzLG89ZT1lfHx7fSxsPXR5cGVvZiBlLmRlZmF1bHQ7XCJvYmplY3RcIiE9PWwmJlwiZnVuY3Rpb25cIiE9PWx8fChzPWUsbz1lLmRlZmF1bHQpO3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8/by5vcHRpb25zOm87dCYmKGMucmVuZGVyPXQucmVuZGVyLGMuc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zLGMuX2NvbXBpbGVkPSEwKSxuJiYoYy5mdW5jdGlvbmFsPSEwKSxhJiYoYy5fc2NvcGVJZD1hKTt2YXIgdTtpZihyPyh1PWZ1bmN0aW9uKGUpe2U9ZXx8dGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR8fHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC4kdm5vZGUmJnRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0LGV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9ffHwoZT1fX1ZVRV9TU1JfQ09OVEVYVF9fKSxpJiZpLmNhbGwodGhpcyxlKSxlJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cyYmZS5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKHIpfSxjLl9zc3JSZWdpc3Rlcj11KTppJiYodT1pKSx1KXt2YXIgZD1jLmZ1bmN0aW9uYWwsaD1kP2MucmVuZGVyOmMuYmVmb3JlQ3JlYXRlO2Q/KGMuX2luamVjdFN0eWxlcz11LGMucmVuZGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHUuY2FsbCh0KSxoKGUsdCl9KTpjLmJlZm9yZUNyZWF0ZT1oP1tdLmNvbmNhdChoLHUpOlt1XX1yZXR1cm57ZXNNb2R1bGU6cyxleHBvcnRzOm8sb3B0aW9uczpjfX19LGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUpe2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXt2YXIgbj1lW3RdLGk9dVtuLmlkXTtpZihpKXtpLnJlZnMrKztmb3IodmFyIGE9MDthPGkucGFydHMubGVuZ3RoO2ErKylpLnBhcnRzW2FdKG4ucGFydHNbYV0pO2Zvcig7YTxuLnBhcnRzLmxlbmd0aDthKyspaS5wYXJ0cy5wdXNoKHIobi5wYXJ0c1thXSkpO2kucGFydHMubGVuZ3RoPm4ucGFydHMubGVuZ3RoJiYoaS5wYXJ0cy5sZW5ndGg9bi5wYXJ0cy5sZW5ndGgpfWVsc2V7Zm9yKHZhciBzPVtdLGE9MDthPG4ucGFydHMubGVuZ3RoO2ErKylzLnB1c2gocihuLnBhcnRzW2FdKSk7dVtuLmlkXT17aWQ6bi5pZCxyZWZzOjEscGFydHM6c319fX1mdW5jdGlvbiBhKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiBlLnR5cGU9XCJ0ZXh0L2Nzc1wiLGQuYXBwZW5kQ2hpbGQoZSksZX1mdW5jdGlvbiByKGUpe3ZhciB0LG4saT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVtkYXRhLXZ1ZS1zc3ItaWR+PVwiJytlLmlkKydcIl0nKTtpZihpKXtpZihmKXJldHVybiBtO2kucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpKX1pZihnKXt2YXIgcj1wKys7aT1ofHwoaD1hKCkpLHQ9cy5iaW5kKG51bGwsaSxyLCExKSxuPXMuYmluZChudWxsLGksciwhMCl9ZWxzZSBpPWEoKSx0PW8uYmluZChudWxsLGkpLG49ZnVuY3Rpb24oKXtpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSl9O3JldHVybiB0KGUpLGZ1bmN0aW9uKGkpe2lmKGkpe2lmKGkuY3NzPT09ZS5jc3MmJmkubWVkaWE9PT1lLm1lZGlhJiZpLnNvdXJjZU1hcD09PWUuc291cmNlTWFwKXJldHVybjt0KGU9aSl9ZWxzZSBuKCl9fWZ1bmN0aW9uIHMoZSx0LG4saSl7dmFyIGE9bj9cIlwiOmkuY3NzO2lmKGUuc3R5bGVTaGVldCllLnN0eWxlU2hlZXQuY3NzVGV4dD12KHQsYSk7ZWxzZXt2YXIgcj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSxzPWUuY2hpbGROb2RlcztzW3RdJiZlLnJlbW92ZUNoaWxkKHNbdF0pLHMubGVuZ3RoP2UuaW5zZXJ0QmVmb3JlKHIsc1t0XSk6ZS5hcHBlbmRDaGlsZChyKX19ZnVuY3Rpb24gbyhlLHQpe3ZhciBuPXQuY3NzLGk9dC5tZWRpYSxhPXQuc291cmNlTWFwO2lmKGkmJmUuc2V0QXR0cmlidXRlKFwibWVkaWFcIixpKSxhJiYobis9XCJcXG4vKiMgc291cmNlVVJMPVwiK2Euc291cmNlc1swXStcIiAqL1wiLG4rPVwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShhKSkpKStcIiAqL1wiKSxlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7ZS5maXJzdENoaWxkOyllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCk7ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fXZhciBsPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudDtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgREVCVUcmJkRFQlVHJiYhbCl0aHJvdyBuZXcgRXJyb3IoXCJ2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuIFVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCIpO3ZhciBjPW4oMTUpLHU9e30sZD1sJiYoZG9jdW1lbnQuaGVhZHx8ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdKSxoPW51bGwscD0wLGY9ITEsbT1mdW5jdGlvbigpe30sZz1cInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQsbil7Zj1uO3ZhciBhPWMoZSx0KTtyZXR1cm4gaShhKSxmdW5jdGlvbih0KXtmb3IodmFyIG49W10scj0wO3I8YS5sZW5ndGg7cisrKXt2YXIgcz1hW3JdLG89dVtzLmlkXTtvLnJlZnMtLSxuLnB1c2gobyl9dD8oYT1jKGUsdCksaShhKSk6YT1bXTtmb3IodmFyIHI9MDtyPG4ubGVuZ3RoO3IrKyl7dmFyIG89bltyXTtpZigwPT09by5yZWZzKXtmb3IodmFyIGw9MDtsPG8ucGFydHMubGVuZ3RoO2wrKylvLnBhcnRzW2xdKCk7ZGVsZXRlIHVbby5pZF19fX19O3ZhciB2PWZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIGZ1bmN0aW9uKHQsbil7cmV0dXJuIGVbdF09bixlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfX0oKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSl7bigxMyl9dmFyIGE9big3KSxyPW4oMTEpLHM9bigxKSxvPWksbD1zKGEuYSxyLmEsITEsbyxudWxsLG51bGwpO3QuYT1sLmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt0LmE9e3poOntkYXlzOltcIuaXpVwiLFwi5LiAXCIsXCLkuoxcIixcIuS4iVwiLFwi5ZubXCIsXCLkupRcIixcIuWFrVwiXSxtb250aHM6W1wiMeaciFwiLFwiMuaciFwiLFwiM+aciFwiLFwiNOaciFwiLFwiNeaciFwiLFwiNuaciFwiLFwiN+aciFwiLFwiOOaciFwiLFwiOeaciFwiLFwiMTDmnIhcIixcIjEx5pyIXCIsXCIxMuaciFwiXSxwaWNrZXJzOltcIuacquadpTflpKlcIixcIuacquadpTMw5aSpXCIsXCLmnIDov5E35aSpXCIsXCLmnIDov5EzMOWkqVwiXSxwbGFjZWhvbGRlcjp7ZGF0ZTpcIuivt+mAieaLqeaXpeacn1wiLGRhdGVSYW5nZTpcIuivt+mAieaLqeaXpeacn+iMg+WbtFwifX0sZW46e2RheXM6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLG1vbnRoczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLHBpY2tlcnM6W1wibmV4dCA3IGRheXNcIixcIm5leHQgMzAgZGF5c1wiLFwicHJldmlvdXMgNyBkYXlzXCIsXCJwcmV2aW91cyAzMCBkYXlzXCJdLHBsYWNlaG9sZGVyOntkYXRlOlwiU2VsZWN0IERhdGVcIixkYXRlUmFuZ2U6XCJTZWxlY3QgRGF0ZSBSYW5nZVwifX0scm86e2RheXM6W1wiTHVuXCIsXCJNYXJcIixcIk1pZVwiLFwiSm9pXCIsXCJWaW5cIixcIlPDom1cIixcIkR1bVwiXSxtb250aHM6W1wiSWFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYWlcIixcIkl1blwiLFwiSXVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb2lcIixcIkRlY1wiXSxwaWNrZXJzOltcInVybWF0b2FyZWxlIDcgemlsZVwiLFwidXJtYXRvYXJlbGUgMzAgemlsZVwiLFwidWx0aW1lbGUgNyB6aWxlXCIsXCJ1bHRpbWVsZSAzMCB6aWxlXCJdLHBsYWNlaG9sZGVyOntkYXRlOlwiU2VsZWN0YcibaSBEYXRhXCIsZGF0ZVJhbmdlOlwiU2VsZWN0YcibaSBJbnRlcnZhbHVsIERlIERhdGVcIn19LGZyOntkYXlzOltcIkRpbVwiLFwiTHVuXCIsXCJNYXJcIixcIk1lclwiLFwiSmV1XCIsXCJWZW5cIixcIlNhbVwiXSxtb250aHM6W1wiSmFuXCIsXCJGZXZcIixcIk1hclwiLFwiQXZyXCIsXCJNYWlcIixcIkp1aW5cIixcIkp1aWxcIixcIkFvdXRcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXSxwaWNrZXJzOltcIjcgam91cnMgc3VpdmFudHNcIixcIjMwIGpvdXJzIHN1aXZhbnRzXCIsXCI3IGpvdXJzIHByw6ljw6lkZW50c1wiLFwiMzAgam91cnMgcHLDqWPDqWRlbnRzXCJdLHBsYWNlaG9sZGVyOntkYXRlOlwiU8OpbGVjdGlvbm5leiB1bmUgZGF0ZVwiLGRhdGVSYW5nZTpcIlPDqWxlY3Rpb25uZXogdW5lIHDDqXJpb2RlXCJ9fSxlczp7ZGF5czpbXCJEb21cIixcIkx1blwiLFwibWFyXCIsXCJNaWVcIixcIkp1ZVwiLFwiVmllXCIsXCJTYWJcIl0sbW9udGhzOltcIkVuZVwiLFwiRmViXCIsXCJNYXJcIixcIkFiclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQWdvXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEaWNcIl0scGlja2VyczpbXCJwcsOzeGltb3MgNyBkw61hc1wiLFwicHLDs3hpbW9zIDMwIGTDrWFzXCIsXCI3IGTDrWFzIGFudGVyaW9yZXNcIixcIjMwIGTDrWFzIGFudGVyaW9yZXNcIl0scGxhY2Vob2xkZXI6e2RhdGU6XCJTZWxlY2Npb25hciBmZWNoYVwiLGRhdGVSYW5nZTpcIlNlbGVjY2lvbmFyIHVuIHJhbmdvIGRlIGZlY2hhc1wifX0sXCJwdC1iclwiOntkYXlzOltcIkRvbVwiLFwiU2VnXCIsXCJUZXJcIixcIlF1YVwiLFwiUXVpblwiLFwiU2V4XCIsXCJTw6FiXCJdLG1vbnRoczpbXCJKYW5cIixcIkZldlwiLFwiTWFyXCIsXCJBYnJcIixcIk1haW9cIixcIkp1blwiLFwiSnVsXCIsXCJBZ29cIixcIlNldFwiLFwiT3V0XCIsXCJOb3ZcIixcIkRlelwiXSxwaWNrZXJzOltcInByw7N4aW1vcyA3IGRpYXNcIixcInByw7N4aW1vcyAzMCBkaWFzXCIsXCI3IGRpYXMgYW50ZXJpb3Jlc1wiLFwiIDMwIGRpYXMgYW50ZXJpb3Jlc1wiXSxwbGFjZWhvbGRlcjp7ZGF0ZTpcIlNlbGVjaW9uZSB1bWEgZGF0YVwiLGRhdGVSYW5nZTpcIlNlbGVjaW9uZSB1bSBwZXLDrW9kb1wifX0scnU6e2RheXM6W1wi0JLRgVwiLFwi0J/QvVwiLFwi0JLRglwiLFwi0KHRgFwiLFwi0KfRglwiLFwi0J/RglwiLFwi0KHQsVwiXSxtb250aHM6W1wi0K/QvdCyXCIsXCLQpNC10LJcIixcItCc0LDRgFwiLFwi0JDQv9GAXCIsXCLQnNCw0LlcIixcItCY0Y7QvVwiLFwi0JjRjtC7XCIsXCLQkNCy0LNcIixcItCh0LXQvVwiLFwi0J7QutGCXCIsXCLQndC+0Y9cIixcItCU0LXQulwiXSxwaWNrZXJzOltcItGB0LvQtdC0LiA3INC00L3QtdC5XCIsXCLRgdC70LXQtC4gMzAg0LTQvdC10LlcIixcItC/0YDQvtGILiA3INC00L3QtdC5XCIsXCLQv9GA0L7RiC4gMzAg0LTQvdC10LlcIl0scGxhY2Vob2xkZXI6e2RhdGU6XCLQktGL0LHQtdGA0LjRgtC1INC00LDRgtGDXCIsZGF0ZVJhbmdlOlwi0JLRi9Cx0LXRgNC40YLQtSDQv9C10YDQuNC+0LRcIn19LGRlOntkYXlzOltcIlNvXCIsXCJNb1wiLFwiRGlcIixcIk1pXCIsXCJEb1wiLFwiRnJcIixcIlNhXCJdLG1vbnRoczpbXCJKYW51YXJcIixcIkZlYnJ1YXJcIixcIk3DpHJ6XCIsXCJBcHJpbFwiLFwiTWFpXCIsXCJKdW5pXCIsXCJKdWxpXCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2t0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlemVtYmVyXCJdLHBpY2tlcnM6W1wibsOkY2hzdGVuIDcgVGFnZVwiLFwibsOkY2hzdGVuIDMwIFRhZ2VcIixcInZvcmlnZW4gNyBUYWdlXCIsXCJ2b3JpZ2VuIDMwIFRhZ2VcIl0scGxhY2Vob2xkZXI6e2RhdGU6XCJEYXR1bSBhdXN3w6RobGVuXCIsZGF0ZVJhbmdlOlwiWmVpdHJhdW0gYXVzd8OkaGxlblwifX0saXQ6e2RheXM6W1wiRG9tXCIsXCJMdW5cIixcIk1hclwiLFwiTWVyXCIsXCJHaW9cIixcIlZlblwiLFwiU2FiXCJdLG1vbnRoczpbXCJHZW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1hZ1wiLFwiR2l1XCIsXCJMdWdcIixcIkFnb1wiLFwiU2V0XCIsXCJPdHRcIixcIk5vdlwiLFwiRGljXCJdLHBpY2tlcnM6W1wic3VjY2Vzc2l2aSA3IGdpb3JuaVwiLFwic3VjY2Vzc2l2aSAzMCBnaW9ybmlcIixcInByZWNlZGVudGkgNyBnaW9ybmlcIixcInByZWNlZGVudGkgMzAgZ2lvcm5pXCJdLHBsYWNlaG9sZGVyOntkYXRlOlwiU2VsZXppb25hIHVuYSBkYXRhXCIsZGF0ZVJhbmdlOlwiU2VsZXppb25hIHVuIGludGVydmFsbG8gZGF0ZVwifX0sY3M6e2RheXM6W1wiTmVkXCIsXCJQb25cIixcIsOadGVcIixcIlN0xZlcIixcIsSMdHZcIixcIlDDoXRcIixcIlNvYlwiXSxtb250aHM6W1wiTGVkXCIsXCLDmm5vXCIsXCJCxZllXCIsXCJEdWJcIixcIkt2xJtcIixcIsSMZXJcIixcIsSMZXJjXCIsXCJTcnBcIixcIlrDocWZXCIsXCLFmMOtalwiLFwiTGlzXCIsXCJQcm9cIl0scGlja2VyczpbXCJwxZnDrcWhdMOtY2ggNyBkbsOtXCIsXCJwxZnDrcWhdMOtY2ggMzAgZG7DrVwiLFwicMWZZWRjaG96w61jaCA3IGRuw61cIixcInDFmWVkY2hvesOtY2ggMzAgZG7DrVwiXSxwbGFjZWhvbGRlcjp7ZGF0ZTpcIlZ5YmVydGUgZGF0dW1cIixkYXRlUmFuZ2U6XCJWeWJlcnRlIMSNYXNvdsOpIHJvem1lesOtXCJ9fSxzbDp7ZGF5czpbXCJOZWRcIixcIlBvblwiLFwiVG9yXCIsXCJTcmVcIixcIsSMZXRcIixcIlBldFwiLFwiU29iXCJdLG1vbnRoczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1halwiLFwiSnVuXCIsXCJKdWxcIixcIkF2Z1wiLFwiU2VwXCIsXCJPa3RcIixcIk5vdlwiLFwiRGVjXCJdLHBpY2tlcnM6W1wibmFzbGVkbmppaCA3IGRuaVwiLFwibmFzbGVkbmppaCAzMCBkbmlcIixcInByZWrFoW5qaWggNyBkbmlcIixcInByZWrFoW5qaWggMzAgZG5pXCJdLHBsYWNlaG9sZGVyOntkYXRlOlwiSXpiZXJpdGUgZGF0dW1cIixkYXRlUmFuZ2U6XCJJemJlcml0ZSByYXpwb24gbWVkIDIgZGF0dW1vbWFcIn19fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPW4oMyk7aS5hLmluc3RhbGw9ZnVuY3Rpb24oZSl7ZS5jb21wb25lbnQoaS5hLm5hbWUsaS5hKX0sdC5kZWZhdWx0PWkuYX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciBpPWZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXToxLG49cGFyc2VJbnQoZS90KTtyZXR1cm4gQXJyYXkuYXBwbHkobnVsbCx7bGVuZ3RoOm59KS5tYXAoZnVuY3Rpb24oZSxuKXtyZXR1cm4gbip0fSl9LGE9ZnVuY3Rpb24oZSl7dmFyIHQ9KGV8fFwiXCIpLnNwbGl0KFwiOlwiKTtpZih0Lmxlbmd0aD49Mil7cmV0dXJue2hvdXJzOnBhcnNlSW50KHRbMF0sMTApLG1pbnV0ZXM6cGFyc2VJbnQodFsxXSwxMCl9fXJldHVybiBudWxsfSxyPWZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcIjI0XCIsbj1lLmhvdXJzO249XCIyNFwiPT09dD9uOm4lMTJ8fDEyLG49bjwxMD9cIjBcIituOm47dmFyIGk9ZS5taW51dGVzPDEwP1wiMFwiK2UubWludXRlczplLm1pbnV0ZXMsYT1uK1wiOlwiK2k7cmV0dXJuXCIxMlwiPT09dCYmKGErPWUuaG91cnM+PTEyP1wiIHBtXCI6XCIgYW1cIiksYX07dC5hPXtwcm9wczp7c3RhcnRBdDpudWxsLGVuZEF0Om51bGwsdmFsdWU6bnVsbCxzaG93OkJvb2xlYW59LGRhdGE6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiRwYXJlbnQudHJhbnNsYXRpb24sdD10aGlzLiRwYXJlbnQubWludXRlU3RlcCxuPVtpKDI0LDEpLGkoNjAsdHx8MSldO3JldHVybiAwPT09dCYmbi5wdXNoKGkoNjAsMSkpLHttb250aHM6ZS5tb250aHMsZGF0ZXM6W10seWVhcnM6W10sbm93Om5ldyBEYXRlLGN1cnJlbnRQYW5lbDpcImRhdGVcIix0aW1lczpufX0sY29tcHV0ZWQ6e2RheXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiRwYXJlbnQudHJhbnNsYXRpb24uZGF5cyx0PSt0aGlzLiRwYXJlbnQuZmlyc3REYXlPZldlZWs7cmV0dXJuIGUuY29uY2F0KGUpLnNsaWNlKHQsdCs3KX0sdGltZVR5cGU6ZnVuY3Rpb24oKXtyZXR1cm4vaCsvLnRlc3QodGhpcy4kcGFyZW50LmZvcm1hdCk/XCIxMlwiOlwiMjRcIn0sdGltZVNlbGVjdE9wdGlvbnM6ZnVuY3Rpb24oKXt2YXIgZT1bXSx0PXRoaXMuJHBhcmVudC50aW1lUGlja2VyT3B0aW9ucztpZighdClyZXR1cm5bXTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiB0KCl8fFtdO3ZhciBuPWEodC5zdGFydCksaT1hKHQuZW5kKSxzPWEodC5zdGVwKTtpZihuJiZpJiZzKWZvcih2YXIgbz1uLm1pbnV0ZXMrNjAqbi5ob3VycyxsPWkubWludXRlcys2MCppLmhvdXJzLGM9cy5taW51dGVzKzYwKnMuaG91cnMsdT1NYXRoLmZsb29yKChsLW8pL2MpLGQ9MDtkPD11O2QrKyl7dmFyIGg9bytkKmMscD1NYXRoLmZsb29yKGgvNjApLGY9aCU2MCxtPXtob3VyczpwLG1pbnV0ZXM6Zn07ZS5wdXNoKHt2YWx1ZTptLGxhYmVsOnIobSx0aGlzLnRpbWVUeXBlKX0pfXJldHVybiBlfSxjdXJyZW50WWVhcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vdy5nZXRGdWxsWWVhcigpfSxjdXJyZW50TW9udGg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub3cuZ2V0TW9udGgoKX0sY3VySG91cjpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vdy5nZXRIb3VycygpfSxjdXJNaW51dGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub3cuZ2V0TWludXRlcygpfSxjdXJTZWNvbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub3cuZ2V0U2Vjb25kcygpfX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMudXBkYXRlQ2FsZW5kYXIoKX0sd2F0Y2g6e3Nob3c6ZnVuY3Rpb24oZSl7ZSYmKHRoaXMuY3VycmVudFBhbmVsPVwiZGF0ZVwiLHRoaXMudXBkYXRlTm93KCkpfSx2YWx1ZTp7aGFuZGxlcjpcInVwZGF0ZU5vd1wiLGltbWVkaWF0ZTohMH0sbm93OlwidXBkYXRlQ2FsZW5kYXJcIn0sZmlsdGVyczp7dGltZVRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuKFwiMDBcIitlKS5zbGljZShTdHJpbmcoZSkubGVuZ3RoKX19LG1ldGhvZHM6e3VwZGF0ZU5vdzpmdW5jdGlvbigpe3RoaXMubm93PXRoaXMudmFsdWU/bmV3IERhdGUodGhpcy52YWx1ZSk6bmV3IERhdGV9LHVwZGF0ZUNhbGVuZGFyOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbixpKXtyZXR1cm4gQXJyYXkuYXBwbHkobnVsbCx7bGVuZ3RoOm59KS5tYXAoZnVuY3Rpb24obixhKXt2YXIgcj10K2Escz1uZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksZS5nZXRNb250aCgpLHIsMCwwLDApO3JldHVybiBzLnNldERhdGUocikse3RpdGxlOnMudG9Mb2NhbGVEYXRlU3RyaW5nKCksZGF0ZTpzLGRheTpyLGNsYXNzZXM6aX19KX12YXIgdD10aGlzLiRwYXJlbnQuZmlyc3REYXlPZldlZWssbj1uZXcgRGF0ZSh0aGlzLm5vdyk7bi5zZXREYXRlKDApO3ZhciBpPShuLmdldERheSgpKzctdCklNysxLGE9bi5nZXREYXRlKCktKGktMSkscj1lKG4sYSxpLFwibGFzdE1vbnRoXCIpO24uc2V0TW9udGgobi5nZXRNb250aCgpKzIsMCk7dmFyIHM9bi5nZXREYXRlKCksbz1lKG4sMSxzLFwiY3VyTW9udGhcIik7bi5zZXRNb250aChuLmdldE1vbnRoKCkrMSwxKTtmb3IodmFyIGw9NDItKGkrcyksYz1lKG4sMSxsLFwibmV4dE1vbnRoXCIpLHU9MCxkPTAsaD1yLmNvbmNhdChvLGMpLHA9bmV3IEFycmF5KDYpO3U8NDI7KXBbZCsrXT1oLnNsaWNlKHUsdSs9Nyk7dGhpcy5kYXRlcz1wfSxpc0Rpc2FibGVkOmZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBEYXRlKGUpLmdldFRpbWUoKTtyZXR1cm4hISh0aGlzLiRwYXJlbnQuZGlzYWJsZWREYXlzLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBEYXRlKGUpLnNldEhvdXJzKDAsMCwwLDApPT09dH0pfHxcIlwiIT09dGhpcy4kcGFyZW50Lm5vdEJlZm9yZSYmdDxuZXcgRGF0ZSh0aGlzLiRwYXJlbnQubm90QmVmb3JlKS5nZXRUaW1lKCl8fFwiXCIhPT10aGlzLiRwYXJlbnQubm90QWZ0ZXImJnQ+bmV3IERhdGUodGhpcy4kcGFyZW50Lm5vdEFmdGVyKS5nZXRUaW1lKCl8fHRoaXMuc3RhcnRBdCYmdDxuZXcgRGF0ZSh0aGlzLnN0YXJ0QXQpLnNldEhvdXJzKDAsMCwwLDApfHx0aGlzLmVuZEF0JiZ0Pm5ldyBEYXRlKHRoaXMuZW5kQXQpLnNldEhvdXJzKDAsMCwwLDApKX0sZ2V0RGF0ZUNsYXNzZXM6ZnVuY3Rpb24oZSl7dmFyIHQ9W10sbj1uZXcgRGF0ZShlLmRhdGUpLnNldEhvdXJzKDAsMCwwLDApLGk9KG5ldyBEYXRlKGUuZGF0ZSkuc2V0SG91cnMoMjMsNTksNTksOTk5KSx0aGlzLnZhbHVlP25ldyBEYXRlKHRoaXMudmFsdWUpLnNldEhvdXJzKDAsMCwwLDApOjApLGE9dGhpcy5zdGFydEF0P25ldyBEYXRlKHRoaXMuc3RhcnRBdCkuc2V0SG91cnMoMCwwLDAsMCk6MCxyPXRoaXMuZW5kQXQ/bmV3IERhdGUodGhpcy5lbmRBdCkuc2V0SG91cnMoMCwwLDAsMCk6MCxzPShuZXcgRGF0ZSkuc2V0SG91cnMoMCwwLDAsMCk7cmV0dXJuIHRoaXMuaXNEaXNhYmxlZChuKT9cImRpc2FibGVkXCI6KHQucHVzaChlLmNsYXNzZXMpLG49PT1zJiZ0LnB1c2goXCJ0b2RheVwiKSxpJiYobj09PWk/dC5wdXNoKFwiY3VycmVudFwiKTphJiZuPD1pP3QucHVzaChcImlucmFuZ2VcIik6ciYmbj49aSYmdC5wdXNoKFwiaW5yYW5nZVwiKSksdC5qb2luKFwiIFwiKSl9LGdldFRpbWVDbGFzc2VzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dm9pZCAwLGk9dm9pZCAwLGE9dGhpcy5zdGFydEF0P25ldyBEYXRlKHRoaXMuc3RhcnRBdCk6MCxyPXRoaXMuZW5kQXQ/bmV3IERhdGUodGhpcy5lbmRBdCk6MCxzPVtdO3N3aXRjaCh0KXtjYXNlLTE6bj02MCp0aGlzLmN1ckhvdXIrdGhpcy5jdXJNaW51dGUsaT1uZXcgRGF0ZSh0aGlzLm5vdykuc2V0SG91cnMoTWF0aC5mbG9vcihlLzYwKSxlJTYwLDApO2JyZWFrO2Nhc2UgMDpuPXRoaXMuY3VySG91cixpPW5ldyBEYXRlKHRoaXMubm93KS5zZXRIb3VycyhlKTticmVhaztjYXNlIDE6bj10aGlzLmN1ck1pbnV0ZSxpPW5ldyBEYXRlKHRoaXMubm93KS5zZXRNaW51dGVzKGUpO2JyZWFrO2Nhc2UgMjpuPXRoaXMuY3VyU2Vjb25kLGk9bmV3IERhdGUodGhpcy5ub3cpLnNldFNlY29uZHMoZSl9cmV0dXJuXCJcIiE9PXRoaXMuJHBhcmVudC5ub3RCZWZvcmUmJmk8bmV3IERhdGUodGhpcy4kcGFyZW50Lm5vdEJlZm9yZSkuZ2V0VGltZSgpfHxcIlwiIT09dGhpcy4kcGFyZW50Lm5vdEFmdGVyJiZpPm5ldyBEYXRlKHRoaXMuJHBhcmVudC5ub3RBZnRlcikuZ2V0VGltZSgpP1wiZGlzYWJsZWRcIjooZT09PW4/cy5wdXNoKFwiY3VyLXRpbWVcIik6YT9pPGEmJnMucHVzaChcImRpc2FibGVkXCIpOnImJmk+ciYmcy5wdXNoKFwiZGlzYWJsZWRcIikscy5qb2luKFwiIFwiKSl9LHNob3dNb250aHM6ZnVuY3Rpb24oKXtcIm1vbnRoc1wiPT09dGhpcy5jdXJyZW50UGFuZWw/dGhpcy5jdXJyZW50UGFuZWw9XCJkYXRlXCI6dGhpcy5jdXJyZW50UGFuZWw9XCJtb250aHNcIn0sc2hvd1llYXJzOmZ1bmN0aW9uKCl7aWYoXCJ5ZWFyc1wiPT09dGhpcy5jdXJyZW50UGFuZWwpdGhpcy5jdXJyZW50UGFuZWw9XCJkYXRlXCI7ZWxzZXtmb3IodmFyIGU9MTAqTWF0aC5mbG9vcih0aGlzLm5vdy5nZXRGdWxsWWVhcigpLzEwKSx0PVtdLG49MDtuPDEwO24rKyl0LnB1c2goZStuKTt0aGlzLnllYXJzPXQsdGhpcy5jdXJyZW50UGFuZWw9XCJ5ZWFyc1wifX0sY2hhbmdlWWVhcjpmdW5jdGlvbihlKXtpZihcInllYXJzXCI9PT10aGlzLmN1cnJlbnRQYW5lbCl0aGlzLnllYXJzPXRoaXMueWVhcnMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0KzEwKmV9KTtlbHNle3ZhciB0PW5ldyBEYXRlKHRoaXMubm93KTt0LnNldEZ1bGxZZWFyKHQuZ2V0RnVsbFllYXIoKStlLHQuZ2V0TW9udGgoKSwxKSx0aGlzLm5vdz10fX0sY2hhbmdlTW9udGg6ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IERhdGUodGhpcy5ub3cpO3Quc2V0TW9udGgodC5nZXRNb250aCgpK2UsMSksdGhpcy5ub3c9dH0sc2Nyb2xsSW50b1ZpZXc6ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm4gdm9pZChlLnNjcm9sbFRvcD0wKTt2YXIgbj10Lm9mZnNldFRvcCxpPXQub2Zmc2V0VG9wK3Qub2Zmc2V0SGVpZ2h0LGE9ZS5zY3JvbGxUb3Ascj1hK2UuY2xpZW50SGVpZ2h0O248YT9lLnNjcm9sbFRvcD1uOmk+ciYmKGUuc2Nyb2xsVG9wPWktZS5jbGllbnRIZWlnaHQpfSxzZWxlY3REYXRlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYoLTE9PT10aGlzLmdldERhdGVDbGFzc2VzKGUpLmluZGV4T2YoXCJkaXNhYmxlZFwiKSl7dmFyIG49bmV3IERhdGUoZS5kYXRlKTtcImRhdGV0aW1lXCI9PT10aGlzLiRwYXJlbnQudHlwZSYmKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlJiZuLnNldEhvdXJzKHRoaXMudmFsdWUuZ2V0SG91cnMoKSx0aGlzLnZhbHVlLmdldE1pbnV0ZXMoKSx0aGlzLnZhbHVlLmdldFNlY29uZHMoKSksdGhpcy5zdGFydEF0JiZuLmdldFRpbWUoKTxuZXcgRGF0ZSh0aGlzLnN0YXJ0QXQpLmdldFRpbWUoKT9uPW5ldyBEYXRlKHRoaXMuc3RhcnRBdCk6dGhpcy5lbmRBdCYmbi5nZXRUaW1lKCk+bmV3IERhdGUodGhpcy5lbmRBdCkuZ2V0VGltZSgpJiYobj1uZXcgRGF0ZSh0aGlzLmVuZEF0KSksdGhpcy5jdXJyZW50UGFuZWw9XCJ0aW1lXCIsdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKXtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHQuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubXgtdGltZS1saXN0LXdyYXBwZXJcIiksZnVuY3Rpb24oZSl7dC5zY3JvbGxJbnRvVmlldyhlLGUucXVlcnlTZWxlY3RvcihcIi5jdXItdGltZVwiKSl9KX0pKSx0aGlzLm5vdz1uLHRoaXMuJGVtaXQoXCJpbnB1dFwiLG4pLHRoaXMuJGVtaXQoXCJzZWxlY3RcIil9fSxpc0Rpc2FibGVkWWVhcjpmdW5jdGlvbihlKXtpZih0aGlzLnZhbHVlKXt2YXIgdD1uZXcgRGF0ZSh0aGlzLm5vdykuc2V0RnVsbFllYXIoZSk7cmV0dXJuIHRoaXMuaXNEaXNhYmxlZCh0KX1yZXR1cm4hMX0saXNEaXNhYmxlZE1vbnRoOmZ1bmN0aW9uKGUpe2lmKHRoaXMudmFsdWUpe3ZhciB0PW5ldyBEYXRlKHRoaXMubm93KS5zZXRNb250aChlKTtyZXR1cm4gdGhpcy5pc0Rpc2FibGVkKHQpfXJldHVybiExfSxzZWxlY3RZZWFyOmZ1bmN0aW9uKGUpe2lmKCF0aGlzLmlzRGlzYWJsZWRZZWFyKGUpKXt2YXIgdD1uZXcgRGF0ZSh0aGlzLm5vdyk7dC5zZXRGdWxsWWVhcihlKSx0aGlzLm5vdz10LHRoaXMudmFsdWUmJih0aGlzLiRlbWl0KFwiaW5wdXRcIix0KSx0aGlzLiRlbWl0KFwic2VsZWN0XCIsITApKSx0aGlzLmN1cnJlbnRQYW5lbD1cIm1vbnRoc1wifX0sc2VsZWN0TW9udGg6ZnVuY3Rpb24oZSl7aWYoIXRoaXMuaXNEaXNhYmxlZE1vbnRoKGUpKXt2YXIgdD1uZXcgRGF0ZSh0aGlzLm5vdyk7dC5zZXRNb250aChlKSx0aGlzLm5vdz10LHRoaXMudmFsdWUmJih0aGlzLiRlbWl0KFwiaW5wdXRcIix0KSx0aGlzLiRlbWl0KFwic2VsZWN0XCIsITApKSx0aGlzLmN1cnJlbnRQYW5lbD1cImRhdGVcIn19LHNlbGVjdFRpbWU6ZnVuY3Rpb24oZSx0KXtpZigtMT09PXRoaXMuZ2V0VGltZUNsYXNzZXMoZSx0KS5pbmRleE9mKFwiZGlzYWJsZWRcIikpe3ZhciBuPW5ldyBEYXRlKHRoaXMubm93KTswPT09dD9uLnNldEhvdXJzKGUpOjE9PT10P24uc2V0TWludXRlcyhlKToyPT09dCYmbi5zZXRTZWNvbmRzKGUpLHRoaXMubm93PW4sdGhpcy4kZW1pdChcImlucHV0XCIsbiksdGhpcy4kZW1pdChcInNlbGVjdFwiKX19LHBpY2tUaW1lOmZ1bmN0aW9uKGUpe2lmKC0xPT09dGhpcy5nZXRUaW1lQ2xhc3Nlcyg2MCplLmhvdXJzK2UubWludXRlcywtMSkuaW5kZXhPZihcImRpc2FibGVkXCIpKXt2YXIgdD1uZXcgRGF0ZSh0aGlzLm5vdyk7dC5zZXRIb3VycyhlLmhvdXJzLGUubWludXRlcywwKSx0aGlzLm5vdz10LHRoaXMuJGVtaXQoXCJpbnB1dFwiLHQpLHRoaXMuJGVtaXQoXCJzZWxlY3RcIil9fX19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9bigxMCksYT1uKDQpLHI9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgaSBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLGkpJiYoZVtpXT1uW2ldKX1yZXR1cm4gZX0scz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT09ZSYmXCJvYmplY3RcIj09PSh2b2lkIDA9PT1lP1widW5kZWZpbmVkXCI6cyhlKSl9O3QuYT17bmFtZTpcIkRhdGVQaWNrZXJcIixjb21wb25lbnRzOntDYWxlbmRhclBhbmVsOmkuYX0scHJvcHM6e3ZhbHVlOm51bGwsZm9ybWF0Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwieXl5eS1NTS1kZFwifSxjdXN0b21Gb3JtYXR0ZXI6e3R5cGU6RnVuY3Rpb259LHJhbmdlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sdHlwZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcImRhdGVcIn0sd2lkdGg6e3R5cGU6W1N0cmluZyxOdW1iZXJdLGRlZmF1bHQ6MjEwfSxwbGFjZWhvbGRlcjpTdHJpbmcsbGFuZzp7dHlwZTpbU3RyaW5nLE9iamVjdF0sZGVmYXVsdDpcInpoXCJ9LHNob3J0Y3V0czp7dHlwZTpbQm9vbGVhbixBcnJheV0sZGVmYXVsdDohMH0sZGlzYWJsZWREYXlzOnt0eXBlOkFycmF5LGRlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm5bXX19LG5vdEJlZm9yZTp7ZGVmYXVsdDpcIlwifSxub3RBZnRlcjp7ZGVmYXVsdDpcIlwifSxmaXJzdERheU9mV2Vlazp7ZGVmYXVsdDo3LHR5cGU6TnVtYmVyLHZhbGlkYXRvcjpmdW5jdGlvbihlKXtyZXR1cm4gZT49MSYmZTw9N319LG1pbnV0ZVN0ZXA6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MCx2YWxpZGF0b3I6ZnVuY3Rpb24oZSl7cmV0dXJuIGU+PTAmJmU8PTYwfX0sdGltZVBpY2tlck9wdGlvbnM6e3R5cGU6W09iamVjdCxGdW5jdGlvbl0sZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybiBudWxsfX0sY29uZmlybTp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGlucHV0Q2xhc3M6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJteC1pbnB1dFwifSxjb25maXJtVGV4dDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIk9LXCJ9LGRpc2FibGVkOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sZWRpdGFibGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxyYW5nZVNlcGFyYXRvcjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIn5cIn0saW5wdXROYW1lOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiZGF0ZVwifX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntzaG93UG9wdXA6ITEsc2hvd0Nsb3NlSWNvbjohMSxjdXJyZW50VmFsdWU6dGhpcy52YWx1ZSxwb3NpdGlvbjpudWxsLHVzZXJJbnB1dDpudWxsLHJhbmdlczpbXX19LHdhdGNoOnt2YWx1ZTp7aGFuZGxlcjpmdW5jdGlvbihlKXt0aGlzLnJhbmdlP3RoaXMuY3VycmVudFZhbHVlPXRoaXMuaXNWYWxpZFJhbmdlKGUpP2Uuc2xpY2UoMCwyKTpbdm9pZCAwLHZvaWQgMF06dGhpcy5jdXJyZW50VmFsdWU9dGhpcy5pc1ZhbGlkRGF0ZShlKT9lOnZvaWQgMH0saW1tZWRpYXRlOiEwfSxzaG93UG9wdXA6ZnVuY3Rpb24oZSl7ZT90aGlzLiRuZXh0VGljayh0aGlzLmRpc3BsYXlQb3B1cCk6dGhpcy51c2VySW5wdXQ9bnVsbH19LGNvbXB1dGVkOnt0cmFuc2xhdGlvbjpmdW5jdGlvbigpe3JldHVybiBvKHRoaXMubGFuZyk/cih7fSxhLmEuZW4sdGhpcy5sYW5nKTphLmFbdGhpcy5sYW5nXXx8YS5hLmVufSxpbm5lclBsYWNlaG9sZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGxhY2Vob2xkZXJ8fCh0aGlzLnJhbmdlP3RoaXMudHJhbnNsYXRpb24ucGxhY2Vob2xkZXIuZGF0ZVJhbmdlOnRoaXMudHJhbnNsYXRpb24ucGxhY2Vob2xkZXIuZGF0ZSl9LHRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5yYW5nZSYmdGhpcy5pc1ZhbGlkRGF0ZSh0aGlzLnZhbHVlKT9udWxsIT09dGhpcy51c2VySW5wdXQ/dGhpcy51c2VySW5wdXQ6dGhpcy5zdHJpbmdpZnkodGhpcy52YWx1ZSk6dGhpcy5yYW5nZSYmdGhpcy5pc1ZhbGlkUmFuZ2UodGhpcy52YWx1ZSk/dGhpcy5zdHJpbmdpZnkodGhpcy52YWx1ZVswXSkrXCIgXCIrdGhpcy5yYW5nZVNlcGFyYXRvcitcIiBcIit0aGlzLnN0cmluZ2lmeSh0aGlzLnZhbHVlWzFdKTpcIlwifSxjb21wdXRlZFdpZHRoOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMud2lkdGgmJi9eXFxkKyQvLnRlc3QodGhpcy53aWR0aCl8fFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLndpZHRoP3RoaXMud2lkdGgrXCJweFwiOnRoaXMud2lkdGh9fSxtZXRob2RzOntoYW5kbGVJbnB1dDpmdW5jdGlvbihlKXt0aGlzLnVzZXJJbnB1dD1lLnRhcmdldC52YWx1ZX0saGFuZGxlQ2hhbmdlOmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LnZhbHVlLG49dGhpcy5wYXJzZURhdGUodCx0aGlzLmZvcm1hdCk7aWYobiYmdGhpcy5lZGl0YWJsZSYmIXRoaXMucmFuZ2Upe2lmKHRoaXMubm90QmVmb3JlJiZuPG5ldyBEYXRlKHRoaXMubm90QmVmb3JlKSlyZXR1cm47aWYodGhpcy5ub3RBZnRlciYmbj5uZXcgRGF0ZSh0aGlzLm5vdEFmdGVyKSlyZXR1cm47Zm9yKHZhciBpPTAsYT10aGlzLmRpc2FibGVkRGF5cy5sZW5ndGg7aTxhO2krKylpZihuLmdldFRpbWUoKT09PW5ldyBEYXRlKHRoaXMuZGlzYWJsZWREYXlzW2ldKS5nZXRUaW1lKCkpcmV0dXJuO3RoaXMuJGVtaXQoXCJpbnB1dFwiLG4pLHRoaXMuJGVtaXQoXCJjaGFuZ2VcIixuKSx0aGlzLmNsb3NlUG9wdXAoKX19LHVwZGF0ZURhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmN1cnJlbnRWYWx1ZTsoIXRoaXMucmFuZ2UmJmV8fHRoaXMucmFuZ2UmJmVbMF0mJmVbMV0pJiYodGhpcy4kZW1pdChcImlucHV0XCIsZSksdGhpcy4kZW1pdChcImNoYW5nZVwiLGUpKX0sY29uZmlybURhdGU6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZURhdGUoKSx0aGlzLmNsb3NlUG9wdXAoKSx0aGlzLiRlbWl0KFwiY29uZmlybVwiLHRoaXMuY3VycmVudFZhbHVlKX0sc2VsZWN0RGF0ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07dGhpcy5jb25maXJtfHx0aGlzLmRpc2FibGVkfHwodGhpcy51cGRhdGVEYXRlKCksZXx8XCJkYXRlXCIhPT10aGlzLnR5cGV8fHRoaXMucmFuZ2V8fHRoaXMuY2xvc2VQb3B1cCgpKX0sY2xvc2VQb3B1cDpmdW5jdGlvbigpe3RoaXMuc2hvd1BvcHVwPSExfSx0b2dnbGVQb3B1cDpmdW5jdGlvbigpe3RoaXMuc2hvd1BvcHVwPyh0aGlzLiRyZWZzLmlucHV0LmJsdXIoKSx0aGlzLnNob3dQb3B1cD0hMSk6KHRoaXMuJHJlZnMuaW5wdXQuZm9jdXMoKSx0aGlzLnNob3dQb3B1cD0hMCl9LGhvdmVySWNvbjpmdW5jdGlvbihlKXt0aGlzLmRpc2FibGVkfHwoXCJtb3VzZWVudGVyXCI9PT1lLnR5cGUmJnRoaXMudGV4dCYmKHRoaXMuc2hvd0Nsb3NlSWNvbj0hMCksXCJtb3VzZWxlYXZlXCI9PT1lLnR5cGUmJih0aGlzLnNob3dDbG9zZUljb249ITEpKX0sY2xpY2tJY29uOmZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlZHx8KHRoaXMuc2hvd0Nsb3NlSWNvbj8odGhpcy4kZW1pdChcImlucHV0XCIsXCJcIiksdGhpcy4kZW1pdChcImNoYW5nZVwiLFwiXCIpKTp0aGlzLnRvZ2dsZVBvcHVwKCkpfSxwYXJzZURhdGU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOlwieXl5eS1NTS1kZFwiLG49ITAsaT17eTowLE06MSxkOjAsSDowLGg6MCxtOjAsczowfTtyZXR1cm4gdC5yZXBsYWNlKC8oW155TWRIaG1zXSo/KSgoW3lNZEhobXNdKVxcMyopKFteeU1kSGhtc10qPykvZyxmdW5jdGlvbih0LGEscixzLG8sbCxjKXt2YXIgdT1uZXcgUmVnRXhwKGErXCIoXFxcXGR7XCIrci5sZW5ndGgrXCJ9KVwiK28pO3JldHVybi0xPT09ZS5zZWFyY2godSk/bj0hMTplPWUucmVwbGFjZSh1LGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGlbc109cGFyc2VJbnQodCksXCJcIn0pLFwiXCJ9KSwhIW4mJihpLk0tLSxuZXcgRGF0ZShpLnksaS5NLGkuZCxpLkh8fGkuaCxpLm0saS5zKSl9LGZvcm1hdERhdGU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOlwieXl5eS1NTS1kZCBISDptbTpzc1wiLG49ZS5nZXRIb3VycygpLGk9e1wiTStcIjplLmdldE1vbnRoKCkrMSxcIltEZF0rXCI6ZS5nZXREYXRlKCksXCJIK1wiOm4sXCJoK1wiOm4lMTJ8fDEyLFwibStcIjplLmdldE1pbnV0ZXMoKSxcInMrXCI6ZS5nZXRTZWNvbmRzKCksXCJxK1wiOk1hdGguZmxvb3IoKGUuZ2V0TW9udGgoKSszKS8zKSxTOmUuZ2V0TWlsbGlzZWNvbmRzKCksYTpuPj0xMj9cInBtXCI6XCJhbVwiLEE6bj49MTI/XCJQTVwiOlwiQU1cIn0sYT10LnJlcGxhY2UoL1tZeV0rL2csZnVuY3Rpb24odCl7cmV0dXJuKFwiXCIrZS5nZXRGdWxsWWVhcigpKS5zbGljZSg0LXQubGVuZ3RoKX0pO3JldHVybiBPYmplY3Qua2V5cyhpKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2E9YS5yZXBsYWNlKG5ldyBSZWdFeHAoZSksZnVuY3Rpb24odCl7dmFyIG49XCJcIitpW2VdO3JldHVybiAxPT09dC5sZW5ndGg/bjooXCIwMFwiK24pLnNsaWNlKG4ubGVuZ3RoKX0pfSksYX0sc3RyaW5naWZ5OmZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuY3VzdG9tRm9ybWF0dGVyP3RoaXMuY3VzdG9tRm9ybWF0dGVyKG5ldyBEYXRlKGUpKTp0aGlzLmZvcm1hdERhdGUobmV3IERhdGUoZSksdGhpcy5mb3JtYXQpfSxpc1ZhbGlkRGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4hIW5ldyBEYXRlKGUpLmdldFRpbWUoKX0saXNWYWxpZFJhbmdlOmZ1bmN0aW9uKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpJiYyPT09ZS5sZW5ndGgmJnRoaXMuaXNWYWxpZERhdGUoZVswXSkmJnRoaXMuaXNWYWxpZERhdGUoZVsxXSl9LHNlbGVjdFJhbmdlOmZ1bmN0aW9uKGUpe3RoaXMuJGVtaXQoXCJpbnB1dFwiLFtlLnN0YXJ0LGUuZW5kXSksdGhpcy4kZW1pdChcImNoYW5nZVwiLFtlLnN0YXJ0LGUuZW5kXSl9LGluaXRSYW5nZXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO0FycmF5LmlzQXJyYXkodGhpcy5zaG9ydGN1dHMpP3RoaXMucmFuZ2VzPXRoaXMuc2hvcnRjdXRzOnRoaXMuc2hvcnRjdXRzPyh0aGlzLnJhbmdlcz1be3RleHQ6XCLmnKrmnaU35aSpXCIsc3RhcnQ6bmV3IERhdGUsZW5kOm5ldyBEYXRlKERhdGUubm93KCkrNjA0OGU1KX0se3RleHQ6XCLmnKrmnaUzMOWkqVwiLHN0YXJ0Om5ldyBEYXRlLGVuZDpuZXcgRGF0ZShEYXRlLm5vdygpKzI1OTJlNil9LHt0ZXh0Olwi5pyA6L+RN+WkqVwiLHN0YXJ0Om5ldyBEYXRlKERhdGUubm93KCktNjA0OGU1KSxlbmQ6bmV3IERhdGV9LHt0ZXh0Olwi5pyA6L+RMzDlpKlcIixzdGFydDpuZXcgRGF0ZShEYXRlLm5vdygpLTI1OTJlNiksZW5kOm5ldyBEYXRlfV0sdGhpcy5yYW5nZXMuZm9yRWFjaChmdW5jdGlvbih0LG4pe3QudGV4dD1lLnRyYW5zbGF0aW9uLnBpY2tlcnNbbl19KSk6dGhpcy5yYW5nZXM9W119LGRpc3BsYXlQb3B1cDpmdW5jdGlvbigpe2lmKCF0aGlzLmRpc2FibGVkKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsdD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LG49dGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT10aGlzLiRyZWZzLmNhbGVuZGFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3RoaXMucG9zaXRpb249e30sZS1uLmxlZnQ8aS53aWR0aCYmbi5yaWdodDxpLndpZHRoP3RoaXMucG9zaXRpb24ubGVmdD0xLW4ubGVmdCtcInB4XCI6bi5sZWZ0K24ud2lkdGgvMjw9ZS8yP3RoaXMucG9zaXRpb24ubGVmdD0wOnRoaXMucG9zaXRpb24ucmlnaHQ9MCxuLnRvcDw9aS5oZWlnaHQrMSYmdC1uLmJvdHRvbTw9aS5oZWlnaHQrMT90aGlzLnBvc2l0aW9uLnRvcD10LW4udG9wLWkuaGVpZ2h0LTErXCJweFwiOm4udG9wK24uaGVpZ2h0LzI8PXQvMj90aGlzLnBvc2l0aW9uLnRvcD1cIjEwMCVcIjp0aGlzLnBvc2l0aW9uLmJvdHRvbT1cIjEwMCVcIn19fSxjcmVhdGVkOmZ1bmN0aW9uKCl7dGhpcy5pbml0UmFuZ2VzKCl9LGRpcmVjdGl2ZXM6e2NsaWNrb3V0c2lkZTp7YmluZDpmdW5jdGlvbihlLHQsbil7ZVtcIkBjbGlja291dHNpZGVcIl09ZnVuY3Rpb24oaSl7IWUuY29udGFpbnMoaS50YXJnZXQpJiZ0LmV4cHJlc3Npb24mJm4uY29udGV4dFt0LmV4cHJlc3Npb25dJiZ0LnZhbHVlKCl9LGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGVbXCJAY2xpY2tvdXRzaWRlXCJdLCEwKX0sdW5iaW5kOmZ1bmN0aW9uKGUpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGVbXCJAY2xpY2tvdXRzaWRlXCJdLCEwKX19fX19LGZ1bmN0aW9uKGUsdCxuKXt0PWUuZXhwb3J0cz1uKDApKCksdC5wdXNoKFtlLmksJy5teC1kYXRlcGlja2Vye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbG9yOiM3Mzg3OWM7Zm9udDoxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsTWljcm9zb2Z0IFlhaGVpLHNhbnMtc2VyaWZ9Lm14LWRhdGVwaWNrZXIgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm14LWRhdGVwaWNrZXIuZGlzYWJsZWR7b3BhY2l0eTouNztjdXJzb3I6bm90LWFsbG93ZWR9Lm14LWRhdGVwaWNrZXItcG9wdXB7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjUwcHg7bWFyZ2luLXRvcDoxcHg7bWFyZ2luLWJvdHRvbToxcHg7Ym9yZGVyOjFweCBzb2xpZCAjZDlkOWQ5O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTt6LWluZGV4OjEwMDB9Lm14LWRhdGVwaWNrZXItcG9wdXAucmFuZ2V7d2lkdGg6NDk2cHh9Lm14LWlucHV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjM0cHg7cGFkZGluZzo2cHggMzBweCA2cHggMTBweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjQ7Y29sb3I6IzU1NTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSl9Lm14LWlucHV0LmRpc2FibGVkLC5teC1pbnB1dDpkaXNhYmxlZHtvcGFjaXR5Oi43O2N1cnNvcjpub3QtYWxsb3dlZH0ubXgtaW5wdXQ6Zm9jdXN7b3V0bGluZTpub25lfS5teC1pbnB1dC1pY29ue3RvcDowO3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzBweDtoZWlnaHQ6MTAwJTtjb2xvcjojODg4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc3R5bGU6bm9ybWFsfS5teC1pbnB1dC1pY29uOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDowO2hlaWdodDoxMDAlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubXgtaW5wdXQtaWNvbl9fY2FsZW5kYXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQTAwbEVRVlE0VDcyU3pRMkNRQkNGNTRVR0tJRVM2RUFzd1FxMEJTL0EzUFEwaEF0MG9LVlFnaVZZQWtjdVpNd1NNT3lDeVJLTmU5dWYrZDZiMlFmNmNzR3RMOHN5N3Z1K1plYm4vRTVFb2lBSXdqUk5IL1B6QlVCRUdpSnFtUG5pQU13K1llWmtGU0FpSndBM2o0NWFWVDB3c3hHaXR3T2pER0RuQVNCVnZVNE9MUUFSUlVSazllNENBY1NxV244Q0xIcDNBZTZNWEFlL0I0eXpVZU1rei9QOVpnZEZVUXpGSXdEL0I0eUtnd01Ub3MwT3R2ekNIY0RSSjBnQXpsbVcxVllTcTZvS3U2NkxmUUJUakMyQVQrSGFteGNtbDVJUnBQcTNWUUFBQUFCSlJVNUVya0pnZ2c9PSk7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5teC1pbnB1dC1pY29uX19jbG9zZTpiZWZvcmV7Y29udGVudDpcIlxcXFwyNzE2XCI7dmVydGljYWwtYWxpZ246bWlkZGxlfS5teC1kYXRlcGlja2VyLXRvcHt0ZXh0LWFsaWduOmxlZnQ7cGFkZGluZzowIDEycHg7bGluZS1oZWlnaHQ6MzRweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNSl9Lm14LWRhdGVwaWNrZXItdG9wPnNwYW57d2hpdGUtc3BhY2U6bm93cmFwO2N1cnNvcjpwb2ludGVyfS5teC1kYXRlcGlja2VyLXRvcD5zcGFuOmhvdmVye2NvbG9yOiMxMjg0ZTd9Lm14LWRhdGVwaWNrZXItdG9wPnNwYW46YWZ0ZXJ7Y29udGVudDpcInxcIjttYXJnaW46MCAxMHB4O2NvbG9yOiM0ODU3NmF9Lm14LWRhdGVwaWNrZXItZm9vdGVye3BhZGRpbmc6NHB4O2NsZWFyOmJvdGg7dGV4dC1hbGlnbjpyaWdodDtib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNSl9Lm14LWRhdGVwaWNrZXItYnRue2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE7cGFkZGluZzo3cHggMTVweDttYXJnaW46MCA1cHg7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtvdXRsaW5lOm5vbmU7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czozcHh9Lm14LWRhdGVwaWNrZXItYnRuLWNvbmZpcm17Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtjb2xvcjojNzM4NzljfS5teC1kYXRlcGlja2VyLWJ0bi1jb25maXJtOmhvdmVye2NvbG9yOiMxMjg0ZTc7Ym9yZGVyLWNvbG9yOiMxMjg0ZTd9JyxcIlwiXSl9LGZ1bmN0aW9uKGUsdCxuKXt0PWUuZXhwb3J0cz1uKDApKCksdC5wdXNoKFtlLmksXCIubXgtY2FsZW5kYXJ7ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlO3BhZGRpbmc6NnB4IDEycHh9Lm14LWNhbGVuZGFyIGF7Y29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcn0ubXgtY2FsZW5kYXItaGVhZGVye2xpbmUtaGVpZ2h0OjM0cHg7dGV4dC1hbGlnbjpjZW50ZXJ9Lm14LWNhbGVuZGFyLWhlYWRlcj5hOmhvdmVye2NvbG9yOiMxMjg0ZTd9Lm14LWNhbGVuZGFyX19uZXh0LWljb24sLm14LWNhbGVuZGFyX19wcmV2LWljb257Zm9udC1zaXplOjIwcHg7cGFkZGluZzowIDZweH0ubXgtY2FsZW5kYXJfX3ByZXYtaWNvbntmbG9hdDpsZWZ0fS5teC1jYWxlbmRhcl9fbmV4dC1pY29ue2Zsb2F0OnJpZ2h0fS5teC1jYWxlbmRhci1jb250ZW50e2hlaWdodDoyMjRweDtvdmVyZmxvdzpoaWRkZW59Lm14LWNhbGVuZGFyLXRhYmxle3dpZHRoOjEwMCU7Zm9udC1zaXplOjEycHg7dGFibGUtbGF5b3V0OmZpeGVkO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowfS5teC1jYWxlbmRhci10YWJsZSAudG9kYXl7Y29sb3I6IzIwYTBmZn0ubXgtY2FsZW5kYXItdGFibGUgLmxhc3RNb250aCwubXgtY2FsZW5kYXItdGFibGUgLm5leHRNb250aHtjb2xvcjojZGRkfS5teC1jYWxlbmRhci10YWJsZSB0ZCwubXgtY2FsZW5kYXItdGFibGUgdGh7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDt0ZXh0LWFsaWduOmNlbnRlcn0ubXgtY2FsZW5kYXItdGFibGUgdGR7Y3Vyc29yOnBvaW50ZXJ9Lm14LWNhbGVuZGFyLW1vbnRoPmE6aG92ZXIsLm14LWNhbGVuZGFyLXRhYmxlIHRkLmlucmFuZ2UsLm14LWNhbGVuZGFyLXRhYmxlIHRkOmhvdmVyLC5teC1jYWxlbmRhci15ZWFyPmE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWFmOGZlfS5teC1jYWxlbmRhci1tb250aD5hLmN1cnJlbnQsLm14LWNhbGVuZGFyLXRhYmxlIHRkLmN1cnJlbnQsLm14LWNhbGVuZGFyLXllYXI+YS5jdXJyZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMTI4NGU3fS5teC1jYWxlbmRhci1tb250aCBhLmRpc2FibGVkLC5teC1jYWxlbmRhci10YWJsZSB0ZC5kaXNhYmxlZCwubXgtY2FsZW5kYXIteWVhciBhLmRpc2FibGVkLC5teC10aW1lLWl0ZW0uZGlzYWJsZWR7Y3Vyc29yOm5vdC1hbGxvd2VkO2NvbG9yOiNjY2M7YmFja2dyb3VuZC1jb2xvcjojZjNmM2YzfS5teC1jYWxlbmRhci1tb250aCwubXgtY2FsZW5kYXItdGltZSwubXgtY2FsZW5kYXIteWVhcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BhZGRpbmc6N3B4IDA7dGV4dC1hbGlnbjpjZW50ZXJ9Lm14LWNhbGVuZGFyLXllYXI+YXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo0MCU7bWFyZ2luOjFweCA1JTtsaW5lLWhlaWdodDo0MHB4fS5teC1jYWxlbmRhci1tb250aD5he2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjMwJTtsaW5lLWhlaWdodDo0MHB4O21hcmdpbjo4cHggMS41JX0ubXgtdGltZS1saXN0LXdyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNSk7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjA1KTtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3cteTphdXRvfS5teC10aW1lLWxpc3Qtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6OHB4O2hlaWdodDo4cHh9Lm14LXRpbWUtbGlzdC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA1KTtib3JkZXItcmFkaXVzOjEwcHg7Ym94LXNoYWRvdzppbnNldCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMSl9Lm14LXRpbWUtbGlzdC13cmFwcGVyOmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjIpfS5teC10aW1lLWxpc3Qtd3JhcHBlcjpmaXJzdC1jaGlsZHtib3JkZXItbGVmdDowfS5teC10aW1lLXBpY2tlci1pdGVte3RleHQtYWxpZ246bGVmdDtwYWRkaW5nLWxlZnQ6MTBweH0ubXgtdGltZS1saXN0e21hcmdpbjowO3BhZGRpbmc6MDtsaXN0LXN0eWxlOm5vbmV9Lm14LXRpbWUtaXRlbXt3aWR0aDoxMDAlO2ZvbnQtc2l6ZToxMnB4O2hlaWdodDozMHB4O2xpbmUtaGVpZ2h0OjMwcHg7Y3Vyc29yOnBvaW50ZXJ9Lm14LXRpbWUtaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlYWY4ZmV9Lm14LXRpbWUtaXRlbS5jdXItdGltZXtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzEyODRlN31cIixcIlwiXSl9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKGUpe24oMTQpfXZhciBhPW4oNikscj1uKDEyKSxzPW4oMSksbz1pLGw9cyhhLmEsci5hLCExLG8sbnVsbCxudWxsKTt0LmE9bC5leHBvcnRzfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxuPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIG4oXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJjbGlja291dHNpZGVcIixyYXdOYW1lOlwidi1jbGlja291dHNpZGVcIix2YWx1ZTplLmNsb3NlUG9wdXAsZXhwcmVzc2lvbjpcImNsb3NlUG9wdXBcIn1dLHN0YXRpY0NsYXNzOlwibXgtZGF0ZXBpY2tlclwiLGNsYXNzOntkaXNhYmxlZDplLmRpc2FibGVkfSxzdHlsZTp7d2lkdGg6ZS5jb21wdXRlZFdpZHRoLFwibWluLXdpZHRoXCI6ZS5yYW5nZT9cImRhdGV0aW1lXCI9PT1lLnR5cGU/XCIzMjBweFwiOlwiMjEwcHhcIjpcIjE0MHB4XCJ9fSxbbihcImlucHV0XCIse3JlZjpcImlucHV0XCIsY2xhc3M6ZS5pbnB1dENsYXNzLGF0dHJzOntuYW1lOmUuaW5wdXROYW1lLGRpc2FibGVkOmUuZGlzYWJsZWQscmVhZG9ubHk6IWUuZWRpdGFibGV8fGUucmFuZ2UscGxhY2Vob2xkZXI6ZS5pbm5lclBsYWNlaG9sZGVyfSxkb21Qcm9wczp7dmFsdWU6ZS50ZXh0fSxvbjp7bW91c2VlbnRlcjplLmhvdmVySWNvbixtb3VzZWxlYXZlOmUuaG92ZXJJY29uLGNsaWNrOmUudG9nZ2xlUG9wdXAsaW5wdXQ6ZS5oYW5kbGVJbnB1dCxjaGFuZ2U6ZS5oYW5kbGVDaGFuZ2UsbW91c2Vkb3duOmZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKX19fSksZS5fdihcIiBcIiksbihcImlcIix7c3RhdGljQ2xhc3M6XCJteC1pbnB1dC1pY29uXCIsY2xhc3M6ZS5zaG93Q2xvc2VJY29uP1wibXgtaW5wdXQtaWNvbl9fY2xvc2VcIjpcIm14LWlucHV0LWljb25fX2NhbGVuZGFyXCIsb246e21vdXNlZW50ZXI6ZS5ob3Zlckljb24sbW91c2VsZWF2ZTplLmhvdmVySWNvbixjbGljazplLmNsaWNrSWNvbn19KSxlLl92KFwiIFwiKSxuKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLnNob3dQb3B1cCxleHByZXNzaW9uOlwic2hvd1BvcHVwXCJ9XSxyZWY6XCJjYWxlbmRhclwiLHN0YXRpY0NsYXNzOlwibXgtZGF0ZXBpY2tlci1wb3B1cFwiLGNsYXNzOntyYW5nZTplLnJhbmdlfSxzdHlsZTplLnBvc2l0aW9ufSxbZS5yYW5nZT9uKFwiZGl2XCIse3N0YXRpY1N0eWxlOntvdmVyZmxvdzpcImhpZGRlblwifX0sW2UucmFuZ2VzLmxlbmd0aD9uKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwibXgtZGF0ZXBpY2tlci10b3BcIn0sZS5fbChlLnJhbmdlcyxmdW5jdGlvbih0KXtyZXR1cm4gbihcInNwYW5cIix7b246e2NsaWNrOmZ1bmN0aW9uKG4pe2Uuc2VsZWN0UmFuZ2UodCl9fX0sW2UuX3YoZS5fcyh0LnRleHQpKV0pfSkpOmUuX2UoKSxlLl92KFwiIFwiKSxuKFwiY2FsZW5kYXItcGFuZWxcIix7c3RhdGljU3R5bGU6e3dpZHRoOlwiNTAlXCIsXCJib3gtc2hhZG93XCI6XCIxcHggMCByZ2JhKDAsIDAsIDAsIC4xKVwifSxhdHRyczp7XCJlbmQtYXRcIjplLmN1cnJlbnRWYWx1ZVsxXSxzaG93OmUuc2hvd1BvcHVwfSxvbjp7c2VsZWN0OmUuc2VsZWN0RGF0ZX0sbW9kZWw6e3ZhbHVlOmUuY3VycmVudFZhbHVlWzBdLGNhbGxiYWNrOmZ1bmN0aW9uKHQpe2UuJHNldChlLmN1cnJlbnRWYWx1ZSwwLHQpfSxleHByZXNzaW9uOlwiY3VycmVudFZhbHVlWzBdXCJ9fSksZS5fdihcIiBcIiksbihcImNhbGVuZGFyLXBhbmVsXCIse3N0YXRpY1N0eWxlOnt3aWR0aDpcIjUwJVwifSxhdHRyczp7XCJzdGFydC1hdFwiOmUuY3VycmVudFZhbHVlWzBdLHNob3c6ZS5zaG93UG9wdXB9LG9uOntzZWxlY3Q6ZS5zZWxlY3REYXRlfSxtb2RlbDp7dmFsdWU6ZS5jdXJyZW50VmFsdWVbMV0sY2FsbGJhY2s6ZnVuY3Rpb24odCl7ZS4kc2V0KGUuY3VycmVudFZhbHVlLDEsdCl9LGV4cHJlc3Npb246XCJjdXJyZW50VmFsdWVbMV1cIn19KV0sMSk6bihcImNhbGVuZGFyLXBhbmVsXCIse2F0dHJzOntzaG93OmUuc2hvd1BvcHVwfSxvbjp7c2VsZWN0OmUuc2VsZWN0RGF0ZX0sbW9kZWw6e3ZhbHVlOmUuY3VycmVudFZhbHVlLGNhbGxiYWNrOmZ1bmN0aW9uKHQpe2UuY3VycmVudFZhbHVlPXR9LGV4cHJlc3Npb246XCJjdXJyZW50VmFsdWVcIn19KSxlLl92KFwiIFwiKSxlLmNvbmZpcm0/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcIm14LWRhdGVwaWNrZXItZm9vdGVyXCJ9LFtuKFwiYnV0dG9uXCIse3N0YXRpY0NsYXNzOlwibXgtZGF0ZXBpY2tlci1idG4gbXgtZGF0ZXBpY2tlci1idG4tY29uZmlybVwiLGF0dHJzOnt0eXBlOlwiYnV0dG9uXCJ9LG9uOntjbGljazplLmNvbmZpcm1EYXRlfX0sW2UuX3YoXCIgXCIrZS5fcyhlLmNvbmZpcm1UZXh0KSldKV0pOmUuX2UoKV0sMSldKX0sYT1bXSxyPXtyZW5kZXI6aSxzdGF0aWNSZW5kZXJGbnM6YX07dC5hPXJ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRjcmVhdGVFbGVtZW50LG49ZS5fc2VsZi5fY3x8dDtyZXR1cm4gbihcImRpdlwiLHtzdGF0aWNDbGFzczpcIm14LWNhbGVuZGFyXCJ9LFtcInRpbWVcIj09PWUuY3VycmVudFBhbmVsP24oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJteC1jYWxlbmRhci1oZWFkZXJcIn0sW24oXCJhXCIse29uOntjbGljazpmdW5jdGlvbih0KXtlLmN1cnJlbnRQYW5lbD1cImRhdGVcIn19fSxbZS5fdihlLl9zKGUubm93LnRvTG9jYWxlRGF0ZVN0cmluZygpKSldKV0pOm4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJteC1jYWxlbmRhci1oZWFkZXJcIn0sW24oXCJhXCIse3N0YXRpY0NsYXNzOlwibXgtY2FsZW5kYXJfX3ByZXYtaWNvblwiLG9uOntjbGljazpmdW5jdGlvbih0KXtlLmNoYW5nZVllYXIoLTEpfX19LFtlLl92KFwiwqtcIildKSxlLl92KFwiIFwiKSxuKFwiYVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6XCJkYXRlXCI9PT1lLmN1cnJlbnRQYW5lbCxleHByZXNzaW9uOlwiY3VycmVudFBhbmVsID09PSAnZGF0ZSdcIn1dLHN0YXRpY0NsYXNzOlwibXgtY2FsZW5kYXJfX3ByZXYtaWNvblwiLG9uOntjbGljazpmdW5jdGlvbih0KXtlLmNoYW5nZU1vbnRoKC0xKX19fSxbZS5fdihcIuKAuVwiKV0pLGUuX3YoXCIgXCIpLG4oXCJhXCIse3N0YXRpY0NsYXNzOlwibXgtY2FsZW5kYXJfX25leHQtaWNvblwiLG9uOntjbGljazpmdW5jdGlvbih0KXtlLmNoYW5nZVllYXIoMSl9fX0sW2UuX3YoXCLCu1wiKV0pLGUuX3YoXCIgXCIpLG4oXCJhXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTpcImRhdGVcIj09PWUuY3VycmVudFBhbmVsLGV4cHJlc3Npb246XCJjdXJyZW50UGFuZWwgPT09ICdkYXRlJ1wifV0sc3RhdGljQ2xhc3M6XCJteC1jYWxlbmRhcl9fbmV4dC1pY29uXCIsb246e2NsaWNrOmZ1bmN0aW9uKHQpe2UuY2hhbmdlTW9udGgoMSl9fX0sW2UuX3YoXCLigLpcIildKSxlLl92KFwiIFwiKSxuKFwiYVwiLHtvbjp7Y2xpY2s6ZS5zaG93TW9udGhzfX0sW2UuX3YoZS5fcyhlLm1vbnRoc1tlLmN1cnJlbnRNb250aF0pKV0pLGUuX3YoXCIgXCIpLG4oXCJhXCIse29uOntjbGljazplLnNob3dZZWFyc319LFtlLl92KGUuX3MoZS5jdXJyZW50WWVhcikpXSldKSxlLl92KFwiIFwiKSxuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwibXgtY2FsZW5kYXItY29udGVudFwifSxbbihcInRhYmxlXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTpcImRhdGVcIj09PWUuY3VycmVudFBhbmVsLGV4cHJlc3Npb246XCJjdXJyZW50UGFuZWwgPT09ICdkYXRlJ1wifV0sc3RhdGljQ2xhc3M6XCJteC1jYWxlbmRhci10YWJsZVwifSxbbihcInRoZWFkXCIsW24oXCJ0clwiLGUuX2woZS5kYXlzLGZ1bmN0aW9uKHQsaSl7cmV0dXJuIG4oXCJ0aFwiLHtrZXk6aX0sW2UuX3YoZS5fcyh0KSldKX0pKV0pLGUuX3YoXCIgXCIpLG4oXCJ0Ym9keVwiLGUuX2woZS5kYXRlcyxmdW5jdGlvbih0KXtyZXR1cm4gbihcInRyXCIsZS5fbCh0LGZ1bmN0aW9uKHQpe3JldHVybiBuKFwidGRcIix7Y2xhc3M6ZS5nZXREYXRlQ2xhc3Nlcyh0KSxhdHRyczp7dGl0bGU6dC50aXRsZX0sb246e2NsaWNrOmZ1bmN0aW9uKG4pe2Uuc2VsZWN0RGF0ZSh0KX19fSxbZS5fdihlLl9zKHQuZGF5KSldKX0pKX0pKV0pLGUuX3YoXCIgXCIpLG4oXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOlwieWVhcnNcIj09PWUuY3VycmVudFBhbmVsLGV4cHJlc3Npb246XCJjdXJyZW50UGFuZWwgPT09ICd5ZWFycydcIn1dLHN0YXRpY0NsYXNzOlwibXgtY2FsZW5kYXIteWVhclwifSxlLl9sKGUueWVhcnMsZnVuY3Rpb24odCl7cmV0dXJuIG4oXCJhXCIse2NsYXNzOntjdXJyZW50OmUuY3VycmVudFllYXI9PT10LGRpc2FibGVkOmUuaXNEaXNhYmxlZFllYXIodCl9LG9uOntjbGljazpmdW5jdGlvbihuKXtlLnNlbGVjdFllYXIodCl9fX0sW2UuX3YoZS5fcyh0KSldKX0pKSxlLl92KFwiIFwiKSxuKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTpcIm1vbnRoc1wiPT09ZS5jdXJyZW50UGFuZWwsZXhwcmVzc2lvbjpcImN1cnJlbnRQYW5lbCA9PT0gJ21vbnRocydcIn1dLHN0YXRpY0NsYXNzOlwibXgtY2FsZW5kYXItbW9udGhcIn0sZS5fbChlLm1vbnRocyxmdW5jdGlvbih0LGkpe3JldHVybiBuKFwiYVwiLHtjbGFzczp7Y3VycmVudDplLmN1cnJlbnRNb250aD09PWksZGlzYWJsZWQ6ZS5pc0Rpc2FibGVkTW9udGgoaSl9LG9uOntjbGljazpmdW5jdGlvbih0KXtlLnNlbGVjdE1vbnRoKGkpfX19LFtlLl92KGUuX3ModCkpXSl9KSksZS5fdihcIiBcIiksbihcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6XCJ0aW1lXCI9PT1lLmN1cnJlbnRQYW5lbCxleHByZXNzaW9uOlwiY3VycmVudFBhbmVsID09PSAndGltZSdcIn1dLHN0YXRpY0NsYXNzOlwibXgtY2FsZW5kYXItdGltZVwifSxbZS50aW1lU2VsZWN0T3B0aW9ucy5sZW5ndGg/bihcImRpdlwiLHtzdGF0aWNDbGFzczpcIm14LXRpbWUtbGlzdC13cmFwcGVyXCJ9LFtuKFwidWxcIix7c3RhdGljQ2xhc3M6XCJteC10aW1lLWxpc3RcIn0sZS5fbChlLnRpbWVTZWxlY3RPcHRpb25zLGZ1bmN0aW9uKHQpe3JldHVybiBuKFwibGlcIix7c3RhdGljQ2xhc3M6XCJteC10aW1lLWl0ZW0gbXgtdGltZS1waWNrZXItaXRlbVwiLGNsYXNzOmUuZ2V0VGltZUNsYXNzZXMoNjAqdC52YWx1ZS5ob3Vycyt0LnZhbHVlLm1pbnV0ZXMsLTEpLG9uOntjbGljazpmdW5jdGlvbihuKXtlLnBpY2tUaW1lKHQudmFsdWUpfX19LFtlLl92KFwiXFxuICAgICAgICAgICAgXCIrZS5fcyh0LmxhYmVsKStcIlxcbiAgICAgICAgICBcIildKX0pKV0pOmUuX2woZS50aW1lcyxmdW5jdGlvbih0LGkpe3JldHVybiBuKFwiZGl2XCIse2tleTppLHN0YXRpY0NsYXNzOlwibXgtdGltZS1saXN0LXdyYXBwZXJcIixzdHlsZTp7d2lkdGg6MTAwL2UudGltZXMubGVuZ3RoK1wiJVwifX0sW24oXCJ1bFwiLHtzdGF0aWNDbGFzczpcIm14LXRpbWUtbGlzdFwifSxlLl9sKHQsZnVuY3Rpb24odCl7cmV0dXJuIG4oXCJsaVwiLHtrZXk6dCxzdGF0aWNDbGFzczpcIm14LXRpbWUtaXRlbVwiLGNsYXNzOmUuZ2V0VGltZUNsYXNzZXModCxpKSxvbjp7Y2xpY2s6ZnVuY3Rpb24obil7ZS5zZWxlY3RUaW1lKHQsaSl9fX0sW2UuX3YoZS5fcyhlLl9mKFwidGltZVRleHRcIikodCkpKV0pfSkpXSl9KV0sMildKV0pfSxhPVtdLHI9e3JlbmRlcjppLHN0YXRpY1JlbmRlckZuczphfTt0LmE9cn0sZnVuY3Rpb24oZSx0LG4pe3ZhciBpPW4oOCk7XCJzdHJpbmdcIj09dHlwZW9mIGkmJihpPVtbZS5pLGksXCJcIl1dKSxpLmxvY2FscyYmKGUuZXhwb3J0cz1pLmxvY2Fscyk7bigyKShcIjIzZTY3ODIyXCIsaSwhMCl9LGZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1uKDkpO1wic3RyaW5nXCI9PXR5cGVvZiBpJiYoaT1bW2UuaSxpLFwiXCJdXSksaS5sb2NhbHMmJihlLmV4cG9ydHM9aS5sb2NhbHMpO24oMikoXCI4MTE4ZWJjZVwiLGksITApfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXSxpPXt9LGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIHI9dFthXSxzPXJbMF0sbz1yWzFdLGw9clsyXSxjPXJbM10sdT17aWQ6ZStcIjpcIithLGNzczpvLG1lZGlhOmwsc291cmNlTWFwOmN9O2lbc10/aVtzXS5wYXJ0cy5wdXNoKHUpOm4ucHVzaChpW3NdPXtpZDpzLHBhcnRzOlt1XX0pfXJldHVybiBufX1dKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZTItZGF0ZXBpY2tlci9kaXN0L2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUyLWRhdGVwaWNrZXIvZGlzdC9idWlsZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Mb2dpbldpdGhTb2NpYWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTG9naW5XaXRoU29jaWFsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmRjNTI4MTZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Mb2dpbldpdGhTb2NpYWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXExvZ2luV2l0aFNvY2lhbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmRjNTI4MTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZGM1MjgxNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhTb2NpYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbldpdGhTb2NpYWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA0IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05NDA4NDk3MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFxzZXR0aW5nc1xcXFxwcm9maWxlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05NDA4NDk3MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTk0MDg0OTcyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=