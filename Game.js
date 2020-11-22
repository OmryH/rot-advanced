const Game = {
  display: null,
  currentScreen: null,
  width: 80,
  height: 24,
  init: function () {
    this.display = new ROT.Display({width: this.width, height: this.height});
    let container = this.display.getContainer();
    document.body.appendChild(container);

    let game = this;
    let bindEventToScreen = function (event) {
      window.addEventListener(event, function (e) {
        if (game.currentScreen !== null) {
          game.currentScreen.handleInput(event, e);
          game.display.clear();
          game.currentScreen.render(game.display);
        }
      })
    };

    bindEventToScreen("keydown");
    bindEventToScreen("keyup");
    bindEventToScreen("keypress");

    this.switchScreen(Game.Screen.startScreen);
  },

  getDisplay: function () {
    return this.display;
  },

  getWidth: function() {
    return this.width
  },

  getHeight: function() {
    return this.height
  },

  switchScreen: function (toScreen) {
    if (this.currentScreen !== null) {
      this.currentScreen.exit();
    }

    this.getDisplay().clear();
    this.currentScreen = toScreen;
    if (this.currentScreen !== null) {
      this.currentScreen.enter();
      this.currentScreen.render(this.display);
    }
  }
};
