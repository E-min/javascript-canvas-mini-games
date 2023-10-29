import { cubes, shapes, player } from "./cubes.js";
import {
  cubeColors,
  cubeLength,
  display,
  rowClearSound,
} from "./globalVariables.js";
import { connectCubes, keys } from "./playerController.js";
import { clearDrewCubes, drawPlacedCubes } from "./drawAndClearCubes.js";

const descentCubesAfterClearingRows = (
  higestClearedCubesHeight,
  clearedRows
) => {
  cubes.forEach((cube, index) => {
    if (cube.y < higestClearedCubesHeight) {
      cube.y += cubeLength * clearedRows;
    }
  });
};
const scoreOnDisplay = document.getElementById("score");
let score = 0;

const clearRows = () => {
  let rowCount = 1;
  const clearNeededRows = [];
  // starts from index 1 because there is one default cube
  // in the cubes array for display's bottom collision
  let lastCube = cubes[0].y;
  for (let i = 1; i < cubes.length; i++) {
    if (lastCube === cubes[i].y) {
      rowCount++;
    } else {
      rowCount = 1;
    }
    lastCube = cubes[i].y;
    if (rowCount === 12) {
      clearNeededRows.push(i);
      // Increase the score based on the cube colors
      for (let j = i - 11; j <= i; j++) {
        const cubeColor = cubes[j].texture;
        score += cubeColors[cubeColor];
        scoreOnDisplay.innerText = score;
      }
      // clear cubes before removing from cubes array
      clearDrewCubes();
      rowClearSound.play();
    }
  }
  const clrRowsAmount = clearNeededRows.length;
  clrRowsAmount &&
    descentCubesAfterClearingRows(
      cubes[clearNeededRows[clrRowsAmount - 1]].y,
      clrRowsAmount
    );
  // gap is solution for using splice, cause index change
  let gap = 0;
  for (let i = 0; i < clrRowsAmount; i++) {
    const gapExtractedIndex = clearNeededRows[i] - gap;
    cubes.splice(gapExtractedIndex - 11, 12);
    gap += 12;
  }
};

const colors = ["purple", "blue", "cyan", "green", "orange", "red", "yellow"];
const shapeProbabilities = [0, 1, 2, 3, 4, 4, 4, 5];

const getRandomShape = () => {
  const randomIndex = Math.floor(Math.random() * shapeProbabilities.length);
  const shapeIndex = shapeProbabilities[randomIndex];
  const shape = shapes[shapeIndex];
  return shape;
};

const addShape = function () {
  //random color selection
  const random = Math.floor(Math.random() * colors.length);
  const randomColor = colors[random];

  // random shape selection
  const shape = getRandomShape();
  const firstCube = shape[0];
  const secondCube = shape[1];
  const thirdCube = shape[2];
  const fourthCube = shape[3];

  //push collisioned player to cubes
  const sentCubes = player.splice(0, 4);
  cubes.push(...sentCubes);

  // create and add player
  player.unshift(
    {
      x: firstCube.x,
      y: firstCube.y,
      top: firstCube.top,
      texture: randomColor,
    },
    {
      x: secondCube.x,
      y: secondCube.y,
      top: secondCube.top,
      texture: randomColor,
      type: secondCube.type,
      rotation: 0,
    },
    {
      x: thirdCube.x,
      y: thirdCube.y,
      top: thirdCube.top,
      texture: randomColor,
    },
    {
      x: fourthCube.x,
      y: fourthCube.y,
      top: fourthCube.top,
      texture: randomColor,
    }
  );
  cubes.sort((a, b) => a.y - b.y);
  clearRows();
  // draw cubes after new cubes added to cubes array
  drawPlacedCubes();
};

export let gameOver = false;
export const playerTouchCubes = {
  touchLeft: false,
  touchRight: false,
  stopRotation: false
};

export const displayEdgesCollision = (cubeOfPlayer) => {
  //right and left side of display's collisions
  if (cubeOfPlayer.x < 0) {
    // move player[1] cube by cubes that are passed collision
    connectCubes(player[1], "x", 30, "addAndAssign");
  } else if (cubeOfPlayer.x >= display.width) {
    connectCubes(player[1], "x", 30, "extractAndAssign");
  }
  //bottom of display's collision
  if (cubeOfPlayer.y + cubeLength >= display.height) {
    addShape();
  }
};

export const cubeCollision = function () {
  for (let j = 0; j < cubes.length; j++) {
    const topLocation = cubes[j].y;
    const bottomLocation = cubes[j].y + cubeLength;
    const rightLocation = cubes[j].x + cubeLength;
    const leftLocation = cubes[j].x;
    // stop game
    cubes[j].y + cubeLength <= 0 && (gameOver = true);
    for (let i = 0; i < 4; i++) {
      const playerTopLocation = player[i].y;
      const playerBottomLocation = player[i].y + cubeLength;
      const playerRightLocation = player[i].x + cubeLength;
      const playerLeftLocation = player[i].x;
      if (
        playerBottomLocation === topLocation &&
        playerLeftLocation === leftLocation &&
        playerRightLocation === rightLocation &&
        player[i].top === true
      ) {
        addShape();
      }
      if (
        (topLocation >= playerTopLocation + 10 &&
          topLocation <= playerBottomLocation) ||
        (bottomLocation > playerTopLocation + 10 &&
          bottomLocation < playerBottomLocation)
      ) {
        if (playerLeftLocation === rightLocation) {
          playerTouchCubes.touchLeft = true;
        } else if (playerRightLocation === leftLocation) {
          playerTouchCubes.touchRight = true;
        }
      }
    }
  }
};
