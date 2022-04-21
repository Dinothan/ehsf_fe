import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import axios from '../modules/redux-interceptor/';
import axiosMiddleware from 'redux-axios-middleware';
import authReducer from './reducers/auth';
import productReducer from './reducers/personal';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  user: productReducer,
});

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(axiosMiddleware(axios), thunk)),
  );
};

export default configureStore;
