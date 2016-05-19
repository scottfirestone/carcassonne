var Tile = require('./tile');
var TileInventory = require('./tileInventory');

class Game {
  constructor() {
    this.inventory = null;
    this.currentTile = null;
    this.setup();
  }

  setup() {
    $('#btn-place-tile').on('click', { game: this }, this.placeTile);
  }

  start() {
    this.inventory = new TileInventory();
    this.currentTile = this.inventory.nextTile();
    this.currentTile.setPosition(3, 3);
    this.currentTile.show();
    this.nextTurn();
  }

  nextTurn() {
    this.currentTile = this.inventory.nextTile();
    this.currentTile.setPosition(1, 1);
    this.currentTile.activate();
  }

  placeTile(e) {
    var game = e.data.game;
    console.log('game', game.currentTile)
    game.currentTile.deactivate();
    game.nextTurn();
  }
}

module.exports = Game;
