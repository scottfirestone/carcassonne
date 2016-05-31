const MeepleInventory = require('./meepleInventory');
const PlayerInfo = require('./playerInfo');

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.score = 0;
    this.meepleInventory = new MeepleInventory(this.color);
    this.playerInfo = new PlayerInfo(this);
  }

  buildSetUp(){
    this.meepleInventory.build();
    this.playerInfo.buildDom();
  }

  addToScore() {
    return this.score++;
  }

  subtractFromScore() {
    if (this.score > 0) {
      return this.score--;
    }
  }
}

module.exports = Player;
