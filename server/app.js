import express from 'express';
import yields from 'express-yields';
import fs from 'fs-extra';
import { get } from 'request-promise';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import path from 'path';
import config from './config';
import App from '../src/App';

import getStore from '../src/getStore';
import {
  devMiddleware,
  hotMiddleware
} from './middlewares/hotModuleReplacement';

const app = express();

if (process.env.NODE_ENV === 'development') {
  // Hot Module Replacement from middleware
  app.use(devMiddleware);
  app.use(hotMiddleware);
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
}

app.get(['/'], function*(req, res) {
  let index = yield fs.readFile('./public/index.html', 'utf-8');

  const history = createHistory({
    initialEntries: [req.path]
  });

  const initialState = {
    questions: []
  };

  const store = getStore(history, initialState);

  if (config.useServerRender) {
    const appRendered = renderToString(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
    index = index.replace(`<%= preloadedApplication %>`, appRendered);
  } else {
    index = index.replace(
      `<%= preloadedApplication %>`,
      `Please wait while we load the application.`
    );
  }

  res.send(index);
});

export default app;
