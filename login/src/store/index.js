import {applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {reducer} from "../components/Register/store";

export default createStore(reducer,applyMiddleware(logger,thunk))