import React from "react";
import ArticleListItem from "../article-list-item";
import { connect } from "react-redux";
import { withArticlestoreService } from "../hoc/with-articlestore-service";
import { articleLoading, articleLoaded } from "../../actions/article-cart";
import compose from "../../utils/compose";
//import "./article-list.css";

const ArticleList = ({ articles }) => {
  console.log(articles);
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return (
          <li key={article.id}>
            <ArticleListItem article={article} />
          </li>
        );
      })}
    </ul>
  );
};

class ArticleListContainer extends React.Component {
  componentDidMount() {
    const { articlestoreService, articleLoading, articleLoaded } = this.props;
    articleLoading();
    articlestoreService
      .getAllArticles()
      .then((data) => articleLoaded(data))
      .then((data) => console.log(data));
  }
  render() {
    const { articles, loading } = this.props;
    return <ArticleList articles={articles} />;
  }
}

const mapStateToProps = ({ articles, loading }) => {
  return { articles, loading };
};

const mapDispatchToProps = {
  articleLoading,
  articleLoaded,
};

export default compose(
  withArticlestoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ArticleListContainer);
