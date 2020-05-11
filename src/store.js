import { createStore, applyMiddleware } from "redux";
//import { combineReducers } from "redux";
import reducer from "./reducers/article-cart";
import thunk from "redux-thunk";
//import { userReducer } from "./reducers/user";

//const store = createStore(combineReducer({ book: reducer, user: userReducer }));

const store = createStore(
  reducer,
  //combineReducers({ article: reducer, user: userReducer }),
  applyMiddleware(thunk)
);

export default store;
