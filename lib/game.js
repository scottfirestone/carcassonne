let dom = require('./domInventory').dom;
let TileInventory = require('./tileInventory');
let Grid = require('./grid');
let Player = require('./player');
let Animations = require('./animations');
let Rules = require('./rules');

class Game {
  constructor() {
    this.tileInventory = null;
    this.currentTile = null;
    this.playerNumber = null;
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
    $('#player-number').on('change', function (e) {
      let optionSelected = $(e.target).find("option:selected");
      this.playerNumber = optionSelected.text();
      this.revealPlayerNameInputs(this.playerNumber);
      dom('buttonBeginGame').on('click', this.buttonBeginGameClicked.bind(this));
    }.bind(this));
  }

  revealPlayerNameInputs(num) {
    for (let i = 1; i <= num; i++) {
      $(`#input-player-name-${i}`).css('display', 'block');
    }
    for (let i = 5; i > num; i--) {
      $(`#input-player-name-${i}`).hide();
    }
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
        dom('inputPlayerName2'),
        dom('inputPlayerName3'),
        dom('inputPlayerName4'),
        dom('inputPlayerName5')
      ];

    for (let field of fields) {
      if (field.val().includes('<') || field.val().includes('>')) {
        field.val(`Player ${field[0].id.slice(-1)}`);
      } else if (/^\s*$/.test(field.val())) {
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
    let rules = new Rules();
    rules.prepare();
    this.buildPlayers();
    this.buildTileInventory();
    this.setupStartingTile();
    let startingTileDom = this.currentTile.dom;
    this.nextTurn();
    this.attachEventListeners();
    this.animations.sectionGameShow(startingTileDom);
  }

  buildPlayers() {
    let playerNames = [];
    for (let i = 1; i <= this.playerNumber; i++) {
      playerNames[i] = dom(`inputPlayerName${i}`).val();
    }

    let colors = ["red", "blue", "green", "yellow", "black"];

    playerNames.forEach(function (playerName, i) {
      let player = new Player(playerName, colors[i-1]);
      this.players.push(player);
      player.buildSetUp();
    }.bind(this));

    this.currentPlayer = this.players.slice(-1)[0];
  }

  buildTileInventory() {
    this.tileInventory = new TileInventory();
    this.tileInventory.build();
  }

  setupStartingTile() {
    this.currentTile = this.tileInventory.nextTile();
    dom('gameBoard').append(this.currentTile.dom);
    this.currentTile.setPosition(500, 500);
    this.tileInventory.addAdjacentCoordinates(this.currentTile.x, this.currentTile.y);
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
    this.grid = new Grid();
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
    this.currentPlayer = this.players.shift();
    this.players.push(this.currentPlayer);
  }

  placeTile(e) {
    let position = this.currentTile.position;
    let isOpen = this.tileInventory.isPositionOpen(position.x, position.y);
    let isAdjacent = this.tileInventory.isPositionAdjacent(position.x, position.y);
    if (isAdjacent && isOpen) {
      this.currentTile.setPosition(position.x, position.y);
      this.tileInventory.addAdjacentCoordinates(position.x, position.y);
      this.currentTile.deactivate();
      if (this.currentPlayer.meepleInventory.meeplesUnplayed.length > 0) {
        this.showPlaceMeepleButtons();
        this.showMeeple();
      } else {
        this.nextTurn();
      }
    } else {
      alert("This is an invalid position");
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

    console.log('meeples', meeplePosition, currentTilePosition)
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
