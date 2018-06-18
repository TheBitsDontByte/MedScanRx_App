import axios from "axios";
import _ from "lodash";
import { BASE_URL } from "../dev_misc/globals";

export const GET_NEXT_FIVE_MEDALERTS = "get_next_5_medalerts";
export const GET_UPCOMING_ALERTS = "get_upcoming_alerts";
export const CLEAR_VALUES = "clear_values";

//MOCK DEV BELOW

import { TIMEOUT_DURATION } from "../dev_misc/globals";
import { allMedicines } from "../dev_misc/globals";

export const getAllUpcomingAlerts = patientId => {
  return dispatch => {
    console.log("Before the axios call", `${BASE_URL}/Api/AppPrescription/UpcomingAlerts/${patientId}`);
    axios.get(`${BASE_URL}/AppApi/Prescription/UpcomingAlerts/${patientId}`)
      .then(response => { 
        dispatch({
          type: GET_UPCOMING_ALERTS,
          payload: response.data
        })
      })
      .catch(response => {
        console.log("Error response ", response);
      });
  };
};

export const getNextFiveMedalerts = () => {
  const next5Meds = _.pick(allMedicines, [1, 2, 3, 4, 5]);

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
  };
};
