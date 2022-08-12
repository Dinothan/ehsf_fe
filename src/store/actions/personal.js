import * as actionTypes from './actionTypes';

export const saveBMI = data => {
  return dispatch => {
    dispatch({type: actionTypes.SET_BMI, bmi: data});
  };
};
