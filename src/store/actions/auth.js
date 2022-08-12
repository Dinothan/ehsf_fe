import axios from '../../axios/axios-config-auth';
import qs from 'qs';
import * as url from './url';
import * as actionTypes from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS,
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    errorDescription: error,
  };
};
export const singOut = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const logout = () => {
  return dispatch => {
    AsyncStorage.removeItem('token');
    dispatch(singOut());
  };
};

export const loginButtonPress = () => {
  return {
    type: actionTypes.LOGIN_PRESS,
  };
};

export const isFromLogin = () => {
  return {
    type: actionTypes.IS_FROM_LOGIN,
  };
};

export const auth = (user, callBack) => {
  return dispatch => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };

    axios
      .post(
        url.LOGIN,
        qs.stringify({
          email: user.email,
          password: user.password,
        }),
        axiosConfig,
      )
      .then(response => {
        AsyncStorage.setItem('token', response.data.token);

        dispatch(authSuccess());
        dispatch(getUser(response.data.user));
      })
      .catch(error => {
        if (error.response === undefined) {
        } else {
        }
      });
  };
};

export const getUser = data => {
  return {
    type: actionTypes.GET_USER_DETAILES,
    user: data,
  };
};
