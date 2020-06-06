import React from "react";
import { withArticlestoreService } from "../hoc/with-articlestore-service";
import { connect } from "react-redux";
import compose from "../../utils/compose";
import { Redirect } from "react-router-dom";

import "./buttons.css";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: this.props.favorite,
      likeCount: this.props.favoriteCount,
    };
  }

  toggleFollow(slug) {
    const { articlestoreService } = this.props;
    if (this.state.like === false) {
      articlestoreService
        .postLike(slug)
        .then((response) =>
          this.setState({
            like: response.favorited,
            likeCount: response.favoritesCount,
          })
        )
        .catch((e) => console.log(e));
    } else {
      articlestoreService
        .deleteLike(slug)
        .then((response) =>
          this.setState({
            like: response.favorited,
            likeCount: response.favoritesCount,
          })
        )
        .catch((e) => console.log(e));
    }
  }
  render() {
    const { slug, text, token } = this.props;
    if (!token) {
      return <Redirect to={"/login"} />;
    }
    return (
      <button
        type="button"
        className="btn btn-sm btn-outline-primary"
        onClick={() => this.toggleFollow(slug)}
      >
        {text} ({this.state.likeCount})
      </button>
    );
  }
}

const mapStateToProps = ({ user: { token } }) => {
  return {
    token,
  };
};

export default compose(
  withArticlestoreService(),
  connect(mapStateToProps)
)(LikeButton);
