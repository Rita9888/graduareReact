const initialState = {
  loading: false,
  error: false,
  articlesCount: 0,
  currentPage: 1,
  articlePerPage: 10,
  indexOfLastArticle: 0,
  currentTag: "",
  toggleFeed: "GlobalFeed",
  toggleButtonTag: false,
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
      return {
        ...state,
        currentPage: action.payload,
        indexOfLastArticle: (action.payload - 1) * state.articlePerPage,
      };
    case "SORT_BY_TAG":
      return {
        ...state,
        currentTag: action.payload,
        toggleButtonTag: true,
      };
    case "ARTICLES_LIST_SWITCH":
      if (action.payload !== "TagFeed") {
        return { ...state, toggleFeed: action.payload, toggleButtonTag: false };
      } else
        return {
          ...state,
          toggleFeed: action.payload,
          toggleButtonTag: true,
        };
    case "ARTICLE_LOAD_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
