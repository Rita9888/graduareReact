import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={`/profile/${author.username}`}>
          <img src={author.image} />
        </Link>
        <div className="info">
          <Link to={`/profile/${author.username}`} className="author">
            {author.username}
          </Link>
          <span className="date">{createdAt}</span>
        </div>
        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">like</button>
        </div>
      </div>
      <Link className="preview-link" to={`/article/${slug}`}>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list"></ul>
      </Link>
    </div>
  );
};

export default ArticleListItem;
