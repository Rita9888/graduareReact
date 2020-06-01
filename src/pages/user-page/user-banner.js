import React from "react";
import { Link } from "react-router-dom";
import FollowButton from "../../components/buttons/follow-button";
import "./user-banner.css";

const UserBanner = (profile) => {
  const { username, image, following } = profile;
  return (
    <div className="user-banner">
      <div className="user-info">
        <div className="col-xs-12 col-md-10 offset-md-1">
          <img className="user-img" src={image} />
          <h4>{username}</h4>
          <p></p>
          <FollowButton />
          <Link
            className="btn btn-sm action-btn btn-outline-secondary action-btn"
            to={"/settings"}
          >
            <i className="fa fa-cog fa-fw"></i>
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
