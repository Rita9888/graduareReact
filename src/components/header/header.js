import React from "react";
import { Link } from "react-router-dom";
import PublicMenu from "./public-menu";
import PrivateMenu from "./private-menu";
import { connect } from "react-redux";
import "./header.css";

const Header = ({ token }) => {
  console.log(token);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>
        {token && <PrivateMenu />}
        {!token && <PublicMenu />}
      </div>
    </nav>
  );
};

const mapStateToProps = ({ user: { token } }) => {
  return {
    token,
  };
};

export default connect(mapStateToProps)(Header);
