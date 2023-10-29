import { cubeLength } from "./globalVariables.js";
import { player } from "./cubes.js";

export const rotationL = (centerCube) => {
  switch (centerCube.rotation) {
    case 0:
      player[0].x = centerCube.x + cubeLength;
      player[0].y = centerCube.y;
      player[2].x = centerCube.x - cubeLength;
      player[2].y = centerCube.y;
      player[3].x = centerCube.x - cubeLength;
      player[3].y = centerCube.y + cubeLength;
      player[0].top = true;
      centerCube.top = true;
      player[2].top = false;
      player[3].top = true;
      centerCube.rotation = 90;
      break;
    case 90:
      player[0].x = centerCube.x;
      player[0].y = centerCube.y + cubeLength;
      player[2].x = centerCube.x;
      player[2].y = centerCube.y - cubeLength;
      player[3].x = centerCube.x - cubeLength;
      player[3].y = centerCube.y - cubeLength;
      player[0].top = true;
      centerCube.top = false;
      player[2].top = false;
      player[3].top = true;
      centerCube.rotation = 180;
      break;
    case 180:
      player[0].x = centerCube.x - cubeLength;
      player[0].y = centerCube.y;
      player[2].x = centerCube.x + cubeLength;
      player[2].y = centerCube.y;
      player[3].x = centerCube.x + cubeLength;
      player[3].y = centerCube.y - cubeLength;
      player[0].top = true;
      centerCube.top = true;
      player[2].top = true;
      player[3].top = false;
      centerCube.rotation = 270;
      break;
    case 270:
      player[0].x = centerCube.x;
      player[0].y = centerCube.y - cubeLength;
      player[2].x = centerCube.x;
      player[2].y = centerCube.y + cubeLength;
      player[3].x = centerCube.x + cubeLength;
      player[3].y = centerCube.y + cubeLength;
      player[0].top = false;
      centerCube.top = false;
      player[2].top = true;
      player[3].top = true;
      centerCube.rotation = 0;
      break;
  }
};
export const rotationMirroredL = (centerCube) => {
  switch (centerCube.rotation) {
    case 0:
      player[0].x = centerCube.x + cubeLength;
      player[0].y = centerCube.y;
      player[2].x = centerCube.x - cubeLength;
      player[2].y = centerCube.y;
      player[3].x = centerCube.x - cubeLength;
      player[3].y = centerCube.y - cubeLength;
      player[0].top = true;
      centerCube.top = true;
      player[2].top = true;
      player[3].top = false;
      centerCube.rotation = 90;
      break;
    case 90:
      player[0].x = centerCube.x;
      player[0].y = centerCube.y + cubeLength;
      player[2].x = centerCube.x;
      player[2].y = centerCube.y - cubeLength;
      player[3].x = centerCube.x + cubeLength;
      player[3].y = centerCube.y - cubeLength;
      player[0].top = true;
      centerCube.top = false;
      player[2].top = false;
      player[3].top = true;
      centerCube.rotation = 180;
      break;
    case 180:
      player[0].x = centerCube.x - cubeLength;
      player[0].y = centerCube.y;
      player[2].x = centerCube.x + cubeLength;
      player[2].y = centerCube.y;
      player[3].x = centerCube.x + cubeLength;
      player[3].y = centerCube.y + cubeLength;
      player[0].top = true;
      centerCube.top = true;
      player[2].top = false;
      player[3].top = true;
      centerCube.rotation = 270;
      break;
    case 270:
      player[0].x = centerCube.x;
      player[0].y = centerCube.y - cubeLength;
      player[2].x = centerCube.x;
      player[2].y = centerCube.y + cubeLength;
      player[3].x = centerCube.x - cubeLength;
      player[3].y = centerCube.y + cubeLength;
      player[0].top = false;
      centerCube.top = false;
      player[2].top = true;
      player[3].top = true;
      centerCube.rotation = 0;
      break;
  }
};

export const rotationHalfPlus = (centerCube) => {
  switch (centerCube.rotation) {
    case 0:
      player[0].x = centerCube.x - cubeLength;
      player[0].y = centerCube.y;
      player[2].x = centerCube.x + cubeLength;
      player[2].y = centerCube.y;
      player[3].x = centerCube.x;
      player[3].y = centerCube.y + cubeLength;
      player[0].top = true;
      centerCube.top = false;
      player[2].top = true;
      player[3].top = true;
      centerCube.rotation = 90;
      break;
    case 90:
      player[0].x = centerCube.x;
      player[0].y = centerCube.y - cubeLength;
      player[2].x = centerCube.x;
      player[2].y = centerCube.y + cubeLength;
      player[3].x = centerCube.x - cubeLength;
      player[3].y = centerCube.y;
      player[0].top = false;
      centerCube.top = false;
      player[2].top = true;
      player[3].top = true;
      centerCube.rotation = 180;
      break;
    case 180:
      player[0].x = centerCube.x - cubeLength;
      player[0].y = centerCube.y;
      player[2].x = centerCube.x + cubeLength;
      player[2].y = centerCube.y;
      player[3].x = centerCube.x;
      player[3].y = centerCube.y - cubeLength;
      player[0].top = true;
      centerCube.top = true;
      player[2].top = true;
      player[3].top = false;
      centerCube.rotation = 270;
      break;
    case 270:
      player[0].x = centerCube.x;
      player[0].y = centerCube.y - cubeLength;
      player[2].x = centerCube.x;
      player[2].y = centerCube.y + cubeLength;
      player[3].x = centerCube.x + cubeLength;
      player[3].y = centerCube.y;
      player[0].top = false;
      centerCube.top = false;
      player[2].top = true;
      player[3].top = true;
      centerCube.rotation = 0;
      break;
  }
};

export const rotationI = (centerCube) => {
  switch (centerCube.rotation) {
    case 0:
      player[0].x = centerCube.x - cubeLength;
      player[0].y = centerCube.y;
      player[2].x = centerCube.x + cubeLength;
      player[2].y = centerCube.y;
      player[3].x = centerCube.x + cubeLength * 2;
      player[3].y = centerCube.y;
      player[0].top = true;
      centerCube.top = true;
      player[2].top = true;
      player[3].top = true;
      centerCube.rotation = 90;
      break;
    case 90:
      player[0].x = centerCube.x;
      player[0].y = centerCube.y - cubeLength;
      player[2].x = centerCube.x;
      player[2].y = centerCube.y + cubeLength;
      player[3].x = centerCube.x;
      player[3].y = centerCube.y + cubeLength * 2;
      player[0].top = false;
      centerCube.top = false;
      player[2].top = false;
      player[3].top = true;
      centerCube.rotation = 0;
      break;
  }
};

export const rotationZ = (centerCube) => {
  switch (centerCube.rotation) {
    case 0:
      player[0].x = centerCube.x - cubeLength;
      player[0].y = centerCube.y;
      player[2].x = centerCube.x;
      player[2].y = centerCube.y + cubeLength;
      player[3].x = centerCube.x + cubeLength;
      player[3].y = centerCube.y + cubeLength;
      player[0].top = true;
      centerCube.top = false;
      player[2].top = true;
      player[3].top = true;
      centerCube.rotation = 90;
      break;
    case 90:
      player[0].x = centerCube.x;
      player[0].y = centerCube.y - cubeLength;
      player[2].x = centerCube.x - cubeLength;
      player[2].y = centerCube.y;
      player[3].x = centerCube.x - cubeLength;
      player[3].y = centerCube.y + cubeLength;
      player[0].top = false;
      centerCube.top = true;
      player[2].top = false;
      player[3].top = true;
      centerCube.rotation = 0;
      break;
  }
};
export const rotationMirroredZ = (centerCube) => {
  switch (centerCube.rotation) {
    case 0:
      player[0].x = centerCube.x + cubeLength;
      player[0].y = centerCube.y;
      player[2].x = centerCube.x;
      player[2].y = centerCube.y + cubeLength;
      player[3].x = centerCube.x - cubeLength;
      player[3].y = centerCube.y + cubeLength;
      player[0].top = true;
      centerCube.top = false;
      player[2].top = true;
      player[3].top = true;
      centerCube.rotation = 90;
      break;
    case 90:
      player[0].x = centerCube.x;
      player[0].y = centerCube.y - cubeLength;
      player[2].x = centerCube.x + cubeLength;
      player[2].y = centerCube.y;
      player[3].x = centerCube.x + cubeLength;
      player[3].y = centerCube.y + cubeLength;
      player[0].top = false;
      centerCube.top = true;
      player[2].top = false;
      player[3].top = true;
      centerCube.rotation = 0;
      break;
  }
};
