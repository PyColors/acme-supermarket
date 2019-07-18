import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';

import rootSaga from './pages/Basket/sagas';
import rootReducer from './pages/Basket/reducers';

export default function(history, defaultState) {
  const sagaMiddeleware = createSagaMiddleware();
  const middleware = routerMiddleware(history);

  const middlewareChain = [middleware, sagaMiddeleware];
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewareChain.push(logger);
  }
  const store = createStore(
    combineReducers({
      ...rootReducer,
      router
    }),
    defaultState,
    applyMiddleware(...middlewareChain)
  );
  // sagas
  sagaMiddeleware.run(rootSaga);
  return store;
}
