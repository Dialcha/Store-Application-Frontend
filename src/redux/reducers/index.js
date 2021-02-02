import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import pointsReducer from "./pointsReducer";
import historyReducer from "./historyReducer";

export default combineReducers({ usersReducer, productsReducer, pointsReducer, historyReducer });
