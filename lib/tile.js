var Config = require('./config');

class Tile {
  constructor(image, type, top, right, bottom, left, pennant, x, y) {
    this.config = {
      tileWidth: 100,
      tileHeight: 100
    };

    this.image = image;
    this.type = type;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.pennant = pennant || false;
    this.x = x || 0;
    this.y = y || 0;
    this.dom = null;
    this.domRotate = null;
    this.mousemoved = false;

    this.buildDom();
  }

  buildDom() {
    this.dom = $('<div>', { class: 'tile' });
    this.dom.css('background-image', `url(${this.image})`);
    this.dom.css('left', this.x);
    this.dom.css('top', this.y);
    this.dom.css('display', 'none');
    $('body').append(this.dom);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.dom.css('left', this.x);
    this.dom.css('top', this.y);
  }

  show() {
    this.dom.css('display', 'block');
  }

  activate() {
    this.domRotate = $('<div>', { class: 'rotate-tile' });
    this.dom.addClass('current-tile');
    this.dom.append(this.domRotate);
    this.dom.css('display', 'block');

    this.dom.draggable({
      snap: true
    });
    this.dom.css('position', 'absolute');

    // Add listeners
    this.dom.on('mousedown', this.tileMouseDown.bind(this));
    this.dom.on('mouseup', this.tileMouseUp.bind(this));
    this.dom.on('mousemove', this.tileMouseMove.bind(this));
    this.dom.on('mouseover', this.tileMouseOver.bind(this));
    this.dom.on('mouseout', this.tileMouseOut.bind(this));
  }

  deactivate() {
    // Cleanup listeners
    this.dom.off('mousedown', this.tileMouseDown);
    this.dom.off('mouseup', this.tileMouseUp);
    this.dom.off('mousemove', this.tileMouseMove);
    this.dom.off('mouseover', this.tileMouseOver);
    this.dom.off('mouseout', this.tileMouseOut);
    this.dom.draggable('disable');
    this.domRotate.remove();
  }

  removeBorder() {
    this.dom.removeClass('current-tile');
  }

  get position() {
    let position = this.dom.position();
    let x = this.dom.position().left;
    let y = this.dom.position().top;
    return {x, y}
  }

  tileMouseDown(e) {
    this.mousemoved = false;

    // Only add to the board if the tile is on the body still
    if (this.dom.parent().is($('body'))) {
      this.setToBoard();
    }
  }

  tileMouseUp(e) {
    // Don't rotate if tile has been dragged
    if (!this.mousemoved) {
      if (this.dom.hasClass('rotate90')) {
        this.dom.removeClass('rotate90');
        this.dom.addClass('rotate180');
      } else if (this.dom.hasClass('rotate180')) {
        this.dom.removeClass('rotate180');
        this.dom.addClass('rotate270')
      } else if (this.dom.hasClass('rotate270')) {
        this.dom.removeClass('rotate270');
      } else {
        this.dom.addClass('rotate90');
      }
    }
  }

  tileMouseMove(e) {
    this.mousemoved = true;
  }

  tileMouseOver(e) {
    this.domRotate.show();
  }

  tileMouseOut(e) {
    this.domRotate.hide();
  }

  setToBoard() {
    var
      view = $('.view'),
      scrollLeft = view.scrollLeft(),
      scrollTop = view.scrollTop();

    // Remove the tile from the body and place on the board
    this.dom.detach();
    $('.board').append(this.dom);

    // Position the tile on the board based on scroll position
    this.dom.css('left', scrollLeft + 100);
    this.dom.css('top', scrollTop + 100);
  }
}

module.exports = Tile;
