import getCirclePointCoordinates from "./helpers/getCirclePointCoordinates";

export const controls = {
  canvasHeight : 800,
  canvasWidth : 800,
  numberOfCricle : 235,
  coeffExp : 25,
  circle1Origin : 900,
  rectSize : 2
};

export function sketch(p5, state) {
  const {
    canvasHeight,
    canvasWidth,
    numberOfCricle,
    coeffExp,
    circle1Origin
    // rectSize
  } = state;

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.angleMode(p5.DEGREES);
    p5.background(255);
    p5.noLoop();
  };

  p5.draw = () => {
    for (let i = 0; i < numberOfCricle; i++) {
      const radius = p5.exp(i / coeffExp);

      const originX = circle1Origin - (radius / 2);
      const originY = 0;

      for (let j = 0; j < 360; j++) {
        if (j % 2 === 0) {
          const { x, y } = getCirclePointCoordinates(originX, originY, radius, j);
          p5.line(x - 30, y - 30, x + 30, y + 30);
          // p5.rect(x, y, rectSize);
        }
      }
    }
  };
}
