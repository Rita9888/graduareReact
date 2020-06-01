import React from "react";
import { Link } from "react-router-dom";

export default function ButtonEditArticle(props) {
  return (
    <Link
      className="btn btn-sm btn-outline-secondary"
      to={`/editor/${props.slug}`}
    >
      <i className="edit"></i>Edit Article
    </Link>
  );
}
