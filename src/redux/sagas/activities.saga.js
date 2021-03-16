/* Import Libraries */
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

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
 * POST endpoint for /api/activities
 *
 * Sends logged run to the "activities" table
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

    yield put({
      type: 'FETCH_USERS_RUNS',
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
}

export default activitiesSaga;
