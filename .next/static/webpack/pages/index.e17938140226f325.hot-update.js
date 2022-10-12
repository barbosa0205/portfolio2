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

/***/ "./src/components/mainPage/About.js":
/*!******************************************!*\
  !*** ./src/components/mainPage/About.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Title */ \"./src/components/Title.js\");\n/* harmony import */ var _assets_images_profile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/profile.png */ \"./src/assets/images/profile.png\");\n/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Skill */ \"./src/components/Skill.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/dist/index.mjs\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"D:\\\\Developer\\\\Projects\\\\React\\\\portfolio\\\\src\\\\components\\\\mainPage\\\\About.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst AboutContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"About__AboutContainer\",\n  componentId: \"sc-v239cu-0\"\n})([\"min-width:100%;display:flex;flex-direction:column;align-items:center;grid-area:about;@media (min-height:1200px){min-height:0;}\"]);\n_c = AboutContainer;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"About__Container\",\n  componentId: \"sc-v239cu-1\"\n})([\"width:95%;max-width:700px;margin:0 auto;display:flex;flex-direction:column;align-items:center;margin-top:4rem;padding:3rem;border-radius:0.8rem;background:var(--ultralight-gray);& > p,b,li{margin-top:2rem;font-family:var(--main-font);font-size:2rem;}& > ul > li{margin-top:0.5rem;}& > p:first-child::first-letter{font-size:8rem;font-weight:bold;line-height:0.1;}& > ul > li{list-style:square;}\"]);\n_c2 = Container;\nconst TecSkills = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"About__TecSkills\",\n  componentId: \"sc-v239cu-2\"\n})([\"width:100%;padding:2rem 0;margin-top:2rem;background:var(--main-white);border-radius:8px;& > h3{text-align:center;}.skill-container{width:100%;display:grid;grid-template-columns:repeat(auto-fit,10rem);justify-content:center;}.buttons-container{width:100%;height:4rem;display:flex;justify-content:space-around;align-items:center;& > a{font-size:1.4rem;padding:1rem 3.2rem;border-radius:4px;background:var(--main-dark);color:var(--main-white);text-decoration:none;cursor:pointer;}& > a > i{padding-left:1rem;}}@media (min-width:600px){.buttons-container{justify-content:space-evenly;}}\"]);\n_c3 = TecSkills;\nconst About = () => {\n  _s();\n\n  /*CODIGO DE FRONT END*/\n  const {\n    0: skills,\n    1: setSkills\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    ;\n\n    (async () => {\n      try {\n        if (!skills) {\n          const resp = await fetch('/api/technologies');\n          const {\n            data\n          } = await resp.json();\n          setSkills(data);\n        } else {\n          return;\n        }\n      } catch (error) {\n        console.log('error:', error);\n        setSkills([]);\n      }\n    })();\n  }, [skills]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(AboutContainer, {\n    id: \"about\",\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Title__WEBPACK_IMPORTED_MODULE_1__.Title, {\n      text: \"Sobre Mi\",\n      center: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n        src: _assets_images_profile_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        alt: \"profile\",\n        width: 150,\n        height: 150,\n        style: {\n          borderRadius: '50%'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n        children: [\"Soy un Programador Web Frontend con conocimientos en Backend, desde el 2020 me aventure a estudiar de manera autodidacta las diferentes tecnologias web para crear aplicaciones profesionales de principio a fin.\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 11\n        }, undefined), \"Utilizo el stack \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"b\", {\n          children: \"MERN\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 28\n        }, undefined), \" (MongoDb, Express, React, NodeJS)\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TecSkills, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h3\", {\n          children: \"Habilidades Tecnicas\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"skill-container\",\n          children: skills && skills.map(skill => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Skill__WEBPACK_IMPORTED_MODULE_3__.Skill, {\n            id: skill._id,\n            iconClass: skill.icon,\n            name: skill.name,\n            color: skill.color\n          }, skill._id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 162,\n            columnNumber: 17\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 11\n        }, undefined), !skills && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          count: 18,\n          height: '6rem',\n          width: '6rem',\n          baseColor: \"#dcdcdc\",\n          borderRadius: '1.5rem',\n          inline: true,\n          style: {\n            margin: '1rem'\n          },\n          containerClassName: 'skeletonWrap'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 172,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"buttons-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n            href: \"/CV-.pdf\",\n            download: true,\n            children: \"Descargar CV\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 186,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 185,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(About, \"jk/c/mqHiyW2KHiC3VVijZuY6zg=\");\n\n_c4 = About;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"AboutContainer\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"TecSkills\");\n$RefreshReg$(_c4, \"About\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tYWluUGFnZS9BYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTVMsY0FBYyxHQUFHTix3RUFBSDtFQUFBO0VBQUE7QUFBQSxzSUFBcEI7S0FBTU07QUFVTixNQUFNRSxTQUFTLEdBQUdSLHdFQUFIO0VBQUE7RUFBQTtBQUFBLGlaQUFmO01BQU1RO0FBa0NOLE1BQU1DLFNBQVMsR0FBR1Qsd0VBQUg7RUFBQTtFQUFBO0FBQUEsK2tCQUFmO01BQU1TO0FBc0RDLE1BQU1DLEtBQUssR0FBRyxNQUFNO0VBQUE7O0VBQ3pCO0VBRUEsTUFBTTtJQUFBLEdBQUNDLE1BQUQ7SUFBQSxHQUFTQztFQUFULElBQXNCZCwrQ0FBUSxDQUFDLElBQUQsQ0FBcEM7RUFFQUMsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2Q7O0lBQUMsQ0FBQyxZQUFZO01BQ1osSUFBSTtRQUNGLElBQUksQ0FBQ1ksTUFBTCxFQUFhO1VBQ1gsTUFBTUUsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxtQkFBRCxDQUF4QjtVQUVBLE1BQU07WUFBRUM7VUFBRixJQUFXLE1BQU1GLElBQUksQ0FBQ0csSUFBTCxFQUF2QjtVQUVBSixTQUFTLENBQUNHLElBQUQsQ0FBVDtRQUNELENBTkQsTUFNTztVQUNMO1FBQ0Q7TUFDRixDQVZELENBVUUsT0FBT0UsS0FBUCxFQUFjO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLEtBQXRCO1FBQ0FMLFNBQVMsQ0FBQyxFQUFELENBQVQ7TUFDRDtJQUNGLENBZkE7RUFnQkYsQ0FqQlEsRUFpQk4sQ0FBQ0QsTUFBRCxDQWpCTSxDQUFUO0VBbUJBLG9CQUNFLDhEQUFDLGNBQUQ7SUFBZ0IsRUFBRSxFQUFDLE9BQW5CO0lBQTJCLFNBQVMsRUFBQyxXQUFyQztJQUFBLHdCQUNFLDhEQUFDLHlDQUFEO01BQU8sSUFBSSxFQUFDLFVBQVo7TUFBdUIsTUFBTTtJQUE3QjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREYsZUFFRSw4REFBQyxTQUFEO01BQUEsd0JBQ0UsOERBQUMsbURBQUQ7UUFDRSxHQUFHLEVBQUVULGtFQURQO1FBRUUsR0FBRyxFQUFDLFNBRk47UUFHRSxLQUFLLEVBQUUsR0FIVDtRQUlFLE1BQU0sRUFBRSxHQUpWO1FBS0UsS0FBSyxFQUFFO1VBQ0xrQixZQUFZLEVBQUU7UUFEVDtNQUxUO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFERixlQVVFO1FBQUEsNk9BS0U7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQUxGLGVBTUU7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQU5GLG9DQU9tQjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQVBuQixxREFRRTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBUkYsZUFTRTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBVEY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBVkYsZUFzQkUsOERBQUMsU0FBRDtRQUFBLHdCQUNFO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBREYsZUFFRTtVQUFLLFNBQVMsRUFBQyxpQkFBZjtVQUFBLFVBQ0dULE1BQU0sSUFDTEEsTUFBTSxDQUFDVSxHQUFQLENBQVlDLEtBQUQsaUJBQ1QsOERBQUMseUNBQUQ7WUFFRSxFQUFFLEVBQUVBLEtBQUssQ0FBQ0MsR0FGWjtZQUdFLFNBQVMsRUFBRUQsS0FBSyxDQUFDRSxJQUhuQjtZQUlFLElBQUksRUFBRUYsS0FBSyxDQUFDRyxJQUpkO1lBS0UsS0FBSyxFQUFFSCxLQUFLLENBQUNJO1VBTGYsR0FDT0osS0FBSyxDQUFDQyxHQURiO1lBQUE7WUFBQTtZQUFBO1VBQUEsYUFERjtRQUZKO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFGRixFQWNHLENBQUNaLE1BQUQsaUJBQ0MsOERBQUMsOERBQUQ7VUFDRSxLQUFLLEVBQUUsRUFEVDtVQUVFLE1BQU0sRUFBRSxNQUZWO1VBR0UsS0FBSyxFQUFFLE1BSFQ7VUFJRSxTQUFTLEVBQUMsU0FKWjtVQUtFLFlBQVksRUFBRSxRQUxoQjtVQU1FLE1BQU0sTUFOUjtVQU9FLEtBQUssRUFBRTtZQUNMZ0IsTUFBTSxFQUFFO1VBREgsQ0FQVDtVQVVFLGtCQUFrQixFQUFFO1FBVnRCO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFmSixlQTRCRTtVQUFLLFNBQVMsRUFBQyxtQkFBZjtVQUFBLHVCQUNFO1lBQUcsSUFBSSxFQUFDLFVBQVI7WUFBbUIsUUFBUSxNQUEzQjtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURGO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUE1QkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBdEJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUZGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBOERELENBdEZNOztHQUFNakI7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21haW5QYWdlL0Fib3V0LmpzP2VkNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi9UaXRsZSdcclxuXHJcbmltcG9ydCBwcm9maWxlSW1nIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS5wbmcnXHJcbmltcG9ydCB7IFNraWxsIH0gZnJvbSAnLi4vU2tpbGwnXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJ1xyXG5pbXBvcnQgJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3MnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5jb25zdCBBYm91dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdyaWQtYXJlYTogYWJvdXQ7XHJcbiAgQG1lZGlhIChtaW4taGVpZ2h0OiAxMjAwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdWx0cmFsaWdodC1ncmF5KTtcclxuXHJcbiAgJiA+IHAsXHJcbiAgYixcclxuICBsaSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAmID4gdWwgPiBsaSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAmID4gcDpmaXJzdC1jaGlsZDo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuMTtcclxuICB9XHJcblxyXG4gICYgPiB1bCA+IGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IHNxdWFyZTtcclxuICB9XHJcbmBcclxuY29uc3QgVGVjU2tpbGxzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXdoaXRlKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICYgPiBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5za2lsbC1jb250YWluZXIge1xyXG4gICAgLy9XaXRoIEdSSURcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAxMHJlbSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvL1dpdGggRkxFWFxyXG4gICAgLyogZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtOyAqL1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmID4gYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDMuMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWRhcmspO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiBhID4gaSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgLypDT0RJR08gREUgRlJPTlQgRU5EKi9cclxuXHJcbiAgY29uc3QgW3NraWxscywgc2V0U2tpbGxzXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICA7KGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXNraWxscykge1xyXG4gICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCcvYXBpL3RlY2hub2xvZ2llcycpXHJcblxyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKVxyXG5cclxuICAgICAgICAgIHNldFNraWxscyhkYXRhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOicsIGVycm9yKVxyXG4gICAgICAgIHNldFNraWxscyhbXSlcclxuICAgICAgfVxyXG4gICAgfSkoKVxyXG4gIH0sIFtza2lsbHNdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFib3V0Q29udGFpbmVyIGlkPSdhYm91dCcgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICA8VGl0bGUgdGV4dD0nU29icmUgTWknIGNlbnRlciAvPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtwcm9maWxlSW1nfVxyXG4gICAgICAgICAgYWx0PSdwcm9maWxlJ1xyXG4gICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgIGhlaWdodD17MTUwfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFNveSB1biBQcm9ncmFtYWRvciBXZWIgRnJvbnRlbmQgY29uIGNvbm9jaW1pZW50b3MgZW4gQmFja2VuZCwgZGVzZGUgZWxcclxuICAgICAgICAgIDIwMjAgbWUgYXZlbnR1cmUgYSBlc3R1ZGlhciBkZSBtYW5lcmEgYXV0b2RpZGFjdGEgbGFzIGRpZmVyZW50ZXNcclxuICAgICAgICAgIHRlY25vbG9naWFzIHdlYiBwYXJhIGNyZWFyIGFwbGljYWNpb25lcyBwcm9mZXNpb25hbGVzIGRlIHByaW5jaXBpbyBhXHJcbiAgICAgICAgICBmaW4uXHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgVXRpbGl6byBlbCBzdGFjayA8Yj5NRVJOPC9iPiAoTW9uZ29EYiwgRXhwcmVzcywgUmVhY3QsIE5vZGVKUylcclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8VGVjU2tpbGxzPlxyXG4gICAgICAgICAgPGgzPkhhYmlsaWRhZGVzIFRlY25pY2FzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdza2lsbC1jb250YWluZXInPlxyXG4gICAgICAgICAgICB7c2tpbGxzICYmXHJcbiAgICAgICAgICAgICAgc2tpbGxzLm1hcCgoc2tpbGwpID0+IChcclxuICAgICAgICAgICAgICAgIDxTa2lsbFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3NraWxsLl9pZH1cclxuICAgICAgICAgICAgICAgICAgaWQ9e3NraWxsLl9pZH1cclxuICAgICAgICAgICAgICAgICAgaWNvbkNsYXNzPXtza2lsbC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtza2lsbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17c2tpbGwuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7IXNraWxscyAmJiAoXHJcbiAgICAgICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICAgIGNvdW50PXsxOH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9eyc2cmVtJ31cclxuICAgICAgICAgICAgICB3aWR0aD17JzZyZW0nfVxyXG4gICAgICAgICAgICAgIGJhc2VDb2xvcj0nI2RjZGNkYydcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9eycxLjVyZW0nfVxyXG4gICAgICAgICAgICAgIGlubGluZVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcxcmVtJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17J3NrZWxldG9uV3JhcCd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL0NWLS5wZGYnIGRvd25sb2FkPlxyXG4gICAgICAgICAgICAgIERlc2NhcmdhciBDVlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RlY1NraWxscz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0Fib3V0Q29udGFpbmVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlZCIsIlRpdGxlIiwicHJvZmlsZUltZyIsIlNraWxsIiwiU2tlbGV0b24iLCJJbWFnZSIsIkFib3V0Q29udGFpbmVyIiwiZGl2IiwiQ29udGFpbmVyIiwiVGVjU2tpbGxzIiwiQWJvdXQiLCJza2lsbHMiLCJzZXRTa2lsbHMiLCJyZXNwIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImJvcmRlclJhZGl1cyIsIm1hcCIsInNraWxsIiwiX2lkIiwiaWNvbiIsIm5hbWUiLCJjb2xvciIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/mainPage/About.js\n"));

/***/ })

});