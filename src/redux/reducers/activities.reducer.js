/* Import Libraries */
import { combineReducers } from 'redux';
import moment from 'moment';

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
    case 'UNSET_ALL':
      return {
        id: 0,
        user_id: 0,
        date: 0,
        route: '',
        distance: 0,
        time: 0,
        speed: 0,
        pace: 0,
        notes: '',
      };
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
    case 'UNSET_ALL':
      return {
        id: 0,
        user_id: 0,
        date: 0,
        route: '',
        distance: 0,
        time: 0,
        speed: 0,
        pace: 0,
        notes: '',
      };
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
    case 'UNSET_ALL':
      return {
        id: 0,
        user_id: 0,
        date: 0,
        route: '',
        distance: 0,
        time: 0,
        speed: 0,
        pace: 0,
        notes: '',
      };
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
    case 'UNSET_ALL':
      return {
        id: 0,
        user_id: 0,
        date: 0,
        route: '',
        distance: 0,
        time: 0,
        speed: 0,
        pace: 0,
        notes: '',
      };
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
    // case 'UNSET_ALL':
    //   return {
    //     averageDistance: 0,
    //     averageTime: 0,
    //     averageSpeed: 0,
    //     averagePace: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averageDistance: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averageTime: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averageSpeed: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averagePace: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averageDistance: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averageTime: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averageSpeed: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averagePace: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averageDistance: 0,
    //   };
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
    // case 'UNSET_ALL':
    //   return {
    //     averageTime: 0,
    //   };
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
    // case 'UNSET_ALL':
    // return {
    //   averageSpeed: 0,
    // };
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
    // case 'UNSET_ALL':
    //   return {
    //     averagePace: 0,
    //   };
    default:
      return state;
  }
};

// make one object that has keys usersRuns, fastestRun,
// longestRun, mostRecentRun
// these will be on the redux state at:
// activities.usersRuns, activities.fastestRun,
// activities.longestRun, activities.mostRecentRun,
// activities.userDailyAverages, activities.userWeeklyDistanceAverage,
// activities.userWeeklyTimeAverage, activities.userWeeklySpeedAverage,
// activities.userWeeklyPaceAverage
export default combineReducers({
  usersRuns,
  fastestRun,
  longestRun,
  mostRecentRun,
  userDailyAverages,
  userWeeklyDistanceAverage,
  userWeeklyTimeAverage,
  userWeeklySpeedAverage,
  userWeeklyPaceAverage,
  userMonthlyDistanceAverage,
  userMonthlyTimeAverage,
  userMonthlySpeedAverage,
  userMonthlyPaceAverage,
  userYearlyDistanceAverage,
  userYearlyTimeAverage,
  userYearlySpeedAverage,
  userYearlyPaceAverage,
});
