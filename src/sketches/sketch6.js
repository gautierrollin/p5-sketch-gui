// export const controls = {
//   canvasWidth : 800,
//   canvasHeight : 800,
//   anchor1x : {
//     value : 1000,
//     max : 10000
//   },
//   anchor1y : 820,
//   anchor2x : {
//     value : 1000,
//     max : 10000
//   },
//   anchor2y : 0,
//   control1x : 0,
//   control1y : 352,
//   control2x : 675,
//   control2y : 900,
//   numberOfLines : 220
// };

export const controls = {
  canvasWidth : 800,
  canvasHeight : 800,
  anchor1x : {
    value : 1000,
    max : 10000
  },
  anchor1y : 800,
  anchor2x : {
    value : 5100,
    max : 10000
  },
  anchor2y : 0,
  control1x : 0,
  control1y : 350,
  control2x : 675,
  control2y : 900,
  numberOfLines : 230
};

export function getSketchDefinition(state) {
  const {
    canvasWidth,
    canvasHeight,
    anchor1x,
    anchor1y,
    anchor2x,
    anchor2y,
    control1x,
    control1y,
    control2x,
    control2y,
    numberOfLines
  } = state;

  const settings = {
    width : canvasWidth,
    height : canvasHeight
  };

  const shapes = [];

  for (let i = 0; i < numberOfLines; i++) {
    shapes.push({
      type : "cubic-bezier",
      params : {
        p0 : {
          x : anchor1x - i * 20,
          y : anchor1y
        },
        p1 : {
          x : control1x,
          y : control1y
        },
        p2 : {
          x : control2x,
          y : control2y
        },
        p3 : {
          x : anchor2x,
          y : anchor2y - i * 20
        }
      }
    });
  }

  return { settings, shapes };
}
