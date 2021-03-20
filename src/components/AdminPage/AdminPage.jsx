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
  }, []);

  const communityDailyAverages = useSelector(
    (store) => store.communityMetrics.communityDailyAverages
  );

  const getCommunityDailyAverages = () => {
    // Breadcrumbs for testing and debugging
    if (verbose) {
      console.log('*** <AdminPage /> -> getCommunityDailyAverages() ***');
    }

    dispatch({
      type: 'FETCH_COMMUNITY_DAILY_AVERAGES',
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
