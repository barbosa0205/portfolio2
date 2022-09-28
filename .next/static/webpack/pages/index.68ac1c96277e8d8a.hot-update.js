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

/***/ "./src/components/EmailForm.js":
/*!*************************************!*\
  !*** ./src/components/EmailForm.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EmailForm\": function() { return /* binding */ EmailForm; }\n/* harmony export */ });\n/* harmony import */ var D_Developer_Projects_React_portfolio_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"D:\\\\Developer\\\\Projects\\\\React\\\\portfolio\\\\src\\\\components\\\\EmailForm.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,D_Developer_Projects_React_portfolio_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\nconst EmailFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"EmailForm__EmailFormContainer\",\n  componentId: \"sc-99m38b-0\"\n})([\"display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:50rem;min-height:32rem;transition:0.3s ease;border-radius:0.5rem;margin-bottom:5rem;background-color:#fdfdfd;& > h2{font-weight:500;margin-bottom:2rem;}& > form{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;& > input{width:90%;height:4rem;padding:1rem;border:none;border-bottom:1px solid var(--medium-gray);outline:none;color:var(--main-dark);font-size:1.4rem;margin:0.5rem 0;}& > textarea{width:90%;height:10rem;resize:none;outline:none;border:1px solid var(--medium-gray);padding:1rem;margin-top:2rem;font-size:1.4rem;color:var(--main-dark);}.error{color:#d11214;font-size:1.6rem;}.buttonSubmit{outline:none;margin-top:2rem;border:none;background:var(--main-dark);color:var(--light-gray);font-size:1.6rem;font-weight:500;width:20rem;border-radius:0.3rem;}}\"]);\n_c = EmailFormContainer;\nconst EmailForm = _ref => {\n  _s();\n\n  let {\n    showEmailForm\n  } = _ref;\n  const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n  const {\n    0: formData,\n    1: setFormData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    user_name: '',\n    user_email: '',\n    message: ''\n  });\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n\n  const verifyForm = () => {\n    const {\n      user_name,\n      user_email,\n      message\n    } = formData;\n\n    if (!user_name || !user_email || !message) {\n      return 'rellena los campos correctamente';\n    }\n  };\n\n  const sendEmail = e => {\n    e.preventDefault();\n    const error = verifyForm();\n\n    if (error) {\n      setError(error);\n      return;\n    } else {\n      setError('');\n    }\n\n    console.log('form.current', form.current);\n    emailjs_com__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm('service_43bbfgo', 'template_vocu3e9', form.current, 'CoHkHasEo2bqPxzpt').then(result => {\n      console.log(result.text);\n    }, error => {\n      console.log(error.text);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(EmailFormContainer, {\n    onClick: event => event.stopPropagation(),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      children: \"Enviame un E-Mail\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n      id: \"sendemail\",\n      ref: form,\n      onSubmit: sendEmail,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: \"user_name\",\n        placeholder: \"Tu Nombre\",\n        value: formData.user_name,\n        onChange: e => {\n          const {\n            name,\n            value\n          } = e.target;\n          setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n            [name]: value\n          }));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"email\",\n        name: \"user_email\",\n        placeholder: \"Tu Correo\",\n        value: formData.user_email,\n        onChange: e => {\n          const {\n            name,\n            value\n          } = e.target;\n          setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n            [name]: value\n          }));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"textarea\", {\n        placeholder: \"Mensaje\",\n        name: \"message\",\n        value: formData.message,\n        onChange: e => {\n          const {\n            name,\n            value\n          } = e.target;\n          setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n            [name]: value\n          }));\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, undefined), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        className: \"error\",\n        children: error\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 19\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        className: \"buttonSubmit\",\n        type: \"submit\",\n        value: \"Send\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 125,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(EmailForm, \"ZsbUAvbNmknShBVXco4//dl7PUM=\");\n\n_c2 = EmailForm;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"EmailFormContainer\");\n$RefreshReg$(_c2, \"EmailForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBTUQsUUFBTjtZQUFnQixDQUFDb0IsSUFBRCxHQUFRQztVQUF4QixHQUFYO1FBQ0Q7TUFSSDtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBWEYsZUFxQkU7UUFDRSxXQUFXLEVBQUMsU0FEZDtRQUVFLElBQUksRUFBQyxTQUZQO1FBR0UsS0FBSyxFQUFFckIsUUFBUSxDQUFDSSxPQUhsQjtRQUlFLFFBQVEsRUFBR0ssQ0FBRCxJQUFPO1VBQ2YsTUFBTTtZQUFFVyxJQUFGO1lBQVFDO1VBQVIsSUFBa0JaLENBQUMsQ0FBQ2EsTUFBMUI7VUFDQXJCLFdBQVcsaUNBQU1ELFFBQU47WUFBZ0IsQ0FBQ29CLElBQUQsR0FBUUM7VUFBeEIsR0FBWDtRQUNEO01BUEg7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQXJCRixFQStCR2hCLEtBQUssaUJBQUk7UUFBRyxTQUFTLEVBQUMsT0FBYjtRQUFBLFVBQXNCQTtNQUF0QjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBL0JaLGVBaUNFO1FBQU8sU0FBUyxFQUFDLGNBQWpCO1FBQWdDLElBQUksRUFBQyxRQUFyQztRQUE4QyxLQUFLLEVBQUM7TUFBcEQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQWpDRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFGRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQXdDRCxDQTFGTTs7R0FBTVI7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VtYWlsRm9ybS5qcz82ZGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBFbWFpbEZvcm1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTByZW07XHJcbiAgbWluLWhlaWdodDogMzJyZW07XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xyXG5cclxuICAmID4gaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICAmID4gZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJiA+IGlucHV0IHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tZ3JheSk7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmspO1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gdGV4dGFyZWEge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmF5KTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWRhcmspO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvciB7XHJcbiAgICAgIGNvbG9yOiAjZDExMjE0O1xyXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uU3VibWl0IHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWRhcmspO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBFbWFpbEZvcm0gPSAoeyBzaG93RW1haWxGb3JtIH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gdXNlUmVmKClcclxuXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyX25hbWU6ICcnLFxyXG4gICAgdXNlcl9lbWFpbDogJycsXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICB9KVxyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCB2ZXJpZnlGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyX25hbWUsIHVzZXJfZW1haWwsIG1lc3NhZ2UgfSA9IGZvcm1EYXRhXHJcblxyXG4gICAgaWYgKCF1c2VyX25hbWUgfHwgIXVzZXJfZW1haWwgfHwgIW1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuICdyZWxsZW5hIGxvcyBjYW1wb3MgY29ycmVjdGFtZW50ZSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBjb25zdCBlcnJvciA9IHZlcmlmeUZvcm0oKVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcignJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnZm9ybS5jdXJyZW50JywgZm9ybS5jdXJyZW50KVxyXG5cclxuICAgIGVtYWlsanNcclxuICAgICAgLnNlbmRGb3JtKFxyXG4gICAgICAgICdzZXJ2aWNlXzQzYmJmZ28nLFxyXG4gICAgICAgICd0ZW1wbGF0ZV92b2N1M2U5JyxcclxuICAgICAgICBmb3JtLmN1cnJlbnQsXHJcbiAgICAgICAgJ0NvSGtIYXNFbzJicVB4enB0J1xyXG4gICAgICApXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KVxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxFbWFpbEZvcm1Db250YWluZXIgb25DbGljaz17KGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgIDxoMj5FbnZpYW1lIHVuIEUtTWFpbDwvaDI+XHJcbiAgICAgIDxmb3JtIGlkPSdzZW5kZW1haWwnIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbmFtZT0ndXNlcl9uYW1lJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1R1IE5vbWJyZSdcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VyX25hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgICAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICBuYW1lPSd1c2VyX2VtYWlsJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1R1IENvcnJlbydcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VyX2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdNZW5zYWplJ1xyXG4gICAgICAgICAgbmFtZT0nbWVzc2FnZSdcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5tZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT0nZXJyb3InPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdidXR0b25TdWJtaXQnIHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1NlbmQnIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvRW1haWxGb3JtQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJzdHlsZWQiLCJlbWFpbGpzIiwidXNlU3RhdGUiLCJFbWFpbEZvcm1Db250YWluZXIiLCJkaXYiLCJFbWFpbEZvcm0iLCJzaG93RW1haWxGb3JtIiwiZm9ybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VyX25hbWUiLCJ1c2VyX2VtYWlsIiwibWVzc2FnZSIsImVycm9yIiwic2V0RXJyb3IiLCJ2ZXJpZnlGb3JtIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJzZW5kRm9ybSIsInRoZW4iLCJyZXN1bHQiLCJ0ZXh0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/EmailForm.js\n"));

/***/ })

});