var _ = require('lodash');
var Tile = require('./tile');
var tileInventory = [];

function buildTileInventory() {
  _.times(2, function(){
    tileInventory.push(new Tile('images/tiles/A', "a", "field", "field", "road", "field", false));
  });

  _.times(4, function(){
    tileInventory.push(new Tile('images/tiles/B', "b", "field", "field", "field", "field", false));
  });

  _.times(1, function(){
    tileInventory.push(new Tile('images/tiles/C', "c", "city", "city", "city", "city", true));
  });

  _.times(3, function(){
    tileInventory.push(new Tile('images/tiles/D', "d", "city", "road", "field", "road", false));
  });

  _.times(5, function(){
    tileInventory.push(new Tile('images/tiles/E', "e", "city", "field", "field", "field", false));
  });

  _.times(2, function(){
    tileInventory.push(new Tile('images/tiles/F', "f", "field", "city", "field", "city", true));
  });

  _.times(1, function(){
    tileInventory.push(new Tile('images/tiles/G', "g", "field", "city", "field", "city", false));
  });

  _.times(3, function(){
    tileInventory.push(new Tile('images/tiles/H', "h", "city", "field", "city", "field", false));
  });

  _.times(2, function(){
    tileInventory.push(new Tile('images/tiles/I', "i", "city", "field", "field", "city", false));
  });

  _.times(3, function(){
    tileInventory.push(new Tile('images/tiles/J', "j", "city", "road", "road", "field", false));
  });

  _.times(3, function(){
    tileInventory.push(new Tile('images/tiles/K', "k", "city", "field", "road", "road", false));
  });

  _.times(3, function(){
    tileInventory.push(new Tile('images/tiles/L', "l", "city", "road", "road", "road", false));
  });

  _.times(2, function(){
    tileInventory.push(new Tile('images/tiles/M', "m", "city", "field", "field", "city", true));
  });

  _.times(3, function(){
    tileInventory.push(new Tile('images/tiles/N', "n", "city", "field", "field", "city", false));
  });

  _.times(2, function(){
    tileInventory.push(new Tile('images/tiles/O', "o", "city", "road", "road", "city", true));
  });

  _.times(3, function(){
    tileInventory.push(new Tile('images/tiles/P', "p", "city", "road", "road", "city", false));
  });

  _.times(1, function(){
    tileInventory.push(new Tile('images/tiles/Q', "q", "city", "city", "field", "city", true));
  });

  _.times(3, function(){
    tileInventory.push(new Tile('images/tiles/R', "r", "city", "city", "field", "city", false));
  });

  _.times(2, function(){
    tileInventory.push(new Tile('images/tiles/S', "s", "city", "city", "road", "city", true));
  });

  _.times(1, function(){
    tileInventory.push(new Tile('images/tiles/T', "t", "city", "city", "road", "city", false));
  });

  _.times(8, function(){
    tileInventory.push(new Tile('images/tiles/U', "u", "road", "field", "road", "field", false));
  });

  _.times(9, function(){
    tileInventory.push(new Tile('images/tiles/V', "v", "field", "field", "road", "road", false));
  });

  _.times(4, function(){
    tileInventory.push(new Tile('images/tiles/W', "w", "field", "road", "road", "road", false));
  });

  _.times(1, function(){
    tileInventory.push(new Tile('images/tiles/X', "x", "road", "road", "road", "road", false));
  });
}

buildTileInventory();

module.exports = tileInventory;
