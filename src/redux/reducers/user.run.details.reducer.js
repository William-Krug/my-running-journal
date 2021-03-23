/* Import Libraries */
import { combineReducers } from 'redux';

/* Redux Store Reducers */

/*
  Holds information about a single run for the popup on
  <UserPage />
*/
const singleRunDetails = (
  state = [
    {
      id: 0,
      user_id: 0,
      date: '1984-08-10',
      route: '',
      distance: 0,
      time: 0,
      speed: 0,
      pace: 0,
      notes: '',
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_SINGLE_RUN_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

// these will be on the redux state at:
// userRunDetails.singleRunDetails
export default combineReducers({
  singleRunDetails,
});
