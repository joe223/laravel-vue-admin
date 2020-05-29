(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/src/views/guide/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/src/views/guide/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! driver.js */ "./resources/backend/node_modules/driver.js/dist/driver.min.js");
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(driver_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var driver_js_dist_driver_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! driver.js/dist/driver.min.css */ "./resources/backend/node_modules/driver.js/dist/driver.min.css");
/* harmony import */ var driver_js_dist_driver_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(driver_js_dist_driver_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./steps */ "./resources/backend/src/views/guide/steps.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import driver.js

 // import driver.js css


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Guide',
  data: function data() {
    return {
      driver: null
    };
  },
  mounted: function mounted() {
    this.driver = new driver_js__WEBPACK_IMPORTED_MODULE_0___default.a();
  },
  methods: {
    guide: function guide() {
      this.driver.defineSteps(_steps__WEBPACK_IMPORTED_MODULE_2__["default"]);
      this.driver.start();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/src/views/guide/index.vue?vue&type=template&id=a6b456a0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/backend/src/views/guide/index.vue?vue&type=template&id=a6b456a0& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-container" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { icon: "el-icon-question", type: "primary" },
          on: {
            click: function($event) {
              $event.preventDefault()
              $event.stopPropagation()
              return _vm.guide($event)
            }
          }
        },
        [_vm._v("\n    Show Guide\n  ")]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("aside", [
      _vm._v(
        "\n    The guide page is useful for some people who entered the project for the first time. You can briefly introduce the\n    features of the project. Demo is based on\n    "
      ),
      _c(
        "a",
        {
          attrs: {
            href: "https://github.com/kamranahmedse/driver.js",
            target: "_blank"
          }
        },
        [_vm._v("driver.js.")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/backend/src/views/guide/index.vue":
/*!*****************************************************!*\
  !*** ./resources/backend/src/views/guide/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a6b456a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a6b456a0& */ "./resources/backend/src/views/guide/index.vue?vue&type=template&id=a6b456a0&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/backend/src/views/guide/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a6b456a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a6b456a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/backend/src/views/guide/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/backend/src/views/guide/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/backend/src/views/guide/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/src/views/guide/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/backend/src/views/guide/index.vue?vue&type=template&id=a6b456a0&":
/*!************************************************************************************!*\
  !*** ./resources/backend/src/views/guide/index.vue?vue&type=template&id=a6b456a0& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a6b456a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a6b456a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/backend/src/views/guide/index.vue?vue&type=template&id=a6b456a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a6b456a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a6b456a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/backend/src/views/guide/steps.js":
/*!****************************************************!*\
  !*** ./resources/backend/src/views/guide/steps.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var steps = [{
  element: '#hamburger-container',
  popover: {
    title: 'Hamburger',
    description: 'Open && Close sidebar',
    position: 'bottom'
  }
}, {
  element: '#breadcrumb-container',
  popover: {
    title: 'Breadcrumb',
    description: 'Indicate the current page location',
    position: 'bottom'
  }
}, {
  element: '#header-search',
  popover: {
    title: 'Page Search',
    description: 'Page search, quick navigation',
    position: 'left'
  }
}, {
  element: '#screenfull',
  popover: {
    title: 'Screenfull',
    description: 'Set the page into fullscreen',
    position: 'left'
  }
}, {
  element: '#size-select',
  popover: {
    title: 'Switch Size',
    description: 'Switch the system size',
    position: 'left'
  }
}, {
  element: '#tags-view-container',
  popover: {
    title: 'Tags view',
    description: 'The history of the page you visited',
    position: 'bottom'
  },
  padding: 0
}];
/* harmony default export */ __webpack_exports__["default"] = (steps);

/***/ })

}]);