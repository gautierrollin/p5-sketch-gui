/**
 * @returns {function}
 */
export default function toggleMenuSize() {
  return set => set(currentState => ({
    ...currentState,
    menuState : {
      ...currentState.menuState,
      isExpanded : !currentState.menuState.isExpanded
    }
  }));
}
