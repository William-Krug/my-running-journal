/* Import Libraries */
import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';

/* Import Components */
import LogRunForm from '../LogRunForm/LogRunForm';
import RunDetails from '../RunDetails/RunDetails';
import RunMetrics from '../RunMetrics/RunMetrics';
import LineChart from '../../charts/LineChart';

/**
 * Component render's the user's personal page allowing them to:
 * - Log a new run
 * - Review their dashboard (recent run, longest run, fastest run)
 * - View their metrics (averages and graph)
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @returns {jsx} renders the user's personal page
 */
function UserPage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <UserPage /> ***');
  }

  const dispatch = useDispatch();

  // GET all of the user's runs on page load
  useEffect(() => {
    getUsersRuns();
    findMostRecentRun();
    findLongestRun();
    findFastestRun();
    getDailyAverages();
    getWeeklyAverages();
  }, []);

  // List of all user's runs (objects) from "activities" table
  const allUsersRuns = useSelector((store) => store.activities.usersRuns);
  const fastestRun = useSelector((store) => store.activities.fastestRun);
  const longestRun = useSelector((store) => store.activities.longestRun);
  const mostRecentRun = useSelector((store) => store.activities.mostRecentRun);
  const dailyAverages = useSelector(
    (store) => store.activities.userDailyAverages
  );

  /*
    Function GETs all of the logged in user's runs from the
    "activities" table
  */
  const getUsersRuns = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getUsersRuns');
    }

    // GET runs from "activities" table
    dispatch({
      type: 'FETCH_USERS_RUNS',
    });
  };

  /*
    Function GETs user's fastest run by speed (mph)

    The more recent run will be used in the event multiple
    runs qualify. 
  */
  const findFastestRun = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> findFastest() ***');
    }

    // GET fastest run from "activities" table
    dispatch({
      type: 'FETCH_FASTEST_RUN',
    });
  };

  /*
    Function GETs user's longest run by distance.

    The more recent run will be used in the event multiple
    runs qualify. 
  */
  const findLongestRun = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> findLongestRun() ***');
    }

    // GET longest run from "activities" table
    dispatch({
      type: 'FETCH_LONGEST_RUN',
    });
  };

  /*
    Function GETs user's most recent run by date.

    The more recent run will be used in the event multiple
    runs qualify.
  */
  const findMostRecentRun = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> findMostRecentRun() ***');
    }

    // GET most recent run from "activities" table
    dispatch({
      type: 'FETCH_MOST_RECENT_RUN',
    });
  };

  /*
    Function GETs user's daily averages on
    - Distance
    - Time
    - Speed
    - Pace
  */
  const getDailyAverages = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getDailyAverages() ***');
    }

    // GET the daily averages from "activities" table
    dispatch({
      type: 'FETCH_USER_DAILY_AVERAGES',
    });
  };

  /*
    Function GETs user's weekly averages on
    - Distance
    - Time
    - Speed
    - Pace
  */
  const getWeeklyAverages = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getWeeklyAverages() ***');
    }

    // GET the weekly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_WEEKLY_AVERAGES',
    });
  };

  return (
    <div>
      {/* Log a new run */}
      <section>
        <LogRunForm verbose={verbose} />
      </section>

      {/* Dashboard */}
      <section>
        <h2>Dashboard</h2>

        {/* Most Recent Run */}
        <div>
          <RunDetails
            verbose={verbose}
            title={'Most Recent Run'}
            runDetails={mostRecentRun}
          />
        </div>

        {/* Longest Run */}
        <div>
          <RunDetails
            verbose={verbose}
            title={'Longest Run'}
            runDetails={longestRun}
          />
        </div>

        {/* Fastest Run */}
        <div>
          <RunDetails
            verbose={verbose}
            title={'Fastest Run'}
            runDetails={fastestRun}
          />
        </div>
      </section>

      {/* Metrics */}
      <section>
        <h2>Metrics</h2>
        <div>
          <RunMetrics verbose={verbose} dailyAverages={dailyAverages} />
        </div>
        <div>
          <LineChart
            verbose={verbose}
            allUsersRuns={allUsersRuns}
            label={'Distance'}
            title={'Run History'}
          />
        </div>
      </section>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
