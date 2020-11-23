Game.Map = function (tiles) {
  this.tiles = tiles;
  this.width = tiles.length;
  this.height = tiles[0].length;
};

Game.Map.prototype.getWidth = function () {
  return this.width;
};

Game.Map.prototype.getHeight = function () {
  return this.height;
};

Game.Map.prototype.getTile = function (x, y) {
  if (x < 0 || x >= this.width || y < 0 || y > this.height) {
    return Tile.nullTile;
  } else {
    return this.tiles[x][y] || Tile.nullTile;
  }
};

Game.Map.prototype.dig = function (x, y) {
  if (this.getTile(x, y).isDiggable()) {
    this.tiles[x][y] = Tile.floorTile;
  }
};

Game.Map.prototype.getRandomFloorPosition = function () {
  let x, y;
  do {
    x = Math.floor(Math.random() * this.width);
    y = Math.floor(Math.random() * this.height);
  } while(this.getTile(x, y) !== Tile.floorTile);
  return {x: x, y: y};
};
