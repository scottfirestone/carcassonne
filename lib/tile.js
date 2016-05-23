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

    // Add listeners
    this.dom.on('click', this.tileClick.bind(this));
    this.dom.on('mouseover', this.tileMouseOver.bind(this));
    this.dom.on('mouseout', this.tileMouseOut.bind(this));
    this.dom.on('drag', this.setToBoard.bind(this));
  }

  deactivate() {
    // Cleanup listeners
    this.dom.off('click', this.tileClick);
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

  tileClick(e) {
    let tileDom = this.dom;
    if (tileDom.hasClass('rotate90')) {
      tileDom.removeClass('rotate90');
      tileDom.addClass('rotate180');
    } else if (tileDom.hasClass('rotate180')) {
      tileDom.removeClass('rotate180');
      tileDom.addClass('rotate270')
    } else if (tileDom.hasClass('rotate270')) {
      tileDom.removeClass('rotate270');
    } else {
      tileDom.addClass('rotate90');
    }
  }

  tileMouseOver(e) {
    this.domRotate.show();
  }

  tileMouseOut(e) {
    this.domRotate.hide();
  }

  setToBoard(e) {
    $('.board').append(this.dom);
  }
}

module.exports = Tile;
