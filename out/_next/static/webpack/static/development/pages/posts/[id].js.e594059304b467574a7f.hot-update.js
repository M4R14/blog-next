webpackHotUpdate("static/development/pages/posts/[id].js",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var __N_SSG = true;
function Post(_ref) {
  var postData = _ref.postData;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: postData.title,
    description: postData.description
  }), __jsx("div", {
    className: "post mb-5",
    dangerouslySetInnerHTML: {
      __html: postData.contentHtml
    }
  }));
}

/***/ })

})
//# sourceMappingURL=[id].js.e594059304b467574a7f.hot-update.js.map