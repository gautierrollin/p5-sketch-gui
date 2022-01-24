/**
 * @param {P5} p5Instance
 * @param {object} sketchDefinition
 * @throws {Error}
 */
export default function setupP5Sketch(p5Instance, sketchDefinition) {
  if (!p5Instance) {
    throw new Error("ArgumentNullError: \"p5Instance\" is null or undefined.");
  }

  if (!sketchDefinition) {
    throw new Error("ArgumentNullError: \"sketchDefinition\" is null or undefined.");
  }

  p5Instance.createCanvas(sketchDefinition.settings.width, sketchDefinition.settings.height);
  p5Instance.background(sketchDefinition.settings.backgroundColor);
  p5Instance.angleMode(p5Instance.DEGREES);
  p5Instance.noLoop();
}
