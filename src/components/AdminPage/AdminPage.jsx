/* Import Libraries */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RunMetrics from '../RunMetrics/RunMetrics';
import { Card, Grid, Paper } from '@material-ui/core';

/* Import Components */
import PieChart from '../../charts/PicChart';

/**
 * Component renders the Admin view that provides Amin and Employee
 * level authLevel users with:
 * - Community demographics breakdown
 * - Community running metrics
 * - Authorization level reassignment (Admin only)
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @returns {jsx} renders the Admin page
 */
function AdminPage({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <AdminPage /> ***');
  }

  const dispatch = useDispatch();

  // GET all of the MRJ community information on page load
  useEffect(() => {
    getCommunityDashboardBreakdowns();
    getCommunityDailyAverages();
    getCommunityWeeklyAverages();
    getCommunityMonthlyAverages();
    getCommunityYearlyAverages();
  }, []);

  // Dynamic variables kept in the Redux store
  const genderBreakdown = useSelector(
    (store) => store.communityDashboard.genderBreakdown
  );
  const stateBreakdown = useSelector(
    (store) => store.communityDashboard.stateBreakdown
  );
  const countryBreakdown = useSelector(
    (store) => store.communityDashboard.countryBreakdown
  );
  const distanceBreakdown = useSelector(
    (store) => store.communityDashboard.distanceBreakdown
  );
  const timeBreakdown = useSelector(
    (store) => store.communityDashboard.timeBreakdown
  );
  const speedBreakdown = useSelector(
    (store) => store.communityDashboard.speedBreakdown
  );
  const paceBreakdown = useSelector(
    (store) => store.communityDashboard.paceBreakdown
  );
  const dailyAverages = useSelector(
    (store) => store.communityMetrics.communityDailyAverages
  );
  const weeklyDistanceAverage = useSelector(
    (store) => store.communityMetrics.communityWeeklyDistanceAverage
  );
  const weeklyTimeAverage = useSelector(
    (store) => store.communityMetrics.communityWeeklyTimeAverage
  );
  const weeklySpeedAverage = useSelector(
    (store) => store.communityMetrics.communityWeeklySpeedAverage
  );
  const weeklyPaceAverage = useSelector(
    (store) => store.communityMetrics.communityWeeklyPaceAverage
  );
  const monthlyDistanceAverage = useSelector(
    (store) => store.communityMetrics.communityMonthlyDistanceAverage
  );
  const monthlyTimeAverage = useSelector(
    (store) => store.communityMetrics.communityMonthlyTimeAverage
  );
  const monthlySpeedAverage = useSelector(
    (store) => store.communityMetrics.communityMonthlySpeedAverage
  );
  const monthlyPaceAverage = useSelector(
    (store) => store.communityMetrics.communityMonthlyPaceAverage
  );
  const yearlyDistanceAverage = useSelector(
    (store) => store.communityMetrics.communityYearlyDistanceAverage
  );
  const yearlyTimeAverage = useSelector(
    (store) => store.communityMetrics.communityYearlyTimeAverage
  );
  const yearlySpeedAverage = useSelector(
    (store) => store.communityMetrics.communityYearlySpeedAverage
  );
  const yearlyPaceAverage = useSelector(
    (store) => store.communityMetrics.communityYearlyPaceAverage
  );

  // Local variables used to pass as props
  let genderLabels = [];
  let genderPercentages = [];
  for (let i = 0; i < genderBreakdown.length; i++) {
    genderLabels.push(genderBreakdown.gender);
    genderPercentages.push(genderBreakdown['?column?']);
  }

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
    Function GETs the community's breakdown own:
    - Age (ranges) (%)
    - Gender (%)
    - State (%)
    - Country (%)
    - Distance (ranges) (%)
    - Time (ranges) (%)
    - Speed (ranges) (%)
    - Pace (ranges) (%)
  */
  const getCommunityDashboardBreakdowns = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <AdminPage /> -> getCommunityDashboardBreakdowns() ***');
    }

    // GET Age Breakdown
    // GET Gender Breakdown
    dispatch({
      type: 'FETCH_GENDER_BREAKDOWN',
    });

    // GET State Breakdown
    dispatch({
      type: 'FETCH_STATE_BREAKDOWN',
    });
    // GET Country Breakdown
    // GET Distance Breakdown
    // GET Time Breakdown
    // GET Speed Breakdown
    // GET Pace Breakdown
  };

  /*
    Function GETs the community's daily averages on
    - Distance
    - Time
    - Speed
    - Pace
  */
  const getCommunityDailyAverages = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <AdminPage /> -> getCommunityDailyAverages() ***');
    }

    // GET daily averages from "activities" table
    dispatch({
      type: 'FETCH_COMMUNITY_DAILY_AVERAGES',
    });
  };

  /*
    Function GETs the community's weekly averages on
    - Distance
    - Time
    - Speed
    - Pace
  */
  const getCommunityWeeklyAverages = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <AdminPage /> -> getCommunityWeeklyAverages() ***');
    }

    // GET weekly averages from "activities" table
    dispatch({
      type: 'FETCH_COMMUNITY_WEEKLY_DISTANCE_AVERAGE',
    });
    dispatch({
      type: 'FETCH_COMMUNITY_WEEKLY_TIME_AVERAGE',
    });
    dispatch({
      type: 'FETCH_COMMUNITY_WEEKLY_SPEED_AVERAGE',
    });
    dispatch({
      type: 'FETCH_COMMUNITY_WEEKLY_PACE_AVERAGE',
    });
  };

  /*
    Function GETs the community's monthly averages on
    - Distance
    - Time
    - Speed
    - Pace
  */
  const getCommunityMonthlyAverages = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <AdminPage /> -> getCommunityMonthlyAverages() ***');
    }

    // GET weekly averages from "activities" table
    dispatch({
      type: 'FETCH_COMMUNITY_MONTHLY_DISTANCE_AVERAGE',
    });
    dispatch({
      type: 'FETCH_COMMUNITY_MONTHLY_TIME_AVERAGE',
    });
    dispatch({
      type: 'FETCH_COMMUNITY_MONTHLY_SPEED_AVERAGE',
    });
    dispatch({
      type: 'FETCH_COMMUNITY_MONTHLY_PACE_AVERAGE',
    });
  };

  /*
    Function GETs the community's yearly averages on
    - Distance
    - Time
    - Speed
    - Pace
  */
  const getCommunityYearlyAverages = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <AdminPage /> -> getCommunityYearlyAverages() ***');
    }

    // GET weekly averages from "activities" table
    dispatch({
      type: 'FETCH_COMMUNITY_YEARLY_DISTANCE_AVERAGE',
    });
    dispatch({
      type: 'FETCH_COMMUNITY_YEARLY_TIME_AVERAGE',
    });
    dispatch({
      type: 'FETCH_COMMUNITY_YEARLY_SPEED_AVERAGE',
    });
    dispatch({
      type: 'FETCH_COMMUNITY_YEARLY_PACE_AVERAGE',
    });
  };

  return (
    <div>
      <h1>Admin Portal</h1>
      <section>
        <Paper>
          <Grid
            container
            justify="space-evenly"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12}>
              <h2>Community Demographics</h2>
            </Grid>

            {/* Age Breakdown */}
            {/* <Grid item xs={4}>
              <Card variant="outlined">
                <PieChart verbose={verbose} title={'Age Breakdown'} values={} />
              </Card>
            </Grid> */}

            {/* Gender Breakdown */}
            <Grid item xs={4}>
              <Card variant="outlined">
                <PieChart
                  verbose={verbose}
                  title={'Gender Breakdown'}
                  values={genderBreakdown}
                />
              </Card>
            </Grid>

            {/* State Breakdown */}
            <Grid item xs={4}>
              <Card variant="outlined">
                <PieChart
                  verbose={verbose}
                  title={'State Breakdown'}
                  values={stateBreakdown}
                />
              </Card>
            </Grid>

            {/* Country Breakdown */}
            <Grid item xs={4}>
              <Card variant="outlined">
                <PieChart
                  verbose={verbose}
                  title={'Country Breakdown'}
                  values={countryBreakdown}
                />
              </Card>
            </Grid>

            {/* Distance Breakdown */}
            <Grid item xs={4}>
              <Card variant="outlined">
                <PieChart
                  verbose={verbose}
                  title={'Distance Breakdown'}
                  values={distanceBreakdown}
                />
              </Card>
            </Grid>

            {/* Time Breakdown */}
            <Grid item xs={4}>
              <Card variant="outlined">
                <PieChart
                  verbose={verbose}
                  title={'Time Breakdown'}
                  values={timeBreakdown}
                />
              </Card>
            </Grid>

            {/* Speed Breakdown */}
            <Grid item xs={4}>
              <Card variant="outlined">
                <PieChart
                  verbose={verbose}
                  title={'Speed Breakdown'}
                  values={speedBreakdown}
                />
              </Card>
            </Grid>

            {/* Pace Breakdown */}
            <Grid item xs={4}>
              <Card variant="outlined">
                <PieChart
                  verbose={verbose}
                  title={'Pace Breakdown'}
                  values={paceBreakdown}
                />
              </Card>
            </Grid>
          </Grid>
        </Paper>
        {/* <h2>Community Demographics</h2> */}

        {/* Age Breakdown */}
        {/* <div>
          <PieChart verbose={verbose} title={'Age Breakdown'} values={}/>
        </div> */}

        {/* Gender Breakdown */}
        {/* <div>
          <PieChart
            verbose={verbose}
            title={'Gender Breakdown'}
            values={genderBreakdown}
          />
        </div> */}

        {/* State Breakdown */}
        {/* <div>
          <PieChart
            verbose={verbose}
            title={'State Breakdown'}
            values={stateBreakdown}
          />
        </div> */}

        {/* Country Breakdown */}
        {/* <div>
          <PieChart
            verbose={verbose}
            title={'Country Breakdown'}
            values={countryBreakdown}
          />
        </div> */}

        {/* Distance Breakdown */}
        {/* <div>
          <PieChart
            verbose={verbose}
            title={'Distance Breakdown'}
            values={distanceBreakdown}
          />
        </div> */}

        {/* Time Breakdown */}
        {/* <div>
          <PieChart
            verbose={verbose}
            title={'Time Breakdown'}
            values={timeBreakdown}
          />
        </div> */}

        {/* Speed Breakdown */}
        {/* <div>
          <PieChart
            verbose={verbose}
            title={'Speed Breakdown'}
            values={speedBreakdown}
          />
        </div> */}

        {/* Pace Breakdown */}
        {/* <div>
          <PieChart
            verbose={verbose}
            title={'Pace Breakdown'}
            values={paceBreakdown}
          />
        </div> */}
      </section>
      <section>
        <h2>Community Metrics</h2>
        <RunMetrics
          verbose={verbose}
          dailyAverages={dailyAverages}
          weeklyAverages={weeklyAverages}
          monthlyAverages={monthlyAverages}
          yearlyAverages={yearlyAverages}
        />
      </section>
      <section></section>
    </div>
  );
}

export default AdminPage;
