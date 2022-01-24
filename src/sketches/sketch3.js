export const controls = {
  canvasWidth : 400,
  canvasHeight : 400,
  numberOfRect : 300
};

export function getSketchDefinition(state) {
  const {
    canvasWidth,
    canvasHeight,
    numberOfRect
  } = state;

  const settings = {
    width : canvasWidth,
    height : canvasHeight
  };

  const shapes = [];

  for (let i = 0; i < numberOfRect; i++) {
    const m = Math.exp(i / 50);

    shapes.push({
      type : "rect",
      params : {
        x : 200 - m / 2,
        y : -1,
        width : m
      }
    });
  }

  return { settings, shapes };
}
