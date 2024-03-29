import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './main';

// utils
import history from './utils/history';
import store from './utils/store';

const render = AppClient => {
  ReactDom.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppClient />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./main', () => {
    /* eslint-disable global-require */
    const NextApp = require('./main').default;
    /* eslint-enable global-require */
    render(NextApp);
  });
}

// Rendering App;
store.subscribe(() => {
  const state = store.getState();
  if (state !== null) {
    console.log('Server Rendering');
    render(main);
  }
});
