import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import plantsData from './data/plants';

const defaultState = {
  plants: plantsData
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
