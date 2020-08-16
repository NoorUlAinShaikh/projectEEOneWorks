import oneworks from "../../api/oneworks";
import { FETCH_USER, FETCH_USERS, MIDDLEWARE, FETCH_USERS_SAGA, FETCH_USER_SAGA } from "./types";
import { THUNK } from "../../helpers/constants";

/*******NORMAL ACTIONS */
export const updateMiddleware = (middleware = THUNK) => ({ type: MIDDLEWARE, payload: middleware });

/*******THUNK ACTIONS */
export const fetchUser = id => async dispatch => {
  try {
    const response = await oneworks.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data.data });
  } catch (err) {
    console.log("err:", err);
  }
};

export const fetchUsers = (page = null) => async dispatch => {
  try {
    const response = await oneworks.get(`/users${page ? `?page=${page}` : ""}`);
    dispatch({ type: FETCH_USERS, payload: response.data });
  } catch (err) {
    console.log("err:", err);
  }
};

/*******SAGAS ACTIONS */
export const fetchUsersSaga = (page = null) => ({ type: FETCH_USERS_SAGA, page });
export const fetchUserSaga = id => ({ type: FETCH_USER_SAGA, id });
