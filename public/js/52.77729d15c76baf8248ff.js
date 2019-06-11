webpackJsonp([52],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/settings/instruction.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

exports.default = {
    middleware: 'auth',

    computed: (0, _vuex.mapGetters)({
        user: 'auth/user',
        locale: 'lang/locale'
    })
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-655d6982\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/instruction.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("card", { attrs: { title: _vm.$t("instruction") } }, [
    _c("h4", [
      _vm._v(
        "Для участия в Турнире необходимо собрать команду из 5-ти игроков вашей школы. Как это сделать:"
      )
    ]),
    _vm._v(" "),
    _c("ol", { staticClass: "text-main-1 pl-20" }, [
      !_vm.user.confirmed
        ? _c("li", { staticClass: "text-white" }, [
            _vm._v(
              "Проверьте Ваш почтовый ящик : " +
                _vm._s(_vm.user.email) +
                "\n            Перейдите по ссылке в сообщении, отправленном от support@youthleague.ru, подтвердите Ваш e-mail адрес.\n            На  адрес " +
                _vm._s(_vm.user.email) +
                "  будут направляться уведомления о дате и времени начала матчей Турнира.\n            Не пропускайте сообщения, отправляемые на  адрес " +
                _vm._s(_vm.user.email) +
                "."
            ),
            _c("br"),
            _vm._v(
              "\n            За опоздание или неявку на матч команде может быть засчитано техническое поражение.\n        "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "text-white" },
        [
          _vm._v("\n            Присоедините ваш аккаунт Steam в "),
          _c("router-link", { attrs: { to: { name: "settings.team" } } }, [
            _vm._v("Личном кабинете")
          ]),
          _vm._v(".\n        ")
        ],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "text-white" }, [
        _vm._v("\n            Вступите в группу "),
        _c(
          "a",
          {
            attrs: {
              href: "https://steamcommunity.com/groups/youthleague",
              target: "_blank"
            }
          },
          [_vm._v('"Национальная Молодежная Киберспортивная Лига"')]
        ),
        _vm._v(" в STEAM Community.\n        ")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "text-white" }, [
        _vm._v("\n            Пригласите игроков вашей команды в группу "),
        _c(
          "a",
          {
            attrs: {
              href: "https://steamcommunity.com/groups/youthleague",
              target: "_blank"
            }
          },
          [_vm._v('"Национальная Молодежная Киберспортивная Лига"')]
        ),
        _vm._v(" в STEAM Community.\n        ")
      ]),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "text-white" },
        [
          _vm._v(
            "\n            Пригласите игроков вашей команды зарегистрироваться на турнир:"
          ),
          _c("br"),
          _vm._v(" "),
          _c("social-sharing", {
            attrs: {
              url:
                _vm.user.team_id > 0
                  ? "https://youthleague.ru/teams/" + _vm.user.team_id
                  : "https://youthleague.ru/register",
              title: "ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2",
              description:
                "ШКОЛЬНЫЙ ТУРНИР 2018 DOTA2. Для учащихся и выпускников общеобразовательных школ и среднеспециальных учебных заведений в возрасте от 14 до 18 лет.",
              hashtags: "Dota2,киберспорт,турнир"
            },
            inlineTemplate: {
              render: function() {
                var _vm = this
                var _h = _vm.$createElement
                var _c = _vm._self._c || _h
                return _c(
                  "div",
                  { staticClass: "mt-10" },
                  [
                    _c(
                      "network",
                      {
                        staticClass:
                          "nk-btn nk-btn-rounded nk-btn-color-main-1",
                        attrs: { network: "email" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-envelope" }),
                        _vm._v(" Email\n                    ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "network",
                      {
                        staticClass:
                          "nk-btn nk-btn-rounded nk-btn-color-main-1 btn-vk",
                        attrs: { network: "vk" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-vk" }),
                        _vm._v(" ВКонтакте\n                    ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "network",
                      {
                        staticClass:
                          "nk-btn nk-btn-rounded nk-btn-color-main-1 btn-fb",
                        attrs: { network: "facebook" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-facebook" }),
                        _vm._v(" Facebook\n                    ")
                      ]
                    )
                  ],
                  1
                )
              },
              staticRenderFns: []
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "text-white" },
        [
          _vm._v("\n            Присоедините ваш аккаунт ВКонтакте в "),
          _c("router-link", { attrs: { to: { name: "settings.team" } } }, [
            _vm._v("Личном кабинете")
          ]),
          _vm._v(".\n        ")
        ],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "text-white" }, [
        _vm._v("\n            Вступите в группу "),
        _c(
          "a",
          { attrs: { href: "https://vk.com/youthleagueru", target: "_blank" } },
          [_vm._v('"Национальная Молодежная Киберспортивная Лига"')]
        ),
        _vm._v(
          " в ВКонтакте. В этой группе будут отображаться все последние новости Турнира: Результаты матчей,\n            объявляться победители этапов, публиковаться фотоотчеты о награждении чемпионов.\n        "
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "text-white" }, [
        _vm._v(
          "\n            Пригластите ваших друзей, знакомых, близких в группу "
        ),
        _c(
          "a",
          { attrs: { href: "https://vk.com/youthleagueru", target: "_blank" } },
          [_vm._v('"Национальная Молодежная Киберспортивная Лига"')]
        ),
        _vm._v(
          " в ВКонтаке чтобы они следили за Вашими победами, успехами и достижениями.\n        "
        )
      ])
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "text-white" }, [
      _vm._v("\n        По всем вопросам Вы всегда можете обратиться в "),
      _c(
        "a",
        { attrs: { href: "https://vk.com/youthleagueru", target: "_blank" } },
        [_vm._v("группу")]
      ),
      _vm._v(
        " поддержки ВКонтакте или через виджет  ВК в правом нижнем углу сайта.\n    "
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-655d6982", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/settings/instruction.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_instruction_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/settings/instruction.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_instruction_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_instruction_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_instruction_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_instruction_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_655d6982_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_instruction_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-655d6982\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/instruction.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_instruction_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_655d6982_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_instruction_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/settings/instruction.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-655d6982", Component.options)
  } else {
    hotAPI.reload("data-v-655d6982", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbnN0cnVjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbnN0cnVjdGlvbi52dWU/OGM1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luc3RydWN0aW9uLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztrQkE2REE7QUFDQSxzQkFEQTs7QUFHQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUhBLEM7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsK0JBQStCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUyxNQUFNLHdCQUF3QixFQUFFLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNEJBQTRCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0QkFBNEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0EsaUNBQWlDLGdDQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0EsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0EsaUNBQWlDLGdDQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRCQUE0QjtBQUNyQztBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsTUFBTSx3QkFBd0IsRUFBRSxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRCQUE0QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVMseURBQXlELEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNEJBQTRCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVMseURBQXlELEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNEJBQTRCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyx5REFBeUQsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNGLGtFQUFTO0FBQ3hCLElBQUksS0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7QUNyTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQWtFO0FBQ25HO0FBQ21jO0FBQ2E7QUFDaGQ7QUFDOFE7QUFDOVE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0V0FBYztBQUNoQixFQUFFLG9PQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvNTIuNzc3MjlkMTVjNzZiYWY4MjQ4ZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8Y2FyZCA6dGl0bGU9XCIkdCgnaW5zdHJ1Y3Rpb24nKVwiPlxyXG4gICAgICAgIDxoND7QlNC70Y8g0YPRh9Cw0YHRgtC40Y8g0LIg0KLRg9GA0L3QuNGA0LUg0L3QtdC+0LHRhdC+0LTQuNC80L4g0YHQvtCx0YDQsNGC0Ywg0LrQvtC80LDQvdC00YMg0LjQtyA1LdGC0Lgg0LjQs9GA0L7QutC+0LIg0LLQsNGI0LXQuSDRiNC60L7Qu9GLLiDQmtCw0Log0Y3RgtC+INGB0LTQtdC70LDRgtGMOjwvaDQ+XHJcbiAgICAgICAgPG9sIGNsYXNzPVwidGV4dC1tYWluLTEgcGwtMjBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwidGV4dC13aGl0ZVwiIHYtaWY9XCIhdXNlci5jb25maXJtZWRcIj7Qn9GA0L7QstC10YDRjNGC0LUg0JLQsNGIINC/0L7Rh9GC0L7QstGL0Lkg0Y/RidC40LogOiB7e3VzZXIuZW1haWx9fVxyXG4gICAgICAgICAgICAgICAg0J/QtdGA0LXQudC00LjRgtC1INC/0L4g0YHRgdGL0LvQutC1INCyINGB0L7QvtCx0YnQtdC90LjQuCwg0L7RgtC/0YDQsNCy0LvQtdC90L3QvtC8INC+0YIgc3VwcG9ydEB5b3V0aGxlYWd1ZS5ydSwg0L/QvtC00YLQstC10YDQtNC40YLQtSDQktCw0YggZS1tYWlsINCw0LTRgNC10YEuXHJcbiAgICAgICAgICAgICAgICDQndCwICDQsNC00YDQtdGBIHt7dXNlci5lbWFpbH19ICDQsdGD0LTRg9GCINC90LDQv9GA0LDQstC70Y/RgtGM0YHRjyDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPINC+INC00LDRgtC1INC4INCy0YDQtdC80LXQvdC4INC90LDRh9Cw0LvQsCDQvNCw0YLRh9C10Lkg0KLRg9GA0L3QuNGA0LAuXHJcbiAgICAgICAgICAgICAgICDQndC1INC/0YDQvtC/0YPRgdC60LDQudGC0LUg0YHQvtC+0LHRidC10L3QuNGPLCDQvtGC0L/RgNCw0LLQu9GP0LXQvNGL0LUg0L3QsCAg0LDQtNGA0LXRgSB7e3VzZXIuZW1haWx9fS48YnIvPlxyXG4gICAgICAgICAgICAgICAg0JfQsCDQvtC/0L7Qt9C00LDQvdC40LUg0LjQu9C4INC90LXRj9Cy0LrRgyDQvdCwINC80LDRgtGHINC60L7QvNCw0L3QtNC1INC80L7QttC10YIg0LHRi9GC0Ywg0LfQsNGB0YfQuNGC0LDQvdC+INGC0LXRhdC90LjRh9C10YHQutC+0LUg0L/QvtGA0LDQttC10L3QuNC1LlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICDQn9GA0LjRgdC+0LXQtNC40L3QuNGC0LUg0LLQsNGIINCw0LrQutCw0YPQvdGCIFN0ZWFtINCyIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdzZXR0aW5ncy50ZWFtJyB9XCI+0JvQuNGH0L3QvtC8INC60LDQsdC40L3QtdGC0LU8L3JvdXRlci1saW5rPi5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAg0JLRgdGC0YPQv9C40YLQtSDQsiDQs9GA0YPQv9C/0YMgPGEgaHJlZj1cImh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL2dyb3Vwcy95b3V0aGxlYWd1ZVwiIHRhcmdldD1cIl9ibGFua1wiPlwi0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCc0L7Qu9C+0LTQtdC20L3QsNGPINCa0LjQsdC10YDRgdC/0L7RgNGC0LjQstC90LDRjyDQm9C40LPQsFwiPC9hPiDQsiBTVEVBTSBDb21tdW5pdHkuXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgINCf0YDQuNCz0LvQsNGB0LjRgtC1INC40LPRgNC+0LrQvtCyINCy0LDRiNC10Lkg0LrQvtC80LDQvdC00Ysg0LIg0LPRgNGD0L/Qv9GDIDxhIGhyZWY9XCJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9ncm91cHMveW91dGhsZWFndWVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cItCd0LDRhtC40L7QvdCw0LvRjNC90LDRjyDQnNC+0LvQvtC00LXQttC90LDRjyDQmtC40LHQtdGA0YHQv9C+0YDRgtC40LLQvdCw0Y8g0JvQuNCz0LBcIjwvYT4g0LIgU1RFQU0gQ29tbXVuaXR5LlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICDQn9GA0LjQs9C70LDRgdC40YLQtSDQuNCz0YDQvtC60L7QsiDQstCw0YjQtdC5INC60L7QvNCw0L3QtNGLINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjyDQvdCwINGC0YPRgNC90LjRgDo8YnIvPlxyXG4gICAgICAgICAgICAgICAgPHNvY2lhbC1zaGFyaW5nIDp1cmw9XCJ1c2VyLnRlYW1faWQ+MCA/ICdodHRwczovL3lvdXRobGVhZ3VlLnJ1L3RlYW1zLycrdXNlci50ZWFtX2lkIDogJ2h0dHBzOi8veW91dGhsZWFndWUucnUvcmVnaXN0ZXInXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCo0JrQntCb0KzQndCr0Jkg0KLQo9Cg0J3QmNCgIDIwMTggRE9UQTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwi0KjQmtCe0JvQrNCd0KvQmSDQotCj0KDQndCY0KAgMjAxOCBET1RBMi4g0JTQu9GPINGD0YfQsNGJ0LjRhdGB0Y8g0Lgg0LLRi9C/0YPRgdC60L3QuNC60L7QsiDQvtCx0YnQtdC+0LHRgNCw0LfQvtCy0LDRgtC10LvRjNC90YvRhSDRiNC60L7QuyDQuCDRgdGA0LXQtNC90LXRgdC/0LXRhtC40LDQu9GM0L3Ri9GFINGD0YfQtdCx0L3Ri9GFINC30LDQstC10LTQtdC90LjQuSDQsiDQstC+0LfRgNCw0YHRgtC1INC+0YIgMTQg0LTQviAxOCDQu9C10YIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNodGFncz1cIkRvdGEyLNC60LjQsdC10YDRgdC/0L7RgNGCLNGC0YPRgNC90LjRgFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmV0d29yayBuZXR3b3JrPVwiZW1haWxcIiBjbGFzcz1cIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVudmVsb3BlXCI+PC9pPiBFbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25ldHdvcms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZXR3b3JrIG5ldHdvcms9XCJ2a1wiIGNsYXNzPVwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgYnRuLXZrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXZrXCI+PC9pPiDQktCa0L7QvdGC0LDQutGC0LVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZXR3b3JrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmV0d29yayBuZXR3b3JrPVwiZmFjZWJvb2tcIiBjbGFzcz1cIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIGJ0bi1mYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT4gRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZXR3b3JrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zb2NpYWwtc2hhcmluZz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAg0J/RgNC40YHQvtC10LTQuNC90LjRgtC1INCy0LDRiCDQsNC60LrQsNGD0L3RgiDQktCa0L7QvdGC0LDQutGC0LUg0LIgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3NldHRpbmdzLnRlYW0nIH1cIj7Qm9C40YfQvdC+0Lwg0LrQsNCx0LjQvdC10YLQtTwvcm91dGVyLWxpbms+LlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICDQktGB0YLRg9C/0LjRgtC1INCyINCz0YDRg9C/0L/RgyA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20veW91dGhsZWFndWVydVwiIHRhcmdldD1cIl9ibGFua1wiPlwi0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCc0L7Qu9C+0LTQtdC20L3QsNGPINCa0LjQsdC10YDRgdC/0L7RgNGC0LjQstC90LDRjyDQm9C40LPQsFwiPC9hPiDQsiDQktCa0L7QvdGC0LDQutGC0LUuINCSINGN0YLQvtC5INCz0YDRg9C/0L/QtSDQsdGD0LTRg9GCINC+0YLQvtCx0YDQsNC20LDRgtGM0YHRjyDQstGB0LUg0L/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4INCi0YPRgNC90LjRgNCwOiDQoNC10LfRg9C70YzRgtCw0YLRiyDQvNCw0YLRh9C10LksXHJcbiAgICAgICAgICAgICAgICDQvtCx0YrRj9Cy0LvRj9GC0YzRgdGPINC/0L7QsdC10LTQuNGC0LXQu9C4INGN0YLQsNC/0L7Qsiwg0L/Rg9Cx0LvQuNC60L7QstCw0YLRjNGB0Y8g0YTQvtGC0L7QvtGC0YfQtdGC0Ysg0L4g0L3QsNCz0YDQsNC20LTQtdC90LjQuCDRh9C10LzQv9C40L7QvdC+0LIuXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgINCf0YDQuNCz0LvQsNGB0YLQuNGC0LUg0LLQsNGI0LjRhSDQtNGA0YPQt9C10LksINC30L3QsNC60L7QvNGL0YUsINCx0LvQuNC30LrQuNGFINCyINCz0YDRg9C/0L/RgyA8YSBocmVmPVwiaHR0cHM6Ly92ay5jb20veW91dGhsZWFndWVydVwiIHRhcmdldD1cIl9ibGFua1wiPlwi0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCc0L7Qu9C+0LTQtdC20L3QsNGPINCa0LjQsdC10YDRgdC/0L7RgNGC0LjQstC90LDRjyDQm9C40LPQsFwiPC9hPiDQsiDQktCa0L7QvdGC0LDQutC1INGH0YLQvtCx0Ysg0L7QvdC4INGB0LvQtdC00LjQu9C4INC30LAg0JLQsNGI0LjQvNC4INC/0L7QsdC10LTQsNC80LgsINGD0YHQv9C10YXQsNC80Lgg0Lgg0LTQvtGB0YLQuNC20LXQvdC40Y/QvNC4LlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvb2w+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDQn9C+INCy0YHQtdC8INCy0L7Qv9GA0L7RgdCw0Lwg0JLRiyDQstGB0LXQs9C00LAg0LzQvtC20LXRgtC1INC+0LHRgNCw0YLQuNGC0YzRgdGPINCyIDxhIGhyZWY9XCJodHRwczovL3ZrLmNvbS95b3V0aGxlYWd1ZXJ1XCIgdGFyZ2V0PVwiX2JsYW5rXCI+0LPRgNGD0L/Qv9GDPC9hPiDQv9C+0LTQtNC10YDQttC60Lgg0JLQmtC+0L3RgtCw0LrRgtC1INC40LvQuCDRh9C10YDQtdC3INCy0LjQtNC20LXRgiAg0JLQmiDQsiDQv9GA0LDQstC+0Lwg0L3QuNC20L3QtdC8INGD0LPQu9GDINGB0LDQudGC0LAuXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgIDwvY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWlkZGxld2FyZTogJ2F1dGgnLFxyXG5cclxuICAgICAgICBjb21wdXRlZDogbWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZScsXHJcbiAgICAgICAgfSksXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luc3RydWN0aW9uLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJjYXJkXCIsIHsgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcImluc3RydWN0aW9uXCIpIH0gfSwgW1xuICAgIF9jKFwiaDRcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcItCU0LvRjyDRg9GH0LDRgdGC0LjRjyDQsiDQotGD0YDQvdC40YDQtSDQvdC10L7QsdGF0L7QtNC40LzQviDRgdC+0LHRgNCw0YLRjCDQutC+0LzQsNC90LTRgyDQuNC3IDUt0YLQuCDQuNCz0YDQvtC60L7QsiDQstCw0YjQtdC5INGI0LrQvtC70YsuINCa0LDQuiDRjdGC0L4g0YHQtNC10LvQsNGC0Yw6XCJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwib2xcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW1haW4tMSBwbC0yMFwiIH0sIFtcbiAgICAgICFfdm0udXNlci5jb25maXJtZWRcbiAgICAgICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCLQn9GA0L7QstC10YDRjNGC0LUg0JLQsNGIINC/0L7Rh9GC0L7QstGL0Lkg0Y/RidC40LogOiBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c2VyLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICDQn9C10YDQtdC50LTQuNGC0LUg0L/QviDRgdGB0YvQu9C60LUg0LIg0YHQvtC+0LHRidC10L3QuNC4LCDQvtGC0L/RgNCw0LLQu9C10L3QvdC+0Lwg0L7RgiBzdXBwb3J0QHlvdXRobGVhZ3VlLnJ1LCDQv9C+0LTRgtCy0LXRgNC00LjRgtC1INCS0LDRiCBlLW1haWwg0LDQtNGA0LXRgS5cXG4gICAgICAgICAgICDQndCwICDQsNC00YDQtdGBIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIuZW1haWwpICtcbiAgICAgICAgICAgICAgICBcIiAg0LHRg9C00YPRgiDQvdCw0L/RgNCw0LLQu9GP0YLRjNGB0Y8g0YPQstC10LTQvtC80LvQtdC90LjRjyDQviDQtNCw0YLQtSDQuCDQstGA0LXQvNC10L3QuCDQvdCw0YfQsNC70LAg0LzQsNGC0YfQtdC5INCi0YPRgNC90LjRgNCwLlxcbiAgICAgICAgICAgINCd0LUg0L/RgNC+0L/Rg9GB0LrQsNC50YLQtSDRgdC+0L7QsdGJ0LXQvdC40Y8sINC+0YLQv9GA0LDQstC70Y/QtdC80YvQtSDQvdCwICDQsNC00YDQtdGBIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIuZW1haWwpICtcbiAgICAgICAgICAgICAgICBcIi5cIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAg0JfQsCDQvtC/0L7Qt9C00LDQvdC40LUg0LjQu9C4INC90LXRj9Cy0LrRgyDQvdCwINC80LDRgtGHINC60L7QvNCw0L3QtNC1INC80L7QttC10YIg0LHRi9GC0Ywg0LfQsNGB0YfQuNGC0LDQvdC+INGC0LXRhdC90LjRh9C10YHQutC+0LUg0L/QvtGA0LDQttC10L3QuNC1LlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImxpXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICDQn9GA0LjRgdC+0LXQtNC40L3QuNGC0LUg0LLQsNGIINCw0LrQutCw0YPQvdGCIFN0ZWFtINCyIFwiKSxcbiAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJzZXR0aW5ncy50ZWFtXCIgfSB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCb0LjRh9C90L7QvCDQutCw0LHQuNC90LXRgtC1XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiLlxcbiAgICAgICAgXCIpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgINCS0YHRgtGD0L/QuNGC0LUg0LIg0LPRgNGD0L/Qv9GDIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9ncm91cHMveW91dGhsZWFndWVcIixcbiAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KCdcItCd0LDRhtC40L7QvdCw0LvRjNC90LDRjyDQnNC+0LvQvtC00LXQttC90LDRjyDQmtC40LHQtdGA0YHQv9C+0YDRgtC40LLQvdCw0Y8g0JvQuNCz0LBcIicpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIg0LIgU1RFQU0gQ29tbXVuaXR5LlxcbiAgICAgICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAg0J/RgNC40LPQu9Cw0YHQuNGC0LUg0LjQs9GA0L7QutC+0LIg0LLQsNGI0LXQuSDQutC+0LzQsNC90LTRiyDQsiDQs9GA0YPQv9C/0YMgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL2dyb3Vwcy95b3V0aGxlYWd1ZVwiLFxuICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoJ1wi0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCc0L7Qu9C+0LTQtdC20L3QsNGPINCa0LjQsdC10YDRgdC/0L7RgNGC0LjQstC90LDRjyDQm9C40LPQsFwiJyldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiDQsiBTVEVBTSBDb21tdW5pdHkuXFxuICAgICAgICBcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImxpXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgINCf0YDQuNCz0LvQsNGB0LjRgtC1INC40LPRgNC+0LrQvtCyINCy0LDRiNC10Lkg0LrQvtC80LDQvdC00Ysg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINC90LAg0YLRg9GA0L3QuNGAOlwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzb2NpYWwtc2hhcmluZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIudGVhbV9pZCA+IDBcbiAgICAgICAgICAgICAgICAgID8gXCJodHRwczovL3lvdXRobGVhZ3VlLnJ1L3RlYW1zL1wiICsgX3ZtLnVzZXIudGVhbV9pZFxuICAgICAgICAgICAgICAgICAgOiBcImh0dHBzOi8veW91dGhsZWFndWUucnUvcmVnaXN0ZXJcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi0KjQmtCe0JvQrNCd0KvQmSDQotCj0KDQndCY0KAgMjAxOCBET1RBMlwiLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcItCo0JrQntCb0KzQndCr0Jkg0KLQo9Cg0J3QmNCgIDIwMTggRE9UQTIuINCU0LvRjyDRg9GH0LDRidC40YXRgdGPINC4INCy0YvQv9GD0YHQutC90LjQutC+0LIg0L7QsdGJ0LXQvtCx0YDQsNC30L7QstCw0YLQtdC70YzQvdGL0YUg0YjQutC+0Lsg0Lgg0YHRgNC10LTQvdC10YHQv9C10YbQuNCw0LvRjNC90YvRhSDRg9GH0LXQsdC90YvRhSDQt9Cw0LLQtdC00LXQvdC40Lkg0LIg0LLQvtC30YDQsNGB0YLQtSDQvtGCIDE0INC00L4gMTgg0LvQtdGCLlwiLFxuICAgICAgICAgICAgICBoYXNodGFnczogXCJEb3RhMizQutC40LHQtdGA0YHQv9C+0YDRgizRgtGD0YDQvdC40YBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlubGluZVRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIF92bSA9IHRoaXNcbiAgICAgICAgICAgICAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0xMFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibmV0d29ya1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuZXR3b3JrOiBcImVtYWlsXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZW52ZWxvcGVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBFbWFpbFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcIm5ldHdvcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMSBidG4tdmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5ldHdvcms6IFwidmtcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS12a1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiINCS0JrQvtC90YLQsNC60YLQtVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcIm5ldHdvcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMSBidG4tZmJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5ldHdvcms6IFwiZmFjZWJvb2tcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1mYWNlYm9va1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEZhY2Vib29rXFxuICAgICAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJsaVwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAg0J/RgNC40YHQvtC10LTQuNC90LjRgtC1INCy0LDRiCDQsNC60LrQsNGD0L3RgiDQktCa0L7QvdGC0LDQutGC0LUg0LIgXCIpLFxuICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcInNldHRpbmdzLnRlYW1cIiB9IH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JvQuNGH0L3QvtC8INC60LDQsdC40L3QtdGC0LVcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIuXFxuICAgICAgICBcIilcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAg0JLRgdGC0YPQv9C40YLQtSDQsiDQs9GA0YPQv9C/0YMgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly92ay5jb20veW91dGhsZWFndWVydVwiLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoJ1wi0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCc0L7Qu9C+0LTQtdC20L3QsNGPINCa0LjQsdC10YDRgdC/0L7RgNGC0LjQstC90LDRjyDQm9C40LPQsFwiJyldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIiDQsiDQktCa0L7QvdGC0LDQutGC0LUuINCSINGN0YLQvtC5INCz0YDRg9C/0L/QtSDQsdGD0LTRg9GCINC+0YLQvtCx0YDQsNC20LDRgtGM0YHRjyDQstGB0LUg0L/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4INCi0YPRgNC90LjRgNCwOiDQoNC10LfRg9C70YzRgtCw0YLRiyDQvNCw0YLRh9C10LksXFxuICAgICAgICAgICAg0L7QsdGK0Y/QstC70Y/RgtGM0YHRjyDQv9C+0LHQtdC00LjRgtC10LvQuCDRjdGC0LDQv9C+0LIsINC/0YPQsdC70LjQutC+0LLQsNGC0YzRgdGPINGE0L7RgtC+0L7RgtGH0LXRgtGLINC+INC90LDQs9GA0LDQttC00LXQvdC40Lgg0YfQtdC80L/QuNC+0L3QvtCyLlxcbiAgICAgICAgXCJcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgICAgICAgINCf0YDQuNCz0LvQsNGB0YLQuNGC0LUg0LLQsNGI0LjRhSDQtNGA0YPQt9C10LksINC30L3QsNC60L7QvNGL0YUsINCx0LvQuNC30LrQuNGFINCyINCz0YDRg9C/0L/RgyBcIlxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly92ay5jb20veW91dGhsZWFndWVydVwiLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoJ1wi0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCc0L7Qu9C+0LTQtdC20L3QsNGPINCa0LjQsdC10YDRgdC/0L7RgNGC0LjQstC90LDRjyDQm9C40LPQsFwiJyldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIiDQsiDQktCa0L7QvdGC0LDQutC1INGH0YLQvtCx0Ysg0L7QvdC4INGB0LvQtdC00LjQu9C4INC30LAg0JLQsNGI0LjQvNC4INC/0L7QsdC10LTQsNC80LgsINGD0YHQv9C10YXQsNC80Lgg0Lgg0LTQvtGB0YLQuNC20LXQvdC40Y/QvNC4LlxcbiAgICAgICAgXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgICAgINCf0L4g0LLRgdC10Lwg0LLQvtC/0YDQvtGB0LDQvCDQktGLINCy0YHQtdCz0LTQsCDQvNC+0LbQtdGC0LUg0L7QsdGA0LDRgtC40YLRjNGB0Y8g0LIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly92ay5jb20veW91dGhsZWFndWVydVwiLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSB9LFxuICAgICAgICBbX3ZtLl92KFwi0LPRgNGD0L/Qv9GDXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCIg0L/QvtC00LTQtdGA0LbQutC4INCS0JrQvtC90YLQsNC60YLQtSDQuNC70Lgg0YfQtdGA0LXQtyDQstC40LTQttC10YIgINCS0Jog0LIg0L/RgNCw0LLQvtC8INC90LjQttC90LXQvCDRg9Cz0LvRgyDRgdCw0LnRgtCwLlxcbiAgICBcIlxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02NTVkNjk4MlwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTY1NWQ2OTgyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbnN0cnVjdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNjU1ZDY5ODJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luc3RydWN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5zdHJ1Y3Rpb24udnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5zdHJ1Y3Rpb24udnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02NTVkNjk4MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luc3RydWN0aW9uLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5zdHJ1Y3Rpb24udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY1NWQ2OTgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjU1ZDY5ODJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luc3RydWN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luc3RydWN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUyIl0sInNvdXJjZVJvb3QiOiIifQ==