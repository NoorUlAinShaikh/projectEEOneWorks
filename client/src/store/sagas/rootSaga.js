import { all } from "redux-saga/effects";
import { fetchUsersHandler, fetchUserHanddler } from "./fetchUsersSaga";

export default function* rootSaga() {
  yield all([fetchUsersHandler(), fetchUserHanddler()]);
}
