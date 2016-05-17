/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	$(document).ready(function () {

	  $('.starting-tile').draggable({ grid: [100, 100] });

	  $('.second-tile').draggable({ grid: [100, 100] });

	  $('.rotate-tile').on('click', rotateTile);
	});

	function rotateTile() {
	  var tile = $(this).parents('.second-tile');
	  if (tile.hasClass('rotate90')) {
	    tile.removeClass('rotate90');
	    tile.addClass('rotate180');
	  } else if (tile.hasClass('rotate180')) {
	    tile.removeClass('rotate180');
	    tile.addClass('rotate270');
	  } else if (tile.hasClass('rotate270')) {
	    tile.removeClass('rotate270');
	  } else {
	    tile.addClass('rotate90');
	  }
	  console.log('tile', tile);
	}

	//
	// function pullRandomTile() {
	//   var tile = new Image();
	//   tile.src = "/tiles/0tile" + (Math.floor(Math.random() * 24) + 1) + ".jpg";
	//   renderNewTile(tile);
	// }
	//
	// function renderNewTile(tile) {
	//   tile.onload = function() {
	//     context.drawImage(tile, 450, 0);
	//   }
	// }
	// pullRandomTile();

/***/ }
/******/ ]);