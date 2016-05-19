var _ = require('lodash');
var Tile = require('./tile');

class TileInventory {
  constructor() {
    this.tileInventory = [];
  }

  build() {
    _.times(2, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/A.png', "a", "field", "field", "road", "field", false));
    });

    _.times(4, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/B.png', "b", "field", "field", "field", "field", false));
    });

    _.times(1, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/C.png', "c", "city", "city", "city", "city", true));
    });

    _.times(3, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/D.png', "d", "city", "road", "field", "road", false));
    });

    _.times(5, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/E.png', "e", "city", "field", "field", "field", false));
    });

    _.times(2, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/F.png', "f", "field", "city", "field", "city", true));
    });

    _.times(1, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/G.png', "g", "field", "city", "field", "city", false));
    });

    _.times(3, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/H.png', "h", "city", "field", "city", "field", false));
    });

    _.times(2, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/I.png', "i", "city", "field", "field", "city", false));
    });

    _.times(3, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/J.png', "j", "city", "road", "road", "field", false));
    });

    _.times(3, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/K.png', "k", "city", "field", "road", "road", false));
    });

    _.times(3, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/L.png', "l", "city", "road", "road", "road", false));
    });

    _.times(2, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/M.png', "m", "city", "field", "field", "city", true));
    });

    _.times(3, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/N.png', "n", "city", "field", "field", "city", false));
    });

    _.times(2, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/O.png', "o", "city", "road", "road", "city", true));
    });

    _.times(3, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/P.png', "p", "city", "road", "road", "city", false));
    });

    _.times(1, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/Q.png', "q", "city", "city", "field", "city", true));
    });

    _.times(3, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/R.png', "r", "city", "city", "field", "city", false));
    });

    _.times(2, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/S.png', "s", "city", "city", "road", "city", true));
    });

    _.times(1, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/T.png', "t", "city", "city", "road", "city", false));
    });

    _.times(8, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/U.png', "u", "road", "field", "road", "field", false));
    });

    _.times(9, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/V.png', "v", "field", "field", "road", "road", false));
    });

    _.times(4, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/W.png', "w", "field", "road", "road", "road", false));
    });

    _.times(1, function(){
      this.tileInventory.push(new Tile('lib/images/tiles/X.png', "x", "road", "road", "road", "road", false));
    });

    return this.tileInventory;
  }
}

module.exports = TileInventory;
