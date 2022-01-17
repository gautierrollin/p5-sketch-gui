import PropTypes from "prop-types";
import React from "react";
import getClassNames from "../../helpers/getClassNames";
import "./Button.css";

const propTypes = {
  children : PropTypes.node.isRequired,
  className : PropTypes.string,
  isSubmitType : PropTypes.bool,
  disabled : PropTypes.bool,
  loading : PropTypes.bool,
  onClick : PropTypes.func
};

function Button(props) {
  const {
    className : classNameFromProps,
    isSubmitType,
    disabled,
    loading,
    onClick,
    children
  } = props;

  const className = getClassNames({
    Button : true,
    "Button--loading" : loading
  }, classNameFromProps);

  return (
    <button
      type={isSubmitType ? "submit" : "button"}
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
