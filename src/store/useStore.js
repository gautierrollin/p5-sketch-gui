import create from "zustand";
import getCookie from "../helpers/getCookie";
import initSketch from "./actions/initSketch";
import resetControlValues from "./actions/resetControlValues";
import setControlValue from "./actions/setControlValue";
import setSketchFilename from "./actions/setSketchFilename";
import toggleMenuSize from "./actions/toggleMenuSize";
import toggleMenuVisibility from "./actions/toggleMenuVisibility";

export default create(set => ({
  sketchFilename : getCookie("sketchFilename") || "sketch",
  sketch : undefined,
  controls : [],
  controlsState : {},
  controlsExport : undefined,
  menuState : {
    isVisible : true,
    isExpanded : false
  },
  initSketch : module => initSketch(module.getSketchDefinition, module.controls)(set),
  setSketchFilename : sketchFilename => setSketchFilename(sketchFilename)(set),
  setControlValue : (key, value) => setControlValue(key, value)(set),
  resetControlValues : () => resetControlValues()(set),
  toggleMenuVisibility : () => toggleMenuVisibility()(set),
  toggleMenuSize : () => toggleMenuSize()(set)
}));
