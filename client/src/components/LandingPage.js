import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMiddleware } from "../store/actions";
import {
  LANDING_TITLE,
  LANDING_BODY,
  MIDDLEWARE_CHOICE_PART1,
  MIDDLEWARE_CHOICE_PART2,
  THUNK,
  SAGA
} from "../helpers/constants";

const Landing = () => {
  const middlewares = [THUNK, SAGA];
  const dispatch = useDispatch();
  const middleware = useSelector(({ middleware }) => middleware);

  const handleMiddlewareUpdate = () => {
    dispatch(updateMiddleware(middlewares.filter(mWare => middleware !== mWare)[0]));
  };

  const renderMiddlewareOptions = () => {
    return (
      <div
        onClick={handleMiddlewareUpdate}
        className="ui inline dropdown"
        style={{ margin: "0 0.5rem", borderBottom: "solid red 2px" }}
      >
        {middleware}
        <i className={`icon angle ${middleware === THUNK ? "down" : "up"}`}></i>
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center", color: "gainsboro", fontSize: "x-large" }}>
      <h1 style={{ fontFamily: "unset", fontSize: "xxx-large", margin: "4rem 0" }}>
        {LANDING_TITLE}
        <label style={{ color: "red" }}>!</label>
      </h1>
      {LANDING_BODY}
      <div style={{ margin: "3rem" }}>
        {MIDDLEWARE_CHOICE_PART1} {renderMiddlewareOptions()} {MIDDLEWARE_CHOICE_PART2}
      </div>
    </div>
  );
};

export default Landing;
