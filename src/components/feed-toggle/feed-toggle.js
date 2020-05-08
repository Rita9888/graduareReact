import React from "react";

import "./feed-toggle.css";

const FeedToggle = () => {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Tour Feed
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Global Feed
          </a>
        </li>
        {/*  <li className="nav-item">
          <a className="nav-link active" href="#">
            <i className="ion-pound"></i>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default FeedToggle;
