import React from "react";
import { Link } from "react-router-dom";

const User = props => {
  const {
    user: { id, first_name = "", last_name = "", avatar = "" }
  } = props;

  return (
    <div className="item" style={{ padding: "1rem 0" }}>
      <img className="ui avatar image" src={avatar} alt={first_name} />
      <div className="content">
        <Link style={{ cursor: "pointer" }} className="header" to={`/users/${id}`}>
          {`${first_name} ${last_name}`}
        </Link>
      </div>
    </div>
  );
};

export default User;
