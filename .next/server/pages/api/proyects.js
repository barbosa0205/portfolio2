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
exports.id = "pages/api/proyects";
exports.ids = ["pages/api/proyects"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/models/proyect.js":
/*!*******************************!*\
  !*** ./src/models/proyect.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst ProyectSchema = new _mongoose.Schema({\n  title: {\n    type: String,\n    required: true\n  },\n  cover: {\n    type: String,\n    required: true\n  },\n  technologies: [{\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: 'Technology'\n  }],\n  repo: {\n    type: String,\n    required: true\n  },\n  web: {\n    type: String,\n    required: true\n  },\n  shortDesc: {\n    type: String,\n    required: true\n  },\n  longDesc: {\n    type: String\n  },\n  images: [{\n    type: String\n  }]\n}); //cacheed\n\nmodule.exports = _mongoose.models?.Proyect || (0, _mongoose.model)('Proyect', ProyectSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL3Byb3llY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsSUFBSUMsZ0JBQUosQ0FBVztFQUMvQkMsS0FBSyxFQUFFO0lBQ0xDLElBQUksRUFBRUMsTUFERDtJQUVMQyxRQUFRLEVBQUU7RUFGTCxDQUR3QjtFQUsvQkMsS0FBSyxFQUFFO0lBQ0xILElBQUksRUFBRUMsTUFERDtJQUVMQyxRQUFRLEVBQUU7RUFGTCxDQUx3QjtFQVMvQkUsWUFBWSxFQUFFLENBQUM7SUFBRUosSUFBSSxFQUFFRixnQkFBQSxDQUFPTyxLQUFQLENBQWFDLFFBQXJCO0lBQStCQyxHQUFHLEVBQUU7RUFBcEMsQ0FBRCxDQVRpQjtFQVUvQkMsSUFBSSxFQUFFO0lBQ0pSLElBQUksRUFBRUMsTUFERjtJQUVKQyxRQUFRLEVBQUU7RUFGTixDQVZ5QjtFQWMvQk8sR0FBRyxFQUFFO0lBQ0hULElBQUksRUFBRUMsTUFESDtJQUVIQyxRQUFRLEVBQUU7RUFGUCxDQWQwQjtFQWtCL0JRLFNBQVMsRUFBRTtJQUNUVixJQUFJLEVBQUVDLE1BREc7SUFFVEMsUUFBUSxFQUFFO0VBRkQsQ0FsQm9CO0VBc0IvQlMsUUFBUSxFQUFFO0lBQ1JYLElBQUksRUFBRUM7RUFERSxDQXRCcUI7RUF5Qi9CVyxNQUFNLEVBQUUsQ0FBQztJQUFFWixJQUFJLEVBQUVDO0VBQVIsQ0FBRDtBQXpCdUIsQ0FBWCxDQUF0QixDLENBNEJBOztBQUNBWSxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLGdCQUFBLEVBQVFDLE9BQVIsSUFBbUIsSUFBQUMsZUFBQSxFQUFNLFNBQU4sRUFBaUJwQixhQUFqQixDQUFwQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tb2RlbHMvcHJveWVjdC5qcz9kZWE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgUHJveWVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIGNvdmVyOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHRlY2hub2xvZ2llczogW3sgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdUZWNobm9sb2d5JyB9XSxcclxuICByZXBvOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHdlYjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBzaG9ydERlc2M6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgbG9uZ0Rlc2M6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIGltYWdlczogW3sgdHlwZTogU3RyaW5nIH1dLFxyXG59KVxyXG5cclxuLy9jYWNoZWVkXHJcbm1vZHVsZS5leHBvcnRzID0gbW9kZWxzPy5Qcm95ZWN0IHx8IG1vZGVsKCdQcm95ZWN0JywgUHJveWVjdFNjaGVtYSlcclxuIl0sIm5hbWVzIjpbIlByb3llY3RTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvdmVyIiwidGVjaG5vbG9naWVzIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcG8iLCJ3ZWIiLCJzaG9ydERlc2MiLCJsb25nRGVzYyIsImltYWdlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJQcm95ZWN0IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/models/proyect.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/proyects.js":
/*!***********************************!*\
  !*** ./src/pages/api/proyects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var src_models_proyect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/proyect */ \"(api)/./src/models/proyect.js\");\n/* harmony import */ var src_models_proyect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_models_proyect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_utils_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/mongoose */ \"(api)/./src/utils/mongoose.js\");\n\n\nasync function handler(req, res) {\n  const {\n    method,\n    query\n  } = req;\n  await (0,src_utils_mongoose__WEBPACK_IMPORTED_MODULE_1__.dbConnect)();\n\n  switch (method) {\n    case 'GET':\n      try {\n        const proyects = await src_models_proyect__WEBPACK_IMPORTED_MODULE_0___default().find({}).populate('technologies');\n        res.status(200).send({\n          data: proyects\n        });\n      } catch (err) {\n        return new Error('No se obtuvieron los proyectos');\n      }\n\n      break;\n\n    default:\n      res.status(404).send({\n        error: 'Not Found'\n      });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb3llY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0VBQzlDLE1BQU07SUFBRUMsTUFBRjtJQUFVQztFQUFWLElBQW9CSCxHQUExQjtFQUNBLE1BQU1GLDZEQUFTLEVBQWY7O0VBRUEsUUFBUUksTUFBUjtJQUNFLEtBQUssS0FBTDtNQUNFLElBQUk7UUFDRixNQUFNRSxRQUFRLEdBQUcsTUFBTVAsOERBQUEsQ0FBbUIsRUFBbkIsRUFBdUJTLFFBQXZCLENBQWdDLGNBQWhDLENBQXZCO1FBQ0FMLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO1VBQ25CQyxJQUFJLEVBQUVMO1FBRGEsQ0FBckI7TUFHRCxDQUxELENBS0UsT0FBT00sR0FBUCxFQUFZO1FBQ1osT0FBTyxJQUFJQyxLQUFKLENBQVUsZ0NBQVYsQ0FBUDtNQUNEOztNQUNEOztJQUNGO01BQ0VWLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO1FBQ25CSSxLQUFLLEVBQUU7TUFEWSxDQUFyQjtFQVpKO0FBZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL2FwaS9wcm95ZWN0cy5qcz9iYzEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm95ZWN0U2NoZW1hIGZyb20gJ3NyYy9tb2RlbHMvcHJveWVjdCdcclxuaW1wb3J0IHsgZGJDb25uZWN0IH0gZnJvbSAnc3JjL3V0aWxzL21vbmdvb3NlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbWV0aG9kLCBxdWVyeSB9ID0gcmVxXHJcbiAgYXdhaXQgZGJDb25uZWN0KClcclxuXHJcbiAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJveWVjdHMgPSBhd2FpdCBQcm95ZWN0U2NoZW1hLmZpbmQoe30pLnBvcHVsYXRlKCd0ZWNobm9sb2dpZXMnKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgICAgICAgIGRhdGE6IHByb3llY3RzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ05vIHNlIG9idHV2aWVyb24gbG9zIHByb3llY3RvcycpXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHtcclxuICAgICAgICBlcnJvcjogJ05vdCBGb3VuZCcsXHJcbiAgICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcm95ZWN0U2NoZW1hIiwiZGJDb25uZWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwicHJveWVjdHMiLCJmaW5kIiwicG9wdWxhdGUiLCJzdGF0dXMiLCJzZW5kIiwiZGF0YSIsImVyciIsIkVycm9yIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/proyects.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/proyects.js"));
module.exports = __webpack_exports__;

})();