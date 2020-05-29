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

  async componentDidMount() {
    const {
      articlestoreService,
      articlesCountLoaded,
      perPage,
      index,
      curTag,
      typeArticles,
      user,
    } = this.props;

    let articles = await SwitchTypeArticles(
      typeArticles,
      perPage,
      index,
      user,
      curTag,
      articlestoreService
    );
    console.log(typeArticles);
    const tags = await articlestoreService.getAllTags();

    articlestoreService
      .getArticlesCount(curTag, perPage, index)
      .then((data) => articlesCountLoaded(data));

    this.setState({ articles, tags, loading: false });
  }

  componentWillReceiveProps = async (newProps) => {
    const { articlestoreService, articlesCountLoaded } = this.props;
    const { perPage, index, curTag, typeArticles, user } = newProps;
    console.log(typeArticles);

    let articles = await SwitchTypeArticles(
      typeArticles,
      perPage,
      index,
      user,
      curTag,
      articlestoreService
    );

    articlestoreService
      .getArticlesCount(curTag, perPage, index)
      .then((data) => articlesCountLoaded(data));

    this.setState({ articles, loading: false });
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

const SwitchTypeArticles = async (
  typeArticles,
  perPage,
  index,
  user,
  curTag,
  articlestoreService
) => {
  let articles;
  switch (typeArticles) {
    case "GlobalFeed":
      articles = await articlestoreService.getAllArticles(perPage, index);
      break;
    case "YourFeed":
      articles = await articlestoreService.getArticlesByFollow(perPage, index);
      break;
    case "MyPosts":
      articles = await articlestoreService.getUserArticles(perPage, user);
      break;
    case "FavoritePost":
      articles = await articlestoreService.getArticlesByFavorited(
        perPage,
        user
      );
      break;
    case "TagFeed":
      articles = await articlestoreService.getArticlesByTag(
        curTag,
        perPage,
        index
      );
      break;
    default:
      return [];
  }
  console.log(articles, "asd");
  return articles;
};

const mapStateToProps = (state) => {
  return {
    loading: state.article.loading,
    error: state.article.error,
    perPage: state.article.articlePerPage,
    count: state.article.articleCount,
    curPage: state.article.currentPage,
    index: state.article.indexOfLastArticle,
    curTag: state.article.currentTag,
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
