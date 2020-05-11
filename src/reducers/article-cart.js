const initialState = {
  loading: false,
  error: false,
  articlesCount: 0,
  currentPage: 1,
  articlePerPage: 10,
  indexOfLastArticle: 0,
};

//const updateCart = (state, action) => {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ARTICLE_LOADING":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "ARTICLES_LOADING_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "ARTICLE_COUNT_LOADED":
      return {
        ...state,
        articlesCount: action.payload,
      };
    case "PAGINATE":
      //const newIndexOfLastArticle = state.currentPage * state.articlePerPage;
      return {
        ...state,
        currentPage: action.payload,
        indexOfLastArticle: (action.payload - 1) * state.articlePerPage,
      };
    default:
      return state;
  }
};

export default reducer;
