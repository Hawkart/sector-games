webpackJsonp([40],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/MatchChat.vue":
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

var _ChatMessages = __webpack_require__("./resources/assets/js/components/ChatMessages.vue");

var _ChatMessages2 = _interopRequireDefault(_ChatMessages);

var _ChatNewMessage = __webpack_require__("./resources/assets/js/components/ChatNewMessage.vue");

var _ChatNewMessage2 = _interopRequireDefault(_ChatNewMessage);

var _ChatChannels = __webpack_require__("./resources/assets/js/components/ChatChannels.vue");

var _ChatChannels2 = _interopRequireDefault(_ChatChannels);

var _ChatParticipants = __webpack_require__("./resources/assets/js/components/ChatParticipants.vue");

var _ChatParticipants2 = _interopRequireDefault(_ChatParticipants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        ChatParticipants: _ChatParticipants2.default,
        ChatChannels: _ChatChannels2.default,
        ChatMessages: _ChatMessages2.default,
        ChatNewMessage: _ChatNewMessage2.default
    },
    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        authenticated: 'auth/check'
    })),
    props: ['channel'],
    data: function data() {
        return {
            participants: [],
            socket: null,
            messages: null,
            activeChannel: null,
            isTyping: false,
            typingTimer: false,
            showChats: false
        };
    },
    created: function created() {
        var _this = this;

        this.activeChannel = this.channel;
        this.fetchMessages();
        this.fetchParticipants();

        window.Echo.private("channel_" + this.channel.id.toString()).listen('MessageSent', function (data) {
            _this.messages.push(data.data);
            _this.isTyping = false;
        }).listenForWhisper('typing', function (e) {
            _this.isTyping = e;

            if (_this.typingTimer) clearTimeout(_this.typingTimer);

            _this.typingTimer = setTimeout(function () {
                _this.isTyping = false;
            }, 2000);
        });
    },

    methods: {
        fetchMessages: function fetchMessages() {
            var _this2 = this;

            if (this.activeChannel !== null) {
                _axios2.default.get('/api/channels/' + this.activeChannel.id + '/messages').then(function (_ref) {
                    var data = _ref.data;


                    var messages = data;
                    var _self = _this2;
                    messages.forEach(function (message) {
                        message.created_at = _self.dateConvertUTC(message.created_at, -1);
                    });

                    _this2.messages = messages;
                });
            }
        },
        fetchParticipants: function fetchParticipants() {
            var _this3 = this;

            if (this.activeChannel !== null) {
                _axios2.default.get('/api/channels/' + this.activeChannel.id + '/participants').then(function (_ref2) {
                    var data = _ref2.data;

                    _this3.participants = data;
                });
            }
        },
        onChannelChanged: function onChannelChanged(channel) {
            this.activeChannel = channel;

            this.fetchMessages();
            this.fetchParticipants();
        },
        onMessageAdded: function onMessageAdded(message) {}
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/matches/detail.vue":
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

var _vform = __webpack_require__("./node_modules/vform/dist/vform.js");

var _vform2 = _interopRequireDefault(_vform);

var _MatchChat = __webpack_require__("./resources/assets/js/components/MatchChat.vue");

var _MatchChat2 = _interopRequireDefault(_MatchChat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { MatchChat: _MatchChat2.default },
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
            fight: [],
            form: new _vform2.default({
                twitch_link: ''
            }),
            formResult: new _vform2.default({
                match_result: ''
            }),
            formFight: new _vform2.default({
                result: '',
                winner_id: ''
            }),
            result_1: '',
            result_2: '',
            winner_id: '',
            chat: null
        };
    },
    mounted: function mounted() {
        (0, _i18n.loadMessages)(this.locale);
        this.moment.locale(this.locale);
        this.getFight();
    },

    methods: {
        getFightChat: function getFightChat() {
            var _this = this;

            _axios2.default.get('/api/fights/' + this.$route.params.id + '/thread').then(function (response) {
                _this.$set(_this, 'chat', response.data);
            });
        },
        getFight: function getFight() {
            var _this2 = this;

            var query = this.ArrayToUrl({
                '_with': 'invitations.team,invitations.team.institution,invitations.team.institution.location,judge,commentator,threads'
            });

            _axios2.default.get('/api/fights/' + this.$route.params.id + "?" + query).then(function (response) {
                var fight = response.data;
                fight.start_at = _this2.dateConvertUTC(fight.start_at, -1);
                _this2.$set(_this2, 'fight', fight);

                if (_this2.authenticated) {
                    var _self = _this2;
                    if (_this2.fight.status != 3) {
                        _this2.fight.invitations.forEach(function (invitation) {
                            if (invitation.team.capt_id == _self.user.id) {
                                _self.form.twitch_link = invitation.twitch_link;

                                if (invitation.match_result != null) {
                                    _self.formResult.match_result = invitation.match_result;
                                    _self.result_1 = invitation.match_result.result_1;
                                    _self.result_2 = invitation.match_result.result_2;
                                    _self.winner_id = invitation.match_result.winner_id;
                                }
                            }
                        });
                    } else {
                        _this2.result_1 = _this2.fight.result[0];
                        _this2.result_2 = _this2.fight.result[1];
                        _this2.winner_id = _this2.fight.winner_id;
                    }

                    if (fight.invitations[0].team.capt_id == _this2.user.id || fight.invitations[1].team.capt_id == _this2.user.id || fight.judge_id == _this2.user.id || _this2.user.role_id == 1) _this2.getFightChat();
                }
            });
        },
        checkUpcoming: function checkUpcoming(start_at) {
            var d1 = new Date(start_at);
            var d2 = new Date();
            if (d1.getTime() - d2.getTime() > 0) return true;

            return false;
        },
        matchExSave: function matchExSave() {
            var _this3 = this;

            this.form.put('/api/fights/' + this.fight.id + '/teams/' + this.user.team_id).then(function (response) {

                var _self = _this3;
                _this3.fight.invitations.map(function (invitation) {
                    if (invitation.team.capt_id == _self.user.id) {
                        invitation.twitch_link = _self.form.twitch_link;
                    }
                });
            });
        },
        saveResult: function saveResult() {
            this.formResult.match_result = {
                'result_1': this.result_1,
                'result_2': this.result_2,
                'winner_id': this.winner_id
            };

            this.formResult.put('/api/fights/' + this.fight.id + '/teams/' + this.user.team_id);
        },
        saveFight: function saveFight() {
            this.formFight.result = [this.result_1, this.result_2];
            this.formFight.winner_id = this.winner_id;
            this.formFight.put('/api/fights/' + this.fight.id);
        }
    },
    watch: {
        '$route.query': function $routeQuery(newPage, oldPage) {
            this.getFights();
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46879016\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/MatchChat.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      _vm._l(_vm.participants, function(participant) {
        return _vm.participants != null
          ? _c("span", [_vm._v(_vm._s(participant.nickname) + ", ")])
          : _vm._e()
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "chat-window match-chat" }, [
      _c("div", { staticClass: "chat-cmplt-wrap chat-for-widgets-1" }, [
        _c("div", { staticClass: "recent-chat-box-wrap" }, [
          _c(
            "div",
            { staticClass: "recent-chat-wrap" },
            [
              _c(
                "div",
                { staticClass: "chat-content" },
                [
                  _c("chat-messages", {
                    attrs: { messages: _vm.messages, isTyping: _vm.isTyping }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("chat-new-message", {
                attrs: { "active-channel": _vm.activeChannel },
                on: { messageAdded: _vm.onMessageAdded }
              })
            ],
            1
          )
        ])
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-46879016", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f3f3e4ec\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/matches/detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.fight != null
    ? _c("card", [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
            [
              _c("div", { staticClass: "nk-match" }, [
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
                            params: { id: _vm.fight.invitations[0].team.id }
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "nk-match-team-logo" }, [
                          _c("img", {
                            staticClass: "w-64px mr-10",
                            attrs: {
                              src: _vm.getImageLink(
                                _vm.fight.invitations[0].team.image,
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
                                _vm.fight.invitations[0].team.institution.title
                              ) +
                              ", " +
                              _vm._s(
                                _vm.fight.invitations[0].team.institution
                                  .location.title
                              ) +
                              ","
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.fight.invitations[0].team.title) +
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
                          to: { name: "match", params: { id: _vm.fight.id } }
                        }
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "nk-match-status-vs" },
                          [
                            _vm.fight.id == 24
                              ? [_vm._v("VS (bo5)")]
                              : [_vm._v("VS (bo3)")]
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "nk-match-status-date" }, [
                          _vm._v(
                            _vm._s(
                              _vm.moment
                                .utc(_vm.fight.start_at, "YYYY-MM-DD h:mm:ss")
                                .format("MMMM Do, HH:mm")
                            ) + " МСК"
                          )
                        ]),
                        _vm._v(" "),
                        _vm.checkUpcoming(_vm.fight.start_at)
                          ? [
                              _c("span", { staticClass: "nk-match-score" }, [
                                _vm._v(_vm._s(_vm.$t("upcoming")))
                              ])
                            ]
                          : _vm.fight.winner_id > 0 && _vm.fight.result != null
                          ? [
                              _c(
                                "span",
                                { staticClass: "nk-match-score bg-dark-1" },
                                [
                                  parseInt(_vm.fight.result[0]) >
                                    parseInt(_vm.fight.result[1]) &&
                                  _vm.fight.invitations[0].team.id ==
                                    _vm.fight.winner_id
                                    ? [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.fight.result[0]) +
                                            " : " +
                                            _vm._s(_vm.fight.result[1]) +
                                            "\n                            "
                                        )
                                      ]
                                    : parseInt(_vm.fight.result[1]) >
                                        parseInt(_vm.fight.result[0]) &&
                                      _vm.fight.invitations[1].team.id ==
                                        _vm.fight.winner_id
                                    ? [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.fight.result[0]) +
                                            " : " +
                                            _vm._s(_vm.fight.result[1]) +
                                            "\n                            "
                                        )
                                      ]
                                    : [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(_vm.fight.result[1]) +
                                            " : " +
                                            _vm._s(_vm.fight.result[0]) +
                                            "\n                            "
                                        )
                                      ]
                                ],
                                2
                              )
                            ]
                          : [
                              _c(
                                "span",
                                { staticClass: "nk-match-score bg-success" },
                                [_vm._v(_vm._s(_vm.$t("online")))]
                              )
                            ]
                      ],
                      2
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
                            params: { id: _vm.fight.invitations[1].team.id }
                          }
                        }
                      },
                      [
                        _c("span", { staticClass: "nk-match-team-name" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(
                                _vm.fight.invitations[1].team.institution.title
                              ) +
                              ", " +
                              _vm._s(
                                _vm.fight.invitations[1].team.institution
                                  .location.title
                              ) +
                              ","
                          ),
                          _c("br"),
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.fight.invitations[1].team.title) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "nk-match-team-logo" }, [
                          _c("img", {
                            staticClass: "w-64px ml-10",
                            attrs: {
                              src: _vm.getImageLink(
                                _vm.fight.invitations[1].team.image,
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
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-20" }, [
          _c(
            "div",
            { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
            [
              _c(
                "div",
                { staticClass: "responsive-embed responsive-embed-16x9" },
                [
                  _c("iframe", {
                    attrs: {
                      src: "https://player.twitch.tv/?channel=youthleagueru",
                      frameborder: "0",
                      allowfullscreen: "true",
                      scrolling: "no",
                      height: "378",
                      width: "620"
                    }
                  })
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _vm.chat !== null &&
        (_vm.fight.invitations[0].team.capt_id == _vm.user.id ||
          _vm.fight.invitations[1].team.capt_id == _vm.user.id ||
          _vm.fight.judge_id == _vm.user.id ||
          _vm.user.role_id == 1)
          ? _c("div", { staticClass: "row mt-10 mb-30" }, [
              _c(
                "div",
                { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
                [_c("match-chat", { attrs: { channel: _vm.chat } })],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.authenticated &&
        _vm.fight.status != 2 &&
        _vm.fight.status != 3 &&
        (_vm.fight.invitations[0].team.capt_id == _vm.user.id ||
          _vm.fight.invitations[1].team.capt_id == _vm.user.id)
          ? _c("div", { staticClass: "row mt-20" }, [
              _c(
                "div",
                { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
                [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.matchExSave($event)
                        },
                        keydown: function($event) {
                          return _vm.form.onKeydown($event)
                        }
                      }
                    },
                    [
                      _c("alert-success", {
                        attrs: {
                          form: _vm.form,
                          message: _vm.$t("info_updated")
                        }
                      }),
                      _vm._v(" "),
                      _c("alert-error", { attrs: { form: _vm.form } }),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
                          [_vm._v(_vm._s(_vm.$t("twitch_link")))]
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
                                  value: _vm.form.twitch_link,
                                  expression: "form.twitch_link"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("twitch_link")
                              },
                              attrs: {
                                placeholder: "https://www.twitch.tv/eulcs",
                                type: "text",
                                name: "twitch_link"
                              },
                              domProps: { value: _vm.form.twitch_link },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "twitch_link",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "twitch_link" }
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
                            _c(
                              "v-button",
                              { attrs: { loading: _vm.form.busy } },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.$t("save")) +
                                    "\n                        "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.authenticated &&
        _vm.fight.status != 2 &&
        _vm.fight.status != 3 &&
        (_vm.fight.invitations[0].team.capt_id == _vm.user.id ||
          _vm.fight.invitations[1].team.capt_id == _vm.user.id)
          ? _c("div", { staticClass: "row mt-20" }, [
              _c(
                "div",
                { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
                [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.saveResult($event)
                        },
                        keydown: function($event) {
                          return _vm.formResult.onKeydown($event)
                        }
                      }
                    },
                    [
                      _c("alert-success", {
                        attrs: {
                          form: _vm.formResult,
                          message: _vm.$t("info_updated")
                        }
                      }),
                      _vm._v(" "),
                      _c("alert-error", { attrs: { form: _vm.formResult } }),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
                          [_vm._v(_vm._s(_vm.$t("match_result")))]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.result_1,
                                expression: "result_1"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number" },
                            domProps: { value: _vm.result_1 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.result_1 = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "col-md-1 col-form-label text-center"
                          },
                          [
                            _vm._v(
                              "\n                        :\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.result_2,
                                expression: "result_2"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number" },
                            domProps: { value: _vm.result_2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.result_2 = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
                          [_vm._v(_vm._s(_vm.$t("winner")))]
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
                                  value: _vm.winner_id,
                                  expression: "winner_id"
                                }
                              ],
                              staticClass: "form-control",
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
                                  _vm.winner_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.fight.invitations, function(invitation) {
                              return _c(
                                "option",
                                { domProps: { value: invitation.team.id } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(invitation.team.title) +
                                      "\n                            "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-7 offset-md-3 d-flex" },
                          [
                            _c(
                              "v-button",
                              { attrs: { loading: _vm.formResult.busy } },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.$t("save")) +
                                    "\n                        "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.authenticated &&
        _vm.fight.judge_id == _vm.user.id &&
        _vm.fight.status != 3
          ? _c(
              "div",
              { staticClass: "row mt-20" },
              _vm._l(_vm.fight.invitations, function(invitation) {
                return _c(
                  "div",
                  { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-6" },
                  [
                    invitation.match_result != null
                      ? _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "col-md-5 col-form-label text-md-right"
                            },
                            [_vm._v(_vm._s(_vm.$t("match_result")) + ":")]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            { staticClass: "col-md-7 col-form-label" },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(invitation.match_result.result_1) +
                                  " : " +
                                  _vm._s(invitation.match_result.result_2) +
                                  "\n                "
                              )
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    invitation.match_result != null
                      ? _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "col-md-5 col-form-label text-md-right"
                            },
                            [_vm._v(_vm._s(_vm.$t("winner")) + ":")]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            { staticClass: "col-md-7 col-form-label" },
                            [
                              invitation.match_result.winner_id ==
                              _vm.fight.invitations[0].team.id
                                ? [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          _vm.fight.invitations[0].team.title
                                        ) +
                                        "\n                    "
                                    )
                                  ]
                                : [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          _vm.fight.invitations[1].team.title
                                        ) +
                                        "\n                    "
                                    )
                                  ]
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ]
                )
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.authenticated &&
        _vm.fight.judge_id == _vm.user.id &&
        _vm.fight.status != 3
          ? _c("div", { staticClass: "row mt-20" }, [
              _c(
                "div",
                { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
                [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.saveFight($event)
                        },
                        keydown: function($event) {
                          return _vm.formFight.onKeydown($event)
                        }
                      }
                    },
                    [
                      _c("alert-success", {
                        attrs: {
                          form: _vm.formFight,
                          message: _vm.$t("info_updated")
                        }
                      }),
                      _vm._v(" "),
                      _c("alert-error", { attrs: { form: _vm.formFight } }),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
                          [_vm._v(_vm._s(_vm.$t("match_result")))]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.result_1,
                                expression: "result_1"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number" },
                            domProps: { value: _vm.result_1 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.result_1 = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "col-md-1 col-form-label text-center"
                          },
                          [
                            _vm._v(
                              "\n                        :\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.result_2,
                                expression: "result_2"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number" },
                            domProps: { value: _vm.result_2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.result_2 = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-md-3 col-form-label text-md-right"
                          },
                          [_vm._v(_vm._s(_vm.$t("winner")))]
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
                                  value: _vm.winner_id,
                                  expression: "winner_id"
                                }
                              ],
                              staticClass: "form-control",
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
                                  _vm.winner_id = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.fight.invitations, function(invitation) {
                              return _c(
                                "option",
                                { domProps: { value: invitation.team.id } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(invitation.team.title) +
                                      "\n                            "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-7 offset-md-3 d-flex" },
                          [
                            _c(
                              "v-button",
                              { attrs: { loading: _vm.formFight.busy } },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.$t("save")) +
                                    "\n                        "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-20" }, [
          _c(
            "div",
            { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
            [
              _vm.fight.judge != null
                ? _c("div", [
                    _c("label", [_vm._v(_vm._s(_vm.$t("judge")))]),
                    _vm._v(": " + _vm._s(_vm.fight.judge.name)),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", {
                      domProps: {
                        innerHTML: _vm._s(_vm.fight.judge.description)
                      }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.fight.commentator != null
                ? _c("div", { staticClass: "mt-20" }, [
                    _c("label", [_vm._v(_vm._s(_vm.$t("commentator")))]),
                    _vm._v(": " + _vm._s(_vm.fight.commentator.name)),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", {
                      domProps: {
                        innerHTML: _vm._s(_vm.fight.commentator.description)
                      }
                    })
                  ])
                : _vm._e()
            ]
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f3f3e4ec", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/MatchChat.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchChat_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/MatchChat.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchChat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchChat_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchChat_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchChat_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46879016_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MatchChat_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46879016\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/MatchChat.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchChat_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46879016_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MatchChat_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/MatchChat.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46879016", Component.options)
  } else {
    hotAPI.reload("data-v-46879016", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/js/pages/matches/detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/matches/detail.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3f3e4ec_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f3f3e4ec\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/matches/detail.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3f3e4ec_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/matches/detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3f3e4ec", Component.options)
  } else {
    hotAPI.reload("data-v-f3f3e4ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoQ2hhdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWF0Y2hlcy9kZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaENoYXQudnVlPzdiZTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tYXRjaGVzL2RldGFpbC52dWU/MTUzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hDaGF0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvZGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVBO0FBQ0E7QUFDQSxvREFEQTtBQUVBLDRDQUZBO0FBR0EsNENBSEE7QUFJQTtBQUpBLEtBREE7QUFPQSx5Q0FDQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxNQURBLENBUEE7QUFhQSxzQkFiQTtBQWNBLFFBZEEsa0JBY0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsd0JBRkE7QUFHQSwwQkFIQTtBQUlBLCtCQUpBO0FBS0EsMkJBTEE7QUFNQSw4QkFOQTtBQU9BO0FBUEE7QUFTQSxLQXhCQTtBQXlCQSxXQXpCQSxxQkF5QkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQ0EsTUFEQSxDQUNBLGFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLEVBS0EsZ0JBTEEsQ0FLQSxRQUxBLEVBS0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFGQSxFQUVBLElBRkE7QUFHQSxTQWJBO0FBY0EsS0E1Q0E7O0FBNkNBO0FBQ0EscUJBREEsMkJBRUE7QUFBQTs7QUFDQSw2Q0FDQTtBQUNBLDRGQUNBLElBREEsQ0FDQTtBQUFBOzs7QUFFQTtBQUNBO0FBQ0Esd0RBQ0E7QUFDQTtBQUNBLHFCQUhBOztBQUtBO0FBQ0EsaUJBWEE7QUFZQTtBQUNBLFNBbEJBO0FBbUJBLHlCQW5CQSwrQkFvQkE7QUFBQTs7QUFDQSw2Q0FDQTtBQUNBLGdHQUNBLElBREEsQ0FDQTtBQUFBOztBQUNBO0FBQ0EsaUJBSEE7QUFJQTtBQUNBLFNBNUJBO0FBNkJBLHdCQTdCQSw0QkE2QkEsT0E3QkEsRUE2QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FsQ0E7QUFtQ0Esc0JBbkNBLDBCQW1DQSxPQW5DQSxFQW9DQSxDQUVBO0FBdENBO0FBN0NBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa09BOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRUE7QUFDQSxrREFEQTtBQUVBLFlBRkEsc0JBRUE7QUFDQTtBQUNBLEtBSkE7OztBQU1BLHlDQUNBO0FBQ0EseUJBREE7QUFFQSxtQ0FGQTtBQUdBO0FBSEEsTUFEQSxDQU5BOztBQWNBLFFBZEEsa0JBY0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFFQTtBQUZBLGNBRkE7QUFNQTtBQUNBO0FBREEsY0FOQTtBQVNBO0FBQ0EsMEJBREE7QUFFQTtBQUZBLGNBVEE7QUFhQSx3QkFiQTtBQWNBLHdCQWRBO0FBZUEseUJBZkE7QUFnQkE7QUFoQkE7QUFrQkEsS0FqQ0E7QUFtQ0EsV0FuQ0EscUJBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2Q0E7O0FBd0NBLGFBQ0E7QUFDQSw4Q0FDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0EsU0FOQTtBQU9BLHNDQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUNBO0FBQ0E7QUFDQSxrREFDQTtBQUNBLCtFQUNBO0FBQ0EsMEVBQ0E7QUFFQTs7QUFFQSxxRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQWZBO0FBZ0JBLHFCQWxCQSxNQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9NQUNBO0FBQ0E7QUFDQSxhQW5DQTtBQW9DQSxTQWpEQTtBQWtEQSxxQkFsREEseUJBa0RBLFFBbERBLEVBbURBO0FBQ0E7QUFDQTtBQUNBLGlEQUNBOztBQUVBO0FBQ0EsU0ExREE7QUEyREEsbUJBM0RBLHlCQTREQTtBQUFBOztBQUNBLG1IQUNBOztBQUVBO0FBQ0EsbUVBQ0E7QUFDQSxrRUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFOQTtBQU9BLGFBWEE7QUFZQSxTQXpFQTtBQTBFQSxrQkExRUEsd0JBMkVBO0FBQ0E7QUFDQSx5Q0FEQTtBQUVBLHlDQUZBO0FBR0E7QUFIQTs7QUFNQTtBQUNBLFNBbkZBO0FBb0ZBLGlCQXBGQSx1QkFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpGQSxLQXpDQTtBQW9JQTtBQUNBLHNCQURBLHVCQUNBLE9BREEsRUFDQSxPQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEE7QUFwSUEsQzs7Ozs7Ozs7QUN4UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdDQUF3QztBQUN2RCxpQkFBaUIsb0RBQW9EO0FBQ3JFLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQ0FBc0M7QUFDOUQscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNGLGtFQUFTO0FBQ3hCLElBQUksS0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsYUFBYSx5REFBeUQ7QUFDdEU7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQSxtQkFBbUIsb0NBQW9DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxvQ0FBb0Msb0NBQW9DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQyxvQ0FBb0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlDQUFpQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlCQUF5QixtQkFBbUI7QUFDM0U7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9DQUFvQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNDQUFzQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdDQUFnQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwQ0FBMEM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkNBQTJDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQ0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLG9DQUFvQyxvQ0FBb0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvQ0FBb0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0EsYUFBYSx5REFBeUQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdEQUF3RDtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBO0FBQ0EsaUJBQWlCLHlEQUF5RDtBQUMxRSxtQ0FBbUMsU0FBUyxvQkFBb0IsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBLGlCQUFpQix5REFBeUQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSx5Q0FBeUMsU0FBUyxpQkFBaUIsRUFBRTtBQUNyRTtBQUNBLGlDQUFpQyxnQ0FBZ0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IseUNBQXlDLDhCQUE4QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQ0FBZ0M7QUFDakU7QUFDQTtBQUNBLDJCQUEyQiw2Q0FBNkM7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVMseUJBQXlCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQSxpQkFBaUIseURBQXlEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EseUNBQXlDLFNBQVMsdUJBQXVCLEVBQUU7QUFDM0U7QUFDQSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JELHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRCx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWSw0QkFBNEIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQTZDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTLCtCQUErQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQkFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFxRDtBQUN4RTtBQUNBO0FBQ0EsbUNBQW1DLGdDQUFnQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseUNBQXlDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix5Q0FBeUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQSxpQkFBaUIseURBQXlEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EseUNBQXlDLFNBQVMsc0JBQXNCLEVBQUU7QUFDMUU7QUFDQSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JELHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRCx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWSw0QkFBNEIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQTZDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTLDhCQUE4QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQSxhQUFhLHlEQUF5RDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ0Ysa0VBQVM7QUFDeEIsSUFBSSxLQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7OztBQ2ozQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQStEO0FBQ2hHO0FBQzhiO0FBQ2E7QUFDM2M7QUFDc1E7QUFDdFE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwV0FBYztBQUNoQixFQUFFLGtPQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUI7Ozs7Ozs7OztBQ3pDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQWtFO0FBQ25HO0FBQzhiO0FBQ2E7QUFDM2M7QUFDeVE7QUFDelE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1V0FBYztBQUNoQixFQUFFLCtOQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvNDAuNGE3ZWVjYzZjN2JlN2RkY2JjMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIHYtZm9yPVwicGFydGljaXBhbnQgaW4gcGFydGljaXBhbnRzXCIgdi1pZj1cInBhcnRpY2lwYW50cyE9bnVsbFwiPnt7cGFydGljaXBhbnQubmlja25hbWV9fSwgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0LXdpbmRvdyBtYXRjaC1jaGF0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0LWNtcGx0LXdyYXAgY2hhdC1mb3Itd2lkZ2V0cy0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjZW50LWNoYXQtYm94LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjZW50LWNoYXQtd3JhcFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNoYXQtbWVzc2FnZXMgOm1lc3NhZ2VzPVwibWVzc2FnZXNcIiA6aXNUeXBpbmc9XCJpc1R5cGluZ1wiPjwvY2hhdC1tZXNzYWdlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2hhdC1uZXctbWVzc2FnZSA6YWN0aXZlLWNoYW5uZWw9XCJhY3RpdmVDaGFubmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZXNzYWdlQWRkZWQ9XCJvbk1lc3NhZ2VBZGRlZFwiPjwvY2hhdC1uZXctbWVzc2FnZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICAgIGltcG9ydCBDaGF0TWVzc2FnZXMgZnJvbSBcIi4vQ2hhdE1lc3NhZ2VzXCI7XHJcbiAgICBpbXBvcnQgQ2hhdE5ld01lc3NhZ2UgZnJvbSBcIi4vQ2hhdE5ld01lc3NhZ2VcIjtcclxuICAgIGltcG9ydCBDaGF0Q2hhbm5lbHMgZnJvbSBcIi4vQ2hhdENoYW5uZWxzXCI7XHJcbiAgICBpbXBvcnQgQ2hhdFBhcnRpY2lwYW50cyBmcm9tIFwiLi9DaGF0UGFydGljaXBhbnRzXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgQ2hhdFBhcnRpY2lwYW50cyxcclxuICAgICAgICAgICAgQ2hhdENoYW5uZWxzLFxyXG4gICAgICAgICAgICBDaGF0TWVzc2FnZXMsXHJcbiAgICAgICAgICAgIENoYXROZXdNZXNzYWdlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IFsnY2hhbm5lbCddLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc29ja2V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDaGFubmVsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaXNUeXBpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwaW5nVGltZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NoYXRzOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDaGFubmVsID0gdGhpcy5jaGFubmVsO1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaFBhcnRpY2lwYW50cygpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LkVjaG8ucHJpdmF0ZShcImNoYW5uZWxfXCIrdGhpcy5jaGFubmVsLmlkLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAubGlzdGVuKCdNZXNzYWdlU2VudCcsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUeXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubGlzdGVuRm9yV2hpc3BlcigndHlwaW5nJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVHlwaW5nID0gZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50eXBpbmdUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMudHlwaW5nVGltZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGluZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1R5cGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZmV0Y2hNZXNzYWdlcygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlQ2hhbm5lbCE9PW51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NoYW5uZWxzLycrdGhpcy5hY3RpdmVDaGFubmVsLmlkKycvbWVzc2FnZXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2goZnVuY3Rpb24obWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNyZWF0ZWRfYXQgPSBfc2VsZi5kYXRlQ29udmVydFVUQyhtZXNzYWdlLmNyZWF0ZWRfYXQsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZldGNoUGFydGljaXBhbnRzKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVDaGFubmVsIT09bnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvY2hhbm5lbHMvJyt0aGlzLmFjdGl2ZUNoYW5uZWwuaWQrJy9wYXJ0aWNpcGFudHMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydGljaXBhbnRzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2hhbm5lbENoYW5nZWQoY2hhbm5lbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDaGFubmVsID0gY2hhbm5lbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hQYXJ0aWNpcGFudHMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25NZXNzYWdlQWRkZWQobWVzc2FnZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoQ2hhdC52dWUiLCI8dGVtcGxhdGU+XHJcbiAgICA8Y2FyZCB2LWlmPVwiZmlnaHQhPW51bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstbWF0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstbWF0Y2gtdGVhbS1sZWZ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0nLCBwYXJhbXM6IHsgaWQ6IGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWQgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtdGVhbS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW1hZ2UsICdhdmF0YXJfdGVhbScpXCIgY2xhc3M9XCJ3LTY0cHggbXItMTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbnN0aXR1dGlvbi50aXRsZX19LCB7e2ZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24udGl0bGV9fSw8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0udGl0bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstbWF0Y2gtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayAgOnRvPVwieyBuYW1lOiAnbWF0Y2gnLCBwYXJhbXM6IHsgaWQ6IGZpZ2h0LmlkIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXN0YXR1cy12c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZmlnaHQuaWQ9PTI0XCI+VlMgKGJvNSk8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+VlMgKGJvMyk8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zdGF0dXMtZGF0ZVwiPnt7IG1vbWVudC51dGMoZmlnaHQuc3RhcnRfYXQsIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCIpLmZvcm1hdCgnTU1NTSBEbywgSEg6bW0nKSB9fSDQnNCh0Jo8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjaGVja1VwY29taW5nKGZpZ2h0LnN0YXJ0X2F0KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtc2NvcmVcIj57eyR0KCd1cGNvbWluZycpfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImZpZ2h0Lndpbm5lcl9pZD4wICYmIGZpZ2h0LnJlc3VsdCE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtc2NvcmUgYmctZGFyay0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwYXJzZUludChmaWdodC5yZXN1bHRbMF0pPnBhcnNlSW50KGZpZ2h0LnJlc3VsdFsxXSkgJiYgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pZD09ZmlnaHQud2lubmVyX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQucmVzdWx0WzBdfX0gOiB7e2ZpZ2h0LnJlc3VsdFsxXX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwicGFyc2VJbnQoZmlnaHQucmVzdWx0WzFdKT5wYXJzZUludChmaWdodC5yZXN1bHRbMF0pICYmIGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaWQ9PWZpZ2h0Lndpbm5lcl9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZ2h0LnJlc3VsdFswXX19IDoge3tmaWdodC5yZXN1bHRbMV19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5yZXN1bHRbMV19fSA6IHt7ZmlnaHQucmVzdWx0WzBdfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtc2NvcmUgYmctc3VjY2Vzc1wiPnt7JHQoJ29ubGluZScpfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstbWF0Y2gtdGVhbS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0nLCBwYXJhbXM6IHsgaWQ6IGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaWQgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtdGVhbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmluc3RpdHV0aW9uLnRpdGxlfX0sIHt7ZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbi50aXRsZX19LDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS50aXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEltYWdlTGluayhmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmltYWdlLCAnYXZhdGFyX3RlYW0nKVwiIGNsYXNzPVwidy02NHB4IG1sLTEwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJyb3cgbXQtMjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02IGNvbC1tZC02IGNvbC1zbS02IGNvbC14cy02XCIgdi1pZj1cImZpZ2h0Lmludml0YXRpb25zWzBdLnR3aXRjaF9saW5rIT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzcG9uc2l2ZS1lbWJlZCByZXNwb25zaXZlLWVtYmVkLTE2eDlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIDpzcmM9XCJmaWdodC5pbnZpdGF0aW9uc1swXS50d2l0Y2hfbGlua1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIiBzY3JvbGxpbmc9XCJub1wiIGhlaWdodD1cIjM3OFwiIHdpZHRoPVwiNjIwXCI+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tNiBjb2wteHMtNlwiIHYtaWY9XCJmaWdodC5pbnZpdGF0aW9uc1sxXS50d2l0Y2hfbGluayE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3BvbnNpdmUtZW1iZWQgcmVzcG9uc2l2ZS1lbWJlZC0xNng5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSA6c3JjPVwiZmlnaHQuaW52aXRhdGlvbnNbMV0udHdpdGNoX2xpbmtcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCIgc2Nyb2xsaW5nPVwibm9cIiBoZWlnaHQ9XCIzNzhcIiB3aWR0aD1cIjYyMFwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNwb25zaXZlLWVtYmVkIHJlc3BvbnNpdmUtZW1iZWQtMTZ4OVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudHdpdGNoLnR2Lz9jaGFubmVsPXlvdXRobGVhZ3VlcnVcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCIgc2Nyb2xsaW5nPVwibm9cIiBoZWlnaHQ9XCIzNzhcIiB3aWR0aD1cIjYyMFwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTEwIG1iLTMwXCIgdi1pZj1cImNoYXQhPT1udWxsICYmIChmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmNhcHRfaWQ9PXVzZXIuaWQgfHwgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5jYXB0X2lkPT11c2VyLmlkIHx8IGZpZ2h0Lmp1ZGdlX2lkPT11c2VyLmlkIHx8IHVzZXIucm9sZV9pZD09MSlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdGNoLWNoYXQgOmNoYW5uZWw9XCJjaGF0XCI+PC9tYXRjaC1jaGF0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0yMFwiIHYtaWY9XCJhdXRoZW50aWNhdGVkICYmIGZpZ2h0LnN0YXR1cyE9MiAmJiBmaWdodC5zdGF0dXMhPTNcclxuICAgICAgICAgICAgICAgICAgICAgICYmIChmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmNhcHRfaWQ9PXVzZXIuaWQgfHwgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5jYXB0X2lkPT11c2VyLmlkKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwibWF0Y2hFeFNhdmVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGFsZXJ0LXN1Y2Nlc3MgOmZvcm09XCJmb3JtXCIgOm1lc3NhZ2U9XCIkdCgnaW5mb191cGRhdGVkJylcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFsZXJ0LWVycm9yIDpmb3JtPVwiZm9ybVwiPjwvYWxlcnQtZXJyb3I+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdtYXRjaF9leHRlcm5faWQnKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLmV4dGVybl9tYXRjaF9pZFwiIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2V4dGVybl9tYXRjaF9pZCcpIH1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4dGVybl9tYXRjaF9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cIm1hdGNoX2V4dGVybl9pZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ3R3aXRjaF9saW5rJykgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZm9ybS50d2l0Y2hfbGlua1wiIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly93d3cudHdpdGNoLnR2L2V1bGNzXCIgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygndHdpdGNoX2xpbmsnKSB9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0d2l0Y2hfbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhcy1lcnJvciA6Zm9ybT1cImZvcm1cIiBmaWVsZD1cInR3aXRjaF9saW5rXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNyBvZmZzZXQtbWQtMyBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm0uYnVzeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdzYXZlJykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0yMFwiIHYtaWY9XCJhdXRoZW50aWNhdGVkICYmIGZpZ2h0LnN0YXR1cyE9MiAmJiBmaWdodC5zdGF0dXMhPTNcclxuICAgICAgICAgICAgICAgICAgICAgICYmIChmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmNhcHRfaWQ9PXVzZXIuaWQgfHwgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5jYXB0X2lkPT11c2VyLmlkKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic2F2ZVJlc3VsdFwiIEBrZXlkb3duPVwiZm9ybVJlc3VsdC5vbktleWRvd24oJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YWxlcnQtc3VjY2VzcyA6Zm9ybT1cImZvcm1SZXN1bHRcIiA6bWVzc2FnZT1cIiR0KCdpbmZvX3VwZGF0ZWQnKVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8YWxlcnQtZXJyb3IgOmZvcm09XCJmb3JtUmVzdWx0XCI+PC9hbGVydC1lcnJvcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnbWF0Y2hfcmVzdWx0JykgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicmVzdWx0XzFcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0xIGNvbC1mb3JtLWxhYmVsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJyZXN1bHRfMlwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnd2lubmVyJykgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cIndpbm5lcl9pZFwiIGNsYXNzPSdmb3JtLWNvbnRyb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJpbnZpdGF0aW9uIGluIGZpZ2h0Lmludml0YXRpb25zXCIgdi1iaW5kOnZhbHVlPVwiaW52aXRhdGlvbi50ZWFtLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGludml0YXRpb24udGVhbS50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IG9mZnNldC1tZC0zIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnV0dG9uIDpsb2FkaW5nPVwiZm9ybVJlc3VsdC5idXN5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ3NhdmUnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTIwXCIgdi1pZj1cImF1dGhlbnRpY2F0ZWQgJiYgZmlnaHQuanVkZ2VfaWQ9PXVzZXIuaWQgICYmIGZpZ2h0LnN0YXR1cyE9M1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTZcIiB2LWZvcj1cImludml0YXRpb24gaW4gZmlnaHQuaW52aXRhdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiIHYtaWY9XCJpbnZpdGF0aW9uLm1hdGNoX3Jlc3VsdCE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC01IGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnbWF0Y2hfcmVzdWx0JykgfX06PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtNyBjb2wtZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2ludml0YXRpb24ubWF0Y2hfcmVzdWx0LnJlc3VsdF8xfX0gOiB7e2ludml0YXRpb24ubWF0Y2hfcmVzdWx0LnJlc3VsdF8yfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgdi1pZj1cImludml0YXRpb24ubWF0Y2hfcmVzdWx0IT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTUgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCd3aW5uZXInKSB9fTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC03IGNvbC1mb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaW52aXRhdGlvbi5tYXRjaF9yZXN1bHQud2lubmVyX2lkPT1maWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0udGl0bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLnRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTIwXCIgdi1pZj1cImF1dGhlbnRpY2F0ZWQgJiYgZmlnaHQuanVkZ2VfaWQ9PXVzZXIuaWQgJiYgZmlnaHQuc3RhdHVzIT0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzYXZlRmlnaHRcIiBAa2V5ZG93bj1cImZvcm1GaWdodC5vbktleWRvd24oJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YWxlcnQtc3VjY2VzcyA6Zm9ybT1cImZvcm1GaWdodFwiIDptZXNzYWdlPVwiJHQoJ2luZm9fdXBkYXRlZCcpXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbGVydC1lcnJvciA6Zm9ybT1cImZvcm1GaWdodFwiPjwvYWxlcnQtZXJyb3I+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ21hdGNoX3Jlc3VsdCcpIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInJlc3VsdF8xXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMSBjb2wtZm9ybS1sYWJlbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicmVzdWx0XzJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ3dpbm5lcicpIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJ3aW5uZXJfaWRcIiBjbGFzcz0nZm9ybS1jb250cm9sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiaW52aXRhdGlvbiBpbiBmaWdodC5pbnZpdGF0aW9uc1wiIHYtYmluZDp2YWx1ZT1cImludml0YXRpb24udGVhbS5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpbnZpdGF0aW9uLnRlYW0udGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNyBvZmZzZXQtbWQtMyBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm1GaWdodC5idXN5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ3NhdmUnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZpZ2h0Lmp1ZGdlIT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7JHQoJ2p1ZGdlJyl9fTwvbGFiZWw+OiB7e2ZpZ2h0Lmp1ZGdlLm5hbWV9fTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWh0bWw9XCJmaWdodC5qdWRnZS5kZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWdodC5jb21tZW50YXRvciE9bnVsbFwiIGNsYXNzPVwibXQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3skdCgnY29tbWVudGF0b3InKX19PC9sYWJlbD46IHt7ZmlnaHQuY29tbWVudGF0b3IubmFtZX19PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaHRtbD1cImZpZ2h0LmNvbW1lbnRhdG9yLmRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9jYXJkPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbiAgICBpbXBvcnQgeyBsb2FkTWVzc2FnZXMgfSBmcm9tICd+L3BsdWdpbnMvaTE4bidcclxuICAgIGltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xyXG4gICAgaW1wb3J0IE1hdGNoQ2hhdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYXRjaENoYXRcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY29tcG9uZW50czoge01hdGNoQ2hhdH0sXHJcbiAgICAgICAgbWV0YUluZm8gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgncGxheWVycycpIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiAnbGFuZy9sb2NhbGUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZpZ2h0OiBbXSxcclxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAvL2V4dGVybl9tYXRjaF9pZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdHdpdGNoX2xpbms6ICcnXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGZvcm1SZXN1bHQ6IG5ldyBGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaF9yZXN1bHQ6ICcnXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGZvcm1GaWdodDogbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lubmVyX2lkOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICByZXN1bHRfMTogJycsXHJcbiAgICAgICAgICAgICAgICByZXN1bHRfMjogJycsXHJcbiAgICAgICAgICAgICAgICB3aW5uZXJfaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgY2hhdDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgbG9hZE1lc3NhZ2VzKHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgdGhpcy5tb21lbnQubG9jYWxlKHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRGaWdodCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2V0RmlnaHRDaGF0OiBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpZ2h0cy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCsnL3RocmVhZCcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnY2hhdCcsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldEZpZ2h0OiBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5BcnJheVRvVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ193aXRoJyA6ICdpbnZpdGF0aW9ucy50ZWFtLGludml0YXRpb25zLnRlYW0uaW5zdGl0dXRpb24saW52aXRhdGlvbnMudGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbixqdWRnZSxjb21tZW50YXRvcix0aHJlYWRzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlnaHRzLycrdGhpcy4kcm91dGUucGFyYW1zLmlkK1wiP1wiK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlnaHQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5zdGFydF9hdCA9IHRoaXMuZGF0ZUNvbnZlcnRVVEMoZmlnaHQuc3RhcnRfYXQsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdmaWdodCcsIGZpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYXV0aGVudGljYXRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZmlnaHQuc3RhdHVzIT0zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlnaHQuaW52aXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihpbnZpdGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW52aXRhdGlvbi50ZWFtLmNhcHRfaWQ9PV9zZWxmLnVzZXIuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vX3NlbGYuZm9ybS5leHRlcm5fbWF0Y2hfaWQgPSBpbnZpdGF0aW9uLmV4dGVybl9tYXRjaF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmLmZvcm0udHdpdGNoX2xpbmsgPSBpbnZpdGF0aW9uLnR3aXRjaF9saW5rO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGludml0YXRpb24ubWF0Y2hfcmVzdWx0IT1udWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmLmZvcm1SZXN1bHQubWF0Y2hfcmVzdWx0ID0gaW52aXRhdGlvbi5tYXRjaF9yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYucmVzdWx0XzEgPSBpbnZpdGF0aW9uLm1hdGNoX3Jlc3VsdC5yZXN1bHRfMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZi5yZXN1bHRfMiA9IGludml0YXRpb24ubWF0Y2hfcmVzdWx0LnJlc3VsdF8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmLndpbm5lcl9pZCA9IGludml0YXRpb24ubWF0Y2hfcmVzdWx0Lndpbm5lcl9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRfMSA9IHRoaXMuZmlnaHQucmVzdWx0WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0XzIgPSB0aGlzLmZpZ2h0LnJlc3VsdFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbm5lcl9pZCA9IHRoaXMuZmlnaHQud2lubmVyX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uY2FwdF9pZD09dGhpcy51c2VyLmlkIHx8IGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uY2FwdF9pZD09dGhpcy51c2VyLmlkIHx8IGZpZ2h0Lmp1ZGdlX2lkPT10aGlzLnVzZXIuaWQgfHwgdGhpcy51c2VyLnJvbGVfaWQ9PTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRGaWdodENoYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoZWNrVXBjb21pbmcoc3RhcnRfYXQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxID0gbmV3IERhdGUoc3RhcnRfYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZDEuZ2V0VGltZSgpLWQyLmdldFRpbWUoKT4wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hdGNoRXhTYXZlKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucHV0KCcvYXBpL2ZpZ2h0cy8nK3RoaXMuZmlnaHQuaWQrJy90ZWFtcy8nK3RoaXMudXNlci50ZWFtX2lkKS50aGVuKChyZXNwb25zZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZ2h0Lmludml0YXRpb25zLm1hcChmdW5jdGlvbihpbnZpdGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnZpdGF0aW9uLnRlYW0uY2FwdF9pZD09X3NlbGYudXNlci5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZpdGF0aW9uLnR3aXRjaF9saW5rID0gX3NlbGYuZm9ybS50d2l0Y2hfbGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2F2ZVJlc3VsdCgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtUmVzdWx0Lm1hdGNoX3Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdF8xJyA6IHRoaXMucmVzdWx0XzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHRfMic6IHRoaXMucmVzdWx0XzIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd3aW5uZXJfaWQnOiB0aGlzLndpbm5lcl9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybVJlc3VsdC5wdXQoJy9hcGkvZmlnaHRzLycrdGhpcy5maWdodC5pZCsnL3RlYW1zLycrdGhpcy51c2VyLnRlYW1faWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVGaWdodCgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtRmlnaHQucmVzdWx0ID0gW3RoaXMucmVzdWx0XzEsIHRoaXMucmVzdWx0XzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUZpZ2h0Lndpbm5lcl9pZCA9IHRoaXMud2lubmVyX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUZpZ2h0LnB1dCgnL2FwaS9maWdodHMvJyt0aGlzLmZpZ2h0LmlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICAnJHJvdXRlLnF1ZXJ5JyhuZXdQYWdlLCBvbGRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZpZ2h0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tYXRjaGVzL2RldGFpbC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICBfdm0uX2woX3ZtLnBhcnRpY2lwYW50cywgZnVuY3Rpb24ocGFydGljaXBhbnQpIHtcbiAgICAgICAgcmV0dXJuIF92bS5wYXJ0aWNpcGFudHMgIT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHBhcnRpY2lwYW50Lm5pY2tuYW1lKSArIFwiLCBcIildKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoYXQtd2luZG93IG1hdGNoLWNoYXRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoYXQtY21wbHQtd3JhcCBjaGF0LWZvci13aWRnZXRzLTFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVjZW50LWNoYXQtYm94LXdyYXBcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyZWNlbnQtY2hhdC13cmFwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNoYXQtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJjaGF0LW1lc3NhZ2VzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbWVzc2FnZXM6IF92bS5tZXNzYWdlcywgaXNUeXBpbmc6IF92bS5pc1R5cGluZyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImNoYXQtbmV3LW1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWN0aXZlLWNoYW5uZWxcIjogX3ZtLmFjdGl2ZUNoYW5uZWwgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBtZXNzYWdlQWRkZWQ6IF92bS5vbk1lc3NhZ2VBZGRlZCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ2ODc5MDE2XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDY4NzkwMTZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hDaGF0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00Njg3OTAxNlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaENoYXQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5maWdodCAhPSBudWxsXG4gICAgPyBfYyhcImNhcmRcIiwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2hcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IF92bS5maWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1sb2dvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy02NHB4IG1yLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyX3RlYW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW5zdGl0dXRpb24udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW5zdGl0dXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubG9jYXRpb24udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zdGF0dXNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJtYXRjaFwiLCBwYXJhbXM6IHsgaWQ6IF92bS5maWdodC5pZCB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zdGF0dXMtdnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0LmlkID09IDI0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtfdm0uX3YoXCJWUyAoYm81KVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW192bS5fdihcIlZTIChibzMpXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXN0YXR1cy1kYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXRjKF92bS5maWdodC5zdGFydF9hdCwgXCJZWVlZLU1NLUREIGg6bW06c3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIk1NTU0gRG8sIEhIOm1tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiINCc0KHQmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja1VwY29taW5nKF92bS5maWdodC5zdGFydF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zY29yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ1cGNvbWluZ1wiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uZmlnaHQud2lubmVyX2lkID4gMCAmJiBfdm0uZmlnaHQucmVzdWx0ICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtc2NvcmUgYmctZGFyay0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KF92bS5maWdodC5yZXN1bHRbMF0pID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KF92bS5maWdodC5yZXN1bHRbMV0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWQgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWdodC53aW5uZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlnaHQucmVzdWx0WzBdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZpZ2h0LnJlc3VsdFsxXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUludChfdm0uZmlnaHQucmVzdWx0WzFdKSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoX3ZtLmZpZ2h0LnJlc3VsdFswXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaWQgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlnaHQud2lubmVyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZpZ2h0LnJlc3VsdFswXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5maWdodC5yZXN1bHRbMV0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlnaHQucmVzdWx0WzFdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZpZ2h0LnJlc3VsdFswXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zY29yZSBiZy1zdWNjZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib25saW5lXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IF92bS5maWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbnN0aXR1dGlvbi50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbnN0aXR1dGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sb2NhdGlvbi50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5maWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tbG9nb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNjRweCBtbC0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhcl90ZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtMjBcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmVzcG9uc2l2ZS1lbWJlZCByZXNwb25zaXZlLWVtYmVkLTE2eDlcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaWZyYW1lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9wbGF5ZXIudHdpdGNoLnR2Lz9jaGFubmVsPXlvdXRobGVhZ3VlcnVcIixcbiAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IFwibm9cIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzc4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNjIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uY2hhdCAhPT0gbnVsbCAmJlxuICAgICAgICAoX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uY2FwdF9pZCA9PSBfdm0udXNlci5pZCB8fFxuICAgICAgICAgIF92bS5maWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmNhcHRfaWQgPT0gX3ZtLnVzZXIuaWQgfHxcbiAgICAgICAgICBfdm0uZmlnaHQuanVkZ2VfaWQgPT0gX3ZtLnVzZXIuaWQgfHxcbiAgICAgICAgICBfdm0udXNlci5yb2xlX2lkID09IDEpXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0xMCBtYi0zMFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgW19jKFwibWF0Y2gtY2hhdFwiLCB7IGF0dHJzOiB7IGNoYW5uZWw6IF92bS5jaGF0IH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uYXV0aGVudGljYXRlZCAmJlxuICAgICAgICBfdm0uZmlnaHQuc3RhdHVzICE9IDIgJiZcbiAgICAgICAgX3ZtLmZpZ2h0LnN0YXR1cyAhPSAzICYmXG4gICAgICAgIChfdm0uZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5jYXB0X2lkID09IF92bS51c2VyLmlkIHx8XG4gICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uY2FwdF9pZCA9PSBfdm0udXNlci5pZClcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTIwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tYXRjaEV4U2F2ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYWxlcnQtc3VjY2Vzc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX3ZtLiR0KFwiaW5mb191cGRhdGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImFsZXJ0LWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0gfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInR3aXRjaF9saW5rXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50d2l0Y2hfbGluayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udHdpdGNoX2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWludmFsaWRcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInR3aXRjaF9saW5rXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiaHR0cHM6Ly93d3cudHdpdGNoLnR2L2V1bGNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInR3aXRjaF9saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0udHdpdGNoX2xpbmsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0d2l0Y2hfbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoYXMtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGZpZWxkOiBcInR3aXRjaF9saW5rXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNyBvZmZzZXQtbWQtMyBkLWZsZXhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGxvYWRpbmc6IF92bS5mb3JtLmJ1c3kgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcInNhdmVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmF1dGhlbnRpY2F0ZWQgJiZcbiAgICAgICAgX3ZtLmZpZ2h0LnN0YXR1cyAhPSAyICYmXG4gICAgICAgIF92bS5maWdodC5zdGF0dXMgIT0gMyAmJlxuICAgICAgICAoX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uY2FwdF9pZCA9PSBfdm0udXNlci5pZCB8fFxuICAgICAgICAgIF92bS5maWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmNhcHRfaWQgPT0gX3ZtLnVzZXIuaWQpXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0yMFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZVJlc3VsdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZm9ybVJlc3VsdC5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYWxlcnQtc3VjY2Vzc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybVJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX3ZtLiR0KFwiaW5mb191cGRhdGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImFsZXJ0LWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm1SZXN1bHQgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm1hdGNoX3Jlc3VsdFwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVzdWx0XzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVzdWx0XzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucmVzdWx0XzEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVzdWx0XzEgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xIGNvbC1mb3JtLWxhYmVsIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlc3VsdF8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlc3VsdF8yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnJlc3VsdF8yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc3VsdF8yID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ3aW5uZXJcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53aW5uZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ3aW5uZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS53aW5uZXJfaWQgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZpZ2h0Lmludml0YXRpb25zLCBmdW5jdGlvbihpbnZpdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGludml0YXRpb24udGVhbS5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaW52aXRhdGlvbi50ZWFtLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IG9mZnNldC1tZC0zIGQtZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbG9hZGluZzogX3ZtLmZvcm1SZXN1bHQuYnVzeSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwic2F2ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uYXV0aGVudGljYXRlZCAmJlxuICAgICAgICBfdm0uZmlnaHQuanVkZ2VfaWQgPT0gX3ZtLnVzZXIuaWQgJiZcbiAgICAgICAgX3ZtLmZpZ2h0LnN0YXR1cyAhPSAzXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtMjBcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZpZ2h0Lmludml0YXRpb25zLCBmdW5jdGlvbihpbnZpdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpbnZpdGF0aW9uLm1hdGNoX3Jlc3VsdCAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTUgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJtYXRjaF9yZXN1bHRcIikpICsgXCI6XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNyBjb2wtZm9ybS1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpbnZpdGF0aW9uLm1hdGNoX3Jlc3VsdC5yZXN1bHRfMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpbnZpdGF0aW9uLm1hdGNoX3Jlc3VsdC5yZXN1bHRfMikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGludml0YXRpb24ubWF0Y2hfcmVzdWx0ICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNSBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIndpbm5lclwiKSkgKyBcIjpcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IGNvbC1mb3JtLWxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZpdGF0aW9uLm1hdGNoX3Jlc3VsdC53aW5uZXJfaWQgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmF1dGhlbnRpY2F0ZWQgJiZcbiAgICAgICAgX3ZtLmZpZ2h0Lmp1ZGdlX2lkID09IF92bS51c2VyLmlkICYmXG4gICAgICAgIF92bS5maWdodC5zdGF0dXMgIT0gM1xuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtMjBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmVGaWdodCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZm9ybUZpZ2h0Lm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJhbGVydC1zdWNjZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtRmlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF92bS4kdChcImluZm9fdXBkYXRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJhbGVydC1lcnJvclwiLCB7IGF0dHJzOiB7IGZvcm06IF92bS5mb3JtRmlnaHQgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm1hdGNoX3Jlc3VsdFwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVzdWx0XzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVzdWx0XzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucmVzdWx0XzEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVzdWx0XzEgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xIGNvbC1mb3JtLWxhYmVsIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlc3VsdF8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlc3VsdF8yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnJlc3VsdF8yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc3VsdF8yID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ3aW5uZXJcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53aW5uZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ3aW5uZXJfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS53aW5uZXJfaWQgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZpZ2h0Lmludml0YXRpb25zLCBmdW5jdGlvbihpbnZpdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGludml0YXRpb24udGVhbS5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaW52aXRhdGlvbi50ZWFtLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IG9mZnNldC1tZC0zIGQtZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbG9hZGluZzogX3ZtLmZvcm1GaWdodC5idXN5IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJzYXZlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTIwXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmp1ZGdlICE9IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJqdWRnZVwiKSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjogXCIgKyBfdm0uX3MoX3ZtLmZpZ2h0Lmp1ZGdlLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uZmlnaHQuanVkZ2UuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZmlnaHQuY29tbWVudGF0b3IgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb21tZW50YXRvclwiKSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjogXCIgKyBfdm0uX3MoX3ZtLmZpZ2h0LmNvbW1lbnRhdG9yLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uZmlnaHQuY29tbWVudGF0b3IuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1mM2YzZTRlY1wiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWYzZjNlNGVjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tYXRjaGVzL2RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtZjNmM2U0ZWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWF0Y2hDaGF0LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01hdGNoQ2hhdC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2ODc5MDE2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWF0Y2hDaGF0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaENoYXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ2ODc5MDE2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDY4NzkwMTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hDaGF0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hDaGF0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWYzZjNlNGVjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWF0Y2hlcy9kZXRhaWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWYzZjNlNGVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjNmM2U0ZWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQwIl0sInNvdXJjZVJvb3QiOiIifQ==