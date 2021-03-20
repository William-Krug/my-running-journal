/* Import Libraries */
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

/**
 * GET endpoint for /api/communityMetrics/dailyAverages
 *
 * Grabs all of the calculated averages for distance, time,
 * speed, and pace, for the entire app community base, from the db
 *
 * @param {object} action
 */
function* fetchCommunityDailyAverages(action) {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '@@@ community.metrics.saga -> fetchCommunityDailyAverages() @@@'
  // );

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
 * GET endpoint for /api/communityMetrics/weeklyDistanceAverage
 *
 * Grabs the calculated weekly average for distance from the db
 *
 * @param {object} action
 */
function* fetchCommunityWeeklyDistanceAverage(action) {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '@@@ community.metrics.saga -> fetchCommunityWeeklyDistanceAverage() @@@'
  // );

  try {
    const communityWeeklyDistanceAverage = yield axios.get(
      '/api/communityMetrics/weeklyDistanceAverage'
    );

    yield put({
      type: 'SET_COMMUNITY_WEEKLY_DISTANCE_AVERAGE',
      payload: communityWeeklyDistanceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later.',
      'error'
    );
    console.log(
      'ERROR in GET /api/communityMetrics/weeklyDistanceAverage:',
      error
    );
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyTimeAverage
 *
 * Grabs the calculated weekly average for time from the db
 *
 * @param {object} action
 */
function* fetchCommunityWeeklyTimeAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyTimeAverage() @@@'
  );

  try {
    const communityWeeklyTimeAverage = yield axios.get(
      '/api/communityMetrics/weeklyTimeAverage'
    );

    yield put({
      type: 'SET_COMMUNITY_WEEKLY_TIME_AVERAGE',
      payload: communityWeeklyTimeAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later.',
      'error'
    );
    console.log('ERROR in GET /api/communityMetrics/weeklyTimeAverage:', error);
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklySpeedAverage
 *
 * Grabs the calculated weekly average for speed from the db
 *
 * @param {object} action
 */
function* fetchCommunityWeeklySpeedAverage(action) {
  // Breadcrumbs for testing and debugging
  // console.log(
  //   '@@@ community.metrics.saga -> fetchCommunityWeeklySpeedAverage() @@@'
  // );

  try {
    const communityWeeklySpeedAverage = yield axios.get(
      '/api/communityMetrics/weeklySpeedAverage'
    );

    yield put({
      type: 'SET_COMMUNITY_WEEKLY_SPEED_AVERAGE',
      payload: communityWeeklySpeedAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later.',
      'error'
    );
    console.log('ERROR in GET /api/communityMetrics/weeklyTimeAverage:', error);
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyPaceAverage
 *
 * Grabs the calculated weekly average for pace from the db
 *
 * @param {object} action
 */
function* fetchCommunityWeeklyPaceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyPaceAverage() @@@'
  );

  try {
    const communityWeeklyPaceAverage = yield axios.get(
      '/api/communityMetrics/weeklyPaceAverage'
    );

    yield put({
      type: 'SET_COMMUNITY_WEEKLY_PACE_AVERAGE',
      payload: communityWeeklyPaceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later.',
      'error'
    );
    console.log('ERROR in GET /api/communityMetrics/weeklyPaceAverage:', error);
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyTimeAverage
 *
 * Grabs the calculated monthly average for distance from the db
 *
 * @param {object} action
 */
function* fetchcommunityMonthlyDistanceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyTimeAverage() @@@'
  );

  try {
    const communityMonthlyDistanceAverage = yield axios.get(
      '/api/activities/community/monthlyDistanceAverage'
    );

    yield put({
      type: 'SET_community_MONTHLY_DISTANCE_AVERAGE',
      payload: communityMonthlyDistanceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/community/monthlyDistanceAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyTimeAverage
 *
 * Grabs the calculated monthly average for time from the db
 *
 * @param {object} action
 */
function* fetchcommunityMonthlyTimeAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyTimeAverage() @@@'
  );

  try {
    const communityMonthlyTimeAverage = yield axios.get(
      '/api/activities/community/monthlyTimeAverage'
    );

    yield put({
      type: 'SET_community_MONTHLY_TIME_AVERAGE',
      payload: communityMonthlyTimeAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/community/monthlyTimeAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyTimeAverage
 *
 * Grabs the calculated monthly average for time from the db
 *
 * @param {object} action
 */
function* fetchcommunityMonthlySpeedAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyTimeAverage() @@@'
  );

  try {
    const communityMonthlySpeedAverage = yield axios.get(
      '/api/activities/community/monthlySpeedAverage'
    );

    yield put({
      type: 'SET_community_MONTHLY_SPEED_AVERAGE',
      payload: communityMonthlySpeedAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/community/monthlySpeedAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyTimeAverage
 *
 * Grabs the calculated monthly average for time from the db
 *
 * @param {object} action
 */
function* fetchcommunityMonthlyPaceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyTimeAverage() @@@'
  );

  try {
    const communityMonthlyPaceAverage = yield axios.get(
      '/api/activities/community/monthlyPaceAverage'
    );

    yield put({
      type: 'SET_community_MONTHLY_PACE_AVERAGE',
      payload: communityMonthlyPaceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/community/monthlyPaceAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyTimeAverage
 *
 * Grabs the calculated yearly average for distance from the db
 *
 * @param {object} action
 */
function* fetchcommunityYearlyDistanceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyTimeAverage() @@@'
  );

  try {
    const communityYearlyDistanceAverage = yield axios.get(
      '/api/activities/community/yearlyDistanceAverage'
    );

    yield put({
      type: 'SET_community_YEARLY_DISTANCE_AVERAGE',
      payload: communityYearlyDistanceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/community/yearlyDistanceAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyTimeAverage
 *
 * Grabs the calculated yearly average for time from the db
 *
 * @param {object} action
 */
function* fetchcommunityYearlyTimeAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyTimeAverage() @@@'
  );

  try {
    const communityYearlyTimeAverage = yield axios.get(
      '/api/activities/community/yearlyTimeAverage'
    );

    yield put({
      type: 'SET_community_YEARLY_TIME_AVERAGE',
      payload: communityYearlyTimeAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/community/yearlyTimeAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyTimeAverage
 *
 * Grabs the calculated yearly average for time from the db
 *
 * @param {object} action
 */
function* fetchcommunityYearlySpeedAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyTimeAverage() @@@'
  );

  try {
    const communityYearlySpeedAverage = yield axios.get(
      '/api/activities/community/yearlySpeedAverage'
    );

    yield put({
      type: 'SET_community_YEARLY_SPEED_AVERAGE',
      payload: communityYearlySpeedAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/community/yearlySpeedAverage',
      error
    );
  }
}

/**
 * GET endpoint for /api/communityMetrics/weeklyTimeAverage
 *
 * Grabs the calculated yearly average for time from the db
 *
 * @param {object} action
 */
function* fetchcommunityYearlyPaceAverage(action) {
  // Breadcrumbs for testing and debugging
  console.log(
    '@@@ community.metrics.saga -> fetchCommunityWeeklyTimeAverage() @@@'
  );

  try {
    const communityYearlyPaceAverage = yield axios.get(
      '/api/activities/community/yearlyPaceAverage'
    );

    yield put({
      type: 'SET_community_YEARLY_PACE_AVERAGE',
      payload: communityYearlyPaceAverage.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log(
      'ERROR in GET /api/activities/community/yearlyPaceAverage',
      error
    );
  }
}

function* activitiesSaga() {
  yield takeLatest(
    'FETCH_COMMUNITY_DAILY_AVERAGES',
    fetchCommunityDailyAverages
  );
  yield takeLatest(
    'FETCH_COMMUNITY_WEEKLY_DISTANCE_AVERAGE',
    fetchCommunityWeeklyDistanceAverage
  );
  yield takeLatest(
    'FETCH_COMMUNITY_WEEKLY_TIME_AVERAGE',
    fetchCommunityWeeklyTimeAverage
  );
  yield takeLatest(
    'FETCH_COMMUNITY_WEEKLY_SPEED_AVERAGE',
    fetchCommunityWeeklySpeedAverage
  );
  yield takeLatest(
    'FETCH_COMMUNITY_WEEKLY_PACE_AVERAGE',
    fetchCommunityWeeklyPaceAverage
  );
}

export default activitiesSaga;
