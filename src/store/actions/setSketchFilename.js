import setCookie from "../../helpers/setCookie";

/**
 * @param {string} sketchFilename
 * @returns {function}
 * @throws {Error}
 */
export default function setSketchFilename(sketchFilename) {
  if (!sketchFilename) {
    throw new Error("ArgumentNullError: \"sketchFilename\" is null or undefined.");
  }

  setCookie("sketchFilename", sketchFilename);

  return set => set(currentState => ({
    ...currentState,
    sketchFilename
  }));
}
