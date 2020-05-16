import React from "react";
import { connect } from "react-redux";
import { paginate } from "../../actions/article-cart";
import { NavLink } from "react-router-dom";
import "./pagination.css";

const Pagination = (props) => {
  const { paginate, articlesCount, articlePerPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(articlesCount / articlePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-start">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <NavLink
              onClick={() => {
                paginate(number);
              }}
              className="page-link"
              to={"#"}
              activeClassName="active"
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ article: { articlePerPage, articlesCount } }) => {
  return {
    articlePerPage,
    articlesCount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    paginate: (number) => dispatch(paginate(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
