webpackJsonp([12],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/tournament_rules.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    layout: 'default',

    metaInfo: function metaInfo() {
        return { title: 'Технические правила Турнира' };
    },


    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        locale: 'lang/locale'
    }))
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0462faf8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournament_rules.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h3", { staticClass: "nk-decorated-h-2" }, [
        _vm._v("Технические правила Турнира")
      ]),
      _vm._v(" "),
      _c("p", [
        _c("span", [_vm._v("Игроки обязаны связаться с ")]),
        _vm._v("судьей"),
        _c("span", [
          _vm._v(
            " не позднее чем за 15 минут до начала Матча в Чате на странице Матча на сайте "
          )
        ]),
        _c("a", { attrs: { href: "http://www.youthleague.ru/" } }, [
          _c(
            "span",
            {
              staticStyle: {
                "text-decoration": "none",
                "text-underline": "none"
              }
            },
            [_vm._v("www.youthleague.ru")]
          )
        ]),
        _c("span", [_vm._v(". Общается с судьей только капитан Команды.")])
      ]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("span", [
            _vm._v(" Версия игры: лицензионная “Dota2” "),
            _c("em", [_vm._v("последняя доступная на платформе Steam")])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [
            _vm._v(
              " Матчи проходит до двух победы (bo3). Финал Турнира до трех побед (bo5)."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v("Турнир проходит в формате:\n            "),
          _c("ol", [
            _c("li", [_vm._v("Региональные квалификации – Групповой раунд>")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Финал – по олимпийской системе (single elimination). В Финал выходит по 2-е Команды из каждой группы. "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [
            _vm._v(
              " Правила могут быть изменены и/или дополнены организатором Турнира без дополнительного уведомления."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [
            _vm._v(" В игре принимают участие 2 команды по 5 человек в каждой.")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [
            _vm._v(
              " В игре могут находится только игроки, судьи и комментаторы."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [
            _vm._v(" Creepskip разрешен («спелами» стопить «крипов» можно).")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [_vm._v(" Backdoor – разрешен всех «тауэров».")])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [
            _vm._v(" Игровые настройки при использовании русского клиента:"),
            _c("br")
          ]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [_vm._v("Режим игры: Режим Капитанов")]),
            _vm._v(" "),
            _c("li", [_vm._v("Версия: Обычная (Capitan Mode)")]),
            _vm._v(" "),
            _c("li", [_vm._v("Местоположение сервера: Люксембург")]),
            _vm._v(" "),
            _c("li", [_vm._v("Разрешить наблюдение – разрешить")]),
            _vm._v(" "),
            _c("li", [_vm._v("Наличие тренера – запретить")])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [
            _vm._v(" Игровые настройки при использовании английского клиента:"),
            _c("br")
          ]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [_vm._v("Game mode: Captains Mode")]),
            _vm._v(" "),
            _c("li", [_vm._v("Version: Tournament")]),
            _vm._v(" "),
            _c("li", [_vm._v("Server Location: Luxembourg")]),
            _vm._v(" "),
            _c("li", [_vm._v("Spectators – enabled")]),
            _vm._v(" "),
            _c("li", [_vm._v("Coach — disabled")])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [
            _vm._v(
              " Если командам не удобно играть на дефолтном сервере — они могут договориться об устраивающем их, обязательно согласовав это с судьей."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [
            _vm._v(
              " Побеждает команда, уничтожившая трон противника, или вынудившая команду противника (2-х и более игроков) покинуть игру."
            )
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("strong", [_c("span", [_vm._v(" Запрещено:"), _c("br")])]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "Любые действия, противоречащие данным Правилам, а также Правилам игры Dota2"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Использования «багов» карты, запрещенных программ, макросов."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Передача Divine Rapier при помощи суицида или смерти от Roshan или «крипов» (вражеских и/или нейтральных) запрещена. Также запрещена передача подобным образом трофейной Divine Rapier."
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("Нахождения в игре посторонних лиц.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Оскорбления в адрес организаторов Лиги, судей, противников, «тиммейтов» и других участников соревнований."
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("«Флуд» в чат.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Неспортивное поведение (например, саботирование матчей).")
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("Написание “gg” в еще не законченном матче.")]),
            _vm._v(" "),
            _c("li", [_vm._v("Начинать игру неполными составами команд.")]),
            _vm._v(" "),
            _c("li", [_vm._v("Играть с чужой учетной записи.")]),
            _vm._v(" "),
            _c("li", [_vm._v("Намеренно разрывать соединение с сервером.")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Снимать паузу без уведомления противоположной Команды и получения от Капитана согласия на продолжение Матча - нельзя. О таком нарушении необходимо уведомлять судью."
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("strong", [_c("span", [_vm._v(" Дисциплинарные санкции:")])]),
          _c("br"),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "За нарушение любого из правил, Судья Матча оставляют за собой право назначить команде техническое поражение, или вынести официальное предупреждение."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Повторное предупреждение в ходе Матча – всегда ведет к техническому поражению."
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("strong", [_c("span", [_vm._v(" Технические проблемы:")])]),
          _c("br"),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "При дисконнекте всех игроков с сервера назначается переигровка, пики и баны остаются такие же, как до дисконнекта."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "При дисконнекте одного или нескольких игроков из команды, ставится пауза на срок не более 5-ти минут. (без особых указаний судьи)"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "При дисконнекте всех игроков из одной команды, при длительности игры не более 10 минут с разницей в счёте не больше 5 очков — назначается переигровка при тех же пиках."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "При дисконнекте всех игроков из одной команды, при длительности игры более 15 минут победителя игры выявляет судья турнира по «вышкам», количеству уничтоженных героев и gpm, или же назначает переигровку."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "При вылете пикера команды во время выбора и бана героев и невозможности быстрого его переподключения (потеря хотя бы одного осознанного бана или выбора героя), лобби матча создается заново. При этом пикеры должны будут повторить все сделанные до момента вылета пики и баны."
              )
            ])
          ])
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-0462faf8", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/tournament_rules.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_rules_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/tournament_rules.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_rules_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_rules_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_rules_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_rules_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0462faf8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tournament_rules_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0462faf8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournament_rules.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_rules_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0462faf8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tournament_rules_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\tournament_rules.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0462faf8", Component.options)
  } else {
    hotAPI.reload("data-v-0462faf8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50X3J1bGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfcnVsZXMudnVlPzcxMGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50X3J1bGVzLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBNkVBOzs7OztZQUdBOztrQ0FDQTt3QkFDQTtBQUVBOzs7QUFDQTtjQUVBO2dCQUdBO0FBSkE7QUFSQSxFOzs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0NBQWtDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxxQ0FBcUMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pSQTtBQUFBO0FBQ0E7QUFDQTtBQUN3VztBQUNhO0FBQ3JYO0FBQzhLO0FBQzlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xMi5kYmRkN2E4MDg3ZTE4MjE1Yzg0ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibmstZGVjb3JhdGVkLWgtMlwiPtCi0LXRhdC90LjRh9C10YHQutC40LUg0L/RgNCw0LLQuNC70LAg0KLRg9GA0L3QuNGA0LA8L2gzPlxyXG4gICAgICAgIDxwPjxzcGFuPtCY0LPRgNC+0LrQuCDQvtCx0Y/Qt9Cw0L3RiyDRgdCy0Y/Qt9Cw0YLRjNGB0Y8g0YEgPC9zcGFuPtGB0YPQtNGM0LXQuTxzcGFuPiDQvdC1INC/0L7Qt9C00L3QtdC1INGH0LXQvCDQt9CwIDE1INC80LjQvdGD0YIg0LTQviDQvdCw0YfQsNC70LAg0JzQsNGC0YfQsCDQsiDQp9Cw0YLQtSDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0JzQsNGC0YfQsCDQvdCwINGB0LDQudGC0LUgPC9zcGFuPjxhIGhyZWY9XCJodHRwOi8vd3d3LnlvdXRobGVhZ3VlLnJ1L1wiPjxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lOyB0ZXh0LXVuZGVybGluZTogbm9uZTtcIj53d3cueW91dGhsZWFndWUucnU8L3NwYW4+PC9hPjxzcGFuPi4g0J7QsdGJ0LDQtdGC0YHRjyDRgSDRgdGD0LTRjNC10Lkg0YLQvtC70YzQutC+INC60LDQv9C40YLQsNC9INCa0L7QvNCw0L3QtNGLLjwvc3Bhbj48L3A+XHJcbiAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+INCS0LXRgNGB0LjRjyDQuNCz0YDRizog0LvQuNGG0LXQvdC30LjQvtC90L3QsNGPICZsZHF1bztEb3RhMiZyZHF1bzsgPGVtPtC/0L7RgdC70LXQtNC90Y/RjyDQtNC+0YHRgtGD0L/QvdCw0Y8g0L3QsCDQv9C70LDRgtGE0L7RgNC80LUgU3RlYW08L2VtPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+INCc0LDRgtGH0Lgg0L/RgNC+0YXQvtC00LjRgiDQtNC+INC00LLRg9GFINC/0L7QsdC10LTRiyAoYm8zKS4g0KTQuNC90LDQuyDQotGD0YDQvdC40YDQsCDQtNC+INGC0YDQtdGFINC/0L7QsdC10LQgKGJvNSkuPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT7QotGD0YDQvdC40YAg0L/RgNC+0YXQvtC00LjRgiDQsiDRhNC+0YDQvNCw0YLQtTpcclxuICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0KDQtdCz0LjQvtC90LDQu9GM0L3Ri9C1INC60LLQsNC70LjRhNC40LrQsNGG0LjQuCAmbmRhc2g7INCT0YDRg9C/0L/QvtCy0L7QuSDRgNCw0YPQvdC0PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCk0LjQvdCw0LsgJm5kYXNoOyDQv9C+INC+0LvQuNC80L/QuNC50YHQutC+0Lkg0YHQuNGB0YLQtdC80LUgKHNpbmdsZSBlbGltaW5hdGlvbikuINCSINCk0LjQvdCw0Lsg0LLRi9GF0L7QtNC40YIg0L/QviAyLdC1INCa0L7QvNCw0L3QtNGLINC40Lcg0LrQsNC20LTQvtC5INCz0YDRg9C/0L/Riy4gPC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3Bhbj4g0J/RgNCw0LLQuNC70LAg0LzQvtCz0YPRgiDQsdGL0YLRjCDQuNC30LzQtdC90LXQvdGLINC4L9C40LvQuCDQtNC+0L/QvtC70L3QtdC90Ysg0L7RgNCz0LDQvdC40LfQsNGC0L7RgNC+0Lwg0KLRg9GA0L3QuNGA0LAg0LHQtdC3INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+INCSINC40LPRgNC1INC/0YDQuNC90LjQvNCw0Y7RgiDRg9GH0LDRgdGC0LjQtSAyINC60L7QvNCw0L3QtNGLINC/0L4gNSDRh9C10LvQvtCy0LXQuiDQsiDQutCw0LbQtNC+0LkuPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3Bhbj4g0JIg0LjQs9GA0LUg0LzQvtCz0YPRgiDQvdCw0YXQvtC00LjRgtGB0Y8g0YLQvtC70YzQutC+INC40LPRgNC+0LrQuCwg0YHRg9C00YzQuCDQuCDQutC+0LzQvNC10L3RgtCw0YLQvtGA0YsuPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3Bhbj4gQ3JlZXBza2lwINGA0LDQt9GA0LXRiNC10L0gKCZsYXF1bzvRgdC/0LXQu9Cw0LzQuCZyYXF1bzsg0YHRgtC+0L/QuNGC0YwgJmxhcXVvO9C60YDQuNC/0L7QsiZyYXF1bzsg0LzQvtC20L3QvikuPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3Bhbj4gQmFja2Rvb3IgJm5kYXNoOyDRgNCw0LfRgNC10YjQtdC9INCy0YHQtdGFICZsYXF1bzvRgtCw0YPRjdGA0L7QsiZyYXF1bzsuPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3Bhbj4g0JjQs9GA0L7QstGL0LUg0L3QsNGB0YLRgNC+0LnQutC4INC/0YDQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQuCDRgNGD0YHRgdC60L7Qs9C+INC60LvQuNC10L3RgtCwOjxiciAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0KDQtdC20LjQvCDQuNCz0YDRizog0KDQtdC20LjQvCDQmtCw0L/QuNGC0LDQvdC+0LI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QktC10YDRgdC40Y86INCe0LHRi9GH0L3QsNGPIChDYXBpdGFuIE1vZGUpPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0JzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjQtSDRgdC10YDQstC10YDQsDog0JvRjtC60YHQtdC80LHRg9GA0LM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QoNCw0LfRgNC10YjQuNGC0Ywg0L3QsNCx0LvRjtC00LXQvdC40LUgJm5kYXNoOyDRgNCw0LfRgNC10YjQuNGC0Yw8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QndCw0LvQuNGH0LjQtSDRgtGA0LXQvdC10YDQsCAmbmRhc2g7INC30LDQv9GA0LXRgtC40YLRjDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+INCY0LPRgNC+0LLRi9C1INC90LDRgdGC0YDQvtC50LrQuCDQv9GA0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Lgg0LDQvdCz0LvQuNC50YHQutC+0LPQviDQutC70LjQtdC90YLQsDo8YnIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPkdhbWUgbW9kZTogQ2FwdGFpbnMgTW9kZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlZlcnNpb246IFRvdXJuYW1lbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5TZXJ2ZXIgTG9jYXRpb246IEx1eGVtYm91cmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5TcGVjdGF0b3JzICZuZGFzaDsgZW5hYmxlZDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPkNvYWNoICZtZGFzaDsgZGlzYWJsZWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuPiDQldGB0LvQuCDQutC+0LzQsNC90LTQsNC8INC90LUg0YPQtNC+0LHQvdC+INC40LPRgNCw0YLRjCDQvdCwINC00LXRhNC+0LvRgtC90L7QvCDRgdC10YDQstC10YDQtSAmbWRhc2g7INC+0L3QuCDQvNC+0LPRg9GCINC00L7Qs9C+0LLQvtGA0LjRgtGM0YHRjyDQvtCxINGD0YHRgtGA0LDQuNCy0LDRjtGJ0LXQvCDQuNGFLCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INGB0L7Qs9C70LDRgdC+0LLQsNCyINGN0YLQviDRgSDRgdGD0LTRjNC10LkuPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3Bhbj4g0J/QvtCx0LXQttC00LDQtdGCINC60L7QvNCw0L3QtNCwLCDRg9C90LjRh9GC0L7QttC40LLRiNCw0Y8g0YLRgNC+0L0g0L/RgNC+0YLQuNCy0L3QuNC60LAsINC40LvQuCDQstGL0L3Rg9C00LjQstGI0LDRjyDQutC+0LzQsNC90LTRgyDQv9GA0L7RgtC40LLQvdC40LrQsCAoMi3RhSDQuCDQsdC+0LvQtdC1INC40LPRgNC+0LrQvtCyKSDQv9C+0LrQuNC90YPRgtGMINC40LPRgNGDLjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz48c3Bhbj4g0JfQsNC/0YDQtdGJ0LXQvdC+OjxiciAvPjwvc3Bhbj48L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0JvRjtCx0YvQtSDQtNC10LnRgdGC0LLQuNGPLCDQv9GA0L7RgtC40LLQvtGA0LXRh9Cw0YnQuNC1INC00LDQvdC90YvQvCDQn9GA0LDQstC40LvQsNC8LCDQsCDRgtCw0LrQttC1INCf0YDQsNCy0LjQu9Cw0Lwg0LjQs9GA0YsgRG90YTI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QmNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyAmbGFxdW870LHQsNCz0L7QsiZyYXF1bzsg0LrQsNGA0YLRiywg0LfQsNC/0YDQtdGJ0LXQvdC90YvRhSDQv9GA0L7Qs9GA0LDQvNC8LCDQvNCw0LrRgNC+0YHQvtCyLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCf0LXRgNC10LTQsNGH0LAgRGl2aW5lIFJhcGllciDQv9GA0Lgg0L/QvtC80L7RidC4INGB0YPQuNGG0LjQtNCwINC40LvQuCDRgdC80LXRgNGC0Lgg0L7RgiBSb3NoYW4g0LjQu9C4ICZsYXF1bzvQutGA0LjQv9C+0LImcmFxdW87ICjQstGA0LDQttC10YHQutC40YUg0Lgv0LjQu9C4INC90LXQudGC0YDQsNC70YzQvdGL0YUpINC30LDQv9GA0LXRidC10L3QsC4g0KLQsNC60LbQtSDQt9Cw0L/RgNC10YnQtdC90LAg0L/QtdGA0LXQtNCw0YfQsCDQv9C+0LTQvtCx0L3Ri9C8INC+0LHRgNCw0LfQvtC8INGC0YDQvtGE0LXQudC90L7QuSBEaXZpbmUgUmFwaWVyLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCd0LDRhdC+0LbQtNC10L3QuNGPINCyINC40LPRgNC1INC/0L7RgdGC0L7RgNC+0L3QvdC40YUg0LvQuNGGLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCe0YHQutC+0YDQsdC70LXQvdC40Y8g0LIg0LDQtNGA0LXRgSDQvtGA0LPQsNC90LjQt9Cw0YLQvtGA0L7QsiDQm9C40LPQuCwg0YHRg9C00LXQuSwg0L/RgNC+0YLQuNCy0L3QuNC60L7QsiwgJmxhcXVvO9GC0LjQvNC80LXQudGC0L7QsiZyYXF1bzsg0Lgg0LTRgNGD0LPQuNGFINGD0YfQsNGB0YLQvdC40LrQvtCyINGB0L7RgNC10LLQvdC+0LLQsNC90LjQuS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4mbGFxdW870KTQu9GD0LQmcmFxdW87INCyINGH0LDRgi48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QndC10YHQv9C+0YDRgtC40LLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1ICjQvdCw0L/RgNC40LzQtdGALCDRgdCw0LHQvtGC0LjRgNC+0LLQsNC90LjQtSDQvNCw0YLRh9C10LkpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCd0LDQv9C40YHQsNC90LjQtSAmbGRxdW87Z2cmcmRxdW87INCyINC10YnQtSDQvdC1INC30LDQutC+0L3Rh9C10L3QvdC+0Lwg0LzQsNGC0YfQtS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QndCw0YfQuNC90LDRgtGMINC40LPRgNGDINC90LXQv9C+0LvQvdGL0LzQuCDRgdC+0YHRgtCw0LLQsNC80Lgg0LrQvtC80LDQvdC0LjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCY0LPRgNCw0YLRjCDRgSDRh9GD0LbQvtC5INGD0YfQtdGC0L3QvtC5INC30LDQv9C40YHQuC48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QndCw0LzQtdGA0LXQvdC90L4g0YDQsNC30YDRi9Cy0LDRgtGMINGB0L7QtdC00LjQvdC10L3QuNC1INGBINGB0LXRgNCy0LXRgNC+0LwuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0KHQvdC40LzQsNGC0Ywg0L/QsNGD0LfRgyDQsdC10Lcg0YPQstC10LTQvtC80LvQtdC90LjRjyDQv9GA0L7RgtC40LLQvtC/0L7Qu9C+0LbQvdC+0Lkg0JrQvtC80LDQvdC00Ysg0Lgg0L/QvtC70YPRh9C10L3QuNGPINC+0YIg0JrQsNC/0LjRgtCw0L3QsCDRgdC+0LPQu9Cw0YHQuNGPINC90LAg0L/RgNC+0LTQvtC70LbQtdC90LjQtSDQnNCw0YLRh9CwIC0g0L3QtdC70YzQt9GPLiDQniDRgtCw0LrQvtC8INC90LDRgNGD0YjQtdC90LjQuCDQvdC10L7QsdGF0L7QtNC40LzQviDRg9Cy0LXQtNC+0LzQu9GP0YLRjCDRgdGD0LTRjNGOLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz48c3Bhbj4g0JTQuNGB0YbQuNC/0LvQuNC90LDRgNC90YvQtSDRgdCw0L3QutGG0LjQuDo8L3NwYW4+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCX0LAg0L3QsNGA0YPRiNC10L3QuNC1INC70Y7QsdC+0LPQviDQuNC3INC/0YDQsNCy0LjQuywg0KHRg9C00YzRjyDQnNCw0YLRh9CwINC+0YHRgtCw0LLQu9GP0Y7RgiDQt9CwINGB0L7QsdC+0Lkg0L/RgNCw0LLQviDQvdCw0LfQvdCw0YfQuNGC0Ywg0LrQvtC80LDQvdC00LUg0YLQtdGF0L3QuNGH0LXRgdC60L7QtSDQv9C+0YDQsNC20LXQvdC40LUsINC40LvQuCDQstGL0L3QtdGB0YLQuCDQvtGE0LjRhtC40LDQu9GM0L3QvtC1INC/0YDQtdC00YPQv9GA0LXQttC00LXQvdC40LUuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0J/QvtCy0YLQvtGA0L3QvtC1INC/0YDQtdC00YPQv9GA0LXQttC00LXQvdC40LUg0LIg0YXQvtC00LUg0JzQsNGC0YfQsCAmbmRhc2g7INCy0YHQtdCz0LTQsCDQstC10LTQtdGCINC6INGC0LXRhdC90LjRh9C10YHQutC+0LzRgyDQv9C+0YDQsNC20LXQvdC40Y4uPC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3Ryb25nPjxzcGFuPiDQotC10YXQvdC40YfQtdGB0LrQuNC1INC/0YDQvtCx0LvQtdC80Ys6PC9zcGFuPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7Qn9GA0Lgg0LTQuNGB0LrQvtC90L3QtdC60YLQtSDQstGB0LXRhSDQuNCz0YDQvtC60L7QsiDRgSDRgdC10YDQstC10YDQsCDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINC/0LXRgNC10LjQs9GA0L7QstC60LAsINC/0LjQutC4INC4INCx0LDQvdGLINC+0YHRgtCw0Y7RgtGB0Y8g0YLQsNC60LjQtSDQttC1LCDQutCw0Log0LTQviDQtNC40YHQutC+0L3QvdC10LrRgtCwLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCf0YDQuCDQtNC40YHQutC+0L3QvdC10LrRgtC1INC+0LTQvdC+0LPQviDQuNC70Lgg0L3QtdGB0LrQvtC70YzQutC40YUg0LjQs9GA0L7QutC+0LIg0LjQtyDQutC+0LzQsNC90LTRiywg0YHRgtCw0LLQuNGC0YHRjyDQv9Cw0YPQt9CwINC90LAg0YHRgNC+0Log0L3QtSDQsdC+0LvQtdC1IDUt0YLQuCDQvNC40L3Rg9GCLiAo0LHQtdC3INC+0YHQvtCx0YvRhSDRg9C60LDQt9Cw0L3QuNC5INGB0YPQtNGM0LgpPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0J/RgNC4INC00LjRgdC60L7QvdC90LXQutGC0LUg0LLRgdC10YUg0LjQs9GA0L7QutC+0LIg0LjQtyDQvtC00L3QvtC5INC60L7QvNCw0L3QtNGLLCDQv9GA0Lgg0LTQu9C40YLQtdC70YzQvdC+0YHRgtC4INC40LPRgNGLINC90LUg0LHQvtC70LXQtSAxMCDQvNC40L3Rg9GCINGBINGA0LDQt9C90LjRhtC10Lkg0LIg0YHRh9GR0YLQtSDQvdC1INCx0L7Qu9GM0YjQtSA1INC+0YfQutC+0LIgJm1kYXNoOyDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINC/0LXRgNC10LjQs9GA0L7QstC60LAg0L/RgNC4INGC0LXRhSDQttC1INC/0LjQutCw0YUuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0J/RgNC4INC00LjRgdC60L7QvdC90LXQutGC0LUg0LLRgdC10YUg0LjQs9GA0L7QutC+0LIg0LjQtyDQvtC00L3QvtC5INC60L7QvNCw0L3QtNGLLCDQv9GA0Lgg0LTQu9C40YLQtdC70YzQvdC+0YHRgtC4INC40LPRgNGLINCx0L7Qu9C10LUgMTUg0LzQuNC90YPRgiDQv9C+0LHQtdC00LjRgtC10LvRjyDQuNCz0YDRiyDQstGL0Y/QstC70Y/QtdGCINGB0YPQtNGM0Y8g0YLRg9GA0L3QuNGA0LAg0L/QviAmbGFxdW870LLRi9GI0LrQsNC8JnJhcXVvOywg0LrQvtC70LjRh9C10YHRgtCy0YMg0YPQvdC40YfRgtC+0LbQtdC90L3Ri9GFINCz0LXRgNC+0LXQsiDQuCBncG0sINC40LvQuCDQttC1INC90LDQt9C90LDRh9Cw0LXRgiDQv9C10YDQtdC40LPRgNC+0LLQutGDLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCf0YDQuCDQstGL0LvQtdGC0LUg0L/QuNC60LXRgNCwINC60L7QvNCw0L3QtNGLINCy0L4g0LLRgNC10LzRjyDQstGL0LHQvtGA0LAg0Lgg0LHQsNC90LAg0LPQtdGA0L7QtdCyINC4INC90LXQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCx0YvRgdGC0YDQvtCz0L4g0LXQs9C+INC/0LXRgNC10L/QvtC00LrQu9GO0YfQtdC90LjRjyAo0L/QvtGC0LXRgNGPINGF0L7RgtGPINCx0Ysg0L7QtNC90L7Qs9C+INC+0YHQvtC30L3QsNC90L3QvtCz0L4g0LHQsNC90LAg0LjQu9C4INCy0YvQsdC+0YDQsCDQs9C10YDQvtGPKSwg0LvQvtCx0LHQuCDQvNCw0YLRh9CwINGB0L7Qt9C00LDQtdGC0YHRjyDQt9Cw0L3QvtCy0L4uINCf0YDQuCDRjdGC0L7QvCDQv9C40LrQtdGA0Ysg0LTQvtC70LbQvdGLINCx0YPQtNGD0YIg0L/QvtCy0YLQvtGA0LjRgtGMINCy0YHQtSDRgdC00LXQu9Cw0L3QvdGL0LUg0LTQviDQvNC+0LzQtdC90YLQsCDQstGL0LvQtdGC0LAg0L/QuNC60Lgg0Lgg0LHQsNC90YsuPC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9vbD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbGF5b3V0OiAnZGVmYXVsdCcsXHJcblxyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6ICfQotC10YXQvdC40YfQtdGB0LrQuNC1INC/0YDQsNCy0LjQu9CwINCi0YPRgNC90LjRgNCwJyB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29tcHV0ZWQ6e1xyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiAnbGFuZy9sb2NhbGUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfcnVsZXMudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJuay1kZWNvcmF0ZWQtaC0yXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCLQotC10YXQvdC40YfQtdGB0LrQuNC1INC/0YDQsNCy0LjQu9CwINCi0YPRgNC90LjRgNCwXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCY0LPRgNC+0LrQuCDQvtCx0Y/Qt9Cw0L3RiyDRgdCy0Y/Qt9Cw0YLRjNGB0Y8g0YEgXCIpXSksXG4gICAgICAgIF92bS5fdihcItGB0YPQtNGM0LXQuVwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIiDQvdC1INC/0L7Qt9C00L3QtdC1INGH0LXQvCDQt9CwIDE1INC80LjQvdGD0YIg0LTQviDQvdCw0YfQsNC70LAg0JzQsNGC0YfQsCDQsiDQp9Cw0YLQtSDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0JzQsNGC0YfQsCDQvdCwINGB0LDQudGC0LUgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHA6Ly93d3cueW91dGhsZWFndWUucnUvXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBcInRleHQtZGVjb3JhdGlvblwiOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBcInRleHQtdW5kZXJsaW5lXCI6IFwibm9uZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwid3d3LnlvdXRobGVhZ3VlLnJ1XCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiLiDQntCx0YnQsNC10YLRgdGPINGBINGB0YPQtNGM0LXQuSDRgtC+0LvRjNC60L4g0LrQsNC/0LjRgtCw0L0g0JrQvtC80LDQvdC00YsuXCIpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwib2xcIiwgW1xuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiINCS0LXRgNGB0LjRjyDQuNCz0YDRizog0LvQuNGG0LXQvdC30LjQvtC90L3QsNGPIOKAnERvdGEy4oCdIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZW1cIiwgW192bS5fdihcItC/0L7RgdC70LXQtNC90Y/RjyDQtNC+0YHRgtGD0L/QvdCw0Y8g0L3QsCDQv9C70LDRgtGE0L7RgNC80LUgU3RlYW1cIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIiDQnNCw0YLRh9C4INC/0YDQvtGF0L7QtNC40YIg0LTQviDQtNCy0YPRhSDQv9C+0LHQtdC00YsgKGJvMykuINCk0LjQvdCw0Lsg0KLRg9GA0L3QuNGA0LAg0LTQviDRgtGA0LXRhSDQv9C+0LHQtdC0IChibzUpLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF92bS5fdihcItCi0YPRgNC90LjRgCDQv9GA0L7RhdC+0LTQuNGCINCyINGE0L7RgNC80LDRgtC1OlxcbiAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICBfYyhcIm9sXCIsIFtcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcItCg0LXQs9C40L7QvdCw0LvRjNC90YvQtSDQutCy0LDQu9C40YTQuNC60LDRhtC40Lgg4oCTINCT0YDRg9C/0L/QvtCy0L7QuSDRgNCw0YPQvdC0PlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCLQpNC40L3QsNC7IOKAkyDQv9C+INC+0LvQuNC80L/QuNC50YHQutC+0Lkg0YHQuNGB0YLQtdC80LUgKHNpbmdsZSBlbGltaW5hdGlvbikuINCSINCk0LjQvdCw0Lsg0LLRi9GF0L7QtNC40YIg0L/QviAyLdC1INCa0L7QvNCw0L3QtNGLINC40Lcg0LrQsNC20LTQvtC5INCz0YDRg9C/0L/Riy4gXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCIg0J/RgNCw0LLQuNC70LAg0LzQvtCz0YPRgiDQsdGL0YLRjCDQuNC30LzQtdC90LXQvdGLINC4L9C40LvQuCDQtNC+0L/QvtC70L3QtdC90Ysg0L7RgNCz0LDQvdC40LfQsNGC0L7RgNC+0Lwg0KLRg9GA0L3QuNGA0LAg0LHQtdC3INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg0JIg0LjQs9GA0LUg0L/RgNC40L3QuNC80LDRjtGCINGD0YfQsNGB0YLQuNC1IDIg0LrQvtC80LDQvdC00Ysg0L/QviA1INGH0LXQu9C+0LLQtdC6INCyINC60LDQttC00L7QuS5cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCIg0JIg0LjQs9GA0LUg0LzQvtCz0YPRgiDQvdCw0YXQvtC00LjRgtGB0Y8g0YLQvtC70YzQutC+INC40LPRgNC+0LrQuCwg0YHRg9C00YzQuCDQuCDQutC+0LzQvNC10L3RgtCw0YLQvtGA0YsuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIiBDcmVlcHNraXAg0YDQsNC30YDQtdGI0LXQvSAowqvRgdC/0LXQu9Cw0LzQuMK7INGB0YLQvtC/0LjRgtGMIMKr0LrRgNC40L/QvtCywrsg0LzQvtC20L3QvikuXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiIEJhY2tkb29yIOKAkyDRgNCw0LfRgNC10YjQtdC9INCy0YHQtdGFIMKr0YLQsNGD0Y3RgNC+0LLCuy5cIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDQmNCz0YDQvtCy0YvQtSDQvdCw0YHRgtGA0L7QudC60Lgg0L/RgNC4INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC4INGA0YPRgdGB0LrQvtCz0L4g0LrQu9C40LXQvdGC0LA6XCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvbFwiLCBbXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLQoNC10LbQuNC8INC40LPRgNGLOiDQoNC10LbQuNC8INCa0LDQv9C40YLQsNC90L7QslwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcItCS0LXRgNGB0LjRjzog0J7QsdGL0YfQvdCw0Y8gKENhcGl0YW4gTW9kZSlcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLQnNC10YHRgtC+0L/QvtC70L7QttC10L3QuNC1INGB0LXRgNCy0LXRgNCwOiDQm9GO0LrRgdC10LzQsdGD0YDQs1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcItCg0LDQt9GA0LXRiNC40YLRjCDQvdCw0LHQu9GO0LTQtdC90LjQtSDigJMg0YDQsNC30YDQtdGI0LjRgtGMXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwi0J3QsNC70LjRh9C40LUg0YLRgNC10L3QtdGA0LAg4oCTINC30LDQv9GA0LXRgtC40YLRjFwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg0JjQs9GA0L7QstGL0LUg0L3QsNGB0YLRgNC+0LnQutC4INC/0YDQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQuCDQsNC90LPQu9C40LnRgdC60L7Qs9C+INC60LvQuNC10L3RgtCwOlwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib2xcIiwgW1xuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiR2FtZSBtb2RlOiBDYXB0YWlucyBNb2RlXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiVmVyc2lvbjogVG91cm5hbWVudFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIlNlcnZlciBMb2NhdGlvbjogTHV4ZW1ib3VyZ1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIlNwZWN0YXRvcnMg4oCTIGVuYWJsZWRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCJDb2FjaCDigJQgZGlzYWJsZWRcIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIiDQldGB0LvQuCDQutC+0LzQsNC90LTQsNC8INC90LUg0YPQtNC+0LHQvdC+INC40LPRgNCw0YLRjCDQvdCwINC00LXRhNC+0LvRgtC90L7QvCDRgdC10YDQstC10YDQtSDigJQg0L7QvdC4INC80L7Qs9GD0YIg0LTQvtCz0L7QstC+0YDQuNGC0YzRgdGPINC+0LEg0YPRgdGC0YDQsNC40LLQsNGO0YnQtdC8INC40YUsINC+0LHRj9C30LDRgtC10LvRjNC90L4g0YHQvtCz0LvQsNGB0L7QstCw0LIg0Y3RgtC+INGBINGB0YPQtNGM0LXQuS5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIiDQn9C+0LHQtdC20LTQsNC10YIg0LrQvtC80LDQvdC00LAsINGD0L3QuNGH0YLQvtC20LjQstGI0LDRjyDRgtGA0L7QvSDQv9GA0L7RgtC40LLQvdC40LrQsCwg0LjQu9C4INCy0YvQvdGD0LTQuNCy0YjQsNGPINC60L7QvNCw0L3QtNGDINC/0YDQvtGC0LjQstC90LjQutCwICgyLdGFINC4INCx0L7Qu9C10LUg0LjQs9GA0L7QutC+0LIpINC/0L7QutC40L3Rg9GC0Ywg0LjQs9GA0YMuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiINCX0LDQv9GA0LXRidC10L3QvjpcIiksIF9jKFwiYnJcIildKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvbFwiLCBbXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0JvRjtCx0YvQtSDQtNC10LnRgdGC0LLQuNGPLCDQv9GA0L7RgtC40LLQvtGA0LXRh9Cw0YnQuNC1INC00LDQvdC90YvQvCDQn9GA0LDQstC40LvQsNC8LCDQsCDRgtCw0LrQttC1INCf0YDQsNCy0LjQu9Cw0Lwg0LjQs9GA0YsgRG90YTJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8gwqvQsdCw0LPQvtCywrsg0LrQsNGA0YLRiywg0LfQsNC/0YDQtdGJ0LXQvdC90YvRhSDQv9GA0L7Qs9GA0LDQvNC8LCDQvNCw0LrRgNC+0YHQvtCyLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCLQn9C10YDQtdC00LDRh9CwIERpdmluZSBSYXBpZXIg0L/RgNC4INC/0L7QvNC+0YnQuCDRgdGD0LjRhtC40LTQsCDQuNC70Lgg0YHQvNC10YDRgtC4INC+0YIgUm9zaGFuINC40LvQuCDCq9C60YDQuNC/0L7QssK7ICjQstGA0LDQttC10YHQutC40YUg0Lgv0LjQu9C4INC90LXQudGC0YDQsNC70YzQvdGL0YUpINC30LDQv9GA0LXRidC10L3QsC4g0KLQsNC60LbQtSDQt9Cw0L/RgNC10YnQtdC90LAg0L/QtdGA0LXQtNCw0YfQsCDQv9C+0LTQvtCx0L3Ri9C8INC+0LHRgNCw0LfQvtC8INGC0YDQvtGE0LXQudC90L7QuSBEaXZpbmUgUmFwaWVyLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcItCd0LDRhdC+0LbQtNC10L3QuNGPINCyINC40LPRgNC1INC/0L7RgdGC0L7RgNC+0L3QvdC40YUg0LvQuNGGLlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCLQntGB0LrQvtGA0LHQu9C10L3QuNGPINCyINCw0LTRgNC10YEg0L7RgNCz0LDQvdC40LfQsNGC0L7RgNC+0LIg0JvQuNCz0LgsINGB0YPQtNC10LksINC/0YDQvtGC0LjQstC90LjQutC+0LIsIMKr0YLQuNC80LzQtdC50YLQvtCywrsg0Lgg0LTRgNGD0LPQuNGFINGD0YfQsNGB0YLQvdC40LrQvtCyINGB0L7RgNC10LLQvdC+0LLQsNC90LjQuS5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLCq9Ck0LvRg9C0wrsg0LIg0YfQsNGCLlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLQndC10YHQv9C+0YDRgtC40LLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1ICjQvdCw0L/RgNC40LzQtdGALCDRgdCw0LHQvtGC0LjRgNC+0LLQsNC90LjQtSDQvNCw0YLRh9C10LkpLlwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwi0J3QsNC/0LjRgdCw0L3QuNC1IOKAnGdn4oCdINCyINC10YnQtSDQvdC1INC30LDQutC+0L3Rh9C10L3QvdC+0Lwg0LzQsNGC0YfQtS5cIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLQndCw0YfQuNC90LDRgtGMINC40LPRgNGDINC90LXQv9C+0LvQvdGL0LzQuCDRgdC+0YHRgtCw0LLQsNC80Lgg0LrQvtC80LDQvdC0LlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcItCY0LPRgNCw0YLRjCDRgSDRh9GD0LbQvtC5INGD0YfQtdGC0L3QvtC5INC30LDQv9C40YHQuC5cIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLQndCw0LzQtdGA0LXQvdC90L4g0YDQsNC30YDRi9Cy0LDRgtGMINGB0L7QtdC00LjQvdC10L3QuNC1INGBINGB0LXRgNCy0LXRgNC+0LwuXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCh0L3QuNC80LDRgtGMINC/0LDRg9C30YMg0LHQtdC3INGD0LLQtdC00L7QvNC70LXQvdC40Y8g0L/RgNC+0YLQuNCy0L7Qv9C+0LvQvtC20L3QvtC5INCa0L7QvNCw0L3QtNGLINC4INC/0L7Qu9GD0YfQtdC90LjRjyDQvtGCINCa0LDQv9C40YLQsNC90LAg0YHQvtCz0LvQsNGB0LjRjyDQvdCwINC/0YDQvtC00L7Qu9C20LXQvdC40LUg0JzQsNGC0YfQsCAtINC90LXQu9GM0LfRjy4g0J4g0YLQsNC60L7QvCDQvdCw0YDRg9GI0LXQvdC40Lgg0L3QtdC+0LHRhdC+0LTQuNC80L4g0YPQstC10LTQvtC80LvRj9GC0Ywg0YHRg9C00YzRji5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIg0JTQuNGB0YbQuNC/0LvQuNC90LDRgNC90YvQtSDRgdCw0L3QutGG0LjQuDpcIildKV0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm9sXCIsIFtcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCLQl9CwINC90LDRgNGD0YjQtdC90LjQtSDQu9GO0LHQvtCz0L4g0LjQtyDQv9GA0LDQstC40LssINCh0YPQtNGM0Y8g0JzQsNGC0YfQsCDQvtGB0YLQsNCy0LvRj9GO0YIg0LfQsCDRgdC+0LHQvtC5INC/0YDQsNCy0L4g0L3QsNC30L3QsNGH0LjRgtGMINC60L7QvNCw0L3QtNC1INGC0LXRhdC90LjRh9C10YHQutC+0LUg0L/QvtGA0LDQttC10L3QuNC1LCDQuNC70Lgg0LLRi9C90LXRgdGC0Lgg0L7RhNC40YbQuNCw0LvRjNC90L7QtSDQv9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNC1LlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCLQn9C+0LLRgtC+0YDQvdC+0LUg0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjQtSDQsiDRhdC+0LTQtSDQnNCw0YLRh9CwIOKAkyDQstGB0LXQs9C00LAg0LLQtdC00LXRgiDQuiDRgtC10YXQvdC40YfQtdGB0LrQvtC80YMg0L/QvtGA0LDQttC10L3QuNGOLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfYyhcInNwYW5cIiwgW192bS5fdihcIiDQotC10YXQvdC40YfQtdGB0LrQuNC1INC/0YDQvtCx0LvQtdC80Ys6XCIpXSldKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvbFwiLCBbXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0J/RgNC4INC00LjRgdC60L7QvdC90LXQutGC0LUg0LLRgdC10YUg0LjQs9GA0L7QutC+0LIg0YEg0YHQtdGA0LLQtdGA0LAg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDQv9C10YDQtdC40LPRgNC+0LLQutCwLCDQv9C40LrQuCDQuCDQsdCw0L3RiyDQvtGB0YLQsNGO0YLRgdGPINGC0LDQutC40LUg0LbQtSwg0LrQsNC6INC00L4g0LTQuNGB0LrQvtC90L3QtdC60YLQsC5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0J/RgNC4INC00LjRgdC60L7QvdC90LXQutGC0LUg0L7QtNC90L7Qs9C+INC40LvQuCDQvdC10YHQutC+0LvRjNC60LjRhSDQuNCz0YDQvtC60L7QsiDQuNC3INC60L7QvNCw0L3QtNGLLCDRgdGC0LDQstC40YLRgdGPINC/0LDRg9C30LAg0L3QsCDRgdGA0L7QuiDQvdC1INCx0L7Qu9C10LUgNS3RgtC4INC80LjQvdGD0YIuICjQsdC10Lcg0L7RgdC+0LHRi9GFINGD0LrQsNC30LDQvdC40Lkg0YHRg9C00YzQuClcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0J/RgNC4INC00LjRgdC60L7QvdC90LXQutGC0LUg0LLRgdC10YUg0LjQs9GA0L7QutC+0LIg0LjQtyDQvtC00L3QvtC5INC60L7QvNCw0L3QtNGLLCDQv9GA0Lgg0LTQu9C40YLQtdC70YzQvdC+0YHRgtC4INC40LPRgNGLINC90LUg0LHQvtC70LXQtSAxMCDQvNC40L3Rg9GCINGBINGA0LDQt9C90LjRhtC10Lkg0LIg0YHRh9GR0YLQtSDQvdC1INCx0L7Qu9GM0YjQtSA1INC+0YfQutC+0LIg4oCUINC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0L/QtdGA0LXQuNCz0YDQvtCy0LrQsCDQv9GA0Lgg0YLQtdGFINC20LUg0L/QuNC60LDRhS5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0J/RgNC4INC00LjRgdC60L7QvdC90LXQutGC0LUg0LLRgdC10YUg0LjQs9GA0L7QutC+0LIg0LjQtyDQvtC00L3QvtC5INC60L7QvNCw0L3QtNGLLCDQv9GA0Lgg0LTQu9C40YLQtdC70YzQvdC+0YHRgtC4INC40LPRgNGLINCx0L7Qu9C10LUgMTUg0LzQuNC90YPRgiDQv9C+0LHQtdC00LjRgtC10LvRjyDQuNCz0YDRiyDQstGL0Y/QstC70Y/QtdGCINGB0YPQtNGM0Y8g0YLRg9GA0L3QuNGA0LAg0L/QviDCq9Cy0YvRiNC60LDQvMK7LCDQutC+0LvQuNGH0LXRgdGC0LLRgyDRg9C90LjRh9GC0L7QttC10L3QvdGL0YUg0LPQtdGA0L7QtdCyINC4IGdwbSwg0LjQu9C4INC20LUg0L3QsNC30L3QsNGH0LDQtdGCINC/0LXRgNC10LjQs9GA0L7QstC60YMuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCf0YDQuCDQstGL0LvQtdGC0LUg0L/QuNC60LXRgNCwINC60L7QvNCw0L3QtNGLINCy0L4g0LLRgNC10LzRjyDQstGL0LHQvtGA0LAg0Lgg0LHQsNC90LAg0LPQtdGA0L7QtdCyINC4INC90LXQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCx0YvRgdGC0YDQvtCz0L4g0LXQs9C+INC/0LXRgNC10L/QvtC00LrQu9GO0YfQtdC90LjRjyAo0L/QvtGC0LXRgNGPINGF0L7RgtGPINCx0Ysg0L7QtNC90L7Qs9C+INC+0YHQvtC30L3QsNC90L3QvtCz0L4g0LHQsNC90LAg0LjQu9C4INCy0YvQsdC+0YDQsCDQs9C10YDQvtGPKSwg0LvQvtCx0LHQuCDQvNCw0YLRh9CwINGB0L7Qt9C00LDQtdGC0YHRjyDQt9Cw0L3QvtCy0L4uINCf0YDQuCDRjdGC0L7QvCDQv9C40LrQtdGA0Ysg0LTQvtC70LbQvdGLINCx0YPQtNGD0YIg0L/QvtCy0YLQvtGA0LjRgtGMINCy0YHQtSDRgdC00LXQu9Cw0L3QvdGL0LUg0LTQviDQvNC+0LzQtdC90YLQsCDQstGL0LvQtdGC0LAg0L/QuNC60Lgg0Lgg0LHQsNC90YsuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDQ2MmZhZjhcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wNDYyZmFmOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudF9ydWxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMDQ2MmZhZjhcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfcnVsZXMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b3VybmFtZW50X3J1bGVzLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvdXJuYW1lbnRfcnVsZXMudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNDYyZmFmOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvdXJuYW1lbnRfcnVsZXMudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxwYWdlc1xcXFx0b3VybmFtZW50X3J1bGVzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNDYyZmFmOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA0NjJmYWY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50X3J1bGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfcnVsZXMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiXSwic291cmNlUm9vdCI6IiJ9