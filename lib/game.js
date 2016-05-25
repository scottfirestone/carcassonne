var Tile = require('./tile');
var TileInventory = require('./tileInventory');
var Grid = require('./grid');
var Player = require('./player');
var Meeple = require('./meeple');

class Game {
  constructor() {
    this.tileInventory = null;
    this.currentTile = null;
    this.players = [];
    this.currentPlayer = null;
    this.currentMeeple = null;
    this.grid = null;
    this.sectionId = null;
    this.animations = null;
    this.domItems = null;
    this.setup();
  }

  setup() {
    // Define all existing DOM jquery objects
    this.domItems = {
      buttonCreateGame: $('#btn-create-game'),
      buttonBeginGame: $('#btn-begin-game'),
      buttonPlaceTile: $('#btn-place-tile'),
      buttonPlaceMeeple: $('#btn-place-meeple'),
      buttonSkipMeeple: $('#btn-skip-meeple'),
      inputPlayerName1: $('#input-player-name-1'),
      inputPlayerName2: $('#input-player-name-2')
    };

    // Define animations
    this.animations = {};
    this.animations.sectionShow = new TimelineMax({ paused: true });
  }

  prepare() {
    this.sectionShow('section-pre-game', this.prepareAnimationCompleted);
  }

  prepareAnimationCompleted(info) {
    this.domItems.buttonCreateGame.on('click', this.buttonCreateGameClicked.bind(this));
  }

  buttonCreateGameClicked(e) {
    this.domItems.buttonCreateGame.off('click');
    this.sectionShow('section-player-input', this.gameCreateAnimationCompleted);
  }

  gameCreateAnimationCompleted(info) {
    this.domItems.buttonBeginGame.on('click', this.buttonBeginGameClicked.bind(this));
  }

  buttonBeginGameClicked(e) {
    this.validateNames();
    this.domItems.buttonBeginGame.off('click');
    this.sectionShow('section-game', this.gameBeginAnimationCompleted);
  }

  validateNames() {
    var
      fields = [
        this.domItems.inputPlayerName1,
        this.domItems.inputPlayerName2
      ];

    for (let field of fields) {
      if (/^\s*$/.test(field.val())) {
        field.val(`Player ${field[0].id.slice(-1)}`);
      }
    }
  }

  gameBeginAnimationCompleted(info) {
    $('header').hide();
    this.start();
  }

  start() {
    this.grid = new Grid();
    // this.grid.centerPosition();
    let playerName1 = this.domItems.inputPlayerName1.val();
    let playerName2 = this.domItems.inputPlayerName2.val();
    this.players = [
      new Player(playerName1, "red"),
      new Player(playerName2, "blue")
    ];
    this.players[0].buildSetUp();
    this.players[1].buildSetUp();
    this.currentPlayer = this.players[1];

    this.tileInventory = new TileInventory();
    this.tileInventory.build();

    this.currentTile = this.tileInventory.nextTile();
    $('#board').append(this.currentTile.dom);

    this.currentTile.setPosition(500, 500);
    this.currentTile.dom.draggable({snap:true});
    this.currentTile.show();
    this.nextTurn();

    this.domItems.buttonPlaceTile.show();

    // Attach event listeners
    this.domItems.buttonPlaceTile.on('click', this.placeTile.bind(this));
    this.domItems.buttonPlaceMeeple.on('click', this.placeMeeple.bind(this));
    this.domItems.buttonSkipMeeple.on('click', this.skipMeeple.bind(this));
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

  checkTilePositionAgainstBoard() {
    // find the board size
    // compare the last tile with the board dimensions

    console.log('gridsize', this.grid.width, this.grid.height)
    // console.log('currentTile', this.currentTile.x, this.currentTile.y)
    if ((this.grid.width - this.currentTile.x) <= 200) {
      this.grid.increaseWidth();
    }

    if ((this.grid.height - this.currentTile.y) <= 200) {
      this.grid.increaseHeight();
    }
    // if the tile position is within 200px of the board limits then increase the width or height of the grid
    // if the tile is on the top border then add 100px to the y position of each tile
    // if the tile is on the left border then add 100px to the x position of each tile

    // this.grid.centerPosition();
    // this.grid.increaseWidth();
  }

  nextTurn(e) {
    this.checkTilePositionAgainstBoard();

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

  sectionShow(id, callback) {
    var
      domSectionOld,
      domSection = $(`#${id}`);

    this.animations.sectionShow
      .clear()
      .eventCallback('onComplete', callback, [], this);

    if (this.sectionId) {
      domSectionOld = $(`#${this.sectionId}`);
      this.animations.sectionShow
        .to(domSectionOld, 0.3, { autoAlpha: 0 })
        .set(domSectionOld, { display: 'none' });
    }

    this.sectionId = id;

    this.animations.sectionShow
      .set(domSection, { display: 'block' })
      .to(domSection, 0.3, { autoAlpha: 1 })
      .play();
  }
}

module.exports = Game;
