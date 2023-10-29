const buttons = document.querySelectorAll(".buttons");
export const keyPress = (keys) => {
  //******************************************
  // event listener for on secreen buttons
  buttons.forEach((button) => {
    button.addEventListener("touchstart", (event) => {
      switch (event.target.value) {
        case "right":
          event.preventDefault();
          keys.rightKeyPressed = true;
          break;
        case "left":
          event.preventDefault();
          keys.leftKeyPressed = true;
          break;
        case "rotate":
          keys.upKeyPressed = true;
          break;
        case "faster":
          keys.downKeyPressed = true;
          break;
      }
    });
    button.addEventListener("touchend", (event) => {
      switch (event.target.value) {
        case "faster":
          keys.downKeyPressed = false;
          break;
      }
    });
  });
  //******************************************
  // event listener for keyboard keys
  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case "ArrowLeft":
        keys.leftKeyPressed = true;
        break;
      case "ArrowRight":
        keys.rightKeyPressed = true;
        break;
      case "ArrowUp":
        keys.upKeyPressed = true;
        break;
      case "ArrowDown":
        keys.downKeyPressed = true;
        break;
    }
  });
  document.addEventListener("keyup", function (event) {
    switch (event.code) {
      case "ArrowDown":
        event.preventDefault();
        keys.downKeyPressed = false;
        break;
    }
  });
};
