/* Import Libraries */
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

/**
 * GET endpoint for /api/activities/user/fastest
 *
 * Grabs the user's fastest run from the "activities" table
 * and sends them to the Redux store for use on the User's
 * page
 *
 * @param {object} action
 */
function* fetchFastestRun(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchFastestRun() @@@');

  try {
    const fastestRun = yield axios.get('/api/activities/user/fastest');

    yield put({
      type: 'SET_FASTEST_RUN',
      // Last row (index) in sql query meets both fastest
      // and most recent parameters
      payload: fastestRun.data[fastestRun.data.length - 1],
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/fastest', error);
  }
}

/**
 * GET endpoint for /api/activities/user/longest
 *
 * Grabs the user's longest run from the "activities" table
 * and sends them to the Redux store for use on the User's
 * page
 *
 * @param {object} action
 */
function* fetchLongestRun(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchLongestRun() @@@');

  try {
    const longestRun = yield axios.get('/api/activities/user/longest');

    yield put({
      type: 'SET_LONGEST_RUN',
      // Last row (index) in sql query meets both longest
      // and most recent parameters
      payload: longestRun.data[longestRun.data.length - 1],
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/longest', error);
  }
}

/**
 * GET endpoint for /api/activities/user/mostRecent
 *
 * Grabs the user's most recent run from the "activities"
 * table and sends them to the Redux store for use on the
 * User's page
 *
 * @param {object} action
 */
function* fetchMostRecentRun(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchMostRecentRun() @@@');

  try {
    const mostRecent = yield axios.get('/api/activities/user/mostRecent');

    yield put({
      type: 'SET_MOST_RECENT_RUN',
      // Last row (index) in sql query meets both most
      // recent and most recent parameters
      payload: mostRecent.data[mostRecent.data.length - 1],
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/mostRecent', error);
  }
}

/**
 * GET endpoint for /api/activities/user
 *
 * Grabs all of a user's runs from the "activities" table
 * and sends them to the Redux store for use on the User's
 * page
 *
 * @param {object} action
 */
function* fetchUsersRuns(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUsersRuns() @@@');

  try {
    const usersRuns = yield axios.get('/api/activities/user');

    yield put({
      type: 'SET_USERS_RUNS',
      payload: usersRuns.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user', error);
  }
}

/**
 * GET endpoint for /api/activities/user/dailyAverages
 *
 * Grabs all of the calculates averages for distance, time,
 * speed, and pace, for one user, from the db
 *
 * @param {object} action
 */
function* fetchUserDailyAverages(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserDailyAverages() @@@');

  try {
    const userDailyAverages = yield axios.get(
      '/api/activities/user/dailyAverages'
    );
    console.log('**&&%% userDailyAverages.data:', userDailyAverages.data);
    yield put({
      type: 'SET_USER_DAILY_AVERAGES',
      payload: userDailyAverages.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/dailyAverages', error);
  }
}

/**
 * POST endpoint for /api/activities
 *
 * Sends logged run to the "activities" table
 *
 * Updates all metrics after each POST
 *
 * @param {object} action
 */
function* logNewRun(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> logNewRun() @@@');
  console.log('action.payload:', action.payload);

  // POST new run to "activities" table
  try {
    yield axios.post('/api/activities', action.payload);

    // Update all reducers for user's page
    yield put({
      type: 'FETCH_USERS_RUNS',
    });
    yield put({
      type: 'FETCH_MOST_RECENT_RUN',
    });
    yield put({
      type: 'FETCH_LONGEST_RUN',
    });
    yield put({
      type: 'FETCH_FASTEST_RUN',
    });
    yield put({
      type: 'FETCH_USER_DAILY_AVERAGES',
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in POST /api/activities', error);
  }
}

function* activitiesSaga() {
  yield takeLatest('LOG_NEW_RUN', logNewRun);
  yield takeLatest('FETCH_USERS_RUNS', fetchUsersRuns);
  yield takeLatest('FETCH_FASTEST_RUN', fetchFastestRun);
  yield takeLatest('FETCH_LONGEST_RUN', fetchLongestRun);
  yield takeLatest('FETCH_MOST_RECENT_RUN', fetchMostRecentRun);
  yield takeLatest('FETCH_USER_DAILY_AVERAGES', fetchUserDailyAverages);
}

export default activitiesSaga;
