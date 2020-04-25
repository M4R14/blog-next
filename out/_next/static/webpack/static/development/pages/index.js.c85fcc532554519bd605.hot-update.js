webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/*! exports provided: getAllPostIds, getPostData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPostIds", function() { return getAllPostIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostData", function() { return getPostData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark */ "./node_modules/remark/index.js");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-html */ "./node_modules/remark-html/index.js");
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var fs = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");

var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

var matter = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");

var postsDirectory = path.join(process.cwd(), 'posts');
console.log({
  postsDirectory: postsDirectory
});


function getAllPostIds() {
  var fileNames = fs.readdirSync(postsDirectory); // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map(function (fileName) {
    var id = fileName.replace(/\.md$/, '');
    var fullPath = path.join(postsDirectory, "".concat(id, ".md"));
    var fileContents = fs.readFileSync(fullPath, 'utf8');
    var matterResult = matter(fileContents);
    return {
      params: _objectSpread({
        id: id
      }, matterResult.data)
    };
  });
}
function getPostData(id) {
  var fullPath, fileContents, matterResult, processedContent, contentHtml;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPostData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fullPath = path.join(postsDirectory, "".concat(id, ".md"));
          fileContents = fs.readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

          matterResult = matter(fileContents); // Use remark to convert markdown into HTML string

          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(remark__WEBPACK_IMPORTED_MODULE_2___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_3___default.a).process(matterResult.content));

        case 5:
          processedContent = _context.sent;
          contentHtml = processedContent.toString(); // Combine the data with the id

          return _context.abrupt("return", _objectSpread({
            id: id,
            contentHtml: contentHtml
          }, matterResult.data));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.c85fcc532554519bd605.hot-update.js.map