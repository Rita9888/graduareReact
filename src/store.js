import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import reducer from "./reducers/article-cart";
import userReducer from "./reducers/user-reducer";
import thunk from "redux-thunk";

//const store = createStore(combineReducer({ book: reducer, user: userReducer }));

const store = createStore(
  combineReducers({ article: reducer, user: userReducer }),
  applyMiddleware(thunk)
);

export default store;
