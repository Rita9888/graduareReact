import React from "react";
import { Input, Textarea } from "../../components/form-tags";

class NewArticlePage extends React.Component {
  render() {
    return (
      <div className="editor-page">
        <div className="col-md-10 offset-md-1 col-xs-12">
          <app-list-errors></app-list-errors>
          <form className="ng-untouched ng-pristine ng-valid">
            <fieldset>
              <fieldset className="form-group">
                <Input className="editor-input" placeholder="Article Title" />
              </fieldset>
              <fieldset className="form-group">
                <Input
                  className="editor-input"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset className="form-group">
                <Textarea
                  className="editor-textarea"
                  placeholder="Write your article (in markdown)"
                  rows="8"
                />
              </fieldset>

              <fieldset className="form-group">
                <Input className="editor-input" placeholder="Enter tags" />
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
