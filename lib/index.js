require("!style!css!sass!./style.scss");

// Define classes
// var Tile = require('./tile');
// var TileInventory = require('./tileInventory');
var Game = require('./game');


$(document).ready(function() {
  var game = new Game();
  game.start();
});

function pullRandomTile() {
  var newTile = tileInventory.pop()
  renderTile(newTile);
}

function renderTile(newTile) {
  var $tileDiv = $("<div class='tile current-tile'><div class='rotate-tile'></div></div>");
  var $placeHolder = $(document.getElementById('new-tile-box'));
  $placeHolder.append($tileDiv);
  $tileDiv.css('background-image', "url(" + newTile.image + ")")
  $tileDiv.draggable({ grid: [100, 100] });
  $('.rotate-tile').on('click', rotateTile);
  // $('.current-tile').hover(function() {
  //   $('.rotate-tile').show();
  // }, function() {
  //   $('.rotate-tile').hide();
  // })
}

// pullRandomTile();
