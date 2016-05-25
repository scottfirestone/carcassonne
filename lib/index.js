require("!style!css!sass!./style.scss");

var Game = require('./game');

$(document).ready(function() {
  let game = new Game();
  game.prepare();
});
