var config = require('./config').info;

class Grid {
  constructor() {
    this.view = $('#view');
    this.board = $('#board');
    this.width = this.view.outerWidth();
    this.height = this.view.outerHeight();
    this.setup();
  }

  setup() {
  }

  // centerPosition() {
  //   let
  //     boardWidth = $('#board').outerWidth(),
  //     boardHeight = $('#board').outerHeight();
  //   console.log(this.board[0], this.view[0], boardWidth, boardHeight);
  // }

  increaseWidth() {
    let
      viewWidth = this.width + 100;
      this.width = $('#board').outerWidth(viewWidth).outerWidth();
  }

  increaseHeight() {
    let
      viewHeight = this.height + 100;
      this.height = $('#board').outerHeight(viewHeight).outerHeight();
  }
}

module.exports = Grid;
