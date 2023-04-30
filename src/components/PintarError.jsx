import React from "react";

const PintarError = ({ textoValidacion }) => {
  const { error, alert } = textoValidacion;
  return (
    <div className="mt-4">
      <div className={`alert ${alert}`}>{error}</div>
    </div>
  );
};

export default PintarError;
