const initialState = {
  user: JSON.parse(localStorage.getItem("conduitToken")),
  loading: false,
  error: {},
  token: Boolean(localStorage.getItem("conduitToken")),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_FETCH_DATA_SUCCESS":
      console.log(action.payload);
      //localStorage.setItem("conduitToken", action.payload);
      localStorage.setItem("conduitToken", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        token: true,
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
      localStorage.clear();
      return {
        ...state,
        user: {},
        token: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
