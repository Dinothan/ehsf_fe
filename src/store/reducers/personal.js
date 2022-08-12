import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  user: {},
  bmi: null,
};

const saveBMI = (state, action) => {
  return updateObject(state, {
    bmi: action.bmi,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BMI:
      return saveBMI(state, action);
    default:
      return state;
  }
};

export default reducer;
