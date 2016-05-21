var MeepleInventory = require('./meepleInventory');
var PlayerInfo = require('./playerInfo');

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.score = 0;
    this.meepleInventory = new MeepleInventory(this.color);
    this.playerInfo = new PlayerInfo(this);
  }
}

module.exports = Player;
