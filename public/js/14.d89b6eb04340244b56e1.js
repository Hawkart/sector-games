webpackJsonp([14],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/tournament_2018.vue":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    layout: 'default',

    metaInfo: function metaInfo() {
        return { title: this.$t('school_tournament_2018') };
    },


    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        locale: 'lang/locale'
    }))
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-353a58f4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournament_2018.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "card",
        { attrs: { title: _vm.$t("school_tournament_2018") + " DOTA2" } },
        [
          _c("p", { staticClass: "text-white" }, [
            _vm._v(
              "Для учащихся и выпускников общеобразовательных школ и среднеспециальных учебных заведений в возрасте от 14 до 18 лет."
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nk-gap-2" }),
          _vm._v(" "),
          _c("div", { staticClass: "row vertical-gap" }, [
            _c("div", { staticClass: "col-lg-3" }, [
              _c("div", { staticClass: "nk-feature-1" }, [
                _c(
                  "h4",
                  { staticClass: "nk-feature-title text-main-1 mb-0 f1em" },
                  [_vm._v("1 Этап:")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9" }, [
              _c("div", { staticClass: "nk-feature-1" }, [
                _c("div", { staticClass: "nk-feature-cont" }, [
                  _c("h3", { staticClass: "nk-feature-title text-main-1" }, [
                    _vm._v("Внутришкольный")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                        Пройдет с 07 по 11 августа 2018 года."
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        На этом этапе опрелятся Чемпионы Школ."
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        В следующий этап от школы выходит только одна команда.\n                    "
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nk-gap-2" }),
          _vm._v(" "),
          _c("div", { staticClass: "row vertical-gap" }, [
            _c("div", { staticClass: "col-lg-3" }, [
              _c("div", { staticClass: "nk-feature-1" }, [
                _c(
                  "h4",
                  { staticClass: "nk-feature-title text-main-1 mb-0 f1em" },
                  [_vm._v("2 Этап:")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9" }, [
              _c("div", { staticClass: "nk-feature-1" }, [
                _c("div", { staticClass: "nk-feature-cont" }, [
                  _c("h3", { staticClass: "nk-feature-title text-main-1" }, [
                    _vm._v("РЕГИОНАЛЬНЫЕ КВАЛИФИКАЦИИ")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                            Пройдет с 12 августа по 19 августа 2018 года."
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                            Чемпионы школ встретятся в отборочном туре, чтобы определить финалистов, которые дальше продожат борьбу за звание Чемпиона России.\n                        "
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nk-gap-2" }),
          _vm._v(" "),
          _c("div", { staticClass: "row vertical-gap" }, [
            _c("div", { staticClass: "col-lg-3" }, [
              _c("div", { staticClass: "nk-feature-1" }, [
                _c(
                  "h4",
                  { staticClass: "nk-feature-title text-main-1 mb-0 f1em" },
                  [_vm._v("3 Этап:")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9" }, [
              _c("div", { staticClass: "nk-feature-1" }, [
                _c("div", { staticClass: "nk-feature-cont" }, [
                  _c("h3", { staticClass: "nk-feature-title text-main-1" }, [
                    _vm._v("Всероссийский Финал")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                            Финал пройдет с 26 по 31 августа 2018 года."
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                            Победителя узнает вся страна!\n                        "
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nk-gap-2" }),
          _vm._v(" "),
          !_vm.authenticated
            ? _c("div", { staticClass: "row vertical-gap" }, [
                _c("div", { staticClass: "col-lg-3" }, [
                  _vm._v("\n                 \n            ")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-9" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "nk-btn nk-btn-rounded nk-btn-color-main-1 text-white",
                        attrs: { to: { name: "register" } }
                      },
                      [_vm._v("Регистрируйтесь на турнир")]
                    )
                  ],
                  1
                )
              ])
            : _vm._e()
        ]
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-353a58f4", esExports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/tournament_2018.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_2018_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/tournament_2018.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_2018_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_2018_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_2018_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_2018_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_353a58f4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tournament_2018_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-353a58f4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/tournament_2018.vue");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_tournament_2018_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_353a58f4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tournament_2018_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\tournament_2018.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-353a58f4", Component.options)
  } else {
    hotAPI.reload("data-v-353a58f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy90b3VybmFtZW50XzIwMTgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudF8yMDE4LnZ1ZT8xNjA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudF8yMDE4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBNEZBOztBQUVBOzs7Ozs7O1lBR0E7O2tDQUNBO2dDQUNBO0FBRUE7OztBQUNBO2NBRUE7Z0JBR0E7QUFKQTtBQVJBLEU7Ozs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxxREFBcUQsRUFBRTtBQUN6RTtBQUNBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQSxxQkFBcUIsa0NBQWtDO0FBQ3ZELHVCQUF1QiwwQkFBMEI7QUFDakQseUJBQXlCLDhCQUE4QjtBQUN2RDtBQUNBO0FBQ0EsbUJBQW1CLHdEQUF3RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRCx5QkFBeUIsOEJBQThCO0FBQ3ZELDJCQUEyQixpQ0FBaUM7QUFDNUQsNEJBQTRCLDhDQUE4QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0EscUJBQXFCLGtDQUFrQztBQUN2RCx1QkFBdUIsMEJBQTBCO0FBQ2pELHlCQUF5Qiw4QkFBOEI7QUFDdkQ7QUFDQTtBQUNBLG1CQUFtQix3REFBd0Q7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQseUJBQXlCLDhCQUE4QjtBQUN2RCwyQkFBMkIsaUNBQWlDO0FBQzVELDRCQUE0Qiw4Q0FBOEM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQSxxQkFBcUIsa0NBQWtDO0FBQ3ZELHVCQUF1QiwwQkFBMEI7QUFDakQseUJBQXlCLDhCQUE4QjtBQUN2RDtBQUNBO0FBQ0EsbUJBQW1CLHdEQUF3RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRCx5QkFBeUIsOEJBQThCO0FBQ3ZELDJCQUEyQixpQ0FBaUM7QUFDNUQsNEJBQTRCLDhDQUE4QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0EseUJBQXlCLGtDQUFrQztBQUMzRCwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxNQUFNLG1CQUFtQjtBQUN6RCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUFBO0FBQ0E7QUFDQTtBQUN3VztBQUNhO0FBQ3JYO0FBQzhLO0FBQzlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xNC5kODliNmViMDQzNDAyNDRiNTZlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxjYXJkIDp0aXRsZT1cIiR0KCdzY2hvb2xfdG91cm5hbWVudF8yMDE4JykrJyBET1RBMidcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+0JTQu9GPINGD0YfQsNGJ0LjRhdGB0Y8g0Lgg0LLRi9C/0YPRgdC60L3QuNC60L7QsiDQvtCx0YnQtdC+0LHRgNCw0LfQvtCy0LDRgtC10LvRjNC90YvRhSDRiNC60L7QuyDQuCDRgdGA0LXQtNC90LXRgdC/0LXRhtC40LDQu9GM0L3Ri9GFINGD0YfQtdCx0L3Ri9GFINC30LDQstC10LTQtdC90LjQuSDQsiDQstC+0LfRgNCw0YHRgtC1INC+0YIgMTQg0LTQviAxOCDQu9C10YIuPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2ZXJ0aWNhbC1nYXBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZmVhdHVyZS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm5rLWZlYXR1cmUtdGl0bGUgdGV4dC1tYWluLTEgbWItMCBmMWVtXCI+MSDQrdGC0LDQvzo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWZlYXR1cmUtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1mZWF0dXJlLWNvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibmstZmVhdHVyZS10aXRsZSB0ZXh0LW1haW4tMVwiPtCS0L3Rg9GC0YDQuNGI0LrQvtC70YzQvdGL0Lk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtC50LTQtdGCINGBIDA3INC/0L4gMTEg0LDQstCz0YPRgdGC0LAgMjAxOCDQs9C+0LTQsC48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQndCwINGN0YLQvtC8INGN0YLQsNC/0LUg0L7Qv9GA0LXQu9GP0YLRgdGPINCn0LXQvNC/0LjQvtC90Ysg0KjQutC+0LsuPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JIg0YHQu9C10LTRg9GO0YnQuNC5INGN0YLQsNC/INC+0YIg0YjQutC+0LvRiyDQstGL0YXQvtC00LjRgiDRgtC+0LvRjNC60L4g0L7QtNC90LAg0LrQvtC80LDQvdC00LAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXAtMlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2ZXJ0aWNhbC1nYXBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZmVhdHVyZS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm5rLWZlYXR1cmUtdGl0bGUgdGV4dC1tYWluLTEgbWItMCBmMWVtXCI+MiDQrdGC0LDQvzo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWZlYXR1cmUtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZmVhdHVyZS1jb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJuay1mZWF0dXJlLXRpdGxlIHRleHQtbWFpbi0xXCI+0KDQldCT0JjQntCd0JDQm9Cs0J3Qq9CVINCa0JLQkNCb0JjQpNCY0JrQkNCm0JjQmDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0L7QudC00LXRgiDRgSAxMiDQsNCy0LPRg9GB0YLQsCDQv9C+IDE5INCw0LLQs9GD0YHRgtCwIDIwMTgg0LPQvtC00LAuPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCn0LXQvNC/0LjQvtC90Ysg0YjQutC+0Lsg0LLRgdGC0YDQtdGC0Y/RgtGB0Y8g0LIg0L7RgtCx0L7RgNC+0YfQvdC+0Lwg0YLRg9GA0LUsINGH0YLQvtCx0Ysg0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0YTQuNC90LDQu9C40YHRgtC+0LIsINC60L7RgtC+0YDRi9C1INC00LDQu9GM0YjQtSDQv9GA0L7QtNC+0LbQsNGCINCx0L7RgNGM0LHRgyDQt9CwINC30LLQsNC90LjQtSDQp9C10LzQv9C40L7QvdCwINCg0L7RgdGB0LjQuC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwLTJcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdmVydGljYWwtZ2FwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWZlYXR1cmUtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJuay1mZWF0dXJlLXRpdGxlIHRleHQtbWFpbi0xIG1iLTAgZjFlbVwiPjMg0K3RgtCw0L86PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1mZWF0dXJlLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWZlYXR1cmUtY29udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibmstZmVhdHVyZS10aXRsZSB0ZXh0LW1haW4tMVwiPtCS0YHQtdGA0L7RgdGB0LjQudGB0LrQuNC5INCk0LjQvdCw0Ls8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KTQuNC90LDQuyDQv9GA0L7QudC00LXRgiDRgSAyNiDQv9C+IDMxINCw0LLQs9GD0YHRgtCwIDIwMTgg0LPQvtC00LAuPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QsdC10LTQuNGC0LXQu9GPINGD0LfQvdCw0LXRgiDQstGB0Y8g0YHRgtGA0LDQvdCwIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXAtMlwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2ZXJ0aWNhbC1nYXBcIiB2LWlmPVwiIWF1dGhlbnRpY2F0ZWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyZWdpc3RlcicgfVwiIGNsYXNzPVwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZVwiPtCg0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCDQvdCwINGC0YPRgNC90LjRgDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvY2FyZD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGxheW91dDogJ2RlZmF1bHQnLFxyXG5cclxuICAgICAgICBtZXRhSW5mbyAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdzY2hvb2xfdG91cm5hbWVudF8yMDE4JykgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbXB1dGVkOntcclxuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJyxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogJ2xhbmcvbG9jYWxlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfMjAxOC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiY2FyZFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uJHQoXCJzY2hvb2xfdG91cm5hbWVudF8yMDE4XCIpICsgXCIgRE9UQTJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcItCU0LvRjyDRg9GH0LDRidC40YXRgdGPINC4INCy0YvQv9GD0YHQutC90LjQutC+0LIg0L7QsdGJ0LXQvtCx0YDQsNC30L7QstCw0YLQtdC70YzQvdGL0YUg0YjQutC+0Lsg0Lgg0YHRgNC10LTQvdC10YHQv9C10YbQuNCw0LvRjNC90YvRhSDRg9GH0LXQsdC90YvRhSDQt9Cw0LLQtdC00LXQvdC40Lkg0LIg0LLQvtC30YDQsNGB0YLQtSDQvtGCIDE0INC00L4gMTgg0LvQtdGCLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWdhcC0yXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB2ZXJ0aWNhbC1nYXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWZlYXR1cmUtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiaDRcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS10aXRsZSB0ZXh0LW1haW4tMSBtYi0wIGYxZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIjEg0K3RgtCw0L86XCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS0xXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS1jb250XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWZlYXR1cmUtdGl0bGUgdGV4dC1tYWluLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCS0L3Rg9GC0YDQuNGI0LrQvtC70YzQvdGL0LlcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtC50LTQtdGCINGBIDA3INC/0L4gMTEg0LDQstCz0YPRgdGC0LAgMjAxOCDQs9C+0LTQsC5cIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDQndCwINGN0YLQvtC8INGN0YLQsNC/0LUg0L7Qv9GA0LXQu9GP0YLRgdGPINCn0LXQvNC/0LjQvtC90Ysg0KjQutC+0LsuXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAg0JIg0YHQu9C10LTRg9GO0YnQuNC5INGN0YLQsNC/INC+0YIg0YjQutC+0LvRiyDQstGL0YXQvtC00LjRgiDRgtC+0LvRjNC60L4g0L7QtNC90LAg0LrQvtC80LDQvdC00LAuXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtMlwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdmVydGljYWwtZ2FwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1mZWF0dXJlLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImg0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLWZlYXR1cmUtdGl0bGUgdGV4dC1tYWluLTEgbWItMCBmMWVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIyINCt0YLQsNC/OlwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWZlYXR1cmUtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWZlYXR1cmUtY29udFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJuay1mZWF0dXJlLXRpdGxlIHRleHQtbWFpbi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQoNCV0JPQmNCe0J3QkNCb0KzQndCr0JUg0JrQktCQ0JvQmNCk0JjQmtCQ0KbQmNCYXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LnQtNC10YIg0YEgMTIg0LDQstCz0YPRgdGC0LAg0L/QviAxOSDQsNCy0LPRg9GB0YLQsCAyMDE4INCz0L7QtNCwLlwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQp9C10LzQv9C40L7QvdGLINGI0LrQvtC7INCy0YHRgtGA0LXRgtGP0YLRgdGPINCyINC+0YLQsdC+0YDQvtGH0L3QvtC8INGC0YPRgNC1LCDRh9GC0L7QsdGLINC+0L/RgNC10LTQtdC70LjRgtGMINGE0LjQvdCw0LvQuNGB0YLQvtCyLCDQutC+0YLQvtGA0YvQtSDQtNCw0LvRjNGI0LUg0L/RgNC+0LTQvtC20LDRgiDQsdC+0YDRjNCx0YMg0LfQsCDQt9Cy0LDQvdC40LUg0KfQtdC80L/QuNC+0L3QsCDQoNC+0YHRgdC40LguXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwLTJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHZlcnRpY2FsLWdhcFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS0xXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJoNFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuay1mZWF0dXJlLXRpdGxlIHRleHQtbWFpbi0xIG1iLTAgZjFlbVwiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMyDQrdGC0LDQvzpcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1mZWF0dXJlLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1mZWF0dXJlLWNvbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS10aXRsZSB0ZXh0LW1haW4tMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0JLRgdC10YDQvtGB0YHQuNC50YHQutC40Lkg0KTQuNC90LDQu1wiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCk0LjQvdCw0Lsg0L/RgNC+0LnQtNC10YIg0YEgMjYg0L/QviAzMSDQsNCy0LPRg9GB0YLQsCAyMDE4INCz0L7QtNCwLlwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LHQtdC00LjRgtC10LvRjyDRg9C30L3QsNC10YIg0LLRgdGPINGB0YLRgNCw0L3QsCFcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtMlwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5hdXRoZW50aWNhdGVkXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHZlcnRpY2FsLWdhcFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIMKgXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwicmVnaXN0ZXJcIiB9IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQoNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0Ywg0L3QsCDRgtGD0YDQvdC40YBcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTM1M2E1OGY0XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzUzYTU4ZjRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfMjAxOC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMzUzYTU4ZjRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfMjAxOC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvdXJuYW1lbnRfMjAxOC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b3VybmFtZW50XzIwMTgudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zNTNhNThmNFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvdXJuYW1lbnRfMjAxOC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHBhZ2VzXFxcXHRvdXJuYW1lbnRfMjAxOC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzUzYTU4ZjRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNTNhNThmNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdG91cm5hbWVudF8yMDE4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3RvdXJuYW1lbnRfMjAxOC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNCJdLCJzb3VyY2VSb290IjoiIn0=