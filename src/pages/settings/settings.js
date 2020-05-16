import React from "react";
import "./settings.css";

class Settings extends React.Component {
  render() {
    return (
      <div className="settings-page">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Your Settings</h1>
          <app-list-errors></app-list-errors>
          <form className="ng-untouched ng-pristine ng-valid">
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="URL of profile picture"
                  type="text"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="Username"
                  type="text"
                  formcontrolname="username"
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control form-control-lg ng-untouched ng-pristine ng-valid"
                  placeholder="Short bio about you"
                  rows="8"
                  formcontrolname="bio"
                ></textarea>
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="Email"
                  type="email"
                  formcontrolname="email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="New Password"
                  type="password"
                  formcontrolname="password"
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
          <button className="btn btn-outline-danger">
            Or click here to logout.
          </button>
        </div>
      </div>
    );
  }
}

export default Settings;
