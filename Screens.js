Game.Screen = {
  startScreen: {
    enter: function () {
      console.log("Entered Start screen");
    },
    exit: function () {
      console.log("Exited Start screen");
    },
    render: function (display) {
      display.drawText(1, 1, utils.textColors("yellow", null) + "JS Roguelike");
      display.drawText(1, 2, "Press [Enter] to start!");
    },
    handleInput: function (type, data) {
      if (type === "keydown") {
        if (data.keyCode === utils.keyMap("RETURN")) {
          Game.switchScreen(Game.Screen.playScreen);
        }
      }
    }
  },
  playScreen: {
    map: null,
    centerX: 0,
    centerY: 0,
    enter: function () {
      let map = [];
      let mapWidth = 500;
      let mapHeight = 500;
      for (let x = 0; x < mapWidth; x++) {
        map.push([]);
        for (let y = 0; y < mapHeight; y++) {
          map[x].push(Tile.nullTile);
        }
      }
      let generator = new ROT.Map.Cellular(mapWidth, mapHeight);
      generator.randomize(0.5);
      let totalIterations = 3;
      for (let i = 0; i < totalIterations; i++) {
        generator.create();
      }

      generator.create(function (x, y, v) {
        map[x][y] = v === 1 ? Tile.floorTile : Tile.wallTile
      });

      this.map = new Game.Map(map);
    },
    move: function (dx, dy) {
      this.centerX = Math.max(0, Math.min(this.map.getWidth() - 1, this.centerX + dx));
      this.centerY = Math.max(0, Math.min(this.map.getHeight() - 1, this.centerY + dy));
    },
    exit: function () {
      console.log("Exited Play screen");
    },
    render: function (display) {
      let screenWidth = Game.getWidth();
      let screenHeight = Game.getHeight();
      let topLeftX = Math.max(0, this.centerX - (screenWidth / 2));
      topLeftX = Math.min(topLeftX, this.map.getWidth() - screenWidth);
      let topLeftY = Math.max(0, this.centerY - (screenHeight / 2));
      topLeftY = Math.min(topLeftY, this.map.getHeight() - screenHeight);
      for (let x = topLeftX; x < topLeftX + screenWidth; x++) {
        for (let y = topLeftY; y < topLeftY + screenHeight; y++) {
          let glyph = this.map.getTile(x, y).getGlyph();
          display.draw(x - topLeftX, y - topLeftY, glyph.getChar(), glyph.getForeground(), glyph.getBackground());
        }
      }
      display.draw(this.centerX - topLeftX, this.centerY - topLeftY, "@", "white", "black");
    },
    handleInput: function (type, data) {
      if (type === "keydown") {
        if (data.keyCode === utils.keyMap("RETURN")) {
          Game.switchScreen(Game.Screen.winScreen);
        } else if (data.keyCode === utils.keyMap("ESCAPE")) {
          Game.switchScreen(Game.Screen.loseScreen);
        }

        if (data.keyCode === utils.keyMap("LEFT")) {
          this.move(-1, 0);
        } else if (data.keyCode === utils.keyMap("RIGHT")) {
          this.move(1, 0);
        } else if (data.keyCode === utils.keyMap("UP")) {
          this.move(0, -1);
        } else if (data.keyCode === utils.keyMap("DOWN")) {
          this.move(0, 1);
        }
      }
    }
  },
  winScreen: {
    enter: function () {
      console.log("Entered Win screen");
    },
    exit: function () {
      console.log("Exited Win screen");
    },
    render: function (display) {
      for (let i = 0; i < 22; i++) {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let background = ROT.Color.toRGB([r, g, b]);
        display.drawText(2, i + 1, utils.textColors(null, background) + "You win!");
      }
    },
    handleInput: function (type, data) {
    }
  },
  loseScreen: {
    enter: function () {
      console.log("Entered Lose screen");
    },
    exit: function () {
      console.log("Exited Lose screen");
    },
    render: function (display) {
      for (let i = 0; i < 22; i++) {
        display.drawText(2, i + 1, utils.textColors(null, "red") + "You lose! :(");
      }
    },
    handleInput: function (type, data) {
    }
  },
};
