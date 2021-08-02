import {
  EXAMPLE,
  SIGN_USER_IN,
  SIGN_USER_IN_SUCCESS,
  SIGN_USER_IN_ERROR,
  SIGN_USER_OUT,
  // SIGN_USER_OUT_SUCCESS,
} from './constants';

export function doExample() {
  return {
    type: EXAMPLE,
  };
}

export function doSignUserIn(payload) {
  return {
    type: SIGN_USER_IN,
    payload,
  };
}

export function doSignUserInSuccess(payload) {
  return {
    type: SIGN_USER_IN_SUCCESS,
    payload,
  };
}

export function doSignUserInError(payload) {
  return {
    type: SIGN_USER_IN_ERROR,
    payload,
  };
}

export function doSignUserOut() {
  return {
    type: SIGN_USER_OUT,
  };
}

// export function doSignUserOutSuccess() {
//   return {
//     type: SIGN_USER_OUT_SUCCESS,
//   };
// }
