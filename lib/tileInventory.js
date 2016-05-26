let _ = require('lodash');
let Tile = require('./tile');
let config = require('./config').info;

class TileInventory {
  constructor() {
    this.tileConfig = {
      borderTypes: [ 'field', 'road', 'city' ],
      tileTypes: {
        A: { quantity: 2, borders: [ 'field', 'field', 'road', 'field' ], pennant: false },
        B: { quantity: 4, borders: [ 'field', 'field', 'field', 'field' ], pennant: false },
        C: { quantity: 1, borders: [ 'city', 'city', 'city', 'city' ], pennant: true },
        D: { quantity: 3, borders: [ 'city', 'road', 'field', 'road' ], pennant: false },
        E: { quantity: 5, borders: [ 'city', 'field', 'field', 'field' ], pennant: false },
        F: { quantity: 2, borders: [ 'field', 'city', 'field', 'city' ], pennant: true },
        G: { quantity: 1, borders: [ 'field', 'city', 'field', 'city' ], pennant: false },
        H: { quantity: 3, borders: [ 'city', 'field', 'city', 'field' ], pennant: false },
        I: { quantity: 2, borders: [ 'city', 'field', 'field', 'city' ], pennant: false },
        J: { quantity: 3, borders: [ 'city', 'road', 'road', 'field' ], pennant: false },
        K: { quantity: 3, borders: [ 'city', 'field', 'road', 'road' ], pennant: false },
        L: { quantity: 3, borders: [ 'city', 'road', 'road', 'road' ], pennant: false },
        M: { quantity: 2, borders: [ 'city', 'field', 'field', 'city' ], pennant: true },
        N: { quantity: 3, borders: [ 'city', 'field', 'field', 'city' ], pennant: false },
        O: { quantity: 2, borders: [ 'city', 'road', 'road', 'city' ], pennant: true },
        P: { quantity: 3, borders: [ 'city', 'road', 'road', 'city' ], pennant: false },
        Q: { quantity: 1, borders: [ 'city', 'city', 'field', 'city' ], pennant: true },
        R: { quantity: 3, borders: [ 'city', 'city', 'field', 'city' ], pennant: false },
        S: { quantity: 2, borders: [ 'city', 'city', 'road', 'city' ], pennant: true },
        T: { quantity: 1, borders: [ 'city', 'city', 'road', 'city' ], pennant: false },
        U: { quantity: 8, borders: [ 'road', 'field', 'road', 'field' ], pennant: false },
        V: { quantity: 9, borders: [ 'field', 'field', 'road', 'road' ], pennant: false },
        W: { quantity: 4, borders: [ 'field', 'road', 'road', 'road' ], pennant: false },
        X: { quantity: 1, borders: [ 'road', 'road', 'road', 'road' ], pennant: false }
      },
      tileStart: 'D'
    };

    this.tilesUnplayed = [];
    this.tilesPlayed = [];
    this.validPositions = [];
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
    let tile = new Tile(
      `lib/images/tiles/${type}.png`,
      type,
      info.borders[0],
      info.borders[1],
      info.borders[2],
      info.borders[3],
      info.pennant
    );
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

    // push coordinates into validPositions array if the position is open
    for (let position of adjacentCoordinates) {
      if (this.isPositionOpen(position[0], position[1])) {
        this.validPositions.push(position);
      }
    }
  }

  isPositionValid(x, y) {
    for (let position of this.validPositions) {
      if (position[0] === x && position[1] === y) {
        return true;
      }
    }
    return false;
  }
}

module.exports = TileInventory;
