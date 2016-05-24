require("!style!css!sass!./style.scss");

var Game = require('./game');

$(document).ready(function() {
  var game = new Game();
  game.prepare();
  // game.start();
});
