import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../../buttons/like-button";
import "./article-list-item.css";

const ArticleListItem = ({ article }) => {
  const {
    title,
    author,
    slug,
    createdAt,
    description,
    favoritesCount,
    favorited,
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
          <LikeButton
            favorite={favorited}
            favoriteCount={favoritesCount}
            slug={slug}
            text={"like"}
          />
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
