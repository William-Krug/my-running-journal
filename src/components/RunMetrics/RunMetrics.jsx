/* Import Libraries */
import moment from 'moment';
const momentDurationFormatSetup = require('moment-duration-format'); // Needed to easily format milliseconds into hh:mm:ss with Moment.js

function RunMetrics({ verbose, dailyAverages }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <RunMetrics /> ***');
    console.log('dailyAverages:', dailyAverages);
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
          <td>{Number(dailyAverages[0].averageDistance).toFixed(2)}</td>
          <td>
            {moment
              .duration(dailyAverages[0].averageTime, 'milliseconds')
              .format()}
          </td>
          <td>{Number(dailyAverages[0].averageSpeed).toFixed(2)}</td>
          <td>
            {moment
              .duration(dailyAverages[0].averagePace, 'milliseconds')
              .format()}
          </td>
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
