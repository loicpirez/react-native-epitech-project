import { all } from 'redux-saga/effects';
import helloSaga from './hello-saga';
import signInSaga from './reducers/sign-in/sign-in-saga';

function* rootSaga() {
  yield all([helloSaga, signInSaga]);
}

export default rootSaga;
