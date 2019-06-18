webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/MatchList.vue":
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
    props: ["filter"],

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

            if (this.filter !== null) {
                for (var prop in this.filter) {
                    if (this.filter.hasOwnProperty(prop)) {
                        queryStartParams[prop] = this.filter[prop];
                    }
                }
            }

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/tournaments/detail.vue":
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

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _sweetalert = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _i18n = __webpack_require__("./resources/assets/js/plugins/i18n.js");

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _MatchList = __webpack_require__("./resources/assets/js/components/MatchList.vue");

var _MatchList2 = _interopRequireDefault(_MatchList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { MatchList: _MatchList2.default },
    metaInfo: function metaInfo() {
        return {
            title: this.title
        };
    },

    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        authenticated: 'auth/check',
        locale: 'lang/locale'
    }), {

        teamsInTournament: function teamsInTournament() {

            var teamsInTournament = [];

            if (this.tournament.teams != undefined && this.tournament.teams.length > 0) {
                this.tournament.teams.forEach(function (team) {
                    if (team.length > 0) teamsInTournament.push(team.id);
                });
            }

            return teamsInTournament;
        }
    }),
    mounted: function mounted() {
        this.getTournament();
    },

    data: function data() {
        return {
            title: 'Detail tournament',
            tournament: null,
            fights: null,
            status_list: [{ id: 0, title: 'Все' }, { id: 1, title: 'Прошедшие' }, { id: 2, title: "Онлайн" }, { id: 3, title: "Предстоящие" }],
            match_filter: { 'tournament_id': this.$route.params.id },
            status_id: null,
            success: false,
            error: false,
            response: null
        };
    },
    methods: {
        getTournament: function getTournament() {
            var _this = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var query, response, winners_part, prize_pool, prizes;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                query = _this.ArrayToUrl({
                                    '_with': 'game,fights,fights.invitations.team,fights.winner'
                                });
                                _context.prev = 1;
                                _context.next = 4;
                                return _axios2.default.get('/api/tournaments/' + _this.$route.params.id + "?" + query);

                            case 4:
                                response = _context.sent;

                                _this.$set(_this, 'tournament', response.data);
                                _this.tournament.start_at = _this.dateConvertUTC(_this.tournament.start_at, -1);
                                _this.tournament.register_start = _this.dateConvertUTC(_this.tournament.register_start, -1);

                                winners_part = _this.tournament.winners_part.split(",");
                                prize_pool = parseInt(_this.tournament.prize_pool);
                                prizes = [];


                                winners_part.forEach(function (part) {
                                    prizes.push(parseInt(part) * prize_pool / 100);
                                });

                                _this.tournament.prizes = prizes;
                                _this.title = _this.tournament.title;
                                _this.$meta().refresh();

                                _this.getTournamentTeams();
                                _this.getTournamentBrackets();

                                _context.next = 22;
                                break;

                            case 19:
                                _context.prev = 19;
                                _context.t0 = _context['catch'](1);

                                _this.errors.push(_context.t0);

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[1, 19]]);
            }))();
        },
        getTournamentTeams: function getTournamentTeams() {
            var _this2 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                var query, response;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                query = _this2.ArrayToUrl({
                                    '_with': 'fights,users,institution.location,institution.location.parent'
                                });
                                _context2.next = 4;
                                return _axios2.default.get('/api/tournaments/' + _this2.$route.params.id + "/teams?" + query);

                            case 4:
                                response = _context2.sent;

                                _this2.$set(_this2.tournament, 'teams', response.data);
                                _context2.next = 11;
                                break;

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](0);

                                _this2.errors.push(_context2.t0);

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[0, 8]]);
            }))();
        },
        getTournamentBrackets: function getTournamentBrackets() {
            var _this3 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                var response;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _axios2.default.get('/api/tournaments/' + _this3.$route.params.id + "/brackets");

                            case 3:
                                response = _context3.sent;

                                _this3.$set(_this3.tournament, 'brackets', response.data);
                                _context3.next = 10;
                                break;

                            case 7:
                                _context3.prev = 7;
                                _context3.t0 = _context3['catch'](0);

                                _this3.errors.push(_context3.t0);

                            case 10:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this3, [[0, 7]]);
            }))();
        },

        register: function register() {
            var _this4 = this;

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

                _this4.getTournamentTeams();
            }).catch(function (error) {

                (0, _sweetalert2.default)({
                    type: 'warning',
                    title: 'Error!',
                    html: error.response.data.error
                });
            });
        },
        checkRigisterStart: function checkRigisterStart() {
            return this.moment.utc().isAfter(this.tournament.register_start);
        },
        checkRigisterEnd: function checkRigisterEnd() {
            return this.moment.utc().isBefore(this.moment(this.tournament.start_at).subtract(1, 'hours'));
        },
        checkRegistered: function checkRegistered(value) {
            return this.teamsInTournament.indexOf(value) > -1 ? true : false;
        },
        checkUpcoming: function checkUpcoming(start_at) {
            var d1 = new Date(start_at);
            var d2 = new Date();
            if (d1.getTime() - d2.getTime() > 0) return true;

            return false;
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-016f6833\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournaments/detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.tournament != null
        ? _c("card", { attrs: { title: _vm.tournament.title } }, [
            _c("div", { staticClass: "nk-tabs" }, [
              _c(
                "ul",
                { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
                [
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link active",
                        attrs: {
                          href: "#tabs-1-1",
                          role: "tab",
                          "data-toggle": "tab"
                        }
                      },
                      [_vm._v("Лобби")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          href: "#tabs-1-5",
                          role: "tab",
                          "data-toggle": "tab"
                        }
                      },
                      [_vm._v("Правила")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          href: "#tabs-1-2",
                          role: "tab",
                          "data-toggle": "tab"
                        }
                      },
                      [_vm._v("Команды")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          href: "#tabs-1-3",
                          role: "tab",
                          "data-toggle": "tab"
                        }
                      },
                      [_vm._v("Матчи")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          href: "#tabs-1-4",
                          role: "tab",
                          "data-toggle": "tab"
                        }
                      },
                      [_vm._v("Сетка")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "tab-content" }, [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade show active",
                    attrs: { role: "tabpanel", id: "tabs-1-1" }
                  },
                  [
                    _c("div", { staticClass: "nk-gap" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row vertical-gap" }, [
                      _c("div", { staticClass: "col-md-4 col-xs-6" }, [
                        _c("img", {
                          staticClass: "w-100",
                          attrs: {
                            src: _vm.getImageLink(
                              _vm.tournament.image,
                              "avatar_team"
                            )
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "aside",
                        { staticClass: "col-lg-8 nk-sidebar-sticky-parent" },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-lg-6" }, [
                              _c("dl", [
                                _c("dt", { staticClass: "mb-5" }, [
                                  _vm._v(
                                    _vm._s(_vm.$t("tournament_start_time")) +
                                      ":"
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "dd",
                                  {
                                    staticClass:
                                      "mb-15 txt-dark font-13 weight-500"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm
                                          .moment(
                                            _vm.tournament.start_at,
                                            "YYYY-MM-DD h:mm:ss"
                                          )
                                          .format("D MMM, HH:mm")
                                      ) + " МСК"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("dt", { staticClass: "mb-5" }, [
                                  _vm._v(_vm._s(_vm.$t("reg_until")) + ":")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "dd",
                                  {
                                    staticClass:
                                      "mb-10 txt-dark font-13 weight-500"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm
                                          .moment(
                                            _vm.tournament.start_at,
                                            "YYYY-MM-DD h:mm:ss"
                                          )
                                          .subtract(1, "hours")
                                          .format("D MMM, HH:mm")
                                      ) + " МСК"
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg-6" }, [
                              _c("dl", [
                                _c("dt", { staticClass: "mb-5" }, [
                                  _vm._v(_vm._s(_vm.$t("teams")) + ":")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "dd",
                                  {
                                    staticClass:
                                      "mb-10 txt-dark font-13 weight-500"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.tournament.teams.length) +
                                        " / " +
                                        _vm._s(_vm.tournament.count_teams)
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("dt", { staticClass: "mb-5" }, [
                                  _vm._v(_vm._s(_vm.$t("game")) + ":")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "dd",
                                  {
                                    staticClass:
                                      "mb-10 txt-dark font-13 weight-500"
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name: "game",
                                            params: {
                                              gameId: _vm.tournament.game.id
                                            }
                                          },
                                          title: _vm.tournament.game.title
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.getImageLink(
                                              _vm.tournament.game.logo_mini
                                            ),
                                            width: "35",
                                            alt: _vm.tournament.game.title
                                          }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", {
                              staticClass: "col-lg-12 text-white",
                              domProps: {
                                innerHTML: _vm._s(_vm.tournament.description)
                              }
                            })
                          ])
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "tabs-1-2" }
                  },
                  [
                    _c("div", { staticClass: "nk-gap" }),
                    _vm._v(" "),
                    _vm.tournament != null &&
                    _vm.tournament.teams !== null &&
                    _vm.tournament.teams.length > 0
                      ? _c("table", { staticClass: "nk-table" }, [
                          _c(
                            "tbody",
                            [
                              _c("tr", [
                                _c("th", [_vm._v(_vm._s(_vm.$t("title")))]),
                                _vm._v(" "),
                                _c("th", [_vm._v(_vm._s(_vm.$t("region")))]),
                                _vm._v(" "),
                                _c("th", [_vm._v(_vm._s(_vm.$t("players")))]),
                                _vm._v(" "),
                                _c("th", [_vm._v(_vm._s(_vm.$t("game")))]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.$t("count_matches")))
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.$t("count_wins")))
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.$t("victory_rate")))
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.tournament.teams, function(team) {
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
                                          _c("span", [
                                            _vm._v(_vm._s(team.title))
                                          ])
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      team.institution_id > 0
                                        ? [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  team.institution.location
                                                    .parent.title
                                                ) +
                                                ",\n                                    " +
                                                _vm._s(
                                                  team.institution.location
                                                    .title
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        : _vm._e()
                                    ],
                                    2
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
                                                  params: {
                                                    gameId:
                                                      _vm.tournament.game.id
                                                  }
                                                },
                                                title: _vm.tournament.game.title
                                              }
                                            },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: _vm.getImageLink(
                                                    _vm.tournament.game
                                                      .logo_mini
                                                  ),
                                                  width: "35",
                                                  alt: _vm.tournament.game.title
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
                                      ])
                                ])
                              })
                            ],
                            2
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("pagination", { attrs: { pagination: _vm.pagination } }),
                    _vm._v(" "),
                    _c("div", { staticClass: "nk-gap" })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "tabs-1-3" }
                  },
                  [
                    _c("div", { staticClass: "nk-gap" }),
                    _vm._v(" "),
                    _c("match-list", { attrs: { filter: _vm.match_filter } }),
                    _vm._v(" "),
                    _c("div", { staticClass: "nk-gap" })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "tab-pane fade",
                  attrs: { role: "tabpanel", id: "tabs-1-4" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "tabs-1-5" }
                  },
                  [
                    _c("div", { staticClass: "nk-gap" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-30" }, [
                      _c("div", {
                        staticClass: "col-lg-12 text-white",
                        domProps: { innerHTML: _vm._s(_vm.tournament.rules) }
                      })
                    ])
                  ]
                )
              ])
            ])
          ])
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-016f6833", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-410f9a5c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/MatchList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
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
                  return fight.invitations != null
                    ? _c("div", { staticClass: "nk-match" }, [
                        _c(
                          "div",
                          { staticClass: "nk-match-team-left" },
                          [
                            fight.invitations[0].team != null
                              ? _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "team",
                                        params: {
                                          id: fight.invitations[0].team.id
                                        }
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "nk-match-team-logo" },
                                      [
                                        _c("img", {
                                          staticClass: "w-64px mr-10",
                                          attrs: {
                                            src: _vm.getImageLink(
                                              fight.invitations[0].team.image,
                                              "avatar_team"
                                            )
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "nk-match-team-name" },
                                      [
                                        fight.invitations[0].team.institution !=
                                        null
                                          ? [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(
                                                    fight.invitations[0].team
                                                      .institution.title
                                                  ) +
                                                  ", " +
                                                  _vm._s(
                                                    fight.invitations[0].team
                                                      .institution.location
                                                      .title
                                                  ) +
                                                  ","
                                              ),
                                              _c("br")
                                            ]
                                          : _vm._e(),
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              fight.invitations[0].team.title
                                            ) +
                                            "\n                        "
                                        )
                                      ],
                                      2
                                    )
                                  ]
                                )
                              : _vm._e()
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
                                  to: {
                                    name: "match",
                                    params: { id: fight.id }
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "nk-match-status-vs" },
                                  [
                                    fight.id == 24
                                      ? [_vm._v("VS (bo5)")]
                                      : [_vm._v("VS (bo3)")]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "nk-match-status-date" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.moment
                                          .utc(
                                            fight.start_at,
                                            "YYYY-MM-DD h:mm:ss"
                                          )
                                          .format("MMMM Do, HH:mm")
                                      ) + " МСК"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.checkUpcoming(fight.start_at)
                                  ? [
                                      _c(
                                        "span",
                                        { staticClass: "nk-match-score" },
                                        [_vm._v(_vm._s(_vm.$t("upcoming")))]
                                      )
                                    ]
                                  : fight.winner_id > 0 && fight.result != null
                                  ? [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "nk-match-score bg-dark-1"
                                        },
                                        [
                                          parseInt(fight.result[0]) >
                                            parseInt(fight.result[1]) &&
                                          fight.invitations[0].team.id ==
                                            fight.winner_id
                                            ? [
                                                _vm._v(
                                                  "\n                                " +
                                                    _vm._s(fight.result[0]) +
                                                    " : " +
                                                    _vm._s(fight.result[1]) +
                                                    "\n                            "
                                                )
                                              ]
                                            : parseInt(fight.result[1]) >
                                                parseInt(fight.result[0]) &&
                                              fight.invitations[1].team.id ==
                                                fight.winner_id
                                            ? [
                                                _vm._v(
                                                  "\n                                " +
                                                    _vm._s(fight.result[0]) +
                                                    " : " +
                                                    _vm._s(fight.result[1]) +
                                                    "\n                            "
                                                )
                                              ]
                                            : [
                                                _vm._v(
                                                  "\n                                " +
                                                    _vm._s(fight.result[1]) +
                                                    " : " +
                                                    _vm._s(fight.result[0]) +
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
                                        {
                                          staticClass:
                                            "nk-match-score bg-success"
                                        },
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
                            fight.invitations[1].team != null
                              ? _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "team",
                                        params: {
                                          id: fight.invitations[1].team.id
                                        }
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "nk-match-team-name" },
                                      [
                                        fight.invitations[1].team.institution !=
                                        null
                                          ? [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(
                                                    fight.invitations[1].team
                                                      .institution.title
                                                  ) +
                                                  ", " +
                                                  _vm._s(
                                                    fight.invitations[1].team
                                                      .institution.location
                                                      .title
                                                  ) +
                                                  ","
                                              ),
                                              _c("br")
                                            ]
                                          : _vm._e(),
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              fight.invitations[1].team.title
                                            ) +
                                            "\n                        "
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "nk-match-team-logo" },
                                      [
                                        _c("img", {
                                          staticClass: "w-64px ml-10",
                                          attrs: {
                                            src: _vm.getImageLink(
                                              fight.invitations[1].team.image,
                                              "avatar_team"
                                            )
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-410f9a5c", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/MatchList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchList_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/MatchList.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchList_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchList_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchList_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_410f9a5c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MatchList_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-410f9a5c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/MatchList.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_MatchList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_410f9a5c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MatchList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/MatchList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-410f9a5c", Component.options)
  } else {
    hotAPI.reload("data-v-410f9a5c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/js/pages/tournaments/detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/tournaments/detail.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_016f6833_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-016f6833\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournaments/detail.vue");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_016f6833_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/tournaments/detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-016f6833", Component.options)
  } else {
    hotAPI.reload("data-v-016f6833", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2RldGFpbC52dWU/NzBiZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hMaXN0LnZ1ZT9kNzA0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaExpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrR0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRUE7QUFDQSxxQkFEQTs7QUFHQSx5Q0FDQTtBQUNBLHlCQURBO0FBRUEsbUNBRkE7QUFHQTtBQUhBLE1BREEsQ0FIQTs7QUFXQSxRQVhBLGtCQVdBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDBCQUNBLHVCQURBLEVBRUEsNkJBRkEsRUFHQSwwQkFIQSxFQUlBLCtCQUpBLENBRkE7QUFRQSwyQkFSQTtBQVNBO0FBVEE7QUFXQSxLQXZCQTtBQXlCQSxXQXpCQSxxQkF5QkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREEsZUFFQSxFQUZBLENBRUEsUUFGQSxFQUVBO0FBQ0E7QUFDQSxhQUpBO0FBS0EsU0FOQTtBQU9BLEtBdkNBOztBQXdDQSxhQUNBO0FBQ0EsaUJBREEsdUJBRUE7QUFBQTs7QUFDQTtBQUNBLHlCQURBO0FBRUEsNEJBRkE7QUFHQSxvQ0FIQTtBQUlBO0FBSkE7O0FBT0Esc0NBQ0E7QUFDQSw4Q0FDQTtBQUNB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RSxrT0FBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRWMsZ0ZBQWlCOzs7Ozs7Ozs7QUN6Q2hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLHVEQUFrRTtBQUNuRztBQUM4YjtBQUNhO0FBQzNjO0FBQ3lRO0FBQ3pRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdVdBQWM7QUFDaEIsRUFBRSwrTkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRWMsZ0ZBQWlCIiwiZmlsZSI6ImpzLzcuZTVjYzI3OWZjNGI0NzNlOGY4YmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx0ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhdXRvY29tcGxldGU9XCJvZmZcIiBpZD1cImZpbHRlci1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInN0YXR1c19pZFwiIG5hbWU9XCJzdGF0dXNfaWRcIiBjbGFzcz0nZm9ybS1jb250cm9sJyBkYXRhLXN0eWxlPVwiZm9ybS1jb250cm9sIGJ0bi1kZWZhdWx0IGJ0bi1vdXRsaW5lXCIgaWQ9XCJzdGF0dXNfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJzdGF0dXMgaW4gc3RhdHVzX2xpc3RcIiB2LWJpbmQ6dmFsdWU9XCJzdGF0dXMuaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc3RhdHVzLnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvY2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcC0yXCI+PC9kaXY+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJmaWdodHMhPW51bGwgJiYgZmlnaHRzLmxlbmd0aD4wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstbWF0Y2hcIiB2LWZvcj1cImZpZ2h0IGluIGZpZ2h0c1wiIHYtaWY9XCJmaWdodC5pbnZpdGF0aW9ucyE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1tYXRjaC10ZWFtLWxlZnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayAgOnRvPVwieyBuYW1lOiAndGVhbScsIHBhcmFtczogeyBpZDogZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pZCB9fVwiIHYtaWY9XCJmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtIT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEltYWdlTGluayhmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmltYWdlLCAnYXZhdGFyX3RlYW0nKVwiIGNsYXNzPVwidy02NHB4IG1yLTEwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC10ZWFtLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW5zdGl0dXRpb24hPW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmluc3RpdHV0aW9uLnRpdGxlfX0sIHt7ZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbi50aXRsZX19LDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLnRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLW1hdGNoLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ21hdGNoJywgcGFyYW1zOiB7IGlkOiBmaWdodC5pZCB9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zdGF0dXMtdnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZ2h0LmlkPT0yNFwiPlZTIChibzUpPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlZTIChibzMpPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtc3RhdHVzLWRhdGVcIj57eyBtb21lbnQudXRjKGZpZ2h0LnN0YXJ0X2F0LCBcIllZWVktTU0tREQgaDptbTpzc1wiKS5mb3JtYXQoJ01NTU0gRG8sIEhIOm1tJykgfX0g0JzQodCaPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY2hlY2tVcGNvbWluZyhmaWdodC5zdGFydF9hdClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXNjb3JlXCI+e3skdCgndXBjb21pbmcnKX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJmaWdodC53aW5uZXJfaWQ+MCAmJiBmaWdodC5yZXN1bHQhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXNjb3JlIGJnLWRhcmstMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwicGFyc2VJbnQoZmlnaHQucmVzdWx0WzBdKT5wYXJzZUludChmaWdodC5yZXN1bHRbMV0pICYmIGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWQ9PWZpZ2h0Lndpbm5lcl9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZ2h0LnJlc3VsdFswXX19IDoge3tmaWdodC5yZXN1bHRbMV19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cInBhcnNlSW50KGZpZ2h0LnJlc3VsdFsxXSk+cGFyc2VJbnQoZmlnaHQucmVzdWx0WzBdKSAmJiBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmlkPT1maWdodC53aW5uZXJfaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5yZXN1bHRbMF19fSA6IHt7ZmlnaHQucmVzdWx0WzFdfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQucmVzdWx0WzFdfX0gOiB7e2ZpZ2h0LnJlc3VsdFswXX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXNjb3JlIGJnLXN1Y2Nlc3NcIj57eyR0KCdvbmxpbmUnKX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstbWF0Y2gtdGVhbS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0nLCBwYXJhbXM6IHsgaWQ6IGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaWQgfX1cIiB2LWlmPVwiZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbSE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC10ZWFtLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaW5zdGl0dXRpb24hPW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmluc3RpdHV0aW9uLnRpdGxlfX0sIHt7ZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbi50aXRsZX19LDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLnRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtdGVhbS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaW1hZ2UsICdhdmF0YXJfdGVhbScpXCIgY2xhc3M9XCJ3LTY0cHggbWwtMTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiPjwvcGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidHh0LWRhbmdlclwiPnt7JHQoJ25vX3Jlc3VsdHMnKX19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgICBpbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuICAgIGltcG9ydCB7IGxvYWRNZXNzYWdlcyB9IGZyb20gJ34vcGx1Z2lucy9pMThuJ1xyXG4gICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJmaWx0ZXJcIl0sXHJcblxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaycsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZmlnaHRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19saXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjAsIHRpdGxlOiAn0JLRgdC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjEsIHRpdGxlOiAn0J/RgNC+0YjQtdC00YjQuNC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjIsIHRpdGxlOiBcItCe0L3Qu9Cw0LnQvVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MywgdGl0bGU6IFwi0J/RgNC10LTRgdGC0L7Rj9GJ0LjQtVwifVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19pZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBsb2FkTWVzc2FnZXModGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbWVudC5sb2NhbGUodGhpcy5sb2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRGaWdodHMoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjc3RhdHVzX2xpc3RcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0KHRgtCw0YLRg9GBINC80LDRgtGH0LBcIlxyXG4gICAgICAgICAgICAgICAgfSkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZi5zdGF0dXNfaWQgPSAkKGUuY3VycmVudFRhcmdldCkuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdldEZpZ2h0cygpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5U3RhcnRQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYWdlJyA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdfbGltaXQnIDogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX3NvcnRcIiA6ICctc3RhcnRfYXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl93aXRoXCIgOiAnaW52aXRhdGlvbnMudGVhbSxpbnZpdGF0aW9ucy50ZWFtLmluc3RpdHV0aW9uLGludml0YXRpb25zLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24sd2lubmVyLGdhbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5maWx0ZXIhPT1udWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLmZpbHRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyLmhhc093blByb3BlcnR5KHByb3ApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5U3RhcnRQYXJhbXNbcHJvcF0gPSB0aGlzLmZpbHRlcltwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoZW50aWNhdGVkICYmIHRoaXMudXNlci5yb2xlX2lkIT0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyb3V0ZSA9ICcvYXBpL3RlYW1zLycrdGhpcy51c2VyLnRlYW1faWQrJy9maWdodHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnVzZXIudHlwZT09J3JlZmVyZWUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydqdWRnZV9pZCddID0gdGhpcy51c2VyLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJvdXRlID0gJy9hcGkvZmlnaHRzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJvdXRlID0gJy9hcGkvZmlnaHRzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdHVzX2lkPT0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snd2lubmVyX2lkLWd0J10gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdHVzX2lkPT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snd2lubmVyX2lkJ10gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydzdGFydF9hdC1zdCddID0gdGhpcy5tb21lbnQudXRjKCkuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0dXNfaWQ9PTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydzdGFydF9hdC1ndCddID0gdGhpcy5tb21lbnQudXRjKCkuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLlVybFBhcmFtc01lcmdlKHF1ZXJ5U3RhcnRQYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoYXJvdXRlKyc/JytxdWVyeSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZ2h0cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uKGZpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5zdGFydF9hdCA9IF9zZWxmLmRhdGVDb252ZXJ0VVRDKGZpZ2h0LnN0YXJ0X2F0LCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdmaWdodHMnLCBmaWdodHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGVja1VwY29taW5nKHN0YXJ0X2F0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMSA9IG5ldyBEYXRlKHN0YXJ0X2F0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGQxLmdldFRpbWUoKS1kMi5nZXRUaW1lKCk+MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICAnJHJvdXRlLnF1ZXJ5JyhuZXdQYWdlLCBvbGRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZpZ2h0cygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXNfaWQ6IGZ1bmN0aW9uKHZhbCwgb2xkVmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZpZ2h0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWUiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxjYXJkIDp0aXRsZT1cInRvdXJuYW1lbnQudGl0bGVcIiB2LWlmPVwidG91cm5hbWVudCE9bnVsbFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLXRhYnNcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBocmVmPVwiI3RhYnMtMS0xXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+0JvQvtCx0LHQuDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI3RhYnMtMS01XCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+0J/RgNCw0LLQuNC70LA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiN0YWJzLTEtMlwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPtCa0L7QvNCw0L3QtNGLPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjdGFicy0xLTNcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj7QnNCw0YLRh9C4PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjdGFicy0xLTRcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj7QodC10YLQutCwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cInRhYnMtMS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2ZXJ0aWNhbC1nYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEltYWdlTGluayh0b3VybmFtZW50LmltYWdlLCAnYXZhdGFyX3RlYW0nKVwiIGNsYXNzPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwiY29sLWxnLTggbmstc2lkZWJhci1zdGlja3ktcGFyZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzPVwibWItNVwiPnt7JHQoJ3RvdXJuYW1lbnRfc3RhcnRfdGltZScpfX06PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJtYi0xNSB0eHQtZGFyayBmb250LTEzIHdlaWdodC01MDBcIj57e21vbWVudCh0b3VybmFtZW50LnN0YXJ0X2F0LCBcIllZWVktTU0tREQgaDptbTpzc1wiKS5mb3JtYXQoJ0QgTU1NLCBISDptbScpIH19INCc0KHQmjwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzPVwibWItNVwiPnt7JHQoJ3JlZ191bnRpbCcpfX06PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJtYi0xMCB0eHQtZGFyayBmb250LTEzIHdlaWdodC01MDBcIj57e21vbWVudCh0b3VybmFtZW50LnN0YXJ0X2F0LCBcIllZWVktTU0tREQgaDptbTpzc1wiKS5zdWJ0cmFjdCgxLCAnaG91cnMnKS5mb3JtYXQoJ0QgTU1NLCBISDptbScpIH19INCc0KHQmjwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzPVwibWItNVwiPnt7JHQoJ3RlYW1zJyl9fTo8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzcz1cIm1iLTEwIHR4dC1kYXJrIGZvbnQtMTMgd2VpZ2h0LTUwMFwiPnt7dG91cm5hbWVudC50ZWFtcy5sZW5ndGh9fSAvIHt7IHRvdXJuYW1lbnQuY291bnRfdGVhbXN9fTwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzPVwibWItNVwiPnt7JHQoJ2dhbWUnKX19OjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzPVwibWItMTAgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdnYW1lJywgcGFyYW1zOiB7IGdhbWVJZDogdG91cm5hbWVudC5nYW1lLmlkIH19XCIgOnRpdGxlPVwidG91cm5hbWVudC5nYW1lLnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsodG91cm5hbWVudC5nYW1lLmxvZ29fbWluaSlcIiB3aWR0aD1cIjM1XCIgOmFsdD1cInRvdXJuYW1lbnQuZ2FtZS50aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC13aGl0ZVwiIHYtaHRtbD1cInRvdXJuYW1lbnQuZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwidGFicy0xLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJuay10YWJsZVwiIHYtaWY9XCJ0b3VybmFtZW50IT1udWxsICYmIHRvdXJuYW1lbnQudGVhbXMhPT1udWxsICYmIHRvdXJuYW1lbnQudGVhbXMubGVuZ3RoPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgndGl0bGUnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgncmVnaW9uJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ3BsYXllcnMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgnZ2FtZScpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdjb3VudF9tYXRjaGVzJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ2NvdW50X3dpbnMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgndmljdG9yeV9yYXRlJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwidGVhbSBpbiB0b3VybmFtZW50LnRlYW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0nLCBwYXJhbXM6IHsgaWQ6IHRlYW0uaWQgfX1cIiBjbGFzcz1cInZtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsodGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctNTBweCBtci0xMFwiIDphbHQ9XCJ0ZWFtLnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IHRlYW0udGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ0ZWFtLmluc3RpdHV0aW9uX2lkPjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbi5wYXJlbnQudGl0bGV9fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGVhbS5pbnN0aXR1dGlvbi5sb2NhdGlvbi50aXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjxyb3V0ZXItbGluayAgOnRvPVwieyBuYW1lOiAndGVhbS5kZXRhaWwucGxheWVycycsIHBhcmFtczogeyBzbHVnOiB0ZWFtLnNsdWcgfX1cIj57eyB0ZWFtLnVzZXJzLmxlbmd0aH19PC9yb3V0ZXItbGluaz4gLyB7eyB0ZWFtLnF1YW50aXR5fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1pZj1cInRlYW0uZ2FtZSE9PW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2dhbWUnLCBwYXJhbXM6IHsgZ2FtZUlkOiB0b3VybmFtZW50LmdhbWUuaWQgfX1cIiA6dGl0bGU9XCJ0b3VybmFtZW50LmdhbWUudGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEltYWdlTGluayh0b3VybmFtZW50LmdhbWUubG9nb19taW5pKVwiIHdpZHRoPVwiMzVcIiA6YWx0PVwidG91cm5hbWVudC5nYW1lLnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1lbHNlPjwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3t0ZWFtLmNvdW50X2ZpZ2h0c319PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7dGVhbS5jb3VudF93aW5zfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1pZj1cInRlYW0uY291bnRfZmlnaHRzPjBcIj57eyBOdW1iZXIoKHRlYW0uY291bnRfd2lucy90ZWFtLmNvdW50X2ZpZ2h0cyoxMDApLnRvRml4ZWQoMikpfX0lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtZWxzZT4wJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCI+PC9wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInRhYnMtMS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdGNoLWxpc3QgOmZpbHRlcj1cIm1hdGNoX2ZpbHRlclwiPjwvbWF0Y2gtbGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJ0YWJzLTEtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwidGFicy0xLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtd2hpdGVcIiB2LWh0bWw9XCJ0b3VybmFtZW50LnJ1bGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvY2FyZD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbiAgICBpbXBvcnQgeyBsb2FkTWVzc2FnZXMgfSBmcm9tICd+L3BsdWdpbnMvaTE4bidcclxuICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG4gICAgaW1wb3J0IE1hdGNoTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYXRjaExpc3RcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY29tcG9uZW50czoge01hdGNoTGlzdH0sXHJcbiAgICAgICAgbWV0YUluZm8gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcblxyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiAnbGFuZy9sb2NhbGUnXHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICAgICAgdGVhbXNJblRvdXJuYW1lbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVhbXNJblRvdXJuYW1lbnQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRvdXJuYW1lbnQudGVhbXMhPXVuZGVmaW5lZCAmJiB0aGlzLnRvdXJuYW1lbnQudGVhbXMubGVuZ3RoPjApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VybmFtZW50LnRlYW1zLmZvckVhY2goZnVuY3Rpb24gKHRlYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVhbS5sZW5ndGg+MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1zSW5Ub3VybmFtZW50LnB1c2godGVhbS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlYW1zSW5Ub3VybmFtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGV0YWlsIHRvdXJuYW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgdG91cm5hbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGZpZ2h0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19saXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjAsIHRpdGxlOiAn0JLRgdC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjEsIHRpdGxlOiAn0J/RgNC+0YjQtdC00YjQuNC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjIsIHRpdGxlOiBcItCe0L3Qu9Cw0LnQvVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MywgdGl0bGU6IFwi0J/RgNC10LTRgdGC0L7Rj9GJ0LjQtVwifVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1hdGNoX2ZpbHRlcjogeyd0b3VybmFtZW50X2lkJzogdGhpcy4kcm91dGUucGFyYW1zLmlkfSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19pZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kcyA6IHtcclxuICAgICAgICAgICAgYXN5bmMgZ2V0VG91cm5hbWVudCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuQXJyYXlUb1VybCh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ193aXRoJyA6ICdnYW1lLGZpZ2h0cyxmaWdodHMuaW52aXRhdGlvbnMudGVhbSxmaWdodHMud2lubmVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS90b3VybmFtZW50cy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCtcIj9cIitxdWVyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICd0b3VybmFtZW50JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VybmFtZW50LnN0YXJ0X2F0ID0gdGhpcy5kYXRlQ29udmVydFVUQyh0aGlzLnRvdXJuYW1lbnQuc3RhcnRfYXQsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdXJuYW1lbnQucmVnaXN0ZXJfc3RhcnQgPSB0aGlzLmRhdGVDb252ZXJ0VVRDKHRoaXMudG91cm5hbWVudC5yZWdpc3Rlcl9zdGFydCwgLTEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvdW50IHByaXplc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aW5uZXJzX3BhcnQgPSB0aGlzLnRvdXJuYW1lbnQud2lubmVyc19wYXJ0LnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJpemVfcG9vbCA9IHBhcnNlSW50KHRoaXMudG91cm5hbWVudC5wcml6ZV9wb29sKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJpemVzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbm5lcnNfcGFydC5mb3JFYWNoKGZ1bmN0aW9uKHBhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml6ZXMucHVzaChwYXJzZUludChwYXJ0KSpwcml6ZV9wb29sLzEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudC5wcml6ZXMgPSBwcml6ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMudG91cm5hbWVudC50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXRhKCkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnRUZWFtcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG91cm5hbWVudEJyYWNrZXRzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGdldFRvdXJuYW1lbnRUZWFtcygpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5BcnJheVRvVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ193aXRoJyA6ICdmaWdodHMsdXNlcnMsaW5zdGl0dXRpb24ubG9jYXRpb24saW5zdGl0dXRpb24ubG9jYXRpb24ucGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS90b3VybmFtZW50cy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCtcIi90ZWFtcz9cIitxdWVyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudG91cm5hbWVudCwgJ3RlYW1zJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgZ2V0VG91cm5hbWVudEJyYWNrZXRzKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS90b3VybmFtZW50cy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCtcIi9icmFja2V0c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy50b3VybmFtZW50LCAnYnJhY2tldHMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hdXRoZW50aWNhdGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2xvZ2luJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy51c2VyLnRlYW1faWQ9PW51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7IHR5cGU6ICd3YXJuaW5nJywgdGl0bGU6ICdFcnJvciEnLCBodG1sOiAnWW91IG5lZWQgdG8gYmUgaW4gdGhlIHRlYW0uJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90b3VybmFtZW50cy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCsnL3RlYW1zLycrdGhpcy51c2VyLnRlYW1faWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogJ1lvdSBhcmUgcmVnaXN0ZXJlZCBvbiB0aGUgdG91cm5hbWVudCEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG91cm5hbWVudFRlYW1zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja1JpZ2lzdGVyU3RhcnQoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnQudXRjKCkuaXNBZnRlcih0aGlzLnRvdXJuYW1lbnQucmVnaXN0ZXJfc3RhcnQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja1JpZ2lzdGVyRW5kKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9tZW50LnV0YygpLmlzQmVmb3JlKHRoaXMubW9tZW50KHRoaXMudG91cm5hbWVudC5zdGFydF9hdCkuc3VidHJhY3QoMSwgJ2hvdXJzJykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja1JlZ2lzdGVyZWQodmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRlYW1zSW5Ub3VybmFtZW50LmluZGV4T2YodmFsdWUpID4gLTEgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoZWNrVXBjb21pbmcoc3RhcnRfYXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkMSA9IG5ldyBEYXRlKHN0YXJ0X2F0KTtcclxuICAgICAgICAgICAgICAgIHZhciBkMiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihkMS5nZXRUaW1lKCktZDIuZ2V0VGltZSgpPjApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9kZXRhaWwudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS50b3VybmFtZW50ICE9IG51bGxcbiAgICAgICAgPyBfYyhcImNhcmRcIiwgeyBhdHRyczogeyB0aXRsZTogX3ZtLnRvdXJuYW1lbnQudGl0bGUgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLXRhYnNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFic1wiLCBhdHRyczogeyByb2xlOiBcInRhYmxpc3RcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI3RhYnMtMS0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCb0L7QsdCx0LhcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI3RhYnMtMS01XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCf0YDQsNCy0LjQu9CwXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiN0YWJzLTEtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQmtC+0LzQsNC90LTRi1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjdGFicy0xLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0JzQsNGC0YfQuFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjdGFicy0xLTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KHQtdGC0LrQsFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiwgaWQ6IFwidGFicy0xLTFcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB2ZXJ0aWNhbC1nYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb2wteHMtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG91cm5hbWVudC5pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyX3RlYW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhc2lkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOCBuay1zaWRlYmFyLXN0aWNreS1wYXJlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZHRcIiwgeyBzdGF0aWNDbGFzczogXCJtYi01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJ0b3VybmFtZW50X3N0YXJ0X3RpbWVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWItMTUgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQuc3RhcnRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJEIE1NTSwgSEg6bW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiINCc0KHQmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInJlZ191bnRpbFwiKSkgKyBcIjpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYi0xMCB0eHQtZGFyayBmb250LTEzIHdlaWdodC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9tZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG91cm5hbWVudC5zdGFydF9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZWVlZLU1NLUREIGg6bW06c3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnRyYWN0KDEsIFwiaG91cnNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJEIE1NTSwgSEg6bW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiINCc0KHQmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInRlYW1zXCIpKSArIFwiOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1iLTEwIHR4dC1kYXJrIGZvbnQtMTMgd2VpZ2h0LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udG91cm5hbWVudC50ZWFtcy5sZW5ndGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRvdXJuYW1lbnQuY291bnRfdGVhbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImdhbWVcIikpICsgXCI6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWItMTAgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJnYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogX3ZtLnRvdXJuYW1lbnQuZ2FtZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50b3VybmFtZW50LmdhbWUudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQuZ2FtZS5sb2dvX21pbmlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0udG91cm5hbWVudC5nYW1lLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnRvdXJuYW1lbnQuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIsIGlkOiBcInRhYnMtMS0yXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0udG91cm5hbWVudC50ZWFtcyAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0udG91cm5hbWVudC50ZWFtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ0aXRsZVwiKSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicmVnaW9uXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwbGF5ZXJzXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJnYW1lXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb3VudF9tYXRjaGVzXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiY291bnRfd2luc1wiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInZpY3RvcnlfcmF0ZVwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRvdXJuYW1lbnQudGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidm0tdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiB0ZWFtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTUwcHggbXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJfdGVhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IHRlYW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0ZWFtLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5pbnN0aXR1dGlvbl9pZCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudC50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW0uZGV0YWlsLnBsYXllcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogdGVhbS5zbHVnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGVhbS51c2Vycy5sZW5ndGgpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIC8gXCIgKyBfdm0uX3ModGVhbS5xdWFudGl0eSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmdhbWUgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJnYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b3VybmFtZW50LmdhbWUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udG91cm5hbWVudC5nYW1lLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b3VybmFtZW50LmdhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvX21pbmlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0udG91cm5hbWVudC5nYW1lLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0ZWFtLmNvdW50X2ZpZ2h0cykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW0uY291bnRfd2lucykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNvdW50X2ZpZ2h0cyA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ZWFtLmNvdW50X3dpbnMgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNvdW50X2ZpZ2h0cykgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjAlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7IGF0dHJzOiB7IHBhZ2luYXRpb246IF92bS5wYWdpbmF0aW9uIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIsIGlkOiBcInRhYnMtMS0zXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJtYXRjaC1saXN0XCIsIHsgYXR0cnM6IHsgZmlsdGVyOiBfdm0ubWF0Y2hfZmlsdGVyIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiwgaWQ6IFwidGFicy0xLTRcIiB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJ0YWJwYW5lbFwiLCBpZDogXCJ0YWJzLTEtNVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTMwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0udG91cm5hbWVudC5ydWxlcykgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTAxNmY2ODMzXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDE2ZjY4MzNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMDE2ZjY4MzNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImNhcmRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS13cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGF1dG9jb21wbGV0ZTogXCJvZmZcIiwgaWQ6IFwiZmlsdGVyLWZvcm1cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RhdHVzX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RhdHVzX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGF0dXNfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXN0eWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgYnRuLWRlZmF1bHQgYnRuLW91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic3RhdHVzX2xpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YXR1c19pZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc3RhdHVzX2xpc3QsIGZ1bmN0aW9uKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRvbVByb3BzOiB7IHZhbHVlOiBzdGF0dXMuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHN0YXR1cy50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtMlwiIH0pXG4gICAgICBdLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5maWdodHMgIT0gbnVsbCAmJiBfdm0uZmlnaHRzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC14cy0xMlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZpZ2h0cywgZnVuY3Rpb24oZmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmaWdodC5pbnZpdGF0aW9ucyAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tbGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tbG9nb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTY0cHggbXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyX3RlYW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW5zdGl0dXRpb24gIT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RpdHV0aW9uLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RpdHV0aW9uLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXN0YXR1c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXRjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBmaWdodC5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXN0YXR1cy12c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaWQgPT0gMjRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbX3ZtLl92KFwiVlMgKGJvNSlcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW192bS5fdihcIlZTIChibzMpXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXN0YXR1cy1kYXRlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXRjKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5zdGFydF9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZWVlZLU1NLUREIGg6bW06c3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIk1NTU0gRG8sIEhIOm1tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiDQnNCh0JpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrVXBjb21pbmcoZmlnaHQuc3RhcnRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtc2NvcmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInVwY29taW5nXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZ2h0Lndpbm5lcl9pZCA+IDAgJiYgZmlnaHQucmVzdWx0ICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmstbWF0Y2gtc2NvcmUgYmctZGFyay0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGZpZ2h0LnJlc3VsdFswXSkgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChmaWdodC5yZXN1bHRbMV0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lndpbm5lcl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlnaHQucmVzdWx0WzBdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZ2h0LnJlc3VsdFsxXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBhcnNlSW50KGZpZ2h0LnJlc3VsdFsxXSkgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZmlnaHQucmVzdWx0WzBdKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaWQgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lndpbm5lcl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlnaHQucmVzdWx0WzBdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZ2h0LnJlc3VsdFsxXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlnaHQucmVzdWx0WzFdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZ2h0LnJlc3VsdFswXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5rLW1hdGNoLXNjb3JlIGJnLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwib25saW5lXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbSAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGVhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLW5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbnN0aXR1dGlvbiAhPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGl0dXRpb24udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGl0dXRpb24ubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLWxvZ29cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy02NHB4IG1sLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhcl90ZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7IGF0dHJzOiB7IHBhZ2luYXRpb246IF92bS5wYWdpbmF0aW9uIH0gfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidHh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJub19yZXN1bHRzXCIpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDEwZjlhNWNcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00MTBmOWE1Y1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaExpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTQxMGY5YTVjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWF0Y2hMaXN0LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01hdGNoTGlzdC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQxMGY5YTVjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWF0Y2hMaXN0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQxMGY5YTVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDEwZjlhNWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hMaXN0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kZXRhaWwudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDE2ZjY4MzNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kZXRhaWwudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9kZXRhaWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTAxNmY2ODMzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDE2ZjY4MzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNyJdLCJzb3VyY2VSb290IjoiIn0=