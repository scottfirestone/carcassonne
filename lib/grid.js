let config = require('./config').info;

class Grid {
  constructor() {
    this.width = $('#view').outerWidth();
    this.height = $('#view').outerHeight();
  }

  increaseWidth() {
    let
      viewWidth = this.width + config('tileWidth');
      this.width = $('#view').outerWidth(viewWidth).outerWidth();
  }

  increaseHeight() {
    let
      viewHeight = this.height + config('tileHeight');
      this.height = $('#view').outerHeight(viewHeight).outerHeight();
  }

  checkTilePositionAgainstBoard(game) {
    this.checkLeft(game);
    this.checkRight(game);
    this.checkTop(game);
    this.checkBottom(game);
  }

  checkRight(game) {
    if ((this.width - game.currentTile.x) <= (config('tileWidth') * 2)) {
      this.increaseWidth();
    }
  }

  checkLeft(game) {
    if (game.currentTile.x <= 300) {
      this.increaseWidth();

      // move each played tile to the right
      for (let tile of game.tileInventory.tilesPlayed) {
        let x = tile.x + config('tileWidth');
        tile.setPosition(x, tile.y);
      }

      // move adjacentPositions to the right
      for (let coord of game.tileInventory.adjacentPositions) {
        coord[0] += config('tileWidth');
      }

      // loop through each player
      for (let player of game.players) {
        // loop through each played meeple and move right
        for (let meeple of player.meepleInventory.meeplesPlayed) {
          let x = meeple.x + config('tileWidth');
          meeple.setPosition(x, meeple.y);
        }
      }
    }
  }

  checkTop(game) {
    if (game.currentTile.y <= (config('tileHeight') * 2)) {
      this.increaseHeight();

      // move each played tile down
      for (let tile of game.tileInventory.tilesPlayed) {
        let y = tile.y + config('tileHeight');
        tile.setPosition(tile.x, y);
      }

      // move adjacentPositions down
      for (let coord of game.tileInventory.adjacentPositions) {
        coord[1] += config('tileHeight');
      }

      // loop through each player
      for (let player of game.players) {
        // loop through each played meeple and move down
        for (let meeple of player.meepleInventory.meeplesPlayed) {
          let y = meeple.y + config('tileHeight');
          meeple.setPosition(meeple.x, y);
        }
      }
    }
  }

  checkBottom(game) {
    if ((this.height - game.currentTile.y) <= (config('tileHeight') * 3)) {
      this.increaseHeight();
    }
  }
}

module.exports = Grid;
