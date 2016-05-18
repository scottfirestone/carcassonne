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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Tile = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tile\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	$(document).ready(function () {
	  $('.confirm-tile').on('click', placeTile);
	});

	var starterTile = new Tile('images/tiles/0tile00.jpg', "D", false, 500, 300);

	function placeTile() {
	  var tile = $(document).find('.current-tile');
	  tile.unbind('mouseenter mouseleave');
	  tile.removeClass('current-tile');
	  tile.draggable('disable');
	  tile.css('border', 'none');
	  $('.rotate-tile').remove();
	  pullRandomTile();
	}

	function rotateTile() {
	  var tile = $(this).parents('.current-tile');
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
	}

	function pullRandomTile() {
	  var tileImage = "lib/images/tiles/" + (Math.floor(Math.random() * 24) + 1) + ".png";
	  renderTile(tileImage);
	}

	function renderTile(tileImage) {
	  var $tileDiv = $("<div class='tile current-tile'><div class='rotate-tile'></div></div>");
	  var $placeHolder = $(document.getElementById('new-tile-box'));
	  $placeHolder.append($tileDiv);
	  $tileDiv.css('background-image', "url('" + tileImage + "')");
	  $tileDiv.draggable({ grid: [100, 100] });
	  $('.rotate-tile').on('click', rotateTile);
	  $('.current-tile').hover(function () {
	    $('.rotate-tile').show();
	  }, function () {
	    $('.rotate-tile').hide();
	  });
	}

	pullRandomTile();

/***/ }
/******/ ]);