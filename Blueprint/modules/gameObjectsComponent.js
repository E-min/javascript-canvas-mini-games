import { gameArea } from "./gameArea.js";
import { textureImages } from "./preLoadTextures.js";

export class GameObjectsComponent {
  constructor(width, height, textureName, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.textureName = textureName;
  }
  update() {
    const context = gameArea.context;
    const texture = textureImages[`./textures/${this.textureName}`];
    context.drawImage(texture, this.x, this.y, this.width, this.height);
  }
  clear() {
    const context = gameArea.context;
    context.clearRect(this.x, this.y, this.width, this.height)
  }
  movement(moveX, moveY) {
    this.moveX = moveX;
    this.moveY = moveY;
    this.clear();
    this.x += moveX;
    this.y += moveY;
    this.update();
  }
}
