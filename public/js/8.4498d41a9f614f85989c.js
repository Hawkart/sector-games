webpackJsonp([8],{

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
                        _this2.result_1 = _this2.fight.result != null ? _this2.fight.result[0] : 0;
                        _this2.result_2 = _this2.fight.result != null ? _this2.fight.result[1] : 0;
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
                              : [_vm._v("VS (bo1)")]
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
                                  _vm.fight.result != null
                                    ? _c(
                                        "span",
                                        [
                                          parseInt(_vm.fight.result[0]) >
                                            parseInt(_vm.fight.result[1]) &&
                                          _vm.fight.invitations[0].team.id ==
                                            _vm.fight.winner_id
                                            ? [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.fight.result[0]
                                                    ) +
                                                    " : " +
                                                    _vm._s(
                                                      _vm.fight.result[1]
                                                    ) +
                                                    "\n                                    "
                                                )
                                              ]
                                            : parseInt(_vm.fight.result[1]) >
                                                parseInt(_vm.fight.result[0]) &&
                                              _vm.fight.invitations[1].team
                                                .id == _vm.fight.winner_id
                                            ? [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.fight.result[0]
                                                    ) +
                                                    " : " +
                                                    _vm._s(
                                                      _vm.fight.result[1]
                                                    ) +
                                                    "\n                                    "
                                                )
                                              ]
                                            : [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.fight.result[1]
                                                    ) +
                                                    " : " +
                                                    _vm._s(
                                                      _vm.fight.result[0]
                                                    ) +
                                                    "\n                                    "
                                                )
                                              ]
                                        ],
                                        2
                                      )
                                    : _c("span", [_vm._v("0 : 0")])
                                ]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoQ2hhdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWF0Y2hlcy9kZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaENoYXQudnVlPzdiZTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9tYXRjaGVzL2RldGFpbC52dWU/MTUzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hDaGF0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvZGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVBO0FBQ0E7QUFDQSxvREFEQTtBQUVBLDRDQUZBO0FBR0EsNENBSEE7QUFJQTtBQUpBLEtBREE7QUFPQSx5Q0FDQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxNQURBLENBUEE7QUFhQSxzQkFiQTtBQWNBLFFBZEEsa0JBY0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsd0JBRkE7QUFHQSwwQkFIQTtBQUlBLCtCQUpBO0FBS0EsMkJBTEE7QUFNQSw4QkFOQTtBQU9BO0FBUEE7QUFTQSxLQXhCQTtBQXlCQSxXQXpCQSxxQkF5QkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQ0EsTUFEQSxDQUNBLGFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLEVBS0EsZ0JBTEEsQ0FLQSxRQUxBLEVBS0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFGQSxFQUVBLElBRkE7QUFHQSxTQWJBO0FBY0EsS0E1Q0E7O0FBNkNBO0FBQ0EscUJBREEsMkJBRUE7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QUFDM2M7QUFDeVE7QUFDelE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1V0FBYztBQUNoQixFQUFFLCtOQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvOC40NDk4ZDQxYTlmNjE0Zjg1OTg5Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gdi1mb3I9XCJwYXJ0aWNpcGFudCBpbiBwYXJ0aWNpcGFudHNcIiB2LWlmPVwicGFydGljaXBhbnRzIT1udWxsXCI+e3twYXJ0aWNpcGFudC5uaWNrbmFtZX19LCA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtd2luZG93IG1hdGNoLWNoYXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtY21wbHQtd3JhcCBjaGF0LWZvci13aWRnZXRzLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNlbnQtY2hhdC1ib3gtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNlbnQtY2hhdC13cmFwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2hhdC1tZXNzYWdlcyA6bWVzc2FnZXM9XCJtZXNzYWdlc1wiIDppc1R5cGluZz1cImlzVHlwaW5nXCI+PC9jaGF0LW1lc3NhZ2VzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaGF0LW5ldy1tZXNzYWdlIDphY3RpdmUtY2hhbm5lbD1cImFjdGl2ZUNoYW5uZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lc3NhZ2VBZGRlZD1cIm9uTWVzc2FnZUFkZGVkXCI+PC9jaGF0LW5ldy1tZXNzYWdlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gICAgaW1wb3J0IENoYXRNZXNzYWdlcyBmcm9tIFwiLi9DaGF0TWVzc2FnZXNcIjtcclxuICAgIGltcG9ydCBDaGF0TmV3TWVzc2FnZSBmcm9tIFwiLi9DaGF0TmV3TWVzc2FnZVwiO1xyXG4gICAgaW1wb3J0IENoYXRDaGFubmVscyBmcm9tIFwiLi9DaGF0Q2hhbm5lbHNcIjtcclxuICAgIGltcG9ydCBDaGF0UGFydGljaXBhbnRzIGZyb20gXCIuL0NoYXRQYXJ0aWNpcGFudHNcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBDaGF0UGFydGljaXBhbnRzLFxyXG4gICAgICAgICAgICBDaGF0Q2hhbm5lbHMsXHJcbiAgICAgICAgICAgIENoYXRNZXNzYWdlcyxcclxuICAgICAgICAgICAgQ2hhdE5ld01lc3NhZ2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaycsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogWydjaGFubmVsJ10sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50czogW10sXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNoYW5uZWw6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBpc1R5cGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBpbmdUaW1lcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2hhdHM6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNoYW5uZWwgPSB0aGlzLmNoYW5uZWw7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hNZXNzYWdlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoUGFydGljaXBhbnRzKCk7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuRWNoby5wcml2YXRlKFwiY2hhbm5lbF9cIit0aGlzLmNoYW5uZWwuaWQudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIC5saXN0ZW4oJ01lc3NhZ2VTZW50JywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1R5cGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5saXN0ZW5Gb3JXaGlzcGVyKCd0eXBpbmcnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUeXBpbmcgPSBlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnR5cGluZ1RpbWVyKSBjbGVhclRpbWVvdXQodGhpcy50eXBpbmdUaW1lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVHlwaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBmZXRjaE1lc3NhZ2VzKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hY3RpdmVDaGFubmVsIT09bnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvY2hhbm5lbHMvJyt0aGlzLmFjdGl2ZUNoYW5uZWwuaWQrJy9tZXNzYWdlcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMuZm9yRWFjaChmdW5jdGlvbihtZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY3JlYXRlZF9hdCA9IF9zZWxmLmRhdGVDb252ZXJ0VVRDKG1lc3NhZ2UuY3JlYXRlZF9hdCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmV0Y2hQYXJ0aWNpcGFudHMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZUNoYW5uZWwhPT1udWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9jaGFubmVscy8nK3RoaXMuYWN0aXZlQ2hhbm5lbC5pZCsnL3BhcnRpY2lwYW50cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNpcGFudHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DaGFubmVsQ2hhbmdlZChjaGFubmVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUNoYW5uZWwgPSBjaGFubmVsO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hNZXNzYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaFBhcnRpY2lwYW50cygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbk1lc3NhZ2VBZGRlZChtZXNzYWdlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hDaGF0LnZ1ZSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxjYXJkIHYtaWY9XCJmaWdodCE9bnVsbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1tYXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1tYXRjaC10ZWFtLWxlZnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayAgOnRvPVwieyBuYW1lOiAndGVhbScsIHBhcmFtczogeyBpZDogZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pZCB9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC10ZWFtLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsoZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctNjRweCBtci0xMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtdGVhbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmluc3RpdHV0aW9uLnRpdGxlfX0sIHt7ZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbi50aXRsZX19LDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1tYXRjaC1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICdtYXRjaCcsIHBhcmFtczogeyBpZDogZmlnaHQuaWQgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtc3RhdHVzLXZzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWdodC5pZD09MjRcIj5WUyAoYm81KTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5WUyAoYm8xKTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXN0YXR1cy1kYXRlXCI+e3sgbW9tZW50LnV0YyhmaWdodC5zdGFydF9hdCwgXCJZWVlZLU1NLUREIGg6bW06c3NcIikuZm9ybWF0KCdNTU1NIERvLCBISDptbScpIH19INCc0KHQmjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImNoZWNrVXBjb21pbmcoZmlnaHQuc3RhcnRfYXQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zY29yZVwiPnt7JHQoJ3VwY29taW5nJyl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiZmlnaHQud2lubmVyX2lkPjAgJiYgZmlnaHQucmVzdWx0IT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zY29yZSBiZy1kYXJrLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImZpZ2h0LnJlc3VsdCE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwYXJzZUludChmaWdodC5yZXN1bHRbMF0pPnBhcnNlSW50KGZpZ2h0LnJlc3VsdFsxXSkgJiYgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pZD09ZmlnaHQud2lubmVyX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5yZXN1bHRbMF19fSA6IHt7ZmlnaHQucmVzdWx0WzFdfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwicGFyc2VJbnQoZmlnaHQucmVzdWx0WzFdKT5wYXJzZUludChmaWdodC5yZXN1bHRbMF0pICYmIGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaWQ9PWZpZ2h0Lndpbm5lcl9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQucmVzdWx0WzBdfX0gOiB7e2ZpZ2h0LnJlc3VsdFsxXX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZ2h0LnJlc3VsdFsxXX19IDoge3tmaWdodC5yZXN1bHRbMF19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+MCA6IDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zY29yZSBiZy1zdWNjZXNzXCI+e3skdCgnb25saW5lJyl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICd0ZWFtJywgcGFyYW1zOiB7IGlkOiBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmlkIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbnN0aXR1dGlvbi50aXRsZX19LCB7e2ZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24udGl0bGV9fSw8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0udGl0bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC10ZWFtLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsoZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctNjRweCBtbC0xMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicm93IG10LTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tNiBjb2wteHMtNlwiIHYtaWY9XCJmaWdodC5pbnZpdGF0aW9uc1swXS50d2l0Y2hfbGluayE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3BvbnNpdmUtZW1iZWQgcmVzcG9uc2l2ZS1lbWJlZC0xNng5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSA6c3JjPVwiZmlnaHQuaW52aXRhdGlvbnNbMF0udHdpdGNoX2xpbmtcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCIgc2Nyb2xsaW5nPVwibm9cIiBoZWlnaHQ9XCIzNzhcIiB3aWR0aD1cIjYyMFwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTZcIiB2LWlmPVwiZmlnaHQuaW52aXRhdGlvbnNbMV0udHdpdGNoX2xpbmshPW51bGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNwb25zaXZlLWVtYmVkIHJlc3BvbnNpdmUtZW1iZWQtMTZ4OVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgOnNyYz1cImZpZ2h0Lmludml0YXRpb25zWzFdLnR3aXRjaF9saW5rXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiIHNjcm9sbGluZz1cIm5vXCIgaGVpZ2h0PVwiMzc4XCIgd2lkdGg9XCI2MjBcIj48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4tLT5cclxuXHJcbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJyb3cgbXQtMjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3BvbnNpdmUtZW1iZWQgcmVzcG9uc2l2ZS1lbWJlZC0xNng5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3BsYXllci50d2l0Y2gudHYvP2NoYW5uZWw9eW91dGhsZWFndWVydVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIiBzY3JvbGxpbmc9XCJub1wiIGhlaWdodD1cIjM3OFwiIHdpZHRoPVwiNjIwXCI+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+LS0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMTAgbWItMzBcIiB2LWlmPVwiY2hhdCE9PW51bGwgJiYgKGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uY2FwdF9pZD09dXNlci5pZCB8fCBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmNhcHRfaWQ9PXVzZXIuaWQgfHwgZmlnaHQuanVkZ2VfaWQ9PXVzZXIuaWQgfHwgdXNlci5yb2xlX2lkPT0xKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0Y2gtY2hhdCA6Y2hhbm5lbD1cImNoYXRcIj48L21hdGNoLWNoYXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTIwXCIgdi1pZj1cImF1dGhlbnRpY2F0ZWQgJiYgZmlnaHQuc3RhdHVzIT0yICYmIGZpZ2h0LnN0YXR1cyE9M1xyXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uY2FwdF9pZD09dXNlci5pZCB8fCBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmNhcHRfaWQ9PXVzZXIuaWQpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJtYXRjaEV4U2F2ZVwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YWxlcnQtc3VjY2VzcyA6Zm9ybT1cImZvcm1cIiA6bWVzc2FnZT1cIiR0KCdpbmZvX3VwZGF0ZWQnKVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8YWxlcnQtZXJyb3IgOmZvcm09XCJmb3JtXCI+PC9hbGVydC1lcnJvcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ21hdGNoX2V4dGVybl9pZCcpIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm0uZXh0ZXJuX21hdGNoX2lkXCIgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygnZXh0ZXJuX21hdGNoX2lkJykgfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZXh0ZXJuX21hdGNoX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwibWF0Y2hfZXh0ZXJuX2lkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgndHdpdGNoX2xpbmsnKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJmb3JtLnR3aXRjaF9saW5rXCIgcGxhY2Vob2xkZXI9XCJodHRwczovL3d3dy50d2l0Y2gudHYvZXVsY3NcIiA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCd0d2l0Y2hfbGluaycpIH1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR3aXRjaF9saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGFzLWVycm9yIDpmb3JtPVwiZm9ybVwiIGZpZWxkPVwidHdpdGNoX2xpbmtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IG9mZnNldC1tZC0zIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnV0dG9uIDpsb2FkaW5nPVwiZm9ybS5idXN5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ3NhdmUnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTIwXCIgdi1pZj1cImF1dGhlbnRpY2F0ZWQgJiYgZmlnaHQuc3RhdHVzIT0yICYmIGZpZ2h0LnN0YXR1cyE9M1xyXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uY2FwdF9pZD09dXNlci5pZCB8fCBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmNhcHRfaWQ9PXVzZXIuaWQpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzYXZlUmVzdWx0XCIgQGtleWRvd249XCJmb3JtUmVzdWx0Lm9uS2V5ZG93bigkZXZlbnQpXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhbGVydC1zdWNjZXNzIDpmb3JtPVwiZm9ybVJlc3VsdFwiIDptZXNzYWdlPVwiJHQoJ2luZm9fdXBkYXRlZCcpXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbGVydC1lcnJvciA6Zm9ybT1cImZvcm1SZXN1bHRcIj48L2FsZXJ0LWVycm9yPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdtYXRjaF9yZXN1bHQnKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJyZXN1bHRfMVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTEgY29sLWZvcm0tbGFiZWwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInJlc3VsdF8yXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCd3aW5uZXInKSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwid2lubmVyX2lkXCIgY2xhc3M9J2Zvcm0tY29udHJvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImludml0YXRpb24gaW4gZmlnaHQuaW52aXRhdGlvbnNcIiB2LWJpbmQ6dmFsdWU9XCJpbnZpdGF0aW9uLnRlYW0uaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaW52aXRhdGlvbi50ZWFtLnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTcgb2Zmc2V0LW1kLTMgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idXR0b24gOmxvYWRpbmc9XCJmb3JtUmVzdWx0LmJ1c3lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnc2F2ZScpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMjBcIiB2LWlmPVwiYXV0aGVudGljYXRlZCAmJiBmaWdodC5qdWRnZV9pZD09dXNlci5pZCAgJiYgZmlnaHQuc3RhdHVzIT0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tNiBjb2wteHMtNlwiIHYtZm9yPVwiaW52aXRhdGlvbiBpbiBmaWdodC5pbnZpdGF0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgdi1pZj1cImludml0YXRpb24ubWF0Y2hfcmVzdWx0IT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTUgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiPnt7ICR0KCdtYXRjaF9yZXN1bHQnKSB9fTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC03IGNvbC1mb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aW52aXRhdGlvbi5tYXRjaF9yZXN1bHQucmVzdWx0XzF9fSA6IHt7aW52aXRhdGlvbi5tYXRjaF9yZXN1bHQucmVzdWx0XzJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiB2LWlmPVwiaW52aXRhdGlvbi5tYXRjaF9yZXN1bHQhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtNSBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCI+e3sgJHQoJ3dpbm5lcicpIH19OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTcgY29sLWZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpbnZpdGF0aW9uLm1hdGNoX3Jlc3VsdC53aW5uZXJfaWQ9PWZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0udGl0bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMjBcIiB2LWlmPVwiYXV0aGVudGljYXRlZCAmJiBmaWdodC5qdWRnZV9pZD09dXNlci5pZCAmJiBmaWdodC5zdGF0dXMhPTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInNhdmVGaWdodFwiIEBrZXlkb3duPVwiZm9ybUZpZ2h0Lm9uS2V5ZG93bigkZXZlbnQpXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhbGVydC1zdWNjZXNzIDpmb3JtPVwiZm9ybUZpZ2h0XCIgOm1lc3NhZ2U9XCIkdCgnaW5mb191cGRhdGVkJylcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFsZXJ0LWVycm9yIDpmb3JtPVwiZm9ybUZpZ2h0XCI+PC9hbGVydC1lcnJvcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnbWF0Y2hfcmVzdWx0JykgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwicmVzdWx0XzFcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0xIGNvbC1mb3JtLWxhYmVsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJyZXN1bHRfMlwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0zIGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIj57eyAkdCgnd2lubmVyJykgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cIndpbm5lcl9pZFwiIGNsYXNzPSdmb3JtLWNvbnRyb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJpbnZpdGF0aW9uIGluIGZpZ2h0Lmludml0YXRpb25zXCIgdi1iaW5kOnZhbHVlPVwiaW52aXRhdGlvbi50ZWFtLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGludml0YXRpb24udGVhbS50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IG9mZnNldC1tZC0zIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnV0dG9uIDpsb2FkaW5nPVwiZm9ybUZpZ2h0LmJ1c3lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnc2F2ZScpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmlnaHQuanVkZ2UhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3skdCgnanVkZ2UnKX19PC9sYWJlbD46IHt7ZmlnaHQuanVkZ2UubmFtZX19PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaHRtbD1cImZpZ2h0Lmp1ZGdlLmRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZpZ2h0LmNvbW1lbnRhdG9yIT1udWxsXCIgY2xhc3M9XCJtdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyR0KCdjb21tZW50YXRvcicpfX08L2xhYmVsPjoge3tmaWdodC5jb21tZW50YXRvci5uYW1lfX08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1odG1sPVwiZmlnaHQuY29tbWVudGF0b3IuZGVzY3JpcHRpb25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2NhcmQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgICBpbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuICAgIGltcG9ydCB7IGxvYWRNZXNzYWdlcyB9IGZyb20gJ34vcGx1Z2lucy9pMThuJ1xyXG4gICAgaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXHJcbiAgICBpbXBvcnQgTWF0Y2hDaGF0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01hdGNoQ2hhdFwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBjb21wb25lbnRzOiB7TWF0Y2hDaGF0fSxcclxuICAgICAgICBtZXRhSW5mbyAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdwbGF5ZXJzJykgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaycsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZmlnaHQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZXh0ZXJuX21hdGNoX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0d2l0Y2hfbGluazogJydcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZm9ybVJlc3VsdDogbmV3IEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoX3Jlc3VsdDogJydcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZm9ybUZpZ2h0OiBuZXcgRm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB3aW5uZXJfaWQ6ICcnXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHJlc3VsdF8xOiAnJyxcclxuICAgICAgICAgICAgICAgIHJlc3VsdF8yOiAnJyxcclxuICAgICAgICAgICAgICAgIHdpbm5lcl9pZDogJycsXHJcbiAgICAgICAgICAgICAgICBjaGF0OiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBsb2FkTWVzc2FnZXModGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbWVudC5sb2NhbGUodGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmdldEZpZ2h0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnZXRGaWdodENoYXQ6IGZ1bmN0aW9uKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlnaHRzLycrdGhpcy4kcm91dGUucGFyYW1zLmlkKycvdGhyZWFkJykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdjaGF0JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0RmlnaHQ6IGZ1bmN0aW9uKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnX3dpdGgnIDogJ2ludml0YXRpb25zLnRlYW0saW52aXRhdGlvbnMudGVhbS5pbnN0aXR1dGlvbixpbnZpdGF0aW9ucy50ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uLGp1ZGdlLGNvbW1lbnRhdG9yLHRocmVhZHMnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWdodHMvJyt0aGlzLiRyb3V0ZS5wYXJhbXMuaWQrXCI/XCIrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWdodCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0LnN0YXJ0X2F0ID0gdGhpcy5kYXRlQ29udmVydFVUQyhmaWdodC5zdGFydF9hdCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2ZpZ2h0JywgZmlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoZW50aWNhdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5maWdodC5zdGF0dXMhPTMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWdodC5pbnZpdGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGludml0YXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnZpdGF0aW9uLnRlYW0uY2FwdF9pZD09X3NlbGYudXNlci5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9fc2VsZi5mb3JtLmV4dGVybl9tYXRjaF9pZCA9IGludml0YXRpb24uZXh0ZXJuX21hdGNoX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYuZm9ybS50d2l0Y2hfbGluayA9IGludml0YXRpb24udHdpdGNoX2xpbms7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW52aXRhdGlvbi5tYXRjaF9yZXN1bHQhPW51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYuZm9ybVJlc3VsdC5tYXRjaF9yZXN1bHQgPSBpbnZpdGF0aW9uLm1hdGNoX3Jlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VsZi5yZXN1bHRfMSA9IGludml0YXRpb24ubWF0Y2hfcmVzdWx0LnJlc3VsdF8xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmLnJlc3VsdF8yID0gaW52aXRhdGlvbi5tYXRjaF9yZXN1bHQucmVzdWx0XzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYud2lubmVyX2lkID0gaW52aXRhdGlvbi5tYXRjaF9yZXN1bHQud2lubmVyX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdF8xID0gdGhpcy5maWdodC5yZXN1bHQhPW51bGwgPyB0aGlzLmZpZ2h0LnJlc3VsdFswXTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdF8yID0gdGhpcy5maWdodC5yZXN1bHQhPW51bGwgPyB0aGlzLmZpZ2h0LnJlc3VsdFsxXSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5uZXJfaWQgPSB0aGlzLmZpZ2h0Lndpbm5lcl9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmNhcHRfaWQ9PXRoaXMudXNlci5pZCB8fCBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmNhcHRfaWQ9PXRoaXMudXNlci5pZCB8fCBmaWdodC5qdWRnZV9pZD09dGhpcy51c2VyLmlkIHx8IHRoaXMudXNlci5yb2xlX2lkPT0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmlnaHRDaGF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGVja1VwY29taW5nKHN0YXJ0X2F0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMSA9IG5ldyBEYXRlKHN0YXJ0X2F0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGQxLmdldFRpbWUoKS1kMi5nZXRUaW1lKCk+MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXRjaEV4U2F2ZSgpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnB1dCgnL2FwaS9maWdodHMvJyt0aGlzLmZpZ2h0LmlkKycvdGVhbXMvJyt0aGlzLnVzZXIudGVhbV9pZCkudGhlbigocmVzcG9uc2UpID0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWdodC5pbnZpdGF0aW9ucy5tYXAoZnVuY3Rpb24oaW52aXRhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW52aXRhdGlvbi50ZWFtLmNhcHRfaWQ9PV9zZWxmLnVzZXIuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52aXRhdGlvbi50d2l0Y2hfbGluayA9IF9zZWxmLmZvcm0udHdpdGNoX2xpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNhdmVSZXN1bHQoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybVJlc3VsdC5tYXRjaF9yZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHRfMScgOiB0aGlzLnJlc3VsdF8xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0XzInOiB0aGlzLnJlc3VsdF8yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2lubmVyX2lkJzogdGhpcy53aW5uZXJfaWRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1SZXN1bHQucHV0KCcvYXBpL2ZpZ2h0cy8nK3RoaXMuZmlnaHQuaWQrJy90ZWFtcy8nK3RoaXMudXNlci50ZWFtX2lkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzYXZlRmlnaHQoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUZpZ2h0LnJlc3VsdCA9IFt0aGlzLnJlc3VsdF8xLCB0aGlzLnJlc3VsdF8yXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1GaWdodC53aW5uZXJfaWQgPSB0aGlzLndpbm5lcl9pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1GaWdodC5wdXQoJy9hcGkvZmlnaHRzLycrdGhpcy5maWdodC5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgJyRyb3V0ZS5xdWVyeScobmV3UGFnZSwgb2xkUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGaWdodHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWF0Y2hlcy9kZXRhaWwudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgX3ZtLl9sKF92bS5wYXJ0aWNpcGFudHMsIGZ1bmN0aW9uKHBhcnRpY2lwYW50KSB7XG4gICAgICAgIHJldHVybiBfdm0ucGFydGljaXBhbnRzICE9IG51bGxcbiAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhwYXJ0aWNpcGFudC5uaWNrbmFtZSkgKyBcIiwgXCIpXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICB9KSxcbiAgICAgIDBcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGF0LXdpbmRvdyBtYXRjaC1jaGF0XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGF0LWNtcGx0LXdyYXAgY2hhdC1mb3Itd2lkZ2V0cy0xXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJlY2VudC1jaGF0LWJveC13cmFwXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmVjZW50LWNoYXQtd3JhcFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjaGF0LWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiY2hhdC1tZXNzYWdlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG1lc3NhZ2VzOiBfdm0ubWVzc2FnZXMsIGlzVHlwaW5nOiBfdm0uaXNUeXBpbmcgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJjaGF0LW5ldy1tZXNzYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcImFjdGl2ZS1jaGFubmVsXCI6IF92bS5hY3RpdmVDaGFubmVsIH0sXG4gICAgICAgICAgICAgICAgb246IHsgbWVzc2FnZUFkZGVkOiBfdm0ub25NZXNzYWdlQWRkZWQgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00Njg3OTAxNlwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ2ODc5MDE2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoQ2hhdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDY4NzkwMTZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hDaGF0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5maWdodCAhPSBudWxsXG4gICAgPyBfYyhcImNhcmRcIiwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2hcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IF92bS5maWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1sb2dvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy02NHB4IG1yLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyX3RlYW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW5zdGl0dXRpb24udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW5zdGl0dXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubG9jYXRpb24udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zdGF0dXNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHsgbmFtZTogXCJtYXRjaFwiLCBwYXJhbXM6IHsgaWQ6IF92bS5maWdodC5pZCB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zdGF0dXMtdnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0LmlkID09IDI0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtfdm0uX3YoXCJWUyAoYm81KVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW192bS5fdihcIlZTIChibzEpXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXN0YXR1cy1kYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXRjKF92bS5maWdodC5zdGFydF9hdCwgXCJZWVlZLU1NLUREIGg6bW06c3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIk1NTU0gRG8sIEhIOm1tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiINCc0KHQmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja1VwY29taW5nKF92bS5maWdodC5zdGFydF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zY29yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ1cGNvbWluZ1wiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uZmlnaHQud2lubmVyX2lkID4gMCAmJiBfdm0uZmlnaHQucmVzdWx0ICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtc2NvcmUgYmctZGFyay0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWdodC5yZXN1bHQgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChfdm0uZmlnaHQucmVzdWx0WzBdKSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KF92bS5maWdodC5yZXN1bHRbMV0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pZCA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlnaHQud2lubmVyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0LnJlc3VsdFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWdodC5yZXN1bHRbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBhcnNlSW50KF92bS5maWdodC5yZXN1bHRbMV0pID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KF92bS5maWdodC5yZXN1bHRbMF0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pZCA9PSBfdm0uZmlnaHQud2lubmVyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0LnJlc3VsdFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWdodC5yZXN1bHRbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWdodC5yZXN1bHRbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlnaHQucmVzdWx0WzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIjAgOiAwXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtc2NvcmUgYmctc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9ubGluZVwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBfdm0uZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaW5zdGl0dXRpb24udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaW5zdGl0dXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubG9jYXRpb24udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLWxvZ29cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTY0cHggbWwtMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJfdGVhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5jaGF0ICE9PSBudWxsICYmXG4gICAgICAgIChfdm0uZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5jYXB0X2lkID09IF92bS51c2VyLmlkIHx8XG4gICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uY2FwdF9pZCA9PSBfdm0udXNlci5pZCB8fFxuICAgICAgICAgIF92bS5maWdodC5qdWRnZV9pZCA9PSBfdm0udXNlci5pZCB8fFxuICAgICAgICAgIF92bS51c2VyLnJvbGVfaWQgPT0gMSlcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTEwIG1iLTMwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJtYXRjaC1jaGF0XCIsIHsgYXR0cnM6IHsgY2hhbm5lbDogX3ZtLmNoYXQgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5hdXRoZW50aWNhdGVkICYmXG4gICAgICAgIF92bS5maWdodC5zdGF0dXMgIT0gMiAmJlxuICAgICAgICBfdm0uZmlnaHQuc3RhdHVzICE9IDMgJiZcbiAgICAgICAgKF92bS5maWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmNhcHRfaWQgPT0gX3ZtLnVzZXIuaWQgfHxcbiAgICAgICAgICBfdm0uZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5jYXB0X2lkID09IF92bS51c2VyLmlkKVxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtMjBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1hdGNoRXhTYXZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJhbGVydC1zdWNjZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfdm0uJHQoXCJpbmZvX3VwZGF0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYWxlcnQtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidHdpdGNoX2xpbmtcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnR3aXRjaF9saW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50d2l0Y2hfbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwidHdpdGNoX2xpbmtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJodHRwczovL3d3dy50d2l0Y2gudHYvZXVsY3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidHdpdGNoX2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS50d2l0Y2hfbGluayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR3aXRjaF9saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhhcy1lcnJvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGQ6IFwidHdpdGNoX2xpbmtcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IG9mZnNldC1tZC0zIGQtZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbG9hZGluZzogX3ZtLmZvcm0uYnVzeSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwic2F2ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uYXV0aGVudGljYXRlZCAmJlxuICAgICAgICBfdm0uZmlnaHQuc3RhdHVzICE9IDIgJiZcbiAgICAgICAgX3ZtLmZpZ2h0LnN0YXR1cyAhPSAzICYmXG4gICAgICAgIChfdm0uZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5jYXB0X2lkID09IF92bS51c2VyLmlkIHx8XG4gICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uY2FwdF9pZCA9PSBfdm0udXNlci5pZClcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTIwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zYXZlUmVzdWx0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3JtUmVzdWx0Lm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJhbGVydC1zdWNjZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfdm0uJHQoXCJpbmZvX3VwZGF0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYWxlcnQtZXJyb3JcIiwgeyBhdHRyczogeyBmb3JtOiBfdm0uZm9ybVJlc3VsdCB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibWF0Y2hfcmVzdWx0XCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZXN1bHRfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZXN1bHRfMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5yZXN1bHRfMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXN1bHRfMSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEgY29sLWZvcm0tbGFiZWwgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVzdWx0XzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVzdWx0XzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucmVzdWx0XzIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVzdWx0XzIgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIndpbm5lclwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLndpbm5lcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndpbm5lcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLndpbm5lcl9pZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlnaHQuaW52aXRhdGlvbnMsIGZ1bmN0aW9uKGludml0YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkb21Qcm9wczogeyB2YWx1ZTogaW52aXRhdGlvbi50ZWFtLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpbnZpdGF0aW9uLnRlYW0udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTcgb2Zmc2V0LW1kLTMgZC1mbGV4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsb2FkaW5nOiBfdm0uZm9ybVJlc3VsdC5idXN5IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJzYXZlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5hdXRoZW50aWNhdGVkICYmXG4gICAgICAgIF92bS5maWdodC5qdWRnZV9pZCA9PSBfdm0udXNlci5pZCAmJlxuICAgICAgICBfdm0uZmlnaHQuc3RhdHVzICE9IDNcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0yMFwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZmlnaHQuaW52aXRhdGlvbnMsIGZ1bmN0aW9uKGludml0YXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tNiBjb2wteHMtNlwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGludml0YXRpb24ubWF0Y2hfcmVzdWx0ICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtNSBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm1hdGNoX3Jlc3VsdFwiKSkgKyBcIjpcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IGNvbC1mb3JtLWxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGludml0YXRpb24ubWF0Y2hfcmVzdWx0LnJlc3VsdF8xKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGludml0YXRpb24ubWF0Y2hfcmVzdWx0LnJlc3VsdF8yKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgaW52aXRhdGlvbi5tYXRjaF9yZXN1bHQgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC01IGNvbC1mb3JtLWxhYmVsIHRleHQtbWQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwid2lubmVyXCIpKSArIFwiOlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTcgY29sLWZvcm0tbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludml0YXRpb24ubWF0Y2hfcmVzdWx0Lndpbm5lcl9pZCA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uYXV0aGVudGljYXRlZCAmJlxuICAgICAgICBfdm0uZmlnaHQuanVkZ2VfaWQgPT0gX3ZtLnVzZXIuaWQgJiZcbiAgICAgICAgX3ZtLmZpZ2h0LnN0YXR1cyAhPSAzXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0yMFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZUZpZ2h0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3JtRmlnaHQub25LZXlkb3duKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImFsZXJ0LXN1Y2Nlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogX3ZtLmZvcm1GaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogX3ZtLiR0KFwiaW5mb191cGRhdGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImFsZXJ0LWVycm9yXCIsIHsgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm1GaWdodCB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtMyBjb2wtZm9ybS1sYWJlbCB0ZXh0LW1kLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwibWF0Y2hfcmVzdWx0XCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZXN1bHRfMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZXN1bHRfMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5yZXN1bHRfMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXN1bHRfMSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEgY29sLWZvcm0tbGFiZWwgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6XFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVzdWx0XzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVzdWx0XzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucmVzdWx0XzIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVzdWx0XzIgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTMgY29sLWZvcm0tbGFiZWwgdGV4dC1tZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIndpbm5lclwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLndpbm5lcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndpbm5lcl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLndpbm5lcl9pZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlnaHQuaW52aXRhdGlvbnMsIGZ1bmN0aW9uKGludml0YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkb21Qcm9wczogeyB2YWx1ZTogaW52aXRhdGlvbi50ZWFtLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpbnZpdGF0aW9uLnRlYW0udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTcgb2Zmc2V0LW1kLTMgZC1mbGV4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBsb2FkaW5nOiBfdm0uZm9ybUZpZ2h0LmJ1c3kgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcInNhdmVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtMjBcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uZmlnaHQuanVkZ2UgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImp1ZGdlXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiOiBcIiArIF92bS5fcyhfdm0uZmlnaHQuanVkZ2UubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5maWdodC5qdWRnZS5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5maWdodC5jb21tZW50YXRvciAhPSBudWxsXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTIwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNvbW1lbnRhdG9yXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiOiBcIiArIF92bS5fcyhfdm0uZmlnaHQuY29tbWVudGF0b3IubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5maWdodC5jb21tZW50YXRvci5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWYzZjNlNGVjXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZjNmM2U0ZWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi1mM2YzZTRlY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWF0Y2hlcy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01hdGNoQ2hhdC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NYXRjaENoYXQudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00Njg3OTAxNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01hdGNoQ2hhdC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hDaGF0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00Njg3OTAxNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ2ODc5MDE2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoQ2hhdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoQ2hhdC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWYzZjNlNGVjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbWF0Y2hlcy9kZXRhaWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWYzZjNlNGVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjNmM2U0ZWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL21hdGNoZXMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9