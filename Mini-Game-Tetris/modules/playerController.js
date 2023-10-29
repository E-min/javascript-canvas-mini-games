import { gameOver, playerTouchCubes } from "./collisionsAndGameFunctions.js";
import { player } from "./cubes.js";
import {
  rotationL,
  rotationI,
  rotationHalfPlus,
  rotationMirroredL,
  rotationZ,
  rotationMirroredZ,
} from "./cubesRotation.js";
import { cubeLength, frameRate } from "./globalVariables.js";
import { keyPress } from "./inputCheck.js";
import { clearPlayerCubes, drawPlayerCubes } from "./drawAndClearCubes.js";

let fps = frameRate;
const keys = {
  leftKeyPressed: false,
  rightKeyPressed: false,
  upKeyPressed: false,
  downKeyPressed: false,
};

const pauseGame = () => {
  const pauseButton = document.getElementById("startStop");
  pauseButton.addEventListener("click", () => {
    if (pauseButton.value === "pause") {
      const pauseIcon = document.querySelector(".fa-pause");
      const startIcon = document.createElement("i");
      startIcon.classList.add("fa-solid", "fa-play");
      pauseButton.removeChild(pauseIcon);
      pauseButton.appendChild(startIcon);
      pauseButton.value = "start";
      fps = 0;
    } else {
      const startIcon = document.querySelector(".fa-play");
      const pauseIcon = document.createElement("i");
      pauseIcon.classList.add("fa-solid", "fa-pause");
      pauseButton.removeChild(startIcon);
      pauseButton.appendChild(pauseIcon);
      pauseButton.value = "pause";
      fps = 10;
    }
  });
};
pauseGame();

export const connectCubes = (object, propertyName, value, method) => {
  // clear player cubes before movement
  clearPlayerCubes();
  // save previous location
  player[1].previousY = player[1].y;
  player[1].previousX = player[1].x;
  switch (method) {
    case "addAndAssign":
      object[propertyName] += value;
      break;
    case "extractAndAssign":
      object[propertyName] -= value;
      break;
    case "assign":
      object[propertyName] = value;
      break;
  }
  if (player[1].y > player[1].previousY) {
    player[0].y += player[1].y - player[1].previousY;
    player[2].y += player[1].y - player[1].previousY;
    player[3].y += player[1].y - player[1].previousY;
  } else if (player[1].x < player[1].previousX) {
    player[0].x -= player[1].previousX - player[1].x;
    player[2].x -= player[1].previousX - player[1].x;
    player[3].x -= player[1].previousX - player[1].x;
  } else if (player[1].x > player[1].previousX) {
    player[0].x += player[1].x - player[1].previousX;
    player[2].x += player[1].x - player[1].previousX;
    player[3].x += player[1].x - player[1].previousX;
  }
  // draw cubes again after movement done
  drawPlayerCubes();
};
const rotate = function () {
  // clear player cubes before rotations
  clearPlayerCubes();
  // player[1] is center cube of a tetris shape
  switch (player[1].type) {
    case "L":
      rotationL(player[1]);
      break;
    case "mL":
      rotationMirroredL(player[1]);
      break;
    case "I":
      rotationI(player[1]);
      break;
    case "h+":
      rotationHalfPlus(player[1]);
      break;
    case "Z":
      rotationZ(player[1]);
      break;
    case "mZ":
      rotationMirroredZ(player[1]);
      break;
  }
};

const movementController = () => {
  if (keys.upKeyPressed) {
    rotate();
    keys.upKeyPressed = false;
  }
  if (keys.leftKeyPressed) {
     keys.leftKeyPressed = false;
    if (playerTouchCubes.touchLeft) {
      playerTouchCubes.touchLeft = false;
      return;
    }
    connectCubes(player[1], "x", cubeLength, "extractAndAssign");
  } else if (keys.rightKeyPressed) {
      keys.rightKeyPressed = false;
    if (playerTouchCubes.touchRight) {
      playerTouchCubes.touchRight = false;
      return;
    }
    connectCubes(player[1], "x", cubeLength, "addAndAssign");
  } else {
    fps = keys.downKeyPressed ? 60 : 10;
    connectCubes(player[1], "y", 10, "addAndAssign");
  }
  gameOver && (fps = 0);
};

const playerController = function () {
  keyPress(keys);
  movementController();
};

export { fps, keys };
export default playerController;
