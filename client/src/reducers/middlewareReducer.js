import { MIDDLEWARE } from "../actions/types";
import { THUNK } from "../../helpers/constants";

export default (state = THUNK, action) => {
  switch (action.type) {
    case MIDDLEWARE:
      return action.payload;
    default:
      return state;
  }
};
