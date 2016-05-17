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

	var canvas = document.getElementById('viewport'),
	    context = canvas.getContext('2d');

	var base_image = new Image();
	base_image.src = 'tiles/0tile00.jpg';
	var tile2 = new Image();
	tile2.src = "/tiles/0tile1.jpg";

	make_base();
	make_tile2();

	function make_base() {
	  base_image.onload = function () {
	    context.drawImage(base_image, 200, 200);
	  };
	}

	function make_tile2() {
	  tile2.onload = function () {
	    context.drawImage(tile2, 200, 250);
	  };
	}

	function pullRandomTile() {
	  var tile = new Image();
	  tile.src = "/tiles/0tile" + (Math.floor(Math.random() * 24) + 1) + ".jpg";
	  renderNewTile(tile);
	}

	function renderNewTile(tile) {
	  tile.onload = function () {
	    context.drawImage(tile, 450, 0);
	  };
	}
	pullRandomTile();

	// var Tile = function(down, left, right, up) {
	//   this.image = //src
	//
	// }

	//
	// var $tile2 = tile2
	//
	// $tile2.on('click', findMoves);
	//
	// function findMoves() {
	//
	// }
	//
	// function drawPotentialMove() {
	//
	// }
	// 2nd tile below

	// var canvasOffset=$("#viewport").offset();
	// var offsetX=canvasOffset.left;
	// var offsetY=canvasOffset.top;
	// var canvasWidth=canvas.width;
	// var canvasHeight=canvas.height;
	// var isDragging=false;
	//
	// function handleMouseDown(e){
	//   canMouseX=parseInt(e.clientX-offsetX);
	//   canMouseY=parseInt(e.clientY-offsetY);
	//   // set the drag flag
	//   isDragging=true;
	// }
	//
	// function handleMouseUp(e){
	//   canMouseX=parseInt(e.clientX-offsetX);
	//   canMouseY=parseInt(e.clientY-offsetY);
	//   // clear the drag flag
	//   isDragging=false;
	// }
	//
	// function handleMouseOut(e){
	//   canMouseX=parseInt(e.clientX-offsetX);
	//   canMouseY=parseInt(e.clientY-offsetY);
	//   // user has left the canvas, so clear the drag flag
	//   //isDragging=false;
	// }
	//
	// function handleMouseMove(e){
	//   canMouseX=parseInt(e.clientX-offsetX);
	//   canMouseY=parseInt(e.clientY-offsetY);
	//   // if the drag flag is set, clear the canvas and draw the image
	//   if(isDragging){
	//       context.clearRect(0,0,canvasWidth,canvasHeight);
	//       context.drawImage(tile2,canMouseX-128/2,canMouseY-120/2,128,120);
	//   }
	// }
	//
	// $("#viewport").mousedown(function(e){handleMouseDown(e);});
	// $("#viewport").mousemove(function(e){handleMouseMove(e);});
	// $("#viewport").mouseup(function(e){handleMouseUp(e);});
	// $("#viewport").mouseout(function(e){handleMouseOut(e);});

/***/ }
/******/ ]);