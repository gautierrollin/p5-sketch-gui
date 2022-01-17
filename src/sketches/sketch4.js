export const controls = {
  canvasHeight : 800,
  canvasWidth : 800,
  numberOfCircle : 235,
  coeffExp : 25,
  circle1Origin : 400,
  circle2Origin : 400
};

export function sketch(p5, state) {
  const {
    canvasHeight,
    canvasWidth,
    numberOfCircle,
    coeffExp,
    circle1Origin,
    circle2Origin
  } = state;

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.angleMode(p5.DEGREES);
    p5.background(255);
    p5.noLoop();
  };

  p5.draw = () => {
    for (let i = 0; i < numberOfCircle; i++) {
      const m = p5.exp(i / coeffExp);
      p5.noFill();
      p5.circle(circle1Origin - m / 2, 0, m);
      p5.circle(0, circle2Origin - m / 2, m);
    }
  };
}
