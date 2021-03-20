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
 * Component renders the user's personal page allowing them to:
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
    getWeeklyDistanceAverage();
    getWeeklyTimeAverage();
    getWeeklySpeedAverage();
    getWeeklyPaceAverage();
    getMonthlyDistanceAverage();
    getMonthlyTimeAverage();
    getMonthlySpeedAverage();
    getMonthlyPaceAverage();
    getYearlyDistanceAverage();
    getYearlyTimeAverage();
    getYearlySpeedAverage();
    getYearlyPaceAverage();
  }, []);

  // List of all user's runs (objects) from "activities" table
  const user = useSelector((store) => store.user);
  const allUsersRuns = useSelector((store) => store.activities.usersRuns);
  const fastestRun = useSelector((store) => store.activities.fastestRun);
  const longestRun = useSelector((store) => store.activities.longestRun);
  const mostRecentRun = useSelector((store) => store.activities.mostRecentRun);
  const dailyAverages = useSelector(
    (store) => store.activities.userDailyAverages
  );
  const weeklyDistanceAverage = useSelector(
    (store) => store.activities.userWeeklyDistanceAverage
  );
  const weeklyTimeAverage = useSelector(
    (store) => store.activities.userWeeklyTimeAverage
  );
  const weeklySpeedAverage = useSelector(
    (store) => store.activities.userWeeklySpeedAverage
  );
  const weeklyPaceAverage = useSelector(
    (store) => store.activities.userWeeklyPaceAverage
  );
  const monthlyDistanceAverage = useSelector(
    (store) => store.activities.userMonthlyDistanceAverage
  );
  const monthlyTimeAverage = useSelector(
    (store) => store.activities.userMonthlyTimeAverage
  );
  const monthlySpeedAverage = useSelector(
    (store) => store.activities.userMonthlySpeedAverage
  );
  const monthlyPaceAverage = useSelector(
    (store) => store.activities.userMonthlyPaceAverage
  );
  const yearlyDistanceAverage = useSelector(
    (store) => store.activities.userYearlyDistanceAverage
  );
  const yearlyTimeAverage = useSelector(
    (store) => store.activities.userYearlyTimeAverage
  );
  const yearlySpeedAverage = useSelector(
    (store) => store.activities.userYearlySpeedAverage
  );
  const yearlyPaceAverage = useSelector(
    (store) => store.activities.userYearlyPaceAverage
  );

  // Local variables used to pass as props
  const weeklyAverages = [
    {
      weeklyDistanceAverage: weeklyDistanceAverage[0].avg,
      weeklyTimeAverage: weeklyTimeAverage[0].avg,
      weeklySpeedAverage: weeklySpeedAverage[0].avg,
      weeklyPaceAverage: weeklyPaceAverage[0].avg,
    },
  ];
  const monthlyAverages = [
    {
      monthlyDistanceAverage: monthlyDistanceAverage[0].avg,
      monthlyTimeAverage: monthlyTimeAverage[0].avg,
      monthlySpeedAverage: monthlySpeedAverage[0].avg,
      monthlyPaceAverage: monthlyPaceAverage[0].avg,
    },
  ];
  const yearlyAverages = [
    {
      yearlyDistanceAverage: yearlyDistanceAverage[0].avg,
      yearlyTimeAverage: yearlyTimeAverage[0].avg,
      yearlySpeedAverage: yearlySpeedAverage[0].avg,
      yearlyPaceAverage: yearlyPaceAverage[0].avg,
    },
  ];

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
    Function GETs user's weekly distance average
  */
  const getWeeklyDistanceAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getWeeklyDistanceAverage() ***');
    }

    // GET the weekly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_WEEKLY_DISTANCE_AVERAGE',
    });
  };

  /*
    Function GETs user's weekly time average
  */
  const getWeeklyTimeAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getWeeklyTimeAverage() ***');
    }

    // GET the weekly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_WEEKLY_TIME_AVERAGE',
    });
  };

  /*
    Function GETs user's weekly speed average
  */
  const getWeeklySpeedAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getWeeklySpeedAverage() ***');
    }

    // GET the weekly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_WEEKLY_SPEED_AVERAGE',
    });
  };

  /*
    Function GETs user's weekly pace average
  */
  const getWeeklyPaceAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getWeeklyPaceAverage() ***');
    }

    // GET the weekly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_WEEKLY_PACE_AVERAGE',
    });
  };

  /*
    Function GETs user's monthly distance average
  */
  const getMonthlyDistanceAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getMonthlyDistanceAverage() ***');
    }

    // GET the monthly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_MONTHLY_DISTANCE_AVERAGE',
    });
  };

  /*
    Function GETs user's monthly time average
  */
  const getMonthlyTimeAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getMonthlyTimeAverage() ***');
    }

    // GET the monthly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_MONTHLY_TIME_AVERAGE',
    });
  };

  /*
    Function GETs user's monthly speed average
  */
  const getMonthlySpeedAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getMonthlySpeedAverage() ***');
    }

    // GET the monthly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_MONTHLY_SPEED_AVERAGE',
    });
  };

  /*
    Function GETs user's monthly pace average
  */
  const getMonthlyPaceAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getMonthlyPaceAverage() ***');
    }

    // GET the monthly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_MONTHLY_PACE_AVERAGE',
    });
  };

  /*
    Function GETs user's monthly distance average
  */
  const getYearlyDistanceAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getYearlyDistanceAverage() ***');
    }

    // GET the yearly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_YEARLY_DISTANCE_AVERAGE',
    });
  };

  /*
    Function GETs user's yearly time average
  */
  const getYearlyTimeAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getYearlyTimeAverage() ***');
    }

    // GET the yearly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_YEARLY_TIME_AVERAGE',
    });
  };

  /*
    Function GETs user's yearly speed average
  */
  const getYearlySpeedAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getYearlySpeedAverage() ***');
    }

    // GET the yearly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_YEARLY_SPEED_AVERAGE',
    });
  };

  /*
    Function GETs user's yearly pace average
  */
  const getYearlyPaceAverage = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getYearlyPaceAverage() ***');
    }

    // GET the yearly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_YEARLY_PACE_AVERAGE',
    });
  };

  return (
    <div>
      <h1>{user.username}'s Running Log</h1>
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
          <RunMetrics
            verbose={verbose}
            dailyAverages={dailyAverages}
            weeklyAverages={weeklyAverages}
            monthlyAverages={monthlyAverages}
            yearlyAverages={yearlyAverages}
          />
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
