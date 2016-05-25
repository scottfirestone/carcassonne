var config = require('./config').info;

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
      for (let tile of game.tileInventory.tilesPlayed) {
        let x = tile.x + config('tileWidth');
        tile.setPosition(x, tile.y);
      }
    }
  }

  checkTop(game) {
    if (game.currentTile.y <= (config('tileHeight') * 2)) {
      this.increaseHeight();
      for (let tile of game.tileInventory.tilesPlayed) {
        let y = tile.y + config('tileHeight');
        tile.setPosition(tile.x, y);
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
