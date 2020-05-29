import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "../header";
import Banner from "../banner";
import FeedToggle from "../feed-toggle";
import SignIn from "../sign-in";
import SignUp from "../sign-up";
import Settings from "../../pages/settings";
import NewArticlePage from "../../pages/newarticle-page";
import UserPage from "../../pages/user-page";
import ArticlePage from "../../pages/article-page";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { token } = this.props;
    console.log(token);
    return (
      <Router>
        <Header />
        {!token && <Banner />}
        <Switch>
          <Route path="/" component={FeedToggle} exact />
          <Route path="/login" render={() => <SignIn />} />
          <Route path="/register" render={() => <SignUp />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/editor" render={() => <NewArticlePage />} />
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
            path="/profile/:username/favorite"
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
