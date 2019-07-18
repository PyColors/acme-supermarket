import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './pages/Basket/BasketPage';

import rootReducer from './pages/Basket/reducers';
import rootSaga from './pages/Basket/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
