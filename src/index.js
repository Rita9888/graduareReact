import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/app";
import { ArticlestoreServiceProvider } from "./components/articlestore-service-context";
import ArticlestoreService from "./service/articlestore-service";
//import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";

import store from "./store";

const articlestoreService = new ArticlestoreService();

ReactDOM.render(
  <Provider store={store}>
    <ArticlestoreServiceProvider value={articlestoreService}>
      <Router>
        <App />
      </Router>
    </ArticlestoreServiceProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
