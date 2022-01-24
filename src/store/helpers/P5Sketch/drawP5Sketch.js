/**
 * @param {P5} p5Instance
 * @param {object} sketchDefinition
 * @throws {Error}
 */
export default function drawP5Sketch(p5Instance, sketchDefinition) {
  if (!p5Instance) {
    throw new Error("ArgumentNullError: \"p5Instance\" is null or undefined.");
  }

  if (!sketchDefinition) {
    throw new Error("ArgumentNullError: \"sketchDefinition\" is null or undefined.");
  }

  sketchDefinition.shapes.forEach(({ p5MethodName, params, fill, stroke }) => {
    if (fill) {
      p5Instance.fill(fill);
    } else {
      p5Instance.noFill();
    }

    if (stroke) {
      p5Instance.stroke(stroke);
    } else {
      p5Instance.noStroke();
    }

    p5Instance[p5MethodName](...params);
  });
}
