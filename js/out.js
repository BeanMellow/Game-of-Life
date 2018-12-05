/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n    var board = document.querySelector('#board');\n\n    function GameOfLife() {\n        var boardWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;\n        var boardHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;\n        var cellSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n\n        this.width = boardWidth;\n        this.height = boardHeight;\n        this.cells = [];\n        this.createBoard = function () {\n            var cellNum = this.width * this.height;\n            board.style.width = this.width * cellSize + 'px';\n            board.style.height = this.height * cellSize + 'px';\n            for (var i = 0; i < cellNum; i++) {\n                var cell = document.createElement('div');\n                cell.classList.add('cell');\n                cell.style.width = cellSize + 'px';\n                cell.style.height = cellSize + 'px';\n                // dataset for cell index\n                cell.dataset.index = i.toString();\n                // event LIVE/DIE on click\n                cell.addEventListener('click', function (event) {\n                    var cell = event.target;\n                    cell.classList.toggle('live');\n                });\n                board.appendChild(cell);\n            }\n            // fill cells property\n            this.cells = document.querySelectorAll('.cell');\n        };\n        this.neighbours = function (index) {\n            //    TODO\n        };\n        this.setCellState = function (x, y, state) {\n            var index = x + y * this.width;\n            if (state === 'live') {\n                this.cells[index].classList.add('live');\n            } else {\n                this.cells[index].classList.remove('live');\n            }\n        };\n        // this.firstGlider = function (x, y) {\n        //     this.setCellState(x, y, 'live');\n        // };\n    }\n\n    var game = new GameOfLife();\n    game.createBoard();\n    game.setCellState(3, 3, 'live');\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });