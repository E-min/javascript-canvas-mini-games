import { displayEdgesCollision } from "./collisionsAndGameFunctions.js";
import { context, cubeLength } from "./globalVariables.js";
import { cubes, player } from "./cubes.js";

const colors = ["purple", "blue", "cyan", "green", "orange", "red", "yellow"];

// Object to store loaded texture images
const textureImages = {};

// Function to preload texture images
function preloadTextures(callback) {
  let texturesLoaded = 0;
  colors.forEach((color) => {
    const textureImage = new Image();
    textureImage.onload = () => {
      texturesLoaded++;
      if (texturesLoaded === colors.length) {
        callback(); // Callback when all textures are loaded
      }
    };
    textureImage.src = `./texture/${color}block.png`;
    // Store the loaded texture image in the textureImages object
    textureImages[color] = textureImage;
  });
}
export const clearDrewCubes = () => {
  for (let i = 0; i < cubes.length; i++) {
    context.clearRect(cubes[i].x, cubes[i].y, cubeLength, cubeLength);
  }
};
export const drawPlacedCubes = () => {
  for (let i = 0; i < cubes.length; i++) {
    const cubeTexture = cubes[i].texture;
    const cubeImage = textureImages[cubeTexture];
    context.drawImage(
      cubeImage,
      cubes[i].x,
      cubes[i].y,
      cubeLength,
      cubeLength
    );
  }
};

export const clearPlayerCubes = () => {
  for (let i = 0; i < 4; i++) {
    context.clearRect(player[i].x, player[i].y, cubeLength, cubeLength);
  }
};
// Function to draw objects with loaded textures
export const drawPlayerCubes = function () {
  for (let i = 0; i < 4; i++) {
    displayEdgesCollision(player[i]);
    const playerTexture = player[i].texture;
    const playerImage = textureImages[playerTexture];
    context.drawImage(
      playerImage,
      player[i].x,
      player[i].y,
      cubeLength,
      cubeLength
    );
  }
};

// Preload textures and start rendering objects when ready
preloadTextures(() => {
  drawPlayerCubes(); // Start rendering objects
});
