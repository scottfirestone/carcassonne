require("!style!css!sass!./style.scss");
let Game = require('./game');

$(document).ready(function() {
  let game = new Game();
  game.prepare();
});
