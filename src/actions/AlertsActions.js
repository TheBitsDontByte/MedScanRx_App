import _ from 'lodash';
import axios from 'axios';
import { BASE_URL } from "../dev_misc/globals";

export const GET_ALL_ALERTS = "get_all_alerts";
export const GET_UPCOMING_ALERTS = "get_upcoming_alerts";

//MOCK DEV BELOW
import { TIMEOUT_DURATION } from "../dev_misc/globals";
import { allMedicines } from "../dev_misc/globals";

export const getAllUpcomingAlerts = (patientId) => {
  return dispatch => {
    axios.get(`${BASE_URL}/AppApi/Prescription/AllPrescriptions/${patientId}`)
    .then(response => {
      dispatch({
        type: GET_ALL_ALERTS,
        payload: response.data
      })
      console.log("The response from get all prescrip info", response)
    }).catch(response => {
      console.log("Im an error in getAllPrescriptionInfo")
    })
  }
}

