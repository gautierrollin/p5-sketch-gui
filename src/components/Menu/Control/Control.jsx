import PropTypes from "prop-types";
import React from "react";
import useStore from "../../../store/useStore";
import ColorInput from "../ColorInput";
import RangeSlider from "../RangeSlider";

const COMPONENT_MAP = {
  color : ColorInput,
  number : RangeSlider
};

const propTypes = {
  id : PropTypes.string.isRequired,
  type : PropTypes.string.isRequired,
  value : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  min : PropTypes.number,
  max : PropTypes.number
};

function Control({ id, type, value, min, max }) {
  const setControlValue = useStore(state => state.setControlValue);
  const Component = COMPONENT_MAP[type];

  return (
    <Component
      id={id}
      value={value}
      min={min}
      max={max}
      onChange={v => setControlValue(id, v)}
    />
  );
}

Control.propTypes = propTypes;

export default Control;
