import PropTypes from "prop-types";
import React from "react";
import getClassNames from "../../helpers/getClassNames";
import isNumber from "../../helpers/isNumber";
import "./Button.css";

const defaultProps = {
  type : "default",
  tooltipPosition : "top"
};

const propTypes = {
  className : PropTypes.string,
  type : PropTypes.oneOf(["default", "primary", "ghost"]),
  isSubmitHtmlType : PropTypes.bool,
  disabled : PropTypes.bool,
  loading : PropTypes.bool,
  tooltip : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]),
  tooltipPosition : PropTypes.oneOf(["top", "right", "bottom", "left"]),
  style : PropTypes.shape({
    width : PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }),
  // Not required if the button is of type submit.
  onClick : PropTypes.func,
  children : PropTypes.node
};

function Button(props) {
  const {
    className : classNameFromProps,
    type,
    isSubmitHtmlType,
    tooltip,
    tooltipPosition,
    disabled,
    loading,
    onClick,
    children,
    style
  } = props;

  const shouldDisplayTooltip = !!tooltip || isNumber(tooltip);
  const isGhostType = type === "ghost";

  const className = getClassNames({
    Button : true,
    "Button--loading" : loading,
    "Button--default" : type === "default" && !isGhostType,
    "Button--primary" : type === "primary" && !isGhostType,
    "Button--with-tooltip" : shouldDisplayTooltip
  }, classNameFromProps);

  const tooltipClassName = getClassNames({
    Button__tooltip : true,
    [`Button__tooltip--${tooltipPosition}`] : true
  });

  return (
    <button
      type={isSubmitHtmlType ? "submit" : "button"}
      disabled={disabled}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
      {shouldDisplayTooltip && (
        <span className={tooltipClassName}>
          {tooltip}
        </span>
      )}
    </button>
  );
}

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
