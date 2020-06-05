import React from "react";
import { withArticlestoreService } from "../hoc/with-articlestore-service";
import { withRouter } from "react-router-dom";

const ButtonDeleteArticle = (props) => {
  const onDeleteArticle = () => {
    const { articlestoreService, history } = props;
    articlestoreService
      .deleteArticle(props.slug)
      .then(() => history.push("/"))
      .catch((e) => console.error(e));
  };

  return (
    <button
      className="btn btn-sm btn-outline-danger delete-btn"
      onClick={onDeleteArticle}
    >
      <i className="trash"></i>
      Delete Article
    </button>
  );
};

export default withRouter(withArticlestoreService()(ButtonDeleteArticle));
