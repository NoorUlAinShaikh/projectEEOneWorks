import { call, put, takeEvery } from "redux-saga/effects";
import oneworks from "../../api/oneworks";
import { FETCH_USERS, FETCH_USERS_SAGA, FETCH_USER, FETCH_USER_SAGA } from "../actions/types";

function* fetchUsers({ page = null }) {
  try {
    const response = yield call(page => oneworks.get(`/users${page ? `?page=${page}` : ""}`), page);
    yield put({ type: FETCH_USERS, payload: response.data });
  } catch (err) {
    console.log("response from fethcUsers Saga:error:", err);
  }
}

export function* fetchUsersHandler() {
  yield takeEvery(FETCH_USERS_SAGA, fetchUsers);
}

function* fetchUser({ id }) {
  try {
    const response = yield call(id => oneworks.get(`/users/${id}`), id);
    yield put({ type: FETCH_USER, payload: response.data.data });
  } catch (err) {
    console.log("response from fetchUser Saga:error:", err);
  }
}

export function* fetchUserHanddler() {
  yield takeEvery(FETCH_USER_SAGA, fetchUser);
}
