/* Import Libraries */
import { combineReducers } from 'redux';

/* Redux Store Reducers */

/*
  Holds community's daily averages on distance, time, speed and pace
*/
const communityDailyAverages = (
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
    case 'SET_COMMUNITY_DAILY_AVERAGES':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's weekly distance average
*/
const userWeeklyDistanceAverage = (
  state = [
    {
      averageDistance: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_WEEKLY_DISTANCE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's weekly time average
*/
const userWeeklyTimeAverage = (
  state = [
    {
      averageTime: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_WEEKLY_TIME_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's weekly speed average
*/
const userWeeklySpeedAverage = (
  state = [
    {
      averageSpeed: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_WEEKLY_SPEED_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's weekly pace average
*/
const userWeeklyPaceAverage = (
  state = [
    {
      averagePace: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_WEEKLY_PACE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's monthly distance average
*/
const userMonthlyDistanceAverage = (
  state = [
    {
      averageDistance: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_MONTHLY_DISTANCE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's monthly time average
*/
const userMonthlyTimeAverage = (
  state = [
    {
      averageTime: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_MONTHLY_TIME_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's monthly speed average
*/
const userMonthlySpeedAverage = (
  state = [
    {
      averageSpeed: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_MONTHLY_SPEED_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's monthly pace average
*/
const userMonthlyPaceAverage = (
  state = [
    {
      averagePace: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_MONTHLY_PACE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's yearly distance average
*/
const userYearlyDistanceAverage = (
  state = [
    {
      averageDistance: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_YEARLY_DISTANCE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's yearly time average
*/
const userYearlyTimeAverage = (
  state = [
    {
      averageTime: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_YEARLY_TIME_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's yearly speed average
*/
const userYearlySpeedAverage = (
  state = [
    {
      averageSpeed: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_YEARLY_SPEED_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds user's yearly pace average
*/
const userYearlyPaceAverage = (
  state = [
    {
      averagePace: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_USER_YEARLY_PACE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

// make one object that has keys usersRuns, fastestRun,
// longestRun, mostRecentRun
// these will be on the redux state at:
// communityMetrics.communityDailyAverages
export default combineReducers({
  communityDailyAverages,
});
