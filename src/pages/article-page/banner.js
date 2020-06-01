import React from "react";
import AppArticleMeta from "./app-article-meta";
import "./article-page.css";

export default function Banner(props) {
  return (
    <div className="banner">
      <div className="container">
        <h1>{props.title}</h1>
        <AppArticleMeta {...props} />
      </div>
    </div>
  );
}
