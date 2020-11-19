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
    enter: function () {
      console.log("Entered Play screen");
    },
    exit: function () {
      console.log("Exited Play screen");
    },
    render: function (display) {
      display.drawText(3, 5, utils.textColors("red", "white") + "This game is so much fun!");
      display.drawText(4, 6, "Press [Enter] to win, or [ESC] to lose");
    },
    handleInput: function (type, data) {
      if (type === "keydown") {
        if (data.keyCode === utils.keyMap("RETURN")) {
          Game.switchScreen(Game.Screen.winScreen);
        } else if (data.keyCode === utils.keyMap("ESCAPE")) {
          Game.switchScreen(Game.Screen.loseScreen);

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
