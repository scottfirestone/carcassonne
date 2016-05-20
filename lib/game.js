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
    $('#btn-skip-meeple').on('click', this.skipMeeple.bind(this));
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

    // change eventListener on placeTile button to end game
    if (tilesLeft === 0) {
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
      this.showPlaceMeepleButtons();
      this.showMeeple();
    } else {
      alert("Pick a location that hasn't been taken!");
    }
  }

  showPlaceTileButton() {
    $('#btn-place-tile').show();
    $('#btn-place-meeple').hide();
    $('#btn-skip-meeple').hide();
  }

  showPlaceMeepleButtons() {
    $('#btn-place-tile').hide();
    $('#btn-place-meeple').show();
    $('#btn-skip-meeple').show();
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
    let meeplesPlayed = this.currentPlayer.meepleInventory.meeplesPlayed;
    let position = this.currentMeeple.getPosition();

    // meeple can only be placed on current tile

    // this.currentMeeple.setPosition(position.x, position.y);
    this.currentMeeple.deactivate();
    this.showPlaceTileButton();
    meeplesPlayed.push(meeplesUnplayed.shift());
    this.nextTurn();
  }

  skipMeeple(e) {
    this.currentMeeple.hide();
    this.showPlaceTileButton();
    this.nextTurn();
  }

  endGame(e) {
    alert("The game is over. Play again!")
  }
}

module.exports = Game;
