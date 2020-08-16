import { combineReducers } from "redux";
import usersReducer from "./usersReducers";
import middlewareReducer from "./middlewareReducer";

export default combineReducers({ users: usersReducer, middleware: middlewareReducer });
