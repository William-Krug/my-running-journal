/* Import Libraries */
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

/**
 * GET endpoint for /api/registration/allGenders
 *
 * Sends gender options from "genders" table to
 * Redux store for use in the registration and edit
 * profile functions
 *
 * @param {object} action
 */
function* fetchAllGenders(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ registration.saga -> fetchAllGenders() @@@');

  // GET all gender options from "genders" table
  try {
    const allGenders = yield axios.get('/api/registration/allGenders');

    // save gender options in Redux store
    yield put({
      type: 'SET_ALL_GENDERS',
      payload: allGenders.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/registration/allGenders', error);
  }
}

/**
 * GET endpoint for /api/registration/allStates
 *
 * Sends state options from "states" table to
 * Redux store for use in the registration and edit
 * profile functions
 *
 * @param {object} action
 */
function* fetchAllStates(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ registration.saga -> fetchAllStates() @@@');

  // GET all state options from the "states" table
  try {
    const allStates = yield axios.get('/api/registration/allStates');

    // save state options in Redux store
    yield put({
      type: 'SET_ALL_STATES',
      payload: allStates.data,
    });
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    console.log('ERROR in GET /api/user/allStates', error);
  }
}

function* logNewRun(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ activities.saga -> logNewRun() @@@');
  console.log('action.payload:', action.payload);
}

function* activitiesSaga() {
  yield takeLatest('LOG_NEW_RUN', logNewRun);
}

export default activitiesSaga;
