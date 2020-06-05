import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonFollow,
  LikeButton,
  ButtonEditArticle,
  ButtonDeleteArticle,
} from "../../components/buttons";
import { connect } from "react-redux";
import "./article-page.css";

function AppArticleMeta(props) {
  const {
    username,
    image,
    following,
    favorited,
    favoritesCount,
    slug,
    createdAt,
    user,
  } = props;
  const currentUser = user.user;
  console.log(props);
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
      {currentUser.username === username && (
        <span>
          <ButtonEditArticle slug={slug} />
          <ButtonDeleteArticle slug={slug} />
        </span>
      )}
      {currentUser.username !== username && (
        <span>
          <ButtonFollow username={username} following={following} />
          <LikeButton
            favorite={favorited}
            favoriteCount={favoritesCount}
            slug={slug}
          />
        </span>
      )}
    </div>
  );
}

const mapStateToProps = ({ user: { user } }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(AppArticleMeta);
