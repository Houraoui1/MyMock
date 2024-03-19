import {
  SEND_FORM_DATA,
  GET_FROM_DATA,
  REMOVE_FROM_DATA,
} from "../types/ActionTypes";

export const sendFormData = (formData) => ({
  type: SEND_FORM_DATA,
  payload: formData,
});
export const GetfromData = (datafromBD) => ({
  type: GET_FROM_DATA,
  payload: datafromBD,
});
export const RemoveFromdata = (_id) => ({
  type: REMOVE_FROM_DATA,
  payload: _id,
});
