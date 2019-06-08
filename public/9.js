webpackJsonp([9],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/errors/404.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'NotFound',
    layout: 'default',
    data: function data() {
        return {
            appName: window.config.appName,
            appLogo: window.config.appLogo
        };
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-208cc544\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/errors/404.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "nk-fullscreen-block" }, [
    _c("div", { staticClass: "nk-fullscreen-block-top" }, [
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c("div", { staticClass: "nk-gap-4" }),
          _vm._v(" "),
          _c("router-link", { attrs: { to: { name: "home" } } }, [
            _c("img", { attrs: { src: _vm.appLogo, alt: _vm.appName } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nk-gap-2" })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "nk-fullscreen-block-middle" }, [
      _c("div", { staticClass: "container text-center" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6 offset-md-3 col-lg-4 offset-lg-4" },
            [
              _c(
                "h1",
                {
                  staticClass: "text-main-1",
                  staticStyle: { "font-size": "150px" }
                },
                [_vm._v("404")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "nk-gap" }),
              _vm._v(" "),
              _c("h2", { staticClass: "h4" }, [
                _vm._v(_vm._s(_vm.$t("page_not_found")))
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "nk-gap-3" }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "nk-btn nk-btn-rounded nk-btn-color-white",
                  attrs: { to: { name: "home" } }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("go_home")) +
                      "\n          "
                  )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "nk-gap-3" })
      ])
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("Or such a page just doesn't exist... "),
      _c("br"),
      _vm._v(" Would you like to go back to the homepage?")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "nk-fullscreen-block-bottom" }, [
      _c("div", { staticClass: "nk-gap-2" }),
      _vm._v(" "),
      _c("ul", { staticClass: "nk-social-links-2 nk-social-links-center" }, [
        _c("li", [
          _c("a", { staticClass: "nk-social-twitch", attrs: { href: "#" } }, [
            _c("span", { staticClass: "fa fa-twitch" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "nk-social-steam", attrs: { href: "#" } }, [
            _c("span", { staticClass: "fa fa-steam" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "nk-social-facebook", attrs: { href: "#" } }, [
            _c("span", { staticClass: "fa fa-facebook" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            { staticClass: "nk-social-instagram", attrs: { href: "#" } },
            [_c("span", { staticClass: "fa fa-instagram" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "nk-social-linkedin", attrs: { href: "#" } }, [
            _c("span", { staticClass: "fa fa-linkedin" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            { staticClass: "nk-social-odnoklassniki", attrs: { href: "#" } },
            [_c("span", { staticClass: "fa fa-odnoklassniki" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "nk-social-vk", attrs: { href: "#" } }, [
            _c("span", { staticClass: "fa fa-vk" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { staticClass: "nk-social-youtube", attrs: { href: "#" } }, [
            _c("span", { staticClass: "fa fa-youtube-play" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "nk-gap-2" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-208cc544", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/pages/errors/404.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/errors/404.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-208cc544\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/errors/404.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\pages\\errors\\404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-208cc544", Component.options)
  } else {
    hotAPI.reload("data-v-208cc544", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9lcnJvcnMvNDA0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2Vycm9ycy80MDQudnVlPzkxMDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9lcnJvcnMvNDA0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7VUFtREE7WUFDQTs7O21DQUVBO21DQUVBO0FBSEE7O0FBSEEsRTs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQ0FBcUM7QUFDekQsZUFBZSx5Q0FBeUM7QUFDeEQ7QUFDQTtBQUNBLFNBQVMsNkJBQTZCO0FBQ3RDO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBLDZCQUE2QixTQUFTLE1BQU0sZUFBZSxFQUFFLEVBQUU7QUFDL0QsdUJBQXVCLFNBQVMscUNBQXFDLEVBQUU7QUFDdkU7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNENBQTRDO0FBQzNELGlCQUFpQix1Q0FBdUM7QUFDeEQsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsYUFBYSwyREFBMkQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNLGVBQWU7QUFDL0MsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0Q0FBNEM7QUFDbEUsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBLGdCQUFnQiwwREFBMEQ7QUFDMUU7QUFDQSxtQkFBbUIsMENBQTBDLFlBQVksRUFBRTtBQUMzRSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlDQUF5QyxZQUFZLEVBQUU7QUFDMUUsd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBNEMsWUFBWSxFQUFFO0FBQzdFLHdCQUF3QixnQ0FBZ0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2Q0FBNkMsWUFBWSxFQUFFO0FBQ3hFLHlCQUF5QixpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQTRDLFlBQVksRUFBRTtBQUM3RSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQWlELFlBQVksRUFBRTtBQUM1RSx5QkFBeUIscUNBQXFDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQyxZQUFZLEVBQUU7QUFDdkUsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBMkMsWUFBWSxFQUFFO0FBQzVFLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBLHVnQkFBdVg7QUFDdlg7QUFDQSwrUkFBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJuay1mdWxsc2NyZWVuLWJsb2NrXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5rLWZ1bGxzY3JlZW4tYmxvY2stdG9wXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcC00XCI+PC9kaXY+XG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdob21lJyB9XCI+XG4gICAgICAgICAgPGltZyA6c3JjPVwiYXBwTG9nb1wiIDphbHQ9XCJhcHBOYW1lXCI+XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXAtMlwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5rLWZ1bGxzY3JlZW4tYmxvY2stbWlkZGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTMgY29sLWxnLTQgb2Zmc2V0LWxnLTRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtbWFpbi0xXCIgc3R5bGU9XCJmb250LXNpemU6IDE1MHB4O1wiPjQwNDwvaDE+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImg0XCI+e3sgJHQoJ3BhZ2Vfbm90X2ZvdW5kJykgfX08L2gyPlxuXG4gICAgICAgICAgICA8ZGl2Pk9yIHN1Y2ggYSBwYWdlIGp1c3QgZG9lc24ndCBleGlzdC4uLiA8YnI+IFdvdWxkIHlvdSBsaWtlIHRvIGdvIGJhY2sgdG8gdGhlIGhvbWVwYWdlPzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcC0zXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdob21lJyB9XCIgY2xhc3M9XCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLXdoaXRlXCI+XG4gICAgICAgICAgICAgIHt7ICR0KCdnb19ob21lJykgfX1cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmstZ2FwLTNcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJuay1mdWxsc2NyZWVuLWJsb2NrLWJvdHRvbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcC0yXCI+PC9kaXY+XG4gICAgICA8dWwgY2xhc3M9XCJuay1zb2NpYWwtbGlua3MtMiBuay1zb2NpYWwtbGlua3MtY2VudGVyXCI+XG4gICAgICAgIDxsaT48YSBjbGFzcz1cIm5rLXNvY2lhbC10d2l0Y2hcIiBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtdHdpdGNoXCI+PC9zcGFuPjwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgY2xhc3M9XCJuay1zb2NpYWwtc3RlYW1cIiBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtc3RlYW1cIj48L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBjbGFzcz1cIm5rLXNvY2lhbC1mYWNlYm9va1wiIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGNsYXNzPVwibmstc29jaWFsLWluc3RhZ3JhbVwiIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1pbnN0YWdyYW1cIj48L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBjbGFzcz1cIm5rLXNvY2lhbC1saW5rZWRpblwiIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1saW5rZWRpblwiPjwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGNsYXNzPVwibmstc29jaWFsLW9kbm9rbGFzc25pa2lcIiBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZmEgZmEtb2Rub2tsYXNzbmlraVwiPjwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGNsYXNzPVwibmstc29jaWFsLXZrXCIgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImZhIGZhLXZrXCI+PC9zcGFuPjwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgY2xhc3M9XCJuay1zb2NpYWwteW91dHViZVwiIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS15b3V0dWJlLXBsYXlcIj48L3NwYW4+PC9hPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcC0yXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdOb3RGb3VuZCcsXG4gICAgICAgIGxheW91dDogJ2RlZmF1bHQnLFxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICAgICAgYXBwTmFtZTogd2luZG93LmNvbmZpZy5hcHBOYW1lLFxuICAgICAgICAgICAgYXBwTG9nbzogd2luZG93LmNvbmZpZy5hcHBMb2dvXG4gICAgICAgIH0pLFxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZXJyb3JzLzQwNC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZnVsbHNjcmVlbi1ibG9ja1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWZ1bGxzY3JlZW4tYmxvY2stdG9wXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtNFwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaG9tZVwiIH0gfSB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmFwcExvZ28sIGFsdDogX3ZtLmFwcE5hbWUgfSB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtMlwiIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZnVsbHNjcmVlbi1ibG9jay1taWRkbGVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNiBvZmZzZXQtbWQtMyBjb2wtbGctNCBvZmZzZXQtbGctNFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiaDFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LW1haW4tMVwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxNTBweFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI0MDRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJoNFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInBhZ2Vfbm90X2ZvdW5kXCIpKSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtM1wiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJob21lXCIgfSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJnb19ob21lXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtM1wiIH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDEpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfdm0uX3YoXCJPciBzdWNoIGEgcGFnZSBqdXN0IGRvZXNuJ3QgZXhpc3QuLi4gXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBXb3VsZCB5b3UgbGlrZSB0byBnbyBiYWNrIHRvIHRoZSBob21lcGFnZT9cIilcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWZ1bGxzY3JlZW4tYmxvY2stYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtMlwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJuay1zb2NpYWwtbGlua3MtMiBuay1zb2NpYWwtbGlua3MtY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuay1zb2NpYWwtdHdpdGNoXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHdpdGNoXCIgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstc29jaWFsLXN0ZWFtXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc3RlYW1cIiB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuay1zb2NpYWwtZmFjZWJvb2tcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1mYWNlYm9va1wiIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5rLXNvY2lhbC1pbnN0YWdyYW1cIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWluc3RhZ3JhbVwiIH0pXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLXNvY2lhbC1saW5rZWRpblwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWxpbmtlZGluXCIgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstc29jaWFsLW9kbm9rbGFzc25pa2lcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLW9kbm9rbGFzc25pa2lcIiB9KV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuay1zb2NpYWwtdmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS12a1wiIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLXNvY2lhbC15b3V0dWJlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEteW91dHViZS1wbGF5XCIgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtMlwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMjA4Y2M1NDRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTIwOGNjNTQ0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9lcnJvcnMvNDA0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0yMDhjYzU0NFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvZXJyb3JzLzQwNC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vNDA0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjA4Y2M1NDRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi80MDQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxccGFnZXNcXFxcZXJyb3JzXFxcXDQwNC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjA4Y2M1NDRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yMDhjYzU0NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9lcnJvcnMvNDA0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2Vycm9ycy80MDQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOSJdLCJzb3VyY2VSb290IjoiIn0=