/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/kan-domine-bold.ttf */ \"./src/assets/fonts/kan-domine-bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: domine;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-family: 'Domine', serif;\\r\\n  font-size: calc(15px + 0.390625vw);\\r\\n}\\r\\n\\r\\nheader,\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  justify-content: start;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  align-items: center;\\r\\n  padding: 0.5rem 5rem;\\r\\n}\\r\\n\\r\\nheader a {\\r\\n  width: 25%;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  cursor: pointer;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nnav li {\\r\\n  list-style: none;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\nnav a {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\nnav a:hover,\\r\\nnav a:active,\\r\\nnav a:focus,\\r\\n.like {\\r\\n  color: #cf0a0a;\\r\\n}\\r\\n\\r\\nnav a:focus {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.show-modal {\\r\\n  font-size: 1rem;\\r\\n  padding: 1.75rem 3.5rem;\\r\\n  margin: 0.5rem;\\r\\n  border: none;\\r\\n  background-color: #fff;\\r\\n  color: #444;\\r\\n  border-radius: 10rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.close-modal {\\r\\n  position: relative;\\r\\n  left: 15rem;\\r\\n  font-size: 2rem;\\r\\n  color: #cf0a0a;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.show-name {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.box {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 3px;\\r\\n  width: auto;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.comment-btn,\\r\\n.comment-rev {\\r\\n  color: #fff;\\r\\n  align-self: center;\\r\\n  align-items: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  width: 350px;\\r\\n  height: 600px;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background-color: white;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.data-img img {\\r\\n  width: 328px;\\r\\n  height: 300px;\\r\\n}\\r\\n\\r\\n.modal h3 {\\r\\n  margin-bottom: 2rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.modal p {\\r\\n  font-size: 14px;\\r\\n  line-height: 1.5;\\r\\n}\\r\\n\\r\\n.name-style {\\r\\n  font-weight: bolder !important;\\r\\n  font-size: 18px !important;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  backdrop-filter: blur(3px);\\r\\n  z-index: 5;\\r\\n}\\r\\n\\r\\n.form-section {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.form-section h2 {\\r\\n  font-size: 20px;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n#form-ele {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  gap: 0.5rem;\\r\\n  margin: 1rem;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  width: 235px;\\r\\n  padding: 4px;\\r\\n  border: 1px solid #cf0a0a;\\r\\n  outline: none;\\r\\n  border-radius: 6px;\\r\\n}\\r\\n\\r\\n.btn-sub {\\r\\n  background-color: #cf0a0a;\\r\\n  color: #fff;\\r\\n  padding: 6px 12px;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  header {\\r\\n    justify-content: space-around;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Section List of shows */\\r\\n\\r\\n.shows {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  gap: 1rem;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.shows li {\\r\\n  list-style: none;\\r\\n  width: 45%;\\r\\n}\\r\\n\\r\\n.shows button {\\r\\n  background-color: #cf0a0a;\\r\\n  padding: 0.5rem;\\r\\n  border: none;\\r\\n  border-radius: 2px;\\r\\n  font-size: 0.75rem;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  padding: 0.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .shows li {\\r\\n    list-style: none;\\r\\n    width: 25%;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* End section list of shows */\\r\\n\\r\\n.btn-language {\\r\\n  border: 0;\\r\\n  outline: 0;\\r\\n  background: #cf0a0a;\\r\\n  color: #fff;\\r\\n  padding: 7px 20px;\\r\\n  font-size: 12px;\\r\\n  border-radius: 4px;\\r\\n  margin-left: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  padding: 50px 15% 10px;\\r\\n  background-color: #000;\\r\\n  color: #777;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  flex-wrap: wrap;\\r\\n  padding: 50px 0;\\r\\n}\\r\\n\\r\\n.footer h2 {\\r\\n  font-size: 18px;\\r\\n  font-weight: 400;\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.footer .col {\\r\\n  flex-basis: 25%;\\r\\n  flex-grow: 1;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.footer .col a {\\r\\n  display: block;\\r\\n  text-decoration: none;\\r\\n  color: #777;\\r\\n  font-size: 14px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.col a:hover {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.footer .row {\\r\\n  align-items: flex-start;\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\n.footer .btn-language {\\r\\n  color: #fff;\\r\\n  padding: 10px 20px;\\r\\n  border-radius: 3px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.copyright-txt {\\r\\n  font-size: 14px;\\r\\n  margin-bottom: 10px;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 600px) {\\r\\n  .row:nth-child(2),\\r\\n  .row:nth-child(4) {\\r\\n    flex-direction: column-reverse;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tv-shows/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tv-shows/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://tv-shows/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tv-shows/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tv-shows/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tv-shows/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tv-shows/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tv-shows/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tv-shows/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tv-shows/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tv-shows/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/images/logo-no-background.png":
/*!**************************************************!*\
  !*** ./src/assets/images/logo-no-background.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW1hZ2VzL2xvZ28tbm8tYmFja2dyb3VuZC5wbmciOw==\");\n\n//# sourceURL=webpack://tv-shows/./src/assets/images/logo-no-background.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_images_logo_no_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/logo-no-background.png */ \"./src/assets/images/logo-no-background.png\");\n/* harmony import */ var _modules_retrieve_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/retrieve.js */ \"./src/modules/retrieve.js\");\n/* harmony import */ var _modules_createDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createDisplay.js */ \"./src/modules/createDisplay.js\");\n/* harmony import */ var _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/htmlElements.js */ \"./src/modules/htmlElements.js\");\n/* harmony import */ var _modules_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/url.js */ \"./src/modules/url.js\");\n/* harmony import */ var _modules_displayModal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/displayModal.js */ \"./src/modules/displayModal.js\");\n/* harmony import */ var _modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/closeModal.js */ \"./src/modules/closeModal.js\");\n/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/init.js */ \"./src/modules/init.js\");\n/* harmony import */ var _modules_addLike_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/addLike.js */ \"./src/modules/addLike.js\");\n/* harmony import */ var _modules_sendComment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendComment.js */ \"./src/modules/sendComment.js\");\n/* harmony import */ var _modules_countLikes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/countLikes.js */ \"./src/modules/countLikes.js\");\n/* harmony import */ var _modules_displayLikes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/displayLikes.js */ \"./src/modules/displayLikes.js\");\n/* harmony import */ var _modules_countItems_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/countItems.js */ \"./src/modules/countItems.js\");\n/* harmony import */ var _modules_displayNbItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/displayNbItem.js */ \"./src/modules/displayNbItem.js\");\n\r\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst involvementId = 'B0W5zAB6ekRD2JmINXvy';\r\nconst myInvolvUrl = `${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlInvolvement}apps/${involvementId}/comments`;\r\nconst urlLikes = `${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlInvolvement}apps/${involvementId}/likes`;\r\n\r\nconst ids = Array.from({ length: 10 }, (_, i) => i + 1);\r\nconst likes = {};\r\n\r\nconst response = (0,_modules_retrieve_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlShow}shows`);\r\nconst retrievedLikes = (0,_modules_retrieve_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlInvolvement}apps/${involvementId}/likes`);\r\n\r\nwindow.addEventListener('load', () => {\r\n  let nbOfLikes = 0;\r\n  response.then((objs) => {\r\n    objs.slice(0, 10).forEach((obj) => {\r\n      (0,_modules_createDisplay_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows, obj);\r\n      retrievedLikes.then((like) => {\r\n        nbOfLikes = (0,_modules_countLikes_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(like, obj.id);\r\n        likes[obj.id] = nbOfLikes;\r\n        (0,_modules_displayLikes_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({ element: _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows, id: obj.id, nbOfLikes });\r\n      });\r\n    });\r\n    const nbItems = (0,_modules_countItems_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows);\r\n    (0,_modules_init_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.showMenu);\r\n    (0,_modules_displayNbItem_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.showMenu, nbItems);\r\n  });\r\n\r\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows.addEventListener('click', (e) => {\r\n    if (e.target.className === 'comment-btn') {\r\n      (0,_modules_init_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal);\r\n      ids.forEach((id) => {\r\n        if (Number(e.target.parentElement.parentElement.id) === id) {\r\n          (0,_modules_retrieve_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlShow}shows/${id}`).then((data) => (0,_modules_displayModal_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, data, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay));\r\n        }\r\n      });\r\n    }\r\n  });\r\n\r\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal.addEventListener('click', (e) => {\r\n    if (e.target.className === 'close-modal') {\r\n      (0,_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay);\r\n    }\r\n  });\r\n\r\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay.addEventListener('click', () => {\r\n    (0,_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay);\r\n  });\r\n\r\n  document.addEventListener('keydown', (e) => {\r\n    if (e.key === 'Escape' && !_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal.classList.contains('hidden')) {\r\n      (0,_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay);\r\n    }\r\n  });\r\n\r\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows.addEventListener('click', (e) => {\r\n    if (e.target.className === 'fa-regular fa-heart like') {\r\n      let nbOfLikes;\r\n      ids.forEach((id) => {\r\n        if (Number(e.target.parentElement.id) === id) {\r\n          (0,_modules_addLike_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(urlLikes, id);\r\n          nbOfLikes = likes[id] + 1;\r\n          likes[id] = nbOfLikes;\r\n          (0,_modules_displayLikes_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({ element: _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows, id, nbOfLikes });\r\n        }\r\n      });\r\n    }\r\n  });\r\n\r\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    if (e.target.className === 'btn-sub') {\r\n      const myTarget = e.target.closest('.modal').classList[1];\r\n      const formName = document.querySelector('.form-name');\r\n      const comment = document.querySelector('.comment');\r\n      ids.forEach((id) => {\r\n        if (Number(myTarget) === id) {\r\n          (0,_modules_sendComment_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(myInvolvUrl, id, formName.value, comment.value);\r\n        }\r\n      });\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://tv-shows/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addLike = async (url, id) => {\n  const response = await fetch(url,\n    {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n      body: JSON.stringify({\n        item_id: id,\n      }),\n    });\n  if (!response.ok) {\n    throw new Error(`HTTP error! status: ${response.status}`);\n  }\n\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://tv-shows/./src/modules/addLike.js?");

/***/ }),

/***/ "./src/modules/closeModal.js":
/*!***********************************!*\
  !*** ./src/modules/closeModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst closeModal = (modal, overlay) => {\n  modal.classList.add('hidden');\n  overlay.classList.add('hidden');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeModal);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/closeModal.js?");

/***/ }),

/***/ "./src/modules/countItems.js":
/*!***********************************!*\
  !*** ./src/modules/countItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = (element) => element.childElementCount;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n//# sourceURL=webpack://tv-shows/./src/modules/countItems.js?");

/***/ }),

/***/ "./src/modules/countLikes.js":
/*!***********************************!*\
  !*** ./src/modules/countLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countLikes = (obj, id) => obj.find((liked) => liked.item_id === id).likes;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countLikes);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/countLikes.js?");

/***/ }),

/***/ "./src/modules/createDisplay.js":
/*!**************************************!*\
  !*** ./src/modules/createDisplay.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createDisplay = (container, obj) => {\n  const li = document.createElement('li');\n  li.classList.add('show-modal');\n  li.id = obj.id;\n  li.innerHTML = `\n                    <img src=\"${obj.image.medium}\" alt=\"${obj.name}\"/>\n                  <p class=\"name\">${obj.name}</p>\n                  <i class=\"fa-regular fa-heart like\"></i>\n                  <span class=\"nb-likes\"></span>\n                  <div class=\"box\">\n                    <button type=\"button\" class=\"comment-btn\">Comment</button>\n                    <button type=\"button\" class=\"comment-rev\">Reservation</button>\n                  </div>`;\n  container.appendChild(li);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplay);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/createDisplay.js?");

/***/ }),

/***/ "./src/modules/displayLikes.js":
/*!*************************************!*\
  !*** ./src/modules/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayLikes = ({ element, id, nbOfLikes }) => {\n  const child = Array.from(element.children).find(\n    (item) => Number(item.id) === id\n  );\n  if (child) {\n    child.querySelector('span.nb-likes').innerHTML = `${nbOfLikes} Likes`;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikes);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/displayLikes.js?");

/***/ }),

/***/ "./src/modules/displayModal.js":
/*!*************************************!*\
  !*** ./src/modules/displayModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst openModal = (modal, data, overlay) => {\n  modal.classList.remove('hidden');\n  modal.classList.add(data.id);\n  const html = document.createElement('div');\n  html.innerHTML = ` <button class=\"close-modal\">&times;</button>\n                        <div class=\"data-img\"><img src=\"${data.image.medium}\" alt=\"${data.name}\"/></div>\n                        <p class=\"show-name name-style\">${data.name}</p>\n                        <p class=\"show-name\">Language: ${data.language}</p>\n                        <p class=\"show-name\">Premiered: ${data.premiered}</p>\n                        <div class=\"form-section\">\n                        <h2>Add a Comment</h2>\n                        <form action=\"#\" id=\"form-ele\">\n                          <input\n                            type=\"text\"\n                            name=\"\"\n                            id=\"\"\n                            placeholder=\"Your Name\"\n                            class=\"form-name\"\n                          />\n                          <textarea\n                            name=\"\"\n                            id=\"\"\n                            placeholder=\"Your Insight\"\n                            class=\"comment\"\n                          ></textarea>\n                          <button class=\"btn-sub\" type=\"submit\">Submit</button>\n                        </form>\n                      </div>`;\n  modal.appendChild(html);\n  overlay.classList.remove('hidden');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/displayModal.js?");

/***/ }),

/***/ "./src/modules/displayNbItem.js":
/*!**************************************!*\
  !*** ./src/modules/displayNbItem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayNbItem = (element, nbItems) => {\r\n  element.innerHTML = `Shows (${nbItems})`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNbItem);\n\n//# sourceURL=webpack://tv-shows/./src/modules/displayNbItem.js?");

/***/ }),

/***/ "./src/modules/htmlElements.js":
/*!*************************************!*\
  !*** ./src/modules/htmlElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"overlay\": () => (/* binding */ overlay),\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu),\n/* harmony export */   \"shows\": () => (/* binding */ shows)\n/* harmony export */ });\nconst shows = document.querySelector('.shows');\r\nconst modal = document.querySelector('.modal');\r\nconst overlay = document.querySelector('.overlay');\r\nconst showMenu = document.querySelector('nav a');\r\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/htmlElements.js?");

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst init = (element) => {\n  element.innerHTML = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/init.js?");

/***/ }),

/***/ "./src/modules/retrieve.js":
/*!*********************************!*\
  !*** ./src/modules/retrieve.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst retrieve = async (requestURL) => {\r\n  const request = new Request(requestURL);\r\n  const response = await fetch(request);\r\n  const json = await response.json();\r\n  return json;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieve);\n\n//# sourceURL=webpack://tv-shows/./src/modules/retrieve.js?");

/***/ }),

/***/ "./src/modules/sendComment.js":
/*!************************************!*\
  !*** ./src/modules/sendComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendComment = async (url, id, username, comment) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: { 'Content-type': 'application/json; charset=UTF-8' },\n    body: JSON.stringify({ item_id: id, username, comment }),\n  });\n  if (!response.ok) {\n    throw new Error(`HTTP error! status: ${response.status}`);\n  }\n  return response;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendComment);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/sendComment.js?");

/***/ }),

/***/ "./src/modules/url.js":
/*!****************************!*\
  !*** ./src/modules/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlInvolvement\": () => (/* binding */ urlInvolvement),\n/* harmony export */   \"urlShow\": () => (/* binding */ urlShow)\n/* harmony export */ });\nconst urlShow = 'https://api.tvmaze.com/';\r\nconst urlInvolvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\n\n//# sourceURL=webpack://tv-shows/./src/modules/url.js?");

/***/ }),

/***/ "./src/assets/fonts/kan-domine-bold.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/kan-domine-bold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3fb648f63a297576cb67.ttf\";\n\n//# sourceURL=webpack://tv-shows/./src/assets/fonts/kan-domine-bold.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;