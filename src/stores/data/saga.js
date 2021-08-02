import { call, put, takeLatest } from 'redux-saga/effects';
import { SIGN_USER_IN } from './constants';
import { doSignUserInSuccess, doSignUserInError } from './actions';
import _ from 'lodash';

const signInOsha = () =>
  new Promise(resolve =>
    _.delay(() => resolve({ name: 'Osha Foster', id: '12355' }), 1000),
  );

function* tryToSignInUser() {
  // const { username, password } = payload;
  try {
    const user = yield call(signInOsha);
    yield put(doSignUserInSuccess(user));
  } catch (error) {
    // Sentry.captureException(error);
    console.error(error); // eslint-disable-line no-console
    yield put(doSignUserInError(error));
  }
}

export default function* dataSaga() {
  yield takeLatest(SIGN_USER_IN, tryToSignInUser);
}
