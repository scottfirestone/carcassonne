var Meeple = require('./meeple');

class MeepleInventory {
  constructor() {
    var quantity = 7;
    this.meeplesUnplayed = [];
    this.meeplesPlayed = [];
    this.build();
  }

  build() {
    _.times(7, function() {
      new Meeple;
    })
  }
}

module.exports = MeepleInventory;
