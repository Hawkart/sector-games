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
            _vm._v("Как создать свою команду?")
          ]),
          _c("br"),
          _vm._v(
            "\n        В “Личном кабинете” слева нажмите на кнопку “Собери Команду”, далее в меню\n        заполните информацию о команде."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как присоединиться к существующей команде?")
          ]),
          _c("br"),
          _vm._v(
            "\n        Перейдите в список команд https://sector.games/teams, найдите команду, нажмите\n        кнопку “Присоединиться к команде”."
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как пригласить игроков в команду?")
          ]),
          _c("br"),
          _vm._v(
            '\n        Из Личного кабинета отправьте приглашение в команду по электронной почте,\n        опубликуйте приглашения у себя на стене ВКонтакте или в SteamCommunity.\n        После того как игроки зарегистрируются на сайте https://sector.games/ ,\n        выберите в списке https://sector.games/players игроков и нажмите кнопку\n        "Пригласить в команду".'
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как я узнаю, что меня пригласили в команду?")
          ]),
          _c("br"),
          _vm._v(
            "\n        Капитан команды приглашает игроков в команду. Вы получите уведомление о приглашении по электронной почте, которую Вы указали при регистрации. Если Вы согласны присоединиться к команде – подтвердите в меню у себя в Личном кабинете.\n        "
          )
        ]),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Сколько игроков должно быть в команде?")
          ]),
          _c("br"),
          _vm._v(
            "\n        В команде по DOTA2 может быть только 5 игроков. Запасных игроков и замен не предусмотрено.\n        "
          )
        ]),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как зарегистрироваться с “готовой командой”?")
          ]),
          _c("br"),
          _vm._v(
            '\n        Каждому из игроков "готовой команды" необходимо зарегистрироваться на сайте https://sector.games/ . Затем капитан команды создает на сайте команду с её названием и рассылает всем игрокам приглашения. Как только все игроки их принимают - команда считается сформированной.\n        '
          )
        ]),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как происходит регистрация на Турнир?")
          ]),
          _c("br"),
          _vm._v(
            "\n        Регистрацию на турнир осуществляет капитан команды.\n        При регистрации на турнир проверяется, что всем игроки команды указали свои реальные фамилии и имена, внесли информацию о своих SteamID и аккаунтах ВКонтакте,  только в этом случае команда будет зарегистрирована на Турнир.\n        "
          )
        ]),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как проверить зарегистрирована ли моя команда на Турнир?")
          ]),
          _c("br"),
          _vm._v(
            "\n        Когда команда будет зарегистрирована на Турнир все игроки команды получат уведомления о регистрации по электронной почте. Чтобы убедиться в том, что команда зарегистрирована на Турнир – перейдите в список Турниров https://sector.games/tournaments, выберите интересующий Вас Турнир, перейдите в раздел “Команды”, найдите в нем вашу команду.\n\n        "
          )
        ]),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v("Как посмотреть какие ещё команды участвуют в Турнире?")
          ]),
          _c("br"),
          _vm._v(
            "\n        Все команды, зарегистрировавшиеся на Турнир, отображаются в разделе “Команды”\n        на странице данного Турнира.\n\n        "
          )
        ]),
        _c("li", [
          _c("span", { staticClass: "text-white" }, [
            _vm._v(
              "Как будут назначаться матчи? Как мы узнаем, когда мы играем, будет ли какое нибудь оповещение?"
            )
          ]),
          _c("br"),
          _vm._v(
            "\n            Назначение матчей определяется турнирной платформой в соответствии с расписанием Турнира. Оповещение о назначении матчей будет приходить на электронную почту, указанную при регистрации.\n        "
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9mYXEudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZT9lMzdkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkEyQ0E7QUFDQSxxQkFEQTs7QUFHQSxZQUhBLHNCQUdBO0FBQ0E7QUFDQSxLQUxBOzs7QUFPQSx5Q0FDQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxNQURBO0FBUEEsQzs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtDQUFrQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ0Ysa0VBQVM7QUFDeEIsSUFBSSxLQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7OztBQzVIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBK0Q7QUFDaEc7QUFDd2I7QUFDYTtBQUNyYztBQUNnUTtBQUNoUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9XQUFjO0FBQ2hCLEVBQUUsNE5BQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVjLGdGQUFpQiIsImZpbGUiOiJqcy8yNi44ZjQxYzExOTljNjkxODg3NGI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwibmstZGVjb3JhdGVkLWgtMlwiPtCn0LDRgdGC0L4g0LfQsNC00LDQstCw0LXQvNGL0LUg0LLQvtC/0YDQvtGB0Ys8L2gzPlxyXG4gICAgICAgIDxvbD5cclxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwidGV4dC13aGl0ZVwiPtCa0LDQuiDRgdC+0LfQtNCw0YLRjCDRgdCy0L7RjiDQutC+0LzQsNC90LTRgz88L3NwYW4+PGJyIC8+XHJcbiAgICAgICAgICAgINCSIOKAnNCb0LjRh9C90L7QvCDQutCw0LHQuNC90LXRgtC14oCdINGB0LvQtdCy0LAg0L3QsNC20LzQuNGC0LUg0L3QsCDQutC90L7Qv9C60YMg4oCc0KHQvtCx0LXRgNC4INCa0L7QvNCw0L3QtNGD4oCdLCDQtNCw0LvQtdC1INCyINC80LXQvdGOXHJcbiAgICAgICAgICAgINC30LDQv9C+0LvQvdC40YLQtSDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDQutC+0LzQsNC90LTQtS48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INC/0YDQuNGB0L7QtdC00LjQvdC40YLRjNGB0Y8g0Log0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdC5INC60L7QvNCw0L3QtNC1Pzwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAg0J/QtdGA0LXQudC00LjRgtC1INCyINGB0L/QuNGB0L7QuiDQutC+0LzQsNC90LQgaHR0cHM6Ly9zZWN0b3IuZ2FtZXMvdGVhbXMsINC90LDQudC00LjRgtC1INC60L7QvNCw0L3QtNGDLCDQvdCw0LbQvNC40YLQtVxyXG4gICAgICAgICAgICDQutC90L7Qv9C60YMg4oCc0J/RgNC40YHQvtC10LTQuNC90LjRgtGM0YHRjyDQuiDQutC+0LzQsNC90LTQteKAnS48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INC/0YDQuNCz0LvQsNGB0LjRgtGMINC40LPRgNC+0LrQvtCyINCyINC60L7QvNCw0L3QtNGDPzwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAg0JjQtyDQm9C40YfQvdC+0LPQviDQutCw0LHQuNC90LXRgtCwINC+0YLQv9GA0LDQstGM0YLQtSDQv9GA0LjQs9C70LDRiNC10L3QuNC1INCyINC60L7QvNCw0L3QtNGDINC/0L4g0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtC1LFxyXG4gICAgICAgICAgICDQvtC/0YPQsdC70LjQutGD0LnRgtC1INC/0YDQuNCz0LvQsNGI0LXQvdC40Y8g0YMg0YHQtdCx0Y8g0L3QsCDRgdGC0LXQvdC1INCS0JrQvtC90YLQsNC60YLQtSDQuNC70Lgg0LIgU3RlYW1Db21tdW5pdHkuXHJcbiAgICAgICAgICAgINCf0L7RgdC70LUg0YLQvtCz0L4g0LrQsNC6INC40LPRgNC+0LrQuCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPRjtGC0YHRjyDQvdCwINGB0LDQudGC0LUgaHR0cHM6Ly9zZWN0b3IuZ2FtZXMvICxcclxuICAgICAgICAgICAg0LLRi9Cx0LXRgNC40YLQtSDQsiDRgdC/0LjRgdC60LUgaHR0cHM6Ly9zZWN0b3IuZ2FtZXMvcGxheWVycyDQuNCz0YDQvtC60L7QsiDQuCDQvdCw0LbQvNC40YLQtSDQutC90L7Qv9C60YNcclxuICAgICAgICAgICAgXCLQn9GA0LjQs9C70LDRgdC40YLRjCDQsiDQutC+0LzQsNC90LTRg1wiLjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtCw0Log0Y8g0YPQt9C90LDRjiwg0YfRgtC+INC80LXQvdGPINC/0YDQuNCz0LvQsNGB0LjQu9C4INCyINC60L7QvNCw0L3QtNGDPzwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAg0JrQsNC/0LjRgtCw0L0g0LrQvtC80LDQvdC00Ysg0L/RgNC40LPQu9Cw0YjQsNC10YIg0LjQs9GA0L7QutC+0LIg0LIg0LrQvtC80LDQvdC00YMuINCS0Ysg0L/QvtC70YPRh9C40YLQtSDRg9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INC/0YDQuNCz0LvQsNGI0LXQvdC40Lgg0L/QviDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0LUsINC60L7RgtC+0YDRg9GOINCS0Ysg0YPQutCw0LfQsNC70Lgg0L/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40LguINCV0YHQu9C4INCS0Ysg0YHQvtCz0LvQsNGB0L3RiyDQv9GA0LjRgdC+0LXQtNC40L3QuNGC0YzRgdGPINC6INC60L7QvNCw0L3QtNC1IOKAkyDQv9C+0LTRgtCy0LXRgNC00LjRgtC1INCyINC80LXQvdGOINGDINGB0LXQsdGPINCyINCb0LjRh9C90L7QvCDQutCw0LHQuNC90LXRgtC1LlxyXG4gICAgICAgICAgICA8L2xpPjxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QodC60L7Qu9GM0LrQviDQuNCz0YDQvtC60L7QsiDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LIg0LrQvtC80LDQvdC00LU/PC9zcGFuPjxiciAvPlxyXG4gICAgICAgICAgICDQkiDQutC+0LzQsNC90LTQtSDQv9C+IERPVEEyINC80L7QttC10YIg0LHRi9GC0Ywg0YLQvtC70YzQutC+IDUg0LjQs9GA0L7QutC+0LIuINCX0LDQv9Cw0YHQvdGL0YUg0LjQs9GA0L7QutC+0LIg0Lgg0LfQsNC80LXQvSDQvdC1INC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC+LlxyXG4gICAgICAgICAgICA8L2xpPjxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtCw0Log0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINGBIOKAnNCz0L7RgtC+0LLQvtC5INC60L7QvNCw0L3QtNC+0LnigJ0/PC9zcGFuPjxiciAvPlxyXG4gICAgICAgICAgICDQmtCw0LbQtNC+0LzRgyDQuNC3INC40LPRgNC+0LrQvtCyIFwi0LPQvtGC0L7QstC+0Lkg0LrQvtC80LDQvdC00YtcIiDQvdC10L7QsdGF0L7QtNC40LzQviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8g0L3QsCDRgdCw0LnRgtC1IGh0dHBzOi8vc2VjdG9yLmdhbWVzLyAuINCX0LDRgtC10Lwg0LrQsNC/0LjRgtCw0L0g0LrQvtC80LDQvdC00Ysg0YHQvtC30LTQsNC10YIg0L3QsCDRgdCw0LnRgtC1INC60L7QvNCw0L3QtNGDINGBINC10ZEg0L3QsNC30LLQsNC90LjQtdC8INC4INGA0LDRgdGB0YvQu9Cw0LXRgiDQstGB0LXQvCDQuNCz0YDQvtC60LDQvCDQv9GA0LjQs9C70LDRiNC10L3QuNGPLiDQmtCw0Log0YLQvtC70YzQutC+INCy0YHQtSDQuNCz0YDQvtC60Lgg0LjRhSDQv9GA0LjQvdC40LzQsNGO0YIgLSDQutC+0LzQsNC90LTQsCDRgdGH0LjRgtCw0LXRgtGB0Y8g0YHRhNC+0YDQvNC40YDQvtCy0LDQvdC90L7QuS5cclxuICAgICAgICAgICAgPC9saT48bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INC/0YDQvtC40YHRhdC+0LTQuNGCINGA0LXQs9C40YHRgtGA0LDRhtC40Y8g0L3QsCDQotGD0YDQvdC40YA/PC9zcGFuPjxiciAvPlxyXG4gICAgICAgICAgICDQoNC10LPQuNGB0YLRgNCw0YbQuNGOINC90LAg0YLRg9GA0L3QuNGAINC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgiDQutCw0L/QuNGC0LDQvSDQutC+0LzQsNC90LTRiy5cclxuICAgICAgICAgICAg0J/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0L3QsCDRgtGD0YDQvdC40YAg0L/RgNC+0LLQtdGA0Y/QtdGC0YHRjywg0YfRgtC+INCy0YHQtdC8INC40LPRgNC+0LrQuCDQutC+0LzQsNC90LTRiyDRg9C60LDQt9Cw0LvQuCDRgdCy0L7QuCDRgNC10LDQu9GM0L3Ri9C1INGE0LDQvNC40LvQuNC4INC4INC40LzQtdC90LAsINCy0L3QtdGB0LvQuCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDRgdCy0L7QuNGFIFN0ZWFtSUQg0Lgg0LDQutC60LDRg9C90YLQsNGFINCS0JrQvtC90YLQsNC60YLQtSwgINGC0L7Qu9GM0LrQviDQsiDRjdGC0L7QvCDRgdC70YPRh9Cw0LUg0LrQvtC80LDQvdC00LAg0LHRg9C00LXRgiDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L3QsCDQvdCwINCi0YPRgNC90LjRgC5cclxuICAgICAgICAgICAgPC9saT48bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INC/0YDQvtCy0LXRgNC40YLRjCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L3QsCDQu9C4INC80L7RjyDQutC+0LzQsNC90LTQsCDQvdCwINCi0YPRgNC90LjRgD88L3NwYW4+PGJyIC8+XHJcbiAgICAgICAgICAgINCa0L7Qs9C00LAg0LrQvtC80LDQvdC00LAg0LHRg9C00LXRgiDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L3QsCDQvdCwINCi0YPRgNC90LjRgCDQstGB0LUg0LjQs9GA0L7QutC4INC60L7QvNCw0L3QtNGLINC/0L7Qu9GD0YfQsNGCINGD0LLQtdC00L7QvNC70LXQvdC40Y8g0L4g0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQv9C+INGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLQtS4g0KfRgtC+0LHRiyDRg9Cx0LXQtNC40YLRjNGB0Y8g0LIg0YLQvtC8LCDRh9GC0L4g0LrQvtC80LDQvdC00LAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC90LAg0L3QsCDQotGD0YDQvdC40YAg4oCTINC/0LXRgNC10LnQtNC40YLQtSDQsiDRgdC/0LjRgdC+0Log0KLRg9GA0L3QuNGA0L7QsiBodHRwczovL3NlY3Rvci5nYW1lcy90b3VybmFtZW50cywg0LLRi9Cx0LXRgNC40YLQtSDQuNC90YLQtdGA0LXRgdGD0Y7RidC40Lkg0JLQsNGBINCi0YPRgNC90LjRgCwg0L/QtdGA0LXQudC00LjRgtC1INCyINGA0LDQt9C00LXQuyDigJzQmtC+0LzQsNC90LTRi+KAnSwg0L3QsNC50LTQuNGC0LUg0LIg0L3QtdC8INCy0LDRiNGDINC60L7QvNCw0L3QtNGDLlxyXG5cclxuICAgICAgICAgICAgPC9saT48bGk+PHNwYW4gY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JrQsNC6INC/0L7RgdC80L7RgtGA0LXRgtGMINC60LDQutC40LUg0LXRidGRINC60L7QvNCw0L3QtNGLINGD0YfQsNGB0YLQstGD0Y7RgiDQsiDQotGD0YDQvdC40YDQtT88L3NwYW4+PGJyIC8+XHJcbiAgICAgICAgICAgINCS0YHQtSDQutC+0LzQsNC90LTRiywg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNCy0YjQuNC10YHRjyDQvdCwINCi0YPRgNC90LjRgCwg0L7RgtC+0LHRgNCw0LbQsNGO0YLRgdGPINCyINGA0LDQt9C00LXQu9C1IOKAnNCa0L7QvNCw0L3QtNGL4oCdXHJcbiAgICAgICAgICAgINC90LAg0YHRgtGA0LDQvdC40YbQtSDQtNCw0L3QvdC+0LPQviDQotGD0YDQvdC40YDQsC5cclxuXHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInRleHQtd2hpdGVcIj7QmtCw0Log0LHRg9C00YPRgiDQvdCw0LfQvdCw0YfQsNGC0YzRgdGPINC80LDRgtGH0Lg/INCa0LDQuiDQvNGLINGD0LfQvdCw0LXQvCwg0LrQvtCz0LTQsCDQvNGLINC40LPRgNCw0LXQvCwg0LHRg9C00LXRgiDQu9C4INC60LDQutC+0LUg0L3QuNCx0YPQtNGMINC+0L/QvtCy0LXRidC10L3QuNC1Pzwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAgICAgINCd0LDQt9C90LDRh9C10L3QuNC1INC80LDRgtGH0LXQuSDQvtC/0YDQtdC00LXQu9GP0LXRgtGB0Y8g0YLRg9GA0L3QuNGA0L3QvtC5INC/0LvQsNGC0YTQvtGA0LzQvtC5INCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDRgNCw0YHQv9C40YHQsNC90LjQtdC8INCi0YPRgNC90LjRgNCwLiDQntC/0L7QstC10YnQtdC90LjQtSDQviDQvdCw0LfQvdCw0YfQtdC90LjQuCDQvNCw0YLRh9C10Lkg0LHRg9C00LXRgiDQv9GA0LjRhdC+0LTQuNGC0Ywg0L3QsCDRjdC70LXQutGC0YDQvtC90L3Rg9GOINC/0L7Rh9GC0YMsINGD0LrQsNC30LDQvdC90YPRjiDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuC5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L29sPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBsYXlvdXQ6ICdkZWZhdWx0JyxcclxuXHJcbiAgICAgICAgbWV0YUluZm8gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB0aXRsZTogJ9Cn0LDRgdGC0L4g0LfQsNC00LDQstCw0LXQvNGL0LUg0LLQvtC/0YDQvtGB0YsnIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjb21wdXRlZDp7XHJcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogJ2F1dGgvdXNlcicsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZGVjb3JhdGVkLWgtMlwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwi0KfQsNGB0YLQviDQt9Cw0LTQsNCy0LDQtdC80YvQtSDQstC+0L/RgNC+0YHRi1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJvbFwiLCBbXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtCw0Log0YHQvtC30LTQsNGC0Ywg0YHQstC+0Y4g0LrQvtC80LDQvdC00YM/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAg0JIg4oCc0JvQuNGH0L3QvtC8INC60LDQsdC40L3QtdGC0LXigJ0g0YHQu9C10LLQsCDQvdCw0LbQvNC40YLQtSDQvdCwINC60L3QvtC/0LrRgyDigJzQodC+0LHQtdGA0Lgg0JrQvtC80LDQvdC00YPigJ0sINC00LDQu9C10LUg0LIg0LzQtdC90Y5cXG4gICAgICAgINC30LDQv9C+0LvQvdC40YLQtSDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDQutC+0LzQsNC90LTQtS5cIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtCw0Log0L/RgNC40YHQvtC10LTQuNC90LjRgtGM0YHRjyDQuiDRgdGD0YnQtdGB0YLQstGD0Y7RidC10Lkg0LrQvtC80LDQvdC00LU/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAg0J/QtdGA0LXQudC00LjRgtC1INCyINGB0L/QuNGB0L7QuiDQutC+0LzQsNC90LQgaHR0cHM6Ly9zZWN0b3IuZ2FtZXMvdGVhbXMsINC90LDQudC00LjRgtC1INC60L7QvNCw0L3QtNGDLCDQvdCw0LbQvNC40YLQtVxcbiAgICAgICAg0LrQvdC+0L/QutGDIOKAnNCf0YDQuNGB0L7QtdC00LjQvdC40YLRjNGB0Y8g0Log0LrQvtC80LDQvdC00LXigJ0uXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQsNC6INC/0YDQuNCz0LvQsNGB0LjRgtGMINC40LPRgNC+0LrQvtCyINCyINC60L7QvNCw0L3QtNGDP1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgJ1xcbiAgICAgICAg0JjQtyDQm9C40YfQvdC+0LPQviDQutCw0LHQuNC90LXRgtCwINC+0YLQv9GA0LDQstGM0YLQtSDQv9GA0LjQs9C70LDRiNC10L3QuNC1INCyINC60L7QvNCw0L3QtNGDINC/0L4g0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtC1LFxcbiAgICAgICAg0L7Qv9GD0LHQu9C40LrRg9C50YLQtSDQv9GA0LjQs9C70LDRiNC10L3QuNGPINGDINGB0LXQsdGPINC90LAg0YHRgtC10L3QtSDQktCa0L7QvdGC0LDQutGC0LUg0LjQu9C4INCyIFN0ZWFtQ29tbXVuaXR5LlxcbiAgICAgICAg0J/QvtGB0LvQtSDRgtC+0LPQviDQutCw0Log0LjQs9GA0L7QutC4INC30LDRgNC10LPQuNGB0YLRgNC40YDRg9GO0YLRgdGPINC90LAg0YHQsNC50YLQtSBodHRwczovL3NlY3Rvci5nYW1lcy8gLFxcbiAgICAgICAg0LLRi9Cx0LXRgNC40YLQtSDQsiDRgdC/0LjRgdC60LUgaHR0cHM6Ly9zZWN0b3IuZ2FtZXMvcGxheWVycyDQuNCz0YDQvtC60L7QsiDQuCDQvdCw0LbQvNC40YLQtSDQutC90L7Qv9C60YNcXG4gICAgICAgIFwi0J/RgNC40LPQu9Cw0YHQuNGC0Ywg0LIg0LrQvtC80LDQvdC00YNcIi4nXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCa0LDQuiDRjyDRg9C30L3QsNGOLCDRh9GC0L4g0LzQtdC90Y8g0L/RgNC40LPQu9Cw0YHQuNC70Lgg0LIg0LrQvtC80LDQvdC00YM/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAg0JrQsNC/0LjRgtCw0L0g0LrQvtC80LDQvdC00Ysg0L/RgNC40LPQu9Cw0YjQsNC10YIg0LjQs9GA0L7QutC+0LIg0LIg0LrQvtC80LDQvdC00YMuINCS0Ysg0L/QvtC70YPRh9C40YLQtSDRg9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INC/0YDQuNCz0LvQsNGI0LXQvdC40Lgg0L/QviDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0LUsINC60L7RgtC+0YDRg9GOINCS0Ysg0YPQutCw0LfQsNC70Lgg0L/RgNC4INGA0LXQs9C40YHRgtGA0LDRhtC40LguINCV0YHQu9C4INCS0Ysg0YHQvtCz0LvQsNGB0L3RiyDQv9GA0LjRgdC+0LXQtNC40L3QuNGC0YzRgdGPINC6INC60L7QvNCw0L3QtNC1IOKAkyDQv9C+0LTRgtCy0LXRgNC00LjRgtC1INCyINC80LXQvdGOINGDINGB0LXQsdGPINCyINCb0LjRh9C90L7QvCDQutCw0LHQuNC90LXRgtC1LlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0KHQutC+0LvRjNC60L4g0LjQs9GA0L7QutC+0LIg0LTQvtC70LbQvdC+INCx0YvRgtGMINCyINC60L7QvNCw0L3QtNC1P1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgINCSINC60L7QvNCw0L3QtNC1INC/0L4gRE9UQTIg0LzQvtC20LXRgiDQsdGL0YLRjCDRgtC+0LvRjNC60L4gNSDQuNCz0YDQvtC60L7Qsi4g0JfQsNC/0LDRgdC90YvRhSDQuNCz0YDQvtC60L7QsiDQuCDQt9Cw0LzQtdC9INC90LUg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC90L4uXFxuICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmtCw0Log0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINGBIOKAnNCz0L7RgtC+0LLQvtC5INC60L7QvNCw0L3QtNC+0LnigJ0/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAnXFxuICAgICAgICDQmtCw0LbQtNC+0LzRgyDQuNC3INC40LPRgNC+0LrQvtCyIFwi0LPQvtGC0L7QstC+0Lkg0LrQvtC80LDQvdC00YtcIiDQvdC10L7QsdGF0L7QtNC40LzQviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8g0L3QsCDRgdCw0LnRgtC1IGh0dHBzOi8vc2VjdG9yLmdhbWVzLyAuINCX0LDRgtC10Lwg0LrQsNC/0LjRgtCw0L0g0LrQvtC80LDQvdC00Ysg0YHQvtC30LTQsNC10YIg0L3QsCDRgdCw0LnRgtC1INC60L7QvNCw0L3QtNGDINGBINC10ZEg0L3QsNC30LLQsNC90LjQtdC8INC4INGA0LDRgdGB0YvQu9Cw0LXRgiDQstGB0LXQvCDQuNCz0YDQvtC60LDQvCDQv9GA0LjQs9C70LDRiNC10L3QuNGPLiDQmtCw0Log0YLQvtC70YzQutC+INCy0YHQtSDQuNCz0YDQvtC60Lgg0LjRhSDQv9GA0LjQvdC40LzQsNGO0YIgLSDQutC+0LzQsNC90LTQsCDRgdGH0LjRgtCw0LXRgtGB0Y8g0YHRhNC+0YDQvNC40YDQvtCy0LDQvdC90L7QuS5cXG4gICAgICAgICdcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQsNC6INC/0YDQvtC40YHRhdC+0LTQuNGCINGA0LXQs9C40YHRgtGA0LDRhtC40Y8g0L3QsCDQotGD0YDQvdC40YA/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAg0KDQtdCz0LjRgdGC0YDQsNGG0LjRjiDQvdCwINGC0YPRgNC90LjRgCDQvtGB0YPRidC10YHRgtCy0LvRj9C10YIg0LrQsNC/0LjRgtCw0L0g0LrQvtC80LDQvdC00YsuXFxuICAgICAgICDQn9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCDQvdCwINGC0YPRgNC90LjRgCDQv9GA0L7QstC10YDRj9C10YLRgdGPLCDRh9GC0L4g0LLRgdC10Lwg0LjQs9GA0L7QutC4INC60L7QvNCw0L3QtNGLINGD0LrQsNC30LDQu9C4INGB0LLQvtC4INGA0LXQsNC70YzQvdGL0LUg0YTQsNC80LjQu9C40Lgg0Lgg0LjQvNC10L3QsCwg0LLQvdC10YHQu9C4INC40L3RhNC+0YDQvNCw0YbQuNGOINC+INGB0LLQvtC40YUgU3RlYW1JRCDQuCDQsNC60LrQsNGD0L3RgtCw0YUg0JLQmtC+0L3RgtCw0LrRgtC1LCAg0YLQvtC70YzQutC+INCyINGN0YLQvtC8INGB0LvRg9GH0LDQtSDQutC+0LzQsNC90LTQsCDQsdGD0LTQtdGCINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvdCwINC90LAg0KLRg9GA0L3QuNGALlxcbiAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JrQsNC6INC/0YDQvtCy0LXRgNC40YLRjCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L3QsCDQu9C4INC80L7RjyDQutC+0LzQsNC90LTQsCDQvdCwINCi0YPRgNC90LjRgD9cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICDQmtC+0LPQtNCwINC60L7QvNCw0L3QtNCwINCx0YPQtNC10YIg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC90LAg0L3QsCDQotGD0YDQvdC40YAg0LLRgdC1INC40LPRgNC+0LrQuCDQutC+0LzQsNC90LTRiyDQv9C+0LvRg9GH0LDRgiDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPINC+INGA0LXQs9C40YHRgtGA0LDRhtC40Lgg0L/QviDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0LUuINCn0YLQvtCx0Ysg0YPQsdC10LTQuNGC0YzRgdGPINCyINGC0L7QvCwg0YfRgtC+INC60L7QvNCw0L3QtNCwINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvdCwINC90LAg0KLRg9GA0L3QuNGAIOKAkyDQv9C10YDQtdC50LTQuNGC0LUg0LIg0YHQv9C40YHQvtC6INCi0YPRgNC90LjRgNC+0LIgaHR0cHM6Ly9zZWN0b3IuZ2FtZXMvdG91cm5hbWVudHMsINCy0YvQsdC10YDQuNGC0LUg0LjQvdGC0LXRgNC10YHRg9GO0YnQuNC5INCS0LDRgSDQotGD0YDQvdC40YAsINC/0LXRgNC10LnQtNC40YLQtSDQsiDRgNCw0LfQtNC10Lsg4oCc0JrQvtC80LDQvdC00YvigJ0sINC90LDQudC00LjRgtC1INCyINC90LXQvCDQstCw0YjRgyDQutC+0LzQsNC90LTRgy5cXG5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCa0LDQuiDQv9C+0YHQvNC+0YLRgNC10YLRjCDQutCw0LrQuNC1INC10YnRkSDQutC+0LzQsNC90LTRiyDRg9GH0LDRgdGC0LLRg9GO0YIg0LIg0KLRg9GA0L3QuNGA0LU/XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAg0JLRgdC1INC60L7QvNCw0L3QtNGLLCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0LLRiNC40LXRgdGPINC90LAg0KLRg9GA0L3QuNGALCDQvtGC0L7QsdGA0LDQttCw0Y7RgtGB0Y8g0LIg0YDQsNC30LTQtdC70LUg4oCc0JrQvtC80LDQvdC00YvigJ1cXG4gICAgICAgINC90LAg0YHRgtGA0LDQvdC40YbQtSDQtNCw0L3QvdC+0LPQviDQotGD0YDQvdC40YDQsC5cXG5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCLQmtCw0Log0LHRg9C00YPRgiDQvdCw0LfQvdCw0YfQsNGC0YzRgdGPINC80LDRgtGH0Lg/INCa0LDQuiDQvNGLINGD0LfQvdCw0LXQvCwg0LrQvtCz0LTQsCDQvNGLINC40LPRgNCw0LXQvCwg0LHRg9C00LXRgiDQu9C4INC60LDQutC+0LUg0L3QuNCx0YPQtNGMINC+0L/QvtCy0LXRidC10L3QuNC1P1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgINCd0LDQt9C90LDRh9C10L3QuNC1INC80LDRgtGH0LXQuSDQvtC/0YDQtdC00LXQu9GP0LXRgtGB0Y8g0YLRg9GA0L3QuNGA0L3QvtC5INC/0LvQsNGC0YTQvtGA0LzQvtC5INCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDRgNCw0YHQv9C40YHQsNC90LjQtdC8INCi0YPRgNC90LjRgNCwLiDQntC/0L7QstC10YnQtdC90LjQtSDQviDQvdCw0LfQvdCw0YfQtdC90LjQuCDQvNCw0YLRh9C10Lkg0LHRg9C00LXRgiDQv9GA0LjRhdC+0LTQuNGC0Ywg0L3QsCDRjdC70LXQutGC0YDQvtC90L3Rg9GOINC/0L7Rh9GC0YMsINGD0LrQsNC30LDQvdC90YPRjiDQv9GA0Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDRhMzUzMDlcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wNGEzNTMwOVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wNGEzNTMwOVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDI2IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZmFxLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZhcS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA0YTM1MzA5XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZmFxLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNGEzNTMwOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA0YTM1MzA5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9mYXEudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZmFxLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDI2Il0sInNvdXJjZVJvb3QiOiIifQ==