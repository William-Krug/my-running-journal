/* Import Libraries */
import { combineReducers } from 'redux';

/* Redux Store Reducers */

/*
  Holds community's breakdown of age breakdown
*/
const ageBreakdown = (
  state = [
    {
      label: 'female',
      data: 40.12,
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
  Holds community's breakdown of which genders members identify as
*/
const genderBreakdown = (
  state = [
    {
      label: 'female',
      data: 40.12,
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
      label: 'alabama',
      data: 12.8,
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
      label: 'United States',
      data: 100,
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

/*
  Holds community's breakdown of distance per run
*/
const distanceBreakdown = (
  state = [
    {
      label: '< 3',
      data: 1.63,
    },
    {
      label: '4-6',
      data: 5.85,
    },
    {
      label: '7-10',
      data: 5.85,
    },
    {
      label: '11-15',
      data: 4.7,
    },
    {
      label: '15+',
      data: 81.96,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_DISTANCE_BREAKDOWN':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's breakdown of time per run
*/
const timeBreakdown = (
  state = [
    {
      label: '< 15',
      data: 0.38,
    },
    {
      label: '15-30',
      data: 3.55,
    },
    {
      label: '30-45',
      data: 0.48,
    },
    {
      label: '45-60',
      data: 0.67,
    },
    {
      label: '60-90',
      data: 0.86,
    },
    {
      label: '90+',
      data: 94.05,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_TIME_BREAKDOWN':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's breakdown of speed per run
*/
const speedBreakdown = (
  state = [
    {
      label: '< 4',
      data: 83.2,
    },
    {
      label: '4-6',
      data: 2.88,
    },
    {
      label: '6-8',
      data: 6.72,
    },
    {
      label: '8-10',
      data: 1.63,
    },
    {
      label: '10+',
      data: 5.57,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_SPEED_BREAKDOWN':
      return action.payload;
    default:
      return state;
  }
};

/*
  Holds community's breakdown of pace per run
*/
const paceBreakdown = (
  state = [
    {
      label: '< 6',
      data: 5.85,
    },
    {
      label: '7',
      data: 1.34,
    },
    {
      label: '8',
      data: 0.96,
    },
    {
      label: '9',
      data: 4.41,
    },
    {
      label: '10',
      data: 1.82,
    },
    {
      label: '11',
      data: 0.86,
    },
    {
      label: '12',
      data: 0.38,
    },
    {
      label: '13',
      data: 0.19,
    },
    {
      label: '14+',
      data: 84.17,
    },
  ],
  action
) => {
  switch (action.type) {
    case 'SET_COMMUNITY_PACE_BREAKDOWN':
      return action.payload;
    default:
      return state;
  }
};

// these will be on the redux state at:
// communityDashboard.ageBreakdown, communityDashboard.genderBreakdown,
// communityDashboard.stateBreakdown, communityDashboard.countryBreakdown,
// communityDashboard.distanceBreakdown, communityDashboard.timeBreakdown,
// communityDashboard.speedBreakdown, and communityDashboard.paceBreakdown
export default combineReducers({
  ageBreakdown,
  genderBreakdown,
  stateBreakdown,
  countryBreakdown,
  distanceBreakdown,
  timeBreakdown,
  speedBreakdown,
  paceBreakdown,
});
