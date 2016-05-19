var MeepleInventory = require('./meepleInventory');

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.score = 0;
    this.meepleInventory = new MeepleInventory();
  }
}

module.exports = Player;
