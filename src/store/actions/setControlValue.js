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
    controlsState : {
      ...currentState.controlsState,
      [key] : value
    },
    controlsExport : {
      ...currentState.controlsExport,
      // If the user has already used an object to define this control, keep it.
      [key] : currentState.controlsExport[key].value ? {
        ...currentState.controlsExport[key],
        value
      } : value
    }
  }));
}
