import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";

import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'

import thunk from "redux-thunk";

import { createTracker } from 'redux-segment';

const tracker = createTracker();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk, tracker))
);

export default store