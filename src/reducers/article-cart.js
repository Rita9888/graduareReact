const initialState = {
  articles: [],
  loading: true,
  error: false,
};

//const updateCart = (state, action) => {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ARTICLE_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ARTICLE_LOADED":
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
