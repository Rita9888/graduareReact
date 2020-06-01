import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonFollow,
  LikeButton,
  ButtonEditArticle,
} from "../../components/buttons";
import "./article-page.css";

export default function AppArticleMeta(props) {
  console.log(props);
  const {
    username,
    image,
    following,
    favorite,
    favoriteCount,
    slug,
    createdAt,
  } = props;
  return (
    <div className="article-meta">
      <Link to={`/profile/${username}`}>
        <img src={image} />
      </Link>
      <div className="info">
        <Link className="author" to={`/profile/${username}`}>
          {username}
        </Link>
        <span className="date">{createdAt}</span>
      </div>
      <span>
        <ButtonEditArticle slug={slug} />
        {/* <ButtonDeleteArticle /> */}
      </span>
      <span>
        <ButtonFollow username={username} following={following} />
        <LikeButton
          favorite={favorite}
          favoriteCount={favoriteCount}
          slug={slug}
        />
      </span>
    </div>
  );
}
