import {applyMiddleware, createStore, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// import {reducer} from "../components/Register/store";
//
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export default createStore(reducer,composeEnhancers(applyMiddleware(logger,thunk)))