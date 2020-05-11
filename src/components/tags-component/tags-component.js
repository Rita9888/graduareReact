import React from "react";

import "./tags-component.css";

const TagsComponent = ({ tags }) => {
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {tags.map((tag, index) => {
          return (
            <a className="tag-default tag-pill" key={index} href="#">
              {tag}
            </a>
          );
        })}
      </div>
    </div>
  );
};

/* const mapStateToProps = ({ loading }) => {
  return {
    loading,
  };
}; */

export default TagsComponent;
