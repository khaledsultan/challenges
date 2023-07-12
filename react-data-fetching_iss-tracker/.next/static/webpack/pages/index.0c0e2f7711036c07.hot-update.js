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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ISSTracker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Controls_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/index */ \"./components/Controls/index.js\");\n/* harmony import */ var _Map_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Map/index */ \"./components/Map/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst URL = \"https://api.wheretheiss.at/v1/satellites/25544\";\nfunction ISSTracker() {\n    _s();\n    const [coords, setCoords] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        longitude: 0,\n        latitude: 0\n    });\n    const fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch(...args).then((res)=>res.json());\n    };\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"https://api.wheretheiss.at/v1/satellites/25544\", fetcher);\n    // console.log(data);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"failed to load\"\n    }, void 0, false, {\n        fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 20,\n        columnNumber: 21\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 21,\n        columnNumber: 25\n    }, this);\n    setCoords({\n        longitude: data.longitude,\n        latitude: data.latitude\n    });\n    //     }\n    // async function getISSCoords() {\n    //   try {\n    //     const response = await fetch(URL);\n    //     if (response.ok) {\n    //       const data = await response.json();\n    //       setCoords({ longitude: data.longitude, latitude: data.latitude });\n    //     }\n    //   } catch (error) {\n    //     console.error(error);\n    //   }\n    // }\n    // useEffect(() => {\n    //   const timer = setInterval(() => {\n    //     getISSCoords();\n    //   }, 5000);\n    //   return () => {\n    //     clearInterval(timer);\n    //   };\n    // }, []);\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Map_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                longitude: coords.longitude,\n                latitude: coords.latitude\n            }, void 0, false, {\n                fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Controls_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                longitude: coords.longitude,\n                latitude: coords.latitude\n            }, void 0, false, {\n                fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(ISSTracker, \"2vtcyQtnB2F/0vVOkUlFn/ppRQA=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ISSTracker;\nvar _c;\n$RefreshReg$(_c, \"ISSTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lTU1RyYWNrZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDSDtBQUNWO0FBQ047QUFFekIsTUFBTUssTUFBTTtBQUVHLFNBQVNDLGFBQWE7O0lBQ25DLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUNuQ1EsV0FBVztRQUNYQyxVQUFVO0lBQ1o7SUFDQSxNQUFNQyxVQUFVLFdBQWFDO3lDQUFUQztZQUFBQTs7ZUFBU0QsU0FBU0MsTUFBTUMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFBRTtJQUVwRSxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUMsR0FBR2YsK0NBQU1BLENBQ3RDLGtEQUFpRE87SUFHckQscUJBQXFCO0lBQ25CLElBQUlPLE9BQU8scUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFDdkIsSUFBSUQsV0FBVyxxQkFBTyw4REFBQ0M7a0JBQUk7Ozs7OztJQUMzQlosVUFBVTtRQUFFQyxXQUFXUSxLQUFLUixTQUFTO1FBQUVDLFVBQVVPLEtBQUtQLFFBQVE7SUFBQztJQUMvRCxRQUFRO0lBRVIsa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLDRDQUE0QztJQUM1QywyRUFBMkU7SUFDM0UsUUFBUTtJQUNSLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsTUFBTTtJQUNOLElBQUk7SUFFSixvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0QixjQUFjO0lBRWQsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixPQUFPO0lBQ1AsVUFBVTtJQUNSLElBQUk7SUFFTixxQkFDRSw4REFBQ1c7OzBCQUNDLDhEQUFDbEIsa0RBQUdBO2dCQUFDTSxXQUFXRixPQUFPRSxTQUFTO2dCQUFFQyxVQUFVSCxPQUFPRyxRQUFROzs7Ozs7MEJBQzNELDhEQUFDUix1REFBUUE7Z0JBQ1BPLFdBQVdGLE9BQU9FLFNBQVM7Z0JBQzNCQyxVQUFVSCxPQUFPRyxRQUFROzs7Ozs7Ozs7Ozs7QUFLakMsQ0FBQztHQWxEdUJKOztRQU9ZRiwyQ0FBTUE7OztLQVBsQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JU1NUcmFja2VyL2luZGV4LmpzPzY3YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gXCIuLi9Db250cm9scy9pbmRleFwiO1xuaW1wb3J0IE1hcCBmcm9tIFwiLi4vTWFwL2luZGV4XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuY29uc3QgVVJMID0gXCJodHRwczovL2FwaS53aGVyZXRoZWlzcy5hdC92MS9zYXRlbGxpdGVzLzI1NTQ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElTU1RyYWNrZXIoKSB7XG4gIGNvbnN0IFtjb29yZHMsIHNldENvb3Jkc10gPSB1c2VTdGF0ZSh7XG4gICAgbG9uZ2l0dWRlOiAwLFxuICAgIGxhdGl0dWRlOiAwLFxuICB9KTtcbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZ30gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL2FwaS53aGVyZXRoZWlzcy5hdC92MS9zYXRlbGxpdGVzLzI1NTQ0XCIsZmV0Y2hlclxuICApO1xuXG4vLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWlsZWQgdG8gbG9hZDwvZGl2PjtcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcbiAgc2V0Q29vcmRzKHsgbG9uZ2l0dWRlOiBkYXRhLmxvbmdpdHVkZSwgbGF0aXR1ZGU6IGRhdGEubGF0aXR1ZGUgfSk7XG4gIC8vICAgICB9XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gZ2V0SVNTQ29vcmRzKCkge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XG4gIC8vICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgLy8gICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICAgICAgc2V0Q29vcmRzKHsgbG9uZ2l0dWRlOiBkYXRhLmxvbmdpdHVkZSwgbGF0aXR1ZGU6IGRhdGEubGF0aXR1ZGUgfSk7XG4gIC8vICAgICB9XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gIC8vICAgICBnZXRJU1NDb29yZHMoKTtcbiAgLy8gICB9LCA1MDAwKTtcblxuICAvLyAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgLy8gICB9O1xuICAvLyB9LCBbXSk7XG4gICAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8TWFwIGxvbmdpdHVkZT17Y29vcmRzLmxvbmdpdHVkZX0gbGF0aXR1ZGU9e2Nvb3Jkcy5sYXRpdHVkZX0gLz5cbiAgICAgIDxDb250cm9sc1xuICAgICAgICBsb25naXR1ZGU9e2Nvb3Jkcy5sb25naXR1ZGV9XG4gICAgICAgIGxhdGl0dWRlPXtjb29yZHMubGF0aXR1ZGV9XG4gICAgICAgIC8vIG9uUmVmcmVzaD17Z2V0SVNTQ29vcmRzfVxuICAgICAgLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250cm9scyIsIk1hcCIsInVzZVNXUiIsIlVSTCIsIklTU1RyYWNrZXIiLCJjb29yZHMiLCJzZXRDb29yZHMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImZldGNoZXIiLCJmZXRjaCIsImFyZ3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsImRpdiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ISSTracker/index.js\n"));

/***/ })

});