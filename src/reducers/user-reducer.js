const initialState = {
  user: {},
  loading: false,
  error: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_FETCH_DATA_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "USER_LOADING":
      return {
        ...state,
        loading: false,
        error: {},
      };
    case "USER_LOAD_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ERROR_CLEARING":
      return {
        ...state,
        error: {},
      };
    case "USER_LOGGED_OUT":
      return {
        ...state,
        user: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
