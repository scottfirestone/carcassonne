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
    $('.board').append(this.dom);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.dom.css('left', this.x * this.config.tileWidth);
    this.dom.css('top', this.y * this.config.tileHeight);
  }

  activate() {
    this.domRotate = $('<div>', { class: 'rotate-tile' });
    this.dom.addClass('current-tile');
    this.dom.append(this.domRotate);
    this.dom.css('display', 'block');

    // Add listeners
    this.dom.draggable({
      grid: [ this.config.tileWidth, this.config.tileHeight ]
    });

    this.dom.on('click', { tile: this }, this.tileClick);
    this.dom.on('mouseover', { tile: this }, this.tileMouseOver);
    this.dom.on('mouseout', { tile: this }, this.tileMouseOut);
  }

  deactivate() {
    // Cleanup listeners
    this.dom.off('click', this.tileClick);
    this.dom.off('mouseover', this.tileMouseOver);
    this.dom.off('mouseout', this.tileMouseOut);

    this.dom.removeClass('current-tile');
    this.domRotate.remove();
  }

  tileClick(e) {
    let tileDom = e.data.tile.dom;
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

  tileMouseOver(e, data) {
    let tile = e.data.tile;
    tile.domRotate.show();
  }

  tileMouseOut(e) {
    let tile = e.data.tile;
    tile.domRotate.hide();
  }
}

module.exports = Tile;
