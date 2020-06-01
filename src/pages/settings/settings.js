import React from "react";
import {
  userLoggedOut,
  userUpdate,
  userLoadError,
} from "../../actions/user-action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import UserstoreService from "../../service/userstore-service";
import ErrorList from "../../components/error-list";
import { Input, Textarea } from "../../components/form-tags";
import "./settings.css";
import Spinner from "../../components/spinner";

class Settings extends React.Component {
  state = {
    userData: this.props.user.user,
    password: "",
    updatingStatus: false,
    loading: false,
  };

  handleOnChaneImage = (value) => {
    let userData = this.state.userData;
    userData.image = value;
    this.setState({ userData });
  };

  handleOnChangeUserName = (value) => {
    let userData = this.state.userData;
    userData.username = value;
    this.setState({ userData });
  };

  handleOnUpdateShortDescription = (value) => {
    let userData = this.state.userData;
    userData.bio = value;
    this.setState({ userData });
  };

  handleOnUpdateEmail = (value) => {
    let userData = this.state.userData;
    userData.email = value;
    this.setState({ userData });
  };

  handleOnUpdatePassword = (value) => {
    let userData = this.state.userData;
    userData.password = value;
    this.setState({ password: value });
    this.setState({ userData });
  };

  handleUpdateUserSettings(event) {
    this.setState({ loading: true });
    event.preventDefault();
    const userData = this.props.user.user;
    UserstoreService.putUser({ user: userData })
      .then((response) => {
        this.props.userUpdate(response);
        this.setState({
          updatingStatus: true,
        });
      })
      .catch((error) => {
        this.props.userLoadError(error.errors);
      });
  }

  render() {
    const { userLoggedOut, token, error } = this.props;
    const { userData, updatingStatus, loading } = this.state;
    if (!token) {
      return <Redirect to="/" />;
    }
    if (updatingStatus) {
      return <Redirect to={`/profile/${userData.username}`} />;
    }
    if (loading) {
      return <Spinner />;
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
              <Input
                className="settings_input"
                placeholder="URL of profile picture"
                name="settings_image"
                value={userData.image}
                handler={this.handleOnChaneImage}
              />
              <Input
                className="settings_username"
                placeholder="Username"
                name="settings_username"
                value={userData.username}
                handler={this.handleOnChangeUserName}
              />
              <Textarea
                className="settings_short_descr"
                placeholder="Short bio about you"
                name="settings_textarea"
                value={userData.bio}
                handler={this.handleOnUpdateShortDescription}
              />
              <Input
                className="settings_email"
                placeholder="Email"
                type="email"
                name="settings_email"
                value={userData.email}
                handler={this.handleOnUpdateEmail}
              />
              <Input
                className="settings_input"
                placeholder="New Password"
                type="password"
                name="settings_password"
                value={this.state.password}
                handler={this.handleOnUpdatePassword}
              />
              <button
                className="btn btn-primary btn-lg pull-xs-right"
                type="submit"
                onClick={(event) => this.handleUpdateUserSettings(event)}
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
    userUpdate: (user) => dispatch(userUpdate(user)),
    userLoggedOut: () => dispatch(userLoggedOut()),
    userLoadError: (e) => dispatch(userLoadError(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
