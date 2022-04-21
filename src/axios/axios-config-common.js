import axios from 'axios';
import CookieNative from 'react-native-cookie';
import { BASE_URL } from "../store/actions/url";

const axiosConfigCommon = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosConfigCommon.interceptors.request.use(
  async resp => {
    let token;
    await CookieNative.get(BASE_URL + '/', 'auth').then(cookie => {
      token = cookie;
    });

    if (token) {
      resp.headers.authorization = 'Bearer ' + token;
      resp.headers.Accept = 'application/json';
      resp.headers.AccessControlAllowOrigin = '*';
    }
    return resp;
  },
  error => Promise.reject(error),
);

export default axiosConfigCommon;