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
  // console.log('@@@ registration.saga -> fetchAllGenders() @@@');

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
  // console.log('@@@ registration.saga -> fetchAllStates() @@@');

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

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload);

    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: action.payload });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
  yield takeLatest('FETCH_ALL_GENDERS', fetchAllGenders);
  yield takeLatest('FETCH_ALL_STATES', fetchAllStates);
}

export default registrationSaga;
