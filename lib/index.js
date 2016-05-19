require("!style!css!sass!./style.scss");

var Tile = require('./tile');
var tileInventory = require('./tileInventory')
var Game = require('./game');

$(document).ready(function() {
  $('#btn-place-tile').on('click', placeTile);
  // console.log('game', Game.placeStarterTile());
  var game = new Game();
  game.start();
});

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
    tile.addClass('rotate270')
  } else if (tile.hasClass('rotate270')) {
    tile.removeClass('rotate270');
  } else {
    tile.addClass('rotate90');
  }
}

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
  $('.current-tile').hover(function() {
    $('.rotate-tile').show();
  }, function() {
    $('.rotate-tile').hide();
  })
}

pullRandomTile();
