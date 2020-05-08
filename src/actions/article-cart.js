const articleLoading = () => {
  return {
    type: "ARTICLE_LOADING",
  };
};

const articleLoaded = (articles) => {
  return {
    type: "ARTICLE_LOADED",
    payload: articles,
  };
};

export { articleLoading, articleLoaded };
