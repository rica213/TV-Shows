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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/kan-domine-bold.ttf */ \"./src/assets/fonts/kan-domine-bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: domine;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  text-decoration: none;\\n}\\n\\nhtml {\\n  font-family: 'Domine', serif;\\n  font-size: calc(15px + 0.390625vw);\\n}\\n\\nheader,\\nnav ul {\\n  display: flex;\\n  justify-content: start;\\n}\\n\\nheader {\\n  align-items: center;\\n  padding: 0.5rem 5rem;\\n}\\n\\nheader a {\\n  width: 25%;\\n}\\n\\n.logo {\\n  cursor: pointer;\\n  width: 100%;\\n}\\n\\nnav li {\\n  list-style: none;\\n  padding: 1rem;\\n}\\n\\nnav a {\\n  color: black;\\n}\\n\\nnav a:hover,\\nnav a:active,\\nnav a:focus,\\n.like {\\n  color: #cf0a0a;\\n}\\n\\nnav a:focus {\\n  text-decoration: underline;\\n}\\n\\n.show-modal {\\n  list-style: none;\\n  font-size: 1rem;\\n  margin: 0.5rem;\\n  border: none;\\n  background-color: #fff;\\n  color: #444;\\n  cursor: pointer;\\n}\\n\\n.name {\\n  max-width: 210px;\\n}\\n\\n.close-modal {\\n  position: relative;\\n  left: 15rem;\\n  font-size: 2rem;\\n  color: #cf0a0a;\\n  cursor: pointer;\\n  border: none;\\n  background: none;\\n}\\n\\n.show-name {\\n  text-align: center;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.box {\\n  display: flex;\\n  justify-content: start;\\n  gap: 5px;\\n  width: auto;\\n  color: #fff;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .box {\\n    justify-content: space-between;\\n    gap: 0;\\n  }\\n}\\n\\n.comment-btn,\\n.comment-rev {\\n  color: #fff;\\n  align-self: center;\\n  align-items: center;\\n  cursor: pointer;\\n}\\n\\n.modal {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 350px;\\n  height: 600px;\\n  transform: translate(-50%, -50%);\\n  background-color: white;\\n  padding: 0.5rem;\\n  border-radius: 5px;\\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\\n  z-index: 10;\\n  overflow-y: scroll;\\n}\\n\\n.data-img img {\\n  width: 328px;\\n  height: 300px;\\n}\\n\\n.modal h3 {\\n  margin-bottom: 2rem;\\n  align-items: center;\\n}\\n\\n.modal p {\\n  font-size: 14px;\\n  line-height: 1.5;\\n}\\n\\n.name-style {\\n  font-weight: bolder !important;\\n  font-size: 18px !important;\\n}\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  backdrop-filter: blur(3px);\\n  z-index: 5;\\n}\\n\\n.list-of-comments {\\n  text-align: center;\\n}\\n\\n.form-section {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n.form-section h2 {\\n  font-size: 20px;\\n  margin-top: 10px;\\n}\\n\\n#form-ele {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  margin: 1rem;\\n}\\n\\ninput,\\ntextarea {\\n  width: 235px;\\n  padding: 4px;\\n  border: 1px solid #cf0a0a;\\n  outline: none;\\n  border-radius: 6px;\\n}\\n\\n.btn-sub {\\n  background-color: #cf0a0a;\\n  color: #fff;\\n  padding: 6px 12px;\\n  outline: none;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  header {\\n    justify-content: space-around;\\n  }\\n}\\n\\n/* Section List of shows */\\n\\n.shows {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  gap: 2.5rem;\\n  padding: 1rem;\\n}\\n\\n.shows button {\\n  background-color: #cf0a0a;\\n  padding: 0.5rem;\\n  border: none;\\n  border-radius: 2px;\\n  font-size: 0.75rem;\\n}\\n\\n.like {\\n  padding: 0.5rem;\\n  padding-left: 0;\\n  cursor: pointer;\\n}\\n\\n/* End section list of shows */\\n\\n.btn-language {\\n  border: 0;\\n  outline: 0;\\n  background: #cf0a0a;\\n  color: #fff;\\n  padding: 7px 20px;\\n  font-size: 12px;\\n  border-radius: 4px;\\n  margin-left: 10px;\\n  cursor: pointer;\\n}\\n\\n.footer {\\n  padding: 50px 15% 10px;\\n  background-color: #000;\\n  color: #777;\\n}\\n\\n.row {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  padding: 50px 0;\\n}\\n\\n.footer h2 {\\n  font-size: 18px;\\n  font-weight: 400;\\n  margin-bottom: 30px;\\n}\\n\\n.footer .col {\\n  flex-basis: 25%;\\n  flex-grow: 1;\\n  margin-bottom: 20px;\\n}\\n\\n.footer .col a {\\n  display: block;\\n  text-decoration: none;\\n  color: #777;\\n  font-size: 14px;\\n  margin-bottom: 10px;\\n}\\n\\n.col a:hover {\\n  color: #fff;\\n}\\n\\n.footer .row {\\n  align-items: flex-start;\\n  padding: 10px 0;\\n}\\n\\n.footer .btn-language {\\n  color: #fff;\\n  padding: 10px 20px;\\n  border-radius: 3px;\\n  cursor: pointer;\\n}\\n\\n.copyright-txt {\\n  font-size: 14px;\\n  margin-bottom: 10px;\\n  margin-top: 20px;\\n}\\n\\n@media only screen and (max-width: 600px) {\\n  .row:nth-child(2),\\n  .row:nth-child(4) {\\n    flex-direction: column-reverse;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tv-shows/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_images_logo_no_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/logo-no-background.png */ \"./src/assets/images/logo-no-background.png\");\n/* harmony import */ var _modules_retrieve_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/retrieve.js */ \"./src/modules/retrieve.js\");\n/* harmony import */ var _modules_createDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createDisplay.js */ \"./src/modules/createDisplay.js\");\n/* harmony import */ var _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/htmlElements.js */ \"./src/modules/htmlElements.js\");\n/* harmony import */ var _modules_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/url.js */ \"./src/modules/url.js\");\n/* harmony import */ var _modules_displayModal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/displayModal.js */ \"./src/modules/displayModal.js\");\n/* harmony import */ var _modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/closeModal.js */ \"./src/modules/closeModal.js\");\n/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/init.js */ \"./src/modules/init.js\");\n/* harmony import */ var _modules_addLike_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/addLike.js */ \"./src/modules/addLike.js\");\n/* harmony import */ var _modules_sendComment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendComment.js */ \"./src/modules/sendComment.js\");\n/* harmony import */ var _modules_countLikes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/countLikes.js */ \"./src/modules/countLikes.js\");\n/* harmony import */ var _modules_displayLikes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/displayLikes.js */ \"./src/modules/displayLikes.js\");\n/* harmony import */ var _modules_countItems_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/countItems.js */ \"./src/modules/countItems.js\");\n/* harmony import */ var _modules_displayNbItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/displayNbItem.js */ \"./src/modules/displayNbItem.js\");\n/* harmony import */ var _modules_addComment_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _modules_countComments_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/countComments.js */ \"./src/modules/countComments.js\");\n/* harmony import */ var _modules_displayComments_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/displayComments.js */ \"./src/modules/displayComments.js\");\n\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst involvementId = 'B0W5zAB6ekRD2JmINXvy';\nconst myInvolvUrl = `${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlInvolvement}apps/${involvementId}/comments`;\nconst urlLikes = `${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlInvolvement}apps/${involvementId}/likes`;\nconst getCommentFromApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/B0W5zAB6ekRD2JmINXvy/comments?item_id=';\n\nconst ids = Array.from({ length: 10 }, (_, i) => i + 1);\nconst likes = {};\n\nconst response = (0,_modules_retrieve_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlShow}shows`);\nconst retrievedLikes = (0,_modules_retrieve_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlInvolvement}apps/${involvementId}/likes`);\n\nwindow.addEventListener('load', () => {\n  let nbOfLikes = 0;\n  response.then((objs) => {\n    objs.forEach((obj) => {\n      (0,_modules_createDisplay_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows, obj);\n      retrievedLikes.then((like) => {\n        nbOfLikes = (0,_modules_countLikes_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(like, obj.id);\n        likes[obj.id] = nbOfLikes;\n        (0,_modules_displayLikes_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({ element: _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows, id: obj.id, nbOfLikes });\n      });\n    });\n    const nbItems = (0,_modules_countItems_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows);\n    (0,_modules_init_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.showMenu);\n    (0,_modules_displayNbItem_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.showMenu, nbItems);\n  });\n\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows.addEventListener('click', (e) => {\n    if (e.target.className === 'comment-btn') {\n      (0,_modules_init_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal);\n      ids.forEach((id) => {\n        if (Number(e.target.parentElement.parentElement.id) === id) {\n          (0,_modules_retrieve_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlShow}shows/${id}`).then((data) => (0,_modules_displayModal_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, data, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay));\n          (0,_modules_retrieve_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${getCommentFromApi}${id}`).then((comment) => {\n            const listsOfComments = document.querySelector('.list-of-comments');\n            (0,_modules_displayComments_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"])(listsOfComments, comment);\n\n            const noOfComment = document.querySelector('.no-of-comments');\n            const returnedNoOfComments = (0,_modules_countComments_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(listsOfComments);\n            noOfComment.innerHTML = ` (${returnedNoOfComments})`;\n          });\n        }\n      });\n    }\n  });\n\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal.addEventListener('click', (e) => {\n    if (e.target.className === 'close-modal') {\n      (0,_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay);\n    }\n  });\n\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay.addEventListener('click', () => {\n    (0,_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay);\n  });\n\n  document.addEventListener('keydown', (e) => {\n    if (e.key === 'Escape' && !_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal.classList.contains('hidden')) {\n      (0,_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay);\n    }\n  });\n\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows.addEventListener('click', (e) => {\n    if (e.target.className === 'fa-regular fa-heart like') {\n      let nbOfLikes;\n      ids.forEach((id) => {\n        if (Number(e.target.parentElement.id) === id) {\n          (0,_modules_addLike_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(urlLikes, id);\n          nbOfLikes = likes[id] + 1;\n          likes[id] = nbOfLikes;\n          (0,_modules_displayLikes_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({ element: _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows, id, nbOfLikes });\n        }\n      });\n    }\n  });\n\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal.addEventListener('click', (e) => {\n    e.preventDefault();\n    const today = new Date();\n    const listOfComment = document.querySelector('.list-of-comments');\n    if (e.target.className === 'btn-sub') {\n      const myTarget = e.target.closest('.modal').classList[1];\n\n      const formName = document.querySelector('.form-name');\n      const comment = document.querySelector('.comment');\n      ids.forEach((id) => {\n        if (Number(myTarget) === id) {\n          if (!(formName.value === '') || !(comment.value === '')) {\n            (0,_modules_sendComment_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(myInvolvUrl, id, formName.value, comment.value);\n            (0,_modules_addComment_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(listOfComment, {\n              date: today.toLocaleDateString(),\n              name: formName.value,\n              comment: comment.value,\n            });\n          }\n        }\n      });\n    }\n  });\n});\n\n\n//# sourceURL=webpack://tv-shows/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addComment = (element, { date, name, comment }) => {\n  const li = document.createElement('li');\n  li.innerHTML = `<p>${date} ${name}: ${comment}</p>`;\n  element.appendChild(li);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/addComment.js?");

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

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = (element) => element.children.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/countItems.js":
/*!***********************************!*\
  !*** ./src/modules/countItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = (element) => element.childElementCount;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n//# sourceURL=webpack://tv-shows/./src/modules/countItems.js?");

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

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayComments = (element, comments) => {\n  let li;\n  comments.forEach((comment) => {\n    li = document.createElement('li');\n    li.innerHTML = `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;\n    element.appendChild(li);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/displayComments.js?");

/***/ }),

/***/ "./src/modules/displayLikes.js":
/*!*************************************!*\
  !*** ./src/modules/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayLikes = ({ element, id, nbOfLikes }) => {\n  const child = Array.from(element.children).find(\n    (item) => Number(item.id) === id,\n  );\n  if (child) {\n    child.querySelector('span.nb-likes').innerHTML = `${nbOfLikes} Likes`;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikes);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/displayLikes.js?");

/***/ }),

/***/ "./src/modules/displayModal.js":
/*!*************************************!*\
  !*** ./src/modules/displayModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst openModal = (modal, data, overlay) => {\n  modal.classList.remove('hidden');\n  modal.classList.add(data.id);\n  const html = document.createElement('div');\n  html.innerHTML = ` <button class=\"close-modal\">&times;</button>\n                        <div class=\"data-img\"><img src=\"${data.image.medium}\" alt=\"${data.name}\"/></div>\n                        <p class=\"show-name name-style\">${data.name}</p>\n                        <p class=\"show-name\">Language: ${data.language}</p>\n                        <p class=\"show-name\">Premiered: ${data.premiered}</p>\n                        <div>\n                          <h4 class=\"show-name name-style\">Comment<span class=\"no-of-comments\"><span></h4>\n                          <ul class=\"list-of-comments\">\n                            \n                          </ul>\n                        </div>\n                        <div class=\"form-section\">\n                        <h2>Add a Comment</h2>\n                        <form action=\"#\" id=\"form-ele\">\n                          <input\n                            type=\"text\"\n                            name=\"\"\n                            id=\"\"\n                            placeholder=\"Your Name\"\n                            class=\"form-name\"\n                            required\n                          />\n                          <textarea\n                            name=\"\"\n                            id=\"\"\n                            placeholder=\"Your Insight\"\n                            class=\"comment\"\n                            required\n                          ></textarea>\n                          <button class=\"btn-sub\" type=\"submit\">Submit</button>\n                        </form>\n                      </div>`;\n  modal.appendChild(html);\n  overlay.classList.remove('hidden');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/displayModal.js?");

/***/ }),

/***/ "./src/modules/displayNbItem.js":
/*!**************************************!*\
  !*** ./src/modules/displayNbItem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayNbItem = (element, nbItems) => {\n  element.innerHTML = `Shows (${nbItems})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNbItem);\n\n//# sourceURL=webpack://tv-shows/./src/modules/displayNbItem.js?");

/***/ }),

/***/ "./src/modules/htmlElements.js":
/*!*************************************!*\
  !*** ./src/modules/htmlElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"overlay\": () => (/* binding */ overlay),\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu),\n/* harmony export */   \"shows\": () => (/* binding */ shows)\n/* harmony export */ });\nconst shows = document.querySelector('.shows');\nconst modal = document.querySelector('.modal');\nconst overlay = document.querySelector('.overlay');\nconst showMenu = document.querySelector('nav a');\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/htmlElements.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst retrieve = async (requestURL) => {\n  const request = new Request(requestURL);\n  const response = await fetch(request);\n  const json = await response.json();\n  return json;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieve);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/retrieve.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlInvolvement\": () => (/* binding */ urlInvolvement),\n/* harmony export */   \"urlShow\": () => (/* binding */ urlShow)\n/* harmony export */ });\nconst urlShow = 'https://api.tvmaze.com/';\nconst urlInvolvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\n\n//# sourceURL=webpack://tv-shows/./src/modules/url.js?");

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