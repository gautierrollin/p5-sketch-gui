import React, { useEffect, useRef } from "react";
import useStore from "../../store/useStore";
import "./Sketch.css";

function Sketch() {
  const sketch = useStore(state => state.sketch);
  const controlsState = useStore(state => state.controlsState);
  const menuState = useStore(state => state.menuState);
  const containerRef = useRef();

  const handleResize = () => {
    const canvas = containerRef.current.children[0];
    if (!canvas) {
      return;
    }

    canvas.classList.add("Sketch__canvas");

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    canvas.classList[containerWidth < canvas.width ? "add" : "remove"]("Sketch__canvas--auto-height");
    canvas.classList[containerHeight < canvas.height ? "add" : "remove"]("Sketch__canvas--auto-width");
  };

  useEffect(() => {
    setTimeout(() => handleResize(), 0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sketch, controlsState, menuState.isVisible, menuState.isExpanded]);

  useEffect(() => {
    if (sketch) {
      sketch.createOrUpdate(controlsState, containerRef.current);
    }

    return () => {
      if (sketch) {
        sketch.delete();
      }
    };
  }, [sketch, controlsState]);

  return (
    <div
      ref={containerRef}
      className="Sketch__container"
    />
  );
}

export default Sketch;
