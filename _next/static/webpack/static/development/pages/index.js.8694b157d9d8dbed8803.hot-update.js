webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-html-parser */ "./node_modules/node-html-parser/dist/index.js");
/* harmony import */ var node_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/posts */ "./lib/posts.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import Link from 'next/link'




var Post = function Post(_ref) {
  var params = _ref.params;

  var contentHtml = function contentHtml() {
    var root = Object(node_html_parser__WEBPACK_IMPORTED_MODULE_2__["parse"])(params.contentHtml);
    var original_title_str = root.querySelector('h1').toString();
    var title = root.querySelector('h1');
    title.set_content("<a href=\"".concat("" + "/posts/".concat(params.id), "\" >").concat(title.innerHTML, "</a>")); // console.log('contentHtml',original_title_str, title.toString())

    return params.contentHtml.replace(original_title_str, title.toString());
  };

  return __jsx("div", {
    className: "mb-5"
  }, __jsx("div", {
    className: "d-flex w-100 justify-content-end"
  }, __jsx("small", {
    className: "text-secondary"
  }, params.date)), __jsx("div", {
    className: "post",
    dangerouslySetInnerHTML: {
      __html: contentHtml()
    }
  }));
};

Post.getStaticProps = function _callee(_ref2) {
  var params, postData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          params = _ref2.params;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_posts__WEBPACK_IMPORTED_MODULE_4__["getPostData"])(params.id));

        case 3:
          postData = _context.sent;
          return _context.abrupt("return", {
            props: {
              postData: postData
            }
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var __N_SSG = true;
function Home(_ref3) {
  var posts = _ref3.posts;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx("div", null, posts.map(function (post) {
    return Post(post);
  })), __jsx("hr", {
    className: "mb-0"
  }), __jsx("div", {
    className: "w-100"
  }, __jsx("i", {
    className: "fas fa-home"
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.8694b157d9d8dbed8803.hot-update.js.map