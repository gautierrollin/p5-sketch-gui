import getCirclePointCoordinates from "./helpers/getCirclePointCoordinates";

export const controls = {
  canvasWidth : 800,
  canvasHeight : 800,
  numberOfCricle : 228,
  circleArcHeight : 15
};

export function getSketchDefinition(state) {
  const {
    canvasWidth,
    canvasHeight,
    numberOfCricle,
    circleArcHeight
  } = state;

  const settings = {
    width : canvasWidth,
    height : canvasHeight
  };

  const shapes = [];

  for (let i = numberOfCricle; i > 0; i--) {
    const circleOriginX = 800;
    const circleOriginY = 0;
    const circleRadius = i * circleArcHeight;

    shapes.push({
      type : "circle",
      params : {
        x : circleOriginX,
        y : circleOriginY,
        diameter : circleRadius * 2,
        backgroundColor : "#FFFFFF"
      }
    });

    for (let j = 0; j < 360; j++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
        const { x, y } = getCirclePointCoordinates(circleOriginX, circleOriginY, circleRadius, j);

        shapes.push({
          type : "line",
          params : {
            p0 : {
              x : circleOriginX,
              y : circleOriginY
            },
            p1 : { x, y }
          }
        });
      }
    }
  }

  return { settings, shapes };
}
