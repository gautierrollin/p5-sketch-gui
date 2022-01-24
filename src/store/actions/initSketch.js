import P5Sketch from "../helpers/P5Sketch";
import sanitizeControls from "../helpers/sanitizeControls";

/**
 * @param {function} getSketchDefinition
 * @param {Object?} controls
 * @returns {function}
 * @throws {Error}
 */
export default function initSketch(getSketchDefinition, controls = {}) {
  if (!getSketchDefinition) {
    throw new Error("ArgumentNullError: \"getSketchDefinition\" is null or undefined.");
  }

  const sanitizedControls = sanitizeControls(controls);

  return set => set(currentState => ({
    ...currentState,
    sketch : new P5Sketch(getSketchDefinition),
    controlsExport : controls,
    controls : sanitizedControls,
    controlsState : sanitizedControls.reduce((accu, control) => ({
      ...accu,
      [control.key] : control.defaultValue
    }), {})
  }));
}
