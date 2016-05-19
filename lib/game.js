var Tile = require('./tile');
var TileInventory = require('./tileInventory');

class Game {
  constructor() {
  }

  start() {
    this.inventory = new TileInventory();
    console.log('inventory', this.inventory);
    // var tile = new Tile('lib/images/tiles/D.png', "d", "city", "road", "field", "road", false, "300px", "300px");
    // var $div = $("<div>", {class: "tile"});
    // $div.css('top', tile.y);
    // $div.css('left', tile.x);
    // $div.css('background-image', "url(" + tile.image + ")");
    // $('.board').append($div);
    // console.log('game', $div, tile, tileInventory);
    // tileInventory.build();
  }
}

module.exports = Game;
