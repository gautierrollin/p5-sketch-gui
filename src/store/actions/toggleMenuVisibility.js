/**
 * @returns {function}
 */
export default function toggleMenuVisibility() {
  return set => set(currentState => ({
    ...currentState,
    menuState : {
      ...currentState.menuState,
      isVisible : !currentState.menuState.isVisible
    }
  }));
}
