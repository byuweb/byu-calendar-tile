var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;

(function () {
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    /******/(function (modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/var installedModules = {};
        /******/
        /******/ // The require function
        /******/function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/if (installedModules[moduleId])
                /******/return installedModules[moduleId].exports;
            /******/
            /******/ // Create a new module (and put it into the cache)
            /******/var module = installedModules[moduleId] = {
                /******/i: moduleId,
                /******/l: false,
                /******/exports: {}
                /******/ };
            /******/
            /******/ // Execute the module function
            /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/__webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/__webpack_require__.c = installedModules;
        /******/
        /******/ // identity function for calling harmony imports with the correct context
        /******/__webpack_require__.i = function (value) {
            return value;
        };
        /******/
        /******/ // define getter function for harmony exports
        /******/__webpack_require__.d = function (exports, name, getter) {
            /******/if (!__webpack_require__.o(exports, name)) {
                /******/Object.defineProperty(exports, name, {
                    /******/configurable: false,
                    /******/enumerable: true,
                    /******/get: getter
                    /******/ });
                /******/
            }
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__webpack_require__.n = function (module) {
            /******/var getter = module && module.__esModule ?
            /******/function getDefault() {
                return module['default'];
            } :
            /******/function getModuleExports() {
                return module;
            };
            /******/__webpack_require__.d(getter, 'a', getter);
            /******/return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/__webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/__webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/return __webpack_require__(__webpack_require__.s = 2);
        /******/
    })(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports) {

        module.exports = "<style>/* FUSE */</style>\n\n<!-- Use the id \"title\" for title -->\n<div class=\"byu-calendar-tile\" layout=\"horizontal\">\n    <div class=\"section-first\">\n        <slot id=\"date\" name=\"date\">   </slot>\n        <div id=\"month-abb\"></div>\n        <div id=\"day-number\"></div>\n        <slot id=\"time\" name=\"time\">   </slot>\n    </div>\n    <div class=\"section-second\">\n        <slot id=\"title\" name=\"title\">  </slot>\n        <slot id=\"description\" name=\"description\">  </slot>\n        <slot id=\"location\" name=\"location\"></slot>\n    </div>\n</div>\n\n\n\n";

        /***/
    },
    /* 1 */
    /***/function (module, exports) {

        module.exports = "<style>/* FUSE */</style>\n\n<!-- Use the id \"title\" for title -->\n<div class=\"byu-calendar-tile\" layout=\"vertical\">\n    <div class=\"section-first\">\n        <slot id=\"date\" name=\"date\">   </slot>\n        <div id=\"month-name\"></div>\n        <div id=\"day-number\"></div>\n        <div id=\"weekday\"></div>\n    </div>\n    <div class=\"section-second\">\n        <slot id=\"title\" name=\"title\">  </slot>\n        <slot id=\"time\" name=\"time\">   </slot>\n        <slot id=\"location\" name=\"location\"></slot>\n    </div>\n</div>\n\n\n\n\n";

        /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

        (function (template) {
            'use strict';

            var verticalTemplate = __webpack_require__(1);
            var horizontalTemplate = __webpack_require__(0);

            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            var monthAbbs = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

            var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            var ByuCalendarTile = function (_HTMLElement) {
                _inherits(ByuCalendarTile, _HTMLElement);

                function ByuCalendarTile() {
                    _classCallCheck(this, ByuCalendarTile);

                    var _this = _possibleConstructorReturn(this, (ByuCalendarTile.__proto__ || Object.getPrototypeOf(ByuCalendarTile)).call(this));

                    var shadowRoot = _this.attachShadow({ mode: 'open' });
                    return _this;
                }

                _createClass(ByuCalendarTile, [{
                    key: 'connectedCallback',
                    value: function connectedCallback() {
                        // identify which template to use
                        this.shadowRoot.innerHTML = this.getAttribute('layout') === 'horizontal' ? horizontalTemplate : verticalTemplate;

                        var date = this.shadowRoot.querySelector("#date");
                        var dateOb = new Date(date);

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
                }]);

                return ByuCalendarTile;
            }(HTMLElement);

            window.customElements.define('byu-calendar-tile', ByuCalendarTile);
            window.ByuCalendarTile = ByuCalendarTile;
        })();

        /***/
    }]);
    //# sourceMappingURL=components.js.map
})();
//# sourceMappingURL=components.es5.js.map
