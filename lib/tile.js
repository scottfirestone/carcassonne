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
for(var i == 0; i < 25; i++) {
  switch(i) {
    case 0:
      _times(2, function(){
        tileStore.push(new Tile(tileA));
      }
    case 1:
      _times(4, function(){
        tileStore.push(new Tile(tileB));
      }
    case 2:
      _times(1, function(){
        tileStore.push(new Tile(tileC));
      }
    case 3:
      _times(4, function(){
        tileStore.push(new Tile(tileD));
      }
    case 4:
      _times(5, function(){
        tileStore.push(new Tile(tileE));
      }
    case 5:
      _times(2, function(){
        tileStore.push(new Tile(tileF));
      }
    case 6:
      _times(1, function(){
        tileStore.push(new Tile(tileG));
      }
    case 7:
      _times(3, function(){
        tileStore.push(new Tile(tileH));
      }
    case 8:
      _times(2, function(){
        tileStore.push(new Tile(tileI));
      }
    case 9:
      _times(3, function(){
        tileStore.push(new Tile(tileJ));
      }
    case 10:
      _times(3, function(){
        tileStore.push(new Tile(tileK));
      }
    case 11:
      _times(3, function(){
        tileStore.push(new Tile(tileL));
      }
    case 12:
      _times(2, function(){
        tileStore.push(new Tile(tileM));
      }
    case 13:
      _times(3, function(){
        tileStore.push(new Tile(tileN));
      }
    case 14:
      _times(2, function(){
        tileStore.push(new Tile(tileO));
      }
    case 15:
      _times(3, function(){
        tileStore.push(new Tile(tileP));
      }
    case 16:
      _times(1, function(){
        tileStore.push(new Tile(tileQ));
      }
    case 17:
      _times(3, function(){
        tileStore.push(new Tile(tileR));
      }
    case 18:
      _times(2, function(){
        tileStore.push(new Tile(tileS));
      }
    case 19:
      _times(1, function(){
        tileStore.push(new Tile(tileT));
      }
    case 20:
      _times(8, function(){
        tileStore.push(new Tile(tileU));
      }
    case 21:
      _times(9, function(){
        tileStore.push(new Tile(tileV));
      }
    case 22:
      _times(4, function(){
        tileStore.push(new Tile(tileW));
      }
    case 23:
      _times(1, function(){
        tileStore.push(new Tile(tileX));
      }
  }
}
