/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<style>/* FUSE */</style>\n\n<!-- Use the id \"title\" for title -->\n<div class=\"byu-calendar-tile\" layout=\"horizontal\">\n    <div class=\"section-first\">\n        <slot id=\"date\" name=\"date\">   </slot>\n        <div id=\"month-abb\"></div>\n        <div id=\"day-number\"></div>\n        <slot id=\"time\" name=\"time\">   </slot>\n    </div>\n    <div class=\"section-second\">\n        <slot id=\"title\" name=\"title\">  </slot>\n        <slot id=\"description\" name=\"description\">  </slot>\n        <slot id=\"location\" name=\"location\"></slot>\n    </div>\n</div>\n\n\n\n";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<style>/* FUSE */</style>\n\n<!-- Use the id \"title\" for title -->\n<div class=\"byu-calendar-tile\" layout=\"vertical\">\n    <div class=\"section-first\">\n        <slot id=\"date\" name=\"date\">   </slot>\n        <div id=\"month-name\"></div>\n        <div id=\"day-number\"></div>\n        <div id=\"weekday\"></div>\n    </div>\n    <div class=\"section-second\">\n        <slot id=\"title\" name=\"title\">  </slot>\n        <slot id=\"time\" name=\"time\">   </slot>\n        <slot id=\"location\" name=\"location\"></slot>\n    </div>\n</div>\n\n\n\n\n";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function (template) {
    'use strict';
    const verticalTemplate = __webpack_require__(1);
    const horizontalTemplate = __webpack_require__(0);

    var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];

    class ByuCalendarTile extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
		}
        connectedCallback(){
            // identify which template to use
            this.shadowRoot.innerHTML = this.getAttribute('layout') === 'horizontal' ? horizontalTemplate : verticalTemplate;

            const date = this.shadowRoot.querySelector("#date");
            const dateOb = new Date(date);

            // --- isolate parts of the date
            // get month
            var monthName = months[dateOb.getMonth()];

            // get month abbreviation
            var monthAbb = monthAbbs[dateOb.getMonth()];

            // get day of the month
            var day = dateOb.getDate();

            // get day of week
            var weekday = weekdays[dateOb.getDay()];

            // set those date pieces as values in the tile's divs
            this.shadowRoot.getElementById('month-name').innerHTML = monthName;
            this.shadowRoot.getElementById('month-abb').innerHTML = monthAbb;
            this.shadowRoot.getElementById('day-number').innerHTML = day;
            this.shadowRoot.getElementById('weekday').innerHTML = weekday;

        }
    }

    window.customElements.define('byu-calendar-tile', ByuCalendarTile);
    window.ByuCalendarTile = ByuCalendarTile;

})(/* FUSE */);

/***/ })
/******/ ]);
//# sourceMappingURL=components.js.map