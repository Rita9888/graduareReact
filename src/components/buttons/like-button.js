import React from "react";
import { Link } from "react-router-dom";
import UserstoreService from "../../service/userstore-service";

import "./buttons.css";

class LikeButton extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      like: this.props.favorite,
      likeCount: this.props.favoriteCount,
    };
  }
  toggleFollow(slug) {
    console.log(slug);
    if (this.state.follow === false) {
      UserstoreService.postLike(slug)
        .then((like, likeCount) =>
          this.setState({ like: like, likeCount: likeCount })
        )
        .catch((e) => console.log(e));
    } else {
      UserstoreService.deleteLike(slug)
        .then((like, likeCount) =>
          this.setState({ like: like, likeCount: likeCount })
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

export default LikeButton;
