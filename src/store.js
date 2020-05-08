import { createStore } from "redux";
//import { combineReducer } from "redux";
import reducer from "./reducers/article-cart";
//import { userReducer } from "./reducers/user";

//const store = createStore(combineReducer({ book: reducer, user: userReducer }));

const store = createStore(reducer);

export default store;
