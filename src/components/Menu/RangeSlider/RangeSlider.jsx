import PropTypes from "prop-types";
import React from "react";
import isNumber from "../../../helpers/isNumber";
import Button from "../../Button";
import getProgressBarStyles from "./getProgressBarStyles";
import "./RangeSlider.css";

const SLIDER_WIDTH = 75; // In percent.

const propTypes = {
  id : PropTypes.string.isRequired,
  value : PropTypes.number.isRequired,
  max : PropTypes.number.isRequired,
  min : PropTypes.number.isRequired,
  onChange : PropTypes.func.isRequired,
  defaultValue : PropTypes.number
};

function RangeSlider({ id, value, defaultValue, min, max, onChange }) {
  const shouldDisplayDefaultValueIndicator = isNumber(defaultValue) && defaultValue !== value;

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
      {shouldDisplayDefaultValueIndicator && (
        <Button
          tooltip={defaultValue}
          type="ghost"
          className="RangeSlider__default-value-indicator"
          onClick={() => onChange(defaultValue)}
          style={{
            left : `${(defaultValue * SLIDER_WIDTH) / (max - min)}%`
          }}
        />
      )}
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
