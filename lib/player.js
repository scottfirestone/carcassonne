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

  addToScore() {
    this.score += 1;
    this.playerInfo.updateScore();
  }
}

module.exports = Player;
