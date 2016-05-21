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
    this.currentPlayer = this.player2;
    this.currentTile = this.tileInventory.nextTile();
    $('.board').append(this.currentTile.dom);
    this.currentTile.setPosition(500, 300);
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
    this.changeCurrentPlayer();
    this.currentTile = this.tileInventory.nextTile();
    this.currentTile.setPosition(100, 100);
    this.currentTile.activate();
    this.updateTileCount();
  }

  changeCurrentPlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  placeTile(e) {
    let position = this.currentTile.position;
    let isValid = this.tileInventory.isPositionOpen(position.x, position.y);
    if (isValid) {
      this.currentTile.setPosition(position.x, position.y)
      this.currentTile.deactivate();
      $('.board').append(this.currentTile.dom);
      if (this.currentPlayer.meepleInventory.meeplesUnplayed.length > 0) {
        this.showPlaceMeepleButtons();
        this.showMeeple();
      } else {
        this.nextTurn();
      }
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
      this.currentMeeple.setPosition(100, 100);
      this.currentMeeple.activate();
    }
  }

  placeMeeple(e) {
    let meeplesUnplayed = this.currentPlayer.meepleInventory.meeplesUnplayed;
    let meeplesPlayed = this.currentPlayer.meepleInventory.meeplesPlayed;
    let meeplePosition = this.currentMeeple.position;
    let currentTilePosition = this.currentTile.position;
    let inXRange = _.inRange(meeplePosition.x, currentTilePosition.x, currentTilePosition.x + 100);
    let inYRange = _.inRange(meeplePosition.y, currentTilePosition.y, currentTilePosition.y + 100);

    // meeple can only be placed on current tile
    if (inXRange && inYRange) {
      this.currentMeeple.setPosition(meeplePosition.x, meeplePosition.y);
      this.currentMeeple.dom.on('click', this.removeMeeple.bind(this));
      this.currentMeeple.deactivate();
      $('.board').append(this.currentMeeple.dom);
      this.showPlaceTileButton();
      meeplesPlayed.push(meeplesUnplayed.shift());
      this.nextTurn();
    } else {
      alert("Place Meeple on the current tile or push 'skip Meeple'");
    }
  }

  skipMeeple(e) {
    this.currentMeeple.hide();
    this.showPlaceTileButton();
    this.nextTurn();
  }

  removeMeeple(e) {
    let meeplesUnplayed = this.currentPlayer.meepleInventory.meeplesUnplayed;
    let meeplesPlayed = this.currentPlayer.meepleInventory.meeplesPlayed;
    let thisMeepleId = e.currentTarget.id.charAt(0);
    let $targetedMeeple = $.grep(meeplesPlayed, function(e){ return e.id == thisMeepleId; })[0];
    if (confirm('Remove Meeple?')) {
      $targetedMeeple.setPosition(0, 0);
      $targetedMeeple.dom.off('click');
      let index = meeplesPlayed.indexOf($targetedMeeple);
      meeplesUnplayed.push($targetedMeeple);
      meeplesPlayed.splice(index, 1);
      $targetedMeeple.hide();
    };
  }

  endGame(e) {
    alert("The game is over. Play again!")
  }
}

module.exports = Game;
