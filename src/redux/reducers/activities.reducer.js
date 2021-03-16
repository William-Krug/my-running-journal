/* Import Libraries */
import { combineReducers } from 'redux';

/* Redux Store Reducers */

/*
  Holds all of a user's runs (activities)
*/
const usersRuns = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS_RUNS':
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys usersRuns,
// these will be on the redux state at:
// activities.usersRuns and registration.allStates
export default combineReducers({
  usersRuns,
});
