import getCirclePointCoordinates from "./helpers/getCirclePointCoordinates";

export const controls = {
  canvasWidth : 450,
  canvasHeight : 400,
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

export function getSketchDefinition(state) {
  const {
    canvasWidth,
    canvasHeight,
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

  const settings = {
    width : canvasWidth,
    height : canvasHeight,
    backgroundColor : canvasBg
  };

  const shapes = [];

  // shapes.push({
  //   type : "circle",
  //   params : {
  //     x : circleOriginX,
  //     y : circleOriginY,
  //     diameter : circleRadius * 2
  //   }
  // });

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

      shapes.push({
        type : "line",
        params : {
          p0 : {
            x : x1,
            y : y1
          },
          p1 : {
            x : x2,
            y : y2
          }
        }
      });

      shapes.push({
        type : "line",
        params : {
          p0 : {
            x : x2,
            y : y2
          },
          p1 : {
            x : horizontalLinesX,
            y : horizontalLinesY
          }
        }
      });
    }
  }

  return { settings, shapes };
}
