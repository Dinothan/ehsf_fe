import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  errorDescription: null,
  error: false,
  logout: false,
  isAuthenticated: false,
};

const authSuccess = (state, action) => {
  console.log('state :', state);
  return updateObject(state, {
    error: false,
    isAuthenticated: true,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    errorDescription: action.errorDescription,
    error: true,
    isFromLogin: false,
    isAuthenticated: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    isAuthenticated: false,
  });
};

const loginButtonPress = (state, action) => {
  return updateObject(state, {isFromLogin: true});
};

const isFromLogin = state => {
  return updateObject(state, {isFromLogin: false, fromSignUp: false});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.LOGIN_PRESS:
      return loginButtonPress(state, action);
    default:
      return state;
  }
};

export default reducer;
