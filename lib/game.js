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
    this.players = [];
    this.currentPlayer = null;
    this.currentMeeple = null;
    this.setup();
  }

  prepare() {
    $('#new-game').on('click', this.createPlayers.bind(this));
  }

  createPlayers(e) {
    $('#new-game').off('click');
    $('#new-game').hide();
    let $textInput1 = $("<input id='player1-name' type='text' placeholder='Enter Player 1 Name'>");
    let $textInput2 = $("<input id='player2-name' type='text' placeholder='Enter Player 2 Name'>");
    let $startGameButton = $("<button type='button'>Begin Game</button>")
    $('#pre-game').append($textInput1);
    $('#pre-game').append($textInput2);
    $('#pre-game').append($startGameButton);
    $startGameButton.on('click', this.start.bind(this));
  }

  setup() {
    $('#btn-place-tile').on('click', this.placeTile.bind(this));
    $('#btn-place-meeple').on('click', this.placeMeeple.bind(this));
    $('#btn-skip-meeple').on('click', this.skipMeeple.bind(this));
  }

  start() {
    let player1Name = $('#player1-name').val();
    let player2Name = $('#player2-name').val();
    this.player1 = new Player(player1Name, "red");
    this.player2 = new Player(player2Name, "blue");
    this.players = [this.player1, this.player2];
    $('#pre-game').hide();
    $('#btn-place-tile').show();
    this.tileInventory = new TileInventory();
    this.tileInventory.build();
    this.player1.buildSetUp();
    this.player2.buildSetUp();
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
    this.currentPlayer.playerInfo.dom.addClass('dim');
    this.changeCurrentPlayer();
    this.currentPlayer.playerInfo.dom.removeClass('dim');
    this.currentTile.removeBorder();
    this.currentTile = this.tileInventory.nextTile();
    this.currentTile.setPosition(100, 100);
    this.currentTile.activate();
    this.currentTile.dom.addClass(`${this.currentPlayer.color}-border`);
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
      this.currentMeeple.dom.on('click', this.targetMeeple.bind(this));
      this.currentMeeple.deactivate();
      meeplesPlayed.push(meeplesUnplayed.shift());
      this.currentPlayer.playerInfo.updateMeepleCount();
      $('.board').append(this.currentMeeple.dom);
      this.showPlaceTileButton();
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

  targetMeeple(e) {
    let thisMeepleColor = e.target.id.split('-')[2];
    let thisMeepleId = e.target.id.split('-')[0];

    for (let player of this.players) {
      if (player.color === thisMeepleColor) {
        for (let meeple of player.meepleInventory.meeplesPlayed) {
          if (String(meeple.id) === thisMeepleId) {
            this.removeMeeple.call(meeple, player);
          }
        }
      }
    }
  }

  removeMeeple(player) {
    if (confirm('Remove Meeple?')) {
      this.setPosition(0, 0);
      this.dom.off('click');
      let index = player.meepleInventory.meeplesPlayed.indexOf(this);
      player.meepleInventory.meeplesUnplayed.push(this);
      player.meepleInventory.meeplesPlayed.splice(index, 1);
      player.playerInfo.updateMeepleCount();
      this.hide();
    };
  }

  endGame(e) {
    alert("The game is over. Play again!")
  }
}

module.exports = Game;
