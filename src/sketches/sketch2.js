import getCirclePointCoordinates from "./helpers/getCirclePointCoordinates";

export const controls = {
  canvasWidth : 800,
  canvasHeight : 800,
  numberOfCricle : 235,
  coeffExp : 25,
  circle1Origin : 900,
  rectSize : 2
};

export function getSketchDefinition(state) {
  const {
    canvasWidth,
    canvasHeight,
    numberOfCricle,
    coeffExp,
    circle1Origin,
    rectSize
  } = state;

  const settings = {
    width : canvasWidth,
    height : canvasHeight
  };

  const shapes = [];

  for (let i = 0; i < numberOfCricle; i++) {
    const radius = Math.exp(i / coeffExp);

    const originX = circle1Origin - (radius / 2);
    const originY = 0;

    for (let j = 0; j < 360; j++) {
      if (j % 2 === 0) {
        const { x, y } = getCirclePointCoordinates(originX, originY, radius, j);

        // shapes.push({
        //   type : "line",
        //   params : {
        //     p0 : {
        //       x : x - 30,
        //       y : y - 30
        //     },
        //     p1 : {
        //       x : x + 30,
        //       y : y + 30
        //     }
        //   }
        // });

        shapes.push({
          type : "rect",
          params : {
            x,
            y,
            width : rectSize,
            borderColor : "#000000"
          }
        });
      }
    }
  }

  return { settings, shapes };
}
