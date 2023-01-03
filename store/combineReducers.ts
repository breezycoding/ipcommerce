import { combineReducers } from "redux";
import { tick } from "./reducers/tickReducers";

export const reducers = combineReducers({
  tick: tick,
});
