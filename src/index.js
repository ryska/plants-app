import './index.css';

import React from 'react';
import { render } from 'react-dom';

import './App.css';
import App from './App';
import Plant from './components/Plant';
import Dashboard from './components/Dashboard';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import {store, history } from './store';

export const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard}></IndexRoute>
        <Route path="/view/:plantId" component={Plant}></Route>
      </Route>
    </Router>
  </Provider>
)

render(
  router,
  document.getElementById('root')
);
