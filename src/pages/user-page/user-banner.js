import React from "react";
import Spinner from "../../components/spinner";
import "./user-banner.css";

const UserBanner = (profile) => {
  const { username, image, following } = profile;
  return (
    <div className="user-info">
      <div className="col-xs-12 col-md-10 offset-md-1">
        <img className="user-img" src={image} />
        <h4>{username}</h4>
        <p></p>
        <app-follow-button></app-follow-button>
        <a
          className="btn btn-sm action-btn btn-outline-secondary action-btn"
          href="/settings"
        >
          Settings
        </a>
      </div>
    </div>
  );
};

export default UserBanner;
