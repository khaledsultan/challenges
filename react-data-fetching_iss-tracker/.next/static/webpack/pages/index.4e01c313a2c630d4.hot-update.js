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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ISSTracker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Controls_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controls/index */ \"./components/Controls/index.js\");\n/* harmony import */ var _Map_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Map/index */ \"./components/Map/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst URL = \"https://api.wheretheiss.at/v1/satellites/25544\";\nfunction ISSTracker() {\n    _s();\n    // const [coords, setCoords] = useState({\n    //   longitude: 0,\n    //   latitude: 0,\n    // });\n    const fetcher = function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        return fetch(...args).then((res)=>res.json());\n    };\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"https://api.wheretheiss.at/v1/satellites/25544\", fetcher);\n    console.log(data);\n    // setCoords({ longitude: data.longitude, latitude: data.latitude });\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"failed to load\"\n    }, void 0, false, {\n        fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 21,\n        columnNumber: 21\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"loading...\"\n    }, void 0, false, {\n        fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 22,\n        columnNumber: 25\n    }, this);\n    //     }\n    // async function getISSCoords() {\n    //   try {\n    //     const response = await fetch(URL);\n    //     if (response.ok) {\n    //       const data = await response.json();\n    //       setCoords({ longitude: data.longitude, latitude: data.latitude });\n    //     }\n    //   } catch (error) {\n    //     console.error(error);\n    //   }\n    // }\n    // useEffect(() => {\n    //   const timer = setInterval(() => {\n    //     getISSCoords();\n    //   }, 5000);\n    //   return () => {\n    //     clearInterval(timer);\n    //   };\n    // }, []);\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Map_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                longitude: coords.longitude,\n                latitude: coords.latitude\n            }, void 0, false, {\n                fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Controls_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                longitude: coords.longitude,\n                latitude: coords.latitude\n            }, void 0, false, {\n                fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/khaledsultan/spiced-bootcamp/challenges/react-data-fetching_iss-tracker/components/ISSTracker/index.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(ISSTracker, \"1mAecFEtEJ8mPMp0fPCTL8iO5Fs=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = ISSTracker;\nvar _c;\n$RefreshReg$(_c, \"ISSTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lTU1RyYWNrZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDSDtBQUNWO0FBQ047QUFFekIsTUFBTUssTUFBTTtBQUVHLFNBQVNDLGFBQWE7O0lBQ25DLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixNQUFNQyxVQUFVLFdBQWFDO3lDQUFUQztZQUFBQTs7ZUFBU0QsU0FBU0MsTUFBTUMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFBRTtJQUVwRSxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUMsR0FBR1gsK0NBQU1BLENBQ3RDLGtEQUFpREc7SUFHbkRTLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWixxRUFBcUU7SUFDckUsSUFBSUMsT0FBTyxxQkFBTyw4REFBQ0k7a0JBQUk7Ozs7OztJQUN2QixJQUFJSCxXQUFXLHFCQUFPLDhEQUFDRztrQkFBSTs7Ozs7O0lBQzNCLFFBQVE7SUFFUixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLHlDQUF5QztJQUN6Qyx5QkFBeUI7SUFDekIsNENBQTRDO0lBQzVDLDJFQUEyRTtJQUMzRSxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixNQUFNO0lBQ04sSUFBSTtJQUVKLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGNBQWM7SUFFZCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLE9BQU87SUFDUCxVQUFVO0lBQ1IsSUFBSTtJQUVOLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNoQixrREFBR0E7Z0JBQUNpQixXQUFXQyxPQUFPRCxTQUFTO2dCQUFFRSxVQUFVRCxPQUFPQyxRQUFROzs7Ozs7MEJBQzNELDhEQUFDcEIsdURBQVFBO2dCQUNQa0IsV0FBV0MsT0FBT0QsU0FBUztnQkFDM0JFLFVBQVVELE9BQU9DLFFBQVE7Ozs7Ozs7Ozs7OztBQUtqQyxDQUFDO0dBbER1QmhCOztRQU9ZRiwyQ0FBTUE7OztLQVBsQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JU1NUcmFja2VyL2luZGV4LmpzPzY3YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gXCIuLi9Db250cm9scy9pbmRleFwiO1xuaW1wb3J0IE1hcCBmcm9tIFwiLi4vTWFwL2luZGV4XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuY29uc3QgVVJMID0gXCJodHRwczovL2FwaS53aGVyZXRoZWlzcy5hdC92MS9zYXRlbGxpdGVzLzI1NTQ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElTU1RyYWNrZXIoKSB7XG4gIC8vIGNvbnN0IFtjb29yZHMsIHNldENvb3Jkc10gPSB1c2VTdGF0ZSh7XG4gIC8vICAgbG9uZ2l0dWRlOiAwLFxuICAvLyAgIGxhdGl0dWRlOiAwLFxuICAvLyB9KTtcbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZ30gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL2FwaS53aGVyZXRoZWlzcy5hdC92MS9zYXRlbGxpdGVzLzI1NTQ0XCIsZmV0Y2hlclxuICApO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyBzZXRDb29yZHMoeyBsb25naXR1ZGU6IGRhdGEubG9uZ2l0dWRlLCBsYXRpdHVkZTogZGF0YS5sYXRpdHVkZSB9KTtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWlsZWQgdG8gbG9hZDwvZGl2PjtcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcbiAgLy8gICAgIH1cblxuICAvLyBhc3luYyBmdW5jdGlvbiBnZXRJU1NDb29yZHMoKSB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgLy8gICAgIGlmIChyZXNwb25zZS5vaykge1xuICAvLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyAgICAgICBzZXRDb29yZHMoeyBsb25naXR1ZGU6IGRhdGEubG9uZ2l0dWRlLCBsYXRpdHVkZTogZGF0YS5sYXRpdHVkZSB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgLy8gICAgIGdldElTU0Nvb3JkcygpO1xuICAvLyAgIH0sIDUwMDApO1xuXG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAvLyAgIH07XG4gIC8vIH0sIFtdKTtcbiAgICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxNYXAgbG9uZ2l0dWRlPXtjb29yZHMubG9uZ2l0dWRlfSBsYXRpdHVkZT17Y29vcmRzLmxhdGl0dWRlfSAvPlxuICAgICAgPENvbnRyb2xzXG4gICAgICAgIGxvbmdpdHVkZT17Y29vcmRzLmxvbmdpdHVkZX1cbiAgICAgICAgbGF0aXR1ZGU9e2Nvb3Jkcy5sYXRpdHVkZX1cbiAgICAgICAgLy8gb25SZWZyZXNoPXtnZXRJU1NDb29yZHN9XG4gICAgICAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRyb2xzIiwiTWFwIiwidXNlU1dSIiwiVVJMIiwiSVNTVHJhY2tlciIsImZldGNoZXIiLCJmZXRjaCIsImFyZ3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYWluIiwibG9uZ2l0dWRlIiwiY29vcmRzIiwibGF0aXR1ZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ISSTracker/index.js\n"));

/***/ })

});