import React, { useEffect, useState } from "react";
import getClassNames from "../../../helpers/getClassNames";
import useStore from "../../../store/useStore";
import Button from "../../Button/Button";
import "./SketchFilenameForm.css";

function SketchFilenameForm() {
  const sketchFilename = useStore(state => state.sketchFilename);
  const initSketch = useStore(state => state.initSketch);
  const setSketchFilename = useStore(state => state.setSketchFilename);

  const [value, setValue] = useState(sketchFilename);
  const [fileNotFound, setFileNotFound] = useState(false);

  useEffect(() => {
    import(`../../../sketches/${sketchFilename}.js`)
      .then(initSketch)
      .catch(err => {
        setFileNotFound(true);
        throw err;
      });
  }, [sketchFilename, initSketch]);

  const handleSubmit = e => {
    e.preventDefault();

    if (value !== "") {
      setSketchFilename(value);
    }
  };

  const hanleChange = e => {
    setFileNotFound(false);
    setValue(e.target.value);
  };

  const inputClassName = getClassNames({
    SketchFilenameForm__input : true,
    "SketchFilenameForm__input--error" : fileNotFound
  });

  return (
    <form
      className="SketchFilenameForm__container"
      onSubmit={handleSubmit}
    >
      <input
        value={value}
        placeholder="Sketch filename"
        className={inputClassName}
        required
        onChange={hanleChange}
      />
      <Button
        type="primary"
        isSubmitHtmlType
      >
        Load
      </Button>
    </form>
  );
}

export default SketchFilenameForm;
