import { cubeLength } from "./globalVariables.js";

export const shapes = [
  [
    // array of cubes for L shape
    {
      x: 5 * cubeLength,
      y: -4 * cubeLength,
      top: false,
    },
    {
      // center cube of a shape
      x: 5 * cubeLength,
      y: -3 * cubeLength,
      top: false,
      type: "L",
      rotation: 0,
    },
    {
      x: 5 * cubeLength,
      y: -2 * cubeLength,
      top: true,
    },
    {
      x: 6 * cubeLength,
      y: -2 * cubeLength,
      top: true,
    },
  ],
  [
    // array of cubes for mirrored L shape
    {
      x: 5 * cubeLength,
      y: -4 * cubeLength,
      top: false,
    },
    {
      x: 5 * cubeLength,
      y: -3 * cubeLength,
      top: false,
      type: "mL",
      rotation: 0,
    },
    {
      x: 5 * cubeLength,
      y: -2 * cubeLength,
      top: true,
    },
    {
      x: 4 * cubeLength,
      y: -2 * cubeLength,
      top: true,
    },
  ],
  [
    // array of cubes for vertical mirrored Z shape
    {
      x: 5 * cubeLength,
      y: -4 * cubeLength,
      top: false,
    },
    {
      x: 5 * cubeLength,
      y: -3 * cubeLength,
      top: true,
      type: "mZ",
      rotation: 0,
    },
    {
      x: 6 * cubeLength,
      y: -3 * cubeLength,
      top: false,
    },
    {
      x: 6 * cubeLength,
      y: -2 * cubeLength,
      top: true,
    },
  ],
  [
    // array of cubes for vertical Z shape
    {
      x: 6 * cubeLength,
      y: -4 * cubeLength,
      top: false,
    },
    {
      x: 6 * cubeLength,
      y: -3 * cubeLength,
      top: true,
      type: "Z",
      rotation: 0,
    },
    {
      x: 5 * cubeLength,
      y: -3 * cubeLength,
      top: false,
    },
    {
      x: 5 * cubeLength,
      y: -2 * cubeLength,
      top: true,
    },
  ],
  [
    // array of cubes for I shape
    {
      x: 5 * cubeLength,
      y: -4 * cubeLength,
      top: false,
    },
    {
      x: 5 * cubeLength,
      y: -3 * cubeLength,
      top: false,
      type: "I",
      rotation: 0,
    },
    {
      x: 5 * cubeLength,
      y: -2 * cubeLength,
      top: false,
    },
    {
      x: 5 * cubeLength,
      y: -1 * cubeLength,
      top: true,
    },
  ],
  
  [
    // array of cubes for half + shape
    {
      x: 5 * cubeLength,
      y: -4 * cubeLength,
      top: false,
    },
    {
      x: 5 * cubeLength,
      y: -3 * cubeLength,
      top: false,
      type: "h+",
      rotation: 0,
    },
    {
      x: 5 * cubeLength,
      y: -2 * cubeLength,
      top: true,
    },
    {
      x: 6 * cubeLength,
      y: -3 * cubeLength,
      top: true,
    },
  ],
];
export const player = [
  {
    x: 5 * cubeLength,
    y: -4 * cubeLength,
    top: false,
    texture: "red",
  },
  {
    x: 5 * cubeLength,
    y: -3 * cubeLength,
    top: false,
    texture: "red",
    type: "I",
    rotation: 0,
  },
  {
    x: 5 * cubeLength,
    y: -2 * cubeLength,
    top: false,
    texture: "red",
  },
  {
    x: 5 * cubeLength,
    y: -1 * cubeLength,
    top: true,
    texture: "red",
  },
];

export const cubes = [];
