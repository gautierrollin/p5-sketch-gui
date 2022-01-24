const DEFAULT_SETTINGS = {
  backgroundColor : "#FFFFFF",
  width : 800,
  height : 800
};

const DEFAULT_STROKE_COLOR = "#000000";

const SHAPES_MAP = {
  circle : ({ x, y, diameter, backgroundColor, borderColor }) => ({
    p5MethodName : "circle",
    params : [x, y, diameter],
    fill : backgroundColor,
    stroke : !backgroundColor && !borderColor
      ? DEFAULT_STROKE_COLOR
      : borderColor
  }),
  "cubic-bezier" : ({ p0, p1, p2, p3, color }) => ({
    p5MethodName : "bezier",
    params : [p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y],
    fill : undefined,
    stroke : color || DEFAULT_STROKE_COLOR
  }),
  line : ({ p0, p1, color }) => ({
    p5MethodName : "line",
    params : [p0.x, p0.y, p1.x, p1.y],
    stroke : color || DEFAULT_STROKE_COLOR
  }),
  rect : ({ x, y, width, height, backgroundColor, borderColor }) => ({
    p5MethodName : "rect",
    params : [x, y, width, height || width],
    fill : backgroundColor,
    stroke : !backgroundColor && !borderColor
      ? DEFAULT_STROKE_COLOR
      : borderColor
  })
};


/**
 * @param {object} sketchDefinition
 * @returns {object}
 */
export default function sanitizeSketchDefinition(sketchDefinition) {
  return {
    settings : {
      ...DEFAULT_SETTINGS,
      ...sketchDefinition.settings
    },
    shapes : sketchDefinition.shapes.map(shape => SHAPES_MAP[shape.type](shape.params))
  };
}
