import { combineReducers } from 'redux';

const allGenders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_GENDERS':
      return action.payload;
    default:
      return state;
  }
};

const allStates = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_STATES':
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  allGenders,
  allStates,
});
