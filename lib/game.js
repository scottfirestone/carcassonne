var dom = require('./domInventory').dom;
var TileInventory = require('./tileInventory');
var Grid = require('./grid');
var Player = require('./player');
var Animations = require('./animations');

class Game {
  constructor() {
    this.tileInventory = null;
    this.currentTile = null;
    this.players = [];
    this.currentPlayer = null;
    this.currentMeeple = null;
    this.grid = null;
    this.sectionId = null;
    this.animations = new Animations();
  }

  prepare() {
    this.animations.sectionSwap('section-pre-game', this.prepareAnimationCompleted.bind(this));
  }

  prepareAnimationCompleted(info) {
    dom('buttonCreateGame').on('click', this.buttonCreateGameClicked.bind(this));
  }

  buttonCreateGameClicked(e) {
    dom('buttonCreateGame').off('click');
    this.animations.sectionSwap('section-player-input', this.gameCreateAnimationCompleted.bind(this));
  }

  gameCreateAnimationCompleted(info) {
    dom('buttonBeginGame').on('click', this.buttonBeginGameClicked.bind(this));
  }

  buttonBeginGameClicked(e) {
    this.validateNames();
    dom('buttonBeginGame').off('click');
    this.animations.sectionPlayerInputHide(this.gameBeginAnimationCompleted.bind(this));
  }

  validateNames() {
    var
      fields = [
        dom('inputPlayerName1'),
        dom('inputPlayerName2')
      ];

    for (let field of fields) {
      if (/^\s*$/.test(field.val())) {
        field.val(`Player ${field[0].id.slice(-1)}`);
      } else if (field.val().length > 12) {
        field.val(field.val().substring(0, 12) + "...");
      }
    }
  }

  gameBeginAnimationCompleted(info) {
    this.start();
  }

  start() {
    this.grid = new Grid();
    this.buildPlayers();
    this.buildTileInventory();
    this.setupStartingTile();
    let startingTileDom = this.currentTile.dom;
    this.nextTurn();
    this.attachEventListeners();
    this.animations.sectionGameShow(startingTileDom);
  }

  buildPlayers() {
    let playerName1 = dom('inputPlayerName1').val();
    let playerName2 = dom('inputPlayerName2').val();
    this.players = [
      new Player(playerName1, "red"),
      new Player(playerName2, "blue")
    ];
    this.players[0].buildSetUp();
    this.players[1].buildSetUp();
    this.currentPlayer = this.players[1];
  }

  buildTileInventory() {
    this.tileInventory = new TileInventory();
    this.tileInventory.build();
  }

  setupStartingTile() {
    this.currentTile = this.tileInventory.nextTile();
    dom('gameBoard').append(this.currentTile.dom);
    this.currentTile.setPosition(500, 500);
    this.currentTile.dom.draggable({ snap: true });
    this.currentTile.dom.draggable('disable');
  }

  attachEventListeners() {
    dom('buttonPlaceTile').on('click', this.placeTile.bind(this));
    dom('buttonPlaceMeeple').on('click', this.placeMeeple.bind(this));
    dom('buttonSkipMeeple').on('click', this.skipMeeple.bind(this));
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
    this.grid.checkTilePositionAgainstBoard(this);

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
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1];
    } else {
      this.currentPlayer = this.players[0];
    }
  }

  placeTile(e) {
    let position = this.currentTile.position;
    let isValid = this.tileInventory.isPositionOpen(position.x, position.y);
    if (isValid) {
      this.currentTile.setPosition(position.x, position.y);
      this.currentTile.deactivate();
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
      $('#board').append(this.currentMeeple.dom);
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
    }
  }

  endGame(e) {
    alert("The game is over. Play again!");
  }
}

module.exports = Game;
