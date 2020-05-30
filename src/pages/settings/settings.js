import React from "react";
import { userLoggedOut } from "../../actions/user-action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ErrorList from "../../components/error-list";
import "./settings.css";

class Settings extends React.Component {
  state = {
    username: this.props.user.user.username,
  };
  render() {
    const { userLoggedOut, token, user, error } = this.props;
    const userData = user.user;
    console.log(userData);
    if (!token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="settings-page">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Your Settings</h1>
          <div>
            {Object.keys(error).length ? <ErrorList errors={error} /> : null}
          </div>
          <form className="ng-untouched ng-pristine ng-valid">
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="URL of profile picture"
                  type="text"
                  value={userData.image}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="Username"
                  type="text"
                  value={userData.username}
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control form-control-lg ng-untouched ng-pristine ng-valid"
                  placeholder="Short bio about you"
                  rows="8"
                  value={userData.bio}
                ></textarea>
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="Email"
                  type="email"
                  value={userData.email}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="New Password"
                  type="password"
                />
              </fieldset>
              <button
                className="btn btn-primary btn-lg pull-xs-right"
                type="submit"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button
            className="btn btn-outline-danger"
            onClick={() => userLoggedOut()}
          >
            Or click here to logout.
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { token, user, error } }) => {
  return {
    token,
    user,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoggedOut: () => dispatch(userLoggedOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
