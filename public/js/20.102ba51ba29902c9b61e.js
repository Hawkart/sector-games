webpackJsonp([20],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/players/index.vue":
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

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _sweetalert = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    metaInfo: function metaInfo() {
        return { title: this.$t('players') };
    },


    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        authenticated: 'auth/check'
    })),
    mounted: function mounted() {
        this.getVueItems();
    },

    data: function data() {
        return {
            players: [],
            game_id: this.$route.query.game_id || '',
            country_id: this.$route.query.country_id || '',
            free_player: this.$route.query.free_player || '',
            pagination: [],
            status_id: 0,
            nickname: '',
            choose_players: [],
            statuses: [{ id: '', title: '' }, { id: 0, title: this.$t('free') }, { id: 1, title: this.$t('in_team') }]
        };
    },
    methods: {
        getVueItems: function getVueItems() {
            var _this = this;

            var queryStartParams = {
                'page': 1,
                '_limit': 12,
                'type': 'player',
                'free_player': this.status_id,
                'site_id': 2,
                '_with': 'team,country,team.fights',
                "active": 1,
                "_sort": '-id'
            };

            if (this.nickname.length > 0) queryStartParams[''];

            var query = this.UrlParamsMerge(queryStartParams);

            _axios2.default.get('/api/users?' + query).then(function (response) {

                var players = response.data.data;
                var _self = _this;

                players.forEach(function (player) {
                    var cf = 0;
                    var wins = 0;
                    if (player.team_id > 0 && player.team.fights.length > 0) {
                        var tid = player.team_id;

                        player.team.fights.forEach(function (fight) {
                            if (fight.status == 3) {
                                cf++;
                                if (fight.winner_id == tid) {
                                    wins++;
                                }
                            }
                        });
                    }
                    player.wins = wins;
                    player.fights_count = cf;
                });

                _this.$set(_this, 'players', players);

                delete response.data.data;
                _this.pagination = response.data;
            });
        },
        getGames: function getGames() {
            var _this2 = this;

            _axios2.default.get('/api/games').then(function (response) {
                _this2.$set(_this2, 'games', response.data);
                _this2.$parent.games = _this2.games;
            });
        },
        getCountries: function getCountries() {
            var _this3 = this;

            _axios2.default.get('/api/countries').then(function (response) {
                _this3.$set(_this3, 'countries', response.data);
            });
        },
        search: function search(event) {
            this.$router.push(this.$route.path + "?" + $("#filter-form").serialize());
        },
        sendInvites: function sendInvites() {
            var _self = this;

            this.choose_players.forEach(function (user_id) {
                _self.invite(user_id);
            });

            (0, _sweetalert2.default)({
                type: 'success',
                title: this.$t('invitations_sent')
            });
        },
        invite: function invite(user_id) {
            _axios2.default.put('/api/teams/' + this.user.team_id + '/users/' + user_id).then(function (response) {});
        }
    },
    watch: {
        '$route.query': function $routeQuery(newPage, oldPage) {
            this.getVueItems();
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7d0ecce8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/players/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = {render:function(){},staticRenderFns: []}
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7d0ecce8", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/players/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/players/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d0ecce8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7d0ecce8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/players/index.vue");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d0ecce8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/players/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d0ecce8", Component.options)
  } else {
    hotAPI.reload("data-v-7d0ecce8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wbGF5ZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3BsYXllcnMvaW5kZXgudnVlPzYzMmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wbGF5ZXJzL2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRUE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQSxLQUhBOzs7QUFLQSx5Q0FDQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxNQURBLENBTEE7QUFXQSxXQVhBLHFCQVdBO0FBQ0E7QUFDQSxLQWJBOztBQWNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLG9EQUZBO0FBR0EsMERBSEE7QUFJQSw0REFKQTtBQUtBLDBCQUxBO0FBTUEsd0JBTkE7QUFPQSx3QkFQQTtBQVFBLDhCQVJBO0FBU0EsdUJBQ0EscUJBREEsRUFFQSxpQ0FGQSxFQUdBLG9DQUhBO0FBVEE7QUFlQSxLQTlCQTtBQStCQTtBQUNBO0FBQUE7O0FBRUE7QUFDQSx5QkFEQTtBQUVBLDRCQUZBO0FBR0EsZ0NBSEE7QUFJQSw2Q0FKQTtBQUtBLDRCQUxBO0FBTUEsbURBTkE7QUFPQSwyQkFQQTtBQVFBO0FBUkE7O0FBV0EsMENBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxrREFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQ0E7QUFDQTtBQUNBLDREQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQSxpQkFyQkE7O0FBdUJBOztBQUVBO0FBQ0E7QUFDQSxhQWhDQTtBQWlDQSxTQXBEQTtBQXFEQSxzQ0FDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEE7QUFJQSxTQTNEQTtBQTREQSw4Q0FDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxhQUZBO0FBR0EsU0FqRUE7QUFrRUEsdUNBQ0E7QUFDQTtBQUNBLFNBckVBO0FBc0VBLG1CQXRFQSx5QkFzRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFGQTs7QUFJQTtBQUNBLCtCQURBO0FBRUE7QUFGQTtBQUlBLFNBakZBO0FBbUZBLGNBbkZBLGtCQW1GQSxPQW5GQSxFQW9GQTtBQUNBLG1IQUVBLENBRkE7QUFHQTtBQXhGQSxLQS9CQTtBQXlIQTtBQUNBLHNCQURBLHVCQUNBLE9BREEsRUFDQSxPQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEE7QUF6SEEsQzs7Ozs7Ozs7QUMzRkEsaUJBQWlCLG1CQUFtQjtBQUNyQixrRUFBUztBQUN4QixJQUFJLEtBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQWtFO0FBQ25HO0FBQzZiO0FBQ2E7QUFDMWM7QUFDd1E7QUFDeFE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzV0FBYztBQUNoQixFQUFFLDhOQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvMjAuMTAyYmE1MWJhMjk5MDJjOWI2MWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8Y2FyZCA6dGl0bGU9XCIkdCgncGxheWVycycpXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGlkPVwiZmlsdGVyLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm5pY2tuYW1lXCIgbmFtZT1cIm5pY2tuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cInt7JHQoJ25pY2tuYW1lJyl9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJmcmVlX3BsYXllclwiIG5hbWU9XCJmcmVlX3BsYXllclwiIGNsYXNzPSdmb3JtLWNvbnRyb2wnIGRhdGEtc3R5bGU9XCJmb3JtLWNvbnRyb2wgYnRuLWRlZmF1bHQgYnRuLW91dGxpbmVcIiBpZD1cInN0YXR1c19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInN0YXR1cyBpbiBzdGF0dXNlc1wiIHYtYmluZDp2YWx1ZT1cInN0YXR1cy5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChzdGF0dXMudGl0bGUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvY2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcC0yXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwibmstdGFibGVcIiB2LWlmPVwicGxheWVycyE9PW51bGwgJiYgcGxheWVycy5sZW5ndGg+MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGggdi1pZj1cImF1dGhlbnRpY2F0ZWRcIj48L3RoPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ25hbWUnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCd0ZWFtJyl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3skdCgnY291bnRfbWF0Y2hlcycpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7JHQoJ2NvdW50X3dpbnMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCd2aWN0b3J5X3JhdGUnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyR0KCdzdGF0dXMnKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwicGxheWVyIGluIHBsYXllcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHYtaWY9XCJhdXRoZW50aWNhdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwbGF5ZXIuZnJlZV9wbGF5ZXIgJiYgcGxheWVyLmlkIT11c2VyLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiA6dmFsdWU9XCJwbGF5ZXIuaWRcIiB2LW1vZGVsPVwiY2hvb3NlX3BsYXllcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rICA6dG89XCJ7IG5hbWU6ICdwbGF5ZXInLCBwYXJhbXM6IHsgaWQ6IHBsYXllci5pZCB9fVwiICBjbGFzcz1cInZtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEltYWdlTGluayhwbGF5ZXIuYXZhdGFyKVwiIGNsYXNzPVwidy01MHB4IG1yLTEwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgcGxheWVyLm5pY2tuYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjxzcGFuIHYtaWY9XCJwbGF5ZXIudGVhbV9pZD4wICYmIHBsYXllci50ZWFtIT09bnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgIDp0bz1cInsgbmFtZTogJ3RlYW0uZGV0YWlsJywgcGFyYW1zOiB7aWQgOiBwbGF5ZXIudGVhbS5pZCB9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZ2V0SW1hZ2VMaW5rKHBsYXllci50ZWFtLmltYWdlKVwiIGNsYXNzPVwidy01MHB4IG1yLTEwXCIgdi1pZj1cInBsYXllci50ZWFtLmltYWdlIT09bnVsbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJwbGF5ZXIudGVhbS5pbWFnZT09bnVsbFwiPnt7cGxheWVyLnRlYW0udGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3twbGF5ZXIuZmlnaHRzX2NvdW50fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e3BsYXllci53aW5zfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWlmPVwicGxheWVyLmZpZ2h0c19jb3VudD4wXCI+e3sgTnVtYmVyKChwbGF5ZXIud2lucy9wbGF5ZXIuZmlnaHRzX2NvdW50KjEwMCkudG9GaXhlZCgyKSl9fSU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiB2LWVsc2U+MDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJwbGF5ZXIuZnJlZV9wbGF5ZXJcIj48c3BhbiBjbGFzcz1cInRleHQtd2FybmluZ1wiPnt7JHQoJ2ZyZWUnKX19PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJwbGF5ZXIudGVhbV9pZD4wICYmIHBsYXllci5pZD09cGxheWVyLnRlYW0uY2FwdF9pZFwiPjxzcGFuIGNsYXNzPVwidGV4dC1pbmZvXCI+e3skdCgnY2FwdGFpbicpfX08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT48c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPnt7JHQoJ2luX3RlYW0nKX19PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgdi1lbHNlIGNsYXNzPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdub19wbGF5ZXJzJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiPjwvcGFnaW5hdGlvbj5cclxuICAgICAgICA8L2NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG4gICAgaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3BsYXllcnMnKSB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VnVlSXRlbXMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBsYXllcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZ2FtZV9pZDogdGhpcy4kcm91dGUucXVlcnkuZ2FtZV9pZCB8fCAnJyxcclxuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6IHRoaXMuJHJvdXRlLnF1ZXJ5LmNvdW50cnlfaWQgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBmcmVlX3BsYXllcjogdGhpcy4kcm91dGUucXVlcnkuZnJlZV9wbGF5ZXIgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBbXSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c19pZDogMCxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGNob29zZV9wbGF5ZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c2VzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOicnLCB0aXRsZTogJyd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtpZDowLCB0aXRsZTogdGhpcy4kdCgnZnJlZScpfSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MSwgdGl0bGU6IHRoaXMuJHQoJ2luX3RlYW0nKX1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHMgOiB7XHJcbiAgICAgICAgICAgIGdldFZ1ZUl0ZW1zOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBxdWVyeVN0YXJ0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdwYWdlJyA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ19saW1pdCcgOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAndHlwZScgOiAncGxheWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnZnJlZV9wbGF5ZXInOiB0aGlzLnN0YXR1c19pZCxcclxuICAgICAgICAgICAgICAgICAgICAnc2l0ZV9pZCc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ193aXRoJyA6ICd0ZWFtLGNvdW50cnksdGVhbS5maWdodHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlXCIgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiX3NvcnRcIiA6ICctaWQnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubmlja25hbWUubGVuZ3RoPjApXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlTdGFydFBhcmFtc1snJ11cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLlVybFBhcmFtc01lcmdlKHF1ZXJ5U3RhcnRQYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2Vycz8nK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxheWVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24ocGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpbnMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIudGVhbV9pZD4wICYmIHBsYXllci50ZWFtLmZpZ2h0cy5sZW5ndGg+MClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpZCA9IHBsYXllci50ZWFtX2lkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci50ZWFtLmZpZ2h0cy5mb3JFYWNoKGZ1bmN0aW9uKGZpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmaWdodC5zdGF0dXM9PTMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmaWdodC53aW5uZXJfaWQ9PXRpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lucysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLndpbnMgPSB3aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZmlnaHRzX2NvdW50ID0gY2Y7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAncGxheWVycycsIHBsYXllcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0R2FtZXM6IGZ1bmN0aW9uKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2dhbWVzJykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2dhbWVzJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LmdhbWVzID0gdGhpcy5nYW1lcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRDb3VudHJpZXM6IGZ1bmN0aW9uKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NvdW50cmllcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdjb3VudHJpZXMnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWFyY2g6IGZ1bmN0aW9uKGV2ZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh0aGlzLiRyb3V0ZS5wYXRoK1wiP1wiKyQoXCIjZmlsdGVyLWZvcm1cIikuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZW5kSW52aXRlcygpe1xyXG4gICAgICAgICAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob29zZV9wbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKHVzZXJfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfc2VsZi5pbnZpdGUodXNlcl9pZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuJHQoJ2ludml0YXRpb25zX3NlbnQnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGludml0ZSh1c2VyX2lkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5wdXQoJy9hcGkvdGVhbXMvJyt0aGlzLnVzZXIudGVhbV9pZCsnL3VzZXJzLycrdXNlcl9pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgICckcm91dGUucXVlcnknKG5ld1BhZ2UsIG9sZFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VnVlSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcGxheWVycy9pbmRleC52dWUiLCJ2YXIgZXNFeHBvcnRzID0ge3JlbmRlcjpmdW5jdGlvbigpe30sc3RhdGljUmVuZGVyRm5zOiBbXX1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03ZDBlY2NlOFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdkMGVjY2U4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wbGF5ZXJzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi03ZDBlY2NlOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcGxheWVycy9pbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2QwZWNjZThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3BsYXllcnMvaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdkMGVjY2U4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2QwZWNjZThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3BsYXllcnMvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcGxheWVycy9pbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCJdLCJzb3VyY2VSb290IjoiIn0=