import produce from 'immer';

import { EXAMPLE } from './constants';

const initialState = {
  // user: {},
  test: '',
};

const dataReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case EXAMPLE:
        draft.test = 'working!';
        break;
    }
  });

export default dataReducer;
