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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EmailForm\": function() { return /* binding */ EmailForm; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"D:\\\\Developer\\\\Projects\\\\React\\\\portfolio\\\\src\\\\components\\\\EmailForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nconst EmailFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"EmailForm__EmailFormContainer\",\n  componentId: \"sc-99m38b-0\"\n})([\"display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:50rem;min-height:32rem;transition:0.3s ease;border-radius:0.5rem;margin-bottom:5rem;background-color:#fdfdfd;& > h2{font-weight:500;margin-bottom:2rem;}& > form{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;& > input{width:90%;height:4rem;padding:1rem;border:none;border-bottom:1px solid var(--medium-gray);outline:none;color:var(--main-dark);font-size:1.4rem;margin:0.5rem 0;}& > textarea{width:90%;height:10rem;resize:none;outline:none;border:1px solid var(--medium-gray);padding:1rem;margin-top:2rem;font-size:1.4rem;color:var(--main-dark);}}\"]);\n_c = EmailFormContainer;\nconst EmailForm = _ref => {\n  _s();\n\n  let {\n    showEmailForm\n  } = _ref;\n  const form = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const {\n    0: formData,\n    1: setFormData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    user_name: '',\n    user_email: '',\n    message: ''\n  });\n\n  const sendEmail = e => {\n    e.preventDefault();\n    console.log('form.current', form.current);\n    emailjs_com__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendForm('service_43bbfgo', 'template_vocu3e9', form.current, 'CoHkHasEo2bqPxzpt').then(result => {\n      console.log(result.text);\n    }, error => {\n      console.log(error.text);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(EmailFormContainer, {\n    onClick: event => event.stopPropagation(),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      children: \"Enviame un E-Mail\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      id: \"sendemail\",\n      ref: form,\n      onSubmit: sendEmail,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: \"user_name\",\n        placeholder: \"Tu Nombre\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"email\",\n        name: \"user_email\",\n        placeholder: \"Tu Correo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"textarea\", {\n        placeholder: \"Mensaje\",\n        name: \"message\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"submit\",\n        value: \"Send\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(EmailForm, \"ThcjsdD+hF2bNf/pIZug1JAAz+k=\");\n\n_c2 = EmailForm;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"EmailFormContainer\");\n$RefreshReg$(_c2, \"EmailForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FbWFpbEZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1LLGtCQUFrQixHQUFHSCx3RUFBSDtFQUFBO0VBQUE7QUFBQSxxckJBQXhCO0tBQU1HO0FBbURDLE1BQU1FLFNBQVMsR0FBRyxRQUF1QjtFQUFBOztFQUFBLElBQXRCO0lBQUVDO0VBQUYsQ0FBc0I7RUFDOUMsTUFBTUMsSUFBSSxHQUFHUiw2Q0FBTSxFQUFuQjtFQUVBLE1BQU07SUFBQSxHQUFDUyxRQUFEO0lBQUEsR0FBV0M7RUFBWCxJQUEwQlAsK0NBQVEsQ0FBQztJQUN2Q1EsU0FBUyxFQUFFLEVBRDRCO0lBRXZDQyxVQUFVLEVBQUUsRUFGMkI7SUFHdkNDLE9BQU8sRUFBRTtFQUg4QixDQUFELENBQXhDOztFQU1BLE1BQU1DLFNBQVMsR0FBSUMsQ0FBRCxJQUFPO0lBQ3ZCQSxDQUFDLENBQUNDLGNBQUY7SUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QlYsSUFBSSxDQUFDVyxPQUFqQztJQUVBakIsNERBQUEsQ0FFSSxpQkFGSixFQUdJLGtCQUhKLEVBSUlNLElBQUksQ0FBQ1csT0FKVCxFQUtJLG1CQUxKLEVBT0dFLElBUEgsQ0FRS0MsTUFBRCxJQUFZO01BQ1ZMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxNQUFNLENBQUNDLElBQW5CO0lBQ0QsQ0FWTCxFQVdLQyxLQUFELElBQVc7TUFDVFAsT0FBTyxDQUFDQyxHQUFSLENBQVlNLEtBQUssQ0FBQ0QsSUFBbEI7SUFDRCxDQWJMO0VBZUQsQ0FwQkQ7O0VBc0JBLG9CQUNFLDhEQUFDLGtCQUFEO0lBQW9CLE9BQU8sRUFBR0UsS0FBRCxJQUFXQSxLQUFLLENBQUNDLGVBQU4sRUFBeEM7SUFBQSx3QkFDRTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLGVBRUU7TUFBTSxFQUFFLEVBQUMsV0FBVDtNQUFxQixHQUFHLEVBQUVsQixJQUExQjtNQUFnQyxRQUFRLEVBQUVNLFNBQTFDO01BQUEsd0JBQ0U7UUFBTyxJQUFJLEVBQUMsTUFBWjtRQUFtQixJQUFJLEVBQUMsV0FBeEI7UUFBb0MsV0FBVyxFQUFDO01BQWhEO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFERixlQUVFO1FBQU8sSUFBSSxFQUFDLE9BQVo7UUFBb0IsSUFBSSxFQUFDLFlBQXpCO1FBQXNDLFdBQVcsRUFBQztNQUFsRDtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBRkYsZUFHRTtRQUFVLFdBQVcsRUFBQyxTQUF0QjtRQUFnQyxJQUFJLEVBQUM7TUFBckM7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUhGLGVBSUU7UUFBTyxJQUFJLEVBQUMsUUFBWjtRQUFxQixLQUFLLEVBQUM7TUFBM0I7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUpGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUZGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBV0QsQ0ExQ007O0dBQU1SOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FbWFpbEZvcm0uanM/NmRmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRW1haWxGb3JtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDUwcmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDMycmVtO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcclxuXHJcbiAgJiA+IGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgJiA+IGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICYgPiBpbnB1dCB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWdyYXkpO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrKTtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IHRleHRhcmVhIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tZ3JheSk7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrKTtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBFbWFpbEZvcm0gPSAoeyBzaG93RW1haWxGb3JtIH0pID0+IHtcclxuICBjb25zdCBmb3JtID0gdXNlUmVmKClcclxuXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VyX25hbWU6ICcnLFxyXG4gICAgdXNlcl9lbWFpbDogJycsXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICB9KVxyXG5cclxuICBjb25zdCBzZW5kRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2Zvcm0uY3VycmVudCcsIGZvcm0uY3VycmVudClcclxuXHJcbiAgICBlbWFpbGpzXHJcbiAgICAgIC5zZW5kRm9ybShcclxuICAgICAgICAnc2VydmljZV80M2JiZmdvJyxcclxuICAgICAgICAndGVtcGxhdGVfdm9jdTNlOScsXHJcbiAgICAgICAgZm9ybS5jdXJyZW50LFxyXG4gICAgICAgICdDb0hrSGFzRW8yYnFQeHpwdCdcclxuICAgICAgKVxyXG4gICAgICAudGhlbihcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dClcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dClcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RW1haWxGb3JtQ29udGFpbmVyIG9uQ2xpY2s9eyhldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICA8aDI+RW52aWFtZSB1biBFLU1haWw8L2gyPlxyXG4gICAgICA8Zm9ybSBpZD0nc2VuZGVtYWlsJyByZWY9e2Zvcm19IG9uU3VibWl0PXtzZW5kRW1haWx9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSd1c2VyX25hbWUnIHBsYWNlaG9sZGVyPSdUdSBOb21icmUnIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyBuYW1lPSd1c2VyX2VtYWlsJyBwbGFjZWhvbGRlcj0nVHUgQ29ycmVvJyAvPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj0nTWVuc2FqZScgbmFtZT0nbWVzc2FnZScgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nU2VuZCcgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9FbWFpbEZvcm1Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInN0eWxlZCIsImVtYWlsanMiLCJ1c2VTdGF0ZSIsIkVtYWlsRm9ybUNvbnRhaW5lciIsImRpdiIsIkVtYWlsRm9ybSIsInNob3dFbWFpbEZvcm0iLCJmb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZXJfbmFtZSIsInVzZXJfZW1haWwiLCJtZXNzYWdlIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJzZW5kRm9ybSIsInRoZW4iLCJyZXN1bHQiLCJ0ZXh0IiwiZXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EmailForm.js\n"));

/***/ })

});