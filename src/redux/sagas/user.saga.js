import axios from 'axios';

import { put, takeLatest } from 'redux-saga/effects';
import swal from 'sweetalert';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

/**
 * PUT endpoint for /api/user/:id
 *
 * Updates user's profile.  All fields, regardless of changes
 * get updated
 *
 * @param {object} action
 */
function* updateUserProfile(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ user.saga -> updateUserProfile() @@@');
  console.log('action.payload:', action.payload);

  try {
    const updatedUser = yield axios.put(
      `/api/user/${action.payload.id}`,
      action.payload
    );

    console.log(updatedUser.data);

    yield put({
      type: 'FETCH_USER',
      payload: updatedUser.data,
    });

    action.payload.onComplete();
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    // Breadcrumbs for testing and debugging
    console.log('ERROR in GET /api/activities/user/:id', error);
  }
}

/**
 * DELETE endpoint for /api/user/delete/:id
 *
 * Deletes user from the "users" table and all of their
 * logged runs from the "activities" table
 *
 * @param {object} action
 */
function* deleteUser(action) {
  // Breadcrumbs for testing and debugging
  // console.log('@@@ user.saga -> deleteUser() @@@');
  // console.log('action.payload:', action.payload);

  // Remove user from DB
  try {
    // Log out the user first so the system doesn't lock up
    yield put({ type: 'LOGOUT' });
    yield put({ type: 'UNSET_USER' });

    // Remove user from "users" table
    yield axios.delete(`/api/user/delete/${action.payload.data}`);

    // Send the user to the homepage/landing page
    action.payload.onComplete();
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later',
      'error'
    );
    // Breadcrumbs for testing and debugging
    console.log('ERROR in GET /api/activities/user/delete/:id', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('DELETE_USER', deleteUser);
  yield takeLatest('UPDATE_USER_PROFILE', updateUserProfile);
}

export default userSaga;
