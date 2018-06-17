import _ from 'lodash';

export const GET_ALL_ALERTS = "get_all_alerts";
export const GET_UPCOMING_ALERTS = "get_upcoming_alerts";

//MOCK DEV BELOW
import { TIMEOUT_DURATION } from "../dev_misc/globals";
import { allMedicines } from "../dev_misc/globals";

export const getAllAlerts = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: GET_ALL_ALERTS,
        payload: allMedicines
      });
    }, TIMEOUT_DURATION);
  };
};

export const getUpcomingAlerts = () => {
  const next5Alerts = _.pick(allMedicines, [1, 2, 3, 4, 5]);
  console.log("Get upcoming", next5Alerts);
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: GET_UPCOMING_ALERTS,
        payload: next5Alerts
      });
    }, TIMEOUT_DURATION);
  };
};
