const _ = require('lodash');
const Tile = require('./tile');
const config = require('./config').info;

class TileInventory {
  constructor() {
    this.tileConfig = {
      tileTypes: {
        A: { quantity: 2 },
        B: { quantity: 4 },
        C: { quantity: 1 },
        D: { quantity: 3 },
        E: { quantity: 5 },
        F: { quantity: 2 },
        G: { quantity: 1 },
        H: { quantity: 3 },
        I: { quantity: 2 },
        J: { quantity: 3 },
        K: { quantity: 3 },
        L: { quantity: 3 },
        M: { quantity: 2 },
        N: { quantity: 3 },
        O: { quantity: 2 },
        P: { quantity: 3 },
        Q: { quantity: 1 },
        R: { quantity: 3 },
        S: { quantity: 2 },
        T: { quantity: 1 },
        U: { quantity: 8 },
        V: { quantity: 9 },
        W: { quantity: 4 },
        X: { quantity: 1 }
      },
      tileStart: 'D'
    };

    this.tilesUnplayed = [];
    this.tilesPlayed = [];
    this.adjacentPositions = [];
  }

  build() {
    for (let tileType of Object.keys(this.tileConfig.tileTypes)) {
      let tileInfo = this.tileConfig.tileTypes[tileType];
      for (let i=0; i<tileInfo.quantity; i++) {
        this.addTile(tileType, tileInfo);
      }
    }
    this.tilesUnplayed = _.shuffle(this.tilesUnplayed);
    this.addTile(this.tileConfig.tileStart, this.tileConfig.tileTypes[this.tileConfig.tileStart]);
  }

  addTile(type, info) {
    let tile = new Tile(type);
    tile.buildDom();
    this.tilesUnplayed.push(tile);
  }

  nextTile() {
    let tile = this.tilesUnplayed.pop();
    this.tilesPlayed.push(tile);
    return tile;
  }

  isPositionOpen(x, y) {
    for (let tile of this.tilesPlayed) {
      if (tile.x === x && tile.y === y) {
        return false;
      }
    }
    return true;
  }

  addAdjacentCoordinates(x, y) {
    let left = [ x - config('tileWidth'), y ];
    let right = [ x + config('tileWidth'), y ];
    let top = [ x, y - config('tileHeight') ];
    let bottom = [ x, y + config('tileHeight') ];
    let adjacentCoordinates = [top, right, bottom, left];

    // push coordinates into adjacentPositions array if the position is open
    for (let position of adjacentCoordinates) {
      if (this.isPositionOpen(position[0], position[1])) {
        this.adjacentPositions.push(position);
      }
    }
  }

  isPositionAdjacent(x, y) {
    for (let position of this.adjacentPositions) {
      if (position[0] === x && position[1] === y) {
        return true;
      }
    }
    return false;
  }
}

module.exports = TileInventory;
