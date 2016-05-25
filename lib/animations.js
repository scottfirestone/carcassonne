var dom = require('./domInventory').dom;

class Animations {
  constructor() {
    this.animations = {};
    this.animations.sectionShow = new TimelineMax({ paused: true });
  }

  sectionShow(id, callback) {
    var
      domSectionOld,
      domSection = $(`#${id}`);

    this.animations.sectionShow
      .clear()
      .eventCallback('onComplete', callback, [], this);

    if (this.sectionId) {
      domSectionOld = $(`#${this.sectionId}`);
      this.animations.sectionShow
        .to(domSectionOld, 0.3, { autoAlpha: 0 })
        .set(domSectionOld, { display: 'none' });
    }

    this.sectionId = id;

    this.animations.sectionShow
      .set(domSection, { display: 'block' })
      .to(domSection, 0.3, { autoAlpha: 1 })
      .play();
  }
}

module.exports = Animations;
