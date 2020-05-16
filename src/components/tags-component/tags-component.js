import React from "react";

import "./tags-component.css";

const TagsComponent = ({ tags, sortByTag }) => {
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {tags.map((tag, index) => (
          <a
            onClick={() => {
              sortByTag(tag);
            }}
            className="tag-default tag-pill"
            key={index}
            href="!#"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TagsComponent;
