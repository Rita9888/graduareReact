import React from "react";
import TagsComponent from "../tags-component";
import ArticleList from "../articles-list";
import FeedToggle from "../feed-toggle";
import ContainerPage from "../container-page";
import Spinner from "../spinner";
//import ErrorIndicator from "../error-indicator/";
import Pagination from "../pagination";
import { connect } from "react-redux";
import { withArticlestoreService } from "../hoc/with-articlestore-service";
import {
  articleLoading,
  articlesCountLoaded,
  sortByTag,
} from "../../actions/article-cart";
import compose from "../../utils/compose";
//добавить обработчики загрузки и ошибок
class ArticleListContainer extends React.Component {
  state = {
    articles: [],
    tags: [],
    loading: true,
  };

  componentDidMount() {
    const {
      articlestoreService,
      articlesCountLoaded,
      articlePerPage,
      indexOfLastArticle,
      currentTag,
    } = this.props;

    articlestoreService
      .getArticlesCount(currentTag, articlePerPage, indexOfLastArticle)
      .then((data) => articlesCountLoaded(data));
  }

  componentWillReceiveProps = async (newProps) => {
    const { articlestoreService, articlesCountLoaded } = this.props;
    const {
      articlePerPage,
      indexOfLastArticle,
      currentTag,
      toggleFeed,
    } = newProps;
    let articles;

    if (toggleFeed === "GlobalFeed") {
      articles = await articlestoreService.getAllArticles(
        articlePerPage,
        indexOfLastArticle
      );
    } else if (toggleFeed === "YourFeed") {
      articles = await articlestoreService.getArticlesByTag(
        currentTag,
        articlePerPage,
        indexOfLastArticle
      );
    } else if (toggleFeed === "TagFeed") {
      articles = await articlestoreService.getArticlesByTag(
        currentTag,
        articlePerPage,
        indexOfLastArticle
      );
    } else articles = [];

    const tags = await articlestoreService.getAllTags();

    articlestoreService
      .getArticlesCount(currentTag, articlePerPage, indexOfLastArticle)
      .then((data) => articlesCountLoaded(data));

    this.setState({ articles, tags, loading: false });
  };

  render() {
    const { error, sortByTag } = this.props;
    const { loading, articles, tags } = this.state;
    if (loading) {
      return <Spinner />;
    } else if (error) {
      // <ErrorIndicator />;
    } else {
      return (
        <div>
          <ContainerPage left={<FeedToggle />} />
          <ContainerPage
            right={<TagsComponent tags={tags} sortByTag={sortByTag} />}
            left={<ArticleList articles={articles} />}
          />

          <ContainerPage left={<Pagination />} />
        </div>
      );
    }
  }
}

const mapStateToProps = ({
  article: {
    loading,
    error,
    articlePerPage,
    articlesCount,
    currentPage,
    indexOfLastArticle,
    currentTag,
    toggleFeed,
  },
}) => {
  return {
    loading,
    error,
    articlePerPage,
    articlesCount,
    currentPage,
    indexOfLastArticle,
    currentTag,
    toggleFeed,
  };
};

const mapDispatchToProps = {
  articleLoading,
  articlesCountLoaded,
  sortByTag,
};

export default compose(
  withArticlestoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ArticleListContainer);
