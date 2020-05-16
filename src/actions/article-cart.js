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

const sortByTag = (tag) => {
  return {
    type: "SORT_BY_TAG",
    payload: tag,
  };
};

const articlesListSwitch = (toggleButton) => {
  return {
    type: "ARTICLES_LIST_SWITCH",
    payload: toggleButton,
  };
};

export {
  articleLoading,
  articlesCountLoaded,
  paginate,
  articlesLoadingError,
  sortByTag,
  articlesListSwitch,
};
