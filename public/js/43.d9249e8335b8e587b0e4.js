webpackJsonp([43],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/settings/index.vue":
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
  middleware: 'auth',

  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
    user: 'auth/user'
  }), {
    tabs: function tabs() {
      return [{
        icon: 'user',
        name: this.$t('profile'),
        route: 'settings.profile'
      }, {
        icon: 'university',
        name: this.$t('school'),
        route: 'settings.school'
      }, {
        icon: 'users',
        name: this.$t('team'),
        route: 'settings.team'
      }, {
        icon: 'book',
        name: this.$t('instruction'),
        route: 'settings.instruction'
      }];
    }
  }),
  methods: {
    sendVerifyEmail: function sendVerifyEmail() {
      var _this = this;

      axios.post('/api/email/verify_code/resend').then(function (response) {
        _this.email_info = response.data.message;
      });
    }
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/settings/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.settings-card .card-body {\n  padding: 0;\n}\n", "", {"version":3,"sources":["C:/xampp/htdocs/sector.local/resources/assets/js/pages/settings/resources/assets/js/pages/settings/index.vue"],"names":[],"mappings":";AAkFA;EACA,WAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <div class=\"nk-info-box warning text-danger p-15 mb-20\" v-if=\"!user.confirmed\">\n        <em>{{$t(\"confirm_email_text\")}}</em>\n      </div>\n    </div>\n\n    <div class=\"col-md-3\">\n      <card :title=\"$t('settings')\" class=\"settings-card\">\n        <ul class=\"nav flex-column nav-pills\">\n          <li v-for=\"tab in tabs\" :key=\"tab.route\" class=\"nav-item\">\n            <router-link :to=\"{ name: tab.route }\" class=\"nav-link\" active-class=\"active\">\n              <fa :icon=\"tab.icon\" fixed-width/>\n              {{ tab.name }}\n            </router-link>\n          </li>\n        </ul>\n\n        <router-link :to=\"{ name: 'settings.team' }\" class=\"nk-btn nk-btn-rounded nk-btn-color-main-1 text-white mt-20 w-100\">\n          Собери команду<br/> вашей школы\n        </router-link>\n\n      </card>\n    </div>\n\n    <div class=\"col-md-9\">\n      <transition name=\"fade\" mode=\"out-in\">\n        <router-view/>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { mapGetters } from 'vuex'\n\nexport default {\n  middleware: 'auth',\n\n  computed: {\n      ...mapGetters({\n          user: 'auth/user'\n      }),\n      tabs () {\n        return [\n          {\n            icon: 'user',\n            name: this.$t('profile'),\n            route: 'settings.profile'\n          },\n          {\n            icon: 'university',\n            name: this.$t('school'),\n            route: 'settings.school'\n          },\n          {\n            icon: 'users',\n            name: this.$t('team'),\n            route: 'settings.team'\n          },\n          {\n              icon: 'book',\n              name: this.$t('instruction'),\n              route: 'settings.instruction'\n          },\n        ]\n      }\n  },\n  methods: {\n      sendVerifyEmail()\n      {\n          axios.post('/api/email/verify_code/resend').then((response) => {\n              this.email_info = response.data.message;\n          })\n      }\n  }\n}\n</script>\n\n<style>\n.settings-card .card-body {\n  padding: 0;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-90a3677a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      !_vm.user.confirmed
        ? _c(
            "div",
            { staticClass: "nk-info-box warning text-danger p-15 mb-20" },
            [_c("em", [_vm._v(_vm._s(_vm.$t("confirm_email_text")))])]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-3" },
      [
        _c(
          "card",
          {
            staticClass: "settings-card",
            attrs: { title: _vm.$t("settings") }
          },
          [
            _c(
              "ul",
              { staticClass: "nav flex-column nav-pills" },
              _vm._l(_vm.tabs, function(tab) {
                return _c(
                  "li",
                  { key: tab.route, staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: {
                          to: { name: tab.route },
                          "active-class": "active"
                        }
                      },
                      [
                        _c("fa", {
                          attrs: { icon: tab.icon, "fixed-width": "" }
                        }),
                        _vm._v(
                          "\n            " + _vm._s(tab.name) + "\n          "
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass:
                  "nk-btn nk-btn-rounded nk-btn-color-main-1 text-white mt-20 w-100",
                attrs: { to: { name: "settings.team" } }
              },
              [
                _vm._v("\n        Собери команду"),
                _c("br"),
                _vm._v(" вашей школы\n      ")
              ]
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-9" },
      [
        _c(
          "transition",
          { attrs: { name: "fade", mode: "out-in" } },
          [_c("router-view")],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-90a3677a", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/settings/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/settings/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("34377bff", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/pages/settings/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/settings/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90a3677a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-90a3677a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/settings/index.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-90a3677a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/settings/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90a3677a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/settings/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90a3677a", Component.options)
  } else {
    hotAPI.reload("data-v-90a3677a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWU/ZDcxNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZT85Y2MwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlPzQ2ZjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBc0NBO0FBQ0Esb0JBREE7O0FBR0EsdUNBQ0E7QUFDQTtBQURBLElBREE7QUFJQSxRQUpBLGtCQUlBO0FBQ0EsY0FDQTtBQUNBLG9CQURBO0FBRUEsZ0NBRkE7QUFHQTtBQUhBLE9BREEsRUFNQTtBQUNBLDBCQURBO0FBRUEsK0JBRkE7QUFHQTtBQUhBLE9BTkEsRUFXQTtBQUNBLHFCQURBO0FBRUEsNkJBRkE7QUFHQTtBQUhBLE9BWEEsRUFnQkE7QUFDQSxvQkFEQTtBQUVBLG9DQUZBO0FBR0E7QUFIQSxPQWhCQTtBQXNCQTtBQTNCQSxJQUhBO0FBZ0NBO0FBQ0EsbUJBREEsNkJBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBTkE7QUFoQ0EsQzs7Ozs7OztBQ3RDQSwyQkFBMkIsbUJBQU8sQ0FBQywyQ0FBd0Q7QUFDM0Y7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGdDQUFnQyxlQUFlLEdBQUcsVUFBVSwrSkFBK0osTUFBTSxVQUFVLHlOQUF5Tiw0QkFBNEIsK1JBQStSLGtCQUFrQixvSEFBb0gsWUFBWSw0RkFBNEYsd0JBQXdCLHNXQUFzVyxhQUFhLGdDQUFnQyx3Q0FBd0MsdUJBQXVCLHNDQUFzQyxtQkFBbUIsK0JBQStCLHNIQUFzSCxjQUFjLDBIQUEwSCxjQUFjLGlIQUFpSCxjQUFjLG9JQUFvSSxxQkFBcUIsS0FBSyxlQUFlLGtDQUFrQyw0RUFBNEUsd0RBQXdELGFBQWEsVUFBVSxLQUFLLEdBQUcsbURBQW1ELGVBQWUsR0FBRywrQkFBK0I7O0FBRXY2RTs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDLGVBQWUsMkJBQTJCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNERBQTREO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQ0FBMkM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUEwQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsTUFBTSx3QkFBd0I7QUFDdEQsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEJBQTBCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUywrQkFBK0IsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNGLGtFQUFTO0FBQ3hCLElBQUksS0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3hHQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxxU0FBMlM7QUFDalUsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyx3REFBc0UsZ0NBQWdDO0FBQzNIO0FBQ0EsR0FBRyxLQUFVO0FBQ2I7QUFDQTtBQUNBLHNKQUFzSixrRkFBa0Y7QUFDeE8sK0pBQStKLGtGQUFrRjtBQUNqUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMsOFVBQWlSO0FBQzNSO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQWtFO0FBQ25HO0FBQzZiO0FBQ2E7QUFDMWM7QUFDd1E7QUFDeFE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzV0FBYztBQUNoQixFQUFFLDhOQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvNDMuZDkyNDllODMzNWI4ZTU4N2IwZTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuay1pbmZvLWJveCB3YXJuaW5nIHRleHQtZGFuZ2VyIHAtMTUgbWItMjBcIiB2LWlmPVwiIXVzZXIuY29uZmlybWVkXCI+XG4gICAgICAgIDxlbT57eyR0KFwiY29uZmlybV9lbWFpbF90ZXh0XCIpfX08L2VtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cbiAgICAgIDxjYXJkIDp0aXRsZT1cIiR0KCdzZXR0aW5ncycpXCIgY2xhc3M9XCJzZXR0aW5ncy1jYXJkXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBuYXYtcGlsbHNcIj5cbiAgICAgICAgICA8bGkgdi1mb3I9XCJ0YWIgaW4gdGFic1wiIDprZXk9XCJ0YWIucm91dGVcIiBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiB0YWIucm91dGUgfVwiIGNsYXNzPVwibmF2LWxpbmtcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPGZhIDppY29uPVwidGFiLmljb25cIiBmaXhlZC13aWR0aC8+XG4gICAgICAgICAgICAgIHt7IHRhYi5uYW1lIH19XG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3NldHRpbmdzLnRlYW0nIH1cIiBjbGFzcz1cIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGUgbXQtMjAgdy0xMDBcIj5cbiAgICAgICAgICDQodC+0LHQtdGA0Lgg0LrQvtC80LDQvdC00YM8YnIvPiDQstCw0YjQtdC5INGI0LrQvtC70YtcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cblxuICAgICAgPC9jYXJkPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC05XCI+XG4gICAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiIG1vZGU9XCJvdXQtaW5cIj5cbiAgICAgICAgPHJvdXRlci12aWV3Lz5cbiAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlkZGxld2FyZTogJ2F1dGgnLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICB1c2VyOiAnYXV0aC91c2VyJ1xuICAgICAgfSksXG4gICAgICB0YWJzICgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAndXNlcicsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdwcm9maWxlJyksXG4gICAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnByb2ZpbGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAndW5pdmVyc2l0eScsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdzY2hvb2wnKSxcbiAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3Muc2Nob29sJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogJ3VzZXJzJyxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3RlYW0nKSxcbiAgICAgICAgICAgIHJvdXRlOiAnc2V0dGluZ3MudGVhbSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2Jvb2snLFxuICAgICAgICAgICAgICBuYW1lOiB0aGlzLiR0KCdpbnN0cnVjdGlvbicpLFxuICAgICAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLmluc3RydWN0aW9uJ1xuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgICAgc2VuZFZlcmlmeUVtYWlsKClcbiAgICAgIHtcbiAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2VtYWlsL3ZlcmlmeV9jb2RlL3Jlc2VuZCcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZW1haWxfaW5mbyA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZTtcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnNldHRpbmdzLWNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zZXR0aW5ncy1jYXJkIC5jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L3hhbXBwL2h0ZG9jcy9zZWN0b3IubG9jYWwvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBa0ZBO0VBQ0EsV0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJpbmRleC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJuay1pbmZvLWJveCB3YXJuaW5nIHRleHQtZGFuZ2VyIHAtMTUgbWItMjBcXFwiIHYtaWY9XFxcIiF1c2VyLmNvbmZpcm1lZFxcXCI+XFxuICAgICAgICA8ZW0+e3skdChcXFwiY29uZmlybV9lbWFpbF90ZXh0XFxcIil9fTwvZW0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxuICAgICAgPGNhcmQgOnRpdGxlPVxcXCIkdCgnc2V0dGluZ3MnKVxcXCIgY2xhc3M9XFxcInNldHRpbmdzLWNhcmRcXFwiPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgZmxleC1jb2x1bW4gbmF2LXBpbGxzXFxcIj5cXG4gICAgICAgICAgPGxpIHYtZm9yPVxcXCJ0YWIgaW4gdGFic1xcXCIgOmtleT1cXFwidGFiLnJvdXRlXFxcIiBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogdGFiLnJvdXRlIH1cXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgYWN0aXZlLWNsYXNzPVxcXCJhY3RpdmVcXFwiPlxcbiAgICAgICAgICAgICAgPGZhIDppY29uPVxcXCJ0YWIuaWNvblxcXCIgZml4ZWQtd2lkdGgvPlxcbiAgICAgICAgICAgICAge3sgdGFiLm5hbWUgfX1cXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG5cXG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3NldHRpbmdzLnRlYW0nIH1cXFwiIGNsYXNzPVxcXCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMSB0ZXh0LXdoaXRlIG10LTIwIHctMTAwXFxcIj5cXG4gICAgICAgICAg0KHQvtCx0LXRgNC4INC60L7QvNCw0L3QtNGDPGJyLz4g0LLQsNGI0LXQuSDRiNC60L7Qu9GLXFxuICAgICAgICA8L3JvdXRlci1saW5rPlxcblxcbiAgICAgIDwvY2FyZD5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5cXG4gICAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJmYWRlXFxcIiBtb2RlPVxcXCJvdXQtaW5cXFwiPlxcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cXG4gICAgICA8L3RyYW5zaXRpb24+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1pZGRsZXdhcmU6ICdhdXRoJyxcXG5cXG4gIGNvbXB1dGVkOiB7XFxuICAgICAgLi4ubWFwR2V0dGVycyh7XFxuICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInXFxuICAgICAgfSksXFxuICAgICAgdGFicyAoKSB7XFxuICAgICAgICByZXR1cm4gW1xcbiAgICAgICAgICB7XFxuICAgICAgICAgICAgaWNvbjogJ3VzZXInLFxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3Byb2ZpbGUnKSxcXG4gICAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnByb2ZpbGUnXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICBpY29uOiAndW5pdmVyc2l0eScsXFxuICAgICAgICAgICAgbmFtZTogdGhpcy4kdCgnc2Nob29sJyksXFxuICAgICAgICAgICAgcm91dGU6ICdzZXR0aW5ncy5zY2hvb2wnXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICBpY29uOiAndXNlcnMnLFxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ3RlYW0nKSxcXG4gICAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLnRlYW0nXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICAgIGljb246ICdib29rJyxcXG4gICAgICAgICAgICAgIG5hbWU6IHRoaXMuJHQoJ2luc3RydWN0aW9uJyksXFxuICAgICAgICAgICAgICByb3V0ZTogJ3NldHRpbmdzLmluc3RydWN0aW9uJ1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgXVxcbiAgICAgIH1cXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgICAgc2VuZFZlcmlmeUVtYWlsKClcXG4gICAgICB7XFxuICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvZW1haWwvdmVyaWZ5X2NvZGUvcmVzZW5kJykudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgIHRoaXMuZW1haWxfaW5mbyA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZTtcXG4gICAgICAgICAgfSlcXG4gICAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uc2V0dGluZ3MtY2FyZCAuY2FyZC1ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTkwYTM2NzdhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOTBhMzY3N2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgIV92bS51c2VyLmNvbmZpcm1lZFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstaW5mby1ib3ggd2FybmluZyB0ZXh0LWRhbmdlciBwLTE1IG1iLTIwXCIgfSxcbiAgICAgICAgICAgIFtfYyhcImVtXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcImNvbmZpcm1fZW1haWxfdGV4dFwiKSkpXSldXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJjYXJkXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtY2FyZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS4kdChcInNldHRpbmdzXCIpIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2IGZsZXgtY29sdW1uIG5hdi1waWxsc1wiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGFicywgZnVuY3Rpb24odGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHRhYi5yb3V0ZSwgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7IG5hbWU6IHRhYi5yb3V0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogdGFiLmljb24sIFwiZml4ZWQtd2lkdGhcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyh0YWIubmFtZSkgKyBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMSB0ZXh0LXdoaXRlIG10LTIwIHctMTAwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJzZXR0aW5ncy50ZWFtXCIgfSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgINCh0L7QsdC10YDQuCDQutC+0LzQsNC90LTRg1wiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiDQstCw0YjQtdC5INGI0LrQvtC70YtcXG4gICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC05XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiwgbW9kZTogXCJvdXQtaW5cIiB9IH0sXG4gICAgICAgICAgW19jKFwicm91dGVyLXZpZXdcIildLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi05MGEzNjc3YVwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTkwYTM2NzdhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtOTBhMzY3N2FcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTkwYTM2NzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMzQzNzdiZmZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTkwYTM2NzdhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi05MGEzNjc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOTBhMzY3N2FcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTkwYTM2NzdhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi05MGEzNjc3YVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05MGEzNjc3YVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05MGEzNjc3YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTkwYTM2NzdhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9pbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA0MyJdLCJzb3VyY2VSb290IjoiIn0=