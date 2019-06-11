webpackJsonp([61],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/faq.vue":
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
        return { title: 'Часто задаваемые вопросы' };
    },


    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        locale: 'lang/locale'
    }))
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04a35309\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/faq.vue":
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
        _vm._v("Часто задаваемые вопросы")
      ]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как найти команду своей школы?")
          ]),
          _c("br"),
          _vm._v("Перейдите по ссылке "),
          _c("a", { attrs: { href: "https://youthleague.ru/teams" } }, [
            _vm._v("https://youthleague.ru/teams")
          ]),
          _vm._v(" на список команд. "),
          _c("br"),
          _vm._v(
            "Если в списке нет ни одной команды – тогда создайте в личном кабинете новую команду."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как создать свою команду?")
          ]),
          _c("br"),
          _vm._v("Для создания команды нужно зарегистрироваться "),
          _c("a", { attrs: { href: "https://youthleague.ru/register, " } }, [
            _vm._v("https://youthleague.ru/register, ")
          ]),
          _vm._v(" выбрать населенный пункт, школу и класс. "),
          _c("br"),
          _vm._v(
            "После регистрации перейдите в Личный кабинет - там есть меню создания команды."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v(
              "Можно ли собрать игроков из разных школ и сделать одну команду?"
            )
          ]),
          _c("br"),
          _vm._v(
            "Правилами турнира предусмотрено, что вы создаете команду из учеников только своей школы и соревнуетесь с командами других школ."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как пригласить игроков в команду?")
          ]),
          _c("br"),
          _vm._v(
            "Вы можете разместить приглашение в команду на стене ВК или собрать игроков в команду через SteamCommunity. Приглашенным игрокам будет необходимо зарегистрироваться на сайте "
          ),
          _c("a", { attrs: { href: "https://youthleague.ru/" } }, [
            _vm._v("https://youthleague.ru/")
          ]),
          _vm._v(" , выбрав одну школу с вами. Вам необходимо в списке  "),
          _c("a", { attrs: { href: "https://youthleague.ru/players" } }, [
            _vm._v("https://youthleague.ru/players")
          ]),
          _vm._v(
            '  выбрать галочкой игроков и нажать на кнопку "Отправить приглашение в команду".'
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как я узнаю, что меня пригласили в команду?")
          ]),
          _c("br"),
          _vm._v("Игроков в команду приглашает капитан на странице  "),
          _c("a", { attrs: { href: "https://youthleague.ru/players" } }, [
            _vm._v("https://youthleague.ru/players")
          ]),
          _vm._v(
            ". Вы получите уведомление о приглашении по электронной почте, которую вы указали при регистрации. В меню команды есть список приглашений, вы должны подтвердить, если вас  пригласили."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Сколько игроков должно быть в команде?")
          ]),
          _c("br"),
          _vm._v(
            "В команде может быть только 5 игроков. Запасных игроков и замен не предусмотрено."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как зарегистрироваться с “готовой” командой?")
          ]),
          _c("br"),
          _vm._v(
            'Каждому из игроков "готовой команды" необходимо зарегистрироваться на сайте  '
          ),
          _c("a", { attrs: { href: "https://youthleague.ru/" } }, [
            _vm._v("https://youthleague.ru/")
          ]),
          _vm._v(
            ". Затем Капитан команды заводит на сайте команду с её названием и рассылает всем игрокам приглашения. Как только все игроки их принимают - команда считается сформированной. Всем игрокам необходимо внести SteamID и аккаунты ВКонтакте, для прохождения регистрации команды на Турнир."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как проверить зарегистрирована ли моя команда на Турнир?")
          ]),
          _c("br"),
          _vm._v(
            "Если все пять игроков ответили на приглашения вступить в команду. Если у всех 5-ти игроков внесены реальные фамилии и имена, добавлены SteamID и аккаунты ВК - такая команда считается зарегистрированной на Турнир."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как можно посмотреть какие ещё участвуют команды?")
          ]),
          _c("br"),
          _vm._v(
            "Пока не закончился внутришкольный этап вам для просмотра  доступны только команды, зарегистрированные в вашей школе. После окончания внутришкольного этапа – вы увидите список всех вышедших в следующий этап команд будет доступен."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v(
              "Если я закончил школу в этом году, я могу участвовать в турнире?"
            )
          ]),
          _c("br"),
          _vm._v(
            "Выпускники 11-х классов средних школ могут участвовать в Турнире, при условии, что но момент регистрации им не более 18-ти лет. При регистрации вы выбираете свою школу и выбираете 11-ый класс."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Команды школ из Казахстана тоже могут участвовать?")
          ]),
          _c("br"),
          _vm._v(
            "В текущем Турнире могут участвовать только ученики и выпускники школ Российской Федерации"
          ),
          _c("br"),
          _vm._v(
            "Следите за анонсами – мы планируем проводить также и международные турниры."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v(
              "Могут ли участвовать в Турнире учащиеся колледжей и техникумов?"
            )
          ]),
          _c("br"),
          _vm._v(
            "Учащиеся средних специальных учебных заведений могут принимать участие в Турнире, при условии что но момент регистрации им не более 18-ти лет."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v(
              "Можно ли мне участвовать в Турнире, если мне уже исполнилось 19?"
            )
          ]),
          _c("br"),
          _vm._v(
            "К сожалению, максимальный возраст игроков для участия в данном Турнире  - 18 лет."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Когда проходит Турнир?")
          ]),
          _c("br"),
          _vm._v("Квалификации до 18 августа. Финал  после 26 августа.")
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v(
              "Как будут назначаться матчи? Как мы узнаем, что завтра мы играем, будет ли какое нибудь оповещение?"
            )
          ]),
          _c("br"),
          _vm._v(
            "Назначение матчей определяется  турнирной платформой. Оповещение о назначении матча будет приходить на электронную почту, указанную при регистрации за  24 часа до начала матча."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v(
              "Что произойдет, если на внутришкольном этапе Турнира у нас соперников не будет?"
            )
          ]),
          _c("br"),
          _vm._v(
            "Это означает, что ваша команда автоматически станет Чемпионом школы."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Какой призовой фонд Турнира?")
          ]),
          _c("br"),
          _vm._v("Денежный призовой фонд Турнира не предусмотрен."),
          _c("br"),
          _vm._v(
            "Главный приз Турнира – игровой ноутбук. Кроме этого будут поощрительные призы."
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-04a35309", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/faq.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_faq_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/faq.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_faq_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_faq_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_faq_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_faq_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04a35309_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_faq_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04a35309\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/faq.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_faq_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04a35309_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_faq_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/faq.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04a35309", Component.options)
  } else {
    hotAPI.reload("data-v-04a35309", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9mYXEudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZT9lMzdkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE2QkE7QUFDQSxxQkFEQTs7QUFHQSxZQUhBLHNCQUdBO0FBQ0E7QUFDQSxLQUxBOzs7QUFPQSx5Q0FDQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxNQURBO0FBUEEsQzs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtDQUFrQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLHVDQUF1QyxFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLDRDQUE0QyxFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxrQ0FBa0MsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyx5Q0FBeUMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLHlDQUF5QyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsa0NBQWtDLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNGLGtFQUFTO0FBQ3hCLElBQUksS0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUN0UEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQStEO0FBQ2hHO0FBQ3diO0FBQ2E7QUFDcmM7QUFDZ1E7QUFDaFE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvV0FBYztBQUNoQixFQUFFLDROQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvNjEuN2E2MjdiZWMzNmVmOGU0Y2IxODkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm5rLWRlY29yYXRlZC1oLTJcIj7Qp9Cw0YHRgtC+INC30LDQtNCw0LLQsNC10LzRi9C1INCy0L7Qv9GA0L7RgdGLPC9oMz5cclxuICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtCw0Log0L3QsNC50YLQuCDQutC+0LzQsNC90LTRgyDRgdCy0L7QtdC5INGI0LrQvtC70Ys/PC9zcGFuPjxiciAvPtCf0LXRgNC10LnQtNC40YLQtSDQv9C+INGB0YHRi9C70LrQtSA8YSBocmVmPVwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS90ZWFtc1wiPmh0dHBzOi8veW91dGhsZWFndWUucnUvdGVhbXM8L2E+INC90LAg0YHQv9C40YHQvtC6INC60L7QvNCw0L3QtC4gPGJyIC8+0JXRgdC70Lgg0LIg0YHQv9C40YHQutC1INC90LXRgiDQvdC4INC+0LTQvdC+0Lkg0LrQvtC80LDQvdC00YsgJm5kYXNoOyDRgtC+0LPQtNCwINGB0L7Qt9C00LDQudGC0LUg0LIg0LvQuNGH0L3QvtC8INC60LDQsdC40L3QtdGC0LUg0L3QvtCy0YPRjiDQutC+0LzQsNC90LTRgy48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INGB0L7Qt9C00LDRgtGMINGB0LLQvtGOINC60L7QvNCw0L3QtNGDPzwvc3Bhbj48YnIgLz7QlNC70Y8g0YHQvtC30LTQsNC90LjRjyDQutC+0LzQsNC90LTRiyDQvdGD0LbQvdC+INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyA8YSBocmVmPVwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9yZWdpc3RlciwgXCI+aHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9yZWdpc3RlciwgPC9hPiZuYnNwO9Cy0YvQsdGA0LDRgtGMINC90LDRgdC10LvQtdC90L3Ri9C5INC/0YPQvdC60YIsINGI0LrQvtC70YMg0Lgg0LrQu9Cw0YHRgS4gPGJyIC8+0J/QvtGB0LvQtSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC/0LXRgNC10LnQtNC40YLQtSDQsiDQm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YIgLSDRgtCw0Lwg0LXRgdGC0Ywg0LzQtdC90Y4g0YHQvtC30LTQsNC90LjRjyDQutC+0LzQsNC90LTRiy48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JzQvtC20L3QviDQu9C4INGB0L7QsdGA0LDRgtGMINC40LPRgNC+0LrQvtCyINC40Lcg0YDQsNC30L3Ri9GFINGI0LrQvtC7INC4INGB0LTQtdC70LDRgtGMINC+0LTQvdGDINC60L7QvNCw0L3QtNGDPzwvc3Bhbj48YnIgLz7Qn9GA0LDQstC40LvQsNC80Lgg0YLRg9GA0L3QuNGA0LAg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC90L4sINGH0YLQviDQstGLINGB0L7Qt9C00LDQtdGC0LUg0LrQvtC80LDQvdC00YMg0LjQtyDRg9GH0LXQvdC40LrQvtCyINGC0L7Qu9GM0LrQviDRgdCy0L7QtdC5INGI0LrQvtC70Ysg0Lgg0YHQvtGA0LXQstC90YPQtdGC0LXRgdGMINGBINC60L7QvNCw0L3QtNCw0LzQuCDQtNGA0YPQs9C40YUg0YjQutC+0LsuPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0LDQuiDQv9GA0LjQs9C70LDRgdC40YLRjCDQuNCz0YDQvtC60L7QsiDQsiDQutC+0LzQsNC90LTRgz88L3NwYW4+PGJyIC8+0JLRiyDQvNC+0LbQtdGC0LUg0YDQsNC30LzQtdGB0YLQuNGC0Ywg0L/RgNC40LPQu9Cw0YjQtdC90LjQtSDQsiDQutC+0LzQsNC90LTRgyDQvdCwINGB0YLQtdC90LUg0JLQmiDQuNC70Lgg0YHQvtCx0YDQsNGC0Ywg0LjQs9GA0L7QutC+0LIg0LIg0LrQvtC80LDQvdC00YMg0YfQtdGA0LXQtyBTdGVhbUNvbW11bml0eS4g0J/RgNC40LPQu9Cw0YjQtdC90L3Ri9C8INC40LPRgNC+0LrQsNC8INCx0YPQtNC10YIg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINC90LAg0YHQsNC50YLQtSA8YSBocmVmPVwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9cIj5odHRwczovL3lvdXRobGVhZ3VlLnJ1LzwvYT4gLCDQstGL0LHRgNCw0LIg0L7QtNC90YMg0YjQutC+0LvRgyDRgSDQstCw0LzQuC4g0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INCyINGB0L/QuNGB0LrQtSZuYnNwOyA8YSBocmVmPVwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9wbGF5ZXJzXCI+aHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9wbGF5ZXJzPC9hPiZuYnNwOyDQstGL0LHRgNCw0YLRjCDQs9Cw0LvQvtGH0LrQvtC5INC40LPRgNC+0LrQvtCyINC4INC90LDQttCw0YLRjCDQvdCwINC60L3QvtC/0LrRgyBcItCe0YLQv9GA0LDQstC40YLRjCDQv9GA0LjQs9C70LDRiNC10L3QuNC1INCyINC60L7QvNCw0L3QtNGDXCIuPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0LDQuiDRjyDRg9C30L3QsNGOLCDRh9GC0L4g0LzQtdC90Y8g0L/RgNC40LPQu9Cw0YHQuNC70Lgg0LIg0LrQvtC80LDQvdC00YM/PC9zcGFuPjxiciAvPtCY0LPRgNC+0LrQvtCyINCyINC60L7QvNCw0L3QtNGDINC/0YDQuNCz0LvQsNGI0LDQtdGCINC60LDQv9C40YLQsNC9INC90LAg0YHRgtGA0LDQvdC40YbQtSZuYnNwOyA8YSBocmVmPVwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9wbGF5ZXJzXCI+aHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9wbGF5ZXJzPC9hPi4g0JLRiyDQv9C+0LvRg9GH0LjRgtC1INGD0LLQtdC00L7QvNC70LXQvdC40LUg0L4g0L/RgNC40LPQu9Cw0YjQtdC90LjQuCDQv9C+INGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLQtSwg0LrQvtGC0L7RgNGD0Y4g0LLRiyDRg9C60LDQt9Cw0LvQuCDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuC4g0JIg0LzQtdC90Y4g0LrQvtC80LDQvdC00Ysg0LXRgdGC0Ywg0YHQv9C40YHQvtC6INC/0YDQuNCz0LvQsNGI0LXQvdC40LksINCy0Ysg0LTQvtC70LbQvdGLINC/0L7QtNGC0LLQtdGA0LTQuNGC0YwsINC10YHQu9C4INCy0LDRgSZuYnNwOyDQv9GA0LjQs9C70LDRgdC40LvQuC48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0KHQutC+0LvRjNC60L4g0LjQs9GA0L7QutC+0LIg0LTQvtC70LbQvdC+INCx0YvRgtGMINCyINC60L7QvNCw0L3QtNC1Pzwvc3Bhbj48YnIgLz7QkiDQutC+0LzQsNC90LTQtSDQvNC+0LbQtdGCINCx0YvRgtGMINGC0L7Qu9GM0LrQviA1INC40LPRgNC+0LrQvtCyLiDQl9Cw0L/QsNGB0L3Ri9GFINC40LPRgNC+0LrQvtCyINC4INC30LDQvNC10L0g0L3QtSDQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3Qvi48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyDRgSAmbGRxdW870LPQvtGC0L7QstC+0LkmcmRxdW87INC60L7QvNCw0L3QtNC+0Lk/PC9zcGFuPjxiciAvPtCa0LDQttC00L7QvNGDINC40Lcg0LjQs9GA0L7QutC+0LIgXCLQs9C+0YLQvtCy0L7QuSDQutC+0LzQsNC90LTRi1wiINC90LXQvtCx0YXQvtC00LjQvNC+INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyDQvdCwINGB0LDQudGC0LUmbmJzcDsgPGEgaHJlZj1cImh0dHBzOi8veW91dGhsZWFndWUucnUvXCI+aHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS88L2E+LiDQl9Cw0YLQtdC8INCa0LDQv9C40YLQsNC9INC60L7QvNCw0L3QtNGLINC30LDQstC+0LTQuNGCINC90LAg0YHQsNC50YLQtSDQutC+0LzQsNC90LTRgyDRgSDQtdGRINC90LDQt9Cy0LDQvdC40LXQvCDQuCDRgNCw0YHRgdGL0LvQsNC10YIg0LLRgdC10Lwg0LjQs9GA0L7QutCw0Lwg0L/RgNC40LPQu9Cw0YjQtdC90LjRjy4g0JrQsNC6INGC0L7Qu9GM0LrQviDQstGB0LUg0LjQs9GA0L7QutC4INC40YUg0L/RgNC40L3QuNC80LDRjtGCIC0g0LrQvtC80LDQvdC00LAg0YHRh9C40YLQsNC10YLRgdGPINGB0YTQvtGA0LzQuNGA0L7QstCw0L3QvdC+0LkuINCS0YHQtdC8INC40LPRgNC+0LrQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INCy0L3QtdGB0YLQuCBTdGVhbUlEINC4INCw0LrQutCw0YPQvdGC0Ysg0JLQmtC+0L3RgtCw0LrRgtC1LCDQtNC70Y8g0L/RgNC+0YXQvtC20LTQtdC90LjRjyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC60L7QvNCw0L3QtNGLINC90LAg0KLRg9GA0L3QuNGALjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtCw0Log0L/RgNC+0LLQtdGA0LjRgtGMINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvdCwINC70Lgg0LzQvtGPINC60L7QvNCw0L3QtNCwINC90LAg0KLRg9GA0L3QuNGAPzwvc3Bhbj48YnIgLz7QldGB0LvQuCDQstGB0LUg0L/Rj9GC0Ywg0LjQs9GA0L7QutC+0LIg0L7RgtCy0LXRgtC40LvQuCDQvdCwINC/0YDQuNCz0LvQsNGI0LXQvdC40Y8g0LLRgdGC0YPQv9C40YLRjCDQsiDQutC+0LzQsNC90LTRgy4g0JXRgdC70Lgg0YMg0LLRgdC10YUgNS3RgtC4INC40LPRgNC+0LrQvtCyINCy0L3QtdGB0LXQvdGLINGA0LXQsNC70YzQvdGL0LUg0YTQsNC80LjQu9C40Lgg0Lgg0LjQvNC10L3QsCwg0LTQvtCx0LDQstC70LXQvdGLIFN0ZWFtSUQg0Lgg0LDQutC60LDRg9C90YLRiyDQktCaIC0g0YLQsNC60LDRjyDQutC+0LzQsNC90LTQsCDRgdGH0LjRgtCw0LXRgtGB0Y8g0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC90L3QvtC5INC90LAg0KLRg9GA0L3QuNGALjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtCw0Log0LzQvtC20L3QviDQv9C+0YHQvNC+0YLRgNC10YLRjCDQutCw0LrQuNC1INC10YnRkSDRg9GH0LDRgdGC0LLRg9GO0YIg0LrQvtC80LDQvdC00Ys/PC9zcGFuPjxiciAvPtCf0L7QutCwINC90LUg0LfQsNC60L7QvdGH0LjQu9GB0Y8g0LLQvdGD0YLRgNC40YjQutC+0LvRjNC90YvQuSDRjdGC0LDQvyDQstCw0Lwg0LTQu9GPINC/0YDQvtGB0LzQvtGC0YDQsCZuYnNwOyDQtNC+0YHRgtGD0L/QvdGLINGC0L7Qu9GM0LrQviDQutC+0LzQsNC90LTRiywg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC90L3Ri9C1INCyINCy0LDRiNC10Lkg0YjQutC+0LvQtS4g0J/QvtGB0LvQtSDQvtC60L7QvdGH0LDQvdC40Y8g0LLQvdGD0YLRgNC40YjQutC+0LvRjNC90L7Qs9C+INGN0YLQsNC/0LAgJm5kYXNoOyDQstGLINGD0LLQuNC00LjRgtC1INGB0L/QuNGB0L7QuiDQstGB0LXRhSDQstGL0YjQtdC00YjQuNGFINCyINGB0LvQtdC00YPRjtGJ0LjQuSDRjdGC0LDQvyDQutC+0LzQsNC90LQg0LHRg9C00LXRgiDQtNC+0YHRgtGD0L/QtdC9LjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QldGB0LvQuCDRjyDQt9Cw0LrQvtC90YfQuNC7INGI0LrQvtC70YMg0LIg0Y3RgtC+0Lwg0LPQvtC00YMsINGPINC80L7Qs9GDINGD0YfQsNGB0YLQstC+0LLQsNGC0Ywg0LIg0YLRg9GA0L3QuNGA0LU/PC9zcGFuPjxiciAvPtCS0YvQv9GD0YHQutC90LjQutC4IDExLdGFINC60LvQsNGB0YHQvtCyINGB0YDQtdC00L3QuNGFINGI0LrQvtC7INC80L7Qs9GD0YIg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjCDQsiDQotGD0YDQvdC40YDQtSwg0L/RgNC4INGD0YHQu9C+0LLQuNC4LCDRh9GC0L4g0L3QviDQvNC+0LzQtdC90YIg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQuNC8INC90LUg0LHQvtC70LXQtSAxOC3RgtC4INC70LXRgi4g0J/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LLRiyDQstGL0LHQuNGA0LDQtdGC0LUg0YHQstC+0Y4g0YjQutC+0LvRgyDQuCDQstGL0LHQuNGA0LDQtdGC0LUgMTEt0YvQuSDQutC70LDRgdGBLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtC+0LzQsNC90LTRiyDRiNC60L7QuyDQuNC3INCa0LDQt9Cw0YXRgdGC0LDQvdCwINGC0L7QttC1INC80L7Qs9GD0YIg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjD88L3NwYW4+PGJyIC8+0JIg0YLQtdC60YPRidC10Lwg0KLRg9GA0L3QuNGA0LUg0LzQvtCz0YPRgiDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMINGC0L7Qu9GM0LrQviDRg9GH0LXQvdC40LrQuCDQuCDQstGL0L/Rg9GB0LrQvdC40LrQuCDRiNC60L7QuyDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40Lg8YnIgLz7QodC70LXQtNC40YLQtSDQt9CwINCw0L3QvtC90YHQsNC80LggJm5kYXNoOyDQvNGLINC/0LvQsNC90LjRgNGD0LXQvCDQv9GA0L7QstC+0LTQuNGC0Ywg0YLQsNC60LbQtSDQuCDQvNC10LbQtNGD0L3QsNGA0L7QtNC90YvQtSDRgtGD0YDQvdC40YDRiy48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JzQvtCz0YPRgiDQu9C4INGD0YfQsNGB0YLQstC+0LLQsNGC0Ywg0LIg0KLRg9GA0L3QuNGA0LUg0YPRh9Cw0YnQuNC10YHRjyDQutC+0LvQu9C10LTQttC10Lkg0Lgg0YLQtdGF0L3QuNC60YPQvNC+0LI/PC9zcGFuPjxiciAvPtCj0YfQsNGJ0LjQtdGB0Y8g0YHRgNC10LTQvdC40YUg0YHQv9C10YbQuNCw0LvRjNC90YvRhSDRg9GH0LXQsdC90YvRhSDQt9Cw0LLQtdC00LXQvdC40Lkg0LzQvtCz0YPRgiDQv9GA0LjQvdC40LzQsNGC0Ywg0YPRh9Cw0YHRgtC40LUg0LIg0KLRg9GA0L3QuNGA0LUsINC/0YDQuCDRg9GB0LvQvtCy0LjQuCDRh9GC0L4g0L3QviDQvNC+0LzQtdC90YIg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQuNC8INC90LUg0LHQvtC70LXQtSAxOC3RgtC4INC70LXRgi48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JzQvtC20L3QviDQu9C4INC80L3QtSDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMINCyINCi0YPRgNC90LjRgNC1LCDQtdGB0LvQuCDQvNC90LUg0YPQttC1INC40YHQv9C+0LvQvdC40LvQvtGB0YwgMTk/PC9zcGFuPjxiciAvPtCaINGB0L7QttCw0LvQtdC90LjRjiwg0LzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INCy0L7Qt9GA0LDRgdGCINC40LPRgNC+0LrQvtCyINC00LvRjyDRg9GH0LDRgdGC0LjRjyDQsiDQtNCw0L3QvdC+0Lwg0KLRg9GA0L3QuNGA0LUmbmJzcDsgLSAxOCDQu9C10YIuPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0L7Qs9C00LAg0L/RgNC+0YXQvtC00LjRgiDQotGD0YDQvdC40YA/PC9zcGFuPjxiciAvPtCa0LLQsNC70LjRhNC40LrQsNGG0LjQuCDQtNC+IDE4INCw0LLQs9GD0YHRgtCwLiDQpNC40L3QsNC7Jm5ic3A7INC/0L7RgdC70LUgMjYg0LDQstCz0YPRgdGC0LAuPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0LDQuiDQsdGD0LTRg9GCINC90LDQt9C90LDRh9Cw0YLRjNGB0Y8g0LzQsNGC0YfQuD8g0JrQsNC6INC80Ysg0YPQt9C90LDQtdC8LCDRh9GC0L4g0LfQsNCy0YLRgNCwINC80Ysg0LjQs9GA0LDQtdC8LCDQsdGD0LTQtdGCINC70Lgg0LrQsNC60L7QtSDQvdC40LHRg9C00Ywg0L7Qv9C+0LLQtdGJ0LXQvdC40LU/PC9zcGFuPjxiciAvPtCd0LDQt9C90LDRh9C10L3QuNC1INC80LDRgtGH0LXQuSDQvtC/0YDQtdC00LXQu9GP0LXRgtGB0Y8mbmJzcDsg0YLRg9GA0L3QuNGA0L3QvtC5INC/0LvQsNGC0YTQvtGA0LzQvtC5LiDQntC/0L7QstC10YnQtdC90LjQtSDQviDQvdCw0LfQvdCw0YfQtdC90LjQuCDQvNCw0YLRh9CwINCx0YPQtNC10YIg0L/RgNC40YXQvtC00LjRgtGMINC90LAg0Y3Qu9C10LrRgtGA0L7QvdC90YPRjiDQv9C+0YfRgtGDLCDRg9C60LDQt9Cw0L3QvdGD0Y4g0L/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LfQsCZuYnNwOyAyNCDRh9Cw0YHQsCDQtNC+INC90LDRh9Cw0LvQsCDQvNCw0YLRh9CwLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7Qp9GC0L4g0L/RgNC+0LjQt9C+0LnQtNC10YIsINC10YHQu9C4INC90LAg0LLQvdGD0YLRgNC40YjQutC+0LvRjNC90L7QvCDRjdGC0LDQv9C1INCi0YPRgNC90LjRgNCwINGDINC90LDRgSDRgdC+0L/QtdGA0L3QuNC60L7QsiDQvdC1INCx0YPQtNC10YI/PC9zcGFuPjxiciAvPtCt0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0LLQsNGI0LAg0LrQvtC80LDQvdC00LAg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YHRgtCw0L3QtdGCINCn0LXQvNC/0LjQvtC90L7QvCDRiNC60L7Qu9GLLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtCw0LrQvtC5INC/0YDQuNC30L7QstC+0Lkg0YTQvtC90LQg0KLRg9GA0L3QuNGA0LA/PC9zcGFuPjxiciAvPtCU0LXQvdC10LbQvdGL0Lkg0L/RgNC40LfQvtCy0L7QuSDRhNC+0L3QtCDQotGD0YDQvdC40YDQsCDQvdC1INC/0YDQtdC00YPRgdC80L7RgtGA0LXQvS48YnIgLz7Qk9C70LDQstC90YvQuSDQv9GA0LjQtyDQotGD0YDQvdC40YDQsCAmbmRhc2g7INC40LPRgNC+0LLQvtC5INC90L7Rg9GC0LHRg9C6LiDQmtGA0L7QvNC1INGN0YLQvtCz0L4g0LHRg9C00YPRgiDQv9C+0L7RidGA0LjRgtC10LvRjNC90YvQtSDQv9GA0LjQt9GLLjwvbGk+XHJcbiAgICAgICAgPC9vbD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbGF5b3V0OiAnZGVmYXVsdCcsXHJcblxyXG4gICAgICAgIG1ldGFJbmZvICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6ICfQp9Cw0YHRgtC+INC30LDQtNCw0LLQsNC10LzRi9C1INCy0L7Qv9GA0L7RgdGLJyB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29tcHV0ZWQ6e1xyXG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiAnbGFuZy9sb2NhbGUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2ZhcS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWRlY29yYXRlZC1oLTJcIiB9LCBbXG4gICAgICAgIF92bS5fdihcItCn0LDRgdGC0L4g0LfQsNC00LDQstCw0LXQvNGL0LUg0LLQvtC/0YDQvtGB0YtcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwib2xcIiwgW1xuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQsNC6INC90LDQudGC0Lgg0LrQvtC80LDQvdC00YMg0YHQstC+0LXQuSDRiNC60L7Qu9GLP1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwi0J/QtdGA0LXQudC00LjRgtC1INC/0L4g0YHRgdGL0LvQutC1IFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8veW91dGhsZWFndWUucnUvdGVhbXNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcImh0dHBzOi8veW91dGhsZWFndWUucnUvdGVhbXNcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIg0L3QsCDRgdC/0LjRgdC+0Log0LrQvtC80LDQvdC0LiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCV0YHQu9C4INCyINGB0L/QuNGB0LrQtSDQvdC10YIg0L3QuCDQvtC00L3QvtC5INC60L7QvNCw0L3QtNGLIOKAkyDRgtC+0LPQtNCwINGB0L7Qt9C00LDQudGC0LUg0LIg0LvQuNGH0L3QvtC8INC60LDQsdC40L3QtdGC0LUg0L3QvtCy0YPRjiDQutC+0LzQsNC90LTRgy5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtCw0Log0YHQvtC30LTQsNGC0Ywg0YHQstC+0Y4g0LrQvtC80LDQvdC00YM/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCLQlNC70Y8g0YHQvtC30LTQsNC90LjRjyDQutC+0LzQsNC90LTRiyDQvdGD0LbQvdC+INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L3JlZ2lzdGVyLCBcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcImh0dHBzOi8veW91dGhsZWFndWUucnUvcmVnaXN0ZXIsIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIsKg0LLRi9Cx0YDQsNGC0Ywg0L3QsNGB0LXQu9C10L3QvdGL0Lkg0L/Rg9C90LrRgiwg0YjQutC+0LvRgyDQuCDQutC70LDRgdGBLiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCf0L7RgdC70LUg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQv9C10YDQtdC50LTQuNGC0LUg0LIg0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCIC0g0YLQsNC8INC10YHRgtGMINC80LXQvdGOINGB0L7Qt9C00LDQvdC40Y8g0LrQvtC80LDQvdC00YsuXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcItCc0L7QttC90L4g0LvQuCDRgdC+0LHRgNCw0YLRjCDQuNCz0YDQvtC60L7QsiDQuNC3INGA0LDQt9C90YvRhSDRiNC60L7QuyDQuCDRgdC00LXQu9Cw0YLRjCDQvtC00L3RgyDQutC+0LzQsNC90LTRgz9cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCLQn9GA0LDQstC40LvQsNC80Lgg0YLRg9GA0L3QuNGA0LAg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC90L4sINGH0YLQviDQstGLINGB0L7Qt9C00LDQtdGC0LUg0LrQvtC80LDQvdC00YMg0LjQtyDRg9GH0LXQvdC40LrQvtCyINGC0L7Qu9GM0LrQviDRgdCy0L7QtdC5INGI0LrQvtC70Ysg0Lgg0YHQvtGA0LXQstC90YPQtdGC0LXRgdGMINGBINC60L7QvNCw0L3QtNCw0LzQuCDQtNGA0YPQs9C40YUg0YjQutC+0LsuXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQsNC6INC/0YDQuNCz0LvQsNGB0LjRgtGMINC40LPRgNC+0LrQvtCyINCyINC60L7QvNCw0L3QtNGDP1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCLQktGLINC80L7QttC10YLQtSDRgNCw0LfQvNC10YHRgtC40YLRjCDQv9GA0LjQs9C70LDRiNC10L3QuNC1INCyINC60L7QvNCw0L3QtNGDINC90LAg0YHRgtC10L3QtSDQktCaINC40LvQuCDRgdC+0LHRgNCw0YLRjCDQuNCz0YDQvtC60L7QsiDQsiDQutC+0LzQsNC90LTRgyDRh9C10YDQtdC3IFN0ZWFtQ29tbXVuaXR5LiDQn9GA0LjQs9C70LDRiNC10L3QvdGL0Lwg0LjQs9GA0L7QutCw0Lwg0LHRg9C00LXRgiDQvdC10L7QsdGF0L7QtNC40LzQviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8g0L3QsCDRgdCw0LnRgtC1IFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8veW91dGhsZWFndWUucnUvXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiAsINCy0YvQsdGA0LDQsiDQvtC00L3RgyDRiNC60L7Qu9GDINGBINCy0LDQvNC4LiDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LIg0YHQv9C40YHQutC1wqAgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9wbGF5ZXJzXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L3BsYXllcnNcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAnwqAg0LLRi9Cx0YDQsNGC0Ywg0LPQsNC70L7Rh9C60L7QuSDQuNCz0YDQvtC60L7QsiDQuCDQvdCw0LbQsNGC0Ywg0L3QsCDQutC90L7Qv9C60YMgXCLQntGC0L/RgNCw0LLQuNGC0Ywg0L/RgNC40LPQu9Cw0YjQtdC90LjQtSDQsiDQutC+0LzQsNC90LTRg1wiLidcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQsNC6INGPINGD0LfQvdCw0Y4sINGH0YLQviDQvNC10L3RjyDQv9GA0LjQs9C70LDRgdC40LvQuCDQsiDQutC+0LzQsNC90LTRgz9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcItCY0LPRgNC+0LrQvtCyINCyINC60L7QvNCw0L3QtNGDINC/0YDQuNCz0LvQsNGI0LDQtdGCINC60LDQv9C40YLQsNC9INC90LAg0YHRgtGA0LDQvdC40YbQtcKgIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8veW91dGhsZWFndWUucnUvcGxheWVyc1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9wbGF5ZXJzXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCIuINCS0Ysg0L/QvtC70YPRh9C40YLQtSDRg9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INC/0YDQuNCz0LvQsNGI0LXQvdC40Lgg0L/QviDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0LUsINC60L7RgtC+0YDRg9GOINCy0Ysg0YPQutCw0LfQsNC70Lgg0L/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40LguINCSINC80LXQvdGOINC60L7QvNCw0L3QtNGLINC10YHRgtGMINGB0L/QuNGB0L7QuiDQv9GA0LjQs9C70LDRiNC10L3QuNC5LCDQstGLINC00L7Qu9C20L3RiyDQv9C+0LTRgtCy0LXRgNC00LjRgtGMLCDQtdGB0LvQuCDQstCw0YHCoCDQv9GA0LjQs9C70LDRgdC40LvQuC5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQodC60L7Qu9GM0LrQviDQuNCz0YDQvtC60L7QsiDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LIg0LrQvtC80LDQvdC00LU/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCSINC60L7QvNCw0L3QtNC1INC80L7QttC10YIg0LHRi9GC0Ywg0YLQvtC70YzQutC+IDUg0LjQs9GA0L7QutC+0LIuINCX0LDQv9Cw0YHQvdGL0YUg0LjQs9GA0L7QutC+0LIg0Lgg0LfQsNC80LXQvSDQvdC1INC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC+LlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCa0LDQuiDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8g0YEg4oCc0LPQvtGC0L7QstC+0LnigJ0g0LrQvtC80LDQvdC00L7QuT9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICfQmtCw0LbQtNC+0LzRgyDQuNC3INC40LPRgNC+0LrQvtCyIFwi0LPQvtGC0L7QstC+0Lkg0LrQvtC80LDQvdC00YtcIiDQvdC10L7QsdGF0L7QtNC40LzQviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8g0L3QsCDRgdCw0LnRgtC1wqAgJ1xuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIi4g0JfQsNGC0LXQvCDQmtCw0L/QuNGC0LDQvSDQutC+0LzQsNC90LTRiyDQt9Cw0LLQvtC00LjRgiDQvdCwINGB0LDQudGC0LUg0LrQvtC80LDQvdC00YMg0YEg0LXRkSDQvdCw0LfQstCw0L3QuNC10Lwg0Lgg0YDQsNGB0YHRi9C70LDQtdGCINCy0YHQtdC8INC40LPRgNC+0LrQsNC8INC/0YDQuNCz0LvQsNGI0LXQvdC40Y8uINCa0LDQuiDRgtC+0LvRjNC60L4g0LLRgdC1INC40LPRgNC+0LrQuCDQuNGFINC/0YDQuNC90LjQvNCw0Y7RgiAtINC60L7QvNCw0L3QtNCwINGB0YfQuNGC0LDQtdGC0YHRjyDRgdGE0L7RgNC80LjRgNC+0LLQsNC90L3QvtC5LiDQktGB0LXQvCDQuNCz0YDQvtC60LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQstC90LXRgdGC0LggU3RlYW1JRCDQuCDQsNC60LrQsNGD0L3RgtGLINCS0JrQvtC90YLQsNC60YLQtSwg0LTQu9GPINC/0YDQvtGF0L7QttC00LXQvdC40Y8g0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQutC+0LzQsNC90LTRiyDQvdCwINCi0YPRgNC90LjRgC5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtCw0Log0L/RgNC+0LLQtdGA0LjRgtGMINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvdCwINC70Lgg0LzQvtGPINC60L7QvNCw0L3QtNCwINC90LAg0KLRg9GA0L3QuNGAP1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCLQldGB0LvQuCDQstGB0LUg0L/Rj9GC0Ywg0LjQs9GA0L7QutC+0LIg0L7RgtCy0LXRgtC40LvQuCDQvdCwINC/0YDQuNCz0LvQsNGI0LXQvdC40Y8g0LLRgdGC0YPQv9C40YLRjCDQsiDQutC+0LzQsNC90LTRgy4g0JXRgdC70Lgg0YMg0LLRgdC10YUgNS3RgtC4INC40LPRgNC+0LrQvtCyINCy0L3QtdGB0LXQvdGLINGA0LXQsNC70YzQvdGL0LUg0YTQsNC80LjQu9C40Lgg0Lgg0LjQvNC10L3QsCwg0LTQvtCx0LDQstC70LXQvdGLIFN0ZWFtSUQg0Lgg0LDQutC60LDRg9C90YLRiyDQktCaIC0g0YLQsNC60LDRjyDQutC+0LzQsNC90LTQsCDRgdGH0LjRgtCw0LXRgtGB0Y8g0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC90L3QvtC5INC90LAg0KLRg9GA0L3QuNGALlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCa0LDQuiDQvNC+0LbQvdC+INC/0L7RgdC80L7RgtGA0LXRgtGMINC60LDQutC40LUg0LXRidGRINGD0YfQsNGB0YLQstGD0Y7RgiDQutC+0LzQsNC90LTRiz9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0J/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70YHRjyDQstC90YPRgtGA0LjRiNC60L7Qu9GM0L3Ri9C5INGN0YLQsNC/INCy0LDQvCDQtNC70Y8g0L/RgNC+0YHQvNC+0YLRgNCwwqAg0LTQvtGB0YLRg9C/0L3RiyDRgtC+0LvRjNC60L4g0LrQvtC80LDQvdC00YssINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvdC90YvQtSDQsiDQstCw0YjQtdC5INGI0LrQvtC70LUuINCf0L7RgdC70LUg0L7QutC+0L3Rh9Cw0L3QuNGPINCy0L3Rg9GC0YDQuNGI0LrQvtC70YzQvdC+0LPQviDRjdGC0LDQv9CwIOKAkyDQstGLINGD0LLQuNC00LjRgtC1INGB0L/QuNGB0L7QuiDQstGB0LXRhSDQstGL0YjQtdC00YjQuNGFINCyINGB0LvQtdC00YPRjtGJ0LjQuSDRjdGC0LDQvyDQutC+0LzQsNC90LQg0LHRg9C00LXRgiDQtNC+0YHRgtGD0L/QtdC9LlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCLQldGB0LvQuCDRjyDQt9Cw0LrQvtC90YfQuNC7INGI0LrQvtC70YMg0LIg0Y3RgtC+0Lwg0LPQvtC00YMsINGPINC80L7Qs9GDINGD0YfQsNGB0YLQstC+0LLQsNGC0Ywg0LIg0YLRg9GA0L3QuNGA0LU/XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0JLRi9C/0YPRgdC60L3QuNC60LggMTEt0YUg0LrQu9Cw0YHRgdC+0LIg0YHRgNC10LTQvdC40YUg0YjQutC+0Lsg0LzQvtCz0YPRgiDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMINCyINCi0YPRgNC90LjRgNC1LCDQv9GA0Lgg0YPRgdC70L7QstC40LgsINGH0YLQviDQvdC+INC80L7QvNC10L3RgiDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC40Lwg0L3QtSDQsdC+0LvQtdC1IDE4LdGC0Lgg0LvQtdGCLiDQn9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQstGLINCy0YvQsdC40YDQsNC10YLQtSDRgdCy0L7RjiDRiNC60L7Qu9GDINC4INCy0YvQsdC40YDQsNC10YLQtSAxMS3Ri9C5INC60LvQsNGB0YEuXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQvtC80LDQvdC00Ysg0YjQutC+0Lsg0LjQtyDQmtCw0LfQsNGF0YHRgtCw0L3QsCDRgtC+0LbQtSDQvNC+0LPRg9GCINGD0YfQsNGB0YLQstC+0LLQsNGC0Yw/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCSINGC0LXQutGD0YnQtdC8INCi0YPRgNC90LjRgNC1INC80L7Qs9GD0YIg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjCDRgtC+0LvRjNC60L4g0YPRh9C10L3QuNC60Lgg0Lgg0LLRi9C/0YPRgdC60L3QuNC60Lgg0YjQutC+0Lsg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCLQodC70LXQtNC40YLQtSDQt9CwINCw0L3QvtC90YHQsNC80Lgg4oCTINC80Ysg0L/Qu9Cw0L3QuNGA0YPQtdC8INC/0YDQvtCy0L7QtNC40YLRjCDRgtCw0LrQttC1INC4INC80LXQttC00YPQvdCw0YDQvtC00L3Ri9C1INGC0YPRgNC90LjRgNGLLlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCLQnNC+0LPRg9GCINC70Lgg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjCDQsiDQotGD0YDQvdC40YDQtSDRg9GH0LDRidC40LXRgdGPINC60L7Qu9C70LXQtNC20LXQuSDQuCDRgtC10YXQvdC40LrRg9C80L7Qsj9cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCLQo9GH0LDRidC40LXRgdGPINGB0YDQtdC00L3QuNGFINGB0L/QtdGG0LjQsNC70YzQvdGL0YUg0YPRh9C10LHQvdGL0YUg0LfQsNCy0LXQtNC10L3QuNC5INC80L7Qs9GD0YIg0L/RgNC40L3QuNC80LDRgtGMINGD0YfQsNGB0YLQuNC1INCyINCi0YPRgNC90LjRgNC1LCDQv9GA0Lgg0YPRgdC70L7QstC40Lgg0YfRgtC+INC90L4g0LzQvtC80LXQvdGCINGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LjQvCDQvdC1INCx0L7Qu9C10LUgMTgt0YLQuCDQu9C10YIuXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcItCc0L7QttC90L4g0LvQuCDQvNC90LUg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjCDQsiDQotGD0YDQvdC40YDQtSwg0LXRgdC70Lgg0LzQvdC1INGD0LbQtSDQuNGB0L/QvtC70L3QuNC70L7RgdGMIDE5P1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCaINGB0L7QttCw0LvQtdC90LjRjiwg0LzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INCy0L7Qt9GA0LDRgdGCINC40LPRgNC+0LrQvtCyINC00LvRjyDRg9GH0LDRgdGC0LjRjyDQsiDQtNCw0L3QvdC+0Lwg0KLRg9GA0L3QuNGA0LXCoCAtIDE4INC70LXRgi5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtC+0LPQtNCwINC/0YDQvtGF0L7QtNC40YIg0KLRg9GA0L3QuNGAP1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwi0JrQstCw0LvQuNGE0LjQutCw0YbQuNC4INC00L4gMTgg0LDQstCz0YPRgdGC0LAuINCk0LjQvdCw0LvCoCDQv9C+0YHQu9C1IDI2INCw0LLQs9GD0YHRgtCwLlwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCLQmtCw0Log0LHRg9C00YPRgiDQvdCw0LfQvdCw0YfQsNGC0YzRgdGPINC80LDRgtGH0Lg/INCa0LDQuiDQvNGLINGD0LfQvdCw0LXQvCwg0YfRgtC+INC30LDQstGC0YDQsCDQvNGLINC40LPRgNCw0LXQvCwg0LHRg9C00LXRgiDQu9C4INC60LDQutC+0LUg0L3QuNCx0YPQtNGMINC+0L/QvtCy0LXRidC10L3QuNC1P1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCd0LDQt9C90LDRh9C10L3QuNC1INC80LDRgtGH0LXQuSDQvtC/0YDQtdC00LXQu9GP0LXRgtGB0Y/CoCDRgtGD0YDQvdC40YDQvdC+0Lkg0L/Qu9Cw0YLRhNC+0YDQvNC+0LkuINCe0L/QvtCy0LXRidC10L3QuNC1INC+INC90LDQt9C90LDRh9C10L3QuNC4INC80LDRgtGH0LAg0LHRg9C00LXRgiDQv9GA0LjRhdC+0LTQuNGC0Ywg0L3QsCDRjdC70LXQutGC0YDQvtC90L3Rg9GOINC/0L7Rh9GC0YMsINGD0LrQsNC30LDQvdC90YPRjiDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQt9CwwqAgMjQg0YfQsNGB0LAg0LTQviDQvdCw0YfQsNC70LAg0LzQsNGC0YfQsC5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwi0KfRgtC+INC/0YDQvtC40LfQvtC50LTQtdGCLCDQtdGB0LvQuCDQvdCwINCy0L3Rg9GC0YDQuNGI0LrQvtC70YzQvdC+0Lwg0Y3RgtCw0L/QtSDQotGD0YDQvdC40YDQsCDRgyDQvdCw0YEg0YHQvtC/0LXRgNC90LjQutC+0LIg0L3QtSDQsdGD0LTQtdGCP1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCt0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0LLQsNGI0LAg0LrQvtC80LDQvdC00LAg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YHRgtCw0L3QtdGCINCn0LXQvNC/0LjQvtC90L7QvCDRiNC60L7Qu9GLLlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCa0LDQutC+0Lkg0L/RgNC40LfQvtCy0L7QuSDRhNC+0L3QtCDQotGD0YDQvdC40YDQsD9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcItCU0LXQvdC10LbQvdGL0Lkg0L/RgNC40LfQvtCy0L7QuSDRhNC+0L3QtCDQotGD0YDQvdC40YDQsCDQvdC1INC/0YDQtdC00YPRgdC80L7RgtGA0LXQvS5cIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCT0LvQsNCy0L3Ri9C5INC/0YDQuNC3INCi0YPRgNC90LjRgNCwIOKAkyDQuNCz0YDQvtCy0L7QuSDQvdC+0YPRgtCx0YPQui4g0JrRgNC+0LzQtSDRjdGC0L7Qs9C+INCx0YPQtNGD0YIg0L/QvtC+0YnRgNC40YLQtdC70YzQvdGL0LUg0L/RgNC40LfRiy5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTA0YTM1MzA5XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDRhMzUzMDlcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2ZhcS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMDRhMzUzMDlcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2ZhcS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2MSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZhcS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mYXEudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNGEzNTMwOVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZhcS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2ZhcS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDRhMzUzMDlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNGEzNTMwOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2ZhcS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2MSJdLCJzb3VyY2VSb290IjoiIn0=