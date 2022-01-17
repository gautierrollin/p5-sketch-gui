import PropTypes from "prop-types";
import React from "react";
import getClassNames from "../../../helpers/getClassNames";
import "./ColorInput.css";

const WHITE_MAP = ["white", "rgb(255, 255, 255)", "#fff", "#FFF", "#ffffff", "#FFFFFF"];

const propTypes = {
  id : PropTypes.string.isRequired,
  value : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired
};

function ColorInput({ id, value, onChange }) {

  const pickerClassName = getClassNames({
    ColorInput__picker : true,
    "ColorInput__picker--bordered" : WHITE_MAP.some(v => v === value)
  });

  return (
    <div className="ColorInput__container">
      <input
        id={id}
        type="color"
        value={value}
        className={pickerClassName}
        onChange={e => onChange(e.target.value)}
      />
      <input
        type="text"
        value={value}
        className="ColorInput__input"
        onChange={e => onChange(`#${e.target.value.replaceAll("#", "")}`)}
      />
    </div>
  );
}

ColorInput.propTypes = propTypes;

export default ColorInput;
