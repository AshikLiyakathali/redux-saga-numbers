import numberReducer from "./number";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  number: numberReducer
});

export default allReducers;
