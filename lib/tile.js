var _ = require('lodash');

function Tile(image, type, top, right, bottom, left, pennant) {
  this.image = image;
  this.type = type;
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left;
  this.pennant = pennant;
}

module.exports = Tile;
