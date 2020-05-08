import React from "react";
import "./article-list-item.css";

const ArticleListItem = ({ article }) => {
  const {
    title,
    author,
    slug,
    body,
    createdAt,
    updatedAt,
    description,
  } = article;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="#">
          <img src={author.image} />
        </a>
        <div className="info">
          <a href="#" className="author">
            {author.username}
          </a>
          <span className="date">{updatedAt}</span>
        </div>
        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">like</button>
        </div>
      </div>
      <a className="preview-link" href="#">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list"></ul>
      </a>
    </div>
  );
};

export default ArticleListItem;
