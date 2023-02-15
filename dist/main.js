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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/kan-domine-bold.ttf */ \"./src/assets/fonts/kan-domine-bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: domine;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  text-decoration: none;\\n}\\n\\nhtml {\\n  font-family: 'Domine', serif;\\n  font-size: calc(15px + 0.390625vw);\\n}\\n\\nheader,\\nnav ul {\\n  display: flex;\\n  justify-content: start;\\n}\\n\\nheader {\\n  align-items: center;\\n  padding: 0.5rem 1rem;\\n}\\n\\n.logo {\\n  cursor: pointer;\\n}\\n\\nnav li {\\n  list-style: none;\\n  padding: 1rem;\\n}\\n\\nnav a {\\n  color: black;\\n}\\n\\nnav a:hover,\\nnav a:active,\\nnav a:focus,\\n.like {\\n  color: #cf0a0a;\\n}\\n\\nnav a:focus {\\n  text-decoration: underline;\\n}\\n\\n.show-modal {\\n  font-size: 1rem;\\n  padding: 1.75rem 3.5rem;\\n  margin: 0.5rem;\\n  border: none;\\n  background-color: #fff;\\n  color: #444;\\n  border-radius: 10rem;\\n  cursor: pointer;\\n}\\n\\n.close-modal {\\n  position: relative;\\n  left: 14rem;\\n  display: flex;\\n  justify-content: flex-end;\\n  text-align: right;\\n  font-size: 2rem;\\n  color: #cf0a0a;\\n  cursor: pointer;\\n  border: none;\\n  background: none;\\n}\\n\\n.show-name {\\n  text-align: center;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.box {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 3px;\\n  width: auto;\\n  color: #fff;\\n}\\n\\n.comment-btn,\\n.comment-rev {\\n  color: #fff;\\n  align-self: center;\\n  align-items: center;\\n}\\n\\n.modal {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 330px;\\n  transform: translate(-50%, -50%);\\n  background-color: white;\\n  padding: 0.5rem;\\n  border-radius: 5px;\\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\\n  z-index: 10;\\n}\\n\\n.data-img img {\\n  width: 100%;\\n  height: 50%;\\n}\\n\\n.modal h3 {\\n  margin-bottom: 2rem;\\n  align-items: center;\\n}\\n\\n.modal p {\\n  font-size: 14px;\\n  line-height: 2;\\n}\\n\\n.name-style {\\n  font-weight: bolder !important;\\n  font-size: 18px !important;\\n}\\n\\n.overlay {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  backdrop-filter: blur(3px);\\n  z-index: 5;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  header {\\n    justify-content: center;\\n  }\\n}\\n\\n/* Section List of shows */\\n\\n.shows {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  gap: 1rem;\\n  padding: 1rem;\\n}\\n\\n.shows li {\\n  list-style: none;\\n  width: 45%;\\n}\\n\\n.shows button {\\n  background-color: #cf0a0a;\\n  padding: 0.5rem;\\n  border: none;\\n  border-radius: 2px;\\n  font-size: 0.75rem;\\n}\\n\\n.like {\\n  padding: 0.5rem;\\n  cursor: pointer;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .shows li {\\n    list-style: none;\\n    width: 25%;\\n  }\\n}\\n\\n/* End section list of shows */\\n\\n.btn-language {\\n  border: 0;\\n  outline: 0;\\n  background: #cf0a0a;\\n  color: #fff;\\n  padding: 7px 20px;\\n  font-size: 12px;\\n  border-radius: 4px;\\n  margin-left: 10px;\\n  cursor: pointer;\\n}\\n\\n.footer {\\n  padding: 50px 15% 10px;\\n  background-color: #000;\\n  color: #777;\\n}\\n\\n.row {\\n  display: flex;\\n  width: 100%;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  padding: 50px 0;\\n}\\n\\n.footer h2 {\\n  font-size: 18px;\\n  font-weight: 400;\\n  margin-bottom: 30px;\\n}\\n\\n.footer .col {\\n  flex-basis: 25%;\\n  flex-grow: 1;\\n  margin-bottom: 20px;\\n}\\n\\n.footer .col a {\\n  display: block;\\n  text-decoration: none;\\n  color: #777;\\n  font-size: 14px;\\n  margin-bottom: 10px;\\n}\\n\\n.footer .row {\\n  align-items: flex-start;\\n  padding: 10px 0;\\n}\\n\\n.footer .btn-language {\\n  color: #fff;\\n  padding: 10px 20px;\\n  border-radius: 3px;\\n  cursor: pointer;\\n}\\n\\n.copyright-txt {\\n  font-size: 14px;\\n  margin-bottom: 10px;\\n  margin-top: 20px;\\n}\\n\\n@media only screen and (max-width: 600px) {\\n  .row:nth-child(2),\\n  .row:nth-child(4) {\\n    flex-direction: column-reverse;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tv-shows/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_generateId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/generateId.js */ \"./src/modules/generateId.js\");\n/* harmony import */ var _modules_retrieveShow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/retrieveShow.js */ \"./src/modules/retrieveShow.js\");\n/* harmony import */ var _modules_createDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createDisplay.js */ \"./src/modules/createDisplay.js\");\n/* harmony import */ var _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/htmlElements.js */ \"./src/modules/htmlElements.js\");\n/* harmony import */ var _modules_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/url.js */ \"./src/modules/url.js\");\n/* harmony import */ var _modules_displayModal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/displayModal.js */ \"./src/modules/displayModal.js\");\n/* harmony import */ var _modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/closeModal.js */ \"./src/modules/closeModal.js\");\n/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/init.js */ \"./src/modules/init.js\");\n\n\n\n\n\n\n\n\n\n\nconst ids = [];\nwindow.addEventListener('load', () => {\n  let id;\n  for (let i = 0; i < 6; i += 1) {\n    id = (0,_modules_generateId_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(249);\n    ids.push(id);\n    (0,_modules_retrieveShow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_url_js__WEBPACK_IMPORTED_MODULE_5__.urlShow, id).then((obj) => (0,_modules_createDisplay_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows, obj));\n  }\n});\n\n_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.shows.addEventListener('click', (e) => {\n  if (e.target.className === 'comment-btn') {\n    (0,_modules_init_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal);\n    ids.forEach((id) => {\n      if (Number(e.target.id) === id) {\n        (0,_modules_retrieveShow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, id).then((data) => (0,_modules_displayModal_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, data, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay));\n      }\n    });\n  }\n});\n\n_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal.addEventListener('click', (e) => {\n  if (e.target.className === 'close-modal') {\n    (0,_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay);\n  }\n});\n\n_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay.addEventListener('click', () => {\n  (0,_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay);\n});\n\ndocument.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape' && !_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal.classList.contains('hidden')) {\n    (0,_modules_closeModal_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.modal, _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_4__.overlay);\n  }\n});\n\n\n//# sourceURL=webpack://tv-shows/./src/index.js?");

/***/ }),

/***/ "./src/modules/closeModal.js":
/*!***********************************!*\
  !*** ./src/modules/closeModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst closeModal = (modal, overlay) => {\n  modal.classList.add('hidden');\n  overlay.classList.add('hidden');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeModal);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/closeModal.js?");

/***/ }),

/***/ "./src/modules/createDisplay.js":
/*!**************************************!*\
  !*** ./src/modules/createDisplay.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createDisplay = (container, obj) => {\n  const li = document.createElement('li');\n  li.innerHTML = `<div class = \"show-modal\" ><img src=\"${obj.image.medium}\" alt=\"${obj.name}\"/></div>\n                  <p class=\"name\">${obj.name}</p>\n                  <div class=\"box\"> <button type=\"button\" class=\"comment-btn\" id=\"${obj.id}\"> Comment </button>\n                        <button type=\"button\" class=\"comment-rev\">Reservation</button>\n                  </div>`;\n  container.appendChild(li);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplay);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/createDisplay.js?");

/***/ }),

/***/ "./src/modules/displayModal.js":
/*!*************************************!*\
  !*** ./src/modules/displayModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst openModal = (modal, data, overlay) => {\n  modal.classList.remove('hidden');\n  const html = document.createElement('div');\n  html.innerHTML = ` <button class=\"close-modal\">&times;</button>\n                        <div class=\"data-img\"><img src=\"${data.image.medium}\" alt=\"${data.name}\"/></div>\n                        <p class=\"show-name name-style\">${data.name}</p>\n                        <p class=\"show-name\">Language: ${data.language}</p>\n                        <p class=\"show-name\">Premiered: ${data.premiered}</p>`;\n  modal.appendChild(html);\n  overlay.classList.remove('hidden');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/displayModal.js?");

/***/ }),

/***/ "./src/modules/generateId.js":
/*!***********************************!*\
  !*** ./src/modules/generateId.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generateId = (max) => Math.floor(Math.random() * max) + 1;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateId);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/generateId.js?");

/***/ }),

/***/ "./src/modules/htmlElements.js":
/*!*************************************!*\
  !*** ./src/modules/htmlElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"overlay\": () => (/* binding */ overlay),\n/* harmony export */   \"shows\": () => (/* binding */ shows)\n/* harmony export */ });\nconst shows = document.querySelector('.shows');\nconst modal = document.querySelector('.modal');\nconst overlay = document.querySelector('.overlay');\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/htmlElements.js?");

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst init = (element) => {\n  element.innerHTML = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/init.js?");

/***/ }),

/***/ "./src/modules/retrieveShow.js":
/*!*************************************!*\
  !*** ./src/modules/retrieveShow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst retrieveShow = async (url, id) => {\n  const requestURL = `${url}shows/${id}`;\n  const request = new Request(requestURL);\n  const response = await fetch(request);\n  const show = await response.json();\n  return show;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieveShow);\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/retrieveShow.js?");

/***/ }),

/***/ "./src/modules/url.js":
/*!****************************!*\
  !*** ./src/modules/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlInvolvement\": () => (/* binding */ urlInvolvement),\n/* harmony export */   \"urlShow\": () => (/* binding */ urlShow)\n/* harmony export */ });\nconst urlShow = 'https://api.tvmaze.com/';\nconst urlInvolvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\n\n\n//# sourceURL=webpack://tv-shows/./src/modules/url.js?");

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