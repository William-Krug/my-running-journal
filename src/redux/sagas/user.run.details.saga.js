/* Import Libraries */
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';

/**
 * GET endpoint for /api/userRunDetails/getSingleRun/:id
 *
 * GETs the details about a single run from the "activities"
 * table to be displayed in the popup window on the `<UserPage />`
 *
 * @param {object} action
 */
function* fetchSingleRun(action) {
  // Breadcrumbs for testing and debugging
  console.log('@@@ community.metrics.saga -> fetchSingleRun() @@@');
  console.log('\taction.payload:', action.payload);

  try {
    const singleRunDetails = yield axios.get(
      `/api/userRunDetails/getSingleRun/${action.payload.id}`
    );

    yield put({
      type: 'SET_SINGLE_RUN_DETAILS',
      payload: singleRunDetails.data,
    });
    action.onComplete();
  } catch (error) {
    swal(
      'My Running Journal',
      'An ERROR occurred during request.  Please try again later.',
      'error'
    );
    console.log('ERROR in GET /api/communityMetrics/dailyAverages:', error);
  }
}

function* activitiesSaga() {
  yield takeLatest('FETCH_SINGLE_RUN', fetchSingleRun);
}

export default activitiesSaga;
