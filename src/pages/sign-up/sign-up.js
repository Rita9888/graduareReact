import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userRegistration, errorClearing } from "../../actions/user-action";
import ErrorList from "../../components/error-list";
import Spinner from "../../components/spinner";
import "./sign-up.css";

class SignUp extends React.Component {
  state = {
    username: "",
    email: "test",
    password: "testP",
  };

  onCHangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onLoadUser = () => {
    this.props.userRegistration(this.state);
  };

  render() {
    const { loading, error, errorClearing, token } = this.props;
    if (token) {
      return <Redirect to="/" />;
    }
    if (loading && !Object.keys(error).length)
      return (
        <div className="container d-flex wrapper">
          <Spinner />
        </div>
      );
    return (
      <div className="col-md-6 offset-md-3 col-xs-12 col-12 mt-5 text-center">
        <h1>Sign Up</h1>
        <p>
          <Link to={"/login"}>Have an account?</Link>
        </p>
        <div>
          {Object.keys(error).length ? <ErrorList errors={error} /> : null}
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="ng-untoched ng-pristine ng-invalid"
        >
          <fieldset>
            <fieldset className="form-group ">
              <input
                type="text"
                className="form-control form-control-lg ng-untouched ng-pristine ng-invalid"
                placeholder="Username"
                onChange={this.onCHangeUsername}
              />
            </fieldset>
            <fieldset className="form-group ">
              <input
                type="email"
                className="form-control form-control-lg ng-untouched ng-pristine ng-invalid"
                placeholder="Email"
                onChange={this.onChangeEmail}
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                type="password"
                className="form-control form-control-lg ng-untouched ng-pristine ng-invalid"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </fieldset>
            <button
              type="submit"
              className="btn btn-lg btn-primary pull-xs-right"
              onClick={this.onLoadUser}
              // disabled
            >
              Sign in
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { user, loading, error, token } }) => {
  return {
    user,
    loading,
    error,
    token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRegistration: (user) => dispatch(userRegistration(user)),
    errorClearing: () => dispatch(errorClearing()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
