/* Import Libraries */
import { combineReducers } from 'redux';

/* Redux Store Reducers */

/*
  Holds all of a user's runs (activities)
*/
const usersRuns = (
  state = [
    {
      id: 0,
      user_id: 0,
      date: 0,
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
    id: 0,
    user_id: 0,
    date: 0,
    route: '',
    distance: 0,
    time: 0,
    speed: 0,
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
    id: 0,
    user_id: 0,
    date: 0,
    route: '',
    distance: 0,
    time: 0,
    speed: 0,
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
    id: 0,
    user_id: 0,
    date: 0,
    route: '',
    distance: 0,
    time: 0,
    speed: 0,
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

/*
  Holds user's daily averages on distance, time, speed and pace
*/
const userDailyAverages = (
  state = [
    {
      averageDistance: 0,
      averageTime: 0,
      averageSpeed: 0,
      averagePace: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_DAILY_AVERAGES':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's daily averages on distance, time, speed and pace
*/
const userWeeklyAverages = (
  state = [
    {
      averageDistance: 0,
      averageTime: 0,
      averageSpeed: 0,
      averagePace: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_WEEKLY_AVERAGES':
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys usersRuns, fastestRun,
// longestRun, mostRecentRun
// these will be on the redux state at:
// activities.usersRuns, activities.fastestRun,
// activities.longestRun, activities.mostRecentRun,
// activities.userDailyAverages, and activities.userWeeklyAverages
export default combineReducers({
  usersRuns,
  fastestRun,
  longestRun,
  mostRecentRun,
  userDailyAverages,
  userWeeklyAverages,
});
