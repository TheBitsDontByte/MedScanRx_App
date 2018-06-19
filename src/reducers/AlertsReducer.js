import { GET_ALL_ALERTS, GET_UPCOMING_ALERTS } from "../actions/AlertsActions";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ALERTS:
    case GET_UPCOMING_ALERTS:
      return { ...state, allUpcomingAlerts: action.payload };
    default:
      return state;
  }
};
