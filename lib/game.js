var Tile = require('./tile');
var TileInventory = require('./tileInventory');
var Grid = require('./grid');
var Meeple = require('./meeple')

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
    // this.meeples = new MeepleInventory(player1);
    this.currentTile = this.inventory.nextTile();
    this.currentTile.setPosition(5, 3);
    this.currentTile.show();
    this.nextTurn();
  }

  updateTileCount() {
    let tilesLeft = this.inventory.tilesUnplayed.length;
    $('#tiles-remaining').html(`${tilesLeft} tiles remaining`);
    if (tilesLeft === 0) {
      // change eventListener on placeTile button to end game
      $('#btn-place-tile').off('click', this.placeTile);
      $('#btn-place-tile').on('click', this.endGame);
    }
  }

  nextTurn() {
    this.currentTile = this.inventory.nextTile();
    this.currentTile.setPosition(1, 1);
    this.currentTile.activate();
    this.updateTileCount();
  }

  placeTile(e) {
    let game = e.data.game;
    let position = e.data.game.currentTile.getPosition();
    let isValid = game.inventory.isPositionOpen(position.x, position.y);
    if (isValid) {
      game.currentTile.setPosition(position.x, position.y)
      game.currentTile.deactivate();
      game.nextTurn();
    } else {
      alert("Pick a location that hasn't been taken!");
    }
  }

  placeMeeple() {

  }

  endGame(e) {
    alert("The game is over. Play again!")
  }
}

module.exports = Game;
