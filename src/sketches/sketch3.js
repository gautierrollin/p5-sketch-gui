export const controls = {
  canvasHeight : 400,
  canvasWidth : 400,
  numberOfRect : 300
};

export function sketch(p5, state) {
  const {
    canvasHeight,
    canvasWidth,
    numberOfRect
  } = state;

  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.angleMode(p5.DEGREES);
    p5.background(255);
    p5.noLoop();
  };

  p5.draw = () => {
    for (let i = 0; i < numberOfRect; i++) {
      const m = p5.exp(i / 50);
      p5.noFill();
      p5.rect(200 - m / 2, -1, m, m);

      // p5.noFill();
      // p5.rect(200 - m / 2, 400 - m / 2, m, m)

      // p5.noFill();
      // p5.rect(400 - m, 0, m, m)

      // p5.rect(400 - m, 400 - m, m, m)
      // p5.noFill();

      // p5.rect(0, 400 - m, m, m)
      // p5.noFill();
    }
  };
}
