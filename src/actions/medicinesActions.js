export const GET_ALL_MEDICINES = "get_all_medicines";
export const GET_MEDICINE = "get_medicine";

//MOCK DEV BELOW
import {TIMEOUT_DURATION } from '../dev_misc/globals'
import { allMedicines } from '../dev_misc/globals';

export const getAllMedicines = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: GET_ALL_MEDICINES,
        payload: allMedicines
      }); 
    }, TIMEOUT_DURATION);
  };
};

export const getMedicine = (medicineId) => {
  return {
    type: GET_MEDICINE,
    payload: allMedicines[medicineId]
  }
}

