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
exports.id = "pages/api/technology";
exports.ids = ["pages/api/technology"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/models/technology.js":
/*!**********************************!*\
  !*** ./src/models/technology.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst TechnologySchema = new _mongoose.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  icon: {\n    type: String,\n    required: true\n  },\n  color: {\n    type: String,\n    required: true\n  }\n}); //cacheed\n\nmodule.exports = _mongoose.models?.Technology || (0, _mongoose.model)('Technology', TechnologySchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL3RlY2hub2xvZ3kuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBRyxJQUFJQyxnQkFBSixDQUFXO0VBQ2xDQyxJQUFJLEVBQUU7SUFDSkMsSUFBSSxFQUFFQyxNQURGO0lBRUpDLFFBQVEsRUFBRTtFQUZOLENBRDRCO0VBS2xDQyxJQUFJLEVBQUU7SUFDSkgsSUFBSSxFQUFFQyxNQURGO0lBRUpDLFFBQVEsRUFBRTtFQUZOLENBTDRCO0VBU2xDRSxLQUFLLEVBQUU7SUFDTEosSUFBSSxFQUFFQyxNQUREO0lBRUxDLFFBQVEsRUFBRTtFQUZMO0FBVDJCLENBQVgsQ0FBekIsQyxDQWVBOztBQUNBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLGdCQUFBLEVBQVFDLFVBQVIsSUFBc0IsSUFBQUMsZUFBQSxFQUFNLFlBQU4sRUFBb0JaLGdCQUFwQixDQUF2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tb2RlbHMvdGVjaG5vbG9neS5qcz9hYjgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgVGVjaG5vbG9neVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBjb2xvcjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxufSlcclxuXHJcbi8vY2FjaGVlZFxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGVscz8uVGVjaG5vbG9neSB8fCBtb2RlbCgnVGVjaG5vbG9neScsIFRlY2hub2xvZ3lTY2hlbWEpXHJcbiJdLCJuYW1lcyI6WyJUZWNobm9sb2d5U2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImljb24iLCJjb2xvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJUZWNobm9sb2d5IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/models/technology.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/technology.js":
/*!*************************************!*\
  !*** ./src/pages/api/technology.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var src_models_technology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/technology */ \"(api)/./src/models/technology.js\");\n/* harmony import */ var src_models_technology__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_models_technology__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_utils_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/mongoose */ \"(api)/./src/utils/mongoose.js\");\n\n\nasync function handler(req, res) {\n  const {\n    method,\n    query\n  } = req;\n  await (0,src_utils_mongoose__WEBPACK_IMPORTED_MODULE_1__.dbConnect)();\n\n  switch (method) {\n    case 'GET':\n      try {\n        const technology = await src_models_technology__WEBPACK_IMPORTED_MODULE_0___default().findOne({\n          _id: query.technology\n        });\n        res.status(200).send({\n          data: technology\n        });\n      } catch (err) {\n        console.log(err);\n      }\n\n      break;\n\n    default:\n      res.status(404).send({\n        error: 'Not Found'\n      });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RlY2hub2xvZ3kuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7RUFDOUMsTUFBTTtJQUFFQyxNQUFGO0lBQVVDO0VBQVYsSUFBb0JILEdBQTFCO0VBRUEsTUFBTUYsNkRBQVMsRUFBZjs7RUFFQSxRQUFRSSxNQUFSO0lBQ0UsS0FBSyxLQUFMO01BQ0UsSUFBSTtRQUNGLE1BQU1FLFVBQVUsR0FBRyxNQUFNUCxvRUFBQSxDQUF5QjtVQUNoRFMsR0FBRyxFQUFFSCxLQUFLLENBQUNDO1FBRHFDLENBQXpCLENBQXpCO1FBSUFILEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO1VBQ25CQyxJQUFJLEVBQUVMO1FBRGEsQ0FBckI7TUFHRCxDQVJELENBUUUsT0FBT00sR0FBUCxFQUFZO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO01BQ0Q7O01BQ0Q7O0lBQ0Y7TUFDRVQsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7UUFDbkJLLEtBQUssRUFBRTtNQURZLENBQXJCO0VBZko7QUFtQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcGFnZXMvYXBpL3RlY2hub2xvZ3kuanM/MTI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVjaG5vbG9neVNjaGVtYSBmcm9tICdzcmMvbW9kZWxzL3RlY2hub2xvZ3knXHJcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJ3NyYy91dGlscy9tb25nb29zZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCwgcXVlcnkgfSA9IHJlcVxyXG5cclxuICBhd2FpdCBkYkNvbm5lY3QoKVxyXG5cclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSAnR0VUJzpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZWNobm9sb2d5ID0gYXdhaXQgVGVjaG5vbG9neVNjaGVtYS5maW5kT25lKHtcclxuICAgICAgICAgIF9pZDogcXVlcnkudGVjaG5vbG9neSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XHJcbiAgICAgICAgICBkYXRhOiB0ZWNobm9sb2d5LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoe1xyXG4gICAgICAgIGVycm9yOiAnTm90IEZvdW5kJyxcclxuICAgICAgfSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlRlY2hub2xvZ3lTY2hlbWEiLCJkYkNvbm5lY3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJ0ZWNobm9sb2d5IiwiZmluZE9uZSIsIl9pZCIsInN0YXR1cyIsInNlbmQiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/technology.js\n");

/***/ }),

/***/ "(api)/./src/utils/mongoose.js":
/*!*******************************!*\
  !*** ./src/utils/mongoose.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbConnect\": () => (/* binding */ dbConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst conn = {\n  isConnected: false\n};\n\nif (!MONGODB_URI) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n/**\r\n * Global is used here to maintain a cached connection across hot reloads\r\n * in development. This prevents connections growing exponentially\r\n * during API Route usage.\r\n */\n\n\nlet cached = global.mongoose;\n\nif (!cached) {\n  cached = global.mongoose = {\n    conn: null,\n    promise: null\n  };\n}\n\nconst dbConnect = async () => {\n  try {\n    if (conn.isConnected) return;\n    const db = await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(MONGODB_URI);\n    conn.isConnected = db.connections[0].readyState;\n    console.log(db.connection.db.databaseName);\n    console.log('MongoDB connected');\n  } catch (error) {\n    console.error(error);\n  }\n};\nmongoose__WEBPACK_IMPORTED_MODULE_0__.connection.on('connected', () => {\n  console.log('Mongoose connected uwu');\n});\nmongoose__WEBPACK_IMPORTED_MODULE_0__.connection.on('error', err => {\n  console.error(err);\n  process.exit(1);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQSxNQUFNRSxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFoQztBQUVBLE1BQU1HLElBQUksR0FBRztFQUNYQyxXQUFXLEVBQUU7QUFERixDQUFiOztBQUlBLElBQUksQ0FBQ0osV0FBTCxFQUFrQjtFQUNoQixNQUFNLElBQUlLLEtBQUosQ0FDSixzRUFESSxDQUFOO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBcEI7O0FBRUEsSUFBSSxDQUFDRixNQUFMLEVBQWE7RUFDWEEsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsR0FBa0I7SUFBRUwsSUFBSSxFQUFFLElBQVI7SUFBY00sT0FBTyxFQUFFO0VBQXZCLENBQTNCO0FBQ0Q7O0FBRU0sTUFBTUMsU0FBUyxHQUFHLFlBQVk7RUFDbkMsSUFBSTtJQUNGLElBQUlQLElBQUksQ0FBQ0MsV0FBVCxFQUFzQjtJQUN0QixNQUFNTyxFQUFFLEdBQUcsTUFBTWIsaURBQU8sQ0FBQ0UsV0FBRCxDQUF4QjtJQUVBRyxJQUFJLENBQUNDLFdBQUwsR0FBbUJPLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQXJDO0lBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixFQUFFLENBQUNaLFVBQUgsQ0FBY1ksRUFBZCxDQUFpQkssWUFBN0I7SUFFQUYsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7RUFDRCxDQVRELENBU0UsT0FBT0UsS0FBUCxFQUFjO0lBQ2RILE9BQU8sQ0FBQ0csS0FBUixDQUFjQSxLQUFkO0VBQ0Q7QUFDRixDQWJNO0FBZVBsQixtREFBQSxDQUFjLFdBQWQsRUFBMkIsTUFBTTtFQUMvQmUsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDRCxDQUZEO0FBSUFoQixtREFBQSxDQUFjLE9BQWQsRUFBd0JvQixHQUFELElBQVM7RUFDOUJMLE9BQU8sQ0FBQ0csS0FBUixDQUFjRSxHQUFkO0VBQ0FsQixPQUFPLENBQUNtQixJQUFSLENBQWEsQ0FBYjtBQUNELENBSEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdXRpbHMvbW9uZ29vc2UuanM/NGM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBjb25uZWN0aW9uIH0gZnJvbSAnbW9uZ29vc2UnXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuXHJcbmNvbnN0IGNvbm4gPSB7XHJcbiAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxyXG59XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xyXG4gIClcclxufVxyXG5cclxuLyoqXHJcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcclxuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XHJcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXHJcbiAqL1xyXG5cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZVxyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGJDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoY29ubi5pc0Nvbm5lY3RlZCkgcmV0dXJuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3QoTU9OR09EQl9VUkkpXHJcblxyXG4gICAgY29ubi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGVcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYi5jb25uZWN0aW9uLmRiLmRhdGFiYXNlTmFtZSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBjb25uZWN0ZWQnKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gIH1cclxufVxyXG5cclxuY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdNb25nb29zZSBjb25uZWN0ZWQgdXd1JylcclxufSlcclxuXHJcbmNvbm5lY3Rpb24ub24oJ2Vycm9yJywgKGVycikgPT4ge1xyXG4gIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gIHByb2Nlc3MuZXhpdCgxKVxyXG59KVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJjb25uIiwiaXNDb25uZWN0ZWQiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvb3NlIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImRiIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImRhdGFiYXNlTmFtZSIsImVycm9yIiwib24iLCJlcnIiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/utils/mongoose.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/technology.js"));
module.exports = __webpack_exports__;

})();