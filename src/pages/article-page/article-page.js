import React from "react";
import Banner from "./banner";
import Spinner from "../../components/spinner";
import AppArticleMeta from "./app-article-meta";
import { withArticlestoreService } from "../../components/hoc/with-articlestore-service";

class ArticlePage extends React.Component {
  state = {
    article: {},
    user: {},
    loading: false,
  };

  componentDidMount = () => {
    const { articlestoreService, slug } = this.props;
    this.setState({ loading: true });

    articlestoreService
      .getArticle(slug)
      .then((article) =>
        this.setState({
          article: article,
          user: article.author,
          loading: false,
        })
      )
      .catch((e) => console.log(e));
  };
  render() {
    const { article, user, loading } = this.state;
    const { body, createdAt } = article;
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="article-page">
        <Banner {...article} {...user} />
        <div className="container page">
          <div className="article-content">
            <div className="col-md-12">
              <div>
                <p>{body}</p>
              </div>
              <ul className="tag-list"></ul>
            </div>
          </div>
          <hr />
          <div className="article-actions">
            <AppArticleMeta {...user} />
          </div>
        </div>
        <div className="col-xs-12 col-md-8 offset-md-2">
          <form className="card comment-form ng-untoched ng-pristine ng-valid">
            <div className="card-block">
              <textarea
                className="form-control"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div className="card-footer">
              <button className="btn btn-sm btn-primary">Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withArticlestoreService()(ArticlePage);
