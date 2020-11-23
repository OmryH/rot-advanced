////////////////////////////////////
// Glyph //
///////////////////////////////////

let Glyph = function (properties) {
  properties = properties || {};
  this.char = properties['chr'] || " ";
  this.foreground = properties['fgColor'] || "white";
  this.background = properties['bgColor'] || "black";
};

Glyph.prototype.getChar = function () {
  return this.char;
};

Glyph.prototype.getBackground = function () {
  return this.background;
};

Glyph.prototype.getForeground = function () {
  return this.foreground
};

////////////////////////////////////
// Tile //
///////////////////////////////////

let Tile = function (properties) {
  properties = properties || {};
  Glyph.call(this, properties);
  this.isWalkable = properties['isWalkable'] || false;
  this.isDiggable = properties['isDiggable'] || false;
};

Tile.extend(Glyph);

Tile.prototype.isWalkable = function () {
  return this.isWalkable;
};

Tile.prototype.isDiggable = function () {
  return this.isDiggable;
};

Tile.nullTile = new Tile({});
Tile.floorTile = new Tile({char: ".", isWalkable: true});
Tile.wallTile = new Tile({char: "#", fgColor: "goldenrod", isDiggable: true});
