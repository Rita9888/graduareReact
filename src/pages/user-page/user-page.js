import React from "react";
import { withArticlestoreService } from "../../components/hoc/with-articlestore-service";
import ArticleListContainer from "../../components/article-list-container";
import UserBanner from "./user-banner";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";
import "./user-page.css";

class UserPage extends React.Component {
  state = {
    profile: {},
    loading: false,
  };

  componentDidMount = () => {
    const { articlestoreService, username } = this.props;
    this.setState({ loading: true });

    articlestoreService
      .getProfile(username)
      .then((profile) => this.setState({ profile: profile, loading: false }))
      .catch((e) => console.log(e));
  };
  render() {
    const { username, typeArticles } = this.props;
    const { profile, loading } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="profile-page">
        <UserBanner profile={profile} />
        <div className="col-xs-12 col-md-10 offset-md-1">
          <div className="articles-toggle">
            <ul className="nav nav-pills outline-active">
              <li className="nav-item">
                <Link className="nav-link" to={`/profile/${username}`}>
                  My Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={`/profile/${username}/favorites`}
                >
                  Favorited Posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ArticleListContainer typeArticles={typeArticles} user={username} />
      </div>
    );
  }
}

export default withArticlestoreService()(UserPage);
