import React from "react";

import Header from "../header";
import Banner from "../banner";
import ContainerPage from "../container-page";
import FeedToggle from "../feed-toggle";
import ArticleListContainer from "../articles-list";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <ContainerPage left={<FeedToggle />} />
        <ContainerPage left={<ArticleListContainer />} />
      </div>
    );
  }
}

export default App;
