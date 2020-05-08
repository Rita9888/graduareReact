import React from "react";
import { ArticlestoreServiceConsumer } from "../../articlestore-service-context";

const withArtickestoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <ArticlestoreServiceConsumer>
        {(articlestoreService) => {
          return (
            <Wrapped {...props} articlestoreService={articlestoreService} />
          );
        }}
      </ArticlestoreServiceConsumer>
    );
  };
};

export default withArtickestoreService;
