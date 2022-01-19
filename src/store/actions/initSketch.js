import sanitizeControls from "../helpers/sanitizeControls";

/**
 * @param {function} sketch
 * @param {Object?} controls
 * @returns {function}
 * @throws {Error}
 */
export default function initSketch(sketch, controls = {}) {
  if (!sketch) {
    throw new Error("ArgumentNullError: \"sketch\" is null or undefined.");
  }

  const sanitizedControls = sanitizeControls(controls);

  return set => set(currentState => ({
    ...currentState,
    sketch,
    controlsExport : controls,
    controls : sanitizedControls,
    controlsState : sanitizedControls.reduce((accu, control) => ({
      ...accu,
      [control.key] : control.defaultValue
    }), {})
  }));
}
