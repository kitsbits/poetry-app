import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import _ from 'lodash';

import dataReducer from 'stores/data/reducer';
import dataSaga from 'stores/data/saga';

const reducers = {
  data: dataReducer,
};

const sagas = {
  data: dataSaga,
};

const createReducer = () =>
  combineReducers({
    ...reducers,
  });

function runSagas(sagaMiddleware) {
  _.each(sagas, saga => sagaMiddleware.run(saga));
}

export default function configureStore(initialState) {
  // Middleware
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(...middleware),
  );

  runSagas(sagaMiddleware);

  // Return the modified store
  return store;
}
