import { ballHit, boxHit, failed } from "./audio.js";
import { ball, platform, rectangular } from "./objects.js";
import { context, frameRate, infoScore } from "./globalVariables.js";
ballHit.volume = 0.1;
boxHit.volume = 0.3;
failed.volume = 0.5;
const ballHitPlay = () => {
  if(!ballHit.paused) {
    ballHit.currentTime = 0;
   }
  ballHit.play();
}
export const displayOutlineCollision = function() {
  // Check top collision
  if (ball.y - ball.radius <= 0) {
    ballHitPlay();
    ball.y = ball.radius;
    ball.velocity.y *= -ball.elasticity;
  } else if (ball.y + ball.radius > display.height) {
    // Check bottom collision
    failed.play();
    // Reduce ball velocity to minimize vibration
    ball.velocity.x = 0;
    ball.velocity.y *= 0.8;
    setTimeout(() => {
      ball.x = 175;
      ball.y = 175;
      setTimeout(() => {
        ball.velocity.y = -platform.velocity.y;
      }, 1500);
    }, 500);
  } else if (ball.x + ball.radius >= display.width) {
    // Check right collision
    ballHitPlay();
    ball.x = display.width - ball.radius;
    ball.velocity.x *= -ball.elasticity;
  } else if (ball.x - ball.radius <= 0) {
    // Check left collision
    ballHitPlay();
    ball.x = 0 + ball.radius;
    ball.velocity.x *= -ball.elasticity;
  }
}

//***************************************************************

export const playerCollision = function() {
  const objectTop = platform.y - ball.radius;
  const objectBottom = platform.y + platform.height + ball.radius;
  const objectLeft = platform.x - ball.radius;
  const objectRight = platform.x + platform.width + ball.radius;
  if (ball.x > objectRight || ball.x < objectLeft) {
    return; // exit from function if ball outside of plaftom's x axis
  }
  if (ball.y > objectBottom || ball.y < objectTop) {
    return; // exit from function if ball outside of plaftom's y axis
  }
  ballHitPlay();
  if (ball.y >= objectTop && ball.x <= objectLeft && ball.x >= objectRight) {
    ball.y = objectTop;
  }
  ball.velocity.y = platform.velocity.y;
  ball.velocity.x += platform.velocity.x;
}

//****************************************************************

let score = 0;
let fps = frameRate;

export const targetBoxCollision = function(object) {
  const objectTop = object.y - ball.radius;
  const objectBottom = object.y + object.height + ball.radius;
  const objectLeft = object.x - ball.radius;
  const objectRight = object.x + object.width + ball.radius;

  if (ball.x > objectRight + ball.radius || ball.x < objectLeft - ball.radius) {
    return; // exit from function if ball outside of plaftom's x axis
  }
  if (ball.y > objectBottom + ball.radius || ball.y < objectTop - ball.radius) {
    return; // exit from function if ball outside of plaftom's y axis
  }
  if (ball.y >= objectTop && ball.y <= objectBottom) {
    // Ball is within object height
    if (ball.x <= objectLeft) {
      // Left collision
      ball.velocity.x = -ball.velocity.x;
      handleCollision(object);
    } else if (ball.x >= objectRight) {
      // Right collision
      ball.velocity.x = -ball.velocity.x;
      handleCollision(object);
    }
  } else if (ball.y <= objectTop) {
    // Top collision
    ball.velocity.y = -ball.velocity.y;
    handleCollision(object);
  } else if (ball.y >= objectBottom) {
    // Bottom collision
    ball.velocity.y = -ball.velocity.y;
    handleCollision(object);
  }
}

const handleCollision = function(object) {
  // clear rectangular when it gets hit
  context.clearRect(object.x, object.y, object.width, object.height);
  if(!boxHit.paused) {
    boxHit.currentTime = 0;
  }
  boxHit.play();
  const index = rectangular.indexOf(object);
  rectangular.splice(index, 1);
  score++;
  infoScore.innerText = score;
  if (score === 46) {
    won.play();
    fps = 0;
  }
}

export { score, fps };
