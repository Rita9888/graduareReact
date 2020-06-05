import React from "react";
import { Link } from "react-router-dom";
import { withArticlestoreService } from "../hoc/with-articlestore-service";

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
    console.log(slug);
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
    const { slug } = this.props;

    return (
      <button
        type="button"
        className="btn btn-sm btn-outline-primary"
        onClick={() => this.toggleFollow(slug)}
      >
        Favorite Article ({this.state.likeCount})
      </button>
    );
  }
}

export default withArticlestoreService()(LikeButton);
