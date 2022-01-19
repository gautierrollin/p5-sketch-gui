import React from "react";
import getClassNames from "../../helpers/getClassNames";
import useStore from "../../store/useStore";
import Button from "../Button";
import Control from "./Control";
import ExportButton from "./ExportButton";
import SketchFilenameForm from "./SketchFilenameForm";
import "./Menu.css";

function Menu() {
  const controls = useStore(state => state.controls);
  const controlsState = useStore(state => state.controlsState);
  const { isVisible, isExpanded } = useStore(state => state.menuState);
  const toggleMenuVisibility = useStore(state => state.toggleMenuVisibility);
  const toggleMenuSize = useStore(state => state.toggleMenuSize);

  const contentClassName = getClassNames({
    Menu__content : true,
    "Menu__content--expanded" : isExpanded
  });

  return (
    <div className="Menu__container">
      <div className="Menu__actions">
        <Button
          type="primary"
          className="Menu__action"
          onClick={toggleMenuVisibility}
        >
          {isVisible ? "x" : "="}
        </Button>
        {isVisible && (
          <Button
            type="primary"
            className="Menu__action"
            onClick={toggleMenuSize}
          >
            {isExpanded ? "-" : "+"}
          </Button>
        )}
      </div>
      {isVisible && (
        <div className={contentClassName}>
          <SketchFilenameForm />
          {controls.map(control => (
            <div
              key={control.key}
              className="Menu__item"
            >
              <label
                className="Menu__label"
                htmlFor={control.key}
              >
                {control.key}
              </label>
              <Control
                id={control.key}
                type={control.type}
                value={controlsState[control.key]}
                min={control.min}
                max={control.max}
              />
            </div>
          ))}
          <div className="Menu__footer">
            <ExportButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
