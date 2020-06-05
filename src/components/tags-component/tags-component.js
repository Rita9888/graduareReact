import React from "react";
import { Link } from "react-router-dom";
import "./tags-component.css";

const TagsComponent = ({ tags, sortByTag }) => {
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {tags.map((tag, index) => (
          <Link
            onClick={() => {
              sortByTag(tag);
            }}
            className="tag-default tag-pill"
            key={index}
            to="/"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsComponent;
