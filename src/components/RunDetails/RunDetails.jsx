/* Import Libraries */
import moment from 'moment';

function RunDetails({ verbose, title, runDetails }) {
  // Breadcrumbs for testing and debugging
  if (verbose) {
    console.log('*** in <RunDetails /> ***');
    console.log('runDetails:', runDetails);
    console.log('runDetails.time:', runDetails.time);
    console.log('runDetails.time["hours"]:', runDetails.time['hours']);
    // console.log('runDetails.time.minutes:', runDetails.time.minutes);
    // console.log('runDetails.time.seconds:', runDetails.time.seconds);
    console.log('runDetails.pace:', runDetails.pace);
    // console.log('runDetails.pace.minutes:', runDetails.pace.minutes);
    // console.log('runDetails.pace.seconds:', runDetails.pace.seconds);
  }

  let speed = '';
  let pace = '';

  // console.log('hours' in runDetails.time);
  // console.log(runDetails.time.hasOwnProperty('hours'));
  // console.log(runDetails.time.hours === undefined);
  // console.log('runDetails.time.keys("hours"', runDetails.time.keys('hours'));

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <table>
          <tbody>
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
              <td>{}</td>
            </tr>
            <tr>
              <td>Speed (mph):</td>
              <td>{runDetails.mph}</td>
            </tr>
            <tr>
              <td>Pace (min/mile):</td>
              <td>{}</td>
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
