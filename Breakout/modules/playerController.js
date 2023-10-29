import { platform } from "./objects.js";
import { frameRate, miliseconds } from "./globalVariables.js";

const buttons = document.querySelectorAll(".button");

// removes info after pressing
buttons.forEach((button) => {
  document.addEventListener("keydown", function handleKeyDown(event) {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      const infoElement = document.getElementById("info");
      if (infoElement) {
        infoElement.remove();
        document.removeEventListener("keydown", handleKeyDown);
      }
    }
  });
});

let leftKeyPressed = false;
let rightKeyPressed = false;

const keyPress = function() {
  //******************************************
  // event listener for on secreen buttons
  buttons.forEach((button) => {
    button.addEventListener("touchstart", (event) => {
      switch (event.target.value) {
        case "right":
          rightKeyPressed = true;
          break;
        case "left":
          leftKeyPressed = true;
          break;
      }
    });
    button.addEventListener("touchend", (event) => {
      switch (event.target.value) {
        case "right":
          rightKeyPressed = false;
          break;
        case "left":
          leftKeyPressed = false;
          break;
      }
    });
  });
  //******************************************
  // event listener for keyboard keys
  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case "ArrowLeft":
        leftKeyPressed = true;
        break;
      case "ArrowRight":
        rightKeyPressed = true;
        break;
    }
  });
  document.addEventListener("keyup", function (event) {
    switch (event.code) {
      case "ArrowLeft":
        leftKeyPressed = false;
        break;
      case "ArrowRight":
        rightKeyPressed = false;
        break;
    }
  });
}

const movementController = (left, right, velocity, delta) => {
  if (left) {
    platform.x -= 0.2 * delta;
    platform.velocity.x = -velocity;
  } else {
    platform.velocity.x < 0 && (platform.velocity.x = 0);
  }
  if (right) {
    platform.x += 0.2 * delta;
    platform.velocity.x = velocity;
  } else {
    platform.velocity.x > 0 && (platform.velocity.x = 0);
  }
};

let lastFrameTime = miliseconds;

const playerController = function() {
  // Calculate the time elapsed since the last frame
  const now = Date.now();
  const delta = now - lastFrameTime;
  // Limit the frame rate to the desired FPS
  if (delta >= 1000 / frameRate) {
    const minX = 0;
    const maxX = display.width - platform.width;
    // limit platfrom movment range
    platform.x = Math.max(minX, Math.min(maxX, platform.x));
    keyPress();
    const velocity = -platform.velocity.y;
    movementController(leftKeyPressed, rightKeyPressed, velocity, delta);
    // Save the time of this frame
    lastFrameTime = now;
  }
  // Request the next frame
  requestAnimationFrame(playerController);
}

export default playerController;
