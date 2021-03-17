/* Import Libraries */
import moment from 'moment';
const momentDurationFormatSetup = require('moment-duration-format'); // Needed to easily format milliseconds into hh:mm:ss with Moment.js

function RunMetrics({ verbose }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <RunMetrics /> ***');
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Mileage</th>
          <th>Time</th>
          <th>Speed</th>
          <th>Pace</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Daily</th>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
        <tr>
          <th>Weekly</th>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
        <tr>
          <th>Monthly</th>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
        <tr>
          <th>Yearly</th>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default RunMetrics;
