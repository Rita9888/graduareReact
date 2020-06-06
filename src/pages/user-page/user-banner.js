import React from "react";
import { Link } from "react-router-dom";
import ButtonFollow from "../../components/buttons/follow-button";
import { connect } from "react-redux";
import "./user-banner.css";

function UserBanner({ user, profile }) {
  const { username, image, following } = profile;
  const currentUser = user.user;
  return (
    <div className="user-banner">
      <div className="user-info">
        <div className="col-xs-12 col-md-10 offset-md-1">
          <img className="user-img" src={image} />
          <h4>{username}</h4>
          <p></p>
          {currentUser.username !== username && (
            <ButtonFollow username={username} following={following} />
          )}

          {currentUser.username === username && (
            <Link
              className="btn btn-sm action-btn btn-outline-secondary action-btn"
              to={"/settings"}
            >
              <i className="fa fa-cog fa-fw"></i>
              Settings
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ user: { user } }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(UserBanner);
