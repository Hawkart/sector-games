webpackJsonp([5],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Brackets.vue":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        authenticated: 'auth/check',
        locale: 'lang/locale'
    })),

    data: function data() {
        return {
            brackets: [],
            pagination: []
        };
    },
    mounted: function mounted() {
        this.getTournamentBrackets();
    },

    methods: {
        getTournamentBrackets: function getTournamentBrackets() {
            var _this = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var response;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _axios2.default.get('/api/tournaments/' + _this.$route.params.id + "/brackets");

                            case 3:
                                response = _context.sent;

                                _this.$set(brackets, 'brackets', response.data);
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);

                                _this.errors.push(_context.t0);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[0, 7]]);
            }))();
        },
        convertTime: function convertTime(start_at) {
            return this.dateConvertUTC(start_at, -1);
        }
    }
};

/***/ }),

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

var _Brackets = __webpack_require__("./resources/assets/js/components/Brackets.vue");

var _Brackets2 = _interopRequireDefault(_Brackets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { Brackets: _Brackets2.default, MatchList: _MatchList2.default },
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
                                _context.next = 21;
                                break;

                            case 18:
                                _context.prev = 18;
                                _context.t0 = _context['catch'](1);

                                _this.errors.push(_context.t0);

                            case 21:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[1, 18]]);
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

        register: function register() {
            var _this3 = this;

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

                _this3.getTournamentTeams();
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
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "tabs-1-4" }
                  },
                  [
                    _c("div", { staticClass: "nk-gap" }),
                    _vm._v(" "),
                    _c("brackets")
                  ],
                  1
                ),
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-260a0482\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Brackets.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tournament-bracket tournament-bracket--rounded" },
    [
      _vm._l(_vm.brackets, function(bracket) {
        return _c(
          "div",
          {
            key: bracket.round.id,
            staticClass:
              "tournament-bracket__round tournament-bracket__round--quarterfinals"
          },
          [
            _c("h3", { staticClass: "tournament-bracket__round-title" }, [
              _vm._v(_vm._s(bracket.round.title))
            ]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "tournament-bracket__list" },
              _vm._l(bracket.matches, function(match) {
                return _c(
                  "li",
                  { key: match.id, staticClass: "tournament-bracket__item" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "tournament-bracket__match",
                        attrs: { tabindex: "0" }
                      },
                      [
                        _c(
                          "table",
                          { staticClass: "tournament-bracket__table" },
                          [
                            _c(
                              "caption",
                              { staticClass: "tournament-bracket__caption" },
                              [
                                _c(
                                  "time",
                                  { attrs: { datetime: "1998-02-18" } },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm
                                          .moment(
                                            _vm.convertTime(match.start_at),
                                            "YYYY-MM-DD h:mm:ss"
                                          )
                                          .format("D MMM, HH:mm")
                                      ) + " МСК"
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(0, true),
                            _vm._v(" "),
                            _vm._m(1, true)
                          ]
                        )
                      ]
                    )
                  ]
                )
              }),
              0
            )
          ]
        )
      }),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4)
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "sr-only" }, [
      _c("tr", [
        _c("th", [_vm._v("Country")]),
        _vm._v(" "),
        _c("th", [_vm._v("Score")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tbody", { staticClass: "tournament-bracket__content" }, [
      _c(
        "tr",
        {
          staticClass:
            "tournament-bracket__team tournament-bracket__team--winner"
        },
        [
          _c("td", { staticClass: "tournament-bracket__country" }, [
            _c(
              "abbr",
              {
                staticClass: "tournament-bracket__code",
                attrs: { title: "Canada" }
              },
              [_vm._v("CAN")]
            ),
            _vm._v(" "),
            _c("span", {
              staticClass: "tournament-bracket__flag flag-icon flag-icon-ca",
              attrs: { "aria-label": "Flag" }
            })
          ]),
          _vm._v(" "),
          _c("td", { staticClass: "tournament-bracket__score" }, [
            _c("span", { staticClass: "tournament-bracket__number" }, [
              _vm._v("4")
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("tr", { staticClass: "tournament-bracket__team" }, [
        _c("td", { staticClass: "tournament-bracket__country" }, [
          _c(
            "abbr",
            {
              staticClass: "tournament-bracket__code",
              attrs: { title: "Kazakhstan" }
            },
            [_vm._v("KAZ")]
          ),
          _vm._v(" "),
          _c("span", {
            staticClass: "tournament-bracket__flag flag-icon flag-icon-kz",
            attrs: { "aria-label": "Flag" }
          })
        ]),
        _vm._v(" "),
        _c("td", { staticClass: "tournament-bracket__score" }, [
          _c("span", { staticClass: "tournament-bracket__number" }, [
            _vm._v("1")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "tournament-bracket__round tournament-bracket__round--semifinals"
      },
      [
        _c("h3", { staticClass: "tournament-bracket__round-title" }, [
          _vm._v("Semifinals")
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "tournament-bracket__list" }, [
          _c("li", { staticClass: "tournament-bracket__item" }, [
            _c(
              "div",
              {
                staticClass: "tournament-bracket__match",
                attrs: { tabindex: "0" }
              },
              [
                _c("table", { staticClass: "tournament-bracket__table" }, [
                  _c(
                    "caption",
                    { staticClass: "tournament-bracket__caption" },
                    [
                      _c("time", { attrs: { datetime: "1998-02-20" } }, [
                        _vm._v("20 February 1998")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("thead", { staticClass: "sr-only" }, [
                    _c("tr", [
                      _c("th", [_vm._v("Country")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Score")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", { staticClass: "tournament-bracket__content" }, [
                    _c("tr", { staticClass: "tournament-bracket__team" }, [
                      _c("td", { staticClass: "tournament-bracket__country" }, [
                        _c(
                          "abbr",
                          {
                            staticClass: "tournament-bracket__code",
                            attrs: { title: "Canada" }
                          },
                          [_vm._v("CAN")]
                        ),
                        _vm._v(" "),
                        _c("span", {
                          staticClass:
                            "tournament-bracket__flag flag-icon flag-icon-ca",
                          attrs: { "aria-label": "Flag" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "tournament-bracket__score" }, [
                        _c(
                          "span",
                          { staticClass: "tournament-bracket__number" },
                          [_vm._v("1")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tr",
                      {
                        staticClass:
                          "tournament-bracket__team tournament-bracket__team--winner"
                      },
                      [
                        _c(
                          "td",
                          { staticClass: "tournament-bracket__country" },
                          [
                            _c(
                              "abbr",
                              {
                                staticClass: "tournament-bracket__code",
                                attrs: { title: "Czech Republic" }
                              },
                              [_vm._v("CZE")]
                            ),
                            _vm._v(" "),
                            _c("span", {
                              staticClass:
                                "tournament-bracket__flag flag-icon flag-icon-cz",
                              attrs: { "aria-label": "Flag" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "tournament-bracket__score" }, [
                          _c(
                            "span",
                            { staticClass: "tournament-bracket__number" },
                            [_vm._v("2")]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "tournament-bracket__item" }, [
            _c(
              "div",
              {
                staticClass: "tournament-bracket__match",
                attrs: { tabindex: "0" }
              },
              [
                _c("table", { staticClass: "tournament-bracket__table" }, [
                  _c(
                    "caption",
                    { staticClass: "tournament-bracket__caption" },
                    [
                      _c("time", { attrs: { datetime: "1998-02-20" } }, [
                        _vm._v("20 February 1998")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("thead", { staticClass: "sr-only" }, [
                    _c("tr", [
                      _c("th", [_vm._v("Country")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Score")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", { staticClass: "tournament-bracket__content" }, [
                    _c("tr", { staticClass: "tournament-bracket__team" }, [
                      _c("td", { staticClass: "tournament-bracket__country" }, [
                        _c(
                          "abbr",
                          {
                            staticClass: "tournament-bracket__code",
                            attrs: { title: "Finland" }
                          },
                          [_vm._v("FIN")]
                        ),
                        _vm._v(" "),
                        _c("span", {
                          staticClass:
                            "tournament-bracket__flag flag-icon flag-icon-fi",
                          attrs: { "aria-label": "Flag" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "tournament-bracket__score" }, [
                        _c(
                          "span",
                          { staticClass: "tournament-bracket__number" },
                          [_vm._v("4")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tr",
                      {
                        staticClass:
                          "tournament-bracket__team tournament-bracket__team--winner"
                      },
                      [
                        _c(
                          "td",
                          { staticClass: "tournament-bracket__country" },
                          [
                            _c(
                              "abbr",
                              {
                                staticClass: "tournament-bracket__code",
                                attrs: { title: "Russia" }
                              },
                              [_vm._v("RUS")]
                            ),
                            _vm._v(" "),
                            _c("span", {
                              staticClass:
                                "tournament-bracket__flag flag-icon flag-icon-ru",
                              attrs: { "aria-label": "Flag" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "tournament-bracket__score" }, [
                          _c(
                            "span",
                            { staticClass: "tournament-bracket__number" },
                            [_vm._v("7")]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "tournament-bracket__round tournament-bracket__round--bronze"
      },
      [
        _c("h3", { staticClass: "tournament-bracket__round-title" }, [
          _vm._v("Bronze medal game")
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "tournament-bracket__list" }, [
          _c("li", { staticClass: "tournament-bracket__item" }, [
            _c(
              "div",
              {
                staticClass: "tournament-bracket__match",
                attrs: { tabindex: "0" }
              },
              [
                _c("table", { staticClass: "tournament-bracket__table" }, [
                  _c(
                    "caption",
                    { staticClass: "tournament-bracket__caption" },
                    [
                      _c("time", { attrs: { datetime: "1998-02-21" } }, [
                        _vm._v("21 February 1998")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("thead", { staticClass: "sr-only" }, [
                    _c("tr", [
                      _c("th", [_vm._v("Country")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Score")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", { staticClass: "tournament-bracket__content" }, [
                    _c(
                      "tr",
                      {
                        staticClass:
                          "tournament-bracket__team tournament-bracket__team--winner"
                      },
                      [
                        _c(
                          "td",
                          { staticClass: "tournament-bracket__country" },
                          [
                            _c(
                              "abbr",
                              {
                                staticClass: "tournament-bracket__code",
                                attrs: { title: "Finland" }
                              },
                              [_vm._v("FIN")]
                            ),
                            _vm._v(" "),
                            _c("span", {
                              staticClass:
                                "tournament-bracket__flag flag-icon flag-icon-fi",
                              attrs: { "aria-label": "Flag" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "tournament-bracket__score" }, [
                          _c(
                            "span",
                            { staticClass: "tournament-bracket__number" },
                            [_vm._v("3")]
                          ),
                          _vm._v(" "),
                          _c("span", {
                            staticClass:
                              "tournament-bracket__medal tournament-bracket__medal--bronze fa fa-trophy",
                            attrs: { "aria-label": "Bronze medal" }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("tr", { staticClass: "tournament-bracket__team" }, [
                      _c("td", { staticClass: "tournament-bracket__country" }, [
                        _c(
                          "abbr",
                          {
                            staticClass: "tournament-bracket__code",
                            attrs: { title: "Canada" }
                          },
                          [_vm._v("CAN")]
                        ),
                        _vm._v(" "),
                        _c("span", {
                          staticClass:
                            "tournament-bracket__flag flag-icon flag-icon-ca",
                          attrs: { "aria-label": "Flag" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "tournament-bracket__score" }, [
                        _c(
                          "span",
                          { staticClass: "tournament-bracket__number" },
                          [_vm._v("2")]
                        )
                      ])
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "tournament-bracket__round tournament-bracket__round--gold"
      },
      [
        _c("h3", { staticClass: "tournament-bracket__round-title" }, [
          _vm._v("Gold medal game")
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "tournament-bracket__list" }, [
          _c("li", { staticClass: "tournament-bracket__item" }, [
            _c(
              "div",
              {
                staticClass: "tournament-bracket__match",
                attrs: { tabindex: "0" }
              },
              [
                _c("table", { staticClass: "tournament-bracket__table" }, [
                  _c(
                    "caption",
                    { staticClass: "tournament-bracket__caption" },
                    [
                      _c("time", { attrs: { datetime: "1998-02-22" } }, [
                        _vm._v("22 February 1998")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("thead", { staticClass: "sr-only" }, [
                    _c("tr", [
                      _c("th", [_vm._v("Country")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Score")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", { staticClass: "tournament-bracket__content" }, [
                    _c(
                      "tr",
                      {
                        staticClass:
                          "tournament-bracket__team tournament-bracket__team--winner"
                      },
                      [
                        _c(
                          "td",
                          { staticClass: "tournament-bracket__country" },
                          [
                            _c(
                              "abbr",
                              {
                                staticClass: "tournament-bracket__code",
                                attrs: { title: "Czech Republic" }
                              },
                              [_vm._v("CZE")]
                            ),
                            _vm._v(" "),
                            _c("span", {
                              staticClass:
                                "tournament-bracket__flag flag-icon flag-icon-cz",
                              attrs: { "aria-label": "Flag" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "tournament-bracket__score" }, [
                          _c(
                            "span",
                            { staticClass: "tournament-bracket__number" },
                            [_vm._v("1")]
                          ),
                          _vm._v(" "),
                          _c("span", {
                            staticClass:
                              "tournament-bracket__medal tournament-bracket__medal--gold fa fa-trophy",
                            attrs: { "aria-label": "Gold medal" }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("tr", { staticClass: "tournament-bracket__team" }, [
                      _c("td", { staticClass: "tournament-bracket__country" }, [
                        _c(
                          "abbr",
                          {
                            staticClass: "tournament-bracket__code",
                            attrs: { title: "Russia" }
                          },
                          [_vm._v("RUS")]
                        ),
                        _vm._v(" "),
                        _c("span", {
                          staticClass:
                            "tournament-bracket__flag flag-icon flag-icon-ru",
                          attrs: { "aria-label": "Flag" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "tournament-bracket__score" }, [
                        _c(
                          "span",
                          { staticClass: "tournament-bracket__number" },
                          [_vm._v("0")]
                        ),
                        _vm._v(" "),
                        _c("span", {
                          staticClass:
                            "tournament-bracket__medal tournament-bracket__medal--silver fa fa-trophy",
                          attrs: { "aria-label": "Silver medal" }
                        })
                      ])
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-260a0482", esExports)
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

/***/ "./resources/assets/js/components/Brackets.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_Brackets_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Brackets.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_Brackets_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_Brackets_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_Brackets_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_Brackets_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_260a0482_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Brackets_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-260a0482\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Brackets.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_Brackets_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_260a0482_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Brackets_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Brackets.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-260a0482", Component.options)
  } else {
    hotAPI.reload("data-v-260a0482", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0JyYWNrZXRzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2RldGFpbC52dWU/NzBiZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlPzMwYjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWU/ZDcwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaExpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9OQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztrQkFFQTtBQUNBLHlDQUNBO0FBQ0EseUJBREE7QUFFQSxtQ0FGQTtBQUdBO0FBSEEsTUFEQSxDQURBOztBQVNBLFFBVEEsa0JBU0E7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFGQTtBQUlBLEtBZEE7QUFnQkEsV0FoQkEscUJBZ0JBO0FBQ0E7QUFDQSxLQWxCQTs7QUFtQkEsYUFDQTtBQUNBLDZCQURBLG1DQUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUVBLCtF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RSxpT0FBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRWMsZ0ZBQWlCOzs7Ozs7Ozs7QUN6Q2hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLHVEQUErRDtBQUNoRztBQUM4YjtBQUNhO0FBQzNjO0FBQ3NRO0FBQ3RRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMFdBQWM7QUFDaEIsRUFBRSxrT0FBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRWMsZ0ZBQWlCOzs7Ozs7Ozs7QUN6Q2hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLHVEQUFrRTtBQUNuRztBQUM4YjtBQUNhO0FBQzNjO0FBQ3lRO0FBQ3pRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdVdBQWM7QUFDaEIsRUFBRSwrTkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRWMsZ0ZBQWlCIiwiZmlsZSI6ImpzLzUuMjVmOTM1ODI5M2E4ZjM1Mzg5MTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0IHRvdXJuYW1lbnQtYnJhY2tldC0tcm91bmRlZFwiPlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fcm91bmQgdG91cm5hbWVudC1icmFja2V0X19yb3VuZC0tcXVhcnRlcmZpbmFsc1wiIHYtZm9yPVwiYnJhY2tldCBpbiBicmFja2V0c1wiIDprZXk9XCJicmFja2V0LnJvdW5kLmlkXCI+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fcm91bmQtdGl0bGVcIj57e2JyYWNrZXQucm91bmQudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19pdGVtXCIgdi1mb3I9XCJtYXRjaCBpbiBicmFja2V0Lm1hdGNoZXNcIiA6a2V5PVwibWF0Y2guaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19tYXRjaFwiIHRhYmluZGV4PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY2FwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMTk5OC0wMi0xOFwiPnt7bW9tZW50KCBjb252ZXJ0VGltZShtYXRjaC5zdGFydF9hdCksIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCIpLmZvcm1hdCgnRCBNTU0sIEhIOm1tJykgfX0g0JzQodCaPC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbSB0b3VybmFtZW50LWJyYWNrZXRfX3RlYW0tLXdpbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY291bnRyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWJiciBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY29kZVwiIHRpdGxlPVwiQ2FuYWRhXCI+Q0FOPC9hYmJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fZmxhZyBmbGFnLWljb24gZmxhZy1pY29uLWNhXCIgYXJpYS1sYWJlbD1cIkZsYWdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3Njb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIj40PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X190ZWFtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jb3VudHJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhYmJyIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jb2RlXCIgdGl0bGU9XCJLYXpha2hzdGFuXCI+S0FaPC9hYmJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fZmxhZyBmbGFnLWljb24gZmxhZy1pY29uLWt6XCIgYXJpYS1sYWJlbD1cIkZsYWdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3Njb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIj4xPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fcm91bmQgdG91cm5hbWVudC1icmFja2V0X19yb3VuZC0tc2VtaWZpbmFsc1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLXRpdGxlXCI+U2VtaWZpbmFsczwvaDM+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fbWF0Y2hcIiB0YWJpbmRleD1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X190YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NhcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjE5OTgtMDItMjBcIj4yMCBGZWJydWFyeSAxOTk4PC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwic3Itb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2NvcmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY291bnRyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWJiciBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY29kZVwiIHRpdGxlPVwiQ2FuYWRhXCI+Q0FOPC9hYmJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fZmxhZyBmbGFnLWljb24gZmxhZy1pY29uLWNhXCIgYXJpYS1sYWJlbD1cIkZsYWdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3Njb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIj4xPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X190ZWFtIHRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbS0td2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jb3VudHJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhYmJyIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jb2RlXCIgdGl0bGU9XCJDemVjaCBSZXB1YmxpY1wiPkNaRTwvYWJicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2ZsYWcgZmxhZy1pY29uIGZsYWctaWNvbi1jelwiIGFyaWEtbGFiZWw9XCJGbGFnXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19zY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fbnVtYmVyXCI+Mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX21hdGNoXCIgdGFiaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jYXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIxOTk4LTAyLTIwXCI+MjAgRmVicnVhcnkgMTk5ODwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q291bnRyeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNjb3JlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3RlYW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvdW50cnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFiYnIgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIiB0aXRsZT1cIkZpbmxhbmRcIj5GSU48L2FiYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19mbGFnIGZsYWctaWNvbiBmbGFnLWljb24tZmlcIiBhcmlhLWxhYmVsPVwiRmxhZ1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fc2NvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX251bWJlclwiPjQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3RlYW0gdG91cm5hbWVudC1icmFja2V0X190ZWFtLS13aW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvdW50cnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFiYnIgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIiB0aXRsZT1cIlJ1c3NpYVwiPlJVUzwvYWJicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2ZsYWcgZmxhZy1pY29uIGZsYWctaWNvbi1ydVwiIGFyaWEtbGFiZWw9XCJGbGFnXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19zY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fbnVtYmVyXCI+Nzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kIHRvdXJuYW1lbnQtYnJhY2tldF9fcm91bmQtLWJyb256ZVwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLXRpdGxlXCI+QnJvbnplIG1lZGFsIGdhbWU8L2gzPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX21hdGNoXCIgdGFiaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jYXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIxOTk4LTAyLTIxXCI+MjEgRmVicnVhcnkgMTk5ODwvdGltZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q291bnRyeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNjb3JlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3RlYW0gdG91cm5hbWVudC1icmFja2V0X190ZWFtLS13aW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvdW50cnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFiYnIgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIiB0aXRsZT1cIkZpbmxhbmRcIj5GSU48L2FiYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19mbGFnIGZsYWctaWNvbiBmbGFnLWljb24tZmlcIiBhcmlhLWxhYmVsPVwiRmxhZ1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fc2NvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX251bWJlclwiPjM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19tZWRhbCB0b3VybmFtZW50LWJyYWNrZXRfX21lZGFsLS1icm9uemUgZmEgZmEtdHJvcGh5XCIgYXJpYS1sYWJlbD1cIkJyb256ZSBtZWRhbFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY291bnRyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWJiciBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY29kZVwiIHRpdGxlPVwiQ2FuYWRhXCI+Q0FOPC9hYmJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fZmxhZyBmbGFnLWljb24gZmxhZy1pY29uLWNhXCIgYXJpYS1sYWJlbD1cIkZsYWdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3Njb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIj4yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fcm91bmQgdG91cm5hbWVudC1icmFja2V0X19yb3VuZC0tZ29sZFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLXRpdGxlXCI+R29sZCBtZWRhbCBnYW1lPC9oMz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19tYXRjaFwiIHRhYmluZGV4PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY2FwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMTk5OC0wMi0yMlwiPjIyIEZlYnJ1YXJ5IDE5OTg8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJzci1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvdW50cnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TY29yZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X190ZWFtIHRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbS0td2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jb3VudHJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhYmJyIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jb2RlXCIgdGl0bGU9XCJDemVjaCBSZXB1YmxpY1wiPkNaRTwvYWJicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2ZsYWcgZmxhZy1pY29uIGZsYWctaWNvbi1jelwiIGFyaWEtbGFiZWw9XCJGbGFnXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19zY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fbnVtYmVyXCI+MTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX21lZGFsIHRvdXJuYW1lbnQtYnJhY2tldF9fbWVkYWwtLWdvbGQgZmEgZmEtdHJvcGh5XCIgYXJpYS1sYWJlbD1cIkdvbGQgbWVkYWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3RlYW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvdW50cnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFiYnIgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIiB0aXRsZT1cIlJ1c3NpYVwiPlJVUzwvYWJicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2ZsYWcgZmxhZy1pY29uIGZsYWctaWNvbi1ydVwiIGFyaWEtbGFiZWw9XCJGbGFnXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19zY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fbnVtYmVyXCI+MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX21lZGFsIHRvdXJuYW1lbnQtYnJhY2tldF9fbWVkYWwtLXNpbHZlciBmYSBmYS10cm9waHlcIiBhcmlhLWxhYmVsPVwiU2lsdmVyIG1lZGFsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgICBpbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuICAgIGltcG9ydCB7IGxvYWRNZXNzYWdlcyB9IGZyb20gJ34vcGx1Z2lucy9pMThuJ1xyXG4gICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaycsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYnJhY2tldHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VG91cm5hbWVudEJyYWNrZXRzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXN5bmMgZ2V0VG91cm5hbWVudEJyYWNrZXRzKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS90b3VybmFtZW50cy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCtcIi9icmFja2V0c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQoYnJhY2tldHMsICdicmFja2V0cycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnZlcnRUaW1lKHN0YXJ0X2F0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlQ29udmVydFVUQyhzdGFydF9hdCwgLTEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8dGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Y2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0td3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgaWQ9XCJmaWx0ZXItZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzdGF0dXNfaWRcIiBuYW1lPVwic3RhdHVzX2lkXCIgY2xhc3M9J2Zvcm0tY29udHJvbCcgZGF0YS1zdHlsZT1cImZvcm0tY29udHJvbCBidG4tZGVmYXVsdCBidG4tb3V0bGluZVwiIGlkPVwic3RhdHVzX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwic3RhdHVzIGluIHN0YXR1c19saXN0XCIgdi1iaW5kOnZhbHVlPVwic3RhdHVzLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHN0YXR1cy50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXAtMlwiPjwvZGl2PlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiZmlnaHRzIT1udWxsICYmIGZpZ2h0cy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLW1hdGNoXCIgdi1mb3I9XCJmaWdodCBpbiBmaWdodHNcIiB2LWlmPVwiZmlnaHQuaW52aXRhdGlvbnMhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstbWF0Y2gtdGVhbS1sZWZ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0nLCBwYXJhbXM6IHsgaWQ6IGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWQgfX1cIiB2LWlmPVwiZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbSE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC10ZWFtLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsoZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctNjRweCBtci0xMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtdGVhbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmluc3RpdHV0aW9uIT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbnN0aXR1dGlvbi50aXRsZX19LCB7e2ZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24udGl0bGV9fSw8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1tYXRjaC1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICdtYXRjaCcsIHBhcmFtczogeyBpZDogZmlnaHQuaWQgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtc3RhdHVzLXZzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWdodC5pZD09MjRcIj5WUyAoYm81KTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5WUyAoYm8zKTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXN0YXR1cy1kYXRlXCI+e3sgbW9tZW50LnV0YyhmaWdodC5zdGFydF9hdCwgXCJZWVlZLU1NLUREIGg6bW06c3NcIikuZm9ybWF0KCdNTU1NIERvLCBISDptbScpIH19INCc0KHQmjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImNoZWNrVXBjb21pbmcoZmlnaHQuc3RhcnRfYXQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zY29yZVwiPnt7JHQoJ3VwY29taW5nJyl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiZmlnaHQud2lubmVyX2lkPjAgJiYgZmlnaHQucmVzdWx0IT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zY29yZSBiZy1kYXJrLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInBhcnNlSW50KGZpZ2h0LnJlc3VsdFswXSk+cGFyc2VJbnQoZmlnaHQucmVzdWx0WzFdKSAmJiBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkPT1maWdodC53aW5uZXJfaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5yZXN1bHRbMF19fSA6IHt7ZmlnaHQucmVzdWx0WzFdfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJwYXJzZUludChmaWdodC5yZXN1bHRbMV0pPnBhcnNlSW50KGZpZ2h0LnJlc3VsdFswXSkgJiYgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pZD09ZmlnaHQud2lubmVyX2lkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQucmVzdWx0WzBdfX0gOiB7e2ZpZ2h0LnJlc3VsdFsxXX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZ2h0LnJlc3VsdFsxXX19IDoge3tmaWdodC5yZXN1bHRbMF19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC1zY29yZSBiZy1zdWNjZXNzXCI+e3skdCgnb25saW5lJyl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICd0ZWFtJywgcGFyYW1zOiB7IGlkOiBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmlkIH19XCIgdi1pZj1cImZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0hPW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtdGVhbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmluc3RpdHV0aW9uIT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pbnN0aXR1dGlvbi50aXRsZX19LCB7e2ZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24udGl0bGV9fSw8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS50aXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXRlYW0tbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEltYWdlTGluayhmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmltYWdlLCAnYXZhdGFyX3RlYW0nKVwiIGNsYXNzPVwidy02NHB4IG1sLTEwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIj48L3BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInR4dC1kYW5nZXJcIj57eyR0KCdub19yZXN1bHRzJyl9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbiAgICBpbXBvcnQgeyBsb2FkTWVzc2FnZXMgfSBmcm9tICd+L3BsdWdpbnMvaTE4bidcclxuICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiZmlsdGVyXCJdLFxyXG5cclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiAnbGFuZy9sb2NhbGUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZpZ2h0czogW10sXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNfbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtpZDowLCB0aXRsZTogJ9CS0YHQtSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtpZDoxLCB0aXRsZTogJ9Cf0YDQvtGI0LXQtNGI0LjQtSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtpZDoyLCB0aXRsZTogXCLQntC90LvQsNC50L1cIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjMsIHRpdGxlOiBcItCf0YDQtdC00YHRgtC+0Y/RidC40LVcIn1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgbG9hZE1lc3NhZ2VzKHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgdGhpcy5tb21lbnQubG9jYWxlKHRoaXMubG9jYWxlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RmlnaHRzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3N0YXR1c19saXN0XCIpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcItCh0YLQsNGC0YPRgSDQvNCw0YLRh9CwXCJcclxuICAgICAgICAgICAgICAgIH0pLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYuc3RhdHVzX2lkID0gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnZXRGaWdodHMoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeVN0YXJ0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncGFnZScgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnX2xpbWl0JyA6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9zb3J0XCIgOiAnLXN0YXJ0X2F0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJfd2l0aFwiIDogJ2ludml0YXRpb25zLnRlYW0saW52aXRhdGlvbnMudGVhbS5pbnN0aXR1dGlvbixpbnZpdGF0aW9ucy50ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uLHdpbm5lcixnYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZmlsdGVyIT09bnVsbClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5maWx0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlci5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zW3Byb3BdID0gdGhpcy5maWx0ZXJbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYXV0aGVudGljYXRlZCAmJiB0aGlzLnVzZXIucm9sZV9pZCE9MSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcm91dGUgPSAnL2FwaS90ZWFtcy8nK3RoaXMudXNlci50ZWFtX2lkKycvZmlnaHRzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy51c2VyLnR5cGU9PSdyZWZlcmVlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snanVkZ2VfaWQnXSA9IHRoaXMudXNlci5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyb3V0ZSA9ICcvYXBpL2ZpZ2h0cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyb3V0ZSA9ICcvYXBpL2ZpZ2h0cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXR1c19pZD09MSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5U3RhcnRQYXJhbXNbJ3dpbm5lcl9pZC1ndCddID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXR1c19pZD09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5U3RhcnRQYXJhbXNbJ3dpbm5lcl9pZCddID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snc3RhcnRfYXQtc3QnXSA9IHRoaXMubW9tZW50LnV0YygpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdHVzX2lkPT0zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snc3RhcnRfYXQtZ3QnXSA9IHRoaXMubW9tZW50LnV0YygpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5VcmxQYXJhbXNNZXJnZShxdWVyeVN0YXJ0UGFyYW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGFyb3V0ZSsnPycrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWdodHMgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWdodHMuZm9yRWFjaChmdW5jdGlvbihmaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuc3RhcnRfYXQgPSBfc2VsZi5kYXRlQ29udmVydFVUQyhmaWdodC5zdGFydF9hdCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnZmlnaHRzJywgZmlnaHRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hlY2tVcGNvbWluZyhzdGFydF9hdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDEgPSBuZXcgRGF0ZShzdGFydF9hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQyID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihkMS5nZXRUaW1lKCktZDIuZ2V0VGltZSgpPjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgJyRyb3V0ZS5xdWVyeScobmV3UGFnZSwgb2xkUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGaWdodHMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzX2lkOiBmdW5jdGlvbih2YWwsIG9sZFZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGaWdodHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaExpc3QudnVlIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8Y2FyZCA6dGl0bGU9XCJ0b3VybmFtZW50LnRpdGxlXCIgdi1pZj1cInRvdXJuYW1lbnQhPW51bGxcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgaHJlZj1cIiN0YWJzLTEtMVwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPtCb0L7QsdCx0Lg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiN0YWJzLTEtNVwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPtCf0YDQsNCy0LjQu9CwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjdGFicy0xLTJcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj7QmtC+0LzQsNC90LTRizwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI3RhYnMtMS0zXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+0JzQsNGC0YfQuDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI3RhYnMtMS00XCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+0KHQtdGC0LrQsDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJ0YWJzLTEtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdmVydGljYWwtZ2FwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsodG91cm5hbWVudC5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImNvbC1sZy04IG5rLXNpZGViYXItc3RpY2t5LXBhcmVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cIm1iLTVcIj57eyR0KCd0b3VybmFtZW50X3N0YXJ0X3RpbWUnKX19OjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzPVwibWItMTUgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCI+e3ttb21lbnQodG91cm5hbWVudC5zdGFydF9hdCwgXCJZWVlZLU1NLUREIGg6bW06c3NcIikuZm9ybWF0KCdEIE1NTSwgSEg6bW0nKSB9fSDQnNCh0Jo8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cIm1iLTVcIj57eyR0KCdyZWdfdW50aWwnKX19OjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzPVwibWItMTAgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCI+e3ttb21lbnQodG91cm5hbWVudC5zdGFydF9hdCwgXCJZWVlZLU1NLUREIGg6bW06c3NcIikuc3VidHJhY3QoMSwgJ2hvdXJzJykuZm9ybWF0KCdEIE1NTSwgSEg6bW0nKSB9fSDQnNCh0Jo8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cIm1iLTVcIj57eyR0KCd0ZWFtcycpfX06PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJtYi0xMCB0eHQtZGFyayBmb250LTEzIHdlaWdodC01MDBcIj57e3RvdXJuYW1lbnQudGVhbXMubGVuZ3RofX0gLyB7eyB0b3VybmFtZW50LmNvdW50X3RlYW1zfX08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cIm1iLTVcIj57eyR0KCdnYW1lJyl9fTo8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzcz1cIm1iLTEwIHR4dC1kYXJrIGZvbnQtMTMgd2VpZ2h0LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnZ2FtZScsIHBhcmFtczogeyBnYW1lSWQ6IHRvdXJuYW1lbnQuZ2FtZS5pZCB9fVwiIDp0aXRsZT1cInRvdXJuYW1lbnQuZ2FtZS50aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHRvdXJuYW1lbnQuZ2FtZS5sb2dvX21pbmkpXCIgd2lkdGg9XCIzNVwiIDphbHQ9XCJ0b3VybmFtZW50LmdhbWUudGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtd2hpdGVcIiB2LWh0bWw9XCJ0b3VybmFtZW50LmRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInRhYnMtMS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwibmstdGFibGVcIiB2LWlmPVwidG91cm5hbWVudCE9bnVsbCAmJiB0b3VybmFtZW50LnRlYW1zIT09bnVsbCAmJiB0b3VybmFtZW50LnRlYW1zLmxlbmd0aD4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ3RpdGxlJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ3JlZ2lvbicpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdwbGF5ZXJzJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ2dhbWUnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgnY291bnRfbWF0Y2hlcycpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdjb3VudF93aW5zJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ3ZpY3RvcnlfcmF0ZScpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cInRlYW0gaW4gdG91cm5hbWVudC50ZWFtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICd0ZWFtJywgcGFyYW1zOiB7IGlkOiB0ZWFtLmlkIH19XCIgY2xhc3M9XCJ2bS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHRlYW0uaW1hZ2UsICdhdmF0YXJfdGVhbScpXCIgY2xhc3M9XCJ3LTUwcHggbXItMTBcIiA6YWx0PVwidGVhbS50aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyB0ZWFtLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidGVhbS5pbnN0aXR1dGlvbl9pZD4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24ucGFyZW50LnRpdGxlfX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24udGl0bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj48cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0uZGV0YWlsLnBsYXllcnMnLCBwYXJhbXM6IHsgc2x1ZzogdGVhbS5zbHVnIH19XCI+e3sgdGVhbS51c2Vycy5sZW5ndGh9fTwvcm91dGVyLWxpbms+IC8ge3sgdGVhbS5xdWFudGl0eX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtaWY9XCJ0ZWFtLmdhbWUhPT1udWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdnYW1lJywgcGFyYW1zOiB7IGdhbWVJZDogdG91cm5hbWVudC5nYW1lLmlkIH19XCIgOnRpdGxlPVwidG91cm5hbWVudC5nYW1lLnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsodG91cm5hbWVudC5nYW1lLmxvZ29fbWluaSlcIiB3aWR0aD1cIjM1XCIgOmFsdD1cInRvdXJuYW1lbnQuZ2FtZS50aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtZWxzZT48L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7dGVhbS5jb3VudF9maWdodHN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e3RlYW0uY291bnRfd2luc319PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtaWY9XCJ0ZWFtLmNvdW50X2ZpZ2h0cz4wXCI+e3sgTnVtYmVyKCh0ZWFtLmNvdW50X3dpbnMvdGVhbS5jb3VudF9maWdodHMqMTAwKS50b0ZpeGVkKDIpKX19JTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWVsc2U+MCU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiPjwvcGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJ0YWJzLTEtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXRjaC1saXN0IDpmaWx0ZXI9XCJtYXRjaF9maWx0ZXJcIj48L21hdGNoLWxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwidGFicy0xLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnJhY2tldHM+PC9icmFja2V0cz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInRhYnMtMS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiB0ZXh0LXdoaXRlXCIgdi1odG1sPVwidG91cm5hbWVudC5ydWxlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICAgIGltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG4gICAgaW1wb3J0IHsgbG9hZE1lc3NhZ2VzIH0gZnJvbSAnfi9wbHVnaW5zL2kxOG4nXHJcbiAgICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuICAgIGltcG9ydCBNYXRjaExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWF0Y2hMaXN0XCI7XHJcbiAgICBpbXBvcnQgQnJhY2tldHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnJhY2tldHNcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY29tcG9uZW50czoge0JyYWNrZXRzLCBNYXRjaExpc3R9LFxyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG5cclxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogJ2xhbmcvbG9jYWxlJ1xyXG4gICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgICAgIHRlYW1zSW5Ub3VybmFtZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlYW1zSW5Ub3VybmFtZW50ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50b3VybmFtZW50LnRlYW1zIT11bmRlZmluZWQgJiYgdGhpcy50b3VybmFtZW50LnRlYW1zLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudC50ZWFtcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZWFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlYW0ubGVuZ3RoPjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtc0luVG91cm5hbWVudC5wdXNoKHRlYW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZWFtc0luVG91cm5hbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgLy90aGlzLmdldFRvdXJuYW1lbnRCcmFja2V0cygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGV0YWlsIHRvdXJuYW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgdG91cm5hbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGZpZ2h0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19saXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjAsIHRpdGxlOiAn0JLRgdC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjEsIHRpdGxlOiAn0J/RgNC+0YjQtdC00YjQuNC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjIsIHRpdGxlOiBcItCe0L3Qu9Cw0LnQvVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MywgdGl0bGU6IFwi0J/RgNC10LTRgdGC0L7Rj9GJ0LjQtVwifVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1hdGNoX2ZpbHRlcjogeyd0b3VybmFtZW50X2lkJzogdGhpcy4kcm91dGUucGFyYW1zLmlkfSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19pZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kcyA6IHtcclxuICAgICAgICAgICAgYXN5bmMgZ2V0VG91cm5hbWVudCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuQXJyYXlUb1VybCh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ193aXRoJyA6ICdnYW1lLGZpZ2h0cyxmaWdodHMuaW52aXRhdGlvbnMudGVhbSxmaWdodHMud2lubmVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS90b3VybmFtZW50cy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCtcIj9cIitxdWVyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICd0b3VybmFtZW50JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VybmFtZW50LnN0YXJ0X2F0ID0gdGhpcy5kYXRlQ29udmVydFVUQyh0aGlzLnRvdXJuYW1lbnQuc3RhcnRfYXQsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdXJuYW1lbnQucmVnaXN0ZXJfc3RhcnQgPSB0aGlzLmRhdGVDb252ZXJ0VVRDKHRoaXMudG91cm5hbWVudC5yZWdpc3Rlcl9zdGFydCwgLTEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvdW50IHByaXplc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aW5uZXJzX3BhcnQgPSB0aGlzLnRvdXJuYW1lbnQud2lubmVyc19wYXJ0LnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJpemVfcG9vbCA9IHBhcnNlSW50KHRoaXMudG91cm5hbWVudC5wcml6ZV9wb29sKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJpemVzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbm5lcnNfcGFydC5mb3JFYWNoKGZ1bmN0aW9uKHBhcnQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml6ZXMucHVzaChwYXJzZUludChwYXJ0KSpwcml6ZV9wb29sLzEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudC5wcml6ZXMgPSBwcml6ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMudG91cm5hbWVudC50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXRhKCkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnRUZWFtcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRUb3VybmFtZW50QnJhY2tldHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgZ2V0VG91cm5hbWVudFRlYW1zKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnX3dpdGgnIDogJ2ZpZ2h0cyx1c2VycyxpbnN0aXR1dGlvbi5sb2NhdGlvbixpbnN0aXR1dGlvbi5sb2NhdGlvbi5wYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3RvdXJuYW1lbnRzLycrdGhpcy4kcm91dGUucGFyYW1zLmlkK1wiL3RlYW1zP1wiK3F1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy50b3VybmFtZW50LCAndGVhbXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5hdXRoZW50aWNhdGVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2xvZ2luJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy51c2VyLnRlYW1faWQ9PW51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7IHR5cGU6ICd3YXJuaW5nJywgdGl0bGU6ICdFcnJvciEnLCBodG1sOiAnWW91IG5lZWQgdG8gYmUgaW4gdGhlIHRlYW0uJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90b3VybmFtZW50cy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCsnL3RlYW1zLycrdGhpcy51c2VyLnRlYW1faWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogJ1lvdSBhcmUgcmVnaXN0ZXJlZCBvbiB0aGUgdG91cm5hbWVudCEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG91cm5hbWVudFRlYW1zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja1JpZ2lzdGVyU3RhcnQoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnQudXRjKCkuaXNBZnRlcih0aGlzLnRvdXJuYW1lbnQucmVnaXN0ZXJfc3RhcnQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja1JpZ2lzdGVyRW5kKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9tZW50LnV0YygpLmlzQmVmb3JlKHRoaXMubW9tZW50KHRoaXMudG91cm5hbWVudC5zdGFydF9hdCkuc3VidHJhY3QoMSwgJ2hvdXJzJykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja1JlZ2lzdGVyZWQodmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRlYW1zSW5Ub3VybmFtZW50LmluZGV4T2YodmFsdWUpID4gLTEgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoZWNrVXBjb21pbmcoc3RhcnRfYXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkMSA9IG5ldyBEYXRlKHN0YXJ0X2F0KTtcclxuICAgICAgICAgICAgICAgIHZhciBkMiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihkMS5nZXRUaW1lKCktZDIuZ2V0VGltZSgpPjApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9kZXRhaWwudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS50b3VybmFtZW50ICE9IG51bGxcbiAgICAgICAgPyBfYyhcImNhcmRcIiwgeyBhdHRyczogeyB0aXRsZTogX3ZtLnRvdXJuYW1lbnQudGl0bGUgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLXRhYnNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFic1wiLCBhdHRyczogeyByb2xlOiBcInRhYmxpc3RcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGluayBhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI3RhYnMtMS0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCb0L7QsdCx0LhcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI3RhYnMtMS01XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCf0YDQsNCy0LjQu9CwXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiN0YWJzLTEtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQmtC+0LzQsNC90LTRi1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjdGFicy0xLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0JzQsNGC0YfQuFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjdGFicy0xLTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KHQtdGC0LrQsFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiwgaWQ6IFwidGFicy0xLTFcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB2ZXJ0aWNhbC1nYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb2wteHMtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG91cm5hbWVudC5pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyX3RlYW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhc2lkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOCBuay1zaWRlYmFyLXN0aWNreS1wYXJlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZHRcIiwgeyBzdGF0aWNDbGFzczogXCJtYi01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJ0b3VybmFtZW50X3N0YXJ0X3RpbWVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWItMTUgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQuc3RhcnRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJEIE1NTSwgSEg6bW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiINCc0KHQmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInJlZ191bnRpbFwiKSkgKyBcIjpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYi0xMCB0eHQtZGFyayBmb250LTEzIHdlaWdodC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9tZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG91cm5hbWVudC5zdGFydF9hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZWVlZLU1NLUREIGg6bW06c3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnRyYWN0KDEsIFwiaG91cnNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJEIE1NTSwgSEg6bW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiINCc0KHQmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInRlYW1zXCIpKSArIFwiOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1iLTEwIHR4dC1kYXJrIGZvbnQtMTMgd2VpZ2h0LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udG91cm5hbWVudC50ZWFtcy5sZW5ndGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRvdXJuYW1lbnQuY291bnRfdGVhbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImdhbWVcIikpICsgXCI6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWItMTAgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJnYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDogX3ZtLnRvdXJuYW1lbnQuZ2FtZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50b3VybmFtZW50LmdhbWUudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQuZ2FtZS5sb2dvX21pbmlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0udG91cm5hbWVudC5nYW1lLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnRvdXJuYW1lbnQuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIsIGlkOiBcInRhYnMtMS0yXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0udG91cm5hbWVudC50ZWFtcyAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0udG91cm5hbWVudC50ZWFtcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ0aXRsZVwiKSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwicmVnaW9uXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwbGF5ZXJzXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJnYW1lXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb3VudF9tYXRjaGVzXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwiY291bnRfd2luc1wiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInZpY3RvcnlfcmF0ZVwiKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRvdXJuYW1lbnQudGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidm0tdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiB0ZWFtLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTUwcHggbXItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJfdGVhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IHRlYW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0ZWFtLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5pbnN0aXR1dGlvbl9pZCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmluc3RpdHV0aW9uLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudC50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW0uZGV0YWlsLnBsYXllcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgc2x1ZzogdGVhbS5zbHVnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGVhbS51c2Vycy5sZW5ndGgpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIC8gXCIgKyBfdm0uX3ModGVhbS5xdWFudGl0eSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmdhbWUgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJnYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVJZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b3VybmFtZW50LmdhbWUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udG91cm5hbWVudC5nYW1lLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b3VybmFtZW50LmdhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvX21pbmlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0udG91cm5hbWVudC5nYW1lLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0ZWFtLmNvdW50X2ZpZ2h0cykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW0uY291bnRfd2lucykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNvdW50X2ZpZ2h0cyA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ZWFtLmNvdW50X3dpbnMgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNvdW50X2ZpZ2h0cykgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjAlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7IGF0dHJzOiB7IHBhZ2luYXRpb246IF92bS5wYWdpbmF0aW9uIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIsIGlkOiBcInRhYnMtMS0zXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJtYXRjaC1saXN0XCIsIHsgYXR0cnM6IHsgZmlsdGVyOiBfdm0ubWF0Y2hfZmlsdGVyIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIsIGlkOiBcInRhYnMtMS00XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJicmFja2V0c1wiKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiwgaWQ6IFwidGFicy0xLTVcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0zMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnRvdXJuYW1lbnQucnVsZXMpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wMTZmNjgzM1wiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTAxNmY2ODMzXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTAxNmY2ODMzXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldCB0b3VybmFtZW50LWJyYWNrZXQtLXJvdW5kZWRcIiB9LFxuICAgIFtcbiAgICAgIF92bS5fbChfdm0uYnJhY2tldHMsIGZ1bmN0aW9uKGJyYWNrZXQpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBicmFja2V0LnJvdW5kLmlkLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwidG91cm5hbWVudC1icmFja2V0X19yb3VuZCB0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLS1xdWFydGVyZmluYWxzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGJyYWNrZXQucm91bmQudGl0bGUpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2xpc3RcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woYnJhY2tldC5tYXRjaGVzLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBtYXRjaC5pZCwgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX21hdGNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX3RhYmxlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fY2FwdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZGF0ZXRpbWU6IFwiMTk5OC0wMi0xOFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb21lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb252ZXJ0VGltZShtYXRjaC5zdGFydF9hdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJEIE1NTSwgSEg6bW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiINCc0KHQmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgzKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oNClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ291bnRyeVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTY29yZVwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGJvZHlcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0clwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbSB0b3VybmFtZW50LWJyYWNrZXRfX3RlYW0tLXdpbm5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jb3VudHJ5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYWJiclwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jb2RlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiQ2FuYWRhXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQ0FOXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2ZsYWcgZmxhZy1pY29uIGZsYWctaWNvbi1jYVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJGbGFnXCIgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX3Njb3JlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIjRcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X190ZWFtXCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jb3VudHJ5XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhYmJyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fY29kZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJLYXpha2hzdGFuXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJLQVpcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2ZsYWcgZmxhZy1pY29uIGZsYWctaWNvbi1relwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiRmxhZ1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fc2NvcmVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIxXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInRvdXJuYW1lbnQtYnJhY2tldF9fcm91bmQgdG91cm5hbWVudC1icmFja2V0X19yb3VuZC0tc2VtaWZpbmFsc1wiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19yb3VuZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJTZW1pZmluYWxzXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19saXN0XCIgfSwgW1xuICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2l0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fbWF0Y2hcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjYXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jYXB0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGltZVwiLCB7IGF0dHJzOiB7IGRhdGV0aW1lOiBcIjE5OTgtMDItMjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjIwIEZlYnJ1YXJ5IDE5OThcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb3VudHJ5XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTY29yZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRib2R5XCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X190ZWFtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvdW50cnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhYmJyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJDYW5hZGFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDQU5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG91cm5hbWVudC1icmFja2V0X19mbGFnIGZsYWctaWNvbiBmbGFnLWljb24tY2FcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiRmxhZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19zY29yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX251bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIxXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidG91cm5hbWVudC1icmFja2V0X190ZWFtIHRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbS0td2lubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jb3VudHJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhYmJyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJDemVjaCBSZXB1YmxpY1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ1pFXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG91cm5hbWVudC1icmFja2V0X19mbGFnIGZsYWctaWNvbiBmbGFnLWljb24tY3pcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBcIkZsYWdcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19zY29yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX251bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIjJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2l0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fbWF0Y2hcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCIwXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fdGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjYXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jYXB0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGltZVwiLCB7IGF0dHJzOiB7IGRhdGV0aW1lOiBcIjE5OTgtMDItMjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjIwIEZlYnJ1YXJ5IDE5OThcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb3VudHJ5XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTY29yZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRib2R5XCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X190ZWFtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvdW50cnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhYmJyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJGaW5sYW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRklOXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvdXJuYW1lbnQtYnJhY2tldF9fZmxhZyBmbGFnLWljb24gZmxhZy1pY29uLWZpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBcIkZsYWdcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fc2NvcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiNFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbSB0b3VybmFtZW50LWJyYWNrZXRfX3RlYW0tLXdpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fY291bnRyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWJiclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiUnVzc2lhXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSVVNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3VybmFtZW50LWJyYWNrZXRfX2ZsYWcgZmxhZy1pY29uIGZsYWctaWNvbi1ydVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiRmxhZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX3Njb3JlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fbnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiN1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwidG91cm5hbWVudC1icmFja2V0X19yb3VuZCB0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLS1icm9uemVcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fcm91bmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiQnJvbnplIG1lZGFsIGdhbWVcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2xpc3RcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9faXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19tYXRjaFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjBcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X190YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNhcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NhcHRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aW1lXCIsIHsgYXR0cnM6IHsgZGF0ZXRpbWU6IFwiMTk5OC0wMi0yMVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMjEgRmVicnVhcnkgMTk5OFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvdW50cnlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlNjb3JlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3VybmFtZW50LWJyYWNrZXRfX3RlYW0gdG91cm5hbWVudC1icmFja2V0X190ZWFtLS13aW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvdW50cnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFiYnJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIkZpbmxhbmRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkZJTlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvdXJuYW1lbnQtYnJhY2tldF9fZmxhZyBmbGFnLWljb24gZmxhZy1pY29uLWZpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJGbGFnXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fc2NvcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3VybmFtZW50LWJyYWNrZXRfX21lZGFsIHRvdXJuYW1lbnQtYnJhY2tldF9fbWVkYWwtLWJyb256ZSBmYSBmYS10cm9waHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJCcm9uemUgbWVkYWxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jb3VudHJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWJiclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiQ2FuYWRhXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ0FOXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvdXJuYW1lbnQtYnJhY2tldF9fZmxhZyBmbGFnLWljb24gZmxhZy1pY29uLWNhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1sYWJlbFwiOiBcIkZsYWdcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fc2NvcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19yb3VuZCB0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLS1nb2xkXCJcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLXRpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIkdvbGQgbWVkYWwgZ2FtZVwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fbGlzdFwiIH0sIFtcbiAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX21hdGNoXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiaW5kZXg6IFwiMFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX3RhYmxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fY2FwdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRpbWVcIiwgeyBhdHRyczogeyBkYXRldGltZTogXCIxOTk4LTAyLTIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIyMiBGZWJydWFyeSAxOTk4XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIHsgc3RhdGljQ2xhc3M6IFwic3Itb25seVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ291bnRyeVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU2NvcmVcIildKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbSB0b3VybmFtZW50LWJyYWNrZXRfX3RlYW0tLXdpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fY291bnRyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWJiclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiQ3plY2ggUmVwdWJsaWNcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNaRVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvdXJuYW1lbnQtYnJhY2tldF9fZmxhZyBmbGFnLWljb24gZmxhZy1pY29uLWN6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJGbGFnXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fc2NvcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19udW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIxXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3VybmFtZW50LWJyYWNrZXRfX21lZGFsIHRvdXJuYW1lbnQtYnJhY2tldF9fbWVkYWwtLWdvbGQgZmEgZmEtdHJvcGh5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiR29sZCBtZWRhbFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X190ZWFtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvdW50cnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhYmJyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJSdXNzaWFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSVVNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG91cm5hbWVudC1icmFja2V0X19mbGFnIGZsYWctaWNvbiBmbGFnLWljb24tcnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiRmxhZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19zY29yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX251bWJlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIwXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvdXJuYW1lbnQtYnJhY2tldF9fbWVkYWwgdG91cm5hbWVudC1icmFja2V0X19tZWRhbC0tc2lsdmVyIGZhIGZhLXRyb3BoeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJTaWx2ZXIgbWVkYWxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTI2MGEwNDgyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjYwYTA0ODJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTI2MGEwNDgyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0JyYWNrZXRzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiY2FyZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXdyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLCBpZDogXCJmaWx0ZXItZm9ybVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGF0dXNfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdGF0dXNfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c19pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtc3R5bGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBidG4tZGVmYXVsdCBidG4tb3V0bGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzdGF0dXNfbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RhdHVzX2lkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdGF0dXNfbGlzdCwgZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IHN0YXR1cy5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Moc3RhdHVzLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcC0yXCIgfSlcbiAgICAgIF0sXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZpZ2h0cyAhPSBudWxsICYmIF92bS5maWdodHMubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlnaHRzLCBmdW5jdGlvbihmaWdodCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZ2h0Lmludml0YXRpb25zICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0gIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1sb2dvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNjRweCBtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJfdGVhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLW5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbnN0aXR1dGlvbiAhPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGl0dXRpb24udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGl0dXRpb24ubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtc3RhdHVzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hdGNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IGZpZ2h0LmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtc3RhdHVzLXZzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pZCA9PSAyNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtfdm0uX3YoXCJWUyAoYm81KVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbX3ZtLl92KFwiVlMgKGJvMylcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtc3RhdHVzLWRhdGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb21lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51dGMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0LnN0YXJ0X2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllZWVktTU0tREQgaDptbTpzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiTU1NTSBEbywgSEg6bW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiINCc0KHQmlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hlY2tVcGNvbWluZyhmaWdodC5zdGFydF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zY29yZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidXBjb21pbmdcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmlnaHQud2lubmVyX2lkID4gMCAmJiBmaWdodC5yZXN1bHQgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuay1tYXRjaC1zY29yZSBiZy1kYXJrLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZmlnaHQucmVzdWx0WzBdKSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGZpZ2h0LnJlc3VsdFsxXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWQgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQud2lubmVyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWdodC5yZXN1bHRbMF0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlnaHQucmVzdWx0WzFdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VJbnQoZmlnaHQucmVzdWx0WzFdKSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChmaWdodC5yZXN1bHRbMF0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pZCA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQud2lubmVyX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWdodC5yZXN1bHRbMF0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlnaHQucmVzdWx0WzFdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWdodC5yZXN1bHRbMV0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmlnaHQucmVzdWx0WzBdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmstbWF0Y2gtc2NvcmUgYmctc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJvbmxpbmVcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tbmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmluc3RpdHV0aW9uICE9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0aXR1dGlvbi50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0aXR1dGlvbi5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tbG9nb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTY0cHggbWwtMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyX3RlYW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHsgYXR0cnM6IHsgcGFnaW5hdGlvbjogX3ZtLnBhZ2luYXRpb24gfSB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm5vX3Jlc3VsdHNcIikpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00MTBmOWE1Y1wiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQxMGY5YTVjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDEwZjlhNWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hMaXN0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9CcmFja2V0cy52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9CcmFja2V0cy52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTI2MGEwNDgyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQnJhY2tldHMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0JyYWNrZXRzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yNjBhMDQ4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI2MGEwNDgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0JyYWNrZXRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01hdGNoTGlzdC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NYXRjaExpc3QudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MTBmOWE1Y1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01hdGNoTGlzdC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MTBmOWE1Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQxMGY5YTVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAxNmY2ODMzXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMTZmNjgzM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAxNmY2ODMzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9