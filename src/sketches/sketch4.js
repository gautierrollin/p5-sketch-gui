export const controls = {
  canvasWidth : 800,
  canvasHeight : 800,
  numberOfCircle : 235,
  coeffExp : 25,
  circle1Origin : 400,
  circle2Origin : 400
};

export function getSketchDefinition(state) {
  const {
    canvasWidth,
    canvasHeight,
    numberOfCircle,
    coeffExp,
    circle1Origin,
    circle2Origin
  } = state;

  const settings = {
    width : canvasWidth,
    height : canvasHeight
  };

  const shapes = [];

  for (let i = 0; i < numberOfCircle; i++) {
    const diameter = Math.exp(i / coeffExp);

    shapes.push({
      type : "circle",
      params : {
        x : circle1Origin - diameter / 2,
        y : 0,
        diameter
      }
    });

    shapes.push({
      type : "circle",
      params : {
        x : 0,
        y : circle2Origin - diameter / 2,
        diameter
      }
    });
  }

  return { settings, shapes };
}
