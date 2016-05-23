var Meeple = require('./meeple');

class MeepleInventory {
  constructor(color) {
    this.color = color;
    this.meeplesUnplayed = [];
    this.meeplesPlayed = [];
  }

  build() {
    for (let i = 1; i <= 7; i++) {
      let meeple = new Meeple(this.color, i);
      meeple.buildDom();
      this.meeplesUnplayed.push(meeple);
    }
  }
}
module.exports = MeepleInventory;
