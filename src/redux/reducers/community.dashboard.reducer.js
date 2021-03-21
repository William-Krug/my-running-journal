/* Import Libraries */
import { combineReducers } from 'redux';

/* Redux Store Reducers */

/*
  Holds community's breakdown of which genders members identify as
*/
const genderBreakdown = (
  state = [
    {
      female: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_GENDER_BREAKDOWN':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's breakdown of which states they live in
*/
const stateBreakdown = (
  state = [
    {
      alabama: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_STATE_BREAKDOWN':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's breakdown of which country they live in
*/
const countryBreakdown = (
  state = [
    {
      'United States': 100,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_COUNTRY_BREAKDOWN':
      return action.payload;
    default:
      return state;
  }
};

// these will be on the redux state at:
// communityDashboard.genderBreakdown, communityDashboard.stateBreakdown
export default combineReducers({
  genderBreakdown,
  stateBreakdown,
  countryBreakdown,
});
