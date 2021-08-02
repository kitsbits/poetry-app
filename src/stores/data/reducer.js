import produce from 'immer';

import {
  EXAMPLE,
  SIGN_USER_IN_SUCCESS,
  SIGN_USER_IN_ERROR,
  SIGN_USER_OUT,
} from './constants';

const initialState = {
  test: '',
  user: {},
  signInUserError: {},
};

const dataReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case EXAMPLE:
        draft.test = 'working!';
        break;

      case SIGN_USER_IN_SUCCESS:
        draft.user = action.payload;
        break;

      case SIGN_USER_IN_ERROR:
        draft.signInUserError = action.payload;
        break;

      case SIGN_USER_OUT:
        draft.user = {};
        break;
    }
  });

export default dataReducer;
