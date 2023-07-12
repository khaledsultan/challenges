"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, {}, void 0, false, {\n                fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-styled-components_lotr-app-styling/pages/_app.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-styled-components_lotr-app-styling/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUF3QztBQUV6QixTQUFTQyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQscUJBQ0U7OzBCQUNFLDhEQUFDSCxnREFBV0E7Ozs7OzBCQUNaLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtc3R5bGVkLWNvbXBvbmVudHNfbG90ci1hcHAtc3R5bGluZy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles.js":
/*!*******************!*\
  !*** ./styles.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: system-ui;\n    /* background-color: aqua; */\n  }\n\n\n:root {\n  /* Color styles */\n  --color-earth: #282828;\n  --color-clouds: #f1f1f1;\n  --color-smoke: #d4d1cd;\n\n  /* Font styles */\n  --font-family: serif;\n  /*\n    use like:\n    font: var(--font-body);\n  */\n  --font-headline-1: normal 700 44px/48px var(--font-family);\n  --font-headline-2: normal 700 32px/41px var(--font-family);\n  --font-title: normal 700 16px/20px var(--font-family);\n  --font-caption: normal 500 12px/15px var(--font-family);\n  --font-caption--italic: italic 400 12px/15px var(--font-family);\n  --font-body: normal 400 16px/20px var(--font-family);\n\n  /* Effect styles */\n  /*\n    use like:\n    box-shadow: var(--box-shadow-book);\n  */\n  --box-shadow-book: 0 4px 8px -2px rgba(0, 0, 0, 0.09),\n    0 7px 4px -4px rgba(0, 0, 0, 0.07), 0 16px 8px -8px rgba(0, 0, 0, 0.07),\n    0 22px 12px -12px rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 0, 0, 0.06);\n\n  --box-shadow-book--hover: 0 6px 11px -2px rgba(0, 0, 0, 0.12),\n    0 8px 7px -4px rgba(0, 0, 0, 0.09), 0 17px 11px -8px rgba(0, 0, 0, 0.09),\n    0 24px 15px -12px rgba(0, 0, 0, 0.09), 0 4px 15px 0 rgba(0, 0, 0, 0.05);\n}\n\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRS9DLE1BQU1DLGNBQWNELGdFQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEM3QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtc3R5bGVkLWNvbXBvbmVudHNfbG90ci1hcHAtc3R5bGluZy8uL3N0eWxlcy5qcz82YTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xuICB9XG5cblxuOnJvb3Qge1xuICAvKiBDb2xvciBzdHlsZXMgKi9cbiAgLS1jb2xvci1lYXJ0aDogIzI4MjgyODtcbiAgLS1jb2xvci1jbG91ZHM6ICNmMWYxZjE7XG4gIC0tY29sb3Itc21va2U6ICNkNGQxY2Q7XG5cbiAgLyogRm9udCBzdHlsZXMgKi9cbiAgLS1mb250LWZhbWlseTogc2VyaWY7XG4gIC8qXG4gICAgdXNlIGxpa2U6XG4gICAgZm9udDogdmFyKC0tZm9udC1ib2R5KTtcbiAgKi9cbiAgLS1mb250LWhlYWRsaW5lLTE6IG5vcm1hbCA3MDAgNDRweC80OHB4IHZhcigtLWZvbnQtZmFtaWx5KTtcbiAgLS1mb250LWhlYWRsaW5lLTI6IG5vcm1hbCA3MDAgMzJweC80MXB4IHZhcigtLWZvbnQtZmFtaWx5KTtcbiAgLS1mb250LXRpdGxlOiBub3JtYWwgNzAwIDE2cHgvMjBweCB2YXIoLS1mb250LWZhbWlseSk7XG4gIC0tZm9udC1jYXB0aW9uOiBub3JtYWwgNTAwIDEycHgvMTVweCB2YXIoLS1mb250LWZhbWlseSk7XG4gIC0tZm9udC1jYXB0aW9uLS1pdGFsaWM6IGl0YWxpYyA0MDAgMTJweC8xNXB4IHZhcigtLWZvbnQtZmFtaWx5KTtcbiAgLS1mb250LWJvZHk6IG5vcm1hbCA0MDAgMTZweC8yMHB4IHZhcigtLWZvbnQtZmFtaWx5KTtcblxuICAvKiBFZmZlY3Qgc3R5bGVzICovXG4gIC8qXG4gICAgdXNlIGxpa2U6XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1ib29rKTtcbiAgKi9cbiAgLS1ib3gtc2hhZG93LWJvb2s6IDAgNHB4IDhweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wOSksXG4gICAgMCA3cHggNHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjA3KSwgMCAxNnB4IDhweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wNyksXG4gICAgMCAyMnB4IDEycHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjA3KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XG5cbiAgLS1ib3gtc2hhZG93LWJvb2stLWhvdmVyOiAwIDZweCAxMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAwIDhweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwIDE3cHggMTFweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wOSksXG4gICAgMCAyNHB4IDE1cHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjA5KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbmAiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJHbG9iYWxTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();