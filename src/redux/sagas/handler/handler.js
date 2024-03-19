import { call, put, takeEvery } from "redux-saga/effects";
import {
  SEND_FORM_DATA,
  GET_FROM_DATA,
  SEND_SUCCESS_SAGA,
  SEND_FAILURE_SAGA,
  GET_SUCCESS_SAGA,
  GET_FAILURE_SAGA,
  REMOVE_FROM_DATA,
  DELETE_ITEM_SUCCESS_SAGA,
  DELETE_ITEM_FAILURE_SAGA,
} from "../../types/ActionTypes";
import { Remove, Request } from "../sagas/saga";

export function* hendler(action) {
  const { payload, type } = action;
  try {
    const response = yield call(Request, payload);
    console.log(response, "data from backend ");

    if (response.MessageSuccess) {
      yield put({ type: SEND_SUCCESS_SAGA, payload: response });
    } else {
      yield put({ type: SEND_FAILURE_SAGA, payload: response });
    }
  } catch (error) {
    console.error("Saga Error:", error);
  }
}
export function* Todata(action) {
  const { payload, type } = action;
  try {
    if (payload === 0) {
      yield put({ type: GET_FAILURE_SAGA, payload: payload });
    } else {
      yield put({ type: GET_SUCCESS_SAGA, payload: payload });
    }
  } catch (error) {
    console.error("GETTING DATA ERROR :", error);
  }
}
export function* Removeclient(action) {
  const { payload, type } = action;
  console.log(payload, "helo from handeler");

  try {
    const response = yield call(Remove, payload);
    console.log(payload, "heeheheheheheh");

    console.log(response, "message from backend for deleted client or not  ");

    if (response.alert) {
      yield put({ type: DELETE_ITEM_SUCCESS_SAGA, payload: response.data });
    } else {
      yield put({ type: DELETE_ITEM_FAILURE_SAGA, payload: response.data });
    }
  } catch (error) {
    console.error("Saga Error:", error);
  }
}

export function* watchLogin() {
  yield takeEvery(SEND_FORM_DATA, hendler);
  yield takeEvery(GET_FROM_DATA, Todata);
  yield takeEvery(REMOVE_FROM_DATA, Removeclient);
}
