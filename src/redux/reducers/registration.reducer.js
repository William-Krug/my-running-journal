/* Import Libraries */
import { combineReducers } from 'redux';

/* Redux Store Reducers */

/*
  Holds gender options from the "genders" table
*/
const allGenders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_GENDERS':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds state options from the "states" table
*/
const allStates = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_STATES':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user profile information from the "users" table
*/
const userProfile = (
  state = [
    {
      first_name: '',
      last_name: '',
      birthdate: 0,
      gender: '',
      city: '',
      state: '',
      country: '',
      username: '',
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys allGenders, allStates
// these will be on the redux state at:
// registration.allGenders, registration.allStates,
// and registration.userProfile
export default combineReducers({
  allGenders,
  allStates,
  userProfile,
});
