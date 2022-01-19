import React from "react";
import useStore from "../../../store/useStore";
import Button from "../../Button";
import "./ResetButton.css";

function ResetButton() {
  const onClick = useStore(state => state.resetControlValues);

  return (
    <Button
      className="ResetButton"
      onClick={onClick}
    >
      Reset
    </Button>
  );
}

export default ResetButton;
