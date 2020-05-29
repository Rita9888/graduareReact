import React from "react";
import AppArticleMeta from "./app-article-meta";
import "./article-page.css";

const Banner = (article, user) => {
  return (
    <div className="banner">
      <div className="container">
        <h1>{article.title}</h1>
        <AppArticleMeta user={user} article={article} />
      </div>
    </div>
  );
};

export default Banner;
