// export const controls = {
//   canvasHeight : 800,
//   canvasWidth : 800,
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
  canvasHeight : 800,
  canvasWidth : 800,
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

export function sketch(p5, state) {
  const {
    canvasHeight,
    canvasWidth,
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

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.angleMode(p5.DEGREES);
    p5.background(255);
    p5.noLoop();
  };

  p5.draw = () => {
    for (let i = 0; i < numberOfLines; i++) {
      p5.noFill();
      p5.bezier(
        anchor1x - i * 20,
        anchor1y,
        control1x,
        control1y,
        control2x,
        control2y,
        anchor2x,
        anchor2y - i * 20
      );
    }
  };
}
