import React from "react";

const Row = ({ center }) => {
  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-12">{center}</div>
      </div>
    </div>
  );
};

export default Row;
