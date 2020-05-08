import React from "react";

const ContainerPage = ({ left, right }) => {
  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">{left}</div>
        <div className="col-md-3">{right}</div>
      </div>
    </div>
  );
};

export default ContainerPage;
