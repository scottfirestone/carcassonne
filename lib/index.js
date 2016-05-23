require("!style!css!sass!./style.scss");

var Game = require('./game');

$(document).ready(function() {
  var game = new Game();
  game.start();
});


Draggable.create('.box', {
  bounds: $('.board'),
		edgeResistance:0.65,
		type:"x,y",
		throwProps:true,
    autoScroll:true,
		// liveSnap:liveSnap,
});
