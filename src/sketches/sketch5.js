import getCirclePointCoordinates from "./helpers/getCirclePointCoordinates";

export const controls = {
  canvasHeight : 800,
  canvasWidth : 800,
  numberOfCricle : 228,
  circleArcHeight : 15
};

export function sketch(p5, state) {
  const {
    canvasHeight,
    canvasWidth,
    numberOfCricle,
    circleArcHeight
  } = state;

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.angleMode(p5.DEGREES);
    p5.background(255);
    p5.noLoop();
  };

  p5.draw = () => {
    for (let i = numberOfCricle; i > 0; i--) {
      const circleOriginX = 800;
      const circleOriginY = 0;
      const circleRadius = i * circleArcHeight;

      p5.noStroke();
      p5.circle(circleOriginX, circleOriginY, circleRadius * 2);
      p5.stroke(0);

      for (let j = 0; j < 360; j++) {
        if (i % 2 === 0 && j % 2 === 0) {
          const { x, y } = getCirclePointCoordinates(circleOriginX, circleOriginY, circleRadius, j);
          p5.line(circleOriginX, circleOriginY, x, y);
        }

        if (i % 2 === 1 && j % 2 === 1) {
          const { x, y } = getCirclePointCoordinates(circleOriginX, circleOriginY, circleRadius, j);
          p5.line(circleOriginX, circleOriginY, x, y);
        }
      }
    }
  };
}
