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
      default:
        break;

    }
    return keyCode;
  }
};
