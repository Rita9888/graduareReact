import React from "react";
import { Input, Textarea } from "../../components/form-tags";
import { withArticlestoreService } from "../../components/hoc/with-articlestore-service";
import ErrorList from "../../components/error-list";
import Spinner from "../../components/spinner";
import { articleLoadError } from "../../actions/article-cart";
import { connect } from "react-redux";
import compose from "../../utils/compose";
import { Redirect } from "react-router-dom";

class NewArticlePage extends React.Component {
  state = {
    loading: false,
    article: {},
    updatingStatus: false,
    slug: this.props,
  };

  componentDidMount() {
    const { articlestoreService, slug } = this.props;
    if (slug) {
      articlestoreService
        .getArticle(slug)
        .then((data) => this.setState({ article: data }))
        .catch((e) => console.error(e));
    }
  }

  handleOnChangeTitle = (value) => {
    let article = this.state.article;
    article.title = value;
    this.setState({ article });
  };

  handleOnChangeDescription = (value) => {
    let article = this.state.article;
    article.description = value;
    this.setState({ article });
  };

  handleOnChangeBody = (value) => {
    let article = this.state.article;
    article.body = value;
    this.setState({ article });
  };

  handleOnChangeTagList = (value) => {
    let article = this.state.article;
    article.tagList = value;
    this.setState({ article });
  };

  handleNewArticle(event) {
    const { articlestoreService, slug } = this.props;
    this.setState({ loading: true });
    event.preventDefault();
    const article = this.state.article;
    if (slug) {
      articlestoreService
        .putArticle(article, slug)
        .then((response) => {
          this.setState({
            updatingStatus: true,
          });
        })
        .catch((error) => {
          this.props.articleLoadError(error.errors);
        });
    } else {
      articlestoreService
        .postNewArticle(article)
        .then((response) => {
          this.setState({
            updatingStatus: true,
            slug: response.article.slug,
          });
          console.log(response);
        })
        .catch((error) => {
          this.props.articleLoadError(error.errors);
        });
    }
  }

  render() {
    const { error } = this.props;
    const { article, updatingStatus, loading, slug } = this.state;
    console.log(slug);
    if (updatingStatus && !error) {
      return <Redirect to={`/article/${slug}`} />;
    }
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="editor-page">
        <div className="col-md-10 offset-md-1 col-xs-12">
          <div>
            {Object.keys(error).length ? <ErrorList errors={error} /> : null}
          </div>
          <form className="ng-untouched ng-pristine ng-valid">
            <fieldset>
              <fieldset className="form-group">
                <Input
                  className="editor-input"
                  placeholder="Article Title"
                  value={article.title}
                  handler={this.handleOnChangeTitle}
                />
              </fieldset>
              <fieldset className="form-group">
                <Input
                  className="editor-input"
                  placeholder="What's this article about?"
                  value={article.description}
                  handler={this.handleOnChangeDescription}
                />
              </fieldset>
              <fieldset className="form-group">
                <Textarea
                  className="editor-textarea"
                  placeholder="Write your article (in markdown)"
                  rows="8"
                  value={article.body}
                  handler={this.handleOnChangeBody}
                />
              </fieldset>

              <fieldset className="form-group">
                <Input
                  className="editor-input"
                  placeholder="Enter tags"
                  value={article.tagList}
                  handler={this.handleOnChangeTagList}
                />
              </fieldset>
              <button
                className="btn btn-primary btn-lg pull-xs-right"
                type="submit"
                onClick={(event) => this.handleNewArticle(event)}
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

const mapStateToProps = ({ article: { error } }) => {
  return {
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    articleLoadError: (error) => dispatch(articleLoadError(error)),
  };
};

export default compose(
  withArticlestoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(NewArticlePage);
