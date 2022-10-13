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

/***/ "./src/components/mainPage/Proyects.js":
/*!*********************************************!*\
  !*** ./src/components/mainPage/Proyects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Proyects\": function() { return /* binding */ Proyects; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ \"./src/components/Card.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Title */ \"./src/components/Title.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About */ \"./src/components/mainPage/About.js\");\n/* harmony import */ var _assets_gifs_Blocks_1s_200px_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/gifs/Blocks-1s-200px.gif */ \"./src/assets/gifs/Blocks-1s-200px.gif\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/dist/index.mjs\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"D:\\\\Developer\\\\Projects\\\\React\\\\portfolio\\\\src\\\\components\\\\mainPage\\\\Proyects.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst ProyectsContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"Proyects__ProyectsContainer\",\n  componentId: \"sc-1nlewy4-0\"\n})([\"width:100%;max-width:120rem;min-height:100vh;margin:0 auto;grid-area:proyects;& > div h2{max-width:100%;}&.title-container{width:90%;margin:0 auto;}.button-container{width:60%;height:5rem;display:flex;justify-content:center;align-items:center;margin:0 auto;margin-top:5rem;font-size:2rem;& > a{text-align:center;width:100%;max-width:25rem;padding:1.5rem 0;background:var(--main-dark);border-radius:0.4rem;color:var(--main-white);text-decoration:none;&:hover{background:var(--high-dark);}@media (min-width:600px){& > a{padding:2rem 0;}}@media (min-width:1024px){& > a{padding:3rem 0;}}}}\"]);\n_c = ProyectsContainer;\nconst ProyectGridCards = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].section.withConfig({\n  displayName: \"Proyects__ProyectGridCards\",\n  componentId: \"sc-1nlewy4-1\"\n})([\"width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,480px));justify-content:center;align-items:center;\"]);\n_c2 = ProyectGridCards;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"Proyects__Container\",\n  componentId: \"sc-1nlewy4-2\"\n})([\"width:100%;@media (min-width:1024px){display:flex;justify-content:center;align-items:center;}\"]);\n_c3 = Container;\nconst Proyects = () => {\n  _s();\n\n  /*CODIGO DE FRONT END*/\n  const [proyects, setProyects] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);\n  const {\n    0: noProyects,\n    1: setNoProyects\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const getProyects = async () => {\n    try {\n      const resp = await fetch('/api/proycts');\n      const {\n        data\n      } = await resp.json();\n      const dataSort = data.sort((a, b) => a.pos.localeCompare(b.pos));\n      setProyects(dataSort);\n    } catch (error) {\n      setNoProyects(true);\n    }\n\n    return () => {\n      setProyects(null);\n    };\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {\n    getProyects();\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {\n    getProyects();\n    setNoProyects(false);\n  }, [noProyects]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(ProyectsContainer, {\n    id: \"proyects\",\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Title__WEBPACK_IMPORTED_MODULE_2__.Title, {\n      text: \"PROYECTOS\",\n      center: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Container, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(ProyectGridCards, {\n        children: proyects && proyects.map((proyect, index) => {\n          if (index <= 3) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n              id: proyect._id,\n              title: proyect.title,\n              img: proyect.cover,\n              desc: proyect.shortDesc,\n              skills: proyect.technologies,\n              repo: proyect.repo,\n              web: proyect.web\n            }, proyect._id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 19\n            }, undefined);\n          } else {\n            return null;\n          }\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, undefined), !proyects && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      className: \"skeletonProyect\",\n      count: 4,\n      height: '30rem',\n      baseColor: \"#dcdcdc\",\n      borderRadius: '1.5rem',\n      inline: true,\n      style: {\n        margin: '1rem'\n      },\n      containerClassName: 'skeletonWrap'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"button-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n        href: \"/proyects\",\n        children: \"Ver m\\xE1s\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 112,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Proyects, \"4FcGe35efQIcLxwJyRsMtW5+xJ0=\");\n\n_c4 = Proyects;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ProyectsContainer\");\n$RefreshReg$(_c2, \"ProyectGridCards\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"Proyects\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tYWluUGFnZS9Qcm95ZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVMsaUJBQWlCLEdBQUdQLHdFQUFIO0VBQUE7RUFBQTtBQUFBLGtsQkFBdkI7S0FBTU87QUFvRE4sTUFBTUUsZ0JBQWdCLEdBQUdULDRFQUFIO0VBQUE7RUFBQTtBQUFBLHNJQUF0QjtNQUFNUztBQVFOLE1BQU1FLFNBQVMsR0FBR1gsd0VBQUg7RUFBQTtFQUFBO0FBQUEscUdBQWY7TUFBTVc7QUFTQyxNQUFNQyxRQUFRLEdBQUcsTUFBTTtFQUFBOztFQUM1QjtFQUVBLE1BQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCaEIscURBQUEsQ0FBZSxJQUFmLENBQWhDO0VBRUEsTUFBTTtJQUFBLEdBQUNpQixVQUFEO0lBQUEsR0FBYUM7RUFBYixJQUE4QmpCLCtDQUFRLENBQUMsS0FBRCxDQUE1Qzs7RUFFQSxNQUFNa0IsV0FBVyxHQUFHLFlBQVk7SUFDOUIsSUFBSTtNQUNGLE1BQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUMsY0FBRCxDQUF4QjtNQUNBLE1BQU07UUFBRUM7TUFBRixJQUFXLE1BQU1GLElBQUksQ0FBQ0csSUFBTCxFQUF2QjtNQUVBLE1BQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxJQUFMLENBQVUsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVELENBQUMsQ0FBQ0UsR0FBRixDQUFNQyxhQUFOLENBQW9CRixDQUFDLENBQUNDLEdBQXRCLENBQXBCLENBQWpCO01BQ0FaLFdBQVcsQ0FBQ1EsUUFBRCxDQUFYO0lBQ0QsQ0FORCxDQU1FLE9BQU9NLEtBQVAsRUFBYztNQUNkWixhQUFhLENBQUMsSUFBRCxDQUFiO0lBQ0Q7O0lBQ0QsT0FBTyxNQUFNO01BQ1hGLFdBQVcsQ0FBQyxJQUFELENBQVg7SUFDRCxDQUZEO0VBR0QsQ0FiRDs7RUFlQWhCLHNEQUFBLENBQWdCLE1BQU07SUFDcEJtQixXQUFXO0VBQ1osQ0FGRCxFQUVHLEVBRkg7RUFJQW5CLHNEQUFBLENBQWdCLE1BQU07SUFDcEJtQixXQUFXO0lBQ1hELGFBQWEsQ0FBQyxLQUFELENBQWI7RUFDRCxDQUhELEVBR0csQ0FBQ0QsVUFBRCxDQUhIO0VBS0Esb0JBQ0UsOERBQUMsaUJBQUQ7SUFBbUIsRUFBRSxFQUFDLFVBQXRCO0lBQWlDLFNBQVMsRUFBQyxXQUEzQztJQUFBLHdCQUNFLDhEQUFDLHlDQUFEO01BQU8sSUFBSSxFQUFDLFdBQVo7TUFBd0IsTUFBTTtJQUE5QjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREYsZUFHRSw4REFBQyxTQUFEO01BQUEsdUJBQ0UsOERBQUMsZ0JBQUQ7UUFBQSxVQUNHRixRQUFRLElBQ1BBLFFBQVEsQ0FBQ2lCLEdBQVQsQ0FBYSxDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FBb0I7VUFDL0IsSUFBSUEsS0FBSyxJQUFJLENBQWIsRUFBZ0I7WUFDZCxvQkFDRSw4REFBQyx1Q0FBRDtjQUVFLEVBQUUsRUFBRUQsT0FBTyxDQUFDRSxHQUZkO2NBR0UsS0FBSyxFQUFFRixPQUFPLENBQUNHLEtBSGpCO2NBSUUsR0FBRyxFQUFFSCxPQUFPLENBQUNJLEtBSmY7Y0FLRSxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0ssU0FMaEI7Y0FNRSxNQUFNLEVBQUVMLE9BQU8sQ0FBQ00sWUFObEI7Y0FPRSxJQUFJLEVBQUVOLE9BQU8sQ0FBQ08sSUFQaEI7Y0FRRSxHQUFHLEVBQUVQLE9BQU8sQ0FBQ1E7WUFSZixHQUNPUixPQUFPLENBQUNFLEdBRGY7Y0FBQTtjQUFBO2NBQUE7WUFBQSxhQURGO1VBWUQsQ0FiRCxNQWFPO1lBQ0wsT0FBTyxJQUFQO1VBQ0Q7UUFDRixDQWpCRDtNQUZKO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBSEYsRUEwQkcsQ0FBQ3BCLFFBQUQsaUJBQ0MsOERBQUMsOERBQUQ7TUFDRSxTQUFTLEVBQUMsaUJBRFo7TUFFRSxLQUFLLEVBQUUsQ0FGVDtNQUdFLE1BQU0sRUFBRSxPQUhWO01BSUUsU0FBUyxFQUFDLFNBSlo7TUFLRSxZQUFZLEVBQUUsUUFMaEI7TUFNRSxNQUFNLE1BTlI7TUFPRSxLQUFLLEVBQUU7UUFDTDJCLE1BQU0sRUFBRTtNQURILENBUFQ7TUFVRSxrQkFBa0IsRUFBRTtJQVZ0QjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBM0JKLGVBd0NFO01BQUssU0FBUyxFQUFDLGtCQUFmO01BQUEsdUJBQ0UsOERBQUMsa0RBQUQ7UUFBTSxJQUFJLEVBQUMsV0FBWDtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUF4Q0Y7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUE4Q0QsQ0E3RU07O0dBQU01Qjs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbWFpblBhZ2UvUHJveWVjdHMuanM/YWM5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL0NhcmQnXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vVGl0bGUnXHJcbmltcG9ydCB7IEFib3V0IH0gZnJvbSAnLi9BYm91dCdcclxuaW1wb3J0IGxvYWRpbmdJbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvZ2lmcy9CbG9ja3MtMXMtMjAwcHguZ2lmJ1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbidcclxuaW1wb3J0ICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3Qvc2tlbGV0b24uY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBQcm95ZWN0c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMjByZW07XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZ3JpZC1hcmVhOiBwcm95ZWN0cztcclxuICAmID4gZGl2IGgyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYudGl0bGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgJiA+IGEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1kYXJrKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhpZ2gtZGFyayk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICYgPiBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICYgPiBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFByb3llY3RHcmlkQ2FyZHMgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4MHB4LCA0ODBweCkpO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQcm95ZWN0cyA9ICgpID0+IHtcclxuICAvKkNPRElHTyBERSBGUk9OVCBFTkQqL1xyXG5cclxuICBjb25zdCBbcHJveWVjdHMsIHNldFByb3llY3RzXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IFtub1Byb3llY3RzLCBzZXROb1Byb3llY3RzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBnZXRQcm95ZWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2FwaS9wcm95Y3RzJylcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKVxyXG5cclxuICAgICAgY29uc3QgZGF0YVNvcnQgPSBkYXRhLnNvcnQoKGEsIGIpID0+IGEucG9zLmxvY2FsZUNvbXBhcmUoYi5wb3MpKVxyXG4gICAgICBzZXRQcm95ZWN0cyhkYXRhU29ydClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldE5vUHJveWVjdHModHJ1ZSlcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldFByb3llY3RzKG51bGwpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UHJveWVjdHMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UHJveWVjdHMoKVxyXG4gICAgc2V0Tm9Qcm95ZWN0cyhmYWxzZSlcclxuICB9LCBbbm9Qcm95ZWN0c10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJveWVjdHNDb250YWluZXIgaWQ9J3Byb3llY3RzJyBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgIDxUaXRsZSB0ZXh0PSdQUk9ZRUNUT1MnIGNlbnRlciAvPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8UHJveWVjdEdyaWRDYXJkcz5cclxuICAgICAgICAgIHtwcm95ZWN0cyAmJlxyXG4gICAgICAgICAgICBwcm95ZWN0cy5tYXAoKHByb3llY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGluZGV4IDw9IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwcm95ZWN0Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICBpZD17cHJveWVjdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb3llY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPXtwcm95ZWN0LmNvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2M9e3Byb3llY3Quc2hvcnREZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgIHNraWxscz17cHJveWVjdC50ZWNobm9sb2dpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbz17cHJveWVjdC5yZXBvfVxyXG4gICAgICAgICAgICAgICAgICAgIHdlYj17cHJveWVjdC53ZWJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L1Byb3llY3RHcmlkQ2FyZHM+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICB7IXByb3llY3RzICYmIChcclxuICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2tlbGV0b25Qcm95ZWN0J1xyXG4gICAgICAgICAgY291bnQ9ezR9XHJcbiAgICAgICAgICBoZWlnaHQ9eyczMHJlbSd9XHJcbiAgICAgICAgICBiYXNlQ29sb3I9JyNkY2RjZGMnXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9eycxLjVyZW0nfVxyXG4gICAgICAgICAgaW5saW5lXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW46ICcxcmVtJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9eydza2VsZXRvbldyYXAnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24tY29udGFpbmVyJz5cclxuICAgICAgICA8TGluayBocmVmPScvcHJveWVjdHMnPlZlciBtw6FzPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUHJveWVjdHNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ2FyZCIsIlRpdGxlIiwiQWJvdXQiLCJsb2FkaW5nSW1hZ2UiLCJTa2VsZXRvbiIsIkxpbmsiLCJQcm95ZWN0c0NvbnRhaW5lciIsImRpdiIsIlByb3llY3RHcmlkQ2FyZHMiLCJzZWN0aW9uIiwiQ29udGFpbmVyIiwiUHJveWVjdHMiLCJwcm95ZWN0cyIsInNldFByb3llY3RzIiwibm9Qcm95ZWN0cyIsInNldE5vUHJveWVjdHMiLCJnZXRQcm95ZWN0cyIsInJlc3AiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGF0YVNvcnQiLCJzb3J0IiwiYSIsImIiLCJwb3MiLCJsb2NhbGVDb21wYXJlIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJtYXAiLCJwcm95ZWN0IiwiaW5kZXgiLCJfaWQiLCJ0aXRsZSIsImNvdmVyIiwic2hvcnREZXNjIiwidGVjaG5vbG9naWVzIiwicmVwbyIsIndlYiIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/mainPage/Proyects.js\n"));

/***/ })

});