import React from "react";
import { connect } from "react-redux";
import { paginate } from "../../actions/article-cart";
import { NavLink } from "react-router-dom";
import "./pagination.css";

const Pagination = (props) => {
  const { paginate, articlesCount, articlePerPage, currentPage } = props;
  const pageNumbers = [];
  let className = "page-link";
  for (let i = 1; i <= Math.ceil(articlesCount / articlePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-start">
        {pageNumbers.map((number) => (
          <li key={number} className={className}>
            <NavLink
              onClick={() => {
                paginate(number);
              }}
              to={"/"}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({
  article: { articlePerPage, articlesCount, currentPage },
}) => {
  return {
    articlePerPage,
    articlesCount,
    currentPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    paginate: (number) => dispatch(paginate(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
