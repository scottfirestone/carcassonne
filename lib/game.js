var Tile = require('./tile');
var TileInventory = require('./tileInventory');

class Game {
  constructor() {
    this.inventory = null;
    this.setup();
  }

  setup() {
    $('#btn-place-tile').on('click', this.placeTile);
  }

  start() {
    this.inventory = new TileInventory();

    var tile = this.inventory.nextTile();
    tile.setPosition(3, 3);
    tile.activate();
  }

  placeTile() {
    var tile = $(document).find('.current-tile');
    tile.unbind('mouseenter mouseleave');
    tile.removeClass('current-tile');
    tile.draggable('disable');
    tile.css('border', 'none');
    $('.rotate-tile').remove();
    pullRandomTile();
  }
}

module.exports = Game;
