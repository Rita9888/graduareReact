import React from "react";
import { Link } from "react-router-dom";

export function ButtonDeleteArticle(props) {
  return (
    <button className="btn btn-sm btn-outline-danger">
      <i className="trash"></i>
      Delete Article
    </button>
  );
}
