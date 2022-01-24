import P5 from "p5";
import drawP5Sketch from "./drawP5Sketch";
import sanitizeSketchDefinition from "./sanitizeSketchDefinition";
import setupP5Sketch from "./setupP5Sketch";

/**
 * Wraps P5 library.
 */
export default class P5Sketch {

  #p5Instance;
  #getSketchDefinition;

  /**
   * @public
   * @param {function} getSketchDefinition
   * @throws {Error}
   */
  constructor(getSketchDefinition) {
    if (!getSketchDefinition) {
      throw new Error("ArgumentNullError: \"getSketchDefinition\" is null or undefined.");
    }

    /**
     * @private
     * @type {function}
     */
    this.#getSketchDefinition = getSketchDefinition;
  }

  /**
   * @public
   * @param {object} state
   * @param {HTMLElement?} parentElement
   * @throws {Error}
   */
  createOrUpdate(state, parentElement) {
    if (!state) {
      throw new Error("ArgumentNullError: \"state\" is null or undefined.");
    }

    if (!parentElement) {
      throw new Error("ArgumentNullError: \"parentElement\" is null or undefined.");
    }

    const sketchDefinition = sanitizeSketchDefinition(this.#getSketchDefinition(state));

    this.#p5Instance = new P5(
      p5Instance => {
        p5Instance.setup = () => setupP5Sketch(p5Instance, sketchDefinition);
        p5Instance.draw = () => drawP5Sketch(p5Instance, sketchDefinition);
      },
      parentElement
    );
  }

  /**
   * @public
   * @throws {Error}
   */
  delete() {
    if (!this.#p5Instance) {
      throw new Error("InvalidOperationError: P5 instance undefined.");
    }

    this.#p5Instance.remove();
    this.#p5Instance = undefined;
  }

}
