import { GameObjectsComponent } from "./gameObjectsComponent.js";

export const gameArea = {
  canvas: document.createElement("canvas"),
  fps: 60,
  miliseconds: Date.now(),
  start: function () {
    this.canvas.height = 500;
    this.canvas.width = 350;
    this.context = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    let previousTime = this.miliseconds;
    const frameRefresher = () => {
      const currentTime = Date.now();
      const delta = currentTime - previousTime;
      if (delta >= 1000 / this.fps) {
        updateGameArea();
        previousTime = currentTime;
      }
      requestAnimationFrame(frameRefresher);
    };
    frameRefresher();
  },
};
const player = new GameObjectsComponent(
    100,
    100,
    "blueblock.png",
    150,
    200
  );

// place functions that renders in game
export const updateGameArea = () => {
  player.movement(0, 0)
};
