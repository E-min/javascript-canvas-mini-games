export const display = document.getElementById("display");
export const context = display.getContext("2d");
export const rowClearSound = document.getElementById('rowclear');
export const frameRate = 20;
export const miliseconds = Date.now();
export const cubeLength = 30;
export const cubeColors = {
    purple: 10,
    blue: 20,
    cyan: 30,
    green: 40,
    orange: 50,
    red: 60,
    yellow: 70
  };  
display.width = 12 * cubeLength;
display.height = 20 * cubeLength;
