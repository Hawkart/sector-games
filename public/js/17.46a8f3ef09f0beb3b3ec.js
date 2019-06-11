webpackJsonp([17],{

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
          _vm._v(
            "\n            Пригласите игроков вашей команды зарегистрироваться на турнир:"
          ),
          _c("br"),
          _vm._v(" "),
          _c("social-sharing", {
            attrs: {
              url:
                _vm.user.team_id > 0
                  ? "https://sector.games/teams/" + _vm.user.team_id
                  : "https://sector.games/register",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbnN0cnVjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbnN0cnVjdGlvbi52dWU/OGM1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luc3RydWN0aW9uLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztrQkFxQ0E7QUFDQSxzQkFEQTs7QUFHQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUhBLEM7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsK0JBQStCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0EsaUNBQWlDLGdDQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0EsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0EsaUNBQWlDLGdDQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ0Ysa0VBQVM7QUFDeEIsSUFBSSxLQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyx1REFBa0U7QUFDbkc7QUFDbWM7QUFDYTtBQUNoZDtBQUM4UTtBQUM5UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDRXQUFjO0FBQ2hCLEVBQUUsb09BQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVjLGdGQUFpQiIsImZpbGUiOiJqcy8xNy40NmE4ZjNlZjA5ZjBiZWIzYjNlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxjYXJkIDp0aXRsZT1cIiR0KCdpbnN0cnVjdGlvbicpXCI+XHJcbiAgICAgICAgPGg0PtCU0LvRjyDRg9GH0LDRgdGC0LjRjyDQsiDQotGD0YDQvdC40YDQtSDQvdC10L7QsdGF0L7QtNC40LzQviDRgdC+0LHRgNCw0YLRjCDQutC+0LzQsNC90LTRgyDQuNC3IDUt0YLQuCDQuNCz0YDQvtC60L7QsiDQstCw0YjQtdC5INGI0LrQvtC70YsuINCa0LDQuiDRjdGC0L4g0YHQtNC10LvQsNGC0Yw6PC9oND5cclxuICAgICAgICA8b2wgY2xhc3M9XCJ0ZXh0LW1haW4tMSBwbC0yMFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgdi1pZj1cIiF1c2VyLmNvbmZpcm1lZFwiPtCf0YDQvtCy0LXRgNGM0YLQtSDQktCw0Ygg0L/QvtGH0YLQvtCy0YvQuSDRj9GJ0LjQuiA6IHt7dXNlci5lbWFpbH19XHJcbiAgICAgICAgICAgICAgICDQn9C10YDQtdC50LTQuNGC0LUg0L/QviDRgdGB0YvQu9C60LUg0LIg0YHQvtC+0LHRidC10L3QuNC4LCDQvtGC0L/RgNCw0LLQu9C10L3QvdC+0Lwg0L7RgiBzdXBwb3J0QHlvdXRobGVhZ3VlLnJ1LCDQv9C+0LTRgtCy0LXRgNC00LjRgtC1INCS0LDRiCBlLW1haWwg0LDQtNGA0LXRgS5cclxuICAgICAgICAgICAgICAgINCd0LAgINCw0LTRgNC10YEge3t1c2VyLmVtYWlsfX0gINCx0YPQtNGD0YIg0L3QsNC/0YDQsNCy0LvRj9GC0YzRgdGPINGD0LLQtdC00L7QvNC70LXQvdC40Y8g0L4g0LTQsNGC0LUg0Lgg0LLRgNC10LzQtdC90Lgg0L3QsNGH0LDQu9CwINC80LDRgtGH0LXQuSDQotGD0YDQvdC40YDQsC5cclxuICAgICAgICAgICAgICAgINCd0LUg0L/RgNC+0L/Rg9GB0LrQsNC50YLQtSDRgdC+0L7QsdGJ0LXQvdC40Y8sINC+0YLQv9GA0LDQstC70Y/QtdC80YvQtSDQvdCwICDQsNC00YDQtdGBIHt7dXNlci5lbWFpbH19Ljxici8+XHJcbiAgICAgICAgICAgICAgICDQl9CwINC+0L/QvtC30LTQsNC90LjQtSDQuNC70Lgg0L3QtdGP0LLQutGDINC90LAg0LzQsNGC0Ycg0LrQvtC80LDQvdC00LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQt9Cw0YHRh9C40YLQsNC90L4g0YLQtdGF0L3QuNGH0LXRgdC60L7QtSDQv9C+0YDQsNC20LXQvdC40LUuXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgINCf0YDQuNCz0LvQsNGB0LjRgtC1INC40LPRgNC+0LrQvtCyINCy0LDRiNC10Lkg0LrQvtC80LDQvdC00Ysg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINC90LAg0YLRg9GA0L3QuNGAOjxici8+XHJcbiAgICAgICAgICAgICAgICA8c29jaWFsLXNoYXJpbmcgOnVybD1cInVzZXIudGVhbV9pZD4wID8gJ2h0dHBzOi8vc2VjdG9yLmdhbWVzL3RlYW1zLycrdXNlci50ZWFtX2lkIDogJ2h0dHBzOi8vc2VjdG9yLmdhbWVzL3JlZ2lzdGVyJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQqNCa0J7Qm9Cs0J3Qq9CZINCi0KPQoNCd0JjQoCAyMDE4IERPVEEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cItCo0JrQntCb0KzQndCr0Jkg0KLQo9Cg0J3QmNCgIDIwMTggRE9UQTIuINCU0LvRjyDRg9GH0LDRidC40YXRgdGPINC4INCy0YvQv9GD0YHQutC90LjQutC+0LIg0L7QsdGJ0LXQvtCx0YDQsNC30L7QstCw0YLQtdC70YzQvdGL0YUg0YjQutC+0Lsg0Lgg0YHRgNC10LTQvdC10YHQv9C10YbQuNCw0LvRjNC90YvRhSDRg9GH0LXQsdC90YvRhSDQt9Cw0LLQtdC00LXQvdC40Lkg0LIg0LLQvtC30YDQsNGB0YLQtSDQvtGCIDE0INC00L4gMTgg0LvQtdGCLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaHRhZ3M9XCJEb3RhMizQutC40LHQtdGA0YHQv9C+0YDRgizRgtGD0YDQvdC40YBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZS10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5ldHdvcmsgbmV0d29yaz1cImVtYWlsXCIgY2xhc3M9XCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lbnZlbG9wZVwiPjwvaT4gRW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZXR3b3JrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmV0d29yayBuZXR3b3JrPVwidmtcIiBjbGFzcz1cIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIGJ0bi12a1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS12a1wiPjwvaT4g0JLQmtC+0L3RgtCw0LrRgtC1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmV0d29yaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5ldHdvcmsgbmV0d29yaz1cImZhY2Vib29rXCIgY2xhc3M9XCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMSBidG4tZmJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+IEZhY2Vib29rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmV0d29yaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc29jaWFsLXNoYXJpbmc+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9vbD5cclxuICAgIDwvY2FyZD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWlkZGxld2FyZTogJ2F1dGgnLFxyXG5cclxuICAgICAgICBjb21wdXRlZDogbWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxyXG4gICAgICAgICAgICBsb2NhbGU6ICdsYW5nL2xvY2FsZScsXHJcbiAgICAgICAgfSksXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luc3RydWN0aW9uLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJjYXJkXCIsIHsgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcImluc3RydWN0aW9uXCIpIH0gfSwgW1xuICAgIF9jKFwiaDRcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcItCU0LvRjyDRg9GH0LDRgdGC0LjRjyDQsiDQotGD0YDQvdC40YDQtSDQvdC10L7QsdGF0L7QtNC40LzQviDRgdC+0LHRgNCw0YLRjCDQutC+0LzQsNC90LTRgyDQuNC3IDUt0YLQuCDQuNCz0YDQvtC60L7QsiDQstCw0YjQtdC5INGI0LrQvtC70YsuINCa0LDQuiDRjdGC0L4g0YHQtNC10LvQsNGC0Yw6XCJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwib2xcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW1haW4tMSBwbC0yMFwiIH0sIFtcbiAgICAgICFfdm0udXNlci5jb25maXJtZWRcbiAgICAgICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCLQn9GA0L7QstC10YDRjNGC0LUg0JLQsNGIINC/0L7Rh9GC0L7QstGL0Lkg0Y/RidC40LogOiBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c2VyLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICDQn9C10YDQtdC50LTQuNGC0LUg0L/QviDRgdGB0YvQu9C60LUg0LIg0YHQvtC+0LHRidC10L3QuNC4LCDQvtGC0L/RgNCw0LLQu9C10L3QvdC+0Lwg0L7RgiBzdXBwb3J0QHlvdXRobGVhZ3VlLnJ1LCDQv9C+0LTRgtCy0LXRgNC00LjRgtC1INCS0LDRiCBlLW1haWwg0LDQtNGA0LXRgS5cXG4gICAgICAgICAgICDQndCwICDQsNC00YDQtdGBIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIuZW1haWwpICtcbiAgICAgICAgICAgICAgICBcIiAg0LHRg9C00YPRgiDQvdCw0L/RgNCw0LLQu9GP0YLRjNGB0Y8g0YPQstC10LTQvtC80LvQtdC90LjRjyDQviDQtNCw0YLQtSDQuCDQstGA0LXQvNC10L3QuCDQvdCw0YfQsNC70LAg0LzQsNGC0YfQtdC5INCi0YPRgNC90LjRgNCwLlxcbiAgICAgICAgICAgINCd0LUg0L/RgNC+0L/Rg9GB0LrQsNC50YLQtSDRgdC+0L7QsdGJ0LXQvdC40Y8sINC+0YLQv9GA0LDQstC70Y/QtdC80YvQtSDQvdCwICDQsNC00YDQtdGBIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIuZW1haWwpICtcbiAgICAgICAgICAgICAgICBcIi5cIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAg0JfQsCDQvtC/0L7Qt9C00LDQvdC40LUg0LjQu9C4INC90LXRj9Cy0LrRgyDQvdCwINC80LDRgtGHINC60L7QvNCw0L3QtNC1INC80L7QttC10YIg0LHRi9GC0Ywg0LfQsNGB0YfQuNGC0LDQvdC+INGC0LXRhdC90LjRh9C10YHQutC+0LUg0L/QvtGA0LDQttC10L3QuNC1LlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImxpXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgINCf0YDQuNCz0LvQsNGB0LjRgtC1INC40LPRgNC+0LrQvtCyINCy0LDRiNC10Lkg0LrQvtC80LDQvdC00Ysg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPINC90LAg0YLRg9GA0L3QuNGAOlwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzb2NpYWwtc2hhcmluZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIudGVhbV9pZCA+IDBcbiAgICAgICAgICAgICAgICAgID8gXCJodHRwczovL3NlY3Rvci5nYW1lcy90ZWFtcy9cIiArIF92bS51c2VyLnRlYW1faWRcbiAgICAgICAgICAgICAgICAgIDogXCJodHRwczovL3NlY3Rvci5nYW1lcy9yZWdpc3RlclwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLQqNCa0J7Qm9Cs0J3Qq9CZINCi0KPQoNCd0JjQoCAyMDE4IERPVEEyXCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwi0KjQmtCe0JvQrNCd0KvQmSDQotCj0KDQndCY0KAgMjAxOCBET1RBMi4g0JTQu9GPINGD0YfQsNGJ0LjRhdGB0Y8g0Lgg0LLRi9C/0YPRgdC60L3QuNC60L7QsiDQvtCx0YnQtdC+0LHRgNCw0LfQvtCy0LDRgtC10LvRjNC90YvRhSDRiNC60L7QuyDQuCDRgdGA0LXQtNC90LXRgdC/0LXRhtC40LDQu9GM0L3Ri9GFINGD0YfQtdCx0L3Ri9GFINC30LDQstC10LTQtdC90LjQuSDQsiDQstC+0LfRgNCw0YHRgtC1INC+0YIgMTQg0LTQviAxOCDQu9C10YIuXCIsXG4gICAgICAgICAgICAgIGhhc2h0YWdzOiBcIkRvdGEyLNC60LjQsdC10YDRgdC/0L7RgNGCLNGC0YPRgNC90LjRgFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5saW5lVGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3ZtID0gdGhpc1xuICAgICAgICAgICAgICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTEwXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJuZXR3b3JrXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5ldHdvcms6IFwiZW1haWxcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1lbnZlbG9wZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEVtYWlsXFxuICAgICAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibmV0d29ya1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIGJ0bi12a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmV0d29yazogXCJ2a1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXZrXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg0JLQmtC+0L3RgtCw0LrRgtC1XFxuICAgICAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibmV0d29ya1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIGJ0bi1mYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmV0d29yazogXCJmYWNlYm9va1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWZhY2Vib29rXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRmFjZWJvb2tcXG4gICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXRpY1JlbmRlckZuczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTY1NWQ2OTgyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjU1ZDY5ODJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luc3RydWN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi02NTVkNjk4MlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5zdHJ1Y3Rpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbnN0cnVjdGlvbi52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbnN0cnVjdGlvbi52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY1NWQ2OTgyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5zdHJ1Y3Rpb24udnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbnN0cnVjdGlvbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjU1ZDY5ODJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02NTVkNjk4MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5zdHJ1Y3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5zdHJ1Y3Rpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMTciXSwic291cmNlUm9vdCI6IiJ9