(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/transition.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/alert.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/collapse.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/dropdown.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/modal.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_highlight_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/highlight.js */ "./assets/js/highlight.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/doclinks.js */ "./assets/js/doclinks.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
 // loads the Bootstrap jQuery plugins






 // loads the code syntax highlighting library

 // Creates links to the Symfony documentation

 // start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/doclinks.js":
/*!*******************************!*\
  !*** ./assets/js/doclinks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
 // Wraps some elements in anchor tags referencing to the Symfony documentation

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

$(function () {
  var $modal = $('#sourceCodeModal');
  var $controllerCode = $modal.find('code.php');
  var $templateCode = $modal.find('code.twig');

  function anchor(url, content) {
    return '<a class="doclink" target="_blank" href="' + url + '">' + content + '</a>';
  }

  ; // Wraps links to the Symfony documentation

  $modal.find('.hljs-comment').each(function () {
    $(this).html($(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g, function (url) {
      return anchor(url, url);
    }));
  }); // Wraps Symfony's annotations

  var annotations = {
    '@Cache': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html',
    '@IsGranted': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted',
    '@ParamConverter': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html',
    '@Route': 'https://symfony.com/doc/current/routing.html#creating-routes-as-annotations',
    '@Security': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security'
  };
  $controllerCode.find('.hljs-doctag').each(function () {
    var annotation = $(this).text();

    if (annotations[annotation]) {
      $(this).html(anchor(annotations[annotation], annotation));
    }
  }); // Wraps Twig's tags

  $templateCode.find('.hljs-template-tag > .hljs-name').each(function () {
    var tag = $(this).text();

    if ('else' === tag || tag.match(/^end/)) {
      return;
    }

    var url = 'https://twig.symfony.com/doc/3.x/tags/' + tag + '.html#' + tag;
    $(this).html(anchor(url, tag));
  }); // Wraps Twig's functions

  $templateCode.find('.hljs-template-variable > .hljs-name').each(function () {
    var func = $(this).text();
    var url = 'https://twig.symfony.com/doc/3.x/functions/' + func + '.html#' + func;
    $(this).html(anchor(url, func));
  });
});

/***/ }),

/***/ "./assets/js/highlight.js":
/*!********************************!*\
  !*** ./assets/js/highlight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/lib/core.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/lib/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/lib/languages/twig.js");
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__);



highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('php', (highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('twig', (highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().initHighlightingOnLoad();

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-88c411","vendors-node_modules_core-js_modules_es_string_replace_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap-sass_assets-6fd256"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZG9jbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sIm5hbWVzIjpbImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIiwiJCIsIiRtb2RhbCIsIiRjb250cm9sbGVyQ29kZSIsImZpbmQiLCIkdGVtcGxhdGVDb2RlIiwiYW5jaG9yIiwidXJsIiwiY29udGVudCIsImVhY2giLCJodG1sIiwicmVwbGFjZSIsImFubm90YXRpb25zIiwiYW5ub3RhdGlvbiIsInRleHQiLCJ0YWciLCJtYXRjaCIsImZ1bmMiLCJobGpzIiwicGhwIiwidHdpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLGlFQUFlO0FBQ2YsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0NEOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7Q0FHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDZEE7O0FBQ08sSUFBTUEsR0FBRyxHQUFHQywwRUFBZ0IsQ0FBQ0MsMElBQUQsQ0FBNUIsQyxDQU1QO0FBQ0EsZ0U7Ozs7Ozs7Ozs7OztDQ1JBOzs7Ozs7Ozs7O0FBQ0FDLENBQUMsQ0FBQyxZQUFXO0FBQ1QsTUFBSUMsTUFBTSxHQUFHRCxDQUFDLENBQUMsa0JBQUQsQ0FBZDtBQUNBLE1BQUlFLGVBQWUsR0FBR0QsTUFBTSxDQUFDRSxJQUFQLENBQVksVUFBWixDQUF0QjtBQUNBLE1BQUlDLGFBQWEsR0FBR0gsTUFBTSxDQUFDRSxJQUFQLENBQVksV0FBWixDQUFwQjs7QUFFQSxXQUFTRSxNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsT0FBckIsRUFBOEI7QUFDMUIsV0FBTyw4Q0FBOENELEdBQTlDLEdBQW9ELElBQXBELEdBQTJEQyxPQUEzRCxHQUFxRSxNQUE1RTtBQUNIOztBQUFBLEdBUFEsQ0FTVDs7QUFDQU4sUUFBTSxDQUFDRSxJQUFQLENBQVksZUFBWixFQUE2QkssSUFBN0IsQ0FBa0MsWUFBVztBQUN6Q1IsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxJQUFSLENBQWFULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsSUFBUixHQUFlQyxPQUFmLENBQXVCLHdDQUF2QixFQUFpRSxVQUFTSixHQUFULEVBQWM7QUFDeEYsYUFBT0QsTUFBTSxDQUFDQyxHQUFELEVBQU1BLEdBQU4sQ0FBYjtBQUNILEtBRlksQ0FBYjtBQUdILEdBSkQsRUFWUyxDQWdCVDs7QUFDQSxNQUFJSyxXQUFXLEdBQUc7QUFDZCxjQUFVLDJGQURJO0FBRWQsa0JBQWMsd0dBRkE7QUFHZCx1QkFBbUIsZ0dBSEw7QUFJZCxjQUFVLDZFQUpJO0FBS2QsaUJBQWE7QUFMQyxHQUFsQjtBQVFBVCxpQkFBZSxDQUFDQyxJQUFoQixDQUFxQixjQUFyQixFQUFxQ0ssSUFBckMsQ0FBMEMsWUFBVztBQUNqRCxRQUFJSSxVQUFVLEdBQUdaLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsSUFBUixFQUFqQjs7QUFFQSxRQUFJRixXQUFXLENBQUNDLFVBQUQsQ0FBZixFQUE2QjtBQUN6QlosT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxJQUFSLENBQWFKLE1BQU0sQ0FBQ00sV0FBVyxDQUFDQyxVQUFELENBQVosRUFBMEJBLFVBQTFCLENBQW5CO0FBQ0g7QUFDSixHQU5ELEVBekJTLENBaUNUOztBQUNBUixlQUFhLENBQUNELElBQWQsQ0FBbUIsaUNBQW5CLEVBQXNESyxJQUF0RCxDQUEyRCxZQUFXO0FBQ2xFLFFBQUlNLEdBQUcsR0FBR2QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxJQUFSLEVBQVY7O0FBRUEsUUFBSSxXQUFXQyxHQUFYLElBQWtCQSxHQUFHLENBQUNDLEtBQUosQ0FBVSxNQUFWLENBQXRCLEVBQXlDO0FBQ3JDO0FBQ0g7O0FBRUQsUUFBSVQsR0FBRyxHQUFHLDJDQUEyQ1EsR0FBM0MsR0FBaUQsUUFBakQsR0FBNERBLEdBQXRFO0FBRUFkLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsSUFBUixDQUFhSixNQUFNLENBQUNDLEdBQUQsRUFBTVEsR0FBTixDQUFuQjtBQUNILEdBVkQsRUFsQ1MsQ0E4Q1Q7O0FBQ0FWLGVBQWEsQ0FBQ0QsSUFBZCxDQUFtQixzQ0FBbkIsRUFBMkRLLElBQTNELENBQWdFLFlBQVc7QUFDdkUsUUFBSVEsSUFBSSxHQUFHaEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxJQUFSLEVBQVg7QUFFQSxRQUFJUCxHQUFHLEdBQUcsZ0RBQWdEVSxJQUFoRCxHQUF1RCxRQUF2RCxHQUFrRUEsSUFBNUU7QUFFQWhCLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsSUFBUixDQUFhSixNQUFNLENBQUNDLEdBQUQsRUFBTVUsSUFBTixDQUFuQjtBQUNILEdBTkQ7QUFPSCxDQXREQSxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUVBQyw2RUFBQSxDQUFzQixLQUF0QixFQUE2QkMsdUVBQTdCO0FBQ0FELDZFQUFBLENBQXNCLE1BQXRCLEVBQThCRSx3RUFBOUI7QUFFQUYsbUZBQUEsRzs7Ozs7Ozs7Ozs7O0FDUEEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIGxvYWRzIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbnNcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC90cmFuc2l0aW9uLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9hbGVydC5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAvY29sbGFwc2UuanMnO1xuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL2Ryb3Bkb3duLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9tb2RhbC5qcyc7XG5pbXBvcnQgJ2pxdWVyeSdcblxuLy8gbG9hZHMgdGhlIGNvZGUgc3ludGF4IGhpZ2hsaWdodGluZyBsaWJyYXJ5XG5pbXBvcnQgJy4vanMvaGlnaGxpZ2h0LmpzJztcblxuLy8gQ3JlYXRlcyBsaW5rcyB0byB0aGUgU3ltZm9ueSBkb2N1bWVudGF0aW9uXG5pbXBvcnQgJy4vanMvZG9jbGlua3MuanMnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBXcmFwcyBzb21lIGVsZW1lbnRzIGluIGFuY2hvciB0YWdzIHJlZmVyZW5jaW5nIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cbiQoZnVuY3Rpb24oKSB7XG4gICAgdmFyICRtb2RhbCA9ICQoJyNzb3VyY2VDb2RlTW9kYWwnKTtcbiAgICB2YXIgJGNvbnRyb2xsZXJDb2RlID0gJG1vZGFsLmZpbmQoJ2NvZGUucGhwJyk7XG4gICAgdmFyICR0ZW1wbGF0ZUNvZGUgPSAkbW9kYWwuZmluZCgnY29kZS50d2lnJyk7XG5cbiAgICBmdW5jdGlvbiBhbmNob3IodXJsLCBjb250ZW50KSB7XG4gICAgICAgIHJldHVybiAnPGEgY2xhc3M9XCJkb2NsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIicgKyB1cmwgKyAnXCI+JyArIGNvbnRlbnQgKyAnPC9hPic7XG4gICAgfTtcblxuICAgIC8vIFdyYXBzIGxpbmtzIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cbiAgICAkbW9kYWwuZmluZCgnLmhsanMtY29tbWVudCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuaHRtbCgkKHRoaXMpLmh0bWwoKS5yZXBsYWNlKC9odHRwczpcXC9cXC9zeW1mb255LmNvbVxcL2RvY1xcL1tcXHcvLiMtXSsvZywgZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5jaG9yKHVybCwgdXJsKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgU3ltZm9ueSdzIGFubm90YXRpb25zXG4gICAgdmFyIGFubm90YXRpb25zID0ge1xuICAgICAgICAnQENhY2hlJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9jYWNoZS5odG1sJyxcbiAgICAgICAgJ0BJc0dyYW50ZWQnOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9idW5kbGVzL1NlbnNpb0ZyYW1ld29ya0V4dHJhQnVuZGxlL2Fubm90YXRpb25zL3NlY3VyaXR5Lmh0bWwjaXNncmFudGVkJyxcbiAgICAgICAgJ0BQYXJhbUNvbnZlcnRlcic6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvY29udmVydGVycy5odG1sJyxcbiAgICAgICAgJ0BSb3V0ZSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L3JvdXRpbmcuaHRtbCNjcmVhdGluZy1yb3V0ZXMtYXMtYW5ub3RhdGlvbnMnLFxuICAgICAgICAnQFNlY3VyaXR5JzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9zZWN1cml0eS5odG1sI3NlY3VyaXR5J1xuICAgIH07XG5cbiAgICAkY29udHJvbGxlckNvZGUuZmluZCgnLmhsanMtZG9jdGFnJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFubm90YXRpb24gPSAkKHRoaXMpLnRleHQoKTtcblxuICAgICAgICBpZiAoYW5ub3RhdGlvbnNbYW5ub3RhdGlvbl0pIHtcbiAgICAgICAgICAgICQodGhpcykuaHRtbChhbmNob3IoYW5ub3RhdGlvbnNbYW5ub3RhdGlvbl0sIGFubm90YXRpb24pKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgVHdpZydzIHRhZ3NcbiAgICAkdGVtcGxhdGVDb2RlLmZpbmQoJy5obGpzLXRlbXBsYXRlLXRhZyA+IC5obGpzLW5hbWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGFnID0gJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgaWYgKCdlbHNlJyA9PT0gdGFnIHx8IHRhZy5tYXRjaCgvXmVuZC8pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vdHdpZy5zeW1mb255LmNvbS9kb2MvMy54L3RhZ3MvJyArIHRhZyArICcuaHRtbCMnICsgdGFnO1xuXG4gICAgICAgICQodGhpcykuaHRtbChhbmNob3IodXJsLCB0YWcpKTtcbiAgICB9KTtcblxuICAgIC8vIFdyYXBzIFR3aWcncyBmdW5jdGlvbnNcbiAgICAkdGVtcGxhdGVDb2RlLmZpbmQoJy5obGpzLXRlbXBsYXRlLXZhcmlhYmxlID4gLmhsanMtbmFtZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmdW5jID0gJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgdmFyIHVybCA9ICdodHRwczovL3R3aWcuc3ltZm9ueS5jb20vZG9jLzMueC9mdW5jdGlvbnMvJyArIGZ1bmMgKyAnLmh0bWwjJyArIGZ1bmM7XG5cbiAgICAgICAgJCh0aGlzKS5odG1sKGFuY2hvcih1cmwsIGZ1bmMpKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJztcbmltcG9ydCBwaHAgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGhwJztcbmltcG9ydCB0d2lnIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R3aWcnO1xuXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ3BocCcsIHBocCk7XG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ3R3aWcnLCB0d2lnKTtcblxuaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9