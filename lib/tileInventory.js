var Tile = require('./tile');
var tileInventory = [];

var tileA = ('images/tiles/1', "a", "field", "field", "road", "field", false)
var tileB = ('images/tiles/2', "b", "field", "field", "field", "field", false)
var tileC = ('images/tiles/3', "c", "city", "city", "city", "city", true)
var tileD = ('images/tiles/4', "d", "road", "city", "road", "field", false)
var tileE = ('images/tiles/5', "e", "city", "field", "field", "field", false)
var tileF = ('images/tiles/6', "f", "field", "city", "field", "city", true)
var tileG = ('images/tiles/7', "g", "city", "field", "city", "field", false)
var tileH = ('images/tiles/8', "h", "field", "city", "field", "city", false)
var tileI = ('images/tiles/9', "i", "field", "city", "city", "field", false)
var tileJ = ('images/tiles/10', "j", "city", "road", "road", "field", false)
var tileK = ('images/tiles/11', "k", "road", "city", "field", "road", false)
var tileL = ('images/tiles/12', "l", "road", "city", "road", "road", false)
var tileM = ('images/tiles/13', "m", "city", "field", "field", "city", true)
var tileN = ('images/tiles/14', "n", "city", "field", "field", "city", false);
var tileO = ('images/tiles/15', "o", "city", "road", "road", "city", true);
var tileP = ('images/tiles/16', "p", "city", "road", "road", "city", false);
var tileQ = ('images/tiles/17', "q", "city", "city", "field", "city", true);
var tileR = ('images/tiles/18', "r", "city", "city", "field", "city", false);
var tileS = ('images/tiles/19', "s", "city", "city", "road", "city", true);
var tileT = ('images/tiles/20', "t", "city", "city", "road", "city", false);
var tileU = ('images/tiles/21', "u", "road", "field", "road", "field", false);
var tileV = ('images/tiles/22', "v", "field", "field", "road", "road", false);
var tileW = ('images/tiles/23', "w", "field", "road", "road", "road", false);
var tileX = ('images/tiles/24', "x", "road", "road", "road", "road", false);

function buildTileInventory() {
  for (var i == 0; i < 24; i++) {
    switch(i) {
      case 0:
        _.times(2, function(){
          tileInventory.push(new Tile(tileA));
        }
        break;
      case 1:
        _.times(4, function(){
          tileInventory.push(new Tile(tileB));
        }
        break;
      case 2:
        _.times(1, function(){
          tileInventory.push(new Tile(tileC));
        }
        break;
      case 3:
        _.times(4, function(){
          tileInventory.push(new Tile(tileD));
        }
        break;
      case 4:
        _.times(5, function(){
          tileInventory.push(new Tile(tileE));
        }
        break;
      case 5:
        _.times(2, function(){
          tileInventory.push(new Tile(tileF));
        }
        break;
      case 6:
        _.times(1, function(){
          tileInventory.push(new Tile(tileG));
        }
        break;
      case 7:
        _.times(3, function(){
          tileInventory.push(new Tile(tileH));
        }
        break;
      case 8:
        _.times(2, function(){
          tileInventory.push(new Tile(tileI));
        }
        break;
      case 9:
        _.times(3, function(){
          tileInventory.push(new Tile(tileJ));
        }
        break;
      case 10:
        _.times(3, function(){
          tileInventory.push(new Tile(tileK));
        }
        break;
      case 11:
        _.times(3, function(){
          tileInventory.push(new Tile(tileL));
        }
        break;
      case 12:
        _.times(2, function(){
          tileInventory.push(new Tile(tileM));
        }
        break;
      case 13:
        _.times(3, function(){
          tileInventory.push(new Tile(tileN));
        }
        break;
      case 14:
        _.times(2, function(){
          tileInventory.push(new Tile(tileO));
        }
        break;
      case 15:
        _.times(3, function(){
          tileInventory.push(new Tile(tileP));
        }
        break;
      case 16:
        _.times(1, function(){
          tileInventory.push(new Tile(tileQ));
        }
        break;
      case 17:
        _.times(3, function(){
          tileInventory.push(new Tile(tileR));
        }
        break;
      case 18:
        _.times(2, function(){
          tileInventory.push(new Tile(tileS));
        }
        break;
      case 19:
        _.times(1, function(){
          tileInventory.push(new Tile(tileT));
        }
        break;
      case 20:
        _.times(8, function(){
          tileInventory.push(new Tile(tileU));
        }
        break;
      case 21:
        _.times(9, function(){
          tileInventory.push(new Tile(tileV));
        }
        break;
      case 22:
        _.times(4, function(){
          tileInventory.push(new Tile(tileW));
        }
        break;
      case 23:
        _.times(1, function(){
          tileInventory.push(new Tile(tileX));
        }
        break;
    }
  }
}
 module.exports = tileInventory;
