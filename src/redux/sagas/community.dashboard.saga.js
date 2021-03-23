/* Import Libraries */
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

/**
 * GET endpoint for /api/communityDashboard/genderBreakdown
 *
 * Finds the percentage of users who identify as each gender
 *
 * @param {object} action
 */
function* fetchGenderBreakdown(action) {
  // Breadcrumbs for testing and debugging
  // console.log('@@@ community.dashboard.saga -> fetchGenderBreakdown() @@@');

  try {
    const genderBreakdown = yield axios.get(
      '/api/communityDashboard/genderBreakdown'
    );

    yield put({
      type: 'SET_COMMUNITY_GENDER_BREAKDOWN',
      payload: genderBreakdown.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later.',
      'error'
    );
    console.log('ERROR in GET /api/communityDashboard/genderBreakdown:', error);
  }
}

/**
 * GET endpoint for /api/communityDashboard/stateBreakdown
 *
 * Finds the percentage of users from each state
 *
 * @param {object} action
 */
function* fetchStateBreakdown(action) {
  // Breadcrumbs for testing and debugging
  // console.log('@@@ community.dashboard.saga -> fetchStateBreakdown() @@@');

  try {
    const stateBreakdown = yield axios.get(
      '/api/communityDashboard/stateBreakdown'
    );

    yield put({
      type: 'SET_COMMUNITY_STATE_BREAKDOWN',
      payload: stateBreakdown.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later.',
      'error'
    );
    console.log('ERROR in GET /api/communityDashboard/stateBreakdown:', error);
  }
}

function* activitiesSaga() {
  yield takeLatest('FETCH_GENDER_BREAKDOWN', fetchGenderBreakdown);
  yield takeLatest('FETCH_STATE_BREAKDOWN', fetchStateBreakdown);
}

export default activitiesSaga;
