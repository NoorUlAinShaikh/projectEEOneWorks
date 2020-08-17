import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser, fetchUserSaga } from "../store/actions";
import LoadingFallBack from "./LoadingFallback";
import { THUNK } from "../helpers/constants";

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const users = useSelector(({ users }) => users.usersList);
  const middleware = useSelector(({ middleware }) => middleware);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (!(Object.values(users).length > 0 || isUserAvailable())) fetchNewUser();
  }, []);

  useEffect(() => {
    if (isUserAvailable()) handleUserUpdates();
  }, [users]);

  const handleUserUpdates = () => {
    const newUser = users[id];
    if (newUser) setUser(newUser);
  };

  const fetchNewUser = () => {
    //fetch if user not found in state
    if (isUserIDValid()) {
      if (middleware === THUNK) {
        dispatch(fetchUser(id));
      } else {
        dispatch(fetchUserSaga(id));
      }
    }
  };

  const isUserIDValid = () => (id ? true : false);

  const isUserAvailable = () => {
    if (isUserIDValid()) return Object.keys(users).includes(id);
  };

  return (
    <div className="ui centered card">
      {user ? (
        <>
          <div className="image">
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <div className="content">
            <div className="header">{user.first_name}</div>
            <div className="meta">{user.last_name}</div>
            <div className="description">{user.email}</div>
          </div>
        </>
      ) : (
        <LoadingFallBack />
      )}
    </div>
  );
};

export default UserDetail;
