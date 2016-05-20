class Meeple {
  constructor(color, x, y) {
    this.color = color;
    this.x = x || 0;
    this.y = y || 0;
  }

  buildDom() {
    this.dom = $('<div>', { class: 'meeple' });
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

  show() {
    this.dom.css('display', 'block');
  }

  activate() {
    this.dom.addClass('current-meeple');
    this.dom.css('display', 'block');
    this.dom.draggable();
  }

  deactivate() {
    this.dom.draggable('disable');
    this.dom.removeClass('current-meeple');
  }

  getPosition() {
    let position = this.dom.position();
    let x = this.dom.position().left;
    let y = this.dom.position().top;
    return {x, y}
  }
}

module.exports = Meeple;
