import React, { useState } from "react";
import useStore from "../../../store/useStore";
import Button from "../../Button";

function cleanJson(json) {
  return json.replaceAll(":", " :");
}

function ExportButton() {
  const controlsExport = useStore(state => state.controlsExport);
  const [loading, setLoading] = useState(false);

  const copyToClipboard = async () => {
    setLoading(true);
    await navigator.clipboard.writeText(cleanJson(JSON.stringify(controlsExport, null, 2)));
    setLoading(false);
  };

  return (
    <Button
      disabled={loading}
      loading={loading}
      onClick={copyToClipboard}
    >
      Export
    </Button>
  );
}

export default ExportButton;
