const Game = {
  display: null,
  currentScreen: null,
  init: function () {
    this.display = new ROT.Display({width: 80, height: 20});
    let container = this.display.getContainer();
    document.body.appendChild(container);

    let game = this;
    let bindEventToScreen = function (event) {
      window.addEventListener(event, function (e) {
        if (game.currentScreen !== null) {
          game.currentScreen.handleInput(event, e);
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
