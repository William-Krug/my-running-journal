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
  // console.log('@@@ activities.saga -> fetchFastestRun() @@@');

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
      'My Running Journal: Fastest Run',
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
      'My Running Journal: Longest Run',
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
      'My Running Journal: Most Recent Run',
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
      'My Running Journal: User Runs',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user', error);
  }
}

/**
 * GET endpoint for /api/activities/user/dailyAverages
 *
 * Grabs all of the calculated averages for distance, time,
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

    yield put({
      type: 'SET_USER_DAILY_AVERAGES',
      payload: userDailyAverages.data,
    });
  } catch (error) {
    swal(
      'My Running Journal: Daily Averages',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/dailyAverages', error);
  }
}

/**
 * GET endpoint for /api/activities/user/weeklyDistanceAverage
 *
 * Grabs the calculated weekly average for distance from the db
 *
 * @param {object} action
 */
function* fetchUserWeeklyDistanceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserWeeklyDistanceAverage() @@@');

  try {
    const userWeeklyDistanceAverage = yield axios.get(
      '/api/activities/user/weeklyDistanceAverage'
    );

    yield put({
      type: 'SET_USER_WEEKLY_DISTANCE_AVERAGE',
      payload: userWeeklyDistanceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/user/weeklyDistanceAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/activities/user/weeklyTimeAverage
 *
 * Grabs the calculated weekly average for time from the db
 *
 * @param {object} action
 */
function* fetchUserWeeklyTimeAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserWeeklyTimeAverage() @@@');

  try {
    const userWeeklyTimeAverage = yield axios.get(
      '/api/activities/user/weeklyTimeAverage'
    );
    console.log('!!@@## userWeeklyTimeAverage:', userWeeklyTimeAverage.data);
    yield put({
      type: 'SET_USER_WEEKLY_TIME_AVERAGE',
      payload: userWeeklyTimeAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/weeklyTimeAverage', error);
  }
}

/**
 * GET endpoint for /api/activities/user/weeklySpeedAverage
 *
 * Grabs the calculated weekly average for time from the db
 *
 * @param {object} action
 */
function* fetchUserWeeklySpeedAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserWeeklySpeedAverage() @@@');

  try {
    const userWeeklySpeedAverage = yield axios.get(
      '/api/activities/user/weeklySpeedAverage'
    );

    yield put({
      type: 'SET_USER_WEEKLY_SPEED_AVERAGE',
      payload: userWeeklySpeedAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/weeklySpeedAverage', error);
  }
}

/**
 * GET endpoint for /api/activities/user/weeklyPaceAverage
 *
 * Grabs the calculated weekly average for time from the db
 *
 * @param {object} action
 */
function* fetchUserWeeklyPaceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserWeeklyPaceAverage() @@@');

  try {
    const userWeeklyPaceAverage = yield axios.get(
      '/api/activities/user/weeklyPaceAverage'
    );

    yield put({
      type: 'SET_USER_WEEKLY_PACE_AVERAGE',
      payload: userWeeklyPaceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/weeklyPaceAverage', error);
  }
}

/**
 * GET endpoint for /api/activities/user/monthlyDistanceAverage
 *
 * Grabs the calculated monthly average for distance from the db
 *
 * @param {object} action
 */
function* fetchUserMonthlyDistanceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserMonthlyDistanceAverage() @@@');

  try {
    const userMonthlyDistanceAverage = yield axios.get(
      '/api/activities/user/monthlyDistanceAverage'
    );

    yield put({
      type: 'SET_USER_MONTHLY_DISTANCE_AVERAGE',
      payload: userMonthlyDistanceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/user/monthlyDistanceAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/activities/user/monthlyTimeAverage
 *
 * Grabs the calculated monthly average for time from the db
 *
 * @param {object} action
 */
function* fetchUserMonthlyTimeAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserMonthlyTimeAverage() @@@');

  try {
    const userMonthlyTimeAverage = yield axios.get(
      '/api/activities/user/monthlyTimeAverage'
    );

    yield put({
      type: 'SET_USER_MONTHLY_TIME_AVERAGE',
      payload: userMonthlyTimeAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/monthlyTimeAverage', error);
  }
}

/**
 * GET endpoint for /api/activities/user/monthlySpeedAverage
 *
 * Grabs the calculated monthly average for time from the db
 *
 * @param {object} action
 */
function* fetchUserMonthlySpeedAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserMonthlySpeedAverage() @@@');

  try {
    const userMonthlySpeedAverage = yield axios.get(
      '/api/activities/user/monthlySpeedAverage'
    );

    yield put({
      type: 'SET_USER_MONTHLY_SPEED_AVERAGE',
      payload: userMonthlySpeedAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/monthlySpeedAverage', error);
  }
}

/**
 * GET endpoint for /api/activities/user/monthlyPaceAverage
 *
 * Grabs the calculated monthly average for time from the db
 *
 * @param {object} action
 */
function* fetchUserMonthlyPaceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserMonthlyPaceAverage() @@@');

  try {
    const userMonthlyPaceAverage = yield axios.get(
      '/api/activities/user/monthlyPaceAverage'
    );

    yield put({
      type: 'SET_USER_MONTHLY_PACE_AVERAGE',
      payload: userMonthlyPaceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/monthlyPaceAverage', error);
  }
}

/**
 * GET endpoint for /api/activities/user/yearlyDistanceAverage
 *
 * Grabs the calculated yearly average for distance from the db
 *
 * @param {object} action
 */
function* fetchUserYearlyDistanceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserYearlyDistanceAverage() @@@');

  try {
    const userYearlyDistanceAverage = yield axios.get(
      '/api/activities/user/yearlyDistanceAverage'
    );

    yield put({
      type: 'SET_USER_YEARLY_DISTANCE_AVERAGE',
      payload: userYearlyDistanceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/user/yearlyDistanceAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/activities/user/yearlyTimeAverage
 *
 * Grabs the calculated yearly average for time from the db
 *
 * @param {object} action
 */
function* fetchUserYearlyTimeAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserYearlyTimeAverage() @@@');

  try {
    const userYearlyTimeAverage = yield axios.get(
      '/api/activities/user/yearlyTimeAverage'
    );

    yield put({
      type: 'SET_USER_YEARLY_TIME_AVERAGE',
      payload: userYearlyTimeAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/yearlyTimeAverage', error);
  }
}

/**
 * GET endpoint for /api/activities/user/yearlySpeedAverage
 *
 * Grabs the calculated yearly average for time from the db
 *
 * @param {object} action
 */
function* fetchUserYearlySpeedAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserYearlySpeedAverage() @@@');

  try {
    const userYearlySpeedAverage = yield axios.get(
      '/api/activities/user/yearlySpeedAverage'
    );

    yield put({
      type: 'SET_USER_YEARLY_SPEED_AVERAGE',
      payload: userYearlySpeedAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/yearlySpeedAverage', error);
  }
}

/**
 * GET endpoint for /api/activities/user/yearlyPaceAverage
 *
 * Grabs the calculated yearly average for time from the db
 *
 * @param {object} action
 */
function* fetchUserYearlyPaceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> fetchUserYearlyPaceAverage() @@@');

  try {
    const userYearlyPaceAverage = yield axios.get(
      '/api/activities/user/yearlyPaceAverage'
    );

    yield put({
      type: 'SET_USER_YEARLY_PACE_AVERAGE',
      payload: userYearlyPaceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/activities/user/yearlyPaceAverage', error);
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
    yield put({
      type: 'FETCH_USER_WEEKLY_AVERAGES',
    });
    yield put({
      type: 'FETCH_USER_WEEKLY_DISTANCE_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_WEEKLY_TIME_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_WEEKLY_SPEED_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_WEEKLY_PACE_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_MONTHLY_DISTANCE_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_MONTHLY_TIME_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_MONTHLY_SPEED_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_MONTHLY_PACE_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_YEARLY_DISTANCE_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_YEARLY_TIME_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_YEARLY_SPEED_AVERAGE',
    });
    yield put({
      type: 'FETCH_USER_YEARLY_PACE_AVERAGE',
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
  yield takeLatest(
    'FETCH_USER_WEEKLY_DISTANCE_AVERAGE',
    fetchUserWeeklyDistanceAverage
  );
  yield takeLatest(
    'FETCH_USER_WEEKLY_TIME_AVERAGE',
    fetchUserWeeklyTimeAverage
  );
  yield takeLatest(
    'FETCH_USER_WEEKLY_SPEED_AVERAGE',
    fetchUserWeeklySpeedAverage
  );
  yield takeLatest(
    'FETCH_USER_WEEKLY_PACE_AVERAGE',
    fetchUserWeeklyPaceAverage
  );
  yield takeLatest(
    'FETCH_USER_MONTHLY_DISTANCE_AVERAGE',
    fetchUserMonthlyDistanceAverage
  );
  yield takeLatest(
    'FETCH_USER_MONTHLY_TIME_AVERAGE',
    fetchUserMonthlyTimeAverage
  );
  yield takeLatest(
    'FETCH_USER_MONTHLY_SPEED_AVERAGE',
    fetchUserMonthlySpeedAverage
  );
  yield takeLatest(
    'FETCH_USER_MONTHLY_PACE_AVERAGE',
    fetchUserMonthlyPaceAverage
  );
  yield takeLatest(
    'FETCH_USER_YEARLY_DISTANCE_AVERAGE',
    fetchUserYearlyDistanceAverage
  );
  yield takeLatest(
    'FETCH_USER_YEARLY_TIME_AVERAGE',
    fetchUserYearlyTimeAverage
  );
  yield takeLatest(
    'FETCH_USER_YEARLY_SPEED_AVERAGE',
    fetchUserYearlySpeedAverage
  );
  yield takeLatest(
    'FETCH_USER_YEARLY_PACE_AVERAGE',
    fetchUserYearlyPaceAverage
  );
}

export default activitiesSaga;
