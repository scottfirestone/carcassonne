let config = require('./config').info;

class Grid {
  constructor() {
    this.width = $('#view').outerWidth();
    this.height = $('#board').outerHeight();
  }

  increaseWidth() {
    let
      viewWidth = this.width + config('tileWidth');
      this.width = $('#board').outerWidth(viewWidth).outerWidth();
  }

  increaseHeight() {
    let
      viewHeight = this.height + config('tileHeight');
      this.height = $('#board').outerHeight(viewHeight).outerHeight();
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
    if ((this.height - game.currentTile.y) <= (config('tileHeight') * 2)) {
      this.increaseHeight();
    }
  }
}

module.exports = Grid;
