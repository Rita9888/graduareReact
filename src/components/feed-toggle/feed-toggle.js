import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ArticleListContainer from "../article-list-container";
import "./feed-toggle.css";

//исправить отрисовку класса active
class FeedToggle extends React.Component {
  state = {
    typeArticles: "GlobalFeed",
  };
  switchButton(type) {
    this.setState({ typeArticles: type });
  }
  render() {
    const { toggleButtonTag, currentTag } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="feed-toggle col-md-12">
            <ul className="nav nav-pills outline-active">
              <li className="nav-item">
                <Link
                  onClick={() => this.switchButton("YourFeed")}
                  className="nav-link"
                  to={"/"}
                >
                  Your Feed
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.switchButton("GlobalFeed")}
                  className="nav-link"
                  to={"/"}
                >
                  Global Feed
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.switchButton("TagFeed")}
                  className={
                    toggleButtonTag ? "nav-link active" : "nav-link button-none"
                  }
                  to={"/"}
                >
                  #{currentTag}
                </Link>
              </li>
            </ul>
            <ArticleListContainer typeArticles={this.state.typeArticles} />
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

export default connect(mapStateToProps)(FeedToggle);
