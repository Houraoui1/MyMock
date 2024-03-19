import { toast } from "react-hot-toast";
import {
  DELETE_ITEM_FAILURE_SAGA,
  DELETE_ITEM_SUCCESS_SAGA,
  GET_FAILURE_SAGA,
  GET_SUCCESS_SAGA,
} from "../types/ActionTypes";
const initialState = {
  data: [],
  deleting: false,
  error: null,
};

const LeadsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FAILURE_SAGA:
      console.log(payload, "login fullairy from Reducer ");
      return {
        ...state,
        data: payload,
      };

    case GET_SUCCESS_SAGA:
      console.log(payload, "login succesufuly from Reducer ");

      return {
        ...state,
        data: payload,
      };
    case DELETE_ITEM_SUCCESS_SAGA:
      return {
        ...state,
        deleting: false,
      };
    case DELETE_ITEM_FAILURE_SAGA:
      return {
        ...state,
        deleting: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default LeadsReducer;
