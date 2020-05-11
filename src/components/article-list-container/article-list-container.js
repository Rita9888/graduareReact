import React from "react";
import TagsComponent from "../tags-component";
import ArticleList from "../articles-list";
import ContainerPage from "../container-page";
import Spinner from "../spinner";
//import ErrorIndicator from "../error-indicator/";
import Pagination from "../pagination";
import { connect } from "react-redux";
import { withArticlestoreService } from "../hoc/with-articlestore-service";
import {
  articleLoading,
  articlesCountLoaded,
} from "../../actions/article-cart";
import compose from "../../utils/compose";

class ArticleListContainer extends React.Component {
  state = {
    articles: [],
    tags: [],
    loading: true,
  };

  componentDidMount() {
    const {
      articlestoreService,
      articleLoading,
      articlesCountLoaded,
    } = this.props;

    articlestoreService
      .getArticlesCount()
      .then((data) => articlesCountLoaded(data));
  }

  componentWillReceiveProps = async (newProps) => {
    const { articlestoreService, articleLoading } = this.props;
    const { articlePerPage, indexOfLastArticle, currentPage } = newProps;
    this.setState({ loading: true });
    const articles = await articlestoreService.getAllArticles(
      articlePerPage,
      indexOfLastArticle
    );
    const tags = await articlestoreService.getAllTags();
    this.setState({ articles, tags, loading: false });
  };
  render() {
    const { error } = this.props;
    const { loading } = this.state;
    if (loading) {
      return <Spinner />;
    } else if (error) {
      // <ErrorIndicator />;
    } else {
      return (
        <div>
          <ContainerPage
            right={<TagsComponent tags={this.state.tags} />}
            left={<ArticleList articles={this.state.articles} />}
          />

          <ContainerPage left={<Pagination />} />
        </div>
      );
    }
  }
}

const mapStateToProps = ({
  loading,
  error,
  articlePerPage,
  articlesCount,
  currentPage,
  indexOfLastArticle,
}) => {
  return {
    loading,
    error,
    articlePerPage,
    articlesCount,
    currentPage,
    indexOfLastArticle,
  };
};

const mapDispatchToProps = {
  articleLoading,
  articlesCountLoaded,
};

export default compose(
  withArticlestoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ArticleListContainer);
