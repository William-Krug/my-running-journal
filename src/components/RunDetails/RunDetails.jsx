/* Import Libraries */
import moment from 'moment';
const momentDurationFormatSetup = require('moment-duration-format'); // Needed to easily format milliseconds into hh:mm:ss with Moment.js
import { Typography } from '@material-ui/core';

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
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      {/* <h3>{title}</h3> */}
      {/* <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <h4>Date:</h4>
          <h4>Route:</h4>
          <h4>Distance:</h4>
          <h4>Time:</h4>
          <h4>Speed:</h4>
          <h4>Pace:</h4>
          <h4>Notes:</h4>
        </Grid>
        <Grid item xs={6}>
          <p>{moment(runDetails.date).format('MM/DD/YYYY')}</p>
          <p>{runDetails.route}</p>
          <p>{Number(runDetails.distance).toFixed(2)}</p>
          <p>{moment.duration(runDetails.time, 'milliseconds').format()}</p>
          <p>{runDetails.speed}</p>
          <p>{moment.duration(runDetails.pace, 'milliseconds').format()}</p>
          <p>{runDetails.notes}</p>
        </Grid>
      </Grid> */}
      <div>
        <table>
          <tbody>
            {/* Run Details */}
            <tr>
              <td>Date:</td>
              <td>{moment(runDetails.date).format('MM/DD/YYYY')}</td>
            </tr>
            <tr>
              <td>Route:</td>
              <td>{runDetails.route}</td>
            </tr>
            <tr>
              <td>Distance:</td>
              <td>{Number(runDetails.distance).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Time:</td>
              <td>
                {moment.duration(runDetails.time, 'milliseconds').format()}
              </td>
            </tr>
            <tr>
              <td>Speed (mph):</td>
              <td>{runDetails.speed}</td>
            </tr>
            <tr>
              <td>Pace (min/mile):</td>
              <td>
                {moment.duration(runDetails.pace, 'milliseconds').format()}
              </td>
            </tr>
            <tr>
              <td>Notes:</td>
              <td>{runDetails.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RunDetails;
