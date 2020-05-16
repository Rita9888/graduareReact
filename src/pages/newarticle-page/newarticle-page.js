import React from "react";

class NewArticlePage extends React.Component {
  render() {
    return (
      <div className="editor-page">
        <div className="col-md-10 offset-md-1 col-xs-12">
          <app-list-errors></app-list-errors>
          <form className="ng-untouched ng-pristine ng-valid">
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="Article Title"
                  type="text"
                  formcontrolname="title"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="What's this article about?"
                  type="text"
                  formcontrolname="description"
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="Write your article (in markdown)"
                  rows="8"
                  formcontrolname="body"
                ></textarea>
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control ng-untouched ng-pristine ng-valid"
                  placeholder="Enter tags"
                  type="text"
                />
              </fieldset>
              <button
                className="btn btn-primary btn-lg pull-xs-right"
                type="submit"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default NewArticlePage;
