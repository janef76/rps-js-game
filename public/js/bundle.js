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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', () => {\n  console.log('DOM Loaded');\n\n  let userScores = 0;\n  let computerScores = 0;\n\n  const userScore = document.getElementById(\"user-score\");\n  const computerScore = document.getElementById(\"computer-score\");\n  const result = document.querySelector(\".result > p\");\n  const rock = document.getElementById(\"rock\");\n  const paper = document.getElementById(\"paper\");\n  const scissors = document.getElementById(\"scissors\");\n  const newGame = document.getElementById(\"new-game\");\n\n  const getCompChoice = function() {\n    const choices = ['rock', 'paper', 'scissors'];\n    const randomNo = Math.floor(Math.random() * 3);\n    return choices[randomNo];\n  }\n\n  const win = function(userChoice, computerChoice) {\n    userScores++;\n    userScore.innerHTML = userScores;\n    computerScore.innerHTML = computerScores;\n    result.innerHTML = `You chose ${userChoice.toUpperCase()} it beats ${computerChoice.toUpperCase()}!! You win!`;\n    document.getElementById(userChoice).classList.add('green-flash');\n    setTimeout(() => document.getElementById(userChoice).classList.remove('green-flash'), 500);\n  }\n\n  const loose = function(userChoice, computerChoice) {\n    document.getElementById(userChoice).classList.add('choice');\n    computerScores++;\n    computerScore.innerHTML = computerScores;\n    userScore.innerHTML = userScores;\n    result.innerHTML = `Computer chose ${computerChoice.toUpperCase()} it beats ${userChoice.toUpperCase()}. You lost!!!`;\n    document.getElementById(userChoice).classList.add('red-flash');\n    setTimeout(() => document.getElementById(userChoice).classList.remove('red-flash'), 500);\n  }\n\n  const draw = function(userChoice, computerChoice) {\n    document.getElementById(userChoice).classList.add('choice');\n    result.innerHTML = `Youc chose ${userChoice.toUpperCase()} is equal to ${computerChoice.toUpperCase()}. Its a draw!!`\n    document.getElementById(userChoice).classList.add('grey-flash');\n    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-flash'), 500)\n  }\n\n\n  const gameLogic = function(userChoice) {\n    const computerChoice = getCompChoice();\n\n    if ((userChoice === \"rock\" && computerChoice === \"scissors\") ||\n        (userChoice === \"paper\" && computerChoice === \"rock\") ||\n        (userChoice === \"scissors\" && computerChoice === \"paper\")) {\n          win(userChoice, computerChoice);\n    } else if ((userChoice === \"rock\" && computerChoice === \"paper\") ||\n        (userChoice === \"paper\" && computerChoice === \"scissors\") ||\n        (userChoice === \"scissors\" && computerChoice === \"rock\")) {\n          loose(userChoice, computerChoice);\n    } else if (userChoice === computerChoice) {\n          draw(userChoice, computerChoice);\n    };\n  }\n\n  const clearScoreBoard = function() {\n    userScores = 0;\n    computerScores = 0;\n\n    userScore.innerHTML = userScores;\n    computerScore.innerHTML = computerScores;\n  }\n\n    rock.addEventListener('click', () => gameLogic('rock'));\n\n    paper.addEventListener('click', () => gameLogic('paper'));\n\n    scissors.addEventListener('click', () => gameLogic('scissors'));\n\n    newGame.addEventListener('click', () => clearScoreBoard());\n\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });