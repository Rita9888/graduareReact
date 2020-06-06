import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ArticleListContainer from "../article-list-container";

//исправить отрисовку класса active
class UserFeedToggle extends React.Component {
  state = {
    typeArticles: "MyPosts",
  };
  switchButton(type) {
    this.setState({ typeArticles: type });
  }
  render() {
    const { username } = this.props;
    console.log(username);
    return (
      <div className="container">
        <div className="row">
          <div className="feed-toggle col-md-12">
            <ul className="nav nav-pills outline-active">
              <li className="nav-item">
                <Link
                  onClick={() => this.switchButton("MyPosts")}
                  className="nav-link"
                  to={`/profile/${username}/`}
                >
                  My Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.switchButton("FavoritedPost")}
                  className="nav-link"
                  to={`/profile/${username}/favorites`}
                >
                  Favorited Post
                </Link>
              </li>
            </ul>
            <ArticleListContainer
              typeArticles={this.state.typeArticles}
              user={username}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ article: { toggleButtonTag, currentTag } }) => {
  return {
    toggleButtonTag,
    currentTag,
  };
};

export default connect(mapStateToProps)(UserFeedToggle);
