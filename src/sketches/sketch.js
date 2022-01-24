export const controls = {
  canvasWidth : 800,
  canvasHeight : 800
};

export function getSketchDefinition(state) {
  const {
    canvasWidth,
    canvasHeight
  } = state;

  const settings = {
    width : canvasWidth,
    height : canvasHeight
  };

  const shapes = [];

  return { settings, shapes };
}
