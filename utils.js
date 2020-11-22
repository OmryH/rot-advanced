const utils = {
  textColors: function (fgColor, bgColor) {
    let color = "";
    if (fgColor !== null) {
      color += "%c{" + fgColor + "}";
    }
    if (bgColor !== null) {
      color += "%b{" + bgColor + "}";
    }

    return color;
  },

  keyMap: function (key) {
    let keyCode = 0;
    switch (key) {
      case "RETURN":
        keyCode = 13;
        break;
      case "ESCAPE":
        keyCode = 27;
        break;
      case "LEFT":
        keyCode = 65;
        break;
      case "RIGHT":
        keyCode = 68;
        break;
      case "UP":
        keyCode = 87;
        break;
      case "DOWN":
        keyCode = 83;
        break;

      default:
        break;

    }
    return keyCode;
  }
};
