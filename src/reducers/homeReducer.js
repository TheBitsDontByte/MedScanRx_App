import { GET_NEXT_FIVE_MEDALERTS, CLEAR_VALUES } from '../actions/HomeActions';

const initialState = {
  upcomingAlerts: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEXT_FIVE_MEDALERTS:
      return {...state, nextFiveMedalerts: action.payload}
    case CLEAR_VALUES:
      console.log("Clearing");
      return initialState;
;    default:
      return state;
  }
};

