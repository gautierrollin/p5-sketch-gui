function getTypeFromValue(value) {
  if (typeof value === "number") {
    return "number";
  }

  if (value.startsWith("#") || value.startsWith("rgb")) {
    return "color";
  }

  return "string";
}

export default function sanitizeControls(controls) {
  return Object.entries(controls).map(([key, value]) => {
    let control = { key };

    if (value.value) {
      control = {
        ...control,
        ...value,
        defaultValue : value.value
      };
    } else {
      control = {
        ...control,
        defaultValue : value
      };
    }

    if (control.value) {
      // Renamed to `defaultValue`.
      delete control.value;
    }

    const type = getTypeFromValue(control.defaultValue);
    control = {
      ...control,
      type
    };

    if (type === "number") {
      return {
        ...control,
        min : control.min || 0,
        max : control.max || 1000
      };
    }

    return control;
  });
}
