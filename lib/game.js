var Tile = require('./tile');
var TileInventory = require('./tileInventory');
var Grid = require('./grid');
var Player = require('./player');
var Meeple = require('./meeple');

class Game {
  constructor() {
    this.tileInventory = null;
    this.currentTile = null;
    this.player1 = null;
    this.player2 = null;
    this.currentPlayer = null;
    this.currentMeeple = null;
    this.setup();
  }

  setup() {
    $('#btn-place-tile').on('click', this.placeTile.bind(this));
    $('#btn-place-meeple').on('click', this.placeMeeple.bind(this));
    $('#btn-skip-meeple').on('click', this.nextTurn.bind(this));
  }

  start() {
    this.tileInventory = new TileInventory();
    this.player1 = new Player("Kimi", "red");
    this.player2 = new Player("Scott", "blue");
    this.currentPlayer = this.player1;
    this.currentTile = this.tileInventory.nextTile();
    this.currentTile.setPosition(5, 3);
    this.currentTile.show();
    this.nextTurn();
  }

  updateTileCount() {
    let tilesLeft = this.tileInventory.tilesUnplayed.length;
    $('#tiles-remaining').html(`${tilesLeft} tiles remaining`);
    if (tilesLeft === 0) {
      // change eventListener on placeTile button to end game
      $('#btn-place-tile').off('click', this.placeTile);
      $('#btn-place-tile').on('click', this.endGame);
    }
  }

  nextTurn(e) {
    this.currentTile = this.tileInventory.nextTile();
    this.currentTile.setPosition(1, 1);
    this.currentTile.activate();
    this.updateTileCount();
  }

  placeTile(e) {
    let position = this.currentTile.getPosition();
    let isValid = this.tileInventory.isPositionOpen(position.x, position.y);
    if (isValid) {
      this.currentTile.setPosition(position.x, position.y)
      this.currentTile.deactivate();
      this.showMeeple();
    } else {
      alert("Pick a location that hasn't been taken!");
    }
  }

  showMeeple() {
    let meeplesUnplayed = this.currentPlayer.meepleInventory.meeplesUnplayed;

    if (meeplesUnplayed.length > 0) {
      this.currentMeeple = meeplesUnplayed[0];
      this.currentMeeple.show();
      this.currentMeeple.setPosition(1, 1);
      this.currentMeeple.activate();
    }
  }

  placeMeeple(e) {
    let meeplesUnplayed = this.currentPlayer.meepleInventory.meeplesUnplayed;
    this.currentMeeple.deactivate();
    this.nextTurn();
  }

  endGame(e) {
    alert("The game is over. Play again!")
  }
}

module.exports = Game;
