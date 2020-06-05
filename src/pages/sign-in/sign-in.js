import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userLoad, errorClearing } from "../../actions/user-action";
import ErrorList from "../../components/error-list";
import Spinner from "../../components/spinner";
import "./sign-in.css";

class SignIn extends React.Component {
  state = {
    email: "test",
    password: "testP",
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onLoadUser = () => {
    this.props.userLoad(this.state);
  };
  //добавить очистку списка ошибок и обработчик загрузки
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
        <h1>Sign In</h1>
        <p>
          <Link to={"/register"}>Need an account?</Link>
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
              onClick={this.onLoadUser}
              type="submit"
              className="btn btn-lg btn-primary pull-xs-right"
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
    userLoad: (user) => dispatch(userLoad(user)),
    errorClearing: () => dispatch(errorClearing()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
