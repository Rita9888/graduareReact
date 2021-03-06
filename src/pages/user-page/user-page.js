import React from "react";
import { withArticlestoreService } from "../../components/hoc/with-articlestore-service";
import ArticleListContainer from "../../components/article-list-container";
import UserBanner from "./user-banner";
import UserFeedToggle from "../../components/user-feed-toggle";
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
    const { username } = this.props;
    const { profile, loading } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="profile-page">
        <UserBanner profile={profile} />
        <UserFeedToggle username={username} />
      </div>
    );
  }
}

export default withArticlestoreService()(UserPage);
