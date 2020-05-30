import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const PrivateMenu = ({ user }) => {
  return (
    <ul className="nav pull-xs-right">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fa fa-home fa-fw"></i>Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/editor">
          <i className="fa fa-pencil fa-fw"></i>New article
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/settings">
          <i className="fa fa-cog fa-fw"></i>
          Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/profile/${user.user.username}`}>
          <i className="fa fa-user fa-fw"></i>
          {user.user.username}
        </Link>
      </li>
    </ul>
  );
};

const mapStateToProps = ({ user: { user } }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(PrivateMenu);
