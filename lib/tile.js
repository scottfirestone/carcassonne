function Tile(image, type, top, right, bottom, left, pennant) {
  this.image = image;
  this.type = type;
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left;
  this.pennant = pennant;
  // this.x = x;
  // this.y = y;
}
// have 4 coordinates for each corner of the tile
var tileA = ('images/tiles/a', "a", "field", "field", "road", "field", false)
var tileB = ('images/tiles/b', "b", "field", "field", "field", "field", false)
var tileC = ('images/tiles/c', "c", "city", "city", "city", "city", true)
var tileD = ('images/tiles/d', "d", "road", "city", "road", "field", false)
var tileE = ('images/tiles/e', "e", "city", "field", "field", "field", false)
var tileF = ('images/tiles/f', "f", "field", "city", "field", "city", true)
var tileG = ('images/tiles/g', "g", "city", "field", "city", "field", false)
var tileH = ('images/tiles/h', "h", "field", "city", "field", "city", false)
var tileI = ('images/tiles/i', "i", "field", "city", "city", "field", false)
var tileJ = ('images/tiles/j', "j", "city", "road", "road", "field", false)
var tileK = ('images/tiles/k', "k", "road", "city", "field", "road", false)
var tileL = ('images/tiles/l', "l", "road", "city", "road", "road", false)
var tileM = ('images/tiles/m', "m", "city", "field", "field", "city", true)
var tileN = ('images/tiles/n', "n", "city", "field", "field", "city", false);
var tileO = ('images/tiles/o', "o", "city", "road", "road", "city", true);
var tileP = ('images/tiles/p', "p", "city", "road", "road", "city", false);
var tileQ = ('images/tiles/q', "q", "city", "city", "field", "city", true);
var tileR = ('images/tiles/r', "r", "city", "city", "field", "city", false);
var tileS = ('images/tiles/s', "s", "city", "city", "road", "city", true);
var tileT = ('images/tiles/t', "t", "city", "city", "road", "city", false);
var tileU = ('images/tiles/u', "u", "road", "field", "road", "field", false);
var tileV = ('images/tiles/v', "v", "field", "field", "road", "road", false);
var tileW = ('images/tiles/w', "w", "field", "road", "road", "road", false);
var tileX = ('images/tiles/x', "x", "road", "road", "road", "road", false);


module.exports = Tile;
// create array loop for all letters
// for loop for all letters, create new tile inside
// rename images for 'i' value, start with 0
// use if/else or switch, based on type, create of a certain quantity, with top/bottom/right/left
var tileStore = [];
for (var i == 0; i < 24; i++) {
  switch(i) {
    case 0:
      _.times(2, function(){
        tileStore.push(new Tile(tileA));
      }
      break;
    case 1:
      _.times(4, function(){
        tileStore.push(new Tile(tileB));
      }
      break;
    case 2:
      _.times(1, function(){
        tileStore.push(new Tile(tileC));
      }
      break;
    case 3:
      _.times(4, function(){
        tileStore.push(new Tile(tileD));
      }
      break;
    case 4:
      _.times(5, function(){
        tileStore.push(new Tile(tileE));
      }
      break;
    case 5:
      _.times(2, function(){
        tileStore.push(new Tile(tileF));
      }
      break;
    case 6:
      _.times(1, function(){
        tileStore.push(new Tile(tileG));
      }
      break;
    case 7:
      _.times(3, function(){
        tileStore.push(new Tile(tileH));
      }
      break;
    case 8:
      _.times(2, function(){
        tileStore.push(new Tile(tileI));
      }
      break;
    case 9:
      _.times(3, function(){
        tileStore.push(new Tile(tileJ));
      }
      break;
    case 10:
      _.times(3, function(){
        tileStore.push(new Tile(tileK));
      }
      break;
    case 11:
      _.times(3, function(){
        tileStore.push(new Tile(tileL));
      }
      break;
    case 12:
      _.times(2, function(){
        tileStore.push(new Tile(tileM));
      }
      break;
    case 13:
      _.times(3, function(){
        tileStore.push(new Tile(tileN));
      }
      break;
    case 14:
      _.times(2, function(){
        tileStore.push(new Tile(tileO));
      }
      break;
    case 15:
      _.times(3, function(){
        tileStore.push(new Tile(tileP));
      }
      break;
    case 16:
      _.times(1, function(){
        tileStore.push(new Tile(tileQ));
      }
      break;
    case 17:
      _.times(3, function(){
        tileStore.push(new Tile(tileR));
      }
      break;
    case 18:
      _.times(2, function(){
        tileStore.push(new Tile(tileS));
      }
      break;
    case 19:
      _.times(1, function(){
        tileStore.push(new Tile(tileT));
      }
      break;
    case 20:
      _.times(8, function(){
        tileStore.push(new Tile(tileU));
      }
      break;
    case 21:
      _.times(9, function(){
        tileStore.push(new Tile(tileV));
      }
      break;
    case 22:
      _.times(4, function(){
        tileStore.push(new Tile(tileW));
      }
      break;
    case 23:
      _.times(1, function(){
        tileStore.push(new Tile(tileX));
      }
      break;
  }
}
