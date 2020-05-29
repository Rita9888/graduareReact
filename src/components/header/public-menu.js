import React from "react";
import { Link } from "react-router-dom";

const PublicMenu = () => {
  return (
    <ul className="nav pull-xs-right">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fa fa-home fa-fw"></i>Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Sign in
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign up
        </Link>
      </li>
    </ul>
  );
};

export default PublicMenu;
