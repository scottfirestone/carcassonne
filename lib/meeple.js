class Meeple {
  constructor(color, id, x, y) {
    this.color = color;
    this.id = id;
    this.x = x || 0;
    this.y = y || 0;
    this.dom = null;

    this.buildDom();
  }

  buildDom() {
    this.dom = $('<div>', { class: 'meeple' });
    this.dom.css('background-image', `url('lib/images/meeples/meeple-${this.color}.png')`);
    this.dom.attr('id', `${this.id}-meeple`);
    this.dom.css('left', this.x);
    this.dom.css('top', this.y);
    this.dom.css('display', 'none');
    this.dom.css('position', 'absolute');
    this.dom.draggable();
    $('.board').append(this.dom);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.dom.css('left', this.x);
    this.dom.css('top', this.y);
  }

  hide() {
    this.dom.css('display', 'none');
  }

  activate() {
    // this.dom.addClass('current-meeple');
    this.dom.css('display', 'block');
    this.dom.draggable('enable');
  }

  deactivate() {
    this.dom.draggable('disable');
    // this.dom.removeClass('current-meeple');
  }

  get position() {
    let position = this.dom.position();
    let x = this.dom.position().left;
    let y = this.dom.position().top;
    return {x, y}
  }
}

module.exports = Meeple;
