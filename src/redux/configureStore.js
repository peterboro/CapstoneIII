import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { exerciseOptions, fetchData } from '../redux/logic';

// root Reducer
const rootReducer = combineReducers({
  exercises: exerciseOptions,
  fetchData,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(logger, thunk),
);

export default store;