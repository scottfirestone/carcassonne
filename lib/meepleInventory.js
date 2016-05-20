var Meeple = require('./meeple');

class MeepleInventory {
  constructor(color) {
    this.color = color;
    this.meeplesUnplayed = [];
    this.meeplesPlayed = [];
    this.build();
  }

  build() {
    for (let i = 0; i < 7; i++) {
      let meeple = new Meeple(this.color);
      this.meeplesUnplayed.push(meeple);
    }

    // _.times(7, () => {
    //   let meeple = new Meeple(this.color);
    //   this.meeplesUnplayed.push(meeple);
    // });
    //
    // _.times(7, function() {
    //   let meeple = new Meeple(this.color);
    //   this.meeplesUnplayed.push(meeple);
    // }.bind(this));
  }
}
module.exports = MeepleInventory;
