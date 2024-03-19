import { all } from 'redux-saga/effects';
import { watchLogin } from './handler/handler';


function* rootSaga() {
  yield all([
watchLogin(), 
  ]);
}

export default rootSaga;