import React from "react";
import ArticleListItem from "./article-list-item";
//import ErrorIndicator from "../error-indicator/";
import "./article-list.css";

const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return (
          <li key={article.id}>
            <ArticleListItem article={article} />
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
