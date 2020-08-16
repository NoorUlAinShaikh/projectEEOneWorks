import { FETCH_USER, FETCH_USERS } from "../actions/types";
import { mapKeys } from "lodash";

const INITIAL_STATE = {
  usersList: {},
  info: {}
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return { ...state, usersList: { [payload.id]: payload } };
    case FETCH_USERS:
      return {
        ...state,
        usersList: { ...mapKeys(payload.data, "id") },
        info: { currentPage: payload.page, totalPages: payload.total_pages }
      };
    default:
      return state;
  }
};
