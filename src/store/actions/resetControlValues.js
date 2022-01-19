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
      controlsExport : Object.entries(currentState.controlsExport).reduce((accu, [key, value]) => {
        if (value.value) {
          return {
            ...accu,
            [key] : {
              ...value,
              value : controlsState[key]
            }
          };
        }

        return {
          ...accu,
          [key] : controlsState[key]
        };
      }, {})
    };
  });
}
