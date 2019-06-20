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

                                _this.$set(_this, 'brackets', response.data);
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
        },
        countClass: function countClass(bracket, type) {
            var result = [];

            if (!type) {
                if (bracket.round.number == 1) result.push('d-block');else result.push('mt-60');
            }

            return result;
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
            response: null,
            winners: []
        };
    },
    methods: {
        getTournament: function getTournament() {
            var _this = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var query, response;
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

                                _this.title = _this.tournament.title;
                                _this.$meta().refresh();

                                _this.getTournamentTeams();


                                if (_this.tournament.status == 3) _this.getTournamentWinners();

                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](1);

                                _this.errors.push(_context.t0);

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[1, 14]]);
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
        getTournamentWinners: function getTournamentWinners() {
            var _this3 = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                var response;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _axios2.default.get('/api/tournaments/' + _this3.$route.params.id + "/winners");

                            case 3:
                                response = _context3.sent;

                                _this3.$set(_this3, 'winners', response.data);
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
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          href: "#tabs-1-6",
                          role: "tab",
                          "data-toggle": "tab"
                        }
                      },
                      [_vm._v("Призы")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }, [
                    _vm.tournament.status == 3
                      ? _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              href: "#tabs-1-7",
                              role: "tab",
                              "data-toggle": "tab"
                            }
                          },
                          [_vm._v("Победители")]
                        )
                      : _vm._e()
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
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { role: "tabpanel", id: "tabs-1-6" }
                  },
                  [
                    _c("div", { staticClass: "nk-gap" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mt-30" }, [
                      _c("div", {
                        staticClass: "col-lg-12 text-white",
                        domProps: { innerHTML: _vm._s(_vm.tournament.prizes) }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm.tournament.status == 3
                  ? _c(
                      "div",
                      {
                        staticClass: "tab-pane fade",
                        attrs: { role: "tabpanel", id: "tabs-1-7" }
                      },
                      [
                        _c("div", { staticClass: "nk-gap" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mt-30" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-12 text-white" },
                            _vm._l(_vm.winners, function(winner, index) {
                              return _c("div", { key: winner.id }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(index) +
                                    " - " +
                                    _vm._s(winner.title) +
                                    "\n                            "
                                )
                              ])
                            }),
                            0
                          )
                        ])
                      ]
                    )
                  : _vm._e()
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
    _vm._l(_vm.brackets.rounds, function(bracket) {
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
            {
              staticClass: "tournament-bracket__list",
              class: _vm.countClass(bracket, _vm.brackets.is_full)
            },
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
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "match",
                                      params: { id: match.id }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(match.title) +
                                      ", "
                                  ),
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
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(0, true),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            { staticClass: "tournament-bracket__content" },
                            _vm._l(match.teams, function(team, index) {
                              return _c(
                                "tr",
                                {
                                  key: index,
                                  staticClass: "tournament-bracket__team",
                                  class: {
                                    " tournament-bracket__team--winner":
                                      team.id != undefined &&
                                      team.id == match.winner_id
                                  }
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "tournament-bracket__country"
                                    },
                                    [
                                      _c(
                                        "abbr",
                                        {
                                          staticClass:
                                            "tournament-bracket__code"
                                        },
                                        [_vm._v(_vm._s(team.title))]
                                      ),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass:
                                          "tournament-bracket__flag flag-icon"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "tournament-bracket__score"
                                    },
                                    [
                                      match.winner_id > 0
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "tournament-bracket__number"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(match.result[index])
                                              )
                                            ]
                                          )
                                        : _c(
                                            "span",
                                            {
                                              staticClass:
                                                "tournament-bracket__number"
                                            },
                                            [_vm._v("0")]
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
    0
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "sr-only" }, [
      _c("tr", [
        _c("th", [_vm._v("Team")]),
        _vm._v(" "),
        _c("th", [_vm._v("Score")])
      ])
    ])
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
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              fight.invitations[0].team.title
                                            ) +
                                            "\n                        "
                                        )
                                      ]
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
                                  [[_vm._v("VS (bo3)")]],
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
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              fight.invitations[1].team.title
                                            ) +
                                            "\n                        "
                                        )
                                      ]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0JyYWNrZXRzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2RldGFpbC52dWU/NzBiZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlPzMwYjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWU/ZDcwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9NYXRjaExpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztrQkFFQTtBQUNBLHlDQUNBO0FBQ0EseUJBREE7QUFFQSxtQ0FGQTtBQUdBO0FBSEEsTUFEQSxDQURBOztBQVNBLFFBVEEsa0JBU0E7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFGQTtBQUlBLEtBZEE7QUFnQkEsV0FoQkEscUJBZ0JBO0FBQ0E7QUFDQSxLQWxCQTs7QUFtQkEsYUFDQTtBQUNBLDZCQURBLG1DQUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUVBLCtF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QUFpQjs7Ozs7Ozs7O0FDekNoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBa0U7QUFDbkc7QUFDOGI7QUFDYTtBQUMzYztBQUN5UTtBQUN6UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVXQUFjO0FBQ2hCLEVBQUUsK05BQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVjLGdGQUFpQiIsImZpbGUiOiJqcy81LjcyYzBmYjc4ZTdkNzUxZTYwMTQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldCB0b3VybmFtZW50LWJyYWNrZXQtLXJvdW5kZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19yb3VuZCB0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLS1xdWFydGVyZmluYWxzXCIgdi1mb3I9XCJicmFja2V0IGluIGJyYWNrZXRzLnJvdW5kc1wiIDprZXk9XCJicmFja2V0LnJvdW5kLmlkXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fcm91bmQtdGl0bGVcIj57e2JyYWNrZXQucm91bmQudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fbGlzdFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJjb3VudENsYXNzKGJyYWNrZXQsIGJyYWNrZXRzLmlzX2Z1bGwpXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19pdGVtXCIgdi1mb3I9XCJtYXRjaCBpbiBicmFja2V0Lm1hdGNoZXNcIiA6a2V5PVwibWF0Y2guaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19tYXRjaFwiIHRhYmluZGV4PVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX3RhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY2FwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayAgOnRvPVwieyBuYW1lOiAnbWF0Y2gnLCBwYXJhbXM6IHsgaWQ6IG1hdGNoLmlkIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bWF0Y2gudGl0bGV9fSwgPHRpbWUgZGF0ZXRpbWU9XCIxOTk4LTAyLTE4XCI+e3ttb21lbnQoIGNvbnZlcnRUaW1lKG1hdGNoLnN0YXJ0X2F0KSwgXCJZWVlZLU1NLUREIGg6bW06c3NcIikuZm9ybWF0KCdEIE1NTSwgSEg6bW0nKSB9fSDQnNCh0Jo8L3RpbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInNyLW9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGVhbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNjb3JlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X190ZWFtXCIgOmNsYXNzPVwieycgdG91cm5hbWVudC1icmFja2V0X190ZWFtLS13aW5uZXInOiAodGVhbS5pZCE9dW5kZWZpbmVkICYmIHRlYW0uaWQ9PW1hdGNoLndpbm5lcl9pZCl9XCIgdi1mb3I9XCIodGVhbSwgaW5kZXgpIGluIG1hdGNoLnRlYW1zXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRvdXJuYW1lbnQtYnJhY2tldF9fY291bnRyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFiYnIgY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvZGVcIj57e3RlYW0udGl0bGV9fTwvYWJicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19mbGFnIGZsYWctaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidG91cm5hbWVudC1icmFja2V0X19zY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX251bWJlclwiIHYtaWY9XCJtYXRjaC53aW5uZXJfaWQ+MFwiPnt7bWF0Y2gucmVzdWx0W2luZGV4XX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3VybmFtZW50LWJyYWNrZXRfX251bWJlclwiIHYtZWxzZT4wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICAgIGltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG4gICAgaW1wb3J0IHsgbG9hZE1lc3NhZ2VzIH0gZnJvbSAnfi9wbHVnaW5zL2kxOG4nXHJcbiAgICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogJ2xhbmcvbG9jYWxlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBicmFja2V0czogW10sXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUb3VybmFtZW50QnJhY2tldHMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhc3luYyBnZXRUb3VybmFtZW50QnJhY2tldHMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3RvdXJuYW1lbnRzLycrdGhpcy4kcm91dGUucGFyYW1zLmlkK1wiL2JyYWNrZXRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnYnJhY2tldHMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb252ZXJ0VGltZShzdGFydF9hdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUNvbnZlcnRVVEMoc3RhcnRfYXQsIC0xKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb3VudENsYXNzKGJyYWNrZXQsIHR5cGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighdHlwZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihicmFja2V0LnJvdW5kLm51bWJlcj09MSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goJ2QtYmxvY2snKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdtdC02MCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8dGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Y2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0td3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCIgaWQ9XCJmaWx0ZXItZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzdGF0dXNfaWRcIiBuYW1lPVwic3RhdHVzX2lkXCIgY2xhc3M9J2Zvcm0tY29udHJvbCcgZGF0YS1zdHlsZT1cImZvcm0tY29udHJvbCBidG4tZGVmYXVsdCBidG4tb3V0bGluZVwiIGlkPVwic3RhdHVzX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwic3RhdHVzIGluIHN0YXR1c19saXN0XCIgdi1iaW5kOnZhbHVlPVwic3RhdHVzLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHN0YXR1cy50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXAtMlwiPjwvZGl2PlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiZmlnaHRzIT1udWxsICYmIGZpZ2h0cy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLW1hdGNoXCIgdi1mb3I9XCJmaWdodCBpbiBmaWdodHNcIiB2LWlmPVwiZmlnaHQuaW52aXRhdGlvbnMhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstbWF0Y2gtdGVhbS1sZWZ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0nLCBwYXJhbXM6IHsgaWQ6IGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWQgfX1cIiB2LWlmPVwiZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbSE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC10ZWFtLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsoZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctNjRweCBtci0xMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtdGVhbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1tYXRjaC1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICdtYXRjaCcsIHBhcmFtczogeyBpZDogZmlnaHQuaWQgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtc3RhdHVzLXZzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlPlZTIChibzMpPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtc3RhdHVzLWRhdGVcIj57eyBtb21lbnQudXRjKGZpZ2h0LnN0YXJ0X2F0LCBcIllZWVktTU0tREQgaDptbTpzc1wiKS5mb3JtYXQoJ01NTU0gRG8sIEhIOm1tJykgfX0g0JzQodCaPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY2hlY2tVcGNvbWluZyhmaWdodC5zdGFydF9hdClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXNjb3JlXCI+e3skdCgndXBjb21pbmcnKX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJmaWdodC53aW5uZXJfaWQ+MCAmJiBmaWdodC5yZXN1bHQhPW51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXNjb3JlIGJnLWRhcmstMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwicGFyc2VJbnQoZmlnaHQucmVzdWx0WzBdKT5wYXJzZUludChmaWdodC5yZXN1bHRbMV0pICYmIGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaWQ9PWZpZ2h0Lndpbm5lcl9pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZ2h0LnJlc3VsdFswXX19IDoge3tmaWdodC5yZXN1bHRbMV19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cInBhcnNlSW50KGZpZ2h0LnJlc3VsdFsxXSk+cGFyc2VJbnQoZmlnaHQucmVzdWx0WzBdKSAmJiBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmlkPT1maWdodC53aW5uZXJfaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmaWdodC5yZXN1bHRbMF19fSA6IHt7ZmlnaHQucmVzdWx0WzFdfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmlnaHQucmVzdWx0WzFdfX0gOiB7e2ZpZ2h0LnJlc3VsdFswXX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5rLW1hdGNoLXNjb3JlIGJnLXN1Y2Nlc3NcIj57eyR0KCdvbmxpbmUnKX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstbWF0Y2gtdGVhbS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0nLCBwYXJhbXM6IHsgaWQ6IGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaWQgfX1cIiB2LWlmPVwiZmlnaHQuaW52aXRhdGlvbnNbMV0udGVhbSE9bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuay1tYXRjaC10ZWFtLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLnRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmstbWF0Y2gtdGVhbS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0uaW1hZ2UsICdhdmF0YXJfdGVhbScpXCIgY2xhc3M9XCJ3LTY0cHggbWwtMTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiPjwvcGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwidHh0LWRhbmdlclwiPnt7JHQoJ25vX3Jlc3VsdHMnKX19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgICBpbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0MidcclxuICAgIGltcG9ydCB7IGxvYWRNZXNzYWdlcyB9IGZyb20gJ34vcGx1Z2lucy9pMThuJ1xyXG4gICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJmaWx0ZXJcIl0sXHJcblxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaycsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZmlnaHRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19saXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjAsIHRpdGxlOiAn0JLRgdC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjEsIHRpdGxlOiAn0J/RgNC+0YjQtdC00YjQuNC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjIsIHRpdGxlOiBcItCe0L3Qu9Cw0LnQvVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MywgdGl0bGU6IFwi0J/RgNC10LTRgdGC0L7Rj9GJ0LjQtVwifVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19pZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBsb2FkTWVzc2FnZXModGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbWVudC5sb2NhbGUodGhpcy5sb2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRGaWdodHMoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjc3RhdHVzX2xpc3RcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi0KHRgtCw0YLRg9GBINC80LDRgtGH0LBcIlxyXG4gICAgICAgICAgICAgICAgfSkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZi5zdGF0dXNfaWQgPSAkKGUuY3VycmVudFRhcmdldCkuZmluZChcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdldEZpZ2h0cygpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5U3RhcnRQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYWdlJyA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdfbGltaXQnIDogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX3NvcnRcIiA6ICctc3RhcnRfYXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl93aXRoXCIgOiAnaW52aXRhdGlvbnMudGVhbSxpbnZpdGF0aW9ucy50ZWFtLmluc3RpdHV0aW9uLGludml0YXRpb25zLnRlYW0uaW5zdGl0dXRpb24ubG9jYXRpb24sd2lubmVyLGdhbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5maWx0ZXIhPT1udWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLmZpbHRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyLmhhc093blByb3BlcnR5KHByb3ApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5U3RhcnRQYXJhbXNbcHJvcF0gPSB0aGlzLmZpbHRlcltwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hdXRoZW50aWNhdGVkICYmIHRoaXMudXNlci5yb2xlX2lkIT0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyb3V0ZSA9ICcvYXBpL3RlYW1zLycrdGhpcy51c2VyLnRlYW1faWQrJy9maWdodHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnVzZXIudHlwZT09J3JlZmVyZWUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydqdWRnZV9pZCddID0gdGhpcy51c2VyLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJvdXRlID0gJy9hcGkvZmlnaHRzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJvdXRlID0gJy9hcGkvZmlnaHRzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdHVzX2lkPT0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snd2lubmVyX2lkLWd0J10gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdHVzX2lkPT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snd2lubmVyX2lkJ10gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydzdGFydF9hdC1zdCddID0gdGhpcy5tb21lbnQudXRjKCkuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0dXNfaWQ9PTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0YXJ0UGFyYW1zWydzdGFydF9hdC1ndCddID0gdGhpcy5tb21lbnQudXRjKCkuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLlVybFBhcmFtc01lcmdlKHF1ZXJ5U3RhcnRQYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoYXJvdXRlKyc/JytxdWVyeSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZ2h0cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uKGZpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5zdGFydF9hdCA9IF9zZWxmLmRhdGVDb252ZXJ0VVRDKGZpZ2h0LnN0YXJ0X2F0LCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdmaWdodHMnLCBmaWdodHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGVja1VwY29taW5nKHN0YXJ0X2F0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMSA9IG5ldyBEYXRlKHN0YXJ0X2F0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGQxLmdldFRpbWUoKS1kMi5nZXRUaW1lKCk+MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICAnJHJvdXRlLnF1ZXJ5JyhuZXdQYWdlLCBvbGRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZpZ2h0cygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0dXNfaWQ6IGZ1bmN0aW9uKHZhbCwgb2xkVmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZpZ2h0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWUiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxjYXJkIDp0aXRsZT1cInRvdXJuYW1lbnQudGl0bGVcIiB2LWlmPVwidG91cm5hbWVudCE9bnVsbFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLXRhYnNcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBocmVmPVwiI3RhYnMtMS0xXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+0JvQvtCx0LHQuDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI3RhYnMtMS01XCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+0J/RgNCw0LLQuNC70LA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiN0YWJzLTEtMlwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPtCa0L7QvNCw0L3QtNGLPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjdGFicy0xLTNcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj7QnNCw0YLRh9C4PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjdGFicy0xLTRcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj7QodC10YLQutCwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjdGFicy0xLTZcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj7Qn9GA0LjQt9GLPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjdGFicy0xLTdcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiB2LWlmPVwidG91cm5hbWVudC5zdGF0dXM9PTNcIj7Qn9C+0LHQtdC00LjRgtC10LvQuDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBmYWRlIHNob3cgYWN0aXZlXCIgaWQ9XCJ0YWJzLTEtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdmVydGljYWwtZ2FwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsodG91cm5hbWVudC5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImNvbC1sZy04IG5rLXNpZGViYXItc3RpY2t5LXBhcmVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cIm1iLTVcIj57eyR0KCd0b3VybmFtZW50X3N0YXJ0X3RpbWUnKX19OjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzPVwibWItMTUgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCI+e3ttb21lbnQodG91cm5hbWVudC5zdGFydF9hdCwgXCJZWVlZLU1NLUREIGg6bW06c3NcIikuZm9ybWF0KCdEIE1NTSwgSEg6bW0nKSB9fSDQnNCh0Jo8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cIm1iLTVcIj57eyR0KCdyZWdfdW50aWwnKX19OjwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzPVwibWItMTAgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCI+e3ttb21lbnQodG91cm5hbWVudC5zdGFydF9hdCwgXCJZWVlZLU1NLUREIGg6bW06c3NcIikuc3VidHJhY3QoMSwgJ2hvdXJzJykuZm9ybWF0KCdEIE1NTSwgSEg6bW0nKSB9fSDQnNCh0Jo8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cIm1iLTVcIj57eyR0KCd0ZWFtcycpfX06PC9kdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJtYi0xMCB0eHQtZGFyayBmb250LTEzIHdlaWdodC01MDBcIj57e3RvdXJuYW1lbnQudGVhbXMubGVuZ3RofX0gLyB7eyB0b3VybmFtZW50LmNvdW50X3RlYW1zfX08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cIm1iLTVcIj57eyR0KCdnYW1lJyl9fTo8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzcz1cIm1iLTEwIHR4dC1kYXJrIGZvbnQtMTMgd2VpZ2h0LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnZ2FtZScsIHBhcmFtczogeyBnYW1lSWQ6IHRvdXJuYW1lbnQuZ2FtZS5pZCB9fVwiIDp0aXRsZT1cInRvdXJuYW1lbnQuZ2FtZS50aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHRvdXJuYW1lbnQuZ2FtZS5sb2dvX21pbmkpXCIgd2lkdGg9XCIzNVwiIDphbHQ9XCJ0b3VybmFtZW50LmdhbWUudGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtd2hpdGVcIiB2LWh0bWw9XCJ0b3VybmFtZW50LmRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInRhYnMtMS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwibmstdGFibGVcIiB2LWlmPVwidG91cm5hbWVudCE9bnVsbCAmJiB0b3VybmFtZW50LnRlYW1zIT09bnVsbCAmJiB0b3VybmFtZW50LnRlYW1zLmxlbmd0aD4wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ3RpdGxlJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ3BsYXllcnMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgnZ2FtZScpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdjb3VudF9tYXRjaGVzJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ2NvdW50X3dpbnMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgndmljdG9yeV9yYXRlJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwidGVhbSBpbiB0b3VybmFtZW50LnRlYW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0nLCBwYXJhbXM6IHsgaWQ6IHRlYW0uaWQgfX1cIiBjbGFzcz1cInZtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRJbWFnZUxpbmsodGVhbS5pbWFnZSwgJ2F2YXRhcl90ZWFtJylcIiBjbGFzcz1cInctNTBweCBtci0xMFwiIDphbHQ9XCJ0ZWFtLnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IHRlYW0udGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+PHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICd0ZWFtLmRldGFpbC5wbGF5ZXJzJywgcGFyYW1zOiB7IHNsdWc6IHRlYW0uc2x1ZyB9fVwiPnt7IHRlYW0udXNlcnMubGVuZ3RofX08L3JvdXRlci1saW5rPiAvIHt7IHRlYW0ucXVhbnRpdHl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWlmPVwidGVhbS5nYW1lIT09bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnZ2FtZScsIHBhcmFtczogeyBnYW1lSWQ6IHRvdXJuYW1lbnQuZ2FtZS5pZCB9fVwiIDp0aXRsZT1cInRvdXJuYW1lbnQuZ2FtZS50aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHRvdXJuYW1lbnQuZ2FtZS5sb2dvX21pbmkpXCIgd2lkdGg9XCIzNVwiIDphbHQ9XCJ0b3VybmFtZW50LmdhbWUudGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWVsc2U+PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e3RlYW0uY291bnRfZmlnaHRzfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3t0ZWFtLmNvdW50X3dpbnN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWlmPVwidGVhbS5jb3VudF9maWdodHM+MFwiPnt7IE51bWJlcigodGVhbS5jb3VudF93aW5zL3RlYW0uY291bnRfZmlnaHRzKjEwMCkudG9GaXhlZCgyKSl9fSU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCIgdi1lbHNlPjAlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIj48L3BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwidGFicy0xLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0Y2gtbGlzdCA6ZmlsdGVyPVwibWF0Y2hfZmlsdGVyXCI+PC9tYXRjaC1saXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cInRhYnMtMS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyYWNrZXRzPjwvYnJhY2tldHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJ0YWJzLTEtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC13aGl0ZVwiIHYtaHRtbD1cInRvdXJuYW1lbnQucnVsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiIGlkPVwidGFicy0xLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIHRleHQtd2hpdGVcIiB2LWh0bWw9XCJ0b3VybmFtZW50LnByaXplc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJ0YWJzLTEtN1wiIHYtaWY9XCJ0b3VybmFtZW50LnN0YXR1cz09M1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIod2lubmVyLCBpbmRleCkgaW4gd2lubmVyc1wiIDprZXk9XCJ3aW5uZXIuaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpbmRleH19IC0ge3t3aW5uZXIudGl0bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICAgIGltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xyXG4gICAgaW1wb3J0IHsgbG9hZE1lc3NhZ2VzIH0gZnJvbSAnfi9wbHVnaW5zL2kxOG4nXHJcbiAgICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuICAgIGltcG9ydCBNYXRjaExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWF0Y2hMaXN0XCI7XHJcbiAgICBpbXBvcnQgQnJhY2tldHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnJhY2tldHNcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgY29tcG9uZW50czoge0JyYWNrZXRzLCBNYXRjaExpc3R9LFxyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG5cclxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogJ2xhbmcvbG9jYWxlJ1xyXG4gICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgICAgIHRlYW1zSW5Ub3VybmFtZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlYW1zSW5Ub3VybmFtZW50ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50b3VybmFtZW50LnRlYW1zIT11bmRlZmluZWQgJiYgdGhpcy50b3VybmFtZW50LnRlYW1zLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudC50ZWFtcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZWFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlYW0ubGVuZ3RoPjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtc0luVG91cm5hbWVudC5wdXNoKHRlYW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZWFtc0luVG91cm5hbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgLy90aGlzLmdldFRvdXJuYW1lbnRCcmFja2V0cygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGV0YWlsIHRvdXJuYW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgdG91cm5hbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGZpZ2h0czogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19saXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjAsIHRpdGxlOiAn0JLRgdC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjEsIHRpdGxlOiAn0J/RgNC+0YjQtdC00YjQuNC1J30sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjIsIHRpdGxlOiBcItCe0L3Qu9Cw0LnQvVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MywgdGl0bGU6IFwi0J/RgNC10LTRgdGC0L7Rj9GJ0LjQtVwifVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1hdGNoX2ZpbHRlcjogeyd0b3VybmFtZW50X2lkJzogdGhpcy4kcm91dGUucGFyYW1zLmlkfSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19pZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB3aW5uZXJzOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzIDoge1xyXG4gICAgICAgICAgICBhc3luYyBnZXRUb3VybmFtZW50KClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5BcnJheVRvVXJsKHtcclxuICAgICAgICAgICAgICAgICAgICAnX3dpdGgnIDogJ2dhbWUsZmlnaHRzLGZpZ2h0cy5pbnZpdGF0aW9ucy50ZWFtLGZpZ2h0cy53aW5uZXInXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3RvdXJuYW1lbnRzLycrdGhpcy4kcm91dGUucGFyYW1zLmlkK1wiP1wiK3F1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ3RvdXJuYW1lbnQnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdXJuYW1lbnQuc3RhcnRfYXQgPSB0aGlzLmRhdGVDb252ZXJ0VVRDKHRoaXMudG91cm5hbWVudC5zdGFydF9hdCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudC5yZWdpc3Rlcl9zdGFydCA9IHRoaXMuZGF0ZUNvbnZlcnRVVEModGhpcy50b3VybmFtZW50LnJlZ2lzdGVyX3N0YXJ0LCAtMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY291bnQgcHJpemVzXHJcbiAgICAgICAgICAgICAgICAgICAgLyp2YXIgd2lubmVyc19wYXJ0ID0gdGhpcy50b3VybmFtZW50Lndpbm5lcnNfcGFydC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaXplX3Bvb2wgPSBwYXJzZUludCh0aGlzLnRvdXJuYW1lbnQucHJpemVfcG9vbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaXplcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5uZXJzX3BhcnQuZm9yRWFjaChmdW5jdGlvbihwYXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpemVzLnB1c2gocGFyc2VJbnQocGFydCkqcHJpemVfcG9vbC8xMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdXJuYW1lbnQucHJpemVzID0gcHJpemVzOyovXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMudG91cm5hbWVudC50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXRhKCkucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnRUZWFtcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRUb3VybmFtZW50QnJhY2tldHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50b3VybmFtZW50LnN0YXR1cz09MylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUb3VybmFtZW50V2lubmVycygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBnZXRUb3VybmFtZW50VGVhbXMoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuQXJyYXlUb1VybCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdfd2l0aCcgOiAnZmlnaHRzLHVzZXJzLGluc3RpdHV0aW9uLmxvY2F0aW9uLGluc3RpdHV0aW9uLmxvY2F0aW9uLnBhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdG91cm5hbWVudHMvJyt0aGlzLiRyb3V0ZS5wYXJhbXMuaWQrXCIvdGVhbXM/XCIrcXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnRvdXJuYW1lbnQsICd0ZWFtcycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGdldFRvdXJuYW1lbnRXaW5uZXJzKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS90b3VybmFtZW50cy8nK3RoaXMuJHJvdXRlLnBhcmFtcy5pZCtcIi93aW5uZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnd2lubmVycycsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyOiBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmF1dGhlbnRpY2F0ZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnbG9naW4nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnVzZXIudGVhbV9pZD09bnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHsgdHlwZTogJ3dhcm5pbmcnLCB0aXRsZTogJ0Vycm9yIScsIGh0bWw6ICdZb3UgbmVlZCB0byBiZSBpbiB0aGUgdGVhbS4nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3RvdXJuYW1lbnRzLycrdGhpcy4kcm91dGUucGFyYW1zLmlkKycvdGVhbXMvJyt0aGlzLnVzZXIudGVhbV9pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiAnWW91IGFyZSByZWdpc3RlcmVkIG9uIHRoZSB0b3VybmFtZW50ISdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUb3VybmFtZW50VGVhbXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoZWNrUmlnaXN0ZXJTdGFydCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbWVudC51dGMoKS5pc0FmdGVyKHRoaXMudG91cm5hbWVudC5yZWdpc3Rlcl9zdGFydCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoZWNrUmlnaXN0ZXJFbmQoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb21lbnQudXRjKCkuaXNCZWZvcmUodGhpcy5tb21lbnQodGhpcy50b3VybmFtZW50LnN0YXJ0X2F0KS5zdWJ0cmFjdCgxLCAnaG91cnMnKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoZWNrUmVnaXN0ZXJlZCh2YWx1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVhbXNJblRvdXJuYW1lbnQuaW5kZXhPZih2YWx1ZSkgPiAtMSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hlY2tVcGNvbWluZyhzdGFydF9hdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQxID0gbmV3IERhdGUoc3RhcnRfYXQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGQyID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmKGQxLmdldFRpbWUoKS1kMi5nZXRUaW1lKCk+MClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2RldGFpbC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLnRvdXJuYW1lbnQgIT0gbnVsbFxuICAgICAgICA/IF9jKFwiY2FyZFwiLCB7IGF0dHJzOiB7IHRpdGxlOiBfdm0udG91cm5hbWVudC50aXRsZSB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstdGFic1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi10YWJzXCIsIGF0dHJzOiB7IHJvbGU6IFwidGFibGlzdFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjdGFicy0xLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0JvQvtCx0LHQuFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjdGFicy0xLTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0J/RgNCw0LLQuNC70LBcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI3RhYnMtMS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCa0L7QvNCw0L3QtNGLXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiN0YWJzLTEtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQnNCw0YLRh9C4XCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiN0YWJzLTEtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQodC10YLQutCwXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiN0YWJzLTEtNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQn9GA0LjQt9GLXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS50b3VybmFtZW50LnN0YXR1cyA9PSAzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiN0YWJzLTEtN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCf0L7QsdC10LTQuNGC0LXQu9C4XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIsIGlkOiBcInRhYnMtMS0xXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdmVydGljYWwtZ2FwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTQgY29sLXhzLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQuaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhcl90ZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTggbmstc2lkZWJhci1zdGlja3ktcGFyZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwidG91cm5hbWVudF9zdGFydF90aW1lXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1iLTE1IHR4dC1kYXJrIGZvbnQtMTMgd2VpZ2h0LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tb21lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b3VybmFtZW50LnN0YXJ0X2F0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllZWVktTU0tREQgaDptbTpzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiRCBNTU0sIEhIOm1tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiDQnNCh0JpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkdFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJyZWdfdW50aWxcIikpICsgXCI6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWItMTAgdHh0LWRhcmsgZm9udC0xMyB3ZWlnaHQtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1vbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQuc3RhcnRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJ0cmFjdCgxLCBcImhvdXJzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiRCBNTU0sIEhIOm1tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiDQnNCh0JpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkdFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ0ZWFtc1wiKSkgKyBcIjpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYi0xMCB0eHQtZGFyayBmb250LTEzIHdlaWdodC01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRvdXJuYW1lbnQudGVhbXMubGVuZ3RoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50b3VybmFtZW50LmNvdW50X3RlYW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkdFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJnYW1lXCIpKSArIFwiOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1iLTEwIHR4dC1kYXJrIGZvbnQtMTMgd2VpZ2h0LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ2FtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lSWQ6IF92bS50b3VybmFtZW50LmdhbWUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udG91cm5hbWVudC5nYW1lLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b3VybmFtZW50LmdhbWUubG9nb19taW5pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLnRvdXJuYW1lbnQuZ2FtZS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS50b3VybmFtZW50LmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJ0YWJwYW5lbFwiLCBpZDogXCJ0YWJzLTEtMlwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS50b3VybmFtZW50ICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQudGVhbXMgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQudGVhbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLXRhYmxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwidGl0bGVcIikpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBsYXllcnNcIikpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImdhbWVcIikpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNvdW50X21hdGNoZXNcIikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb3VudF93aW5zXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwidmljdG9yeV9yYXRlXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udG91cm5hbWVudC50ZWFtcywgZnVuY3Rpb24odGVhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2bS10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IHRlYW0uaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNTBweCBtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhcl90ZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogdGVhbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW0udGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGVhbS5kZXRhaWwucGxheWVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBzbHVnOiB0ZWFtLnNsdWcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0ZWFtLnVzZXJzLmxlbmd0aCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgLyBcIiArIF92bS5fcyh0ZWFtLnF1YW50aXR5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uZ2FtZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImdhbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUlkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQuZ2FtZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50b3VybmFtZW50LmdhbWUudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5nZXRJbWFnZUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdXJuYW1lbnQuZ2FtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxvZ29fbWluaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS50b3VybmFtZW50LmdhbWUudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW0uY291bnRfZmlnaHRzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModGVhbS5jb3VudF93aW5zKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY291bnRfZmlnaHRzID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRlYW0uY291bnRfd2lucyAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY291bnRfZmlnaHRzKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMCVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHsgYXR0cnM6IHsgcGFnaW5hdGlvbjogX3ZtLnBhZ2luYXRpb24gfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiwgaWQ6IFwidGFicy0xLTNcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcIm1hdGNoLWxpc3RcIiwgeyBhdHRyczogeyBmaWx0ZXI6IF92bS5tYXRjaF9maWx0ZXIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiwgaWQ6IFwidGFicy0xLTRcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJyYWNrZXRzXCIpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJ0YWJwYW5lbFwiLCBpZDogXCJ0YWJzLTEtNVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTMwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0udG91cm5hbWVudC5ydWxlcykgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYnBhbmVsXCIsIGlkOiBcInRhYnMtMS02XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtMzBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS50b3VybmFtZW50LnByaXplcykgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS50b3VybmFtZW50LnN0YXR1cyA9PSAzXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJ0YWJwYW5lbFwiLCBpZDogXCJ0YWJzLTEtN1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtMzBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTIgdGV4dC13aGl0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS53aW5uZXJzLCBmdW5jdGlvbih3aW5uZXIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHdpbm5lci5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGluZGV4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh3aW5uZXIudGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTAxNmY2ODMzXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDE2ZjY4MzNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2RldGFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMDE2ZjY4MzNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRzL2RldGFpbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0IHRvdXJuYW1lbnQtYnJhY2tldC0tcm91bmRlZFwiIH0sXG4gICAgX3ZtLl9sKF92bS5icmFja2V0cy5yb3VuZHMsIGZ1bmN0aW9uKGJyYWNrZXQpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogYnJhY2tldC5yb3VuZC5pZCxcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwidG91cm5hbWVudC1icmFja2V0X19yb3VuZCB0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLS1xdWFydGVyZmluYWxzXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX3JvdW5kLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhicmFja2V0LnJvdW5kLnRpdGxlKSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2xpc3RcIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5jb3VudENsYXNzKGJyYWNrZXQsIF92bS5icmFja2V0cy5pc19mdWxsKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChicmFja2V0Lm1hdGNoZXMsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgeyBrZXk6IG1hdGNoLmlkLCBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19tYXRjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X190YWJsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG91cm5hbWVudC1icmFja2V0X19jYXB0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWF0Y2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBtYXRjaC5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG1hdGNoLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZGF0ZXRpbWU6IFwiMTk5OC0wMi0xOFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubW9tZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb252ZXJ0VGltZShtYXRjaC5zdGFydF9hdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZWVlZLU1NLUREIGg6bW06c3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJEIE1NTSwgSEg6bW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCIg0JzQodCaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKG1hdGNoLnRlYW1zLCBmdW5jdGlvbih0ZWFtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvdXJuYW1lbnQtYnJhY2tldF9fdGVhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB0b3VybmFtZW50LWJyYWNrZXRfX3RlYW0tLXdpbm5lclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmlkICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmlkID09IG1hdGNoLndpbm5lcl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX2NvdW50cnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhYmJyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG91cm5hbWVudC1icmFja2V0X19jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRlYW0udGl0bGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG91cm5hbWVudC1icmFja2V0X19mbGFnIGZsYWctaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3VybmFtZW50LWJyYWNrZXRfX3Njb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLndpbm5lcl9pZCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3VybmFtZW50LWJyYWNrZXRfX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobWF0Y2gucmVzdWx0W2luZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3VybmFtZW50LWJyYWNrZXRfX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIwXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIHsgc3RhdGljQ2xhc3M6IFwic3Itb25seVwiIH0sIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUZWFtXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlNjb3JlXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTI2MGEwNDgyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjYwYTA0ODJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTI2MGEwNDgyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0JyYWNrZXRzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiY2FyZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXdyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLCBpZDogXCJmaWx0ZXItZm9ybVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGF0dXNfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdGF0dXNfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c19pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtc3R5bGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBidG4tZGVmYXVsdCBidG4tb3V0bGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzdGF0dXNfbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RhdHVzX2lkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdGF0dXNfbGlzdCwgZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZG9tUHJvcHM6IHsgdmFsdWU6IHN0YXR1cy5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Moc3RhdHVzLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcC0yXCIgfSlcbiAgICAgIF0sXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZpZ2h0cyAhPSBudWxsICYmIF92bS5maWdodHMubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlnaHRzLCBmdW5jdGlvbihmaWdodCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZ2h0Lmludml0YXRpb25zICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0gIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBmaWdodC5pbnZpdGF0aW9uc1swXS50ZWFtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1sb2dvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNjRweCBtci0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZ2V0SW1hZ2VMaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzBdLnRlYW0uaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJfdGVhbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLW5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXN0YXR1c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXRjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBmaWdodC5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXN0YXR1cy12c1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1tfdm0uX3YoXCJWUyAoYm8zKVwiKV1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC1zdGF0dXMtZGF0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnV0YyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuc3RhcnRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWVlZWS1NTS1ERCBoOm1tOnNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJNTU1NIERvLCBISDptbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCIg0JzQodCaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja1VwY29taW5nKGZpZ2h0LnN0YXJ0X2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXNjb3JlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ1cGNvbWluZ1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWdodC53aW5uZXJfaWQgPiAwICYmIGZpZ2h0LnJlc3VsdCAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5rLW1hdGNoLXNjb3JlIGJnLWRhcmstMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChmaWdodC5yZXN1bHRbMF0pID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZmlnaHQucmVzdWx0WzFdKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnaHQuaW52aXRhdGlvbnNbMF0udGVhbS5pZCA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC53aW5uZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZ2h0LnJlc3VsdFswXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWdodC5yZXN1bHRbMV0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUludChmaWdodC5yZXN1bHRbMV0pID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGZpZ2h0LnJlc3VsdFswXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmlkID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC53aW5uZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZ2h0LnJlc3VsdFswXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWdodC5yZXN1bHRbMV0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZ2h0LnJlc3VsdFsxXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWdodC5yZXN1bHRbMF0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuay1tYXRjaC1zY29yZSBiZy1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm9ubGluZVwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1tYXRjaC10ZWFtLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0gIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstbWF0Y2gtdGVhbS1uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ2h0Lmludml0YXRpb25zWzFdLnRlYW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLW1hdGNoLXRlYW0tbG9nb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTY0cHggbWwtMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEltYWdlTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdodC5pbnZpdGF0aW9uc1sxXS50ZWFtLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyX3RlYW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHsgYXR0cnM6IHsgcGFnaW5hdGlvbjogX3ZtLnBhZ2luYXRpb24gfSB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcIm5vX3Jlc3VsdHNcIikpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00MTBmOWE1Y1wiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQxMGY5YTVjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDEwZjlhNWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hMaXN0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9CcmFja2V0cy52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9CcmFja2V0cy52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTI2MGEwNDgyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQnJhY2tldHMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0JyYWNrZXRzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yNjBhMDQ4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI2MGEwNDgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0JyYWNrZXRzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQnJhY2tldHMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01hdGNoTGlzdC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NYXRjaExpc3QudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00MTBmOWE1Y1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01hdGNoTGlzdC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTWF0Y2hMaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MTBmOWE1Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQxMGY5YTVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL01hdGNoTGlzdC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAxNmY2ODMzXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMTZmNjgzM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAxNmY2ODMzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50cy9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudHMvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9