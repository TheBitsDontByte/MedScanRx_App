import axios from "axios";
import { BASE_URL } from "../dev_misc/globals";

export const GET_ALL_MEDICINES = "get_all_medicines";
export const GET_MEDICINE = "get_medicine";
export const GET_PRESCRIPTION_WITH_ALERTS = "get_prescription_with_alerts";

//MOCK DEV BELOW
import {TIMEOUT_DURATION } from '../dev_misc/globals'
import { allMedicines } from '../dev_misc/globals';

export const getAllPrescriptionInfo = (patientId) => {
  return dispatch => {
    axios.get(`${BASE_URL}/Api/App/Prescription/AllPrescriptions/${patientId}`)
    .then(response => {
      dispatch({
        type: GET_ALL_MEDICINES,
        payload: response.data
      })
      console.log("The response from get all prescrip info", response)
    }).catch(response => {
      console.log("Im an error in getAllPrescriptionInfo")
    })  
  }
}

export const getPrescriptionWithAlerts = (prescriptionId) => {
  return dispatch => {
    axios.get(`${BASE_URL}/Api/App/Prescription/AllPrescriptionsWithAlerts/${prescriptionId}`)
    .then(response => {
      dispatch({
        type: GET_PRESCRIPTION_WITH_ALERTS,
        payload: response.data
      })
      console.log("The response from get all prescrip info", response)
    }).catch(response => { 
      console.log("Im an error in getAllPrescriptionInfo")
       
    })
  }
}




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

