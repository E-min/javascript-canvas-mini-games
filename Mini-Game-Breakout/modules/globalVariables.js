export const display = document.getElementById("display");
export const context = display.getContext("2d");
export const infoScore = document.getElementById("score");
export const miliseconds = Date.now();
export const frameRate = 60;

export const userHaveTouchScreen = function() {
  const buttonsContainer = document.getElementById("buttons-container");
  const info = document.getElementById("info");
  //check if users have touchscreen
  if ("ontouchstart" in window) {
  } else {
    info.innerText = "Info: Use arrow keys to move platform";
    buttonsContainer.remove();
  }
}
