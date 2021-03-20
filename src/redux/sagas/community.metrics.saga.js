/* Import Libraries */
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

/**
 * GET endpoint for /api/communityMetrics/dailyAverages
 *
 * Grabs all of the calculated averages for distance, time,
 * speed, and pace, for the entire app user base, from the db
 *
 * @param {object} action
 */
function* fetchCommunityDailyAverages(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityDailyAverages() @@@'
  );

  try {
    const communityDailyAverages = yield axios.get(
      '/api/communityMetrics/dailyAverages'
    );

    yield put({
      type: 'SET_COMMUNITY_DAILY_AVERAGES',
      payload: communityDailyAverages.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later.',
      'error'
    );
    console.log('ERROR in GET /api/communityMetrics/dailyAverages:', error);
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

function* activitiesSaga() {
  yield takeLatest(
    'FETCH_COMMUNITY_DAILY_AVERAGES',
    fetchCommunityDailyAverages
  );
}

export default activitiesSaga;
