import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/OneWorks.png";
import { ALL_USERS } from "../../helpers/constants";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <img alt="Logo" src={logo} style={{ width: "15rem" }} />
      </Link>
      <div className="right menu">
        <Link to="/users" className="item">
          {ALL_USERS}
        </Link>
      </div>
    </div>
  );
};

export default Header;
