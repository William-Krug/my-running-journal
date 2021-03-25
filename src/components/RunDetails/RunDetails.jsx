/* Import Libraries */
import moment from 'moment';
const momentDurationFormatSetup = require('moment-duration-format'); // Needed to easily format milliseconds into hh:mm:ss with Moment.js
import {
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';

/**
 * Component render's a run's details from an object passed in
 * as a property
 *
 * @param {boolean} verbose global variable used for testing and debugging
 * @param {string} title passed in argument that is used to title instance of the component
 * @param {object} runDetails contains all of the pertinent information to display about a specific run
 * @returns {jsx} renders a run's details
 */
function RunDetails({ verbose, title, runDetails }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <RunDetails /> ***');
    console.log('runDetails:', runDetails);
  }

  return (
    <div>
      <Grid container justify="center">
        {/* Page Heading */}
        <Grid item>
          <Typography variant="h5" component="h3" gutterBottom>
            <strong>{title}</strong>
          </Typography>
        </Grid>
      </Grid>

      {/* Display Run Details */}
      <TableContainer>
        <Table>
          {/* Date */}
          <TableRow>
            <TableCell align="right">
              <strong>Date</strong>
            </TableCell>
            <TableCell>
              {moment(runDetails.date).format('MM/DD/YYYY')}
            </TableCell>
          </TableRow>

          {/* Route */}
          <TableRow>
            <TableCell align="right">
              <strong>Route</strong>
            </TableCell>
            <TableCell>{runDetails.route}</TableCell>
          </TableRow>

          {/* Distance */}
          <TableRow>
            <TableCell align="right">
              <strong>Distance</strong>
            </TableCell>
            <TableCell>{Number(runDetails.distance).toFixed(2)}</TableCell>
          </TableRow>

          {/* Time */}
          <TableRow>
            <TableCell align="right">
              <strong>Time</strong>
            </TableCell>
            <TableCell>
              {moment.duration(runDetails.time, 'milliseconds').format()}
            </TableCell>
          </TableRow>

          {/* Speed */}
          <TableRow>
            <TableCell align="right">
              <strong>Speed (MPH)</strong>
            </TableCell>
            <TableCell>{runDetails.speed}</TableCell>
          </TableRow>

          {/* Pace */}
          <TableRow>
            <TableCell align="right">
              <strong>Pace (min/mile)</strong>
            </TableCell>
            <TableCell>
              {moment.duration(runDetails.pace, 'milliseconds').format()}
            </TableCell>
          </TableRow>

          {/* Notes */}
          <TableRow>
            <TableCell align="right">
              <strong>Notes</strong>
            </TableCell>
            <TableCell>{runDetails.notes}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RunDetails;
