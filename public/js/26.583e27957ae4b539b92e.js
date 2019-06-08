webpackJsonp([26],{

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7556ca8f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/faq.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-7556ca8f", esExports)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7556ca8f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_faq_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7556ca8f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/faq.vue");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7556ca8f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_faq_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\faq.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7556ca8f", Component.options)
  } else {
    hotAPI.reload("data-v-7556ca8f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9mYXEudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZT85ZmM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBOzs7OztZQUdBOztrQ0FDQTt3QkFDQTtBQUVBOzs7QUFDQTtjQUVBO2dCQUdBO0FBSkE7QUFSQSxFOzs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0NBQWtDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsdUNBQXVDLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsNENBQTRDLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLGtDQUFrQyxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLHlDQUF5QyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMseUNBQXlDLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxrQ0FBa0MsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3RQQTtBQUFBO0FBQ0E7QUFDQTtBQUN3VztBQUNhO0FBQ3JYO0FBQzhLO0FBQzlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8yNi41ODNlMjc5NTdhZTRiNTM5YjkyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibmstZGVjb3JhdGVkLWgtMlwiPtCn0LDRgdGC0L4g0LfQsNC00LDQstCw0LXQvNGL0LUg0LLQvtC/0YDQvtGB0Ys8L2gzPlxyXG4gICAgICAgIDxvbD5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0LDQuiDQvdCw0LnRgtC4INC60L7QvNCw0L3QtNGDINGB0LLQvtC10Lkg0YjQutC+0LvRiz88L3NwYW4+PGJyIC8+0J/QtdGA0LXQudC00LjRgtC1INC/0L4g0YHRgdGL0LvQutC1IDxhIGhyZWY9XCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L3RlYW1zXCI+aHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS90ZWFtczwvYT4g0L3QsCDRgdC/0LjRgdC+0Log0LrQvtC80LDQvdC0LiA8YnIgLz7QldGB0LvQuCDQsiDRgdC/0LjRgdC60LUg0L3QtdGCINC90Lgg0L7QtNC90L7QuSDQutC+0LzQsNC90LTRiyAmbmRhc2g7INGC0L7Qs9C00LAg0YHQvtC30LTQsNC50YLQtSDQsiDQu9C40YfQvdC+0Lwg0LrQsNCx0LjQvdC10YLQtSDQvdC+0LLRg9GOINC60L7QvNCw0L3QtNGDLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtCw0Log0YHQvtC30LTQsNGC0Ywg0YHQstC+0Y4g0LrQvtC80LDQvdC00YM/PC9zcGFuPjxiciAvPtCU0LvRjyDRgdC+0LfQtNCw0L3QuNGPINC60L7QvNCw0L3QtNGLINC90YPQttC90L4g0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPIDxhIGhyZWY9XCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L3JlZ2lzdGVyLCBcIj5odHRwczovL3lvdXRobGVhZ3VlLnJ1L3JlZ2lzdGVyLCA8L2E+Jm5ic3A70LLRi9Cx0YDQsNGC0Ywg0L3QsNGB0LXQu9C10L3QvdGL0Lkg0L/Rg9C90LrRgiwg0YjQutC+0LvRgyDQuCDQutC70LDRgdGBLiA8YnIgLz7Qn9C+0YHQu9C1INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0L/QtdGA0LXQudC00LjRgtC1INCyINCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgiAtINGC0LDQvCDQtdGB0YLRjCDQvNC10L3RjiDRgdC+0LfQtNCw0L3QuNGPINC60L7QvNCw0L3QtNGLLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QnNC+0LbQvdC+INC70Lgg0YHQvtCx0YDQsNGC0Ywg0LjQs9GA0L7QutC+0LIg0LjQtyDRgNCw0LfQvdGL0YUg0YjQutC+0Lsg0Lgg0YHQtNC10LvQsNGC0Ywg0L7QtNC90YMg0LrQvtC80LDQvdC00YM/PC9zcGFuPjxiciAvPtCf0YDQsNCy0LjQu9Cw0LzQuCDRgtGD0YDQvdC40YDQsCDQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3Qviwg0YfRgtC+INCy0Ysg0YHQvtC30LTQsNC10YLQtSDQutC+0LzQsNC90LTRgyDQuNC3INGD0YfQtdC90LjQutC+0LIg0YLQvtC70YzQutC+INGB0LLQvtC10Lkg0YjQutC+0LvRiyDQuCDRgdC+0YDQtdCy0L3Rg9C10YLQtdGB0Ywg0YEg0LrQvtC80LDQvdC00LDQvNC4INC00YDRg9Cz0LjRhSDRiNC60L7Quy48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INC/0YDQuNCz0LvQsNGB0LjRgtGMINC40LPRgNC+0LrQvtCyINCyINC60L7QvNCw0L3QtNGDPzwvc3Bhbj48YnIgLz7QktGLINC80L7QttC10YLQtSDRgNCw0LfQvNC10YHRgtC40YLRjCDQv9GA0LjQs9C70LDRiNC10L3QuNC1INCyINC60L7QvNCw0L3QtNGDINC90LAg0YHRgtC10L3QtSDQktCaINC40LvQuCDRgdC+0LHRgNCw0YLRjCDQuNCz0YDQvtC60L7QsiDQsiDQutC+0LzQsNC90LTRgyDRh9C10YDQtdC3IFN0ZWFtQ29tbXVuaXR5LiDQn9GA0LjQs9C70LDRiNC10L3QvdGL0Lwg0LjQs9GA0L7QutCw0Lwg0LHRg9C00LXRgiDQvdC10L7QsdGF0L7QtNC40LzQviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8g0L3QsCDRgdCw0LnRgtC1IDxhIGhyZWY9XCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L1wiPmh0dHBzOi8veW91dGhsZWFndWUucnUvPC9hPiAsINCy0YvQsdGA0LDQsiDQvtC00L3RgyDRiNC60L7Qu9GDINGBINCy0LDQvNC4LiDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LIg0YHQv9C40YHQutC1Jm5ic3A7IDxhIGhyZWY9XCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L3BsYXllcnNcIj5odHRwczovL3lvdXRobGVhZ3VlLnJ1L3BsYXllcnM8L2E+Jm5ic3A7INCy0YvQsdGA0LDRgtGMINCz0LDQu9C+0YfQutC+0Lkg0LjQs9GA0L7QutC+0LIg0Lgg0L3QsNC20LDRgtGMINC90LAg0LrQvdC+0L/QutGDIFwi0J7RgtC/0YDQsNCy0LjRgtGMINC/0YDQuNCz0LvQsNGI0LXQvdC40LUg0LIg0LrQvtC80LDQvdC00YNcIi48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INGPINGD0LfQvdCw0Y4sINGH0YLQviDQvNC10L3RjyDQv9GA0LjQs9C70LDRgdC40LvQuCDQsiDQutC+0LzQsNC90LTRgz88L3NwYW4+PGJyIC8+0JjQs9GA0L7QutC+0LIg0LIg0LrQvtC80LDQvdC00YMg0L/RgNC40LPQu9Cw0YjQsNC10YIg0LrQsNC/0LjRgtCw0L0g0L3QsCDRgdGC0YDQsNC90LjRhtC1Jm5ic3A7IDxhIGhyZWY9XCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L3BsYXllcnNcIj5odHRwczovL3lvdXRobGVhZ3VlLnJ1L3BsYXllcnM8L2E+LiDQktGLINC/0L7Qu9GD0YfQuNGC0LUg0YPQstC10LTQvtC80LvQtdC90LjQtSDQviDQv9GA0LjQs9C70LDRiNC10L3QuNC4INC/0L4g0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtC1LCDQutC+0YLQvtGA0YPRjiDQstGLINGD0LrQsNC30LDQu9C4INC/0YDQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4LiDQkiDQvNC10L3RjiDQutC+0LzQsNC90LTRiyDQtdGB0YLRjCDRgdC/0LjRgdC+0Log0L/RgNC40LPQu9Cw0YjQtdC90LjQuSwg0LLRiyDQtNC+0LvQttC90Ysg0L/QvtC00YLQstC10YDQtNC40YLRjCwg0LXRgdC70Lgg0LLQsNGBJm5ic3A7INC/0YDQuNCz0LvQsNGB0LjQu9C4LjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QodC60L7Qu9GM0LrQviDQuNCz0YDQvtC60L7QsiDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LIg0LrQvtC80LDQvdC00LU/PC9zcGFuPjxiciAvPtCSINC60L7QvNCw0L3QtNC1INC80L7QttC10YIg0LHRi9GC0Ywg0YLQvtC70YzQutC+IDUg0LjQs9GA0L7QutC+0LIuINCX0LDQv9Cw0YHQvdGL0YUg0LjQs9GA0L7QutC+0LIg0Lgg0LfQsNC80LXQvSDQvdC1INC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC+LjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtCw0Log0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINGBICZsZHF1bzvQs9C+0YLQvtCy0L7QuSZyZHF1bzsg0LrQvtC80LDQvdC00L7QuT88L3NwYW4+PGJyIC8+0JrQsNC20LTQvtC80YMg0LjQtyDQuNCz0YDQvtC60L7QsiBcItCz0L7RgtC+0LLQvtC5INC60L7QvNCw0L3QtNGLXCIg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINC90LAg0YHQsNC50YLQtSZuYnNwOyA8YSBocmVmPVwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9cIj5odHRwczovL3lvdXRobGVhZ3VlLnJ1LzwvYT4uINCX0LDRgtC10Lwg0JrQsNC/0LjRgtCw0L0g0LrQvtC80LDQvdC00Ysg0LfQsNCy0L7QtNC40YIg0L3QsCDRgdCw0LnRgtC1INC60L7QvNCw0L3QtNGDINGBINC10ZEg0L3QsNC30LLQsNC90LjQtdC8INC4INGA0LDRgdGB0YvQu9Cw0LXRgiDQstGB0LXQvCDQuNCz0YDQvtC60LDQvCDQv9GA0LjQs9C70LDRiNC10L3QuNGPLiDQmtCw0Log0YLQvtC70YzQutC+INCy0YHQtSDQuNCz0YDQvtC60Lgg0LjRhSDQv9GA0LjQvdC40LzQsNGO0YIgLSDQutC+0LzQsNC90LTQsCDRgdGH0LjRgtCw0LXRgtGB0Y8g0YHRhNC+0YDQvNC40YDQvtCy0LDQvdC90L7QuS4g0JLRgdC10Lwg0LjQs9GA0L7QutCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LLQvdC10YHRgtC4IFN0ZWFtSUQg0Lgg0LDQutC60LDRg9C90YLRiyDQktCa0L7QvdGC0LDQutGC0LUsINC00LvRjyDQv9GA0L7RhdC+0LbQtNC10L3QuNGPINGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LrQvtC80LDQvdC00Ysg0L3QsCDQotGD0YDQvdC40YAuPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0LDQuiDQv9GA0L7QstC10YDQuNGC0Ywg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC90LAg0LvQuCDQvNC+0Y8g0LrQvtC80LDQvdC00LAg0L3QsCDQotGD0YDQvdC40YA/PC9zcGFuPjxiciAvPtCV0YHQu9C4INCy0YHQtSDQv9GP0YLRjCDQuNCz0YDQvtC60L7QsiDQvtGC0LLQtdGC0LjQu9C4INC90LAg0L/RgNC40LPQu9Cw0YjQtdC90LjRjyDQstGB0YLRg9C/0LjRgtGMINCyINC60L7QvNCw0L3QtNGDLiDQldGB0LvQuCDRgyDQstGB0LXRhSA1LdGC0Lgg0LjQs9GA0L7QutC+0LIg0LLQvdC10YHQtdC90Ysg0YDQtdCw0LvRjNC90YvQtSDRhNCw0LzQuNC70LjQuCDQuCDQuNC80LXQvdCwLCDQtNC+0LHQsNCy0LvQtdC90YsgU3RlYW1JRCDQuCDQsNC60LrQsNGD0L3RgtGLINCS0JogLSDRgtCw0LrQsNGPINC60L7QvNCw0L3QtNCwINGB0YfQuNGC0LDQtdGC0YHRjyDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L3QvdC+0Lkg0L3QsCDQotGD0YDQvdC40YAuPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0LDQuiDQvNC+0LbQvdC+INC/0L7RgdC80L7RgtGA0LXRgtGMINC60LDQutC40LUg0LXRidGRINGD0YfQsNGB0YLQstGD0Y7RgiDQutC+0LzQsNC90LTRiz88L3NwYW4+PGJyIC8+0J/QvtC60LAg0L3QtSDQt9Cw0LrQvtC90YfQuNC70YHRjyDQstC90YPRgtGA0LjRiNC60L7Qu9GM0L3Ri9C5INGN0YLQsNC/INCy0LDQvCDQtNC70Y8g0L/RgNC+0YHQvNC+0YLRgNCwJm5ic3A7INC00L7RgdGC0YPQv9C90Ysg0YLQvtC70YzQutC+INC60L7QvNCw0L3QtNGLLCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L3QvdGL0LUg0LIg0LLQsNGI0LXQuSDRiNC60L7Qu9C1LiDQn9C+0YHQu9C1INC+0LrQvtC90YfQsNC90LjRjyDQstC90YPRgtGA0LjRiNC60L7Qu9GM0L3QvtCz0L4g0Y3RgtCw0L/QsCAmbmRhc2g7INCy0Ysg0YPQstC40LTQuNGC0LUg0YHQv9C40YHQvtC6INCy0YHQtdGFINCy0YvRiNC10LTRiNC40YUg0LIg0YHQu9C10LTRg9GO0YnQuNC5INGN0YLQsNC/INC60L7QvNCw0L3QtCDQsdGD0LTQtdGCINC00L7RgdGC0YPQv9C10L0uPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCV0YHQu9C4INGPINC30LDQutC+0L3Rh9C40Lsg0YjQutC+0LvRgyDQsiDRjdGC0L7QvCDQs9C+0LTRgywg0Y8g0LzQvtCz0YMg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjCDQsiDRgtGD0YDQvdC40YDQtT88L3NwYW4+PGJyIC8+0JLRi9C/0YPRgdC60L3QuNC60LggMTEt0YUg0LrQu9Cw0YHRgdC+0LIg0YHRgNC10LTQvdC40YUg0YjQutC+0Lsg0LzQvtCz0YPRgiDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMINCyINCi0YPRgNC90LjRgNC1LCDQv9GA0Lgg0YPRgdC70L7QstC40LgsINGH0YLQviDQvdC+INC80L7QvNC10L3RgiDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC40Lwg0L3QtSDQsdC+0LvQtdC1IDE4LdGC0Lgg0LvQtdGCLiDQn9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQstGLINCy0YvQsdC40YDQsNC10YLQtSDRgdCy0L7RjiDRiNC60L7Qu9GDINC4INCy0YvQsdC40YDQsNC10YLQtSAxMS3Ri9C5INC60LvQsNGB0YEuPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0L7QvNCw0L3QtNGLINGI0LrQvtC7INC40Lcg0JrQsNC30LDRhdGB0YLQsNC90LAg0YLQvtC20LUg0LzQvtCz0YPRgiDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMPzwvc3Bhbj48YnIgLz7QkiDRgtC10LrRg9GJ0LXQvCDQotGD0YDQvdC40YDQtSDQvNC+0LPRg9GCINGD0YfQsNGB0YLQstC+0LLQsNGC0Ywg0YLQvtC70YzQutC+INGD0YfQtdC90LjQutC4INC4INCy0YvQv9GD0YHQutC90LjQutC4INGI0LrQvtC7INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuDxiciAvPtCh0LvQtdC00LjRgtC1INC30LAg0LDQvdC+0L3RgdCw0LzQuCAmbmRhc2g7INC80Ysg0L/Qu9Cw0L3QuNGA0YPQtdC8INC/0YDQvtCy0L7QtNC40YLRjCDRgtCw0LrQttC1INC4INC80LXQttC00YPQvdCw0YDQvtC00L3Ri9C1INGC0YPRgNC90LjRgNGLLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QnNC+0LPRg9GCINC70Lgg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjCDQsiDQotGD0YDQvdC40YDQtSDRg9GH0LDRidC40LXRgdGPINC60L7Qu9C70LXQtNC20LXQuSDQuCDRgtC10YXQvdC40LrRg9C80L7Qsj88L3NwYW4+PGJyIC8+0KPRh9Cw0YnQuNC10YHRjyDRgdGA0LXQtNC90LjRhSDRgdC/0LXRhtC40LDQu9GM0L3Ri9GFINGD0YfQtdCx0L3Ri9GFINC30LDQstC10LTQtdC90LjQuSDQvNC+0LPRg9GCINC/0YDQuNC90LjQvNCw0YLRjCDRg9GH0LDRgdGC0LjQtSDQsiDQotGD0YDQvdC40YDQtSwg0L/RgNC4INGD0YHQu9C+0LLQuNC4INGH0YLQviDQvdC+INC80L7QvNC10L3RgiDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC40Lwg0L3QtSDQsdC+0LvQtdC1IDE4LdGC0Lgg0LvQtdGCLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QnNC+0LbQvdC+INC70Lgg0LzQvdC1INGD0YfQsNGB0YLQstC+0LLQsNGC0Ywg0LIg0KLRg9GA0L3QuNGA0LUsINC10YHQu9C4INC80L3QtSDRg9C20LUg0LjRgdC/0L7Qu9C90LjQu9C+0YHRjCAxOT88L3NwYW4+PGJyIC8+0Jog0YHQvtC20LDQu9C10L3QuNGOLCDQvNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0LLQvtC30YDQsNGB0YIg0LjQs9GA0L7QutC+0LIg0LTQu9GPINGD0YfQsNGB0YLQuNGPINCyINC00LDQvdC90L7QvCDQotGD0YDQvdC40YDQtSZuYnNwOyAtIDE4INC70LXRgi48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQvtCz0LTQsCDQv9GA0L7RhdC+0LTQuNGCINCi0YPRgNC90LjRgD88L3NwYW4+PGJyIC8+0JrQstCw0LvQuNGE0LjQutCw0YbQuNC4INC00L4gMTgg0LDQstCz0YPRgdGC0LAuINCk0LjQvdCw0LsmbmJzcDsg0L/QvtGB0LvQtSAyNiDQsNCy0LPRg9GB0YLQsC48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INCx0YPQtNGD0YIg0L3QsNC30L3QsNGH0LDRgtGM0YHRjyDQvNCw0YLRh9C4PyDQmtCw0Log0LzRiyDRg9C30L3QsNC10LwsINGH0YLQviDQt9Cw0LLRgtGA0LAg0LzRiyDQuNCz0YDQsNC10LwsINCx0YPQtNC10YIg0LvQuCDQutCw0LrQvtC1INC90LjQsdGD0LTRjCDQvtC/0L7QstC10YnQtdC90LjQtT88L3NwYW4+PGJyIC8+0J3QsNC30L3QsNGH0LXQvdC40LUg0LzQsNGC0YfQtdC5INC+0L/RgNC10LTQtdC70Y/QtdGC0YHRjyZuYnNwOyDRgtGD0YDQvdC40YDQvdC+0Lkg0L/Qu9Cw0YLRhNC+0YDQvNC+0LkuINCe0L/QvtCy0LXRidC10L3QuNC1INC+INC90LDQt9C90LDRh9C10L3QuNC4INC80LDRgtGH0LAg0LHRg9C00LXRgiDQv9GA0LjRhdC+0LTQuNGC0Ywg0L3QsCDRjdC70LXQutGC0YDQvtC90L3Rg9GOINC/0L7Rh9GC0YMsINGD0LrQsNC30LDQvdC90YPRjiDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQt9CwJm5ic3A7IDI0INGH0LDRgdCwINC00L4g0L3QsNGH0LDQu9CwINC80LDRgtGH0LAuPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCn0YLQviDQv9GA0L7QuNC30L7QudC00LXRgiwg0LXRgdC70Lgg0L3QsCDQstC90YPRgtGA0LjRiNC60L7Qu9GM0L3QvtC8INGN0YLQsNC/0LUg0KLRg9GA0L3QuNGA0LAg0YMg0L3QsNGBINGB0L7Qv9C10YDQvdC40LrQvtCyINC90LUg0LHRg9C00LXRgj88L3NwYW4+PGJyIC8+0K3RgtC+INC+0LfQvdCw0YfQsNC10YIsINGH0YLQviDQstCw0YjQsCDQutC+0LzQsNC90LTQsCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgdGC0LDQvdC10YIg0KfQtdC80L/QuNC+0L3QvtC8INGI0LrQvtC70YsuPC9saT5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0LDQutC+0Lkg0L/RgNC40LfQvtCy0L7QuSDRhNC+0L3QtCDQotGD0YDQvdC40YDQsD88L3NwYW4+PGJyIC8+0JTQtdC90LXQttC90YvQuSDQv9GA0LjQt9C+0LLQvtC5INGE0L7QvdC0INCi0YPRgNC90LjRgNCwINC90LUg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC9LjxiciAvPtCT0LvQsNCy0L3Ri9C5INC/0YDQuNC3INCi0YPRgNC90LjRgNCwICZuZGFzaDsg0LjQs9GA0L7QstC+0Lkg0L3QvtGD0YLQsdGD0LouINCa0YDQvtC80LUg0Y3RgtC+0LPQviDQsdGD0LTRg9GCINC/0L7QvtGJ0YDQuNGC0LXQu9GM0L3Ri9C1INC/0YDQuNC30YsuPC9saT5cclxuICAgICAgICA8L29sPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBsYXlvdXQ6ICdkZWZhdWx0JyxcclxuXHJcbiAgICAgICAgbWV0YUluZm8gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB0aXRsZTogJ9Cn0LDRgdGC0L4g0LfQsNC00LDQstCw0LXQvNGL0LUg0LLQvtC/0YDQvtGB0YsnIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjb21wdXRlZDp7XHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZGVjb3JhdGVkLWgtMlwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwi0KfQsNGB0YLQviDQt9Cw0LTQsNCy0LDQtdC80YvQtSDQstC+0L/RgNC+0YHRi1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJvbFwiLCBbXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtCw0Log0L3QsNC50YLQuCDQutC+0LzQsNC90LTRgyDRgdCy0L7QtdC5INGI0LrQvtC70Ys/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCLQn9C10YDQtdC50LTQuNGC0LUg0L/QviDRgdGB0YvQu9C60LUgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS90ZWFtc1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS90ZWFtc1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiDQvdCwINGB0L/QuNGB0L7QuiDQutC+0LzQsNC90LQuIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0JXRgdC70Lgg0LIg0YHQv9C40YHQutC1INC90LXRgiDQvdC4INC+0LTQvdC+0Lkg0LrQvtC80LDQvdC00Ysg4oCTINGC0L7Qs9C00LAg0YHQvtC30LTQsNC50YLQtSDQsiDQu9C40YfQvdC+0Lwg0LrQsNCx0LjQvdC10YLQtSDQvdC+0LLRg9GOINC60L7QvNCw0L3QtNGDLlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCa0LDQuiDRgdC+0LfQtNCw0YLRjCDRgdCy0L7RjiDQutC+0LzQsNC90LTRgz9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcItCU0LvRjyDRgdC+0LfQtNCw0L3QuNGPINC60L7QvNCw0L3QtNGLINC90YPQttC90L4g0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8veW91dGhsZWFndWUucnUvcmVnaXN0ZXIsIFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9yZWdpc3RlciwgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiwqDQstGL0LHRgNCw0YLRjCDQvdCw0YHQtdC70LXQvdC90YvQuSDQv9GD0L3QutGCLCDRiNC60L7Qu9GDINC4INC60LvQsNGB0YEuIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0J/QvtGB0LvQtSDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC/0LXRgNC10LnQtNC40YLQtSDQsiDQm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YIgLSDRgtCw0Lwg0LXRgdGC0Ywg0LzQtdC90Y4g0YHQvtC30LTQsNC90LjRjyDQutC+0LzQsNC90LTRiy5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwi0JzQvtC20L3QviDQu9C4INGB0L7QsdGA0LDRgtGMINC40LPRgNC+0LrQvtCyINC40Lcg0YDQsNC30L3Ri9GFINGI0LrQvtC7INC4INGB0LTQtdC70LDRgtGMINC+0LTQvdGDINC60L7QvNCw0L3QtNGDP1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCf0YDQsNCy0LjQu9Cw0LzQuCDRgtGD0YDQvdC40YDQsCDQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3Qviwg0YfRgtC+INCy0Ysg0YHQvtC30LTQsNC10YLQtSDQutC+0LzQsNC90LTRgyDQuNC3INGD0YfQtdC90LjQutC+0LIg0YLQvtC70YzQutC+INGB0LLQvtC10Lkg0YjQutC+0LvRiyDQuCDRgdC+0YDQtdCy0L3Rg9C10YLQtdGB0Ywg0YEg0LrQvtC80LDQvdC00LDQvNC4INC00YDRg9Cz0LjRhSDRiNC60L7Quy5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtCw0Log0L/RgNC40LPQu9Cw0YHQuNGC0Ywg0LjQs9GA0L7QutC+0LIg0LIg0LrQvtC80LDQvdC00YM/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCS0Ysg0LzQvtC20LXRgtC1INGA0LDQt9C80LXRgdGC0LjRgtGMINC/0YDQuNCz0LvQsNGI0LXQvdC40LUg0LIg0LrQvtC80LDQvdC00YMg0L3QsCDRgdGC0LXQvdC1INCS0Jog0LjQu9C4INGB0L7QsdGA0LDRgtGMINC40LPRgNC+0LrQvtCyINCyINC60L7QvNCw0L3QtNGDINGH0LXRgNC10LcgU3RlYW1Db21tdW5pdHkuINCf0YDQuNCz0LvQsNGI0LXQvdC90YvQvCDQuNCz0YDQvtC60LDQvCDQsdGD0LTQtdGCINC90LXQvtCx0YXQvtC00LjQvNC+INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyDQvdCwINGB0LDQudGC0LUgXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9cIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcImh0dHBzOi8veW91dGhsZWFndWUucnUvXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiICwg0LLRi9Cx0YDQsNCyINC+0LTQvdGDINGI0LrQvtC70YMg0YEg0LLQsNC80LguINCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQsiDRgdC/0LjRgdC60LXCoCBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L3BsYXllcnNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcImh0dHBzOi8veW91dGhsZWFndWUucnUvcGxheWVyc1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICfCoCDQstGL0LHRgNCw0YLRjCDQs9Cw0LvQvtGH0LrQvtC5INC40LPRgNC+0LrQvtCyINC4INC90LDQttCw0YLRjCDQvdCwINC60L3QvtC/0LrRgyBcItCe0YLQv9GA0LDQstC40YLRjCDQv9GA0LjQs9C70LDRiNC10L3QuNC1INCyINC60L7QvNCw0L3QtNGDXCIuJ1xuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtCw0Log0Y8g0YPQt9C90LDRjiwg0YfRgtC+INC80LXQvdGPINC/0YDQuNCz0LvQsNGB0LjQu9C4INCyINC60L7QvNCw0L3QtNGDP1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwi0JjQs9GA0L7QutC+0LIg0LIg0LrQvtC80LDQvdC00YMg0L/RgNC40LPQu9Cw0YjQsNC10YIg0LrQsNC/0LjRgtCw0L0g0L3QsCDRgdGC0YDQsNC90LjRhtC1wqAgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly95b3V0aGxlYWd1ZS5ydS9wbGF5ZXJzXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L3BsYXllcnNcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIi4g0JLRiyDQv9C+0LvRg9GH0LjRgtC1INGD0LLQtdC00L7QvNC70LXQvdC40LUg0L4g0L/RgNC40LPQu9Cw0YjQtdC90LjQuCDQv9C+INGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLQtSwg0LrQvtGC0L7RgNGD0Y4g0LLRiyDRg9C60LDQt9Cw0LvQuCDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuC4g0JIg0LzQtdC90Y4g0LrQvtC80LDQvdC00Ysg0LXRgdGC0Ywg0YHQv9C40YHQvtC6INC/0YDQuNCz0LvQsNGI0LXQvdC40LksINCy0Ysg0LTQvtC70LbQvdGLINC/0L7QtNGC0LLQtdGA0LTQuNGC0YwsINC10YHQu9C4INCy0LDRgcKgINC/0YDQuNCz0LvQsNGB0LjQu9C4LlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCh0LrQvtC70YzQutC+INC40LPRgNC+0LrQvtCyINC00L7Qu9C20L3QviDQsdGL0YLRjCDQsiDQutC+0LzQsNC90LTQtT9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0JIg0LrQvtC80LDQvdC00LUg0LzQvtC20LXRgiDQsdGL0YLRjCDRgtC+0LvRjNC60L4gNSDQuNCz0YDQvtC60L7Qsi4g0JfQsNC/0LDRgdC90YvRhSDQuNCz0YDQvtC60L7QsiDQuCDQt9Cw0LzQtdC9INC90LUg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC90L4uXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQsNC6INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyDRgSDigJzQs9C+0YLQvtCy0L7QueKAnSDQutC+0LzQsNC90LTQvtC5P1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgJ9Ca0LDQttC00L7QvNGDINC40Lcg0LjQs9GA0L7QutC+0LIgXCLQs9C+0YLQvtCy0L7QuSDQutC+0LzQsNC90LTRi1wiINC90LXQvtCx0YXQvtC00LjQvNC+INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyDQvdCwINGB0LDQudGC0LXCoCAnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8veW91dGhsZWFndWUucnUvXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiLiDQl9Cw0YLQtdC8INCa0LDQv9C40YLQsNC9INC60L7QvNCw0L3QtNGLINC30LDQstC+0LTQuNGCINC90LAg0YHQsNC50YLQtSDQutC+0LzQsNC90LTRgyDRgSDQtdGRINC90LDQt9Cy0LDQvdC40LXQvCDQuCDRgNCw0YHRgdGL0LvQsNC10YIg0LLRgdC10Lwg0LjQs9GA0L7QutCw0Lwg0L/RgNC40LPQu9Cw0YjQtdC90LjRjy4g0JrQsNC6INGC0L7Qu9GM0LrQviDQstGB0LUg0LjQs9GA0L7QutC4INC40YUg0L/RgNC40L3QuNC80LDRjtGCIC0g0LrQvtC80LDQvdC00LAg0YHRh9C40YLQsNC10YLRgdGPINGB0YTQvtGA0LzQuNGA0L7QstCw0L3QvdC+0LkuINCS0YHQtdC8INC40LPRgNC+0LrQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INCy0L3QtdGB0YLQuCBTdGVhbUlEINC4INCw0LrQutCw0YPQvdGC0Ysg0JLQmtC+0L3RgtCw0LrRgtC1LCDQtNC70Y8g0L/RgNC+0YXQvtC20LTQtdC90LjRjyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC60L7QvNCw0L3QtNGLINC90LAg0KLRg9GA0L3QuNGALlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCa0LDQuiDQv9GA0L7QstC10YDQuNGC0Ywg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC90LAg0LvQuCDQvNC+0Y8g0LrQvtC80LDQvdC00LAg0L3QsCDQotGD0YDQvdC40YA/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCV0YHQu9C4INCy0YHQtSDQv9GP0YLRjCDQuNCz0YDQvtC60L7QsiDQvtGC0LLQtdGC0LjQu9C4INC90LAg0L/RgNC40LPQu9Cw0YjQtdC90LjRjyDQstGB0YLRg9C/0LjRgtGMINCyINC60L7QvNCw0L3QtNGDLiDQldGB0LvQuCDRgyDQstGB0LXRhSA1LdGC0Lgg0LjQs9GA0L7QutC+0LIg0LLQvdC10YHQtdC90Ysg0YDQtdCw0LvRjNC90YvQtSDRhNCw0LzQuNC70LjQuCDQuCDQuNC80LXQvdCwLCDQtNC+0LHQsNCy0LvQtdC90YsgU3RlYW1JRCDQuCDQsNC60LrQsNGD0L3RgtGLINCS0JogLSDRgtCw0LrQsNGPINC60L7QvNCw0L3QtNCwINGB0YfQuNGC0LDQtdGC0YHRjyDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L3QvdC+0Lkg0L3QsCDQotGD0YDQvdC40YAuXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQsNC6INC80L7QttC90L4g0L/QvtGB0LzQvtGC0YDQtdGC0Ywg0LrQsNC60LjQtSDQtdGJ0ZEg0YPRh9Cw0YHRgtCy0YPRjtGCINC60L7QvNCw0L3QtNGLP1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCLQn9C+0LrQsCDQvdC1INC30LDQutC+0L3Rh9C40LvRgdGPINCy0L3Rg9GC0YDQuNGI0LrQvtC70YzQvdGL0Lkg0Y3RgtCw0L8g0LLQsNC8INC00LvRjyDQv9GA0L7RgdC80L7RgtGA0LDCoCDQtNC+0YHRgtGD0L/QvdGLINGC0L7Qu9GM0LrQviDQutC+0LzQsNC90LTRiywg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC90L3Ri9C1INCyINCy0LDRiNC10Lkg0YjQutC+0LvQtS4g0J/QvtGB0LvQtSDQvtC60L7QvdGH0LDQvdC40Y8g0LLQvdGD0YLRgNC40YjQutC+0LvRjNC90L7Qs9C+INGN0YLQsNC/0LAg4oCTINCy0Ysg0YPQstC40LTQuNGC0LUg0YHQv9C40YHQvtC6INCy0YHQtdGFINCy0YvRiNC10LTRiNC40YUg0LIg0YHQu9C10LTRg9GO0YnQuNC5INGN0YLQsNC/INC60L7QvNCw0L3QtCDQsdGD0LTQtdGCINC00L7RgdGC0YPQv9C10L0uXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcItCV0YHQu9C4INGPINC30LDQutC+0L3Rh9C40Lsg0YjQutC+0LvRgyDQsiDRjdGC0L7QvCDQs9C+0LTRgywg0Y8g0LzQvtCz0YMg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjCDQsiDRgtGD0YDQvdC40YDQtT9cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCLQktGL0L/Rg9GB0LrQvdC40LrQuCAxMS3RhSDQutC70LDRgdGB0L7QsiDRgdGA0LXQtNC90LjRhSDRiNC60L7QuyDQvNC+0LPRg9GCINGD0YfQsNGB0YLQstC+0LLQsNGC0Ywg0LIg0KLRg9GA0L3QuNGA0LUsINC/0YDQuCDRg9GB0LvQvtCy0LjQuCwg0YfRgtC+INC90L4g0LzQvtC80LXQvdGCINGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0LjQvCDQvdC1INCx0L7Qu9C10LUgMTgt0YLQuCDQu9C10YIuINCf0YDQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INCy0Ysg0LLRi9Cx0LjRgNCw0LXRgtC1INGB0LLQvtGOINGI0LrQvtC70YMg0Lgg0LLRi9Cx0LjRgNCw0LXRgtC1IDExLdGL0Lkg0LrQu9Cw0YHRgS5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtC+0LzQsNC90LTRiyDRiNC60L7QuyDQuNC3INCa0LDQt9Cw0YXRgdGC0LDQvdCwINGC0L7QttC1INC80L7Qs9GD0YIg0YPRh9Cw0YHRgtCy0L7QstCw0YLRjD9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0JIg0YLQtdC60YPRidC10Lwg0KLRg9GA0L3QuNGA0LUg0LzQvtCz0YPRgiDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMINGC0L7Qu9GM0LrQviDRg9GH0LXQvdC40LrQuCDQuCDQstGL0L/Rg9GB0LrQvdC40LrQuCDRiNC60L7QuyDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCh0LvQtdC00LjRgtC1INC30LAg0LDQvdC+0L3RgdCw0LzQuCDigJMg0LzRiyDQv9C70LDQvdC40YDRg9C10Lwg0L/RgNC+0LLQvtC00LjRgtGMINGC0LDQutC20LUg0Lgg0LzQtdC20LTRg9C90LDRgNC+0LTQvdGL0LUg0YLRg9GA0L3QuNGA0YsuXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcItCc0L7Qs9GD0YIg0LvQuCDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMINCyINCi0YPRgNC90LjRgNC1INGD0YfQsNGJ0LjQtdGB0Y8g0LrQvtC70LvQtdC00LbQtdC5INC4INGC0LXRhdC90LjQutGD0LzQvtCyP1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcItCj0YfQsNGJ0LjQtdGB0Y8g0YHRgNC10LTQvdC40YUg0YHQv9C10YbQuNCw0LvRjNC90YvRhSDRg9GH0LXQsdC90YvRhSDQt9Cw0LLQtdC00LXQvdC40Lkg0LzQvtCz0YPRgiDQv9GA0LjQvdC40LzQsNGC0Ywg0YPRh9Cw0YHRgtC40LUg0LIg0KLRg9GA0L3QuNGA0LUsINC/0YDQuCDRg9GB0LvQvtCy0LjQuCDRh9GC0L4g0L3QviDQvNC+0LzQtdC90YIg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQuNC8INC90LUg0LHQvtC70LXQtSAxOC3RgtC4INC70LXRgi5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwi0JzQvtC20L3QviDQu9C4INC80L3QtSDRg9GH0LDRgdGC0LLQvtCy0LDRgtGMINCyINCi0YPRgNC90LjRgNC1LCDQtdGB0LvQuCDQvNC90LUg0YPQttC1INC40YHQv9C+0LvQvdC40LvQvtGB0YwgMTk/XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0Jog0YHQvtC20LDQu9C10L3QuNGOLCDQvNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0LLQvtC30YDQsNGB0YIg0LjQs9GA0L7QutC+0LIg0LTQu9GPINGD0YfQsNGB0YLQuNGPINCyINC00LDQvdC90L7QvCDQotGD0YDQvdC40YDQtcKgIC0gMTgg0LvQtdGCLlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCa0L7Qs9C00LAg0L/RgNC+0YXQvtC00LjRgiDQotGD0YDQvdC40YA/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCLQmtCy0LDQu9C40YTQuNC60LDRhtC40Lgg0LTQviAxOCDQsNCy0LPRg9GB0YLQsC4g0KTQuNC90LDQu8KgINC/0L7RgdC70LUgMjYg0LDQstCz0YPRgdGC0LAuXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcItCa0LDQuiDQsdGD0LTRg9GCINC90LDQt9C90LDRh9Cw0YLRjNGB0Y8g0LzQsNGC0YfQuD8g0JrQsNC6INC80Ysg0YPQt9C90LDQtdC8LCDRh9GC0L4g0LfQsNCy0YLRgNCwINC80Ysg0LjQs9GA0LDQtdC8LCDQsdGD0LTQtdGCINC70Lgg0LrQsNC60L7QtSDQvdC40LHRg9C00Ywg0L7Qv9C+0LLQtdGJ0LXQvdC40LU/XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0J3QsNC30L3QsNGH0LXQvdC40LUg0LzQsNGC0YfQtdC5INC+0L/RgNC10LTQtdC70Y/QtdGC0YHRj8KgINGC0YPRgNC90LjRgNC90L7QuSDQv9C70LDRgtGE0L7RgNC80L7QuS4g0J7Qv9C+0LLQtdGJ0LXQvdC40LUg0L4g0L3QsNC30L3QsNGH0LXQvdC40Lgg0LzQsNGC0YfQsCDQsdGD0LTQtdGCINC/0YDQuNGF0L7QtNC40YLRjCDQvdCwINGN0LvQtdC60YLRgNC+0L3QvdGD0Y4g0L/QvtGH0YLRgywg0YPQutCw0LfQsNC90L3Rg9GOINC/0YDQuCDRgNC10LPQuNGB0YLRgNCw0YbQuNC4INC30LDCoCAyNCDRh9Cw0YHQsCDQtNC+INC90LDRh9Cw0LvQsCDQvNCw0YLRh9CwLlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCLQp9GC0L4g0L/RgNC+0LjQt9C+0LnQtNC10YIsINC10YHQu9C4INC90LAg0LLQvdGD0YLRgNC40YjQutC+0LvRjNC90L7QvCDRjdGC0LDQv9C1INCi0YPRgNC90LjRgNCwINGDINC90LDRgSDRgdC+0L/QtdGA0L3QuNC60L7QsiDQvdC1INCx0YPQtNC10YI/XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0K3RgtC+INC+0LfQvdCw0YfQsNC10YIsINGH0YLQviDQstCw0YjQsCDQutC+0LzQsNC90LTQsCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgdGC0LDQvdC10YIg0KfQtdC80L/QuNC+0L3QvtC8INGI0LrQvtC70YsuXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQsNC60L7QuSDQv9GA0LjQt9C+0LLQvtC5INGE0L7QvdC0INCi0YPRgNC90LjRgNCwP1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwi0JTQtdC90LXQttC90YvQuSDQv9GA0LjQt9C+0LLQvtC5INGE0L7QvdC0INCi0YPRgNC90LjRgNCwINC90LUg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC9LlwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwi0JPQu9Cw0LLQvdGL0Lkg0L/RgNC40Lcg0KLRg9GA0L3QuNGA0LAg4oCTINC40LPRgNC+0LLQvtC5INC90L7Rg9GC0LHRg9C6LiDQmtGA0L7QvNC1INGN0YLQvtCz0L4g0LHRg9C00YPRgiDQv9C+0L7RidGA0LjRgtC10LvRjNC90YvQtSDQv9GA0LjQt9GLLlwiXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzU1NmNhOGZcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NTU2Y2E4ZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi03NTU2Y2E4ZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDI2IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZmFxLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZhcS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc1NTZjYThmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZmFxLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcZmFxLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NTU2Y2E4ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc1NTZjYThmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9mYXEudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDI2Il0sInNvdXJjZVJvb3QiOiIifQ==