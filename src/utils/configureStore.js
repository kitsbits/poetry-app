import { createStore, combineReducers /*, applyMiddleware */ } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import data from 'stores/data/reducer';
// import dataSaga from 'stores/data/saga';

const reducers = {
  data,
};

const createReducer = () =>
  combineReducers({
    ...reducers,
  });

export default function configureStore(initialState) {
  // Middleware
  // const sagaMiddleware = createSagaMiddleware();
  // const middleware = [sagaMiddleware];

  const store = createStore(createReducer(), initialState);

  // runSagas(sagaMiddleware);

  // Return the modified store
  return store;
}
