import React from "react";
import { connect } from "react-redux";
import { articlesListSwitch } from "../../actions/article-cart";

import "./feed-toggle.css";

//исправить отрисовку класса active
class FeedToggle extends React.Component {
  state = {
    toggleGloalFeed: true,
    toggleYourFeed: false,
  };

  toggleFunction = () => {
    this.setState({
      toggleGloalFeed: !this.state.toggleGloalFeed,
      toggleYourFeed: !this.state.toggleYourFeed,
    });
  };

  render() {
    const { switchButton, toggleButtonTag, currentTag } = this.props;
    return (
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a
              onClick={() => {
                switchButton("YourFeed");
                this.toggleFunction();
              }}
              className={
                this.state.toggleYourFeed ? "nav-link active" : "nav-link"
              }
              href="!#"
            >
              Your Feed
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => {
                switchButton("YourFeed");
                this.toggleFunction();
              }}
              className={
                this.state.toggleGloalFeed ? "nav-link active" : "nav-link"
              }
              href="!#"
            >
              Global Feed
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => switchButton("TagFeed")}
              className={
                toggleButtonTag ? "nav-link active" : "nav-link button-none"
              }
              href="!#"
            >
              #{currentTag}
            </a>
          </li>
        </ul>
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

const mapDispatchToProps = (dispatch) => {
  return {
    switchButton: (button) => dispatch(articlesListSwitch(button)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedToggle);
