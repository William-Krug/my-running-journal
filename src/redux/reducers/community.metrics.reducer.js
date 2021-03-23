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
  Holds community's weekly distance average
*/
const communityWeeklyDistanceAverage = (
  state = [
    {
      averageDistance: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_WEEKLY_DISTANCE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's weekly time average
*/
const communityWeeklyTimeAverage = (
  state = [
    {
      averageTime: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_WEEKLY_TIME_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's weekly speed average
*/
const communityWeeklySpeedAverage = (
  state = [
    {
      averageSpeed: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_WEEKLY_SPEED_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's weekly pace average
*/
const communityWeeklyPaceAverage = (
  state = [
    {
      averagePace: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_WEEKLY_PACE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's monthly distance average
*/
const communityMonthlyDistanceAverage = (
  state = [
    {
      averageDistance: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_MONTHLY_DISTANCE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's monthly time average
*/
const communityMonthlyTimeAverage = (
  state = [
    {
      averageTime: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_MONTHLY_TIME_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's monthly speed average
*/
const communityMonthlySpeedAverage = (
  state = [
    {
      averageSpeed: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_MONTHLY_SPEED_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's monthly pace average
*/
const communityMonthlyPaceAverage = (
  state = [
    {
      averagePace: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_MONTHLY_PACE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's yearly distance average
*/
const communityYearlyDistanceAverage = (
  state = [
    {
      averageDistance: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_YEARLY_DISTANCE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's yearly time average
*/
const communityYearlyTimeAverage = (
  state = [
    {
      averageTime: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_YEARLY_TIME_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's yearly speed average
*/
const communityYearlySpeedAverage = (
  state = [
    {
      averageSpeed: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_YEARLY_SPEED_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's yearly pace average
*/
const communityYearlyPaceAverage = (
  state = [
    {
      averagePace: 0,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_YEARLY_PACE_AVERAGE':
      return action.payload;
    default:
      return state;
  }
};

// these will be on the redux state at:
// communityMetrics.communityDailyAverages
export default combineReducers({
  communityDailyAverages,
  communityWeeklyDistanceAverage,
  communityWeeklyTimeAverage,
  communityWeeklySpeedAverage,
  communityWeeklyPaceAverage,
  communityMonthlyDistanceAverage,
  communityMonthlyTimeAverage,
  communityMonthlySpeedAverage,
  communityMonthlyPaceAverage,
  communityYearlyDistanceAverage,
  communityYearlyTimeAverage,
  communityYearlySpeedAverage,
  communityYearlyPaceAverage,
});
