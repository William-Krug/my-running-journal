/* Import Libraries */
import moment from 'moment';
const momentDurationFormatSetup = require('moment-duration-format'); // Needed to easily format milliseconds into hh:mm:ss with Moment.js
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

/**
 * Component displays a table breaking down the Daily, Weekly, Monthly and Yearly
 * averages for Distance, Time, Speed, and Pace
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @param {array} dailyAverages contains the daily breakdowns on distance, time, speed, and pace
 * @param {array} weeklyAverages contains the weekly breakdowns on distance, time, speed, and pace
 * @param {array} monthlyAverages contains the monthly breakdowns on distance, time, speed, and pace
 * @param {array} yearlyAverages contains the yearly breakdowns on distance, time, speed, and pace
 * @returns {jsx} renders tabular breakdown on averages
 */
function RunMetrics({
  verbose,
  dailyAverages,
  weeklyAverages,
  monthlyAverages,
  yearlyAverages,
}) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <RunMetrics /> ***');
    console.log('dailyAverages:', dailyAverages);
    console.log('weeklyAverages:', weeklyAverages);
    console.log('monthlyAverages:', monthlyAverages);
    console.log('yearlyAverages:', yearlyAverages);
  }

  return (
    <div>
      <Grid container justify="center">
        <Grid container justify="center">
          {/* Table Heading */}
          <Grid item>
            <Typography variant="h5" component="h3">
              <strong>Averages</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <TableContainer>
            <Table>
              {/* Heading Row */}
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center">
                    <strong>Distance</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Time</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Speed (MPH)</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Pace (min/mile)</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Daily Values */}
                <TableRow>
                  <TableCell align="right">
                    <strong>Daily</strong>
                  </TableCell>
                  <TableCell align="center">
                    {Number(dailyAverages[0].averageDistance).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    {moment
                      .duration(dailyAverages[0].averageTime, 'milliseconds')
                      .format()}
                  </TableCell>
                  <TableCell align="center">
                    {Number(dailyAverages[0].averageSpeed).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    {moment
                      .duration(dailyAverages[0].averagePace, 'milliseconds')
                      .format()}
                  </TableCell>
                </TableRow>

                {/* Weekly Values */}
                <TableRow>
                  <TableCell align="right">
                    <strong>Weekly</strong>
                  </TableCell>
                  <TableCell align="center">
                    {Number(weeklyAverages[0].weeklyDistanceAverage).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    {moment
                      .duration(
                        weeklyAverages[0].weeklyTimeAverage,
                        'milliseconds'
                      )
                      .format()}
                  </TableCell>
                  <TableCell align="center">
                    {Number(weeklyAverages[0].weeklySpeedAverage).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    {moment
                      .duration(
                        weeklyAverages[0].weeklyPaceAverage,
                        'milliseconds'
                      )
                      .format()}
                  </TableCell>
                </TableRow>

                {/* Monthly Values */}
                <TableRow>
                  <TableCell align="right">
                    <strong>Monthly</strong>
                  </TableCell>
                  <TableCell align="center">
                    {Number(monthlyAverages[0].monthlyDistanceAverage).toFixed(
                      2
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {moment
                      .duration(
                        monthlyAverages[0].monthlyTimeAverage,
                        'milliseconds'
                      )
                      .format()}
                  </TableCell>
                  <TableCell align="center">
                    {Number(monthlyAverages[0].monthlySpeedAverage).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    {moment
                      .duration(
                        monthlyAverages[0].monthlyPaceAverage,
                        'milliseconds'
                      )
                      .format()}
                  </TableCell>
                </TableRow>

                {/* Yearly Values */}
                <TableRow>
                  <TableCell align="right">
                    <strong>Yearly</strong>
                  </TableCell>
                  <TableCell align="center">
                    {Number(yearlyAverages[0].yearlyDistanceAverage).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    {moment
                      .duration(
                        yearlyAverages[0].yearlyTimeAverage,
                        'milliseconds'
                      )
                      .format()}
                  </TableCell>
                  <TableCell align="center">
                    {Number(yearlyAverages[0].yearlySpeedAverage).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    {moment
                      .duration(
                        yearlyAverages[0].yearlyPaceAverage,
                        'milliseconds'
                      )
                      .format()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default RunMetrics;
