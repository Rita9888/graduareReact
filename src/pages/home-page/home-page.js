import React from "react";
import Banner from "../../components/banner";
import FeedToggle from "../../components/feed-toggle";
import Spinner from "../../components/spinner";
import { connect } from "react-redux";

class HomePage extends React.Component {
  state = {
    profile: {},
    loading: false,
  };

  render() {
    const { loading } = this.state;
    const { token } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="home-page">
        {!token && <Banner />}
        <FeedToggle />
      </div>
    );
  }
}

const mapStateToProps = ({ user: { token } }) => {
  return {
    token,
  };
};

export default connect(mapStateToProps)(HomePage);
