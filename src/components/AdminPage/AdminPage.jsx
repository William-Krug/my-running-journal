/* Import Libraries */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RunMetrics from '../RunMetrics/RunMetrics';

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
    getCommunityDailyAverages();
    getCommunityWeeklyAverages();
  }, []);

  // Dynamic variables kept in the Redux store
  const communityDailyAverages = useSelector(
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
  // const monthlyDistanceAverage = useSelector(
  //   (store) => store.activities.userMonthlyDistanceAverage
  // );
  // const monthlyTimeAverage = useSelector(
  //   (store) => store.activities.userMonthlyTimeAverage
  // );
  // const monthlySpeedAverage = useSelector(
  //   (store) => store.activities.userMonthlySpeedAverage
  // );
  // const monthlyPaceAverage = useSelector(
  //   (store) => store.activities.userMonthlyPaceAverage
  // );
  // const yearlyDistanceAverage = useSelector(
  //   (store) => store.activities.userYearlyDistanceAverage
  // );
  // const yearlyTimeAverage = useSelector(
  //   (store) => store.activities.userYearlyTimeAverage
  // );
  // const yearlySpeedAverage = useSelector(
  //   (store) => store.activities.userYearlySpeedAverage
  // );
  // const yearlyPaceAverage = useSelector(
  //   (store) => store.activities.userYearlyPaceAverage
  // );

  // Local variables used to pass as props
  const weeklyAverages = [
    {
      weeklyDistanceAverage: weeklyDistanceAverage[0].avg,
      weeklyTimeAverage: weeklyTimeAverage[0].avg,
      weeklySpeedAverage: weeklySpeedAverage[0].avg,
      weeklyPaceAverage: weeklyPaceAverage[0].avg,
    },
  ];
  // const monthlyAverages = [
  //   {
  //     monthlyDistanceAverage: monthlyDistanceAverage[0].avg,
  //     monthlyTimeAverage: monthlyTimeAverage[0].avg,
  //     monthlySpeedAverage: monthlySpeedAverage[0].avg,
  //     monthlyPaceAverage: monthlyPaceAverage[0].avg,
  //   },
  // ];
  // const yearlyAverages = [
  //   {
  //     yearlyDistanceAverage: yearlyDistanceAverage[0].avg,
  //     yearlyTimeAverage: yearlyTimeAverage[0].avg,
  //     yearlySpeedAverage: yearlySpeedAverage[0].avg,
  //     yearlyPaceAverage: yearlyPaceAverage[0].avg,
  //   },

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

  return (
    <div>
      <h1>Admin Portal</h1>
      <section>
        <h2>Community Demographics</h2>
      </section>
      <section>
        <h2>Community Metrics</h2>
        {/* <RunMetrics
            verbose={verbose}
            dailyAverages={communityDailyAverages}
            weeklyAverages={weeklyAverages}
            monthlyAverages={monthlyAverages}
            yearlyAverages={yearlyAverages}
          /> */}
      </section>
      <section></section>
    </div>
  );
}

export default AdminPage;
