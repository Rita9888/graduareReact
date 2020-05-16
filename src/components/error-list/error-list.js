import React from "react";
import "./error-list.css";

const ErrorList = ({ errors }) => {
  return (
    <ul className="error-messages">
      {Object.entries(errors).map((entry, index) => (
        <li key={index}>{`${entry[0]} ${entry[1].reduce(
          (key, value) => `${key} ${value}`
        )}`}</li>
      ))}
    </ul>
  );
};

export default ErrorList;
