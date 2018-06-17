export const GET_NEXT_FIVE_MEDALERTS = "get_next_5_medalerts";
export const CLEAR_VALUES = "clear_values";

//MOCK DEV BELOW
import {TIMEOUT_DURATION } from '../dev_misc/globals'
import { allMedicines } from '../dev_misc/globals';
import _ from 'lodash';

export const getNextFiveMedalerts = () => {
  const next5Meds =  _.pick(allMedicines,[1, 2, 3, 4, 5]);
  
  return dispatch => {
    setTimeout(() => {
      dispatch({  
        type: GET_NEXT_FIVE_MEDALERTS, 
        payload: next5Meds
      }); 
    }, TIMEOUT_DURATION); 
  };
};

export const clearValues = () => {
  console.log("Clearing in actions");
  
  return {
    type: CLEAR_VALUES
  }
}
