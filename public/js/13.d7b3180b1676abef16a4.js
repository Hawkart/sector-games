webpackJsonp([13],{

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-276588be\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournament_rules.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-276588be", esExports)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_276588be_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tournament_rules_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-276588be\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournament_rules.vue");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_276588be_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tournament_rules_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/tournament_rules.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-276588be", Component.options)
  } else {
    hotAPI.reload("data-v-276588be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50X3J1bGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfcnVsZXMudnVlPzY3YzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50X3J1bGVzLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE2RUE7QUFDQSxxQkFEQTs7QUFHQSxZQUhBLHNCQUdBO0FBQ0E7QUFDQSxLQUxBOzs7QUFPQSx5Q0FDQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxNQURBO0FBUEEsQzs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtDQUFrQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMscUNBQXFDLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNGLGtFQUFTO0FBQ3hCLElBQUksS0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUNqUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQStEO0FBQ2hHO0FBQ3FjO0FBQ2E7QUFDbGQ7QUFDNlE7QUFDN1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpWEFBYztBQUNoQixFQUFFLHlPQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvMTMuZDdiMzE4MGIxNjc2YWJlZjE2YTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm5rLWRlY29yYXRlZC1oLTJcIj7QotC10YXQvdC40YfQtdGB0LrQuNC1INC/0YDQsNCy0LjQu9CwINCi0YPRgNC90LjRgNCwPC9oMz5cclxuICAgICAgICA8cD48c3Bhbj7QmNCz0YDQvtC60Lgg0L7QsdGP0LfQsNC90Ysg0YHQstGP0LfQsNGC0YzRgdGPINGBIDwvc3Bhbj7RgdGD0LTRjNC10Lk8c3Bhbj4g0L3QtSDQv9C+0LfQtNC90LXQtSDRh9C10Lwg0LfQsCAxNSDQvNC40L3Rg9GCINC00L4g0L3QsNGH0LDQu9CwINCc0LDRgtGH0LAg0LIg0KfQsNGC0LUg0L3QsCDRgdGC0YDQsNC90LjRhtC1INCc0LDRgtGH0LAg0L3QsCDRgdCw0LnRgtC1IDwvc3Bhbj48YSBocmVmPVwiaHR0cDovL3d3dy55b3V0aGxlYWd1ZS5ydS9cIj48c3BhbiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogbm9uZTsgdGV4dC11bmRlcmxpbmU6IG5vbmU7XCI+d3d3LnlvdXRobGVhZ3VlLnJ1PC9zcGFuPjwvYT48c3Bhbj4uINCe0LHRidCw0LXRgtGB0Y8g0YEg0YHRg9C00YzQtdC5INGC0L7Qu9GM0LrQviDQutCw0L/QuNGC0LDQvSDQmtC+0LzQsNC90LTRiy48L3NwYW4+PC9wPlxyXG4gICAgICAgIDxvbD5cclxuICAgICAgICAgICAgPGxpPjxzcGFuPiDQktC10YDRgdC40Y8g0LjQs9GA0Ys6INC70LjRhtC10L3Qt9C40L7QvdC90LDRjyAmbGRxdW87RG90YTImcmRxdW87IDxlbT7Qv9C+0YHQu9C10LTQvdGP0Y8g0LTQvtGB0YLRg9C/0L3QsNGPINC90LAg0L/Qu9Cw0YLRhNC+0YDQvNC1IFN0ZWFtPC9lbT48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuPiDQnNCw0YLRh9C4INC/0YDQvtGF0L7QtNC40YIg0LTQviDQtNCy0YPRhSDQv9C+0LHQtdC00YsgKGJvMykuINCk0LjQvdCw0Lsg0KLRg9GA0L3QuNGA0LAg0LTQviDRgtGA0LXRhSDQv9C+0LHQtdC0IChibzUpLjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+0KLRg9GA0L3QuNGAINC/0YDQvtGF0L7QtNC40YIg0LIg0YTQvtGA0LzQsNGC0LU6XHJcbiAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCg0LXQs9C40L7QvdCw0LvRjNC90YvQtSDQutCy0LDQu9C40YTQuNC60LDRhtC40LggJm5kYXNoOyDQk9GA0YPQv9C/0L7QstC+0Lkg0YDQsNGD0L3QtD48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QpNC40L3QsNC7ICZuZGFzaDsg0L/QviDQvtC70LjQvNC/0LjQudGB0LrQvtC5INGB0LjRgdGC0LXQvNC1IChzaW5nbGUgZWxpbWluYXRpb24pLiDQkiDQpNC40L3QsNC7INCy0YvRhdC+0LTQuNGCINC/0L4gMi3QtSDQmtC+0LzQsNC90LTRiyDQuNC3INC60LDQttC00L7QuSDQs9GA0YPQv9C/0YsuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+INCf0YDQsNCy0LjQu9CwINC80L7Qs9GD0YIg0LHRi9GC0Ywg0LjQt9C80LXQvdC10L3RiyDQuC/QuNC70Lgg0LTQvtC/0L7Qu9C90LXQvdGLINC+0YDQs9Cw0L3QuNC30LDRgtC+0YDQvtC8INCi0YPRgNC90LjRgNCwINCx0LXQtyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtCz0L4g0YPQstC10LTQvtC80LvQtdC90LjRjy48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuPiDQkiDQuNCz0YDQtSDQv9GA0LjQvdC40LzQsNGO0YIg0YPRh9Cw0YHRgtC40LUgMiDQutC+0LzQsNC90LTRiyDQv9C+IDUg0YfQtdC70L7QstC10Log0LIg0LrQsNC20LTQvtC5Ljwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+INCSINC40LPRgNC1INC80L7Qs9GD0YIg0L3QsNGF0L7QtNC40YLRgdGPINGC0L7Qu9GM0LrQviDQuNCz0YDQvtC60LgsINGB0YPQtNGM0Lgg0Lgg0LrQvtC80LzQtdC90YLQsNGC0L7RgNGLLjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+IENyZWVwc2tpcCDRgNCw0LfRgNC10YjQtdC9ICgmbGFxdW870YHQv9C10LvQsNC80LgmcmFxdW87INGB0YLQvtC/0LjRgtGMICZsYXF1bzvQutGA0LjQv9C+0LImcmFxdW87INC80L7QttC90L4pLjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+IEJhY2tkb29yICZuZGFzaDsg0YDQsNC30YDQtdGI0LXQvSDQstGB0LXRhSAmbGFxdW870YLQsNGD0Y3RgNC+0LImcmFxdW87Ljwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+INCY0LPRgNC+0LLRi9C1INC90LDRgdGC0YDQvtC50LrQuCDQv9GA0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Lgg0YDRg9GB0YHQutC+0LPQviDQutC70LjQtdC90YLQsDo8YnIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCg0LXQttC40Lwg0LjQs9GA0Ys6INCg0LXQttC40Lwg0JrQsNC/0LjRgtCw0L3QvtCyPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0JLQtdGA0YHQuNGPOiDQntCx0YvRh9C90LDRjyAoQ2FwaXRhbiBNb2RlKTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCc0LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40LUg0YHQtdGA0LLQtdGA0LA6INCb0Y7QutGB0LXQvNCx0YPRgNCzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0KDQsNC30YDQtdGI0LjRgtGMINC90LDQsdC70Y7QtNC10L3QuNC1ICZuZGFzaDsg0YDQsNC30YDQtdGI0LjRgtGMPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0J3QsNC70LjRh9C40LUg0YLRgNC10L3QtdGA0LAgJm5kYXNoOyDQt9Cw0L/RgNC10YLQuNGC0Yw8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuPiDQmNCz0YDQvtCy0YvQtSDQvdCw0YHRgtGA0L7QudC60Lgg0L/RgNC4INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC4INCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0LrQu9C40LXQvdGC0LA6PGJyIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5HYW1lIG1vZGU6IENhcHRhaW5zIE1vZGU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5WZXJzaW9uOiBUb3VybmFtZW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+U2VydmVyIExvY2F0aW9uOiBMdXhlbWJvdXJnPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+U3BlY3RhdG9ycyAmbmRhc2g7IGVuYWJsZWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5Db2FjaCAmbWRhc2g7IGRpc2FibGVkPC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3Bhbj4g0JXRgdC70Lgg0LrQvtC80LDQvdC00LDQvCDQvdC1INGD0LTQvtCx0L3QviDQuNCz0YDQsNGC0Ywg0L3QsCDQtNC10YTQvtC70YLQvdC+0Lwg0YHQtdGA0LLQtdGA0LUgJm1kYXNoOyDQvtC90Lgg0LzQvtCz0YPRgiDQtNC+0LPQvtCy0L7RgNC40YLRjNGB0Y8g0L7QsSDRg9GB0YLRgNCw0LjQstCw0Y7RidC10Lwg0LjRhSwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDRgdC+0LPQu9Cw0YHQvtCy0LDQsiDRjdGC0L4g0YEg0YHRg9C00YzQtdC5Ljwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4+INCf0L7QsdC10LbQtNCw0LXRgiDQutC+0LzQsNC90LTQsCwg0YPQvdC40YfRgtC+0LbQuNCy0YjQsNGPINGC0YDQvtC9INC/0YDQvtGC0LjQstC90LjQutCwLCDQuNC70Lgg0LLRi9C90YPQtNC40LLRiNCw0Y8g0LrQvtC80LDQvdC00YMg0L/RgNC+0YLQuNCy0L3QuNC60LAgKDIt0YUg0Lgg0LHQvtC70LXQtSDQuNCz0YDQvtC60L7Qsikg0L/QvtC60LjQvdGD0YLRjCDQuNCz0YDRgy48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxzdHJvbmc+PHNwYW4+INCX0LDQv9GA0LXRidC10L3Qvjo8YnIgLz48L3NwYW4+PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCb0Y7QsdGL0LUg0LTQtdC50YHRgtCy0LjRjywg0L/RgNC+0YLQuNCy0L7RgNC10YfQsNGJ0LjQtSDQtNCw0L3QvdGL0Lwg0J/RgNCw0LLQuNC70LDQvCwg0LAg0YLQsNC60LbQtSDQn9GA0LDQstC40LvQsNC8INC40LPRgNGLIERvdGEyPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8gJmxhcXVvO9Cx0LDQs9C+0LImcmFxdW87INC60LDRgNGC0YssINC30LDQv9GA0LXRidC10L3QvdGL0YUg0L/RgNC+0LPRgNCw0LzQvCwg0LzQsNC60YDQvtGB0L7Qsi48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7Qn9C10YDQtdC00LDRh9CwIERpdmluZSBSYXBpZXIg0L/RgNC4INC/0L7QvNC+0YnQuCDRgdGD0LjRhtC40LTQsCDQuNC70Lgg0YHQvNC10YDRgtC4INC+0YIgUm9zaGFuINC40LvQuCAmbGFxdW870LrRgNC40L/QvtCyJnJhcXVvOyAo0LLRgNCw0LbQtdGB0LrQuNGFINC4L9C40LvQuCDQvdC10LnRgtGA0LDQu9GM0L3Ri9GFKSDQt9Cw0L/RgNC10YnQtdC90LAuINCi0LDQutC20LUg0LfQsNC/0YDQtdGJ0LXQvdCwINC/0LXRgNC10LTQsNGH0LAg0L/QvtC00L7QsdC90YvQvCDQvtCx0YDQsNC30L7QvCDRgtGA0L7RhNC10LnQvdC+0LkgRGl2aW5lIFJhcGllci48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QndCw0YXQvtC20LTQtdC90LjRjyDQsiDQuNCz0YDQtSDQv9C+0YHRgtC+0YDQvtC90L3QuNGFINC70LjRhi48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QntGB0LrQvtGA0LHQu9C10L3QuNGPINCyINCw0LTRgNC10YEg0L7RgNCz0LDQvdC40LfQsNGC0L7RgNC+0LIg0JvQuNCz0LgsINGB0YPQtNC10LksINC/0YDQvtGC0LjQstC90LjQutC+0LIsICZsYXF1bzvRgtC40LzQvNC10LnRgtC+0LImcmFxdW87INC4INC00YDRg9Cz0LjRhSDRg9GH0LDRgdGC0L3QuNC60L7QsiDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40LkuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+JmxhcXVvO9Ck0LvRg9C0JnJhcXVvOyDQsiDRh9Cw0YIuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0J3QtdGB0L/QvtGA0YLQuNCy0L3QvtC1INC/0L7QstC10LTQtdC90LjQtSAo0L3QsNC/0YDQuNC80LXRgCwg0YHQsNCx0L7RgtC40YDQvtCy0LDQvdC40LUg0LzQsNGC0YfQtdC5KS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QndCw0L/QuNGB0LDQvdC40LUgJmxkcXVvO2dnJnJkcXVvOyDQsiDQtdGJ0LUg0L3QtSDQt9Cw0LrQvtC90YfQtdC90L3QvtC8INC80LDRgtGH0LUuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0J3QsNGH0LjQvdCw0YLRjCDQuNCz0YDRgyDQvdC10L/QvtC70L3Ri9C80Lgg0YHQvtGB0YLQsNCy0LDQvNC4INC60L7QvNCw0L3QtC48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7QmNCz0YDQsNGC0Ywg0YEg0YfRg9C20L7QuSDRg9GH0LXRgtC90L7QuSDQt9Cw0L/QuNGB0LguPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0J3QsNC80LXRgNC10L3QvdC+INGA0LDQt9GA0YvQstCw0YLRjCDRgdC+0LXQtNC40L3QtdC90LjQtSDRgSDRgdC10YDQstC10YDQvtC8LjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCh0L3QuNC80LDRgtGMINC/0LDRg9C30YMg0LHQtdC3INGD0LLQtdC00L7QvNC70LXQvdC40Y8g0L/RgNC+0YLQuNCy0L7Qv9C+0LvQvtC20L3QvtC5INCa0L7QvNCw0L3QtNGLINC4INC/0L7Qu9GD0YfQtdC90LjRjyDQvtGCINCa0LDQv9C40YLQsNC90LAg0YHQvtCz0LvQsNGB0LjRjyDQvdCwINC/0YDQvtC00L7Qu9C20LXQvdC40LUg0JzQsNGC0YfQsCAtINC90LXQu9GM0LfRjy4g0J4g0YLQsNC60L7QvCDQvdCw0YDRg9GI0LXQvdC40Lgg0L3QtdC+0LHRhdC+0LTQuNC80L4g0YPQstC10LTQvtC80LvRj9GC0Ywg0YHRg9C00YzRji48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzdHJvbmc+PHNwYW4+INCU0LjRgdGG0LjQv9C70LjQvdCw0YDQvdGL0LUg0YHQsNC90LrRhtC40Lg6PC9zcGFuPjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7Ql9CwINC90LDRgNGD0YjQtdC90LjQtSDQu9GO0LHQvtCz0L4g0LjQtyDQv9GA0LDQstC40LssINCh0YPQtNGM0Y8g0JzQsNGC0YfQsCDQvtGB0YLQsNCy0LvRj9GO0YIg0LfQsCDRgdC+0LHQvtC5INC/0YDQsNCy0L4g0L3QsNC30L3QsNGH0LjRgtGMINC60L7QvNCw0L3QtNC1INGC0LXRhdC90LjRh9C10YHQutC+0LUg0L/QvtGA0LDQttC10L3QuNC1LCDQuNC70Lgg0LLRi9C90LXRgdGC0Lgg0L7RhNC40YbQuNCw0LvRjNC90L7QtSDQv9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNC1LjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCf0L7QstGC0L7RgNC90L7QtSDQv9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNC1INCyINGF0L7QtNC1INCc0LDRgtGH0LAgJm5kYXNoOyDQstGB0LXQs9C00LAg0LLQtdC00LXRgiDQuiDRgtC10YXQvdC40YfQtdGB0LrQvtC80YMg0L/QvtGA0LDQttC10L3QuNGOLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz48c3Bhbj4g0KLQtdGF0L3QuNGH0LXRgdC60LjQtSDQv9GA0L7QsdC70LXQvNGLOjwvc3Bhbj48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+0J/RgNC4INC00LjRgdC60L7QvdC90LXQutGC0LUg0LLRgdC10YUg0LjQs9GA0L7QutC+0LIg0YEg0YHQtdGA0LLQtdGA0LAg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDQv9C10YDQtdC40LPRgNC+0LLQutCwLCDQv9C40LrQuCDQuCDQsdCw0L3RiyDQvtGB0YLQsNGO0YLRgdGPINGC0LDQutC40LUg0LbQtSwg0LrQsNC6INC00L4g0LTQuNGB0LrQvtC90L3QtdC60YLQsC48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7Qn9GA0Lgg0LTQuNGB0LrQvtC90L3QtdC60YLQtSDQvtC00L3QvtCz0L4g0LjQu9C4INC90LXRgdC60L7Qu9GM0LrQuNGFINC40LPRgNC+0LrQvtCyINC40Lcg0LrQvtC80LDQvdC00YssINGB0YLQsNCy0LjRgtGB0Y8g0L/QsNGD0LfQsCDQvdCwINGB0YDQvtC6INC90LUg0LHQvtC70LXQtSA1LdGC0Lgg0LzQuNC90YPRgi4gKNCx0LXQtyDQvtGB0L7QsdGL0YUg0YPQutCw0LfQsNC90LjQuSDRgdGD0LTRjNC4KTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCf0YDQuCDQtNC40YHQutC+0L3QvdC10LrRgtC1INCy0YHQtdGFINC40LPRgNC+0LrQvtCyINC40Lcg0L7QtNC90L7QuSDQutC+0LzQsNC90LTRiywg0L/RgNC4INC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDQuNCz0YDRiyDQvdC1INCx0L7Qu9C10LUgMTAg0LzQuNC90YPRgiDRgSDRgNCw0LfQvdC40YbQtdC5INCyINGB0YfRkdGC0LUg0L3QtSDQsdC+0LvRjNGI0LUgNSDQvtGH0LrQvtCyICZtZGFzaDsg0L3QsNC30L3QsNGH0LDQtdGC0YHRjyDQv9C10YDQtdC40LPRgNC+0LLQutCwINC/0YDQuCDRgtC10YUg0LbQtSDQv9C40LrQsNGFLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPtCf0YDQuCDQtNC40YHQutC+0L3QvdC10LrRgtC1INCy0YHQtdGFINC40LPRgNC+0LrQvtCyINC40Lcg0L7QtNC90L7QuSDQutC+0LzQsNC90LTRiywg0L/RgNC4INC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDQuNCz0YDRiyDQsdC+0LvQtdC1IDE1INC80LjQvdGD0YIg0L/QvtCx0LXQtNC40YLQtdC70Y8g0LjQs9GA0Ysg0LLRi9GP0LLQu9GP0LXRgiDRgdGD0LTRjNGPINGC0YPRgNC90LjRgNCwINC/0L4gJmxhcXVvO9Cy0YvRiNC60LDQvCZyYXF1bzssINC60L7Qu9C40YfQtdGB0YLQstGDINGD0L3QuNGH0YLQvtC20LXQvdC90YvRhSDQs9C10YDQvtC10LIg0LggZ3BtLCDQuNC70Lgg0LbQtSDQvdCw0LfQvdCw0YfQsNC10YIg0L/QtdGA0LXQuNCz0YDQvtCy0LrRgy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT7Qn9GA0Lgg0LLRi9C70LXRgtC1INC/0LjQutC10YDQsCDQutC+0LzQsNC90LTRiyDQstC+INCy0YDQtdC80Y8g0LLRi9Cx0L7RgNCwINC4INCx0LDQvdCwINCz0LXRgNC+0LXQsiDQuCDQvdC10LLQvtC30LzQvtC20L3QvtGB0YLQuCDQsdGL0YHRgtGA0L7Qs9C+INC10LPQviDQv9C10YDQtdC/0L7QtNC60LvRjtGH0LXQvdC40Y8gKNC/0L7RgtC10YDRjyDRhdC+0YLRjyDQsdGLINC+0LTQvdC+0LPQviDQvtGB0L7Qt9C90LDQvdC90L7Qs9C+INCx0LDQvdCwINC40LvQuCDQstGL0LHQvtGA0LAg0LPQtdGA0L7RjyksINC70L7QsdCx0Lgg0LzQsNGC0YfQsCDRgdC+0LfQtNCw0LXRgtGB0Y8g0LfQsNC90L7QstC+LiDQn9GA0Lgg0Y3RgtC+0Lwg0L/QuNC60LXRgNGLINC00L7Qu9C20L3RiyDQsdGD0LTRg9GCINC/0L7QstGC0L7RgNC40YLRjCDQstGB0LUg0YHQtNC10LvQsNC90L3Ri9C1INC00L4g0LzQvtC80LXQvdGC0LAg0LLRi9C70LXRgtCwINC/0LjQutC4INC4INCx0LDQvdGLLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGxheW91dDogJ2RlZmF1bHQnLFxyXG5cclxuICAgICAgICBtZXRhSW5mbyAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlOiAn0KLQtdGF0L3QuNGH0LXRgdC60LjQtSDQv9GA0LDQstC40LvQsCDQotGD0YDQvdC40YDQsCcgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbXB1dGVkOntcclxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogJ2xhbmcvbG9jYWxlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50X3J1bGVzLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZGVjb3JhdGVkLWgtMlwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwi0KLQtdGF0L3QuNGH0LXRgdC60LjQtSDQv9GA0LDQstC40LvQsCDQotGD0YDQvdC40YDQsFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQmNCz0YDQvtC60Lgg0L7QsdGP0LfQsNC90Ysg0YHQstGP0LfQsNGC0YzRgdGPINGBIFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCLRgdGD0LTRjNC10LlcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCIg0L3QtSDQv9C+0LfQtNC90LXQtSDRh9C10Lwg0LfQsCAxNSDQvNC40L3Rg9GCINC00L4g0L3QsNGH0LDQu9CwINCc0LDRgtGH0LAg0LIg0KfQsNGC0LUg0L3QsCDRgdGC0YDQsNC90LjRhtC1INCc0LDRgtGH0LAg0L3QsCDRgdCw0LnRgtC1IFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwOi8vd3d3LnlvdXRobGVhZ3VlLnJ1L1wiIH0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb25cIjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0LXVuZGVybGluZVwiOiBcIm5vbmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcInd3dy55b3V0aGxlYWd1ZS5ydVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIi4g0J7QsdGJ0LDQtdGC0YHRjyDRgSDRgdGD0LTRjNC10Lkg0YLQvtC70YzQutC+INC60LDQv9C40YLQsNC9INCa0L7QvNCw0L3QtNGLLlwiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm9sXCIsIFtcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDQktC10YDRgdC40Y8g0LjQs9GA0Ys6INC70LjRhtC10L3Qt9C40L7QvdC90LDRjyDigJxEb3RhMuKAnSBcIiksXG4gICAgICAgICAgICBfYyhcImVtXCIsIFtfdm0uX3YoXCLQv9C+0YHQu9C10LTQvdGP0Y8g0LTQvtGB0YLRg9C/0L3QsNGPINC90LAg0L/Qu9Cw0YLRhNC+0YDQvNC1IFN0ZWFtXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCIg0JzQsNGC0YfQuCDQv9GA0L7RhdC+0LTQuNGCINC00L4g0LTQstGD0YUg0L/QvtCx0LXQtNGLIChibzMpLiDQpNC40L3QsNC7INCi0YPRgNC90LjRgNCwINC00L4g0YLRgNC10YUg0L/QvtCx0LXQtCAoYm81KS5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCLQotGD0YDQvdC40YAg0L/RgNC+0YXQvtC00LjRgiDQsiDRhNC+0YDQvNCw0YLQtTpcXG4gICAgICAgICAgICBcIiksXG4gICAgICAgICAgX2MoXCJvbFwiLCBbXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLQoNC10LPQuNC+0L3QsNC70YzQvdGL0LUg0LrQstCw0LvQuNGE0LjQutCw0YbQuNC4IOKAkyDQk9GA0YPQv9C/0L7QstC+0Lkg0YDQsNGD0L3QtD5cIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0KTQuNC90LDQuyDigJMg0L/QviDQvtC70LjQvNC/0LjQudGB0LrQvtC5INGB0LjRgdGC0LXQvNC1IChzaW5nbGUgZWxpbWluYXRpb24pLiDQkiDQpNC40L3QsNC7INCy0YvRhdC+0LTQuNGCINC/0L4gMi3QtSDQmtC+0LzQsNC90LTRiyDQuNC3INC60LDQttC00L7QuSDQs9GA0YPQv9C/0YsuIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiINCf0YDQsNCy0LjQu9CwINC80L7Qs9GD0YIg0LHRi9GC0Ywg0LjQt9C80LXQvdC10L3RiyDQuC/QuNC70Lgg0LTQvtC/0L7Qu9C90LXQvdGLINC+0YDQs9Cw0L3QuNC30LDRgtC+0YDQvtC8INCi0YPRgNC90LjRgNCwINCx0LXQtyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtCz0L4g0YPQstC10LTQvtC80LvQtdC90LjRjy5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiINCSINC40LPRgNC1INC/0YDQuNC90LjQvNCw0Y7RgiDRg9GH0LDRgdGC0LjQtSAyINC60L7QvNCw0L3QtNGLINC/0L4gNSDRh9C10LvQvtCy0LXQuiDQsiDQutCw0LbQtNC+0LkuXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiINCSINC40LPRgNC1INC80L7Qs9GD0YIg0L3QsNGF0L7QtNC40YLRgdGPINGC0L7Qu9GM0LrQviDQuNCz0YDQvtC60LgsINGB0YPQtNGM0Lgg0Lgg0LrQvtC80LzQtdC90YLQsNGC0L7RgNGLLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIgQ3JlZXBza2lwINGA0LDQt9GA0LXRiNC10L0gKMKr0YHQv9C10LvQsNC80LjCuyDRgdGC0L7Qv9C40YLRjCDCq9C60YDQuNC/0L7QssK7INC80L7QttC90L4pLlwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIiBCYWNrZG9vciDigJMg0YDQsNC30YDQtdGI0LXQvSDQstGB0LXRhSDCq9GC0LDRg9GN0YDQvtCywrsuXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg0JjQs9GA0L7QstGL0LUg0L3QsNGB0YLRgNC+0LnQutC4INC/0YDQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQuCDRgNGD0YHRgdC60L7Qs9C+INC60LvQuNC10L3RgtCwOlwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib2xcIiwgW1xuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwi0KDQtdC20LjQvCDQuNCz0YDRizog0KDQtdC20LjQvCDQmtCw0L/QuNGC0LDQvdC+0LJcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLQktC10YDRgdC40Y86INCe0LHRi9GH0L3QsNGPIChDYXBpdGFuIE1vZGUpXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwi0JzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjQtSDRgdC10YDQstC10YDQsDog0JvRjtC60YHQtdC80LHRg9GA0LNcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLQoNCw0LfRgNC10YjQuNGC0Ywg0L3QsNCx0LvRjtC00LXQvdC40LUg4oCTINGA0LDQt9GA0LXRiNC40YLRjFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcItCd0LDQu9C40YfQuNC1INGC0YDQtdC90LXRgNCwIOKAkyDQt9Cw0L/RgNC10YLQuNGC0YxcIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiINCY0LPRgNC+0LLRi9C1INC90LDRgdGC0YDQvtC50LrQuCDQv9GA0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Lgg0LDQvdCz0LvQuNC50YHQutC+0LPQviDQutC70LjQtdC90YLQsDpcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm9sXCIsIFtcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIkdhbWUgbW9kZTogQ2FwdGFpbnMgTW9kZVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIlZlcnNpb246IFRvdXJuYW1lbnRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCJTZXJ2ZXIgTG9jYXRpb246IEx1eGVtYm91cmdcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCJTcGVjdGF0b3JzIOKAkyBlbmFibGVkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiQ29hY2gg4oCUIGRpc2FibGVkXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCIg0JXRgdC70Lgg0LrQvtC80LDQvdC00LDQvCDQvdC1INGD0LTQvtCx0L3QviDQuNCz0YDQsNGC0Ywg0L3QsCDQtNC10YTQvtC70YLQvdC+0Lwg0YHQtdGA0LLQtdGA0LUg4oCUINC+0L3QuCDQvNC+0LPRg9GCINC00L7Qs9C+0LLQvtGA0LjRgtGM0YHRjyDQvtCxINGD0YHRgtGA0LDQuNCy0LDRjtGJ0LXQvCDQuNGFLCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INGB0L7Qs9C70LDRgdC+0LLQsNCyINGN0YLQviDRgSDRgdGD0LTRjNC10LkuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCIg0J/QvtCx0LXQttC00LDQtdGCINC60L7QvNCw0L3QtNCwLCDRg9C90LjRh9GC0L7QttC40LLRiNCw0Y8g0YLRgNC+0L0g0L/RgNC+0YLQuNCy0L3QuNC60LAsINC40LvQuCDQstGL0L3Rg9C00LjQstGI0LDRjyDQutC+0LzQsNC90LTRgyDQv9GA0L7RgtC40LLQvdC40LrQsCAoMi3RhSDQuCDQsdC+0LvQtdC1INC40LPRgNC+0LrQvtCyKSDQv9C+0LrQuNC90YPRgtGMINC40LPRgNGDLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfYyhcInNwYW5cIiwgW192bS5fdihcIiDQl9Cw0L/RgNC10YnQtdC90L46XCIpLCBfYyhcImJyXCIpXSldKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib2xcIiwgW1xuICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCb0Y7QsdGL0LUg0LTQtdC50YHRgtCy0LjRjywg0L/RgNC+0YLQuNCy0L7RgNC10YfQsNGJ0LjQtSDQtNCw0L3QvdGL0Lwg0J/RgNCw0LLQuNC70LDQvCwg0LAg0YLQsNC60LbQtSDQn9GA0LDQstC40LvQsNC8INC40LPRgNGLIERvdGEyXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNGPIMKr0LHQsNCz0L7QssK7INC60LDRgNGC0YssINC30LDQv9GA0LXRidC10L3QvdGL0YUg0L/RgNC+0LPRgNCw0LzQvCwg0LzQsNC60YDQvtGB0L7Qsi5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0J/QtdGA0LXQtNCw0YfQsCBEaXZpbmUgUmFwaWVyINC/0YDQuCDQv9C+0LzQvtGJ0Lgg0YHRg9C40YbQuNC00LAg0LjQu9C4INGB0LzQtdGA0YLQuCDQvtGCIFJvc2hhbiDQuNC70LggwqvQutGA0LjQv9C+0LLCuyAo0LLRgNCw0LbQtdGB0LrQuNGFINC4L9C40LvQuCDQvdC10LnRgtGA0LDQu9GM0L3Ri9GFKSDQt9Cw0L/RgNC10YnQtdC90LAuINCi0LDQutC20LUg0LfQsNC/0YDQtdGJ0LXQvdCwINC/0LXRgNC10LTQsNGH0LAg0L/QvtC00L7QsdC90YvQvCDQvtCx0YDQsNC30L7QvCDRgtGA0L7RhNC10LnQvdC+0LkgRGl2aW5lIFJhcGllci5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLQndCw0YXQvtC20LTQtdC90LjRjyDQsiDQuNCz0YDQtSDQv9C+0YHRgtC+0YDQvtC90L3QuNGFINC70LjRhi5cIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0J7RgdC60L7RgNCx0LvQtdC90LjRjyDQsiDQsNC00YDQtdGBINC+0YDQs9Cw0L3QuNC30LDRgtC+0YDQvtCyINCb0LjQs9C4LCDRgdGD0LTQtdC5LCDQv9GA0L7RgtC40LLQvdC40LrQvtCyLCDCq9GC0LjQvNC80LXQudGC0L7QssK7INC4INC00YDRg9Cz0LjRhSDRg9GH0LDRgdGC0L3QuNC60L7QsiDRgdC+0YDQtdCy0L3QvtCy0LDQvdC40LkuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiwqvQpNC70YPQtMK7INCyINGH0LDRgi5cIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi0J3QtdGB0L/QvtGA0YLQuNCy0L3QvtC1INC/0L7QstC10LTQtdC90LjQtSAo0L3QsNC/0YDQuNC80LXRgCwg0YHQsNCx0L7RgtC40YDQvtCy0LDQvdC40LUg0LzQsNGC0YfQtdC5KS5cIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcItCd0LDQv9C40YHQsNC90LjQtSDigJxnZ+KAnSDQsiDQtdGJ0LUg0L3QtSDQt9Cw0LrQvtC90YfQtdC90L3QvtC8INC80LDRgtGH0LUuXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwi0J3QsNGH0LjQvdCw0YLRjCDQuNCz0YDRgyDQvdC10L/QvtC70L3Ri9C80Lgg0YHQvtGB0YLQsNCy0LDQvNC4INC60L7QvNCw0L3QtC5cIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLQmNCz0YDQsNGC0Ywg0YEg0YfRg9C20L7QuSDRg9GH0LXRgtC90L7QuSDQt9Cw0L/QuNGB0LguXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwi0J3QsNC80LXRgNC10L3QvdC+INGA0LDQt9GA0YvQstCw0YLRjCDRgdC+0LXQtNC40L3QtdC90LjQtSDRgSDRgdC10YDQstC10YDQvtC8LlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCLQodC90LjQvNCw0YLRjCDQv9Cw0YPQt9GDINCx0LXQtyDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPINC/0YDQvtGC0LjQstC+0L/QvtC70L7QttC90L7QuSDQmtC+0LzQsNC90LTRiyDQuCDQv9C+0LvRg9GH0LXQvdC40Y8g0L7RgiDQmtCw0L/QuNGC0LDQvdCwINGB0L7Qs9C70LDRgdC40Y8g0L3QsCDQv9GA0L7QtNC+0LvQttC10L3QuNC1INCc0LDRgtGH0LAgLSDQvdC10LvRjNC30Y8uINCeINGC0LDQutC+0Lwg0L3QsNGA0YPRiNC10L3QuNC4INC90LXQvtCx0YXQvtC00LjQvNC+INGD0LLQtdC00L7QvNC70Y/RgtGMINGB0YPQtNGM0Y4uXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiINCU0LjRgdGG0LjQv9C70LjQvdCw0YDQvdGL0LUg0YHQsNC90LrRhtC40Lg6XCIpXSldKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvbFwiLCBbXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0JfQsCDQvdCw0YDRg9GI0LXQvdC40LUg0LvRjtCx0L7Qs9C+INC40Lcg0L/RgNCw0LLQuNC7LCDQodGD0LTRjNGPINCc0LDRgtGH0LAg0L7RgdGC0LDQstC70Y/RjtGCINC30LAg0YHQvtCx0L7QuSDQv9GA0LDQstC+INC90LDQt9C90LDRh9C40YLRjCDQutC+0LzQsNC90LTQtSDRgtC10YXQvdC40YfQtdGB0LrQvtC1INC/0L7RgNCw0LbQtdC90LjQtSwg0LjQu9C4INCy0YvQvdC10YHRgtC4INC+0YTQuNGG0LjQsNC70YzQvdC+0LUg0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjQtS5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0J/QvtCy0YLQvtGA0L3QvtC1INC/0YDQtdC00YPQv9GA0LXQttC00LXQvdC40LUg0LIg0YXQvtC00LUg0JzQsNGC0YfQsCDigJMg0LLRgdC10LPQtNCwINCy0LXQtNC10YIg0Log0YLQtdGF0L3QuNGH0LXRgdC60L7QvNGDINC/0L7RgNCw0LbQtdC90LjRji5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIg0KLQtdGF0L3QuNGH0LXRgdC60LjQtSDQv9GA0L7QsdC70LXQvNGLOlwiKV0pXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib2xcIiwgW1xuICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCf0YDQuCDQtNC40YHQutC+0L3QvdC10LrRgtC1INCy0YHQtdGFINC40LPRgNC+0LrQvtCyINGBINGB0LXRgNCy0LXRgNCwINC90LDQt9C90LDRh9Cw0LXRgtGB0Y8g0L/QtdGA0LXQuNCz0YDQvtCy0LrQsCwg0L/QuNC60Lgg0Lgg0LHQsNC90Ysg0L7RgdGC0LDRjtGC0YHRjyDRgtCw0LrQuNC1INC20LUsINC60LDQuiDQtNC+INC00LjRgdC60L7QvdC90LXQutGC0LAuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCf0YDQuCDQtNC40YHQutC+0L3QvdC10LrRgtC1INC+0LTQvdC+0LPQviDQuNC70Lgg0L3QtdGB0LrQvtC70YzQutC40YUg0LjQs9GA0L7QutC+0LIg0LjQtyDQutC+0LzQsNC90LTRiywg0YHRgtCw0LLQuNGC0YHRjyDQv9Cw0YPQt9CwINC90LAg0YHRgNC+0Log0L3QtSDQsdC+0LvQtdC1IDUt0YLQuCDQvNC40L3Rg9GCLiAo0LHQtdC3INC+0YHQvtCx0YvRhSDRg9C60LDQt9Cw0L3QuNC5INGB0YPQtNGM0LgpXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCf0YDQuCDQtNC40YHQutC+0L3QvdC10LrRgtC1INCy0YHQtdGFINC40LPRgNC+0LrQvtCyINC40Lcg0L7QtNC90L7QuSDQutC+0LzQsNC90LTRiywg0L/RgNC4INC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDQuNCz0YDRiyDQvdC1INCx0L7Qu9C10LUgMTAg0LzQuNC90YPRgiDRgSDRgNCw0LfQvdC40YbQtdC5INCyINGB0YfRkdGC0LUg0L3QtSDQsdC+0LvRjNGI0LUgNSDQvtGH0LrQvtCyIOKAlCDQvdCw0LfQvdCw0YfQsNC10YLRgdGPINC/0LXRgNC10LjQs9GA0L7QstC60LAg0L/RgNC4INGC0LXRhSDQttC1INC/0LjQutCw0YUuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCf0YDQuCDQtNC40YHQutC+0L3QvdC10LrRgtC1INCy0YHQtdGFINC40LPRgNC+0LrQvtCyINC40Lcg0L7QtNC90L7QuSDQutC+0LzQsNC90LTRiywg0L/RgNC4INC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDQuNCz0YDRiyDQsdC+0LvQtdC1IDE1INC80LjQvdGD0YIg0L/QvtCx0LXQtNC40YLQtdC70Y8g0LjQs9GA0Ysg0LLRi9GP0LLQu9GP0LXRgiDRgdGD0LTRjNGPINGC0YPRgNC90LjRgNCwINC/0L4gwqvQstGL0YjQutCw0LzCuywg0LrQvtC70LjRh9C10YHRgtCy0YMg0YPQvdC40YfRgtC+0LbQtdC90L3Ri9GFINCz0LXRgNC+0LXQsiDQuCBncG0sINC40LvQuCDQttC1INC90LDQt9C90LDRh9Cw0LXRgiDQv9C10YDQtdC40LPRgNC+0LLQutGDLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCLQn9GA0Lgg0LLRi9C70LXRgtC1INC/0LjQutC10YDQsCDQutC+0LzQsNC90LTRiyDQstC+INCy0YDQtdC80Y8g0LLRi9Cx0L7RgNCwINC4INCx0LDQvdCwINCz0LXRgNC+0LXQsiDQuCDQvdC10LLQvtC30LzQvtC20L3QvtGB0YLQuCDQsdGL0YHRgtGA0L7Qs9C+INC10LPQviDQv9C10YDQtdC/0L7QtNC60LvRjtGH0LXQvdC40Y8gKNC/0L7RgtC10YDRjyDRhdC+0YLRjyDQsdGLINC+0LTQvdC+0LPQviDQvtGB0L7Qt9C90LDQvdC90L7Qs9C+INCx0LDQvdCwINC40LvQuCDQstGL0LHQvtGA0LAg0LPQtdGA0L7RjyksINC70L7QsdCx0Lgg0LzQsNGC0YfQsCDRgdC+0LfQtNCw0LXRgtGB0Y8g0LfQsNC90L7QstC+LiDQn9GA0Lgg0Y3RgtC+0Lwg0L/QuNC60LXRgNGLINC00L7Qu9C20L3RiyDQsdGD0LTRg9GCINC/0L7QstGC0L7RgNC40YLRjCDQstGB0LUg0YHQtNC10LvQsNC90L3Ri9C1INC00L4g0LzQvtC80LXQvdGC0LAg0LLRi9C70LXRgtCwINC/0LjQutC4INC4INCx0LDQvdGLLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTI3NjU4OGJlXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjc2NTg4YmVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfcnVsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTI3NjU4OGJlXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50X3J1bGVzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG91cm5hbWVudF9ydWxlcy52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b3VybmFtZW50X3J1bGVzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjc2NTg4YmVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90b3VybmFtZW50X3J1bGVzLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudF9ydWxlcy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjc2NTg4YmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yNzY1ODhiZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudF9ydWxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50X3J1bGVzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEzIl0sInNvdXJjZVJvb3QiOiIifQ==