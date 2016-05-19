var Tile = require('./tile');
var tileInventory = require('./tileInventory');

class Game {

  start() {
    var tile = new Tile('lib/images/tiles/D.png', "d", "city", "road", "field", "road", false, "300px", "300px");
    var $div = $(document.createElement("div"));
    $div.addClass('tile');
    $div.css('top', tile.top);
    $div.css('left', tile.left);
    $div.css('background-image', "url(" + tile.image + ")");
    $('.board').append($div);

    tileInventory.build();
  }
}

module.exports = Game;
