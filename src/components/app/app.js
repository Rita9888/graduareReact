import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "../header";
import Banner from "../banner";
import ArticleListContainer from "../article-list-container/article-list-container";
import SignIn from "../sign-in";
import SignUp from "../sign-up";
import Settings from "../../pages/settings";
import NewArticlePage from "../../pages/newarticle-page";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Banner />
        <Switch>
          <Route path="/" component={ArticleListContainer} exact />
          <Route path="/login" render={() => <SignIn />} />
          <Route path="/register" render={() => <SignUp />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/editor" render={() => <NewArticlePage />} />
          <Route render={() => <h2>Page not found</h2>} />{" "}
          {/* добавить компонент несуществующей страницы */}
        </Switch>
      </Router>
    );
  }
}

export default App;
