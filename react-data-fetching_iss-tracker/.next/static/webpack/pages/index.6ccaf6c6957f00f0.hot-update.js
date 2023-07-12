"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ISSTracker/index.js":
/*!****************************************!*\
  !*** ./components/ISSTracker/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ISSTracker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Controls_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/index */ \"./components/Controls/index.js\");\n/* harmony import */ var _Map_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Map/index */ \"./components/Map/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst URL = \"https://api.wheretheiss.at/v1/satellites/25544\";\nfunction ISSTracker() {\n    _s();\n    // const [coords, setCoords] = useState({\n    //   longitude: 0,\n    //   latitude: 0,\n    // });\n    const fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch(...args).then((res)=>res.json());\n    };\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"https://api.wheretheiss.at/v1/satellites/25544\", fetcher);\n    console.log(data);\n    // setCoords({ longitude: data.longitude, latitude: data.latitude });\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"failed to load\"\n    }, void 0, false, {\n        fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 21,\n        columnNumber: 21\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 22,\n        columnNumber: 25\n    }, this);\n    //     }\n    // async function getISSCoords() {\n    //   try {\n    //     const response = await fetch(URL);\n    //     if (response.ok) {\n    //       const data = await response.json();\n    //       setCoords({ longitude: data.longitude, latitude: data.latitude });\n    //     }\n    //   } catch (error) {\n    //     console.error(error);\n    //   }\n    // }\n    // useEffect(() => {\n    //   const timer = setInterval(() => {\n    //     getISSCoords();\n    //   }, 5000);\n    //   return () => {\n    //     clearInterval(timer);\n    //   };\n    // }, []);\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Map_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                longitude: data.longitude,\n                latitude: data.latitude\n            }, void 0, false, {\n                fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Controls_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                longitude: coords.longitude,\n                latitude: coords.latitude\n            }, void 0, false, {\n                fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(ISSTracker, \"1mAecFEtEJ8mPMp0fPCTL8iO5Fs=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ISSTracker;\nvar _c;\n$RefreshReg$(_c, \"ISSTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lTU1RyYWNrZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDSDtBQUNWO0FBQ047QUFFekIsTUFBTUssTUFBTTtBQUVHLFNBQVNDLGFBQWE7O0lBQ25DLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixNQUFNQyxVQUFVLFdBQWFDO3lDQUFUQztZQUFBQTs7ZUFBU0QsU0FBU0MsTUFBTUMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFBRTtJQUVwRSxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUMsR0FBR1gsK0NBQU1BLENBQ3RDLGtEQUFpREc7SUFHbkRTLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWixxRUFBcUU7SUFDckUsSUFBSUMsT0FBTyxxQkFBTyw4REFBQ0k7a0JBQUk7Ozs7OztJQUN2QixJQUFJSCxXQUFXLHFCQUFPLDhEQUFDRztrQkFBSTs7Ozs7O0lBQzNCLFFBQVE7SUFFUixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLHlDQUF5QztJQUN6Qyx5QkFBeUI7SUFDekIsNENBQTRDO0lBQzVDLDJFQUEyRTtJQUMzRSxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixNQUFNO0lBQ04sSUFBSTtJQUVKLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGNBQWM7SUFFZCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLE9BQU87SUFDUCxVQUFVO0lBQ1IsSUFBSTtJQUVOLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNoQixrREFBR0E7Z0JBQUNpQixXQUFXUCxLQUFLTyxTQUFTO2dCQUFFQyxVQUFVUixLQUFLUSxRQUFROzs7Ozs7MEJBQ3ZELDhEQUFDbkIsdURBQVFBO2dCQUNQa0IsV0FBV0UsT0FBT0YsU0FBUztnQkFDM0JDLFVBQVVDLE9BQU9ELFFBQVE7Ozs7Ozs7Ozs7OztBQUtqQyxDQUFDO0dBbER1QmY7O1FBT1lGLDJDQUFNQTs7O0tBUGxCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lTU1RyYWNrZXIvaW5kZXguanM/NjdhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4uL0NvbnRyb2xzL2luZGV4XCI7XG5pbXBvcnQgTWFwIGZyb20gXCIuLi9NYXAvaW5kZXhcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5jb25zdCBVUkwgPSBcImh0dHBzOi8vYXBpLndoZXJldGhlaXNzLmF0L3YxL3NhdGVsbGl0ZXMvMjU1NDRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSVNTVHJhY2tlcigpIHtcbiAgLy8gY29uc3QgW2Nvb3Jkcywgc2V0Q29vcmRzXSA9IHVzZVN0YXRlKHtcbiAgLy8gICBsb25naXR1ZGU6IDAsXG4gIC8vICAgbGF0aXR1ZGU6IDAsXG4gIC8vIH0pO1xuICBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nfSA9IHVzZVNXUihcbiAgICBcImh0dHBzOi8vYXBpLndoZXJldGhlaXNzLmF0L3YxL3NhdGVsbGl0ZXMvMjU1NDRcIixmZXRjaGVyXG4gICk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vIHNldENvb3Jkcyh7IGxvbmdpdHVkZTogZGF0YS5sb25naXR1ZGUsIGxhdGl0dWRlOiBkYXRhLmxhdGl0dWRlIH0pO1xuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+O1xuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+O1xuICAvLyAgICAgfVxuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGdldElTU0Nvb3JkcygpIHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICAvLyAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gIC8vICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vICAgICAgIHNldENvb3Jkcyh7IGxvbmdpdHVkZTogZGF0YS5sb25naXR1ZGUsIGxhdGl0dWRlOiBkYXRhLmxhdGl0dWRlIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAvLyAgICAgZ2V0SVNTQ29vcmRzKCk7XG4gIC8vICAgfSwgNTAwMCk7XG5cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuICAgIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPE1hcCBsb25naXR1ZGU9e2RhdGEubG9uZ2l0dWRlfSBsYXRpdHVkZT17ZGF0YS5sYXRpdHVkZX0gLz5cbiAgICAgIDxDb250cm9sc1xuICAgICAgICBsb25naXR1ZGU9e2Nvb3Jkcy5sb25naXR1ZGV9XG4gICAgICAgIGxhdGl0dWRlPXtjb29yZHMubGF0aXR1ZGV9XG4gICAgICAgIC8vIG9uUmVmcmVzaD17Z2V0SVNTQ29vcmRzfVxuICAgICAgLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250cm9scyIsIk1hcCIsInVzZVNXUiIsIlVSTCIsIklTU1RyYWNrZXIiLCJmZXRjaGVyIiwiZmV0Y2giLCJhcmdzIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibWFpbiIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiY29vcmRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ISSTracker/index.js\n"));

/***/ })

});