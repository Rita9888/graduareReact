import React from "react";
import { Link } from "react-router-dom";
import UserstoreService from "../../service/userstore-service";

import "./buttons.css";

class ButtonFollow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: this.props.following,
    };
  }
  toggleFollow(username) {
    if (this.state.follow === false) {
      UserstoreService.postFollow(username)
        .then((following) => this.setState({ follow: following }))
        .catch((e) => console.log(e));
    } else {
      UserstoreService.deleteFollow(username)
        .then((following) => this.setState({ follow: following }))
        .catch((e) => console.log(e));
    }
  }
  render() {
    const { username } = this.props;

    let textInBtn;
    if (this.state.follow) {
      textInBtn = `Unfollow ${username}`;
    } else {
      textInBtn = `Follow ${username}`;
    }
    return (
      <button
        type="button"
        className="btn btn-sm action-btn btn-secondary"
        onClick={() => this.toggleFollow(username)}
      >
        + {textInBtn}
      </button>
    );
  }
}

export default ButtonFollow;
