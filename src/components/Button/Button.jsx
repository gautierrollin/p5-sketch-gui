import PropTypes from "prop-types";
import React from "react";
import getClassNames from "../../helpers/getClassNames";
import "./Button.css";

const propTypes = {
  children : PropTypes.node.isRequired,
  className : PropTypes.string,
  type : PropTypes.oneOf(["default", "primary"]),
  isSubmitHtmlType : PropTypes.bool,
  disabled : PropTypes.bool,
  loading : PropTypes.bool,
  onClick : PropTypes.func
};

function Button(props) {
  const {
    className : classNameFromProps,
    type,
    isSubmitHtmlType,
    disabled,
    loading,
    onClick,
    children
  } = props;

  const className = getClassNames({
    Button : true,
    "Button--loading" : loading,
    "Button--primary" : type === "primary"
  }, classNameFromProps);

  return (
    <button
      type={isSubmitHtmlType ? "submit" : "button"}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
