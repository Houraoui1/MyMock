import { combineReducers } from "redux";
import ClientReducer from "./reducer/ClientReducer";
import LeadsReducer from "./reducer/LeadsReducer";
const rootReducer = combineReducers({
  auth: ClientReducer,
  leads: LeadsReducer,
});
export default rootReducer;
