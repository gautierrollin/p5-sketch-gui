/**
 * @param {string} key
 * @param {string|number} value
 * @returns {function}
 * @throws {Error}
 */
export default function setControlValue(key, value) {
  if (!key) {
    throw new Error("ArgumentNullError: \"key\" is null or undefined.");
  }

  if (value === null || value === undefined) {
    throw new Error("ArgumentNullError: \"value\" is null or undefined.");
  }

  return set => set(currentState => ({
    ...currentState,
    controls : currentState.controls.map(control => (
      control.key === key ? {
        ...control,
        value
      } : control
    )),
    controlsState : {
      ...currentState.controlsState,
      [key] : value
    },
    controlsExport : {
      ...currentState.controlsExport,
      [key] : {
        ...currentState.controlsExport[key],
        value
      }
    }
  }));
}
