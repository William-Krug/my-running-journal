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

/*
  Holds user's fastest run
*/
const fastestRun = (
  state = {
    id: '',
    user_id: '',
    date: '',
    route: '',
    distance: 0,
    time: 0,
    mph: 0,
    pace: 0,
    notes: '',
  },
  action
) => {
  switch (action.type) {
    case 'SET_FASTEST_RUN':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's longest run
*/
const longestRun = (
  state = {
    id: '',
    user_id: '',
    date: '',
    route: '',
    distance: 0,
    time: 0,
    mph: 0,
    pace: 0,
    notes: '',
  },
  action
) => {
  switch (action.type) {
    case 'SET_LONGEST_RUN':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's most recent run
*/
const mostRecentRun = (
  state = {
    id: '',
    user_id: '',
    date: '',
    route: '',
    distance: 0,
    time: 0,
    mph: 0,
    pace: 0,
    notes: '',
  },
  action
) => {
  switch (action.type) {
    case 'SET_MOST_RECENT_RUN':
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys usersRuns, fastestRun,
// longestRun, mostRecentRun
// these will be on the redux state at:
// activities.usersRuns, activities.fastestRun,
// activities.longestRun, and activities.mostRecentRun
export default combineReducers({
  usersRuns,
  fastestRun,
  longestRun,
  mostRecentRun,
});
