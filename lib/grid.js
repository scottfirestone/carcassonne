var config = require('./config').info;

class Grid {
  constructor() {
    this.view = $('#view');
    this.board = $('#board');
    this.setup();
  }

  setup() {
  }

  centerPosition() {
    var
      viewWidth = this.view.outerWidth(),
      viewHeight = this.view.outerHeight(),
      boardWidth = this.board.innerWidth(),
      boardHeight = this.board.innerHeight();
    console.log(this.board[0], this.view[0], viewWidth, viewHeight, boardWidth, boardHeight);
  }
}

module.exports = Grid;
