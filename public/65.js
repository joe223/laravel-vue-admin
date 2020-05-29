(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./resources/backend/src/vendor/Export2Zip.js":
/*!****************************************************!*\
  !*** ./resources/backend/src/vendor/Export2Zip.js ***!
  \****************************************************/
/*! exports provided: export_txt_to_zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "export_txt_to_zip", function() { return export_txt_to_zip; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./resources/backend/node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jszip */ "./resources/backend/node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable */


function export_txt_to_zip(th, jsonData, txtName, zipName) {
  var zip = new jszip__WEBPACK_IMPORTED_MODULE_1___default.a();
  var txt_name = txtName || 'file';
  var zip_name = zipName || 'file';
  var data = jsonData;
  var txtData = "".concat(th, "\r\n");
  data.forEach(function (row) {
    var tempStr = '';
    tempStr = row.toString();
    txtData += "".concat(tempStr, "\r\n");
  });
  zip.file("".concat(txt_name, ".txt"), txtData);
  zip.generateAsync({
    type: "blob"
  }).then(function (blob) {
    Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "".concat(zip_name, ".zip"));
  }, function (err) {
    alert('导出失败');
  });
}

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);