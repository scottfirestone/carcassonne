var config = require('./config').info;

class Grid {
  constructor() {
    this.width = $('#view').outerWidth();
    this.height = $('#board').outerHeight();
  }

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
