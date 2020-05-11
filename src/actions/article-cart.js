const articleLoading = () => {
  return {
    type: "ARTICLE_LOADING",
  };
};

const articlesLoadingError = () => {
  return {
    type: "ARTICLES_LOADING_ERROR",
  };
};

const articlesCountLoaded = (articlesCount) => {
  return {
    type: "ARTICLE_COUNT_LOADED",
    payload: articlesCount,
  };
};

/* const articleLoaded = (articles) => {
  return {
    type: "ARTICLE_LOADED",
    payload: articles,
  };
}; */

const paginate = (numberPage) => {
  return {
    type: "PAGINATE",
    payload: numberPage,
  };
};

export { articleLoading, articlesCountLoaded, paginate, articlesLoadingError };
