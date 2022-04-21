import axios from '../../axios/axios-config-auth';
import qs from 'qs';
import * as url from './url';
import {getProductSuccess} from './index';

export const signup = (user, callBack) => {
  return dispatch => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };

    axios
      .post(url.SIGNUP, qs.stringify(user), axiosConfig)
      .then(response => {
        console.log('response :', response.data);
        getProductSuccess(response.data);
        callBack();
      })
      .catch(error => {
        console.log('error :', error);
        if (error.response === undefined) {
        } else {
        }
      });
  };
};
