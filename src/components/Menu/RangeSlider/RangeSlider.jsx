import PropTypes from "prop-types";
import React from "react";
import getProgressBarStyles from "./getProgressBarStyles";
import "./RangeSlider.css";

const propTypes = {
  id : PropTypes.string.isRequired,
  value : PropTypes.number.isRequired,
  max : PropTypes.number.isRequired,
  min : PropTypes.number.isRequired,
  onChange : PropTypes.func.isRequired
};

function RangeSlider({ id, value, min, max, onChange }) {

  const handleChange = e => {
    onChange(parseInt(e.target.value, 10));
  };

  return (
    <div className="RangeSlider__container">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="RangeSlider__slider"
        onChange={handleChange}
        style={getProgressBarStyles((value * 100) / (max - min))}
      />
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        value={value}
        className="RangeSlider__input"
        onChange={handleChange}
      />
    </div>
  );
}

RangeSlider.propTypes = propTypes;

export default RangeSlider;
