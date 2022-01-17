import getCirclePointCoordinates from "./helpers/getCirclePointCoordinates";

export const controls = {
  canvasHeight : 400,
  canvasWidth : 450,
  canvasBg : "#FFFFFF",
  circleOriginX : 275,
  circleOriginY : 100,
  circleRadius : 300,
  defaultDelta1 : 180,
  defaultDelta2 : 295,
  horizontalLinesX : 500,
  horizontalLinesY : 210,
  numberOfGroups : 13
};

export function sketch(p5, state) {
  const {
    canvasHeight,
    canvasWidth,
    canvasBg,
    circleOriginX,
    circleOriginY,
    circleRadius,
    defaultDelta1,
    defaultDelta2,
    horizontalLinesX,
    horizontalLinesY,
    numberOfGroups
  } = state;

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.angleMode(p5.DEGREES);
    p5.background(canvasBg);
    p5.noLoop();
  };

  p5.draw = () => {
    // p5.circle(circleOriginX, circleOriginY, circleRadius * 2);

    let delta1 = defaultDelta1;
    let delta2 = defaultDelta2;

    for (let i = 0; i < numberOfGroups; i++) {
      delta1 += (6 + i / 3) / 2;
      delta2 += (6 + i - 1) / 2;

      for (let j = 0; j < 5; j++) {
        const {
          x : x1,
          y : y1
        } = getCirclePointCoordinates(circleOriginX, circleOriginY, circleRadius, delta1 + j / 2);

        const {
          x : x2,
          y : y2
        } = getCirclePointCoordinates(circleOriginX, circleOriginY, circleRadius, delta2 + j / 2);

        p5.line(x1, y1, x2, y2);
        p5.line(x2, y2, horizontalLinesX, horizontalLinesY);
      }
    }
  };

}
