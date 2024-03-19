import { toast } from "react-hot-toast";
import { LOGIN_FAILURE_SAGA, LOGIN_SUCCESS_SAGA, SEND_FAILURE_SAGA, SEND_SUCCESS_SAGA } from "../types/ActionTypes";
const initialState = {
  Message: "",
};

const ClientReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEND_SUCCESS_SAGA:
      console.log(payload, "Client add succesful  from reducer ");

      toast.success(payload.MessageSuccess);
      return {
        ...state,
        Message: payload.MessageSuccess,
      };
    case SEND_FAILURE_SAGA:
      console.log(payload.MessageFailure, "Client not add from reducer ");
      toast.error(payload.MessageFailure);
      return {
        ...state,
        Message: payload.MessageFailure,
      };
    default:
      return state;
  }
};
export default ClientReducer;
