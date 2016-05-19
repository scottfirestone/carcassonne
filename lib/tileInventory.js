var _ = require('lodash');
var Tile = require('./tile');

var tilesUnplayed = [];

class TileInventory {
  constructor() {
    this.config = {
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
      }
    };

    this.tilesUnplayed = [];
    this.tilesPlayed = [];
    this.build();
  }

  build() {
    _.each(this.config.tileTypes, function (tileInfo, tileType) {
      _.times(tileInfo.quantity, function () {
        tilesUnplayed.push(new Tile(
          `lib/images/tiles/${tileType}.png`,
          tileType,
          tileInfo.borders[0],
          tileInfo.borders[1],
          tileInfo.borders[2],
          tileInfo.borders[3],
          tileInfo.pennant
        ));
      });
    }, this);
    this.tilesUnplayed = tilesUnplayed
    console.log('tilesUnplayed', this.tilesUnplayed);
  }
}

module.exports = TileInventory;
