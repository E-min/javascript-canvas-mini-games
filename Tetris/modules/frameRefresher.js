import { cubeCollision } from "./collisionsAndGameFunctions.js";
import playerController, { fps } from "./playerController.js";
import { miliseconds } from "./globalVariables.js";

let lastFrameTime = miliseconds;
export const refresher = function () {
  const now = Date.now();
  const delta = now - lastFrameTime;
  if (delta >= 1000 / fps) {
    playerController();
    cubeCollision();
    lastFrameTime = now;
  }
  requestAnimationFrame(refresher);
};
