/* Import Libraries */
import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

/* Import Components */
import LogRunForm from '../LogRunForm/LogRunForm';
import RunDetails from '../RunDetails/RunDetails';
import RunMetrics from '../RunMetrics/RunMetrics';
import LineChart from '../../charts/LineChart';
import Popup from '../Popup/Popup';

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
    getWeeklyAverages();
    getMonthlyAverages();
    getYearlyAverages();
  }, []);

  // Dynamic state variables held in Redux store
  const user = useSelector((store) => store.user);
  const [openPopup, setOpenPopup] = useState(false);
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

    // GET weekly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_WEEKLY_DISTANCE_AVERAGE',
    });
    dispatch({
      type: 'FETCH_USER_WEEKLY_TIME_AVERAGE',
    });
    dispatch({
      type: 'FETCH_USER_WEEKLY_SPEED_AVERAGE',
    });
    dispatch({
      type: 'FETCH_USER_WEEKLY_PACE_AVERAGE',
    });
  };

  /*
    Function GETs user's monthly averages on
    - Distance
    - Time
    - Speed
    - Pace
  */
  const getMonthlyAverages = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getMonthlyAverages() ***');
    }

    // GET monthly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_MONTHLY_DISTANCE_AVERAGE',
    });
    dispatch({
      type: 'FETCH_USER_MONTHLY_TIME_AVERAGE',
    });
    dispatch({
      type: 'FETCH_USER_MONTHLY_SPEED_AVERAGE',
    });
    dispatch({
      type: 'FETCH_USER_MONTHLY_PACE_AVERAGE',
    });
  };

  /*
    Function GETs user's yearly averages on
    - Distance
    - Time
    - Speed
    - Pace
  */
  const getYearlyAverages = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <UserPage /> -> getYearlyAverages() ***');
    }

    // GET yearly averages from "activities" table
    dispatch({
      type: 'FETCH_USER_YEARLY_DISTANCE_AVERAGE',
    });
    dispatch({
      type: 'FETCH_USER_YEARLY_TIME_AVERAGE',
    });
    dispatch({
      type: 'FETCH_USER_YEARLY_SPEED_AVERAGE',
    });
    dispatch({
      type: 'FETCH_USER_YEARLY_PACE_AVERAGE',
    });
  };

  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        {/* Page Title */}
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h3" component="h1">
              <strong>{user.username}'s Running Log</strong>
            </Typography>
          </Grid>
        </Grid>

        {/* Log a new run */}
        <Popup
          title="Log New Run"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <LogRunForm verbose={verbose} setOpenPopup={setOpenPopup} />
        </Popup>

        {/* Dashboard */}
        <Box mb={3}>
          <Grid container justify="space-evenly" alignItems="flex-start">
            <Grid container justify="space-between" alignItems="center">
              {/* Title */}
              <Grid item>
                <Box pb={5} pt={5}>
                  <Typography variant="h4" component="h2">
                    <strong>Dashboard</strong>
                  </Typography>
                </Box>
              </Grid>

              {/* Add Run Button */}
              <Grid item>
                <Box pb={5} pt={5}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpenPopup(!openPopup)}
                  >
                    <AddIcon />
                    Add Run
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* Most Recent Run */}
            <Grid item xs={3}>
              <Card variant="elevation" elevation="5">
                <Box p={3}>
                  <RunDetails
                    verbose={verbose}
                    title={'Most Recent Run'}
                    runDetails={mostRecentRun}
                  />
                </Box>
              </Card>
            </Grid>

            {/* Longest Run */}
            <Grid item xs={3}>
              <Card variant="elevation" elevation="5">
                <Box p={3}>
                  <RunDetails
                    verbose={verbose}
                    title={'Longest Run'}
                    runDetails={longestRun}
                  />
                </Box>
              </Card>
            </Grid>

            {/* Fastest Run */}
            <Grid item xs={3}>
              <Card variant="elevation" elevation="5">
                <Box p={3}>
                  <RunDetails
                    verbose={verbose}
                    title={'Fastest Run'}
                    runDetails={fastestRun}
                  />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Metrics */}
        <Box mb={3}>
          <Grid container>
            <Grid item xs={2}>
              <Box pb={5} pt={5}>
                <Typography variant="h4" component="h2">
                  <strong>Metrics</strong>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Table */}
          <Grid container justify="center" alignItems="center" xs={12}>
            <Grid item xs={8}>
              <Card variant="elevation" elevation="5">
                <Box p={3}>
                  <RunMetrics
                    verbose={verbose}
                    dailyAverages={dailyAverages}
                    weeklyAverages={weeklyAverages}
                    monthlyAverages={monthlyAverages}
                    yearlyAverages={yearlyAverages}
                  />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Graphical Representation */}
        <Box mb={3} pb={5} pt={5}>
          <Grid container justify="center" alignItems="center" xs={12}>
            <Grid item xs={10}>
              <Card variant="elevation" elevation="5">
                <Box p={3}>
                  <LineChart
                    verbose={verbose}
                    allUsersRuns={allUsersRuns}
                    label={'Distance'}
                    title={'Run History'}
                  />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
