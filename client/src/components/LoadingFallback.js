import React from "react";
import { LOADING_HEADER, LOADING_BODY } from "../helpers/constants";

const LoadingFallback = () => {
  return (
    <div className="ui icon message">
      <i className="notched circle loading icon"></i>
      <div className="content">
        <div className="header">{LOADING_HEADER}</div>
        <p>{LOADING_BODY}</p>
      </div>
    </div>
  );
};

export default LoadingFallback;
