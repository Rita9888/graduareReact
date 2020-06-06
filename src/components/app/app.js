import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../header";
import SignIn from "../../pages/sign-in";
import SignUp from "../../pages/sign-up";
import Settings from "../../pages/settings";
import NewArticlePage from "../../pages/newarticle-page";
import UserPage from "../../pages/user-page";
import ArticlePage from "../../pages/article-page";
import HomePage from "../../pages/home-page";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" render={() => <SignIn />} />
          <Route path="/register" render={() => <SignUp />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route
            path="/editor/:slug?"
            render={({ match }) => <NewArticlePage slug={match.params.slug} />}
          />
          <Route
            path="/article/:slug"
            render={({ match }) => <ArticlePage slug={match.params.slug} />}
          />
          <Route
            path="/profile/:username"
            render={({ match }) => (
              <UserPage
                username={match.params.username}
                typeArticles="MyPosts"
              />
            )}
          />
          <Route
            path="/profile/:username/favorites"
            render={({ match }) => (
              <UserPage
                username={match.params.username}
                typeArticles="FavoritePost"
              />
            )}
          />
          <Route render={() => <h2>Page not found</h2>} />{" "}
          {/* добавить компонент несуществующей страницы */}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ user: { token } }) => {
  return {
    token,
  };
};

export default connect(mapStateToProps)(App);
