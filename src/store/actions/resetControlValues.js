/**
 * @returns {function}
 * @throws {Error}
 */
export default function resetControlValues() {
  return set => set(currentState => {
    const controlsState = currentState.controls.reduce((accu, control) => ({
      ...accu,
      [control.key] : control.defaultValue
    }), {});

    return {
      ...currentState,
      controlsState,
      controlsExport : Object.entries(currentState.controlsExport).reduce((accu, [key, value]) => ({
        ...accu,
        // If the user has already used an object to define this control, keep it.
        [key] : value.value ? {
          ...value,
          value : controlsState[key]
        } : controlsState[key]
      }), {})
    };
  });
}
