var dom = require('./domInventory').dom;

class Animations {
  constructor() {
    this.animations = {
      sectionSwap: null,
      sectionPlayerInputHide: null,
      sectionGameShow: null
    };
  }

  sectionSwap(id, callback) {
    let
      domSectionOld,
      domSection = $(`#${id}`);

    if (!this.animations.sectionSwap) {
      this.animations.sectionSwap = new TimelineMax({ paused: true });
    }
    this.animations.sectionSwap
      .clear()
      .eventCallback('onComplete', callback, []);

    if (this.sectionId) {
      domSectionOld = $(`#${this.sectionId}`);
      this.animations.sectionSwap
        .to(domSectionOld, 0.3, { autoAlpha: 0 })
        .set(domSectionOld, { display: 'none' });
    }

    this.sectionId = id;

    this.animations.sectionSwap
      .set(domSection, { display: 'block' })
      .to(domSection, 0.3, { autoAlpha: 1 })
      .play();
  }

  sectionPlayerInputHide(callback) {
    if (!this.sectionId) { return; }
    if (!this.animations.sectionPlayerInputHide) {
      this.animations.sectionPlayerInputHide = new TimelineMax({ paused: true });
    }

    this.animations.sectionPlayerInputHide
      .clear()
      .eventCallback('onComplete', callback, [])
      .to(dom('sectionPlayerInput'), 0.3, { autoAlpha: 0 })
      .set(dom('sectionPlayerInput'), { display: 'none' })
      .to(dom('headerLogo'), 0.5, { top: -50, scale: 0.4 })
      .play();
  }

  sectionGameShow(currentTileDom) {
    if (!this.animations.sectionGameShow) {
      this.animations.sectionGameShow = new TimelineMax({ paused: true });
    }

    this.animations.sectionGameShow
      .clear()
      .set(dom('sectionGame'), { display: 'block' })
      .to(dom('sectionGame'), 0.3, { autoAlpha: 1 })
      .to(dom('buttonPlaceTile'), 0.1, { autoAlpha: 1 }, "-=0.3")
      .set(currentTileDom, { display: 'block', autoAlpha: 0 }, "-=0.4")
      .to(currentTileDom, 0.1, { autoAlpha: 1 }, "-=0.4")
      .play();
  }
}

module.exports = Animations;
