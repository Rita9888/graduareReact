import React from "react";
import { Link } from "react-router-dom";
import ButtonFollow from "../../components/buttons/follow-button";
import LikeButton from "../../components/buttons/like-button";
import "./article-page.css";

const AppArticleMeta = (user, article) => {
  const { username, image, following } = user;
  const { favorite, favoriteCount, slug } = article;
  console.log(article);
  return (
    <div className="article-meta">
      <Link to={`/profile/${username}`}>
        <img src={image} />
      </Link>
      <div className="info">
        <Link className="author" to={`/profile/${username}`}>
          {username}
        </Link>
        <span className="date"></span>
        <ButtonFollow username={username} following={following} />
        <LikeButton
          favorite={favorite}
          favoriteCount={favoriteCount}
          slug={slug}
        />
      </div>
    </div>
  );
};

export default AppArticleMeta;
