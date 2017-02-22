import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import plants from './plants';

const rootReducer = combineReducers({plants, routing: routerReducer });

export default rootReducer;
