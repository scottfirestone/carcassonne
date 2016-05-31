require("!style!css!sass!./style.scss");
const Game = require('./game');

$(document).ready(function() {
  let game = new Game();
  game.prepare();
});
