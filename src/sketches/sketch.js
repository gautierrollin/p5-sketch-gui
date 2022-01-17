export const controls = {
  canvasHeight : 800,
  canvasWidth : 800
};

export function sketch(p5, state) {
  const {
    canvasHeight,
    canvasWidth
  } = state;

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.angleMode(p5.DEGREES);
    p5.background(255);
    p5.noLoop();
  };

  p5.draw = () => {

  };
}
