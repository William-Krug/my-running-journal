/* Import Libraries */
import moment from 'moment';
const momentDurationFormatSetup = require('moment-duration-format'); // Needed to easily format milliseconds into hh:mm:ss with Moment.js

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
      <h3>{title}</h3>
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
