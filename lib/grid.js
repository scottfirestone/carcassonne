var config = require('./config').info;

class Grid {
  constructor() {
    this.view = $('#view');
    this.board = $('#board');
    this.gridWidth = this.view.outerWidth();
    this.gridHeight = this.view.outerHeight();
    this.setup();
  }

  setup() {
  }

  centerPosition() {
    let
      boardWidth = $('#board').outerWidth(),
      boardHeight = $('#board').outerHeight();
    console.log(this.board[0], this.view[0], boardWidth, boardHeight);
  }

  increaseWidth() {
    let
      viewWidth = this.gridWidth + 100;
      this.gridWidth = $('#board').outerWidth(viewWidth).outerWidth();
  }
}

module.exports = Grid;
