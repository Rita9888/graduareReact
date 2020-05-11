import React from "react";

import Header from "../header";
import Banner from "../banner";
import ContainerPage from "../container-page";
import FeedToggle from "../feed-toggle";
import ArticleListContainer from "../article-list-container/article-list-container";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <ContainerPage left={<FeedToggle />} />
        <ArticleListContainer />
      </div>
    );
  }
}

export default App;
